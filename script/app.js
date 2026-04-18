
document.getElementById("authForm").addEventListener("submit", function(e){
    e.preventDefault();

    let user = document.getElementById("username").value;
    let role = document.getElementById("role").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(!user || !role || !email || !password){
        alert("Please fill all fields");
        return;
    }

    let userData = {
        username: user,
        role: role,
        email: email,
        password: password
    };

    localStorage.setItem("helphub_user", JSON.stringify(userData));

    alert("Login Successful! Redirecting...");

    // simulate redirect
    window.location.href = "dashboard.html";
});
