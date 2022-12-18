import React from 'react'
import Step from './Step'

type Props = {}

const STEPS = [
    'untap',
    'upkeetp',
    'draw',
    'main phase',
    'beginning of combat',
    'declare attackers',
    'combat damage',
    'end of combat',
    'main phase',
    'end',
    'clean up'
]

function StepContainer({ }: Props) {
    return (
        <div className='flex justify-between mb-6 mx-auto p-6'>
            {STEPS.map((step, index) => {
                return <Step key={index} step={step} />
            })}
        </div>
    )
}

export default StepContainer