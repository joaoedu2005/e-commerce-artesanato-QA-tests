# Artisan Management Platform - QA Showcase 🛡️

Este repositório documenta a estratégia e execução de Quality Assurance para uma plataforma privada de e-commerce e gestão de artesanato. O foco aqui é demonstrar a aplicação de metodologias ágeis de teste para garantir o ROI e a estabilidade financeira do negócio. Nesse projeto eu utilizei a metodologia de Quadrantes do livro da Lisa Crispin e Janet Gregory: "Agile Testing - a pratical guide for testers and agile teams".

## 🚀 Contexto do Projeto
O projeto possui dois tipos de Usuários: Clientes e Administradores. A plataforma permite que Admins gerenciem produtos, usuários, pedidos e até mesmo artesãos. Já no lado do Cliente, funciona de maneira mais simples; o usuário pode se cadastrar, logar, navegar no perfil, escolher produtos, filtrar produtos, avaliar produtos, favoritar, etc. Como QA, minha prioridade foi assegurar que o "Caminho Crítico" (Checkout e Receita) fosse impecável.

## 🛠️ Stack de Testes
- **Gestão de Testes:** TestRail (44 casos de teste)
- **Automação E2E:** Cypress
- **API Testing:** Insomnia / Postman
- **Performance/Carga:** k6
- **Banco de Dados:** MongoDB (Validação de persistência)

## 🎬 Evidências de Automação (Cypress)

Nesta seção, apresento a execução dos testes de ponta a ponta (E2E) no "Caminho Crítico". Para garantir a estabilidade, utilizei seletores resilientes e esperas dinâmicas para lidar com elementos assíncronos da interface.

### 💳 Fluxo de Checkout Completo
![Demonstração do Checkout](./evidence/cypress/videos/Checkout.cy.ts.mp4)
*Descrição: O teste automatiza desde o login do usuário, seleção de produto, adição ao carrinho até o redirecionamento para o gateway de pagamento.*

### 🔐 Cadastro e Autenticação
![Demonstração de Auth](./evidence/cypress/videos/Auth.cy.ts.mp4)
*Descrição: Validação de fluxos de sucesso para criação de conta e acesso ao painel administrativo.*

### 🔐 Criação de Produto
![Demonstração de Auth](./evidence/cypress/videos/CreateProduct.cy.ts.mp4)
*Descrição: Validação da criação de um produto preenchendo inúmeros campos (tem que estar logado com uma conta de nível Admin).*


## 🎯 Destaques da Estratégia
- **Automação de Caminho Crítico:** Foco em Login, Cadastro e Checkout para reduzir o tempo de regressão manual.
- **Resiliência:** Testes de "Sad Path" para falhas de pagamento e indisponibilidade de API.
- **Performance as Code:** Testes de carga simulando picos de tráfego sazonais.
- **Testes Manuais:** Testes manuais, funcionais, exploratórios todos documentados na ferramenta TestRail.

Todas as informações sobre os testes de performance com Grafana k6 estão no caminho "evidence/tests" e/ou "evidence/k6".

