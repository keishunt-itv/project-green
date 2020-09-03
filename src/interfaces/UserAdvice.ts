export enum IntensityLevel {
  VERY_HIGH = 'very high',
  HIGH = 'high',
  MODERATE = 'moderate',
  LOW = 'low',
  VERY_LOW = 'very low'
}

export interface UserAdvice {
  recommendations: string;
}
