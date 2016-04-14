// Wrap everything in a function to keep your stuff private.
(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("prueba");

    var environment = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    prueba.play = function () {

        // Filtering white noise with the mouse.
        var synth = flock.synth({
            synthDef: {
                ugen: "flock.ugen.filter.biquad.bp",
                source: {
                    ugen: "flock.ugen.whiteNoise",
                    mul: 0.5
                },
                freq: {
                    ugen: "flock.ugen.mouse.cursor",
                    mul: 1660,
                    add: 40,
                    options: {
                        interoplation: "exponential"
                    }
                },
                q: 2.0
            }
        });

        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        environment.start();
    };

}());