import { useEffect, useState } from 'react';
import { fetchAllRegions } from '../api/fetchCIData';
import { CarbonResponseState } from '../interfaces/CarbonResponseState';
import { CarbonIntensityRegion } from '../interfaces/CarbonIntensityRegion';

export const useCarbonResponseStateHook = () => {

    const initialValue : CarbonResponseState = {
        loaded: false,
        allRegionData: [],
        selectedRegion: null
    };

    const [state, setState] = useState(initialValue);
    const [regionNames, setRegionNames] = useState(['']);
    const { loaded } = state;

    function handleRegionChange(requestedRegion : string) {
        if(state.selectedRegion?.shortname !== requestedRegion) {
            setState((state: CarbonResponseState) => ({ ...state, selectedRegion: filterRegion(requestedRegion) }));
        }
    }

    function filterRegion(regionName : string) : CarbonIntensityRegion {
        const filteredRegion = state.allRegionData.filter(value => value.shortname === regionName);
        return filteredRegion[0];
    }

    // useEffect(() => {
    //     // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    //     (async () => {
    //         try {
    //             const regionsApi = await fetchAllRegions();
    //             if (regionsApi)  {
    //                 setState((state: CarbonResponseState) => ({
    //                     ...state,
    //                     allRegionData: regionsApi,
    //                     loaded: true
    //                 }));
    //             }
    //         } catch (error) {
    //             throw new Error(error);
    //         }
    //     })();
    // },[]);

};
