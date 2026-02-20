import https from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/latest/dist/bundle.js'

export function handleSummary(data) {
  return {
    'summary.html': htmlReport(data),
  }
}


export default function() {
    const res = https.get('https://localhost:3000');

    check(res, {
        'status should be 200': (r) => r.status === 200 
    })

    sleep(1);
}