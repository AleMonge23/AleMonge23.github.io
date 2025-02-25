window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
        this.document.body.classList.add("scrolled");
    } else {
        this.document.body.classList.remove("scrolled");
    }
});
