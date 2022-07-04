
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { fireEvent, render, screen } from "../../test-utils";
import Cita from "./Cita";

describe("Test del componente Cita" , () => {

    let component;

    beforeEach(() => {
        component = render(<Cita />)
    })
    
    
    test("Probar que el componente renderice", () => {
        expect(screen.queryByText("Bart")).toBeDefined();
    })  

    test("Probar que al buscar una cita, aparezca que está cargando", async () => {
        const button = screen.getByTestId("botonCita");
        fireEvent.click(button);
        expect(screen.getByText("CARGANDO...")).toBeInTheDocument();
    })

    test("Probar que busque bien una cita y luego la borre", async () => {
        const button = screen.getByTestId("botonCita");
        fireEvent.click(button);
        expect( await screen.findByText("Nelson Muntz")).toBeInTheDocument()
        const borrarButton = screen.getByTestId("borrar");
        fireEvent.click(borrarButton);
        expect(screen.findByText("No se encontró ninguna cita"))
    })

    test("probar buscando por algun nombre", async () => {
        const input = screen.getByTestId("inputCita")
        const button = screen.getByTestId("botonCita")
        fireEvent.change(input, {target: {value: "Homer"}})
        fireEvent.click(button);
        expect( await screen.findByText("Homer Simpson")).toBeInTheDocument()
    })

})