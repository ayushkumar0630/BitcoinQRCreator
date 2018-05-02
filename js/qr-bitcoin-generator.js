function createQRCode(htmlElement, parameters){

	console.log(parameters);

	var paymentQRcode = '';
	var qrcode = null;
	var width = 100;
	var height = 100;

	if(parameters["address"] !== undefined){
		if(parameters["amount"] !== ""){
			paymentQRcode = 'bitcoin:' + parameters["address"] + '?amount=' + parameters["amount"];
		}else{
			paymentQRcode = 'bitcoin:' + parameters["address"];
		}

		if( parameters["width"] !== undefined && parameters["height"] !== undefined ){
			alert("test");
			width = parameters["width"];
			height = parameters["height"];
		}

		qrcode = new QRCode(htmlElement, {
			text: paymentQRcode,
			width : width,
			height : height
		});
	}
	else 
	{

	}

	return qrcode;

}
