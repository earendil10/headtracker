// Wrap everything in a function to keep your stuff private.
(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("sound2");

    var enviro = flock.init();
    // Expose any public functions or constructors as properties on your namesapce.
    sound2.play = function () {
        // Filtering white noise with the mouse.
        // The Impulse ugen's frequency controlled by a descending xLine.
        // Frequency Stair Stepping Demo
        var clock = flock.enviro.shared.asyncScheduler,
            synth = flock.synth({
                nickName: "sin-synth",
                synthDef: {
                    id: "carrier",
                    ugen: "flock.ugen.sinOsc",
                    freq: 220,
                    mul: {
                        ugen: "flock.ugen.line",
                        start: 0,
                        end: 0.25,
                        duration: 1.0
                    }
                }
            });

        clock.schedule([
            {
                interval: "repeat",
                time: 1.0,
                change: {
                    synth: "sin-synth",
                    values: {
                        "carrier.freq": {
                            synthDef: {
                                ugen: "flock.ugen.sequence",
                                list: [330, 440, 550, 660, 880, 990, 1100, 1210]
                            }
                        }
                    }
                }
            },

            {
                interval: "once",
                time: 8,
                change: {
                    synth: "sin-synth",
                    values: {
                        "carrier.mul.start": 0.25,
                        "carrier.mul.end": 0.0,
                        "carrier.mul.duration": 1.0
                    }
                }
            }
        ]);
        enviro.start();
    };


}());