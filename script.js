 // Theme Toggle
 const toggleButton = document.querySelector(".theme-toggle");
 toggleButton.addEventListener("click", () => {
   document.body.classList.toggle("dark-mode");
   toggleButton.textContent =
     document.body.classList.contains("dark-mode")
       ? "Dark Mode"
       : "Light Mode";
 });

 // Skill Card Interactivity
 document.querySelectorAll(".skill-card").forEach((card) => {
   card.addEventListener("mouseenter", () => {
     card.style.transform = "scale(1.05)";
   });

   card.addEventListener("mouseleave", () => {
     card.style.transform = "scale(1)";
   });
 });