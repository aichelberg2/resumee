import { useTranslation } from "react-i18next";
import NextButton from "../components/NextButton";
import { getJsxFromString } from "../utils/MainUtils";

const CooperativeUniversity = () => {
  const { t } = useTranslation();
  return (
    <div className='cooperative-university'>
      {getJsxFromString("dhbw-p1", t)}
      {getJsxFromString("dhbw-p2", t)}
      {getJsxFromString("dhbw-p3", t)}
      {getJsxFromString("dhbw-p4", t)}
      {getJsxFromString("dhbw-p5", t)}
      <NextButton />
    </div >
  );
};

export default CooperativeUniversity;