'use strict';

/**
 * @ngdoc service
 * @name budgetManagerApp.ExpensesListService
 * @description
 * # ExpensesListService
 * Service in the budgetManagerApp.
 */
angular.module('budgetManagerApp')
  .service('ExpensesListService', function () {

    //loading the expenses list from localStorage
    var loadModel = function()
    {
      var model =
      {
        expensesLists: localStorage['BudgetManager.expensesLists'] ?
          JSON.parse(localStorage['BudgetManager.expensesLists'] ) : [],
        nextId :localStorage['BudgetManager.nextId'] ?
          parseInt(localStorage['BudgetManager.nextId'] ) : 0
      };
      return model;
    };

    //saving expenses lists into local storage
    var saveModel = function () {
      localStorage['BudgetManager.expensesLists'] = JSON.stringify(Model.expensesLists);
      localStorage['BudgetManager.nextId'] = Model.nextId;
    };

    //using lodash to find expenses list bu given id
    var findById = function(listId)
    {
      return _.find(Model.expensesLists,function(expenseList)
      {
        return expenseList.id === parseInt(listId);
      });
    };

    //return all expenses lists or find by given id
    this.query =function(listId)
    {
      if(listId)
      {
        return findById(listId);
      }
      else
      {
        return Model.expensesLists;
      }
    };

    //save new expenses list to expenseslists model

    this.save =function(expensesList)
    {
      expensesList.id =Model.nextId ++;
      Model.expensesLists.push(expensesList);
      saveModel;
    };

    this.getExpenses = function()
    {
      return 23;
    };

    //TODO:Remove specific expense from an expenses list

    var Model=loadModel;
  });
