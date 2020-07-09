export function requestDrinks(category) {
  return {
    type: '@categories/REQUEST_DRINKS',
    payload: {category},
  };
}
export function requestDrinksSucess(drinks, titleHeader) {
  return {
    type: '@categories/REQUEST_DRINKS_SUCESS',
    payload: {drinks, titleHeader},
  };
}
