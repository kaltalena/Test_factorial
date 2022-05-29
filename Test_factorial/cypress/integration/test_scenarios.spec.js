import { Factorial } from "../pages/Factorial";
const factorial = new Factorial();
const ERROR_MESSAGE = "Please enter integer value between 0 and 170"


describe( "Factorial", ()=> {
    beforeEach("Navigate", ()=>{
        factorial.navigate();
    })

    it("Should return 1 for input 0", ()=>{
        factorial.inputFactorial(0);
        factorial.validateFactorialOfZeroEqalsOne("The factorial of 0 is: 1");
    })

    it("Should return 1 for input 1", ()=>{
        factorial.inputFactorial(1);
        factorial.validateFactorialOfOneEqalsOne("The factorial of 1 is: 1");
    })

    it("Should return 24 for input 4", ()=>{
        factorial.inputFactorial(4);
        factorial.validateFactorialOfFourEqualsTwentyFour("The factorial of 4 is: 24");
    })

    it("Should return result for upper boundary value 170", ()=>{
        factorial.inputFactorial(4);
        factorial.validateFactorialOfFourEqualsTwentyFour("The factorial of 170 is: 7.257415615307999e+306");
    })

    it("Should return Error message for negative value", ()=>{
        factorial.inputFactorial(-2);
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

    it("Should return Error message for text input", ()=>{
        factorial.inputFactorial("Some text");
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

    it("Should return Error message for exponential number", ()=>{
        factorial.inputFactorial(3e+123);
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

    it("Should return Error message for very big number", ()=>{
        factorial.inputFactorial(1000);
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

    it("Should return Error message for floating point number", ()=>{
        factorial.inputFactorial(3.14);
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

    it("Should return Error message for non ASCII character", ()=>{
        factorial.inputFactorial("ي");
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

    it("Should return Error message for inputing a script", ()=>{
        factorial.inputFactorial("<script>alert('Hello from very dangerous hacker')</script>");
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

    it("Should return Error message for empty input", ()=>{
        factorial.inputFactorial("");
        factorial.validateWrongValue(ERROR_MESSAGE);
    })

})