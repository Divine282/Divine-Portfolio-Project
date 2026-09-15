// ==============================
// MOBILE NAVIGATION
// ==============================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// ==============================
// DARK MODE
// ==============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "◐";
    }
});


// ==============================
// COUNTERS
// ==============================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.target);

            let current = 0;

            const updateCounter = () => {

                const increment = Math.max(
                    1,
                    Math.ceil(target / 30)
                );

                current += increment;

                if (current >= target) {
                    counter.textContent = target + "+";
                    return;
                }

                counter.textContent = current;
                requestAnimationFrame(updateCounter);
            };

            updateCounter();

            counterObserver.unobserve(counter);
        });
    },
    {
        threshold: 0.7
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// ==============================
// SKILL BARS
// ==============================

const skillProgress = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const bar = entry.target;

            bar.style.width = bar.dataset.width;

            skillObserver.unobserve(bar);
        });

    },
    {
        threshold: 0.5
    }
);

skillProgress.forEach(bar => {
    skillObserver.observe(bar);
});


// ==============================
// PROJECT FILTER
// ==============================

const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        filters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        const category = filter.dataset.filter;

        projects.forEach(project => {

            if (
                category === "all" ||
                project.dataset.category === category
            ) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }

        });

    });

});


// ==============================
// PROJECT MODAL
// ==============================

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById(
    "modalDescription"
);

const detailButtons = document.querySelectorAll(
    ".project-details"
);

detailButtons.forEach(button => {

    button.addEventListener("click", () => {

        const project = button.closest(".project-card");

        modalTitle.textContent =
            project.dataset.title;

        modalDescription.textContent =
            project.dataset.description;

        modal.classList.add("show");

    });

});

modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", event => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    if (!name) {
        formMessage.textContent =
            "Please enter your name.";

        return;
    }

    formMessage.textContent =
        `Thanks, ${name}. Your message has been received.`;

    contactForm.reset();

});


// ==============================
// SCROLL REVEAL
// ==============================

const revealElements =
    document.querySelectorAll(
        ".section-intro, .about-grid, .service-card, .project-card, .timeline-item, .contact-box"
    );

revealElements.forEach(element => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(
                    entry.target
                );

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ==============================
// CURRENT YEAR
// ==============================

const footerYear =
    document.getElementById("footerYear");

footerYear.textContent =
    `© ${new Date().getFullYear()} All Rights Reserved`;


// ==============================
// KEYBOARD ESCAPE FOR MODAL
// ==============================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        modal.classList.remove("show");
    }

});