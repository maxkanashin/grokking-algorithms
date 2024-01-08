function findSmallest(arr) {
    let smallest = arr[0];
    smallest_index = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i;
        }
    }
    return smallest_index;
}

function selectionSort(arr) {
    const newArr = [];
    const mutableArr = [...arr]
    for (let i = 0; i < arr.length; i++) {
        const smallest = findSmallest(mutableArr);
        newArr.push(...mutableArr.splice(smallest, 1));
    }
    return newArr;
}

const arr = [5, 3, 6, 2, 10]
console.log(selectionSort(arr))

