// Question 1

function greet(name = "John") {
    return `Hello ${name}!`;
}

// Question 2

function divCreator (className, innerValue) {
    return `<div class="${className}">${innerValue}</div>`
}

// Question 3

Convert the below API call to use a try-catch-finally statement.


async function getFact() {
    try {
        const response = await fetch("https://api.noroff.dev/api/v1/cat-facts");
        const results = await response.json();
        console.log(results[8].text);}
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("finally")
    }
}

getFact();
