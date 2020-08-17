export interface CarbonIntensityResponse {
    region : string,
    intensityLevel : IntensityLevelEnum,
    generationMix : GenerationMixEnum[]
}

export interface IntensityLevelEnum {
    forecast : number,
    index : string
}

export interface GenerationMixEnum {
    fuel : string,
    percentage : number
}

