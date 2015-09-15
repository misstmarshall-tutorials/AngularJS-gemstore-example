(function(){
var app = angular.module("store", []);

app.controller("StoreController", function(){
	this.products = gems;
});

var gems = [
	{
		name: "Dodecahedron Gem",
		price:2.95,
		description: "Information about the Dodecahedron Gem goes here...",
		canPurchase: true
	},
	{
		name: "Pentagonal Gem",
		price:5.95,
		description: "Information about the Pentagonal Gem goes here...",
		canPurchase: true
	},
	{ name: 'Azurite Gem', 
	price: 2.95,
	description: "Information about the Azurite Gem goes here...",
	canPurchase: true,
	},
    { name: 'Bloodstone Gem', 
    price: 5.95,
    description: "Information about the Bloodstone Gem goes here...",
	canPurchase: true,
	},
    { name: 'Zircon', 
    price: 3.95,
    description: "Information about the Zircon Gem goes here...",
	canPurchase: true,
	}
];
})();