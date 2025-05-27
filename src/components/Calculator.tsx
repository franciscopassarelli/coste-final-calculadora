
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CalculatorSection from './CalculatorSection';
import CostSummary from './CostSummary';
import {
  CostInput,
  calculateTotalCost,
  calculateProfitMargin,
  getMonotributoCategories
} from '@/utils/calculations';
import { Button } from '@/components/ui/button';

const DEFAULT_PROFIT_MARGIN = 30; // 30% default profit margin


const provincialRates: { [key: string]: number } = {
  "Ciudad Autónoma de Buenos Aires (CABA)": 2.0,
  "Buenos Aires": 2.0,
  "Catamarca": 0,
  "Chaco": 5.5,
  "Chubut": 0,
  "Corrientes": 0,
  "Córdoba": 3,
  "Entre Ríos": 0,
  "Formosa": 0,
  "Jujuy": 0,
  "La Pampa": 1,
  "La Rioja": 0,
  "Mendoza": 0,
  "Misiones": 2.5,
  "Neuquén": 4.0,
  "Río Negro": 5.0,
  "San Juan": 0,
  "San Luis": 0,
  "Salta": 3.6,
  "Santa Cruz": 0,
  "Santa Fe": 4.5,
  "Santiago del Estero": 0,
  "Tierra del Fuego": 3.0,
  "Tucumán": 0,
};


