let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position

    sections.forEach(section => {
        let offset = section.offsetTop - 100; // Adjust for navbar height
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active"); // Remove active class from all links
            });
            // Correctly select the link with the matching href
            let currentLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (currentLink) {
                currentLink.classList.add("active"); // Add active class to the current link
            }
        }
    });
};
