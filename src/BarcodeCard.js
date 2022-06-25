import React from 'react';
import Barcode from 'react-barcode';
import { Card, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import MobileProductImageThumbnail from './MobileProductImageThumbnail';

export default class BarcodeCard extends React.Component {
  render() {
    const { product } = this.props;
    const imageProductId = product.altProductId === '' ? product.productId : product.altProductId;
    const extension = product.altExtension === '' ? 'jpg' : 'gif';

    return (
      <Card style={{width: '280px'}}>
        <CardMedia style={{padding: '16px'}}>
          <MobileProductImageThumbnail
            productId={imageProductId}
            extension={extension} />
        </CardMedia>
        <CardTitle title={product.productId} subtitle={product.description}/>
        <CardText>
          <Barcode value={product.upc} format="CODE128" />
        </CardText>
      </Card>
    );
  }
}
