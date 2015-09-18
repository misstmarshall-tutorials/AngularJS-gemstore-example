(function(){
var app = angular.module("store", []);

app.controller("StoreController", function(){
	this.products = gems;
});

app.controller("PanelController", function(){
	this.tab = 1;

	this.selectTab = function(setTab){
		this.tab = setTab;
	}

	this.isSelected = function(checkTab){
		return this.tab === checkTab;
	}
});

var gems = [
	{
		name: "1 Garnet Gem",
		price:2.95,
		description: "Information about the Garnet Gem goes here...",
		images: [
			"img/1.png",
			"img/1.png",
			"img/1.png"
		],
		canPurchase: true,
		reviews:[
		{
			stars:5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars:1,
			body: "This product sucks",
			author: "tim@hater.com"
		}
		]
	},
	{
		name: "2 Amethyst Gem",
		price:5.95,
		description: "Information about the Amethyst Gem goes here...",
		images: [
			"img/2.png",
			"img/2.png",
			"img/2.png"
		],
		canPurchase: true,
		reviews:[
		{
			stars:5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars:1,
			body: "This product sucks",
			author: "tim@hater.com"
		}
		]
	},
	{ 
		name: "3 Aquamarine Gem", 
		price: 2.95,
		description: "Information about the Aquamarine Gem goes here...",
		images: [
			"img/3.png",
			"img/3.png",
			"img/3.png"
		],
		canPurchase: true,
		reviews:[
		{
			stars:5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars:1,
			body: "This product sucks",
			author: "tim@hater.com"
		}
		]
	},
   { 
    	name: "4 Diamond Gem", 
	    price: 5.95,
	    description: "Information about the Diamond Gem goes here...",
	    images: [
			"img/4.png",
			"img/4.png",
			"img/4.png"
		],
		canPurchase: true,
		reviews:[
		{
			stars:5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars:1,
			body: "This product sucks",
			author: "tim@hater.com"
		}
		]
	},
    { 
    	name: "5 Emerald Gem", 
	    price: 3.95,
	    description: "Information about the Emerald Gem goes here...",
	    images: [
			"img/5.png",
			"img/5.png",
			"img/5.png"
		],
		canPurchase: true,
		reviews:[
		{
			stars:5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars:1,
			body: "This product sucks",
			author: "tim@hater.com"
		}
		]
	},
	 { 
    	name: "6 Pearl Gem", 
	    price: 5.95,
	    description: "Information about the Pearl Gem goes here...",
	   images: [
			"img/6.png",
			"img/6.png",
			"img/6.png"
		],
		canPurchase: true,
		reviews:[
		{
			stars:5,
			body: "I love this product!",
			author: "joe@thomas.com"
		},
		{
			stars:1,
			body: "This product sucks",
			author: "tim@hater.com"
		}
		]
	}
];
})();