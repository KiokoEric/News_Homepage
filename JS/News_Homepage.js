let Menu = document.querySelector("#Menu");
let Navigation = document.querySelector(".Navigation")

Menu.addEventListener("click", function () {
    Menu.classList.toggle("fa-times");
    Navigation.classList.toggle("ShowNavigation")
})


