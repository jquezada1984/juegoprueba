class Nivel1 extends Phaser.Scene{
    suelos;
    gato;

    constructor () {
        super ("Nivel1"); // nombre escena
    }

    preload(){
        this.load.image("fondo",".//resources/fondo.jpg");   
    }
    create(){
        this.add.image(250,250,'fondo');
    }
}