import { concat, merge } from 'lodash';
import { to } from 'await-to-js';

import { createSet } from '../reduxSets';

const initialState = {
  data: [],
  state: {
    loading: false,
    error: false,
    success: false,
    loaded: false,
  },
};

const repos = createSet(
  {
    ADD_REPOS: (state, action) =>
      merge({}, state, { data: concat([], state.data, action.payload) }),
    SET_REPOS: (state, action) => ({
      state: state.state,
      data: action.payload,
    }),
    CLEAR_REPOS: (state, action) => initialState,
    ASYNC_FETCH_REPOS_REQUEST: (state, action) => ({
      ...state,
      state: {
        loading: true,
        error: false,
        success: false,
        loaded: false,
      },
    }),
    ASYNC_FETCH_REPOS_FAILURE: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: true,
        success: false,
        loaded: true,
        message: action.payload,
      },
    }),
    ASYNC_FETCH_REPOS_SUCCESS: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: false,
        success: true,
        loaded: true,
      },
    }),
  },
  initialState
);

repos.actions.asyncFetchRepos = urls => async dispatch =>{
  dispatch(repos.actions.asyncFetchReposRequest());

  const [error1, responses] = await to(Promise.all(urls.map(url => fetch(url))));
  if (error1) {
    return dispatch(repos.actions.asyncFetchReposFailure(error1));
  }

  const [error2, responseBody] = await to(Promise.all(responses.map(response => response.json())));
  if (error2) {
    return dispatch(repos.actions.asyncFetchReposFailure(error2));
  }

  dispatch(repos.actions.asyncFetchReposSuccess());
  return dispatch(repos.actions.addRepos(responseBody));
};

export default repos;
