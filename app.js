const videoElement = document.getElementById('camera-stream');
const startButton = document.getElementById('start-camera');
const errorMessageDiv = document.getElementById('error-message');

const app = Telegram.WebApp;

function scanQr(){
    app.showScanQrPopup({text:'for test purposes'},
        function (text) {
            app.showAlert('`' + text +'`');
        });
}

app.ready();
app.MainButton.setParams({text: 'Scan QR', is_visible: true}).onClick(scanQr);