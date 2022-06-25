import React from 'react';
import BarcodeCard from './BarcodeCard';
import { Grid, Row, Cell } from 'react-inline-grid';

export default class Page extends React.Component {
  render() {
    const cells = this.props.products.map((product, index) => {
      return (
        <Cell is="3 tablet-4 phone-6">
          <BarcodeCard product={product}/>
        </Cell>
      );
    });

    return (
      <Grid>
        <Row>
          {cells}
        </Row>
      </Grid>
    );
  }
}
