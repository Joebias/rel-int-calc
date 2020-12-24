import RelativeIntensityPlanBlueprint from './RelativeIntensityPlanBlueprint'

export interface createRIPlanParameters {
    planName: string
    startDate: string
    sessionsPerWeek: number
    starting1RM: number
}

export default interface BasePlan {
    planBlueprint: RelativeIntensityPlanBlueprint
    planSpecifics: createRIPlanParameters
    // TODO: Add an exercises array
}

export const createRIPlan = (
    RIBlueprint: RelativeIntensityPlanBlueprint,
    planParams: createRIPlanParameters
): BasePlan => ({
    planBlueprint: RIBlueprint,
    planSpecifics: planParams,
    // TODO: Add an exercises array
})
