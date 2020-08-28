import React, { useEffect, useState } from 'react';
import { fetchAllRegions } from '../api/fetchCIData';
import { CarbonResponseState } from '../interfaces/CarbonResponseState';
import { CarbonIntensityRegion } from '../interfaces/CarbonIntensityRegion';
import { ciResponse, mockRegionNames } from '../mocks/MockCarbonResponse';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCarbonResponseStateHook = () => {
    const initialRegionData : CarbonIntensityRegion[] = ciResponse;
    const [regionData, setRegionData] = useState(initialRegionData);
    const [regName, setRegion] = useState('');
    const initialValue : CarbonResponseState = {
        loaded: false,
        allRegionData: regionData,
        selectedRegion: null
    };
    const [state, setState] = useState(initialValue);
    const [regionNames, setRegionNames] = useState(['']);
    const { loaded } = state;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function handleRegionChange(requestedRegion : string) {
        if(state.selectedRegion?.region !== requestedRegion) {
            setState((carbonResponseState: CarbonResponseState) => ({ ...carbonResponseState, selectedRegion: filterRegion(requestedRegion) }));
        }
    }

    function filterRegion(regionName : string) : CarbonIntensityRegion {
        const filteredRegion = state.allRegionData.filter(value => value.region === regionName);
        return filteredRegion[0];
    }

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        (async () => {
            try {
                const regionsApi = await fetchAllRegions();
                if (regionsApi)  {
                    setState((carbonResponseState: CarbonResponseState) => ({
                        ...carbonResponseState,
                        allRegionData: regionsApi,
                        loaded: true
                    }));
                    const newRegions : Array<string> = regionsApi.map(( { region }) => region);
                    setRegionNames(newRegions);
                    setRegionData(regionsApi);
                }
            } catch (error) {
                setRegionNames(mockRegionNames);
                throw new Error(error);
            }
        })();
    },[]);

    return {
        regionData,
        regionNames,
        regName,
        setRegion,
        handleRegionChange
    }
};