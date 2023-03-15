// when you want to override the types inside
// the generic function with an assertion 

const typedObjectKeys = <TObj extends {}>(obj: TObj) => {
  return Object.keys(obj) as Array<keyof TObj>;
}

const res = typedObjectKeys({
  name: 'John',
  age: 30
})

// ===================================================

// const typedObjectKeys = <TObj extends {}>(obj: TObj): Array<keyof TObj> => {
//   return Object.keys(obj);
// }

// const res = typedObjectKeys({
//   name: 'John',
//   age: 30
// })