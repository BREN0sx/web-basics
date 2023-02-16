## Começo rápido

### Índice

```js
├── .vscode
│   ├── launch.json // Depurar código js no vscode
├── src
│   ├── js // Núcleo básico js
│   └── scene // As perguntas reais da cena de combate de Dachang incluem perguntas de cena e perguntas de algoritmo
│   ├── interview // Perguntas de combinação de entrevista Dachang
│   └── example // Exemplo é usado para o navegador abrir html para depuração
```
### Encontre o arquivo de código correspondente e comece a aprender

## Executar código

### Executar código de teste - plug-in VSCode - Code Runner

Instale o plug-in [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner), clique com o botão direito do mouse em `executar código` para executar o código de teste no editor e visualizar a saída resultados.

`Code Runner` É realmente fácil de usar, mas a desvantagem é que não pode ser depurado com pontos de interrupção.

### Depuração de ponto de interrupção

### Como depurar código no Vscode

1. Modifique o endereço de referência em `.vscode/launch.json`
2. Coloque um ponto de interrupção (o ponto vermelho mostrado na captura de tela)
3. Clique na opção de depuração à direita para depurar o código no vscode para iniciar a depuração do código do arquivo js correspondente
4. A saída está no console de depuração abaixo, com variáveis ​​à direita.

### Depuração do navegador: use o arquivo html para referenciar o código js

Forneça um arquivo html: `/src/example/index.html`, consulte o arquivo js normalmente, digite `debugger` no código e depure o código no navegador.
