

"use client"

import { useState, useEffect } from "react"
import ProductPricingCalculator from "./product-pricing-calculator"
import ProductPricingResults from "./product-pricing-results"

export default function ProductPricingPage() {
  const [activeTab, setActiveTab] = useState("responsable")
  const [productCost, setProductCost] = useState(0)
  const [selectedProvince, setSelectedProvince] = useState("Buenos Aires")
  const [selectedCategory, setSelectedCategory] = useState("Buenos Aires")
  const [grossSellingPrice, setGrossSellingPrice] = useState(0)
  const [profitMargin, setProfitMargin] = useState(30)
  const [monotributoCategory, setMonotributoCategory] = useState("A")
  const [monotributoActivo, setMonotributoActivo] = useState(true);
  


  // Calculate gross selling price based on product cost and profit margin
  const monotributoValues: Record<string, number> = {
    A: 32221.31,
    B: 36679.00,
    C: 41982.19,
    D: 53714.87,
    E: 70436.50,
    F: 84530.08,
    G: 103321.64,
    H: 206815.63,
    I: 309020.04,
    J: 377851.82,
    K: 456773.20,
  };
  
  useEffect(() => {
    if (productCost > 0) {
      let finalCost = productCost;
  
      // Sumar monotributo si corresponde
      if (activeTab === "monotributo" && monotributoActivo) {
        const monotributoValues: Record<string, number> = {
          A: 32221.31,
          B: 36679.00,
          C: 41982.19,
          D: 53714.87,
          E: 70436.50,
          F: 84530.08,
          G: 103321.64,
          H: 206815.63,
          I: 309020.04,
          J: 377851.82,
          K: 456773.20,
        };
        const monotributoDailyCost = monotributoValues[monotributoCategory] / 30;
        finalCost += monotributoDailyCost;
      }
  
      const calculatedPrice = finalCost * (1 + profitMargin / 100);
      setGrossSellingPrice(calculatedPrice);
    } else {
      setGrossSellingPrice(0);
    }
  }, [productCost, profitMargin, monotributoCategory, activeTab, monotributoActivo]);
  return (
   <div className="container mx-auto py-8 px-4 flex flex-col gap-6">
  <div className="bg-white p-6 rounded-lg shadow-md border">
  <ProductPricingCalculator
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  productCost={productCost}
  setProductCost={setProductCost}
  selectedProvince={selectedProvince}
  setSelectedProvince={setSelectedProvince}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  grossSellingPrice={grossSellingPrice}
  profitMargin={profitMargin}
  setProfitMargin={setProfitMargin}
  monotributoCategory={monotributoCategory}
  setMonotributoCategory={setMonotributoCategory}
  monotributoActivo={monotributoActivo}
  setMonotributoActivo={setMonotributoActivo}
/>

      </div>
  <div className="max-w-3xl mx-auto text-center mt-12 animate-fade-in">
       <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-6">
       Queres saber lo que realmente vas a recibir?
       </h2>
     </div>
  <div className="bg-white p-6 rounded-lg shadow-md border">

      <ProductPricingResults
        productCost={productCost}
        selectedProvince={selectedProvince}
        selectedCategory={selectedCategory}
        grossSellingPrice={grossSellingPrice}
        profitMargin={profitMargin}
        activeTab={activeTab}
        monotributoCategory={monotributoCategory}
      />
    </div>
    </div>
  )
}