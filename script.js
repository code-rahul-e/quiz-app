const quizData = [
  {
    question: '1. Who invented the Light Bulb??',
    a: 'Right Brothers',
    b: 'Thomas Alva Edison',
    c: 'Louis Pasteur',
    d: 'Nikola Tesla',
    correct: 'b'
  },
  {
    question: '2.Which planet in our solar system is known as the Red Planet?',
    a: 'Earth',
    b: 'Venus',
    c: 'Jupiter',
    d: 'Mars',
    correct: 'd'
  },
  {
    question: '3. Who invented the Telephone?',
    a: 'Alexander Graham Bell',
    b: 'Louis Pasteur',
    c: 'Alexander Fleming',
    d: 'Albert Einstein',
    correct: 'a'
  },
  {
    question: '4. Who invented the Printing Press?',
    a: 'Marie Curie',
    b: 'Sir Isaac Newton',
    c: 'Johannes Gutenberg',
    d: 'Louis Pasteur',
    correct: 'c'
  },
  {
    question: '5.How many days ina a week?',
    a: '7',
    b: '9',
    c: '5',
    d: '11',
    correct: 'a'
  },
  {
    question: '6.Which is the smallest bird in the world?',
    a: 'Peacock',
    b: 'Parrot',
    c: 'Humming Bird',
    d: 'Wood Pecker',
    correct: 'c'
  },
  {
    question: '7.Who is the CEO of the Google?',
    a: 'Ramanan',
    b: 'Sundhar Pichai',
    c: 'Gokulraj',
    d: 'Antony',
    correct: 'b'
  },
  {
    question: '8.Which one is the capital of Tamilnadu?',
    a: 'Villupuram',
    b: 'Namakkal',
    c: 'Bihar',
    d: 'Chennai',
    correct: 'd'
  },
  {
    question: '9.Which one is the capital of india?',
    a: 'Nepal',
    b: 'New Delhi',
    c: 'Bangalore',
    d: 'Chandigar',
    correct: 'b'
  },
  {
    question: '10.How many Days in a year?',
    a: '265',
    b: '900',
    c: '365',
    d: '338',
    correct: 'c'
  }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a-text')
const b_text = document.getElementById('b-text')
const c_text = document.getElementById('c-text')
const d_text = document.getElementById('d-text')
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

function getSelected() {
  let answer = undefined

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })

  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              
              <button onclick="location.reload()">Reload</button>
          `
    }
  }
})
