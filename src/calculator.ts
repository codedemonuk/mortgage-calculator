export function calculateMonthlyRepayment(loanAmount: number, interestRate: number): number {
  return (loanAmount * (interestRate / 100)) / 12;
}
