function selectionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){  
        var min = i;
        for (let j = i + 1; j < arr.length; j++){  
            if (arr[j] < arr[min]){         
                min = j
            }
        }

    var temp = arr[i];
    arr[i] = arr[min]
    arr[min] = temp
    }

    return arr;
}


console.log(selectionSort([4,2,7,1,3]))
// --> Worst Case: O(n^2); 
