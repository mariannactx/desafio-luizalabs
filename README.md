# Desafio Luizalabs

## Executar servidor
Para executar o servidor e deixá-lo disponível em `http://localhost:3000`:
```
$ npm start
```

## Endpoints

A API tem 3 endpoints
- Converter arquivo
- Filtrar por id do pedido
- Filtrar por intervalo de datas

### Converter
- Para converter um arquivo de texto desnormalizado em json normalizado:

POST localhost:3000/convert
```
$ curl --location 'localhost:3000/convert' \
--header 'Content-Type: text/plain' \
--data 'caminho/para/o/arquivo.txt'
```

### Filtrar

#### Filtrar por id do pedido
Para filtrar por id do pedido um arquivo desnormalizado e receber um json normalizado filtrado (pedido de id `123`, por exemplo):

POST localhost:3000/filter?orderId=[id do pedido]
```
curl --location 'localhost:3000/filter?orderId=123' \
--header 'Content-Type: text/plain' \
--data 'caminho/para/o/arquivo.txt'
```
#### Filtrar por intervalo de data de compra
Para filtrar por intervalo de data de compra um arquivo desnormalizado e receber um json normalizado filtrado (data de compra entre `2021-03-01` e `2021-03-04`, por exemplo):

POST localhost:3000/filter?beginDate=[data inicio]&endDate=[data final]
```
curl --location 'localhost:3000/filter?beginDate=2021-03-01&endDate=2021-03-04' \
--header 'Content-Type: text/plain' \
--data 'caminho/para/o/arquivo.txt'
```
