import React from 'react';

export default class MobileProductImageThumbnail extends React.Component {
  render() {
    const { productId, extension } = this.props;

    return (
      <img
        src={`http://www.famousfootwear.com/productimages/shoes_ib${productId}.${extension}?trim.threshold=105&width=236&height=236&anchor=bottomcenter&paddingWidth=8`} />
    );
  }
}
