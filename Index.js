  
let isLogin = sessionStorage.getItem("Login") === "true";

document.querySelectorAll(".protected-link").forEach(function(link) {

    if (!isLogin) {
        link.classList.add("disabled");

        link.addEventListener("click", function(e) {
            e.preventDefault();
            alert("Please login first.");
        });
    }
});
