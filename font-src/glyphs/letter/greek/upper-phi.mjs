'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r266_block, _r266_t4, _r266_t6;
    var _r266_t3 = this;
    var _r266_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r266_t1 = _r266_t0.length;
    var _r266_t2 = 0;
    var _r266_t5 = _r266_t2 < _r266_t1;
    while (_r266_t5) {
        _r266_t6 = (r266_block = _r266_t0[_r266_t2], r266_block(_r266_t3), _r266_t2 = _r266_t2 + 1);
        _r266_t5 = _r266_t2 < _r266_t1;
    }
    return _r266_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r270_xn$Capture_Ext$2Lrc2b) {
    var _r270_t0, _r270_t1;
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Upper-Phi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Bowl, r271_Bar, r271_sMT, r271_sMB, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_tagged = _r271_t4.tagged;
        var r271_OShape = _r271_t4.OShape;
        var r271_OShapeFlatTB = _r271_t4.OShapeFlatTB;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VBar = _r271_t4.VBar;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var r271_ExtendBelowBaseAnchors = _r271_t6.ExtendBelowBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t7.FlatHookDepth;
        var r271_OBarLeft = _r271_t7.OBarLeft;
        var r271_OBarRight = _r271_t7.OBarRight;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-AE-OE'].resolve();
        var r271_SubDfAndShift = _r271_t8.SubDfAndShift;
        var r271_VarPhiRing = function (r277_fFlatTB, r277_df, r277_y1, r277_y2) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_gap = Math.max(r277_df.mvs, 0.25 * (r277_df.rightSB - r277_df.leftSB));
                r279_currentGlyph.include(r271_VBar.m(r277_df.middle, r277_y1, r277_y2, r277_df.mvs));
                r279_currentGlyph.include(r277_fFlatTB ? r271_OShapeFlatTB(r277_y2, r277_y1, r277_df.leftSB, r277_df.rightSB, r277_df.mvs, r271_ArchDepthA * r277_df.div, r271_ArchDepthB * r277_df.div, r279_gap) : r271_OShape(r277_y2, r277_y1, r277_df.leftSB, r277_df.rightSB, r277_df.mvs, r271_ArchDepthA * r277_df.div, r271_ArchDepthB * r277_df.div));
                return void 0;
            };
        };
        var r271_CyrlEfSplitRing = function (r282_fFlatTB, r282_df, r282_y1, r282_y2) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t2;
                var _r284_t1 = this;
                var r284_currentGlyph = _r284_t1;
                var _r284_t0 = r271_SubDfAndShift(0, r282_df, r271_OX);
                var r284_subDf = _r284_t0[0];
                var r284_ada = r284_subDf.archDepthA(r271_SmallArchDepth, r282_df.mvs);
                var r284_adb = r284_subDf.archDepthB(r271_SmallArchDepth, r282_df.mvs);
                r284_currentGlyph.include(r271_VBar.m(r282_df.middle, r282_y1, r282_y2, r282_df.mvs));
                r284_currentGlyph.include(r271_xn$withtransform$5sIl(r271_ApparentTranslate(0, r282_y1), r271_union(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('top', r282_y2 - r282_y1), new r271_xn$NamedParameterPair$2Lrc9b('left', r282_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r282_df.middle + r271_HSwToV(0.5 * r282_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('sw', r282_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r284_ada), new r271_xn$NamedParameterPair$2Lrc9b('adb', r284_adb)), r271_OBarLeft.shape(new r271_xn$NamedParameterPair$2Lrc9b('top', r282_y2 - r282_y1), new r271_xn$NamedParameterPair$2Lrc9b('left', r282_df.middle - r271_HSwToV(0.5 * r282_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r282_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r282_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r284_ada), new r271_xn$NamedParameterPair$2Lrc9b('adb', r284_adb)))));
                return void 0;
            };
        };
        var r271_StraightBar = function (r299_df, r299_bot, r299_y1, r299_y2, r299_top) {
            var _r299_t0, _r299_t1;
            return function () {
                var _r301_t1;
                var _r301_t0 = this;
                var r301_currentGlyph = _r301_t0;
                r301_currentGlyph.include(r271_VBar.m(r299_df.middle, r299_bot, r299_y1 + r271_HalfStroke));
                r301_currentGlyph.include(r271_VBar.m(r299_df.middle, r299_y2 - r271_HalfStroke, r299_top));
                return void 0;
            };
        };
        var r271_CursiveBar = function (r304_df, r304_bot, r304_y1, r304_y2, r304_top) {
            var _r304_t0, _r304_t1;
            return function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                var r306_hd = r271_FlatHookDepth(r304_df);
                var r306_xCrossLeft = r1_mix(0, r304_df.leftSB, r1_mix(1, r304_df.div, 2));
                var r306_xCrossRight = r1_mix(r304_df.width, r304_df.rightSB, r1_mix(1, r304_df.div, 2));
                var r306_xBarLeft = r304_df.middle - r271_HSwToV(r271_HalfStroke);
                var r306_xBarRight = r304_df.middle + r271_HSwToV(r271_HalfStroke);
                r306_currentGlyph.include(r271_dispiro(r271_flat(r306_xCrossRight, r304_top, r271_widths.lhs()), r271_curl(Math.min(r306_xBarLeft + r306_hd.x, r306_xCrossRight - 0.1), r304_top), r271_archv(), r271_flat(r306_xBarLeft, Math.max(r304_y2, r304_top - r306_hd.y)), r271_curl(r306_xBarLeft, r304_y2 + r271_O)));
                r306_currentGlyph.include(r271_dispiro(r271_flat(r306_xCrossLeft, r304_bot, r271_widths.lhs()), r271_curl(Math.max(r306_xBarRight - r306_hd.x, r306_xCrossLeft + 0.1), r304_bot), r271_archv(), r271_flat(r306_xBarRight, Math.min(r304_y1, r304_bot + r306_hd.y)), r271_curl(r306_xBarRight, r304_y1 - r271_O)));
                return void 0;
            };
        };
        var r271_MtSerif = function (r309_df, r309_y) {
            var _r309_t0, _r309_t1;
            return r271_tagged('serifMT', r271_HSerif.lt(r309_df.middle, r309_y, r271_Jut));
        };
        var r271_MbSerif = function (r310_df, r310_y) {
            var _r310_t0, _r310_t1;
            return r271_tagged('serifMB', r271_HSerif.mb(r310_df.middle, r310_y, r271_Jut));
        };
        var r271_GrekCapitalPhiImpl = function (r311_fFlatTB, r311_df) {
            var _r311_t0, _r311_t1;
            return function () {
                var _r313_t1;
                var _r313_t0 = this;
                var r313_currentGlyph = _r313_t0;
                var r313_y1 = r1_mix(r271_SLAB ? r271_Stroke : 0, r271_SLAB ? r271_CAP - r271_Stroke : r271_CAP, 0.125);
                var r313_y2 = r1_mix(r271_SLAB ? r271_Stroke : 0, r271_SLAB ? r271_CAP - r271_Stroke : r271_CAP, 0.875);
                r313_currentGlyph.include(r271_VarPhiRing(r311_fFlatTB, r311_df, r313_y1, r313_y2));
                r313_currentGlyph.include(r271_StraightBar(r311_df, 0, r313_y1, r313_y2, r271_CAP));
                if (r271_SLAB) {
                    r313_currentGlyph.include(r271_tagged('serifMT', r271_HSerif.mt(r311_df.middle, r271_CAP, r271_MidJutSide)));
                    r313_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.mb(r311_df.middle, 0, r271_MidJutSide)));
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Phi', 934, function () {
            var _r320_t1;
            var _r320_t0 = this;
            var r320_currentGlyph = _r320_t0;
            var r320_df = r320_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
            r320_currentGlyph.include(r320_df.markSet.capital());
            r320_currentGlyph.include(r271_GrekCapitalPhiImpl(0, r320_df));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ef', 1060, function () {
            var _r326_t1;
            var _r326_t0 = this;
            var r326_currentGlyph = _r326_t0;
            var r326_df = r326_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
            r326_currentGlyph.include(r326_df.markSet.capital());
            r326_currentGlyph.include(r271_GrekCapitalPhiImpl(1, r326_df));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ef.BGR', null, function () {
            var _r332_t1;
            var _r332_t0 = this;
            var r332_currentGlyph = _r332_t0;
            var r332_df = r332_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
            r332_currentGlyph.include(r332_df.markSet.capital());
            var r332_top = r271_CAP + r271_LongJut - r271_HalfStroke;
            var r332_bot = 0 - r271_LongJut + r271_HalfStroke;
            r332_currentGlyph.include(r271_ExtendAboveBaseAnchors(r332_top));
            r332_currentGlyph.include(r271_ExtendBelowBaseAnchors(r332_bot));
            r332_currentGlyph.include(r271_VarPhiRing(0, r332_df, 0, r271_CAP));
            r332_currentGlyph.include(r271_StraightBar(r332_df, r332_bot, 0, r271_CAP, r332_top));
            if (r271_SLAB) {
                r332_currentGlyph.include(r271_tagged('serifMT', r271_HSerif.mt(r332_df.middle, r332_top, r271_MidJutSide)));
                r332_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.mb(r332_df.middle, r332_bot, r271_MidJutSide)));
            }
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/varphi', 981, function () {
            var _r343_t1;
            var _r343_t0 = this;
            var r343_currentGlyph = _r343_t0;
            var r343_df = r343_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
            r343_currentGlyph.include(r343_df.markSet.bp());
            r343_currentGlyph.include(r271_VarPhiRing(0, r343_df, 0, r271_XH));
            r343_currentGlyph.include(r271_StraightBar(r343_df, r271_Descender, 0, r271_XH, r271_Ascender));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/phi', 632, function () {
            var _r350_t1;
            var _r350_t0 = this;
            var r350_currentGlyph = _r350_t0;
            var r350_df = r350_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
            r350_currentGlyph.include(r271_xn$referglyph$1aao('grek/varphi'), r271_AS_BASE, r271_ALSO_METRICS);
            if (r271_SLAB) {
                r350_currentGlyph.include(r271_tagged('serifMT', r271_HSerif.mt(r350_df.middle, r271_Ascender, r271_Jut)));
                r350_currentGlyph.include(r271_tagged('serifMB', r271_HSerif.mb(r350_df.middle, r271_Descender, r271_Jut)));
            }
            return void 0;
        });
        var r271_CyrlEfConfig = r1_SuffixCfg.weave({
            '': r271_VarPhiRing,
            'splitBowl': r271_CyrlEfSplitRing
        }, {
            'serifless': [
                r271_StraightBar,
                void 0,
                void 0
            ],
            'topSerifed': [
                r271_StraightBar,
                r271_MtSerif,
                void 0
            ],
            'serifed': [
                r271_StraightBar,
                r271_MtSerif,
                r271_MbSerif
            ],
            'cursive': [
                r271_CursiveBar,
                void 0,
                void 0
            ]
        });
        var _r271_t9 = Object.entries(r271_CyrlEfConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_Bowl = _r271_t11[1][0];
            r271_Bar = _r271_t11[1][1][0];
            r271_sMT = _r271_t11[1][1][1];
            r271_sMB = _r271_t11[1][1][2];
            _r271_t11[1][1];
            _r271_t11[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ef.' + r271_suffix, null, function () {
                    var _r360_t1;
                    var _r360_t0 = this;
                    var r360_currentGlyph = _r360_t0;
                    var r360_df = r360_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r360_currentGlyph.include(r360_df.markSet.bp());
                    r360_currentGlyph.include(r271_Bowl(1, r360_df, 0, r271_XH));
                    r360_currentGlyph.include(r271_Bar(r360_df, r271_Descender, 0, r271_XH, r271_Ascender));
                    if (r271_sMT)
                        r360_currentGlyph.include(r271_sMT(r360_df, r271_Ascender));
                    if (r271_sMB)
                        r360_currentGlyph.include(r271_sMB(r360_df, r271_Descender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ef.BGR.' + r271_suffix, null, function () {
                    var _r369_t1;
                    var _r369_t0 = this;
                    var r369_currentGlyph = _r369_t0;
                    var r369_df = r369_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r369_currentGlyph.include(r369_df.markSet.bp());
                    r369_currentGlyph.include(r271_VarPhiRing(0, r369_df, 0, r271_XH));
                    r369_currentGlyph.include(r271_Bar(r369_df, r271_Descender, 0, r271_XH, r271_Ascender));
                    if (r271_sMT)
                        r369_currentGlyph.include(r271_sMT(r369_df, r271_Ascender));
                    if (r271_sMB)
                        r369_currentGlyph.include(r271_sMB(r369_df, r271_Descender));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('cyrl/ef', 1092);
        return r271_xn$selectvariant$7Hrq('cyrl/ef.BGR');
    });
    return void 0;
});
