const emptyObj = (object: any) => {
  if (typeof object === 'string') return '';

  if (typeof object === 'number') return 0;

  if (object instanceof Array) return [];

  if (typeof object === 'object') {
    for (const objKey in object) {
      object[objKey] = emptyObj(object[objKey]);
    }
  }

  return object;
};

export default emptyObj;
