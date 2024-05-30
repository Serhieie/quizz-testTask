import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../QuizzQuestion/QuizQuestion';
import { useQuizeState } from '../../hooks/useQuizeState';
import { Time } from './Time';
import { ButtonsSet } from '../ButtonsSet/ButtonsSet';
import { CompletedQuizz } from '../CompletedQuizz/CompletedQuizz';
import { useDispatch } from 'react-redux';
import { setCurrentCorrectAnswers } from '../../redux/user/userSlice';

export const Quizz: React.FC = () => {
  const { activeQuizz } = useQuizeState();
  const [time, setTime] = useState('00:59');
  const dispatch = useDispatch();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const lastIndex = activeQuizz ? activeQuizz.questions.length - 1 : 0;

  useEffect(() => {
    if (activeQuestionIndex > lastIndex) {
      setIsQuizCompleted(true);
    }
  }, [activeQuestionIndex, lastIndex]);

  const handleNextClick = () => {
    if (activeQuestionIndex < lastIndex) {
      setTime('00:59');
      setActiveQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      setIsQuizCompleted(true);
      setSelectedOptionIndex(null);
    }
  };

  const handleOptionChange = (index: number) => {
    console.log(index);
    setSelectedOptionIndex(index);
  };

  const currentQuestion = activeQuizz?.questions[activeQuestionIndex];

  const handleAcceptClick = () => {
    if (!selectedOptionIndex && selectedOptionIndex !== 0) return;
    if (activeQuestionIndex <= lastIndex) {
      setTime('00:59');
      if (selectedOptionIndex === currentQuestion?.correctIndex) {
        dispatch(setCurrentCorrectAnswers(1));
      }
      setActiveQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOptionIndex(null);
    } else {
      setIsQuizCompleted(true);
      setSelectedOptionIndex(null);
    }
  };

  if (
    isQuizCompleted ||
    (activeQuestionIndex === lastIndex && time === '00:00')
  ) {
    return <CompletedQuizz />;
  }

  return (
    activeQuizz && (
      <div className="flex flex-col gap-3 w-[100dvw] py-12 xl:px-64 md:px-32 sm:px-20 xs:px-6">
        <h2 className="text-lg font-semibold select-none">
          {activeQuizz.title}
        </h2>
        {currentQuestion && (
          <>
            <span>{`Question ${activeQuestionIndex + 1}/${
              activeQuizz.questions.length
            }`}</span>
            <QuizQuestion
              quizQuestion={currentQuestion}
              selectedOptionIndex={selectedOptionIndex}
              handleOptionChange={handleOptionChange}
            />
            <div className="flex items-center justify-center">
              <ButtonsSet
                skipKlick={handleNextClick}
                acceptClick={handleAcceptClick}
                skipText="Skip"
                accepText="Accept"
                skipType="button"
                acceptType="button"
              />
              <Time
                time={time}
                setTime={setTime}
                activeQuestionIndex={activeQuestionIndex}
                setActiveQuestionIndex={setActiveQuestionIndex}
                lastIndex={lastIndex}
              />
            </div>
            <p className="m-0 p-0 mt-4">*You cant back to skipped questions</p>
          </>
        )}
      </div>
    )
  );
};
