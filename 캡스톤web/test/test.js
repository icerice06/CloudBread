document.addEventListener("DOMContentLoaded", function () {
    const followText = document.getElementById("follow-text");
    const svgContainer = document.getElementById("my-svg");
  
    svgContainer.addEventListener("mousemove", function (e) {
      const svgRect = svgContainer.getBoundingClientRect();
      const x = e.clientX - svgRect.left;
      const y = e.clientY - svgRect.top;
  
      // Check if the mouse position is within the SVG bounds
      if (x >= 0 && x <= svgRect.width && y >= 0 && y <= svgRect.height) {
        // If inside bounds, update text position and show it
        followText.setAttribute("x", x);
        followText.setAttribute("y", y);
        followText.style.opacity = 1;
      } else {
        // If outside bounds, hide the text
        followText.style.opacity = 0;
      }
    });
  });
  