import React from 'react'
import Step from './Step'

type Props = {}

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

function StepContainer({ }: Props) {
    return (
        <div className='flex flex-row justify-between overflow-auto'>
            {STEPS.map((step, index) => {
                return <Step key={index} step={step} />
            })}
        </div>
    )
}

export default StepContainer