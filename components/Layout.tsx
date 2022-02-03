import Head from "next/head";
import { VFC } from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export const Layout: VFC<Props> = (props) => {
  const { children, title = "Home" } = props;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex justify-center items-center w-screen bg-black text-white h-20">
        header
      </header>
      <main className="text-gray-800 w-screen flex h-screen justify-center items-center">
        {children}
      </main>
      <footer className="flex justify-center items-center py-6 bg-black text-white">
        niihara megumu
      </footer>
    </>
  );
};
