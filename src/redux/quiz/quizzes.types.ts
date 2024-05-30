export interface Question {
  id: string;
  title: string;
  code?: string;
  correctIndex: number;
  options: string[];
}

export interface QuestionPayload extends Question {
  quizId: string;
}

export interface AddQuestionPayload {
  quizId: string;
  question: Omit<Question, 'id'>;
}

export interface RemoveQuestionPayload {
  quizId: string;
  questionId: string;
}

export interface Quizz {
  id: string;
  title: string;
  questions: Question[];
}

export interface QuizStateInterface {
  isLoading: boolean;
  activeQuizzId: string;
  filter: string;
  quizzes: Quizz[];
}
