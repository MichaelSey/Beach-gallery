document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popupImage");
    const popupAuthor = document.getElementById("popupAuthor");
    const close = document.getElementById("close");

    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            popupImage.src = thumbnail.src;
            popupAuthor.textContent = thumbnail.getAttribute("data-author");
            popup.style.display = "flex";
        });
    });

    close.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});
