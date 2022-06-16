
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string){
    return string.split("").reverse().join("");
}

let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function(a, b) {
        return a * b;
    }
  };

  const analyzeArray = (arr) => {
    if(arr.length === 0) {
        return null
    }

    const arrAvg = arr.reduce((acc, cv) => acc + cv)/arr.length;

    const arrMin = arr.reduce((a, b) => {
        return (b < a) ? b: a;
    })

    const arrMax = arr.reduce(( a, b) => {
        return (b > a) ? b: a;
    })

    return {
        average: arrAvg,
        min: arrMin,
        max: arrMax,
        length: arr.length
    }

}

/* function caesar(str){
    let solved = "";
    for (let i=0; i<str.length; i++){
        let num = str[i].charCodeAt();
        if (num >= 65 && num <=77) {
            solved += String.fromCharCode(num + 1);
        } else if (num >= 78 && num <= 90){
            solved += String.fromCharCode(num - 1);
        } else {
            solved += str[i];
        }
    }
    return solved;
} */

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

const isUpperCase = (str) => {
    return str === str.toUpperCase();
}

const caesar = (str, shift) => {
    const code = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    }

    let aux = str.split('');
    let newArray = aux.map((a) => {
        if(a in code || a.toLowerCase() in code){
            let newValue = (isUpperCase(a)) ? (code[a.toLowerCase()] + shift)%26 : (code[a] + shift)%26;
            let key = getKeyByValue(code, newValue);
            return (isUpperCase(a)) ? key.toUpperCase(): key;
        }
        return a;
    })
    return newArray.join('');

}

//mod (%) means minus 26 to get remainder. Letters numerically represent 0-25

// pure function
function evaluateGuess(magicNumber, guess) {
    if (guess > magicNumber) {
      return 'YOUR GUESS IS TOO BIG';
    } else if (guess < magicNumber) {
      return 'YOUR GUESS IS TOO SMALL';
    } else if (guess == magicNumber) {
      return 'YOU DID IT!';
    }
  }
  
  /* function guessingGame() {
    const magicNumber = 22;
    const guess = prompt('guess a number between 1 and 100!');
    const message = evaluateGuess(magicNumber, guess);
    alert(message);
  } */

export {
    capitalize,
    reverse,
    calculator,
    analyzeArray,
    caesar,
    evaluateGuess
};
