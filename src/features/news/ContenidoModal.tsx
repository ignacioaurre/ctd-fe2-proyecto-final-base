import { BotonSuscribir, CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from "./styled"
import { SuscribeImage, CloseButton as Close } from "../../assets";
import { SetStateAction } from "react";

export interface IPropsContenidoModal {
    titulo: string;
    descripcion: string;
    esPremium: boolean;
    imagen: string;
    setModal: React.Dispatch<SetStateAction<any>>;
}

const ContenidoModal: React.FC<IPropsContenidoModal> = ({
    titulo, 
    descripcion, 
    esPremium, 
    imagen,  
    setModal
  }) => {

    const susTitulo =  "Suscríbete a nuestro Newsletter";
    const susDescripcion = "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."

    return (
        <ContenedorModal>
              <TarjetaModal>
                <CloseButton onClick={() => setModal(null)}>
                  <img src={Close} alt="close-button" />
                </CloseButton>
                <ImagenModal src={esPremium ? SuscribeImage : imagen} alt={esPremium ? "mr-burns-excelent" : "news-image"} />
                <CotenedorTexto>
                  <TituloModal>{esPremium ? susTitulo : titulo}</TituloModal>
                  <DescripcionModal>{esPremium ? susDescripcion : descripcion}</DescripcionModal>
                  {esPremium && <BotonSuscribir
                    onClick={() =>
                      setTimeout(() => {
                        alert("Suscripto!");
                        setModal(null);
                      }, 1000)
                    }
                  >
                    Suscríbete
                  </BotonSuscribir>}
                </CotenedorTexto>
              </TarjetaModal>
            </ContenedorModal>
    )
}

export default ContenidoModal;