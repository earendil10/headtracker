/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'windowOpen'
   (function(symbolName) {   
   
   })("windowOpen");
   //Edge symbol end:'windowOpen'

   //=========================================================
   
   //Edge symbol: 'Symbol_1'
   (function(symbolName) {   
   
   })("Symbol_1");
   //Edge symbol end:'Symbol_1'

   //=========================================================
   (function(symbolName) {

   })


   //=========================================================
   
   //Edge symbol: 'face'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(Math.random()*20);
         
         

      });
      //Edge binding end

   })("face");
   //Edge symbol end:'face'

   //=========================================================
   
   //Edge symbol: 'triggerDoor'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${trigger}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${trigger}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         // Play the timeline backwards from a label or specific time. For example:
         // sym.playReverse(500); or sym.playReverse("myLabel");
         sym.playReverse("end");
         

      });
      //Edge binding end

   })("triggerDoor");
   //Edge symbol end:'triggerDoor'

   //=========================================================
   
   //Edge symbol: 'cat'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${trigger}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop(0);

      });
      //Edge binding end

   })("cat");
   //Edge symbol end:'cat'

   //=========================================================
   
   //Edge symbol: 'redball'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${trigger}", "mouseover", function(sym, e) {
         
         sym.getSymbol("vibro").play();
         
         // Play an audio track 
         sym.getSymbol("vibro").$("vibro2")[0].play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${trigger}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.getSymbol("vibro").stop();
         
         // Pause an audio track 
         sym.getSymbol("vibro").$("vibro2")[0].pause();
         

      });
      //Edge binding end

   })("redball");
   //Edge symbol end:'redball'

   //=========================================================
   
   //Edge symbol: 'rightball'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_trigger}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("knocker").play();
         

      });
      //Edge binding end

   })("rightball");
   //Edge symbol end:'rightball'

   //=========================================================
   
   //Edge symbol: 'topball'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6837, function(sym, e) {
         // insert code here
         sym.stop(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${trigger}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         // Play an audio track 
         sym.$("bells007")[0].play();

      });
      //Edge binding end

   })("topball");
   //Edge symbol end:'topball'

   //=========================================================
   
   //Edge symbol: 'bottomball'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         // insert code here
         sym.stop(1);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${trigger}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 34, function(sym, e) {
         // insert code here
         // Play an audio track 
         sym.$("fuzz2")[0].play();

      });
      //Edge binding end

   })("bottomball");
   //Edge symbol end:'bottomball'

   //=========================================================
   
   //Edge symbol: 'vibro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38, function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1);
         

      });
      //Edge binding end

   })("vibro");
   //Edge symbol end:'vibro'

   //=========================================================
   
   //Edge symbol: 'knocker'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1642, function(sym, e) {
         // insert code here
         sym.stop(1);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 628, function(sym, e) {
         // insert code here
         // Play an audio track 
         sym.$("glass2")[0].play();

      });
      //Edge binding end

   })("knocker");
   //Edge symbol end:'knocker'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-675796740");