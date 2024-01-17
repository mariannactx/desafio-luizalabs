# Desafio Luizalabs

Para executar o servidor e deixá-lo disponível em `http://localhost:3000`:
```
$ npm start
```

Para converter um arquivo de texto desnormalizado em json normalizado:
```
$ curl --location 'localhost:3000/convert' \
--header 'Content-Type: text/plain' \
--data 'caminho/para/o/arquivo.txt'
```