import React from 'react'

type Props = { playerName: string | null }

function TurnIndicator({ playerName }: Props) {
    return (
        <div className='border w-fit p-4 ml-4 mt-4'>{playerName ? `Current turn: ${playerName}` : 'Start Game'}</div>
    )
}

export default TurnIndicator