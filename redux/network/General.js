import {request} from './api';

export const getICountrie = () => request('GET', 'summary');
