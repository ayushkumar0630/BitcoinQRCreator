function createQRCode(htmlElement, bitcoinAddress, amount, QRwidth, QRheight){

	var paymentQRcode = 'bitcoin:' + bitcoinAddress + '?amount=' + amount;


	var qrcode = new QRCode(htmlElement, {
		text: paymentQRcode,
		width : QRwidth,
		height : QRheight
	});

	qrcode.makeCode();

	return qrcode;

}
