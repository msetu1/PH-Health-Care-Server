const pick = <T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Partial<T> => {
  const finalObj: Partial<T> = {};
  for (const kye of keys) {
    if (obj && Object.hasOwnProperty.call(obj, kye)) {
      finalObj[kye] = obj[kye];
    }
  }
  console.log(finalObj);
  return finalObj;
};

export default pick;
