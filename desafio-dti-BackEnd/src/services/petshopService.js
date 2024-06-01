import {parse, isWeekend} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import petshops from '../models/Petshop.js';



const calculatePrice = (petshops, smallDogs, largeDogs, weekend) =>{
    const prices = weekend ? petshops.weekendPrices : petshops.weekdayPrices;
    return(prices.small * smallDogs) + (prices.large * largeDogs);
};

const bestPetshop = (date, smallDogs, largeDogs) =>{
    const parsedDate = parse(date, 'dd/MM/yyyy', new Date(), {locale: ptBR});

    if(isNaN(parsedDate)){
        throw new Error('Data Inválida');
    };

    const weekend = isWeekend(parsedDate);

    let bestPetshop = null;
    let bestPrice = Infinity;

    petshops.forEach(petshops =>{
        const totalPrice = calculatePrice(petshops, smallDogs, largeDogs, weekend);
        if(totalPrice < bestPrice || (totalPrice === bestPrice && petshops.distance < bestPetshop.distance)){
            bestPetshop = petshops;
            bestPrice = totalPrice
        };
    });

    return {
        bestPetshop: bestPetshop.name,
        totalPrice: bestPrice.toFixed(2),
    };

};

export default bestPetshop;