let fullName = prompt("Adinizi Giriniz")
let myName = document.querySelector("#myName")

myName.innerHTML = fullName.toUpperCase();

const setDate = () => {
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;

}

const d = new Date();
const days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"]

document.querySelector("#myDay").innerHTML = days[d.getDay()];

setInterval(setDate, 1000);

