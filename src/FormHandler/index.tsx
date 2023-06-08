import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormHandlerProps } from "./types";
import { BaseSyntheticEvent } from "react";

const FormHandler = <T extends FieldValues = FieldValues>(
  props: FormHandlerProps<T>
) => {
  const { children, config, onSubmit, styles } = props;
  const methods = useForm<T>(config);

  const middlewareSubmit = () => {
    methods.handleSubmit(
      (data: T, event?: BaseSyntheticEvent) =>
        onSubmit && onSubmit(data, methods, event)
    );
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={middlewareSubmit}
        style={styles?.form || { display: "contents" }}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormHandler;
