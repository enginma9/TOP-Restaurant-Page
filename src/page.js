import Enginma from './pages/enginma';
import teaPage from './pages/teas';
import homePage from './pages/home';
import aboutPage from './pages/about';
import lotus from './assets/lotus1.png'




class page{
    constructor(){
        this.header = Enginma.createObject({ type:"div", id:"header", classes:["header"], insertText: false });
        this.title = Enginma.createObject({ type:"span", id:"title", classes:["title"], insertText: true, text:"Jasmine Dragon" });
        this.navBar = Enginma.createObject({ type:"div", id:"navigation", classes:["nav" ], insertText: false, text:"Nav" });

        this.homeButton = Enginma.createObject({ type:"div", id:"home-button", classes:[ "active", "row" ], insertText:true, text:"Home" });
        this.teasButton = Enginma.createObject({ type:"div", id:"teas-button", classes:[ "row" ], insertText:true, text:"Teas" });
        this.aboutButton = Enginma.createObject({ type:"div", id:"about-button", classes:[ "row" ], insertText:true, text:"About" });

        Enginma.appendChildren({ parent:this.navBar, children:[ this.homeButton, this.teasButton, this.aboutButton ] });
        //this.marker = Enginma.createImage({ id:"marker", src:lotus, classes:["marker"] });
        //this.homeButton.insertBefore( this.marker, this.homeButton.firstChild );
        this.navBar.addEventListener( "click", function( event ){
            if( event.currentTarget != event.target ){
                let id = event.target.id;
                let base = id.substring(0, event.target.id.length -6);
                let exceptThis = base.concat("main");
                //console.log( event.target.id.slice(-6), event.target.id.length -6, event.target.id.substring(0, event.target.id.length -6).concat("main") );
                
                console.log( "Valid item clicked:".concat( "\nMoving \'active\' to \'", id, "\' of \'", event.currentTarget.id, "\'\nHiding children of \'content\' except \'", exceptThis, "\'" ));
                for( const child of event.currentTarget.children ){
                    child.classList.remove('active');
                }
                event.target.classList.add('active');
                Enginma.hideExcept({ parent:document.getElementById("content"), except: exceptThis });
        //        event.target.insertBefore( document.getElementById("marker") , event.target.firstChild );
            }
        })

        Enginma.appendChildren({ parent:this.header, children:[ this.title, this.navBar ] });
        
        this.content = Enginma.createObject({ type:"div", id:"content", classes:["content"], insertText: false });
        this.tea = new teaPage;
        this.home = new homePage;
        this.about = new aboutPage;

        Enginma.appendChildren({ parent:this.content, children:[ this.tea.main, this.home.main, this.about.main ] });
        Enginma.hideExcept({ parent:this.content, except:"home-main" });
        this.footer = Enginma.createObject({ type:"div", id:"footer", classes:["footer"], insertText: false });
        Enginma.appendChildren({ parent:document.body, children:[ this.header, this.content, this.footer ] });
    }
}
export default page;