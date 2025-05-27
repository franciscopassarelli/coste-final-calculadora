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
  const provinciaAliasMap: Record<string, string> = {
    "caba": "Caba",
    "buenos-aires": "Buenos Aires",
    "catamarca": "Catamarca",
    "chaco": "Chaco",
    "chubut": "Chubut",
    "corrientes": "Corrientes",
    "cordoba": "Cordoba",
    "entre-rios": "Entre Rios",
    "formosa": "Formosa",
    "jujuy": "Jujuy",
    "la-pampa": "La pampa",
    "la-rioja": "La rioja",
    "mendoza": "Mendoza",
    "misiones": "Misiones",
    "neuquen": "Neuquen",
    "rio-negro": "Rio negro",
    "salta": "Salta",
    "san-juan": "San Juan",
    "san-luis": "San Luis",
    "santa-cruz": "Santa Cruz",
    "santa-fe": "Santa Fe",
    "santiago-del-estero": "Santiago del estero",
    "tierra-del-fuego": "Tierra del fuego",
    "tucuman": "Tucuman",
  };
  const [rubro, setRubro] = useState(selectedCategory);

  // Calculate net selling price based on inputs
  useEffect(() => {
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
  
    let netPrice = grossSellingPrice;

    const paymentCommissions: Record<string, number> = {
      payway_qr: 0.8 * 1.21,
      payway_debito: 1.0 * 1.21,
      payway_credito: 6.11 * 1.21,
      payway_credito_8d: 1.8 * 1.21,
    
      // Mercado Pago
      mp_debito_instant: 3.25 * 1.21,
      mp_debito_2d: 2.99 * 1.21,
      mp_credito_instant: 6.29 * 1.21,
      mp_credito_5d: 5.39 * 1.21,
      mp_credito_10d: 4.39 * 1.21,
      mp_credito_18d: 3.39 * 1.21,
      mp_credito_70d: 0.0,
    
      // Otros
      mercadopago: 5.79,
      clover: 4.0,
      modo: 3.5,
      cuentadni: 0.0,
      getnet: 2.5,
      pagonube: 3.9,
    };
          
  
    const rubroAliquotas: Record<string, number> = {
      // ⬇️ pegá el contenido del archivo .txt acá
      "471190": 3.0,
"471900": 3.0,
"472111": 3.0,
"472112": 3.0,
"472120": 3.0,
"472130": 3.0,
"472140": 3.0,
"472150": 3.0,
"472160": 3.0,
"472170": 3.0,
"472172": 3.0,
"474010": 3.0,
"475210": 3.0,
"476110": 3.0,
"476120": 3.0,
"476130": 3.0,
"476200": 3.0,
"476310": 3.0,
"476400": 3.0,
"477210": 3.0,
"477310": 3.0,
"477440": 3.0,
"475990": 3.0,
"477390": 3.0,
"479101": 3.0,
"453291": 3.0,
"453210": 3.0,
"453220": 3.0,
"492120": 2.0,
"492210": 2.0,
"492290": 2.0,
"530090": 3.0,
"452990": 3.0,
"452101": 3.0,
"452210": 3.0,
"454020": 3.0,
"561011": 3.0,
"561013": 3.0,
"563011": 3.0,
"562099": 4.5,
"620100": 3.0,
"951100": 3.0,
"662020": 8.0,
"681098": 5.0,
"682099": 5.0,
"691001": 3.0,
"692000": 3.0,
"711001": 3.0,
"731001": 5.0,
"741002": 5.0,
"742001": 5.0,
"750000": 3.0,
"749010": 5.0,
"791100": 3.0,
"823000": 3.0,
"812010": 3.0,
"813000": 3.0,
"854920": 3.0,
"854990": 3.0,
"862110": 3.0,
"862200": 3.0,
"869090": 3.0,
"960201": 3.0,
"960202": 3.0,
"960101": 3.0,
"952100": 3.0,
"952910": 3.0,
"952990": 3.0,
"960250": 3.0,
"960200": 3.0,
"433010": 3.0,
"432110": 3.0,
"432210": 3.0,
"439000": 3.0,
"162201": 1.5,
"251200": 1.5,
"141201": 1.5,
"181100": 3.0,
"107121": 1.5,
"321020": 3.0,
"451290": 3.0,
"477310": 3.0,
"475300": 3.0,
"474020": 3.0,
"475410": 3.0,
"475290": 5.0,
"464110": 3.0,
"464120": 3.0,
"464130": 3.0,
"960210": 3.0,
"931030": 3.0,
"920001": 3.0,
"309200": 3.0

    };
    // Descontar comisión del servicio de pago
    if (paymentService && paymentCommissions[paymentService]) {
      const commissionRate = paymentCommissions[paymentService];
      netPrice -= netPrice * (commissionRate / 100);
    }
  
    // Restar monotributo si corresponde
    if (activeTab === "monotributo" && taxesEnabled) {
      const dailyCost = monotributoValues[monotributoCategory] / 30;
      netPrice -= dailyCost;
    }
  
    // Si es Responsable Inscripto, quitar el IVA si está activado
    if (taxesEnabled && activeTab === "responsable") {
      netPrice = netPrice / 1.21;
    }
  
    if (rubro && rubroAliquotas[rubro]) {
      const alicuota = rubroAliquotas[rubro];
      netPrice -= netPrice * (alicuota / 100);
    }

    setNetSellingPrice(netPrice);
  
    // Calcular ganancia final
    if (productCost > 0) {
      const profit = netPrice - productCost;
      setFinalProfitPercentage(Math.round((profit / productCost) * 100));
    } else {
      setFinalProfitPercentage(0);
    }
  
    // Mapa de alícuotas por provincia para la comparación
    const provinciaAliquotas: Record<string, number> = {
      "Caba": 2.0,
      "Buenos Aires": 2.0,
      "Catamarca": 0,
      "Chaco": 5.5,
      "Chubut": 0,
      "Corrientes": 0,
      "Cordoba": 3,
      "Entre Rios": 0,
      "Formosa": 0,
      "Jujuy": 0,
      "La pampa": 1,
      "La rioja": 0,
      "Mendoza": 0,
      "Misiones": 2.5,
      "Neuquen": 4.0,
      "Rio negro": 5.0,
      "San Juan": 0,
      "San Luis": 0,
      "Salta": 3.6,
      "Santa Cruz": 0,
      "Santa Fe": 4.5,
      "Santiago del estero": 0,
      "Tierra del fuego": 3.0,
      "Tucuman": 0,
    };
  
    if (compareProvince) {
      const provinciaNombre = provinciaAliasMap[compareProvince] || "";
const porcentajeComparado = provinciaAliquotas[provinciaNombre] || 0;
      let compareCost = productCost + (productCost * (porcentajeComparado / 100));
  
      if (paymentService === "payway") {
        compareCost *= 0.97;
      } else if (paymentService === "mercadopago") {
        compareCost *= 0.96;
      } else if (paymentService === "paypal") {
        compareCost *= 0.95;
      }
  
      if (taxesEnabled && activeTab === "responsable") {
        compareCost = compareCost / 1.21;
      }
  
      setCompareNetPrice(compareCost);
    }
  }, [
    grossSellingPrice,
    paymentService,
    activeTab,
    taxesEnabled,
    monotributoCategory,
    productCost,
    compareProvince,
    rubro, // ⬅️ ESTA ES LA CLAVE PARA EL RUBRO   
  ]);

  // Aplica comisiones
 


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
          <div className="w-full col-span-2">
  <div className="space-y-1">
  <div className="calculator-section space-y-2 w-full">
  <h3 className="font-medium">Servicio de pagos</h3>
  <p className="text-sm text-gray-500">Agrega un servicio de pago</p>
  <div className="w-full">
    <Select value={paymentService} onValueChange={setPaymentService}>
      <SelectTrigger className="w-full border-gray-300">
        <SelectValue placeholder="PayWay" />
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="payway_qr">PayWay (QR 0.8%+IVA)</SelectItem>
      <SelectItem value="payway_debito">PayWay (Débito 1%+IVA)</SelectItem>
      <SelectItem value="payway_credito">PayWay (Crédito 6,11%+IVA)</SelectItem>
      <SelectItem value="payway_credito_8d">PayWay (Crédito 8 días 1,8%+IVA)</SelectItem>
      <SelectItem value="mp_debito_instant">MP Débito (Instante)</SelectItem>
      <SelectItem value="mp_debito_2d">MP Débito (2 días)</SelectItem>
      <SelectItem value="mp_credito_instant">MP Crédito (Instante)</SelectItem>
      <SelectItem value="mp_credito_5d">MP Crédito (5 días)</SelectItem>
      <SelectItem value="mp_credito_10d">MP Crédito (10 días)</SelectItem>
      <SelectItem value="mp_credito_18d">MP Crédito (18 días)</SelectItem>
      <SelectItem value="mp_credito_70d">MP Crédito (70 días)</SelectItem>
      <SelectItem value="modo">Modo</SelectItem>
      <SelectItem value="cuentadni">Cuenta DNI</SelectItem>
      <SelectItem value="getnet">Getnet</SelectItem>
      <SelectItem value="pagonube">Pagonube</SelectItem>
      <SelectItem value="clover">Clover</SelectItem>
      </SelectContent>
    </Select>
  </div>
