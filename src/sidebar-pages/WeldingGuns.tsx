import { useTranslation } from "react-i18next";
import NextButton from "../components/NextButton";
import { getJsxFromString } from "../utils/MainUtils";

const WeldingGuns = () => {
  const { t } = useTranslation();

  return (
    <div className='welding-guns'>
      {getJsxFromString('welding-p1', t)}
      {getJsxFromString('welding-p2', t)}
      {getJsxFromString('welding-p3', t)}
      {getJsxFromString('welding-p4', t)}
      {getJsxFromString('welding-p5', t)}
      {getJsxFromString('welding-p6', t)}
      {getJsxFromString('welding-p7', t)}
      <NextButton />
    </div >
  );
};

export default WeldingGuns;