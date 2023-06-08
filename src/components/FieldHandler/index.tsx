import {
  Path,
  FieldValues,
  useController,
  useFormContext,
} from "react-hook-form";

import { FieldHandlerProps } from "./types";
import useDependencies from "../../core/DependenciesProvider/useDepdendencies";

const FieldHandler = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>(
  props: FieldHandlerProps<TFieldValues, TName>
) => {
  const { name, render } = props;
  const methods = useFormContext<TFieldValues>();
  const triggerDependencies = useDependencies<TFieldValues, TName>(name);

  const { control } = methods;

  const controller = useController<TFieldValues, TName>({ name, control });
  const { field } = controller;
  const { onChange, onBlur, value, ...restField } = field;

  const middlewareDependenciesOnChange =
    (callback: (...event: any[]) => void) => (e: any) => {
      const currentValue = e?.target?.value;
      triggerDependencies(currentValue);
      return callback(e);
    };

  return render({
    ...controller,
    field: {
      ...restField,
      value,
      onBlur,
      onChange: middlewareDependenciesOnChange(onChange),
    },
  });
};

export default FieldHandler;
