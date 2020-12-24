type WEEK_PERIOD = 7
const WP: WEEK_PERIOD = 7

type OneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

type SetsReps = {
    sets: OneToTen
    reps: OneToTen
}

export default interface RelativeIntensityPlanBlueprint {
    type: string
    cycleLength: number
    maxSessionPerPeriod: number
    startIntensity: number
    intensity: number
    dropOff: number
    progression: SetsReps[]
}

export const defaultPlanBlueprint: RelativeIntensityPlanBlueprint = {
    type: 'defaultPlanBlueprint',
    cycleLength: 4,
    maxSessionPerPeriod: 4,
    startIntensity: 88,
    intensity: 12,
    dropOff: 2,
    progression: [
        {
            sets: 3,
            reps: 5,
        },
        {
            sets: 3,
            reps: 5,
        },
        {
            sets: 2,
            reps: 7,
        },
        {
            sets: 2,
            reps: 9,
        },
    ],
}
