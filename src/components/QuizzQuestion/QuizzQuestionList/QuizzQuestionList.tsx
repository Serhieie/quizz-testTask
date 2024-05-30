import React from 'react';
import { QuizQuestionItem } from '../QuizzQuestionItem/QuizzQuestionItem';
import { QuizQuestionListProps } from './QuizQuestionList.types';

export const QuizQuestionList: React.FC<QuizQuestionListProps> = ({
  questions,
  selectedOptionIndex,
  handleOptionChange,
}) => {
  return (
    <ul className="flex flex-col gap-1">
      {questions &&
        questions.map((question, index) => (
          <QuizQuestionItem
            key={index}
            question={question}
            index={index}
            selectedOptionIndex={selectedOptionIndex}
            handleOptionChange={handleOptionChange}
          />
        ))}
    </ul>
  );
};
