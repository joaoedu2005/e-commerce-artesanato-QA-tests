# Plano de Testes - Plataforma E-commerce

## 1. Abordagem de Teste (Agile Testing Quadrants)
Baseado na metodologia de Lisa Crispin e Janet Gregory, dividi os testes em:

- **Quadrante 1 (Tecnológico/Suporte ao Time):** Testes unitários e de integração de API para garantir que o contrato entre Next.js e MongoDB fosse respeitado.
- **Quadrante 2 (Negócio/Suporte ao Time):** Validação de User Stories e fluxos funcionais de checkout e cadastro.
- **Quadrante 3 (Negócio/Crítica ao Produto):** Testes exploratórios manuais focados na usabilidade de cada tipo de usuário.
- **Quadrante 4 (Tecnológico/Crítica ao Produto):** Testes não funcionais com k6 (Smoke, Performance e Carga).

## 2. Escopo de Automação (ROI)
Decidi automatizar o fluxo de Checkout (Login -> Carrinho -> Pagamento) por ser o processo de maior risco financeiro. Também automatizei os fluxos de Login e Cadastro por se tratar de uma tarefa exaustiva. 
* **Ferramenta:** Cypress.
* **Técnica:** Esperas dinâmicas para lidar com overlays de UI (Toastr), Utilização de UUIDs para automatização e randomização de dados como email, IDs e nomes.

## 3. Critérios de Aceite (Definição de Pronto)
- 100% dos 44 casos de teste no TestRail executados.
- Fluxo de Checkout automatizado passando em ambiente de staging.
- Latência de API abaixo de 2s sob carga normal.
- 100% de aprovação (status code 200/201) em todas as requisições de API em testes de performance e carga.