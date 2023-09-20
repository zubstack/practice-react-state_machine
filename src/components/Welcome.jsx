import Nav from "./Nav";

function Welcome({ send }) {
  function next() {
    send("START");
  }
  return (
    <>
      <h1>Welcome to the Javascript Quiz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore
        voluptatum veritatis nemo laboriosam assumenda. Quasi consequatur,
        consequuntur totam cum illum dolore, deleniti, ab ullam quas ea
        accusantium odio quis.
      </p>
      <nav className="navbar__container">
        <button className="button__back">Back</button>
        <button onClick={next} className="button__next">
          START
        </button>
      </nav>
    </>
  );
}

export default Welcome;
