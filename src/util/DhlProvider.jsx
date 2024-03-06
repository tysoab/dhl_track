import { useContext, useState } from "react";
import dhlContent from "./dhlContext";

export default function DhlProvider({ children }) {
  const [dropdown, setDropdown] = useState(false);
  const [trackNumber, setTrackNumber] = useState(null);

  function toggleDropdown() {
    setDropdown((dropdown) => !dropdown);
  }

  function handleUserInput(input) {
    setTrackNumber((number) => input);
  }

  const dhlData = {
    dropdown,
    trackNumber,
    toggleDropdown,
    handleUserInput,
  };
  return <dhlContent.Provider value={dhlData}>{children}</dhlContent.Provider>;
}
