function nextPage() {
    window.location.href = "success.html";
}

function moveButton() {
    var button = document.getElementById('noButton');
    var buttonWidth = button.offsetWidth;
    var buttonHeight = button.offsetHeight;
    
    var maxX = window.innerWidth - buttonWidth;
    var maxY = window.innerHeight - buttonHeight;
    
    var x = Math.random() * maxX;
    var y = Math.random() * maxY;

    x = Math.min(Math.max(x, 0), maxX); // Ensure x is within bounds
    y = Math.min(Math.max(y, 0), maxY); // Ensure y is within bounds

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
