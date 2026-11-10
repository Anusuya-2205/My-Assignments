// Find the Missing Element in an Array

let arr = [1, 2, 3, 5, 6];

for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i + 1] - arr[i] !== 1) {
        console.log("Missing number:", arr[i] + 1);
    }

}