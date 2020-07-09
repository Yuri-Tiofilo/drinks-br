// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, put, all, takeLatest} from 'redux-saga/effects';
import {navigate} from '../../../services/navigation';
import api from '../../../services/api';
import {
  commonLoadingActivity,
  commonSuccessAction,
  commonFailureAction,
} from '../common/actions';
// import {Exceptions} from '../../../procedures';
import {requestDrinksSucess} from './actions';

function* requestCategoriesSagas({payload}) {
  const {category} = payload;
  let baseUrl = '';

  if (category.name === 'Cocktail') {
    baseUrl = '/filter.php?c=Cocktail';
  } else {
    baseUrl = '/filter.php?c=Ordinary_Drink';
  }

  navigate('SelectedDrinks');

  yield put(commonLoadingActivity('loading...'));
  try {
    const {data} = yield call(api.get, `${baseUrl}`);

    yield put(requestDrinksSucess(data.drinks, category.name));

    yield put(commonSuccessAction());
  } catch (error) {
    yield put(commonFailureAction('API call error'));
  }
}

export default all([
  takeLatest('@categories/REQUEST_DRINKS', requestCategoriesSagas),
]);
