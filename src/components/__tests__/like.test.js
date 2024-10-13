import { render, screen, fireEvent } from "@testing-library/react";
import Like from "../like";

describe("Componente Like", () => {
  test('Muestra "Likes: 0" por defecto', () => {
    render(<Like />);
    const paragraphElement = screen.getByText(/Likes: 0/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("Incrementa el número de likes al hacer clic en el botón Like", () => {
    render(<Like />);
    const incrementButton = screen.getByText("Like");
    fireEvent.click(incrementButton);
    const paragraphElement = screen.getByText(/Likes: 1/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test("Decrementa el número de likes al hacer clic en el botón Dislike", () => {
    render(<Like />);
    const decrementButton = screen.getByText("Dislike");
    fireEvent.click(decrementButton);
    const paragraphElement = screen.getByText(/Likes: -1/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
