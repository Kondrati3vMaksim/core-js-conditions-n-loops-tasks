/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maximum = a;
  if (b > maximum) maximum = b;
  if (c > maximum) maximum = c;
  return maximum;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const dx = Math.abs(queen.x - king.x);
  const dy = Math.abs(queen.y - king.y);
  return dx === 0 || dy === 0 || dx === dy;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  return (
    a > 0 &&
    b > 0 &&
    c > 0 &&
    a + b > c &&
    a + c > b &&
    b + c > a &&
    (a === b || a === c || b === c)
  );
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let remainder = num;
  let result = '';
  while (remainder >= 10) {
    result += 'X';
    remainder -= 10;
  }
  if (remainder === 9) return `${result}IX`;
  if (remainder >= 5) {
    result += 'V';
    remainder -= 5;
  }
  if (remainder === 4) return `${result}IV`;
  while (remainder > 0) {
    result += 'I';
    remainder -= 1;
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let index = 0; index < numberStr.length; index += 1) {
    let word;
    switch (numberStr[index]) {
      case '-':
        word = 'minus';
        break;
      case '.':
      case ',':
        word = 'point';
        break;
      case '0':
        word = 'zero';
        break;
      case '1':
        word = 'one';
        break;
      case '2':
        word = 'two';
        break;
      case '3':
        word = 'three';
        break;
      case '4':
        word = 'four';
        break;
      case '5':
        word = 'five';
        break;
      case '6':
        word = 'six';
        break;
      case '7':
        word = 'seven';
        break;
      case '8':
        word = 'eight';
        break;
      case '9':
        word = 'nine';
        break;
      default:
        word = '';
        break;
    }
    result += `${index === 0 ? '' : ' '}${word}`;
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left += 1;
    right -= 1;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === letter) return index;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let value = Math.floor(Math.abs(num));
  do {
    if (value % 10 === digit) return true;
    value = Math.floor(value / 10);
  } while (value > 0);
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let rightSum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    rightSum += arr[index];
  }
  let leftSum = 0;
  for (let index = 0; index < arr.length; index += 1) {
    rightSum -= arr[index];
    if (leftSum === rightSum) return index;
    leftSum += arr[index];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  for (let row = 0; row < size; row += 1) {
    matrix[row] = new Array(size);
  }
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;
  let next = 1;
  while (left <= right && top <= bottom) {
    for (let col = left; col <= right; col += 1) {
      matrix[top][col] = next;
      next += 1;
    }
    top += 1;
    for (let row = top; row <= bottom; row += 1) {
      matrix[row][right] = next;
      next += 1;
    }
    right -= 1;
    if (top <= bottom) {
      for (let col = right; col >= left; col -= 1) {
        matrix[bottom][col] = next;
        next += 1;
      }
      bottom -= 1;
    }
    if (left <= right) {
      for (let row = bottom; row >= top; row -= 1) {
        matrix[row][left] = next;
        next += 1;
      }
      left += 1;
    }
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const result = matrix;
  const size = matrix.length;
  for (let row = 0; row < size; row += 1) {
    for (let col = row + 1; col < size; col += 1) {
      const temp = result[row][col];
      result[row][col] = result[col][row];
      result[col][row] = temp;
    }
  }
  for (let row = 0; row < size; row += 1) {
    for (let col = 0; col < Math.floor(size / 2); col += 1) {
      const other = size - col - 1;
      const temp = result[row][col];
      result[row][col] = result[row][other];
      result[row][other] = temp;
    }
  }
  return result;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const result = arr;
  const siftDown = (start, end) => {
    let root = start;
    while (root * 2 + 1 <= end) {
      let child = root * 2 + 1;
      if (child + 1 <= end && result[child] < result[child + 1]) {
        child += 1;
      }
      if (result[root] >= result[child]) return;
      const temp = result[root];
      result[root] = result[child];
      result[child] = temp;
      root = child;
    }
  };
  for (let start = Math.floor(arr.length / 2) - 1; start >= 0; start -= 1) {
    siftDown(start, arr.length - 1);
  }
  for (let end = arr.length - 1; end > 0; end -= 1) {
    const temp = result[0];
    result[0] = result[end];
    result[end] = temp;
    siftDown(0, end - 1);
  }
  return result;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const { length } = str;
  if (length < 2 || iterations === 0) return str;
  const evenCount = Math.ceil(length / 2);
  const visited = new Uint8Array(length);
  const output = new Array(length);
  for (let start = 0; start < length; start += 1) {
    if (visited[start] === 0) {
      const cycle = [];
      let count = 0;
      let current = start;
      while (visited[current] === 0) {
        visited[current] = 1;
        cycle[count] = current;
        count += 1;
        if (current % 2 === 0) {
          current /= 2;
        } else {
          current = evenCount + (current - 1) / 2;
        }
      }
      const shift = iterations % count;
      for (let index = 0; index < count; index += 1) {
        output[cycle[(index + shift) % count]] = str[cycle[index]];
      }
    }
  }
  let result = '';
  for (let index = 0; index < length; index += 1) {
    result += output[index];
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
  if (number < 10) return number;
  const reverse = [];
  let value = number;
  let length = 0;
  while (value > 0) {
    reverse[length] = value % 10;
    value = Math.floor(value / 10);
    length += 1;
  }
  const digits = new Array(length);
  for (let index = 0; index < length; index += 1) {
    digits[index] = reverse[length - index - 1];
  }
  let pivot = length - 2;
  while (pivot >= 0 && digits[pivot] >= digits[pivot + 1]) {
    pivot -= 1;
  }
  if (pivot < 0) return number;
  let successor = length - 1;
  while (digits[successor] <= digits[pivot]) {
    successor -= 1;
  }
  const temp = digits[pivot];
  digits[pivot] = digits[successor];
  digits[successor] = temp;
  let left = pivot + 1;
  let right = length - 1;
  while (left < right) {
    const swap = digits[left];
    digits[left] = digits[right];
    digits[right] = swap;
    left += 1;
    right -= 1;
  }
  let result = 0;
  for (let index = 0; index < length; index += 1) {
    result = result * 10 + digits[index];
  }
  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
