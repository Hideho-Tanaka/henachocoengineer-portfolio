/* fade in */
const targets = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

targets.forEach(target => observer.observe(target));

/* page top button */
const pageTop = document.getElementById("pageTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        pageTop.classList.add("show");
    } else {
        pageTop.classList.remove("show");
    }
});

pageTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =========================
   Email Obfuscation
========================= */

(function () {
    const user = "n0.15.beer.man";
    const domain = "gmail.com";

    const email = user + "@" + domain;

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[name="name"]').value;
        const from = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        const body =
            "From: " + from + "%0D%0A%0D%0A" +
            "Message:%0D%0A" + message;

        const mailtoLink =
            "mailto:" + email +
            "?subject=Contact from " + encodeURIComponent(name) +
            "&body=" + body;

        window.location.href = mailtoLink;
    });
})();


