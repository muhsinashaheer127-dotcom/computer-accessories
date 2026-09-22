export const formatPrice = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return 'AED 0';
  return `AED ${Number(amount).toLocaleString('en-AE')}`;
};

export const formatPriceNumber = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return '0';
  return Number(amount).toLocaleString('en-AE');
};
