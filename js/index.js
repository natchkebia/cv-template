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

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("mode-switcher");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    switcher.querySelector("i").classList.replace("fa-sun", "fa-moon");
  }

  switcher.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    const icon = switcher.querySelector("i");

    if (isDarkMode) {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "dark");
    } else {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "light");
    }
  });
});
