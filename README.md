# Schedule UFU - Documentação do Projeto

## Visão Geral

O **Schedule UFU** é um sistema web para gerenciamento de reservas de espaços esportivos da Universidade Federal de Uberlândia. O projeto foi desenvolvido em Angular, utilizando Tailwind CSS e o Design System do GOVBR, com foco em usabilidade, organização e escalabilidade.

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

## Estrutura de Pastas

### src/app/core/components

Componentes reutilizáveis e especializados:

- **dropdownn/**: Dropdown customizado para seleção em formulários.
- **select-filter/**: Dropdown para filtros rápidos em tabelas/listas.
- **schedule-form/**: Formulário principal de agendamento, com suporte a recorrência.
- **table/**: Tabela para exibição de reservas, com botões de ação (reservar, editar).
- **table-users/**: Tabela para gestão de usuários (nome, matrícula, email, tipo, ações).
- **table-espacos/**: Tabela para gestão de espaços esportivos (nome, campus, horários, disponibilidade, ações).
- **datapicker/**: Componente para seleção de datas e horários.
- **slider/**: Componente de slider para seleção de valores numéricos (ex: antecedência de agendamento).

### src/app/core/models

Interfaces e tipos utilizados em toda a aplicação:

- **Option.ts**: Interface para opções de dropdowns.
- **Reserva.ts**: Interface para reservas/agendamentos.
- **User.ts**: Interface para usuários do sistema.
- **Ginasio.ts**: Interface para espaços esportivos.

### src/app/core/pages

Páginas principais do sistema:

- **schedule/**: Página principal de reservas, exibe tabela de horários e permite abrir o formulário de agendamento.
- **userschdeules/**: Página "Minhas Reservas", exibe reservas do usuário e permite edição/cancelamento.
- **configuration/**: Página de configurações administrativas (gestão de reservas, espaços, permissões).

### src/app/core/routes

- **app.routes.ts**: Definição das rotas principais do sistema.

### src/app/core/services

- **schedule-time.service.ts**: Serviço para comunicação entre componentes (ex: abrir modal de agendamento).

### src/app/core/shared

Componentes compartilhados entre páginas:

- **header/**: Cabeçalho do sistema, exibe logo, nome do sistema e usuário logado.
- **footer/**: Rodapé do sistema, exibe informações institucionais.
- **menu/**: Menu lateral de navegação entre páginas principais.

---

## Outras Pastas

### src/assets

- Imagens, ícones e arquivos estáticos.

### src/styles.css

- Estilos globais e importação do Tailwind CSS.

---

## Observações e Boas Práticas

- Cada componente Angular está organizado em sua própria pasta, contendo arquivos `.ts`, `.html`, `.css` e `.spec.ts` (testes).
- Os componentes são reutilizáveis e seguem o padrão de comunicação via `@Input` e `@Output` para integração entre eles.
- Serviços são utilizados para lógica compartilhada e comunicação entre componentes que não possuem relação direta de hierarquia.
- O projeto utiliza Tailwind CSS para estilização rápida e responsiva, além do Design System do GOVBR para padronização visual.
- O código segue boas práticas de modularização, separação de responsabilidades e uso de tipagem forte com TypeScript.

---

## Como Rodar o Projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

3. Acesse em [http://localhost:4200](http://localhost:4200)

---

## Licença

Projeto acadêmico - Universidade Federal de Uberlândia.
