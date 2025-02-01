document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');
    const backgroundMusic = new Audio('diewasmile.mp3');

    // Start button handler
    startBtn.addEventListener('click', () => {
        backgroundMusic.loop = true;
        backgroundMusic.play().catch((error) => {
            console.error("Audio playback failed:", error);
        });

        // Hide start screen and begin sequence
        startScreen.style.display = 'none';
        showTextSequence();
    });

    // Continue with existing text sequence logic
    const textSequenceDiv = document.getElementById('text-sequence');
    const question = document.getElementById('question');
    const gifContainer = document.getElementById('gif-container');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');

    const textArray = [
        "Roses are red...",
        "Violets are blue...",
        "There's something I need to ask you..."
    ];

    let currentIndex = 0;

    const showTextSequence = () => {
        if (currentIndex < textArray.length) {
            textSequenceDiv.textContent = textArray[currentIndex];
            textSequenceDiv.style.opacity = 1;
            setTimeout(() => {
                textSequenceDiv.style.opacity = 0;
                currentIndex++;
                setTimeout(showTextSequence, 1500);
            }, 3000);
        } else {
            textSequenceDiv.style.display = 'none';
            question.classList.remove('hidden');
            question.style.opacity = 1;
        }
    };

    yesBtn.addEventListener('click', () => {
        question.style.opacity = 0;
        setTimeout(() => {
            question.classList.add('hidden');
            gifContainer.classList.remove('hidden');
            gifContainer.style.opacity = 1;
        }, 1000);
    });

    const noTexts = [
        "Are you sure?",
        "Really sure?",
        "Come on, say yes!",
        "I’m waiting...",
        "Just press YES already!"
    ];
    let noClickCount = 0;

    noBtn.addEventListener('click', () => {
        if (noClickCount < noTexts.length) {
            noBtn.textContent = noTexts[noClickCount];
        } else {
            noBtn.textContent = "Okay, I give up!";
        }

        noClickCount++;

        const newSize = 1 + noClickCount * 0.2;
        yesBtn.style.transform = `scale(${newSize})`;
        question.style.transform = `scale(${newSize})`;
    });
});
