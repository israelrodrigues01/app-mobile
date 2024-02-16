# App-Mobile
## Banco de Dados

```mermaid
    erDiagram
        Users ||--o{ Spaces: tem
        Spaces ||--o{ Tasks: possui
        Tasks }o--o| Priorities: tem
        Tasks }|--|| Status: tem
        Tasks }o--o{ Tags: tem

        Users{
            int id pk
            string name
            string email UK
            string password
            string path_image "NULL"
            tinyInt situation "0/1 - Inativo ou Ativo, Default: 1"
            datatime created_at
            datatime updated_at
        }

        Spaces{
            int id PK
            bigInt id_user FK
            string name
            file path_image "NULL"
            tinyInt situation "0/1 - Inativo ou Ativo, Default: 1"
            datatime created_at
            datatime updated_at
        }

        Tasks{
            int id PK
            bigInt id_space FK
            bigInt id_priority FK
            bigInt id_status FK
            string name
            text description "NULL"
            tinyInt situation "0/1 - Inativo ou Ativo, Default: 1"
            datatime created_at
            datatime updated_at
        }

        Priorities{
            int id PK
            string name
            string color "Cor em Hexadecimal, Default: #ddd"
            tinyInt situation "0/1 - Inativo ou Ativo, Default: 1"
            datatime created_at
            datatime updated_at
        }

        Status{
            int id PK
            string name
            string color "Cor em Hexadecimal, Default: #ddd"
            tinyInt type "0 - A fazer, 1 - Em andamento, 2 - Concluída"
            boolean default "false/true - Se true, priodade default da tarefa"
            tinyInt situation "0/1 - Inativo ou Ativo, Default: 1"
            datatime created_at
            datatime updated_at
        }
        
        Tags{
            int id PK
            string name
            string color "Cor em Hexadecimal, Default: #ddd"
            tinyInt situation "0/1 - Inativo ou Ativo, Default: 1"
            datatime created_at
            datatime updated_at
        }
```


## Configuração do Ambiente

1. Clone este repositório em sua máquina usando o seguinte comando:
```bash
git clone https://github.com/israelrodrigues01/app-mobile.git
```

2. Entre no repositório clonado
```bash
cd app-mobile/
```

3. Instale todas as dependências e modulos iniciais pelo terminal do projeto
```bash
npm install
```

4. O projeto está usando o Expo como forma de simular o sistema, para acessar via celular adicione no terminal
```bash
npm run dev
```
* Para isso é necessário instalar o [app da Expo (Expo Go)](https://docs.expo.dev/get-started/expo-go/) na sua loja de aplicativos

5. Caso queira visualizar via web
```bash
npm run web
```

6. Após rodar o comando anteriror pela primeira vez vai gerar um erro, não se preocupe, rode no terminal este comando e tente novamente o item anterior
```bash
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```
* Para ter uma melhor experiência baixe a [extensão Mobile Simulator](https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk?pli=1) que simula celulares na web