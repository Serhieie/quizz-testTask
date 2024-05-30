import { Quizz } from '../../redux/quiz/quizzes.types';

export interface Question {
  id: number;
  title: string;
  options?: string[];
}

export interface QuizProps {
  quiz: Quizz;
}
