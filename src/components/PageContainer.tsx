import React, { useEffect, useState } from 'react'
import { useMasterClock } from '../hooks/useMasterClock'
import { passPriority, pauseTime, takePriority } from '../mockServer/server'
import Clock from './Clock'
import PriorityIndicator from './PriorityIndicator'
import StepContainer from './StepContainer'
import TurnIndicator from './TurnIndicator'

type Props = { playerInfo: { name: string, playerIndex: number } }



function PageContainer({ playerInfo }: Props) {
    const { time, currentPlayerInfo, currentTurn } = useMasterClock(playerInfo.name)

    const handleOnClick = () => {
        if (currentPlayerInfo.playerIndex === playerInfo.playerIndex) passPriority(playerInfo.playerIndex)
        else takePriority(playerInfo.playerIndex)
    }
    return (
        <div className='flex flex-col justify-between h-screen p-6'>
            <div className='flex justify-between'>

                <TurnIndicator playerName={currentTurn} />
                <PriorityIndicator currentPlayer={currentPlayerInfo.name} />

                <div className='flex items-center'>
                    <div className='border mr-4 p-2 text-xl h-fit' onClick={() => pauseTime()}>
                        PAUSE
                    </div>
                </div>
            </div>

            <Clock onClick={handleOnClick} time={time} />
            <div className='flex justify-center'>I am Player: {playerInfo.name}</div>
            <StepContainer />
        </div>
    )
}

export default PageContainer