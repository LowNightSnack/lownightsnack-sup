import { useSelector, useDispatch } from "react-redux";
import Overlay from "./common/Overlay";
import Warning from "./Warning";
import Error from "./Error";
import { removeError, removeWarning } from "../redux/actions";

const ErrorOverlay = () => {
  const errors = useSelector((state) => state.client.errors);
  const warnings = useSelector((state) => state.client.warnings);
  const dispatch = useDispatch();
  return (
    <Overlay className="flex flex-col items-center">
      {warnings.map((warning, index) => (
        <Warning key={index} onDismiss={() => dispatch(removeWarning(warning))}>
          {warning}
        </Warning>
      ))}
      {errors.map((error, index) => (
        <Error key={index} onDismiss={() => dispatch(removeError(error))}>
          {error}
        </Error>
      ))}
    </Overlay>
  );
};

export default ErrorOverlay;
