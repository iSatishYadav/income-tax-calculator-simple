function calculateTax() {
  const income = parseFloat(document.getElementById('income').value);
  const taxResult = document.getElementById('taxResult');
  
  if (isNaN(income) || income <= 0) {
    taxResult.textContent = 'Please enter a valid income.';
    return;
  }
  
  let tax = 0;
  const slabs = [
    { limit: 400000, rate: 0 },
    { limit: 800000, rate: 0.05 },
    { limit: 1200000, rate: 0.1 },
    { limit: 1600000, rate: 0.15 },
    { limit: 2000000, rate: 0.2 },
    { limit: 2400000, rate: 0.24 },
    { limit: Infinity, rate: 0.3 }
  ];

  let previousLimit = 0;
  for (let slab of slabs) {
    if (income > previousLimit) {
      let taxableIncome = Math.min(income, slab.limit) - previousLimit;
      tax += taxableIncome * slab.rate;
      previousLimit = slab.limit;
    } else {
      break;
    }
  }

  taxResult.textContent = `Tax Payable: Rs. ${tax.toFixed(2)}`;
}
