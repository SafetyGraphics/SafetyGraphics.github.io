document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        let settings = {
            max_width: 600,
            value_col: 'LBORRES',
            measure_col: 'TESTNAM',
            visit_col:"VISIT",
          //  visitn_col: 'VISITNUM',
            studyday_col: 'STUDYDAY',
            normal_col_low: 'LBORRESLO',
            normal_col_high: 'LBORRESHI',
            id_col: 'SUBJID',
            group_cols: ['SEX',"AgeGroup"],
            filters: [
              {
                    value_col: 'SEX',
                    label: 'Sex'
              },
              {
                    value_col: 'AgeGroup',
                    label: 'Age'
              }
            ],
            measure_values:{
              'ALT':'ALT (SGPT)',
              'AST':'AST (SGOT)',
              'TB':'Total Bilirubin',
              'ALP':"Alkaline Phosphatase"
            },

            baseline:{
              value_col:"STUDYDAY",
              values:[1]
            }
        };
        const chart = hepexplorer('#container', settings);
        d3.csv('ex.csv', function(data) {
          console.log(data)
            data.forEach(function(d){
              d.EPOCH = +d.STUDYDAY > 1 ? "Analysis" : "Baseline";
              d.AgeGroup = +d.AGE < 60 ?  "<60":"60+";
            })
            chart.init(data);
        });
        //const chart = safetyedish('#container', {});
        //d3.csv('../../viz-library/data/safetyData/ADBDS.csv', function(data) {
        //    chart.init(data);
        //});
    }
}
