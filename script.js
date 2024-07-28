/*
1. Using the resources provided, you will implement a small JavaScript program.

2. Prompt the user for input. 
    >prompt their name
        >store variable in (memberName)
    >prompt want to play 3 or 6 holes of mini golf
    > prompt either 3 or 6 times depending on their input for second prompt asking for "each hole of golf" asking for the number of putts for that spefcific hole.

Keep track of their cumulative score (total number of putts) and at the end, compare that to the total course par (9 if they chose 3 holes, 18 if they chose 6 — par is 3 for every hole) to calculate the golfer’s total par for the round.

3. Repeat actions using a loop.

4. Perform calculations and make decisions based on the numbers.

5. Output results to the console.
 
    >After the last hole, one of three messages is logged to the console depending on if the user was over, under or on par for the round:
    >If over par, the message should read "Nice try, (name)... Your total par was: +(par)." [be sure to include the plus symbol here to denote over par].
    >If under par, the message should read "Great job, (name)! Your total par was: -(par)." [include the minus symbol]
    >If even with par, the message should read "Good game, (name). Your total par was: 0."
 */

 let playerName =prompt ("Welcome to mini golf! What is your name?");

 let gameNumber =prompt(`Hello ${playerName}! Would you like to play 3 or 6 holes?`)
 let total = 0;
 
 if (gameNumber == 3) {
for (let i = 1; i <= 3; i++) { 
    let golfPutt= Number(prompt ("How many putts for hole " + i + " (par:3)" ))
    total += golfPutt;
}
    
if (total > 9){
    let overNine= (total-9);
    console.log(`"Nice try, ${playerName}... Your total par was: + ${overNine}."`)
}

if (total == 9){
    console.log(`"Good game, ${playerName}. Your total par was: 0."`)
}

if (total < 9){
    let lessNine= (total-9);
    console.log(`"Great job, ${playerName}! Your total par was: ${lessNine}."`)
}
}

else if (gameNumber == 6) {
for (let i = 1; i <= 6; i++) {
    let golfPutt= Number(prompt ("How many putts for hole " + i + " (par:3)" ))
    console.log(total += golfPutt);
}

if (total > 18){
    let overEight=(total-18);
        console.log(`"Nice try, ${playerName}... Your total par was: + ${overEight}."`)
}
if (total == 18){
    console.log(`"Good game, ${playerName}. Your total par was: 0."`)
}

if (total < 18){
    let lessEight= (total-18);
    console.log(`"Great job, ${playerName}! Your total par was: ${lessEight}."`)
}

}






