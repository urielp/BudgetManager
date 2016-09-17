'use strict';

/**
 * @ngdoc function
 * @name budgetManagerApp.controller:GraohcontrollerCtrl
 * @description
 * # GraohcontrollerCtrl
 * Controller of the budgetManagerApp
 */
angular.module('budgetManagerApp')
  .controller('GraohcontrollerCtrl', function ($scope,outcomeIncomeService) {

    $scope.income = outcomeIncomeService.getIncome();
    $scope.outcome = outcomeIncomeService.getOutcome();
    $scope.MonthPeriodForGraph =outcomeIncomeService.getDatePeriod();



      /*****
       * The Chosen Graph library
       */
      $(function () {
        $('#container').highcharts({
          chart: {
            type: 'column'

          },
          title: {
            text: 'XX' +  'גרף הוצאות והכנסות למשך תקופה של '
          },
          xAxis: {
           //tickInterval:7 * 24 * 3600 * 1000, // one week
            categories:outcomeIncomeService.getDates(),// $scope.MonthPeriodForGraph,
            tickmarkPlacement: 'on',
            title: {
              enabled: false
            },
            labels: {
              formatter: function () {
                return this.value; // clean, unformatted number for year
              }
            }
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
              width: 2,
              from: 0, // Start of the plot band
              to: -12 // End of the plot band
            }],
            plotLines: [{
              color: '#FF0000',
              width: 1,
              value: -5500 // Need to set this probably as a var.
            }]
          },

          /*
          tooltip: {
            shared:false,
            valueSuffix: '₪',
            crosshairs: true
          }*/
          /****Test To Be Checked ***/
          /*
           tooltip: {
                shared: false,
                valueSuffix:'₪',
                formatter: function () {
                    var text = '';
                    var serieI = this.series.index;
                    var index = $scope.dates.indexOf(this.x);
                    if (this.series.name == 'Income') {

                        text =  $scope.incomeDescription[index] + ':' + this.y ;
                    } else {
                        text = $scope.outComeDescription[index] + ':' + this.y ;
                    }
                    return text+ '₪';
                }
            }*/
            tooltip: {
                shared: false,
                valueSuffix:'₪',
                formatter: function () {
                    return 'Description : ' + this.point.d +'<br/>'+     'Amount : ' +this.point.y +'₪<br/>Date:'+this.point.date;
                }
            }
          ,
          /*
          plotOptions: {
            area: {

              marker: {
                enabled: true,
                symbol: 'circle',
                radius: 2,
                linecap: 'round',
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
            }
          }*/
             plotOptions: {
                area: {
                    //stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
          series: [{
            name: 'Outcome',
            data: outcomeIncomeService.test1().reverse(),//$scope.outcome,
            color:"#FC0000",
            fillOpacity: 0.4,
            lineWidth:1,
            shadow: true
          }, {
            name: 'Income',
            data: outcomeIncomeService.test2(),//$scope.income,
            color:'#037019',
            fillOpacity: 0.4,
            lineWidth:1,
            shadow: true
          }]
        });
      });


  });
