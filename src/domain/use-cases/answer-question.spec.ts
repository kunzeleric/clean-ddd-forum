import { test, expect } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";
import { AnswersRepository } from "../repositories/answers-repository";
import { Answer } from "../entities/answer";

const fakeAnswersRepository: AnswersRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  },
};

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);

  const answer = await answerQuestion.execute({
    instructorId: "1",
    questionId: "1",
    content: "Nova resposta",
  });

  expect(answer.content).toEqual("Nova resposta");
});
