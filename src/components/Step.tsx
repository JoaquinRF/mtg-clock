import React from 'react'

type Props = { step: any }

function Step({ step }: Props) {
    return (
        <div className='mr-2 border p-2'>{step}</div>
    )
}

export default Step