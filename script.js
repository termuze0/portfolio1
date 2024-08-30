document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = carousel.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    const itemCount = items.length;
    const intervalTime = 3000; // Change slide every 3 seconds
  
    function showNextItem() {
      items[currentIndex].style.display = "none"; // Hide current item
      currentIndex = (currentIndex + 1) % itemCount; // Move to the next item
      items[currentIndex].style.display = "block"; // Show the next item
    }
  
    // Initialize carousel: hide all items except the first
    items.forEach((item, index) => {
      item.style.display = index === 0 ? "block" : "none";
    });
  
    // Set interval to change slides
    setInterval(showNextItem, intervalTime);
  });
  