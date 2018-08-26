// let vals = [1, 2, 3, 4, 5];
// console.log('vals');

// function doubler(x) {
//     return x * 2;
// }
// //It makes copy off the give arrary
// vals.map(doubler);
// console.log(vals);

// let doubbled = vals.map(doubler );

// //Now using arrow function
// let vals = [4,5,6,7,8];
// console.log(vals);
// vals = vals.map(x => x * 2);
// console.log(vals);

//function to fill an array with randon number

// let vals = new Array(100);
// vals = vals.fill(0).map(Math.random);
// console.log(vals);

// let arr = [1, 2, 3, 4, 5];
// let vals = arr.reduce((a, b) => b > a ? b : a); //For max value in array
// console.log(vals);

// let sum = arr.reduce((a, b) => a + b); //For sum  of value in array
// console.log(sum);

// // normal code for even no
// let arr = [5, 4, 9, 2, 1];

// function evenno(num) {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// //using arrow and flite function
// let arr = [5, 4, 9, 2, 1];
// arr = arr.filter(num => num % 2 == 0);
// console.log(vals);

// let arr = "its nice to meet u";
// let word = arr.split(/\w+/).filter(word => word.length >= 3);
// console.log(word);

// //sort function
// int arr = [5, 6, 3, 2, 8, 7, 0];
// console.log(arr);
// arr.sort();
// console.log(arr);

// //2nd method
// let arr = "its nice to meet u";
// let word = arr.split(/\w+/).filter(word => word.length >= 3);
// word.sort((a, b) => b.length - a.length);
// console.log(word);

// //Some example of sort() function

// var stringArray = ['Blue', 'Humpback', 'Beluga'];
// var numericStringArray = ['80', '9', '700'];
// var numberArray = [40, 1, 5, 200];
// var mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

// function compareNumbers(a, b) {
//     return a - b;
// }

// console.log('stringArray:', stringArray.join());
// console.log('Sorted:', stringArray.sort());

// console.log('numberArray:', numberArray.join());
// console.log('Sorted without a compare function:', numberArray.sort());
// console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers));

// console.log('numericStringArray:', numericStringArray.join());
// console.log('Sorted without a compare function:', numericStringArray.sort());
// console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers));

// console.log('mixedNumericArray:', mixedNumericArray.join());
// console.log('Sorted without a compare function:', mixedNumericArray.sort());
// console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers));

// //PROMISES
// let wordnikAPI = "LINK HERE"

// function setup() {
//     noCanvas();

//     let promices = fetch('wordnikAPI').then(gotdata).catch(gotErr) //we can also remove the let promice variable
//     // promices.then(gotData);
//     // promices.catch(gotErr);

//     functiion gotdata(data) {
//         console.log(Data);
//     }

//     function gotErr(err) {
//         console.log(err);
//     }

//     //Now using arrow link

//     fetch('wordnikAPI')
//         .then(data => console.log(data));
//     .catch(err => console.log(err));
// }

//New promices

function setup() {
    noCanvas();
    delayES8(1000)
        .then(() => createP("HELLO"))
        .catch(() => console.error(err)); //console.log is also can be used

    delay("Promices")
        .then(() => createP("HELLO"))
        .catch(() => console.error(err));
}

async function delayES8(time) {
    //this function returns a promices
    await Delay(time);
    return;
}

function delay(time) {
    return new Promices((resolve, reject) => {
        if ((isNaN, time)) {
            reject(new Error("delay require a new number"));
        } else {
            setTimeout(resolve, time);
        }
    });
}

function setup() {
    noCanvas();
//     let promisces = [wordGifs(3),wordGifs(4),wordGif(5)];
// promice.all(promices)
// .then((results) => {
// for(let i =0 ; i <= results.length;i++){
// createP(results[i].Json);
// createImg(results[i].img);
// })
// .catch((err) => console.log(err))
//}

    wordgif().then(results => {
        createP(results.Jason);
        createImg(results.img);
    }).
    catch(err => console.error(err));

}
asyn
function wordgif() {
    let response1 = await fetch(WordnikAPI);
    let Json1 = await response1.Json();
    let response2 = await fetch(GiphyAPI + Json1.word);
    let Json2 = await response2.Json();
    let img_url = Json2.data[0].images['fixed_height_small'].url;
    return {
        word: json1.word,
        img: img_url
    }
}

//'&minlength=' + num + '&maxLenght=' +num

