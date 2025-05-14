document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  
  if (role === 'member') {
    window.location.href = 'member-dashboard.html'; // Redirect to Member page
  } else if (role === 'trainer') {
    window.location.href = 'trainer-dashboard.html'; // Redirect to Trainer page
  } else if (role === 'admin') {
    window.location.href = 'admin-dashboard.html'; // Redirect to Admin page
  } else {
    alert('Please select a role.');
  }
});

function toggleMenu() {
  const navbar = document.getElementById("navbar").querySelector("ul");
  navbar.classList.toggle("show");
}