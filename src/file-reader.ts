// import fs = require('fs');

// fs.readFile('./stocks/idfc.txt', (error, data) => {
//     console.log(data.toString());
// });


import axios from 'axios';

import { getStocksData } from './stocks';

async function exec() {
    const data = await getStocksData('SBIN');
    console.log(data);
}

exec();
