'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r293_t) {
    var r293_n, r293_i, r293_a, _r293_t3, _r293_t4, _r293_t5, _r293_t6, _r293_t7, _r293_t8, _r293_t9, _r293_t10, _r293_t11, _r293_t12, _r293_t13, _r293_t14, _r293_t15, _r293_t16, _r293_t17, _r293_t18, _r293_t19, _r293_t20, _r293_t21, _r293_t22, _r293_t23, _r293_t24, _r293_t25, _r293_t26;
    var _r293_t0 = function () {
        _r293_t7 = function (_r293_t8) {
            _r293_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r293_t8
            };
        };
        _r293_t9 = r293_t instanceof Array;
        if (_r293_t9) {
            _r293_t10 = r293_n = r293_t.length;
            _r293_t11 = r293_i = 0;
            _r293_t12 = function (_r293_t14) {
                return _r293_t7(_r293_t14);
            };
            _r293_t13 = function (_r293_t15) {
                _r293_t16 = r293_i < r293_n;
                if (_r293_t16) {
                    _r293_t0 = function (_r293_t17) {
                        return _r293_t13(r293_i = r293_i + 1);
                    };
                    return {
                        'value': [
                            r293_i,
                            r293_t[r293_i]
                        ],
                        'done': false
                    };
                } else
                    return _r293_t12(_r293_t15);
            };
            return _r293_t13();
        } else {
            _r293_t18 = r293_a = Object.keys(r293_t);
            _r293_t19 = r293_n = r293_a.length;
            _r293_t20 = r293_i = 0;
            _r293_t21 = function (_r293_t23) {
                return _r293_t7(_r293_t23);
            };
            _r293_t22 = function (_r293_t24) {
                _r293_t25 = r293_i < r293_n;
                if (_r293_t25) {
                    _r293_t0 = function (_r293_t26) {
                        return _r293_t22(r293_i = r293_i + 1);
                    };
                    return {
                        'value': [
                            r293_a[r293_i],
                            r293_t[r293_a[r293_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r293_t21(_r293_t24);
            };
            return _r293_t22();
        }
    };
    var _r293_t1 = function (x) {
        try {
            return _r293_t0(x);
        } catch (ex) {
            return _r293_t2(ex);
        }
    };
    var _r293_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r293_t3 = this;
    else {
        _r293_t4 = function () {
            void 0;
        };
        _r293_t4.prototype = _r1_t9.prototype;
        _r293_t3 = new _r293_t4();
    }
    _r293_t3[Symbol.iterator] = function () {
        return _r293_t3;
    };
    _r293_t3.next = _r293_t1;
    _r293_t3.throw = function (x) {
        return _r293_t2(x);
    };
    return _r293_t3;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Dche', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_body, r270_slabUpright, r270_slabUprightBGR, r270_slabItalic, _r270_t11, _r270_t12, _r270_t13, _r270_t14, _r270_tag15;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_MaskLeft = _r270_t4.MaskLeft;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r270_LeaningAnchor = _r270_t6.LeaningAnchor;
        var r270_ExtendBelowBaseAnchors = _r270_t6.ExtendBelowBaseAnchors;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-Che'].resolve();
        var r270_CyrCheShape = _r270_t7.CyrCheShape;
        var r270_ItalicConfig = _r270_t7.ItalicConfig;
        var r270_BODY = _r270_t7.BODY;
        var r270_SERIFS = _r270_t7.SERIFS;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-De'].resolve();
        var r270_CyrDeBottom = _r270_t8.CyrDeBottom;
        var r270_BottomExtension = _r270_t8.BottomExtension;
        var r270_CyrDeItalicShapeT = _r270_t8.CyrDeItalicShapeT;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dche', 1324, function () {
            var _r278_t1;
            var _r278_t0 = this;
            var r278_currentGlyph = _r278_t0;
            r278_currentGlyph.include(r270_MarkSet.capital());
            r278_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r278_currentGlyph.include(r270_CyrCheShape(r270_DivFrame(1), r270_CAP, r270_SLAB ? 0.5 : 0.4, r270_BODY.STRAIGHT, r270_SLAB ? r270_SERIFS.TOP : r270_SERIFS.NONE));
            r278_currentGlyph.include(r270_CyrDeBottom(r270_SB, r270_RightSB));
            var r278_fine = r270_AdviceStroke(3.5);
            r278_currentGlyph.include(r270_dispiro(r270_flat(r270_SB, r270_Stroke, r270_widths.rhs(r278_fine)), r270_curl(r270_RightSB - r270_HSwToV(r270_Stroke), r270_CAP - (r270_SLAB ? r270_Stroke : 0))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dche.upright', null, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            r286_currentGlyph.include(r270_MarkSet.e());
            r286_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r286_currentGlyph.include(r270_CyrCheShape(r270_DivFrame(1), r270_XH, r270_SLAB ? 0.5 : 0.4, r270_BODY.STRAIGHT, r270_SLAB ? r270_SERIFS.TOP : r270_SERIFS.NONE));
            r286_currentGlyph.include(r270_CyrDeBottom(r270_SB, r270_RightSB));
            var r286_fine = r270_AdviceStroke(3.5);
            r286_currentGlyph.include(r270_dispiro(r270_flat(r270_SB, r270_Stroke, r270_widths.rhs(r286_fine)), r270_curl(r270_RightSB - r270_HSwToV(r270_Stroke), r270_XH - (r270_SLAB ? r270_Stroke : 0))));
            return void 0;
        });
        var _r270_t9 = _r1_t2(r270_ItalicConfig)[Symbol.iterator]();
        var _r270_t10 = void 0;
        while (!(_r270_t10 = _r270_t9.next()).done) {
            _r270_t11 = _r270_t10.value;
            r270_suffix = _r270_t11[0];
            r270_body = _r270_t11[1][0];
            r270_slabUpright = _r270_t11[1][1];
            r270_slabUprightBGR = _r270_t11[1][2];
            r270_slabItalic = _r270_t11[1][3];
            _r270_t11[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dche.italic.' + r270_suffix, null, function () {
                    var _r299_t1;
                    var _r299_t0 = this;
                    var r299_currentGlyph = _r299_t0;
                    var r299_df = r299_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                    r299_currentGlyph.include(r299_df.markSet.e());
                    var r299_subDf = r299_df.slice(3, 2, r270_OX);
                    r299_currentGlyph.include(r270_CyrDeItalicShapeT(r270_dispiro, r299_subDf, r299_df.mvs));
                    r299_currentGlyph.include(r270_difference(r270_CyrCheShape(r299_df, r270_XH, 0.5, r270_body, r270_SLAB ? r270_slabItalic : r270_SERIFS.NONE, new r270_xn$NamedParameterPair$2Lrc9b('sw', r299_df.mvs)), r270_MaskLeft(r299_df.middle)));
                    return void 0;
                });
            }());
        }
        return r270_xn$selectvariant$7Hrq('cyrl/dche.italic', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/che'));
    });
    return void 0;
});
