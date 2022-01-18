// Oppgave 1

const outOfStock = true;

if (outOfStock == true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
};

// Oppgave 2

for (let a = 15; a <= 25; a++) {
    if (a === 17 || 20) {
        console.log(a);
    }
}

// Oppgave 3

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

const li = document.querySelector("ul.games")
for (let i = 0; i < games.length; i++) {
    if (games[i].rating <= 3.5) {
        li.innerHTML += "<li>" + games[i].title + " : " + games[i].rating + "</li>";
    }
};

// Oppgave 4

function whatIDontLike(value) {
    if (typeof value == "string") {
        console.log("I don't like " + value);
    }
    else console.log("Please send in a string");
}
value = "Giraffe";
console.log(whatIDontLike(value));

// Oppgave 5

