import Nav from "./Nav";

function Welcome({ send }) {
  return (
    <>
      <h1>Welcome to the Javascript Quiz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi labore
        voluptatum veritatis nemo laboriosam assumenda. Quasi consequatur,
        consequuntur totam cum illum dolore, deleniti, ab ullam quas ea
        accusantium odio quis.
      </p>

      <Nav send={send} action={"START"} />
    </>
  );
}

export default Welcome;
