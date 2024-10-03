
const keys = ['name', 'age', 'city'];
const values = ['Alice', 30, 'New York'];
const obj = {};

for (let i = 0; i < keys.length; i++) {
  obj[keys[i]] = values[i];
}

console.log(obj);