import { useContext } from "react";
import { MyContext } from "../App";

function About() {
  const context = useContext(MyContext);

  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
        <p>Message from context is: {context.count}</p>
        <button onClick={() => context.action()}>Try from props</button>
      </main>
    </>
  );
}

export default About;
