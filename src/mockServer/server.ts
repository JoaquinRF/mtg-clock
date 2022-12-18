const second = 1000;
const minute = 60 * second;
const startingTime = 30 * minute

export const clocks = [
    {
        playerName: 'A',
        timeInSeconds: startingTime,
        stopIndicators: [
            { stepId: 0, myTurn: true, opponentsTurn: false },
            { stepId: 1, myTurn: true, opponentsTurn: false },
            { stepId: 2, myTurn: true, opponentsTurn: false },
            { stepId: 3, myTurn: true, opponentsTurn: false },
            { stepId: 4, myTurn: true, opponentsTurn: false },
            { stepId: 5, myTurn: true, opponentsTurn: false },
            { stepId: 6, myTurn: true, opponentsTurn: false },
            { stepId: 7, myTurn: true, opponentsTurn: false },
            { stepId: 8, myTurn: true, opponentsTurn: false },
            { stepId: 9, myTurn: true, opponentsTurn: false },
            { stepId: 10, myTurn: true, opponentsTurn: false },
            { stepId: 11, myTurn: true, opponentsTurn: false }
        ]
    },
    {
        playerName: 'B',
        timeInSeconds: startingTime,
        stopIndicators: [
            { stepId: 0, myTurn: true, opponentsTurn: false },
            { stepId: 1, myTurn: true, opponentsTurn: false },
            { stepId: 2, myTurn: true, opponentsTurn: false },
            { stepId: 3, myTurn: true, opponentsTurn: false },
            { stepId: 4, myTurn: true, opponentsTurn: false },
            { stepId: 5, myTurn: true, opponentsTurn: false },
            { stepId: 6, myTurn: true, opponentsTurn: false },
            { stepId: 7, myTurn: true, opponentsTurn: false },
            { stepId: 8, myTurn: true, opponentsTurn: false },
            { stepId: 9, myTurn: true, opponentsTurn: false },
            { stepId: 10, myTurn: true, opponentsTurn: false },
            { stepId: 11, myTurn: true, opponentsTurn: false }
        ]
    },
    {
        playerName: 'C',
        timeInSeconds: startingTime,
        stopIndicators: [
            { stepId: 0, myTurn: true, opponentsTurn: false },
            { stepId: 1, myTurn: true, opponentsTurn: false },
            { stepId: 2, myTurn: true, opponentsTurn: false },
            { stepId: 3, myTurn: true, opponentsTurn: false },
            { stepId: 4, myTurn: true, opponentsTurn: false },
            { stepId: 5, myTurn: true, opponentsTurn: false },
            { stepId: 6, myTurn: true, opponentsTurn: false },
            { stepId: 7, myTurn: true, opponentsTurn: false },
            { stepId: 8, myTurn: true, opponentsTurn: false },
            { stepId: 9, myTurn: true, opponentsTurn: false },
            { stepId: 10, myTurn: true, opponentsTurn: false },
            { stepId: 11, myTurn: true, opponentsTurn: false }
        ]
    },
    {
        playerName: 'D',
        timeInSeconds: startingTime,
        stopIndicators: [
            { stepId: 0, myTurn: true, opponentsTurn: false },
            { stepId: 1, myTurn: true, opponentsTurn: false },
            { stepId: 2, myTurn: true, opponentsTurn: false },
            { stepId: 3, myTurn: true, opponentsTurn: false },
            { stepId: 4, myTurn: true, opponentsTurn: false },
            { stepId: 5, myTurn: true, opponentsTurn: false },
            { stepId: 6, myTurn: true, opponentsTurn: false },
            { stepId: 7, myTurn: true, opponentsTurn: false },
            { stepId: 8, myTurn: true, opponentsTurn: false },
            { stepId: 9, myTurn: true, opponentsTurn: false },
            { stepId: 10, myTurn: true, opponentsTurn: false },
            { stepId: 11, myTurn: true, opponentsTurn: false }
        ]
    }
]

const STEPS = [
    'untap',
    'upkeep',
    'draw',
    'main',
    'start combat',
    'declare attackers',
    'declare blockers',
    'damage',
    'end combat',
    'main',
    'end',
    'clean up'
]
let currentStepByIndex: number | null = null;
let currentPlayerPriorityByIndex: number | null = null;
let currentTurnByPlayerIndex: number | null = null;
let isPaused = false;

setInterval(
    () => {
        if (currentPlayerPriorityByIndex !== null && !isPaused) {
            clocks[currentPlayerPriorityByIndex].timeInSeconds -= second
        }
    }, second
)

const incrementStep = () => {
    if (currentStepByIndex !== null && STEPS.length == (currentStepByIndex + 1)) {
        currentStepByIndex = 0
    }
    else currentStepByIndex !== null && ++currentStepByIndex
}

export const getPlayerIndex = (playerName: string) => {
    return clocks.findIndex((clock) => clock.playerName === playerName)
}

export const getClockTime = (playerIndex: number) => {
    return clocks[playerIndex].timeInSeconds;
}

export const getStopIndicatorInfo = (playerIndex: number) => {
    return clocks[playerIndex].stopIndicators
}

export const pauseTime = () => {
    isPaused = !isPaused
}

export const passPriority = (playerIndex: number) => {
    if (isPaused) return;
    if (playerIndex === currentPlayerPriorityByIndex) {
        if (playerIndex === currentTurnByPlayerIndex) {
            if (currentStepByIndex !== null && STEPS.length == (currentStepByIndex + 1)) {
                if (currentPlayerPriorityByIndex + 1 === clocks.length) {
                    currentPlayerPriorityByIndex = currentTurnByPlayerIndex = 0;
                } else {
                    currentPlayerPriorityByIndex = currentTurnByPlayerIndex += 1;
                }
            }
            incrementStep()

        }
        else currentPlayerPriorityByIndex = currentTurnByPlayerIndex
    }
}

const startGame = (playerIndex: number) => {
    currentPlayerPriorityByIndex = currentTurnByPlayerIndex = playerIndex;
    currentStepByIndex = 0;
}

export const takePriority = (playerIndex: number) => {
    if (currentTurnByPlayerIndex === null && currentPlayerPriorityByIndex === null) startGame(playerIndex)
    else if (!isPaused) currentPlayerPriorityByIndex = playerIndex;
}

export const getCurrentPlayerInfo = () => {
    const name = currentPlayerPriorityByIndex !== null ? clocks[currentPlayerPriorityByIndex].playerName : null;
    const index = currentPlayerPriorityByIndex;
    return { name: name, playerIndex: index }
}

export const getCurrentTurnInfo = () => {
    const name: string | null = currentTurnByPlayerIndex !== null ?
        clocks[currentTurnByPlayerIndex].playerName : null;
    return { name: name, stepId: currentStepByIndex }
}