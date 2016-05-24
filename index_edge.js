/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "height",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [                        
                        {
                            id: 'walls2',
                            type: 'image',
                            rect: ['-5px', '-3px', '559px', '405px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"walls2.png",'0px','0px']
                        },
                        {
                            id: 'redball',
                            symbolName: 'redball',
                            type: 'rect',
                            rect: ['25px', '106px', '34', '33', 'auto', 'auto']
                        },
                        {
                            id: 'rightball',
                            symbolName: 'rightball',
                            type: 'rect',
                            rect: ['471px', '169', '34', '33', 'auto', 'auto']
                        },
                        {
                            id: 'topball',
                            symbolName: 'topball',
                            type: 'rect',
                            rect: ['308px', '47px', '26', '26', 'auto', 'auto']
                        },
                        {
                            id: 'bottomball',
                            symbolName: 'bottomball',
                            type: 'rect',
                            rect: ['202', '308', '56', '55', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid61",
                            "left",
                            0,
                            0,
                            "linear",
                            "${topball}",
                            '308px',
                            '308px'
                        ],
                        [
                            "eid57",
                            "top",
                            0,
                            0,
                            "linear",
                            "${redball}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid65",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            [39,50],
                            [39,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1643",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            [39,50],
                            [39,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1644",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            [39,50],
                            [39,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1645",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            [39,50],
                            [39,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1646",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            [39,50],
                            [39,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1647",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            [39,50],
                            [39,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid58",
                            "left",
                            0,
                            0,
                            "linear",
                            "${redball}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid60",
                            "top",
                            0,
                            0,
                            "linear",
                            "${topball}",
                            '47px',
                            '47px'
                        ],
                        [
                            "eid59",
                            "left",
                            0,
                            0,
                            "linear",
                            "${rightball}",
                            '471px',
                            '471px'
                        ],
                            [ "eid696", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${topball}', [] ] ],
                            [ "eid938", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bottomball}', [] ] ]
                    ]
                }
            },
            "windowOpen": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '45px', '47px', 'auto', 'auto'],
                            id: 'window3',
                            type: 'image',
                            clip: 'rect(-0.084228515625px 45px 47px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/window3.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '45px', '47px', 'auto', 'auto'],
                            id: 'shape2',
                            opacity: '0.35219147245763',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/shape2.png', '0px', '0px']
                        },
                        {
                            id: 'triggerDoor',
                            symbolName: 'triggerDoor',
                            rect: ['0', '0', '45', '47', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '45px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '10px', '5px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(241,11,11,1)']
                        },
                        {
                            rect: ['15px', '1px', '7px', '4px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2Copy2',
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(241,11,11,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '23px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid15",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Ellipse2Copy2}",
                            '7px',
                            '7px'
                        ],
                        [
                            "eid13",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Ellipse2Copy2}",
                            '4px',
                            '4px'
                        ]
                    ]
                }
            },
            "face": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25px', '32px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "triggerDoor": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '45px', '47px', 'auto', 'auto'],
                            id: 'shape',
                            type: 'image',
                            clip: 'rect(0px 45px 47px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/shape.png', '0px', '0px']
                        },
                        {
                            rect: ['-13px', '-12px', '69px', '73px', 'auto', 'auto'],
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            id: 'trigger',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '45px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 1639.58203125,
                    autoPlay: true,
                    labels: {
                        "end": 500
                    },
                    data: [
                        [
                            "eid2",
                            "clip",
                            0,
                            500,
                            "linear",
                            "${shape}",
                            [0,45,47,0],
                            [41.47509765625,45,47,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "cat": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sitting-cat-silhouette',
                            type: 'image',
                            rect: ['0px', '0px', '98px', '89px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sitting-cat-silhouette.png', '0px', '0px']
                        },
                        {
                            rect: ['73px', '16px', '9px', '9px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse5',
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['0px', '0px', '98px', '89px', 'auto', 'auto'],
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            id: 'trigger',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '98px', '89px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Ellipse5}",
                            '76px',
                            '41px'
                        ],
                        [
                            "eid36",
                            "left",
                            500,
                            1750,
                            "linear",
                            "${Ellipse5}",
                            '41px',
                            '73px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Ellipse5}",
                            '18px',
                            '-53px'
                        ],
                        [
                            "eid35",
                            "top",
                            500,
                            1750,
                            "linear",
                            "${Ellipse5}",
                            '-53px',
                            '16px'
                        ],
                        [
                            "eid30",
                            "height",
                            0,
                            500,
                            "linear",
                            "${Ellipse5}",
                            '9px',
                            '85px'
                        ],
                        [
                            "eid33",
                            "height",
                            500,
                            1750,
                            "linear",
                            "${Ellipse5}",
                            '85px',
                            '15px'
                        ],
                        [
                            "eid31",
                            "width",
                            0,
                            500,
                            "linear",
                            "${Ellipse5}",
                            '9px',
                            '85px'
                        ],
                        [
                            "eid34",
                            "width",
                            500,
                            1750,
                            "linear",
                            "${Ellipse5}",
                            '85px',
                            '15px'
                        ]
                    ]
                }
            },
            "redball": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'vibro',
                            symbolName: 'vibro',
                            rect: ['42', '86', '34', '33', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'lb',
                            type: 'image',
                            rect: ['3px', '0', '74px', '148px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lb.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '4px', '4px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse12',
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(4,0,0,1.00)']
                        },
                        {
                            rect: ['22px', '67px', '73px', '72px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            id: 'trigger',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(249,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '34px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                            [ "eid187", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${vibro}', [] ] ]
                    ]
                }
            },
            "rightball": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'knocker',
                            symbolName: 'knocker',
                            rect: ['-24', '-67', '100', '100', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['43px', '-52px', '4px', '10px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse12',
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(4,0,0,1.00)']
                        },
                        {
                            rect: ['-24px', '-67px', '86px', '126px', 'auto', 'auto'],
                            id: '_trigger',
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(4,0,0,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '34px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                            [ "eid422", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${knocker}', [] ] ]
                    ]
                }
            },
            "topball": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['9px', '245px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse10',
                            stroke: [1, 'rgb(1, 0, 0)', 'solid'],
                            display: 'block',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['181px', '297px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse15',
                            stroke: [1, 'rgb(1, 0, 0)', 'solid'],
                            display: 'none',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            rect: ['197px', '309px', '15px', '15px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse16',
                            stroke: [1, 'rgb(1, 0, 0)', 'solid'],
                            display: 'none',
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            id: 'bb',
                            type: 'image',
                            rect: ['-19px', '-29px', '67px', '133px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bb.png', '0px', '0px']
                        },
                        {
                            rect: ['-35px', '-22px', '94px', '51px', 'auto', 'auto'],
                            id: 'trigger',
                            stroke: [1, 'rgb(1, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(59,59,59,0)']
                        },
                        {
                            rect: ['13px', '16px', '2px', '2px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse17',
                            stroke: [1, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['198px', '304px', '4px', '11px', 'auto', 'auto'],
                            transform: [[], [], ['0', '44'], ['1', '0.15385']],
                            id: 'Rectangle12',
                            stroke: [1, 'rgba(1, 0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/bells007.mp3'],
                            id: 'bells007',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '26px', '26px']
                        }
                    }
                },
                timeline: {
                    duration: 6836.587740917,
                    autoPlay: true,
                    data: [
                        [
                            "eid647",
                            "display",
                            750,
                            0,
                            "easeOutBounce",
                            "${Ellipse10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid655",
                            "height",
                            1385,
                            422,
                            "easeOutBounce",
                            "${Ellipse16}",
                            '15px',
                            '0px'
                        ],
                        [
                            "eid643",
                            "width",
                            730,
                            0,
                            "easeOutBounce",
                            "${Ellipse15}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid644",
                            "height",
                            730,
                            0,
                            "easeOutBounce",
                            "${Ellipse15}",
                            '15px',
                            '15px'
                        ],
                        [
                            "eid753",
                            "height",
                            1807,
                            5030,
                            "linear",
                            "${Ellipse17}",
                            '2px',
                            '17px'
                        ],
                        [
                            "eid759",
                            "left",
                            1807,
                            5030,
                            "linear",
                            "${Ellipse17}",
                            '13px',
                            '9px'
                        ],
                        [
                            "eid660",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${Ellipse16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid659",
                            "display",
                            1385,
                            0,
                            "easeOutBounce",
                            "${Ellipse16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid794",
                            "display",
                            1807,
                            0,
                            "linear",
                            "${Ellipse16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid658",
                            "width",
                            1385,
                            422,
                            "easeOutBounce",
                            "${Ellipse16}",
                            '15px',
                            '0px'
                        ],
                        [
                            "eid649",
                            "display",
                            0,
                            0,
                            "easeOutBounce",
                            "${Ellipse15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid648",
                            "display",
                            730,
                            0,
                            "easeOutBounce",
                            "${Ellipse15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid650",
                            "display",
                            1385,
                            0,
                            "easeOutBounce",
                            "${Ellipse15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid657",
                            "left",
                            1385,
                            422,
                            "easeOutBounce",
                            "${Ellipse16}",
                            '181px',
                            '197px'
                        ],
                        [
                            "eid757",
                            "width",
                            1807,
                            5030,
                            "linear",
                            "${Ellipse17}",
                            '2px',
                            '17px'
                        ],
                        [
                            "eid645",
                            "left",
                            730,
                            655,
                            "easeOutBounce",
                            "${Ellipse15}",
                            '9px',
                            '181px'
                        ],
                        [
                            "eid656",
                            "top",
                            1385,
                            422,
                            "easeOutBounce",
                            "${Ellipse16}",
                            '297px',
                            '309px'
                        ],
                        [
                            "eid646",
                            "top",
                            730,
                            655,
                            "easeOutBounce",
                            "${Ellipse15}",
                            '245px',
                            '297px'
                        ],
                        [
                            "eid755",
                            "top",
                            1807,
                            5030,
                            "linear",
                            "${Ellipse17}",
                            '16px',
                            '9px'
                        ],
                        [
                            "eid634",
                            "top",
                            0,
                            730,
                            "easeOutBounce",
                            "${Ellipse10}",
                            '9px',
                            '245px'
                        ]
                    ]
                }
            },
            "bottomball": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-115px', '33px', '375px', '367px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Ellipse11',
                            stroke: [1, 'rgba(1,0,0,0.00)', 'solid'],
                            type: 'ellipse',
                            fill: ['rgba(224,200,0,1.00)']
                        },
                        {
                            rect: ['-18px', '18px', '90px', '53px', 'auto', 'auto'],
                            id: 'trigger',
                            stroke: [1, 'rgba(1, 0, 0, 0)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(224,200,0,0.00)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/fuzz.mp3'],
                            id: 'fuzz2',
                            rect: ['96', '28', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '56px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 4250,
                    autoPlay: true,
                    data: [
                        [
                            "eid67",
                            "filter.drop-shadow.offsetH",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid922",
                            "top",
                            0,
                            991,
                            "easeInCubic",
                            "${Ellipse11}",
                            '28px',
                            '-296px'
                        ],
                        [
                            "eid930",
                            "top",
                            991,
                            3259,
                            "easeInCubic",
                            "${Ellipse11}",
                            '-296px',
                            '33px'
                        ],
                        [
                            "eid923",
                            "width",
                            0,
                            991,
                            "easeInCubic",
                            "${Ellipse11}",
                            '42px',
                            '375px'
                        ],
                        [
                            "eid931",
                            "width",
                            991,
                            3259,
                            "easeInCubic",
                            "${Ellipse11}",
                            '375px',
                            '43px'
                        ],
                        [
                            "eid69",
                            "filter.drop-shadow.blur",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid68",
                            "filter.drop-shadow.offsetV",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid66",
                            "filter.drop-shadow.color",
                            0,
                            0,
                            "linear",
                            "${bottomball}",
                            'rgba(0,0,0,0)',
                            'rgba(0,0,0,0)'
                        ],
                        [
                            "eid997",
                            "filter.blur",
                            0,
                            991,
                            "easeInCubic",
                            "${Ellipse11}",
                            '0px',
                            '100.00630040323px'
                        ],
                        [
                            "eid999",
                            "filter.blur",
                            991,
                            3259,
                            "easeInCubic",
                            "${Ellipse11}",
                            '100.00630187988281px',
                            '0px'
                        ],
                        [
                            "eid924",
                            "left",
                            0,
                            991,
                            "easeInCubic",
                            "${Ellipse11}",
                            '6px',
                            '-115px'
                        ],
                        [
                            "eid932",
                            "left",
                            991,
                            3259,
                            "easeInCubic",
                            "${Ellipse11}",
                            '-115px',
                            '5px'
                        ],
                        [
                            "eid921",
                            "height",
                            0,
                            991,
                            "easeInCubic",
                            "${Ellipse11}",
                            '41px',
                            '367px'
                        ],
                        [
                            "eid929",
                            "height",
                            991,
                            3259,
                            "easeInCubic",
                            "${Ellipse11}",
                            '367px',
                            '42px'
                        ]
                    ]
                }
            },
            "vibro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-2px', '0px', '34px', '37px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse8',
                            stroke: [2, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(249,0,0,1)']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/vibro.mp3'],
                            id: 'vibro2',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '34px', '33px']
                        }
                    }
                },
                timeline: {
                    duration: 38,
                    autoPlay: true,
                    data: [
                        [
                            "eid77",
                            "left",
                            0,
                            38,
                            "linear",
                            "${Ellipse8}",
                            '0px',
                            '-2px'
                        ],
                        [
                            "eid79",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Ellipse8}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid80",
                            "top",
                            38,
                            0,
                            "linear",
                            "${Ellipse8}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid75",
                            "width",
                            0,
                            38,
                            "linear",
                            "${Ellipse8}",
                            '34px',
                            '37px'
                        ],
                        [
                            "eid76",
                            "height",
                            0,
                            38,
                            "linear",
                            "${Ellipse8}",
                            '33px',
                            '37px'
                        ]
                    ]
                }
            },
            "knocker": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['24px', '-67px', '74px', '296px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [1, 'rgb(1, 0, 0)', 'solid'],
                            id: 'Ellipse14',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(59,59,59,0.00)']
                        },
                        {
                            transform: [[], [], [], ['0.89', '0.89']],
                            rect: ['8px', '54px', '32px', '31px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'Ellipse9',
                            stroke: [1, 'rgb(1, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(59,59,59,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '100px', '100px', 'auto', 'auto'],
                            borderRadius: ['0px', '0px', '0px', '0px'],
                            id: 'rh',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rh.png', '0px', '0px']
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/glass.mp3'],
                            id: 'glass',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/glass.mp3'],
                            id: 'glass2',
                            rect: ['-223', '233', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '100px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 1642,
                    autoPlay: true,
                    data: [
                        [
                            "eid306",
                            "border-bottom-right-radius",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [0,0],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid299",
                            "border-bottom-left-radius",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid303",
                            "border-bottom-left-radius",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [0,0],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid310",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            '0deg',
                            '23deg'
                        ],
                        [
                            "eid312",
                            "rotateZ",
                            500,
                            128,
                            "linear",
                            "${Ellipse9}",
                            '23deg',
                            '-28deg'
                        ],
                        [
                            "eid314",
                            "rotateZ",
                            628,
                            372,
                            "linear",
                            "${Ellipse9}",
                            '-28deg',
                            '-1deg'
                        ],
                        [
                            "eid300",
                            "border-top-left-radius",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid318",
                            "left",
                            628,
                            1014,
                            "easeOutQuad",
                            "${Ellipse14}",
                            '66px',
                            '24px'
                        ],
                        [
                            "eid309",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            '54px',
                            '60px'
                        ],
                        [
                            "eid304",
                            "border-top-left-radius",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [0,0],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid311",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            '0deg',
                            '23deg'
                        ],
                        [
                            "eid313",
                            "rotateZ",
                            500,
                            128,
                            "linear",
                            "${rh}",
                            '23deg',
                            '-28deg'
                        ],
                        [
                            "eid315",
                            "rotateZ",
                            628,
                            372,
                            "linear",
                            "${rh}",
                            '-28deg',
                            '-1deg'
                        ],
                        [
                            "eid301",
                            "border-top-right-radius",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid298",
                            "-webkit-transform-origin",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [50,50],
                            [69,20.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1648",
                            "-moz-transform-origin",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [50,50],
                            [69,20.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1649",
                            "-ms-transform-origin",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [50,50],
                            [69,20.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1650",
                            "msTransformOrigin",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [50,50],
                            [69,20.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1651",
                            "-o-transform-origin",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [50,50],
                            [69,20.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1652",
                            "transform-origin",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [50,50],
                            [69,20.8],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid308",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            '8px',
                            '2px'
                        ],
                        [
                            "eid317",
                            "top",
                            628,
                            1014,
                            "easeOutQuad",
                            "${Ellipse14}",
                            '76px',
                            '-67px'
                        ],
                        [
                            "eid305",
                            "border-top-right-radius",
                            0,
                            500,
                            "linear",
                            "${rh}",
                            [0,0],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid385",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Ellipse14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid386",
                            "opacity",
                            628,
                            0,
                            "linear",
                            "${Ellipse14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid543",
                            "opacity",
                            687,
                            955,
                            "easeOutQuad",
                            "${Ellipse14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid319",
                            "width",
                            628,
                            1014,
                            "easeOutQuad",
                            "${Ellipse14}",
                            '8px',
                            '74px'
                        ],
                        [
                            "eid307",
                            "-webkit-transform-origin",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [208.01,-126.51],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1653",
                            "-moz-transform-origin",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [208.01,-126.51],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1654",
                            "-ms-transform-origin",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [208.01,-126.51],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1655",
                            "msTransformOrigin",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [208.01,-126.51],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1656",
                            "-o-transform-origin",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [208.01,-126.51],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1657",
                            "transform-origin",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [208.01,-126.51],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid316",
                            "height",
                            628,
                            1014,
                            "easeOutQuad",
                            "${Ellipse14}",
                            '28px',
                            '296px'
                        ],
                        [
                            "eid302",
                            "border-bottom-right-radius",
                            0,
                            500,
                            "linear",
                            "${Ellipse9}",
                            [50,50],
                            [90.53,11.35],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-675796740");
