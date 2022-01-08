import {request} from './api';

export const getICountrie = () => request('GET', 'summary');
export const getAll = () => request('GET', 'world/total');