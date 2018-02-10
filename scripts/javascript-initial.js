//Simple function to demonstrate how javascript works
function multiply(num1, num2) {
	var result = num1 * num2
	return result
}

//Switches between main images on page when clicking on them
var myImage = document.querySelector('img')
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src')
	if(mySrc === 'images/cartoon_plate.jpg') {
		myImage.setAttribute('src', 'images/logo.jpg')
		} else {
		myImage.setAttribute('src', 'images/cartoon_plate.jpg')
	}
}


//Selects which CSS styles to affect
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

//Prompts user for name and then changes the main header to be personalized
function setUserName() {
	var myName = prompt('Please enter your name!')
	localStorage.setItem('name', myName)
	myHeading.textContent = 'This website is coming along, ' + myName
}

//Checks user browser for history of browsing the page. If the information is not found, it prompts the user again.
if(!localStorage.getItem('name')) {
	setUserName()
} else {
	var storedName = localStorage.getItem('name')
	myHeading.textContent = 'This website is coming along, ' + storedName
}

//Calls for user to enter name
myButton.onclick = function() {
	setUserName()
}
