document.getElementById("recommendation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let newRec = document.getElementById("recommendation-text").value.trim();
    if (newRec === "") {
        alert("Please write a recommendation before submitting.");
        return;
    }

    let recContainer = document.querySelector(".recommendations-container"); 
    let newBox = document.createElement("div");
    newBox.classList.add("recommendations"); 

    newBox.innerHTML = `<p>“ ${newRec} ”</p>`;

    recContainer.appendChild(newBox);

    document.getElementById("recommendation-text").value = "";

    let successMsg = document.getElementById("success-msg");
    successMsg.style.display = "flex"; 
});

let backToTop = document.getElementById("back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
