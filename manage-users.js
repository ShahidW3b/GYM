function toggleMenu() {
    const nav = document.getElementById("navbar").querySelector("ul");
    nav.classList.toggle("show");
  }
  
  const userTable = document.getElementById("userTable");
  const addUserForm = document.getElementById("addUserForm");
  
  let users = [];
  
  addUserForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const username = document.getElementById("username").value.trim();
    const role = document.getElementById("role").value;
  
    if (name && username && role) {
      users.push({ name, username, role });
      renderUsers();
      addUserForm.reset();
    }
  });
  
  function renderUsers() {
    userTable.innerHTML = "";
    users.forEach((user, index) => {
      const row = document.createElement("tr");
  
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.role}</td>
        <td><button class="delete-btn" onclick="deleteUser(${index})">Delete</button></td>
      `;
  
      userTable.appendChild(row);
    });
  }
  
  function deleteUser(index) {
    users.splice(index, 1);
    renderUsers();
  }