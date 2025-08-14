const userContainer = document.getElementById("user-container");
const errorMessage = document.getElementById("error-message");

async function fetchUsers() {
  userContainer.innerHTML = "";
  errorMessage.textContent = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const users = await response.json();

    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("user-card");
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p>📧 <strong>Email:</strong> <span style="color:#ffd43b">${user.email}</span></p>
        <p>📍 <strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        <div class="details">
          <p>📞 <strong>Phone:</strong> ${user.phone}</p>
          <p>🌐 <strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
          <p>🏢 <strong>Company:</strong> ${user.company.name}</p>
        </div>
      `;

      // Toggle expand/collapse on click
      card.addEventListener("click", () => {
        card.classList.toggle("open");
      });

      userContainer.appendChild(card);
    });

  } catch (error) {
    errorMessage.textContent = "❌ Error fetching users. Please check your internet connection.";
  }
}

// Fetch users on page load
fetchUsers();