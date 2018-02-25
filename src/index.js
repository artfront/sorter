class Sorter {
    constructor() {
        this.store = [];
        this.comparator = (a, b) => {return a - b};
    }

    add(element) {
        this.store.push(element);
    }

    at(index) {
        return this.store[index];
    }

    get length() {
        return this.store.length;
    }

    toArray() {
        return this.store;
    }

    sort(indices) {
        indices.sort((a, b) => {
            if(a < b) {
            if(this.comparator(this.store[a], this.store[b]) > 0) {
                const tmp = this.store[b];
                this.store[b] = this.store[a];
                this.store[a] = tmp;
            }
        } else {
            if(this.comparator(this.store[a], this.store[b]) < 0) {
            const tmp = this.store[b];
            this.store[b] = this.store[a];
            this.store[a] = tmp;
            }
        }
        return b - a;
    });
    }
    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}
module.exports = Sorter;

