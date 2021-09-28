 function myFunction() {
        var x = document.getElementById("devnav");
        if (x.className === "nav") {
            x.className += " responsive";
        } else {
            x.className = "nav";
        }
    }