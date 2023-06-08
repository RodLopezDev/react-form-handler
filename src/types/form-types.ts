import { BaseSyntheticEvent } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export type SubmitWithMethods<T extends FieldValues = FieldValues> = (
  data: T,
  methods: UseFormReturn<T>,
  e?: BaseSyntheticEvent
) => void | Promise<unknown>;
