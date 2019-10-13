import React from "react";
import CartItem from "./CartItem";

export default class CartList extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];

      return (
        <CartItem
          featureHash={featureHash}
          selectedOption={selectedOption}
          feature={feature}
          USCurrencyFormat={this.props.USCurrencyFormat}
        />
      );
    });

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}
