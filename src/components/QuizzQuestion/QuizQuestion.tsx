import React from 'react';
import { QuizQuestionProps } from './QuizQuestion.types';
import { QuizQuestionList } from './QuizzQuestionList/QuizzQuestionList';
import { useQuizeState } from '../../hooks/useQuizeState';

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  quizQuestion,
  selectedOptionIndex,
  handleOptionChange,
}) => {
  const { isLoading } = useQuizeState();
  return (
    <div className="flex flex-col gap-3 bg-violet-300 pt-12 pb-4 px-10 rounded-md">
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
      <div className="h-8 w-full text-center">
        {isLoading && <p className="text-xl"> Loading...</p>}
      </div>
    </div>
  );
};
