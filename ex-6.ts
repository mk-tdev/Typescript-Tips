// // when you need to constraint the generic
// // that passed in

const getKeyWithHighestValue = <TObj extends Record<string, number>>(
  obj: TObj
): {
  key: keyof TObj,
  value: number
} => {
  const keys = Object.keys(obj) as Array<keyof TObj>;

  let highestKey: keyof TObj = keys[0];
  let highestValue = obj[highestKey];

  for (const key of keys) {
    if (obj[key] > highestValue) {
      highestKey = key;
      highestValue = obj[key];
    }
  }

  return {
    key: highestKey, value: highestValue
  }
}

const result = getKeyWithHighestValue({
  a: 1,
  b: 6,
  c: 5
})

const key = result.key;
const value = result.value;
console.log(result)

// ===================================================
