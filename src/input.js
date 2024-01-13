var form = document.querySelector("#new-question-form");
var Question = /** @class */ (function () {
    function Question(titleId, inputId, isCorrectId, hintId, attempts, answer, initialTitle, initialIsCorrect, initialHint) {
        this.title = document.querySelector("#".concat(titleId)) || document.createElement('h2');
        this.input = document.querySelector("#".concat(inputId)) || document.createElement('input');
        this.isCorrect = document.querySelector("#".concat(isCorrectId)) || document.createElement('span');
        this.hint = document.querySelector("#".concat(hintId)) || document.createElement('span');
        this.attempts = attempts;
        this.answer = answer;
        // Set initial values
        this.title.textContent = initialTitle;
        this.isCorrect.textContent = initialIsCorrect;
        this.hint.textContent = initialHint;
    }
    return Question;
}());
var questions = [new Question("icecream-question-title", "icecream-input", "icecream-is-correct", "icecream-hint", 1, "Mint Chocolate Chip", "What is my favorite ice cream?", "", "Hint: It's a popular flavor"),
    new Question("mission-question-title", "mission_input", "mission-is-correct", "mission-hint", 1, "Utah Provo Mission", "where did I serve my mission?", "", "Hint: it is in Utah"),
    new Question("scripture-question-title", "scripture_input", "scripture-is-correct", "scripture-hint", 1, "proverbs 3:11-12", "what is my favorite scripture?", "", "Hint: it is in proverbs")
];
document.addEventListener("DOMContentLoaded", function () {
    console.log("it loaded");
    // Assuming you have an empty 'ul' element with the id 'questions-list'
    var ulElement = document.querySelector("#questions-list");
    // Function to create a 'li' element for a question
    function createListItem(question) {
        var liElement = document.createElement("li");
        // Create a border with rounded edges for the input element
        question.input.style.border = "1px solid #ccc";
        question.input.style.borderRadius = "5px"; // Adjust the radius value as needed
        // Add padding to the title
        question.title.style.padding = "10px";
        // Set styles for isCorrect element
        question.isCorrect.style.display = "block"; // Display on its own line
        question.isCorrect.style.marginTop = "5px"; // Add some spacing
        // Set styles for hint element
        question.hint.style.visibility = "hidden";
        question.hint.style.color = "rgba(0, 0, 255, 0.5)"; // Faded blue color
        question.hint.style.fontSize = "0.8em"; // Adjust the font size as needed
        liElement.appendChild(question.title);
        liElement.appendChild(question.input);
        liElement.appendChild(question.isCorrect);
        liElement.appendChild(question.hint);
        ulElement === null || ulElement === void 0 ? void 0 : ulElement.appendChild(liElement);
        return liElement;
    }
    // Populate the 'ul' with 'li' elements for each question
    questions.forEach(function (question) {
        createListItem(question);
    });
});
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    questions.forEach(function (question) {
        if (question.input.value == "" || question.input.value == null)
            return;
        // Compare the input value with the answer
        if (question.answer.toLowerCase() === question.input.value.toLowerCase()) {
            question.isCorrect.innerText = "Correct! (Attempts: ".concat(question.attempts, ")");
            question.isCorrect.classList.remove("text-red-500"); // Remove the red text color class
            question.isCorrect.classList.add("text-green-500"); // Add the green text color class
            // Once they get it right, make the hint invisible
            question.hint.style.visibility = "hidden";
        }
        else {
            console.log(question.attempts);
            question.isCorrect.innerText = "Incorrect! (Attempts: ".concat(question.attempts, ")");
            question.attempts += 1;
            question.isCorrect.classList.remove("text-green-500"); // Remove the green text color class
            question.isCorrect.classList.add("text-red-500"); // Add the red text color class
            if (question.attempts > 3) {
                question.hint.style.visibility = "visible";
            }
        }
    });
});
