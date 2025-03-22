
export type CostInput = {
  basePrice: number;
  iva: {
    enabled: boolean;
    rate: number;
  };
  provincialTaxes: {
    enabled: boolean;
    rate: number;
  };
  shipping: {
    enabled: boolean;
    cost: number;
  };
  monotributo: {
    enabled: boolean;
    category: string;
    rate: number;
  };
  storeExpenses: {
    enabled: boolean;
    salesCommission: number;
    monthlyFee: number;
    serviceFee: number;
  };
  paymentProcessing: {
    enabled: boolean;
    posnetFee: number;
    bankCardFee: number;
    withdrawalFee: number;
  };
};

export const calculateIVA = (basePrice: number, rate: number): number => {
  return basePrice * (rate / 100);
};

export const calculateProvincialTax = (basePrice: number, rate: number): number => {
  return basePrice * (rate / 100);
};

export const calculateMonotributoFee = (basePrice: number, rate: number): number => {
  return basePrice * (rate / 100);
};

export const calculateStoreExpenses = (
  basePrice: number,
  salesCommission: number,
  monthlyFee: number,
  serviceFee: number
): number => {
  const commissionAmount = basePrice * (salesCommission / 100);
  // Distribute monthly fees per item (assuming 100 sales per month for simplicity)
  const monthlyFeePerItem = monthlyFee / 100;
  return commissionAmount + monthlyFeePerItem + serviceFee;
};

export const calculatePaymentProcessingFees = (
  basePrice: number,
  posnetFee: number,
  bankCardFee: number,
  withdrawalFee: number
): number => {
  const posnetAmount = basePrice * (posnetFee / 100);
  const bankCardAmount = basePrice * (bankCardFee / 100);
  return posnetAmount + bankCardAmount + withdrawalFee;
};

export const calculateTotalCost = (input: CostInput): number => {
  let totalCost = input.basePrice;

  if (input.iva.enabled) {
    totalCost += calculateIVA(input.basePrice, input.iva.rate);
  }

  if (input.provincialTaxes.enabled) {
    totalCost += calculateProvincialTax(input.basePrice, input.provincialTaxes.rate);
  }

  if (input.shipping.enabled) {
    totalCost += input.shipping.cost;
  }

  if (input.monotributo.enabled) {
    totalCost += calculateMonotributoFee(input.basePrice, input.monotributo.rate);
  }

  if (input.storeExpenses.enabled) {
    totalCost += calculateStoreExpenses(
      input.basePrice,
      input.storeExpenses.salesCommission,
      input.storeExpenses.monthlyFee,
      input.storeExpenses.serviceFee
    );
  }

  if (input.paymentProcessing.enabled) {
    totalCost += calculatePaymentProcessingFees(
      input.basePrice,
      input.paymentProcessing.posnetFee,
      input.paymentProcessing.bankCardFee,
      input.paymentProcessing.withdrawalFee
    );
  }

  return totalCost;
};

export const calculateProfitMargin = (totalCost: number, sellingPrice: number): number => {
  if (totalCost === 0) return 0;
  return ((sellingPrice - totalCost) / totalCost) * 100;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  }).format(amount);
};

export const getMonotributoCategories = (): { label: string; value: string; rate: number }[] => {
  return [
    { label: "Categoría A", value: "A", rate: 5 },
    { label: "Categoría B", value: "B", rate: 5.5 },
    { label: "Categoría C", value: "C", rate: 6 },
    { label: "Categoría D", value: "D", rate: 6.5 },
    { label: "Categoría E", value: "E", rate: 7 },
    { label: "Categoría F", value: "F", rate: 7.5 },
    { label: "Categoría G", value: "G", rate: 8 },
    { label: "Categoría H", value: "H", rate: 8.5 },
    { label: "Categoría I", value: "I", rate: 9 },
    { label: "Categoría J", value: "J", rate: 9.5 },
    { label: "Categoría K", value: "K", rate: 10 }
  ];
};
