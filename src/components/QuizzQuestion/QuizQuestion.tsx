import React from 'react';
import { QuizQuestionProps } from './QuizQuestion.types';
import { QuizQuestionList } from './QuizzQuestionList/QuizzQuestionList';

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  quizQuestion,
  selectedOptionIndex,
  handleOptionChange,
}) => {
  return (
    <div className="flex flex-col gap-3 bg-violet-300 py-12 px-10 rounded-md">
      <p className="text-lg font-semibold select-none">{quizQuestion?.title}</p>
      {quizQuestion && quizQuestion?.code && (
        <pre className="text-sm font-semibold select-none bg-violet-200 rounded-lg py-2 px-4 overflow-auto">
          <code className="break-words overflow-wrap-anywhere word-break-break-word white-space-pre-wrap">
            {quizQuestion?.code}
          </code>
        </pre>
      )}
      <QuizQuestionList
        questions={quizQuestion?.options}
        selectedOptionIndex={selectedOptionIndex}
        handleOptionChange={handleOptionChange}
      />
    </div>
  );
};
