// src/components/PracticeTests/PracticeTests.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const PracticeTests: React.FC = () => {
  return (
    <div className="practice-tests p-10">
      <section className="mock-tests mb-8">
        <h2 className="text-2xl font-bold mb-4">Mock Tests</h2>
        <ul className="list-disc list-inside">
          <li><Link to="/mock-test/1">Full-Length Mock Test 1</Link></li>
          <li><Link to="/mock-test/2">Full-Length Mock Test 2</Link></li>
          {/* More mock tests links */}
        </ul>
      </section>

      <section className="mini-quizzes mb-8">
        <h2 className="text-2xl font-bold mb-4">Mini Quizzes</h2>
        <ul className="list-disc list-inside">
          <li><Link to="/mini-quiz/1">Mini Quiz 1</Link></li>
          <li><Link to="/mini-quiz/2">Mini Quiz 2</Link></li>
          {/* More mini quizzes links */}
        </ul>
      </section>

      <section className="interactive-activities">
        <h2 className="text-2xl font-bold mb-4">Interactive Activities</h2>
        <div>
          {/* Interactive activities such as vocabulary games, grammar puzzles, etc. */}
          <Link to="/activity/vocabulary-game">Vocabulary Game</Link>
          {/* More interactive activities */}
        </div>
      </section>
    </div>
  );
};

export default PracticeTests;