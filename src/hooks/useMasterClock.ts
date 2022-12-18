import React, { useEffect, useState } from "react";
import { getClockTime, getCurrentPlayerInfo, getCurrentTurnInfo, getPlayerIndex, getStopIndicatorInfo } from "../mockServer/server";

export function useMasterClock(playerName: string) {
    const playerIndex = getPlayerIndex(playerName)
    const [time, setTime] = useState(getClockTime(playerIndex))
    const [currentPlayerInfo, setCurrentPlayer] = useState(getCurrentPlayerInfo());
    const [currentTurn, setCurrentTurn] = useState(getCurrentTurnInfo())
    const [myStopIndicators, setMyStopIndicators] = useState(getStopIndicatorInfo(playerIndex))

    useEffect(() => {
        let interval: any = null;

        if (time && time > 0) {
            interval = setInterval(() => {
                setTime(getClockTime(playerIndex));
                setCurrentPlayer(getCurrentPlayerInfo())
                setCurrentTurn(getCurrentTurnInfo())
                setMyStopIndicators(getStopIndicatorInfo(playerIndex))
            }, 1000);

            return () => clearInterval(interval)
        }
    })

    return ({ time: time, currentPlayerInfo: currentPlayerInfo, currentTurnInfo: currentTurn, myStopIndicators: myStopIndicators })
}