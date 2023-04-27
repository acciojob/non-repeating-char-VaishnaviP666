//your JS code here. If required.
let index = -1;
let fnc = ' ';
for (let i of string) {
    if (string.split(i).length - 1 === 1) {
        fnc = i;
        break;
    } else {
        index += 1;
    }
	return fnc;
}