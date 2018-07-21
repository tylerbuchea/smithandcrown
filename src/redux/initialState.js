// import repos from './fixtures/repos';

const initialState = {
  repos: {
    data: [], // repos
    state: {
      loading: false,
      error: false,
      success: false,
      loaded: false,
    },
  },
};

export default initialState;
