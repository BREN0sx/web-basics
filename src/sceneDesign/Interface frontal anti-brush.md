Anti escova frontal:

* Interface antivibração, carregamento.
* O front-end usa captcha.
* Nos front-ends e back-ends, os parâmetros da solicitação são assinados e criptografados, como um carimbo de data/hora, e se expirarem, eles se tornarão inválidos.
* Front-end: limite o número de solicitações de ip de origem. Limite o número de solicitações de ip da origem da solicitação.

Anti-escovagem posterior:
* Solicitar verificação de cabeçalho:
    * O número de solicitações de ip de origem é limitado. Limite o número de solicitações de ip da origem da solicitação.
    * Verificação do agente do usuário, o cabeçalho do agente do usuário contém uma string característica, que é usada para permitir que a extremidade do protocolo de rede identifique o tipo de aplicativo, sistema operacional, desenvolvedor de software e número da versão do software do agente do usuário que iniciou o solicitar. Por exemplo: Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0
    * Limite de frequência do referenciador
    * Limite de referência
* Registre o endereço IP da outra parte no LocalStorage Considerando que a mesma empresa e comunidade podem usar o mesmo IP, é conveniente limitar o sorteio repetido do mesmo IP.
* Front-end e back-end, parâmetros de solicitação são assinados e criptografados.