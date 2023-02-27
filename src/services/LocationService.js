import data from '../data/comunas-regiones-chile.json';
// console.log(data);

export const getRegiones = () => {
    return data.map((item) => {
        return { name: item.region, value: item.region_number }
    });
}

export const getComunas = (region_number) => {
    return data.filter((item) => {
        return item.region_number === region_number;
    })[0]
    .provincias.map((provincia)=>{
        return provincia.comunas;
    })
    .flat()
    .map(({ name, code }) => ({ name: name, value: code }));
}
