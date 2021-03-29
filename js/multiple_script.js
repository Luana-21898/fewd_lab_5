// Define a constructor function template for resorts
function Resort(name, bungalows, booked) {
    // Object properties
    this.name = name;
    this.bungalows = bungalows;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.bungalows - this.booked;
    };
}

// Define to instances of the resort and their arguments
var lunaResort = new Resort('Luna Resort', 55, 29);
var boraboraResort = new Resort('Bora Bora Resort', 36, 14);
var paradiseResort = new Resort('Paradise Resort', 35, 15);


// Declare a variable to hold the name of the resort and bungalow availability
var details1 = lunaResort.name + ' bungalows: ';
    // add content to an existing variable----
    details1 += lunaResort.checkAvailablity();
// Get the resort1 div
var elResort1 = document.getElementById('resort1');
// Add the variables created onto the empty div
elResort1.textContent = details1;

var details2 = boraboraResort.name + ' bungalows: ';
    details2 += boraboraResort.checkAvailablity();
var elResort2 = document.getElementById('resort2');
elResort2.textContent = details2;

var details3 = paradiseResort.name + ' bungalows: ';
    details3 += paradiseResort.checkAvailablity();
var elResort3 = document.getElementById('resort3');
elResort3.textContent = details3;
