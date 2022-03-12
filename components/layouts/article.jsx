import Head from "next/head";
const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        {title === "Not Found" ? (
          <title>{title}</title>
        ) : (
          <title>{title} - Gerber Colindres</title>
        )}
      </Head>
      {children}
    </div>
  );
};

export default Layout;
