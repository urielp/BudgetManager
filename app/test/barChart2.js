var app = angular.module('barChartApp' ,['chart.js']);

app.controller('BarCtrl', ['$scope', function($scope)
{
$scope.totalBalance = 0;
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


   $scope.income = ['income'];
    $scope.outcome = ['outcome'];
    $scope.dates =[];
$scope.incomeCount=0;
    $scope.outComeCount = 0;
    $scope.movments.forEach(function(entry)
    {
        if(entry.debit== 0 )
        {
            $scope.income.push(entry.credit);
            $scope.incomeCount++;
            $scope.totalBalance=$scope.totalBalance+parseInt(entry.credit);
        }
        else
        {
            $scope.outcome.push(entry.debit);
            $scope.outComeCount++;
            $scope.totalBalance=$scope.totalBalance+parseInt(entry.debit);
        }
		
        $scope.dates.push(entry.actionDate);
    });
console.log($scope.totalBalance);
    var chart = c3.generate({
        data: {

            columns: [

                $scope.income,//['data44', 300, 350, 300, 0, 0, 120],
                $scope.outcome// ['data2', 130, 100, 140, 200, 150, 50]
            ],
            names: {
                income: 'income',
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
                income: 'area-spline',
                outcome: 'area-spline'
                // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
            },
            groups: [['income', 'outcome']]
        }/*,
        axis: {
            x: {
                type: 'category',
                categories: $scope.dates
            }
        }*/

    });

  var vm = this;
        vm.counters ={
          income:0,
          expense:0

        }
        vm.change = function(counter) {
          vm.counters.income++;
          console.log(vm.counters.income);
        };
$scope.totalIncomeOutcomeValue = 0;


$scope.category =['','הכנסה','הוצאה'];
$scope.series = ['סכום'];
$scope.index=0;
$scope.type = 'line';
//  $scope.colors=['rgba(148,159,177,0.8)'];
  $scope.backgroundColor = [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ];
//  $scope.series = ['A','B','C','D','E','F','G','H','I'];

  //$scope.labels = [['A'],['B'],['C'],['D'],['E']];
  $scope.labels = [];
  $scope.data = [[]];
  $scope.counters ={
    income:0,
    expense:0

  }
   $scope.counter = 0;
  $scope.income=0;
  //$scope.data = [[]];
  $scope.datasets =
  [
    {
      backgroundColor: [
      ]
    }
  ]

  $scope.RealIncome= [8,271.82,5,879.33,102.50,100.00,21.94,861.02,26.51,864.93,402.50,9.45,16.57,6,522.09,5,12.79,24.38,858.51,29.30,861.34,1,250.00,202.50,17.55,5,697.28,5,158.07,1,300.00,2,400.00,4,200.00,900.00,100.00,1,500.00,102.50,25.25,856.01,30.18,857.76,250.00,13.50];
$scope.data[0]=  $scope.RealIncome;
/*
  $scope.datasets =
   [
    {
              label: "Bar chart",
              borderWidth: 1,
              backgroundColor: "rgba(255,0,0,0.5)",
              type: 'bar'
    }]*/

$scope.Increase =function()
{
  $scope.counter++;
  $scope.counters.income++;
  console.log($scope.counters.income);
}
$scope.addData = function()
{
var newDataValue;
var newLabel =[];
var labelValue=$scope.category[Math.floor((Math.random() * 2) + 1)];

newDataValue = (Math.floor((Math.random() * 100) + 1)*10);
if(labelValue == 'הוצאה')
{
  newDataValue=newDataValue*(-1);
  newLabel.push(labelValue);
  $scope.data[0].push(newDataValue);
  $scope.labels.push(newLabel);
  $scope.datasets[0].backgroundColor.push('rgba(255,0,0,.2)');
  $scope.counters.expense++;
}
else {
  newLabel.push(labelValue);
  $scope.data[0].push(newDataValue);
  $scope.labels.push(newLabel);
  $scope.datasets[0].backgroundColor.push('rgba(0,255,0,.2)');
  $scope.counters.income++;

  //$scope.randomColor= function() {
//  $scope.backgroundColor.push('rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',.7)');
//$scope.datasets[0].backgroundColor.push('rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',.2)');
//  };
//$scope.randomColor();
//console.log(Math.floor((Math.random() * 2) + 1));

}
$scope.totalIncomeOutcomeValue=vm.totalIncomeOutcomeValue+newDataValue;
}

}]);
