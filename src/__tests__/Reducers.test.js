import rootSet from '../redux/rootSet';
import initialState from '../redux/initialState';

const { types, reducers } = rootSet;

describe('repos reducers', () => {
  it(`${types.ADD_REPOS} returns correct state`, () => {
    const type = types.ADD_REPOS;
    const key = 'repos';
    const payload = [{ fizz: 'buzz' }];
    const expected = { ...initialState.repos, data: payload };
    const received = reducers({ [key]: initialState.repos }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.CLEAR_REPOS} returns correct state`, () => {
    const type = types.CLEAR_REPOS;
    const key = 'repos';
    const payload = null;
    const expected = initialState.repos;
    const received = reducers({ [key]: initialState.repos }, { type, payload });
    expect(received[key]).toEqual(expected);
  });

  it(`${types.SET_REPOS} returns correct state`, () => {
    const type = types.SET_REPOS;
    const key = 'repos';
    const payload = [{ foo: 'bar' }];
    const expected = { ...initialState.repos, data: payload };
    const received = reducers({ [key]: initialState.repos }, { type, payload });
    expect(received[key]).toEqual(expected);
  });
});