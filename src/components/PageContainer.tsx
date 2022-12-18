import React, { useEffect, useRef, useState } from 'react'
import { useMasterClock } from '../hooks/useMasterClock'
import { passPriority, pauseTime, takePriority } from '../mockServer/server'
import Clock from './Clock'
import PriorityIndicator from './PriorityIndicator'
import StepContainer from './StepContainer'
import TurnIndicator from './TurnIndicator'

type Props = { playerInfo: { name: string, playerIndex: number } }

export const HEADER_BUTTON_WIDTH = 'min-w-[180px]'

function PageContainer({ playerInfo }: Props) {
    const { time, currentPlayerInfo, currentTurn } = useMasterClock(playerInfo.name)

    const handleOnClick = () => {
        if (currentPlayerInfo.playerIndex === playerInfo.playerIndex) passPriority(playerInfo.playerIndex)
        else takePriority(playerInfo.playerIndex)
    }
    return (
        <div className='page-container'>
            <div className='flex justify-between'>

                <TurnIndicator playerName={currentTurn} />
                <PriorityIndicator currentPlayer={currentPlayerInfo.name} />


                <div className='header-button' onClick={() => pauseTime()}>
                    Pause
                </div>
            </div>

            <Clock onClick={handleOnClick} time={time} />
            <div className='flex justify-center'>I am Player: {playerInfo.name}</div>
            <StepContainer />
        </div>
    )
}

export default PageContainer