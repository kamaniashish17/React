const { sum } = require("../sum")

test("Sum should calculate the sume of two numbers", ()=>{
    const result = sum(3,4)

    //Assertion Statement
    expect(result).toBe(7)
})

