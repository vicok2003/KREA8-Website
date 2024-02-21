document.addEventListener("DOMContentLoaded", function() {
    let currentActivePara = document.getElementById("para1");
    currentActivePara.classList.add("visible"); 

    const firstButton = document.querySelector(`[data-target='para1']`);
    firstButton.classList.add('active');

    document.querySelectorAll(".flow-btns button").forEach(button => {
        button.addEventListener("click", function() {
            const targetParaId = this.getAttribute("data-target");
            const targetPara = document.getElementById(targetParaId);

            document.querySelectorAll(".flow-btns button").forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            if (currentActivePara !== targetPara) {
                // Fade out and up current paragraph
                currentActivePara.classList.add("fadeOutUp");
                currentActivePara.classList.remove("visible");

                
                setTimeout(() => {
                    currentActivePara.style.display = "none"; 
                    currentActivePara.classList.remove("fadeOutUp");

                    targetPara.style.display = "block"; 
                    targetPara.classList.add("visible");
                    currentActivePara = targetPara;
                }, 500); 
            }
        });
    });
});
