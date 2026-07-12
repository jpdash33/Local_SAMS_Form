function login()
{
    const username = document.getElementById("Username").value;
    const password = document.getElementById("password").value;
    const institution = document.getElementById("institution").value;

    
    if (username === "" || password === "" || institution == "") {
        alert("Please fill all fields.");
        return;
    }
    
    document.getElementById("login_box").style.display = "none";
    document.getElementById("home").style.display = "block";

    document.getElementById("loginHeader").style.display = "none";
    document.getElementById("homeHeader").style.display = "block";
    
    localStorage.setItem("User",username);
    localStorage.setItem("Password",password);
    localStorage.setItem("Institution",institution);
    localStorage.setItem("Login","OK");
    
}

document.getElementById("submit").addEventListener("keydown",function (e)
{
    if(e.key === "Enter")
    {
        login();
    }
});


function logout()
{

    localStorage.clear();

    document.getElementById("home").style.display = "none";
    document.getElementById("login_box").style.display = "flex";

    document.getElementById("loginHeader").style.display = "block";
    document.getElementById("homeHeader").style.display = "none";
}



const u_name = localStorage.getItem("User"); 
const pass = localStorage.getItem("Password");
const inst_name = localStorage.getItem("Institution");
const loggedIn = localStorage.getItem("Login");

if (loggedIn === "OK" && u_name && pass && inst_name)
{
    document.getElementById("login_box").style.display = "none";
    document.getElementById("home").style.display = "block";

    document.getElementById("loginHeader").style.display = "none";
    document.getElementById("homeHeader").style.display = "block";
}
