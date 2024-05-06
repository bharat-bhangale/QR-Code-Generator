let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrtext = document.getElementById('qrtext');

qrtext.addEventListener('input', () => {
    const trimmedText = qrtext.value.trim();
    if (trimmedText.length === 0) {
        qrImage.src = '';
        imgBox.classList.remove("show-img");
    } else {
        let encodedText = encodeURIComponent(trimmedText);
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedText}`;
        imgBox.classList.add("show-img");
    }
});
