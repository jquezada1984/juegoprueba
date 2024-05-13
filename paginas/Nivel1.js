class Nivel1 extends Phaser.Scene{
    pisos;
    gato;
    canJump;

    constructor () {
        super ("Nivel1"); // nombre escena
    }

    preload(){
        /******************Fondos**************************************/
        this.load.image("fondo",".//resources/fondo.jpg");
        /*********************Player********************************************/
        this.load.image("player",".//resources/playergato.png");   
        //////////////////Pisos///////////
        this.load.image("Pisos",".//resources/Pisos.png"); // donde estan los patrones
        this.load.tilemapTiledJSON("tilemap",".//resources/PisoJuego.json") // donde esta el achivo json
    }
    create(){
        const fondo=this.add.image(250,250,'fondo');
        fondo.setDepth(-1);


        const map = this.make.tilemap({key:"tilemap"});
        const tileset = map.addTilesetImage("picho","Pisos");
        
        this.pisos = map.createLayer("PisosJohnKleber",tileset);
        this.pisos.setCollisionByProperty({colicion:true});

////////////////////////////////////////////////////////
        this.gato=this.physics.add.sprite(250,300,'player');
        this.gato.setBounce(0.2);
        this.gato.setCollideWorldBounds(true);

        this.cursor=this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.gato,this.pisos)

        // Inicializa el indicador de salto
        this.canJump = true;
    }

    update(){
        if(this.cursor.left.isDown){
            this.gato.setVelocityX(-160);
        }
        else if(this.cursor.right.isDown){
            this.gato.setVelocityX(+160);
        }
        else{
            this.gato.setVelocityX(0);
        }
        
    if (this.cursor.up.isDown && this.canJump) {
        this.gato.setVelocityY(-250);
        this.canJump = false;
    }


    if (this.cursor.up.isUp && !this.gato.body.touching.down) {
        this.canJump = true;
    }
    }
}