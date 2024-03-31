'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r276_t) {
    var r276_n, r276_i, r276_a, _r276_t3, _r276_t4, _r276_t5, _r276_t6, _r276_t7, _r276_t8, _r276_t9, _r276_t10, _r276_t11, _r276_t12, _r276_t13, _r276_t14, _r276_t15, _r276_t16, _r276_t17, _r276_t18, _r276_t19, _r276_t20, _r276_t21, _r276_t22, _r276_t23, _r276_t24, _r276_t25, _r276_t26;
    var _r276_t0 = function () {
        _r276_t7 = function (_r276_t8) {
            _r276_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r276_t8
            };
        };
        _r276_t9 = r276_t instanceof Array;
        if (_r276_t9) {
            _r276_t10 = r276_n = r276_t.length;
            _r276_t11 = r276_i = 0;
            _r276_t12 = function (_r276_t14) {
                return _r276_t7(_r276_t14);
            };
            _r276_t13 = function (_r276_t15) {
                _r276_t16 = r276_i < r276_n;
                if (_r276_t16) {
                    _r276_t0 = function (_r276_t17) {
                        return _r276_t13(r276_i = r276_i + 1);
                    };
                    return {
                        'value': [
                            r276_i,
                            r276_t[r276_i]
                        ],
                        'done': false
                    };
                } else
                    return _r276_t12(_r276_t15);
            };
            return _r276_t13();
        } else {
            _r276_t18 = r276_a = Object.keys(r276_t);
            _r276_t19 = r276_n = r276_a.length;
            _r276_t20 = r276_i = 0;
            _r276_t21 = function (_r276_t23) {
                return _r276_t7(_r276_t23);
            };
            _r276_t22 = function (_r276_t24) {
                _r276_t25 = r276_i < r276_n;
                if (_r276_t25) {
                    _r276_t0 = function (_r276_t26) {
                        return _r276_t22(r276_i = r276_i + 1);
                    };
                    return {
                        'value': [
                            r276_a[r276_i],
                            r276_t[r276_a[r276_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r276_t21(_r276_t24);
            };
            return _r276_t22();
        }
    };
    var _r276_t1 = function (x) {
        try {
            return _r276_t0(x);
        } catch (ex) {
            return _r276_t2(ex);
        }
    };
    var _r276_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r276_t3 = this;
    else {
        _r276_t4 = function () {
            void 0;
        };
        _r276_t4.prototype = _r1_t9.prototype;
        _r276_t3 = new _r276_t4();
    }
    _r276_t3[Symbol.iterator] = function () {
        return _r276_t3;
    };
    _r276_t3.next = _r276_t1;
    _r276_t3.throw = function (x) {
        return _r276_t2(x);
    };
    return _r276_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r265_block, _r265_t4, _r265_t6;
    var _r265_t3 = this;
    var _r265_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r265_t1 = _r265_t0.length;
    var _r265_t2 = 0;
    var _r265_t5 = _r265_t2 < _r265_t1;
    while (_r265_t5) {
        _r265_t6 = (r265_block = _r265_t0[_r265_t2], r265_block(_r265_t3), _r265_t2 = _r265_t2 + 1);
        _r265_t5 = _r265_t2 < _r265_t1;
    }
    return _r265_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r269_xn$Capture_Ext$2Lrc2b) {
    var _r269_t0, _r269_t1;
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Hwair', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_serifLT, r270_serifLB, r270_serifRT, _r270_t10, _r270_t11, _r270_t12, _r270_t13, _r270_tag14;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_O = _r270_t1.O;
        var r270_Jut = _r270_t1.Jut;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_tagged = _r270_t4.tagged;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_nShoulderKnots = _r270_t6.nShoulderKnots;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t7.SerifFrame;
        var r270_Variants = {
            'straightSerifless': [
                false,
                false,
                false
            ],
            'straightTopLeftSerifed': [
                true,
                false,
                false
            ],
            'straightSerifed': [
                true,
                true,
                true
            ]
        };
        var _r270_t8 = _r1_t2(r270_Variants)[Symbol.iterator]();
        var _r270_t9 = void 0;
        while (!(_r270_t9 = _r270_t8.next()).done) {
            _r270_t10 = _r270_t9.value;
            r270_suffix = _r270_t10[0];
            r270_serifLT = _r270_t10[1][0];
            r270_serifLB = _r270_t10[1][1];
            r270_serifRT = _r270_t10[1][2];
            _r270_t10[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('hwair.' + r270_suffix, null, function () {
                    var _r282_t1, _r282_t2, _r282_tag3;
                    var _r282_t0 = this;
                    var r282_currentGlyph = _r282_t0;
                    var r282_df = r282_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                    r282_currentGlyph.include(r282_df.markSet.b());
                    r282_currentGlyph.include(r270_VBar.l(r282_df.leftSB, 0, r270_Ascender, r282_df.mvs));
                    r282_currentGlyph.include(r270_dispiro(r270_nShoulderKnots(r282_df.leftSB + r270_HSwToV(r282_df.mvs), r282_df.middle + r270_HSwToV(0.5 * r282_df.mvs), r282_df.mvs * 0.4, void 0, r270_XH * 0.51, r270_SmallArchDepthA * 0.6 * r282_df.div, r270_SmallArchDepthB * 0.6 * r282_df.div, r282_df.mvs), r270_flat(r282_df.middle + r270_HSwToV(0.5 * r282_df.mvs), r270_XH * 0.5, r270_heading(r270_Downward)), r270_curl(r282_df.middle + r270_HSwToV(0.5 * r282_df.mvs), r270_SmallArchDepthB * 0.6 * r282_df.div), r270_arcvh(), r270_g4(r1_mix(r282_df.middle - r270_HSwToV(0.5 * r282_df.mvs), r282_df.rightSB, 0.5), r270_O, r270_widths.heading(r282_df.mvs, 0, r270_Rightward)), r270_archv(), r270_flat(r282_df.rightSB, r270_SmallArchDepthA * 0.6 * r282_df.div), r270_curl(r282_df.rightSB, r270_XH, r270_heading(r270_Upward))));
                    (function () {
                        var r288_sf1 = r270_SerifFrame.fromDf(r282_df, r270_Ascender, 0);
                        var r288_sf2 = r270_SerifFrame.fromDf(r282_df, r270_XH, 0).slice(1, 2);
                        var r288_jut = r270_Jut * 0.75;
                        if (r270_serifLT)
                            r282_currentGlyph.include(r270_tagged('serifLT', r288_sf1.lt.outer));
                        if (r270_serifLB)
                            r282_currentGlyph.include(r270_tagged('serifLB', r288_sf1.lb.full));
                        return r270_serifRT ? r282_currentGlyph.include(r270_tagged('serifRT', r288_sf2.rt.full)) : void 0;
                    }());
                    return void 0;
                });
            }());
        }
        return r270_xn$selectvariant$7Hrq('hwair', 405, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'heng'));
    });
    return void 0;
});
