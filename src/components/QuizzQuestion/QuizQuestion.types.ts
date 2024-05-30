import { Question } from '../../redux/quiz/quizzes.types';

export interface QuizQuestionProps {
  quizQuestion: Question;
  selectedOptionIndex: number | null;
  handleOptionChange: (index: number) => void;
}
