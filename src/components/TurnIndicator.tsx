import React from 'react'
import { HEADER_BUTTON_WIDTH } from './PageContainer'

type Props = { playerName: string | null }

function TurnIndicator({ playerName }: Props) {
    return (
        <div className='header-button'>{playerName ? `Current turn: ${playerName}` : 'Start Game'}</div>
    )
}

export default TurnIndicator