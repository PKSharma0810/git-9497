class stopWatch{ 
 
    constructor(modelno, color){
    this.modelno= modelno;
    this.color = color;
    }   
    // properties
    #isRunning = false; // #use the variable in private variable
    #starttime = 0;
    #stoptime = 0;
    //method
get isrunning(){
    return this.#isRunning;
}
set isrunning(value){
    throw new error ("internal propertiess");
}
    start() {
        if(this.#isRunning) throw new Error ("watch has already start...");
        this.#isRunning = true;
    this.#starttime = new Date().getTime();
    console.log("Watch Started at ", this.#starttime);
    }

    stop() {
        if(this.#isRunning) throw new Error ("watch hasn't started...");
        this.#isRunning = false;
        this.#stoptime = new Date().getTime();
        let duration = (this.#stoptime-this.#starttime) /1000;
        console.log("Watch Started at ", duration);
    }

    reset(){
        this.#starttime = 0;
        this.#stoptime = 0;
        this.#isRunning = false;
        console.log("Watch has been reset...");
    }
};



