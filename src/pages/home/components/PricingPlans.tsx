// src/components/PricingPlans/PricingPlans.tsx

import React from 'react';

interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
}

const pricingPlansData: Plan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 'Free',
    features: [
      'Access to 2 full-length tests',
      'Basic study materials',
      'Limited question bank',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    price: '$19.99/month',
    features: [
      'Unlimited full-length tests',
      'Advanced study materials',
      'Full question bank access',
      'Personalized progress tracking',
    ],
  },
  // ... more plans
];

const PricingPlans: React.FC = () => {
  return (
    <div className="pricing-plans p-10">
      <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
      <div className="plans-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingPlansData.map((plan) => (
          <div key={plan.id} className="plan-item bg-gray-100 p-6 rounded shadow-md">
            <h3 className="plan-name text-xl font-bold mb-2">{plan.name}</h3>
            <p className="plan-price font-bold mb-4">{plan.price}</p>
            <ul className="plan-features list-disc list-inside mb-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="feature">{feature}</li>
              ))}
            </ul>
            <button className="subscribe-btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        ))}
      </div>
      <div className="free-trial mt-8 text-center">
        <h3 className="text-xl font-bold">Not Sure Yet?</h3>
        <p className="mt-2">
          Try our platform for free with our 7-day trial, no credit card required.
        </p>
        <button className="trial-btn bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-4">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};

export default PricingPlans;