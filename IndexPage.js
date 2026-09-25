 
            function login() {
                let user = document.getElementById("username").value;
                let pass = document.getElementById("password").value;

                if (user == "Harsh" && pass == "1234") {
                    document.getElementById("username").value = "";
                    document.getElementById("password").value = "";
                    sessionStorage.setItem("Login", "true");
                    let page = sessionStorage.getItem("redirectPage");

                    if (page) {
                        sessionStorage.removeItem("redirectPage");
                        window.location.href = page;
                    } else {
                        window.location.href = "index.html";
                    }
                }
                else {
                    alert("Invalid Username or Password");
                }
            }
            window.addEventListener("pageshow", function () {
                document.getElementById("username").value = "";
                document.getElementById("password").value = "";
            });
            function togglePassword() {
                let pass = document.getElementById("password");
                let eye = document.getElementById("eye");

                if (pass.type === "password") {
                    pass.type = "text";
                    eye.classList.replace("fa-eye", "fa-eye-slash");
                } else {
                    pass.type = "password";
                    eye.classList.replace("fa-eye-slash", "fa-eye");
                }
            }
        