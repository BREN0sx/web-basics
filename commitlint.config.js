module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'scope-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'feat',  //  adicionar novos recursos
        'fix',  //  corrigir bugs
        'build', // Mudanças para construir ferramentas ou dependências externas, como webpack, npm
        'chore', // Outras modificações que não modificam src ou test, como mudanças no processo de compilação ou ferramentas auxiliares
        'ci', // Mudanças relacionadas ao CI (Serviço de Integração Contínua)
        'docs', // Mudou apenas o conteúdo relacionado ao documento
        'style', // Alterações que não afetam o significado do código, como remover espaços, alterar indentação, adicionar e remover ponto e vírgula
        'perf', // Mudanças para melhorar o desempenho
        'refactor', // Ao refatorar o código, use
        'revert', // Execute a mensagem impressa por git revert
        'test', // Adicionar testes ou modificar testes existentes
      ],
    ],
  },
}
