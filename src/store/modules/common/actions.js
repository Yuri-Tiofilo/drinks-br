export function commonLoadingActivity(message) {
  return {
    type: '@common/LOADING',
    payload: {
      message,
      loading: true,
      error: false,
    },
  };
}
export function commonSuccessAction(message) {
  return {
    type: '@common/SUCCESS',
    payload: {
      message,
      loading: false,
      error: false,
    },
  };
}
export function commonFailureAction(message) {
  return {
    type: '@common/FAILURE',
    payload: {
      message,
      loading: false,
      error: true,
    },
  };
}
