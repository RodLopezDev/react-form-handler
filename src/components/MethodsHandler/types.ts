import { FieldValues, UseFormReturn } from "react-hook-form";

export interface MethodsHandlerProps<T extends FieldValues = FieldValues> {
  render: (p: UseFormReturn<T>) => JSX.Element;
}
