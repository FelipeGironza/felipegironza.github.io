function updateCountdown() {
   const now = new Date();
   const targetDate = new Date("2023-10-14T14:59:59"); // Fecha objetivo para la cuenta regresiva
 
   const timeDifference = targetDate - now;
 
   const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
   const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
 
   document.getElementById("days").textContent = days;
   document.getElementById("hours").textContent = hours;
   document.getElementById("minutes").textContent = minutes;
   document.getElementById("seconds").textContent = seconds;
 }
 
 updateCountdown();
 setInterval(updateCountdown, 1000);
 