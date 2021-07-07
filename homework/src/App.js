import WarningSign from "./Components/WarningSign";
import MyBadge from "./Components/MyBadge";
import { Container } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <Container className="mt-5">
      <WarningSign text="Please be careful" />
      <MyBadge color="primary" text="Hi from a Badge" />
    </Container>
  );
}

export default App;
