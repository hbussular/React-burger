# React Burger (Updated on 2024)


### Instruções para executar o projeto


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

### APIs

- Open Weather Map - https://openweathermap.org/current#geo
- Google Maps - https://developers.google.com/maps/documentation/javascript/overview


### Pendências técnicas

- Atualmente o projeto utiliza a API nativa dos browsers para obtenção da geolocalização do usuário, todavia essa funcionalidade não é perfeita, pois se a aplicação for utilizada em um computador doméstico possívelmente as coordenadas serão próximas a central do serviço de internet, enquanto no celular, essa funcionalidade tenda a funcionar melhor, pois o dispositivo possui GPS próprio.

### Melhorias futuras

- Capturar a rua/avenida, número, entre outras informações do usuário.


### Screenshots

![alt-text-1](screenshots/screen1.png "Tela inicial")
![alt-text-2](screenshots/screen2.png "Escolha de ingrediente - Pão")
![alt-text-3](screenshots/screen3.png "Escolha de ingrediente - Carne")
![alt-text-4](screenshots/screen4.png "Escolha de ingrediente - Molho")
![alt-text-5](screenshots/screen5.png "Escolha de ingrediente - Queijo")
![alt-text-6](screenshots/screen6.png "Localização")
![alt-text-7](screenshots/screen7.png "Confirmação")
