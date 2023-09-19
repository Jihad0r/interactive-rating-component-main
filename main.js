let list = document.querySelectorAll("ul li");
let btn = document.querySelector(".submit")
let selected_rate = document.querySelector(".rate")
let front = document.querySelector(".front")
let back = document.querySelector(".back")


list.forEach((li) => {
    li.addEventListener("click", (e) => {
        list.forEach((li) => {
            li.classList.remove("active")
        });
        e.currentTarget.classList.add("active")
        selected_rate.innerHTML = e.currentTarget.innerText
    });
})
btn.addEventListener("click", (e) => {
    if (selected_rate) {
        back.classList.remove("hidden")
        front.classList.add("hidden")
    }
});


