const billInp = document.getElementById('bill');
const peopleInp = document.getElementById('people');
const tipInp = document.querySelectorAll('.percent');
const customInp = document.getElementById('custom');
const personTip = document.getElementById('personTip');
const personTotal = document.getElementById('personTotal');
const error = document.getElementById('error')
const reset = document.getElementById('reset');

let bill;
let people;
let tipPercent;

customInp.addEventListener('click', (e) => {
    e.preventDefault();
    customInp.setAttribute('style', 'text-align: right;');
    customInp.removeAttribute('placeholder');
})

customInp.addEventListener('input', (e) => {
    e.preventDefault()
    tipPercent = parseFloat(customInp.value);

})

tipInp.forEach((p) => {
    p.addEventListener('click', (e) => {
        if (p.innerText === '5%') {
            tipPercent = 5;
        }

        if (p.innerText === '10%') {
            tipPercent = 10;
        }

        if (p.innerText === '15%') {
            tipPercent = 15;
        }

        if (p.innerText === '25%') {
            tipPercent = 25;
        }

        if (p.innerText === '50%') {
            tipPercent = 50;
        }
        customInp.setAttribute('placeholder', 'custom')
        customInp.setAttribute('style', 'text-align: center;')
        customInp.value = ''

    })

})



billInp.addEventListener('input', (e) => {
    e.preventDefault();
    bill = parseFloat(billInp.value)
})

peopleInp.addEventListener('input', (e) => {
    e.preventDefault();
    if (peopleInp.value == '0') {
        error.setAttribute('style', 'display: inline')
    } else {
        people = parseInt(peopleInp.value);
        error.setAttribute('style', 'display: none')
    }
})


if (isNaN(people) && isNaN(bill) && people != 0) {
    setInterval(getPrice, 500)
}

function getPrice() {
    let tip = (bill * tipPercent) / 100;
    let tipPerson = tip / people;
    let total = bill + tip;
    let totalPerson = total / people
    if (isNaN(tipPerson) || isNaN(totalPerson)) {
        personTip.innerHTML = '0.00';
        personTotal.innerHTML = '0.00';
    } else {
        personTip.innerHTML = parseFloat(tipPerson).toFixed(2);
        personTotal.innerHTML = parseFloat(totalPerson).toFixed(2);
    }
}

reset.addEventListener('click', () => {
    window.location.reload()
})


