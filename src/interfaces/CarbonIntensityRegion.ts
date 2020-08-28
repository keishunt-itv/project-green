export interface CarbonIntensityResponse {
  regions: CarbonIntensityRegion[];
}

export interface CarbonIntensityRegion {
  region: string;
  intensity: IntensityLevelEnum;
  generationmix: GenerationMixEnum[];
}

export interface IntensityLevelEnum {
  forecast: number;
  index: string;
}

export interface GenerationMixEnum {
  fuel: string;
  perc: number;
}
