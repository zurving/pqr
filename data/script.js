function createCode(){
    var requestedText = document.getElementById("input").value;
    alert( requestedText );
    document.getElementById("qrcode").src="/pqr/qr/?code=" + requestedText;
}

function generateDefaultQR(){
    document.getElementById("qrcode").src="/pqr/qr/?code=https://zurving.net/pqr/qr/r/";
}