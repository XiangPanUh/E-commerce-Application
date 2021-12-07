package com.mercury.bean;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name ="FP_HISTORY")
public class History {
    @Id
    @SequenceGenerator(name = "fp_history_seq_gen", sequenceName = "FP_HISTORY_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_history_seq_gen", strategy = GenerationType.AUTO)
    private int historyId;
    @OneToOne
    private MysteryBox mysteryBox;
    @OneToOne
    private Game games;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    private Transaction transaction;

    public History() {
    }

    public History(int historyID, MysteryBox mysteryBox, Game games, Transaction transaction) {
        this.historyId = historyID;
        this.mysteryBox = mysteryBox;
        this.games = games;
        this.transaction = transaction;
    }

    public int getHistoryID() {
        return historyId;
    }

    public void setHistoryID(int historyID) {
        this.historyId = historyID;
    }

    public MysteryBox getMysteryBox() {
        return mysteryBox;
    }

    public void setMysteryBox(MysteryBox mysteryBox) {
        this.mysteryBox = mysteryBox;
    }

    public Game getGames() {
        return games;
    }

    public void setGames(Game games) {
        this.games = games;
    }

    public Transaction getTransaction() {
        return transaction;
    }

    public void setTransaction(Transaction transaction) {
        this.transaction = transaction;
    }

    @Override
    public String toString() {
        return "History{" +
                "historyID=" + historyId +
                ", mysteryBox=" + mysteryBox +
                ", games=" + games +
                ", transaction=" + transaction +
                '}';
    }
}
