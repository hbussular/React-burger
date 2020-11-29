# LawVR

## Instruções para executar o projeto


Instale as dependências do projeto utilizando o seguinte comando:
```
$ npm install
```

Depois edite o arquivo `.env` e preencha as seguintes variáveis:
```
REACT_APP_HG_KEY=
REACT_APP_GMAPS_KEY=
```

- **REACT_APP_HG_KEY:** Chave da API que retorna os dados do clima 
- **REACT_APP_GMAPS_KEY:** Chave da API que renderiza o mapa

Por fim, execute o comando abaixo para executar a aplicação:
```
$ npm run dev
```

## APIs


- HGWeather - https://hgbrasil.com/status/weather
- Google Maps - https://developers.google.com/maps/documentation/javascript/overview


## Pendências técnicas

- Atualmente o projeto utiliza a API nativa dos browsers para obtenção da geolocalização do usuário, todavia essa funcionalidade não é perfeita, pois se a aplicação for utilizada em um computador doméstico, possívelmente as coordenadas serão próximas a central do serviço de internet, enquanto no celular, essa funcionalidade tenda a funcionar melhor, pois o próprio sinal sai do celular.

## Melhorias

- Sobrescrever o pedido caso alguma tela volte.
- Evitar que a API de clima seja chamada durante a movimentacao do mapa.
- Enviar um popup para solicitar a habilitacao do GPS no computador.
- Se possivel, capturar o endereco do cara.