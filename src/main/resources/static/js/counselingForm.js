function isValid(category) {
	var required = $(`form[name=${category}] input, form[name=${category}] textarea`).filter('[required]');
	//console.log(required)
	var allRequired = true;

	required.each(function () {
		if ($(this).val() == '') {
			allRequired = false;
		}
	});

	if (!allRequired) {
		Swal.fire("Attention!", "Please, fill the form first", "warning");
		return;
	}

	startPayment(category);
}

function startPayment(category) {
	console.log("paymentStarted")
	$.ajax(
		{
			url: "/create-order-starter",
			data: JSON.stringify({amount: 250000}),
			contentType: 'application/json',
			type: 'POST',
			dataType: 'json',
			success: function (response) {
				if (response.status == "created") {
					let options = {
						"key": "rzp_test_fS3k81U9Notfcz",
						"amount": "250000",
						"currency": "INR",
						"name": "Techno-Hub Laboratories",
						"description": "Counseling Fee",
						"image": "https://techno-hub.org/wp-content/uploads/2021/05/cropped-technohub-1.png",
						"order_id": response.id,
						"handler": function (response) {
							Swal.fire({
								title: 'Payment Successful!',
								text: "We'll contact you shortly",
								icon: 'success',
								confirmButtonText: 'Ok',
								allowOutsideClick: false,
								allowEscapeKey: false
							}).then((result) => {
								if (result.isConfirmed) {
									$(`#${category}`).submit();
								} else if (result.dismiss === Swal.DismissReason.cancel) {
									Swal.fire(
										'Oops!!',
										'Some error occured. Try Again',
										'error'
									)
								}
							})
							console.log(category)

						},
						"prefill": {
							"name": "",
							"email": "",
							"contact": ""
						},
						"notes": {
							"address": "Techno-Hub Corporate Office"
						},
						"theme": {
							"color": "#3399cc"
						}
					}//end of options
					var rzp = new Razorpay(options);
					rzp.on('payment.failed', function (response) {
						Swal.fire("Failed!", "Payment failed", "error");
					});
					rzp.open();
				}//end of if
			},//end of success function
			error: function (error) {
				Swal.fire("Error!", "Server Error", "error");
			}
		}//end of ajax
	)
}//end of start payment