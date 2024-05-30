export interface QuizQuestionListProps {
  questions: string[];
  selectedOptionIndex: number | null;
  handleOptionChange: (index: number) => void;
}
