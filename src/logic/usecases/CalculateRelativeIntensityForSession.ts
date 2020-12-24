import RelativeIntensityPlanBlueprint from './RelativeIntensityPlanBlueprint'

type CalculateRelativeIntensityArgs = {
    session: number
    period: number
    planBlueprint: RelativeIntensityPlanBlueprint
}

export default ({
    period,
    session,
    planBlueprint: { startIntensity, intensity, dropOff },
}: CalculateRelativeIntensityArgs) => {
    return (
        startIntensity +
        intensity * (period - 1) -
        Math.round(dropOff * (session - 1))
    )
}
