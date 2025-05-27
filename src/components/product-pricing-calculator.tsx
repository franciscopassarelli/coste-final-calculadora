"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"


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
  monotributoActivo: boolean
  setMonotributoActivo: (value: boolean) => void;
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
  monotributoActivo,
  setMonotributoActivo,
  
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
          {activeTab === "monotributo" && (

            
  <div className="mb-4">
    
  </div>
)}
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
          <p className="text-sm text-gray-500">
  Según tu provincia de facturación se aplican diferentes tasas de Ingresos Brutos (IIBB) o IVA. Estos pueden variar entre 0% y 5.5%. Tierra del Fuego está exenta de IVA.
</p>
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="Buenos Aires" />
            </SelectTrigger>
            <SelectContent>
  <SelectItem value="Caba">CABA</SelectItem>
  <SelectItem value="Buenos Aires">Buenos Aires</SelectItem>
  <SelectItem value="Catamarca">Catamarca</SelectItem>
  <SelectItem value="Chaco">Chaco</SelectItem>
  <SelectItem value="Chubut">Chubut</SelectItem>
  <SelectItem value="Corrientes">Corrientes</SelectItem>
  <SelectItem value="Cordoba">Córdoba</SelectItem>
  <SelectItem value="Entre Rios">Entre Ríos</SelectItem>
  <SelectItem value="Formosa">Formosa</SelectItem>
  <SelectItem value="Jujuy">Jujuy</SelectItem>
  <SelectItem value="La pampa">La Pampa</SelectItem>
  <SelectItem value="La rioja">La Rioja</SelectItem>
  <SelectItem value="Mendoza">Mendoza</SelectItem>
  <SelectItem value="Misiones">Misiones</SelectItem>
  <SelectItem value="Neuquen">Neuquén</SelectItem>
  <SelectItem value="Rio negro">Río Negro</SelectItem>
  <SelectItem value="San Juan">San Juan</SelectItem>
  <SelectItem value="San Luis">San Luis</SelectItem>
  <SelectItem value="Salta">Salta</SelectItem>
  <SelectItem value="Santa Cruz">Santa Cruz</SelectItem>
  <SelectItem value="Santa Fe">Santa Fe</SelectItem>
  <SelectItem value="Santiago del estero">Santiago del Estero</SelectItem>
  <SelectItem value="Tierra del fuego">Tierra del Fuego</SelectItem>
  <SelectItem value="Tucuman">Tucumán</SelectItem>
</SelectContent>

          </Select>
        </div>
        </div>
      
       
        <div className="space-y-6">
          {/* Toggle para activar/desactivar el costo de monotributo */}
          

        
      
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
           
            

            {/* Monotributo Category */}
            <div className="space-y-2">
  <div className="calculator-section space-y-2">
    <div className="flex justify-between items-center">
      <label className="block text-lg font-medium">Categoría monotributo</label>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={monotributoActivo}
          onChange={(e) => setMonotributoActivo(e.target.checked)}
          className="w-4 h-4"
        />
        <span className="text-sm text-gray-600">Incluir en el cálculo</span>
      </div>
    </div>
    <label className="block text-lg font-medium"></label>
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
        <SelectItem value="I">I</SelectItem>
        <SelectItem value="J">J</SelectItem>
        <SelectItem value="K">K</SelectItem>
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