import {put, takeLatest, call, select} from 'redux-saga/effects';
import {getICountrie} from '../../network/General';
import actions from '../../actions';
import reactotron from 'reactotron-react-native';

import store from '../../store';
const {completeFetchCountries, FETCH_COUNTRIES} = actions;

function* performFetchCountries({}) {
  try {
    const result = yield call(getICountrie);
 
    if (result.networkSuccess) {
      yield put(completeFetchCountries({data: result.data}));
    } else yield put(completeFetchCountries({data: []}));
  } catch {
    yield put(completeFetchCountries({data: []}));
    return;
  }
}

export function* watchFetchCountries() {
  yield takeLatest(FETCH_COUNTRIES, performFetchCountries);
}
