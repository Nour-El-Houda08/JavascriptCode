function upDate(previewPic) {
    // Set the background-image of the big image box to the hovered thumbnail's src
    const imageBox = document.getElementById('image');
    imageBox.style.backgroundImage = "url('" + previewPic.src + "')";

    // Update the text paragraph with the alt text of the hovered image
    const text = document.getElementById('text');
    text.innerHTML = previewPic.alt;
}

function unDo() {
    // Reset the big image box and text to default values
    const imageBox = document.getElementById('image');
    imageBox.style.backgroundImage = ""; // remove background-image

    const text = document.getElementById('text');
    text.innerHTML = "Hover over an image below to display it here.";
}
