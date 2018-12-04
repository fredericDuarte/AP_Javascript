
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var note;
var monfilm;
var test = "bb";
// choix  = news Film(...,...,..);
//let choix = (Film) => {
function choix(a, b, c)
{  
     note = document.querySelector('#notifications');
     monfilm = new Film(a, b, c);
     note.value = monfilm.name;
     console.log(monfilm);
     console.log(test);
}
        
function Film(name, category, year) {
    this.name = name;
    this.category = category;
    this.year = year;
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
}


