import {put, takeLatest, call} from 'redux-saga/effects';
import {getICountrie, getAll} from '../../network/General';
import actions from '../../actions';
import reactotron from 'reactotron-react-native';

const {
  completeFetchCountries,
  FETCH_COUNTRIES,
  FETCH_ALL,
  completeFetchAll,
}: any = actions;

function* performFetchCountries(): any {
  try {
    const result = yield call(getICountrie);

    if (result.networkSuccess) {
      yield put(completeFetchCountries({data: result.data.Countries}));
    } else yield put(completeFetchCountries({data: []}));
  } catch {
    yield put(completeFetchCountries({data: []}));
    return;
  }
}

export function* watchFetchCountries() {
  yield takeLatest(FETCH_COUNTRIES, performFetchCountries);
}
function* performFetchAll(): any {
  try {
    const result = yield call(getAll);

    if (result.networkSuccess) {
      yield put(completeFetchAll({data: result.data}));
    } else yield put(completeFetchAll({data: []}));
  } catch {
    yield put(completeFetchAll({data: []}));
    return;
  }
}

export function* watchFetchAll() {
  yield takeLatest(FETCH_ALL, performFetchAll);
}