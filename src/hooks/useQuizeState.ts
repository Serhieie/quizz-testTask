import { useSelector } from 'react-redux';
import { Quizz, Question } from '../redux/quiz/quizzes.types';
import {
  getActiveQuizz,
  getQuestionById,
  getQuestionsByQuizId,
  getQuizById,
  getQuizzes,
  getIsLoading,
} from '../redux/quiz/quizzessSelectors';

interface useQuizeStateReturn {
  isLoading: boolean;
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
  const isLoading: boolean = useSelector(getIsLoading);

  if (!quizId && !questionId) {
    return { quizzes, activeQuizz, isLoading };
  }

  return {
    activeQuizzId,
    activeQuizz,
    quizz,
    quizzes,
    question,
    questions,
    isLoading,
  };
};
