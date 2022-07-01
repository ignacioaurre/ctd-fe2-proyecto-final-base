import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
// import styles from "./styles.module.css";
import BioContainer from "../../Components/BioContainer";
import ButtonContainer from "../../Components/ButtonContainer";
import Button from "../../Components/Button";
import Image from "../../Components/Image";
import H3 from "../../Components/H3";
import Description from "../../Components/Description";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <Button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={bioActiva.id === nombre ? true : false}
      >
        {nombre}
      </Button>
    ));
  };

  return (
    <BioContainer>
      <ButtonContainer>{crearBotones()}</ButtonContainer>
      <div>
        <div>
          <Image
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <H3> {bioActiva.nombre} </H3>
          <Description >{bioActiva.descripcion}</Description>
        </div>
      </div>
    </BioContainer>
  );
};

export default Bio;
