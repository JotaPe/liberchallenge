import React, {useState, useEffect} from 'react'
import { client } from 'src/pages/App';

export const useCar = (model, year, trademark) => {
    const [car, setCar] = useSate();

    React.useEffect(await () => {
        const request = await client.get("/marcas/59/modelos/5940/anos");
        const secondRequest = await
    })
    
    return car;
}