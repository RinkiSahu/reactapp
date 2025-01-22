const findMinMax = (data, key) => (
    { min: Math.min(...data.map(item => item[key])),
         max: Math.max(...data.map(item => item[key]))
    });
     export default findMinMax;