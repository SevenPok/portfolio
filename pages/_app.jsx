import Chakra from "../components/chakra";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { GridItemStyle } from "../components/grid-item";

const App = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <GridItemStyle />
      <Layout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
};

export default App;
