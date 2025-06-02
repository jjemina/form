/*var a = prompt("Enter the value");
var sum = 0;
a = Number(a);

for (var i = 0; i < a; i++) {
    sum += i;
}

console.log("The sum is: " + sum);







const array = [1, 2, 3, 4, 5];

const sum = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15





const array = [1, 2, 3, 4, 5];
const multiplier = 2;

const multipliedArray = array.map(element => element * multiplier);

console.log(multipliedArray); // Output: [2, 4, 6, 8, 10]







const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = array.filter(element => element % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]






const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];

const findMostFrequent = (arr) => {
  const frequencyMap = {};
  
  // Create a frequency map
  arr.forEach(item => {
    if (frequencyMap[item]) {
      frequencyMap[item]++;
    } else {
      frequencyMap[item] = 1;
    }
  });
  
  // Find the item with the highest frequency
  let mostFrequentItem = arr[0];
  let maxCount = 0;
  
  for (const item in frequencyMap) {
    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequentItem = item;
    }
  }
  
  return mostFrequentItem;
};

console.log(findMostFrequent(array)); // Output: 4







const array = [1, 2, 3, 4, 5, 3];
const elementToRemove = 3;

const index = array.indexOf(elementToRemove);
if (index !== -1) {
  array.splice(index, 1);
}

console.log(array); // Output: [1, 2, 4, 5, 3]









const array = [1, 2, 3, 4, 5, 3, 6, 1];

const findDuplicates = (arr) => {
  const seen = new Set();
  const duplicates = new Set();

  arr.forEach(item => {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  });

  return Array.from(duplicates);
};

console.log(findDuplicates(array)); // Output: [1, 3]










function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
  
      if (array[middle] === target) {
        return middle; // Found the target, return the index
      } else if (array[middle] < target) {
        left = middle + 1; // Ignore the left half
      } else {
        right = middle - 1; // Ignore the right half
      }
    }
  
    return -1; // Target not found
  }
  
  const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const target = 7;
  
  const result = binarySearch(sortedArray, target);
  console.log(result); // Output: 6*/
 


























const user={
  name:"j",age:12,jop:"programmer"};
 const key=Object.entries(user);
//  entries.forEach(entry=>{
//   console.log(`${entry[0]}:${entry[1]}`);
//  })
for(let i=0;i<key.length;i++){
  console.log(key[i][0]+":"+key[i][1]);
}

const user1={
  name:"j",age:12,jop:"programmer"};
 const key1=Object.keys(user);
 for(let i=0;i<key.length;i++){
  console.log(key1[i]+":"+[key1[i]]);
}






















 
  