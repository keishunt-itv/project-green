import { CarbonIntensityRegion, GenerationMixEnum, IntensityLevelEnum } from '../interfaces/CarbonIntensityRegion';

export const mockRegionNames = [
    'North Scotland',
    'South Scotland',
    'North East England',
    'North West England',
    'North Wales & Merseyside',
    'South Wales',
    'West Midlands',
    'East Midlands',
    'South East England',
    'London',
    'East England',
    'South England',
    'South West England',
    'Yorkshire'
];

const intensity: IntensityLevelEnum = {
    forecast: 100,
    index: 'Very High'
};

const windGenerationMix: GenerationMixEnum = {
    fuel: 'wind',
    perc: 50
};

const solarGenerationMix: GenerationMixEnum = {
    fuel: 'solar',
    perc: 30
};

const coalGenerationMix: GenerationMixEnum = {
    fuel: 'coal',
    perc: 20
};

const yorkshireRegion: CarbonIntensityRegion = {
    region: 'Yorkshire',
    intensity,
    generationmix: [windGenerationMix, solarGenerationMix, coalGenerationMix]
};

const northScotlandRegion: CarbonIntensityRegion = {
    region: 'North Scotland',
    intensity,
    generationmix: [windGenerationMix, solarGenerationMix, coalGenerationMix]
};

export const ciResponse: Array<CarbonIntensityRegion> = [
    yorkshireRegion,
    northScotlandRegion
];
