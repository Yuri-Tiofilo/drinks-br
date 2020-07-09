import produce from 'immer';

const INITITAL_STATE = {
  drinks: [],
  titleHeader: '',
};
export default function categories(state = INITITAL_STATE, action) {
  switch (action.type) {
    case '@categories/REQUEST_DRINKS_SUCESS':
      return produce(state, draft => {
        draft.drinks = action.payload.drinks;
        draft.titleHeader = action.payload.titleHeader;
      });

    default:
      return state;
  }
}
