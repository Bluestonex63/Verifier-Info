document.querySelector("#separators").addEventListener("mousedown", function(e) {
    for (seperator of document.querySelectorAll(".separator")) {
        if (!(seperator.classList.contains("separatoractive") && (e.target == seperator || e.target == document.querySelector("#separators")))) {
            seperator.classList.remove("separatoractive")
            document.querySelector(`#${seperator.id}div`).classList.add("invisible")
        }
    }
    if (!e.target.classList.contains("separatoractive") && e.target != document.querySelector("#separators")) {
        e.target.classList.add("separatoractive")
        document.querySelector(`#${e.target.id}div`).classList.remove("invisible")
    }


})
