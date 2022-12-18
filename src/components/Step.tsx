import React from 'react'

type Props = { step: any }

function Step({ step }: Props) {
    return (
        <div className='font-bold border p-2 flex items-center'>{step.toUpperCase()}</div>
    )
}

export default Step