const name = [
	"I",
	"5", // number
	"a",
	"a",
	"c",
];

// regex --> find vocals
const regex = new RegExp(/[A,E,I,O,U]/i); // i --modifier: case insensitive

// --print out
for (letter of name) {
	isNaN(letter)
		? console.log(
				"%c He trobat la " +
					(regex.exec(letter) ? `VOCAL "${letter}"` : `CONSONANT "${letter}"`),
				"color: darkgreen;"
		  )
		: console.log(
				`%cEls noms de persones no contenen el número "${letter}"`,
				"color: brown;"
		  );
}

/*

NOTE: Console logs collapsed visualization

in Chrome Console > More Tools > Settings > Preferences > Console
check "Show timestamps" so that Crhome doesn't collapse
same value console logs.
e.g.

"i, 5, a, a, c"

vs.

"i, 5, a(2), c"

*/
