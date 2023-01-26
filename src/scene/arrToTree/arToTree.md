Converta uma matriz em uma árvore. Depois de escrever, pergunte como expandir a função se quiser adicionar ou excluir nós na árvore

extensão de função

Adicione um parâmetro de objeto e o valor padrão do parâmetro é um objeto vazio, conforme a seguir.

{
    deleteNodeArr: [],
    addNodeArr: []
}
Verifique se a propriedade do objeto tem um valor e se é um array.

Se for para excluir um nó, antes da matriz ser convertida em uma árvore, o nó é excluído da matriz original e, em seguida, o nó original é convertido em uma árvore.

Se for para adicionar um nó, ele será adicionado diretamente após a matriz original e, em seguida, a operação de conversão da árvore será executada.