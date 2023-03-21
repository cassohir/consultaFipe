import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from "../assets/logo_fundo_branco.svg";
import Image from "next/future/image";
import { Container, Header } from "../styles/pages/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} width={150} height={150} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
