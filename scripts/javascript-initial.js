function multiply(num1, num2) {
	var result = num1 * num2
	return result
}

var myImage = document.querySelector('img')
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src')
	if(mySrc === 'http://www.how-to-draw-funny-cartoons.com/image-files/cartoon-plate-5.gif') {
		myImage.setAttribute('src', 'images/logo.jpg')
		} else {
		myImage.setAttribute('src', 'http://www.how-to-draw-funny-cartoons.com/image-files/cartoon-plate-5.gif')
	}
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName() {
	var myName = prompt('Please enter your name!')
	localStorage.setItem('name', myName)
	myHeading.textContent = 'This website coming along, ' + myName
}

if(!localStorage.getItem('name')) {
	setUserName()
} else {
	var storedName = localStorage.getItem('name')
	myHeading.textContent = 'This website is coming along, ' + storedName
}

myButton.onclick = function() {
	setUserName()
}
