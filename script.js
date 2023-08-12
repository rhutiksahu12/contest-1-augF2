let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

let arr2 = [
  { id: 5, name: 'Shreyas', age: 23, profession: 'developer' },
  { id: 6, name: 'Rushab', age: 26, profession: 'Analyst' },
  { id: 7, name: 'Ayushi', age: 24, profession: 'Developer' }
]
// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  console.log(arr.filter((item) => item.profession === 'developer'));

}

function addData() {
  //Write your code here, just console.log
  let employee = { id: 4, name: 'rhutik', age: 18, profession: 'developer' }
  arr.push(employee);
  console.log(arr)
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredarr = arr.filter(item =>
    item.profession !== 'admin')

  console.log(filteredarr)
}

function concatenateArray() {
  //Write your code here, just console.log
  arr= arr.concat(arr2)
  // arr.push(...arr2)
  console.log(arr)
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.

}
