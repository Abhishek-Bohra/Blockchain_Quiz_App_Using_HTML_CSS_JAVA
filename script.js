const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setnextQuestion();
});
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore = 0;
    document.getElementById('right-answers').innerText = quizScore;
}








 
function setnextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.questions;

    question.answer.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectButton = e.target;
    const correct = selectButton.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }

    if (selectButton.dataset.correct === "true") {
        quizScore++;
    }
    document.getElementById('right-answers').innerText = quizScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        questions: ' What is the purpose of a cryptographic hash function in blockchain? ',
        answer: [
            { text: ' Consensus algorithm ', correct: false },
            { text: ' Data encryption ', correct: false },
            { text: ' Digital signatures ', correct: true },
            { text: ' Smart contracts ', correct: false }
        ],
    },
    {
        questions: ' Which consensus algorithm is commonly used in public blockchain networks? ',
        answer: [
            { text: ' Proof of Stake', correct: false },
            { text: ' Delegated Proof of Stake (DPoS) ', correct: false },
            { text: ' Proof of Work ', correct: true },
            { text: ' Practical Byzantine Fault Tolerance (PBFT) ', correct: false }
        ],
    },
    {
        questions: ' What role does a "Merkle tree" play in the structure of a blockchain? ',
        answer: [
            { text: ' Node validation ', correct: false },
            { text: ' Transaction ordering ', correct: true },
            { text: ' Block timestamp ', correct: false },
            { text: ' Cryptographic hashing ', correct: false }
        ],
    },
    {
        questions: ' In a permissioned blockchain, who typically controls access to the network? ',
        answer: [
            { text: ' Miners ', correct: false },
            { text: ' Decentralized nodes ', correct: false },
            { text: ' Centralized authority ', correct: true },
            { text: ' Smart contract participants ', correct: false }
        ],
    },
    {
        questions: ' What is the primary purpose of a public key in blockchain cryptography? ',
        answer: [
            { text: ' Encrypting data ', correct: false },
            { text: ' Signing transactions ', correct: true },
            { text: ' Generating addresses ', correct: false },
            { text: ' Establishing consensus ', correct: false }
        ],
    },
    {
        questions: ' What is a "hard fork" in the context of blockchain technology? ',
        answer: [
            { text: ' Data encryption ', correct: false },
            { text: ' Consensus algorithm ', correct: false },
            { text: ' Blockchain upgrade ', correct: true },
            { text: '  Smart contract execution ', correct: false }
        ],
    },
    {
        questions: ' Which cryptographic key is used to verify the authenticity of digital signatures in blockchain transactions? ',
        answer: [
            { text: '  Public key ', correct: true },
            { text: '  Private key ', correct: false },
            { text: '  Hashing key ', correct: false },
            { text: '  Symmetric key ', correct: false }
        ],
    },
    {
        questions: ' What does the term "double-spending" refer to in the blockchain context? ',
        answer: [
            { text: ' Validating transactions ', correct: false },
            { text: '  Duplicating cryptocurrency coins ', correct: true },
            { text: '  Block confirmation time ', correct: false },
            { text: '  Merkle tree structure ', correct: false }
        ],
    },
    {
        questions: 'In the context of smart contracts, what is the role of an "oracle"? ',
        answer: [
            { text: 'Execute contract logic ', correct: false },
            { text: '  Verify cryptographic signatures   ', correct: false },
            { text: '  Provide external data to the contract ', correct: true },
            { text: '  Manage consensus ', correct: false }
        ],
    },
    {
        questions: 'Which blockchain platform is known for its support of "smart contracts" and decentralized applications (DApps)?"? ',
        answer: [
            { text: ' Ethereum ', correct: true },
            { text: '  Bitcoin   ', correct: false },
            { text: '  Ripple ', correct: false },
            { text: '   Litecoin ', correct: false }
        ],
    },
    
    
    
    
];
