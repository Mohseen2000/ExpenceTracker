import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <div className="relative overflow-hidden pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-0">
            <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-6 sm:px-6 lg:mt-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                {/* Left Content */}
                <div className="sm:text-center lg:text-left lg:col-span-6">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Take Control of Your</span>
                    <span className="block gradient-text">Financial Journey</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Track expenses, set budgets, and achieve your financial goals with our intuitive expense tracking solution. Start your journey to financial freedom today.
                  </p>
                  <div className="mt-4 mb-0 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link
                        to="/login"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get Started
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#features"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Content - Dashboard Preview */}
                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                      <div className="w-full">
                        {/* Dashboard Preview Image */}
                        <div className="relative bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
                          {/* Mock Dashboard Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-primary-50 p-4 rounded-lg">
                              <div className="text-primary-600 text-sm font-medium">Total Savings</div>
                              <div className="text-2xl font-bold text-primary-700">$12,540</div>
                            </div>
                            <div className="bg-secondary-50 p-4 rounded-lg">
                              <div className="text-secondary-600 text-sm font-medium">Monthly Budget</div>
                              <div className="text-2xl font-bold text-secondary-700">$3,200</div>
                            </div>
                          </div>
                          
                          {/* Mock Chart */}
                          <div className="bg-white rounded-lg p-4 border border-gray-100">
                            <div className="h-32 flex items-end space-x-2">
                              <div className="w-1/6 bg-primary-200 rounded-t" style={{ height: '60%' }}></div>
                              <div className="w-1/6 bg-primary-300 rounded-t" style={{ height: '80%' }}></div>
                              <div className="w-1/6 bg-primary-400 rounded-t" style={{ height: '40%' }}></div>
                              <div className="w-1/6 bg-primary-500 rounded-t" style={{ height: '70%' }}></div>
                              <div className="w-1/6 bg-primary-600 rounded-t" style={{ height: '90%' }}></div>
                              <div className="w-1/6 bg-primary-700 rounded-t" style={{ height: '50%' }}></div>
                            </div>
                            <div className="mt-2 text-sm text-gray-500 text-center">Monthly Expenses</div>
                          </div>

                          {/* Mock Recent Transactions */}
                          <div className="mt-4 space-y-2">
                            <div className="text-sm font-medium text-gray-700">Recent Transactions</div>
                            <div className="bg-white p-2 rounded-lg border border-gray-100 flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <span>Groceries</span>
                              </div>
                              <span className="text-primary-600 font-medium">-$85.50</span>
                            </div>
                            <div className="bg-white p-2 rounded-lg border border-gray-100 flex justify-between items-center">
                              <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-secondary-100 rounded-full flex items-center justify-center">
                                  <svg className="w-4 h-4 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                  </svg>
                                </div>
                                <span>Entertainment</span>
                              </div>
                              <span className="text-secondary-600 font-medium">-$35.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Showcase Section */}
      <div className="py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            {/* Left side - Feature highlights */}
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Smart Financial Management
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Take control of your finances with our powerful features designed to help you save more and spend wisely.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Smart Categorization</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Automatically categorize your expenses and track spending patterns across different categories.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Real-time Analytics</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Get instant insights with interactive charts and detailed spending analysis.
                  </dd>
                </div>

                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-accent-500 to-accent-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Smart Alerts</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Get notified when you're approaching budget limits or about unusual spending patterns.
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right side - Interactive Preview */}
            <div className="mt-10 -mx-4 relative lg:mt-0">
              <div className="relative space-y-4">
                {/* Monthly Overview Card */}
                <div className="animate-hover bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Monthly Overview</h4>
                      <span className="text-sm text-gray-500">September 2023</span>
                    </div>
                    <div className="space-y-3">
                      {/* Progress Bars */}
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Groceries</span>
                          <span className="text-primary-600">$420/$500</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-primary-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Entertainment</span>
                          <span className="text-secondary-600">$150/$300</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-secondary-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Transport</span>
                          <span className="text-accent-600">$180/$200</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-accent-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Transactions Card */}
                <div className="animate-hover bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="px-4 py-5 sm:p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Grocery Store</p>
                            <p className="text-xs text-gray-500">Today</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-red-600">-$65.40</span>
                      </div>
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">Salary Deposit</p>
                            <p className="text-xs text-gray-500">Yesterday</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-green-600">+$3,450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-white/50 backdrop-blur-sm py-2 -mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="animate-hover bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50">
              <dt className="text-base font-medium text-gray-500">Active Users</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-primary-600">
                  50K+
                  <span className="ml-2 text-sm font-medium text-gray-500">users</span>
                </div>
              </dd>
            </div>

            <div className="animate-hover bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50">
              <dt className="text-base font-medium text-gray-500">Expenses Tracked</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-secondary-600">
                  $2M+
                  <span className="ml-2 text-sm font-medium text-gray-500">monthly</span>
                </div>
              </dd>
            </div>

            <div className="animate-hover bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50">
              <dt className="text-base font-medium text-gray-500">Money Saved</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-accent-600">
                  30%
                  <span className="ml-2 text-sm font-medium text-gray-500">average</span>
                </div>
              </dd>
            </div>

            <div className="animate-hover bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50">
              <dt className="text-base font-medium text-gray-500">User Rating</dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-primary-600">
                  4.9/5
                  <span className="ml-2 text-sm font-medium text-gray-500">stars</span>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple steps to financial freedom
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="hidden lg:block w-full border-t border-gray-300"></div>
            </div>
            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
              {/* Step 1 */}
              <div className="animate-hover">
                <div className="flow-root bg-white/50 backdrop-blur-sm rounded-lg px-6 pb-8 pt-12 relative border border-gray-200/50">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold text-xl shadow-lg">
                    1
                  </span>
                  <h3 className="text-xl font-medium text-gray-900 text-center">Sign Up</h3>
                  <p className="mt-4 text-base text-gray-500 text-center">
                    Create your free account in less than 2 minutes. No credit card required.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="animate-hover">
                <div className="flow-root bg-white/50 backdrop-blur-sm rounded-lg px-6 pb-8 pt-12 relative border border-gray-200/50">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-bold text-xl shadow-lg">
                    2
                  </span>
                  <h3 className="text-xl font-medium text-gray-900 text-center">Track Expenses</h3>
                  <p className="mt-4 text-base text-gray-500 text-center">
                    Log your daily expenses and categorize them with our intuitive interface.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="animate-hover">
                <div className="flow-root bg-white/50 backdrop-blur-sm rounded-lg px-6 pb-8 pt-12 relative border border-gray-200/50">
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-xl shadow-lg">
                    3
                  </span>
                  <h3 className="text-xl font-medium text-gray-900 text-center">Gain Insights</h3>
                  <p className="mt-4 text-base text-gray-500 text-center">
                    Get detailed analytics and recommendations to improve your spending habits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Better way to manage your money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Everything you need to take control of your finances in one place.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative">
                <div className="animate-hover">
                  <div className="flow-root bg-white/50 backdrop-blur-sm rounded-lg px-6 pb-8 h-full border border-gray-200/50">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Expense Tracking</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Easily track your daily expenses and categorize them for better understanding of your spending habits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="animate-hover">
                  <div className="flow-root bg-white/50 backdrop-blur-sm rounded-lg px-6 pb-8 h-full border border-gray-200/50">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Budget Management</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Set and manage budgets for different categories and get notifications when you're close to limits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="animate-hover">
                  <div className="flow-root bg-white/50 backdrop-blur-sm rounded-lg px-6 pb-8 h-full border border-gray-200/50">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-md shadow-lg">
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Insights & Analytics</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Get detailed insights about your spending patterns with beautiful charts and reports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  <span className="block">Ready to get started?</span>
                  <span className="block text-primary-200">Start your free account today.</span>
                </h2>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-colors"
                  >
                    Get started
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 transition-colors"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 