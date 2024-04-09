
// Test cases for NReq.js
const nreq = require('./lib/NReq');

// 1. Can your module request data from app.js with GET method?
nreq.get('http', 'localhost', 9818, '/hi');

// 2. Can your module request data from app.js with POST method?
nreq.request('POST', 'http', 'localhost', 9818, '/hi');

// 3. Can your module request data from orapiweb2.pttor.com?
const payload = {
    provinceId: 1,
    districtId: null,
    year: 2021,
    month: 2,
    pageSize: 20,
    pageIndex: 0
};
nreq.post('https', 'orapiweb2.pttor.com', '/api/oilprice/search', payload);