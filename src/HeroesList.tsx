import React, { useEffect, useState } from 'react'
import { Powerstats } from './components/Powerstats';
import { HeroModal } from './components/HeroModal';
import axios from 'axios';


interface HeroesListProps {

}

export interface Superhero {
    id: number;
    name: string;
    slug: string;
    powerstats: {
        intelligence: number;
        strength: number;
        speed: number;
        durability: number;
        power: number;
        combat: number;
    };
    appearance: {
        gender: string;
        race: string;
        height: object[];
        weight: object[];
        eyeColor: string;
        hairColor: string;
    };
    biography: {
        fullName: string;
        alterEgos: string;
        aliases: object[];
        placeOfBirth: string;
        firstAppearance: string;
        publisher: string;
        alignment: string;
    };
    work: {
        occupation: string;
        base: string;
    };
    connections: {
        groupAffiliation: string;
        relatives: string;
    };
    images: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    }
}

export const HeroesList: React.FC<HeroesListProps> = () => {

    const [data, setData] = useState<Superhero[]>([]) 

    const [hero, setHero] = useState<null | number>(null)

    useEffect(() => {
        axios.get('https://akabab.github.io/superhero-api/api/all.json').then(res => setData(res.data))     
    }, [])


    return (
        <>
            <div className="grid grid-cols-12 gap-6 mt-5">
                {data.map((data) => {
                    return (
                        <div key={data.slug} id={data.slug} className="transform hover:scale-105 hover:shadow-2xl transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2  bg-white">
                                <div className="relative">
                                    <img className="w-full object-cover rounded-t-lg"
                                        alt={data.name}
                                        src={data.images.sm}
                                        title={data.name}
                                    />
                                    <div className="absolute bottom-3 left-4">
                                        <span className="bg-indigo-600 text-white text-sm py-1 px-2 rounded-sm">{data.biography.publisher}</span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-current">{data.name}</h3>
                                    <p className="text-gray-400">{data.biography.fullName}</p>  
                                    <div className="mt-3">

                                    <Powerstats intelligence={data.powerstats.intelligence} 
                                                strength={data.powerstats.strength} 
                                                speed={data.powerstats.speed} 
                                                durability={data.powerstats.durability}  
                                                power={data.powerstats.power}
                                                combat={data.powerstats.combat}
                                                large={false} /> 
                                                </div>
                                    <div className="pt-3">
                                        <button onClick={ () => setHero(data.id)}>Detail</button>   
                                    </div>                             
                                </div>
                                
                        </div>

                    );
                })}
            </div>
            <HeroModal data={data.find( x => x.id === hero )!} showModal={!!hero} setShowModal={val => setHero(val)} />
        </>
    );
}