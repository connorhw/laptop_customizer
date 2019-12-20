import React, {Component} from 'react';
import SummaryOptions from '../SummaryOptions/SummaryOptions';


class Summary extends Component{
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
            return (            
                <SummaryOptions 
                 feature = {feature}
                 featureHash = {featureHash}
                 selectedOption = {selectedOption}
                />
            );
        });
          return summary;
    } 
}

export default Summary;


/*

<div className="summary__option" key={featureHash}>
    <div className="summary__option__label">{feature} </div>
    <div className="summary__option__value">{selectedOption.name}</div>
    <div className="summary__option__cost">
        {USCurrencyFormat.format(selectedOption.cost)}
    </div>
</div>

*/