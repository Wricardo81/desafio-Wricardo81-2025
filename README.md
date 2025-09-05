# 🐾 Desafio Abrigo de Animais

Este projeto faz parte de um desafio técnico com foco em **lógica de programação em JavaScript** e utilização de **testes automatizados com Jest**.  

O objetivo é organizar um **abrigo de animais**, determinando quais pessoas podem adotar cada animal de acordo com regras específicas.

---

## ✨ Atualizações realizadas

- Implementação completa do método `encontraPessoas` em `abrigo-animais.js`, contendo toda a lógica do desafio.  
- Adição de **novos testes automatizados** em `abrigo-animais.test.js` para cobrir todos os casos de regras descritas.  
- Validações extras para garantir integridade da entrada:  
  - **Animal inválido ou duplicado**  
  - **Brinquedo inválido ou duplicado**  
- Organização da saída final no formato definido:  
  ```js
  { lista: ['NomeAnimal - pessoa X', 'NomeAnimal - abrigo'] }
  ---
🧠 Como foi implementado
Estrutura principal
A classe AbrigoAnimais centraliza toda a lógica do desafio.

O método encontraPessoas recebe três parâmetros:

Lista de brinquedos da pessoa 1
Lista de brinquedos da pessoa 2
Ordem em que os animais devem ser considerados

Regras implementadas
O animal vai para a pessoa que mostrar todos seus brinquedos favoritos na ordem desejada.
É permitido intercalar outros brinquedos, desde que a ordem seja respeitada.
Gatos não dividem seus brinquedos (se os dois puderem adotar, o gato fica no abrigo).
Se ambos atenderem os requisitos para um cão → ele fica no abrigo.
Cada pesoa pode adotar no máximo 3 animais.
O jabuti Loco não exige ordem específica, mas só sai do abrigo se tiver outro animal como companhia.
---
Saída
Lista em ordem alfabética dos animais e o destino (pessoa 1, pessoa 2 ou abrigo).

Caso inválido → retorna:
js
Copiar código
{ erro: 'Animal inválido' }

ou

js
Copiar código
{ erro: 'Brinquedo inválido' }
---
✅ Casos de teste implementados
Além dos testes fornecidos, foram adicionados cenários extras para aumentar a confiabilidade:
Animal inválido
Brinquedo inválido
Brinquedo duplicado
Gato não divide brinquedos
Cão disputado por ambos → fica no abrigo
Limite de 3 animais por pessoa
Regra especial do jabuti Loco

Os testes foram escritos utilizando Jest e podem ser executados com:
bash
Copiar código
npm test
---
📂 Estrutura do projeto
bash
Copiar código
.
├── src/
│   └── abrigo-animais.js   # Classe principal com a lógica
├── abrigo-animais.test.js  # Testes automatizados com Jest
├── package.json            # Configuração do projeto
├── jest.config.js          # Configuração do Jest
---
📌 Entrega
Repositório público no GitHub.

Nome do repositório: desafio-Wricardo81-2025

👨‍💻 Autor: Wildson Ricardo
📅 Ano: 2025
