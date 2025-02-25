//Merged sort is basically based on DIVIDE AND CONQUER RULE
// First we have to divide the whole array into smaller parts.
//a. si --> mid and another one is b. mid+1 --> ei
//Then we have to follow this steps until we get a single elements
//then we have to sort that indivitual arrays
//then put it into an empty array which is a merged array and a sorted array too
//this is the conquer step and thus we can easily do the merge sort

const MergeSortButton = document.querySelector(".MergeSort");

MergeSortButton.addEventListener('click', async function () {
   // headingchange1.textContent = "Merge Sort";
   selectText.innerHTML = `Merge Sort..`
   const description = document.querySelector('#description')
   description.style.display = 'flex'
   const section = document.querySelector('#fullbody')
   section.style.height = '184vh'

   await descriptionText_merge();
   let element = document.querySelectorAll('.bar');
   let si = 0;
   let ei = parseInt(element.length) - 1;
   disableSortingBtn();
   disableSizeSlider();
   disableNewArrayBtn();

   await MergeSort(element, si, ei);
   selectText.innerHTML=`Sorting Complete!`
   // enableSortingBtn();
   // enableSizeSlider();
   enableNewArrayBtn();

});

async function descriptionText_merge() {
   const section = document.querySelector('#fullbody')
   section.style.height = `184vh`

   const description = document.querySelector('#description')
   description.style.display = 'flex'

   const code = document.querySelector('.language-java')
   code.innerHTML = `/* Java program for Merge Sort */
class MergeSort {
void merge(int arr[], int l, int m, int r)
{
   int n1 = m - l + 1;
   int n2 = r - m;

   int L[] = new int[n1];
   int R[] = new int[n2];

   for (int i = 0; i < n1; ++i)
      L[i] = arr[l + i];
   for (int j = 0; j < n2; ++j)
      R[j] = arr[m + 1 + j];

   int i = 0, j = 0;
   int k = l;
   while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
         arr[k] = L[i];
         i++;
      }
      else {
         arr[k] = R[j];
         j++;
      }
      k++;
   }

   while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
   }

   while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
   }
}

void sort(int arr[], int l, int r)
{
   if (l < r) {
      int m = l + (r - l) / 2;
      sort(arr, l, m);
      sort(arr, m + 1, r);
      merge(arr, l, m, r);
   }
}

static void printArray(int arr[])
{
   int n = arr.length;
   for (int i = 0; i < n; ++i)
      System.out.print(arr[i] + " ");
   System.out.println();
}

public static void main(String args[])
{
   int arr[] = { 12, 11, 13, 5, 6, 7 };
   System.out.println("Given Array");
   printArray(arr);
   MergeSort ob = new MergeSort();
   ob.sort(arr, 0, arr.length - 1);
   System.out.println("\nSorted array");
   printArray(arr);
}
}
`
   const time = document.querySelector('#time')
   time.innerHTML = `Time Complexity: O(N log(N)),  Sorting arrays on different machines. 
Merge Sort is a recursive algorithm and time complexity can be expressed as following recurrence relation. 

T(n) = 2T(n/2) + θ(n)
`

   const space = document.querySelector('#space')
   space.innerHTML = `Auxiliary Space: O(n), In merge sort all elements are copied into an auxiliary array. 
So N auxiliary space is required for merge sort.`
}

async function MergeSort(element, si, ei) {
   if (si >= ei) {
      return;
   }
   const middle = si + Math.floor((ei - si) / 2);
   await MergeSort(element, si, middle);
   await MergeSort(element, middle + 1, ei);
   await Merge(element, si, middle, ei);
}

async function Merge(element, low, mid, high) {
   const a1 = mid - low + 1;
   const a2 = high - mid;
   let left = new Array(a1);
   let right = new Array(a2);

   for (let i = 0; i < a1; i++) {
      await waitforme(delay);
      element[low + i].style.background = 'red';
      left[i] = element[low + i].style.height;
   }

   for (let i = 0; i < a2; i++) {
      await waitforme(delay);
      element[mid + 1 + i].style.background = 'yellow';
      right[i] = element[mid + 1 + i].style.height;
   }
   await waitforme(delay);

   let i = 0, j = 0, k = low;
   while (i < a1 && j < a2) {
      await waitforme(delay);
      if (parseInt(left[i]) <= parseInt(right[j])) {
         element[k].style.background = 'lightgreen';
         element[k].style.height = left[i];
         i++;
      } else {
         element[k].style.background = 'lightgreen';
         element[k].style.height = right[j];
         j++;
      }
      k++;
   }

   while (i < a1) {
      await waitforme(delay);
      element[k].style.background = 'lightgreen';
      element[k].style.height = left[i];
      i++;
      k++;
   }

   while (j < a2) {
      await waitforme(delay);
      element[k].style.background = 'lightgreen';
      element[k].style.height = right[j];
      j++;
      k++;
   }
}
