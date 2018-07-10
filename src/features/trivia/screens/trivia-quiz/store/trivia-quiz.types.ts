export interface TriviaQuizConnector {
  currentQuestionQuestion: string;
  currentQuestionCategory: string;
  currentQuestionNumber: number;
  currentQuestionIndex: number;
  totalNumberOfQuestion: number;
  isLoading: boolean;
}
