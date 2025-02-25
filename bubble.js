const BubbleSortButton = document.querySelector(".BubbleSort");
BubbleSortButton.addEventListener('click', async function () {
    selectText.innerHTML = `Bubble Sort..`;
    const description = document.querySelector('#description');
    description.style.display = 'flex';
    const section = document.querySelector('#fullbody');
    section.style.height = '184vh';
    console.log('Bubble sort');
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await BubbleSort();
    enableNewArrayBtn();
});

async function BubbleSort() {
    const element = document.querySelectorAll('.bar');
    for (let i = 0; i < element.length - 1; i++) {
        for (let j = 0; j < element.length - i - 1; j++) {
            element[j].style.background = 'rgb(250, 5, 54)';
            element[j + 1].style.background = 'rgb(250, 5, 54)';
            if (parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                await waitforme(delay);
                swapping(element[j], element[j + 1]);
            }
            element[j].style.background = 'rgb(245, 212, 24)';
            element[j + 1].style.background = 'rgb(245, 212, 24)';
        }
        element[element.length - 1 - i].style.background = 'rgb(0,255,0)';
    }
    element[0].style.background = 'rgb(0,255,0)';
    selectText.innerHTML = `Sorting Complete!`;
}
