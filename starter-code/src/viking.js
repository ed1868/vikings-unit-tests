function sum(s1, s2) {
    if (typeof s1 === "string" || typeof s2 === "string")   throw new Error("Both params must be a number")
    return s1 + s2
}

function employee(name, age) {
    let salary = 40000

    if (age < 20)   salary = salary / 2

    return {
        n : name,
        a: age,
        s: salary
    }
}

class TogglerComponent {
    constructor (){
        this.state = {
            open: false
        }
    }

    toggle () {
        this.state = {
            open: !this.state.open
        }
    }

    getState () {
        return this.state
    }
}

function salaryCalculator(rawSalary) {
    return rawSalary * 1.21
}

function getDOMNode(selector) {
    return document.querySelector(selector)
}


// Soldier
function Soldier() {}

// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
