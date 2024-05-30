import React, { useState } from 'react';
import { Question } from '../../redux/quiz/quizzes.types';
import { MdAddBox } from 'react-icons/md';
import { RiDeleteBackFill } from 'react-icons/ri';

interface QuestionProps {
  question: Question;
  index: number;
  questions: Question[];
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

export const AddQuestionForm: React.FC<QuestionProps> = ({
  question,
  index,
  questions,
  setQuestions,
}) => {
  const [showCodeInput, setShowCodeInput] = useState(false);
  const handleCorrectIndexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return {
          ...q,
          correctIndex: parseInt(e.target.value),
        };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return {
          ...q,
          title: e.target.value,
        };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return {
          ...q,
          code: e.target.value,
        };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (
    optionIndex: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return {
          ...q,
          options: q.options.map((option, j) => {
            if (j === optionIndex) {
              return e.target.value;
            }
            return option;
          }),
        };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleAddOption = () => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return {
          ...q,
          options: [...q.options, ''],
        };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const handleRemoveOption = (optionIndex: number) => {
    const updatedQuestions = questions.map((q, i) => {
      if (i === index) {
        return {
          ...q,
          options: q.options.filter((_, j) => j !== optionIndex),
        };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  const toggleCodeInput = () => {
    setShowCodeInput(!showCodeInput);
  };

  return (
    <div key={question.id} className="flex flex-col gap-2">
      <label className="flex flex-col">
        Question {index + 1} Title:
        <textarea
          className="bg-white focus:outline-none py-6 px-4 h-32  resize-none overflow-y-auto"
          minLength={5}
          value={question.title}
          onChange={handleQuestionChange}
        />
      </label>
      <button
        type="button"
        onClick={toggleCodeInput}
        className="mt-2 text-slate-800 text-lg flex items-center justify-center max-w-[200px]"
      >
        <span className="flex items-center gap-1">
          {showCodeInput ? 'Hide Code' : 'Add Code'} <MdAddBox size={28} />
        </span>
      </button>
      {showCodeInput && (
        <label className="flex flex-col">
          Question Code:
          <textarea
            className="bg-white focus:outline-none py-6 px-4 h-32 resize-none overflow-y-auto"
            value={question.code || ''}
            onChange={handleCodeChange}
          />
        </label>
      )}
      <label className="flex flex-col">
        Correct Answer Index:
        <input
          type="number"
          min={0}
          value={question.correctIndex != null ? question.correctIndex : 0}
          onChange={handleCorrectIndexChange}
        />
      </label>
      <label className="flex flex-col">
        Options:
        <ul className="flex flex-col gap-2">
          {question.options.map((option, optionIndex) => (
            <li
              key={optionIndex}
              className="flex items-center font-semibold gap-1"
            >
              <input
                type="text"
                minLength={5}
                pattern=".{5,}"
                value={option}
                onChange={(e) => handleOptionChange(optionIndex, e)}
                className="flex-1"
              />
              <button
                type="button"
                onClick={() => handleRemoveOption(optionIndex)}
                className="text-red-500"
              >
                <span className="flex items-center gap-1">
                  {' '}
                  <RiDeleteBackFill className="text-red-400" />
                  Remove
                </span>
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleAddOption}
          className="mt-2 text-slat-400 flex items-center justify-center text-lg max-w-[200px]"
        >
          <span className="flex items-center gap-1">
            Add Option <MdAddBox size={28} />
          </span>
        </button>
      </label>
      <hr className="border-t-2 border-slate-500 my-6" />
    </div>
  );
};
