// Wrap everything in a function to keep your stuff private.
(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("sound1");

    var environment = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    sound1.play = function () {
        // Filtering white noise with the mouse.
        // The Impulse ugen's frequency controlled by a descending xLine.
        var synth = flock.synth({
            synthDef: {
                id: "sound1",
                ugen: "flock.ugen.impulse",
                freq: {
                    ugen: "flock.ugen.xLine",
                    start: 580,
                    end: 0.1,
                    duration: 1.0
                },
                mul: 0.25
            }
        });
        

        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        environment.start();
    };

}());