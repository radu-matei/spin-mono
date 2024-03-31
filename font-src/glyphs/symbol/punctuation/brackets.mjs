'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r321_t) {
    var r321_n, r321_i, r321_a, _r321_t3, _r321_t4, _r321_t5, _r321_t6, _r321_t7, _r321_t8, _r321_t9, _r321_t10, _r321_t11, _r321_t12, _r321_t13, _r321_t14, _r321_t15, _r321_t16, _r321_t17, _r321_t18, _r321_t19, _r321_t20, _r321_t21, _r321_t22, _r321_t23, _r321_t24, _r321_t25, _r321_t26;
    var _r321_t0 = function () {
        _r321_t7 = function (_r321_t8) {
            _r321_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r321_t8
            };
        };
        _r321_t9 = r321_t instanceof Array;
        if (_r321_t9) {
            _r321_t10 = r321_n = r321_t.length;
            _r321_t11 = r321_i = 0;
            _r321_t12 = function (_r321_t14) {
                return _r321_t7(_r321_t14);
            };
            _r321_t13 = function (_r321_t15) {
                _r321_t16 = r321_i < r321_n;
                if (_r321_t16) {
                    _r321_t0 = function (_r321_t17) {
                        return _r321_t13(r321_i = r321_i + 1);
                    };
                    return {
                        'value': [
                            r321_i,
                            r321_t[r321_i]
                        ],
                        'done': false
                    };
                } else
                    return _r321_t12(_r321_t15);
            };
            return _r321_t13();
        } else {
            _r321_t18 = r321_a = Object.keys(r321_t);
            _r321_t19 = r321_n = r321_a.length;
            _r321_t20 = r321_i = 0;
            _r321_t21 = function (_r321_t23) {
                return _r321_t7(_r321_t23);
            };
            _r321_t22 = function (_r321_t24) {
                _r321_t25 = r321_i < r321_n;
                if (_r321_t25) {
                    _r321_t0 = function (_r321_t26) {
                        return _r321_t22(r321_i = r321_i + 1);
                    };
                    return {
                        'value': [
                            r321_a[r321_i],
                            r321_t[r321_a[r321_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r321_t21(_r321_t24);
            };
            return _r321_t22();
        }
    };
    var _r321_t1 = function (x) {
        try {
            return _r321_t0(x);
        } catch (ex) {
            return _r321_t2(ex);
        }
    };
    var _r321_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11)
        _r321_t3 = this;
    else {
        _r321_t4 = function () {
            void 0;
        };
        _r321_t4.prototype = _r1_t11.prototype;
        _r321_t3 = new _r321_t4();
    }
    _r321_t3[Symbol.iterator] = function () {
        return _r321_t3;
    };
    _r321_t3.next = _r321_t1;
    _r321_t3.throw = function (x) {
        return _r321_t2(x);
    };
    return _r321_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Joining = _r1_t9.Joining;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r271_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Brackets', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var _r272_t6, _r272_t7, _r272_t8, _r272_tag9, _r272_t10, _r272_tag11, _r272_t12, _r272_tag13, _r272_t14, _r272_tag15, _r272_t16, _r272_tag17, _r272_t18, _r272_tag19, _r272_t20, _r272_tag21, _r272_t22, _r272_tag23;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$Exec$2Lrc5 = _r272_t0['$Exec$'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_DivFrame = _r272_t0.DivFrame;
        var r272_fontMetrics = _r272_t0.fontMetrics;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_SymbolMid = _r272_t1.SymbolMid;
        var r272_ParenTop = _r272_t1.ParenTop;
        var r272_ParenBot = _r272_t1.ParenBot;
        var r272_ApparentTranslate = _r272_t1.ApparentTranslate;
        var r272_Upward = _r272_t1.Upward;
        var r272_Downward = _r272_t1.Downward;
        var r272_Leftward = _r272_t1.Leftward;
        var r272_O = _r272_t1.O;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_CThin = _r272_t1.CThin;
        var r272_EssUpper = _r272_t1.EssUpper;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_OperatorStroke = _r272_t1.OperatorStroke;
        var r272_HSwToV = _r272_t1.HSwToV;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_g4 = _r272_t2.g4;
        var r272_corner = _r272_t2.corner;
        var r272_flat = _r272_t2.flat;
        var r272_curl = _r272_t2.curl;
        var r272_end = _r272_t2.end;
        var r272_straight = _r272_t2.straight;
        var r272_widths = _r272_t2.widths;
        var r272_heading = _r272_t2.heading;
        var r272_alsoThru = _r272_t2.alsoThru;
        var r272_quadControls = _r272_t2.quadControls;
        var r272_archv = _r272_t2.archv;
        var r272_arcvh = _r272_t2.arcvh;
        var r272_dispiro = _r272_t2.dispiro;
        var r272_xn$spirooutline$1aao = _r272_t2['spiro-outline'];
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var _r272_t4 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r272_Rect = _r272_t4.Rect;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_FlipAround = _r272_t4.FlipAround;
        var r272_ForceUpright = _r272_t4.ForceUpright;
        var r272_xn$withtransform$5sIl = _r272_t4['with-transform'];
        var r272_MaskAbove = _r272_t4.MaskAbove;
        var r272_MaskBelow = _r272_t4.MaskBelow;
        var _r272_t5 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_alias = _r272_t5.alias;
        var r272_turned = _r272_t5.turned;
        var r272_MosaicTop = r272_fontMetrics.os2.sTypoAscender;
        var r272_MosaicBottom = r272_fontMetrics.os2.sTypoDescender;
        var r272_MosaicHeight = r272_MosaicTop - r272_MosaicBottom;
        var r272_Paren = function () {
            var r277_Dim, r277_Shape, r277_UpperShape, r277_ExtensionShape, r277_LowerShape, r277_ShapeMask;
            var r277_exports = {};
            r277_exports.Dim = r277_Dim = function () {
                var _r285_t6;
                var _r285_t7 = arguments;
                var _r285_t0 = [].slice.call(_r285_t7, 0);
                var _r285_t1 = [];
                var _r285_t2 = 0;
                while (_r285_t2 < _r285_t0.length) {
                    if (!(_r285_t0[_r285_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                        _r285_t1.push(_r285_t0[_r285_t2]);
                    _r285_t2 = _r285_t2 + 1;
                }
                var _r285_t3 = _r285_t0;
                var _r285_t4 = _r285_t3.length;
                var _r285_t5 = 0;
                while (_r285_t5 < _r285_t4) {
                    _r285_t2 = _r285_t3[_r285_t5];
                    if (_r285_t2 && _r285_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'df')
                        r285_df = _r285_t2.right;
                    if (_r285_t2 && _r285_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'delta')
                        r285_delta = _r285_t2.right;
                    if (_r285_t2 && _r285_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'dp')
                        r285_dp = _r285_t2.right;
                    if (_r285_t2 && _r285_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'sw')
                        r285_sw = _r285_t2.right;
                    _r285_t5 = _r285_t5 + 1;
                }
                var r285_df = r1_fallback(r285_df, _r285_t1[0]);
                var r285_delta = r1_fallback(r285_delta, _r285_t1[1], 0);
                var r285_dp = r1_fallback(r285_dp, _r285_t1[2], r1_DesignParameters);
                var r285_sw = r1_fallback(r285_sw, _r285_t1[3], r272_Stroke);
                return {
                    'outside': r1_mix(r285_df.leftSB, r285_df.rightSB, r285_dp.parenOutside) - r285_delta - r272_HSwToV(r285_dp.parenOutsideSwAdj) * r285_sw + r272_O,
                    'inside': r1_mix(r285_df.leftSB, r285_df.rightSB, r285_dp.parenInside) - r272_HSwToV(r285_dp.parenInsideSwAdj) * r285_sw,
                    'bottom': r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r285_dp.parenOvershoot) - r285_delta,
                    'top': r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r285_dp.parenOvershoot) + r285_delta,
                    'mid': r272_SymbolMid
                };
            };
            r277_exports.Shape = r277_Shape = function () {
                var _r291_t6;
                var _r291_t7 = arguments;
                var _r291_t0 = [].slice.call(_r291_t7, 0);
                var _r291_t1 = [];
                var _r291_t2 = 0;
                while (_r291_t2 < _r291_t0.length) {
                    if (!(_r291_t0[_r291_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                        _r291_t1.push(_r291_t0[_r291_t2]);
                    _r291_t2 = _r291_t2 + 1;
                }
                var _r291_t3 = _r291_t0;
                var _r291_t4 = _r291_t3.length;
                var _r291_t5 = 0;
                while (_r291_t5 < _r291_t4) {
                    _r291_t2 = _r291_t3[_r291_t5];
                    if (_r291_t2 && _r291_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'df')
                        r291_df = _r291_t2.right;
                    if (_r291_t2 && _r291_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'sw')
                        r291_sw = _r291_t2.right;
                    if (_r291_t2 && _r291_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r291_t2.left === 'dp')
                        r291_dp = _r291_t2.right;
                    _r291_t5 = _r291_t5 + 1;
                }
                var r291_df = r1_fallback(r291_df, _r291_t1[0]);
                var r291_sw = r1_fallback(r291_sw, _r291_t1[1], r272_Stroke);
                var r291_dp = r1_fallback(r291_dp, _r291_t1[2], r1_DesignParameters);
                var r291_dim = r277_Dim(r291_df, new r272_xn$NamedParameterPair$2Lrc9b('delta', 0), new r272_xn$NamedParameterPair$2Lrc9b('dp', r291_dp), new r272_xn$NamedParameterPair$2Lrc9b('sw', r291_sw));
                return r272_dispiro(r272_widths.lhs(r291_sw), r272_g4(r291_dim.inside, r291_dim.top), r272_quadControls(1, 1 - r291_dp.parenCurliness), r272_g4(r291_dim.outside, r291_dim.mid), r272_quadControls(0, r291_dp.parenCurliness), r272_g4(r291_dim.inside, r291_dim.bottom));
            };
            r277_exports.UpperShape = r277_UpperShape = function (r300_df, r300_sw) {
                var _r300_leti0, _r300_t1, _r300_t2, _r300_t4, _r300_tag5;
                var _r300_t3 = r277_Dim(r300_df, 0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r300_sw));
                return function (_r300_leti0) {
                    var r301_dim = _r300_leti0;
                    return r272_dispiro(r272_widths.lhs(r300_sw), r272_g4(r301_dim.inside, r301_dim.top), r272_quadControls(1, 1 - r1_DesignParameters.parenCurliness), r272_g4.down.end(r301_dim.outside, r272_MosaicBottom, r272_heading(r272_Downward)));
                }(_r300_t3);
            };
            r277_exports.ExtensionShape = r277_ExtensionShape = function (r304_df, r304_sw) {
                var _r304_leti0, _r304_t1, _r304_t2, _r304_t4, _r304_tag5;
                var _r304_t3 = r277_Dim(r304_df, 0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r304_sw));
                return function (_r304_leti0) {
                    var r305_dim = _r304_leti0;
                    return r272_dispiro(r272_widths.lhs(r304_sw), r272_g4.down.start(r305_dim.outside, r272_MosaicTop, r272_heading(r272_Downward)), r272_g4.down.end(r305_dim.outside, r272_MosaicBottom, r272_heading(r272_Downward)));
                }(_r304_t3);
            };
            r277_exports.LowerShape = r277_LowerShape = function (r308_df, r308_sw) {
                var _r308_leti0, _r308_t1, _r308_t2, _r308_t4, _r308_tag5;
                var _r308_t3 = r277_Dim(r308_df, 0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r308_sw));
                return function (_r308_leti0) {
                    var r309_dim = _r308_leti0;
                    return r272_dispiro(r272_widths.lhs(r308_sw), r272_g4.down.start(r309_dim.outside, r272_MosaicTop, r272_heading(r272_Downward)), r272_quadControls(0, r1_DesignParameters.parenCurliness), r272_g4(r309_dim.inside, r309_dim.bottom));
                }(_r308_t3);
            };
            r277_exports.ShapeMask = r277_ShapeMask = function (r312_df, r312_sw, r312_delta) {
                var _r312_leti0, _r312_t1, _r312_t2, _r312_t4, _r312_tag5;
                var _r312_t3 = r277_Dim(r312_df, r312_delta, new r272_xn$NamedParameterPair$2Lrc9b('sw', r312_sw));
                return function (_r312_leti0) {
                    var r313_dim = _r312_leti0;
                    return r272_xn$spirooutline$1aao(r272_corner(r313_dim.inside, r313_dim.top), r272_quadControls(1, 1 - r1_DesignParameters.parenCurliness), r272_g4(r313_dim.outside, r313_dim.mid), r272_quadControls(0, r1_DesignParameters.parenCurliness), r272_corner(r313_dim.inside, r313_dim.bottom));
                }(_r312_t3);
            };
            return r277_exports;
        }();
        (function () {
            var r316_suffix, r316_shape, _r316_t2;
            var r316_NormalShape = function (r317_df) {
                var _r317_t0, _r317_t1;
                return r272_Paren.Shape(r317_df, r317_df.mvs);
            };
            var r316_LargeContourShape = function (r318_df) {
                var _r318_t0, _r318_t1;
                var r318_dp = {
                    'parenOutside': 0.25 * r272_DesignParameters.parenOutside,
                    'parenInside': r272_DesignParameters.parenInside,
                    'parenOutsideSwAdj': r272_DesignParameters.parenOutsideSwAdj,
                    'parenInsideSwAdj': r272_DesignParameters.parenInsideSwAdj,
                    'parenCurliness': r1_mix(1, r272_DesignParameters.parenCurliness, 0.5),
                    'parenOvershoot': r272_DesignParameters.parenOvershoot
                };
                return r272_Paren.Shape(r318_df, r318_df.mvs, r318_dp);
            };
            var r316_FlatArcShape = function (r319_df) {
                var _r319_t0, _r319_t1;
                var r319_dp = {
                    'parenOutside': 0.5 * r272_DesignParameters.parenOutside,
                    'parenInside': r272_DesignParameters.parenInside,
                    'parenOutsideSwAdj': r272_DesignParameters.parenOutsideSwAdj,
                    'parenInsideSwAdj': r272_DesignParameters.parenInsideSwAdj,
                    'parenCurliness': r1_mix(1, r272_DesignParameters.parenCurliness, 0.5),
                    'parenOvershoot': r272_DesignParameters.parenOvershoot
                };
                var r319_dim = r272_Paren.Dim(r319_df, 0, r319_dp);
                return r272_dispiro(r272_widths.lhs(r319_df.mvs), r272_g4.left.start(r319_dim.inside, r319_dim.top), r272_archv(), r272_flat(r319_dim.outside, r1_mix(r319_dim.bottom, r319_dim.top, 0.65)), r272_curl(r319_dim.outside, r1_mix(r319_dim.bottom, r319_dim.top, 0.35)), r272_arcvh(), r272_g4.right.start(r319_dim.inside, r319_dim.bottom));
            };
            var r316_SimpleParenConfig = {
                'normal': r316_NormalShape,
                'largeContour': r316_LargeContourShape,
                'flatArc': r316_FlatArcShape
            };
            var _r316_t0 = _r1_t2(r316_SimpleParenConfig)[Symbol.iterator]();
            var _r316_t1 = void 0;
            while (!(_r316_t1 = _r316_t0.next()).done) {
                _r316_t2 = _r316_t1.value;
                r316_suffix = _r316_t2[0];
                r316_shape = _r316_t2[1];
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeft.' + r316_suffix, null, r316_shape(r272_DivFrame(1)));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('doubleParenLeft.' + r316_suffix, null, function () {
                    var _r326_t1;
                    var _r326_t0 = this;
                    var r326_currentGlyph = _r326_t0;
                    var r326_df = r272_DivFrame(1, 3);
                    var r326_subDf = r326_df.slice(3, 2);
                    r326_currentGlyph.include(r316_shape(r326_subDf));
                    r326_currentGlyph.include(r272_xn$withtransform$5sIl(r272_ApparentTranslate(r326_df.width - r326_subDf.width, 0), r316_shape(r326_subDf)));
                    return void 0;
                });
                r272_turned('parenRight.' + r316_suffix, null, 'parenLeft.' + r316_suffix, r272_Middle, r272_SymbolMid);
                r272_turned('doubleParenRight.' + r316_suffix, null, 'doubleParenLeft.' + r316_suffix, r272_Middle, r272_SymbolMid);
            }
            r272_xn$selectvariant$7Hrq('parenLeft', '(');
            r272_xn$selectvariant$7Hrq('parenRight', ')');
            r272_xn$selectvariant$7Hrq('doubleParenLeft', 11816, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'parenLeft'));
            r272_xn$selectvariant$7Hrq('doubleParenRight', 11817, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'parenRight'));
            r272_alias('flattenedParenLeft', 10222, 'parenLeft.flatArc');
            r272_alias('flattenedParenRight', 10223, 'parenRight.flatArc');
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeftUpper', 9115, function () {
                var _r333_t1;
                var _r333_t0 = this;
                var r333_currentGlyph = _r333_t0;
                r333_currentGlyph.include(r272_ForceUpright());
                r333_currentGlyph.include(r272_Paren.UpperShape(r272_DivFrame(1), r272_Stroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeftExtension', 9116, function () {
                var _r338_t1;
                var _r338_t0 = this;
                var r338_currentGlyph = _r338_t0;
                r338_currentGlyph.include(r272_ForceUpright());
                r338_currentGlyph.include(r272_Paren.ExtensionShape(r272_DivFrame(1), r272_Stroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('parenLeftLower', 9117, function () {
                var _r343_t1;
                var _r343_t0 = this;
                var r343_currentGlyph = _r343_t0;
                r343_currentGlyph.include(r272_ForceUpright());
                r343_currentGlyph.include(r272_Paren.LowerShape(r272_DivFrame(1), r272_Stroke));
                return void 0;
            });
            r272_turned('parenRightLower', 9120, 'parenLeftUpper', r272_Middle, r272_SymbolMid);
            r272_turned('parenRightExtension', 9119, 'parenLeftExtension', r272_Middle, r272_SymbolMid);
            r272_turned('parenRightupper', 9118, 'parenLeftLower', r272_Middle, r272_SymbolMid);
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('zNotationParenLeft', 10631, function () {
                var _r348_t1;
                var _r348_t0 = this;
                var r348_currentGlyph = _r348_t0;
                var r348_df = r272_DivFrame(1);
                var r348_fine = r272_AdviceStroke(4);
                var r348_dim = r272_Paren.Dim(r348_df, 0, new r272_xn$NamedParameterPair$2Lrc9b('sw', r348_fine));
                r348_currentGlyph.include(r272_intersection(r272_Rect(r1_mix(r348_dim.bottom, r348_dim.top, 2), r1_mix(r348_dim.top, r348_dim.bottom, 2), 0, r348_dim.inside), r272_union(r272_Paren.Shape(r348_df, r348_fine), r272_intersection(r272_VBar.r(r348_dim.inside, r348_dim.bottom, r348_dim.top, r348_fine), r272_Paren.ShapeMask(r348_df, r348_fine, r272_O)))));
                return void 0;
            });
            return r272_turned('zNotationParenRight', 10632, 'zNotationParenLeft', r272_Middle, r272_SymbolMid);
        }());
        var r272_Bracket = function () {
            var r353_HDim, r353_Mask, r353_Shape;
            var r353_exports = {};
            r353_exports.HDim = r353_HDim = function (r361_barLeft, r361_ext) {
                var _r361_t0, _r361_t1, _r361_t2, _r361_tag3;
                return function () {
                    var r364_l, r364_r;
                    var r364_exports = {};
                    r364_exports.l = r364_l = r1_fallback(r361_barLeft, r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.bracketOutside) - r272_HSwToV(r1_DesignParameters.bracketOutsideSwAdj) * r272_Stroke);
                    r364_exports.r = r364_r = r1_fallback(r361_ext, 0) + r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.bracketInside);
                    return r364_exports;
                }();
            };
            r353_exports.Mask = r353_Mask = function () {
                var _r374_t0, _r374_t1;
                return r272_Rect(r272_MosaicTop, r272_MosaicBottom, -r272_Width, 2 * r272_Width);
            };
            r353_exports.Shape = r353_Shape = function (r376_top, r376_bottom, r376_barLeft, r376_ext) {
                var _r376_t0, _r376_t1;
                return function () {
                    var _r378_t1;
                    var _r378_t0 = this;
                    var r378_currentGlyph = _r378_t0;
                    var r378_hDim = r353_HDim(r376_barLeft, r376_ext);
                    r378_currentGlyph.include(r272_HBar.b(r378_hDim.l, r378_hDim.r, r376_bottom));
                    r378_currentGlyph.include(r272_HBar.t(r378_hDim.l, r378_hDim.r, r376_top));
                    r378_currentGlyph.include(r272_VBar.l(r378_hDim.l, r376_bottom, r376_top));
                    return void 0;
                };
            };
            return r353_exports;
        }();
        (function () {
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeft', '[', r272_Bracket.Shape(r272_ParenTop, r272_ParenBot));
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftUHalf', 11810, r272_intersection(r272_xn$referglyph$1aao('bracketLeft'), r272_MaskAbove(r272_SymbolMid)));
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftLHalf', 11812, r272_intersection(r272_xn$referglyph$1aao('bracketLeft'), r272_MaskBelow(r272_SymbolMid)));
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBracketLeft', null, function () {
                var _r389_t1;
                var _r389_t0 = this;
                var r389_currentGlyph = _r389_t0;
                r1_Joining.set(r389_currentGlyph, r1_Joining.Classes.Right);
                r389_currentGlyph.include(r272_Bracket.Shape(r272_ParenTop, r272_ParenBot, r272_Middle - r272_HSwToV(r272_HalfStroke), r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketInside)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftUpper', 9121, function () {
                var _r393_t1;
                var _r393_t0 = this;
                var r393_currentGlyph = _r393_t0;
                r393_currentGlyph.include(r272_ForceUpright());
                r393_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_Bracket.Shape(r272_ParenTop, r272_ParenBot - r272_MosaicHeight)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftExtension', 9122, function () {
                var _r398_t1;
                var _r398_t0 = this;
                var r398_currentGlyph = _r398_t0;
                r398_currentGlyph.include(r272_ForceUpright());
                r398_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_Bracket.Shape(r272_ParenTop + r272_MosaicHeight, r272_ParenBot - r272_MosaicHeight)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketLeftLower', 9123, function () {
                var _r403_t1;
                var _r403_t0 = this;
                var r403_currentGlyph = _r403_t0;
                r403_currentGlyph.include(r272_ForceUpright());
                r403_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_Bracket.Shape(r272_ParenTop + r272_MosaicHeight, r272_ParenBot)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('dblBracketLeft', 10214, function () {
                var _r408_t1;
                var _r408_t0 = this;
                var r408_currentGlyph = _r408_t0;
                var r408_hDim = r272_Bracket.HDim();
                var r408_sw = Math.min((r408_hDim.r - r408_hDim.l) / 5, r272_AdviceStroke(4));
                r408_currentGlyph.include(r272_union(r272_HBar.b(r408_hDim.l, r408_hDim.r, r272_ParenBot), r272_HBar.t(r408_hDim.l, r408_hDim.r, r272_ParenTop), r272_VBar.l(r408_hDim.l, r272_ParenBot, r272_ParenTop, r408_sw), r272_VBar.m(r1_mix(r408_hDim.l, r408_hDim.r, 1 / 2), r272_ParenBot, r272_ParenTop, r408_sw)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('bracketBarLeft', 8261, function () {
                var _r412_t1;
                var _r412_t0 = this;
                var r412_currentGlyph = _r412_t0;
                var r412_hDim = r272_Bracket.HDim();
                r412_currentGlyph.include(r272_union(r272_HBar.b(r412_hDim.l, r412_hDim.r, r272_ParenBot), r272_HBar.t(r412_hDim.l, r412_hDim.r, r272_ParenTop), r272_HBar.m(r412_hDim.l, r412_hDim.r, r1_mix(r272_ParenBot, r272_ParenTop, 0.5)), r272_VBar.l(r412_hDim.l, r272_ParenBot, r272_ParenTop)));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('barBarLeft', 11808, function () {
                var _r416_t1;
                var _r416_t0 = this;
                var r416_currentGlyph = _r416_t0;
                var r416_hDim = r272_Bracket.HDim();
                r416_currentGlyph.include(r272_union(r272_HBar.m(r416_hDim.l, r416_hDim.r, r1_mix(r272_ParenBot, r272_ParenTop, 0.5)), r272_VBar.l(r416_hDim.l, r272_ParenBot, r272_ParenTop)));
                return void 0;
            });
            r272_turned('bracketRight', ']', 'bracketLeft', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightUHalf', 11811, 'bracketLeftLHalf', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightLHalf', 11813, 'bracketLeftUHalf', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightLower', 9126, 'bracketLeftUpper', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightExtension', 9125, 'bracketLeftExtension', r272_Middle, r272_SymbolMid);
            r272_turned('bracketRightUpper', 9124, 'bracketLeftLower', r272_Middle, r272_SymbolMid);
            r272_turned('dblBracketRight', 10215, 'dblBracketLeft', r272_Middle, r272_SymbolMid);
            r272_turned('bracketBarRight', 8262, 'bracketBarLeft', r272_Middle, r272_SymbolMid);
            r272_turned('barBarRight', 11809, 'barBarLeft', r272_Middle, r272_SymbolMid);
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBracketRight', null, function () {
                var _r420_t1;
                var _r420_t0 = this;
                var r420_currentGlyph = _r420_t0;
                r420_currentGlyph.include(r272_xn$referglyph$1aao('ligExtBracketLeft'), r272_AS_BASE, r272_ALSO_METRICS);
                r420_currentGlyph.include(r272_FlipAround(r272_Middle, r272_SymbolMid));
                r1_Joining.set(r420_currentGlyph, r1_Joining.Classes.Left);
                return void 0;
            });
        }());
        var r272_Brace = function () {
            var r425_UpperHalfShape, r425_LowerHalfShape, r425_UpperThirdShape, r425_LowerThirdShape, r425_CenterThirdShape, r425_ExtensionShape, r425_CurlyShape;
            var r425_exports = {};
            var r425_Dim = function () {
                var _r432_t0, _r432_t1;
                var r432_parenCenter = r1_mix(r272_SB, r272_RightSB, r1_mix(r1_DesignParameters.braceInside, r1_DesignParameters.braceOutside, 0.5));
                var r432_radius = Math.min(r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside) - r432_parenCenter, (r272_ParenTop - r272_SymbolMid - r272_Stroke * 1.5) / 2);
                return {
                    'parenCenter': r432_parenCenter,
                    'radius': r432_radius
                };
            };
            r425_exports.UpperHalfShape = r425_UpperHalfShape = function (r434_top, r434_bottom, r434_sw, r434_pExt) {
                var _r434_t0, _r434_t1;
                return function () {
                    var _r436_t2;
                    var _r436_t1 = this;
                    var r436_currentGlyph = _r436_t1;
                    var _r436_t0 = r425_Dim();
                    var r436_parenCenter = _r436_t0.parenCenter;
                    var r436_radius = _r436_t0.radius;
                    var r436_xIns = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside);
                    var r436_xTip = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceOutside);
                    r436_currentGlyph.include(r272_dispiro(r272_flat((1 + r1_fallback(r434_pExt, 0)) * r436_xIns, r434_top, r272_widths.center.heading(r434_sw, r272_Leftward)), r272_curl(r436_xIns - 0.1, r434_top, r272_heading(r272_Leftward)), r272_archv(), r272_flat(r436_parenCenter, r434_top - r436_radius, r272_heading(r272_Downward)), r272_curl(r436_parenCenter, r434_bottom + r436_radius, r272_heading(r272_Downward)), r272_arcvh(), r272_straight.left.end(r436_xTip, r434_bottom, r272_heading(r272_Leftward))));
                    return void 0;
                };
            };
            r425_exports.LowerHalfShape = r425_LowerHalfShape = function (r439_top, r439_bottom, r439_sw, r439_pExt) {
                var _r439_t0, _r439_t1;
                return function () {
                    var _r441_t2;
                    var _r441_t1 = this;
                    var r441_currentGlyph = _r441_t1;
                    var _r441_t0 = r425_Dim();
                    var r441_parenCenter = _r441_t0.parenCenter;
                    var r441_radius = _r441_t0.radius;
                    var r441_xIns = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside);
                    var r441_xTip = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceOutside);
                    r441_currentGlyph.include(r272_dispiro(r272_flat((1 + r1_fallback(r439_pExt, 0)) * r441_xIns, r439_bottom, r272_widths.center.heading(r439_sw, r272_Leftward)), r272_curl(r441_xIns - 0.1, r439_bottom, r272_heading(r272_Leftward)), r272_archv(), r272_flat(r441_parenCenter, r439_bottom + r441_radius, r272_heading(r272_Upward)), r272_curl(r441_parenCenter, r439_top - r441_radius, r272_heading(r272_Upward)), r272_arcvh(), r272_straight.left.end(r441_xTip, r439_top, r272_heading(r272_Leftward))));
                    return void 0;
                };
            };
            r425_exports.UpperThirdShape = r425_UpperThirdShape = function (r444_top, r444_bottom, r444_sw) {
                var _r444_t0, _r444_t1;
                return function () {
                    var _r446_t2;
                    var _r446_t1 = this;
                    var r446_currentGlyph = _r446_t1;
                    var _r446_t0 = r425_Dim();
                    var r446_parenCenter = _r446_t0.parenCenter;
                    var r446_radius = _r446_t0.radius;
                    r446_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r425_UpperHalfShape(r444_top, r444_bottom - r272_MosaicHeight, r444_sw)));
                    return void 0;
                };
            };
            r425_exports.LowerThirdShape = r425_LowerThirdShape = function (r449_top, r449_bottom, r449_sw) {
                var _r449_t0, _r449_t1;
                return function () {
                    var _r451_t2;
                    var _r451_t1 = this;
                    var r451_currentGlyph = _r451_t1;
                    var _r451_t0 = r425_Dim();
                    var r451_parenCenter = _r451_t0.parenCenter;
                    var r451_radius = _r451_t0.radius;
                    r451_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r425_LowerHalfShape(r449_top + r272_MosaicHeight, r449_bottom, r449_sw)));
                    return void 0;
                };
            };
            r425_exports.CenterThirdShape = r425_CenterThirdShape = function (r454_top, r454_bottom, r454_sw) {
                var _r454_t0, _r454_t1;
                return function () {
                    var _r456_t2;
                    var _r456_t1 = this;
                    var r456_currentGlyph = _r456_t1;
                    var _r456_t0 = r425_Dim();
                    var r456_parenCenter = _r456_t0.parenCenter;
                    var r456_radius = _r456_t0.radius;
                    r456_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_union(r425_UpperHalfShape(r454_top + r272_MosaicHeight, r1_mix(r454_bottom, r454_top, 0.5), r454_sw), r425_LowerHalfShape(r1_mix(r454_bottom, r454_top, 0.5), r454_bottom - r272_MosaicHeight, r454_sw))));
                    return void 0;
                };
            };
            r425_exports.ExtensionShape = r425_ExtensionShape = function (r459_top, r459_bottom, r459_sw) {
                var _r459_t0, _r459_t1;
                return function () {
                    var _r461_t2;
                    var _r461_t1 = this;
                    var r461_currentGlyph = _r461_t1;
                    var _r461_t0 = r425_Dim();
                    var r461_parenCenter = _r461_t0.parenCenter;
                    var r461_radius = _r461_t0.radius;
                    r461_currentGlyph.include(r272_intersection(r272_Bracket.Mask(), r272_union(r425_UpperHalfShape(r459_top + r272_MosaicHeight, r459_bottom - r272_MosaicHeight, r459_sw))));
                    return void 0;
                };
            };
            r425_exports.CurlyShape = r425_CurlyShape = function (r464_sw, r464_pFlatIn, r464_pFlatOut, r464_pExt) {
                var _r464_t0, _r464_t1;
                return function () {
                    var _r466_t1;
                    var _r466_t0 = this;
                    var r466_currentGlyph = _r466_t0;
                    var r466_hs = r464_sw / 2;
                    var r466_xIns = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceInside);
                    var r466_xOus = r1_mix(r272_SB, r272_RightSB, r1_DesignParameters.braceOutside);
                    var r466_m1 = r1_mix(r466_xIns, r466_xOus, r1_DesignParameters.braceCurlyM1 * (1 + 0.5 * r464_pFlatIn));
                    var r466_m2 = r1_mix(r466_xIns, r466_xOus, r1_DesignParameters.braceCurlyM2 * (1 + 0.5 * r464_pFlatOut));
                    var r466_braceRadiusLowLimit = (r272_ParenTop - r272_SymbolMid - r464_sw) * (1 / 3) + r466_hs;
                    var r466_radius1 = r464_sw / 16 + r1_mix(Math.min(r466_xIns - r466_m1, r466_braceRadiusLowLimit), r464_sw, 0.75 * r464_pFlatIn);
                    var r466_radius2 = r464_sw / 16 + r1_mix(Math.min(r466_m2 - r466_xOus, r466_braceRadiusLowLimit), r464_sw, 0.75 * r464_pFlatOut) - r466_hs;
                    var r466_ess = r1_mix(r464_sw, r272_EssUpper * r464_sw / r272_Stroke, 0.25);
                    var r466_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r1_DesignParameters.braceOvershoot);
                    var r466_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r1_DesignParameters.braceOvershoot);
                    var r466_flatLengthIn = Math.max(0.1, r464_pFlatIn * (r466_xIns - r466_xOus));
                    var r466_flatLengthOut = Math.max(0.1, r464_pFlatOut * (r466_xIns - r466_xOus));
                    var r466_fine = r464_sw * r272_CThin;
                    r466_currentGlyph.include(r272_dispiro(r272_flat(r466_xIns * (1 + r464_pExt), r466_top - r466_hs, r272_widths.center.heading(r464_sw, r272_Leftward)), r272_curl(r466_xIns - r466_flatLengthIn, r466_top - r466_hs, r272_heading(r272_Leftward)), r272_archv.superness(2.2 + r464_pFlatIn), r272_g4.down.mid(r466_m1, r466_top - r466_radius1, r272_heading(r272_Downward)), r272_alsoThru(0.5, 0.5, r272_widths.center(r466_ess)), r272_g4.down.mid(r466_m2, r272_SymbolMid + r466_radius2, r272_widths.center.heading(r464_sw, r272_Downward)), r272_arcvh(), r272_flat(r466_xOus + r466_flatLengthOut, r272_SymbolMid + (r464_sw - r466_fine) / 2, r272_widths.center.heading(r466_fine, r272_Leftward)), r272_curl(r466_xOus, r272_SymbolMid + (r464_sw - r466_fine) / 2, r272_heading(r272_Leftward))));
                    r466_currentGlyph.include(r272_dispiro(r272_flat(r466_xIns * (1 + r464_pExt), r466_bot + r466_hs, r272_widths.center.heading(r464_sw, r272_Leftward)), r272_curl(r466_xIns - r466_flatLengthIn, r466_bot + r466_hs, r272_heading(r272_Leftward)), r272_archv.superness(2.2 + r464_pFlatIn), r272_g4.up.mid(r466_m1, r466_bot + r466_radius1, r272_heading(r272_Upward)), r272_alsoThru(0.5, 0.5, r272_widths.center(r466_ess)), r272_g4.up.mid(r466_m2, r272_SymbolMid - r466_radius2, r272_widths.center.heading(r464_sw, r272_Upward)), r272_arcvh(), r272_flat(r466_xOus + r466_flatLengthOut, r272_SymbolMid - (r464_sw - r466_fine) / 2, r272_widths.center.heading(r466_fine, r272_Leftward)), r272_curl(r466_xOus, r272_SymbolMid - (r464_sw - r466_fine) / 2, r272_heading(r272_Leftward))));
                    return void 0;
                };
            };
            return r425_exports;
        }();
        (function () {
            var _r470_t0, _r470_tag1, _r470_t2, _r470_tag3, _r470_t4, _r470_tag5;
            (function () {
                var r472_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r272_DesignParameters.braceOvershoot) - r272_HalfStroke;
                var r472_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r272_DesignParameters.braceOvershoot) + r272_HalfStroke;
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeft.straight', null, function () {
                    var _r475_t1;
                    var _r475_t0 = this;
                    var r475_currentGlyph = _r475_t0;
                    r475_currentGlyph.include(r272_Brace.UpperHalfShape(r472_top, r272_SymbolMid, r272_Stroke));
                    r475_currentGlyph.include(r272_Brace.LowerHalfShape(r272_SymbolMid, r472_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRight.straight', null, 'braceLeft.straight', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceLeft.straight', null, function () {
                    var _r480_t1;
                    var _r480_t0 = this;
                    var r480_currentGlyph = _r480_t0;
                    r1_Joining.set(r480_currentGlyph, r1_Joining.Classes.Right);
                    r480_currentGlyph.include(r272_Brace.UpperHalfShape(r472_top, r272_SymbolMid, r272_Stroke, 1));
                    r480_currentGlyph.include(r272_Brace.LowerHalfShape(r272_SymbolMid, r472_bot, r272_Stroke, 1));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceRight.straight', null, function () {
                    var _r485_t1;
                    var _r485_t0 = this;
                    var r485_currentGlyph = _r485_t0;
                    r485_currentGlyph.include(r272_xn$referglyph$1aao('ligExtBraceLeft.straight'), r272_AS_BASE, r272_ALSO_METRICS);
                    r485_currentGlyph.include(r272_FlipAround(r272_Middle, r272_SymbolMid));
                    r1_Joining.set(r485_currentGlyph, r1_Joining.Classes.Left);
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeftUpper', 9127, function () {
                    var _r490_t1;
                    var _r490_t0 = this;
                    var r490_currentGlyph = _r490_t0;
                    r490_currentGlyph.include(r272_ForceUpright());
                    r490_currentGlyph.include(r272_Brace.UpperThirdShape(r472_top, r472_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRightLower', 9133, 'braceLeftUpper', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeftLower', 9129, function () {
                    var _r495_t1;
                    var _r495_t0 = this;
                    var r495_currentGlyph = _r495_t0;
                    r495_currentGlyph.include(r272_ForceUpright());
                    r495_currentGlyph.include(r272_Brace.LowerThirdShape(r472_top, r472_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRightUpper', 9131, 'braceLeftLower', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeftMiddle', 9128, function () {
                    var _r500_t1;
                    var _r500_t0 = this;
                    var r500_currentGlyph = _r500_t0;
                    r500_currentGlyph.include(r272_ForceUpright());
                    r500_currentGlyph.include(r272_Brace.CenterThirdShape(r472_top, r472_bot, r272_Stroke));
                    return void 0;
                });
                r272_turned('braceRightMiddle', 9132, 'braceLeftMiddle', r272_Middle, r272_SymbolMid);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceExtension', 9130, function () {
                    var _r505_t1;
                    var _r505_t0 = this;
                    var r505_currentGlyph = _r505_t0;
                    r505_currentGlyph.include(r272_ForceUpright());
                    r505_currentGlyph.include(r272_Brace.ExtensionShape(r472_top, r472_bot, r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('whiteBraceLeft.straight', null, function () {
                    var _r510_t1;
                    var _r510_t0 = this;
                    var r510_currentGlyph = _r510_t0;
                    var r510_fine = r272_AdviceStroke(4);
                    var r510_xIns = r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.braceInside);
                    r510_currentGlyph.include(r272_Brace.UpperHalfShape(r472_top, r272_SymbolMid, r510_fine));
                    r510_currentGlyph.include(r272_Brace.LowerHalfShape(r272_SymbolMid, r472_bot, r510_fine));
                    r510_currentGlyph.include(r272_VBar.r(r510_xIns, r472_bot + r510_fine / 2, r472_top - r510_fine / 2, r510_fine));
                    return void 0;
                });
                return r272_turned('whiteBraceRight.straight', null, 'whiteBraceLeft.straight', r272_Middle, r272_SymbolMid);
            }());
            (function () {
                var r515_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r272_DesignParameters.braceOvershoot);
                var r515_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r272_DesignParameters.braceOvershoot);
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('upperLeftOrLowerRightfBrace', 9136, function () {
                    var _r518_t1;
                    var _r518_t0 = this;
                    var r518_currentGlyph = _r518_t0;
                    r518_currentGlyph.include(r272_ForceUpright());
                    r518_currentGlyph.include(r272_Brace.UpperHalfShape(r515_top - r272_HalfStroke, r515_bot + r272_HalfStroke, r272_Stroke));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('upperRightOrLowerLeftfBrace', 9137, function () {
                    var _r523_t1;
                    var _r523_t0 = this;
                    var r523_currentGlyph = _r523_t0;
                    r523_currentGlyph.include(r272_ForceUpright());
                    r523_currentGlyph.include(r272_Brace.LowerHalfShape(r515_top - r272_HalfStroke, r515_bot + r272_HalfStroke, r272_Stroke));
                    return void 0;
                });
            }());
            (function () {
                var r527_suffix, r527_pFlatIn, r527_pFlatOut, _r527_t2, _r527_t4, _r527_t5, _r527_tag6;
                var r527_CurlyBraceConfig = {
                    'curly': [
                        0,
                        0
                    ],
                    'curlyFlatBoundary': [
                        0.25,
                        0.05
                    ]
                };
                var _r527_t0 = Object.entries(r527_CurlyBraceConfig)[Symbol.iterator]();
                var _r527_t1 = void 0;
                var _r527_t3 = !(_r527_t1 = _r527_t0.next()).done;
                while (_r527_t3) {
                    _r527_t2 = _r527_t1.value;
                    r527_suffix = _r527_t2[0];
                    r527_pFlatIn = _r527_t2[1][0];
                    r527_pFlatOut = _r527_t2[1][1];
                    _r527_t2[1];
                    _r527_t4 = function () {
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('braceLeft.' + r527_suffix, null, r272_Brace.CurlyShape(r272_Stroke, r527_pFlatIn, r527_pFlatOut, 0));
                        r272_turned('braceRight.' + r527_suffix, null, 'braceLeft.' + r527_suffix, r272_Middle, r272_SymbolMid);
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceLeft.' + r527_suffix, null, function () {
                            var _r534_t1;
                            var _r534_t0 = this;
                            var r534_currentGlyph = _r534_t0;
                            r1_Joining.set(r534_currentGlyph, r1_Joining.Classes.Right);
                            r534_currentGlyph.include(r272_Brace.CurlyShape(r272_Stroke, r527_pFlatIn, r527_pFlatOut, 1));
                            return void 0;
                        });
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('ligExtBraceRight.' + r527_suffix, null, function () {
                            var _r538_t1;
                            var _r538_t0 = this;
                            var r538_currentGlyph = _r538_t0;
                            r538_currentGlyph.include(r272_xn$referglyph$1aao('ligExtBraceLeft.' + r527_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                            r538_currentGlyph.include(r272_FlipAround(r272_Middle, r272_SymbolMid));
                            r1_Joining.set(r538_currentGlyph, r1_Joining.Classes.Left);
                            return void 0;
                        });
                        r272_xn$createAndSaveGlyphImpl$2Lrc3c('whiteBraceLeft.' + r527_suffix, null, function () {
                            var _r543_t1;
                            var _r543_t0 = this;
                            var r543_currentGlyph = _r543_t0;
                            var r543_fine = r272_AdviceStroke(4);
                            var r543_xIns = r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.braceInside);
                            var r543_top = r1_mix(r272_SymbolMid, r272_ParenTop, 1 + r272_DesignParameters.braceOvershoot);
                            var r543_bot = r1_mix(r272_SymbolMid, r272_ParenBot, 1 + r272_DesignParameters.braceOvershoot);
                            r543_currentGlyph.include(r272_Brace.CurlyShape(r543_fine, r527_pFlatIn, r527_pFlatOut, 0));
                            r543_currentGlyph.include(r272_VBar.r(r543_xIns, r543_bot + r543_fine / 2, r543_top - r543_fine / 2, r543_fine));
                            return void 0;
                        });
                        return r272_turned('whiteBraceRight.' + r527_suffix, null, 'whiteBraceLeft.' + r527_suffix, r272_Middle, r272_SymbolMid);
                    }();
                    _r527_t3 = !(_r527_t1 = _r527_t0.next()).done;
                }
                return _r527_t4;
            }());
            r272_xn$selectvariant$7Hrq('braceLeft', '{');
            r272_xn$selectvariant$7Hrq('braceRight', '}');
            r272_xn$selectvariant$7Hrq('ligExtBraceLeft', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceLeft'));
            r272_xn$selectvariant$7Hrq('ligExtBraceRight', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceRight'));
            r272_xn$selectvariant$7Hrq('whiteBraceLeft', 10627, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceLeft'));
            return r272_xn$selectvariant$7Hrq('whiteBraceRight', 10628, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'braceRight'));
        }());
        (function () {
            var r551_AngleLeftShape = function (r552_outside, r552_inside, r552_sw) {
                var _r552_t0, _r552_t1;
                var r552_fatten = Math.hypot(1, (r552_inside - r552_outside - r272_O) / (r272_ParenTop - r272_SymbolMid));
                return r272_union(r272_dispiro(r272_widths.lhs(r552_sw), r272_flat(r552_inside, r272_ParenTop), r272_curl(r552_outside + r272_O, r272_SymbolMid, r272_widths.heading(r552_sw * r552_fatten, 0, r272_Downward))), r272_dispiro(r272_widths.rhs(r552_sw), r272_flat(r552_inside, r272_ParenBot), r272_curl(r552_outside + r272_O, r272_SymbolMid, r272_widths.heading(0, r552_sw * r552_fatten, r272_Upward))));
            };
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('angleLeft', 9001, function () {
                var _r555_t1;
                var _r555_t0 = this;
                var r555_currentGlyph = _r555_t0;
                var r555_dim = r272_Paren.Dim(r272_DivFrame(1), new r272_xn$NamedParameterPair$2Lrc9b('delta', 0));
                r555_currentGlyph.include(r551_AngleLeftShape(r555_dim.outside, r555_dim.inside, r272_OperatorStroke));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('dblAngleLeft', 10218, function () {
                var _r560_t1;
                var _r560_t0 = this;
                var r560_currentGlyph = _r560_t0;
                var r560_dim = r272_Paren.Dim(r272_DivFrame(1), new r272_xn$NamedParameterPair$2Lrc9b('delta', 0), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_OperatorStroke));
                var r560_fine = Math.min(r272_OperatorStroke, r272_AdviceStroke(3.5));
                var r560_farOutside = r560_dim.outside / 2;
                var r560_middle = r1_mix(r560_farOutside, r560_dim.inside, 0.5);
                r560_currentGlyph.include(r551_AngleLeftShape(r560_farOutside, r560_middle, r560_fine));
                r560_currentGlyph.include(r551_AngleLeftShape(r560_middle, r560_dim.inside, r560_fine));
                return void 0;
            });
            r272_turned('angleRight', 9002, 'angleLeft', r272_Middle, r272_SymbolMid);
            r272_turned('dblAngleRight', 10219, 'dblAngleLeft', r272_Middle, r272_SymbolMid);
            r272_alias('mathAngleLeft', 10216, 'angleLeft');
            return r272_alias('mathAngleRight', 10217, 'angleRight');
        }());
        return function () {
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('ceilingLeft', 8968, function () {
                var _r569_t1;
                var _r569_t0 = this;
                var r569_currentGlyph = _r569_t0;
                r569_currentGlyph.include(r272_HBar.t(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketInside), r272_ParenTop));
                r569_currentGlyph.include(r272_VBar.l(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r272_ParenBot, r272_ParenTop));
                return void 0;
            });
            r272_xn$createAndSaveGlyphImpl$2Lrc3c('floorLeft', 8970, function () {
                var _r574_t1;
                var _r574_t0 = this;
                var r574_currentGlyph = _r574_t0;
                r574_currentGlyph.include(r272_HBar.b(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketInside), r272_ParenBot));
                r574_currentGlyph.include(r272_VBar.l(r1_mix(r272_SB, r272_RightSB, r272_DesignParameters.bracketOutside), r272_ParenBot, r272_ParenTop));
                return void 0;
            });
            r272_turned('floorRight', 8971, 'ceilingLeft', r272_Middle, r272_SymbolMid);
            return r272_turned('ceilingRight', 8969, 'floorLeft', r272_Middle, r272_SymbolMid);
        }();
    });
    return void 0;
});
