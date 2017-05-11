/*
function reverseString(string) {
	let temp = "";
	let len = string.length;
	for (let counter = len-1; counter > 0; counter--) {
		temp += string[counter];
	}
	return (temp === string)?true:false;
}
*/

function reverseString(string) {
	for (let counter = 0; counter < string.length/2; counter++) {
		if (string[counter] !== string[string.length - counter - 1])
			return false;
	}
	return true;
}
module.exports = reverseString;