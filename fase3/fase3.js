const name = ["I", "s", "a", "a", "c"];

let wildcard = {}; // {} have unordered acces to prop:value
let nameMap = new Map(); // Map have ordered acces to key:value

// 1a. record values from "name" as "wildcard" props
// 1b. record iteration of "wildcard" props as "wildcard" values increment
// 2a. set "nameMap" keys via "name" values
// 2b. set "nameMap" values via "wildcard" values
for (letter of name) {
	wildcard[letter] = wildcard[letter] ? wildcard[letter] + 1 : 1; // unordered access :)
	nameMap.set(letter, wildcard[letter]);
}

// --print out
console.log(nameMap);
// console.info(wildcard);
