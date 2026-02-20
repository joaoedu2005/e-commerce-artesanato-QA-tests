# Análise de Performance e Testes de Carga (k6) 🚀

Este documento detalha os testes não funcionais realizados nas rotas de Cadastro e Autenticação. Como Engenheiro de Software focado em Qualidade, utilizei o framework **k6** para validar se a infraestrutura suporta a carga esperada sem comprometer a experiência do usuário.

## 🎯 Configuração de Thresholds (SLAs)
Defini critérios de aceitação rigorosos baseados em padrões de mercado para e-commerce:

```javascript
thresholds: {
    http_req_duration: ['p(95)<2000'], // 95% das requisições devem responder em até 2s
    http_req_failed: ['rate<0.01']     // No máximo 1% das requisições podem falhar
}

📊 Resultados da Execução
Os dados abaixo foram extraídos do relatório gerado após o estresse dos endpoints de backend.

Métrica	                Valor Obtido	           Status
Total de Requisições	80	-
Requisições Falhas	    0 (0%)	                ✅ Passed
Tempo Médio (AVG)	    2948.99 ms	            ⚠️ Acima do esperado
Percentil 90 (p90)	    6696.43 ms	            ❌ Breached
Percentil 95 (p95)	    6738.07 ms	            ❌ Breached
```

🛡️ Recomendações de Melhoria
Para alinhar a performance aos objetivos de negócio, as seguintes ações foram propostas:

Otimização de Queries: Revisar índices no MongoDB para operações de busca e inserção.

Filas de Mensageria: Tornar processos secundários (como disparos de e-mail) assíncronos.

Escalabilidade Vertical/Horizontal: Avaliar o upgrade do tier do MongoDB Compass para suportar mais conexões simultâneas.

- Todas as evidências e scripts usados estão na pasta "evidence/tests".

- Para lidar com a massa de dados utilizei a biblioteca de UUIDs que simulam dados (principalmente emails)

- Após todos os testes não funcionais, limpei o banco de dados utilizando uma query para apagar toda a massa de dados de teste (emails com domínio "@testperformance.com.br"). 