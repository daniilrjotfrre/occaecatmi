class IncomeTracker {
  private _sideHustleIncome: number;

  constructor(initialIncome: number = 0) {
    this._sideHustleIncome = initialIncome;
  }

  // Method to update the side hustle income
  public updateIncome(newIncome: number): void {
    if (newIncome >= 0) {
      this._sideHustleIncome = newIncome;
    } else {
      console.error('Income must be a non-negative number.');
    }
  }

  // Method to retrieve the current side hustle income
  public getIncome(): number {
    return this._sideHustleIncome;
  }
}

// Usage
const myIncomeTracker = new IncomeTracker();
myIncomeTracker.updateIncome(500); // Update side hustle income to 500
console.log(`Current side hustle income: $${myIncomeTracker.getIncome()}`);
