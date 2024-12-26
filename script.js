const questionAnswers = document.getElementsByClassName('question-answer');
const buttons = document.querySelectorAll('.question-question');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        buttons.forEach((otherButton, otherIndex) => {
            if (otherIndex !== index) {
                otherButton.classList.remove('expanded');
                questionAnswers[otherIndex].style.display = 'none';
            }
        });
        button.classList.toggle('expanded');
        
        if (button.classList.contains('expanded')) {
            questionAnswers[index].style.display = 'block';
        } else {
            questionAnswers[index].style.display = 'none';
        }
    });
});