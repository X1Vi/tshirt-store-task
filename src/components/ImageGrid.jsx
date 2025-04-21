import React, {useContext} from "react";
import { AppContext } from "../App";
const images = [
  "photo-1521572163474-6864f9cf17ab.avif",
  "photo-1562157873-818bc0726f68.avif",
  "photo-1576566588028-4147f3842f27.avif",
  "photo-1583744946564-b52ac1c389c8.avif",
  "photo-1593726891090-b4c6bc09c819.avif",
  "photo-1604508230015-5a54faf1fa56.avif",
  "photo-1618354691438-25bc04584c23.avif",
  "photo-1622351772377-c3dda74beb03.avif",
  "photo-1622445275463-afa2ab738c34.avif",
  "photo-1622470953794-aa9c70b0fb9d.avif",
  "photo-1627225924765-552d49cf47ad.avif",
  "premium_photo-1664475948484-b85aa42cb7ab.avif",
  "premium_photo-1670088464876-e1fa625c8697.avif",
  "premium_photo-1673356301514-2cad91907f74.avif",
  "premium_photo-1682092846845-d41a89d3ce8b.avif"
];

const ImageGrid = () => {
  const {setCurrentImage, currentImage, PAGES, currentPage, setCurrentPage} = useContext(AppContext);
  // Inline styles for the grid container
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // 5 columns
    gridGap: "0",
    width: "100%",
    maxWidth: "1800px",
    margin: "0 auto",
    overflow: "hidden"
  };

  // Inline styles for each image
  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

  return (
    <div style={gridStyle}>
      {images.map((image, index) => (
        <img
          onClick={() => setCurrentPage(PAGES.PRODUCT_INFORMATION_PAGE)}
          key={index}
          src={`/images/${image}`} // Referencing the public folder directly
          alt={`Image ${index + 1}`}
          style={imgStyle} // Applying inline styles to each image
        />
      ))}
    </div>
  );
};

export default ImageGrid;
