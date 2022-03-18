import { useContext } from "react";
import { MyContext } from "../App";

function SpecialBar() {
  const context = useContext(MyContext);

  return (
    <div>
      <h2>Special bar!</h2>
      <p>{context.count}</p>
    </div>
  );
}

export default SpecialBar;
