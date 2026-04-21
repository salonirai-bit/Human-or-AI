# 🤖 Human or AI? - Multiplayer Game

An interactive web-based game where players test their ability to distinguish between human-created and AI-generated content!

## 🎮 Game Features

- **15 Engaging Questions**: Mix of image comparisons, poems, quotes, and text samples
- **45-Second Timer**: Race against the clock for each question
- **Multiplayer Support**: Enter your name and compete with friends
- **Educational Explanations**: Learn why each answer is correct or incorrect
- **Score Tracking**: Track your performance and accuracy
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 How to Play

1. Enter your name on the welcome screen
2. Answer 15 questions by choosing whether content is human-made or AI-generated
3. You have 45 seconds per question
4. After each answer, read the explanation to learn more
5. View your final score and accuracy percentage
6. Challenge your friends to beat your score!

## 📋 Question Types

- **Image Comparisons**: Identify which of two images is human-made vs AI-generated
- **Poems & Quotes**: Determine if text was written by humans or AI
- **Real-world Examples**: Mix of famous quotes, artworks, and original content

## 🛠️ Technology Stack

- Pure HTML5, CSS3, and JavaScript
- No external dependencies required
- Uses Unsplash images for visual examples
- Responsive CSS Grid and Flexbox layouts

## 📦 Installation

1. Clone this repository:
```bash
git clone https://github.com/saloni-rai_sfemu/Human-or-AI.git
cd Human-or-AI
```

2. Open `index.html` in your web browser

That's it! No build process or server required.

## 🌐 Deployment

### GitHub Pages
This game is designed to be deployed on GitHub Pages:

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Your game will be live at: `https://[username].github.io/Human-or-AI/`

### Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **Any Web Server**: Upload files to any static hosting

## 🎯 Scoring System

- **10 points** per correct answer
- **Maximum score**: 150 points
- **Performance Ratings**:
  - 80%+ : Exceptional - Expert AI detector!
  - 60-79%: Great - Strong detection skills!
  - 40-59%: Good - Keep practicing!
  - Below 40%: Keep learning!

## 🎨 Customization

### Adding New Questions
Edit `game.js` and add questions to the `questions` array:

```javascript
{
    type: 'text', // or 'image'
    title: 'Your question title',
    content: 'Your content here', // for text questions
    options: ['Human', 'AI'],
    correctAnswer: 'Human', // or 'AI'
    explanation: 'Detailed explanation of the answer'
}
```

### Changing Timing
Modify the timer duration in `game.js`:
```javascript
this.timeLeft = 45; // Change to desired seconds
```

### Styling
Update `styles.css` to customize colors, fonts, and layout.

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

Feel free to:
- Add more questions
- Improve the design
- Fix bugs
- Enhance accessibility
- Add new features

## 📄 License

MIT License - Feel free to use this game for any purpose!

## 🙏 Acknowledgments

- Images sourced from Unsplash
- Inspired by the growing challenge of AI content detection
- Built for team building and educational purposes

## 📧 Contact

Created for team multiplayer gaming. Have fun and may the best AI detector win! 🏆
