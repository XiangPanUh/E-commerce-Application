package com.mercury.bean;
import javax.persistence.*;


@Entity
@Table(name ="FP_CART")
public class Cart {
    @Id
    @SequenceGenerator(name = "fp_cart_seq_gen", sequenceName = "FP_CART_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_cart_seq_gen", strategy = GenerationType.AUTO)
    private int cartId;
    @OneToOne
    private MysteryBox mysteryBox;
    @Column
    private int quality;
    @OneToOne
    private User user;

    public Cart() {
    }

    public Cart(int cartId, MysteryBox mysteryBox, int quality, User user) {
        this.cartId = cartId;
        this.mysteryBox = mysteryBox;
        this.quality = quality;
        this.user = user;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public MysteryBox getMysteryBox() {
        return mysteryBox;
    }

    public void setMysteryBox(MysteryBox mysteryBox) {
        this.mysteryBox = mysteryBox;
    }

    public int getQuality() {
        return quality;
    }

    public void setQuality(int quality) {
        this.quality = quality;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "cartId=" + cartId +
                ", mysteryBox=" + mysteryBox +
                ", quality=" + quality +
                ", user=" + user +
                '}';
    }
}
