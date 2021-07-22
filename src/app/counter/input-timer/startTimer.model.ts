export interface StartTimerEmitter {
    timerLimit: number,
    start: boolean,
    resume: boolean,
    pauseCount: number,
    startCount: number,
    timeStamp: string,
    reset: boolean
}