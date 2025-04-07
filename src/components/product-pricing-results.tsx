"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductPricingResultsProps {
  productCost?: number
  selectedProvince?: string
  selectedCategory?: string
  grossSellingPrice?: number
  profitMargin?: number
  activeTab?: string
  monotributoCategory?: string
}

export default function ProductPricingResults({
  productCost = 0,
  selectedProvince = "Buenos Aires",
  selectedCategory = "Buenos Aires",
  grossSellingPrice = 0,
  profitMargin = 30,
  activeTab = "responsable",
  monotributoCategory = "A",
}: ProductPricingResultsProps) {
  const [paymentService, setPaymentService] = useState("payway")
  const [taxesEnabled, setTaxesEnabled] = useState(false)
  const [compareProvince, setCompareProvince] = useState("")
  const [netSellingPrice, setNetSellingPrice] = useState(0)
  const [finalProfitPercentage, setFinalProfitPercentage] = useState(0)
  const [compareNetPrice, setCompareNetPrice] = useState(0)

  // Calculate net selling price based on inputs
  useEffect(() => {
    // Simple calculation logic - in a real app this would be more complex
    let netPrice = grossSellingPrice

    // Apply payment service fee (assuming 3% for PayWay)
    if (paymentService === "payway") {
      netPrice = netPrice * 0.97 // 3% fee
    }

    // Apply taxes if enabled (assuming 21% VAT for Responsable Inscripto)
    if (taxesEnabled) {
      if (activeTab === "responsable") {
        netPrice = netPrice / 1.21 // Remove 21% VAT
      } else if (activeTab === "monotributo") {
        // For monotributo, add the monthly fee divided by 30 days
        const monotributoFees = {
          A: 6000,
          B: 11000,
          C: 15000,
          D: 24000,
          E: 35000,
          F: 48000,
          G: 65000,
          H: 90000,
        }

        const dailyFee = (monotributoFees[monotributoCategory as keyof typeof monotributoFees] || 6000) / 30
        netPrice = netPrice - dailyFee
      }
    }

    setNetSellingPrice(netPrice)

    // Calculate final profit percentage
    if (productCost > 0) {
      const profit = netPrice - productCost
      setFinalProfitPercentage(Math.round((profit / productCost) * 100))
    } else {
      setFinalProfitPercentage(0)
    }

    // Set comparison price (simplified)
    setCompareNetPrice(netPrice * 0.95) // Just an example - would vary by province
  }, [grossSellingPrice, paymentService, taxesEnabled, activeTab, productCost, monotributoCategory])

  return (
    <div className="max-w-xl mx-auto">
     
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Tabs */}
        <div className="flex mb-8">
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-full ${
              activeTab === "responsable" ? "bg-blue-100 text-blue-500" : "text-gray-500"
            }`}
          >
            Responsable Inscripto
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium rounded-full ${
              activeTab === "monotributo" ? "bg-blue-100 text-blue-500" : "text-gray-500"
            }`}
          >
            Monotributo
          </button>
        </div>

        {/* Results */}
        <div className="space-y-3">
          {/* Gross Selling Price */}
          <div className="calculator-section space-y-6">
          <div className="space-y-1">
            <h3 className="font-medium">Precio de venta bruto</h3>
            <p className="text-sm text-gray-500">Tu precio con los datos de arriba</p>
            <div className="h-10 flex items-center">${grossSellingPrice.toFixed(2)}</div>
          </div>
          </div>

          {/* Payment Service & Taxes (side by side) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
            <div className="calculator-section space-y-2">
              <h3 className="font-medium">Servicio de pagos</h3>
              <p className="text-sm text-gray-500">Agrega un servicio de pago</p>
              <Select value={paymentService} onValueChange={setPaymentService}>
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="PayWay" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payway">PayWay</SelectItem>
                  <SelectItem value="mercadopago">MercadoPago</SelectItem>
                  <SelectItem value="paypal">PayPal</SelectItem>
                </SelectContent>
              </Select>
            </div>
            </div>

            <div className="space-y-1">
            <div className="calculator-section">
              <h3 className="font-medium">Impuestos</h3>
              <p className="text-sm text-gray-500">
                {activeTab === "responsable"
                  ? "Agrega impuestos según tu situación fiscal (solo para ventas)"
                  : "Incluir costo diario de monotributo"}
              </p>
              <div className="h-10 flex items-center justify-end">
                <Checkbox
                  id="taxes"
                  checked={taxesEnabled}
                  onCheckedChange={(checked) => setTaxesEnabled(checked === true)}
                />
              </div>
              </div>
            </div>
          </div>

          {/* Net Selling Price */}
          <div className="space-y-1">
          <div className="calculator-section space-y-2">
            <h3 className="font-medium">Precio de venta neto</h3>
            <p className="text-sm text-gray-500">Lo que te queda en el bolsillo después de todos los descuentos</p>
            <div className="h-10 flex items-center font-medium">${netSellingPrice.toFixed(2)}</div>
          </div>
          </div>

          {/* Profit Percentage */}
          <div className="text-center py-4">
          <div className="calculator-section space-y-4">
            <p className="text-sm mb-2">Tu porcentaje de ganancia por venta final es:</p>
            <p className="text-2xl font-bold">{finalProfitPercentage}%</p>
          </div>
          </div>

          {/* Compare Prices */}
          <div className="space-y-1">
          <div className="calculator-section space-y-4">
            <h3 className="font-medium text-center">Compara tu precio entre provincias</h3>

            <div className="space-y-1">
              <p className="text-sm">Precio de venta neto en:</p>
              <Select value={compareProvince} onValueChange={setCompareProvince}>
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="Seleccionar provincia" />
                </SelectTrigger>
                <SelectContent>
  <SelectItem value="caba">Ciudad Autónoma de Buenos Aires (CABA)</SelectItem>
  <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
  <SelectItem value="catamarca">Catamarca</SelectItem>
  <SelectItem value="chaco">Chaco</SelectItem>
  <SelectItem value="chubut">Chubut</SelectItem>
  <SelectItem value="cordoba">Córdoba</SelectItem>
  <SelectItem value="corrientes">Corrientes</SelectItem>
  <SelectItem value="entre-rios">Entre Ríos</SelectItem>
  <SelectItem value="formosa">Formosa</SelectItem>
  <SelectItem value="jujuy">Jujuy</SelectItem>
  <SelectItem value="la-pampa">La Pampa</SelectItem>
  <SelectItem value="la-rioja">La Rioja</SelectItem>
  <SelectItem value="mendoza">Mendoza</SelectItem>
  <SelectItem value="misiones">Misiones</SelectItem>
  <SelectItem value="neuquen">Neuquén</SelectItem>
  <SelectItem value="rio-negro">Río Negro</SelectItem>
  <SelectItem value="salta">Salta</SelectItem>
  <SelectItem value="san-juan">San Juan</SelectItem>
  <SelectItem value="san-luis">San Luis</SelectItem>
  <SelectItem value="santa-cruz">Santa Cruz</SelectItem>
  <SelectItem value="santa-fe">Santa Fe</SelectItem>
  <SelectItem value="santiago-del-estero">Santiago del Estero</SelectItem>
  <SelectItem value="tierra-del-fuego">Tierra del Fuego</SelectItem>
  <SelectItem value="tucuman">Tucumán</SelectItem>
</SelectContent>

              </Select>
            </div>

            <div className="text-center">
              <p className="text-sm mb-1">El precio de venta neto sería de:</p>
              <p className="text-2xl font-medium text-gray-500">${compareNetPrice.toFixed(2)}</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}