export interface Version {
    id: number,
    type: 'primary' | 'nextMinor' | 'nextMajor',
        data: {
            previousMinor: number,
            previousMajor: number,
            currentMinor: number,
            currentMajor: number
        }
}