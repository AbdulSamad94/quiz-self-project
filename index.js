#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
// starting with space and some introduction
console.log(" ");
console.log(chalk.yellow.bold("----------------Welcome to the Quiz by Abdul Samad----------------"));
console.log(" ");
//confirming from user if he/she wants to play
let welcome = await inquirer.prompt([{
        name: "continue",
        type: "list",
        message: "Do You want to start the quiz?",
        choices: ["Yes", "No"]
    }]);
//making easier for us
welcome = welcome.continue;
// 1st "if"------ if he select yes the program will continue
if (welcome == "Yes") {
    //adding gaps
    console.log(" ");
    console.log(chalk.red.bold("There will be 5 questions!! and you have guess every question right"));
    console.log(" ");
    //making the question of the prompt to show some colors
    let message1 = chalk.yellowBright.bold("Q1)    When typescript was introduced?");
    let message3 = chalk.yellowBright.bold("Q2)    Which of the following is the post-increment operator:-");
    let message4 = chalk.yellowBright.bold("Q3)    Who developed Typescript?");
    let message5 = chalk.yellowBright.bold("Q4)    How many components typescript have?");
    let message6 = chalk.yellowBright.bold("Q5)    Which of the following is the assignment operator?");
    let message2 = chalk.red.bold("Wrong Answer!! Do you want to try again");
    //making if the person want to repaeat the program
    let condition = true;
    while (condition) {
        //2nd main prompt
        let question1 = await inquirer.prompt([{
                name: "q1",
                type: "list",
                message: message1,
                choices: ["a)   July 2012", "b)   October 2012", "c)   March 2012", "d)   December 2012"]
            }]);
        //making easier for us to write code
        question1 = question1.q1;
        //2nd "if"-------- the program has started
        if (question1 == "b)   October 2012") {
            console.log(" ");
            console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
            console.log(" ");
            //3rd main prompt
            let question2 = await inquirer.prompt([{
                    name: "q2",
                    type: "list",
                    message: message3,
                    choices: ["a)   ++a", "b)   a++", "c)   a--", "d)   ++a"]
                }]);
            question2 = question2.q2;
            if (question2 == "b)   a++") {
                console.log(" ");
                console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
                condition = false;
                console.log(" ");
                let question3 = await inquirer.prompt([{
                        name: "q3",
                        type: "list",
                        message: message4,
                        choices: ["a)   IBM", "b)   Apple", "c)   Microsoft", "d)   Samsung"]
                    }]);
                question3 = question3.q3;
                if (question3 == "c)   Microsoft") {
                    console.log(" ");
                    console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
                    condition = false;
                    console.log(" ");
                    let question4 = await inquirer.prompt([{
                            name: "q4",
                            type: "list",
                            message: message5,
                            choices: ["a)   1", "b)   2", "c)   3", "d)   4"]
                        }]);
                    question4 = question4.q4;
                    if (question4 == "c)   3") {
                        console.log(" ");
                        console.log(chalk.blueBright.underline("Congratulations!! You guesssed the correct answer"));
                        condition = false;
                        console.log(" ");
                        let question5 = await inquirer.prompt([{
                                name: "q5",
                                type: "list",
                                message: message6,
                                choices: ["a)   ==", "b)   ===", "c)   !=", "d)   ="]
                            }]);
                        question5 = question5.q5;
                        if (question5 == "d)   =") {
                            console.log(" ");
                            console.log(chalk.greenBright.underline.bold("Congratulations!! You guesssed the all answer correctly"));
                            condition = false;
                            console.log(" ");
                        }
                        else {
                            console.log(" ");
                            var tryagain = await inquirer.prompt([{
                                    name: "again",
                                    type: "list",
                                    message: message2,
                                    choices: ["Yes", "No"]
                                }]);
                            tryagain = tryagain.again;
                            if (tryagain == "Yes") {
                                condition = true;
                            }
                            else {
                                condition = false;
                            }
                        }
                    }
                    else {
                        console.log(" ");
                        var tryagain = await inquirer.prompt([{
                                name: "again",
                                type: "list",
                                message: message2,
                                choices: ["Yes", "No"]
                            }]);
                        tryagain = tryagain.again;
                        if (tryagain == "Yes") {
                            condition = true;
                        }
                        else {
                            condition = false;
                        }
                    }
                }
                else {
                    console.log(" ");
                    var tryagain = await inquirer.prompt([{
                            name: "again",
                            type: "list",
                            message: message2,
                            choices: ["Yes", "No"]
                        }]);
                    tryagain = tryagain.again;
                    if (tryagain == "Yes") {
                        condition = true;
                    }
                    else {
                        condition = false;
                    }
                }
            }
            else {
                console.log(" ");
                var tryagain = await inquirer.prompt([{
                        name: "again",
                        type: "list",
                        message: message2,
                        choices: ["Yes", "No"]
                    }]);
                tryagain = tryagain.again;
                if (tryagain == "Yes") {
                    condition = true;
                }
                else {
                    condition = false;
                }
            }
        }
        //added else if the person want to continue using the program
        else {
            console.log(" ");
            //used var because it will be use multiple times
            var tryagain = await inquirer.prompt([{
                    name: "again",
                    type: "list",
                    message: message2,
                    choices: ["Yes", "No"]
                }]);
            tryagain = tryagain.again;
            if (tryagain == "Yes") {
                condition = true;
            }
            else {
                condition = false;
            }
        }
    }
}
else {
    console.log(chalk.red.bold("Not a problem!!"));
}
