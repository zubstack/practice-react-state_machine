import Nav from "./Nav";

function Results({ send }) {
  return (
    <>
      <h2>Results:</h2>
      <ul>
        <li>Goods:2</li>
        <li>Bads:2</li>
        <li>Not awsered:2</li>
      </ul>
      <Nav send={send} action={"RETRY"} />
    </>
  );
}

export default Results;
