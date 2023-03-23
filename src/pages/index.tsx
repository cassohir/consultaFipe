import Head from "next/head";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { HomeContainer  } from "../styles/pages/home";
import {  SearchCarProvider } from "../contexts/SearchFIPE";
import { Form } from "../components/Form";
import {  useState } from "react";
import Result from "../components/Result";
import { ResultProps } from "../contexts/interface";


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 3, spacing: 48
    }});

  const [resultado, setResultado] = useState<ResultProps>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const setFipeResult = (resultado: ResultProps) => {
    setResultado(resultado);
    setIsLoaded(true);
  }

  return (

      <SearchCarProvider>
        <Head>
          <title>Consulta Tabela FIPE</title>
        </Head>
        <HomeContainer ref={sliderRef} className="keen-slider">
          { !isLoaded ? (
            <Form onDataChanged={setFipeResult} />
            ) : (
            <Result {...resultado} />
          )}  
        </HomeContainer>
      </SearchCarProvider>
  );
}

