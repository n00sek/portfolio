const lista = document.querySelector(".lista"); 
const burger = document.querySelector(".burger");
const linki = document.querySelector(".lista li");

    burger.addEventListener("click", () => {
        lista.classList.toggle("wysuniete");
        burger.classList.toggle("dodaj");
    });

