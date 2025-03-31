export const formatCurrency = (value: string) => {
  const numericValue = value.replace(/[^\d,]/g, '');
  
  const [integerPart, decimalPart] = numericValue.split(',');
  
  const integerWithDots = integerPart
    ? integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    : '';
  
  const formattedDecimal = decimalPart ? decimalPart.slice(0, 2) : '';
  
  const formattedValue = formattedDecimal
    ? `${integerWithDots},${formattedDecimal}`
    : integerWithDots;

  return formattedValue;
};