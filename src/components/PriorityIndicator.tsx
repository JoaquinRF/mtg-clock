import React from 'react'

type Props = { currentPlayer: string | null; }

function PriorityIndicator({ currentPlayer }: Props) {
    return (
        <div className='border w-fit p-4 ml-4 mt-4'>
            {currentPlayer ? `Player: ${currentPlayer} has priority` : 'Tap to start game!'}
        </div>
    )
}

export default PriorityIndicator