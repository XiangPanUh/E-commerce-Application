package com.mercury.bean;
import javax.persistence.*;

@Entity
@Table(name ="FP_GAME")
public class Game {
    @Id
    @SequenceGenerator(name = "fp_game_seq_gen", sequenceName = "FP_GAME_SEQ", allocationSize = 1)
    @GeneratedValue(generator = "fp_game_seq_gen", strategy = GenerationType.AUTO)
    private int gameId;
    @Column
    private String gameName;
    @Column
    private String gameLevel;
    @Column
    private String gameImage;
    @Column
    private String gameDescription;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    private MysteryBox mysteryBox;

    public Game() {
    }

    public Game(int gameId, String gameName, String gameLevel, String gameImage, String gameDescription, MysteryBox mysteryBox) {
        this.gameId = gameId;
        this.gameName = gameName;
        this.gameLevel = gameLevel;
        this.gameImage = gameImage;
        this.gameDescription = gameDescription;
        this.mysteryBox = mysteryBox;
    }

    public int getGameId() {
        return gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public String getGameLevel() {
        return gameLevel;
    }

    public void setGameLevel(String gameLevel) {
        this.gameLevel = gameLevel;
    }

    public String getGameImage() {
        return gameImage;
    }

    public void setGameImage(String gameImage) {
        this.gameImage = gameImage;
    }

    public String getGameDescription() {
        return gameDescription;
    }

    public void setGameDescription(String gameDescription) {
        this.gameDescription = gameDescription;
    }

    public MysteryBox getMysteryBox() {
        return mysteryBox;
    }

    public void setMysteryBox(MysteryBox mysteryBox) {
        this.mysteryBox = mysteryBox;
    }

    @Override
    public String toString() {
        return "Game{" +
                "gameId=" + gameId +
                ", gameName='" + gameName + '\'' +
                ", gameLevel='" + gameLevel + '\'' +
                ", gameImage='" + gameImage + '\'' +
                ", gameDescription='" + gameDescription + '\'' +
                ", mysteryBox=" + mysteryBox +
                '}';
    }
}