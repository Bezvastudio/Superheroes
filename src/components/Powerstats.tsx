import React from 'react'
import { PowerChart } from './PowerChart';

interface PowerstatsProps {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
    large: boolean;
}

export const Powerstats: React.FC<PowerstatsProps> = ({intelligence, strength, speed, durability, power, combat, large}) => {
        return (
            <>
                <PowerChart id={"INT"} name={"intelligence"} value={intelligence} large={large} />                                     
                <PowerChart id={"STR"} name={"strength"} value={strength} large={large} />                                     
                <PowerChart id={"SPD"} name={"speed"} value={speed} large={large} />                                     
                <PowerChart id={"DUR"} name={"durability"} value={durability} large={large} />                                     
                <PowerChart id={"POW"} name={"power"} value={power} large={large} />                                     
                <PowerChart id={"CMB"} name={"combat"} value={combat} large={large} /> 
            </>
        );
}