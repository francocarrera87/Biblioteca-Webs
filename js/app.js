coll = document.getElementsByClassName("collapsible");


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        
        // Cerrar todos los elementos abiertos
        for (var j = 0; j < coll.length; j++) {
            var openContent = coll[j].nextElementSibling;
            if (openContent !== content && openContent.style.display === "block") {
                openContent.style.display = "none";
                coll[j].classList.remove("active");
            }
        }
        
        // Abrir o cerrar el elemento actual
        this.classList.toggle("active");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
