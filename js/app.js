(function(){
var app = angular.module("store", []);

app.controller("StoreController", function(){
	this.products = gems;
});

var gems = [
	{
		name: "1 Garnet Gem",
		price:2.95,
		description: "Information about the Garnet Gem goes here...",
		canPurchase: true
	},
	{
		name: "2 Amethyst Gem",
		price:5.95,
		description: "Information about the Amethyst Gem goes here...",
		canPurchase: true
	},
	{ 
		name: "3 Aquamarine Gem", 
		price: 2.95,
		description: "Information about the Aquamarine Gem goes here...",
		canPurchase: true,
	},
    { 
    	name: "4 Diamond Gem", 
	    price: 5.95,
	    description: "Information about the Diamond Gem goes here...",
		canPurchase: true,
	},
    { 
    	name: "5 Emerald Gem", 
	    price: 3.95,
	    description: "Information about the Emerald Gem goes here...",
		canPurchase: true,
	},
	 { 
    	name: "6 Pearl Gem", 
	    price: 5.95,
	    description: "Information about the Pearl Gem goes here...",
		canPurchase: true,
	}
];
})();