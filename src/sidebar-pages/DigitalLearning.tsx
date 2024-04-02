import { useTranslation } from "react-i18next";
import NextButton from "../components/NextButton";
import { getJsxFromString } from "../utils/MainUtils";

const DigitalLearning = () => {
  const { t } = useTranslation();

  return (
    <div className='digital-learning'>
      {getJsxFromString('didactic-p1', t)}
      {getJsxFromString('didactic-p2', t)}
      {getJsxFromString('didactic-p3', t)}
      {getJsxFromString('didactic-p4', t)}
      <NextButton />
    </div >
  );
};

export default DigitalLearning;