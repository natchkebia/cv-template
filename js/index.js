const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  const percent = circle.getAttribute("data-percent");
  let current = 0;

  const interval = setInterval(() => {
    if (current >= percent) {
      clearInterval(interval);
    } else {
      current++;
      const degrees = current * 3.6;
      circle.style.background = `conic-gradient(
        #84fab0 0deg, 
        #8fd3f4 ${degrees}deg, 
        rgba(159, 159, 159, 1) ${degrees}deg, 
        rgba(159, 159, 159, 1) 360deg
      )`;
    }
  }, 15);

  circle.addEventListener("mouseenter", () => {
    const degrees = current * 3.6; 
    circle.style.background = `conic-gradient(
      #fa709a 0deg,
      #fee140 ${degrees}deg,
      rgba(159,159,159,1) ${degrees}deg,
      rgba(159,159,159,1) 360deg
    )`;
  });

  circle.addEventListener("mouseleave", () => {
    const degrees = current * 3.6;
    circle.style.background = `conic-gradient(
      #84fab0 0deg,
      #8fd3f4 ${degrees}deg,
      rgba(159,159,159,1) ${degrees}deg,
      rgba(159,159,159,1) 360deg
    )`;
  });
});
