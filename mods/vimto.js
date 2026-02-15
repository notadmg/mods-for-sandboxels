//vimto.js mod for sandboxels by nota
//adds vimto from arabian stores
elements.vimto = {
	color: "#2b1910",
	behavior: [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",],
	category: "food",
	state: "liquid",
	density: 997,
	viscosity: 0,
};
elements.vimto.flippableX = true;
elements.vimto_syrup = {
	color: "#2e020a",
	behavior: behaviors.LIQUID,
	category: "food",
	state: "liquid",
	density: 2991,
	viscosity: 5,
};
elements.blackcurrant = {
	color: "#2b1910",
	behavior: behaviors.POWDER,
	category: "food",
	state: "solid",
	density: 1154,
	breakInto: "smashed_blackcurrant"
};
elements.raspberry = {
	color: "#e30b5d",
	behavior: behaviors.POWDER,
	category: "food",
	state: "solid",
	density: 1054,
	breakInto: "smashed_raspberry"
};
elements.smashed_blackcurrant = {
	color: "#2b1910",
	behavior: [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",],
	category: "food",
	state: "liquid",
	density: 1154,
};
elements.smashed_blackcurrant.flippableX = true;
elements.smashed_raspberry = {
	color: "#e30b5d",
	behavior: [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",],
    reactions: {
    "smashed_blackcurrant": { elem1:null, elem2:"blackcurrant_raspberry_juice" }
	},
	category: "food",
	state: "liquid",
	density: 1054,
};
elements.smashed_raspberry.flippableX = true;
elements.sodium_benzoate = {
	color: "#ffffff",
	behavior: behaviors.POWDER,
	category: "powders",
	state: "solid",
	density: 1500,
};
elements.blackcurrant_raspberry_juice = {
	color: "#1e0321",
	behavior: [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",],
	category: "food",
	reactions: {
	"grape_juice": { elem1:null, elem2:"blackcurrant_raspberry_grape_juice" }
	},
	state: "liquid",
	density: 2208,
};
elements.blackcurrant_raspberry_juice.flippableX = true;
elements.blackcurrant_raspberry_grape_juice = {
	color: "#3d042f",
	behavior: [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",],
	category: "food",
	reactions: {
	"sodium_benzoate": { elem1:null, elem2:"protovimto_syrup" }
	},
	state: "liquid",
	density: 2208,
};
elements.blackcurrant_raspberry_grape_juice.flippableX = true;
elements.protovimto_syrup = {
	color: "#3d0422",
	behavior: [
    "XX|XX|XX",
    "XX|XX|M2 AND BO",
    "XX|M1|M2",],
	category: "food",
	reactions: {
	"sugar": { elem1:null, elem2:"vimto_syrup" }
	},
	state: "liquid",
	density: 2208,
};
elements.protovimto_syrup.flippableX = true;
console.log('vimto.js successfully loaded');
