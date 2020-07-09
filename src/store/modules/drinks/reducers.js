import produce from 'immer';

const INITITAL_STATE = {
  drink: [],
};
export default function drinks(state = INITITAL_STATE, action) {
  switch (action.type) {
    case '@drinks/REQUEST_MORE_DETAILS_DRINK_SUCESS':
      return produce(state, draft => {
        draft.drink = action.payload.drink;
      });
    default:
      return state;
  }
}
