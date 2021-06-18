import React from 'react'
import { Superhero } from '../HeroesList';
import { Badge } from './Badge';
import { Powerstats } from './Powerstats';

interface HeroModalProps {
    data: Superhero;
    showModal: boolean;
    setShowModal: (val: null) => void;
}

export const HeroModal: React.FC<HeroModalProps> = ({ data, showModal, setShowModal }) => {

    //const AlignmentGoot = {data.biography.publisher} ;

    return (
        <>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50" >
                        <div className="relative w-auto my-6 mx-auto max-w-4xl p-3">
                            {/*content*/}
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                                {/*header*/}
                                <div className="flex items-start p-5 rounded-t">
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
                                            <Badge color={"bg-indigo-600"} value={data.biography.publisher} />
                                            <Badge color={
                                                    data.biography.alignment === 'good' ? 'bg-green-500' 
                                                    : data.biography.alignment === 'bad' ? 'bg-red-500' 
                                                    : 'bg-yellow-500'} 
                                                value={data.biography.alignment} />
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
                                                <div><span>height</span><span className="float-right">{data.appearance.height.map((unit) => " / " + unit )}</span></div>
                                                <div><span>weight</span><span className="float-right">{data.appearance.weight.map((unit) => " / " + unit )}</span></div>
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
                                <div className="grid grid-cols-3 gap-5 w-full px-5 pb-5">
                                                                                
                                        <div className="col-span-3 sm:col-span-1">
                                            <h4 className="text-xl font-semibold">
                                                Biography
                                            </h4>
                                            <p><span className="font-bold">Full name:</span> {data.biography.fullName}</p>
                                            <p><span className="font-bold">Alteregos:</span> {data.biography.alterEgos}</p>
                                            <p><span className="font-bold">Aliases:</span> {data.biography.aliases.map((alias) => alias + ", " )}</p>
                                            <p><span className="font-bold">Place of birth:</span> {data.biography.placeOfBirth}</p>
                                            <p><span className="font-bold">Firs appearance:</span> {data.biography.firstAppearance}</p>
                                        </div>

                                        <div className="col-span-3 sm:col-span-1">
                                            <h4 className="text-xl font-semibold">
                                                Connections
                                            </h4>
                                            <p><span className="font-bold">Group affiliation:</span> {data.connections.groupAffiliation}</p>
                                            <p><span className="font-bold">Relatives:</span> {data.connections.relatives}</p>
                                        </div>

                                        <div className="col-span-3 sm:col-span-1">
                                            <h4 className="text-xl font-semibold">
                                                Work
                                            </h4>
                                            <p><span className="font-bold">Occupation:</span> {data.work.occupation}</p>
                                            <p><span className="font-bold">Base:</span> {data.work.base}</p>
                                        </div>

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