/**
 * Alyssa was asked to write an implementation of a rolling buffer. You can add and remove 
 * elements from a rolling buffer. However, once the buffer becomes full, any new elements 
 * will displace the oldest elements in the buffer.
 * 
 * She wrote two implementations of the code for adding elements to the buffer. In presenting 
 * the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for 
 * modifying the buffer?".
 * 
 * Is there a difference between these implementations, other than the method she used to add 
 * an element to the buffer? You may assume that newElement will always be a primitive value.
 * 
 */

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

let bufferOuter = [1, 2, 3, 4];
let maxBufferSizeOuter = 5;
let newElementOuter = 'New element';

console.log(addToRollingBuffer2(bufferOuter, maxBufferSizeOuter, newElementOuter));
console.log(addToRollingBuffer1(bufferOuter, maxBufferSizeOuter, newElementOuter));

/**
 * Solution
 * The difference between the two functions is that addToRollingBuffer1 mutates the original 
 * array. addToRollingBuffer2 creates a new reference to a new array.
 * 
 */