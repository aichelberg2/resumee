import { useTranslation } from "react-i18next";
import { getJsxFromString } from "../utils/MainUtils";

const Switzerland = () => {
  const { t } = useTranslation();
  return (
    <div className='switzerland'>
      {getJsxFromString('switzerland-p1', t)}
      {getJsxFromString('switzerland-p2', t)}
      {getJsxFromString('switzerland-p3', t)}
      {getJsxFromString('switzerland-p4', t)}
      <div className="centered">
        <a className='custom-link' href="mailto:christian@gappel.com">
          christian@gappel.com
        </a>
      </div>
      {getJsxFromString('switzerland-p5', t)}
      <div className="centered">
        <a className='custom-link' href="https://github.com/aichelberg2/resumee/">
          Github Repository
        </a>
        <br />
        <a className='custom-link' href="https://app.spline.design/file/32ad7084-9459-4f49-b0b1-8003c4c84ab1">
          Spline Map
        </a>
      </div>
      {getJsxFromString('switzerland-p6', t)}
      <div className="centered">
        <a className='custom-link' href="https://www.spline.design/">
          www.spline.design
        </a>
      </div >
      {getJsxFromString('switzerland-p7', t)}
    </div >
  );
};

export default Switzerland;