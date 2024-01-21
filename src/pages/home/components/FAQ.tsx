// src/components/FAQ/FAQ.tsx

import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is TOEIC?',
    answer: 'TOEIC, or Test of English for International Communication, is a standardized test that measures English language proficiency in a professional context.',
  },
  // ... more FAQs
];

const FAQ: React.FC = () => {
  return (
    <div className="faq p-10">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <dl>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <dt className="font-bold">{faq.question}</dt>
            <dd className="ml-4">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default FAQ;