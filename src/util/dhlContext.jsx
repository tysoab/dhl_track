import { createContext } from "react";

const dhlContent = createContext({
  dropdown: false,
  trackNumber: null,
  handleUserInput: () => {},
  toggleDropdown: () => {},
  // handlerTrackingNumber: () => {},
});

export default dhlContent;
