'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r330_t) {
    var r330_n, r330_i, r330_a, _r330_t3, _r330_t4, _r330_t5, _r330_t6, _r330_t7, _r330_t8, _r330_t9, _r330_t10, _r330_t11, _r330_t12, _r330_t13, _r330_t14, _r330_t15, _r330_t16, _r330_t17, _r330_t18, _r330_t19, _r330_t20, _r330_t21, _r330_t22, _r330_t23, _r330_t24, _r330_t25, _r330_t26;
    var _r330_t0 = function () {
        _r330_t7 = function (_r330_t8) {
            _r330_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r330_t8
            };
        };
        _r330_t9 = r330_t instanceof Array;
        if (_r330_t9) {
            _r330_t10 = r330_n = r330_t.length;
            _r330_t11 = r330_i = 0;
            _r330_t12 = function (_r330_t14) {
                return _r330_t7(_r330_t14);
            };
            _r330_t13 = function (_r330_t15) {
                _r330_t16 = r330_i < r330_n;
                if (_r330_t16) {
                    _r330_t0 = function (_r330_t17) {
                        return _r330_t13(r330_i = r330_i + 1);
                    };
                    return {
                        'value': [
                            r330_i,
                            r330_t[r330_i]
                        ],
                        'done': false
                    };
                } else
                    return _r330_t12(_r330_t15);
            };
            return _r330_t13();
        } else {
            _r330_t18 = r330_a = Object.keys(r330_t);
            _r330_t19 = r330_n = r330_a.length;
            _r330_t20 = r330_i = 0;
            _r330_t21 = function (_r330_t23) {
                return _r330_t7(_r330_t23);
            };
            _r330_t22 = function (_r330_t24) {
                _r330_t25 = r330_i < r330_n;
                if (_r330_t25) {
                    _r330_t0 = function (_r330_t26) {
                        return _r330_t22(r330_i = r330_i + 1);
                    };
                    return {
                        'value': [
                            r330_a[r330_i],
                            r330_t[r330_a[r330_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r330_t21(_r330_t24);
            };
            return _r330_t22();
        }
    };
    var _r330_t1 = function (x) {
        try {
            return _r330_t0(x);
        } catch (ex) {
            return _r330_t2(ex);
        }
    };
    var _r330_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r330_t3 = this;
    else {
        _r330_t4 = function () {
            void 0;
        };
        _r330_t4.prototype = _r1_t10.prototype;
        _r330_t3 = new _r330_t4();
    }
    _r330_t3[Symbol.iterator] = function () {
        return _r330_t3;
    };
    _r330_t3.next = _r330_t1;
    _r330_t3.throw = function (x) {
        return _r330_t2(x);
    };
    return _r330_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-R', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_F, r271_df, r271_mode, r271_doTS, r271_doBS, _r271_t12, _r271_t13, _r271_t14, _r271_t15, _r271_tag16;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_RHook = _r271_t1.RHook;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_RBalance = _r271_t1.RBalance;
        var r271_RBalance2 = _r271_t1.RBalance2;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_tagged = _r271_t4.tagged;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_HalfAdvance = _r271_t5.HalfAdvance;
        var r271_TurnMarks = _r271_t5.TurnMarks;
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t6.LeaningAnchor;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var r271_DMBlend = _r271_t8.DMBlend;
        var r271_PalatalHook = _r271_t8.PalatalHook;
        var r271_RetroflexHook = _r271_t8.RetroflexHook;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t9.BBS;
        var r271_BBD = _r271_t9.BBD;
        var r271_BBBarRight = _r271_t9.BBBarRight;
        var r271_dfN = r271_DivFrame(1);
        var r271_dfR = r271_DivFrame(r271_para.diversityF);
        var r271_rStraight = 0;
        var r271_rSerifed = 1;
        var r271_rNarrow = 2;
        var r271_rNarrowSerifed = 3;
        var r271_rEarless = 4;
        var r271_rCornerHooked = 5;
        var r271_rCornerHookedSerifed = 6;
        var r271_RDim = function (r278_df, r278_mode, r278__strokeBar, r278__stroke) {
            var r278___, _r278_t1, _r278_t2, _r278_t3, _r278_t4, _r278_t5, _r278_t6, _r278_t7;
            var r278_strokeBar = r1_fallback(r278__strokeBar, r271_Stroke);
            var r278_stroke = r1_fallback(r278__stroke, r271_Stroke);
            var r278_strokeA = r1_mix(r278_strokeBar, r278_stroke, 0.5);
            var _r278_t0 = (_r278_t1 = r278_mode, _r278_t1 === r271_rStraight ? [
                1,
                1,
                0,
                0,
                2.35
            ] : _r278_t1 === r271_rSerifed ? [
                4 / 3,
                2 / 3,
                1 / 4,
                1 / 3,
                2.35
            ] : _r278_t1 === r271_rNarrow ? [
                2 * (r278_df.div - 0.5),
                1,
                0,
                0,
                2.35
            ] : _r278_t1 === r271_rNarrowSerifed ? [
                5 / 8 * r278_df.div,
                3 / 4,
                0,
                1 / 2 * Math.max(0, r1_mix(1, r278_df.div, 4)),
                2.35
            ] : _r278_t1 === r271_rCornerHooked ? [
                2 * (r278_df.div - 0.5),
                1,
                0,
                0,
                2.35
            ] : _r278_t1 === r271_rCornerHookedSerifed ? [
                4 / 3,
                2 / 3,
                1 / 4,
                1 / 3,
                2.35
            ] : _r278_t1 === r271_rEarless ? [
                1,
                1,
                0,
                0,
                2.35
            ] : void 0);
            var r278_rBalanceMultiplier = _r278_t0[0];
            var r278_rHookMultiplier = _r278_t0[1];
            var r278_rHookSwMultiplier = _r278_t0[2];
            var r278_rSerifLeftExtender = _r278_t0[3];
            var r278_hookSuperness = _r278_t0[4];
            var r278_xBar = (_r278_t2 = r278_mode, _r278_t2 === r271_rNarrowSerifed ? r278_df.middle + r271_HSwToV(0.5 * r278_strokeBar) - r271_RBalance * r278_rBalanceMultiplier : (r278___ = _r278_t2, r271_SB + r271_RBalance * r278_rBalanceMultiplier + r271_HSwToV(r278_strokeBar)));
            var r278_rSerifX = r278_xBar - r271_HSwToV(0.5 * r278_strokeBar);
            var r278_rSerifLeftJut = r271_SideJut + r271_RBalance * (0.3 + r278_rSerifLeftExtender);
            var r278_rSerifRightJut = r278_rSerifLeftJut * 1.2;
            var r278_rBottomSerif = function (r279_y) {
                var _r279_t0, _r279_t1;
                return function () {
                    var _r281_t1;
                    var _r281_t0 = this;
                    var r281_currentGlyph = _r281_t0;
                    r281_currentGlyph.include(r271_tagged('serifLB', r271_union(r271_HSerif.lb(r278_rSerifX, r279_y, r278_rSerifLeftJut + r278_strokeBar / 2 * r271_HVContrast), r271_HSerif.rb(r278_rSerifX, r279_y, r278_rSerifRightJut + r278_strokeBar / 2 * r271_HVContrast))));
                    var r281_xAtt = r278_rSerifX + r278_rSerifRightJut + r278_strokeBar / 2 * r271_HVContrast;
                    r281_currentGlyph.setBaseAnchor('palatalHookAttach', r281_xAtt, r279_y);
                    r281_currentGlyph.setBaseAnchor('palatalHookPos', r281_xAtt, r279_y);
                    return void 0;
                };
            };
            var r278_rTopSerif = function (r285_y) {
                var _r285_t0, _r285_t1;
                return r271_tagged('serifLT', r271_HSerif.lt(r278_rSerifX, r285_y, r278_rSerifLeftJut + r278_strokeBar / 2 * r271_HVContrast));
            };
            var r278_fine = r271_ShoulderFine;
            var r278_rHookX = r278_df.rightSB + r271_RBalance2 * r278_rBalanceMultiplier - (r271_OX - r271_O);
            var r278_xArchMiddle = (_r278_t3 = r278_mode, _r278_t3 === r271_rStraight ? r1_mix(r278_xBar - r278_fine, r278_rHookX, 0.54 + 2 * r271_TanSlope * r278_strokeBar / r271_Width) : _r278_t3 === r271_rSerifed ? r1_mix(r278_xBar - r278_fine, r278_rHookX, 0.59 + 2 * r271_TanSlope * r278_strokeBar / r271_Width) : _r278_t3 === r271_rNarrow ? r1_mix(r278_df.width, r278_rHookX, Math.max(1.01, 5 / 4 * r1_mix(1, r271_dfR.div, 2))) : _r278_t3 === r271_rNarrowSerifed ? Math.min(r1_mix(r278_df.width, r278_rHookX, r278_df.div) - 0.1, r278_xBar + r271_RHook * 1.25 * r278_df.div) : _r278_t3 === r271_rCornerHooked ? r278_rHookX - r271_HSwToV(0.5 * r278_strokeBar) : _r278_t3 === r271_rCornerHookedSerifed ? r278_rHookX - r271_HSwToV(0.5 * r278_strokeBar) : _r278_t3 === r271_rEarless ? r1_mix(r278_xBar - r271_HSwToV(r278_strokeBar), r278_rHookX, 0.5) : void 0);
            var r278_mixpin = (_r278_t4 = r278_mode, _r278_t4 === r271_rSerifed || _r278_t4 === r271_rCornerHooked || _r278_t4 === r271_rCornerHookedSerifed ? 0.65 + 0.25 * r278_strokeA / r271_Width + 4 * r271_TanSlope * r278_strokeA / r271_Width : (r278___ = _r278_t4, 0.65 + 4 * r271_TanSlope * r278_strokeA / r271_Width));
            var r278_rmiddlein = r1_mix(r278_xBar, r278_rHookX - r271_HSwToV(1.05 * r278_strokeA), r278_mixpin) - r271_CorrectionOMidS;
            var r278_skew = Math.max(0, (r278_xArchMiddle - r278_rmiddlein) / r278_stroke - r271_TanSlope);
            var r278_rHookY = r271_RHook * r278_rHookMultiplier + r278_stroke * r278_rHookSwMultiplier;
            var r278_rHookXN = (_r278_t5 = r278_mode, _r278_t5 === r271_rNarrowSerifed ? r1_mix(r278_df.width, r278_rHookX, r278_df.div) : _r278_t5 === r271_rNarrow ? r278_xArchMiddle + 0.1 : (r278___ = _r278_t5, r278_rHookX));
            var r278_setMarks = function (r286_doTopSerif, r286_top, r286_bottom) {
                var _r286_t0, _r286_t1;
                return function () {
                    var _r288_t1;
                    var _r288_t0 = this;
                    var r288_currentGlyph = _r288_t0;
                    r288_currentGlyph.include(r271_LeaningAnchor.Below.VBar.r(r278_xBar));
                    r288_currentGlyph.include(r271_LeaningAnchor.Above.Hook(r1_mix(r278_df.leftSB, r278_xBar - r271_HSwToV(r271_Stroke), r286_doTopSerif ? 0.5 : 1), r278_df.rightSB));
                    r288_currentGlyph.setBaseAnchor('overlay', r278_xBar - r271_Stroke * 0.25, r1_mix(r286_bottom, r286_top, 0.5));
                    r288_currentGlyph.setBaseAnchor('palatalHookAttach', r278_xBar, r286_bottom);
                    r288_currentGlyph.setBaseAnchor('palatalHookPos', r278_xBar + r271_PalatalHook.adviceGap(r271_Stroke), r286_bottom);
                    r288_currentGlyph.copyBaseAnchorIfAbsent('leaningAbove', 'above');
                    r288_currentGlyph.copyBaseAnchorIfAbsent('leaningBelow', 'below');
                    return void 0;
                };
            };
            return {
                'xBar': r278_xBar,
                'rBottomSerif': r278_rBottomSerif,
                'rTopSerif': r278_rTopSerif,
                'fine': r278_fine,
                'xArchMiddle': r278_xArchMiddle,
                'skew': r278_skew,
                'rHookX': r278_rHookX,
                'rHookXN': r278_rHookXN,
                'rHookY': r278_rHookY,
                'hookSuperness': r278_hookSuperness,
                'setMarks': r278_setMarks
            };
        };
        var r271_StandardShape = function (r294_df, r294_md, r294_doTopSerif, r294_doBottomSerif) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t2;
                var _r296_t1 = this;
                var r296_currentGlyph = _r296_t1;
                var _r296_t0 = r271_RDim(r294_df, r294_md);
                var r296_xBar = _r296_t0.xBar;
                var r296_rBottomSerif = _r296_t0.rBottomSerif;
                var r296_rTopSerif = _r296_t0.rTopSerif;
                var r296_fine = _r296_t0.fine;
                var r296_xArchMiddle = _r296_t0.xArchMiddle;
                var r296_skew = _r296_t0.skew;
                var r296_rHookX = _r296_t0.rHookX;
                var r296_rHookY = _r296_t0.rHookY;
                var r296_hookSuperness = _r296_t0.hookSuperness;
                r296_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.up.start(r296_rHookX, r271_XH - r296_rHookY - r271_Stroke * 0.5, r271_heading(r271_Upward)), r271_arcvh(32, r296_hookSuperness), r271_g4.left.mid(r296_xArchMiddle - r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_Stroke), r271_XH - r271_O, r271_widths.heading(r271_Stroke, 0, {
                    'y': -1,
                    'x': -r296_skew
                })), r271_archv(32), r271_straight.down.end(r296_xBar - r271_HSwToV(r296_fine), r271_XH * 0.53 + (r271_SmallArchDepth - r271_SmallArchDepthA), r271_widths.heading(r296_fine, 0, r271_Downward))));
                r296_currentGlyph.include(r271_VBar.r(r296_xBar, 0, r271_XH));
                if (r294_doBottomSerif)
                    r296_currentGlyph.include(r296_rBottomSerif(0));
                if (r294_doTopSerif)
                    r296_currentGlyph.include(r296_rTopSerif(r271_XH));
                return void 0;
            };
        };
        var r271_CompactShape = function (r301_df, r301_md, r301_ts, r301_bs) {
            var _r301_t0, _r301_t1;
            return r271_CompactShapeImpl(r301_df, r301_md, false, r301_ts, r301_bs);
        };
        var r271_CornerHookShape = function (r302_df, r302_md, r302_ts, r302_bs) {
            var _r302_t0, _r302_t1;
            return r271_CompactShapeImpl(r302_df, r302_md, true, r302_ts, r302_bs);
        };
        var r271_CompactShapeImpl = function (r303_df, r303_md, r303_doHookSerif, r303_doTopSerif, r303_doBottomSerif) {
            var _r303_t0, _r303_t1;
            return function () {
                var r305___, _r305_t1, _r305_t2, _r305_t4;
                var _r305_t3 = this;
                var r305_currentGlyph = _r305_t3;
                var _r305_t0 = r271_RDim(r303_df, r303_md);
                var r305_xBar = _r305_t0.xBar;
                var r305_rBottomSerif = _r305_t0.rBottomSerif;
                var r305_rTopSerif = _r305_t0.rTopSerif;
                var r305_fine = _r305_t0.fine;
                var r305_xArchMiddle = _r305_t0.xArchMiddle;
                var r305_rHookXN = _r305_t0.rHookXN;
                var r305_xCor = r303_doHookSerif ? 0 : r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_Stroke);
                var r305_arcTopShift = (_r305_t1 = r303_md, _r305_t1 === r271_rNarrow ? r271_O * r1_clamp(0, 1, r271_StrokeWidthBlend(0, 16)) : (r305___ = _r305_t1, 0));
                var r305_arcTopWidth = (_r305_t2 = r303_md, _r305_t2 === r271_rNarrow ? r271_Stroke - r271_O * r1_clamp(0, 1, r271_StrokeWidthBlend(0, 16)) : (r305___ = _r305_t2, r271_Stroke));
                var r305_ArcKnots = function () {
                    var _r306_t0, _r306_t1;
                    return [
                        r271_flat(r305_rHookXN - r305_xCor, r271_XH - r305_arcTopShift, r303_doHookSerif ? r271_heading(r271_Leftward) : null),
                        r271_curl(r305_xArchMiddle - r305_xCor, r271_XH - r305_arcTopShift, r303_doHookSerif ? r271_heading(r271_Leftward) : null),
                        r271_archv(),
                        r271_straight.down.end(r305_xBar - r271_HSwToV(r305_fine), r271_XH * 0.53 + (r271_SmallArchDepth - r271_SmallArchDepthA), r271_widths.heading(r305_fine, 0, r271_Downward))
                    ];
                };
                r305_currentGlyph.include(r271_dispiro(r271_widths.lhs(r305_arcTopWidth), r305_ArcKnots()));
                r305_currentGlyph.include(r271_VBar.r(r305_xBar, 0, r271_XH));
                if (r303_doHookSerif)
                    r305_currentGlyph.include(r271_intersection(r271_VSerif.dr(r305_rHookXN - r305_xCor, r271_XH, r271_VJut), r271_xn$spirooutline$1aao(r305_ArcKnots(), r271_corner(r305_xBar - r271_HSwToV(r305_fine), 0), r271_corner(r271_Width * 16, 0), r271_corner(r271_Width * 16, r271_XH))));
                if (r303_doBottomSerif)
                    r305_currentGlyph.include(r305_rBottomSerif(0));
                if (r303_doTopSerif)
                    r305_currentGlyph.include(r305_rTopSerif(r271_XH));
                return void 0;
            };
        };
        var r271_EarlessCornerShape = function (r312_df, r312_md, r312_doTopSerif, r312_doBottomSerif) {
            var _r312_t0, _r312_t1;
            return function () {
                var _r314_t2;
                var _r314_t1 = this;
                var r314_currentGlyph = _r314_t1;
                var _r314_t0 = r271_RDim(r312_df, r312_md);
                var r314_xBar = _r314_t0.xBar;
                var r314_xArchMiddle = _r314_t0.xArchMiddle;
                var r314_rHookX = _r314_t0.rHookX;
                var r314_rHookY = _r314_t0.rHookY;
                var r314_hookSuperness = _r314_t0.hookSuperness;
                var r314_rBottomSerif = _r314_t0.rBottomSerif;
                r314_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.up.start(r314_rHookX, r271_XH - r314_rHookY - r271_Stroke * 0.5, r271_heading(r271_Upward)), r271_arcvh(void 0, r314_hookSuperness), r271_g4.left.mid(r314_xArchMiddle - r271_CorrectionOMidS, r271_XH - r271_O, r271_heading(r271_Leftward)), r271_g4(r314_xBar - r271_HSwToV(r271_Stroke), r271_XH - r271_DToothlessRise)));
                r314_currentGlyph.include(r271_VBar.r(r314_xBar, 0, r271_XH - r271_DToothlessRise));
                if (r312_doBottomSerif)
                    r314_currentGlyph.include(r314_rBottomSerif(0));
                return void 0;
            };
        };
        var r271_EarlessRoundedShape = function (r318_df, r318_md, r318_doTopSerif, r318_doBottomSerif) {
            var _r318_t0, _r318_t1;
            return function () {
                var _r320_t2;
                var _r320_t1 = this;
                var r320_currentGlyph = _r320_t1;
                var _r320_t0 = r271_RDim(r318_df, r318_md);
                var r320_xBar = _r320_t0.xBar;
                var r320_xArchMiddle = _r320_t0.xArchMiddle;
                var r320_rHookX = _r320_t0.rHookX;
                var r320_rHookY = _r320_t0.rHookY;
                var r320_hookSuperness = _r320_t0.hookSuperness;
                var r320_rBottomSerif = _r320_t0.rBottomSerif;
                var r320_hx = Math.max(r320_rHookX, r320_xBar + 1.25 * r271_Stroke);
                r320_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4(r320_hx, r271_XH - r320_rHookY), r271_hookstart(r271_XH - r271_O), r271_flat(r320_xBar - r271_HSwToV(r271_Stroke), r271_XH - r271_SmallArchDepthA), r271_curl(r320_xBar - r271_HSwToV(r271_Stroke), 0, r271_heading(r271_Downward))));
                if (r318_doBottomSerif)
                    r320_currentGlyph.include(r320_rBottomSerif(0));
                return void 0;
            };
        };
        var r271_FlapHooklessShape = function (r323_df, r323_md, r323_doTopSerif, r323_doBottomSerif) {
            var _r323_t0, _r323_t1;
            return function () {
                var _r325_t2;
                var _r325_t1 = this;
                var r325_currentGlyph = _r325_t1;
                var _r325_t0 = r271_RDim(r323_df, r323_md);
                var r325_xBar = _r325_t0.xBar;
                var r325_rBottomSerif = _r325_t0.rBottomSerif;
                var r325_xArchMiddle = _r325_t0.xArchMiddle;
                r325_currentGlyph.setBaseAnchor('overlay', r325_xBar - r271_HSwToV(0.5 * r271_Stroke), r271_XH / 2);
                r325_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4.left.start(r325_xArchMiddle - r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_Stroke), r271_XH - r271_O), r271_archv(), r271_flat(r325_xBar - r271_HSwToV(r271_Stroke), r271_XH - r271_SmallArchDepthA), r271_curl(r325_xBar - r271_HSwToV(r271_Stroke), 0, r271_heading(r271_Downward))));
                if (r323_doBottomSerif)
                    r325_currentGlyph.include(r325_rBottomSerif(0));
                return void 0;
            };
        };
        var r271_SmallRConfig = r1_SuffixCfg.weave({
            '': [
                r271_StandardShape,
                r271_dfN,
                r271_rStraight
            ],
            'earlessCorner': [
                r271_EarlessCornerShape,
                r271_dfN,
                r271_rEarless
            ],
            'earlessRounded': [
                r271_EarlessRoundedShape,
                r271_dfN,
                r271_rEarless
            ],
            'hookless': [
                r271_CompactShape,
                r271_dfN,
                r271_rNarrow
            ],
            'cornerHooked': [
                r271_CornerHookShape,
                r271_dfN,
                r271_rCornerHooked
            ],
            'compact': [
                r271_CompactShape,
                r271_dfR,
                r271_rNarrow
            ],
            'hooklessFlap': [
                r271_FlapHooklessShape,
                r271_dfN,
                r271_rNarrow
            ],
            'compactFlap': [
                r271_FlapHooklessShape,
                r271_dfR,
                r271_rNarrow
            ]
        }, {
            'serifless': [
                0,
                0
            ],
            'topSerifed': [
                1,
                0
            ],
            'baseSerifed': [
                0,
                1
            ],
            'serifed': [
                1,
                1
            ]
        });
        var _r271_t10 = _r1_t2(r271_SmallRConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_F = _r271_t12[1][0][0];
            r271_df = _r271_t12[1][0][1];
            r271_mode = _r271_t12[1][0][2];
            _r271_t12[1][0];
            r271_doTS = _r271_t12[1][1][0];
            r271_doBS = _r271_t12[1][1][1];
            _r271_t12[1][1];
            _r271_t12[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('r.' + r271_suffix, null, function () {
                    var _r336_t2;
                    var _r336_t1 = this;
                    var r336_currentGlyph = _r336_t1;
                    r336_currentGlyph.setWidth(r271_df.width);
                    r336_currentGlyph.include(r271_df.markSet.e());
                    var _r336_t0 = r271_RDim(r271_df, r271_mode);
                    var r336_setMarks = _r336_t0.setMarks;
                    r336_currentGlyph.include(r336_setMarks(r271_doTS, r271_XH, 0));
                    r336_currentGlyph.include(r271_F(r271_df, r271_mode, r271_doTS, r271_doBS));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rLongLeg.' + r271_suffix, null, function () {
                    var _r343_t2;
                    var _r343_t1 = this;
                    var r343_currentGlyph = _r343_t1;
                    r343_currentGlyph.setWidth(r271_df.width);
                    r343_currentGlyph.include(r271_df.markSet.p());
                    var _r343_t0 = r271_RDim(r271_df, r271_mode);
                    var r343_xBar = _r343_t0.xBar;
                    var r343_rBottomSerif = _r343_t0.rBottomSerif;
                    var r343_setMarks = _r343_t0.setMarks;
                    r343_currentGlyph.include(r343_setMarks(r271_doTS, r271_XH, r271_Descender));
                    r343_currentGlyph.include(r271_F(r271_df, r271_mode, r271_doTS, 0));
                    r343_currentGlyph.ejectTagged('serifLB');
                    r343_currentGlyph.include(r271_VBar.r(r343_xBar, r271_Descender, 0));
                    if (r271_doBS)
                        r343_currentGlyph.include(r343_rBottomSerif(r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rCapLongLeg.' + r271_suffix, null, function () {
                    var _r353_t2;
                    var _r353_t1 = this;
                    var r353_currentGlyph = _r353_t1;
                    r353_currentGlyph.setWidth(r271_df.width);
                    r353_currentGlyph.include(r271_df.markSet.capDesc());
                    var _r353_t0 = r271_RDim(r271_df, r271_mode);
                    var r353_xBar = _r353_t0.xBar;
                    var r353_rBottomSerif = _r353_t0.rBottomSerif;
                    var r353_setMarks = _r353_t0.setMarks;
                    r353_currentGlyph.include(r353_setMarks(r271_doTS, r271_CAP, r271_Descender));
                    r353_currentGlyph.include(r271_xn$withtransform$5sIl(r271_ApparentTranslate(0, r271_CAP - r271_XH), r271_F(r271_df, r271_mode, r271_doTS, 0)));
                    r353_currentGlyph.ejectTagged('serifLB');
                    r353_currentGlyph.include(r271_VBar.r(r353_xBar, r271_Descender, r271_CAP - r271_XH));
                    if (r271_doBS)
                        r353_currentGlyph.include(r353_rBottomSerif(r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('fInsular.' + r271_suffix, null, function () {
                    var _r363_t2;
                    var _r363_t1 = this;
                    var r363_currentGlyph = _r363_t1;
                    r363_currentGlyph.include(r271_xn$referglyph$1aao('rLongLeg.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r363_t0 = r271_RDim(r271_df, r271_mode);
                    var r363_xBar = _r363_t0.xBar;
                    var r363_rHookX = _r363_t0.rHookX;
                    r363_currentGlyph.include(r271_HBar.b(r363_xBar, r363_rHookX - Math.max(0.15 * (r271_df.rightSB - r271_df.leftSB), r271_HSwToV(0.25 * r271_Stroke)), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('FInsular.' + r271_suffix, null, function () {
                    var _r368_t2;
                    var _r368_t1 = this;
                    var r368_currentGlyph = _r368_t1;
                    r368_currentGlyph.include(r271_xn$referglyph$1aao('rCapLongLeg.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var _r368_t0 = r271_RDim(r271_df, r271_mode);
                    var r368_xBar = _r368_t0.xBar;
                    var r368_rHookX = _r368_t0.rHookX;
                    r368_currentGlyph.include(r271_HBar.b(r368_xBar, r368_rHookX - Math.max(0.15 * (r271_df.rightSB - r271_df.leftSB), r271_HSwToV(0.25 * r271_Stroke)), 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rPalatalHook.' + r271_suffix, null, function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    r373_currentGlyph.include(r271_xn$referglyph$1aao('r.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r373_attach = r373_currentGlyph.gizmo.unapply(r373_currentGlyph.baseAnchors.palatalHookAttach);
                    var r373_pos = r373_currentGlyph.gizmo.unapply(r373_currentGlyph.baseAnchors.palatalHookPos);
                    r373_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r373_pos.x), new r271_xn$NamedParameterPair$2Lrc9b('y', r373_pos.y), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r373_attach.x)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rRTail.' + r271_suffix, null, function () {
                    var _r381_t2;
                    var _r381_t1 = this;
                    var r381_currentGlyph = _r381_t1;
                    r381_currentGlyph.setWidth(r271_df.width);
                    r381_currentGlyph.include(r271_df.markSet.e());
                    r381_currentGlyph.include(r271_F(r271_df, r271_mode, r271_doTS, 0));
                    r381_currentGlyph.ejectTagged('serifLB');
                    var _r381_t0 = r271_RDim(r271_df, r271_mode);
                    var r381_xBar = _r381_t0.xBar;
                    r381_currentGlyph.include(r271_RetroflexHook.rExt(r381_xBar, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('rTurnRTail.' + r271_suffix, null, function () {
                    var _r389_t2;
                    var _r389_t1 = this;
                    var r389_currentGlyph = _r389_t1;
                    r389_currentGlyph.include(r271_xn$referglyph$1aao('r.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r389_currentGlyph.ejectTagged('serifLT');
                    r389_currentGlyph.include(r271_FlipAround(r271_df.middle, r271_XH / 2));
                    r389_currentGlyph.include(r271_df.markSet.e());
                    var _r389_t0 = r271_RDim(r271_df, r271_mode);
                    var r389_xBar = _r389_t0.xBar;
                    r389_currentGlyph.include(r271_RetroflexHook.lExt(r271_df.rightSB - r389_xBar + r271_df.leftSB, 0));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('rTurnLongLetRTail.' + r271_suffix, null, function () {
                    var _r397_t2;
                    var _r397_t1 = this;
                    var r397_currentGlyph = _r397_t1;
                    r397_currentGlyph.include(r271_xn$referglyph$1aao('rLongLeg.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r397_currentGlyph.ejectTagged('serifLT');
                    r397_currentGlyph.include(r271_FlipAround(r271_df.middle, r271_XH / 2));
                    r397_currentGlyph.include(r271_df.markSet.b());
                    var _r397_t0 = r271_RDim(r271_df, r271_mode);
                    var r397_xBar = _r397_t0.xBar;
                    r397_currentGlyph.include(r271_RetroflexHook.lExt(r271_df.rightSB - r397_xBar + r271_df.leftSB, 0));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('r', 'r');
        r271_xn$linkreducedvariant$5sIl8('r/sansSerif', 'r', r1_MathSansSerif);
        var r271_TurnRMarks = function (r403_k) {
            var _r403_t0, _r403_t1;
            return r271_TurnMarks(r403_k, function (r404_df) {
                var _r404_t0, _r404_t1;
                return {
                    'baseAnchors': {
                        'bottomRight': {
                            'x': r404_df.rightSB - r271_RBalance,
                            'y': 0
                        }
                    }
                };
            });
        };
        r271_turned('turnr', 633, 'r', r271_HalfAdvance, r271_XH / 2, r271_TurnRMarks('e'));
        r271_CreateAccentedComposition('rTildeOver', 7538, 'r', 'tildeOver');
        r271_turned('turnrTildeOver', 43880, 'rTildeOver', r271_HalfAdvance, r271_XH / 2, r271_TurnRMarks('e'));
        r271_xn$selectvariant$7Hrq('rLongLeg', 636, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        r271_xn$selectvariant$7Hrq('SInsular', 42884, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'rCapLongLeg'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_xn$selectvariant$7Hrq('sInsular', 42885, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'rLongLeg'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_xn$selectvariant$7Hrq('FInsular', 42875, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_xn$selectvariant$7Hrq('fInsular', 42876, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rRTail'));
        r271_turned('turnrLongLeg', 634, 'rLongLeg', r271_HalfAdvance, r271_XH / 2, r271_TurnRMarks('b'));
        r271_xn$selectvariant$7Hrq('rRTail', 637);
        r271_turned('smallLetterTurnedRWithTail', 11385, 'rRTail', r271_HalfAdvance, r271_XH / 2, function () {
            var _r413_t1;
            var _r413_t0 = this;
            var r413_currentGlyph = _r413_t0;
            var r413_df = r271_DivFrame(r413_currentGlyph.advanceWidth / r271_Width);
            r413_currentGlyph.include(r413_df.markSet.b());
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('rTurnRTail', 635);
        r271_xn$selectvariant$7Hrq('rTurnLongLetRTail', 122632, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'rTurnRTail'));
        r271_xn$selectvariant$7Hrq('rPalatalHook', 7561, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'r'));
        var r271_BBRShape = function (r417_df, r417_md, r417_doTopSerif, r417_doBottomSerif) {
            var _r417_t0, _r417_t1;
            return function () {
                var _r419_t2;
                var _r419_t1 = this;
                var r419_currentGlyph = _r419_t1;
                var _r419_t0 = r271_RDim(r417_df, r417_md, r271_BBD, r271_BBS);
                var r419_xBar = _r419_t0.xBar;
                var r419_fine = _r419_t0.fine;
                var r419_xArchMiddle = _r419_t0.xArchMiddle;
                var r419_skew = _r419_t0.skew;
                var r419_rHookX = _r419_t0.rHookX;
                var r419_rHookY = _r419_t0.rHookY;
                var r419_hookSuperness = _r419_t0.hookSuperness;
                r419_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_BBS), r271_g4.up.start(r419_rHookX, r271_XH - r419_rHookY - r271_BBS * 0.5, r271_heading(r271_Upward)), r271_arcvh(void 0, r419_hookSuperness), r271_g4.left.mid(r419_xArchMiddle - r271_CorrectionOMidS * r1_linreg(72, 0.75, 108, 1, r271_BBS), r271_XH - r271_O, r271_widths.heading(r271_BBS, 0, {
                    'y': -1,
                    'x': -r419_skew
                })), r271_archv(), r271_straight.down.end(r419_xBar - r271_HSwToV(r419_fine), r271_XH * 0.53 + (r271_SmallArchDepth - r271_SmallArchDepthA), r271_widths.heading(r419_fine, 0, r271_Downward))));
                r419_currentGlyph.include(r271_BBBarRight(r419_xBar, 0, r271_XH));
                r419_currentGlyph.setBaseAnchor('overlay', r419_xBar - r271_HVContrast * (r271_BBD + r271_BBS * 2) * 0.25, r271_XH * 0.5);
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/r', 120163, function () {
            var _r425_t1;
            var _r425_t0 = this;
            var r425_currentGlyph = _r425_t0;
            r425_currentGlyph.include(r271_dfR.markSet.e());
            r425_currentGlyph.include(r271_BBRShape(r271_dfN, r271_rStraight, 0, 0));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('rFlap', 638, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'r'));
        return r271_CreateAccentedComposition('rFlapTildeOver', 7539, 'rFlap', 'tildeOver');
    });
    return void 0;
});
