// What is Generics/Generic Type
// Type as Argument along with run time argument

type MyGenericType<Tdata> = {
  data: Tdata;
}

type Example1 = MyGenericType<{ fName: string }>;

type Example2 = MyGenericType<number>;

// We can use 'MyGenericType' to represent many different types
// Type helpers/functions
// ===================================================


// type MyGenericType = {
//   data: any
// }

// type Example1 = MyGenericType;

// type Example2 = MyGenericType;