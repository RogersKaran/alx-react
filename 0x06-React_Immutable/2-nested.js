import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  if (!(object instanceof Map)) return undefined; // Check object if map

  let current = object;
  for (let key of array) {
    if (current.has(key)) {
      current = current.get(key); // update current to associated value
    } else {
        return undefined; // Key not found
    }
  }

  return current;
}

