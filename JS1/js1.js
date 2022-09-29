let nums = [1,2,3,4,5,6,7,8,9,10];
let evens = [];
let odds = [];
let final = []
function sort(nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);  
        }
        else {
            odds.push(nums[i]);
        }
     
    }
    final = [[evens] , [odds]];
    return final;
}

console.log(sort(nums))