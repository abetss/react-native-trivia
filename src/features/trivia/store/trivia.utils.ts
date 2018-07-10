import { QUIZ_TOTAL_QUESTIONS } from './trivia.constants';

export const isLastQuizQuestion = (currentQuestionIndex: number) =>
  QUIZ_TOTAL_QUESTIONS === currentQuestionIndex + 1;
