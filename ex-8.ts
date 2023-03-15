// const getValueUnTyped = (obj: unknown, key: unknown) => {
//   return obj[key];
// }

const getValue = <Tobj, TKey extends keyof Tobj>(obj: Tobj, key: TKey) => {
  return obj[key];
}

const kValue = getValue(
  {
    a: 'a',
    b: 1,
    c: true
  },
  "c"
)

console.log(kValue)