function arraySum(arr,target){
    if (!Array.isArray(nums) || nums.length < 2) {
        throw new Error("Input array should have at least two numbers.");
    }
    const map= new Map()
    
    for(let i=0;i<arr.length;i++){
        let complement=target-arr[i]
    if(map.has(complement)){
        return [map.get(complement),i]
    }
    map.set(arr[i],i)
    }
    throw new Error("No two sum solution found.");
}

const nums = [2, 7, 11, 15];
target=9
console.log(arraySum(nums,target))