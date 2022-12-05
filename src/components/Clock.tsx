import React from 'react'

type Props = {
    time: any;
}

function Clock({ time }: Props) {
    return (
        <div className='text-[200px] font-extrabold flex justify-center'>
            <span>
                {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span>
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
        </div>
    )
}

export default Clock