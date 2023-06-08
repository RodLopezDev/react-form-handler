import {
  FieldValues,
  Path,
  useController,
  useFormContext,
} from "react-hook-form";

import { FieldHandlerProps } from "./types";

const FieldHandler = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>(
  props: FieldHandlerProps<TFieldValues, TName>
) => {
  const { name, render } = props;
  const methods = useFormContext<TFieldValues>();
  const { control } = methods;

  const controller = useController<TFieldValues, TName>({ name, control });
  // const {
  //   field: { onChange, onBlur, value },
  //   field,
  //   fieldState,
  //   formState,
  // } = controller;

  return render(controller);
};

export default FieldHandler;
