let navbar = document.querySelector('#nav');
let navResponse = document.querySelector('.nav-response');
navbar.addEventListener('click', function () {
   if (navResponse.style.display == 'none') {
      navResponse.style.display = 'block'
   } else {
      navResponse.style.display = 'none'
   }
});


const elements = document.querySelectorAll('.count');

const endCounts = [100, 300, 50, 20];

const maxCount = Math.max(...endCounts)


const incrementValues = () => {
    elements.forEach((element, index) => {
        let currentValue = +element.innerHTML
        const endCount = endCounts[index];
        if (currentValue < endCount) {
            currentValue += 1;
        }
        element.innerHTML = currentValue;
        if (currentValue === maxCount) {
            clearInterval(interval)
        }
    });

}


incrementValues();
const interval = setInterval(incrementValues, 1)
