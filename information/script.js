document.querySelector("#separators").addEventListener("mousedown", function(e) {
    for (seperator of document.querySelectorAll(".separator")) {
        if (!(seperator.classList.contains("separatoractive") && (e.target == seperator || e.target == document.querySelector("#separators")))) {
            seperator.classList.remove("separatoractive")
        }
    }
    if (!e.target.classList.contains("separatoractive") && e.target != document.querySelector("#separators")) {
        e.target.classList.add("separatoractive")
    }


})
