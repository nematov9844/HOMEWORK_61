// Berilgan foydalanuvchilar massividan yoshiga ko'ra foydalanuvchilarni filtrlash.
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 15 },
];

function filterAdultUsers(users) {
  return users.filter((user) => user.age >= 18);
}

// Test case
// console.log(filterAdultUsers(users)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

// Berilgan ikki o'lchovli massiv (matritsa) ichidagi nol elementlarning indekslarini toping.
function findZeroIndices(matrix) {
  const zeroIndices = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroIndices.push([i, j]);
      }
    }
  }
  return zeroIndices;
}

// Test case
// console.log(findZeroIndices([[1, 0, 3],[4, 5, 0],[7, 0, 9],]));
// Output: [[0, 1], [1, 2], [2, 1]]

// Berilgan sonli massivdagi eng ko'p takrorlangan elementni toping. Agar bir nechta element teng takrorlangan bo'lsa, ulardan birini qaytaring.
function mostFrequentElement(arr) {
  const obj = {};
  let max = 0;
  let Element = null;
  for (let item of arr) {
    obj[item] = (obj[item] || 0) + 1;
    if (obj[item] > max) {
      max = obj[item];
      Element = item;
    }
  } 

  return Element;
}

// Test case
// console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4

// Berilgan ikki o'lchovli massivni (matritsa) 90 daraja o'ngga burang.
function rotateMatrix(matrix = []) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    let res = [];
    for (let j = 0; j < matrix[i].length; j++) {
      res.push(matrix[j][i]);
    }
    result.push(res.reverse());
  }
  return result;
}

// Test case
// console.log(rotateMatrix([[1, 2, 3],[4, 5, 6],[7, 8, 9],]));
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

// Berilgan massivdagi faqat bir marta uchraydigan elementlarni qaytaring.
function filterUniqueElements(arr = []) {
  return arr.filter((item) => arr.indexOf(item) == arr.lastIndexOf(item));
}

// Test case
// console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]


// Berilgan sonlar qatorini k qadamga o'ngga rotatsiya qiling.
function rotateArray(nums = [], k = 0) {
  k = k % nums.length;
  return nums.slice(nums.length - k).concat(nums.slice(0, nums.length - k));  
}

// Test case
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// Output: [5, 6, 7, 1, 2, 3, 4]
      