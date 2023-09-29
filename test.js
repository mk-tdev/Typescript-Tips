function generateObjectWithSubArrayLength(subArrayLength) {
  const result = {
    dob: undefined,
    sub: [],
  };

  for (let i = 0; i < subArrayLength; i++) {
    result.sub.push({
      dob: undefined,
    });
  }

  return result;
}

function getDobErrors(path, errorMessage) {
  const result = generateObjectWithSubArrayLength(4);

  const keys = path.split('.');
  let currentObj = result;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (currentObj[key] === undefined) {
      currentObj[key] = {};
    }
    currentObj = currentObj[key];
  }

  const lastKey = keys[keys.length - 1];
  currentObj[lastKey] = errorMessage !== undefined ? errorMessage : undefined;

  return result;
}

// Example usages:
const output1 = getDobErrors('dob', 'invalid dob');
console.log(output1);

const output2 = getDobErrors('sub.1.dob', 'invalid 1 dob');
console.log(output2);

const output3 = getDobErrors('sub.3.dob', 'invalid 3 dob');
console.log(output3);

const getValidErrors = (e) => {
  const subErrors = e.sub.filter((se) => se.dob);
  if (subErrors.length === 0 && !e.dob) {
    return {};
  } else {
    return e;
  }
};

var ObjectA = {
  dob: 'invalid dob',
  sub: [
    { dob: undefined },
    { dob: undefined },
    { dob: undefined },
    { dob: undefined },
  ],
};

var ObjectB = {
  dob: undefined,
  sub: [
    {},
    {
      dob: 'invalid 1 dob',
    },
    {},
    {},
  ],
};

var ObjectC = {
  dob: undefined,
  sub: [
    {},
    {},
    {},
    {
      dob: 'invalid 3 dob',
    },
  ],
};
