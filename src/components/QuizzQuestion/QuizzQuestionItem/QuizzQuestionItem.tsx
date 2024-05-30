import React from 'react';
import { QuizQuestionItemProps } from './QuizzQuestionItem.types';

export const QuizQuestionItem: React.FC<QuizQuestionItemProps> = ({
  question,
  index,
  selectedOptionIndex,
  handleOptionChange,
}) => {
  const isChecked = selectedOptionIndex === index;

  return (
    <li className="bg-slate-50 rounded-sm px-3 py-2 font-semibold w-full select-none">
      <label
        className="flex items-center justify-start gap-2 w-full"
        htmlFor={`question-${index}`}
      >
        <input
          className="checked:outline-none outline-none active:outline-none focus:outline-none"
          type="radio"
          name="question"
          id={`question-${index}`}
          checked={isChecked}
          onChange={() => handleOptionChange(index)}
        />
        {question}
      </label>
    </li>
  );
};
