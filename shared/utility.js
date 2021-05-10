export function handleModifyANswerVots(answers, answerId, inrement) {
  answers = answers.map((answer) => {
    if (answer.answerId !== answerId) {
      return answer;
    } else {
      return { ...answer, upvotes: answer.upvotes + inrement };
    }
  });
  return answers;
}
