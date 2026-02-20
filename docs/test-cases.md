# Casos de Teste e Resultados de Execução 📊

Este documento detalha a execução de alguns dos 44 casos de teste realizados na plataforma. Os testes foram divididos em **Manuais**, **Exploratórios** e **Automatizados**. Para visualização completa dos resultados da Test Run Exploratória: https://docs.google.com/spreadsheets/d/1Cg1vVmAZxv3IDoTOcTfXnu84G5i3EFJku1e4HbSMwSM/edit?usp=sharing 

---

## 🔐 01. Autenticação e Segurança


| ID | Título | Status | Observações Técnicas |
| :--- | :--- | :--- | :--- |
| **C38** | Verificação HTTPS | ✅ Passed | Validado via Cypress em ambiente de staging. |
| **C57** | Cadastro bem-sucedido | ✅ Auto Passed | Fluxo E2E automatizado com Cypress. |
| **C59** | Validação de e-mail | ❌ **Failed** | O sistema permite múltiplos cadastros com o mesmo e-mail. Risco de duplicidade no banco. |
| **C60** | Login de Admin | ✅ Auto Passed | Automação garantindo acesso ao painel administrativo. |
| **C62** | Bloqueio de conta | ❌ **Failed** | Ausência de política de lockout. Vulnerabilidade a ataques de força bruta. |

---

## 🛒 02. Fluxo de Checkout e Pedidos (Caminho Crítico)


| ID | Título | Status | Observações Técnicas |
| :--- | :--- | :--- | :--- |
| **C40** | Adição de produto único | ✅ Passed | Validado comportamento do carrinho e persistência local. |
| **C43** | Exibição do subtotal | ✅ Passed | Cálculos de soma de itens validados com sucesso. |
| **C82** | Pedido via PIX | ⚠️ **Blocked** | Funcionalidade bloqueada na UI durante os testes (Sandbox/Gateway). |
| **C86** | Pedido - Estado Pendente | ✅ Passed | Validada a transição de estado no MongoDB para `pending_payment`. |

---

## 📦 03. Gestão de Produtos e Perfil


| ID | Título | Status | Observações Técnicas |
| :--- | :--- | :--- | :--- |
| **C45** | Navegação por categoria | ✅ Passed | Filtros funcionais via Select nativo. |
| **C47** | Exibição de produtos | ✅ Passed | Bug visual identificado: Ausência do link "Mais Detalhes". |
| **C49** | Aprovação de Produto | ⚠️ **N/A** | Funcionalidade inexistente no sistema atual; Admin cria diretamente. |
| **C53** | Perfil: Dados Ausentes | ❌ **Failed** | Erro de validação: O sistema não obriga campos biográficos na criação. |

---

## 📱 04. Responsividade

| ID | Título | Status | Observações Técnicas |
| :--- | :--- | :--- | :--- |
| **C54** | Multi-dispositivos | ✅ Passed | Testado em Viewports de iPhone 13 e Desktop. |
| **C55** | Orientação Vertical | ✅ Passed | Layout fluido sem quebra de componentes. |

---

### 🛡️ Notas
Durante a execução, priorizei a rastreabilidade. Os casos marcados como `Auto Passed` possuem scripts correspondentes no diretório `evidence/automation`. Os casos `Failed` foram documentados como defeitos de negócio para futura correção. 