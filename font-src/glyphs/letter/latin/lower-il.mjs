'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
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
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-I', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Serif, r271_xMiddleT, r271_div, r271_y0R, _r271_t14, _r271_t15, _r271_t16, _r271_t17, _r271_tag18, _r271_t19, _r271_tag20, _r271_t21, _r271_tag22, _r271_t23, _r271_tag24, _r271_t25, _r271_tag26, _r271_t27, _r271_tag28, _r271_t29, _r271_tag30, _r271_t31, _r271_tag32;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_UPM = _r271_t1.UPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_IBalance = _r271_t1.IBalance;
        var r271_IBalance2 = _r271_t1.IBalance2;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_tagged = _r271_t4.tagged;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_HOverlayBar = _r271_t4.HOverlayBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlatSlashShape = _r271_t4.FlatSlashShape;
        var r271_hookend = _r271_t4.hookend;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_HalfAdvance = _r271_t5.HalfAdvance;
        var r271_TurnMarks = _r271_t5.TurnMarks;
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_ExtendBelowBaseAnchors = _r271_t6.ExtendBelowBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var r271_CreateMultiAccentedComposition = _r271_t7.CreateMultiAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateCommaCaronComposition = _r271_t8.CreateCommaCaronComposition;
        var r271_CreateOgonekComposition = _r271_t8.CreateOgonekComposition;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t9.FlatHookDepth;
        var r271_DiagonalTailR = _r271_t9.DiagonalTailR;
        var r271_DiagonalTailStdDepth = _r271_t9.DiagonalTailStdDepth;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t10.CurlyTail;
        var r271_BeltOverlay = _r271_t10.BeltOverlay;
        var r271_PalatalHook = _r271_t10.PalatalHook;
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_RetroflexHook = _r271_t11.RetroflexHook;
        var r271_LetterBarOverlay = _r271_t11.LetterBarOverlay;
        var r271_RightwardTailedBar = _r271_t11.RightwardTailedBar;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r281_t0, _r281_t1;
            return { 'OverrideILMarks': r271_OverrideILMarks };
        });
        var r271_OverrideILMarks = function (r282_df, r282_xMiddle, r282_yTop) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                r284_currentGlyph.setBaseAnchor('above', r282_xMiddle, r282_yTop);
                r284_currentGlyph.setBaseAnchor('below', r282_xMiddle, 0);
                r284_currentGlyph.setBaseAnchor('overlay', r282_xMiddle, r282_yTop * r271_OverlayPos);
                r284_currentGlyph.setBaseAnchor('topRight', r282_xMiddle + r282_df.rightSB - r282_df.middle, r282_yTop);
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'OverrideILMarksSerifed': r271_OverrideILMarksSerifed };
        });
        var r271_OverrideILMarksSerifed = function (r291_df, r291_xMiddle, r291_yTop) {
            var _r291_t0, _r291_t1;
            return function () {
                var _r293_t1;
                var _r293_t0 = this;
                var r293_currentGlyph = _r293_t0;
                r293_currentGlyph.setBaseAnchor('above', r291_xMiddle, r291_yTop);
                r293_currentGlyph.setBaseAnchor('below', r291_xMiddle, 0);
                r293_currentGlyph.setBaseAnchor('overlay', r1_mix(r291_df.middle, r291_xMiddle, 0.5), r291_yTop * r271_OverlayPos);
                r293_currentGlyph.setBaseAnchor('topRight', r291_xMiddle + r291_df.rightSB - r291_df.middle, r291_yTop);
                return void 0;
            };
        };
        var r271_FlatTailedDotlessIXMiddle = function (r298_df, r298_addTopSerif) {
            var _r298_t0, _r298_t1;
            return r298_df.middle - (r298_addTopSerif ? 0 : r271_IBalance2(r298_df));
        };
        var r271_TailedDotlessIShift = function (r299_df) {
            var _r299_t0, _r299_t1;
            return (1 - r299_df.div) * 0.2;
        };
        var r271_TailedDotlessIXMiddle = function (r300_df, r300_addTopSerif) {
            var _r300_t0, _r300_t1;
            return r1_mix(r300_df.leftSB, r300_df.rightSB, r271_StrokeWidthBlend(0.42, 0.46) - r271_TailedDotlessIShift(r300_df));
        };
        var r271_XMiddle = function () {
            var r303_Center, r303_Hooky, r303_HookyBottom, r303_Serifed, r303_Tailed, r303_TailedSerifed, r303_FlatTailed, r303_SerifedFlatTailed, r303_PhoneticLeft;
            var r303_exports = {};
            r303_exports.Center = r303_Center = function (r311_df) {
                var _r311_t0, _r311_t1;
                return r311_df.middle;
            };
            r303_exports.Hooky = r303_Hooky = function (r313_df) {
                var _r313_t0, _r313_t1;
                return r313_df.middle + r271_IBalance2(r313_df);
            };
            r303_exports.HookyBottom = r303_HookyBottom = function (r315_df) {
                var _r315_t0, _r315_t1;
                return r315_df.middle - r271_IBalance2(r315_df);
            };
            r303_exports.Serifed = r303_Serifed = function (r317_df) {
                var _r317_t0, _r317_t1;
                return r317_df.middle + r271_IBalance(r317_df);
            };
            r303_exports.Tailed = r303_Tailed = function (r319_df) {
                var _r319_t0, _r319_t1;
                return r271_TailedDotlessIXMiddle(r319_df, false);
            };
            r303_exports.TailedSerifed = r303_TailedSerifed = function (r321_df) {
                var _r321_t0, _r321_t1;
                return r271_TailedDotlessIXMiddle(r321_df, true);
            };
            r303_exports.FlatTailed = r303_FlatTailed = function (r323_df) {
                var _r323_t0, _r323_t1;
                return r271_FlatTailedDotlessIXMiddle(r323_df, false);
            };
            r303_exports.SerifedFlatTailed = r303_SerifedFlatTailed = function (r325_df) {
                var _r325_t0, _r325_t1;
                return r271_FlatTailedDotlessIXMiddle(r325_df, true);
            };
            r303_exports.PhoneticLeft = r303_PhoneticLeft = function (r327_df) {
                var _r327_t0, _r327_t1;
                return r327_df.leftSB + r271_HSwToV(r271_Stroke);
            };
            return r303_exports;
        }();
        var r271_Body = function () {
            var r330_Serifless, r330_HookyBottom, r330_Serifed, r330_Tailed, r330_FlatTailed, r330_SemiTailed, r330_ShortTailed, r330_DiagTailed, r330_PhoneticLeft;
            var r330_exports = {};
            r330_exports.Serifless = r330_Serifless = function (r338_df, r338_top, r338_xMiddle) {
                var _r338_t0, _r338_t1;
                return function () {
                    var _r340_t1;
                    var _r340_t0 = this;
                    var r340_currentGlyph = _r340_t0;
                    r340_currentGlyph.include(r271_OverrideILMarks(r338_df, r338_xMiddle, r338_top));
                    r340_currentGlyph.include(r271_VBar.m(r338_xMiddle, 0, r338_top, r338_df.mvs));
                    return void 0;
                };
            };
            r330_exports.HookyBottom = r330_HookyBottom = function (r344_df, r344_top, r344_xMiddle) {
                var _r344_t0, _r344_t1;
                return function () {
                    var _r346_t1;
                    var _r346_t0 = this;
                    var r346_currentGlyph = _r346_t0;
                    r346_currentGlyph.include(r271_OverrideILMarks(r344_df, r344_xMiddle, r344_top));
                    r346_currentGlyph.include(r271_VBar.m(r344_xMiddle, 0, r344_top, r344_df.mvs));
                    r346_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r344_xMiddle, 0, r271_LongJut * r344_df.div, r271_Stroke, r344_df.mvs)));
                    r346_currentGlyph.setBaseAnchor('trailing', r344_xMiddle + r271_LongJut * r344_df.div, 0);
                    return void 0;
                };
            };
            r330_exports.Serifed = r330_Serifed = function (r352_df, r352_top, r352_xMiddle) {
                var _r352_t0, _r352_t1;
                return function () {
                    var _r354_t1;
                    var _r354_t0 = this;
                    var r354_currentGlyph = _r354_t0;
                    r354_currentGlyph.include(r271_OverrideILMarks(r352_df, r352_xMiddle, r352_top));
                    r354_currentGlyph.include(r271_VBar.m(r352_xMiddle, 0, r352_top, r352_df.mvs));
                    r354_currentGlyph.include(r271_tagged('serifB', r271_HSerif.mb(r352_df.middle, 0, r271_LongJut * r352_df.div)));
                    r354_currentGlyph.setBaseAnchor('trailing', r352_df.middle + r271_LongJut * r352_df.div, 0);
                    return void 0;
                };
            };
            r330_exports.Tailed = r330_Tailed = function (r360_df, r360_top, r360_xMiddle) {
                var _r360_t0, _r360_t1;
                return function () {
                    var _r362_t1;
                    var _r362_t0 = this;
                    var r362_currentGlyph = _r362_t0;
                    var r362_fine = r271_AdviceStroke(3);
                    var r362_shift = r271_TailedDotlessIShift(r360_df);
                    var r362_left = r360_xMiddle - r271_HSwToV(0.5 * r360_df.mvs);
                    var r362_right = r1_mix(r360_df.leftSB, r360_df.rightSB, 1.1 - r362_shift);
                    var r362_rightTerm = Math.max(r362_right, r362_left + r271_HookX + r360_df.mvs);
                    var r362_middle = r1_mix(r362_left, r362_right, 0.55 * r360_df.div);
                    var r362_hookDepth = Math.max(r360_df.mvs * 0.9, r271_Hook * r271_StrokeWidthBlend(0.85, 1) * r360_df.div);
                    r362_currentGlyph.include(r271_dispiro(r271_widths.lhs(r360_df.mvs), r271_flat(r362_left, r360_top, r271_heading(r271_Downward)), r271_curl(r362_left, r271_SmallArchDepthB * 0.8), r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('turnSlope', 0.25 * (r271_Stroke - r362_fine) / r271_Stroke)), r271_g4(r362_rightTerm, r362_hookDepth, r271_widths.lhs(r362_fine))));
                    var r362_xDot = r360_xMiddle + r271_StrokeWidthBlend(0.25, 0) * r271_TanSlope * r360_df.width;
                    r362_currentGlyph.include(r271_OverrideILMarks(r360_df, r362_xDot, r360_top));
                    r362_currentGlyph.setBaseAnchor('trailing', r1_mix(r362_left, r362_rightTerm, 0.5), 0);
                    r362_currentGlyph.setBaseAnchor('palatalHookMask', r1_mix(r362_left, r362_rightTerm, 0.5), r271_HalfStroke + r271_O);
                    return void 0;
                };
            };
            r330_exports.FlatTailed = r330_FlatTailed = function (r369_df, r369_top, r369_xMiddle) {
                var _r369_t0, _r369_t1;
                return function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    var r371_tailLength = r271_LongJut * 1.05 * r1_mix(1, r369_df.div, 0.75);
                    var r371_hd = r271_FlatHookDepth(r369_df);
                    var r371_xFinal = r369_xMiddle + Math.max(r371_hd.x - r271_HSwToV(0.5 * r369_df.mvs) + 1, r371_tailLength) + 0.5 * r369_df.mvs * r271_TanSlope;
                    r371_currentGlyph.include(r271_dispiro(r271_widths.center(r369_df.mvs), r271_flat(r369_xMiddle, r369_top, r271_heading(r271_Downward)), r271_curl(r369_xMiddle, r371_hd.y), r271_arcvh.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r369_xMiddle + r371_hd.x - r271_HSwToV(0.5 * r369_df.mvs), 0.5 * r369_df.mvs), r271_curl(r371_xFinal, 0.5 * r369_df.mvs)));
                    r371_currentGlyph.include(r271_OverrideILMarks(r369_df, r369_xMiddle, r369_top));
                    r371_currentGlyph.setBaseAnchor('trailing', r371_xFinal, 0);
                    return void 0;
                };
            };
            r330_exports.SemiTailed = r330_SemiTailed = function (r376_df, r376_top, r376_xMiddle) {
                var _r376_t0, _r376_t1;
                return function () {
                    var _r378_t1;
                    var _r378_t0 = this;
                    var r378_currentGlyph = _r378_t0;
                    var r378_tailLength = r271_LongJut * 1.05 * r1_mix(1, r376_df.div, 0.75);
                    var r378_hookScaleX = r1_mix(1, r376_df.div, 0.5);
                    var r378_hookScaleY = r1_mix(1, r376_df.div, 1.25);
                    var r378_x0 = r1_mix(0.5 * r376_df.mvs, 0.5 * r376_df.mvs + (r271_Hook - r376_df.mvs + 1) * 0.85 * r376_df.div + r271_IBalance2(r376_df), r378_hookScaleX);
                    var r378_x1 = r1_mix(0.5 * r376_df.mvs, Math.max(r271_Hook - 0.5 * r376_df.mvs + 1, r378_tailLength) + r271_IBalance2(r376_df), r378_hookScaleX);
                    r378_currentGlyph.include(r271_dispiro(r271_widths.center(r376_df.mvs), r271_flat(r376_xMiddle, r376_top, r271_heading(r271_Downward)), r271_curl(r376_xMiddle, Math.max(r376_df.mvs * 1.1, r1_mix(r376_df.mvs, r271_Hook, r378_hookScaleY))), r271_arcvh(16), r271_g2.right.mid(r376_xMiddle + r378_x0, 0.5 * r376_df.mvs + r271_O, r271_heading(r271_Rightward)), r271_g4(r376_xMiddle + r378_x1, 0.5 * r376_df.mvs + (1 - 2 * r378_hookScaleY) * r271_O, r271_heading(r271_Rightward))));
                    r378_currentGlyph.include(r271_OverrideILMarks(r376_df, r376_xMiddle, r376_top));
                    r378_currentGlyph.setBaseAnchor('trailing', r376_xMiddle + r378_x0, 0);
                    r378_currentGlyph.setBaseAnchor('palatalHookMask', r376_xMiddle + r378_x0, r271_HalfStroke + r271_O);
                    return void 0;
                };
            };
            r330_exports.ShortTailed = r330_ShortTailed = function (r384_df, r384_top, r384_xMiddle) {
                var _r384_t0, _r384_t1;
                return function () {
                    var _r386_t1;
                    var _r386_t0 = this;
                    var r386_currentGlyph = _r386_t0;
                    r386_currentGlyph.include(r271_RightwardTailedBar(r384_xMiddle + r271_HSwToV(0.5 * r271_Stroke), 0, r384_top));
                    return void 0;
                };
            };
            r330_exports.DiagTailed = r330_DiagTailed = function (r389_df, r389_top, r389_xMiddle) {
                var _r389_t0, _r389_t1;
                return function () {
                    var _r391_t1;
                    var _r391_t0 = this;
                    var r391_currentGlyph = _r391_t0;
                    r391_currentGlyph.include(r271_OverrideILMarks(r389_df, r389_xMiddle, r389_top));
                    r391_currentGlyph.setBaseAnchor('trailing', r389_xMiddle + r271_HSwToV(0.75 * r389_df.mvs), 0);
                    r391_currentGlyph.setBaseAnchor('palatalHookMask', r391_currentGlyph.baseAnchors.trailing.x, r271_HalfStroke + r271_O);
                    r391_currentGlyph.include(r271_dispiro(r271_widths.center(r389_df.mvs), r271_flat(r389_xMiddle, r389_top, r271_heading(r271_Downward)), r271_DiagonalTailR(r389_df, r389_xMiddle, 0, r271_DiagonalTailStdDepth(r389_df, r389_df.mvs), r389_df.mvs)));
                    return void 0;
                };
            };
            r330_exports.PhoneticLeft = r330_PhoneticLeft = function (r397_df, r397_top, r397_xMiddle) {
                var _r397_t0, _r397_t1;
                return function () {
                    var _r399_t1;
                    var _r399_t0 = this;
                    var r399_currentGlyph = _r399_t0;
                    r399_currentGlyph.include(r271_dispiro(r271_widths.center(r397_df.mvs), r271_flat(r397_xMiddle, r397_top, r271_heading(r271_Downward)), r271_curl(r397_xMiddle, r271_Hook), r271_arcvh(), r271_flat(r397_xMiddle + r271_Hook - 0.5 * r397_df.mvs, 0.5 * r397_df.mvs), r271_curl(Math.max(r397_df.rightSB, r397_xMiddle + Math.max(r271_HookX, r271_LongJut * 1.05 * r397_df.div)), 0.5 * r397_df.mvs, r271_heading(r271_Rightward))));
                    return void 0;
                };
            };
            return r330_exports;
        }();
        var r271_Serifs = function () {
            var r403_Hooky, r403_Serifed, r403_SerifedShort;
            var r403_exports = {};
            r403_exports.Hooky = r403_Hooky = function (r411_df, r411_top, r411_xMiddle) {
                var _r411_t0, _r411_t1;
                return r271_HSerif.lt(r411_xMiddle, r411_top, r271_LongJut * r411_df.div, r271_Stroke, r411_df.mvs);
            };
            r403_exports.Serifed = r403_Serifed = function (r413_df, r413_top, r413_xMiddle) {
                var _r413_t0, _r413_t1;
                return r271_HSerif.lt(r413_xMiddle, r413_top, r271_LongJut * r413_df.div - (r413_xMiddle - r413_df.middle), r271_Stroke, r413_df.mvs);
            };
            r403_exports.SerifedShort = r403_SerifedShort = function (r415_df, r415_top, r415_xMiddle) {
                var _r415_t0, _r415_t1;
                return r271_HSerif.lt(r415_xMiddle, r415_top, r1_mix(r271_Jut, r271_LongJut * r415_df.div - (r415_xMiddle - r415_df.middle), 0.5), r271_Stroke, r415_df.mvs);
            };
            return r403_exports;
        }();
        var r271_calcPhoneticHookPos = function (r416_g) {
            var _r416_t0, _r416_t1;
            var r416_attach = r416_g.baseAnchors.trailing ? r416_g.gizmo.unapply(r416_g.baseAnchors.trailing) : r416_g.gizmo.unapply(r416_g.baseAnchors.overlay);
            var r416_posX = r416_g.baseAnchors.trailing ? r416_attach.x + r271_HVContrast * (0.5 * r271_VJutStroke) : r416_attach.x + r271_HSwToV(r271_HalfStroke) + r271_PalatalHook.adviceGap(r271_Stroke);
            var r416_maskY = r416_g.baseAnchors.palatalHookMask ? r416_g.gizmo.unapply(r416_g.baseAnchors.palatalHookMask).y : r271_Stroke;
            return [
                r416_attach,
                r416_posX,
                r416_maskY
            ];
        };
        var r271_SmallILConfig = {
            'hooky': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Hooky,
                r271_para.diversityII,
                0
            ],
            'zshaped': [
                r271_Body.HookyBottom,
                r271_Serifs.Hooky,
                r271_XMiddle.Center,
                r271_para.diversityI,
                r271_Stroke
            ],
            'serifless': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.Center,
                r271_para.diversityII,
                0
            ],
            'serifed': [
                r271_Body.Serifed,
                r271_Serifs.Serifed,
                r271_XMiddle.Serifed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'serifedAsymmetric': [
                r271_Body.Serifed,
                r271_Serifs.SerifedShort,
                r271_XMiddle.Serifed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'tailed': [
                r271_Body.Tailed,
                null,
                r271_XMiddle.Tailed,
                r271_para.diversityII,
                r271_Stroke
            ],
            'tailedSerifed': [
                r271_Body.Tailed,
                r271_Serifs.Hooky,
                r271_XMiddle.TailedSerifed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'flatTailed': [
                r271_Body.FlatTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityII,
                r271_Stroke
            ],
            'serifedFlatTailed': [
                r271_Body.FlatTailed,
                r271_Serifs.Hooky,
                r271_XMiddle.SerifedFlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'diagonalTailed': [
                r271_Body.DiagTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityII,
                r271_Stroke
            ],
            'serifedDiagonalTailed': [
                r271_Body.DiagTailed,
                r271_Serifs.Hooky,
                r271_XMiddle.SerifedFlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'semiTailed': [
                r271_Body.SemiTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityII,
                r271_Stroke
            ],
            'serifedSemiTailed': [
                r271_Body.SemiTailed,
                r271_Serifs.Hooky,
                r271_XMiddle.SerifedFlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'hookyBottom': [
                r271_Body.HookyBottom,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityII,
                r271_Stroke
            ],
            'hookyDec': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Hooky,
                r271_para.diversityI,
                0
            ],
            'seriflessDec': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.Center,
                r271_para.diversityI,
                0
            ],
            'tailedDec': [
                r271_Body.Tailed,
                null,
                r271_XMiddle.Tailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'flatTailedDec': [
                r271_Body.FlatTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'diagonalTailedDec': [
                r271_Body.DiagTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'semiTailedDec': [
                r271_Body.SemiTailed,
                null,
                r271_XMiddle.FlatTailed,
                r271_para.diversityI,
                r271_Stroke
            ],
            'hookyBottomDec': [
                r271_Body.HookyBottom,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityI,
                r271_Stroke
            ],
            'hookyRTail': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Center,
                r271_para.diversityII,
                0
            ],
            'seriflessRTail': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityII,
                0
            ],
            'hookyRTailDec': [
                r271_Body.Serifless,
                r271_Serifs.Hooky,
                r271_XMiddle.Center,
                r271_para.diversityI,
                0
            ],
            'seriflessRTailDec': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.HookyBottom,
                r271_para.diversityI,
                0
            ],
            'hookyPL': [
                r271_Body.PhoneticLeft,
                r271_Serifs.Hooky,
                r271_XMiddle.PhoneticLeft,
                1,
                0
            ],
            'seriflessPL': [
                r271_Body.PhoneticLeft,
                null,
                r271_XMiddle.PhoneticLeft,
                1,
                0
            ],
            'tau/tailless': [
                r271_Body.Serifless,
                null,
                r271_XMiddle.Center,
                1,
                0
            ],
            'tau/tailed': [
                r271_Body.Tailed,
                null,
                r271_XMiddle.Tailed,
                1,
                r271_Stroke
            ],
            'tau/flatTailed': [
                r271_Body.FlatTailed,
                null,
                r271_XMiddle.FlatTailed,
                1,
                r271_Stroke
            ],
            'tau/diagonalTailed': [
                r271_Body.DiagTailed,
                null,
                r271_XMiddle.FlatTailed,
                1,
                r271_Stroke
            ],
            'tau/semiTailed': [
                r271_Body.SemiTailed,
                null,
                r271_XMiddle.FlatTailed,
                1,
                r271_Stroke
            ],
            'tau/shortTailed': [
                r271_Body.ShortTailed,
                null,
                r271_XMiddle.Center,
                1,
                r271_Stroke
            ]
        };
        var _r271_t12 = Object.entries(r271_SmallILConfig)[Symbol.iterator]();
        var _r271_t13 = void 0;
        while (!(_r271_t13 = _r271_t12.next()).done) {
            _r271_t14 = _r271_t13.value;
            r271_suffix = _r271_t14[0];
            r271_Body = _r271_t14[1][0];
            r271_Serif = _r271_t14[1][1];
            r271_xMiddleT = _r271_t14[1][2];
            r271_div = _r271_t14[1][3];
            r271_y0R = _r271_t14[1][4];
            _r271_t14[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessi.' + r271_suffix, null, function () {
                    var _r422_t1;
                    var _r422_t0 = this;
                    var r422_currentGlyph = _r422_t0;
                    var r422_df = r422_currentGlyph.include(r271_DivFrame(r271_div));
                    r422_currentGlyph.include(r422_df.markSet.e());
                    var r422_xMiddle = r271_xMiddleT(r422_df);
                    r422_currentGlyph.include(r271_Body(r422_df, r271_XH, r422_xMiddle));
                    if (r271_Serif)
                        r422_currentGlyph.include(r271_tagged('serifLT', r271_Serif(r422_df, r271_XH, r422_xMiddle)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Iota.' + r271_suffix, null, function () {
                    var _r429_t1;
                    var _r429_t0 = this;
                    var r429_currentGlyph = _r429_t0;
                    var r429_df = r429_currentGlyph.include(r271_DivFrame(r271_div));
                    r429_currentGlyph.include(r429_df.markSet.capital());
                    var r429_xMiddle = r271_xMiddleT(r429_df);
                    r429_currentGlyph.include(r271_Body(r429_df, r271_CAP, r429_xMiddle));
                    if (r271_Serif)
                        r429_currentGlyph.include(r271_tagged('serifLT', r271_Serif(r429_df, r271_CAP, r429_xMiddle)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('l.' + r271_suffix, null, function () {
                    var _r436_t1;
                    var _r436_t0 = this;
                    var r436_currentGlyph = _r436_t0;
                    var r436_df = r436_currentGlyph.include(r271_DivFrame(r271_div));
                    r436_currentGlyph.include(r436_df.markSet.b());
                    var r436_xMiddle = r271_xMiddleT(r436_df);
                    r436_currentGlyph.include(r271_Body(r436_df, r271_Ascender, r436_xMiddle));
                    if (r271_Serif)
                        r436_currentGlyph.include(r271_tagged('serifLT', r271_Serif(r436_df, r271_Ascender, r436_xMiddle)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lDotBase.' + r271_suffix, null, function () {
                    var _r443_t1;
                    var _r443_t0 = this;
                    var r443_currentGlyph = _r443_t0;
                    var r443_df = r443_currentGlyph.include(r271_DivFrame(r271_div));
                    r443_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE);
                    r443_currentGlyph.include(r271_Translate(-r271_DotRadius / 2, 0));
                    r443_currentGlyph.setBaseAnchor('cvDecompose', Math.max(r443_df.middle + r271_HalfStroke + r271_DotRadius, r443_df.rightSB - r271_DotRadius), r1_mix(r271_y0R, r271_Ascender, 0.5));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lRTail.' + r271_suffix, null, function () {
                    var _r450_t1;
                    var _r450_t0 = this;
                    var r450_currentGlyph = _r450_t0;
                    var r450_df = r271_DivFrame(r271_div);
                    r450_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r450_currentGlyph.include(r271_RetroflexHook.mExt(r271_xMiddleT(r450_df), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('llWelsh.' + r271_suffix, null, function () {
                    var _r455_t1;
                    var _r455_t0 = this;
                    var r455_currentGlyph = _r455_t0;
                    var r455_subDf = r271_DivFrame(0.625, 1.5);
                    var r455_BodyShape = function () {
                        var _r456_t0, _r456_t1;
                        return r271_union(r271_Body(r455_subDf, r271_Ascender, r271_xMiddleT(r455_subDf)), r271_Serif ? r271_tagged('serifLT', r271_Serif(r455_subDf, r271_Ascender, r271_xMiddleT(r455_subDf))) : r271_xn$noshape$3cah());
                    };
                    r455_currentGlyph.include(r455_BodyShape());
                    r455_currentGlyph.include(r271_xn$withtransform$5sIl(r271_ApparentTranslate(r271_Width - r455_subDf.width, 0), r455_BodyShape()));
                    r455_currentGlyph.include(r271_HOverlayBar(r1_mix(r271_SB, 0, 0.7), r1_mix(r271_RightSB, r271_Width, 0.7), 0.625 * r271_Ascender));
                    r455_currentGlyph.include(r271_MarkSet.b());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dotlessiRetroflexHook.' + r271_suffix, null, function () {
                    var _r463_t2;
                    var _r463_t1 = this;
                    var r463_currentGlyph = _r463_t1;
                    r463_currentGlyph.include(r271_xn$referglyph$1aao('dotlessi.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r463_t0 = r271_calcPhoneticHookPos(r463_currentGlyph);
                    var r463_attach = _r463_t0[0];
                    var r463_posX = _r463_t0[1];
                    var r463_maskY = _r463_t0[2];
                    r463_currentGlyph.include(r271_ExtendBelowBaseAnchors(r271_Descender));
                    r463_currentGlyph.include(r271_intersection(r271_MaskBelow(r463_maskY), r271_RetroflexHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r463_posX), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r463_attach.x), new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lPalatalHook.' + r271_suffix, null, function () {
                    var _r473_t2;
                    var _r473_t1 = this;
                    var r473_currentGlyph = _r473_t1;
                    r473_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r473_t0 = r271_calcPhoneticHookPos(r473_currentGlyph);
                    var r473_attach = _r473_t0[0];
                    var r473_posX = _r473_t0[1];
                    var r473_maskY = _r473_t0[2];
                    r473_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r473_posX), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r473_attach.x), new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('maskOut', r271_MaskAbove(r473_maskY))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lHighBar.' + r271_suffix, null, function () {
                    var _r483_t1;
                    var _r483_t0 = this;
                    var r483_currentGlyph = _r483_t0;
                    r483_currentGlyph.include(r271_xn$referglyph$1aao('l.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r483_df = r271_DivFrame(r271_div);
                    r483_currentGlyph.include(r271_LetterBarOverlay.m.in(r271_xMiddleT(r483_df), r271_XH, r271_Ascender - (r271_Serif ? r271_Stroke : 0)));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/tau.' + r271_suffix, null, function () {
                    var _r488_t1;
                    var _r488_t0 = this;
                    var r488_currentGlyph = _r488_t0;
                    var r488_df = r488_currentGlyph.include(r271_DivFrame(r271_div));
                    r488_currentGlyph.include(r488_df.markSet.e());
                    var r488_xMiddle = r271_xMiddleT(r488_df);
                    r488_currentGlyph.include(r271_Body(r488_df, r271_XH, r488_xMiddle));
                    r488_currentGlyph.include(r271_HBar.t(r488_df.leftSB, r488_df.rightSB, r271_XH));
                    r488_currentGlyph.deleteBaseAnchor('trailing');
                    return void 0;
                });
            }());
        }
        (function () {
            r271_xn$selectvariant$7Hrq('dotlessi', 305);
            r271_xn$linkreducedvariant$5sIl8('dotlessi/sansSerif', 'dotlessi', r1_MathSansSerif);
            r271_xn$selectvariant$7Hrq('dotlessi/compLigRight', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dotlessi'));
            r271_xn$selectvariant$7Hrq('dotlessi/ital', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dotlessi'));
            r271_xn$selectvariant$7Hrq('dotlessiRetroflexHook', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'dotlessi'));
            r271_CreateOgonekComposition('iOgonek.dotless', null, 'dotlessi');
            r271_CreateAccentedComposition('i', 'i', 'dotlessi', 'dotAbove');
            r271_CreateAccentedComposition('i/sansSerif', null, 'dotlessi/sansSerif', 'dotAbove');
            r271_CreateAccentedComposition('cyrl/Ukrainiani', 1110, 'dotlessi', 'dotAbove');
            r271_CreateAccentedComposition('cyrl/yi', 1111, 'dotlessi', 'dieresisAbove');
            r271_CreateAccentedComposition('i/compLigRight', null, 'dotlessi/compLigRight', 'dotAbove');
            r271_xn$linkreducedvariant$5sIl8('i/sansSerif', 'i', r1_MathSansSerif);
            r271_xn$selectvariant$7Hrq('grek/iota', 953, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dotlessi'));
            r271_xn$linkreducedvariant$5sIl8('grek/iota/sansSerif', 'grek/iota', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dotlessi'));
            r271_alias('latn/iota', 617, 'grek/iota');
            r271_alias('cyrl/iota', 42567, 'grek/iota');
            r271_xn$selectvariant$7Hrq('latn/Iota', 406, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'grek/iota'));
            r271_alias('cyrl/Iota', 42566, 'latn/Iota');
            r271_turned('turni', 7433, 'i', r271_HalfAdvance, r271_XH / 2, r271_TurnMarks('p'));
            r271_CreateAccentedComposition('cyrl/ghe.SRB', null, 'dotlessi/ital', 'macronAbove');
            r271_CreateMultiAccentedComposition('cyrl/gje.SRB', null, 'dotlessi/ital', [
                'macronAbove',
                'acuteAbove'
            ]);
            r271_CreateAccentedComposition('dotlessiBarOver', null, 'dotlessi', 'barOver');
            r271_CreateAccentedComposition('iBarOver', 616, 'dotlessiBarOver', 'dotAbove');
            r271_CreateAccentedComposition('iOgonek', 303, 'iOgonek.dotless', 'dotAbove');
            return r271_CreateAccentedComposition('iRetroflexHook', 7574, 'dotlessiRetroflexHook', 'dotAbove');
        }());
        (function () {
            r271_xn$selectvariant$7Hrq('l', 'l');
            r271_xn$linkreducedvariant$5sIl8('l/sansSerif', 'l', r1_MathSansSerif);
            r271_xn$selectvariant$7Hrq('l/reduced/decompress', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'l'));
            r271_xn$selectvariant$7Hrq('lRTail/decompress', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l/reduced/rtailDec'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'lRTail'));
            r271_alias('cyrl/palochka', 1231, 'l');
            r271_turned('turnl', 42881, 'l', r271_HalfAdvance, r271_XH / 2, r271_TurnMarks('p'));
            r271_xn$selectvariant$7Hrq('l/phoneticLeft', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'l'));
            r271_xn$selectvariant$7Hrq('l/compLigRight', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'l'));
            r271_xn$selectvariant$7Hrq('lDotBase', null, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$selectvariant$7Hrq('lRTail', 621, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l/reduced/rtail'));
            r271_xn$selectvariant$7Hrq('llWelsh', 7931, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$selectvariant$7Hrq('lPalatalHook', 7557, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$selectvariant$7Hrq('lHighBar', 42825, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'l'));
            r271_xn$derivecomposites$7Hrq('lTildeOver', 619, 'l/reduced/decompress', 'tildeOver');
            r271_xn$derivecomposites$7Hrq('lInvLazySOver', 43831, 'l/reduced/decompress', 'invLazySOver');
            r271_xn$derivecomposites$7Hrq('lDblTildeOver', 43832, 'l/reduced/decompress', 'dblTildeOver');
            r271_xn$derivecomposites$7Hrq('lRingOver', 43833, 'l/reduced/decompress', 'ringOver');
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('lBeltOverlay', null, function () {
                var _r515_t1;
                var _r515_t0 = this;
                var r515_currentGlyph = _r515_t0;
                r515_currentGlyph.setMarkAnchor('overlay', 0, 0);
                r515_currentGlyph.include(r271_BeltOverlay.at(0, 0));
                return void 0;
            });
            r271_xn$derivecomposites$7Hrq('lBelt', 620, 'l/reduced/decompress', 'lBeltOverlay');
            r271_xn$derivecomposites$7Hrq('lBeltRTail', 42894, 'lRTail/decompress', 'lBeltOverlay');
            r271_xn$derivecomposites$7Hrq('lDot', 320, 'lDotBase', 'LDotDot');
            r271_CreateCommaCaronComposition('lcaron', 318, 'l');
            r271_xn$deriveglyphs$7Hrq('lSlash', 322, 'l', function (r518_src, r518_gr) {
                var _r518_t0, _r518_t1;
                return function () {
                    var _r520_t1;
                    var _r520_t0 = this;
                    var r520_currentGlyph = _r520_t0;
                    r520_currentGlyph.include(r271_xn$referglyph$1aao(r518_src), r271_AS_BASE, r271_ALSO_METRICS);
                    var r520_anchor = r520_currentGlyph.baseAnchors.overlay;
                    var r520_stretch = Math.sqrt(r520_currentGlyph.advanceWidth / r271_UPM * 2);
                    r520_currentGlyph.include(r271_FlatSlashShape(r520_anchor.x, r520_anchor.y, 0.5 * r271_OverlayStroke, 0.8 * r520_stretch, 0.4 * r520_stretch));
                    return void 0;
                };
            });
            var r502_CurlyTailShape = function (r523_df, r523_fSerif) {
                var _r523_t0, _r523_t1;
                return function () {
                    var _r525_t1;
                    var _r525_t0 = this;
                    var r525_currentGlyph = _r525_t0;
                    var r525_fine = r271_AdviceStroke(3.5);
                    var r525_rinner = r271_LongJut / 2 - r525_fine / 2;
                    var r525_m1 = r523_df.middle + r271_HSwToV(r271_HalfStroke);
                    var r525_x2 = r1_mix(r271_SB, r525_m1, 0.25);
                    var r525_y2 = -r525_fine;
                    if (r523_fSerif)
                        r525_currentGlyph.include(r271_HSerif.lt(r523_df.middle, r271_Ascender, r271_LongJut));
                    r525_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r525_m1, r271_Ascender, r271_heading(r271_Downward)), r271_curl(r525_m1, r525_fine + r525_rinner * 2), r271_CurlyTail(r525_fine, r525_rinner, r525_m1, 0, r525_m1 + r271_LongJut, r525_x2, r525_y2)));
                    return void 0;
                };
            };
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('lCurlyTail.serifless', null, function () {
                var _r530_t1;
                var _r530_t0 = this;
                var r530_currentGlyph = _r530_t0;
                var r530_df = r530_currentGlyph.include(r271_DivFrame(r271_para.diversityI));
                r530_currentGlyph.include(r530_df.markSet.b());
                r530_currentGlyph.include(r502_CurlyTailShape(r530_df, false));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('lCurlyTail.hooky', null, function () {
                var _r536_t1;
                var _r536_t0 = this;
                var r536_currentGlyph = _r536_t0;
                var r536_df = r536_currentGlyph.include(r271_DivFrame(r271_para.diversityI));
                r536_currentGlyph.include(r536_df.markSet.b());
                r536_currentGlyph.include(r502_CurlyTailShape(r536_df, true));
                return void 0;
            });
            r271_xn$selectvariant$7Hrq('lCurlyTail', 564);
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('looprevesh', 426, function () {
                var _r542_t1;
                var _r542_t0 = this;
                var r542_currentGlyph = _r542_t0;
                var r542_df = r542_currentGlyph.include(r271_DivFrame(r271_para.diversityI));
                r542_currentGlyph.include(r542_df.markSet.bp());
                var r542_fine = r271_AdviceStroke(4);
                r542_currentGlyph.include(r271_dispiro(r271_widths.center(r542_fine), r271_g4.down.start(r542_df.middle, r271_Ascender - r542_fine * 1.5, r271_heading(r271_Downward)), r271_arcvh(), r271_g4(r542_df.middle - r542_fine * 1, r271_Ascender - r542_fine * 2.5, r271_heading(r271_Leftward)), r271_archv(), r271_g4(r542_df.middle - r542_fine * 2, r271_Ascender - r542_fine * 1.5, r271_heading(r271_Upward)), r271_arcvh(), r271_g4(r542_df.middle - r542_fine * 1, r271_Ascender - r542_fine * 0.5, r271_heading(r271_Rightward)), r271_archv(), r271_flat(r542_df.middle, r271_Ascender - r542_fine * 1.5, r271_widths.heading(r271_HalfStroke, r271_HalfStroke, r271_Downward)), r271_curl(r542_df.middle, 0, r271_heading(r271_Downward)), r271_arcvh(), r271_straight.right.end(r542_df.middle + r271_HookX, -r271_Hook)));
                return void 0;
            });
        }());
        (function () {
            return r271_xn$selectvariant$7Hrq('grek/tau', 964);
        }());
        return function () {
            var _r549_t0 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
            var r549_BBS = _r549_t0.BBS;
            var r549_BBD = _r549_t0.BBD;
            var r549_BBBarCenter = _r549_t0.BBBarCenter;
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/dotlessi', null, function () {
                var _r553_t1;
                var _r553_t0 = this;
                var r553_currentGlyph = _r553_t0;
                r553_currentGlyph.include(r271_MarkSet.e());
                r553_currentGlyph.include(r549_BBBarCenter(r271_Middle, 0, r271_XH));
                r553_currentGlyph.include(r271_HBar.t(r271_Middle - r549_BBD / 2 - r271_Jut, r271_Middle, r271_XH, r549_BBS));
                r553_currentGlyph.include(r271_HBar.b(r271_Middle - r549_BBD / 2 - r271_Jut, r271_Middle + r549_BBD / 2 + r271_Jut, 0, r549_BBS));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/i', 120154, function () {
                var _r560_t1;
                var _r560_t0 = this;
                var r560_currentGlyph = _r560_t0;
                r560_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/dotlessi'), r271_AS_BASE, r271_ALSO_METRICS);
                r560_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/dotAbove'));
                r1_Dotless.set(r560_currentGlyph, 'mathbb/dotlessi');
                return void 0;
            });
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/l', 120157, function () {
                var _r565_t1;
                var _r565_t0 = this;
                var r565_currentGlyph = _r565_t0;
                r565_currentGlyph.include(r271_MarkSet.b());
                r565_currentGlyph.include(r549_BBBarCenter(r271_Middle, 0, r271_Ascender));
                r565_currentGlyph.include(r271_HBar.t(r271_Middle - r549_BBD / 2 - r271_Jut, r271_Middle, r271_Ascender, r549_BBS));
                r565_currentGlyph.include(r271_HBar.b(r271_Middle - r549_BBD / 2 - r271_Jut, r271_Middle + r549_BBD / 2 + r271_Jut, 0, r549_BBS));
                return void 0;
            });
        }();
    });
    return void 0;
});
