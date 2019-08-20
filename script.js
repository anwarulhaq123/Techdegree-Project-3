//**************************Techdegree- Project- 3*******************************//

//******************Intrective Forms (JQuery and JavaScript)********************//

$('#name').focus(); // Making the focus of the cursor in the Name field When Page Load.


// Hide the job role options When user choose the "Other"Option.

$('#title').change(function () {
	if ($('#title').val() === "other") {
		$('#other-title').show();
	} else {
		$('#other-title').hide();
	}
});


// *********************** T-Shirt Color Section ***********************************//                                                 


// Set the Value of drop down Menue according to user Selection.

let $colors = $('#color option');
let colorOption = $colors.eq().text();

$('#colors-js-puns').hide();
$('#design>option:eq(0)').attr('disabled', true);

$('#design').change(function () {
	if ($('#design option:selected').val() === "js puns") {
		$('#colors-js-puns').show();
		$('#color').html('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
	} else if ($('#design option:selected').val() === "heart js") {
		$('#colors-js-puns').show();
		$('#color').html('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>');
	}
});



//******************************* Register for Activities section *********************//



let activitiesArray = [];
let totalCost;
const $activities = $('#activities');
$(".activities").on("click", function () {
	var total = 0;
	if ($("input[name='all']").is(":checked")) {
		total += 200;
	}
	if ($("input[name='js-frameworks']").is(":checked")) {
		total += 100;
		$("input[name='express']").attr("disabled", true);
	} else {
		$("input[name='express']").attr("disabled", false);
	}
	if ($("input[name='js-libs']").is(":checked")) {
		total += 100;
		$("input[name='node']").attr("disabled", true);
	} else {
		$("input[name='node']").attr("disabled", false);
	}
	if ($("input[name='express']").is(":checked")) {
		total += 100;
		$("input[name='js-frameworks']").attr("disabled", true);
	} else {
		$("input[name='js-frameworks']").attr("disabled", false);
	}
	if ($("input[name='node']").is(":checked")) {
		total += 100;
		$("input[name='js-libs']").attr("disabled", true);
	} else {
		$("input[name='js-libs']").attr("disabled", false);
	}

	if ($("input[name=build-tools]").is(":checked")) {
		total += 100;
	}
	if ($("input[name=npm]").is(":checked")) {
		total += 100;
	}
	totalPrice(total);
});

function totalPrice(total) {
	if (typeof total !== 0) {
		$("#totalDiv").remove();
		$(".activities").append("<div id='totalDiv'>Your total : $" + total + "</div>");
	} else {
		$("#totalDiv").remove();
	}
}
//******************************** Payment Options Section************************//

// Hide 'Select Payment Method'

$('#payment').children().eq(0).hide();

// Hiding the 'Paypal' and  'Bitcoin ' options when User choose the Credit Card option.

const creditCard = $('#credit-card');

const payPal = $('#credit-card').next();
payPal.hide();

const bitcoin = $('#credit-card').next().next();
bitcoin.hide();

// function for show and hide the options according to user choice..


$('#payment').on('change', function () {
	$(this).children().eq(0).hide();
	if ($(this).val() === 'credit card') {
		creditCard.show();
		payPal.hide();
		bitcoin.hide();
	}
	if ($(this).val() === 'paypal') {
		payPal.show();
		creditCard.hide();
		bitcoin.hide();
	}
	if ($(this).val() === 'bitcoin') {
		bitcoin.show();
		creditCard.hide();
		payPal.hide();
	}
});


//************************* Form Validation*************************//

//Regex Function for Name 

const isValidName = () => {
	const name = $('#name').val();
	const nameCheck = /^[a-zA-Z ]+$/.test(name);
	return nameCheck;
}

// Validation Of Name 


const nameVal = () => {
	if (isValidName()) {
		$('label[for="name"]').css('color', '');
		$('#name').css('border', '');
	} else {
		$('label[for="name"]').css('color', 'red');
		$('#name').css('border', '2px solid red');
	}
}

// Event Listener for Name
$('#name').on('change', function () {
	nameVal();
});

// Regex function for Email..


const isValidEmail = () => {
	const email = $('#mail').val();
	const emailCheck = /^.+@\w+\.com$/i.test(email);
	return emailCheck;
}

//  Validation Of Email...
const emailVal = () => {
	if (isValidEmail()) {
		$('label[for="mail"]').css('color', '');
		$('#mail').css('border', '');
	} else {
		$('label[for="mail"]').css('color', 'red');
		$('#mail').css('border', '2px solid red');
	}
}

// Event Listener For Email..

$('#mail').on('change', function () {
	emailVal();
});


// Function to check the activities are "Checked"Or"Not".


const checked = () => {
	const activityCount = $('.activities input:checkbox:checked').length;
	const activtyLegend = $('.activities legend');
	if (activityCount >= 1) {
		activtyLegend.css('color', '');
		return true;
	} else {
		activtyLegend.css('color', 'red');
		return false;
	}
}


// Event Listener for Activities..


$('.activities').on('change', function () {
	checked();
});


// Regex Function for CC Number


const isValidCC = () => {
	const ccNumInput = $('#cc-num').val();
	const ccNumCheck = /^[0-9]{13,16}$/.test(ccNumInput); // Accept only 13- 16 Numbers//
	return ccNumCheck;
}

//  Regex function for Zip Code

const isValidZip = () => {
	const zipCode = $('#zip').val();
	// Regex which can satisfy all three condtions for zip-code. E.g-
	//12345
	//12345-6789
	//12345 1234
	const zipCodeCheck = /^\d{5}(?:[-\s]\d{4})?$/.test(zipCode);

	return zipCodeCheck;
}

// Regex function for CVV Code..
const isValidCVV = () => {
	const cvv = $('#cvv').val();
	// Regex can accept 3 numbers
	const cvvCheck = /^[0-9]{3,4}$/.test(cvv);
	return cvvCheck;
}

// Credit Card Validation for number, zip code and cvv
const cardVal = () => {
	if (isValidCC()) {
		$('label[for="cc-num"]').css('color', '');
		$('#cc-num').css('border', '');
	} else {
		$('label[for="cc-num"]').css('color', 'red');
		$('#cc-num').css('border', '2px solid red');
	}
	if (isValidZip()) {
		$('label[for="zip"]').css('color', '');
		$('#zip').css('border', '');
	} else {
		$('label[for="zip"]').css('color', 'red');
		$('#zip').css('border', '2px solid red');
	}
	if (isValidCVV()) {
		$('label[for="cvv"]').css('color', '');
		$('#cvv').css('border', '');
	} else {
		$('label[for="cvv"]').css('color', 'red');
		$('#cvv').css('border', '2px solid red');
	}
}

// Credit card event listener for number, zip code and cvv
$('#cc-num, #zip, #cvv').on('change', function () {
	cardVal();
});

// Payment selected function 


const isValidPayment = () => {
	const paymentVal = $('#payment :selected').text();
	if (paymentVal === 'PayPal' || paymentVal === 'Bitcoin') {
		return true;
	}
	if (paymentVal === 'Credit Card') {
		if (isValidCC() && isValidZip() && isValidCVV()) {
			return true;
		}
		return false;
	}
}

// Main validation fucntion
const masterVal = () => {
	if (isValidName() && isValidEmail() && checked() && isValidPayment()) {
		return true;
	}
	return false;
}


// Main Validation event listener
$('button').on('click', function (event) {
	if (masterVal()) {

	} else {
		event.preventDefault();
		nameVal();
		emailVal();
		checked();
		cardVal();
	}
});
