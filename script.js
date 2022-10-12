const observerX = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showX");
    } else {
      entry.target.classList.remove("showX");
    }
  });
});

const hiddenElementsX = document.querySelectorAll(".hiddenX");
hiddenElementsX.forEach((el) => observerX.observe(el));

const hiddenSplashElements = document.querySelectorAll(".hiddenSplash");
hiddenSplashElements.forEach((el) => observerX.observe(el));

const observerY = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showY");
    } else {
      entry.target.classList.remove("showY");
    }
  });
});

const hiddenElementsY = document.querySelectorAll(".hiddenY");
hiddenElementsY.forEach((el) => observerY.observe(el));
