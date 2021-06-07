import React from 'react'
import { PowerChart } from './PowerChart';

interface PowerstatsProps {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
}

export const Powerstats: React.FC<PowerstatsProps> = ({intelligence, strength, speed, durability, power, combat}) => {
        return (
            <div className="mt-3">
                <PowerChart id={"INT"} name={"intelligence"} value={intelligence} />                                     
                <PowerChart id={"STR"} name={"strength"} value={strength} />                                     
                <PowerChart id={"SPD"} name={"speed"} value={speed} />                                     
                <PowerChart id={"DUR"} name={"durability"} value={durability} />                                     
                <PowerChart id={"POW"} name={"power"} value={power} />                                     
                <PowerChart id={"CMB"} name={"combat"} value={combat} /> 
            </div>
        );
}