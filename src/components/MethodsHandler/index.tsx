import { FieldValues, useFormContext } from "react-hook-form";
import { MethodsHandlerProps } from "./types";

const MethodsHandler = <T extends FieldValues = FieldValues>({
  render,
}: MethodsHandlerProps<T>): JSX.Element => {
  const methods = useFormContext<T>();

  return <>{render(methods)}</>;
};
export default MethodsHandler;
