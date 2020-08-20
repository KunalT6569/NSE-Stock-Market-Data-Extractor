import axios from 'axios';

export const getStocksData = async (symbol: string) => {
    const data: string = await axios
        .get(`https://www1.nseindia.com/products/dynaContent/common/productsSymbolMapping.jsp?symbol=${symbol}&segmentLink=3&symbolCount=2&series=ALL&dateRange=24month&fromDate=&toDate=&dataType=PRICEVOLUMEDELIVERABLE`);
    let start = (data.lastIndexOf(`'display:none;'>`) + 16)
    let end = (data.lastIndexOf(':</div>'));
    console.log(data.substring(start, end));
};