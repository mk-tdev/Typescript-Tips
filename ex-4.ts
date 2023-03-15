// magic inferring

const addIdToObject = <TObject>(obj: TObject): TObject & { id: string } => {
  return {
    ...obj,
    id: '123'
  }
}

const output = addIdToObject<{ fName: string, lName: string }>({ fName: 'muthu', lName: 'kumar' });
