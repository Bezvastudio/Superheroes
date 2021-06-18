import React, { useEffect, useState } from 'react'
import { Powerstats } from './components/Powerstats';
import { HeroModal } from './components/HeroModal';
import axios from 'axios';
import { Badge } from './components/Badge';
import { Button } from './components/Button';
import { SearchForm } from './components/SearchForm';


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

    const [visibleHeroes, setvisibleHeroes] = useState(48)

    const [searchText, setSearchText] = useState('')

    const handleClick = () => {
        setvisibleHeroes(prevVisibleHesoes => prevVisibleHesoes + 24)
    }

    const handleSearchInputChange = (event: any) => {
        setSearchText(event.target.value)
    }

    /*const handleSearchInputKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            console.log('Enter press')
        }
    }*/

    const filteredHeroes = data.filter(data => {
        return data.name.includes(searchText) 
        || data.biography.fullName.includes(searchText) 
        || data.biography.alterEgos.includes(searchText)
        //|| data.biography.aliases.includes(searchText)
    })

    useEffect(() => {
        axios.get('https://akabab.github.io/superhero-api/api/all.json').then(res => setData(res.data))     
    }, [])


    return (
        <>
            <SearchForm placeholder="Search superhero" onChange={handleSearchInputChange} />
            <div className="grid grid-cols-12 gap-6 my-5">
                {filteredHeroes.slice(0, visibleHeroes).map((data) => {
                    return (
                        <div key={data.slug} id={data.slug} className="transform hover:scale-105 hover:shadow-2xl transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2  bg-white">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img className="w-full object-cover transform hover:scale-110 transition duration-1000 cursor-pointer"
                                        alt={data.name}
                                        src={data.images.sm}
                                        title={data.name}
                                        onClick={ () => setHero(data.id)}
                                    />
                                    <div className="absolute bottom-3 left-4">
                                        <Badge color={
                                                data.biography.alignment === 'good' ? 'bg-green-500' 
                                                : data.biography.alignment === 'bad' ? 'bg-red-500' 
                                                : 'bg-yellow-500'} 
                                            value={data.biography.alignment} /><br />
                                        <Badge color={"bg-indigo-600"} value={data.biography.publisher} />

                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-bold text-current cursor-pointer truncate" onClick={ () => setHero(data.id)}>{data.name}</h3>
                                    <p className="text-gray-400 truncate">{data.biography.fullName ? data.biography.fullName : '-'}</p>  
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
                                        <div className="flex flex-row-reverse -mr-1">
                                        <Button label={"Detail"} styling={"detail"} onClick={ () => setHero(data.id)} />
                                        </div>
                                    </div>                             
                                </div>
                                
                        </div>

                    );
                })}
            </div>
            
            {/*visibleHeroes > 48 ? (*/
            <div className="w-full text-center my-10">
                <Button label={"Load more"} styling={"primary"} onClick={handleClick} />
            </div>
            /*) : ''*/ }
            <HeroModal data={data.find( x => x.id === hero )!} showModal={!!hero} setShowModal={val => setHero(val)} />
        </>
    );
}