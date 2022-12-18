import React from 'react'

type Props = { currentPlayer: string | null; }

function PriorityIndicator({ currentPlayer }: Props) {
    return (
        <div className='header-button'>
            {currentPlayer ? `Player: ${currentPlayer} has priority` : 'Tap to start game!'}
        </div>
    )
}

export default PriorityIndicator