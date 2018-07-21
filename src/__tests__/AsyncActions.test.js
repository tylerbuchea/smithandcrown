import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'; // You can use any testing library
import rootSet from '../redux/rootSet';

const { actions, types } = rootSet;
const mockStore = configureMockStore([thunk]);

describe('async actions companies', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('asyncFetchRepos fires correct success actions', async () => {
    const body = { foo: 'bar' };
    fetchMock.mock('*', body);

    const expected = [
      { type: types.ASYNC_FETCH_REPOS_REQUEST, payload: undefined },
      { type: types.ASYNC_FETCH_REPOS_SUCCESS, payload: undefined },
      { type: types.ADD_REPOS, payload: [body] },
    ];

    const urls = [
      'https://api.github.com/repos/bitcoin/bitcoin',
    ];
    const store = mockStore();
    await store.dispatch(actions.asyncFetchRepos(urls));
    expect(store.getActions()).toEqual(expected);
  });
});