<script lang="ts">
  import { calculateMonthlyRepayment } from './calculator';
  import VERSION from '../package.json' assert { type: 'json' };

  let loanAmount: number = 200000;
  let interestRate: number = 5.0;

  $: monthlyPayment = calculateMonthlyRepayment(loanAmount, interestRate);
</script>

<svelte:head>
  <meta name="app-version" content={VERSION.version} />
</svelte:head>

<div class="container mt-4">
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-6">
      <h1 class="text-center mb-4">Interest Only Mortgage Calculator</h1>
      
      <div class="card shadow-sm">
        <div class="card-body">
          <!-- Loan Amount Input -->
          <div class="mb-4">
            <label for="loanAmount" class="form-label fw-bold">Loan Amount (£)</label>
            <input 
              type="number"
              inputmode="decimal"
              id="loanAmount"
              class="form-control form-control-lg" 
              bind:value={loanAmount}
              min="10000" 
              max="2000000" 
              step="1000"
            />
          </div>

          <!-- Interest Rate Slider -->
          <div class="mb-4">
            <label for="interestRate" class="form-label fw-bold">Interest Rate (%)</label>
            <input 
              type="number"
              inputmode="decimal"
              id="interestRateInput"
              class="form-control mb-2" 
              bind:value={interestRate}
              min="3" 
              max="10" 
              step="0.01"
            />
            <input 
              type="range" 
              id="interestRate"
              class="form-range" 
              bind:value={interestRate}
              min="3" 
              max="10" 
              step="0.01"
            />
            <div class="d-flex justify-content-between text-muted small">
              <span>3%</span>
              <span>6.5%</span>
              <span>10%</span>
            </div>
          </div>

          <!-- Monthly Payment Result -->
          <div class="text-center p-4 bg-light rounded">
            <h5 class="text-muted mb-2">Monthly Repayment</h5>
            <p class="display-4 fw-bold text-primary">
              {monthlyPayment.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}
            </p>
          </div>

          <!-- Info Section -->
          <div class="mt-3 p-3 bg-warning bg-opacity-10 rounded border border-warning">
            <small class="text-muted">
              This calculator is for interest-only mortgages. The monthly payment shown is just the interest portion - you'll need to repay the full loan amount separately at the end of your term.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :global(body) {
    background-color: #f8f9fa;
  }
  
  .form-range::-webkit-slider-thumb {
    background-color: #0d6efd;
  }
  
  .form-range::-moz-range-thumb {
    background-color: #0d6efd;
  }
</style>
