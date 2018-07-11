import { triviaQuizConnector } from './trivia-quiz.selector';
import { makeOverwrite } from 'src/core/utils/functional';
import { State } from 'src/app';

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
    questions: [
      question1True,
      question2False,
      question3True,
      question4True,
      question5False,
    ],
    quiz: {
      answers: [],
      currentQuestionIndex: 0,
    },
    isLoading: false,
  },
};

const overwriteMock = makeOverwrite(mockState);

describe('Trivia Quiz Selector', () => {
  describe('currentQuestionCategory', () => {
    test('returns current question category', () => {
      const expected = question4True.category;
      const currentQuestionIndex = 3;
      const state = overwriteMock({
        trivia: { quiz: { currentQuestionIndex } },
      });
      const actual = triviaQuizConnector(state).currentQuestionCategory;
      expect(actual).toEqual(expected);
    });
  });

  describe('currentQuestionNumber', () => {
    test('returns current question number', () => {
      const expected = 4;
      const currentQuestionIndex = 3;
      const state = overwriteMock({
        trivia: { quiz: { currentQuestionIndex } },
      });
      const actual = triviaQuizConnector(state).currentQuestionNumber;
      expect(actual).toEqual(expected);
    });
  });

  describe('currentQuestionIndex', () => {
    test('returns current question number', () => {
      const expected = 3;
      const currentQuestionIndex = 3;
      const state = overwriteMock({
        trivia: { quiz: { currentQuestionIndex } },
      });
      const actual = triviaQuizConnector(state).currentQuestionIndex;
      expect(actual).toEqual(expected);
    });
  });

  describe('currentQuestionTitle', () => {
    test('returns current question title', () => {
      const expected = question4True.title;
      const currentQuestionIndex = 3;
      const state = overwriteMock({
        trivia: { quiz: { currentQuestionIndex } },
      });
      const actual = triviaQuizConnector(state).currentQuestionTitle;
      expect(actual).toEqual(expected);
    });
  });

  describe('isLoading', () => {
    test('returns current question number', () => {
      const expected = true;
      const state = overwriteMock({
        trivia: { isLoading: true },
      });
      const actual = triviaQuizConnector(state).isLoading;
      expect(actual).toEqual(expected);
    });
  });
});
