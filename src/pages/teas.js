import Enginma from './enginma';
import water from '../assets/Water_Tribe_emblem.png';
import earth from '../assets/Earth_Kingdom_emblem.png';
import air from '../assets/Air_Nomads_emblem.png';
import fire from '../assets/Fire_Nation_emblem.png';
import lotus2 from '../assets/lotus2.png'
import lotus1 from '../assets/lotus1.png'

const teas = [
    { name:"Metal Brew", src:earth, type:"Black Tea", description:"Black teas are much stronger in flavor than most and are made with withered leaves. \nThis tea fuels you up for the day, but be warned that it also packs a punch." },
    { name:"The Appa Blend", src:air, type:"Tapioca", description:"Invented by Iroh, this kind of tea is made by stewing tapioca balls until they are soft and tender. \nThe tapioca is subsequently added to a cup of tea, along with a small amount of milk." },
    { name:"Spiced tea", src:fire, type:"", description:"Imported leaves from the fire nation, once offered to Team Avatar by the blood-bending Hama" },
    { name:"Jasmine", src:water, type:"Jasmine", description:"Achieving balance is what really makes this tea shine. By bringing together different expressions of jasmine – as fragrant flowers, also naturally infused into rolled green tea leaves - this tea maintains its gentle nature while being strong enough to stand alone and stand out." },
    { name:"Chi-Enhansing", src:fire, type:"Mix", description:"currently out, due to mass ordering by military" },
    { name:"The White Lotus Tile", src:lotus2, type:"White Tea", description:"White tea is considered the most delicate of all teas by its connoisseurs, but it also holds a complex undercurrent of intriguing tastes and strength under its natural layers of sweetness." },
    { name:"Ba Sing Quon", src:earth, type:"Green Tea", description:"Iroh's personal go-to during the cold winters nights in Ba Sing Se." },
    { name:"Lychee", src:water, type:"Lychee", description:"In the summer, lychee juice is the most popular drink in the Jasmine Dragon." },
    { name:"Bender Tea", src:air, type:"Oolong", description:"This tea grows atop the mountains of the southern islands and its flavor is influenced by the region's independent spirit and the mysterious fog created by water and air.  Blended for those who cultivate a much more balanced approach to life, reflecting the beautiful legacy of Aang and Katara." },
    { name:"Red-blooded Nephew", src:fire, type:"", description:"This tea is amber in color, grassy in taste, and very bitter. It is a blond, complex, and confusing blend, which Iroh resembled to his nephew. Iroh kept the tea on the menu, as he knew whenever a client gravitated to this tea, that they would get along with Zuko." },
    
];

class teaPage{
    constructor(){
        this.main = Enginma.createObject({ id:'teas-main', classes:[] });

        for( let i = 0; i < teas.length; i++ ){
            let teaDiv = Enginma.createObject({ id:'tea-'.concat(i, 'div'), classes:["row"] });
            let left = Enginma.createObject({ id:'tea-'.concat(i, 'left'), classes:["column"] });
            let right = Enginma.createImage({ id:'tea-'.concat(i, 'img'), src:teas[i].src, classes:[ 'tea-img' ] });
            
            //this.main.append({ teaDiv:{y1:{},y2:img} });
            let titleBar = Enginma.createObject({ id:'tea-'.concat( i, 'title-bar' ) });
            let teaName = Enginma.createObject({ type:'span', id:'tea-'.concat( i, '-name'), classes:["embolden"], insertText:true, text:teas[i].name });
            let teaType = Enginma.createObject({ type:'span', id:'tea-'.concat( i, '-type'), insertText:true, text:" - ".concat( teas[i].type, "\n" ) });
            let teaDesc = Enginma.createObject({ type:'div', id:'tea-'.concat( i, '-desc'), insertText:true, text:teas[i].description });
            
            Enginma.appendChildren({ parent:titleBar, children:[ teaName, teaType ] });
            Enginma.appendChildren({ parent:left , children:[ titleBar, teaDesc ] });
            Enginma.appendChildren({ parent:teaDiv, children:[ left, right ] });
            this.main.appendChild( teaDiv );
        }
    }
}

export default teaPage;