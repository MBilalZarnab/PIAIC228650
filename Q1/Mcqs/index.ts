import runQuiz from "./quiz.js";
import chalk from "chalk";
import { questions } from "./questions.js";


async function main() {
    console.log(chalk.yellow("Welcome to the Pakistan Quiz!\n"));

    const { score, answers } = await runQuiz();

    console.log(chalk.yellow("\nQuiz Finished!"));
    console.log(chalk.green(`Your Score: ${score} out of ${questions.length}`));
    console.log(chalk.blueBright("Correct Answers:"));
console.log("Q# \t Correct Answer \t Your Answer");
console.log("================================================");
    answers.forEach((choiceIndex, idx) => {
        const question = questions[idx];
        const correctAnswerIndex = question.answerIndex;
        const userAnswer = choiceIndex === correctAnswerIndex ? chalk.greenBright("Correct") : chalk.redBright("Incorrect");
        console.log(`${idx + 1}: \t ${question.options[correctAnswerIndex].substring(3)} \t\t (${userAnswer})`);
    });
}

main();
