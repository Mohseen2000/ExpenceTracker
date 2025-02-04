import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Expense {
  id: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

interface ExpenseState {
  expenses: Expense[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ExpenseState = {
  expenses: [],
  isLoading: false,
  error: null,
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(expense => expense.id !== action.payload);
    },
    updateExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.expenses.findIndex(expense => expense.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
  },
});

export const { addExpense, deleteExpense, updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer; 