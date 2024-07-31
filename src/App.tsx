import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import "./App.css";
import { login, register } from "./state/user/userSlice";
import { useRef } from "react";

function App() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const enteredEmail = useRef<HTMLInputElement>(null);
  const enteredPassword = useRef<HTMLInputElement>(null);
  const enteredName = useRef<HTMLInputElement>(null);
  const enteredAge = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = enteredEmail.current!.value;
    const password = enteredPassword.current!.value;
    const name = enteredName.current!.value;
    const age = enteredAge.current!.value;
    dispatch(
      register({ email, password, name, age: Number(age), isLogged: true })
    );
  };

  if (!user.isLogged) {
    return (
      <main>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="name" ref={enteredName} />
          <input type="text" placeholder="email" ref={enteredEmail} />
          <input type="number" placeholder="age" ref={enteredAge} />
          <input type="password" placeholder="password" ref={enteredPassword} />
          <button type="submit">Register</button>
        </form>
      </main>
    );
  }

  return <main>Wellcome again {user.name} 👋</main>;
}

export default App;
