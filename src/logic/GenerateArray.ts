import React, { useState } from 'react'
import CalculateRelativeIntensityForSession from '../logic/usecases/CalculateRelativeIntensityForSession'
import CalculateWorkingWeight from '../logic/usecases/CalculateWorkingWeight'
import RelativeIntensityPlanBlueprint, {
    defaultPlanBlueprint,
} from '../logic/usecases/RelativeIntensityPlanBlueprint'

type exerciseVariables = {
    reps: number
    weight: number
}

function createNewPlanBlueprint(
    data: Partial<RelativeIntensityPlanBlueprint> = {}
): RelativeIntensityPlanBlueprint {
    return {
        ...defaultPlanBlueprint,
        ...data,
    }
}

export function genWeightsArray(maxWeight: number): exerciseVariables[] {
    const myBluePrint = createNewPlanBlueprint()
    var exercises: exerciseVariables[] = []
    var exercise = <exerciseVariables>{}
    for (var i = 0; i < defaultPlanBlueprint.cycleLength; i++) {
        for (var j = 0; j < defaultPlanBlueprint.maxSessionPerPeriod; j++) {
            var exercise = <exerciseVariables>{}
            exercise.weight = CalculateWorkingWeight({
                reps: myBluePrint.progression[j].reps,
                maxWeight: maxWeight,
                relativeIntensity: myBluePrint.startIntensity,
            })
            exercise.reps = myBluePrint.progression[j].reps
            exercises.push(exercise)
            myBluePrint.startIntensity -= myBluePrint.dropOff
        }
        myBluePrint.startIntensity += myBluePrint.intensity
    }
    return exercises
}
