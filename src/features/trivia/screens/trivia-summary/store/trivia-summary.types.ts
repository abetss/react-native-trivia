export interface QuestionResult {
  questionTitle: string;
  answer: boolean;
  answeredCorrectly: boolean;
}

export interface TriviaSummaryConnector {
  questionResults: QuestionResult[];
  numberOfCorrectAnswers: number;
}
