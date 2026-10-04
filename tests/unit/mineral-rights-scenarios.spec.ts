import { describe, expect, it } from 'vitest';
import { modelIncome, compareAcreage } from '../../src/lib/mineral-rights-scenarios';

describe('educational mineral rights scenarios', () => {
  it('matches hand-calculated finite annual cash flows without a terminal value', () => {
    const result = modelIncome({
      monthlyIncome: 100,
      declinePercent: 50,
      discountPercent: 0,
      years: 3,
    });
    expect(result.rows.map((row) => row.cashFlow)).toEqual([1200, 600, 300]);
    expect(result.presentValue).toBe(2100);
    expect(result.rows).toHaveLength(3);
    expect(
      modelIncome({ monthlyIncome: 100, declinePercent: 0, discountPercent: 10, years: 1 })
        .presentValue,
    ).toBeCloseTo(1200 / 1.1);
  });
  it('does not create value from zero income, and higher discount or decline reduces a fixed scenario', () => {
    const base = { monthlyIncome: 100, declinePercent: 10, discountPercent: 10, years: 10 };
    expect(modelIncome({ ...base, monthlyIncome: 0 }).presentValue).toBe(0);
    expect(modelIncome({ ...base, declinePercent: 20 }).presentValue).toBeLessThan(
      modelIncome(base).presentValue,
    );
    expect(modelIncome({ ...base, discountPercent: 20 }).presentValue).toBeLessThan(
      modelIncome(base).presentValue,
    );
    expect(modelIncome({ ...base, declinePercent: 100 }).undiscountedIncome).toBe(1200);
  });
  it('rejects unsupported or nonfinite inputs instead of silently coercing them', () => {
    const base = { monthlyIncome: 100, declinePercent: 10, discountPercent: 10, years: 10 };
    for (const bad of [
      { years: 0 },
      { years: 1.5 },
      { years: 31 },
      { monthlyIncome: NaN },
      { monthlyIncome: -1 },
      { discountPercent: -1 },
      { declinePercent: 101 },
    ])
      expect(() => modelIncome({ ...base, ...bad })).toThrow();
  });
  it('compares a stated mineral interest rather than substituting a payment decimal', () => {
    expect(compareAcreage(160, 25, 40000)).toEqual({
      netMineralAcres: 40,
      offerPerNetMineralAcre: 1000,
    });
    expect(() => compareAcreage(0, 25, 40000)).toThrow();
    expect(() => compareAcreage(160, 0, 40000)).toThrow();
    expect(() => compareAcreage(160, 101, 40000)).toThrow();
    expect(() => compareAcreage(160, 25, Infinity)).toThrow();
  });
});
