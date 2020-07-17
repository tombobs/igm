// Pure helper functions to use in reducers

import { IHaveAnId } from '@rly.gd/api-interfaces';

export const remove = <T extends IHaveAnId>(entities: T[], entityToRemove: T): T[] => {
  return entities.filter(cat => cat.id !== entityToRemove.id);
}

export const add = <T extends IHaveAnId>(entities: T[], entityToAdd: T): T[] => {
  return [entityToAdd].concat(entities);
}

export const replace = <T extends IHaveAnId>(entities: T[], entityToReplace: T): T[] => {
  const copy = [...entities];
  const index = copy.findIndex(c => c.id === entityToReplace.id);
  copy[index] = entityToReplace;
  return copy;
}
