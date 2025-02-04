import React, { useState } from 'react';

interface Expense {
  id: string;
  date: string;
  category: string;
  description: string;
  amount: number;
}

export const ExpenseList: React.FC = () => {
  const [expenses] = useState<Expense[]>([
    {
      id: '1',
      date: '2024-01-15',
      category: 'Food',
      description: 'Grocery shopping',
      amount: 150.50
    },
    {
      id: '2',
      date: '2024-01-16',
      category: 'Transportation',
      description: 'Fuel',
      amount: 45.00
    },
    {
      id: '3',
      date: '2024-01-17',
      category: 'Entertainment',
      description: 'Movie tickets',
      amount: 30.00
    },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Expenses</h2>
        <button className="btn-primary">Add Expense</button>
      </div>

      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {expenses.map((expense) => (
                <tr key={expense.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(expense.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {expense.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {expense.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    ${expense.amount.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 