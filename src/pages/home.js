import Enginma from './enginma';
import jd from '../assets/Jasmine_Dragon.png'

class homePage{
    constructor(){
        this.main = Enginma.createObject({ type:'div', id:'home-main', classes:[] });
        this.example = Enginma.createObject({ id:'home-ex', classes:["dramatic", "embolden"], insertText:true, text:"Welcome to the Jasmine Dragon" });
        this.example.insertBefore( Enginma.createImage({ src:jd }), this.example.firstChild );
        this.example1 = Enginma.createObject({ type:'div', id:'home-ex1', classes:["dramatic"], insertText:true, text:"Here, you will get more than just \"hot leaf juice.\" \n We put special effort into every pot." });
        this.example2 = Enginma.createObject({ type:'div', id:'home-ex2', classes:["dramatic"], insertText:true, text:"Even though the finest tea maker in the city \n has moved on to the spirit world, \nour humble staff keeps his legacy." });
        
        this.example3 = Enginma.createObject({ type:'div', id:'home-ex3', classes:["dramatic"], insertText:true, text:"If you ever find yourself in the Earth Kingdom's capitol, come see us!" });
        Enginma.appendChildren({ parent: this.main, children:[ this.example, this.example1, this.example2, this.example3 ] });
    }
}

export default homePage;