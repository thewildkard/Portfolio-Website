document.addEventListener("DOMContentLoaded", () => {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch');

    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active');
    };

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'inactive');
    };

    // Set initial mode: default to light mode
    if (darkmode === "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }

    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode');
        if (darkmode !== "active") {
            enableDarkmode();
        } else {
            disableDarkmode();
        }
    });
});