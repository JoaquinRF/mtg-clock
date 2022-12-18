import React from 'react'
import Step from './Step'

type Props = {
    currentStepId: number | null;
    stopIndicatorInfo: { stepId: number; myTurn: boolean; opponentsTurn: boolean }[]
}

const STEPS = [
    { id: 0, name: 'untap' },
    { id: 1, name: 'upkeep' },
    { id: 2, name: 'draw' },
    { id: 3, name: 'main' },
    { id: 4, name: 'start combat' },
    { id: 5, name: 'declare attackers' },
    { id: 6, name: 'declare blockers' },
    { id: 7, name: 'damage' },
    { id: 8, name: 'end combat' },
    { id: 9, name: 'main' },
    { id: 10, name: 'end' },
    { id: 11, name: 'clean up' }
]

function StepContainer({ currentStepId, stopIndicatorInfo }: Props) {

    return (
        <div className='flex flex-row justify-between overflow-auto mb-4'>
            {STEPS.map((step, index) => {
                const isCurrentStep = currentStepId === step.id
                const stopInfo = stopIndicatorInfo.find(stopIndicator => step.id === stopIndicator.stepId)
                const { myTurn: stopOnMyTurn, opponentsTurn: stopOnOpponentsTurn } = stopInfo ? stopInfo : { myTurn: false, opponentsTurn: false }
                return <Step stopOnMyTurn={stopOnMyTurn} stopOnOpponentsTurn={stopOnOpponentsTurn} isCurrentStep={isCurrentStep} key={step.id} step={step.name} />
            })}
        </div>
    )
}

export default StepContainer