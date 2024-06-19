const quizData = [
    {
        question: "كم عمرك؟",
        a: "18---->25",
        b: "25---->35",
        c: "35---->50",
        d: "50 فما فوق",
        correct: "b"
    },
    {
        question: "ما هو نوع بشرتك؟",
        a: "دهنية",
        b: "جافة",
        c: "مختلطة",
        d: "حساسة",
        correct: "a"
    },
    {
        question: "كم مرة تعاني من البثور؟",
        a: "بشكل متكرر",
        b: "أحيانًا",
        c: "نادرًا",
        d: "أبدًا",
        correct: "c"
    },
    {
        question: "كم مرة تقوم بتنظيف وجهك؟",
        a: "مرة في اليوم",
        b: "مرتين في اليوم",
        c: "أكثر من مرتين في اليوم",
        d: "أبدًا",
        correct: "c"
    },
    {
        question: "كيف تشعر بشرتك بعد التنظيف؟",
        a: "مشدودة وجافة",
        b: "طبيعية",
        c: "دهنية ولامعة",
        d: "حساسة ومتهيجة",
        correct: "d"
    },
    {
        question: "ما رأيك في المرطب؟",
        a: "لا أحبه. لدي رد فعل تجاه أي لوشن جربته في الماضي.",
        b: "إنه منقذ! بدونه، تشعر بشرتي بأنها مشدودة وملتهبة.",
        c: "أستمتع باستخدام المرطب كجزء من روتيني اليومي.",
        d: "لا أستطيع تحمله. وجهي دهني بما فيه الكفاية!",
        correct: "d"
    },
    {
        question: "كيف هي مسامك؟",
        a: "تكاد تكون غير مرئية!",
        b: "يمكنك رؤيتها نوعًا ما، ولكن ليس حقًا.",
        c: "متضخمة في بعض مناطق وجهي.",
        d: "كبيرة. لا مشكلة في رؤيتها.",
        correct: "d"
    },
    {
        question: "ما مدى تعرض بشرتك للاحمرار؟",
        a: "تصبح حمراء عندما أعبث بها، لكنها عادة ما تكون جيدة.",
        b: "تصبح حمراء إذا شعرت بالحرج.",
        c: "عندما يكون لدي بثور، تضيء.",
        d: "لدي دائمًا لون أحمر.",
        correct: "d"
    },
    {
        question: "هل لديك خطوط دقيقة أو علامات تقدم في العمر حول شفتيك أو رقبتك؟",
        a: "نعم، كلاهما",
        b: "فقط حول شفتي.",
        c: "فقط حول رقبتي.",
        d: "لا.",
        correct: "d"
    },
    {
        question: "هل لديك خطوط دقيقة أو علامات تقدم في العمر تحت عينيك أو على جبهتك؟",
        a: "نعم، كلاهما",
        b: "فقط تحت عيني.",
        c: "فقط على جبهتي.",
        d: "لا.",
        correct: "d"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let answers = [];

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        answers.push(answer);
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const queryString = answers.map((answer, index) => `q${index}=${answer}`).join('&');
            window.location.href = `ResultA.html?${queryString}`;
        }
    }
});