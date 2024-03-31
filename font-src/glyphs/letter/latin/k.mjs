'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../support/util/mask-bit.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r393_t) {
    var r393_n, r393_i, r393_a, _r393_t3, _r393_t4, _r393_t5, _r393_t6, _r393_t7, _r393_t8, _r393_t9, _r393_t10, _r393_t11, _r393_t12, _r393_t13, _r393_t14, _r393_t15, _r393_t16, _r393_t17, _r393_t18, _r393_t19, _r393_t20, _r393_t21, _r393_t22, _r393_t23, _r393_t24, _r393_t25, _r393_t26;
    var _r393_t0 = function () {
        _r393_t7 = function (_r393_t8) {
            _r393_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r393_t8
            };
        };
        _r393_t9 = r393_t instanceof Array;
        if (_r393_t9) {
            _r393_t10 = r393_n = r393_t.length;
            _r393_t11 = r393_i = 0;
            _r393_t12 = function (_r393_t14) {
                return _r393_t7(_r393_t14);
            };
            _r393_t13 = function (_r393_t15) {
                _r393_t16 = r393_i < r393_n;
                if (_r393_t16) {
                    _r393_t0 = function (_r393_t17) {
                        return _r393_t13(r393_i = r393_i + 1);
                    };
                    return {
                        'value': [
                            r393_i,
                            r393_t[r393_i]
                        ],
                        'done': false
                    };
                } else
                    return _r393_t12(_r393_t15);
            };
            return _r393_t13();
        } else {
            _r393_t18 = r393_a = Object.keys(r393_t);
            _r393_t19 = r393_n = r393_a.length;
            _r393_t20 = r393_i = 0;
            _r393_t21 = function (_r393_t23) {
                return _r393_t7(_r393_t23);
            };
            _r393_t22 = function (_r393_t24) {
                _r393_t25 = r393_i < r393_n;
                if (_r393_t25) {
                    _r393_t0 = function (_r393_t26) {
                        return _r393_t22(r393_i = r393_i + 1);
                    };
                    return {
                        'value': [
                            r393_a[r393_i],
                            r393_t[r393_a[r393_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r393_t21(_r393_t24);
            };
            return _r393_t22();
        }
    };
    var _r393_t1 = function (x) {
        try {
            return _r393_t0(x);
        } catch (ex) {
            return _r393_t2(ex);
        }
    };
    var _r393_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11)
        _r393_t3 = this;
    else {
        _r393_t4 = function () {
            void 0;
        };
        _r393_t4.prototype = _r1_t11.prototype;
        _r393_t3 = new _r393_t4();
    }
    _r393_t3[Symbol.iterator] = function () {
        return _r393_t3;
    };
    _r393_t3.next = _r393_t1;
    _r393_t3.throw = function (x) {
        return _r393_t2(x);
    };
    return _r393_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_linreg = _r1_t8.linreg;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_HintClass = _r1_t9.HintClass;
var _r1_t10 = _s0_t2;
var r1_maskBit = _r1_t10.maskBit;
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
    r271_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r271_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-K', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_suffix, r272_LegsImpl, r272_slabLT, r272_slabLB, r272_slabLegs, r272_slabKS, _r272_t13, _r272_t16, _r272_t18, _r272_t19, _r272_t20, _r272_tag21, _r272_t22, _r272_tag23, _r272_t24, _r272_tag25;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$Exec$2Lrc5 = _r272_t0['$Exec$'];
        var r272_MarkSet = _r272_t0.MarkSet;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_UPM = _r272_t1.UPM;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_Ascender = _r272_t1.Ascender;
        var r272_Descender = _r272_t1.Descender;
        var r272_Translate = _r272_t1.Translate;
        var r272_TanSlope = _r272_t1.TanSlope;
        var r272_HVContrast = _r272_t1.HVContrast;
        var r272_Upward = _r272_t1.Upward;
        var r272_Downward = _r272_t1.Downward;
        var r272_Rightward = _r272_t1.Rightward;
        var r272_Leftward = _r272_t1.Leftward;
        var r272_O = _r272_t1.O;
        var r272_OX = _r272_t1.OX;
        var r272_Hook = _r272_t1.Hook;
        var r272_HookX = _r272_t1.HookX;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_LongJut = _r272_t1.LongJut;
        var r272_Jut = _r272_t1.Jut;
        var r272_VJut = _r272_t1.VJut;
        var r272_VJutStroke = _r272_t1.VJutStroke;
        var r272_CThin = _r272_t1.CThin;
        var r272_SLAB = _r272_t1.SLAB;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_SideJut = _r272_t1.SideJut;
        var r272_ArchDepthB = _r272_t1.ArchDepthB;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_AdviceStroke2 = _r272_t1.AdviceStroke2;
        var r272_shoulderMidSkew = _r272_t1.shoulderMidSkew;
        var r272_StrokeWidthBlend = _r272_t1.StrokeWidthBlend;
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
        var r272_bezControls = _r272_t2.bezControls;
        var r272_quadControls = _r272_t2.quadControls;
        var r272_archv = _r272_t2.archv;
        var r272_arcvh = _r272_t2.arcvh;
        var r272_dispiro = _r272_t2.dispiro;
        var r272_xn$spirooutline$1aao = _r272_t2['spiro-outline'];
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var r272_difference = _r272_t3.difference;
        var _r272_t4 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r272_xn$noshape$3cah = _r272_t4['no-shape'];
        var r272_tagged = _r272_t4.tagged;
        var r272_Rect = _r272_t4.Rect;
        var r272_HSerif = _r272_t4.HSerif;
        var r272_VSerif = _r272_t4.VSerif;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_PointingTo = _r272_t4.PointingTo;
        var r272_ExtLineCenter = _r272_t4.ExtLineCenter;
        var r272_DiagCorDs = _r272_t4.DiagCorDs;
        var r272_HalfRectTriangle = _r272_t4.HalfRectTriangle;
        var _r272_t5 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_alias = _r272_t5.alias;
        var r272_turned = _r272_t5.turned;
        var r272_xn$derivecomposites$7Hrq = _r272_t5['derive-composites'];
        var r272_xn$linkreducedvariant$5sIl8 = _r272_t5['link-reduced-variant'];
        var r272_xn$aliasreducedvariant$1aao8 = _r272_t5['alias-reduced-variant'];
        var r272_xn$derivemultipartglyphs$7Hrq65 = _r272_t5['derive-multi-part-glyphs'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r272_markExtend = _r272_t6.markExtend;
        var _r272_t7 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r272_aboveMarkMid = _r272_t7.aboveMarkMid;
        var _r272_t8 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r272_ExtendBelowBaseAnchors = _r272_t8.ExtendBelowBaseAnchors;
        var r272_LeaningAnchor = _r272_t8.LeaningAnchor;
        var _r272_t9 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r272_DiagonalTailInnerRadius = _r272_t9.DiagonalTailInnerRadius;
        var r272_DiagonalTailF = _r272_t9.DiagonalTailF;
        var r272_CyrDescender = _r272_t9.CyrDescender;
        var _r272_t10 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r272_LetterBarOverlay = _r272_t10.LetterBarOverlay;
        var r272_PalatalHook = _r272_t10.PalatalHook;
        var r272_TopHook = _r272_t10.TopHook;
        var r272_KBalance = function (r280_slabLT, r280_straightBar) {
            var _r280_t0, _r280_t1;
            return r280_straightBar ? r272_Width / 32 : 0;
        };
        var r272_KBalanceRight = function (r281_slabLegs, r281_straightBar) {
            var _r281_t0, _r281_t1;
            return r281_slabLegs ? 0 : r281_straightBar ? r272_Width / 32 : 0;
        };
        var r272_KO = function (r282_slabLegs, r282_straightBar, r282_top, r282_stroke) {
            var _r282_t0, _r282_t1;
            return r282_straightBar ? ((r282_slabLegs ? 0 : -4) * r272_OX - r282_stroke / 3) * (r272_XH / r282_top) : 0;
        };
        var r272_KAttachment = function (r283_shape, r283_mode, r283_top, r283_left, r283_right, r283_stroke, r283_straightBar) {
            var _r283_t0, _r283_t1;
            if (!r283_shape)
                return r272_xn$noshape$3cah();
            var r283_Ok = r272_KO(r283_mode, true, r283_top, r283_stroke);
            var r283_kshRight = r283_right + r272_KBalanceRight(true, r283_straightBar);
            var r283_serifLengthAdj = r283_Ok + r272_HSwToV(r283_stroke);
            return r283_shape.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r283_kshRight - r283_serifLengthAdj), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_Jut + r283_serifLengthAdj));
        };
        var r272_KSlabs = function (r287_mode, r287_top, r287_left, r287_right, r287_stroke, r287_straightBar) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_Ok = r272_KO(r287_mode, true, r287_top, r287_stroke);
                var r289_kshRight = r287_right + r272_KBalanceRight(true, r287_straightBar);
                var r289_serifLengthAdj = r289_Ok + r272_HSwToV(r287_stroke);
                r289_currentGlyph.include(r272_tagged('serifRT', r1_maskBit(r287_mode, 1) ? r272_HSerif.rt(r289_kshRight - r289_serifLengthAdj, r287_top, r272_SideJut + r289_serifLengthAdj) : r272_xn$noshape$3cah()));
                r289_currentGlyph.include(r272_tagged('serifRB', r1_maskBit(r287_mode, 0) ? r272_HSerif.rb(r289_kshRight - r289_serifLengthAdj, 0, r272_SideJut + r289_serifLengthAdj) : r272_xn$noshape$3cah()));
                return void 0;
            };
        };
        var r272_KLegs = function () {
            var r294_Straight, r294_Symmetric, r294_Curly, r294_Cursive, r294_CursiveTailed;
            var r294_exports = {};
            r294_exports.Straight = r294_Straight = function (r302_fHookTop, r302_left, r302_right, r302_stroke, r302_top, r302_slabLT, r302_slabLegs, r302_attachment) {
                var _r302_t0, _r302_t1;
                return function () {
                    var r304_kHookTopMix, _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    var r304_fine = r272_AdviceStroke(3.5);
                    var r304_Ok = r272_KO(r302_slabLegs, true, r302_top, r302_stroke);
                    var r304_kshLeft = r302_left + r272_KBalance(r302_slabLT, true);
                    var r304_kshRightBot = r302_right + r272_KBalanceRight(r302_slabLegs, true);
                    var r304_kshRightTop = r302_fHookTop ? r304_kshRightBot - r272_HookX * 0.5 + r272_HSwToV(0.5 * r302_stroke) : r304_kshRightBot;
                    var r304_attach = r302_top * 0.42 - r302_stroke;
                    var r304_attach2 = r302_top * 0.72 + r302_stroke;
                    r304_currentGlyph.setBaseAnchor('trailing', r304_kshRightBot - r304_Ok, 0);
                    var r304_kshRightSerifs = r302_right + r272_KBalanceRight(true, true);
                    var r304_serifLengthAdj = r304_Ok + r272_HSwToV(r302_stroke);
                    var r304_TopStrokeMask = function (r306_offset) {
                        var _r306_t0, _r306_t1;
                        return r272_Rect(r302_top, 0, r304_kshLeft, r1_maskBit(r302_slabLegs, 1) ? r304_kshRightSerifs + r306_offset + r272_SideJut - r272_TanSlope * r272_Stroke : 2 * r272_Width);
                    };
                    var r304_BottomStrokeMask = function (r307_offset) {
                        var _r307_t0, _r307_t1;
                        return r272_Rect(r302_top, 0, r304_kshLeft, r1_maskBit(r302_slabLegs, 0) ? r304_kshRightSerifs + r307_offset + r272_SideJut + r272_TanSlope * r272_Stroke : 2 * r272_Width);
                    };
                    if (r302_fHookTop) {
                        r304_kHookTopMix = 0.5;
                        if (r302_fHookTop)
                            r304_currentGlyph.include(r272_dispiro(r272_widths.rhs(r302_stroke), r272_straight.left.start(r304_kshRightBot + (r1_maskBit(r302_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r302_stroke, r302_top - r302_stroke), r272_flat(r1_mix(r304_kshRightTop - r304_Ok, r304_kshLeft + r302_stroke, r304_kHookTopMix), r1_mix(r302_top, r304_attach, r304_kHookTopMix), r272_widths.rhs(r1_mix(r302_stroke, r304_fine, r304_kHookTopMix))), r272_curl(r304_kshLeft + r302_stroke, r304_attach, r272_widths.rhs(r304_fine))));
                    } else {
                        r304_currentGlyph.setBaseAnchor('armOverlay', r1_mix(r304_kshLeft, r304_kshRightTop, r272_StrokeWidthBlend(0.5, 0.65)), r1_mix(r304_attach, r302_top, r272_StrokeWidthBlend(0.5, 0.7)));
                        r304_currentGlyph.include(r272_intersection(r304_TopStrokeMask(0), r272_dispiro(r272_widths.rhs(r302_stroke), r272_flat(r304_kshRightTop - r304_Ok, r302_top), r272_curl(r304_kshLeft + r302_stroke, r304_attach, r272_widths.rhs(r304_fine)))));
                    }
                    r304_currentGlyph.setBaseAnchor('legOverlay', r1_mix(r304_kshLeft, r304_kshRightBot, r272_StrokeWidthBlend(0.5, 0.65)), r1_mix(r304_attach2, 0, r272_StrokeWidthBlend(0.5, 0.7)));
                    r304_currentGlyph.include(r272_intersection(r304_BottomStrokeMask(-0.1), r272_xn$spirooutline$1aao(r272_corner(r304_kshLeft + r302_stroke, 0), r272_corner(r304_kshLeft + r302_stroke, r304_attach + 1), r272_corner(r304_kshRightTop - r304_Ok - 0.1, r302_top), r272_corner(r304_kshRightBot - r304_Ok, r302_top), r272_corner(r304_kshRightBot - r304_Ok, 0)), r272_dispiro(r272_flat(r304_kshRightBot - r304_Ok, 0, r272_widths.lhs(r302_stroke)), r272_curl(r304_kshLeft + r302_stroke, r304_attach2, r272_widths.lhs(r304_fine)))));
                    r304_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r302_slabLegs, r302_top, r302_left, r302_right, r302_stroke, true), r272_KAttachment(r302_attachment, r302_slabLegs, r302_top, r302_left, r302_right, r302_stroke, true)), r272_union(r272_HalfRectTriangle(r304_kshRightBot - r304_Ok - 0.1, 0, r304_kshLeft + r302_stroke - 0.1, r304_attach2), r272_intersection(r304_TopStrokeMask(-0.1), r272_HalfRectTriangle(r304_kshRightTop - r304_Ok - 0.1, r302_top, r304_kshLeft + r302_stroke - 0.1, r304_attach)))));
                    return void 0;
                };
            };
            r294_exports.Symmetric = r294_Symmetric = function (r315_leadGap, r315_hookDepth) {
                var _r315_t0, _r315_t1;
                return function (r316_fHookTop, r316_left, r316_right, r316_stroke, r316_top, r316_slabLT, r316_slabLegs, r316_attachment) {
                    var _r316_t0, _r316_t1;
                    return function () {
                        var r318_kHookTopMix, r318_kshRightHookTop, r318_xRef, _r318_t1;
                        var _r318_t0 = this;
                        var r318_currentGlyph = _r318_t0;
                        var r318_fine = r272_AdviceStroke(r315_leadGap ? 3.5 : 3);
                        var r318_Ok = r272_KO(r316_slabLegs, true, r316_top, r316_stroke);
                        var r318_kshLeft = r316_left + r272_KBalance(r316_slabLT, true);
                        var r318_kshRight = r316_right + r272_KBalanceRight(r316_slabLegs, true);
                        var r318_xAttach = r318_kshLeft + r272_HSwToV(r316_stroke) + (r315_leadGap || r318_fine);
                        var r318_yAttach = r316_top * (r315_leadGap ? 0.42 : 0.49) - r316_stroke * (r315_leadGap ? 1 : -0.1);
                        var r318_coYAttach = r316_top - r318_yAttach;
                        if (!r315_hookDepth)
                            r318_currentGlyph.setBaseAnchor('trailing', r318_kshRight - r318_Ok, 0);
                        var r318_StrokeMask = function (r320_bit, r320_t, r320_b, r320_offset) {
                            var _r320_t0, _r320_t1;
                            return r272_Rect(r320_t, r320_b, r318_kshLeft, r1_maskBit(r316_slabLegs, r320_bit) ? r318_kshRight + r320_offset : 2 * r272_Width);
                        };
                        if (r316_fHookTop) {
                            r318_kHookTopMix = 0.5;
                            r318_kshRightHookTop = r318_kshRight - r272_HookX * 0.5 + r272_HSwToV(0.5 * r316_stroke);
                            r318_currentGlyph.include(r272_tagged('strokeRT', r272_intersection(r272_Rect(r316_top, 0.5 * r316_top, r318_kshLeft, 2 * r272_Width), r272_dispiro(r272_widths.rhs(r316_stroke), r272_straight.left.start(r318_kshRight + (r1_maskBit(r316_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r316_stroke, r316_top - r316_stroke), r272_flat(r1_mix(r318_kshRightHookTop - r318_Ok, r318_xAttach, r318_kHookTopMix), r1_mix(r316_top, r318_yAttach, r318_kHookTopMix), r272_widths.rhs(r1_mix(r316_stroke, r318_fine, r318_kHookTopMix))), r272_curl(r1_mix(r318_kshRightHookTop - r318_Ok, r318_xAttach, 2), r1_mix(r316_top, r318_yAttach, 2), r272_widths.rhs(r318_fine))))));
                        } else {
                            r318_xRef = r1_linreg(r318_yAttach, r318_xAttach, r316_top, r318_kshRight, r316_top * 0.75);
                            r318_currentGlyph.setBaseAnchor('armOverlay', r318_xRef - r272_HSwToV(0.5 * r272_Stroke), r316_top * 0.75);
                            r318_currentGlyph.include(r272_tagged('strokeRT', r272_intersection(r318_StrokeMask(1, r316_top, 0.5 * r316_top, 0), r272_dispiro(r272_widths.rhs(r316_stroke), r272_flat(r318_kshRight - r318_Ok, r316_top), r272_curl(r1_mix(r318_kshRight - r318_Ok, r318_xAttach, 2), r1_mix(r316_top, r318_yAttach, 2), r272_widths.rhs(r318_fine))))));
                        }
                        if (r315_hookDepth) {
                            r318_currentGlyph.include(r272_ExtendBelowBaseAnchors(r315_hookDepth));
                            r318_currentGlyph.include(r272_tagged('strokeRB', r272_dispiro(r272_flat(r318_kshLeft, 0.5 * r316_top + r316_stroke / 2, r272_widths.rhs.heading(r316_stroke, r272_Rightward)), r272_curl(r1_mix(r318_kshLeft, r316_right, 0.5), 0.5 * r316_top + r316_stroke / 2), r272_archv(), r272_flat(r316_right, 0.5 * r316_top + r316_stroke / 2 - r272_ArchDepthB), r272_curl(r316_right, r315_hookDepth + r272_Hook + r316_stroke / 2), r272_arcvh(), r272_straight.left.end(r316_right - r272_HookX - r272_HSwToV(0.5 * r316_stroke), r315_hookDepth))));
                        } else {
                            r318_xRef = r1_linreg(r318_coYAttach, r318_xAttach, 0, r318_kshRight, r316_top * 0.25);
                            r318_currentGlyph.setBaseAnchor('legOverlay', r318_xRef - r272_HSwToV(0.5 * r272_Stroke), r316_top * 0.25);
                            r318_currentGlyph.include(r272_tagged('strokeRB', r272_intersection(r318_StrokeMask(0, 0.5 * r316_top, 0, 0), r272_dispiro(r272_flat(r318_kshRight - r318_Ok, 0, r272_widths.lhs(r316_stroke)), r272_curl(r1_mix(r318_kshRight - r318_Ok, r318_xAttach, 2), r1_mix(0, r318_coYAttach, 2), r272_widths.lhs(r318_fine))))));
                            if (r315_leadGap)
                                r318_currentGlyph.include(r272_intersection(r272_HBar.m(r318_kshLeft, 2 * r272_Width, 0.5 * r316_top, r316_stroke), r272_union(r272_Rect(r316_top, 0, r318_kshLeft, r318_xAttach), r272_xn$spirooutline$1aao(r272_corner((r316_fHookTop ? r318_kshRightHookTop : r318_kshRight) - r318_Ok - 1, r316_top), r272_corner(r318_xAttach - 1, r318_yAttach), r272_corner(r318_xAttach - 1, r316_top)), r272_xn$spirooutline$1aao(r272_corner(r318_kshRight - r318_Ok - 1, 0), r272_corner(r318_xAttach - 1, r318_coYAttach), r272_corner(r318_xAttach - 1, 0)))));
                        }
                        r318_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r316_slabLegs, r316_top, r316_left, r316_right, r316_stroke, true), r272_KAttachment(r316_attachment, r316_slabLegs, r316_top, r316_left, r316_right, r316_stroke, true)), r272_union(r272_intersection(r318_StrokeMask(1, r316_top, 0.5 * r316_top, -0.1), r272_HalfRectTriangle(r318_kshRight - r318_Ok - 0.1, r316_top, r1_mix(r318_kshRight - r318_Ok, r318_xAttach, 2) - 0.1, r1_mix(r316_top, r318_yAttach, 2))), r272_intersection(r318_StrokeMask(0, 0.5 * r316_top, 0, -0.1), r272_HalfRectTriangle(r318_kshRight - r318_Ok - 0.1, 0, r1_mix(r318_kshRight - r318_Ok, r318_xAttach, 2) - 0.1, r1_mix(0, r318_coYAttach, 2))))));
                        return void 0;
                    };
                };
            };
            r294_exports.Curly = r294_Curly = function (r331_fHookTop, r331_left, r331_right, r331_stroke, r331_top, r331_slabLT, r331_slabLegs, r331_attachment) {
                var _r331_t0, _r331_t1;
                return function () {
                    var _r333_t1;
                    var _r333_t0 = this;
                    var r333_currentGlyph = _r333_t0;
                    var r333_turn = r331_top * 0.99;
                    var r333_fine = r272_AdviceStroke(3.5);
                    var r333_kshLeft = r331_left + r272_KBalance(r331_slabLT, false);
                    var r333_kshRight = r331_right + r272_KBalanceRight(r331_slabLegs, false);
                    r333_currentGlyph.setBaseAnchor('trailing', r333_kshRight - r272_O, 0);
                    var r333_upperCurvature = function () {
                        var _r335_t0, _r335_t1;
                        return r272_bezControls(0, 0.3, 0.5, 0.65, 8);
                    };
                    var r333_upperCurvatureHT = function () {
                        var _r336_t0, _r336_t1;
                        return r272_bezControls(0.5, 0, 0.5, 0.65, 8, {
                            'blend': function (r337_t) {
                                var _r337_t0, _r337_t1;
                                return r272_widths.rhs(r1_mix(r331_stroke, r333_fine, r337_t));
                            }
                        });
                    };
                    var r333_lowerCurvature = function () {
                        var _r338_t0, _r338_t1;
                        return r272_quadControls(0, 0.3, 8);
                    };
                    var r333_xAttach1 = r333_kshLeft + r272_HSwToV(r331_stroke);
                    var r333_yAttach1 = r331_top * (r331_slabLegs ? 0.325 : 0.375);
                    var r333_xAttach2 = r333_kshLeft + r272_HSwToV(r331_stroke);
                    var r333_yAttach2 = r331_top * 0.75;
                    var r333_kDiag = r1_mix(1, r272_DiagCorDs(r331_top - r333_yAttach1, r333_kshRight - r333_kshLeft, r331_stroke), 0.5);
                    r333_currentGlyph.setBaseAnchor('armOverlay', r1_mix(r333_xAttach1, r333_kshRight, r272_StrokeWidthBlend(0.7, 0.6)), r1_mix(r333_yAttach1, r331_top, r272_StrokeWidthBlend(0.6, 0.65)));
                    r333_currentGlyph.include(r272_intersection(r272_Rect(r331_top, 0, r333_kshLeft, 2 * r272_Width), r331_fHookTop ? r272_dispiro(r272_straight.left.start(r333_kshRight + (r1_maskBit(r331_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r331_stroke, r331_top - r331_stroke, r272_widths.rhs(r331_stroke)), r333_upperCurvatureHT(), r272_g4(r333_xAttach1, r333_yAttach1, r272_widths.rhs(r333_fine))) : r272_dispiro(r272_g4.down.start(r333_kshRight, r331_top, r272_widths.rhs.heading(r331_stroke, r272_Downward)), r333_upperCurvature(), r272_g4(r333_xAttach1, r333_yAttach1, r272_widths.rhs(r333_fine)))));
                    r333_currentGlyph.setBaseAnchor('legOverlay', r1_mix(r333_xAttach2, r333_kshRight, r272_StrokeWidthBlend(0.7, 0.6)), r1_mix(r333_yAttach2, 0, r272_StrokeWidthBlend(0.6, 0.65)));
                    r333_currentGlyph.include(r272_difference(r272_dispiro(r272_g4.up.start(r333_kshRight - r272_O, 0, r272_widths.lhs.heading(r331_stroke, r272_Upward)), r333_lowerCurvature(), r272_g4(r333_xAttach2, r333_yAttach2, r272_widths.center(r333_fine))), r331_fHookTop ? r272_xn$spirooutline$1aao(r272_straight.left.start(r333_kshRight + (r1_maskBit(r331_slabLegs, 1) ? r272_SideJut : 0) - r272_TanSlope * r331_stroke, r331_top - r331_stroke + 0.1), r333_upperCurvatureHT(), r272_corner(r333_xAttach1 - 0.1, r333_yAttach1), r272_corner(-r272_Width, r333_yAttach1), r272_corner(-r272_Width, r331_top * 2), r272_corner(2 * r272_Width, r331_top * 2), r272_corner(2 * r272_Width, r331_top - r331_stroke + 0.1)) : r272_xn$spirooutline$1aao(r272_corner.down.start(r333_kshRight - 0.1, r331_top), r333_upperCurvature(), r272_corner(r333_kshLeft + r331_stroke, r333_yAttach1 + 0.1), r272_corner(r333_kshLeft, 0), r272_corner(r333_kshLeft, r331_top))));
                    r333_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r331_slabLegs, r331_top, r331_left, r331_right, r331_stroke, false), r272_KAttachment(r331_attachment, r331_slabLegs, r331_top, r331_left, r331_right, r331_stroke, false)), r272_union(r272_HalfRectTriangle(r333_kshRight, r331_top, r333_xAttach1, r333_yAttach1), r272_HalfRectTriangle(r333_kshRight - r272_O - r272_HSwToV(0.5 * r331_stroke), 0, r333_xAttach2, r333_yAttach2))));
                    return void 0;
                };
            };
            var r294_CursiveDimen = function (r344_left, r344_right, r344_top, r344_stroke, r344_slabLT, r344_slabLegs) {
                var _r344_t0, _r344_t1;
                var r344_kshLeft = r344_left + r272_KBalance(r344_slabLegs, true);
                var r344_kshRight = r344_right + r272_KBalanceRight(r344_slabLegs, true);
                var r344_Ok = r272_KO(r344_slabLegs, true, r344_top, r344_stroke);
                var r344_arcFine = r344_stroke * r272_CThin;
                var r344_arcStroke = r272_AdviceStroke2(2, 3, r344_top);
                var r344_arcTerminalFine = r272_AdviceStroke2(3, 4, r344_top);
                var r344_expansion = r272_Width / (r272_UPM / 2) - 1;
                var r344_pArcStartY = 0.46 + 0.1 * (r344_arcStroke / r272_Width);
                var r344_pArcTopX = 0.625 - 0.05 * (r344_arcStroke / r272_Width) - 0 * r344_expansion * (r344_arcStroke / r272_UPM);
                var r344_pArcRightX = 0.925 - r272_TanSlope * 0.25 + ((r272_SLAB ? 0 : 0.05) + 0.75 * r272_TanSlope) * (r344_arcStroke / r272_Width);
                var r344_pArcRightY = 0.575 - 0.625 * (r344_arcStroke / r272_Width) - 0.5 * r344_expansion * (r344_arcStroke / r272_UPM);
                var r344_pArcTerminalX = 0.15 - 0.5 * (r344_arcStroke / r272_Width);
                var r344_pArcBottomX = 0.15 + 0.5 * (r344_arcStroke / r272_Width);
                var r344_pArcBottomY = 0.45 + 0.5 * (r344_arcStroke / r272_Width);
                var r344_arcRightSlope = 0.05 + 0.2 * (r344_arcStroke / r272_Width) + 1 * r344_expansion * (r344_arcStroke / r272_UPM);
                var r344_arcTopSkew = r272_shoulderMidSkew(r344_arcFine, r344_arcStroke);
                var r344_arcStartX = r344_kshLeft + r272_HVContrast * (r344_stroke - r344_arcFine);
                var r344_arcStartY = r344_top * r344_pArcStartY;
                var r344_arcTerminalX = r1_mix(r344_arcStartX, r344_kshRight, r344_pArcTerminalX);
                var r344_arcBottomX = r1_mix(r344_arcStartX, r344_kshRight, r344_pArcBottomX);
                var r344_arcBottomY = r1_mix(0, r344_top, r344_pArcBottomY);
                var r344_arcTerminalY = r344_arcBottomY + r344_arcStroke * 0.125 - r272_O;
                var r344_arcRightX = r344_kshRight * r344_pArcRightX + r272_HSwToV(0.2 * r344_stroke);
                var r344_arcRightY = r1_mix(r344_arcBottomY, r344_top, r344_pArcRightY);
                var r344_arcTopX = r1_mix(r344_arcStartX, r344_arcRightX, r344_pArcTopX);
                var r344_arcTopY = r344_top - r272_O;
                return {
                    'Ok': r344_Ok,
                    'arcStartX': r344_arcStartX,
                    'arcStartY': r344_arcStartY,
                    'arcFine': r344_arcFine,
                    'arcRightX': r344_arcRightX,
                    'arcRightY': r344_arcRightY,
                    'arcRightSlope': r344_arcRightSlope,
                    'arcTopX': r344_arcTopX,
                    'arcTopY': r344_arcTopY,
                    'arcStroke': r344_arcStroke,
                    'arcTopSkew': r344_arcTopSkew,
                    'arcBottomX': r344_arcBottomX,
                    'arcBottomY': r344_arcBottomY,
                    'arcTerminalX': r344_arcTerminalX,
                    'arcTerminalY': r344_arcTerminalY,
                    'arcTerminalFine': r344_arcTerminalFine,
                    'kshLeft': r344_kshLeft,
                    'kshRight': r344_kshRight
                };
            };
            var r294_CursiveLoopT = function (r345_sink, r345_offset, r345_left, r345_right, r345_stroke, r345_top, r345_slabLT, r345_slabLegs) {
                var _r345_t0, _r345_t1;
                var r345_dim = r294_CursiveDimen(r345_left, r345_right, r345_top, r345_stroke, r345_slabLT, r345_slabLegs);
                return r345_sink(r272_g4.up.start(r345_dim.arcStartX + r345_offset, r345_dim.arcStartY, r272_widths.rhs.heading(r345_dim.arcFine, r272_Upward)), r272_arcvh(8), r272_g4(r345_dim.arcTopX, r345_dim.arcTopY - r345_offset, r272_widths.rhs.heading(r345_dim.arcStroke, {
                    'y': +1,
                    'x': r345_dim.arcTopSkew
                })), r272_archv(8, 2), r272_g4.down.mid(r345_dim.arcRightX - r345_offset, r345_dim.arcRightY - 0.5 * r345_dim.arcRightSlope * r272_HSwToV(r345_dim.arcStroke), r272_heading({
                    'y': r345_dim.arcRightSlope,
                    'x': r272_HVContrast
                })), r272_arcvh(), r272_g4(r345_dim.arcBottomX, r345_dim.arcBottomY - r345_dim.arcStroke + r345_offset, r272_widths.rhs.heading(r345_dim.arcTerminalFine, r272_Leftward)), r272_g4(r345_dim.arcStartX, r345_dim.arcTerminalY - r345_dim.arcStroke + r345_offset, r272_widths.rhs.heading(r345_dim.arcStroke, r272_Leftward)));
            };
            r294_exports.Cursive = r294_Cursive = function (r347_fHookTop, r347_left, r347_right, r347_stroke, r347_top, r347_slabLT, r347_slabLegs, r347_attachment) {
                var _r347_t0, _r347_t1;
                return function () {
                    var _r349_t1;
                    var _r349_t0 = this;
                    var r349_currentGlyph = _r349_t0;
                    var r349_dim = r294_CursiveDimen(r347_left, r347_right, r347_top, r347_stroke, r347_slabLT, r347_slabLegs);
                    var r349_BottomStrokeMask = function () {
                        var _r350_t0, _r350_t1;
                        return r272_Rect(r272_XH, 0, 0, r347_slabLegs ? r349_dim.kshRight + r272_SideJut + r272_TanSlope * r272_Stroke : r272_Width * 2);
                    };
                    r349_currentGlyph.include(r294_CursiveLoopT(r272_dispiro, 0, r347_left, r347_right, r347_stroke, r347_top, r347_slabLT, r347_slabLegs));
                    r349_currentGlyph.setBaseAnchor('legOverlay', r1_mix(r349_dim.arcTerminalX, r349_dim.kshRight, r272_StrokeWidthBlend(0.5, 0.6)), r1_mix(r349_dim.arcTerminalY, 0, r272_StrokeWidthBlend(0.6, 0.65)));
                    r349_currentGlyph.include(r272_difference(r272_intersection(r349_BottomStrokeMask(), r272_dispiro(r272_flat(r349_dim.arcTerminalX, r349_dim.arcTerminalY, r272_widths.lhs()), r272_curl(r349_dim.kshRight - r349_dim.Ok, 0, r272_widths.rhs()))), r294_CursiveLoopT(r272_xn$spirooutline$1aao, -r272_O, r347_left, r347_right, r347_stroke, r347_top, r347_slabLT, r347_slabLegs)));
                    r349_currentGlyph.include(r272_difference(r272_union(r272_KSlabs(r347_slabLegs ? 1 : 0, r347_top, r347_left, r347_right, r347_stroke, true), r272_KAttachment(r347_attachment, r347_slabLegs, r347_top, r347_left, r347_right, r347_stroke, true)), r272_HalfRectTriangle(r349_dim.kshRight - r349_dim.Ok - 0.1, 0, r349_dim.arcTerminalX - 0.1, r349_dim.arcTerminalY)));
                    return void 0;
                };
            };
            r294_exports.CursiveTailed = r294_CursiveTailed = function (r356_fHookTop, r356_left, r356_right, r356_stroke, r356_top, r356_slabLT, r356_slabLegs, r356_attachment) {
                var _r356_t0, _r356_t1;
                return function () {
                    var _r358_t1;
                    var _r358_t0 = this;
                    var r358_currentGlyph = _r358_t0;
                    var r358_dim = r294_CursiveDimen(r356_left, r356_right, r356_top, r356_stroke, r356_slabLT, r356_slabLegs);
                    r358_currentGlyph.include(r294_CursiveLoopT(r272_dispiro, 0, r356_left, r356_right, r356_stroke, r356_top, r356_slabLT, r356_slabLegs));
                    var r358_swDiagTail = r272_AdviceStroke(2, 1 - (r358_dim.kshLeft - r272_SB) / r272_Width);
                    var r358_swDiagTailAdj = r358_swDiagTail / r1_mix(1, r272_HVContrast, 0.375);
                    var r358_xDTGap = 0.1 * (r272_RightSB - r272_SB) - (0.125 + r1_clamp(0, 0.375, 0.5 * (r272_Width / r272_UPM * 2 - 1))) * r358_swDiagTail;
                    var r358_xDTStart = r358_dim.arcTerminalX + r272_HSwToV(r358_swDiagTail) + r358_xDTGap;
                    var r358_xDTEnd = r358_dim.kshRight - 0.8 * r272_Hook - r272_HSwToV(0.25 * r358_swDiagTail) + r358_xDTGap * 0.625;
                    var r358_tailAngle = Math.min(85, 50 + Math.atan2(0.75 * r358_swDiagTail, r272_Hook) / Math.PI * 180);
                    var r358_dtInnerRadius = r1_clamp(0.125, 1, r1_mix(1, r272_Width / r272_UPM * 2, 3)) * r272_DiagonalTailInnerRadius();
                    r358_currentGlyph.setBaseAnchor('legOverlay', r1_mix(r358_xDTStart, r358_xDTEnd, r272_StrokeWidthBlend(0.65, 0.75)), r1_mix(r358_dim.arcTerminalY, 0, r272_StrokeWidthBlend(0.6, 0.65)));
                    r358_currentGlyph.include(r272_difference(r272_dispiro(r272_flat(r358_xDTStart, r358_dim.arcTerminalY, r272_widths.center(r358_swDiagTailAdj)), r272_curl(r358_xDTEnd + 0.125 * r358_dtInnerRadius, 0.9 * r358_swDiagTail + 0.5 * r358_dtInnerRadius), r272_DiagonalTailF(1, r272_DivFrame(1), r358_xDTEnd, 0, r358_dtInnerRadius, r358_tailAngle, r272_Hook + r358_swDiagTail / 4, r358_swDiagTail)), r294_CursiveLoopT(r272_xn$spirooutline$1aao, -r272_O, r356_left, r356_right, r356_stroke, r356_top, r356_slabLT, r356_slabLegs)));
                    return void 0;
                };
            };
            return r294_exports;
        }();
        var r272_KHookTopBar = function (r362_slabLegs, r362_straightBar) {
            var _r362_t0, _r362_t1;
            return r272_TopHook.lBarInner(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_SB + r272_KBalance(r362_slabLegs, r362_straightBar)), new r272_xn$NamedParameterPair$2Lrc9b('yBot', 0), new r272_xn$NamedParameterPair$2Lrc9b('yTop', r272_Ascender));
        };
        var r272_CyrlVbGap = (r272_RightSB - r272_SB) * 0.375;
        var r272_CyrlVbLength = function (r366_top) {
            var _r366_t0, _r366_t1;
            return r366_top * 0.375 + r272_Stroke;
        };
        var r272_CyrlVbSw = r272_AdviceStroke(3);
        var r272_UpperKConfig = r1_SuffixCfg.weave({
            'straight': r272_KLegs.Straight,
            'curly': r272_KLegs.Curly,
            'symmetricTouching': r272_KLegs.Symmetric(0),
            'symmetricConnected': r272_KLegs.Symmetric(r272_AdviceStroke(6)),
            'symmetricConnectedKH': r272_KLegs.Symmetric(r272_AdviceStroke(6), r272_Descender),
            'symmetricConnectedVB': r272_KLegs.Symmetric(r272_CyrlVbGap)
        }, {
            'serifless': [
                0,
                0,
                0,
                0
            ],
            'topLeftSerifed': [
                2,
                0,
                0,
                0
            ],
            'bottomRightSerifed': [
                0,
                0,
                1,
                0
            ],
            'bottomRightSerifed2': [
                0,
                0,
                0,
                1
            ],
            'topLeftAndBottomRightSerifed': [
                2,
                0,
                1,
                0
            ],
            'topLeftAndBottomRightSerifed2': [
                2,
                0,
                0,
                1
            ],
            'serifed': [
                1,
                1,
                3,
                0
            ],
            'serifedKH': [
                1,
                1,
                2,
                0
            ],
            'serifed2': [
                1,
                1,
                2,
                1
            ]
        });
        var r272_UpperKLTSerif = function (r367_top, r367_sw, r367_slabLT, r367_straightBar) {
            var r367__, _r367_t1, _r367_t2;
            var _r367_t0 = r367_slabLT;
            return 2 === _r367_t0 ? r272_HSerif.lt(r272_SB + r272_KBalance(r367_slabLT, r367_straightBar), r367_top, r272_SideJut) : 1 === _r367_t0 ? r272_HSerif.mt(r272_SB + r272_KBalance(r367_slabLT, r367_straightBar) + r272_HSwToV(0.5 * r367_sw), r367_top, r272_Jut) : (r367__ = _r367_t0, function () {
                var _r369_t1;
                var _r369_t0 = this;
                var r369_currentGlyph = _r369_t0;
                return void 0;
            });
        };
        var r272_UpperKLBSerif = function (r370_top, r370_sw, r370_slabLT, r370_straightBar) {
            var r370__, _r370_t1, _r370_t2;
            var _r370_t0 = r370_slabLT;
            return 2 === _r370_t0 ? r272_HSerif.lb(r272_SB + r272_KBalance(r370_slabLT, r370_straightBar), 0, r272_SideJut) : 1 === _r370_t0 ? r272_HSerif.mb(r272_SB + r272_KBalance(r370_slabLT, r370_straightBar) + r272_HSwToV(0.5 * r370_sw), 0, r272_Jut) : (r370__ = _r370_t0, function () {
                var _r372_t1;
                var _r372_t0 = this;
                var r372_currentGlyph = _r372_t0;
                return void 0;
            });
        };
        var r272_CyrlKaVBar = function (r373_top, r373_slabLT, r373_straightBar) {
            var _r373_t0, _r373_t1;
            return r272_VBar.m(r272_SB + r272_KBalance(r373_slabLT, r373_straightBar) + r272_HSwToV(0.5 * r272_CyrlVbSw) + 0.7 * r272_CyrlVbGap, r373_top / 2 - r272_CyrlVbLength(r373_top) / 2, r373_top / 2 + r272_CyrlVbLength(r373_top) / 2, Math.min(r272_AdviceStroke(5), r272_CyrlVbGap * 0.5));
        };
        var r272_GrekKaiAttachmentshape = function (r374_fSerif) {
            var _r374_t0, _r374_t1;
            var r374_shapeDepth = 0.8 * r272_Descender - 0.25 * r272_Stroke;
            return r272_PointingTo(0, 0, r374_shapeDepth, r374_shapeDepth, function (r375_mag) {
                var _r375_t0, _r375_t1;
                return function () {
                    var _r377_t1;
                    var _r377_t0 = this;
                    var r377_currentGlyph = _r377_t0;
                    var r377_kSw = r1_mix(1, r272_HVContrast, Math.sqrt(2) / 2);
                    r377_currentGlyph.include(r272_dispiro(r272_widths.lhs(r272_Stroke * r377_kSw), r272_flat(0, 0), r272_curl(r375_mag, 0)));
                    if (r374_fSerif)
                        r377_currentGlyph.include(r272_dispiro(r272_widths.center(r272_Stroke / r377_kSw), r272_flat(0, r272_Stroke * r377_kSw + r272_SideJut), r272_curl(0, 0 - r272_SideJut)));
                    return void 0;
                };
            });
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('UpperKaiSymbolAttachment/sans', null, function () {
            var _r382_t1;
            var _r382_t0 = this;
            var r382_currentGlyph = _r382_t0;
            r382_currentGlyph.setWidth(0);
            r382_currentGlyph.setMarkAnchor('trailing', 0, 0);
            r382_currentGlyph.include(r272_GrekKaiAttachmentshape(false));
            return void 0;
        });
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('UpperKaiSymbolAttachment/serifed', null, function () {
            var _r388_t1;
            var _r388_t0 = this;
            var r388_currentGlyph = _r388_t0;
            r388_currentGlyph.setWidth(0);
            r388_currentGlyph.setMarkAnchor('trailing', 0, 0);
            r388_currentGlyph.include(r272_GrekKaiAttachmentshape(true));
            return void 0;
        });
        var _r272_t11 = _r1_t2(r272_UpperKConfig)[Symbol.iterator]();
        var _r272_t12 = void 0;
        while (!(_r272_t12 = _r272_t11.next()).done) {
            _r272_t13 = _r272_t12.value;
            r272_suffix = _r272_t13[0];
            r272_LegsImpl = _r272_t13[1][0];
            r272_slabLT = _r272_t13[1][1][0];
            r272_slabLB = _r272_t13[1][1][1];
            r272_slabLegs = _r272_t13[1][1][2];
            r272_slabKS = _r272_t13[1][1][3];
            _r272_t13[1][1];
            _r272_t13[1];
            (function () {
                var r396_straightBar = r272_LegsImpl !== r272_KLegs.Curly;
                var r396_KBaseShape = function (r397_sw, r397_top, r397_attachment) {
                    var _r397_t0, _r397_t1;
                    return function () {
                        var _r399_t1;
                        var _r399_t0 = this;
                        var r399_currentGlyph = _r399_t0;
                        r399_currentGlyph.include(r272_VBar.l(r272_SB + r272_KBalance(r272_slabLT, r396_straightBar), 0, r397_top, r397_sw));
                        r399_currentGlyph.include(r272_LegsImpl(false, r272_SB, r272_RightSB, r397_sw, r397_top, r272_slabLT, r272_slabLegs, r397_attachment));
                        if (r272_slabLT)
                            r399_currentGlyph.include(r272_UpperKLTSerif(r397_top, r397_sw, r272_slabLT, r396_straightBar));
                        if (r272_slabLB)
                            r399_currentGlyph.include(r272_UpperKLBSerif(r397_top, r397_sw, r272_slabLT, r396_straightBar));
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('K.' + r272_suffix, null, function () {
                    var _r406_t1;
                    var _r406_t0 = this;
                    var r406_currentGlyph = _r406_t0;
                    r406_currentGlyph.include(r272_MarkSet.capital());
                    r406_currentGlyph.include(r396_KBaseShape(r272_Stroke, r272_CAP));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KDescender.' + r272_suffix, null, function () {
                    var _r411_t1;
                    var _r411_t0 = this;
                    var r411_currentGlyph = _r411_t0;
                    r411_currentGlyph.include(r272_MarkSet.capital());
                    r411_currentGlyph.include(r396_KBaseShape(r272_Stroke, r272_CAP, r272_CyrDescender));
                    r411_currentGlyph.include(r272_ExtendBelowBaseAnchors(-r272_LongJut + 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KBar.' + r272_suffix, null, function () {
                    var _r417_t1;
                    var _r417_t0 = this;
                    var r417_currentGlyph = _r417_t0;
                    r417_currentGlyph.include(r272_xn$referglyph$1aao('K.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r417_currentGlyph.include(r272_LetterBarOverlay.l.in(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_SB + r272_KBalance(r272_slabLT, r396_straightBar)), new r272_xn$NamedParameterPair$2Lrc9b('bot', r272_XH), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP - (r272_slabLT ? r272_Stroke : 0)), new r272_xn$NamedParameterPair$2Lrc9b('space', [
                        0,
                        r1_mix(r272_SB, r272_RightSB, 0.75)
                    ])));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KVBar.' + r272_suffix, null, function () {
                    var _r426_t1;
                    var _r426_t0 = this;
                    var r426_currentGlyph = _r426_t0;
                    r426_currentGlyph.include(r272_MarkSet.capital());
                    r426_currentGlyph.include(r396_KBaseShape(r272_CyrlVbSw, r272_CAP));
                    r426_currentGlyph.include(r272_CyrlKaVBar(r272_CAP, r272_slabLT, r396_straightBar));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/KaiSymbol.' + r272_suffix, null, function () {
                    var _r432_t0, _r432_t2;
                    var _r432_t1 = this;
                    var r432_currentGlyph = _r432_t1;
                    r432_currentGlyph.include(r272_xn$referglyph$1aao('K.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r432_currentGlyph.include(r272_ExtendBelowBaseAnchors(r272_Descender));
                    r432_currentGlyph.include(r272_xn$referglyph$1aao((_r432_t0 = r272_slabKS, 0 === _r432_t0 ? 'UpperKaiSymbolAttachment/sans' : 1 === _r432_t0 ? 'UpperKaiSymbolAttachment/serifed' : void 0)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpK.' + r272_suffix, null, function () {
                    var _r438_t1;
                    var _r438_t0 = this;
                    var r438_currentGlyph = _r438_t0;
                    r438_currentGlyph.include(r272_MarkSet.e());
                    r438_currentGlyph.include(r396_KBaseShape(r272_Stroke, r272_XH));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpKDescender.' + r272_suffix, null, function () {
                    var _r443_t1;
                    var _r443_t0 = this;
                    var r443_currentGlyph = _r443_t0;
                    r443_currentGlyph.include(r272_MarkSet.e());
                    r443_currentGlyph.include(r396_KBaseShape(r272_Stroke, r272_XH, r272_CyrDescender));
                    r443_currentGlyph.include(r272_ExtendBelowBaseAnchors(-r272_LongJut + 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpKVBar.' + r272_suffix, null, function () {
                    var _r449_t1;
                    var _r449_t0 = this;
                    var r449_currentGlyph = _r449_t0;
                    r449_currentGlyph.include(r272_MarkSet.e());
                    r449_currentGlyph.include(r396_KBaseShape(r272_CyrlVbSw, r272_XH));
                    r449_currentGlyph.include(r272_CyrlKaVBar(r272_XH, r272_slabLT, r396_straightBar));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('KHookTop.' + r272_suffix, null, function () {
                    var _r455_t1;
                    var _r455_t0 = this;
                    var r455_currentGlyph = _r455_t0;
                    r455_currentGlyph.include(r272_MarkSet.capital());
                    r455_currentGlyph.include(r272_VBar.l(r272_SB + r272_KBalance(r272_slabLT, r396_straightBar), 0, r272_CAP, r272_Stroke));
                    r455_currentGlyph.include(r272_LegsImpl(true, r272_SB, r272_RightSB, r272_Stroke, r272_CAP, r272_slabLT, r272_slabLegs));
                    r455_currentGlyph.ejectTagged('serifRT');
                    if (r272_slabLT)
                        r455_currentGlyph.include(r272_UpperKLTSerif(r272_CAP, r272_Stroke, r272_slabLT, r396_straightBar));
                    if (r272_slabLB)
                        r455_currentGlyph.include(r272_UpperKLBSerif(r272_CAP, r272_Stroke, r272_slabLT, r396_straightBar));
                    return void 0;
                });
                var r396_BashkirKaShape = function (r462_df, r462_top) {
                    var _r462_t0, _r462_t1;
                    return function () {
                        var _r464_t1;
                        var _r464_t0 = this;
                        var r464_currentGlyph = _r464_t0;
                        var r464_left = r272_slabLT ? r1_mix(r272_SB, r272_RightSB, 0.35) - r272_HSwToV(0.5 * r462_df.mvs) : r1_mix(r272_SB, r272_RightSB, 0.2);
                        var r464_leftNB = r464_left - r272_KBalance(r272_slabLT, r396_straightBar);
                        var r464_xTopBarLeftEnd = r1_mix(0, r272_SB, r272_slabLT ? 0.25 : 0.375);
                        var r464_sw = r272_AdviceStroke(3);
                        r464_currentGlyph.include(r272_HBar.t(r464_xTopBarLeftEnd, r272_Stroke * 0.1 + r464_left, r462_top));
                        r464_currentGlyph.include(r272_VBar.l(r464_left, 0, r462_top, r464_sw));
                        r464_currentGlyph.include(r272_LegsImpl(false, r464_leftNB, r272_RightSB, r464_sw, r462_top, r272_slabLT, r272_slabLegs));
                        if (r272_slabLT)
                            r464_currentGlyph.include(r272_VSerif.dl(r464_xTopBarLeftEnd, r462_top, r272_VJut, Math.min(r272_VJutStroke * r462_df.mvs / r272_Stroke, 0.625 * (r464_left - r464_xTopBarLeftEnd))));
                        if (r272_slabLB)
                            r464_currentGlyph.include(r272_HSerif.mb(r464_left + r272_HSwToV(0.5 * r464_sw), 0, r272_Jut));
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BashkirUpperKa.' + r272_suffix, null, function () {
                    var _r472_t1;
                    var _r472_t0 = this;
                    var r472_currentGlyph = _r472_t0;
                    var r472_df = r472_currentGlyph.include(r272_DivFrame(1));
                    r472_currentGlyph.include(r472_df.markSet.capital());
                    r472_currentGlyph.include(r396_BashkirKaShape(r472_df, r272_CAP));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BashkirKa.' + r272_suffix, null, function () {
                    var _r478_t1;
                    var _r478_t0 = this;
                    var r478_currentGlyph = _r478_t0;
                    var r478_df = r478_currentGlyph.include(r272_DivFrame(1));
                    r478_currentGlyph.include(r478_df.markSet.e());
                    r478_currentGlyph.include(r396_BashkirKaShape(r478_df, r272_XH));
                    return void 0;
                });
            }());
        }
        var r272_LowerKConfig = r1_SuffixCfg.weave({
            'straight': r272_KLegs.Straight,
            'curly': r272_KLegs.Curly,
            'cursive': r272_KLegs.Cursive,
            'cursiveTailed': r272_KLegs.CursiveTailed,
            'symmetricTouching': r272_KLegs.Symmetric(0),
            'symmetricConnected': r272_KLegs.Symmetric(r272_AdviceStroke(6))
        }, {
            'serifless': [
                0,
                0,
                0
            ],
            'topLeftSerifed': [
                1,
                0,
                0
            ],
            'bottomRightSerifed': [
                0,
                0,
                1
            ],
            'topLeftAndBottomRightSerifed': [
                1,
                0,
                1
            ],
            'serifed': [
                1,
                1,
                3
            ]
        });
        var _r272_t14 = _r1_t2(r272_LowerKConfig)[Symbol.iterator]();
        var _r272_t15 = void 0;
        while (!(_r272_t15 = _r272_t14.next()).done) {
            _r272_t16 = _r272_t15.value;
            r272_suffix = _r272_t16[0];
            r272_LegsImpl = _r272_t16[1][0];
            r272_slabLT = _r272_t16[1][1][0];
            r272_slabLB = _r272_t16[1][1][1];
            r272_slabLegs = _r272_t16[1][1][2];
            _r272_t16[1][1];
            _r272_t16[1];
            (function () {
                var r485_straightBar = r272_LegsImpl !== r272_KLegs.Curly;
                var r485_kBaseShape = function (r486_attachment) {
                    var _r486_t0, _r486_t1;
                    return function () {
                        var _r488_t1;
                        var _r488_t0 = this;
                        var r488_currentGlyph = _r488_t0;
                        r488_currentGlyph.include(r272_LeaningAnchor.Above.VBar.l(r272_SB + r272_KBalance(r272_slabLT, r485_straightBar)));
                        r488_currentGlyph.include(r272_VBar.l(r272_SB + r272_KBalance(r272_slabLT, r485_straightBar), 0, r272_Ascender));
                        r488_currentGlyph.include(r272_LegsImpl(false, r272_SB, r272_RightSB, r272_Stroke, r272_XH, r272_slabLT, r272_slabLegs, r486_attachment));
                        if (r272_slabLT)
                            r488_currentGlyph.include(r272_HSerif.lt(r272_SB + r272_KBalance(r272_slabLT, r485_straightBar), r272_Ascender, r272_SideJut));
                        if (r272_slabLB)
                            r488_currentGlyph.include(r272_tagged('serifLB', r272_HSerif.mb(r272_SB + r272_KBalance(r272_slabLT, r485_straightBar) + r272_HSwToV(r272_HalfStroke), 0, r272_Jut)));
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('k.' + r272_suffix, null, function () {
                    var _r496_t1;
                    var _r496_t0 = this;
                    var r496_currentGlyph = _r496_t0;
                    r496_currentGlyph.include(r272_MarkSet.b());
                    r496_currentGlyph.include(r485_kBaseShape());
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('kDescender.' + r272_suffix, null, function () {
                    var _r501_t1;
                    var _r501_t0 = this;
                    var r501_currentGlyph = _r501_t0;
                    r501_currentGlyph.include(r272_MarkSet.b());
                    r501_currentGlyph.include(r485_kBaseShape(r272_CyrDescender));
                    r501_currentGlyph.include(r272_ExtendBelowBaseAnchors(-r272_LongJut + 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('kPalatalHook.' + r272_suffix, null, function () {
                    var _r507_t1;
                    var _r507_t0 = this;
                    var r507_currentGlyph = _r507_t0;
                    r507_currentGlyph.include(r272_MarkSet.b());
                    r507_currentGlyph.include(r485_kBaseShape(r272_PalatalHook));
                    r507_currentGlyph.include(r272_ExtendBelowBaseAnchors(r272_Descender));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('kBar.' + r272_suffix, null, function () {
                    var _r513_t1;
                    var _r513_t0 = this;
                    var r513_currentGlyph = _r513_t0;
                    r513_currentGlyph.include(r272_xn$referglyph$1aao('k.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r513_currentGlyph.include(r272_LetterBarOverlay.l.in(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_SB + r272_KBalance(r272_slabLT, r485_straightBar)), new r272_xn$NamedParameterPair$2Lrc9b('bot', r272_XH), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_Ascender - (r272_slabLT ? r272_Stroke : 0))));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('kHookTop.' + r272_suffix, null, function () {
                    var _r521_t1;
                    var _r521_t0 = this;
                    var r521_currentGlyph = _r521_t0;
                    r521_currentGlyph.include(r272_MarkSet.b());
                    r521_currentGlyph.include(r272_LegsImpl(false, r272_SB, r272_RightSB, r272_Stroke, r272_XH, r272_slabLT, r272_slabLegs));
                    r521_currentGlyph.include(r272_KHookTopBar(r272_slabLT, r485_straightBar));
                    if (r272_slabLB)
                        r521_currentGlyph.include(r272_tagged('serifLB', r272_HSerif.mb(r272_SB + r272_KBalance(r272_slabLT, r485_straightBar) + r272_HSwToV(r272_HalfStroke), 0, r272_Jut)));
                    return void 0;
                });
            }());
        }
        r272_xn$selectvariant$7Hrq('K', 'K');
        r272_xn$linkreducedvariant$5sIl8('K/sansSerif', 'K', r1_MathSansSerif);
        r272_alias('grek/Kappa', 922, 'K');
        r272_xn$aliasreducedvariant$1aao8('grek/Kappa/sansSerif', 'grek/Kappa', 'K/sansSerif', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('KBar', 42816, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'K'));
        r272_xn$selectvariant$7Hrq('cyrl/KaStroke', 1182, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'KBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ka'));
        r272_xn$selectvariant$7Hrq('KDescender', 11369);
        r272_xn$selectvariant$7Hrq('cyrl/Ka', 1050, 'K', new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'K'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ka'));
        r272_xn$selectvariant$7Hrq('cyrl/KaDescender', 1178, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'KDescender'));
        r272_xn$selectvariant$7Hrq('cyrl/KaVBar', 1180, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'KVBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/KaVBar'));
        r272_xn$selectvariant$7Hrq('cyrl/KaHook', 1219, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'K'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/KaHook'));
        r272_xn$selectvariant$7Hrq('k', 'k');
        r272_xn$selectvariant$7Hrq('k/nonCursive', new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'k'));
        r272_xn$linkreducedvariant$5sIl8('k/sansSerif', 'k', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('kDescender', 11370);
        r272_xn$selectvariant$7Hrq('kPalatalHook', 7556, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'kDescender'));
        r272_xn$selectvariant$7Hrq('kBar', 42817, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'k'));
        r272_xn$selectvariant$7Hrq('cyrl/kaStroke', 1183, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'kBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ka'));
        r272_xn$selectvariant$7Hrq('grek/kappa', 954, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'));
        r272_xn$linkreducedvariant$5sIl8('grek/kappa/sansSerif', 'grek/kappa', r1_MathSansSerif, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'));
        r272_xn$selectvariant$7Hrq('smcpK', 7435, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'K'));
        r272_xn$selectvariant$7Hrq('latn/kappa', 312, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'k/nonCursive'));
        r272_xn$selectvariant$7Hrq('cyrl/ka', 1082, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'));
        r272_xn$selectvariant$7Hrq('cyrl/kaDescender', 1179, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpKDescender'));
        r272_xn$selectvariant$7Hrq('cyrl/ka.BGR', new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'k'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ka'));
        r272_xn$selectvariant$7Hrq('cyrl/kaVBar', 1181, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpKVBar'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/kaVBar'));
        r272_xn$selectvariant$7Hrq('cyrl/kaHook', 1220, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'smcpK'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/kaHook'));
        r272_xn$selectvariant$7Hrq('KHookTop', 408, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'K'));
        r272_xn$selectvariant$7Hrq('kHookTop', 409);
        r272_xn$derivecomposites$7Hrq('cyrl/KaAleut', 1310, 'cyrl/Ka', 'aleutSlashOver');
        r272_xn$derivecomposites$7Hrq('cyrl/kaAleut', 1311, 'cyrl/ka', 'aleutSlashOver');
        r272_xn$derivecomposites$7Hrq('KLegStroke', 42818, 'K', 'legSlashOver');
        r272_xn$derivecomposites$7Hrq('kLegStroke', 42819, 'k', 'legSlashOver');
        r272_xn$derivecomposites$7Hrq('KBarLegStroke', 42820, 'KBar', 'legSlashOver');
        r272_xn$derivecomposites$7Hrq('kBarLegStroke', 42821, 'kBar', 'legSlashOver');
        r272_turned('turnK', 42928, 'K', r272_Middle, r272_CAP / 2);
        r272_turned('turnk', 670, 'k', r272_Middle, r272_XH / 2, r272_MarkSet.p());
        r272_turned('turnSmcpK', 122640, 'smcpK', r272_Middle, r272_XH / 2);
        r272_xn$selectvariant$7Hrq('cyrl/BashkirUpperKa', 1184, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ka'));
        r272_xn$selectvariant$7Hrq('cyrl/BashkirKa', 1185, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ka'));
        r272_xn$selectvariant$7Hrq('grek/KaiSymbol', 975);
        r272_xn$derivemultipartglyphs$7Hrq65('kDot', null, [
            'k',
            'dotAbove'
        ], function (r557_srcs, r557_gr) {
            var _r557_t0, _r557_t1;
            return function () {
                var _r559_t2;
                var _r559_t1 = this;
                var r559_currentGlyph = _r559_t1;
                var _r559_t0 = r557_srcs;
                var r559_base = _r559_t0[0];
                var r559_mark = _r559_t0[1];
                r559_currentGlyph.include(r272_xn$referglyph$1aao(r559_mark));
                r559_currentGlyph.include(r272_Translate(r272_Width + r272_HSwToV(r272_HalfStroke), 0));
                r559_currentGlyph.include(r272_xn$referglyph$1aao(r559_base), r272_AS_BASE);
                r559_currentGlyph.include(r272_LeaningAnchor.Above.VBar.l(r272_Middle));
                r1_HintClass.set(r559_currentGlyph, 'latn', 'dflt');
                return void 0;
            };
        });
        var _r272_t17 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r272_BBS = _r272_t17.BBS;
        var r272_BBD = _r272_t17.BBD;
        var r272_BBBarLeft = _r272_t17.BBBarLeft;
        var r272_BBKLegShape = function (r565_top, r565_left, r565_right) {
            var _r565_t0, _r565_t1;
            var r565_kDiag = r272_DiagCorDs(r565_top / 2, r565_right - r565_left, r272_BBD);
            return r272_union(r272_HBar.b(r565_right - r565_kDiag * r272_BBD, r565_right, 0, r272_BBS), r272_intersection(r272_Rect(r565_top, 0, r565_left, 2 * r272_Width), r272_ExtLineCenter(2, r272_BBS, r565_right, r565_top, r565_left, r565_top / 2)), r272_intersection(r272_xn$spirooutline$1aao(r272_corner(r565_right, r565_top), r272_corner(r565_left, r565_top / 2), r272_corner(r565_left, 0), r272_corner(r272_Width * 2, 0), r272_corner(r272_Width * 2, r565_top)), r272_union(r272_ExtLineCenter(2, r272_BBS, r565_right, 0, r565_left + r565_kDiag * r272_BBD, r565_top / 2), r272_ExtLineCenter(2, r272_BBS, r565_right - r565_kDiag * r272_BBD, 0, r565_left, r565_top / 2))));
        };
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/K', 120130, function () {
            var _r568_t1;
            var _r568_t0 = this;
            var r568_currentGlyph = _r568_t0;
            r568_currentGlyph.include(r272_MarkSet.capital());
            r568_currentGlyph.include(r272_BBBarLeft(r272_SB, 0, r272_CAP));
            r568_currentGlyph.include(r272_BBKLegShape(r272_CAP, r272_SB + r272_BBD + r272_HSwToV(r272_BBS), r272_RightSB));
            return void 0;
        });
        return r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/k', 120156, function () {
            var _r574_t1;
            var _r574_t0 = this;
            var r574_currentGlyph = _r574_t0;
            r574_currentGlyph.include(r272_MarkSet.b());
            r574_currentGlyph.include(r272_BBBarLeft(r272_SB, 0, r272_Ascender));
            r574_currentGlyph.include(r272_BBKLegShape(r272_XH, r272_SB + r272_BBD + r272_HSwToV(r272_BBS), r272_RightSB));
            return void 0;
        });
    });
    return void 0;
});
