// Start off by creating an array with three student names.
// Create a loop that will prompt the user for three more names.
// After every user input, store the new name into the array.
// Create a new loop that will iterate through the array and console log each element of the array.

const nameList = ['Sally', 'Ann', 'Beth',];

for (let i = 0; i < 3; i++){
  const name = prompt('Enter a name');
  nameList.push(name);
}

for (let i = 0; i < nameList.length; i++){
  const name = nameList[i];
  alert(name);
}