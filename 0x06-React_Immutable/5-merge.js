import { concatElements, mergeElements } from './5-merge.js';

export const concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);

  return list1.concat(list2);
}

export const mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);

  return map1.merge(map2);
}
