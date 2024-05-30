export interface QuizQuestionItemProps {
  question: string;
  index: number;
  selectedOptionIndex: number | null;
  handleOptionChange: (index: number) => void;
}
