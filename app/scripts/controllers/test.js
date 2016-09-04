/**
 * Created by Uriel on 02/09/2016.
 */
angular.module('budgetManagerApp')
  .controller('testCtrl', function($scope) {

    $scope.date;
    $scope.totalBalance = 0;
    $scope.totalDebit=0;
    $scope.totalCredit=0;
    $scope.monthCounter=0;
    $scope.oldDate =new Date() ;
    $scope.movments =
      [{"actionDate":"8/17/2016 12:00:00 AM",
        "description":"העברה/הפקדה-נט",
        "credit":400,
        "debit":0
      },
        {"actionDate":"8/11/2016 12:00:00 AM",
          "description":"העברה/הפקדה-נט",
          "credit":1500,
          "debit":0
        },
        {"actionDate":"8/11/2016 12:00:00 AM",
          "description":"משיכת פקדון-נט",
          "credit":850,
          "debit":0
        },
        {"actionDate":"8/10/2016 12:00:00 AM",
          "description":"הוק הלו' רבית",
          "credit":0,
          "debit":-20.96
        },
        {"actionDate":"8/10/2016 12:00:00 AM",
          "description":"הוק הלואה קרן",
          "credit":0,
          "debit":-863.53
        },
        {"actionDate":"8/10/2016 12:00:00 AM",
          "description":"הוק הלו' רבית",
          "credit":0,
          "debit":-25.5
        },
        {"actionDate":"8/10/2016 12:00:00 AM",
          "description":"הוק הלואה קרן",
          "credit":0,
          "debit":-868.53
        },
        {"actionDate":"8/8/2016 12:00:00 AM",
          "description":"משיכה מבנקט",
          "credit":0,
          "debit":-302.5
        },
        {"actionDate":"8/3/2016 12:00:00 AM",
          "description":"ע.מפעולות-ישיר",
          "credit":0,
          "debit":-8.1
        },
        {"actionDate":"8/3/2016 12:00:00 AM",
          "description":"ריבית מפקדון",
          "credit":0.01,
          "debit":0
        },
        {"actionDate":"8/3/2016 12:00:00 AM",
          "description":"משיכת פקדון-נט",
          "credit":1499.99,
          "debit":0
        },
        {"actionDate":"8/2/2016 12:00:00 AM",
          "description":"ישראכרט",
          "credit":0,
          "debit":-8271.82
        },
        {"actionDate":"8/2/2016 12:00:00 AM",
          "description":"ישראכרט",
          "credit":0,
          "debit":-5879.33
        },
        {"actionDate":"8/2/2016 12:00:00 AM",
          "description":"CashBack זיכוי",
          "credit":3.26,
          "debit":0
        },
        {"actionDate":"8/1/2016 12:00:00 AM",
          "description":"משיכה מבנקט",
          "credit":0,
          "debit":-102.5
        },
        {"actionDate":"7/31/2016 12:00:00 AM",
          "description":"מרקורי אינטראק",
          "credit":11689.7,
          "debit":0
        },
        {"actionDate":"7/28/2016 12:00:00 AM",
          "description":"ביטוח לאומי ג",
          "credit":834,
          "debit":0
        },
        {"actionDate":"7/11/2016 12:00:00 AM",
          "description":"משיכה מבנקט",
          "credit":0,
          "debit":-100
        },
        {"actionDate":"7/10/2016 12:00:00 AM",
          "description":"הוק הלו' רבית",
          "credit":0,
          "debit":-21.94
        },
        {"actionDate":"7/10/2016 12:00:00 AM",
          "description":"הוק הלואה קרן",
          "credit":0,
          "debit":-861.02
        },
        {"actionDate":"7/10/2016 12:00:00 AM",
          "description":"הוק הלו' רבית",
          "credit":0,
          "debit":-26.51
        },
        {"actionDate":"7/10/2016 12:00:00 AM",
          "description":"הוק הלואה קרן",
          "credit":0,
          "debit":-864.93
        },
        {"actionDate":"7/4/2016 12:00:00 AM",
          "description":"משיכה מבנקט",
          "credit":0,
          "debit":-402.5
        },
        {"actionDate":"7/4/2016 12:00:00 AM",
          "description":"ע.מפעולות-ישיר",
          "credit":0,
          "debit":-9.45
        },
        {"actionDate":"7/4/2016 12:00:00 AM",
          "description":"רבית",
          "credit":0,
          "debit":-16.57
        },
        {"actionDate":"7/3/2016 12:00:00 AM",
          "description":"ישראכרט",
          "credit":0,
          "debit":-6522.09
        },
        {"actionDate":"7/3/2016 12:00:00 AM",
          "description":"ישראכרט",
          "credit":0,
          "debit":-5012.79
        },
        {"actionDate":"6/30/2016 12:00:00 AM",
          "description":"מרקורי אינטראק",
          "credit":10919.8,
          "debit":0
        },
        {"actionDate":"6/28/2016 12:00:00 AM",
          "description":"ביטוח לאומי ג",
          "credit":834,
          "debit":0
        },
        {"actionDate":"6/13/2016 12:00:00 AM",
          "description":"הפק.שיק במכונה",
          "credit":300,
          "debit":0
        },
        {"actionDate":"6/10/2016 12:00:00 AM",
          "description":"הוק הלו' רבית",
          "credit":0,
          "debit":-24.38
        },
        {"actionDate":"6/10/2016 12:00:00 AM",
          "description":"הוק הלואה קרן",
          "credit":0,
          "debit":-858.51
        },
        {"actionDate":"6/10/2016 12:00:00 AM",
          "description":"הוק הלו' רבית",
          "credit":0,
          "debit":-29.3
        },
        {"actionDate":"6/10/2016 12:00:00 AM",
          "description":"הוק הלואה קרן",
          "credit":0,
          "debit":-861.34
        },
        {"actionDate":"6/8/2016 12:00:00 AM",
          "description":"שיק",
          "credit":0,
          "debit":-1250
        },
        {"actionDate":"6/7/2016 12:00:00 AM",
          "description":"העברה/הפקדה-נט",
          "credit":5000,
          "debit":0
        },
        {"actionDate":"6/6/2016 12:00:00 AM",
          "description":"משיכה מבנקט",
          "credit":0,
          "debit":-202.5
        },
        {"actionDate":"6/3/2016 12:00:00 AM",
          "description":"ע.מפעולות-ישיר",
          "credit":0,
          "debit":-17.55
        },
        {"actionDate":"6/2/2016 12:00:00 AM",
          "description":"ישראכרט",
          "credit":0,
          "debit":-5697.28
        },
        {"actionDate":"6/2/2016 12:00:00 AM",
          "description":"ישראכרט",
          "credit":0,
          "debit":-5158.07
        },
        {"actionDate":"6/2/2016 12:00:00 AM",
          "description":"CashBack זיכוי",
          "credit":1.9,
          "debit":0
        },
        {"actionDate":"6/1/2016 12:00:00 AM",
          "description":"העברה/הפקדה-נט",
          "credit":1200,
          "debit":0
        },
        {"actionDate":"5/31/2016 12:00:00 AM",
          "description":"העברה-נייד",
          "credit":8000,
          "debit":0
        },
        {"actionDate":"5/31/2016 12:00:00 AM",
          "description":"מרקורי אינטראק",
          "credit":10671,
          "debit":0
        },
        {"actionDate":"5/29/2016 12:00:00 AM",
          "description":"שיק",
          "credit":0,
          "debit":-1300
        },
        {"actionDate":"5/29/2016 12:00:00 AM",
          "description":"העברה מהבנק-נט",
          "credit":0,
          "debit":-2400
        },
        {"actionDate":"5/29/2016 12:00:00 AM",
          "description":"העברה מהבנק-נט",
          "credit":0,
          "debit":-4200
        },
        {"actionDate":"5/29/2016 12:00:00 AM",
          "description":"ביטוח לאומי ג",
          "credit":834,
          "debit":0
        },
        {"actionDate":"5/26/2016 12:00:00 AM",
          "description":"משיכה מבנקט",
          "credit":0,
          "debit":-900
        },
        {"actionDate":"5/26/2016 12:00:00 AM",
          "description":"משיכה מבנקט",
          "credit":0,
          "debit":-100
        },
        {"actionDate":"5/25/2016 12:00:00 AM",
          "description":"שיק",
          "credit":0,
          "debit":-1500
        }
      ];


    $scope.income = [];
    $scope.outcome = [];
    $scope.columns =[];
    $scope.dates =[];
    $scope.incomeCount=0;
    $scope.outComeCount = 0;
    $scope.movments.forEach(function(entry)
    {
      $scope.date=new Date(entry.actionDate);
      if($scope.date.getMonth()!=$scope.oldDate.getMonth())
      {
        $scope.monthCounter++;
        $scope.oldDate=$scope.date;
        //$scope.dates.push($scope.date.toLocaleDateString());
      }
      if(entry.debit == 0 )
      {
        $scope.income.push(entry.credit);
        $scope.incomeCount++;
        $scope.totalBalance=$scope.totalBalance+parseInt(entry.credit);
        $scope.totalCredit=$scope.totalCredit+entry.credit;


      }
      else
      {
        $scope.outcome.push(entry.debit);
        $scope.outComeCount++;
        $scope.totalBalance=$scope.totalBalance+parseInt(entry.debit);
        $scope.totalDebit=$scope.totalDebit+entry.debit;
        $scope.totalDebit.toPrecision(5);
      }

      $scope.dates.push(new Date( entry.actionDate).toLocaleDateString());

      $scope.totalCredit.toPrecision(5);
    });
    $scope.dates.reverse();
    $scope.outcome.reverse();
    $scope.income.reverse();
    console.log($scope.totalBalance);
    $scope.columns.push($scope.income);

    $scope.chart = c3.generate({
      data: {
        columns: [
          $scope.income,
          $scope.outcome

        ],
        type: 'area-spline',
        colors: {
          data1: '#ff0000',
          data2: '#00A100'
        },
        color: function (color, d) {
          // d will be 'id' when called for legends
          return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        },
        groups: [
          ['data1', 'data2']
        ],
        order: 'desc' // stack order by sum of values descendantly. this is default.
//      order: 'asc'  // stack order by sum of values ascendantly.
//      order: null   // stack order by data definition.
      },
      grid: {
        y: {
          lines: [{value:5000}]
        }
      }
    });

    console.log($scope.chart );
    /*
    var chart = c3.generate({
      data: {

        columns: [

          $scope.income,//['data44', 300, 350, 300, 0, 0, 120],
          $scope.outcome// ['data2', 130, 100, 140, 200, 150, 50]
        ],
        names: {
          income: 'data1',
          outcome: 'outcome'
        },
        labels: true,
        colors: {
          income: '#00A318',
          outcome: '#FF0000'

        },
        color: function (color, d) {
          // d will be 'id' when called for legends
          return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        },
        types: {
          data1: 'area',
          outcome: 'step'
          // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
        },
        groups: [['income', 'outcome']]
      },
      axis: {
        x: {
          type: 'category',
          categories: $scope.dates
        }
      }

    });*/

    var myColors = ["#00A100", "#ED0000"];

  $scope.options = {
    chart: {
      type: 'cumulativeLineChart',
      height: 450,
      margin : {
        top: 50,
        right: 30,
        bottom: 80,
        left: 95
      },
      x: function(d){ return d[0]; },
      y: function(d){ return d[1]/100; },


      color: ['#ED0000','#00A100'],
      duration: 10,
      useInteractiveGuideline: false,
      clipVoronoi: false,

      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d) {
          return d3.format(',d')(d)
        },
        showMaxMin: false,
        staggerLabels: true
      },

      yAxis: {
        axisLabel: 'Y Axis',
        tickFormat: function(d){
          return d3.format(',d')(d)
        },
        axisLabelDistance: 20
      }
    }
  };

  $scope.data = [
    {
      key: "Long",
      values: [ [ 1 , 4000] , [ 10 , -1.7740300785979] , [ 108 , 4.4681318138177] , [ 10 , 7.0242541001353] , [ 10948 , 7.5709603667586]]
      ,
      mean: 100
    }

  ];


      /*********************
       * Our Winner !!? ?
       */

      $(function () {
        $('#container').highcharts({
          chart: {
            type: 'area'
          },
          title: {
            text: 'XX' +  'גרף הוצאות והכנסות למשך תקופה של '
          },

          xAxis: {
            categories: $scope.dates,//['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
              enabled: false
            },
            labels: {
              formatter: function () {
                return this.value; // clean, unformatted number for year
              }
            },
          },
          yAxis: {
            title: {
              text: 'סכום'
            },
            categories:[-5000,5000],
            labels: {
               formatter: function () {
                   return this.value / 1000 + 'k';
                }
            },
            plotBands: [{
              color: 'orange', // Color value
              from: 3, // Start of the plot band
              to: -12 // End of the plot band
            }],
            plotLines: [{
              color: '#FF0000',
              width: 1,
              value: 5890 // Need to set this probably as a var.
            }]
          },
          tooltip: {
            shared: true,
            valueSuffix: '₪'
          },
          plotOptions: {
            area: {

              marker: {
                enabled: true,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          },
          series: [{
            name: 'outcome',
            data: $scope.outcome,
            color:"#FC0000",
            fillOpacity: 0.4,
            lineWidth:1,
            shadow: true
          }, {
            name: 'Income',
            data: $scope.income,
            color:'#037019',
            fillOpacity: 0.4,
            lineWidth:1,
            shadow: true
          }]
        });
      });


  });
