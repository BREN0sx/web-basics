Dadas duas palavras palavra1 e palavra2, retorne o número mínimo de operações usadas para converter palavra1 em palavra2.

Você pode executar as três operações a seguir em uma palavra:

insira um caractere
excluir um personagem
substituir um personagem

1. 

Digitar：word1 = "horse", word2 = "ros"
Saída：3
Explicação：
horse -> rorse (Vontade 'h' substituir com 'r')
rorse -> rose (Excluir 'r')
rose -> ros (Excluir 'e')

Fonte: LeetCode
Ligação：https://leetcode.cn/problems/edit-distance
Os direitos autorais pertencem à Lingkou Network. Para reimpressões comerciais, entre em contato com a autorização oficial, para reimpressões não comerciais, indique a fonte.

2. 

Digitar：word1 = "intention", word2 = "execution"
Saída：5
Explicação：
intention -> inention (Excluir 't')
inention -> enention (Vontade 'i' substituir com 'e')
enention -> exention (Vontade 'n' substituir com 'x')
exention -> exection (Vontade 'n' substituir com 'c')
exection -> execution (Inserir 'u')

tip:

0 <= word1.length, word2.length <= 500
word1 e word2 consistem em letras minúsculas do inglês