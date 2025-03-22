
import React from 'react';
import { formatCurrency } from '@/utils/calculations';
import type { CostInput } from '@/utils/calculations';

interface CostSummaryProps {
  basePrice: number;
  totalCost: number;
  costBreakdown: CostInput;
  sellingPrice: number;
  profitMargin: number;
}

const CostSummary: React.FC<CostSummaryProps> = ({
  basePrice,
  totalCost,
  costBreakdown,
  sellingPrice,
  profitMargin
}) => {
  return (
    <div className="calculator-section animate-scale-in">
      <h3 className="section-title mb-4">Resumen de Costos</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="calculator-label">Precio Base</div>
            <div className="calculator-result">{formatCurrency(basePrice)}</div>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="calculator-label">Costo Final</div>
            <div className="calculator-result text-primary">{formatCurrency(totalCost)}</div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-base font-medium mb-4">Desglose de Costos</h4>
          
          <div className="space-y-3">
            {costBreakdown.iva.enabled && (
              <div className="flex justify-between items-center">
                <span className="text-sm">IVA ({costBreakdown.iva.rate}%)</span>
                <span className="font-medium">{formatCurrency(basePrice * (costBreakdown.iva.rate / 100))}</span>
              </div>
            )}
            
            {costBreakdown.provincialTaxes.enabled && (
              <div className="flex justify-between items-center">
                <span className="text-sm">Impuestos Provinciales ({costBreakdown.provincialTaxes.rate}%)</span>
                <span className="font-medium">{formatCurrency(basePrice * (costBreakdown.provincialTaxes.rate / 100))}</span>
              </div>
            )}
            
            {costBreakdown.shipping.enabled && (
              <div className="flex justify-between items-center">
                <span className="text-sm">Costo de Envío</span>
                <span className="font-medium">{formatCurrency(costBreakdown.shipping.cost)}</span>
              </div>
            )}
            
            {costBreakdown.monotributo.enabled && (
              <div className="flex justify-between items-center">
                <span className="text-sm">Monotributo {costBreakdown.monotributo.category} ({costBreakdown.monotributo.rate}%)</span>
                <span className="font-medium">{formatCurrency(basePrice * (costBreakdown.monotributo.rate / 100))}</span>
              </div>
            )}
            
            {costBreakdown.storeExpenses.enabled && (
              <div className="flex justify-between items-center">
                <span className="text-sm">Gastos de Tienda</span>
                <span className="font-medium">{formatCurrency(
                  (basePrice * (costBreakdown.storeExpenses.salesCommission / 100)) + 
                  (costBreakdown.storeExpenses.monthlyFee / 100) + 
                  costBreakdown.storeExpenses.serviceFee
                )}</span>
              </div>
            )}
            
            {costBreakdown.paymentProcessing.enabled && (
              <div className="flex justify-between items-center">
                <span className="text-sm">Procesamiento de Pagos</span>
                <span className="font-medium">{formatCurrency(
                  (basePrice * (costBreakdown.paymentProcessing.posnetFee / 100)) +
                  (basePrice * (costBreakdown.paymentProcessing.bankCardFee / 100)) +
                  costBreakdown.paymentProcessing.withdrawalFee
                )}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <h4 className="text-base font-medium mb-4">Análisis de Rentabilidad</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="calculator-label">Precio de Venta Sugerido</div>
              <div className="calculator-result">{formatCurrency(sellingPrice)}</div>
            </div>
            
            <div className={`rounded-lg p-4 ${
              profitMargin >= 20 ? 'bg-green-50' : profitMargin >= 10 ? 'bg-amber-50' : 'bg-red-50'
            }`}>
              <div className="calculator-label">Margen de Ganancia</div>
              <div className={`calculator-result ${
                profitMargin >= 20 ? 'text-green-600' : profitMargin >= 10 ? 'text-amber-600' : 'text-red-600'
              }`}>
                {profitMargin.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostSummary;
