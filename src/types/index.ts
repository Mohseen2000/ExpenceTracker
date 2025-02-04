export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  userId: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface ExpenseState {
  expenses: Expense[];
  isLoading: boolean;
  error: string | null;
} 