const Calculator: React.FC = () => {
  const [basePrice, setBasePrice] = useState<number>(0);
  const [costs, setCosts] = useState<CostInput>({
    basePrice: 0,
    iva: {
      enabled: true,
      rate: 21,
    },
    provincialTaxes: {
      enabled: false,
      rate: 4,
    },
    shipping: {
      enabled: false,
      cost: 0,
    },
    monotributo: {
      enabled: false,
      category: 'A',
      rate: 5,
    },
    storeExpenses: {
      enabled: false,
      salesCommission: 5,
      monthlyFee: 0,
      serviceFee: 0,
    },
    paymentProcessing: {
      enabled: false,
      posnetFee: 3,
      bankCardFee: 2,
      withdrawalFee: 0,
    },
  });
  
  const [totalCost, setTotalCost] = useState<number>(0);
  const [desiredMargin, setDesiredMargin] = useState<number>(DEFAULT_PROFIT_MARGIN);
  const [sellingPrice, setSellingPrice] = useState<number>(0);
  const [profitMargin, setProfitMargin] = useState<number>(0);
  
  // Update calculations when inputs change
  useEffect(() => {
    const newBasePrice = Number(basePrice) || 0;
    const updatedCosts = { ...costs, basePrice: newBasePrice };
    setCosts(updatedCosts);
    
    const newTotalCost = calculateTotalCost(updatedCosts);
    setTotalCost(newTotalCost);
    
    // Calculate selling price based on desired margin
    const newSellingPrice = newTotalCost * (1 + desiredMargin / 100);
    setSellingPrice(newSellingPrice);
    
    // Calculate actual profit margin
    const newProfitMargin = calculateProfitMargin(newTotalCost, newSellingPrice);
    setProfitMargin(newProfitMargin);
  }, [basePrice, costs, desiredMargin]);
  
  const handleBasePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/[^0-9.]/g, '');
    setBasePrice(parseFloat(value) || 0);
  };
  
  const handleSellingPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSellingPrice = parseFloat(event.target.value.replace(/[^0-9.]/g, '')) || 0;
    setSellingPrice(newSellingPrice);
    
    // Recalculate margin based on new selling price
    const newMargin = calculateProfitMargin(totalCost, newSellingPrice);
    setDesiredMargin(newMargin);
    setProfitMargin(newMargin);
  };
  
  const toggleSection = (section: keyof CostInput, enabled: boolean) => {
    setCosts((prevCosts) => ({
      ...prevCosts,
      [section]: {
        ...prevCosts[section as keyof typeof prevCosts],
        enabled,
      },
    }));
  };
  
  const updateSectionValue = (section: keyof CostInput, field: string, value: number | string) => {
    setCosts((prevCosts) => ({
      ...prevCosts,
      [section]: {
        ...prevCosts[section as keyof typeof prevCosts],
        [field]: value,
      },
    }));
  };
  
  const handleReset = () => {
    setBasePrice(0);
    setCosts({
      basePrice: 0,
      iva: {
        enabled: true,
        rate: 21,
      },
      provincialTaxes: {
        enabled: false,
        rate: 4,
      },
      shipping: {
        enabled: false,
        cost: 0,
      },
      monotributo: {
        enabled: false,
        category: 'A',
        rate: 5,
      },
      storeExpenses: {
        enabled: false,
        salesCommission: 5,
        monthlyFee: 0,
        serviceFee: 0,
      },
      paymentProcessing: {
        enabled: false,
        posnetFee: 3,
        bankCardFee: 2,
        withdrawalFee: 0,
      },
    });
    setDesiredMargin(DEFAULT_PROFIT_MARGIN);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      <div className="md:col-span-3 space-y-6">
        <div className="calculator-section">
          <h3 className="section-title mb-4">Precio Base del Producto</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="basePrice" className="calculator-label block mb-2">
                Precio de costo (sin impuestos)
              </label>
              <Input
                id="basePrice"
                type="text"
                className="calculator-input"
                placeholder="0.00"
                value={basePrice || ''}
                onChange={handleBasePriceChange}
              />
<div>
  <label className="calculator-label block mb-2">Provincia</label>
  <Select
    onValueChange={(provincia) => {
      const porcentaje = provincialRates[provincia] || 0;
      setCosts((prev) => ({
        ...prev,
        provincialTaxes: {
          ...prev.provincialTaxes,
          enabled: true,
          rate: porcentaje,
        },
      }));
    }}
  >
    <SelectTrigger className="w-full">
      <SelectValue placeholder="Seleccioná una provincia" />
    </SelectTrigger>
    <SelectContent>
      {Object.entries(provincialRates).map(([provincia, porcentaje]) => (
        <SelectItem key={provincia} value={provincia}>
          {provincia} ({porcentaje}%)
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
</div>

            </div>
          </div>
        </div>
        
        <CalculatorSection
          title="IVA"
          description="Impuesto al Valor Agregado"
          enabled={costs.iva.enabled}
          onToggle={(enabled) => toggleSection('iva', enabled)}
        >
          <div className="space-y-4">
            <div>
              <label className="calculator-label block mb-2">Porcentaje de IVA (%)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[costs.iva.rate]}
                  min={0}
                  max={27}
                  step={0.5}
                  onValueChange={(value) => updateSectionValue('iva', 'rate', value[0])}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-10 text-right">{costs.iva.rate}%</span>
              </div>
            </div>
          </div>
        </CalculatorSection>
        
        <CalculatorSection
          title="Impuestos Provinciales"
          description="Impuestos provinciales y municipales"
          enabled={costs.provincialTaxes.enabled}
          onToggle={(enabled) => toggleSection('provincialTaxes', enabled)}
        >
          <div className="space-y-4">
            <div>
              <label className="calculator-label block mb-2">Porcentaje de impuestos provinciales (%)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[costs.provincialTaxes.rate]}
                  min={0}
                  max={10}
                  step={0.1}
                  onValueChange={(value) => updateSectionValue('provincialTaxes', 'rate', value[0])}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-10 text-right">{costs.provincialTaxes.rate}%</span>
              </div>
            </div>
          </div>
        </CalculatorSection>
        
        <CalculatorSection
          title="Costo de Envío"
          description="Gastos relacionados con el envío del producto"
          enabled={costs.shipping.enabled}
          onToggle={(enabled) => toggleSection('shipping', enabled)}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="shippingCost" className="calculator-label block mb-2">
                Costo de envío
              </label>
              <Input
                id="shippingCost"
                type="number"
                className="calculator-input"
                placeholder="0.00"
                value={costs.shipping.cost || ''}
                onChange={(e) => updateSectionValue('shipping', 'cost', parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
        </CalculatorSection>
        
        <CalculatorSection
          title="Monotributo"
          description="Costos relacionados con tu categoría de monotributo"
          enabled={costs.monotributo.enabled}
          onToggle={(enabled) => toggleSection('monotributo', enabled)}
        >
          <div className="space-y-4">
            <div>
              <label className="calculator-label block mb-2">Categoría de Monotributo</label>
              <Select
                value={costs.monotributo.category}
                onValueChange={(value) => {
                  const category = getMonotributoCategories().find(cat => cat.value === value);
                  if (category) {
                    setCosts(prev => ({
                      ...prev,
                      monotributo: {
                        ...prev.monotributo,
                        category: value,
                        rate: category.rate
                      }
                    }));
                  }
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  {getMonotributoCategories().map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label} ({category.rate}%)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CalculatorSection>
        
        <CalculatorSection
          title="Gastos de Tienda"
          description="Comisiones de venta, costos mensuales y servicios"
          enabled={costs.storeExpenses.enabled}
          onToggle={(enabled) => toggleSection('storeExpenses', enabled)}
        >
          <div className="space-y-4">
            <div>
              <label className="calculator-label block mb-2">Comisión por Venta (%)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[costs.storeExpenses.salesCommission]}
                  min={0}
                  max={20}
                  step={0.5}
                  onValueChange={(value) => updateSectionValue('storeExpenses', 'salesCommission', value[0])}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-10 text-right">{costs.storeExpenses.salesCommission}%</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="monthlyFee" className="calculator-label block mb-2">
                Costos Mensuales
              </label>
              <Input
                id="monthlyFee"
                type="number"
                className="calculator-input"
                placeholder="0.00"
                value={costs.storeExpenses.monthlyFee || ''}
                onChange={(e) => updateSectionValue('storeExpenses', 'monthlyFee', parseFloat(e.target.value) || 0)}
              />
            </div>
            
            <div>
              <label htmlFor="serviceFee" className="calculator-label block mb-2">
                Costo de Servicio
              </label>
              <Input
                id="serviceFee"
                type="number"
                className="calculator-input"
                placeholder="0.00"
                value={costs.storeExpenses.serviceFee || ''}
                onChange={(e) => updateSectionValue('storeExpenses', 'serviceFee', parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
        </CalculatorSection>
        
        <CalculatorSection
          title="Procesamiento de Pagos"
          description="Costos de posnet, tarjetas bancarias y extracciones"
          enabled={costs.paymentProcessing.enabled}
          onToggle={(enabled) => toggleSection('paymentProcessing', enabled)}
        >
          <div className="space-y-4">
            <div>
              <label className="calculator-label block mb-2">Comisión Posnet (%)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[costs.paymentProcessing.posnetFee]}
                  min={0}
                  max={10}
                  step={0.1}
                  onValueChange={(value) => updateSectionValue('paymentProcessing', 'posnetFee', value[0])}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-10 text-right">{costs.paymentProcessing.posnetFee}%</span>
              </div>
            </div>
            
            <div>
              <label className="calculator-label block mb-2">Comisión Tarjetas Bancarias (%)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[costs.paymentProcessing.bankCardFee]}
                  min={0}
                  max={10}
                  step={0.1}
                  onValueChange={(value) => updateSectionValue('paymentProcessing', 'bankCardFee', value[0])}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-10 text-right">{costs.paymentProcessing.bankCardFee}%</span>
              </div>
            </div>
            
            <div>
              <label htmlFor="withdrawalFee" className="calculator-label block mb-2">
                Costo de Extracción
              </label>
              <Input
                id="withdrawalFee"
                type="number"
                className="calculator-input"
                placeholder="0.00"
                value={costs.paymentProcessing.withdrawalFee || ''}
                onChange={(e) => updateSectionValue('paymentProcessing', 'withdrawalFee', parseFloat(e.target.value) || 0)}
              />
            </div>
          </div>
        </CalculatorSection>
        
        <div className="mt-6 text-right">
          <Button variant="outline" onClick={handleReset} className="mr-4">
            Reiniciar
          </Button>
        </div>
      </div>
      
      <div className="md:col-span-2 space-y-6">
        <div className="calculator-section sticky top-6">
          <h3 className="section-title mb-4">Precio de Venta</h3>
          
          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="sellingPrice" className="calculator-label block mb-2">
                Precio de Venta Sugerido
              </label>
              <Input
                id="sellingPrice"
                type="text"
                className="calculator-input"
                placeholder="0.00"
                value={sellingPrice.toFixed(2) || ''}
                onChange={handleSellingPriceChange}
              />
            </div>
            
            <div>
              <label className="calculator-label block mb-2">Margen de Ganancia Deseado (%)</label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[desiredMargin]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setDesiredMargin(value[0])}
                  className="flex-1"
                />
                <span className="text-sm font-medium w-10 text-right">{desiredMargin.toFixed(0)}%</span>
              </div>
            </div>
          </div>
          
          {basePrice > 0 && (
            <CostSummary
              basePrice={basePrice}
              totalCost={totalCost}
              costBreakdown={costs}
              sellingPrice={sellingPrice}
              profitMargin={profitMargin}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
