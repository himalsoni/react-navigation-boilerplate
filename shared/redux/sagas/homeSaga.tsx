import {delay} from 'redux-saga';
import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import { ACTION_TYPES } from '../constants/actionTypes';

export function* handleApiRequest(action) {
  console.log('-----------------------------');

  try {
    // const apiConfig = {
    //   method: 'post',
    //   url: 'https://jsonplaceholder.typicode.com/posts',
    //   data: {
    //     section_id: action.payload.section_id
    //   }
    // };
    //
    // const response = yield call(axios, apiConfig);
    // const response = axios.get('@database/list.json');
    const response = yield call(axios.get, '../src/database/list.json')
    // axios.get('./data.json')
       // .then((res)=>{
       //   console.log('res');
       //   console.log(res);
       //   return res;
       // }).catch((err)=>{
       //   console.log('err');
       //   console.log(err);
       //   return err;
       // })

    console.log('response');
    console.log(response);
    // yield put({type: 'API_REQUEST_SUCCEEDED', payload: response.data });
  } catch (e) {
    console.log(e);
    yield put({type: 'API_REQUEST_FAILED', payload: e.message });
  }
}

export function* watchApiRequest() {
  console.log('=================================');

  yield takeEvery(ACTION_TYPES.HOME.HOME_LAUNCHED, handleApiRequest);
}
