import Axios from 'axios';
import {
    CarbonIntensityRegion,
    CarbonIntensityResponse
} from '../interfaces/CarbonIntensityRegion';

export function fetchCIData(): Promise<CarbonIntensityResponse> {
    return Axios.get<CarbonIntensityResponse>('http://localhost:8080/all')
        .then(response => response.data)
        .catch((response) => {
            throw new Error(response);
        });
}

export async function fetchAllRegions(): Promise<CarbonIntensityRegion[]> {
    let returnedData : CarbonIntensityRegion[] = [];
    const carbonResponse = await fetchCIData();
    returnedData = carbonResponse.regions;
    return returnedData;
}
