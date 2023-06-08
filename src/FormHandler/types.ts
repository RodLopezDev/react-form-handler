import { PropsWithChildren } from "react";
import { FieldValues, UseFormProps } from "react-hook-form";

import { SubmitWithMethods } from "../types/form-types";

export interface FormHandlerProps<T extends FieldValues>
  extends PropsWithChildren {
  config: UseFormProps<T>;
  onSubmit?: SubmitWithMethods<T>;
  styles?: { form?: React.CSSProperties };
}
