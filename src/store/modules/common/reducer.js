import produce from 'immer';

const INITITAL_STATE = {
  loading: false,
  error: false,
  message: '',
};
export default function login(state = INITITAL_STATE, action) {
  switch (action.type) {
    case '@common/LOADING':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.message = action.payload.message;
        draft.error = action.payload.error;
      });
    case '@common/SUCCESS':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.message = action.payload.message;
        draft.error = action.payload.error;
      });
    case '@common/FAILURE':
      return produce(state, draft => {
        draft.loading = action.payload.loading;
        draft.message = action.payload.message;
        draft.error = action.payload.error;
      });
    default:
      return state;
  }
}
