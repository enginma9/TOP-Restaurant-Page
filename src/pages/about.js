import Enginma from './enginma';
import EarthKingdom from '../assets/Mapearth.png'

class aboutPage{
    constructor(){
        this.main = Enginma.createObject({ type:'div', id:'about-main', classes:[] });
        
        this.main1 = Enginma.createObject({ classes:[ "dramatic", "embolden"],text:"In memory of Iroh, \"The Dragon of the West\"", insertText: true });
        this.main.appendChild( this.main1 );
        
        this.main2 = Enginma.createObject({ classes:[ "dramatic" ], text:"Where there is balance, there is peace", insertText:true });
        this.main.appendChild( this.main2 );
        
        this.main3 = Enginma.createObject({ classes:[ "dramatic" ], text:"Location", insertText:true });
        this.main3.appendChild( Enginma.createObject({ classes:["embolden"], text:"Location", insertText:true }) );
        this.main3.appendChild( Enginma.createImage({ src:EarthKingdom, classes:[] }) );
        this.main3.appendChild( document.createTextNode("Ba Sing Se's Upper Ring") )
        this.main.appendChild( this.main3 );

        this.acknowledge = Enginma.createObject({ classes:[ "dramatic" ] });
        this.ack = Enginma.createObject({ classes:[ "dramatic","embolden"], text:"Acknowledgements", insertText:true })
        this.ack1 = Enginma.createObject({ classes:["dramatic"] });
        Enginma.appendChildren({ parent:this.ack1, children:[ document.createTextNode( "\"Avatar, the Last Airbender\" fan Page made for "), 
                                                        Enginma.createLink({ text:"The Odin Project", address:"https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page" }),
                                                        Enginma.createLink({ text:"Please vote for my Submission (enginma9)", address:"https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page/project_submissions#project_submission_156756" }) 
                                                    ] });
        
        
        this.ack2 = Enginma.createObject({ type:"span", text:"Crucial information supplied by the ", insertText:true });
        this.ack2Link = Enginma.createLink({ text:"Avatar Fandom", address:"https://avatar.fandom.com/wiki/Jasmine_Dragon" });
        this.ack2.appendChild( this.ack2Link );
        this.ack3 = Enginma.createObject({ text:"Background Image, in Public Domain by ", insertText:true });
        this.ack3.appendChild( Enginma.createLink({ text:"William Morris", address:"https://www.rawpixel.com/image/2475934" }) );
        this.ack4 = Enginma.createObject({ text:"Text backround by ", insertText:true });
        this.ack4.appendChild( Enginma.createLink({ text:"Katie Harp on Unsplash", address:"https://unsplash.com/photos/SG59-rbcNRg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" }) );
        Enginma.appendChildren({ parent: this.acknowledge, children:[ this.ack, 
                                                                    this.ack1, //this.ack1Link, 
                                                                    this.ack2, 
                                                                    this.ack3,
                                                                    this.ack4
                                                                 ] });
        this.main.appendChild( this.acknowledge );
    }
}

export default aboutPage;