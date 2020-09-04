import { IntensityLevel } from '../interfaces/UserAdvice';

export function isClassifiedHigh(intensity : string) : boolean {
    return (intensity === IntensityLevel.HIGH || intensity === IntensityLevel.VERY_HIGH);
}

export function isClassifiedLow(intensity : string) : boolean {
    return (intensity === IntensityLevel.LOW || intensity === IntensityLevel.VERY_LOW);
}

export function isClassifiedModerate(intensity : string) : boolean {
    return (intensity === IntensityLevel.MODERATE);
}
