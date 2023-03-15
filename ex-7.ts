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
