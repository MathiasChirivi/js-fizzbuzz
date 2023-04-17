const contenitore = document.getElementById("container");

for (let i = 1; i < 101; i++) {

    //creamo un quadrato contenitore
    const square = document.createElement('div');
    square.className = 'square';
    
    //Divisibili per 3
    if ((i%3==0) && (i%5==0)) {
        console.log("FizzBuzz");
        square.innerHTML = 'FizzBuzz';
    } else if (i%3==0) {
        console.log("Fizz");
        square.innerHTML = 'Fizz';
    } else if (i%5==0) {
        console.log("Buzz");
        square.innerHTML = 'Buzz';
    } else {
        console.log(i);
        square.innerHTML = i;
    }
    container.append(square);
}



