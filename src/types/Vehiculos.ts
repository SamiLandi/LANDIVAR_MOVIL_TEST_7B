export interface Vehiculo {
    marca: string;
    modelo: string;
    placa: string;
    duenio: string;
    anio: string;
    gasolina: string;
}
export const initialFormState: Vehiculo = {
    marca: '',
    modelo: '',
    placa: '',
    duenio: '',
    anio: '',
    gasolina: '',
};