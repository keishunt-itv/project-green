import * as React from 'react';
import { ReactElement } from 'react';
import PieChart, { HoverStyle, Legend, Series, Tooltip } from 'devextreme-react/pie-chart';
import { CarbonIntensityRegion } from '../../interfaces/CarbonIntensityRegion';

export function DonutChart({ region }: { region: CarbonIntensityRegion }) : ReactElement {
    function customizeTooltip(arg) : any {
        return {
            text: `${arg.argument} - ${arg.valueText}%`
        };
    }
    return (
        <PieChart
            id="pie"
            type="doughnut"
            palette="Soft Pastel"
            title={`Fuel Mix for ${region.region}`}
            dataSource={region.generationMix}
        >
            <Series argumentField="fuel" valueField="perc">
                <HoverStyle color="#ffd700" />
            </Series>
            <Legend
                horizontalAlignment="right"
                verticalAlignment="top"
            />
            <Tooltip enabled customizeTooltip={customizeTooltip} />
        </PieChart>
    );
}
