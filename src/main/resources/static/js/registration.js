let signupDisplayBtn = document.getElementById('signupDisplayBtn');
let loginDisplayBtn = document.getElementById('loginDisplayBtn');

let signup = document.getElementById('signup');
let login = document.getElementById('login');

signupDisplayBtn.addEventListener('click', () => {
    signup.style.display = "block";
    login.style.display = "none";
})


loginDisplayBtn.addEventListener('click', () => {
    signup.style.display = "none";
    login.style.display = "block";
})

function checkemail() {
	let Email = document.getElementById("email");
	let PayBtn = document.getElementById("paybtn");

	fetch("https://technomentorship.org/authenticate-email", {

		// Adding method type
		method: "POST",

		// Adding body or contents to send
		body: JSON.stringify({
			title: "foo",
			body: "bar",
			email: Email.value
		}),

		// Adding headers to the request
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})

		// Converting to JSON
		.then(response => response.json())
		.then(json => {
			console.log(json)
			if (json) {
				PayBtn.removeAttribute("disabled");
			}
			else {
				PayBtn.setAttribute('disabled', 'disabled');
			}
		});
}
function isValid() {
	//var required = $('input').filter('[required]');
	var required = $("form[name='signupForm'] input").filter('[required]');

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

	startPayment();
}

const startPayment = () => {
	//console.log("paymentStarted")

	$.ajax({
		url: "/create-order-sign-in",
		data: JSON.stringify({ amount: 50000 }),
		contentType: 'application/json',
		type: 'POST',
		dataType: 'json',
		success: function (response) {
			if (response.status == "created") {
				let options = {
					"key": "rzp_test_fS3k81U9Notfcz",
					"amount": "50000",
					"currency": "INR",
					"name": "Techno-Hub Laboratories",
					"description": "Registration Fee",
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
								$("#signupForm").submit();
							} else if (result.dismiss === Swal.DismissReason.cancel) {
								Swal.fire(
									'Oops!!',
									'Some error occured. Try Again',
									'error'
								)
							}
						})
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
			swal("Error!", "Server Error", "error");
		}
	}//end of ajax
	)
}//end of start payment