import "./Nav.css";

function Nav({ action, send }) {
  function next() {
    send(action);
  }
  return (
    <nav className="navbar__container">
      <button className="button__back">Back</button>
      <button onClick={next} className="button__next">
        START
      </button>
    </nav>
  );
}

export default Nav;
