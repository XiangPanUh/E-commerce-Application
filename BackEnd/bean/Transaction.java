package com.mercury.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name ="FP_TRANSACTION")
public class Transaction {
    @Id
    @SequenceGenerator(name = "fp_transaction_seq_gen", sequenceName = "FP_TRANSACTION_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_transaction_seq_gen", strategy = GenerationType.AUTO)
    private int transactionId;
    // view user
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    private User user;
    // view type of the box
    @OneToOne
    private MysteryBox mysteryBox;
    @Column
    private int transactionQuality;


    public Transaction() {
    }

    public Transaction(int transactionId, User user, MysteryBox mysteryBox, int transactionQuality, String status) {
        this.transactionId = transactionId;
        this.user = user;
        this.mysteryBox = mysteryBox;
        this.transactionQuality = transactionQuality;
    }


    public int getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(int transactionId) {
        this.transactionId = transactionId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getTransactionQuality() {
        return transactionQuality;
    }

    public void setTransactionQuality(int transactionQuality) {
        this.transactionQuality = transactionQuality;
    }

    public MysteryBox getMysteryBox() {
        return mysteryBox;
    }

    public void setMysteryBox(MysteryBox mysteryBox) {
        this.mysteryBox = mysteryBox;
    }


    @Override
    public String toString() {
        return "Transaction{" +
                "transactionId=" + transactionId +
                ", user=" + user +
                ", mysteryBox=" + mysteryBox +
                ", transactionQuality=" + transactionQuality +
                '}';
    }
}
