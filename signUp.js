document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    if (!form) {
        console.error('Form not found!');
        return;
    }

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get values from the input fields
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


    });
});

function toggleMenu() {
    const navbar = document.getElementById("navbar").querySelector("ul");
    navbar.classList.toggle("show");
  }