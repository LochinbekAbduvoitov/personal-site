document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const header = document.querySelector("header");
  menuBtn.onclick = () => {
    navigation.classList.toggle("active");
  };
  let currentCordinate = 0;
  document.addEventListener("scroll", () => {
    header.classList.toggle("active", scrollY > 0);
    // if (scrollY > currentCordinate) {
    //   header.classList.remove("pinned");
    //   header.classList.add("unpinned");
    // } else {
    //   header.classList.remove("unpinned");
    //   header.classList.add("pinned");
    // }
    // currentCordinate = scrollY;
  });
});
