import { useEffect, useState } from "react";
import { ResultContainer, ResultContainerWrapper } from "../styles/pages/result";

interface Props {
  marca: string;
  modelo: string;
  ano: string;
  valor: string;
}

export default function Result({ marca, modelo, ano, valor }: Props) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (marca && modelo && ano) {
      setIsLoaded(true);
    }
  }, [marca, modelo, ano, valor]);

  return (
    <ResultContainerWrapper>
      <ResultContainer>
        {isLoaded ? (
          <>
            <h1>Tabela Fipe: Preço {marca} {modelo} {ano} </h1>
            <span>{valor}</span>
            <p>Este é o preço de compra do veículo</p>
          </>
        ) : (
          <p>Carregando...</p>
        )}
      </ResultContainer>
    </ResultContainerWrapper>
  );
}



