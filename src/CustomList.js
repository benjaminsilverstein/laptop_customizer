import React from "react";
import CustomListItems from "./CustomListItems";

export default class CustomItemsList extends React.Component {
  render() {
    return Object.keys(this.props.features).map((featureName, idx) => {
      const featureHash = featureName + "-" + idx;
      return (
        <CustomListItems
          selected={this.props.selected}
          USCurrencyFormat={this.props.USCurrencyFormat}
          updateFeature={this.props.updateFeature}
          featureName={featureName}
          featureHash={featureHash}
          feature={this.props.features[featureName]}
        />
      );
    });
  }
}
