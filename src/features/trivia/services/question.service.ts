import Axios from 'axios';
import { map } from 'ramda';

import { Question } from '../store';

const toQuestion = (question: any): Question => ({
  category: question.category,
  type: question.type,
  difficulty: question.difficulty,
  title: question.question,
  correct_answer: question.correct_answer === 'True' ? true : false,
});

export const fetchQuestionsService = (): Promise<Question[]> => {
  return Axios.get(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  )
    .then(response => response.data.results)
    .then(map(toQuestion));
};
