function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = (low + high) / 2;
        let guess = list[mid];
        if (guess == item)
            return mid;
        if (guess > item) 
            high  = mid - 1;
        else 
            low = mid + 1;               
    }

    return -1;
}

const arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 5)); //2
console.log(binarySearch(arr, 10)); // -1