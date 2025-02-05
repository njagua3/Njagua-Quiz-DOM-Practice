/* 
STEP 1

1st create an array
It will store all the correct answers of the quiz
 
How are we going to store these?
we are going to store them as the actual values that each input
field has
*/
const correctAnswers = ["A", "A", "B", "A"];

// attach an event listener to the form

const form = document.querySelector(".quiz-form");

result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];
  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //console.log(score);
  //show result
  scrollTo(0, 0);
  result.querySelector("span").textContent = `${score}%`;
  result.classList.remove("d-none");
});

// STEP 2
// DISPLAYING THE SCORE

result = document.querySelector(".result");

// update the result with the score
