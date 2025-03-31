"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function MonotributoSelect() {
  const [activeTab, setActiveTab] = useState("responsable");
  const [marginValue, setMarginValue] = useState(30);

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
        <div className="md:col-span-3 space-y-6">
        <div className="calculator-section">
          <label className="block text-lg font-medium">Costo de tu producto</label>
          <p className="text-sm text-gray-500">Precio de costo sin impuestos</p>
          <Input type="text" className="w-full border-gray-300 rounded-md" placeholder="$0.00" />
        </div>

        {/* Province */}
        <div className="space-y-2">
        <div className="calculator-section">
          <label className="block text-lg font-medium">Provincia</label>
          <p className="text-sm text-gray-500">Selecciona tu provincia</p>
          <Select defaultValue="buenos-aires">
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="Buenos Aires" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
              <SelectItem value="cordoba">Córdoba</SelectItem>
              <SelectItem value="santa-fe">Santa Fe</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
        <div className="calculator-section">
          <label className="block text-lg font-medium">Rubro</label>
          <p className="text-sm text-gray-500">
            Selecciona el rubro para saber la alícuota de IIBB (solo en caso de estar inscripto)
          </p>
          <Select defaultValue="buenos-aires">
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="Buenos Aires" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
              <SelectItem value="comercio">Comercio</SelectItem>
              <SelectItem value="servicios">Servicios</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>

        {/* Gross Selling Price */}
        <div className="space-y-2">
        <div className="calculator-section">
          <label className="block text-lg font-medium">Precio de venta bruto</label>
          <p className="text-sm text-gray-500">Precio de venta sin impuestos</p>
          <Select defaultValue="0">
            <SelectTrigger className="w-full border-gray-300">
              <SelectValue placeholder="$0.00" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">$0.00</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>

        {/* Profit Margin Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm text-gray-500">Margen de ganancia estimado:</label>
            <span className="text-sm">{marginValue}%</span>
          </div>
          <Slider
            defaultValue={[30]}
            max={100}
            step={1}
            className="w-full"
            onValueChange={(value) => setMarginValue(value[0])}
          />
        </div>
      </div>
      </div>
    </div>
  );
}
