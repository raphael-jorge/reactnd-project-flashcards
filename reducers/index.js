import {
  DECKS_SET,
  DECKS_ADD,
  DECKS_ADD_CARD,
  DECKS_SET_BESTSCORE,
} from '../actions';

export default function decks(state = {}, action) {
  switch (action.type) {
    case DECKS_SET:
      return {
        ...action.decks,
      };

    case DECKS_ADD:
      return {
        ...state,
        [action.deckObject.title]: { ...action.deckObject },
      };

    case DECKS_ADD_CARD: {
      const prevCards = state[action.deckTitle].cards;
      const newCards = prevCards.map((card) => card);
      newCards.push(action.cardObject);

      return {
        ...state,
        [action.deckTitle]: {
          ...state[action.deckTitle],
          cards: newCards,
          bestScore: null,
        },
      };
    }

    case DECKS_SET_BESTSCORE:
    return {
      ...state,
      [action.deckTitle]: {
        ...state[action.deckTitle],
        bestScore: action.bestScore,
      },
    };

    default:
      return state;
  }
}
