import { useState } from "react";
import Screen from "./screens/Screen";

function App() {
  const [currentNote, setCurrentNote] = useState(null);

  const openEditor = (note = null) => {
    setCurrentNote(note);
  };

  const goHome = () => {
    setCurrentNote(null);
  };

  return (
    <>
      <Screen />
    </>
  );
}

export default App;
