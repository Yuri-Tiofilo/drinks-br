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
import {requestMoreDetailsDrinkSucess} from './actions';

function* requestMoreDetailsDrink({payload}) {
  const {idDrink} = payload;

  yield put(commonLoadingActivity('loading...'));
  try {
    const {data} = yield call(api.get, `/lookup.php?i=${idDrink}`);

    yield put(commonSuccessAction());

    yield put(requestMoreDetailsDrinkSucess(data.drinks[0]));

    navigate('DetailsDrinks');
  } catch (error) {
    yield put(commonFailureAction('API call error in Search Drink'));
  }
}

export default all([
  takeLatest('@drinks/REQUEST_MORE_DETAILS_DRINK', requestMoreDetailsDrink),
]);
