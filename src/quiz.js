class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
  }
  getQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  moveToNextQuestion() {
    this.currentQuestionIndex++;
  }
  shuffleQuestions () {
    for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
      }
  }
//   checkAnswer (answer){
//     if (answer === this.questions[this.currentQuestionIndex].answer) {
//       this.correctAnswers++;
//     }
//     this.moveToNextQuestion();
    checkAnswer(answer) {
        const currentQuestion = this.getQuestion();
        if (currentQuestion.answer === answer) {
          this.correctAnswers++;
        }
      }
}
   
hasEnded() {
    return (
      this.currentQuestionIndex >= this.questions.length ||
      this.timeRemaining <= 0
    );
  }