fetch('../json/users.json')
        .then(response => response.json())
        .then(data => {
            users = data;
            console.log(users)
        })
        .catch(error => {
            console.error('Error:', error);
        });

window.addEventListener("load", function() {
    const loginMenu_a = document.getElementById('loginInMenuEntry')
    const containerDiv = document.getElementById("containerLogIn")
    if(sessionStorage.getItem("loggedInUser") !== null){
        const loggedInUser = sessionStorage.getItem("loggedInUser");
        loginMenu_a.innerHTML = `Logged In as ${loggedInUser} - Log Out`
        if(containerDiv !== null){
        containerDiv.innerHTML = `
        <p>Logged in as <strong>${loggedInUser}</strong></p>
        <button id="logoutButton">Logout</button>`
        document.getElementById("logoutButton").addEventListener("click", function () {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "log_in.html";
        });
        }
    } else {
        loginMenu_a.innerHTML = 'Log in'
        if(containerDiv !== null){
        containerDiv.innerHTML = `            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <br>
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>
                <br>
                <button type="submit" id="submitButton">Log In</button>
              </form>
              <p id="status"></p>`
              document.getElementById("loginForm").addEventListener("submit", function (e) {
                e.preventDefault(); 
              
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
              
                const user = users.find(u => u.username === username && u.password === password);
                if (user) {
                  sessionStorage.setItem("loggedInUser", username);
                  document.getElementById("status").innerText = `Welcome, ${username}!`;
                  window.location.href = "index.html";
                } else {
                  document.getElementById("status").innerText = "Invalid username or password.";
                }
              });
            }
    }

    const welcomeTextDiv = document.getElementById("welcomeText");
    if(sessionStorage.getItem("loggedInUser") !== null){
        const userName = sessionStorage.getItem("loggedInUser");
        welcomeTextDiv.innerHTML = `
        <p id="welcomeP">Welcome, dear ${userName}</p>`
    } else {
        welcomeTextDiv.innerHTML = `
        <p id="welcomeP">Welcome, dear guest</p>`
    }
});