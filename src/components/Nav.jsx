import "./Nav.css";

function Nav({ action, send }) {
  const isQuestion = action === "CONTINUE" || action === "FINISH";

  function next() {
    send(action);
  }
  function exit() {
    send("EXIT");
  }
  return (
    <nav className="navbar__container">
      <button
        onClick={exit}
        className={isQuestion ? "button__exit" : "button__exit--hidden"}
      >
        EXIT
      </button>
      <button onClick={next} className="button__next">
        {action}
      </button>
    </nav>
  );
}

export default Nav;
