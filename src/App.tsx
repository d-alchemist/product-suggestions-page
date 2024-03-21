import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./style/theme";
import Home from "./pages";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
