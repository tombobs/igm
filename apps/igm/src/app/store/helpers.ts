// Pure helper functions to use in reducer
export const remove = <T extends {id?: number}>(entities: T[], entityToRemove: T): T[] => {
  return entities.filter(cat => cat.id !== entityToRemove.id);
}

export const add = <T extends {id?: number}>(entities: T[], entityToAdd: T): T[] => {
  return [entityToAdd].concat(entities);
}

export const replace = <T extends {id?: number}>(entities: T[], entityToReplace: T): T[] => {
  const copy = [...entities];
  const index = copy.findIndex(c => c.id === entityToReplace.id);
  copy.splice(index, 1, entityToReplace);
  return copy;
}
