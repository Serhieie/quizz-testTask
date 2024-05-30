import React, { useState } from 'react';
import { useQuizeState } from '../../hooks/useQuizeState';
import { QuizSlot } from './QuizzSlot/QuizzSlot';
import { CreateQuizBtn } from './CreateQuizzBtn/CreateQuizzBtn';
import { IoSearch } from 'react-icons/io5';
import { useMedia } from '../../hooks/useMedia';

export const QuizList: React.FC = () => {
  const { quizzes } = useQuizeState();
  const { isMobile } = useMedia();
  const [filter, setFilter] = useState('');

  const filteredQuizzes = quizzes?.filter((quiz) =>
    quiz.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mx-auto px-4 w-[100dvw]">
      <div
        className={`${
          isMobile ? ' flex-col justify-center ' : ' flex '
        }  items-center justify-between`}
      >
        <h1
          className={`${
            isMobile ? ' mb-2 mt-4 ' : ' my-8 '
          }  text-center text-slate-700 select-none xs:text-3xl md:text-4xl`}
        >
          Start or Create Quiz
        </h1>
        {quizzes && quizzes.length >= 2 && (
          <label
            className={`${
              isMobile ? 'mb-4' : 'mb-0'
            } flex items-center justify-center gap-2`}
            htmlFor="filter"
          >
            <IoSearch size={28} />
            <input
              type="text"
              name="filter"
              id="filter"
              placeholder="Search quiz by name"
              value={filter}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-md mr-4 h-[36px]"
            />
          </label>
        )}
      </div>
      <div className="h-[calc(100dvh-216px)] bg-purple-200 rounded-lg overflow-y-auto">
        <div
          className="grid xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-3
       xs:grid-cols-2 gap-2  px-2
        py-2 "
        >
          {filteredQuizzes &&
            filteredQuizzes.map((quiz) => (
              <QuizSlot key={quiz.id} quiz={quiz} />
            ))}
          <CreateQuizBtn />
        </div>
      </div>
    </div>
  );
};
