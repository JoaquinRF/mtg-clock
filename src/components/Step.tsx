import classNames from 'classnames';
import React from 'react'

type Props = {
    isCurrentStep: boolean;
    step: any;
    stopOnMyTurn: boolean;
    stopOnOpponentsTurn: boolean;
}

function Step({ isCurrentStep, step, stopOnMyTurn, stopOnOpponentsTurn }: Props) {
    return (
        <div className='flex flex-col'>
            {stopOnOpponentsTurn && <div>X</div>}
            <div className={classNames('font-bold border p-2 flex items-center  ', { 'bg-orange-300': isCurrentStep })}>{step.toUpperCase()}</div>
            {stopOnMyTurn && <div>X</div>}
        </div>

    )
}

export default Step