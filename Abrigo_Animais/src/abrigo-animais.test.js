import { AbrigoAnimais } from "./abrigo-animais";

describe('Abrigo de Animais', () => {
  test('Deve rejeitar animal inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado.erro).toBe('Animal inválido');
    expect(resultado.lista).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
    expect(resultado.lista).toContain('Fofo - abrigo');
    expect(resultado.lista).toContain('Rex - pessoa 1');
    expect(resultado.lista.length).toBe(2);
    expect(resultado.erro).toBeFalsy();
  });

  test('Deve encontrar pessoa para um animal intercalando brinquedos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas(
      'BOLA,LASER', 'BOLA,NOVELO,RATO,LASER', 'Mimi,Fofo,Rex,Bola'
    );
    expect(resultado.lista).toContain('Bola - abrigo');
    expect(resultado.lista).toContain('Fofo - pessoa 2');
    expect(resultado.lista).toContain('Mimi - abrigo');
    expect(resultado.lista).toContain('Rex - abrigo');
    expect(resultado.lista.length).toBe(4);
    expect(resultado.erro).toBeFalsy();
  });

  // ATUALIZADO COM NOVOS TESTES

  test('Deve rejeitar brinquedo inválido', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,PS5', 'RATO,BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Deve rejeitar brinquedo duplicado', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,RATO', 'BOLA', 'Rex');
    expect(resultado.erro).toBe('Brinquedo inválido');
  });

  test('Se ambos conseguem adotar um cão, ele fica no abrigo', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA', 'RATO,BOLA', 'Rex');
    expect(resultado.lista).toContain('Rex - abrigo');
  });

  test('Um gato só pode ir para uma pessoa se apenas ela atender os requisitos', () => {
    const resultado = new AbrigoAnimais().encontraPessoas('BOLA,LASER', 'BOLA,LASER', 'Mimi');
    expect(resultado.lista).toContain('Mimi - abrigo'); // não pode dividir
  });

  test('Uma pessoa não pode levar mais de três animais', () => {
    const ordem = 'Rex,Mimi,Fofo,Zero,Bola,Bebe';
    const resultado = new AbrigoAnimais().encontraPessoas(
      'RATO,BOLA,LASER,CAIXA,NOVELO', 'LASER,RATO,BOLA', ordem
    );
    const adotadosP1 = resultado.lista.filter(e => e.endsWith('pessoa 1'));
    expect(adotadosP1.length).toBeLessThanOrEqual(3);
  });

  test('Loco só pode sair se houver outro animal adotado', () => {
    // sozinho -> fica no abrigo
    let resultado = new AbrigoAnimais().encontraPessoas('SKATE,RATO', 'SKATE,RATO', 'Loco');
    expect(resultado.lista).toContain('Loco - abrigo');

    // com outro animal -> pode sair
    resultado = new AbrigoAnimais().encontraPessoas('RATO,BOLA,SKATE', 'LASER,NOVELO', 'Rex,Loco');
    expect(resultado.lista).toContain('Loco - pessoa 1');
  });
});