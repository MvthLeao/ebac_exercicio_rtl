import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '../index';

describe('Teste para o componente PostComment', () => {
    test('Realizar a inserção de dois comentários na aplicação', () => {
        render(<PostComments/>);
    
        const caixaDeTexto = screen.getByRole("textbox");

        //ADICIONANDO MENSAGEM 01 E ANALISANDO SE ESTÁ NA APLICAÇÃO
        fireEvent.change(caixaDeTexto, {
            target: {value: "ADICIONANDO MENSAGEM 01"},
        });
        expect(caixaDeTexto).toHaveValue("ADICIONANDO MENSAGEM 01");

        const submitButton = screen.getByRole("button")
        
        fireEvent.click(submitButton);
        expect(screen.getByText("ADICIONANDO MENSAGEM 01")).toBeInTheDocument();

        //ADICIONANDO MENSAGEM 02 E ANALISANDO SE ESTÁ NA APLICAÇÃO
        fireEvent.change(caixaDeTexto, {
            target: {value: "ADICIONANDO MENSAGEM 02"},
        });
        expect(caixaDeTexto).toHaveValue("ADICIONANDO MENSAGEM 02");

        fireEvent.click(submitButton);
        expect(screen.getByText("ADICIONANDO MENSAGEM 02")).toBeInTheDocument();

        // VERIFICANDO SE AMBAS AS MENSAGENS SE MANTÉM NA APLICAÇÃO
        expect(screen.getAllByTestId("post-comment")).toHaveLength(2)
    });
});