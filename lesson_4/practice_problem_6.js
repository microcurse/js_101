let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// First number is what it will fill elements with. Second number is what position (index) it will start filling. And the third number is the ending number. if no ending number is provided, it fills from the start to the end. If no starting number number, it fills from the beginning till the length of the array. This is a mutator function so it will change the original array and return it.

// The return value is [1, 1, 1, 1, 1]. Since the ending number exceeds the length of the array, it stops at the length. To check if a method is destructive, we can call the original array to see if it has been altered.