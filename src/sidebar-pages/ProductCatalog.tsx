import { useTranslation } from "react-i18next";
import NextButton from "../components/NextButton";
import { getJsxFromString } from "../utils/MainUtils";

const ProductCatalog = () => {
  const { t } = useTranslation();

  return (
    <div className='product-catalog'>
      {getJsxFromString('catalog-p1', t)}
      {getJsxFromString('catalog-p2', t)}
      {getJsxFromString('catalog-p3', t)}
      {getJsxFromString('catalog-p4', t)}
      {getJsxFromString('catalog-p5', t)}
      {getJsxFromString('catalog-p6', t)}
      {getJsxFromString('catalog-p7', t)}
      {getJsxFromString('catalog-p8', t)}
      <NextButton />
    </div >
  );
};

export default ProductCatalog;