import {put, takeLatest, call} from 'redux-saga/effects';
import {getICountrie} from '../../network/General';
import actions from '../../actions';

const {completeFetchCountries, FETCH_COUNTRIES}: any = actions;

function* performFetchCountries(): any {
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
