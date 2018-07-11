import { State } from 'src/app';
import { makeOverwrite } from 'src/core/utils/functional';

import { triviaSummaryConnector } from './trivia-summary.selector';

const question1True = {
  category: 'test',
  correct_answer: true,
  difficulty: 'hard',
  title: 'title 1',
  type: 'test',
};

const question2False = {
  category: 'test',
  correct_answer: false,
  difficulty: 'hard',
  title: 'title 2',
  type: 'test',
};

const question3True = {
  category: 'test',
  correct_answer: true,
  difficulty: 'hard',
  title: 'title 3',
  type: 'test',
};

const question4True = {
  category: 'test',
  correct_answer: true,
  difficulty: 'hard',
  title: 'title 4',
  type: 'test',
};

const question5False = {
  category: 'test',
  correct_answer: false,
  difficulty: 'hard',
  title: 'title 5',
  type: 'test',
};

const mockState: State = {
  trivia: {
    questions: [],
    quiz: {
      answers: [],
      currentQuestionIndex: 0,
    },
    isLoading: false,
  },
};

const overwriteMock = makeOverwrite(mockState);

describe('Trivia Summary Selector', () => {
  describe('numberOfCorrectAnswers', () => {
    const questions = [
      question1True,
      question2False,
      question3True,
      question4True,
      question5False,
    ];
    test('finds number of correct answers', () => {
      const expected = 3;
      const answers = [false, false, true, true, true];
      const state = overwriteMock({ trivia: { questions, quiz: { answers } } });
      const actual = triviaSummaryConnector(state).numberOfCorrectAnswers;
      expect(actual).toEqual(expected);
    });
    test('returns zero when there are no answers', () => {
      const expected = 0;
      const answers: boolean[] = [];
      const state = overwriteMock({ trivia: { questions, quiz: { answers } } });
      const actual = triviaSummaryConnector(state).numberOfCorrectAnswers;
      expect(actual).toEqual(expected);
    });
  });

  describe('questionResults', () => {
    test('zips questions and answers and determines if question was answered correctly', () => {
      const questions = [
        question1True,
        question2False,
        question3True,
        question4True,
        question5False,
      ];
      const expected = [
        {
          questionTitle: question1True.title,
          answer: false,
          answeredCorrectly: false,
        },
        {
          questionTitle: question2False.title,
          answer: false,
          answeredCorrectly: true,
        },
        {
          questionTitle: question3True.title,
          answer: true,
          answeredCorrectly: true,
        },
        {
          questionTitle: question4True.title,
          answer: true,
          answeredCorrectly: true,
        },
        {
          questionTitle: question5False.title,
          answer: true,
          answeredCorrectly: false,
        },
      ];
      const answers = [false, false, true, true, true];
      const state = overwriteMock({ trivia: { questions, quiz: { answers } } });
      const actual = triviaSummaryConnector(state).questionResults;
      expect(actual).toEqual(expected);
    });
  });
});
