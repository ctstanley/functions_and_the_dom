///////////////////Practice With Functions//
var swap = function (arr, indexOne, indexTwo) {
    wap = arr.splice(indexOne, 1, arr[indexTwo]);
    arr.splice(indexTwo, 1, wap[0]);
    return arr;
};

swap(["moe", "larry", "curly"], 0, 2);
// => ["curly", "larry", "moe"]

var getRand = function (low, high) {
	return randNum = Math.floor((Math.random() * (high - low)) + low)
    
};

getRand(5, 6)
// => 5 or 6
getRand(5, 10)
// => 6 or some other num between 5 and 10

var randArr = function (size) {
    arr = [];
    while (arr.length < size){
    arr.push(Math.floor((Math.random() * 100) + 1))
	};
	return arr;
}

randArr(3)
//=> [23, 11, 82];
randArr(2)
//=> [88, 42];

arr = ["55", "77", "6", "5"]

var getMax = function (arr) {
    return Math.max.apply(null, arr);
}

getMax([1,2,88, 34, 22])
// => 88

////////////////////Playing With The Dom///
////I assume yall want a log of what was done??//

///part 1///
document.querySelector("body").opacity;
opacity = document.querySelector("body");
opacity.style.opacity = ".5";

///part 2///
function kittenBomb() {

    var images = document.getElementsByTagName('img');

    for(var i =0; i < images.length; i++) {
        var whatNoKittens = images[i];
        whatNoKittens.src = 'http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg';
    }
}
kittenBomb();

element.style.backgroundImage = "url(http://www.maine-coon-cat-nation.com/image-files/girl-kitten-names.jpg)";

body = document.querySelector("body")
body.style.transform = "rotateZ(60deg)"
body.style.transform.click()
///Got this Error///
///VM241:2 Uncaught ReferenceError: rotate is not defined(anonymous function) @ VM241:2InjectedScript._evaluateOn @ VM146:883InjectedScript._evaluateAndWrap @ VM146:816InjectedScript.evaluate @ VM146:682


