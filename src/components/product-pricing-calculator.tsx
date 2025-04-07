"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

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
  monotributoCategory: string
  setMonotributoCategory: (category: string) => void
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
  monotributoCategory,
  setMonotributoCategory,
}: ProductPricingCalculatorProps) {
  return (
    <div className="mx-auto p-6 bg-white rounded-xl shadow-sm">
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

      {activeTab === "responsable" ? (
        /* Responsable Inscripto Form */
        <div className="space-y-4">
 
        <div className="space-y-2">
        <div className="calculator-section space-y-4">
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
        </div>
      
        
        <div className="space-y-2">
        <div className="calculator-section space-y-4">
          <label className="block text-lg font-medium">Provincia</label>
          <p className="text-sm text-gray-500">Selecciona tu provincia</p>
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="Buenos Aires" />
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
        </div>
      
       
        <div className="space-y-6">
        <div className="calculator-section space-y-4">
          <label className="block text-lg font-medium">Rubro</label>
          <p className="space-y-2 text-sm text-gray-500">
            Selecciona el rubro para saber la alícuota de IIBB (solo en caso de estar inscripto)
          </p>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full space-y-2 border-gray-300">
              <SelectValue placeholder="Buenos Aires" />
            </SelectTrigger>
            <SelectContent>
             
              <SelectItem value="Comercio">Comercio</SelectItem>
              <SelectItem value="Servicios">Servicios</SelectItem>
            </SelectContent>
          </Select>
        </div>
      
        <div className="calculator-section">
        <div className="space-y-2">
        
          <label className="block text-lg font-medium">Precio de venta bruto</label>
          <p className="text-sm text-gray-500">Precio de venta sin impuestos</p>
          <div className="h-10 flex items-center border rounded-md px-3">${grossSellingPrice.toFixed(2)}</div>
        </div>
        </div>
      
      
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm text-gray-500">Margen de ganancia estimado:</label>
            <span className="text-sm">{profitMargin}%</span>
          </div>
          <Slider
            value={[profitMargin]}
            max={300}
            step={1}
            className="w-full"
            onValueChange={(value) => setProfitMargin(value[0])}
          />
        </div>
      </div>
      </div>
      ) : (
        /* Monotributo Form */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          
          <div className="space-y-6">
            {/* Product Cost */}
            <div className="calculator-section space-y-4">
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
            </div>

            {/* Province */}
            <div className="calculator-section space-y-4">
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
            </div>

            {/* Category */}
            <div className="calculator-section">
            <div className="space-y-2">
            
              <label className="block text-lg font-medium">Rubro</label>
              <p className="text-sm text-gray-500">
                Selecciona tu actividad para saber la alícuota (En esta fase no están todas las actividades)
              </p>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="Buenos Aires" />
                </SelectTrigger>
                <SelectContent>
                  
                  <SelectItem value="Comercio">Comercio</SelectItem>
                  <SelectItem value="Servicios">Servicios</SelectItem>
                </SelectContent>
              </Select>
            </div>
            </div>

            {/* Monotributo Category */}
            <div className="space-y-2">
            <div className="calculator-section space-y-2">
              <label className="block text-lg font-medium">Categoría monotributo</label>
              <p className="text-sm text-gray-500">
                El valor final de la categoría será dividido en 30 días para ser sumado al costo que ingresen
              </p>
              <Select value={monotributoCategory} onValueChange={setMonotributoCategory}>
                <SelectTrigger className="w-full border-gray-300">
                  <SelectValue placeholder="A" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                  <SelectItem value="E">E</SelectItem>
                  <SelectItem value="F">F</SelectItem>
                  <SelectItem value="G">G</SelectItem>
                  <SelectItem value="H">H</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          </div>

          {/* Right Column */}
          <div className="space-y-2">
            {/* Gross Selling Price */}
            <div className="space-y-2">
            <div className="calculator-section space-y-2">
              <label className="block text-lg font-medium">Precio de venta bruto</label>
              <p className="text-sm text-gray-500">Este es tu precio de venta bruto estimado</p>
              <div className="h-10 flex items-center border rounded-md px-3">${grossSellingPrice.toFixed(2)}</div>
                {/* Profit Margin Slider */}
            <div className="space-y-6 mt-auto">
              <div className="flex justify-between items-center">
                <label className="block text-sm text-gray-500">Margen de ganancia pretendido:</label>
                <span className="text-sm">{profitMargin}%</span>
              </div>
              <Slider
                value={[profitMargin]}
                max={300}
                step={1}
                className="w-full"
                onValueChange={(value) => setProfitMargin(value[0])}
              />
            </div>
            </div>
          </div>

          
          </div>
        </div>
      )}
    </div>
  )
}