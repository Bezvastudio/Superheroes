import React from 'react'

interface PowerChartProps {
    id: string;
    name: string;
    value: number;
    large: boolean;
}


export const PowerChart: React.FC<PowerChartProps> = ({ id, name, value, large }) => {
    return (
        <>
            {large ?
                <div className="grid grid-cols-6 group cursor-default">
                    <div className="col-span-2">
                        <p className="text-right mr-2">{name}</p>
                    </div>
                    <div className="col-span-4 relative pt-1">
                        <div className="overflow-hidden h-5 rounded bg-gray-100 group-hover:bg-indigo-100">
                            <div className="bg-indigo-500 group-hover:bg-indigo-700 h-full text-right text-white text-sm pr-1" style={{ width: `${value}%` }} >{value}</div>
                        </div>
                    </div>
                </div>
                :
                <div className="grid grid-cols-5 group cursor-default">
                    <div>
                        <p className="text-xs">{id}</p>
                    </div>
                    <div className="col-span-4 relative pt-1">
                        <div className="overflow-hidden h-2 rounded bg-gray-100 group-hover:bg-indigo-100">
                            <div className="bg-indigo-500 group-hover:bg-indigo-700 h-full" style={{ width: `${value}%` }} />
                        </div>
                        <div className="opacity-0 bg-black text-white text-center text-xs rounded-lg py-1 px-2 absolute z-10 group-hover:opacity-100 bottom-full">
                            {name}: {value}
                        </div>
                    </div>
                </div>
            }
        </>
    );
}