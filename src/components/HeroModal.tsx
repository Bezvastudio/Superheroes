import React from 'react'
import { Superhero } from '../HeroesList';
import { Powerstats } from './Powerstats';

interface HeroModalProps {
    data: Superhero;
    showModal: boolean;
    setShowModal: (val: null) => void;
}

export const HeroModal: React.FC<HeroModalProps> = ({ data, showModal, setShowModal }) => {

    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50" >
                        <div className="relative w-auto my-6 mx-auto max-w-4xl p-3">
                            {/*content*/}
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <img className="object-cover hidden md:inline mr-5"
                                        alt={data.name}
                                        src={data.images.sm}
                                        title={data.name}
                                    />
                                    <div className="grid grid-cols-12 gap-x-10 gap-y-4 w-full">
                                        <div className="col-span-11">
                                            <h3 className="text-3xl font-semibold">
                                                {data.name}
                                            </h3>
                                            <span className="bg-indigo-600 text-white text-sm py-1 px-2 rounded-sm">{data.biography.publisher}</span>
                                        </div>
                                        <div className="col-span-1">
                                            <button
                                                className="ml-auto opacity-40 hover:opacity-80 float-right leading-none font-semibold"
                                                onClick={() => setShowModal(null)}
                                            >
                                                <span className="text-black h-6 w-6 text-2xl block">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        <div className="col-span-12 sm:col-span-4">
                                            <div className="grid grid-cols-1 divide-y divide-gray-200">
                                                <div><span>gender</span><span className="float-right">{data.appearance.gender}</span></div>
                                                <div><span>race</span><span className="float-right">{data.appearance.race}</span></div>
                                                <div><span>height</span><span className="float-right">{data.appearance.height}</span></div>
                                                <div><span>weight</span><span className="float-right">{data.appearance.weight}</span></div>
                                                <div><span>eye color</span><span className="float-right">{data.appearance.eyeColor}</span></div>
                                                <div><span>hair color</span><span className="float-right">{data.appearance.hairColor}</span></div>
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-8">
                                        <Powerstats intelligence={data.powerstats.intelligence} 
                                                strength={data.powerstats.strength} 
                                                speed={data.powerstats.speed} 
                                                durability={data.powerstats.durability}  
                                                power={data.powerstats.power}
                                                combat={data.powerstats.combat}
                                                large={true} /> 
                                        </div>

                                    </div>


                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                        won’t do anything. I was taught I could do everything.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(null)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}