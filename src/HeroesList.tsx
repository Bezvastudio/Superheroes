import React from 'react'
import { Powerstats } from './components/Powerstats';
import { HeroModal } from './components/HeroModal';
import { heroData } from "./data";

async function getHeroes() {
    try{
      let res=await fetch('https://akabab.github.io/superhero-api/api');
      return await res.json();
    } catch (error) {console.log(error)};
  };

interface HeroesListProps {

}

export const HeroesList: React.FC<HeroesListProps> = () => {

    return (
        <>
            <div className="grid grid-cols-12 gap-6 mt-5">
                {heroData.map((data) => {
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
   
                                    <Powerstats intelligence={data.powerstats.intelligence} 
                                                strength={data.powerstats.strength} 
                                                speed={data.powerstats.speed} 
                                                durability={data.powerstats.durability}  
                                                power={data.powerstats.power}
                                                combat={data.powerstats.combat} />  
                                    <div className="pt-3">
                                        <a href="#">Detail</a>   
                                    </div>                             
                                </div>
                                <HeroModal /> 
                                
                        </div>

                    );
                })}
            </div>
        </>
    );
}