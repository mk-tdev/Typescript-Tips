// create functions with type helper
// generic function is a normal function that has type mapped over it

const getData = <Tdata>(url: string): Promise<Tdata> => {
  return fetch(url).then((res) => res.json());
}

// run time arg
// type arg
getData<{ fName: string, lName: string }>("/api/getCustomerInfo").then((res) => {
  console.log(res)
})

// ===================================================