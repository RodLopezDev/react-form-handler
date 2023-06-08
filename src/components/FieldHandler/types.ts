import { FieldValues, Path, UseControllerReturn } from "react-hook-form";

export interface FieldHandlerProps<
  TFieldValues extends FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> {
  name: TName;
  render: (
    controller: UseControllerReturn<TFieldValues, TName>
  ) => React.ReactElement;
}
