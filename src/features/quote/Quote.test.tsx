
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { render, screen } from "../../test-utils";
import Cita from "./Cita";

describe("Test del componente Cita" , () => {
    
    
    test("Probar que el componente renderice", () => {
        render(<Provider store={store}> <Cita /> </Provider>)
        expect(screen.queryByText("Bart")).toBeDefined();
    })  

})