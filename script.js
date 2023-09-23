document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.querySelector(".animated-text");

    // Function to add the final-state class after animation completes
    function addFinalState() {
        animatedText.classList.add("final-state");
    }

    // Add animationend event listener to the animated text
    animatedText.addEventListener("animationend", addFinalState);
});

