/*var name = "Jack";
var age = 23;
var shootingScore = 45.6;

var message = "Hi, my name is " + name + " and I am " + age + " years old!";

var firstName = "John";
var lastName = "JacobJingleHeimerSmith";
var dateOfBirth = "10-09-82";
var age = 23;
var profileImgUrl = 'http://coolpicks.com/johnjacob.jpg';

var loginWelcomeMessage = "Welcome, " + firstName + ". Happy " + age + "rd birthday!" ;
*/
//var num = 10 + 15;
/*var myaccountbalance = 500;
var nikeshoes = 501;
var addidasshoes= 400;
var coupon = 300
if(nikeshoes <= myaccountbalance){
    myaccountbalance-=nikeshoes; 
    console.log("i got some dope shoes");
    console.log(myaccountbalance);
}
else if(nikeshoes-coupon<=myaccountbalance)
{
    myaccountbalance-=nikeshoes-coupon;
    console.log("i got some dope shoes bra with coupon");
    console.log(myaccountbalance);
}
else{
    console.log("i got addidas shoes");
}
*/
/*var age = 23;
var yourage = "23"
if(age == yourage)
{
    console.log("our age is same");
}
*/
/*var val1 = 23;
var val2 = "23";
if(val1 === val2)
{
    console.log("this is the same");
}else 
{
    console.log("this are not the same.. ");
}
*/
/*var students = ["Saurabh","Shubham","Ganesh"];
var naughtylist = [];
naughtylist.push(students[1]);
var index = naughtylist.indexOf("Shubham");
var index2 = students.indexOf("Ganesh");
if(index > -1){
    naughtylist.splice(index,1);
}

console.log(naughtylist);
*/
// var students = ["Saurabh","Shubham","Ganesh","Gaurav","Rohit"];
// for(var index = 0 ; index < students.length ; index++){
//     console.log(students[indexs]);
// }
/*
function area(length , width){
    return length * width;
}
var rectangleareas = [];
rectangleareas.push(area(10 , 15));
rectangleareas.push(area(15 , 20));
rectangleareas.push(area(16 , 16));
rectangleareas.push(area(20 , 25));
console.log(rectangleareas);

var bankbalance = 500;
function maketransaction(priceOfSale){
    if(priceOfSale <= bankbalance){
        bankbalance-=priceOfSale;
        console.log("Purchase Successful");
    }else{
        console.log("Insufficient Balance");
    }
}
console.log(bankbalance);
maketransaction(80.51);
console.log(bankbalance);
maketransaction(12.23);
console.log(bankbalance);
maketransaction(30);
console.log(bankbalance);
maketransaction(430);

var transaction = function(priceOfSale){
    if(priceOfSale <= bankbalance){
        bankbalance-=priceOfSale;
        console.log("Purchase Successful");
    }else{
        console.log("Insufficient Balance");
    }
}

var printCoustomerName = function(firstName , lastName){
    console.log("FirstName " + firstName + " Lastname " + lastName);
}

var applyForCreditcard = function(CreditCardScore , Soul){

}

var bankDetails = [];
bankDetails.push(transaction);
bankDetails.push(printCoustomerName);
bankDetails.push(applyForCreditcard);
*/
//OBJECTS
// var student0 = new Object();
// student0.firstName = "Saurabh";
// student0.lastName = "Tiwari";
// student0.age = 23;

// var student1 = {};
// student1.firstName = "Shubham";
// student1.lastName = "Koli";
// student1.age = 23;

// var student2 = {};
// student2.firstName = "Ganesh";
// student2.lastName = "Boyene";
// student2.age = 21;

//For accessing single object
/*
var student3 = {
    firstName: "Rohit",
    lastName: "Kumbhare",
    age:22,
    greeting: function() {
        return "Hi I'm " + this.firstName + " " + this.lastName + " I'm " + this.age + " years old";
    }
};

console.log(student3.greeting());
*/
//End

// var students = [];
// students.push(student0);
// students.push(student1);
// students.push(student2);
// console.log(students);

//FOR REUSABILITY
// var college = []; 
// function studentR(first , last , age) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.greeting = function() {
//         return "Hi I'm " + this.firstName + " " + this.lastName + " I'm " + this.age + " years old";
//     }
// };

// college.push(new studentR("Gaurav" , "Rai" , 23));
// college.push(new studentR("Akshay" , "Tare" , 22));
// college.push(new studentR("Sandesh" , "Chatarmal" , 21));
// console.log(college);

//for in
// var studentR = college[1];
// for( var key in studentR){
// console.log(studentR[key]);
// }

// for(var index = 0 ; index < college.length ; index++) {
//     var studentR = college[index];
//     console.log(studentR.greeting());
// }


// var s1 = new studentR("Kanhiyalal" , "Yadav" , 22);
// console.log(s1);
// console.log(s1.greeting());

//BLIND FUNCTION
//