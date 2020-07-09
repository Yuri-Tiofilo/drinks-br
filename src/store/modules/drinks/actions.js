export function requestMoreDetailsDrink(idDrink) {
  return {
    type: '@drinks/REQUEST_MORE_DETAILS_DRINK',
    payload: {idDrink},
  };
}
export function requestMoreDetailsDrinkSucess(drink) {
  return {
    type: '@drinks/REQUEST_MORE_DETAILS_DRINK_SUCESS',
    payload: {drink},
  };
}
