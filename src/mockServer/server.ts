const second = 1000;
const minute = 60 * second;
const startingTime = 30 * minute

export const clocks = [
    { playerName: 'A', timeInSeconds: startingTime },
    { playerName: 'B', timeInSeconds: startingTime },
    { playerName: 'C', timeInSeconds: startingTime },
    { playerName: 'D', timeInSeconds: startingTime }
]
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

export const getPlayerIndex = (playerName: string) => {
    return clocks.findIndex((clock) => clock.playerName === playerName)
}

export const getClockTime = (playerIndex: number) => {
    return clocks[playerIndex].timeInSeconds;
}

export const pauseTime = () => {
    isPaused = !isPaused
}

export const passPriority = (playerIndex: number) => {
    if (isPaused) return;
    if (playerIndex === currentPlayerPriorityByIndex) {
        if (playerIndex === currentTurnByPlayerIndex) {
            if (currentPlayerPriorityByIndex + 1 === clocks.length) {
                currentPlayerPriorityByIndex = currentTurnByPlayerIndex = 0;
            } else {
                currentPlayerPriorityByIndex = currentTurnByPlayerIndex += 1;
            }
        }
        else currentPlayerPriorityByIndex = currentTurnByPlayerIndex
    }
}

const startGame = (playerIndex: number) => {
    currentPlayerPriorityByIndex = currentTurnByPlayerIndex = playerIndex;
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
    return currentTurnByPlayerIndex !== null ? clocks[currentTurnByPlayerIndex].playerName : null;
}