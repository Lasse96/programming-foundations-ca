// Oppgave 1

const outOfStock = true;

if (outOfStock == true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
};

// Oppgave 2


for (let a = 15; a <= 25; a++) {
    if (a <=16 || a >=21) {
        continue;
    } 
    console.log(a);
};


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
    if (games[i].rating <= 3.5 && typeof games[i].rating == "number") {
        li.innerHTML += "<li>" + games[i].title + " : " + games[i].rating + "</li>";
    }
};

// Oppgave 4

function whatIDontLike(value) {
    if (typeof value == "string") {
        return "I don't like " + value
    }
    else console.log("Please send in a string");
};
value = "Giraffes";
console.log(whatIDontLike(value));

// Oppgave 5


function tall(t1, t2) {
	const numb1 = Number(t1)
	const numb2 = Number(t2)
	const sub = document.querySelector("#subtraction")
  
	if(isNaN(numb1) || isNaN(numb2)){
		sub.innerHTML = "Invalid argument(s)"
  }else{
	 	return sub.innerHTML = numb1 - numb2
  }
  } 

  t1 = "50"
  t2 = 20
  console.log(tall(t1, t2));


// Oppgave 6

const button = document.querySelector("button.page");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const title = document.querySelector("title");
const ul = document.querySelector("ul")

function endre() {
    title.innerHTML = "Updated title";
    body.style.backgroundColor = "yellow";
    h1.style.color = "green";
    h1.style.fontFamily = "impact";
    h1.innerHTML = "<a href='#'>Programming Foundations Course Assignment</a>";
    ul.style.listStyle = "none";
}

button.onclick = endre;

// Oppgave 7

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];

const button2 = document.querySelector("button.price");
const total = document.querySelector("div#total")

function toy() {
    for (let b = 0; b < toys.length; b++) {
        return total.innerHTML = Number(toys[0].price) + Number(toys[1].price) + Number(toys[2].price) + Number(toys[3].price);
    }
}
button2.onclick = toy;