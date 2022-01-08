import {createAction} from '../creators';

export default {
  ...createAction('FETCH_COUNTRIES'),
  ...createAction('COMPLETE_FETCH_COUNTRIES', 'data'),
  ...createAction('FETCH_ALL'),
  ...createAction('COMPLETE_FETCH_ALL', 'data'),
};
