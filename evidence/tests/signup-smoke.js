import https from 'k6/http';
import { check, sleep } from 'k6';
import uuid from './libs/uuid.js'
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/latest/dist/bundle.js'

export function handleSummary(data) {
  return {
    'summary.html': htmlReport(data),
  }
}

export const options = {
    vus: 1,
    duration: '1m',
    thresholds: {
        http_req_duration: ['p(95)<2000'], //95% das requisicoes devem responder em até 2s
        http_req_failed: ['rate<0.01'] // no maximo 1% das requisicoes podem falhar
    }
}

export default function () {
    const url = 'https://localhost:3000/api/auth/registro'

    const payload = JSON.stringify({ nome: 'João Eduardo k6', email: `${uuid.v4().substring(24)}@qa.testperformance.com.br`, senha: 'pwd123', telefone: '88993519649' })

    const headers = {
        'headers': {
            'Content-Type': 'application/json'
        }
    }

    const res = https.post(url, payload, headers);

    console.log(res.body)

    check(res, {
        'status should be 200': (r) => r.status === 200
    })

    sleep(1);
}