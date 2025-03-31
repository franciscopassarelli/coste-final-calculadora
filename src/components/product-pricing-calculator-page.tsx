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

  // Calculate gross selling price based on product cost and profit margin
  useEffect(() => {
    if (productCost > 0) {
      const calculatedPrice = productCost * (1 + profitMargin / 100)
      setGrossSellingPrice(calculatedPrice)
    } else {
      setGrossSellingPrice(0)
    }
  }, [productCost, profitMargin])

  return (
    <div className="container mx-auto py-8 px-4">
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
      />

      <ProductPricingResults
        productCost={productCost}
        selectedProvince={selectedProvince}
        selectedCategory={selectedCategory}
        grossSellingPrice={grossSellingPrice}
        profitMargin={profitMargin}
        activeTab={activeTab}
      />
    </div>
  )
}

