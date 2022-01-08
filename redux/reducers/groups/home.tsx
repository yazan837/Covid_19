import actions from '../../actions/index';
import {combineReducers} from 'redux';
import reactotron from 'reactotron-react-native';

const {
  FETCH_COUNTRIES,
  COMPLETE_FETCH_COUNTRIES,
  FETCH_ALL,
  COMPLETE_FETCH_ALL,
}: any = actions;

const initState = false;

//for films
const isFethingCountries = (state = initState, action: any) => {
  switch (action.type) {
    case FETCH_COUNTRIES: {
      return true;
    }
    case COMPLETE_FETCH_COUNTRIES: {
      return false;
    }
    default: {
      return state;
    }
  }
};
const isFethingCountriesError = (state = initState, action: any) => {
  switch (action.type) {
    case COMPLETE_FETCH_COUNTRIES: {
      return !action.data.networkSuccess;
    }
    default: {
      return state;
    }
  }
};
const Countries = (state = [], action: any) => {
  switch (action.type) {
    case COMPLETE_FETCH_COUNTRIES:
      return action.data;

    default:
      return state;
  }
};
const Total = (state = {}, action: any) => {
  switch (action.type) {
    case COMPLETE_FETCH_ALL:
      return action.data;

    default:
      return state;
  }
};
const TopFive = (state = [], action: any) => {
  switch (action.type) {
    case COMPLETE_FETCH_COUNTRIES:
      return action.data
        .sort((a: any, b: any) => b.TotalConfirmed - a.TotalConfirmed)
        .filter((r: any, i: any) => i < 5);

    default:
      return state;
  }
};

export default combineReducers({
  Countries,
  isFethingCountries,
  isFethingCountriesError,
  TopFive,
  Total,
});
