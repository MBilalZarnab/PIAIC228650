import inquirer from "inquirer";
import chalk from "chalk";
import { questions } from "./questions.js";
import { Question } from "./types";

interface QuizResult {
    score: number;
    answers: number[];
}

async function runQuiz(): Promise<QuizResult> {
    let score = 0;
    const answers: number[] = [];

    for (const question of questions) {
        const optionsText = question.options.map((option, index) => {
            return `${chalk.cyanBright(String.fromCharCode(97 + index))}) ${option.substring(3)}`;
        });

        const answer: any = await inquirer.prompt([
            {
                type: "input",
                name: "response",
                message: chalk.blueBright(`${question.text}\n${optionsText.join("\n")}\n`),
                validate: (input: string) => {
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
