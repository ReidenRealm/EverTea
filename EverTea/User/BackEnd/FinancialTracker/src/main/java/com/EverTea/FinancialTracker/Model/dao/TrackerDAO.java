package com.EverTea.FinancialTracker.Model.dao;


import com.EverTea.FinancialTracker.Model.entity.ExpenseRecord;
import com.EverTea.FinancialTracker.Model.entity.FinancialTracker;
import com.EverTea.FinancialTracker.Model.entity.IncomeRecord;

import java.time.LocalDateTime;
import java.util.List;

public interface TrackerDAO {
     List<ExpenseRecord> findAllExpensesOfTracker(int trackerId);
     List<IncomeRecord> findAllIncomeOfTracker(int trackerId);
     ExpenseRecord findExpenseById(int expenseId);
     IncomeRecord findIncomeById(int incomeId);
     void save(FinancialTracker financialTracker);
     void save(int trackerId,ExpenseRecord expenseRecord);
     void save(int trackerId,IncomeRecord incomeRecord);
     FinancialTracker findTrackerById(int trackerId);
     ExpenseRecord update(ExpenseRecord expenseRecord);
     IncomeRecord update(IncomeRecord incomeRecord);
}
