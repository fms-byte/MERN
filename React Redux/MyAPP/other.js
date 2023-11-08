//export default exports the data to other files

class App {
    constructor(text) {
        this.name = text;
    }
    getName() {
        return this.name;
    }
}

export default App;