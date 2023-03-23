import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import createEmotionCache from '../config/createEmotionCache';
import { Container, Header } from "../styles/pages/app";

const clientSideEmotionCache = createEmotionCache();
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
