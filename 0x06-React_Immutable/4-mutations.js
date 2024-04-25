import { Map } from 'immutable';

// Create the initial Immutable Map
export const map = Map({
  1: 'Liam',
  2: 'NOah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Use the initial map and hain mutations to create a new modified map
export const map2 = map.withMutations((mapItem) => {
  mapItem.set(2, 'Benjamin').set(4, 'Oliver');
});

