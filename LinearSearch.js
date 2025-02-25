console.log('Linear Search')
var count = 0

async function linearSearch(array, n, val) {
    for (let i = 0; i < n; i++) {
        await waitcount(delay)
        if (array[i].innerHTML == val) {
            count++
            console.log(count)
            array[i].style.background = 'green'
            array[i].style.color = '#fcfcfc'
            const step = document.querySelector('.step')
            step.innerHTML = `${count}`
            return i
        }
        array[i].style.background = 'red'
        array[i].style.color = 'white'
        count++
    }
    return -1
}

const linear = document.querySelector('#linear_Search')
linear.addEventListener('click', async () => {
    console.log('Linear')
    const array1 = document.querySelectorAll('.bars')
    let Array = []
    array1.forEach((element) => {
        Array.push(element)
    })
    console.log(Array)

    const val = document.querySelector('#searchingVal').value
    if (val != '') {
        searchText.innerHTML = `Linear Searching..`
        console.log(parseInt(val))
        const description = document.querySelector('#description')
        description.style.display = 'flex'
        const section = document.querySelector('#fullbody')
        section.style.height = '184vh'
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        var ind = await linearSearch(Array, Array.length, parseInt(val))
        const index = document.querySelector('.index')
        if (ind != -1) {
            searchText.innerHTML = `Searching Complete`
            index.innerHTML = `${val} is present at index no. ${ind}`
        }
        else {
            searchText.innerHTML = `Not Found!!`
            index.innerHTML = `${val} is not present in the Array!!`
        }
        enableNewArrayBtn();
    }
    else {
        alert('Please enter a value to search! 😕😕')
    }
})
