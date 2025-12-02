import { useState } from 'react';
import { Vehicle, emptyVehicle } from '../models/vehiculo';

export const TOTAL_STEPS = 3;

export const useVehicleForm = () => {
    const [vehicle, setVehicle] = useState<Vehicle>(emptyVehicle);
    const [step, setStep] = useState(0);
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);

    const updateField = (field: keyof Vehicle, value: string) => {
        setVehicle(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const goToStep = (target: number) => {
        setStep(target);
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => (prev > 0 ? prev - 1 : 0));

    const registerVehicle = () => {
        setVehicles(prev => [...prev, vehicle]);
        setStep(3);
    };

    const startNew = () => {
        setVehicle(emptyVehicle);
        setStep(0);
    };

    return {
        vehicle,
        vehicles,
        step,
        updateField,
        nextStep,
        prevStep,
        goToStep,
        registerVehicle,
        startNew,
    };
};