import inquirer from "inquirer";
import chalk from "chalk";
import { questions } from "./questions.js";
async function runQuiz() {
    let score = 0;
    const answers = [];
    for (const question of questions) {
        const optionsText = question.options.map((option, index) => {
            return `${chalk.cyanBright(String.fromCharCode(97 + index))}) ${option.substring(3)}`;
        });
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "response",
                message: chalk.blueBright(`${question.text}\n${optionsText.join("\n")}\n`),
                validate: (input) => {
                    return ["a", "b", "c"].includes(input.toLowerCase()) || "Please enter a valid choice (a/b/c)";
                },
            },
        ]);
        const choiceIndex = ["a", "b", "c"].indexOf(answer.response.toLowerCase());
        if (choiceIndex === question.answerIndex) {
            score++;
        }
        answers.push(choiceIndex);
    }
    return { score, answers };
}
export default runQuiz;
