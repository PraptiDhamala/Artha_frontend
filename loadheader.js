// loadheader.js
fetch("../html/profile.html") 
    .then(res => {
        if (!res.ok) throw new Error("Could not load profile.html. Ensure you are using Live Server.");
        return res.text();
    })
    .then(data => { 
        const container = document.getElementById("user-content");
        if (container) {
            container.innerHTML = data;
        }

        const openuser = document.getElementById("openuser");
        const usercontainer = document.getElementById("user-container");

        if (openuser && usercontainer) {
            openuser.addEventListener("click", () => {
                usercontainer.style.display = "block"; 
            });

            window.addEventListener("click", (e) => {
                if (e.target === usercontainer) {
                    usercontainer.style.display = "none";
                }
            });
        }

        const scripta = document.createElement("script");
        scripta.src = "../js/profile.js"; 
        document.body.appendChild(scripta);
    })
    .catch(err => console.error("Error in loadheader.js:", err));