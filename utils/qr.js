const QRCode = require('qrcode');

async function generateQR() {
  //   const url = ${process.env.BASE_URL}?id=${checkInId};
  const url = 'https://hart.trimsy.ca/1';
  return await QRCode.toDataURL(url);
}

module.exports = generateQR;
