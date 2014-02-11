$(document).ready(function(){

	function getBasicData() {

		var data;
		data = Faker.Name.findName();
		
		if (data) {
			var prettyData = prettyPrint(data); 
			console.log(prettyData);
			return prettyData;
		} else {
			return data; 
		}

	}

	function getArrayData() {
		var data = [];
		
		for (var i = 0; i < 10; i++) {
			data.push(Faker.Name.findName()); 
		}

		if (data) {
			var prettyData = prettyPrint(data); 
			console.log(prettyData); 
			return prettyData;
		} else {
			return data; 
		}

	}

	function getPhoneNumbers() {
		var data = [];

		for (var i = 0; i < 20; i++) {
			data.push(Faker.PhoneNumber.phoneNumber());
		}

		if (data) {
			data = prettyPrint(data);
			return data;
		} else {
			return data; 
		}

	}

	function getParagraph() {
		var p;
		p = Faker.Lorem.paragraph(); 

		if (p) {
			return p;
		} 
		return 
	}

	function getObjectData() {
		var data = {};
		data.firstname = Faker.Name.firstName();
		console.log("First Name: " + data.firstname);
		data.lastname = Faker.Name.lastName();
		console.log("Last Name: " + data.lastname);

		if (data) {
			data = prettyPrint(data);
			return data;
		} else {
			return;
		}
	}

	function getMixedData() {
		var data = [];

		for (var i = 0; i < 10; i++) {
			var newObject = {};

			newObject['name'] = Faker.Name.firstName();
			newObject['company'] = Faker.Company.companyName();
			newObject['email'] = Faker.Internet.email();
			newObject['phone'] = Faker.PhoneNumber.phoneNumber(); 

			data.push(newObject); 
			
		}

		if (data) {
			data = prettyPrint(data);
			return data; 
		} else {
			return data; 
		}
		
	}



	function getCardData() {
		var data = [];

		data = Faker.Helpers.createCard(); 

		if (data) {
			data = prettyPrint(data);
			return data;
		} else {
			return data;
		}

	}

	function getuserCardData() {
		var data = [];

		data = Faker.Helpers.userCard();

		if (data) {
			data = prettyPrint(data);
			return data;
		} else {
			return data; 
		}

	}

	function getImageHtml() {
		var imgWidth = "" + (Faker.Helpers.randomNumber(200) + 100) + "px";
		var imgHeight = "" + (Faker.Helpers.randomNumber(200) + 100) + "px";
		var imgAlt = "" + Faker.Lorem.sentence();
		var imgTitle = "" + Faker.Lorem.sentence();
		var imgSrc = "http://www.dummyimage.com/" + imgWidth + "x" + imgHeight;

		var imgElement = '<img src="' + imgSrc + '" width="' + imgWidth + '" height="' + imgHeight + '" alt="' + imgAlt + '" title="' + imgTitle + '" />';
		console.log(imgElement);

		if (imgElement) {
			imgElement = prettyPrint(imgElement);
		}

		return imgElement; 
	}
	
	$("button[id^='btn-']").click(function(){
		
		var buttonId = $(this).attr("id");
		console.log(buttonId);
		var fakerData; 

		switch (buttonId) {

			case 'btn-basic' :
				fakerData = getBasicData();
				break;

			case 'btn-array' :
				fakerData = getArrayData(); 
				break;

			case 'btn-paragraph' :
				fakerData = getParagraph();
				break; 

			case 'btn-numbers' :
				fakerData = getPhoneNumbers();
				break;

			case 'btn-object' :
				fakerData = getObjectData();
				break;

			case 'btn-mixed' :
				fakerData = getMixedData();
				break;

			case 'btn-card' :
				fakerData = getCardData();
				break;

			case 'btn-usercard' :
				fakerData = getuserCardData();
				break;

			case 'btn-image' :
				fakerData = getImageHtml();
				break;
		}

		$("#exercise-output").html(fakerData); 

	});

});