/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(ATitle, ADirector, ABudgetUSD) {
        this.title = ATitle;
        this.director = ADirector;
        this.budget = ABudgetUSD;
    }

    wasExpensive() {
        if (this.budget > 100000000) {
            return true;
        } else {
            return false;
        }
    }
};

let _Movie = new Movie('The Lord of the Rings: The Return of the King', 'Peter Jackson', 100000001);
console.log(`${_Movie.title} was directed by ${_Movie.director} and cost ${_Movie.budget}. Expensive = ${_Movie.wasExpensive()}`);

let _Movie2 = new Movie('Unknown movie', 'Joh Doe', 2500);
console.log(`${_Movie2.title} was directed by ${_Movie2.director} and cost ${_Movie2.budget}. Expensive = ${_Movie2.wasExpensive()}`);
