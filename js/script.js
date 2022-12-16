function switchstate(obj) {
    if(!obj.classList.contains("active")) {
        var all = document.getElementsByClassName("active");
        for(var i = 0; i < all.length; i++) {
            all[i].classList.remove("active");
        }
        var contents = document.getElementsByClassName("content");
        for(var i = 0; i < contents.length; i++) {
            contents[i].style.display = "none";
        }
        obj.classList.add("active");
        console.log(obj.classList[0]);
        document.getElementsByClassName(obj.classList[0]).style.display = "block";
    }
}

function clickRadioButton(obj) {
    var currentClass = obj.classList[0];
    var all = document.getElementsByClassName(currentClass);
    for(var i = 0; i < all.length; i++) {
        all[i].setAttribute("data-toggle", "false");
        all[i].style.backgroundColor = "lightgray";
    }
    obj.setAttribute("data-toggle", "true");
    obj.style.backgroundColor = "red";
}

function clickCheckButton(obj) {
    if(obj.getAttribute("data-toggle") == "true") {
        obj.setAttribute("data-toggle", "false");
        obj.style.backgroundColor = "lightgray";
    }
    else {
        obj.setAttribute("data-toggle", "true");
        obj.style.backgroundColor = "red";
    }
}