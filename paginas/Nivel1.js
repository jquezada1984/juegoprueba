class Nivel1 extends Phaser.Scene{
    suelos;
    gato;

    constructor () {
        super ("Nivel1"); // nombre escena
    }

    preload(){
        /******************Fondos**************************************/
        this.load.image("fondo",".//resources/fondo.jpg");
        this.load.image("suelo",".//resources/plataformacarbon.png");
        
        /*********************Player********************************************/
        this.load.image("player",".//resources/playergato.png");   
    }
    create(){
        this.add.image(250,250,'fondo');
        this.suelos=this.physics.add.staticGroup();
        this.suelos.create(250,480,'suelo').setScale(0.5).refreshBody();
        this.gato=this.physics.add.sprite(250,300,'player');
        this.gato.setBounce(0.2);
        this.gato.setCollideWorldBounds(true);
        this.physics.add.collider(this.gato,this.suelos);
        this.cursor=this.input.keyboard.createCursorKeys();
    }

    update(){
        if(this.cursor.left.isDown){
            console.log('hey');
            this.gato.setVelocityX(-160);
        }
        else{
            this.gato.setVelocityX(0);
        }
    }
}