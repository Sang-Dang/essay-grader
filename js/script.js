function switchstate(obj) {
    if(!obj.classList.contains("active")) {
        var all = document.getElementsByClassName("active");
        for(var i = 0; i < all.length; i++) {
            all[i].classList.remove("active");
        }
        obj.classList.add("active");
    }
}