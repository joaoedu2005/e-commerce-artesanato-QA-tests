# Arquitetura do Sistema e Estratégia de QA 🏗️

Este documento descreve a infraestrutura técnica da plataforma e como os processos de garantia de qualidade foram integrados ao ciclo de vida de desenvolvimento (SDLC).

## 🧩 Visão Geral da Stack
A plataforma foi construída seguindo uma arquitetura moderna e escalável:

- **Frontend:** Next.js (App Router) com Tailwind CSS para uma UI responsiva.
- **Backend:** API Routes (Next.js) lidando com a lógica de negócio e integrações.
- **Banco de Dados:** MongoDB (NoSQL) para persistência de dados de produtos, usuários e pedidos.
- **Autenticação:** Sistema de autenticação baseado em JWT/Cookies seguros.
- **Pagamentos:** Integração com Gateway de pagamento Infinite Pay para processamento de PIX e Cartão.

---

## 🛠️ Arquitetura de Testes (QA Infrastructure)

Minha estratégia foi desenhada para cobrir diferentes camadas da aplicação, garantindo o máximo de **ROI (Retorno sobre Investimento)**. Utilizei a estratégia de Quadrantes do livro Agile Testing, de Lisa Crispin e Janet Gregory.

### 1. Testes de API e Integração (Postman/Insomnia)
Antes da validação da UI, utilizei ferramentas de cliente API para:
- Validar contratos de resposta (JSON) entre o backend e o frontend.
- Testar fluxos de autenticação e permissões de Admin.
- Garantir que as operações de CRUD no banco de dados MongoDB refletissem os dados corretos.

### 2. Automação de Interface (Cypress E2E)
A automação foi focada no "Caminho Crítico" do usuário:
- **Fluxo de Checkout:** Login ➡️ Seleção de Produto ➡️ Carrinho ➡️ Handover de Pagamento.
- **Fluxo de Cadastro:** Acessar página ➡️ Preencher Informações ➡️ Login.
- **Fluxo de Cadastro de Produto:** Login com credenciais Admin ➡️ Seleção da aba de Produtos ➡️ Preencher todos as informações do produto ➡️ Cadastrar Produto.
- **Resiliência:** Implementação de esperas dinâmicas para evitar testes frágeis (flakiness) causados por elementos assíncronos da UI.

### 3. Validação de Dados (Database Testing)
Como o sistema lida com comissões de venda (10% para a plataforma), realizei testes manuais e automatizados diretamente na camada de dados para garantir:
- Integridade dos cálculos financeiros.
- Persistência correta de estados de pedidos (Pendente, Pago, Enviado).

---

## 🌐 Ambiente de Testes
Para garantir a fidelidade dos resultados sem afetar a produção:
- **Environment:** Staging (Ambiente de homologação idêntico à produção).
- **HTTPS:** Configuração de túneis seguros para testes de integração local/remoto.
- **Massa de Dados:** Utilização de dados mockados, utilização de UUIDs e bancos de teste isolados no MongoDB Compass. Após os testes com k6, todos os "dados de teste" foram limpos do banco de dados utilizando uma query para apagar todos os dados com domínio "@testeperformance.com.br".

---


