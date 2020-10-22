

function findMinAndRemove(array){
    let min = array[0],
        minIndex = 0;

        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
                minIndex = i;
            }
        }
    array.splice(minIndex, 1);
    return min;
}

function selectionSort(array){
    let sorted = [],
        min;

    while (array.length > 0 ){
        min = findMinAndRemove(array);
        sorted.push(min);
    }
    return sorted
}

