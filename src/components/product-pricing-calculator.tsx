"use client"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductPricingCalculatorProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  productCost: number
  setProductCost: (cost: number) => void
  selectedProvince: string
  setSelectedProvince: (province: string) => void
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  grossSellingPrice: number
  profitMargin: number
  setProfitMargin: (margin: number) => void
}

export default function ProductPricingCalculator({
  activeTab,
  setActiveTab,
  productCost,
  setProductCost,
  selectedProvince,
  setSelectedProvince,
  selectedCategory,
  setSelectedCategory,
  grossSellingPrice,
  profitMargin,
  setProfitMargin,
}: ProductPricingCalculatorProps) {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      {/* Tabs */}
      <div className="flex mb-8">
        <button
          className={`flex-1 py-2 text-sm font-medium rounded-full ${
            activeTab === "responsable" ? "bg-blue-100 text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("responsable")}
        >
          Responsable Inscripto
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium rounded-full ${
            activeTab === "monotributo" ? "bg-blue-100 text-blue-500" : "text-gray-500"
          }`}
          onClick={() => setActiveTab("monotributo")}
        >
          Monotributo
        </button>
      </div>

      {/* Form */}
      <div className="space-y-8">
        {/* Product Cost */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Costo de tu producto</label>
          <p className="text-sm text-gray-500">Precio de costo sin impuestos</p>
          <Input
            type="number"
            className="w-full border-gray-300 rounded-md"
            placeholder="$0.00"
            value={productCost || ""}
            onChange={(e) => setProductCost(Number.parseFloat(e.target.value) || 0)}
          />
        </div>

        {/* Province */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Provincia</label>
          <p className="text-sm text-gray-500">Selecciona tu provincia</p>
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="Buenos Aires" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Buenos Aires">Buenos Aires</SelectItem>
              <SelectItem value="Córdoba">Córdoba</SelectItem>
              <SelectItem value="Santa Fe">Santa Fe</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Rubro</label>
          <p className="text-sm text-gray-500">
            Selecciona el rubro para saber la alícuota de IIBB (solo en caso de estar inscripto)
          </p>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="Buenos Aires" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Buenos Aires">Buenos Aires</SelectItem>
              <SelectItem value="Comercio">Comercio</SelectItem>
              <SelectItem value="Servicios">Servicios</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gross Selling Price */}
        <div className="space-y-2">
          <label className="block text-lg font-medium">Precio de venta bruto</label>
          <p className="text-sm text-gray-500">Precio de venta sin impuestos</p>
          <div className="h-10 flex items-center border rounded-md px-3">${grossSellingPrice.toFixed(2)}</div>
        </div>

        {/* Profit Margin Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm text-gray-500">Margen de ganancia estimado:</label>
            <span className="text-sm">{profitMargin}%</span>
          </div>
          <Slider
            value={[profitMargin]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={(value) => setProfitMargin(value[0])}
          />
        </div>
      </div>
    </div>
  )
}

