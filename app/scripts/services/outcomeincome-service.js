'use strict';

/**
 * @ngdoc service
 * @name budgetManagerApp.outcomeIncomeService
 * @description
 * # outcomeIncomeService
 * Service in the budgetManagerApp.
 */
angular.module('budgetManagerApp')
  .service('outcomeIncomeService', function outcomeIncomeService() {

     //raw real data
    //TODO:take this data from the DB
    var movments =
      [
        {"actionDate":"8/17/2016 12:00:00 AM",
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
    var income=[];
    var outcome=[];
    var incometest=[];
    var outcometest=[];
    var complexIncomeData =[];
    var complexOutComeData =[];
    var data ={

    };

    var urielData=[];
    var dates = [];
    var totalBalance=0;
    var totalCredit =0;
    var totalDebit=0;
    var monthes=[];
    var datesPeriod = [];
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var testMe=[];

    //console.log("The random month is : "+ monthNames[Math.floor((Math.random() * 12) + 0)]);
    var loadData = function()
    {
      var datxxx ;
    //reading the data and devided it to incomes and outcomes for the graph
    movments.forEach(function(entry)
    {
      if(entry.debit == 0 )
      {
        //console.log(new Date(entry.actionDate).getTime());
        income.push({y:entry.credit,d:entry.description,date:entry.actionDate});
        incometest.push({y:entry.credit,d:entry.description,date:entry.actionDate});
        urielData.push({amount:entry.credit,description:entry.description,date:entry.actionDate});
        complexIncomeData.push({name:entry.description,y:entry.credit,x:new Date(entry.actionDate).getTime()});
        datxxx = new Date(entry.actionDate);
       // complexIncomeData.push([Date.UTC(datxxx.getYear(),datxxx.getMonth(),datxxx.getDay()),entry.credit]);;
        totalBalance=totalBalance+parseInt(entry.credit);
        totalCredit=totalCredit+entry.credit;
      }
      else
      {

        outcome.push({y:entry.debit,d:entry.description,date:entry.actionDate} );
        outcometest.push({y:entry.debit,d:entry.description,date:entry.actionDate} );
        urielData.push({amount:entry.debit,description:entry.description,date:entry.actionDate});
        datxxx = new Date(entry.actionDate);
        complexOutComeData.push({name:entry.description,y:entry.debit,x:new Date(entry.actionDate).getTime()});
        totalBalance=totalBalance+parseInt(entry.debit);
        totalDebit=totalDebit+entry.debit;
        totalDebit.toPrecision(5);
      }

      dates.push(new Date( entry.actionDate).toLocaleDateString());
      totalCredit.toPrecision(5);
    })
     //console.log( urielData);
    data.movments=urielData;

     // console.log( JSON.stringify(data));

    };

    this.testComplex = function()
    {
      return complexIncomeData.reverse();
    };
    this.testComplex2 = function()
    {
      return complexOutComeData.reverse();
    };
    //saving expenses lists into local storage
    var saveModel = function () {
      localStorage['BudgetManager.expensesLists'] = JSON.stringify(Model.outcome);
      localStorage['BudgetManager.incomeLists'] = JSON.stringify(Model.income);

    };
    var loadModel =function()
    {
      loadData();
      var model =
        {
          income:localStorage['BudgetManager.incomeLists'] ?
            JSON.parse(localStorage['BudgetManager.incomeLists'] ) : incometest,
          outcome:localStorage['BudgetManager.expensesLists'] ?
            JSON.parse(localStorage['BudgetManager.expensesLists'] ) : outcometest,
          totalCredit:totalCredit,
          totalDebit:0,
          totalBalance:totalBalance,
          totalMovments:movments,
          Monthes:monthes,
          dates:dates
        }
    return model;
    };


this.getDates = function()
{
  Model.dates.reverse();
  return Model.dates;
};


    this.getIncome = function()
    {
      Model.income.reverse();
      return Model.income;
    };

   this.getOutcome = function()
    {
        Model.outcome.reverse();
        return Model.outcome;
    };

    this.getTotalInceome =function()
    {
      Model.totalCredit=0;
      Model.income.forEach(function(entry)
      {
        if(entry != null) {
          //console.log(entry.y);
          Model.totalCredit = (Model.totalCredit + entry.y)
        }
      });
        return Model.totalCredit;
    };

    this.getTotalOutCome = function()
    {
      Model.totalDebit =0;
      Model.outcome.forEach(function(entry)
      {
        if(entry != null) {
          //console.log(entry.y);
         Model.totalDebit = (Model.totalDebit + entry.y)
        }
      });
      return Model.totalDebit;
    };

    this.getTotalBalance =function ()
    {
      return Model.totalCredit+Model.totalDebit;
    };
    this.getMonthPeriod = function()
    {
      var currentMonth;
      var oldMonth ="";
      var year;
      var day =1;
      var p = [];
      movments.forEach(function(entry)
      {

            currentMonth = (new Date(entry.actionDate).getMonth())+1;


            year = new Date(entry.actionDate).getFullYear();
            if(oldMonth=== "")
            {
              monthes.push(currentMonth);
              datesPeriod.push(new Date(year,currentMonth-1,day,0,0,0));
              testMe.push(monthNames[currentMonth]);
              //console.log(monthNames[currentMonth]);
            }
            else if(oldMonth!=currentMonth)
            {
              monthes.push(currentMonth);
              datesPeriod.push(new Date(year,currentMonth-1,day,0,0,0));

              testMe.push(monthNames[currentMonth]);
              //console.log(monthNames[currentMonth]);
            }
        oldMonth=currentMonth;

      });

      return monthes.length;
    };

    this.testMeNow =function()
    {
      return testMe;
    }

    this.getDatePeriod = function()
    {
      datesPeriod.reverse();
      return datesPeriod;
    };

    this.getexpenses = function()
    {
      Model.outcome.reverse();

      return Model.outcome;
    };

    this.getIncomes = function()
    {
      Model.income.reverse();
      return Model.income;
    };

    this.addExpense =function(expense)
    {
      console.log("addExpense(service)");
      Model.outcome.push({y:(expense.amount*-1),d:expense.description,date:expense.date});
      saveModel();
    };

    this.addIncome =function(income)
    {
      console.log("addIncome(service)");
      Model.income.push({y:income.amount,d:income.description,date:income.date});
      saveModel();
    };
    var Model =loadModel();
  });
