const cal = (arr) => {
    // Use reduce to calculate the sum of the array
    const sum = arr.reduce((acc, current) => acc + current, 0);
    // Calculate the average
    const avg = sum / arr.length;
    // the results
    console.log(`The sum is ${sum} and the average is ${avg}`);
};

let arr = [20, 50, 80, 90];
cal(arr);

// task2;
const removeDuplicate = (str) => {
// Convert the string to array using Spread Operator
    const arr = [...str];
    // Use a Set  because each value in set is unique and convert the set to array using Spread Operator
    const uniqueArr = [...new Set(arr)];
    // Join the array back into a string
    const result = uniqueArr.join('');
    console.log(result);
    return result;
};

const input = 'rahmehr';
removeDuplicate(input);

