$("#FirstName").change(function() {
	const reg = /^[a-zA-Z\s]+$/;
	if (reg.test($("#FirstName").val())) {
		$("#FirstName").addClass("is-valid");
		$("#FirstName").removeClass("is-invalid");
	} else {
		$("#FirstName").addClass("is-invalid");
		$("#FirstName").removeClass("is-valid");
	}
});

$("#LastName").change(function() {
	const reg = /^[a-zA-Z\s]+$/;
	if (reg.test($("#LastName").val())) {
		$("#LastName").addClass("is-valid");
		$("#LastName").removeClass("is-invalid");
	} else {
		$("#LastName").addClass("is-invalid");
		$("#LastName").removeClass("is-valid");
	}
});

$("#Email").change(function() {
	const reg = /^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;
	console.log($("#Email").val());
	if (reg.test($("#Email").val())) {
		$("#Email").addClass("is-valid");
		$("#Email").removeClass("is-invalid");
	} else {
		$("#Email").addClass("is-invalid");
		$("#Email").removeClass("is-valid");
	}
});

$("#City").change(() => {
	const reg = /^[a-zA-Z\s]+$/;
	console.log($("#Email").val());
	if (reg.test($("#City").val())) {
		$("#City").addClass("is-valid");
		$("#City").removeClass("is-invalid");
	} else {
		$("#City").addClass("is-invalid");
		$("#City").removeClass("is-valid");
	}
})

$("#State").change(() => {
	const reg = /^[a-zA-Z\s]+$/;
	console.log($("#State").val());
	if (reg.test($("#State").val())) {
		$("#State").addClass("is-valid");
		$("#State").removeClass("is-invalid");
	} else {
		$("#State").addClass("is-invalid");
		$("#State").removeClass("is-valid");
	}
});

$("#PhoneNumber").change(() => {
	const reg = /^[0-9]{10}/;
	console.log($("#PhoneNumber").val());
	if (reg.test($("#PhoneNumber").val())) {
		$("#PhoneNumber").addClass("is-valid");
		$("#PhoneNumber").removeClass("is-invalid");
	} else {
		$("#PhoneNumber").addClass("is-invalid");
		$("#PhoneNumber").removeClass("is-valid");
	}
})