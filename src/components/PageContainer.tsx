import React, { useEffect, useState } from 'react'
import Clock from './Clock'
import PriorityIndicator from './PriorityIndicator'
import StepContainer from './StepContainer'
import TurnIndicator from './TurnIndicator'

type Props = {}

const second = 1000;
const minute = 60 * second;

function PageContainer({ }: Props) {

    const [time, setTime] = useState(30 * minute)

    useEffect(() => {
        console.log(time)
        let interval: any = null;

        if (time > 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1000);
            }, 1000);

            return () => clearInterval(interval)
        }
    })


    return (
        <div>
            <div className='flex justify-between'>
                <div>
                    <TurnIndicator />
                    <PriorityIndicator />
                </div>
                <div className='flex items-center'>
                    <div className='border mr-4 p-2 text-xl h-fit'>
                        PAUSE
                    </div>
                </div>
            </div>
            <Clock time={time} />
            <StepContainer />
        </div>
    )
}

export default PageContainer