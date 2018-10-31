const test = document.querySelector('#test');

test.innerHTML = "SELECTED!";

test.addEventListener('click', () => {
    alert("Clicked");
});

let pElements = document.querySelectorAll('.example');

for (const element of pElements) {
    element.innerHTML = "Also selected";
}
