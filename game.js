const questions = [
    {
        type: 'image',
        title: 'Which landscape is human-made?',
        images: [
            { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image A',
        explanation: `This stunning photo was taken by landscape photographer Sam Ferrara.

The image features a sea of clouds at sunset in Randa, Switzerland; the prominent peak shown is the Weisshorn.`
    },
    {
        type: 'text',
        title: 'Is this poem written by a human or AI?',
        content: 'In circuits deep and code so bright,\nWhere logic flows through endless night,\nI dream of worlds I cannot see,\nOf feelings that will never be.',
        options: ['Human', 'AI'],
        correctAnswer: 'AI',
        explanation: 'This was AI-generated. While it follows poetic structure, it has telltale signs: self-referential AI themes, perfect meter but predictable rhyme scheme, and lacks the unexpected imagery or emotional depth that human poets typically bring.'
    },
    {
        type: 'image',
        title: 'Which portrait is AI-generated?',
        images: [
            { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image B',
        explanation: `This photo was taken by photographer Joseph Gonzalez.

The image is a well-known portrait available on Unsplash, a popular platform for royalty-free photography. The subject in the photo has also been identified as Serene Clinton in various professional and business contexts.`
    },
    {
        type: 'text',
        title: 'Human or AI: Who wrote this?',
        content: '"The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle."',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        explanation: `Steve Jobs said that line during his famous Stanford University commencement speech 2005, delivered on June 12, 2005.

It appears in the second part of the speech (the "love and loss" story), where he talks about being fired from Apple and how it led him to rediscover what he loved doing.

That quote is part of a longer passage where he says:
"...the only way to do great work is to love what you do… If you haven't found it yet, keep looking, and don't settle…"`
    },
    {
        type: 'image',
        title: 'Which architectural photo is real?',
        images: [
            { url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image A',
        explanation: `This image was clicked by Ben O'Bro, captured in New York City.`
    },
    {
        type: 'text',
        title: 'Is this recipe introduction human-written?',
        content: 'This recipe has been passed down through four generations of my family. My grandmother would make this every Sunday, and the smell still brings me back to her kitchen, flour dusting the counters, her laugh echoing off the walls.',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        skipExplanation: true,
        explanation: 'This is human-written. The specific sensory details (flour dusting, laughter echoing), personal family context, and emotional connection show authentic human memory and experience. AI tends to be more generic with emotional descriptions.'
    },
    {
        type: 'text',
        title: 'Human or AI: Who wrote this passage?',
        content: 'I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived.',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        explanation: `Human-written.

Author: Henry David Thoreau (1817–1862), American essayist, philosopher, and naturalist.

Source: Walden; or, Life in the Woods (1854), from the chapter "Where I Lived, and What I Lived For." The book grew out of the two years, two months, and two days he spent in a cabin he built near Walden Pond in Concord, Massachusetts.`
    },
    {
        type: 'text',
        title: 'Human or AI poem?',
        content: 'I carry your heart with me(I carry it in\nmy heart)I am never without it(anywhere\nI go you go,my dear;and whatever is done\nby only me is your doing,my darling)',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        explanation: 'This is E.E. Cummings\' famous poem. The unconventional punctuation, parenthetical structure, and unique formatting are signature human artistic choices. AI typically follows more conventional grammar and structure unless specifically prompted otherwise.'
    },
    {
        type: 'image',
        title: 'Which nature scene is AI-created?',
        images: [
            { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image B',
        explanation: 'Image B shows AI generation patterns: trees with inconsistent branch structures, foliage that appears too uniform, and lighting that doesn\'t match the time of day suggested by shadows. Real forests have natural chaos and variation.'
    },
    {
        type: 'text',
        title: 'Final Question - Human or AI story opening?',
        content: 'The last human on Earth sat alone in a room. There was a knock at the door.',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        explanation: 'This is a famous two-sentence horror story by Fredric Brown (1948). Its brevity, perfect paradox, and chilling implication showcase human storytelling genius. While AI could write similar content, this specific story has documented human authorship and historical significance.'
    }
];

class Game {
    constructor() {
        this.currentQuestion = 0;
        this.score = 0;
        this.playerName = '';
        this.timeLeft = 45;
        this.timerInterval = null;

        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById('startBtn').addEventListener('click', () => this.startGame());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        document.getElementById('playAgainBtn').addEventListener('click', () => this.resetGame());

        document.getElementById('playerName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startGame();
        });
    }

    startGame() {
        const nameInput = document.getElementById('playerName').value.trim();
        if (!nameInput) {
            alert('Please enter your name!');
            return;
        }

        this.playerName = nameInput;
        document.getElementById('playerDisplay').textContent = `Player: ${this.playerName}`;

        this.showScreen('gameScreen');
        this.loadQuestion();
    }

    loadQuestion() {
        if (this.currentQuestion >= questions.length) {
            this.endGame();
            return;
        }

        const question = questions[this.currentQuestion];

        document.getElementById('questionNumber').textContent = `Question ${this.currentQuestion + 1}/${questions.length}`;
        document.getElementById('questionTitle').textContent =
            question.type === 'image'
                ? 'Which image out of these two was clicked by a human?'
                : question.title;
        document.getElementById('score').textContent = `Score: ${this.score}`;

        const contentDiv = document.getElementById('questionContent');
        const buttonsDiv = document.getElementById('answerButtons');

        contentDiv.innerHTML = '';
        buttonsDiv.innerHTML = '';

        if (question.type === 'image') {
            buttonsDiv.className = 'answer-buttons answer-buttons--image';

            question.images.forEach((img, index) => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'image-option';
                imgDiv.innerHTML = `
                    <img src="${img.url}" alt="${img.label}">
                    <div class="image-label">${img.label}</div>
                `;
                contentDiv.appendChild(imgDiv);

                const btn = document.createElement('button');
                btn.className = 'answer-btn';
                btn.textContent = img.label;
                btn.addEventListener('click', () => this.checkAnswer(img.label, question));
                buttonsDiv.appendChild(btn);
            });

            const noneBtn = document.createElement('button');
            noneBtn.className = 'answer-btn answer-btn--none';
            noneBtn.textContent = 'None';
            noneBtn.addEventListener('click', () => this.checkAnswer('None', question));
            buttonsDiv.appendChild(noneBtn);

            contentDiv.className = 'image-comparison';
        } else {
            contentDiv.className = 'text-content';
            contentDiv.textContent = question.content;
            buttonsDiv.className = 'answer-buttons two-col';

            question.options.forEach(option => {
                const btn = document.createElement('button');
                btn.className = 'answer-btn';
                btn.textContent = option;
                btn.addEventListener('click', () => this.checkAnswer(option, question));
                buttonsDiv.appendChild(btn);
            });
        }

        this.startTimer();
    }

    startTimer() {
        this.timeLeft = 45;
        document.getElementById('timer').textContent = this.timeLeft;

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            document.getElementById('timer').textContent = this.timeLeft;

            if (this.timeLeft <= 0) {
                clearInterval(this.timerInterval);
                this.checkAnswer(null, questions[this.currentQuestion]);
            }
        }, 1000);
    }

    checkAnswer(answer, question) {
        clearInterval(this.timerInterval);

        const buttons = document.querySelectorAll('.answer-btn');
        buttons.forEach(btn => btn.disabled = true);

        const isCorrect = answer === question.correctAnswer;

        if (isCorrect) {
            this.score += 10;
            buttons.forEach(btn => {
                if (btn.textContent === answer) {
                    btn.classList.add('correct');
                }
            });
        } else {
            buttons.forEach(btn => {
                if (btn.textContent === question.correctAnswer) {
                    btn.classList.add('correct');
                } else if (btn.textContent === answer) {
                    btn.classList.add('incorrect');
                }
            });
        }

        setTimeout(() => {
            if (question.skipExplanation) {
                this.nextQuestion();
            } else {
                this.showExplanation(isCorrect, question);
            }
        }, 1500);
    }

    showExplanation(isCorrect, question) {
        const iconEl = document.getElementById('resultIcon');
        iconEl.textContent = isCorrect ? '✓' : '×';
        iconEl.className = 'result-icon ' + (isCorrect ? 'is-correct' : 'is-incorrect');
        document.getElementById('resultText').textContent = isCorrect
            ? 'Correct! Well done!'
            : `Incorrect! The answer was: ${question.correctAnswer}`;
        document.getElementById('explanationText').textContent = question.explanation;

        const nextBtn = document.getElementById('nextBtn');
        nextBtn.textContent =
            this.currentQuestion === questions.length - 1 ? 'See results' : 'Next question';

        this.showScreen('explanationScreen');
    }

    nextQuestion() {
        this.currentQuestion++;
        if (this.currentQuestion < questions.length) {
            this.showScreen('gameScreen');
            this.loadQuestion();
        } else {
            this.endGame();
        }
    }

    endGame() {
        const maxScore = questions.length * 10;
        const accuracy = Math.round((this.score / maxScore) * 100);

        document.getElementById('finalScore').textContent = `${this.score} / ${maxScore}`;
        document.getElementById('accuracy').textContent = accuracy + '%';

        this.showScreen('finalScreen');
    }

    resetGame() {
        this.currentQuestion = 0;
        this.score = 0;
        this.timeLeft = 45;
        clearInterval(this.timerInterval);

        document.getElementById('playerName').value = '';
        this.showScreen('welcomeScreen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
}

const game = new Game();
