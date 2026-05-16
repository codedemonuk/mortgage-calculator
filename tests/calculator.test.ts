import { describe, it, expect } from 'vitest';
import { calculateMonthlyRepayment } from '../src/calculator';

describe('calculateMonthlyRepayment', () => {
  it('should calculate correct monthly payment for standard values', () => {
    const result = calculateMonthlyRepayment(200000, 5.0);
    expect(result).toBe(833.3333333333334);
  });

  it('should return zero when interest rate is zero', () => {
    const result = calculateMonthlyRepayment(200000, 0);
    expect(result).toBe(0);
  });

  it('should handle decimal interest rates with 2 decimal places', () => {
    const result = calculateMonthlyRepayment(150000, 4.75);
    expect(result).toBe(593.75);
  });

  it('should work with minimum loan amount', () => {
    const result = calculateMonthlyRepayment(10000, 3.0);
    expect(result).toBe(25);
  });

  it('should handle large loan amounts', () => {
    const result = calculateMonthlyRepayment(2000000, 8.5);
    expect(result).toBe(14166.666666666666);
  });

  it('should work with maximum interest rate', () => {
    const result = calculateMonthlyRepayment(250000, 10.0);
    expect(result).toBe(2083.3333333333335);
  });

  it('should work with minimum interest rate', () => {
    const result = calculateMonthlyRepayment(250000, 3.0);
    expect(result).toBe(625);
  });

  it('should handle partial decimal interest rates', () => {
    const result = calculateMonthlyRepayment(175000, 4.25);
    expect(result).toBeCloseTo(619.7916666666666, 10);
  });

  it('should return consistent results for same inputs', () => {
    const result1 = calculateMonthlyRepayment(300000, 6.5);
    const result2 = calculateMonthlyRepayment(300000, 6.5);
    expect(result1).toBe(result2);
  });

  it('should handle various loan amounts at same rate', () => {
    const baseResult = calculateMonthlyRepayment(100000, 5.0);
    const doubleAmount = calculateMonthlyRepayment(200000, 5.0);
    
    expect(doubleAmount).toBe(baseResult * 2);
  });

  it('should handle various rates at same loan amount', () => {
    const result1 = calculateMonthlyRepayment(100000, 3.0);
    const result2 = calculateMonthlyRepayment(100000, 6.0);
    
    expect(result2).toBe(result1 * 2);
  });

  it('should round correctly for exact cent values', () => {
    const result = calculateMonthlyRepayment(100000, 4.80);
    expect(result).toBeCloseTo(400, 5);
  });
});
