import React from 'react'
import slugify from 'slugify'

export default class CustomItemsList extends React.Component {
    render() {
      const options = this.props.feature.map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(this.props.featureName)}
              checked={item.name === this.props.selected[this.props.featureName].name}
              onChange={e => this.props.updateFeature(this.props.featureName, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({this.props.USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={this.props.featureHash}>
          <legend className="feature__name">
            <h3>{this.props.featureName}</h3>
          </legend>
          {options}
        </fieldset>
      );
    }
}