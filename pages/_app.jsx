import { ChakraProvider } from "@chakra-ui/react";
import Main from "../components/layouts/main";

const App = ({ Component, pageProps, title }) => {
  return (
    <ChakraProvider>
      <Main title={title}>
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
};

export default App;
