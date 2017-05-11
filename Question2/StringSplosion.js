class StringSplosion {
	constructor(string) {
		this.string = string;
	}

	manipulate() {
		let sploded = "";
		let length = this.string.length;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j <= i; j++) {
				sploded += this.string[j]
			}
		}
		return sploded;
	}
}

module.exports = StringSplosion;