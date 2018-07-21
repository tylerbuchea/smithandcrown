import { combineReducers } from 'redux';
import { merge } from 'lodash';

import repos from './sets/repos';

const sets = {
  repos,
};

const rootSet = {};

for (let [key, { types, actions, reducers }] of Object.entries(sets)) {
  merge(rootSet, {
    types,
    actions,
    reducers: { [key]: reducers },
  });
}

rootSet.reducers = combineReducers(rootSet.reducers);

export default rootSet;
