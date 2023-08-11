# My Bank API

A "My Bank API" é uma API simples para gerenciamento de contas bancárias, permitindo visualizar, cadastrar, atualizar e deletar contas.

## Rotas

1. **Listar Todas as Contas**

    Endpoint: `GET /account`

    Esta rota traz uma lista de todas as contas cadastradas.

    Exemplo de retorno de sucesso (status 200):
    ```json
    {
        "accounts": [
            {
                "id": 1,
                "name": "Usuário 1",
                "balance": "742.34"
            },
            {
                "id": 2,
                "name": "Usuário 2",
                "balance": "3000.00"
            },
            {
                "id": 3,
                "name": "Usuário 3",
                "balance": "10000.00"
            }
        ]
    }
    ```

    Exemplo de retorno de erro (status 500):
    ```json
    {
        "error": "Ocorreu um erro ao processar a solicitação."
    }
    ```

2. **Visualizar uma Conta por ID**

    Endpoint: `GET /account/:id`

    Parâmetros:
    - `id` (numérico) - ID da conta a ser visualizada.

    Esta rota traz os detalhes de uma única conta referente ao ID passado.

    Exemplo de retorno de sucesso (status 200):
    ```json
    {
        "id": 1,
        "name": "Usuário 1",
        "balance": "742.34"
    }
    ```

    Exemplo de retorno de erro (status 404):
    ```json
    {
        "error": "Registro não encontrado."
    }
    ```

    Exemplo de retorno de erro (status 500):
    ```json
    {
        "error": "Ocorreu um erro ao processar a solicitação."
    }
    ```

3. **Cadastrar uma Nova Conta**

    Endpoint: `POST /account`

    Parâmetros no Corpo da Requisição:
    - `name` (string) - Nome do titular da conta.
    - `balance` (numérico) - Saldo da conta.

    Esta rota permite cadastrar uma nova conta com o nome e saldo fornecidos no corpo da requisição. Ela retorna os dados cadastrados juntamente com o ID gerado para a conta.

    Exemplo de corpo de requisição:
    ```json
    {
        "name": "Novo Usuário",
        "balance": 3500.00
    }
    ```

    Exemplo de retorno de sucesso (status 201):
    ```json
    {
        "id": 4,
        "name": "Novo Usuário",
        "balance": "3500.00"
    }
    ```

    Exemplo de retorno de erro (status 500):
    ```json
    {
        "error": "Ocorreu um erro ao processar a solicitação."
    }
    ```

4. **Atualizar uma Conta**

    Endpoint: `PUT /account`

    Parâmetros no Corpo da Requisição:
    - `id` (numérico) - ID da conta a ser atualizada.
    - `name` (string) - Novo nome do titular da conta.
    - `balance` (numérico) - Novo saldo da conta.

    Esta rota permite atualizar os dados de uma conta existente com base no ID fornecido no corpo da requisição. Ela retorna os dados atualizados juntamente com o ID da conta.

    Exemplo de corpo de requisição:
    ```json
    {
        "id": 1,
        "name": "Usuário Atualizado",
        "balance": 7210.95
    }
    ```

    Exemplo de retorno de sucesso (status 200):
    ```json
    {
        "id": 1,
        "name": "Usuário Atualizado",
        "balance": "7210.95"
    }
    ```

    Exemplo de retorno de erro (status 404):
    ```json
    {
        "error": "Registro não encontrado."
    }
    ```

    Exemplo de retorno de erro (status 500):
    ```json
    {
        "error": "Ocorreu um erro ao processar a solicitação."
    }
    ```

5. **Atualizar o Saldo de uma Conta**

    Endpoint: `PATCH /account/updateBalance`

    Parâmetros no Corpo da Requisição:
    - `id` (numérico) - ID da conta a ter o saldo atualizado.
    - `balance` (numérico) - Novo saldo da conta.

    Esta rota permite atualizar apenas o saldo de uma conta existente com base no ID fornecido no corpo da requisição. Ela retorna os dados atualizados juntamente com o ID da conta.

    
    Exemplo de corpo de requisição:
    ```json
    {
        "id": 2,
        "balance": 6130.40
    }
    ```

    Exemplo de retorno de sucesso (status 200):
    ```json
    {
        "id": 2,
        "name": "Usuário 2",
        "balance": "6130.40"
    }
    ```

    Exemplo de retorno de erro (status 404):
    ```json
    {
        "error": "Registro não encontrado."
    }
    ```

    Exemplo de retorno de erro (status 500):
    ```json
    {
        "error": "Ocorreu um erro ao processar a solicitação."
    }
    ```

6. **Deletar uma Conta**

    Endpoint: `DELETE /account/:id`

    Parâmetros:
    - `id` (numérico) - ID da conta a ser deletada.

    Esta rota permite deletar a conta referente ao ID passado e não retorna nenhum dado.

    Exemplo de retorno de sucesso (status 200):
    ```json
    {
        "sucesso": true
    }
    ```

    Exemplo de retorno de erro (status 404):
    ```json
    {
        "error": "Registro não encontrado."
    }
    ```

    Exemplo de retorno de erro (status 500):
    ```json
    {
        "error": "Ocorreu um erro ao processar a solicitação."
    }
    ```


## Instalação

1. Clone este repositório.
2. Navegue até o diretório do projeto no terminal.
3. Execute `npm install` para instalar as dependências.

## Uso

1. Inicie o servidor: `npm start`
2. Acesse as rotas da API conforme descrito acima.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).