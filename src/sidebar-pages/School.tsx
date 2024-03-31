import { useTranslation } from "react-i18next";
import { getImageFromSource, getJsxFromString } from "../utils/MainUtils";
import NextButton from "../components/NextButton";

const School = () => {
  const { t } = useTranslation();
  return (
    <div className='school'>
      {getJsxFromString('school-p1', t)}
      {getJsxFromString('school-p2', t)}
      {getJsxFromString('school-p3', t)}
      {getImageFromSource('sia-base.jpg')}
      {getJsxFromString('school-p4', t)}
      {getJsxFromString('school-p5', t)}
      <NextButton />
    </div >
  );
};

export default School;