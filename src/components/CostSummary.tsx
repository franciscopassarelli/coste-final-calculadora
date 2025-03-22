
import React from 'react';
import { formatCurrency } from '@/utils/calculations';
import type { CostInput } from '@/utils/calculations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
    <div className="animate-scale-in">
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 pb-3">
          <CardTitle className="text-xl font-semibold">Resumen de Costos</CardTitle>
        </CardHeader>
        <CardContent className="pt-5">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <div className="calculator-label">Precio Base</div>
                <div className="calculator-result truncate">{formatCurrency(basePrice)}</div>
              </div>
              
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <div className="calculator-label">Costo Final</div>
                <div className="calculator-result text-primary truncate">{formatCurrency(totalCost)}</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-base font-medium mb-4">Desglose de Costos</h4>
              
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2 styled-scrollbar">
                {costBreakdown.iva.enabled && (
                  <div className="flex justify-between items-center rounded-md p-2 hover:bg-secondary/30 transition-colors">
                    <span className="text-sm font-medium">IVA ({costBreakdown.iva.rate}%)</span>
                    <span className="font-medium truncate ml-2">{formatCurrency(basePrice * (costBreakdown.iva.rate / 100))}</span>
                  </div>
                )}
                
                {costBreakdown.provincialTaxes.enabled && (
                  <div className="flex justify-between items-center rounded-md p-2 hover:bg-secondary/30 transition-colors">
                    <span className="text-sm font-medium">Impuestos Provinciales ({costBreakdown.provincialTaxes.rate}%)</span>
                    <span className="font-medium truncate ml-2">{formatCurrency(basePrice * (costBreakdown.provincialTaxes.rate / 100))}</span>
                  </div>
                )}
                
                {costBreakdown.shipping.enabled && (
                  <div className="flex justify-between items-center rounded-md p-2 hover:bg-secondary/30 transition-colors">
                    <span className="text-sm font-medium">Costo de Envío</span>
                    <span className="font-medium truncate ml-2">{formatCurrency(costBreakdown.shipping.cost)}</span>
                  </div>
                )}
                
                {costBreakdown.monotributo.enabled && (
                  <div className="flex justify-between items-center rounded-md p-2 hover:bg-secondary/30 transition-colors">
                    <span className="text-sm font-medium">Monotributo {costBreakdown.monotributo.category} ({costBreakdown.monotributo.rate}%)</span>
                    <span className="font-medium truncate ml-2">{formatCurrency(basePrice * (costBreakdown.monotributo.rate / 100))}</span>
                  </div>
                )}
                
                {costBreakdown.storeExpenses.enabled && (
                  <div className="flex justify-between items-center rounded-md p-2 hover:bg-secondary/30 transition-colors">
                    <span className="text-sm font-medium">Gastos de Tienda</span>
                    <span className="font-medium truncate ml-2">{formatCurrency(
                      (basePrice * (costBreakdown.storeExpenses.salesCommission / 100)) + 
                      (costBreakdown.storeExpenses.monthlyFee / 100) + 
                      costBreakdown.storeExpenses.serviceFee
                    )}</span>
                  </div>
                )}
                
                {costBreakdown.paymentProcessing.enabled && (
                  <div className="flex justify-between items-center rounded-md p-2 hover:bg-secondary/30 transition-colors">
                    <span className="text-sm font-medium">Procesamiento de Pagos</span>
                    <span className="font-medium truncate ml-2">{formatCurrency(
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
                <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                  <div className="calculator-label">Precio de Venta Sugerido</div>
                  <div className="calculator-result truncate">{formatCurrency(sellingPrice)}</div>
                </div>
                
                <div className={`rounded-lg p-4 border ${
                  profitMargin >= 20 ? 'bg-green-50 border-green-200' : 
                  profitMargin >= 10 ? 'bg-amber-50 border-amber-200' : 
                  'bg-red-50 border-red-200'
                }`}>
                  <div className="calculator-label">Margen de Ganancia</div>
                  <div className={`calculator-result truncate ${
                    profitMargin >= 20 ? 'text-green-600' : 
                    profitMargin >= 10 ? 'text-amber-600' : 
                    'text-red-600'
                  }`}>
                    {profitMargin.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CostSummary;
