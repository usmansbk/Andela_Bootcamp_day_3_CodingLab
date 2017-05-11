/*
function reverseString(string) {
	if (string === '') return null;
	let temp = "";
	let len = string.length;
	for (let counter = len-1; counter > 0; counter--) {
		temp += string[counter];
	}
	return (temp === string)?true:temp;
}
*/

function reverseString(string) {
	if (string === '') return null;
	let length = string.length;
	for (let counter = 0; counter < length/2; counter++) {
		if (string[counter] !== string[string.length - counter - 1]) {
			let temp = '';
			for (let counter = length; counter > 0; counter--) {
				temp += string[counter-1];
			}
			return temp;
		}
	}
	return true;
}

module.exports = reverseString;