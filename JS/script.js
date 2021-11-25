const Open = document.getElementById("bar")
const Close = document.getElementById("close")
const navbar = document.querySelector(".nav")


Open.addEventListener("click" , () => {
    navbar.classList.remove("hidden")
})

Close.addEventListener("click" , () => {
    navbar.classList.add("hidden")
})