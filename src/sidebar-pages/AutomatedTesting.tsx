import { useTranslation } from "react-i18next";
import NextButton from "../components/NextButton";
import { getJsxFromString } from "../utils/MainUtils";

const AutomatedTesting = () => {
  const { t } = useTranslation();

  return (
    <div className='automated-testing'>
      {getJsxFromString('testing-p1', t)}
      {getJsxFromString('testing-p2', t)}
      {getJsxFromString('testing-p3', t)}
      {getJsxFromString('testing-p4', t)}
      {getJsxFromString('testing-p5', t)}
      {getJsxFromString('testing-p6', t)}
      {getJsxFromString('testing-p7', t)}
      <NextButton />
    </div >
  );
};

export default AutomatedTesting;