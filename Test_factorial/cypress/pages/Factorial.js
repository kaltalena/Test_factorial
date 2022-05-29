export class Factorial{

    navigate(){
        cy.visit("http://qainterview.pythonanywhere.com");
    }

    inputFactorial(factorial_value){
        cy.get("#number").clear().type(factorial_value);
        cy.get("#getFactorial").click(); 
    }

    validateFactorialOfZeroEqalsOne(expectedText){
        cy.get("#resultDiv").should("have.text", expectedText);
        return this;
    }

    validateFactorialOfOneEqalsOne(expectedText){
        cy.get("#resultDiv").should("have.text", expectedText);
        return this;
    }

    validateFactorialOfFourEqualsTwentyFour(expectedText){
        cy.get("#resultDiv").should("have.text", expectedText);
        return this;
    }

    validateWrongValue(expectedText){
        cy.get("#resultDiv").should("have.text", expectedText);
        return this;
    }


}