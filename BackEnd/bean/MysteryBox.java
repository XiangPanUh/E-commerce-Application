package com.mercury.bean;

import javax.persistence.*;

@Entity
@Table(name ="FP_MYSTERY_BOX")
public class MysteryBox {
    @Id
    private int mysteryBoxId;
    @Column
    private String mysteryBoxLevel;
    @Column
    private int mysteryBoxPrice;
    @Column
    private String mysteryBoxImage;
    @Column
    private String mysteryBoxName;



    public MysteryBox() {
    }

    public MysteryBox(int mysteryBoxId, String mysteryBoxLevel, int mysteryBoxPrice, String mysteryBoxImage, String mysteryBoxName) {
        this.mysteryBoxId = mysteryBoxId;
        this.mysteryBoxLevel = mysteryBoxLevel;
        this.mysteryBoxPrice = mysteryBoxPrice;
        this.mysteryBoxImage = mysteryBoxImage;
        this.mysteryBoxName = mysteryBoxName;
    }

    public String getMysteryBoxImage() {
        return mysteryBoxImage;
    }

    public void setMysteryBoxImage(String mysteryBoxImage) {
        this.mysteryBoxImage = mysteryBoxImage;
    }

    public String getMysteryBoxName() {
        return mysteryBoxName;
    }

    public void setMysteryBoxName(String mysteryBoxName) {
        this.mysteryBoxName = mysteryBoxName;
    }

    public int getMysteryBoxId() {
        return mysteryBoxId;
    }

    public void setMysteryBoxId(int mysteryBoxId) {
        this.mysteryBoxId = mysteryBoxId;
    }

    public String getMysteryBoxLevel() {
        return mysteryBoxLevel;
    }

    public void setMysteryBoxLevel(String mysteryBoxLevel) {
        this.mysteryBoxLevel = mysteryBoxLevel;
    }

    public int getMysteryBoxPrice() {
        return mysteryBoxPrice;
    }

    public void setMysteryBoxPrice(int mysteryBoxPrice) {
        this.mysteryBoxPrice = mysteryBoxPrice;
    }


    @Override
    public String toString() {
        return "MysteryBox{" +
                "mysteryBoxId=" + mysteryBoxId +
                ", mysteryBoxLevel='" + mysteryBoxLevel + '\'' +
                ", mysteryBoxPrice=" + mysteryBoxPrice +
                ", mysteryBoxImage='" + mysteryBoxImage + '\'' +
                ", mysteryBoxName='" + mysteryBoxName + '\'' +
                '}';
    }
}