// Maps and Sets Exercise
// Quick Question #1
// What does the following code return?

new Set([1, 1, 2, 2, 3, 4]) // {1, 2, 3, 4}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("") // "ref"

// Quick Questions #3
// What does the Map m look like after running the following code ?

let m = new Map();
m.set([1, 2, 3], true); // { [1,2,3]: true }
m.set([1, 2, 3], false); // { [1,2,3]: false }

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = ([...arr]) => { return (arr.length !== new Set(arr).size) }



hasDuplicate([1, 3, 2, 1]) // true
hasDuplicate([1, 5, -1, 4]) // false
console.log(hasDuplicate([1, 3, 2, 1]))
console.log(hasDuplicate([1, 5, -1, 4]))

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
  const vowels = 'aeiou';
  let vowelMap = new Map();
  for (let vowel of vowels) { vowelMap.set(vowel, 0) };
  for (let letter of str) {
    letter = letter.toLowerCase();
    if (vowels.includes(letter)) { vowelMap.set(letter, vowelMap.get(letter) + 1) };
  }
  for (let [key, value] of vowelMap.entries()) {
    if (value < 1) { vowelMap.delete(key) }
  }
  return vowelMap;
}

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
console.log(vowelCount('awesome'));
console.log(vowelCount('Colt'));