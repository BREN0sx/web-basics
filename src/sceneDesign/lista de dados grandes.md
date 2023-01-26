### 【Design de cena】

Como projetar rolagem suave e carregamento da lista de big data, a operação de deslizar para baixo e depois para cima, como alterar e carregar dados entre os intervalos de buffer superior e inferior.

### Princípio de implementação da lista virtual:

Ao ouvir onScroll e o deslocamento da barra de rolagem da tabela, uma quantidade apropriada de dados parciais é selecionada para renderizar o conteúdo da área visível.

Através da área de altura fixa da lista, e defina a altura fixa de cada coluna, calcule qual dado corresponde à área onde a barra de rolagem fica naquele momento, e reserve buffer suficiente para renderizar os dados.

A quantidade de dados deixada na área do buffer, 50% dos dados na parte superior e 50% dos dados na parte inferior.

### Os dados aceitos pela janela de reação

* A altura do contêiner, usada para calcular quantos itens cada exibição pode exibir
* A altura de cada item - usada para calcular a altura final, em qual item a barra de rolagem fica
* número de itens - usado para calcular a altura final da lista virtual, para definir o tamanho da barra de rolagem