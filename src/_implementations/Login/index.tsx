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
        alert("submit");
      }}
    >
      <FieldHandler<LoginForm>
        name="user"
        render={(controller) => <input {...controller.field} />}
      />
      <FieldHandler<LoginForm>
        name="password"
        render={(controller) => <input {...controller.field} />}
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
