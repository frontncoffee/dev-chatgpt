$(document).ready(function() {
    const apiUrl = "https://picsum.photos/1920/1080";

    function loadNewImage() {
        const imageUrl = `${apiUrl}?random=${Math.random()}`;
        $("#image-container").css("background-image", `url(${imageUrl})`);
        setTimeout(loadNewImage, 10000); // Load new image after 10 seconds
    }

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Quinta-feira', 'Sexta-feita', 'Saturday'][now.getDay()];
        const date = now.toLocaleDateString();

        $("#clock").html(`${hours}:${minutes}<span style="font-size: 0.7em">:${seconds}</span>`);
        $("#date").html(`${dayOfWeek}, ${date}`);
    }

    loadNewImage();
    updateClock();
    setInterval(updateClock, 1000); // Update clock every second
});
