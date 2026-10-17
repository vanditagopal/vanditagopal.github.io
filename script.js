"use strict";

const revealItems = document.querySelectorAll(
    ".content-section, .skill-row, .project"
);

if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -36px 0px"
        }
    );

    revealItems.forEach((item) => {
        item.classList.add("reveal");
        revealObserver.observe(item);
    });
}
