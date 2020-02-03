// https://leetcode.com/problems/sort-array-by-parity-ii/submissions/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    for(index in A) {
// If the index is even and the number is even, break
        if (index == 0 || index % 2 == 0){
               if (A[index] % 2 == 0){
                   continue
               }
        } else if (A[index] % 2 !== 0){
                   continue
        }
        for(let secondPointer = (parseInt(index)+1); secondPointer < A.length; secondPointer++){  
            if ((A[index] % 2 == 0 && A[secondPointer] %2 !== 0) || (A[index] % 2 !== 0 && A[secondPointer] %2 === 0)){
                let holderVariable = A[index]
                A[index] = A[secondPointer]
                A[secondPointer] = holderVariable
                break
            } 
        }
    }
    return A
};