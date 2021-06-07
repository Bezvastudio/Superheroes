import React from 'react'

interface PowerChartProps {
    id: string;
    name: string;
    value: number;
}


export const PowerChart: React.FC<PowerChartProps> = ({id, name, value}) => {
        return (
            <div className="grid grid-cols-5 group cursor-default">
                <div className="">
                    <p className="text-xs">{id}</p>
                </div>
                <div className="col-span-4 relative pt-1 relative">
                    <div className="overflow-hidden h-2 rounded bg-gray-100 group-hover:bg-indigo-100">
                        <div className="bg-indigo-500 h-full" style={{ width: `${value}%` }} />
                    </div>
                    <div className="opacity-0 bg-black text-white text-center text-xs rounded-lg py-1 px-2 absolute z-10 group-hover:opacity-100 bottom-full">
                        {name}: {value}
                    </div>
                </div>
            </div>
        );
}