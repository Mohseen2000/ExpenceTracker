import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { updateBudget } from '../../features/budget/budgetSlice';

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  // Add more currencies as needed
];

export const BudgetSettings: React.FC = () => {
  const dispatch = useDispatch();
  const { monthlyBudget, currency } = useSelector((state: RootState) => state.budget);
  const [budget, setBudget] = useState(monthlyBudget.toString());
  const [selectedCurrency, setSelectedCurrency] = useState(currency);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateBudget({
      amount: parseFloat(budget),
      currency: selectedCurrency
    }));
    setIsEditing(false);
  };

  return (
    <div className="glass-card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold gradient-text">Monthly Budget</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="btn-secondary"
        >
          {isEditing ? 'Cancel' : 'Edit Budget'}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Set Monthly Budget</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">
                    {currencies.find(c => c.code === selectedCurrency)?.symbol}
                  </span>
                </div>
                <input
                  type="number"
                  step="0.01"
                  required
                  className="input-field pl-7"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Currency</label>
              <select
                className="input-field mt-1"
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code} - {currency.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-primary">
              Save Budget
            </button>
          </div>
        </form>
      ) : (
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-primary-600">
            {currencies.find(c => c.code === currency)?.symbol}{monthlyBudget}
          </span>
          <span className="text-gray-500">per month</span>
        </div>
      )}

      {/* Budget Progress */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Monthly Progress</span>
          <span>75% used</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000"
            style={{ width: '75%' }}
          />
        </div>
      </div>
    </div>
  );
}; 