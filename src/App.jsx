// import "./App.css";
import { useEffect, useState } from "react";
import Weather from "./containers/Dispaly";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notify from "./utils/Notify";
function App() {
  const [online, setOnline] = useState(undefined);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOnline);
  });
  const handleOnline = () => {
    setOnline(navigator.onLine);
  };
  useEffect(() => {
    if (online == true) {
      toast("back online");

      Notify("سلام  کوچولو");
    }

    if (online == false) {
      toast("offline");
    }
  }, [online]);
  return (
    <>
      <Weather />
    </>
  );
}

export default App;
