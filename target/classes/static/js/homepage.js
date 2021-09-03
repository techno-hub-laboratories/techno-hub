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

const tth1 = document.getElementById("tooltip-1").getBoundingClientRect().top + window.scrollY;
const tth2 = document.getElementById("tooltip-2").getBoundingClientRect().top + window.scrollY;
//const tth3 = document.getElementById("tooltip-3").getBoundingClientRect().top + window.scrollY;
//const tth4 = document.getElementById("tooltip-4").getBoundingClientRect().top + window.scrollY;
var myb1 = document.getElementById("mybar-1").getBoundingClientRect().top + window.scrollY;
//var myb2 = document.getElementById("mybar-2").getBoundingClientRect().top + window.scrollY;
//var myb3 = document.getElementById("mybar-3").getBoundingClientRect().top + window.scrollY;

window.onscroll = function () { myFunction() };
function myFunction() {
	var winInnerHeight = window.innerHeight;
	console.log(window.pageYOffset);
	console.log(winInnerHeight);
	console.log(myb1);
	console.log((winInnerHeight / 2) + window.pageYOffset);
	console.log(" ");

	if (myb1 <= (winInnerHeight / 2) + window.pageYOffset) {
		document.getElementById("mybar-1").style.height = ((winInnerHeight / 2) + window.pageYOffset - myb1) + "px";
	} else if (myb1 > (winInnerHeight / 2) + window.pageYOffset) {
		document.getElementById("mybar-1").style.height = 0 + "px";
	}

	//if (myb2 <= (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("mybar-2").style.height = ((winInnerHeight / 2) + window.pageYOffset - myb2) + "px";
	//} else if (myb2 > (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("mybar-2").style.height = 0 + "px";
	//}

	//if (myb3 <= (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("mybar-3").style.height = ((winInnerHeight / 2) + window.pageYOffset - myb3) + "px";
	//} else if (myb3 > (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("mybar-3").style.height = 0 + "px";
	//}

	if (tth1 <= (winInnerHeight / 2) + window.pageYOffset) {
		document.getElementById("tooltip-1").classList.add("changetooltipdiv");
		document.getElementById("tooltip-1").classList.remove("tooltipdiv");
	} else if (tth1 > (winInnerHeight / 2) + window.pageYOffset) {
		document.getElementById("tooltip-1").classList.add("tooltipdiv");
		document.getElementById("tooltip-1").classList.remove("changetooltipdiv");
	}

	if (tth2 <= (winInnerHeight / 2) + window.pageYOffset) {
		document.getElementById("tooltip-2").classList.add("changetooltipdiv");
		document.getElementById("tooltip-2").classList.remove("tooltipdiv");
	} else if (tth2 > (winInnerHeight / 2) + window.pageYOffset) {
		document.getElementById("tooltip-2").classList.add("tooltipdiv");
		document.getElementById("tooltip-2").classList.remove("changetooltipdiv");
	}

	//if (tth3 <= (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("tooltip-3").classList.add("changetooltipdiv");
	//	document.getElementById("tooltip-3").classList.remove("tooltipdiv");
	//} else if (tth3 > (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("tooltip-3").classList.add("tooltipdiv");
	//	document.getElementById("tooltip-3").classList.remove("changetooltipdiv");
	//}

	//if (tth4 <= (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("tooltip-4").classList.add("changetooltipdiv");
	//	document.getElementById("tooltip-4").classList.remove("tooltipdiv");
	//} else if (tth4 > (winInnerHeight / 2) + window.pageYOffset) {
	//	document.getElementById("tooltip-4").classList.add("tooltipdiv");
	//	document.getElementById("tooltip-4").classList.remove("changetooltipdiv");
	//}
}