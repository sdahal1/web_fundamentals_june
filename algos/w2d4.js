var nums = [23, 0, 30, 24, 8, 6, 1, 22];
var nums2 = [4,8,0,2,5];

//search through a given array for a number, and return which index (position) this number was found. If the number was not found, return -1;
function searchForNum(arr, numToFind){
    for(let i = 0; i<arr.length; i++){
        // console.log(arr[i])
        //if the current value is equal to numToFind, then return the current index number
        if(arr[i] == numToFind){
            return i;
        }
    }


    return -1;
}




// console.log(searchForNum(nums, 11));
var nestedNums = [[4,8,10],[3,6,9],[23,24,99]]

// console.log(nestedNums[1][2])

function searchNestedArray(arr, numToFind){
    for(let i = 0; i<arr.length; i++){
        console.log(arr[i]);
        let currentSubArray = arr[i];
        for(let j = 0; j<currentSubArray.length; j++){
            console.log(arr[i][j])
            if(arr[i][j] == numToFind){
                return [i,j]
            }
        }
    }
}



console.log(searchNestedArray(nestedNums, 9));

