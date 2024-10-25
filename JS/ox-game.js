const boardElement = document.getElementById("board")
const statusElement = document.getElementById("status")
let board = Array(9).fill("")
let currentPlayer = "X"

// Initializing game board
function initBoard() {
    boardElement.innerHTML = ""
    board.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.className = "cell"
        cellElement.dataset.index = index
        cellElement.textContent = cell
        cellElement.addEventListener("click", playerMove)
        boardElement.appendChild(cellElement)
    })
}

// Check for win conditions
function checkWinner(board, player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    return winPatterns.some(pattern => pattern.every(index => board[index] === player))
}

// Player's move
function playerMove(event) {
    const index = event.target.dataset.index
    if (board[index] !== "" || currentPlayer !== "X") return
    board[index] = "X"
    event.target.textContent = "X"
    event.target.classList.add("X")

    if (checkWinner(board, "X")) {
        statusElement.textContent = "You win!"
        statusElement.className = "win-message win"
        endGame()
    } else if (board.every(cell => cell !== "")) {
        statusElement.textContent = "It\'s a draw!"
        statusElement.className = "win-message draw"
        endGame()
    } else {
        currentPlayer = "O"
        statusElement.textContent = "Bot\'s turn..."
        setTimeout(botMove, 500)
    }
}


// Bot's smarter move
function botMove() {
    let emptyCells = board.map((cell, index) => cell === "" ? index : null).filter(index => index !== null)

    // Try to win
    for (let i of emptyCells) {
        board[i] = "O"
        if (checkWinner(board, "O")) {
            boardElement.children[i].textContent = "O"
            boardElement.children[i].classList.add("O")
            statusElement.textContent = "Bot\'s win!"
            statusElement.className = "win-message lose"
            endGame()
            return
        }
        board[i] = ""
    }

    // Block player's winning move
    for (let i of emptyCells) {
        board[i] = "X"
        if (checkWinner(board, "X")) {
            board[i] = "O"
            boardElement.children[i].textContent = "O"
            boardElement.children[i].classList.add("O")
            currentPlayer = "X"
            statusElement.textContent = "Your turn!"
            return
        }
        board[i] = ""
    }

    // Random move if no immediate win/block
    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)]
    board[randomIndex] = "O"
    boardElement.children[randomIndex].textContent = "O"
    boardElement.children[randomIndex].classList.add("O");

    if (checkWinner(board, "O")) {
        statusElement.textContent = "Bot\'s win"
        statusElement.className = "win-message lose";
        endGame()
    } else if (board.every(cell => cell !== "")) {
        statusElement.textContent = "It\'s a draw"
        statusElement.className = "win-message draw";
        endGame()
    } else {
        currentPlayer = "X"
        statusElement.textContent = "Your turn!"
    }
}

// Reset game
function resetGame() {
    board = Array(9).fill("")
    currentPlayer = "X"
    statusElement.textContent = "Your turn!"
    statusElement.className = "ox-header"
    initBoard()
}

//End game by removing event listeners
function endGame() {
    Array.from(boardElement.children).forEach(cell => cell.removeEventListener("click", playerMove))
}

// Initialize game
initBoard()