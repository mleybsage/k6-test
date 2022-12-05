import http from 'k6/http';
import { sleep } from 'k6';
import { Trend } from 'k6/metrics';

// 1. init context code
// - example: global variables
const customMetric = new Trend('customMetricExample');

export function setup() {
  // 2. setup code
  return { name: "Example data object" };
}

export default function (data) {
  // 3. VU code
  console.log(JSON.stringify(data));
  http.get('https://test.k6.io');
  sleep(1);
  customTrend.add(1);
}

export function teardown(data) {
  // 4. teardown code
  console.log(JSON.stringify(data));
}
