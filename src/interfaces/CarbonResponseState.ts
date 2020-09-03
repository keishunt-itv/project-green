import { CarbonIntensityRegion } from './CarbonIntensityRegion';

export interface CarbonResponseState {
    loaded : boolean,
    allRegionData : CarbonIntensityRegion[],
    selectedRegion : CarbonIntensityRegion
}

