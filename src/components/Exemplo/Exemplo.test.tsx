import React from "react";
import { render } from "@testing-library/react-native";
import { Exemplo } from "../../types";
import {
  getGreeting,
  TEST_IDS,
  ACCESSIBILITY_ROLES,
  ExemploProps,
} from "../../types";

describe("Exemplo component", () => {
  const testIdContainer = TEST_IDS.container;
  const testIdText = TEST_IDS.text;
  const accessibilityRolesContainer = ACCESSIBILITY_ROLES.container;

  const defaultName: ExemploProps["name"] = "React Native + Expo";
  const expectedText = getGreeting({ name: defaultName });

  const renderComponent = () => render(<Exemplo name={defaultName} />);

  it("renderiza o componente sem crashar", () => {
    const { getByTestId } = renderComponent();
    const container = getByTestId(testIdContainer);
    expect(container).toBeDefined();
    expect(container.props.testID).toBe(testIdContainer);
  });

  it("exibe o texto correto com o nome passado", () => {
    const { getByTestId } = renderComponent();
    const text = getByTestId(testIdText);
    expect(text).toHaveTextContent(expectedText);
    expect(text.props.accessibilityLabel).toBe(expectedText);
  });

  it("tem os atributos de acessibilidade corretos", () => {
    const { getByTestId, getByLabelText } = renderComponent();
    const container = getByTestId(testIdContainer);
    const text = getByTestId(testIdText);

    expect(getByLabelText(expectedText)).toBeDefined();
    expect(container.props.accessibilityRole).toBe(accessibilityRolesContainer);
    expect(text.props.accessibilityLabel).toBe(expectedText);
  });

  describe("Estilos", () => {
    const extractStyle = (style: any) =>
      Array.isArray(style) ? Object.assign({}, ...style) : style || {};

    it("aplica estilos no container", () => {
      const { getByTestId } = renderComponent();
      const containerStyle = extractStyle(
        getByTestId(testIdContainer).props.style
      );

      expect(containerStyle).toMatchObject({
        padding: 16,
        backgroundColor: "#F0F0F0",
        borderRadius: 8,
        alignItems: "center",
      });
    });

    it("aplica estilos no texto", () => {
      const { getByTestId } = renderComponent();
      const textStyle = extractStyle(getByTestId(testIdText).props.style);

      expect(textStyle).toMatchObject({
        color: "#333333",
        fontSize: 18,
        fontWeight: "bold",
      });
    });
  });
});
