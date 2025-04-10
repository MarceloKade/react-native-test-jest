import { render, within } from "@testing-library/react-native";
import App from "./index";
import { StatusBar } from "expo-status-bar";
import { getGreeting, TEST_IDS, TEST_IDS_APP } from "../types";

describe("Integração do componente Exemplo no App", () => {
  const testName = "React Native + Expo";
  const expectedText = getGreeting({ name: testName });

  const renderApp = () => render(<App />);

  describe("Renderização do App", () => {
    it("renderiza o componente App com o Exemplo dentro sem crashar", () => {
      const { getByTestId } = renderApp();
      const container = getByTestId(TEST_IDS.container);
      expect(container).toBeDefined();
    });

    it("renderiza o texto esperado", () => {
      const { getByText } = renderApp();
      const text = getByText(expectedText);
      expect(text).toBeDefined();
    });

    it("texto está dentro do componente Exemplo", () => {
      const { getByTestId } = renderApp();
      const container = getByTestId(TEST_IDS.container);
      const scopedQueries = within(container);
      const text = scopedQueries.getByText(expectedText);
      expect(text).toBeDefined();
    });
  });

  describe("StatusBar", () => {
    it("está presente na tela com estilo 'dark'", () => {
      const { UNSAFE_getByType } = renderApp();
      const statusBar = UNSAFE_getByType(StatusBar);
      expect(statusBar).toBeDefined();
      expect(statusBar.props.style).toBe("dark");
    });
  });

  describe("Estilo do container principal", () => {
    const extractStyle = (style: any) =>
      Array.isArray(style) ? Object.assign({}, ...style) : style || {};

    it("aplica os estilos esperados", () => {
      const { getByTestId } = renderApp();
      const container = getByTestId(TEST_IDS_APP.container);
      const style = extractStyle(container.props.style);

      expect(style).toMatchObject({
        backgroundColor: "#EDEDED",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      });
    });
  });
});
