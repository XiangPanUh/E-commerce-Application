package com.mercury.bean;

import javax.persistence.*;


@Entity
@Table(name="FP_REVIEW")
public class Review {
    @Id
    @SequenceGenerator(name = "fp_review_seq_gen", sequenceName = "FP_REVIEW_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_review_seq_gen", strategy = GenerationType.AUTO)
    private int reviewId;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    private User user;
    @Column
    private int rate;
    @Column
    private String comments;

    public Review() {
    }

    public Review(int reviewId, User user,String comments, int rate) {
        this.reviewId = reviewId;
        this.user = user;
        this.comments = comments;
        this.rate = rate;
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", user=" + user +
                ", rate=" + rate +
                ", comments='" + comments + '\'' +
                '}';
    }
}
