class Form {
    constructor(){
        this.input=createInput("What are those!!!!")
        this.greeting=createElement('h4');
        this.button=createButton('enter')
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement('h2');
        title.html('flat racing 2')
        title.position(130,0)
        this.input.position(130,160)
        this.button.position(250,200)
        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name= this.input.value()
            playerCount+=1
            player.index=playerCount;
            player.updateCount(playerCount)
           this.greeting.html('Wazzup '+player.name)
            this.greeting.position(130,160)
        })
    }
}9