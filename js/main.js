const contenitore = document.getElementById("container");

for (let i = 1; i < 101; i++) {

    //creamo un quadrato contenitore
    const square = document.createElement('div');
    square.className = 'square';
    
    //Divisibili per 3 e per 5
    if ((i%3==0) && (i%5==0)) {
        square.style.backgroundColor = "#f0466f";
        console.log("FizzBuzz");
        square.innerHTML = 'FizzBuzz';
        //divisibili per 3
    } else if (i%3==0) {
        square.style.backgroundColor = "#0cd6a1";
        console.log("Fizz");
        square.innerHTML = 'Fizz';
        //divisibili per 5
    } else if (i%5==0) {
        square.style.backgroundColor = "#ffd166";
        console.log("Buzz");
        square.innerHTML = 'Buzz';
        //Senno stampa i numeri
    } else {
        square.style.backgroundColor = "#1389b2";
        console.log(i);
        square.innerHTML = i;
    }
    container.append(square);
}