</div>

<div className="calculator-section space-y-4">
<label className="block text-lg font-medium">Rubro</label>
  <p className="text-sm text-gray-500">
    Selecciona el rubro para saber la alícuota de IIBB (solo en caso de estar inscripto)
  </p>
  <Select value={rubro} onValueChange={setRubro}>
    <SelectTrigger className="w-full border-gray-300">
      <SelectValue placeholder="Seleccionar rubro" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="471190">471190 - Venta al por menor en kioscos, polirrubros y comercios no especializados n.c.p. (3,00%)</SelectItem>
<SelectItem value="471900">471900 - Venta al por menor en comercios no especializados, sin predominio de productos alimenticios y bebidas (3,00%)</SelectItem>
<SelectItem value="472111">472111 - Venta al por menor de productos lácteos (3,00%)</SelectItem>
<SelectItem value="472112">472112 - Venta al por menor de fiambres y embutidos (3,00%)</SelectItem>
<SelectItem value="472120">472120 - Venta al por menor de productos de almacén y dietética (3,00%)</SelectItem>
<SelectItem value="472130">472130 - Venta al por menor de carnes rojas, menudencias y chacinados frescos (3,00%)</SelectItem>
<SelectItem value="472140">472140 - Venta al por menor de aves, huevos y productos de granja (3,00%)</SelectItem>
<SelectItem value="472150">472150 - Venta al por menor de pescados y productos de la pesca (3,00%)</SelectItem>
<SelectItem value="472160">472160 - Venta al por menor de frutas, legumbres y hortalizas frescas (3,00%)</SelectItem>
<SelectItem value="472170">472170 - Venta al por menor de pan y productos de panadería (3,00%)</SelectItem>
<SelectItem value="472172">472172 - Venta al por menor de bombones, golosinas y confitería (3,00%)</SelectItem>
<SelectItem value="474010">474010 - Venta al por menor de artículos de ferretería y materiales eléctricos (3,00%)</SelectItem>
<SelectItem value="475210">475210 - Venta al por menor de artículos de bazar y menaje (3,00%)</SelectItem>
<SelectItem value="476110">476110 - Venta al por menor de libros (3,00%)</SelectItem>
<SelectItem value="476120">476120 - Venta al por menor de diarios y revistas (3,00%)</SelectItem>
<SelectItem value="476130">476130 - Venta al por menor de papelería y artículos de librería (3,00%)</SelectItem>
<SelectItem value="476200">476200 - Venta al por menor de CD’s, DVD’s de audio y video grabados (3,00%)</SelectItem>
<SelectItem value="476310">476310 - Venta al por menor de equipos y artículos deportivos (3,00%)</SelectItem>
<SelectItem value="476400">476400 - Venta al por menor de juguetes y cotillón (3,00%)</SelectItem>
<SelectItem value="477210">477210 - Venta al por menor de prendas y accesorios de vestir (3,00%)</SelectItem>
<SelectItem value="477310">477310 - Venta al por menor de productos cosméticos, de tocador y de perfumería (3,00%)</SelectItem>
<SelectItem value="477440">477440 - Venta al por menor de flores, plantas y productos de vivero (3,00%)</SelectItem>
<SelectItem value="475990">475990 - Venta al por menor de productos de limpieza (3,00%)</SelectItem>
<SelectItem value="477390">477390 - Venta al por menor de productos veterinarios y alimentos para mascotas (3,00%)</SelectItem>
<SelectItem value="479101">479101 - Venta al por menor por internet (3,00%)</SelectItem>
<SelectItem value="453291">453291 - Venta al por menor de partes, piezas y accesorios nuevos n.c.p. (3,00%)</SelectItem>
<SelectItem value="453210">453210 - Venta al por menor de cámaras y cubiertas (3,00%)</SelectItem>
<SelectItem value="453220">453220 - Venta al por menor de baterías (3,00%)</SelectItem>
<SelectItem value="492120">492120 - Transporte de pasajeros en taxis y remises (2,00%)</SelectItem>
<SelectItem value="492210">492210 - Servicios de mudanza (2,00%)</SelectItem>
<SelectItem value="492290">492290 - Transporte automotor de cargas n.c.p. (2,00%)</SelectItem>
<SelectItem value="530090">530090 - Servicios de mensajerías (3,00%)</SelectItem>
<SelectItem value="452990">452990 - Mantenimiento y reparación del motor n.c.p.; mecánica integral (3,00%)</SelectItem>
<SelectItem value="452101">452101 - Lavado de vehículos automotores (3,00%)</SelectItem>
<SelectItem value="452210">452210 - Reparación de cámaras y cubiertas (3,00%)</SelectItem>
<SelectItem value="454020">454020 - Reparación de motocicletas (3,00%)</SelectItem>
<SelectItem value="561011">561011 - Restaurantes y cantinas sin espectáculo (3,00%)</SelectItem>
<SelectItem value="561013">561013 - Fast food y rotiserías (3,00%)</SelectItem>
<SelectItem value="563011">563011 - Servicios de bar (3,00%)</SelectItem>
<SelectItem value="562099">562099 - Comidas para llevar y catering (4,50%)</SelectItem>
<SelectItem value="620100">620100 - Desarrollo de software y servicios informáticos (3,00%)</SelectItem>
<SelectItem value="951100">951100 - Reparación de equipos informáticos (3,00%)</SelectItem>
<SelectItem value="662020">662020 - Servicios de productores asesores de seguros (8,00%)</SelectItem>
<SelectItem value="681098">681098 - Alquiler de inmuebles n.c.p. (5,00%)</SelectItem>
<SelectItem value="682099">682099 - Servicios inmobiliarios a comisión (5,00%)</SelectItem>
<SelectItem value="691001">691001 - Servicios jurídicos (3,00%)</SelectItem>
<SelectItem value="692000">692000 - Contabilidad y auditoría (3,00%)</SelectItem>
<SelectItem value="711001">711001 - Servicios de arquitectura e ingeniería (3,00%)</SelectItem>
<SelectItem value="731001">731001 - Servicios de publicidad (5,00%)</SelectItem>
<SelectItem value="741002">741002 - Servicios de diseño (5,00%)</SelectItem>
<SelectItem value="742001">742001 - Servicios de fotografía (5,00%)</SelectItem>
<SelectItem value="750000">750000 - Servicios veterinarios (3,00%)</SelectItem>
<SelectItem value="749010">749010 - Servicios de traducción e interpretación (5,00%)</SelectItem>
<SelectItem value="791100">791100 - Servicios de agencias de viaje (3,00%)</SelectItem>
<SelectItem value="823000">823000 - Organización de eventos (3,00%)</SelectItem>
<SelectItem value="812010">812010 - Limpieza de edificios (3,00%)</SelectItem>
<SelectItem value="813000">813000 - Servicios de jardinería (3,00%)</SelectItem>
<SelectItem value="854920">854920 - Enseñanza de idiomas (3,00%)</SelectItem>
<SelectItem value="854990">854990 - Otros servicios de enseñanza n.c.p. (3,00%)</SelectItem>
<SelectItem value="862110">862110 - Consulta médica (3,00%)</SelectItem>
<SelectItem value="862200">862200 - Servicios odontológicos (3,00%)</SelectItem>
<SelectItem value="869090">869090 - Psicólogos, kinesiólogos, fonoaudiólogos, etc. (3,00%)</SelectItem>
<SelectItem value="960201">960201 - Servicios de peluquería (3,00%)</SelectItem>
<SelectItem value="960202">960202 - Servicios de tratamientos de belleza (3,00%)</SelectItem>
<SelectItem value="960101">960101 - Servicios de lavandería (3,00%)</SelectItem>
<SelectItem value="952100">952100 - Reparación de electrodomésticos (3,00%)</SelectItem>
<SelectItem value="952910">952910 - Cerrajería (3,00%)</SelectItem>
<SelectItem value="952990">952990 - Reparación de efectos personales n.c.p. (3,00%)</SelectItem>
<SelectItem value="960250">960250 - Servicios de masaje (3,00%)</SelectItem>
<SelectItem value="960200">960200 - Peluquería de mascotas (3,00%)</SelectItem>
<SelectItem value="433010">433010 - Pintura y revestimiento de interiores (3,00%)</SelectItem>
<SelectItem value="432110">432110 - Instalaciones eléctricas (3,00%)</SelectItem>
<SelectItem value="432210">432210 - Instalaciones de gas y agua (3,00%)</SelectItem>
<SelectItem value="439000">439000 - Construcción de edificios residenciales (3,00%)</SelectItem>
<SelectItem value="162201">162201 - Fabricación de aberturas de madera (1,50%)</SelectItem>
<SelectItem value="251200">251200 - Fabricación de estructuras metálicas (1,50%)</SelectItem>
<SelectItem value="141201">141201 - Confección de prendas de vestir (1,50%)</SelectItem>
<SelectItem value="181100">181100 - Servicios de impresión (3,00%)</SelectItem>
<SelectItem value="107121">107121 - Elaboración de panadería (1,50%)</SelectItem>
<SelectItem value="321020">321020 - Fabricación de bijouterie (3,00%)</SelectItem>
<SelectItem value="451290">451290 - Venta de autos usados (3,00%)</SelectItem>
<SelectItem value="477310">477310 - Farmacias (3,00%)</SelectItem>
<SelectItem value="475300">475300 - Venta de electrodomésticos (3,00%)</SelectItem>
<SelectItem value="474020">474020 - Venta de celulares (3,00%)</SelectItem>
<SelectItem value="475410">475410 - Venta de muebles (3,00%)</SelectItem>
<SelectItem value="475290">475290 - Venta de materiales para la construcción (5,00%)</SelectItem>
<SelectItem value="464110">464110 - Venta mayorista de alimentos y bebidas (3,00%)</SelectItem>
<SelectItem value="464120">464120 - Venta mayorista de indumentaria (3,00%)</SelectItem>
<SelectItem value="464130">464130 - Venta mayorista de ferretería y construcción (3,00%)</SelectItem>
<SelectItem value="960210">960210 - Servicios de tatuajes y piercings (3,00%)</SelectItem>
<SelectItem value="931030">931030 - Gimnasios y entrenamiento físico (3,00%)</SelectItem>
<SelectItem value="920001">920001 - Venta de billetes de lotería y quiniela (3,00%)</SelectItem>
<SelectItem value="309200">309200 - Reparación y venta de bicicletas (3,00%)</SelectItem>
    </SelectContent>
  </Select>
        </div>
  </div>
</div>              
  {/* AGREGA ESTE DIV VACÍO para cerrar bien la grilla */}
  <div></div>
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
  );
}