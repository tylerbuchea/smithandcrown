// import repos from './fixtures/repos';

const initialState = {
  repos: {
    data: [],
    // data: repos,
    state: {
      loading: false,
      error: false,
      success: false,
      loaded: false,
    },
  },
};

export default initialState;
