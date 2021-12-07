package com.mercury.bean;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name ="FP_PAYMENT")
public class Payment {
    @Id
    @SequenceGenerator(name = "fp_payment_seq_gen", sequenceName = "FP_PAYMENT_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_payment_seq_gen", strategy = GenerationType.AUTO)
    private int paymentId;
    @Column
    private String cardNumber;
    @Column
    private String cardName;
    @Column
    private String cardDate;
    @Column
    private String cardCVC;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    private User user;

    public Payment() {
    }

    public Payment(int paymentId, String cardNumber, String cardName, String cardDate, String cardCVC, User user) {
        this.paymentId = paymentId;
        this.cardNumber = cardNumber;
        this.cardName = cardName;
        this.cardDate = cardDate;
        this.cardCVC = cardCVC;
        this.user = user;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getCardName() {
        return cardName;
    }

    public void setCardName(String cardName) {
        this.cardName = cardName;
    }

    public String getCardDate() {
        return cardDate;
    }

    public void setCardDate(String cardDate) {
        this.cardDate = cardDate;
    }

    public String getCardCVC() {
        return cardCVC;
    }

    public void setCardCVC(String cardCVC) {
        this.cardCVC = cardCVC;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "paymentId=" + paymentId +
                ", cardNumber=" + cardNumber +
                ", cardName='" + cardName + '\'' +
                ", cardDate='" + cardDate + '\'' +
                ", cardCVC=" + cardCVC +
                ", user=" + user +
                '}';
    }
}
