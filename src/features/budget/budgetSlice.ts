import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BudgetState {
  monthlyBudget: number;
  currency: string;
}

interface UpdateBudgetPayload {
  amount: number;
  currency: string;
}

const initialState: BudgetState = {
  monthlyBudget: 1000,
  currency: 'USD',
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    updateBudget: (state, action: PayloadAction<UpdateBudgetPayload>) => {
      state.monthlyBudget = action.payload.amount;
      state.currency = action.payload.currency;
    },
  },
});

export const { updateBudget } = budgetSlice.actions;
export default budgetSlice.reducer; 