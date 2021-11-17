const questionDB = [
	{
		question: 'what is the full form of css ?',
		a: 'Cascading style Sheets',
		b: 'Cascading Style sheep',
		c: 'Cartoon style sheet',
		d: 'Cascading super sheets',
		ans: "answer1"
	},
	{
		question: 'what is the full form of HTML ?',
		a: 'Hello to my land',
		b: 'Hey text markup lanaguage',
		c: 'HyperText Makeup Language',
		d: 'HyperText Markup Language',
		ans: 'answer4'
	},
	{
		question: 'what is the full form of HTTP ?',
		a: 'Hypertext transfer Product',
		b: 'Heytext Tesst Protocol',
		c: 'Hey Transfer Protocol',
		d: 'HyperText Transfer Protocol',
		ans: 'answer4'
	},
	{
		question: 'what is the full form of JS ?',
		a: 'Javascript',
		b: 'JavaSuper',
		c: 'JustScript',
		d: 'JordenShoes',
		ans: 'answer1'
	}
]

let questionCount = 0
let score = 0
const questions = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')
const answer = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showscore')

const loadQuestions = () => {
	const questionList = questionDB[questionCount]
	questions.innerHTML = questionList.question
	option1.innerHTML = questionList.a
	option2.innerHTML = questionList.b
	option3.innerHTML = questionList.c
	option4.innerHTML = questionList.d
}

loadQuestions()

const getAnswer = () => {
	let ans
	answer.forEach((curElem) => {
		if (curElem.checked) {
			ans = curElem.id
		}
	})
	return ans
}

const deselectAll = () => {
	answer.forEach(curElem => curElem.checked = false)
}

submit.addEventListener('click', () => {
	const checkAnswer = getAnswer()
	if (checkAnswer === questionDB[questionCount].ans) {
		score++
	}
	questionCount++
	deselectAll()
	if (questionCount < questionDB.length) {
		loadQuestions()
	} else {
		showScore.innerHTML = `
			<h3>You scored ${score} / ${questionDB.length}.</h3>
			<button class="btn" onclick="location.reload()">Play Again</button>
		`
		showScore.classList.remove('score-area')
	}
})



