import { useTranslation } from "react-i18next";
import NextButton from "../components/NextButton";
import { getJsxFromString } from "../utils/MainUtils";

const GantrySystem = () => {
  const { t } = useTranslation();
  return (
    <div className='gantry-system'>
      {getJsxFromString('gantry-p1', t)}
      {getJsxFromString('gantry-p2', t)}
      {getJsxFromString('gantry-p3', t)}
      {getJsxFromString('gantry-p4', t)}
      {getJsxFromString('gantry-p5', t)}
      {getJsxFromString('gantry-p6', t)}
      {getJsxFromString('gantry-p7', t)}
      {getJsxFromString('gantry-p8', t)}
      <NextButton />
    </div >
  );
};

export default GantrySystem;