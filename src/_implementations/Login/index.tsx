import LoginForm from "./LoginForm";
import FormHandler from "../../components/FormHandler";
import FieldHandler from "../../components/FieldHandler";
import MethodsHandler from "../../components/MethodsHandler";

const Login = () => {
  return (
    <FormHandler<LoginForm>
      config={{ defaultValues: { user: "", password: "" } }}
      onSubmit={(data, methods) => {
        console.log(methods);
      }}
      dependencies={{
        user: (ctx) => {
          console.log(ctx.currentValue);
        },
        password: (ctx) => {
          console.log(ctx.data);
        },
      }}
    >
      <FieldHandler<LoginForm>
        name="user"
        render={(controller) => <input {...controller.field} />}
      />
      <br />
      <FieldHandler<LoginForm>
        name="password"
        render={(controller) => <input {...controller.field} />}
      />
      <br />
      <MethodsHandler<LoginForm>
        render={(form) => {
          const action = () => {
            const values = form.getValues();
            console.log(values, "values");

            form.setValue("user", "HOLA");
            form.trigger("user");
          };
          return (
            <button type="button" onClick={action}>
              Validate some
            </button>
          );
        }}
      />
      <MethodsHandler
        render={(form) => {
          return <button type="submit">Log In</button>;
        }}
      />
    </FormHandler>
  );
};

export default Login;
