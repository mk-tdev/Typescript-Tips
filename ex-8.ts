
// const getValue = <Tobj, TKey extends keyof Tobj>(obj: Tobj, key: TKey) => {
//   return obj[key];
// }

// const kValue = getValue(
//   {
//     a: 'a',
//     b: 1,
//     c: true
//   },
//   "c"
// )

// console.log(kValue)
// ===================================================

// const getValueUnTyped = (obj: unknown, key: unknown) => {
//   return obj[key];
// }

const getValueUnTyped = <Tobj,>(obj: Tobj, key: keyof Tobj) => {
  return obj[key];
}

const kValue = getValueUnTyped(
  {
    a: 'a',
    b: 1,
    c: true,
    d: 12
  },
  "c"
)

console.log(kValue)