import { PropsWithChildren } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface DependencyImplementationContext<T extends FieldValues> {
  data: T;
  methods: UseFormReturn<T>;
  currentValue: any;
}

export type Dependencies<
  T extends FieldValues = FieldValues,
  TName extends Path<T> = Path<T>
> = Record<TName, (ctx: DependencyImplementationContext<T>) => void>;

export interface DependenciesProviderProps<T extends FieldValues = FieldValues>
  extends PropsWithChildren {
  dependencies: Partial<Dependencies<T>>;
}
