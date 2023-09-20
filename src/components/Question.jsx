function Question({ send, number, questions }) {
  const lastQuestion = number === questions.length;
  const action = lastQuestion ? "FINISH" : "CONITNUE";
  function next() {
    console.log("continue");
    send(action);
  }
  return (
    <>
      <h3>Question #{number}: How are you?</h3>
      <ul>
        <li>Nice </li>
        <li>Nice </li>
        <li>Nice </li>
      </ul>
      <nav className="navbar__container">
        <button className="button__back">Back</button>
        <button onClick={next} className="button__next">
          START
        </button>
      </nav>
    </>
  );
}

export default Question;
