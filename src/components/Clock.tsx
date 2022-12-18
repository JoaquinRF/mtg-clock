import React from 'react'

type Props = {
    onClick: () => void;
    time: any;
}

function Clock({ time, onClick }: Props) {
    return (
        <div
            className='text-[5em]  font-extrabold flex justify-center'
            onClick={onClick}
        >
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