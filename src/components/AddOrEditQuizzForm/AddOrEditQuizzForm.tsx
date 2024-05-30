import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import {
  addQuiz,
  editQuiz,
  removeActiveQuizz,
  setIsLoading,
} from '../../redux/quiz/quizSlice';
import { AddQuestionForm } from './AddQuestionFrom';
import { ButtonsSet } from '../ButtonsSet/ButtonsSet';
import { Question } from '../../redux/quiz/quizzes.types';
import { useQuizeState } from '../../hooks/useQuizeState';
import Notiflix from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { Quizz } from '../../redux/quiz/quizzes.types';

export const AddOrEditQuizzForm: React.FC = () => {
  const { activeQuizz = '' } = useQuizeState();
  const [title, setTitle] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([
    { id: nanoid(), title: '', correctIndex: 0, options: ['', '', '', ''] },
  ]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (activeQuizz) {
      setTitle(activeQuizz.title);
      setQuestions(activeQuizz.questions);
    } else {
      setTitle('');
      setQuestions([
        { id: nanoid(), title: '', correctIndex: 0, options: ['', '', '', ''] },
      ]);
    }
  }, [activeQuizz]);

  const handleAddQuestion = async () => {
    setQuestions([
      ...questions,
      { id: nanoid(), title: '', correctIndex: 0, options: ['', '', '', ''] },
    ]);

    dispatch(setIsLoading(true));
    await new Promise((resolve) => setTimeout(resolve, 600));
    dispatch(setIsLoading(false));
  };

  const handleSave = async () => {
    if (activeQuizz) {
      if (questions.length < 2)
        return Notiflix.Notify.failure('You need fill minimum two questions');
      if (
        (!questions[0].options[0] && !questions[0].options[1]) ||
        (!questions[1].options[0] && !questions[1].options[1]) ||
        (!questions[0].title && !questions[1].title) ||
        (!questions[0].correctIndex && !questions[1].correctIndex)
      )
        return Notiflix.Notify.failure('Questions should not be empty');
      if (!title) return Notiflix.Notify.failure('Fields should not be empty');
      const newQuiz: Quizz = {
        id: activeQuizz.id,
        title,
        questions,
      };
      dispatch(editQuiz(newQuiz));
      dispatch(removeActiveQuizz());

      dispatch(setIsLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 600));
      dispatch(setIsLoading(false));

      navigate('/quizzes');
      Notiflix.Notify.success('Quiz Success Edited');
    } else {
      if (questions.length < 2)
        return Notiflix.Notify.failure('You need fill minimum two questions');
      if (
        (!questions[0].options[0] && !questions[0].options[1]) ||
        (!questions[1].options[0] && !questions[1].options[1]) ||
        (!questions[0].title && !questions[1].title) ||
        (!questions[0].correctIndex && !questions[1].correctIndex)
      )
        return Notiflix.Notify.failure('Questions should not be empty');
      if (!title) return Notiflix.Notify.failure('Fields should not be empty');
      const newQuiz: Quizz = {
        id: nanoid(),
        title,
        questions,
      };
      dispatch(addQuiz(newQuiz));
      Notiflix.Notify.success('Added success');

      dispatch(setIsLoading(true));
      await new Promise((resolve) => setTimeout(resolve, 600));
      dispatch(setIsLoading(false));

      navigate('/quizzes');
    }
  };

  const handleCancelQuestion = () => {
    setQuestions(questions.slice(0, -1));
  };

  return (
    <div className="w-full px-44 xl:px-64 xs:px-0 pt-4 ">
      <form className="flex flex-col max-w-[700px] mx-auto gap-2 pb-20 py-6 sm:px-6 md:px-12 xs:px-2  rounded-lg bg-violet-300">
        <h2
          className="text-2xl xl:text-3xl font-semibold xs:mt-4
         mb-2"
        >
          {activeQuizz ? 'Edit Quiz' : 'Create New Quiz'}
        </h2>
        <label className="flex flex-col">
          Title:
          <input
            type="text"
            min={2}
            minLength={2}
            pattern=".{2,}"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <hr className="border-t-2 border-slate-500 my-6" />
        {questions.map((question, index) => (
          <AddQuestionForm
            key={question.id}
            question={question}
            index={index}
            questions={questions}
            setQuestions={setQuestions}
          />
        ))}
        <div className="flex items-center flex-wrap">
          {' '}
          <ButtonsSet
            skipKlick={handleAddQuestion}
            acceptClick={handleSave}
            skipText="Add Question"
            accepText="Save Quiz"
            skipType="button"
            acceptType="button"
          />
          <button
            className=" bg-red-200 py-5 xs:mt-4 xs:py-3 hover:bg-red-300"
            onClick={handleCancelQuestion}
            type="button"
          >
            Delete Question
          </button>
        </div>
      </form>
    </div>
  );
};
