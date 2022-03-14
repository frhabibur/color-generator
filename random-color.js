
// method 1  {
//     const color1 = Math.round(Math.random() * 255)
//     const color2 = Math.round(Math.random() * 255)
//     const color3 = Math.round(Math.random() * 255)

//     const rgb = `rgb(${color1},${color2},${color3})`
//     console.log(rgb)
// }

const randoemColor = () => {
    const rgb2 = `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
    return rgb2
}
const row = document.getElementById('row')
// console.log(`rgb 2 color is ${rgb2}`)

const generate = () => {
    row.innerHTML = ''
    const quantity = document.getElementById('quantity').value
    if (quantity === '' || quantity <= 0) {
        alert('empty input')
    }
    else if (quantity > 50000) {
        alert(`Limit Cross , fixed limit is 50,000`);
        return
    }
    for (let i = 1; i <= quantity; i++) {
        const div = document.createElement('div')
        div.style.backgroundColor = randoemColor()
        div.classList.add('col-md-2', 'shadow', 'rounded', 'col-sm-4', 'box-style', 'm-md-3')
        div.innerText = `${randoemColor()}`
        row.appendChild(div)
    }
}