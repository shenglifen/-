let arr = [23, 12, 45, 23, 90, 7, 62, 39];

// 冒泡
function bubbleSort(arr = []) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// 选择排序

function selectionSort(arr = []) {
    let len = arr.length;
    let minIndex = 0;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// 插入排序

function insetSort(arr = []) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// 希尔排序

function shellSort(arr) {
    let len = arr.length;
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = 0; i < gap; i++) {
            let j = i;
            while (j < arr.length - gap) {
                let k = j;
                while (arr[k + gap] < arr[k] && k >= 0) {
                    [arr[k + gap], arr[k]] = [arr[k], arr[k + gap]];
                    k = k - gap;
                }
                j = j + gap;
            }
        }
    }
    return arr;
}

// 归并排序
function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length){
        result.push(right.shift());
    }
    return result;
}

console.log(mergeSort(arr));