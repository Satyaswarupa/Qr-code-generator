document.getElementById('generate-btn').addEventListener('click', generateQRCode);

function generateQRCode() {
  var input = document.getElementById('qr-input').value;
  var qrCodeDiv = document.getElementById('qr-code');
  
  // Clear previous QR code if exists
  qrCodeDiv.innerHTML = '';
  
  // Create QR code image element
  var qrCodeImg = document.createElement('img');
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
  qrCodeImg.alt = 'QR Code';
  
  // Append QR code image to container
  qrCodeDiv.appendChild(qrCodeImg);
  
  // Create download link
  var downloadLink = document.createElement('a');
  downloadLink.href = qrCodeImg.src;
  downloadLink.download = 'qr_code.png';
  downloadLink.textContent = 'Download QR Code';
  downloadLink.id = 'download-link';
  qrCodeDiv.appendChild(downloadLink);
}
