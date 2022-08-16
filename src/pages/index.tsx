import PageLayout from '../components/layout/PageLayout'
import React, { useState } from 'react'
import Button from '../components/controls/Button'
import { genWeightsArray } from '../logic/GenerateArray'
import { defaultPlanBlueprint } from '../logic/usecases/RelativeIntensityPlanBlueprint'
import ReactGA from 'react-ga'

if (typeof window !== 'undefined') {
    ReactGA.initialize('UA-163777811-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
}

type exerciseVariables = {
    reps: number
    weight: number
    sets: number
}

export default () => {
    const [weights, setWeights] = useState<exerciseVariables[]>([])
    const [maxWeight, setMaxWeight] = useState<number>()
    console.log(defaultPlanBlueprint.maxSessionPerPeriod)
    return (
        <PageLayout title='Relative Intensity Program Generator'>
            <div>
                <div className='flex justify-center uppercase h-auto'>
                    <label className='mr-3 h-small w-auto'>
                        1 Rep Max (KG):
                    </label>
                    <input
                        className='mr-3 text-black'
                        type='text'
                        name='1rm'
                        id='1rm'
                        onChange={(event) =>
                            setMaxWeight(Number(event.currentTarget.value) || 0)
                        }
                    />
                </div>
                <div className='mt-10 text-black left-nav self-center mr-auto flex flex-1 justify-center uppercase font-bold'>
                    <Button
                        text='Generate Program'
                        onClick={(event) =>
                            setWeights(genWeightsArray(maxWeight))
                        }
                    ></Button>
                </div>
                <div className='mt-10 text-white left-nav self-center mr-auto flex flex-1 justify-center uppercase font-bold '>
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4`}
                    >
                        {weights.map((weight) => (
                            <div className='bg-white rounded-lg shadow-xl text-black w-35 h-15 text-center px-4 py-2'>
                                <p>Weight: {Math.round(weight.weight / 100)}</p>
                                <p>Reps: {weight.reps}</p>
                                <p>Sets: {weight.sets}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
