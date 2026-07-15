class Hashset {
    constructor() {
        this.list = {};
    };

    set(key, val) {
        this.list[key] = val;
    };

    get(key) {
        return this.list[key];
    };

    has(key) {
        return !!this.list[key];
    };
};

const hashset = new Hashset();
hashset.set("a", 10);
hashset.set("b", 100);
console.log(hashset.get("a"));
console.log(hashset.get("b"));
console.log(hashset.has("a"));