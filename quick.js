const QuickSortbutton = document.querySelector(".QuickSort");
QuickSortbutton.addEventListener('click', async function () {
    selectText.innerHTML = `Quick Sort..`;
    const description = document.querySelector('#description');
    description.style.display = 'flex';
    const section = document.querySelector('#fullbody');
    section.style.height = '184vh';
    await descriptionText_quick();
    let element = document.querySelectorAll('.bar');
    let low = 0;
    let high = element.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(element, low, high);
    selectText.innerHTML = `Sorting Complete!`;
    enableNewArrayBtn();
});

async function descriptionText_quick() {
    const section = document.querySelector('#fullbody');
    section.style.height = `184vh`;

    const description = document.querySelector('#description');
    description.style.display = 'flex';

    const code = document.querySelector('#code_java');
    code.innerHTML = `// Java implementation of QuickSort
import java.io.*;

class GFG {

static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

static void printArray(int[] arr, int size) {
    for (int i = 0; i < size; i++)
        System.out.print(arr[i] + " ");
    System.out.println();
}

public static void main(String[] args) {
    int[] arr = { 10, 7, 8, 9, 1, 5 };
    int n = arr.length;
    quickSort(arr, 0, n - 1);
    System.out.println("Sorted array: ");
    printArray(arr, n);
}
}`;

    const time = document.querySelector('#time');
    time.innerHTML = `Worst Case: The worst case occurs when the partition process always picks the greatest or smallest element as the pivot.
Best Case: The best case occurs when the partition process always picks the middle element as the pivot.
Average Case: The average case occurs when partitioning puts O(n/9) elements in one set and O(9n/10) elements in another set.`;

    const space = document.querySelector('#space');
    space.innerHTML = `Space Complexity: O(N)\nAs we are not creating any container other than the given array, the space complexity will be in order of N.`;
}

async function partition(element, low, high) {
    let i = low - 1;
    element[high].style.background = 'red';
    for (let j = low; j <= high - 1; j++) {
        element[j].style.background = 'yellow';
        await waitforme(delay);
        if (parseInt(element[j].style.height) < parseInt(element[high].style.height)) {
            i++;
            swapping(element[i], element[j]);
            element[i].style.background = 'orange';
            if (i != j) element[j].style.background = 'orange';
            await waitforme(delay);
        } else {
            element[j].style.background = 'pink';
        }
    }
    i++;
    await waitforme(delay);
    swapping(element[i], element[high]);
    element[high].style.background = 'pink';
    element[i].style.background = 'green';
    element[i].style.color = 'white';
    await waitforme(delay);
    for (let k = 0; k < element.length; k++) {
        if (element[k].style.background != 'green')
            element[k].style.background = 'cyan';
    }
    return i;
}

async function quickSort(element, low, high) {
    if (low < high) {
        let pivot_index = await partition(element, low, high);
        await quickSort(element, low, pivot_index - 1);
        await quickSort(element, pivot_index + 1, high);
    } else {
        if (low >= 0 && high >= 0 && low < element.length && high < element.length) {
            element[high].style.background = 'green';
            element[low].style.background = 'green';
            element[high].style.color = 'white';
            element[low].style.color = 'white';
        }
    }
}
