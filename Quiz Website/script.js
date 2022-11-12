const quizData = [
    {
        question: "What is Naveen's most favourite food",
        a: "Pizza",
        b: "Cheese",
        c: "Tacos",
        d: "Biryani",
        correct: "a",
    },
    {
        question: "In school, what subject is naveen the most weakest (science subject)",
        a: "Biology",
        b: "Physics",
        c: "Economics",
        d: "Chemistry",
        correct: "b",
    },
    {
        question: "At what time does Naveen wake up?",
        a: "12:00 PM",
        b: "5:00 AM",
        c: "8:37 PM",
        d: "4:00 AM",
        correct: "d",
    },
    {
        question: "Finnaly, Why does naveen hate sambar saatham",
        a: "Why not",
        b: "Sammbar saatham was invented by robert hooke in the year 1810",
        c: "Because he has eaten it alot",
        d: "Because its expensive to buy sambar saatham",
        correct: "c",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2 style="margin-top:50px; margin-left: 20px;">You answered ${score}/${quizData.length} questions correctly</h2>

           <button class="cssbuttons-io-button"  id="submit" style="margin-bottom: 30px; margin-left: 20px; margin-top:50px" onclick="location.reload()"> Restart Test
           <div class="icon">
             <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
           </div>
         </button>

         <button class="cssbuttons-io-button"  id="submit" style="margin-bottom: 30px; margin-left: 20px; margin-top:50px" onclick="window.location.href='index.html';"> Return to Home
         <div class="icon">
           <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
         </div>
       </button>
           `
       }
    }
})