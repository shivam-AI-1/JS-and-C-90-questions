// with inbuilt-
// let  nums = [4,2,8,5,1];
// let sort = nums.sort()
// console.log(sort)

// wihtout inbuilt

let nums = [4, 2, 8, 5, 1];
let n = nums.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
            let temp = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = temp;
        }
    }
}
console.log( nums);

