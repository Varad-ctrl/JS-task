document.getElementById('greetBtn').addEventListener("click", function () {

    let username = document.getElementById('name').value;

    document.getElementById('heading').textContent =
        "Hello, " + username;
});

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {

        if (box.classList.contains('red')) {
            box.style.backgroundColor = "red";
        }
        else if (box.classList.contains('blue')) {
            box.style.backgroundColor = "blue";
        }
        else if (box.classList.contains('green')) {
            box.style.backgroundColor = "green";
        }
        else if (box.classList.contains('yellow')) {
            box.style.backgroundColor = "yellow";
        }
    })
})

