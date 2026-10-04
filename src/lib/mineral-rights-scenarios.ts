/** Educational arithmetic only. No market-price or ownership inference. */
export interface IncomeScenario {
  monthlyIncome: number;
  declinePercent: number;
  discountPercent: number;
  years: number;
}

export function modelIncome(input: IncomeScenario) {
  const { monthlyIncome, declinePercent, discountPercent, years } = input;
  if (
    ![monthlyIncome, declinePercent, discountPercent, years].every(Number.isFinite) ||
    monthlyIncome < 0 ||
    monthlyIncome > 1e9 ||
    declinePercent < 0 ||
    declinePercent > 100 ||
    discountPercent < 0 ||
    discountPercent > 100 ||
    !Number.isInteger(years) ||
    years < 1 ||
    years > 30
  ) {
    throw new Error('Use nonnegative income, rates from 0 to 100, and 1 to 30 whole years.');
  }
  const rows = Array.from({ length: years }, (_, index) => {
    const year = index + 1;
    const cashFlow = monthlyIncome * 12 * Math.pow(1 - declinePercent / 100, index);
    return { year, cashFlow, presentValue: cashFlow / Math.pow(1 + discountPercent / 100, year) };
  });
  return {
    rows,
    undiscountedIncome: rows.reduce((sum, row) => sum + row.cashFlow, 0),
    presentValue: rows.reduce((sum, row) => sum + row.presentValue, 0),
  };
}

export function compareAcreage(grossAcres: number, ownershipPercent: number, offer: number) {
  if (
    ![grossAcres, ownershipPercent, offer].every(Number.isFinite) ||
    grossAcres <= 0 ||
    grossAcres > 1e9 ||
    ownershipPercent <= 0 ||
    ownershipPercent > 100 ||
    offer < 0 ||
    offer > 1e12
  ) {
    throw new Error(
      'Enter positive gross acres, a mineral ownership share above 0 and at most 100%, and a nonnegative written offer.',
    );
  }
  const netMineralAcres = (grossAcres * ownershipPercent) / 100;
  return { netMineralAcres, offerPerNetMineralAcre: offer / netMineralAcres };
}
