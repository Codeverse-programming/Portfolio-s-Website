// const headerBg = () => {
//     const header = document.querySelector(".js-header")

//     window.addEventListener("scroll", function () {
//         if (this.scrollY > 0) {
//             header.classList.add("bg-reveal");
//         } else {
//             header.classList.remove("bg-reveal");
//         }
//     })
// }
// headerBg();

document.addEventListener("DOMContentLoaded", () => {
    const appsDetails = document.querySelector("#mobile-apps")
    const websitesDetails = document.querySelector("#web-sites")
    const textdetails = document.querySelector("#apps")

    document.querySelector("#apps").addEventListener("click", e => {
        e.preventDefault();
        websitesDetails.classList.add("hide");
        appsDetails.classList.remove("hide");
    });

    document.querySelector("#websites").addEventListener("click", e => {
        e.preventDefault();
        appsDetails.classList.add("hide");
        websitesDetails.classList.remove("hide");
    });
    
    document.querySelector("#all").addEventListener("click", e => {
        e.preventDefault();
        appsDetails.classList.remove("hide");
        websitesDetails.classList.remove("hide");
    });
});

// alert("hello world")