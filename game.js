const questions = [
    {
        type: 'image',
        title: 'Which landscape is human-made?',
        images: [
            { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image A',
        explanation: 'Image A is a real photograph taken in Norway. While both look realistic, AI-generated landscapes often have subtle inconsistencies in lighting, shadows, or natural formations. Human photographers capture authentic atmospheric conditions and genuine geographical features.'
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
        explanation: 'Image B was AI-generated. Common tells include: slightly asymmetric facial features, overly smooth skin texture, inconsistent lighting on hair versus face, and unnatural eye reflections. Real portraits show natural skin texture and consistent lighting.'
    },
    {
        type: 'text',
        title: 'Human or AI: Who wrote this?',
        content: '"The only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle."',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        explanation: 'This is a famous quote by Steve Jobs. Human quotes often have authentic context, personal experience, and cultural impact. While AI can mimic inspirational language, quotes with verified attribution and historical significance are definitively human.'
    },
    {
        type: 'image',
        title: 'Which architectural photo is real?',
        images: [
            { url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image A',
        explanation: 'Image A is real architecture. AI-generated buildings often have impossible geometry, inconsistent perspective, or physically improbable structures. Real buildings follow engineering principles and have consistent architectural styles throughout.'
    },
    {
        type: 'text',
        title: 'Is this recipe introduction human-written?',
        content: 'This recipe has been passed down through four generations of my family. My grandmother would make this every Sunday, and the smell still brings me back to her kitchen, flour dusting the counters, her laugh echoing off the walls.',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        explanation: 'This is human-written. The specific sensory details (flour dusting, laughter echoing), personal family context, and emotional connection show authentic human memory and experience. AI tends to be more generic with emotional descriptions.'
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
        title: 'Which food photo is AI-generated?',
        images: [
            { url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image A',
        explanation: 'Image A has subtle AI tells: overly perfect ingredient placement, unnaturally consistent cheese melting patterns, and lighting that seems slightly too uniform. Real food photography has natural imperfections and authentic texture variations.'
    },
    {
        type: 'text',
        title: 'Is this tech article excerpt human or AI?',
        content: 'The new framework promises to revolutionize development workflows by providing seamless integration capabilities and enhanced performance metrics. Developers can leverage its robust architecture to build scalable solutions efficiently.',
        options: ['Human', 'AI'],
        correctAnswer: 'AI',
        explanation: 'This is AI-generated. It uses buzzwords without substance: "revolutionize," "seamless," "leverage," "robust." Human tech writers typically include specific examples, version numbers, or concrete comparisons rather than generic marketing language.'
    },
    {
        type: 'text',
        title: 'Who wrote this childhood memory?',
        content: 'I remember my childhood summers fondly. We would play outside, enjoy ice cream, and spend time with family. Those were good times filled with happiness and joy.',
        options: ['Human', 'AI'],
        correctAnswer: 'AI',
        explanation: 'AI-generated. It\'s too generic and lacks specific details that make memories authentic: no particular games, ice cream flavors, family members\' names, or unique incidents. Human memories include sensory details and specific moments.'
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
        title: 'Human or AI: Who wrote this movie review?',
        content: 'This film delivers a compelling narrative with strong performances. The cinematography is excellent and the pacing keeps viewers engaged throughout. Overall, it\'s a well-crafted piece that succeeds in its genre.',
        options: ['Human', 'AI'],
        correctAnswer: 'AI',
        explanation: 'AI-written. It\'s generic praise without specific examples: which performances? what cinematography techniques? how does pacing work? Human reviewers cite specific scenes, actor choices, or compare to other films in the genre.'
    },
    {
        type: 'text',
        title: 'Is this a real historical quote?',
        content: '"In the midst of winter, I found there was, within me, an invincible summer." - Albert Camus',
        options: ['Human', 'AI'],
        correctAnswer: 'Human',
        explanation: 'This is a genuine quote from Albert Camus\' essay "Return to Tipasa." The philosophical depth, personal discovery, and poetic metaphor are characteristic of Camus\' existentialist writing style and verified in his published works.'
    },
    {
        type: 'image',
        title: 'Which animal photo is real?',
        images: [
            { url: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800', label: 'Image A' },
            { url: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800', label: 'Image B' }
        ],
        correctAnswer: 'Image A',
        explanation: 'Image A is a real fox photograph. AI animal images often have issues with: eye symmetry, fur texture consistency, anatomically incorrect proportions, or unnatural poses. Real wildlife photos capture authentic animal behavior and anatomy.'
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

        document.getElementById('questionNumber').textContent = `Question ${this.currentQuestion + 1}/15`;
        document.getElementById('questionTitle').textContent = question.title;
        document.getElementById('score').textContent = `Score: ${this.score}`;

        const contentDiv = document.getElementById('questionContent');
        const buttonsDiv = document.getElementById('answerButtons');

        contentDiv.innerHTML = '';
        buttonsDiv.innerHTML = '';

        if (question.type === 'image') {
            buttonsDiv.className = 'answer-buttons two-col';

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

        const timerBar = document.getElementById('timerBar');
        timerBar.style.width = '100%';

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            document.getElementById('timer').textContent = this.timeLeft;

            const percentage = (this.timeLeft / 45) * 100;
            timerBar.style.width = percentage + '%';

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

        setTimeout(() => this.showExplanation(isCorrect, question), 1500);
    }

    showExplanation(isCorrect, question) {
        document.getElementById('resultIcon').textContent = isCorrect ? '✅' : '❌';
        document.getElementById('resultText').textContent = isCorrect ?
            'Correct! Well done!' :
            `Incorrect! The answer was: ${question.correctAnswer}`;
        document.getElementById('explanationText').textContent = question.explanation;

        const nextBtn = document.getElementById('nextBtn');
        nextBtn.textContent = this.currentQuestion === questions.length - 1 ?
            'See Results' : 'Next Question';

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
        const accuracy = Math.round((this.score / 150) * 100);

        document.getElementById('finalPlayerName').textContent = `${this.playerName}'s Results`;
        document.getElementById('finalScore').textContent = this.score + ' / 150';
        document.getElementById('accuracy').textContent = accuracy + '%';

        let message = '';
        if (accuracy >= 80) {
            message = '🌟 Exceptional! You have a keen eye for distinguishing AI from human creativity!';
        } else if (accuracy >= 60) {
            message = '👍 Great job! You can spot most AI-generated content!';
        } else if (accuracy >= 40) {
            message = '💪 Good effort! Keep practicing to improve your AI detection skills!';
        } else {
            message = '🎯 Keep learning! AI detection is tricky, but you\'ll get better with practice!';
        }

        document.getElementById('performanceMessage').textContent = message;

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
