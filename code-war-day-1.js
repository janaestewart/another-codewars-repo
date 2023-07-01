// 8kyu What is Between?


// PREP
    // Problem
        /* Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

        For example:

        a = 1
        b = 4
        --> [1, 2, 3, 4] */

    // Result
        // an array with all the numbers between a and b
    

    // Example - see above

    // Psuedo code
        // we need to have an empty array. then we need to iterate over the numbers where the first number is a and the last number is equal to b; and we need to keep increasing that iterating number. as we iterate over the number we need to push the number into our empty array every time. 



        function between(a, b) {
            // your code here
            let arr = []
            for(let i = a; i<=b; i++){
              
              arr.push(i)
              console.log(arr)
            }
            return arr
          }


          describe("Basic tests", () => {
            it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
            it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
          });