import "./Nav.css";

function Nav({ action, send }) {
  const isQuestion = action === "CONTINUE" || "FINISH";

  function next() {
    send(action);
  }
  function exit() {
    send("EXIT");
  }
  return (
    <nav className="navbar__container">
      <button onClick={exit} className="button__exit">
        EXIT
      </button>
      <button onClick={next} className="button__next">
        START
      </button>
    </nav>
  );
}

export default Nav;
