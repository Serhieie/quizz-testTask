import { useSelector } from 'react-redux';
import { Quizz, Question } from '../redux/quiz/quizzes.types';
import {
  getActiveQuizz,
  getQuestionById,
  getQuestionsByQuizId,
  getQuizById,
  getQuizzes,
} from '../redux/quiz/quizzessSelectors';

interface useQuizeStateReturn {
  activeQuizzId?: string;
  activeQuizz?: Quizz | undefined;
  quizz?: Quizz | undefined;
  quizzes?: Quizz[];
  question?: Question | undefined;
  questions?: Question[] | undefined;
}

export interface useQuizeStateProps {
  quizId?: string;
  questionId?: string;
}

export const useQuizeState = ({
  quizId,
  questionId,
}: useQuizeStateProps = {}): useQuizeStateReturn => {
  const activeQuizzId: string = useSelector(getActiveQuizz);
  const activeQuizz: Quizz | undefined = useSelector(
    getQuizById(activeQuizzId)
  );
  const quizzes: Quizz[] = useSelector(getQuizzes);
  const quizz: Quizz | undefined = useSelector(getQuizById(quizId));
  const question: Question | undefined = useSelector(
    getQuestionById(quizId, questionId)
  );
  const questions: Question[] | undefined = useSelector(
    getQuestionsByQuizId(quizId)
  );

  if (!quizId && !questionId) {
    return { quizzes, activeQuizz };
  }

  return {
    activeQuizzId,
    activeQuizz,
    quizz,
    quizzes,
    question,
    questions,
  };
};
