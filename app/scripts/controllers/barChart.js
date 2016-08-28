angular.module('budgetManagerApp' )
  .controller('BarCtrl', function($scope,outcomeIncomeService)
{

  console.log("Hello from graph controoler");



$scope.category =['הכנסה','הוצאה'];
$scope.index=0;
$scope.type = 'line';
$scope.backgroundColor = [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ];
$scope.labels = [];
$scope.data = [[],[]];
$scope.datasets =
  [
    {
      backgroundColor: [
      ]
    }
  ]

  outcomeIncomeService.get(function(data){
    $scope.movments = data.movments;
    var newDataValue;
    var newLabel = [];
    var labelValue;
    $scope.overall = 0;

    $scope.movments.forEach(function(entry)
    {

      if(entry.credit == 0) {
        newDataValue = entry.debit;
        $scope.overall+=entry.debit;
      }
      else
      {
        newDataValue = entry.credit;
        $scope.overall+=entry.credit;
      }
      newLabel.push(entry.description);
      $scope.data[0].push(newDataValue);
      $scope.datasets[0].backgroundColor.push('rgba(255,0,0,.2)');
      //is it is an outcome
      /*
      if(entry.credit == 0)
      {
        labelValue = $scope.category[1];
        newDataValue=entry.debit;
        newLabel.push(labelValue);
        $scope.data[0].push(newDataValue);
        $scope.labels.push(newLabel);
        $scope.datasets[0].backgroundColor.push('rgba(255,0,0,.2)');
      }
      else
      {
        labelValue = $scope.category[0];
        newDataValue=entry.credit;
        $scope.data[1].push(newDataValue);
        $scope.labels.push(newLabel);
        $scope.datasets[0].backgroundColor.push('rgba(0,255,0,.2)');
      }*/
    });
    new Chartist.Line('.ct-chart', {
      labels:newLabel,
      series: [
        $scope.data[0]
      ]
    }, {

      showArea: true,
      showLine: true,
      showPoint: true,
      fullWidth: true,
      axisX: {
        showLabel: true,
        showGrid: true
      }
    });
  });
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


  //$scope.randomColor= function() {
//  $scope.backgroundColor.push('rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',.7)');
//$scope.datasets[0].backgroundColor.push('rgba(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',.2)');
//  };
//$scope.randomColor();
//console.log(Math.floor((Math.random() * 2) + 1));

}
$scope.totalIncomeOutcomeValue=$scope.totalIncomeOutcomeValue+newDataValue;
}



});
