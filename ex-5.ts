// typescript constraints

type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
// Awaited take something you pass to it and it calls await on it

type Result1 = Awaited<Promise<string>>;
type Result2 = ReturnType<() => number>;
// type Result3 = ReturnType<number>;


// when we combine in we get a type helper
// that takes a function that returns a promise that returns the return type of that
// and then get the awaited version of that 
type Result = GetPromiseReturnType<() => Promise<{ fName: string, lName: string }>>;
type ErrorLine = GetPromiseReturnType<string>;

// ===================================================