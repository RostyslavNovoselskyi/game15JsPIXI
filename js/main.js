const app = new PIXI.Application({
    width: 256,
    height: 256
})

document.body.appendChild(app.view);

PIXI.loader
    .add("images/red.png")
    .load(setup);

function setup() {
    let cat = new PIXI.Sprite(PIXI.loader.resources['images/red.png'].texture);
    
    app.stage.addChild(cat);

//    let Sprite = PIXI.Sprite;
//    let catTwo = new Sprite(PIXI.loader.resources["images/red.png"].texture);
//    
//    catTwo.x = 50;
//    catTwo.y = 50;
//    
//    app.stage.addChild(catTwo);
    
    cat.x = 100;
    cat.y = 100;
    
//    cat.width = 150;
//    cat.height = 100;

    cat.scale.set(1);
    cat.anchor.set(0.5);
    
    app.ticker.add( (delta) => {
        cat.rotation += 0.01 * delta;
    })
}



