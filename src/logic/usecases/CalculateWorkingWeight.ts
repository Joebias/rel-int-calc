const chart = [1, 0.95, 0.93, 0.9, 0.87, 0.85, 0.83, 0.8, 0.77, 0.75]

type OneToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export interface CalculateWorkingWeightArgs {
    reps: OneToTen
    maxWeight: number
    relativeIntensity: number
}

export default ({
    reps,
    maxWeight,
    relativeIntensity,
}: CalculateWorkingWeightArgs) =>
    maxWeight * (relativeIntensity * chart[reps - 1])
