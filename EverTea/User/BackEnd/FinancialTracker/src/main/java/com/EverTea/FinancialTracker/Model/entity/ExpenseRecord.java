package com.EverTea.FinancialTracker.Model.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "expense_record")
public class ExpenseRecord {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;

    @ManyToOne(cascade = {CascadeType.MERGE,CascadeType.PERSIST,CascadeType.DETACH,CascadeType.REFRESH},fetch = FetchType.LAZY)
    @JoinColumn(name = "tracker_id") // refers to the foreign key in the database table
    private FinancialTracker tracker;

    @Column(name = "amount")
    private float amount;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private String date;

    public ExpenseRecord(){

    }

    public ExpenseRecord(float amount, String description, String date) {
        this.amount = amount;
        this.description = description;
        this.date = date;
    }

    public FinancialTracker getTracker() {
        return tracker;
    }

    public void setTracker(FinancialTracker tracker) {
        this.tracker = tracker;
    }

    public float getAmount() {
        return amount;
    }

    public void setAmount(float amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
