import { GunModel } from "./GunModel";
import { ObservableModel } from "./ObservableModel";

export class PlayerModel extends ObservableModel {
    constructor(config) {
        super("PlayerModel");
        const { speed } = config;
        this._config = config;
        this._coins = 0;
        this._speed = speed;
        this._score = 0;

        this._gun = null;
        this.makeObservable();
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get coins() {
        return this._coins;
    }

    set coins(value) {
        this._coins = value;
    }

    get gun() {
        return this._gun;
    }

    set gun(value) {
        this._gun = value;
    }

    get score() {
        return this._score;
    }

    set score(value) {
        this._score = value;
    }

    increaseScoreBy(value) {
        this.score += value;
    }

    setGunType(value) {
        this.gun.setType(value);
    }

    setGunBulletDistance(value) {
        this.gun.setBulletDistance(value);
    }

    setGunBulletSpeed(value) {
        this.gun.setBulletSpeed(value);
    }

    increaseCoinsCountBy(value) {
        this.coins += value;
    }

    decreaseCoinsCountBy(value) {
        this.coins -= value;
    }

    init() {
        const { initialCoins, gunType, bulletsCount, bulletDistance, bulletSpeed } = this._config;
        const gunConfig = { gunType, bulletsCount, bulletDistance, bulletSpeed };
        this._coins = initialCoins;
        this.#initGunModel(gunConfig);
    }

    #initGunModel(gunConfig) {
        this._gun = new GunModel(gunConfig);
        this._gun.init();
    }
}
