import Axios from 'axios';
import {
    CarbonIntensityRegion,
    CarbonIntensityResponse,
    GenerationMixEnum,
    IntensityLevelEnum
} from '../interfaces/CarbonIntensityRegion';

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
    shortname: 'Yorkshire',
    intensity,
    generationmix: [windGenerationMix, solarGenerationMix, coalGenerationMix]
};

const northScotlandRegion: CarbonIntensityRegion = {
    shortname: 'North Scotland',
    intensity,
    generationmix: [windGenerationMix, solarGenerationMix, coalGenerationMix]
};

const ciResponse: Array<CarbonIntensityRegion> = [
    yorkshireRegion,
    northScotlandRegion
];

export function fetchCIData(): Promise<CarbonIntensityResponse> {
    return Axios.get<CarbonIntensityResponse>('http://localhost:8080/all')
        .then(response => response.data)
        .catch((response) => {
            throw new Error(response);
        });
}

export async function fetchAllRegions(): Promise<CarbonIntensityRegion[]> {
    const returnedData: Array<CarbonIntensityRegion> = [];
    const carbonResponse = await fetchCIData();
    carbonResponse.regions.map(value => returnedData.push(value));
    console.log(ciResponse);
    return returnedData;
}
