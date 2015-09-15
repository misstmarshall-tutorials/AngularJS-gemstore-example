(function(){
//a module line that declares the "app"lication by calling the module function in the angular js library and naming it "store"
//include an empty array since there are no dependencies
var app = angular.module("store", []);

app.controller("StoreController", function(){
	this.product = gem;
});

var gem = {
	name: "Dodecahedron",
	price:2.95,
	description: "..."
}
})();