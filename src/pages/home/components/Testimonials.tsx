// src/components/Testimonials/Testimonials.tsx

import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  scoreImprovement: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Alice Johnson',
    quote: 'Thanks to this platform, my TOEIC score improved by 150 points!',
    scoreImprovement: 150,
  },
  {
    id: 2,
    name: 'Bob Smith',
    quote: 'The practice tests were spot on! They really prepared me for the real thing.',
    scoreImprovement: 100,
  },
  // ... more testimonials
];

const Testimonials: React.FC = () => {
  return (
    <div className="testimonials p-10">
      <h2 className="text-2xl font-bold mb-4">What Our Students Say</h2>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item mb-4">
            <blockquote className="italic quote">"{testimonial.quote}"</blockquote>
            <p className="student-name font-bold mt-2">{testimonial.name}</p>
            <p className="score-improvement text-sm">
              Score Improvement: {testimonial.scoreImprovement} points
            </p>
          </div>
        ))}
      </div>
      <div className="success-rates mt-8">
        <h3 className="text-xl font-bold">Success Rates</h3>
        <p className="mt-2">
          {/* Success statistics */}
          95% of our students improve their TOEIC scores after completing our study program.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;