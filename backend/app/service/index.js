
class Service {

    constructor() {
        this.io = null;

    }

    createSocket(io) {
        this.io = io;
    }

    getSocket() {
        return this.io;
    }
    
}

module.exports = new Service();