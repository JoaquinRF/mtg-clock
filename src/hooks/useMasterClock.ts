import React, { useEffect, useState } from "react";
import { getClockTime, getCurrentPlayerInfo, getCurrentTurnInfo, getPlayerIndex } from "../mockServer/server";

export function useMasterClock(playerName: string) {
    const playerIndex = getPlayerIndex(playerName)
    const [time, setTime] = useState(getClockTime(playerIndex))
    const [currentPlayerInfo, setCurrentPlayer] = useState(getCurrentPlayerInfo());
    const [currentTurn, setCurrentTurn] = useState(getCurrentTurnInfo())

    useEffect(() => {
        let interval: any = null;

        if (time && time > 0) {
            interval = setInterval(() => {
                setTime(getClockTime(playerIndex));
                setCurrentPlayer(getCurrentPlayerInfo())
                setCurrentTurn(getCurrentTurnInfo())
            }, 1000);

            return () => clearInterval(interval)
        }
    })

    return ({ time: time, currentPlayerInfo: currentPlayerInfo, currentTurn: currentTurn })
}