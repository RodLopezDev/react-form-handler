import { BaseSyntheticEvent } from "react";
import { FieldValues, FormProvider, Path, useForm } from "react-hook-form";

import { FormHandlerProps } from "./types";

import { Dependencies, DependenciesProvider } from "../../core";

const FormHandler = <T extends FieldValues = FieldValues>(
  props: FormHandlerProps<T>
) => {
  const { children, config = {}, onSubmit, styles, dependencies } = props;
  const methods = useForm<T>(config);

  const middlewareSubmit = () =>
    methods.handleSubmit(
      (data: T, event?: BaseSyntheticEvent) =>
        onSubmit && onSubmit(data, methods, event)
    );

  return (
    <DependenciesProvider<T>
      dependencies={dependencies || ({} as Dependencies<T, Path<T>>)}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={middlewareSubmit()}
          style={styles?.form || { display: "contents" }}
        >
          {children}
        </form>
      </FormProvider>
    </DependenciesProvider>
  );
};

export default FormHandler;
