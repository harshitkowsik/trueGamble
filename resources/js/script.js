
// Function to change title in loop
const titles = [
    "trueGamble",
    "Real Gambling"
];

let index = 0;
function changeTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}
setInterval(changeTitle, 3000);

// Game Functionalities
document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('gameTable');
    const cells = table.getElementsByTagName('td');
    const betForm = document.getElementById('betForm');
    let userBalance = parseInt(document.getElementById('balance-box').innerText);
    let betButton = document.getElementById('betButton');
    let betInfo = document.getElementById('betInfo');
    let overAlert = document.getElementById('gameOverMessage');
    let betAmount = 0;
    let mines = 0;
    let randomNumbers = [];
    let currentAmount = 0;
    let gameActive = false;

    // Function to generate random numbers
    function generateRandomNumbers(count, min, max) {
        const numbers = new Set();
        while (numbers.size < count) {
            numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return Array.from(numbers);
    }

    // Function to handle game over
    function gameOver() {

        setTimeout(function () {
            for (let j = 0; j < cells.length; j++) {
                cells[j].classList.remove('match', 'mismatch');
            }
        }, 1000);

        setTimeout(function () {
            overAlert.style.display = 'flex';
        }, 500);


        // Disable clicks on all table cells
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.pointerEvents = 'none'; // Disable clicks on cells
        }

        // Add profit to balance
        userBalance += currentAmount;
        document.getElementById('balance-box').innerText = `${userBalance}`;

        // Reset profit display
        document.getElementById('profit-box').innerText = '0';

        // Hide the bet info and show the bet button again
        betInfo.style.display = 'none';
        betButton.style.display = 'block';

        gameActive = false;

    }

    // Handle form submission
    betForm.addEventListener('submit', function (event) {

        for (let i = 0; i < cells.length; i++) {
            cells[i].style.pointerEvents = 'auto'; // Enable clicks on cells
        }

        betInfo.style.display = 'block';
        betButton.style.display = 'none';
        overAlert.style.display = 'none';

        event.preventDefault(); // Prevent default form submission behavior

        betAmount = parseInt(document.getElementById('betAmount').value);
        mines = parseInt(document.getElementById('mines').value);

        // Check if bet amount is valid and does not exceed balance
        if (betAmount > userBalance) {
            alert("Insufficient balance. Please place a smaller bet.");
            return;
        }

        // Deduct bet amount from user's balance
        userBalance -= betAmount;
        document.getElementById('balance-box').innerText = `${userBalance}`;
        
        currentAmount = betAmount;
        randomNumbers = generateRandomNumbers(mines, 1, 25);

        // Reset table cells
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove('match', 'mismatch');
        }

        gameActive = true;

    });

    // Add a single event listener for all cells
    table.addEventListener('click', function (event) {
        if (!gameActive) return; // Ignore clicks if game is not active

        let target = event.target;
        if (target.tagName !== 'TD') return; // Ensure target is a TD element

        const cellNumber = parseInt(target.textContent);
        if (randomNumbers.includes(cellNumber)) {
            target.classList.add('mismatch'); // Turn red on mine click
            currentAmount = 0; // Reset amount if mine is clicked
            gameOver(); // Call gameOver function
        } else {
            target.classList.add('match'); // Turn green on safe click
            target.style.pointerEvents = 'none'; // Disable clicks on green cells
            let profitPerClick = betAmount * mines;
            currentAmount += profitPerClick; // Double amount if safe
            let profitElement = document.getElementById('profit-box');
            profitElement.innerText = `${currentAmount - betAmount}`;
        }
    });

    // Attach the gameOver function to the cashout button
    document.getElementById('cashout').onclick = gameOver;
});


// Get the toggle button and its icons
const toggleBtn = document.getElementById('toggle-btn');
const brightIcon = document.getElementById('bright');
const darkIcon = document.getElementById('dark');
const root = document.documentElement;

// Function to toggle between dark and bright modes
function toggleMode() {
    // Check if we are currently in bright mode
    if (brightIcon.style.display !== 'none') {
        // Switch to dark mode
        brightIcon.style.display = 'none';
        darkIcon.style.display = 'block';
        document.body.style.filter = "invert(1)";
        document.body.style.backgroundColor = "#080402";
        document.getElementsByClassName("main-area-left")[0].style.filter = "invert(1)";
    } else {
        // Switch to bright mode
        brightIcon.style.display = 'block';
        darkIcon.style.display = 'none';
        document.body.style.filter = "invert(0)";
        document.body.style.backgroundColor = "#fff";
        document.getElementsByClassName("main-area-left")[0].style.filter = "invert(0)";
    }
}

// Add event listener to the toggle button
toggleBtn.addEventListener('click', toggleMode);


