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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-A', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_body, r271_xTrailing, r271_bar, _r271_t13, _r271_t17, _r271_t18, _r271_t19, _r271_t20, _r271_tag21, _r271_t22, _r271_tag23, _r271_t24, _r271_tag25, _r271_t26, _r271_tag27;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_HalfUPM = _r271_t1.HalfUPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_AHook = _r271_t1.AHook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_shoulderMidSkew = _r271_t1.shoulderMidSkew;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
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
        var r271_bezControls = _r271_t2.bezControls;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var r271_CreateOgonekComposition = _r271_t7.CreateOgonekComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t8.SerifFrame;
        var r271_OBarLeft = _r271_t8.OBarLeft;
        var r271_OBarRight = _r271_t8.OBarRight;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t9.RightwardTailedBar;
        var r271_InvRightwardTailedBar = _r271_t9.InvRightwardTailedBar;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_DToothlessRise = _r271_t10.DToothlessRise;
        var r271_DMBlend = _r271_t10.DMBlend;
        var r271_RetroflexHook = _r271_t10.RetroflexHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return {
                'DoubleStorey': r271_DoubleStorey,
                'DoubleStoreyConfig': r271_DoubleStoreyConfig
            };
        });
        var r271_DoubleStorey = function () {
            var r283_HookAndBar, r283_HookAndBarMask, r283_Arc, r283_ArcMask, r283_Serifless, r283_Serifed, r283_Tailed, r283_ToothlessCorner, r283_ToothlessRounded, r283_GetMask;
            var r283_exports = {};
            var r283_ADoubleStoreyStroke = function (r290_df) {
                var _r290_t0, _r290_t1;
                return r271_AdviceStroke2(2, 3, r271_XH, r290_df.div);
            };
            var r283_ADoubleStoreySmoothA = function (r291_df) {
                var _r291_t0, _r291_t1;
                var r291_sw = r283_ADoubleStoreyStroke(r291_df);
                return r291_df.archDepthA(r271_ArchDepth * r271_StrokeWidthBlend(0.9, 0.81, r291_sw), r291_sw);
            };
            var r283_ADoubleStoreySmoothB = function (r292_df) {
                var _r292_t0, _r292_t1;
                var r292_sw = r283_ADoubleStoreyStroke(r292_df);
                return r292_df.archDepthB(r271_ArchDepth * r271_StrokeWidthBlend(0.9, 0.81, r292_sw), r292_sw);
            };
            var r283_ADoubleStoreyHookAndBarT = function (r293_df, r293_sink, r293_y0, r293_stroke) {
                var _r293_t0, _r293_t1;
                var r293_isMask = r293_sink === r271_xn$spirooutline$1aao;
                return r293_sink(r271_widths.rhs(r293_stroke), r271_g4(r293_df.leftSB, r271_XH - r271_AHook), r271_hookstart(r271_XH - r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r293_stroke)), r271_flat(r293_df.rightSB, r271_XH - r283_ADoubleStoreySmoothB(r293_df)), (r293_isMask ? r271_corner : r271_curl)(r293_df.rightSB, r293_y0, r271_heading(r271_Downward)), !r293_isMask ? [] : [r271_corner(r293_df.leftSB, r293_y0)]);
            };
            r283_exports.HookAndBar = r283_HookAndBar = function (r296_df, r296_y0, r296__stroke) {
                var _r296_t0, _r296_t1;
                return r283_ADoubleStoreyHookAndBarT(r296_df, r271_dispiro, r296_y0, r1_fallback(r296__stroke, r283_ADoubleStoreyStroke(r296_df)));
            };
            r283_exports.HookAndBarMask = r283_HookAndBarMask = function (r298_df, r298_y0, r298__stroke) {
                var _r298_t0, _r298_t1;
                return r283_ADoubleStoreyHookAndBarT(r298_df, r271_xn$spirooutline$1aao, r298_y0, r1_fallback(r298__stroke, r283_ADoubleStoreyStroke(r298_df)));
            };
            var r283_ADoubleStoreyArcT = function (r299_df, r299_sink, r299_kind, r299_rise, r299_stroke) {
                var _r299_t0, _r299_t1;
                return function () {
                    var _r301_t0, _r301_t2;
                    var _r301_t1 = this;
                    var r301_currentGlyph = _r301_t1;
                    var r301_isMask = r299_sink === r271_xn$spirooutline$1aao;
                    var r301_bartop = r271_XH * r271_OverlayPos * 1.02 + r299_stroke * 0.425;
                    var r301_bowlArcY1 = r271_YSmoothMidL(0, r301_bartop, r271_SmallArchDepthA, r271_SmallArchDepthB);
                    var r301_bowlArcY2 = r271_YSmoothMidR(0, r301_bartop, r271_SmallArchDepthA, r271_SmallArchDepthB);
                    var r301_lowSkew = r271_shoulderMidSkew(r271_ShoulderFine, void 0);
                    var r301_leftSlopeS = 0.1 * (r299_df.width / r271_HalfUPM);
                    var r301_leftSlope = r301_leftSlopeS - r271_TanSlope;
                    var r301_lowMiddle = r1_mix(r299_df.leftSB + r271_OX, r299_df.rightSB - r271_HSwToV(0.5 * r299_stroke), r1_linreg(72, 0.51, 126, 0.58, r299_stroke));
                    var r301_barSmooth = r1_mix(r299_df.leftSB, r299_df.rightSB, 0.55);
                    r301_currentGlyph.include(r299_sink(r271_widths.lhs(r299_stroke), (r301_isMask ? r271_corner : r271_flat)(r299_df.rightSB + r271_O, r301_bartop, r271_heading(r271_Leftward)), r271_curl(r301_barSmooth, r301_bartop), r271_archv(), r271_g4(r299_df.leftSB + r271_OX, r301_bowlArcY1 - r271_HSwToV(r271_Stroke) * r301_leftSlopeS, r271_heading({
                        'x': r271_HVContrast,
                        'y': r301_leftSlope
                    })), r271_arcvh(), (_r301_t0 = r299_kind, 0 === _r301_t0 ? [
                        r271_g4(r301_lowMiddle + -r301_lowSkew * r299_stroke + r271_CorrectionOMidX * r299_stroke * 0.5, r271_O, r271_heading({
                            'y': 1,
                            'x': r301_lowSkew
                        })),
                        r271_archv(16),
                        r271_straight.up.end(r299_df.rightSB - r271_HSwToV(r299_stroke) + r271_HSwToV(r271_ShoulderFine), r271_SmallArchDepthB * 0.9, r271_widths.lhs(r271_ShoulderFine)),
                        !r301_isMask ? [] : [r271_corner(r299_df.rightSB - r271_HSwToV(r299_stroke) + r271_HSwToV(r271_ShoulderFine), r301_bartop)]
                    ] : 1 === _r301_t0 ? [
                        r271_g4(r299_df.middle + r271_CorrectionOMidX * r299_stroke, r271_O),
                        r271_g4(r299_df.rightSB, r299_rise)
                    ] : 2 === _r301_t0 ? [
                        r271_g4(r299_df.middle + r271_CorrectionOMidX * r299_stroke, r271_O),
                        r271_archv(),
                        r271_flat(r299_df.rightSB, r301_bowlArcY2),
                        r271_curl(r299_df.rightSB, Math.max(r301_bowlArcY2, r299_rise) + r299_stroke * r271_TanSlope + 1, r271_heading(r271_Upward))
                    ] : void 0)));
                    return void 0;
                };
            };
            r283_exports.Arc = r283_Arc = function (r304_df, r304_kind, r304_rise, r304__sw) {
                var _r304_t0, _r304_t1;
                return r283_ADoubleStoreyArcT(r304_df, r271_dispiro, r304_kind, r304_rise, r1_fallback(r304__sw, r283_ADoubleStoreyStroke(r304_df)));
            };
            r283_exports.ArcMask = r283_ArcMask = function (r306_df, r306_kind, r306_rise, r306__sw) {
                var _r306_t0, _r306_t1;
                return r283_ADoubleStoreyArcT(r306_df, r271_xn$spirooutline$1aao, r306_kind, r306_rise, r1_fallback(r306__sw, r283_ADoubleStoreyStroke(r306_df)));
            };
            r283_exports.Serifless = r283_Serifless = function (r308_df, r308_sw) {
                var _r308_t0, _r308_t1;
                return r271_union(r283_HookAndBar(r308_df, 0, r308_sw), r283_Arc(r308_df, 0, void 0, void 0, r308_sw));
            };
            r283_exports.Serifed = r283_Serifed = function (r310_df, r310_sw) {
                var _r310_t0, _r310_t1;
                return r271_union(r283_Serifless(r310_df, r310_sw), r271_SerifFrame.fromDf(r310_df, r271_XH, 0).rb.outer);
            };
            r283_exports.Tailed = r283_Tailed = function (r312_df, r312_sw) {
                var _r312_t0, _r312_t1;
                return r271_union(r283_HookAndBar(r312_df, r271_XH - r283_ADoubleStoreySmoothB(r312_df) + r271_O, r312_sw), r283_Arc(r312_df, 0, void 0, void 0, r312_sw), r271_RightwardTailedBar(r312_df.rightSB, 0, r271_XH - r283_ADoubleStoreySmoothB(r312_df), new r271_xn$NamedParameterPair$2Lrc9b('sw', r1_fallback(r312_sw, r283_ADoubleStoreyStroke(r312_df)))));
            };
            r283_exports.ToothlessCorner = r283_ToothlessCorner = function (r315_df, r315_sw) {
                var _r315_t0, _r315_t1;
                return r271_union(r283_HookAndBar(r315_df, r271_DToothlessRise, r315_sw), r283_Arc(r315_df, 1, r271_DToothlessRise, r315_sw));
            };
            r283_exports.ToothlessRounded = r283_ToothlessRounded = function (r317_df, r317_sw) {
                var _r317_t0, _r317_t1;
                return r271_union(r283_HookAndBar(r317_df, r283_ADoubleStoreySmoothA(r317_df), r317_sw), r283_Arc(r317_df, 2, r283_ADoubleStoreySmoothA(r317_df), r317_sw));
            };
            r283_exports.GetMask = r283_GetMask = function (r319_shapeFn, r319_df, r319_sw) {
                var r319___, _r319_t1, _r319_t2;
                var _r319_t0 = r319_shapeFn;
                return _r319_t0 === r283_ToothlessCorner ? r283_ArcMask(r319_df, 1, r271_DToothlessRise, r319_sw) : _r319_t0 === r283_ToothlessRounded ? r283_ArcMask(r319_df, 2, r283_ADoubleStoreySmoothA(r319_df), r319_sw) : (r319___ = _r319_t0, r283_ArcMask(r319_df, 0, void 0, void 0, r319_sw));
            };
            return r283_exports;
        }();
        var r271_DoubleStoreyConfig = {
            'doubleStoreySerifless': [
                r271_DoubleStorey.Serifless,
                r271_RightSB
            ],
            'doubleStoreySerifed': [
                r271_DoubleStorey.Serifed,
                r271_RightSB + r271_SideJut
            ],
            'doubleStoreyTailed': [
                r271_DoubleStorey.Tailed,
                r271_RightSB + r271_SideJut
            ],
            'doubleStoreyToothlessCorner': [
                r271_DoubleStorey.ToothlessCorner,
                void 0
            ],
            'doubleStoreyToothlessRounded': [
                r271_DoubleStorey.ToothlessRounded,
                void 0
            ]
        };
        var _r271_t11 = Object.entries(r271_DoubleStoreyConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_body = _r271_t13[1][0];
            r271_xTrailing = _r271_t13[1][1];
            _r271_t13[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('a.' + r271_suffix, null, function () {
                    var _r325_t1;
                    var _r325_t0 = this;
                    var r325_currentGlyph = _r325_t0;
                    var r325_df = r325_currentGlyph.include(r271_DivFrame(1));
                    r325_currentGlyph.include(r325_df.markSet.e());
                    if (r271_xTrailing)
                        r325_currentGlyph.setBaseAnchor('trailing', r271_xTrailing, 0);
                    r325_currentGlyph.include(r271_body(r325_df));
                    return void 0;
                });
            }());
        }
        var _r271_t14 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t14.BBS;
        var r271_BBD = _r271_t14.BBD;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/a', 120146, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            var r333_df = r333_currentGlyph.include(r271_DivFrame(1));
            r333_currentGlyph.include(r333_df.markSet.e());
            r333_currentGlyph.include(r271_DoubleStorey.HookAndBar(r333_df, 0, r271_BBS));
            r333_currentGlyph.include(r271_intersection(r271_DoubleStorey.HookAndBarMask(r333_df, 0), r271_VBar.r(r271_RightSB - r271_BBD, 0, r271_XH, r271_BBS)));
            r333_currentGlyph.include(r271_difference(r271_union(r271_DoubleStorey.Arc(r333_df, 0, 0, r271_BBS), r271_intersection(r271_DoubleStorey.ArcMask(r333_df, 0, 0, r271_BBS), r271_VBar.l(r271_SB + r271_OX + r271_BBD, 0, r271_XH, r271_BBS))), r271_Rect(r271_XH, 0, r271_RightSB - r271_BBD, r271_Width)));
            r333_currentGlyph.include(r271_HBar.b(r271_RightSB - r271_BBD, r271_RightSB, 0, r271_BBS));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('a.crossing', null, function () {
            var _r342_t1;
            var _r342_t0 = this;
            var r342_currentGlyph = _r342_t0;
            r342_currentGlyph.include(r271_MarkSet.e());
            var r342_middle = r1_mix(r271_SB, r271_RightSB, 0.42);
            var r342_fine = r271_AdviceStroke(3.25);
            var r342_k1 = 0.25;
            var r342_k2 = 0.5;
            var r342_k3 = 0.35;
            r342_currentGlyph.include(r271_dispiro(r271_widths.rhs(r342_fine), r271_g4(r271_RightSB - r271_OX * 1.75, r271_XH, r271_heading(r271_Downward)), r271_bezControls(r342_k1, r342_k2, r342_k3, 1, 6), r271_g4.left.mid(r342_middle + r271_CorrectionOMidS, r271_O, r271_widths.rhs(r271_Stroke)), r271_archv(), r271_flat(r271_SB + r271_OX * 2, r271_SmallArchDepthB), r271_curl(r271_SB + r271_OX * 2, r271_XH - r271_SmallArchDepthA), r271_arcvh(), r271_g4.right.mid(r342_middle - r271_CorrectionOMidS, r271_XH - r271_O, r271_widths.rhs(r271_Stroke)), r271_bezControls(1 - r342_k3, 0, 1 - r342_k1, 1 - r342_k2, 6), r271_g4(r271_RightSB - r271_OX * 2, 0, r271_widths.heading(0, r342_fine, r271_Downward))));
            r342_currentGlyph.setBaseAnchor('overlay', r342_middle - r271_OX, r271_XH * r271_OverlayPos);
            return void 0;
        });
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r347_t0, _r347_t1;
            return {
                'SingleStorey': r271_SingleStorey,
                'SingleStoreyConfig': r271_SingleStoreyConfig
            };
        });
        var r271_SingleStorey = function () {
            var r350_FullBarBody, r350_EarlessCornerBody, r350_EarlessRoundedBody, r350_SeriflessBar, r350_SerifedBar, r350_TailedBar, r350_ScriptCut, r350_InvScriptCut;
            var r350_exports = {};
            r350_exports.FullBarBody = r350_FullBarBody = function (r358_df, r358_height, r358_bar, r358_mask, r358__sw) {
                var _r358_t0, _r358_t1;
                return function () {
                    var _r360_t1;
                    var _r360_t0 = this;
                    var r360_currentGlyph = _r360_t0;
                    var r360_sw = r1_fallback(r358__sw, r358_df.mvs);
                    r360_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('top', r358_height), new r271_xn$NamedParameterPair$2Lrc9b('left', r358_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r358_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r360_sw), new r271_xn$NamedParameterPair$2Lrc9b('fine', r360_sw * (r271_ShoulderFine / r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('ada', r358_df.archDepthA(r271_SmallArchDepth, r360_sw)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r358_df.archDepthB(r271_SmallArchDepth, r360_sw))));
                    r360_currentGlyph.include(r358_bar(r358_df, r358_height, r358_mask, r360_sw));
                    return void 0;
                };
            };
            r350_exports.EarlessCornerBody = r350_EarlessCornerBody = function (r371_df, r371_height, r371_bar, r371_mask, r371__sw) {
                var _r371_t0, _r371_t1;
                return function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    var r373_sw = r1_fallback(r371__sw, r371_df.mvs);
                    r373_currentGlyph.include(r271_OBarLeft.toothless(new r271_xn$NamedParameterPair$2Lrc9b('top', r371_height), new r271_xn$NamedParameterPair$2Lrc9b('left', r371_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r371_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r373_sw), new r271_xn$NamedParameterPair$2Lrc9b('fine', r373_sw * (r271_ShoulderFine / r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('ada', r371_df.archDepthA(r271_SmallArchDepth, r373_sw)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r371_df.archDepthB(r271_SmallArchDepth, r373_sw)), new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend)));
                    r373_currentGlyph.include(r271_FlipAround(r371_df.middle, r371_height / 2));
                    r373_currentGlyph.include(r371_bar(r371_df, r371_height - r271_DToothlessRise, r371_mask, r373_sw));
                    return void 0;
                };
            };
            r350_exports.EarlessRoundedBody = r350_EarlessRoundedBody = function (r387_df, r387_height, r387_bar, r387_mask, r387__sw) {
                var _r387_t0, _r387_t1;
                return function () {
                    var _r389_t1;
                    var _r389_t0 = this;
                    var r389_currentGlyph = _r389_t0;
                    var r389_sw = r1_fallback(r387__sw, r387_df.mvs);
                    var r389_ada = r387_df.archDepthA(r271_SmallArchDepth, r389_sw);
                    var r389_adb = r387_df.archDepthB(r271_SmallArchDepth, r389_sw);
                    r389_currentGlyph.include(r271_OBarLeft.rounded(new r271_xn$NamedParameterPair$2Lrc9b('top', r387_height), new r271_xn$NamedParameterPair$2Lrc9b('left', r387_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r387_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r389_sw), new r271_xn$NamedParameterPair$2Lrc9b('fine', r389_sw * (r271_ShoulderFine / r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('ada', r389_ada), new r271_xn$NamedParameterPair$2Lrc9b('adb', r389_adb), new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r387_height - r389_ada)));
                    r389_currentGlyph.include(r271_FlipAround(r387_df.middle, r387_height / 2));
                    r389_currentGlyph.include(r387_bar(r387_df, r387_height - r389_adb, r387_mask, r389_sw));
                    return void 0;
                };
            };
            r350_exports.SeriflessBar = r350_SeriflessBar = function (r402_df, r402_height, r402_mask, r402_sw) {
                var _r402_t0, _r402_t1;
                return function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    r404_currentGlyph.setBaseAnchor('trailing', r402_df.rightSB, 0);
                    r404_currentGlyph.include(r271_difference(r271_VBar.r(r402_df.rightSB, 0, r402_height, r402_sw), r402_mask(r402_df, r402_height, r402_sw)));
                    return void 0;
                };
            };
            r350_exports.SerifedBar = r350_SerifedBar = function (r408_df, r408_height, r408_mask, r408_sw) {
                var _r408_t0, _r408_t1;
                return function () {
                    var _r410_t1;
                    var _r410_t0 = this;
                    var r410_currentGlyph = _r410_t0;
                    r410_currentGlyph.include(r350_SeriflessBar(r408_df, r408_height, r408_mask, r408_sw));
                    r410_currentGlyph.include(r271_SerifFrame.fromDf(r408_df, r408_height, 0, new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r408_sw)).rb.outer);
                    return void 0;
                };
            };
            r350_exports.TailedBar = r350_TailedBar = function (r415_df, r415_height, r415_mask, r415_sw) {
                var _r415_t0, _r415_t1;
                return function () {
                    var _r417_t1;
                    var _r417_t0 = this;
                    var r417_currentGlyph = _r417_t0;
                    r417_currentGlyph.setBaseAnchor('trailing', r415_df.rightSB + r271_SideJut, 0);
                    r417_currentGlyph.include(r271_difference(r271_RightwardTailedBar(r415_df.rightSB, 0, r415_height, r415_sw), r415_mask(r415_df, r415_height, r415_sw)));
                    return void 0;
                };
            };
            r350_SeriflessBar.inv = r350_SeriflessBar;
            r350_SerifedBar.inv = function (r420_df, r420_height, r420_mask, r420_sw) {
                var _r420_t0, _r420_t1;
                return function () {
                    var _r422_t1;
                    var _r422_t0 = this;
                    var r422_currentGlyph = _r422_t0;
                    r422_currentGlyph.include(r350_SeriflessBar(r420_df, r420_height, r420_mask, r420_sw));
                    r422_currentGlyph.include(r271_SerifFrame.fromDf(r420_df, r420_height, 0, new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r420_sw)).rt.outer);
                    return void 0;
                };
            };
            r350_TailedBar.inv = function (r426_df, r426_height, r426_mask, r426_sw) {
                var _r426_t0, _r426_t1;
                return function () {
                    var _r428_t1;
                    var _r428_t0 = this;
                    var r428_currentGlyph = _r428_t0;
                    r428_currentGlyph.setBaseAnchor('trailing', r426_df.rightSB + r271_SideJut, 0);
                    r428_currentGlyph.include(r271_difference(r271_InvRightwardTailedBar(r426_df.rightSB, 0, r426_height, r426_sw), r426_mask(r426_df, r426_height, r426_sw)));
                    return void 0;
                };
            };
            r350_exports.ScriptCut = r350_ScriptCut = function (r432_df, r432_y, r432_sw) {
                var _r432_t0, _r432_t1;
                return r271_xn$spirooutline$1aao(r271_corner(r432_df.rightSB, r432_y), r271_corner(r432_df.rightSB - r271_HSwToV(r432_sw), r432_y), r271_corner(r432_df.rightSB - r271_HSwToV(r432_sw), r432_y - r432_sw / 2));
            };
            r350_exports.InvScriptCut = r350_InvScriptCut = function (r434_df, r434_y, r434_sw) {
                var _r434_t0, _r434_t1;
                return r271_xn$spirooutline$1aao(r271_corner(r434_df.rightSB, 0), r271_corner(r434_df.rightSB - r271_HSwToV(r434_sw), 0), r271_corner(r434_df.rightSB - r271_HSwToV(r434_sw), 0 + r434_sw / 2));
            };
            return r350_exports;
        }();
        var r271_SingleStoreyConfig = r1_SuffixCfg.weave({
            'singleStorey': r271_SingleStorey.FullBarBody,
            'singleStoreyEarlessCorner': r271_SingleStorey.EarlessCornerBody,
            'singleStoreyEarlessRounded': r271_SingleStorey.EarlessRoundedBody
        }, {
            'serifless': r271_SingleStorey.SeriflessBar,
            'serifed': r271_SingleStorey.SerifedBar,
            'tailed': r271_SingleStorey.TailedBar
        });
        var _r271_t15 = Object.entries(r271_SingleStoreyConfig)[Symbol.iterator]();
        var _r271_t16 = void 0;
        while (!(_r271_t16 = _r271_t15.next()).done) {
            _r271_t17 = _r271_t16.value;
            r271_suffix = _r271_t17[0];
            r271_body = _r271_t17[1][0];
            r271_bar = _r271_t17[1][1];
            _r271_t17[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('a.' + r271_suffix, null, function () {
                    var _r440_t1;
                    var _r440_t0 = this;
                    var r440_currentGlyph = _r440_t0;
                    r440_currentGlyph.include(r271_MarkSet.e());
                    r440_currentGlyph.include(r271_body(r271_DivFrame(1), r271_XH, r271_bar, r271_xn$noshape$3cah));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('largescripta.' + r271_suffix, null, function () {
                    var _r445_t1;
                    var _r445_t0 = this;
                    var r445_currentGlyph = _r445_t0;
                    r445_currentGlyph.include(r271_MarkSet.capital());
                    r445_currentGlyph.include(r271_body(r271_DivFrame(1), r271_CAP, r271_bar, r271_SingleStorey.ScriptCut));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('scripta.' + r271_suffix, null, function () {
                    var _r450_t1;
                    var _r450_t0 = this;
                    var r450_currentGlyph = _r450_t0;
                    r450_currentGlyph.include(r271_MarkSet.e());
                    r450_currentGlyph.include(r271_body(r271_DivFrame(1), r271_XH, r271_bar, r271_SingleStorey.ScriptCut));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('invscripta.' + r271_suffix, null, function () {
                    var _r455_t1;
                    var _r455_t0 = this;
                    var r455_currentGlyph = _r455_t0;
                    r455_currentGlyph.include(r271_MarkSet.e());
                    r455_currentGlyph.include(r271_body(r271_DivFrame(1), r271_XH, r271_bar.inv, r271_SingleStorey.InvScriptCut));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('a', 'a');
        r271_xn$linkreducedvariant$5sIl8('a/sansSerif', 'a', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('a/rtailBase', 'a');
        r271_xn$linkreducedvariant$5sIl8('a/turnABase', 'a');
        r271_alias('cyrl/a', 1072, 'a');
        r271_turned('turna', 592, 'a/turnABase', r271_Middle, r271_XH / 2);
        r271_xn$derivecomposites$7Hrq('artail', 7567, 'a/rtailBase', r271_RetroflexHook.rSideJut(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke)));
        r271_xn$selectvariant$7Hrq('grek/alpha', 945, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'a'));
        r271_xn$linkreducedvariant$5sIl8('grek/alpha/sansSerif', 'grek/alpha', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'a'));
        r271_xn$selectvariant$7Hrq('scripta', 593);
        r271_xn$selectvariant$7Hrq('largescripta', 11373, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'scripta'));
        r271_xn$selectvariant$7Hrq('invscripta', 43876, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'scripta'));
        r271_turned('turnlargescripta', 11376, 'largescripta', r271_Middle, r271_CAP / 2);
        r271_turned('turnscripta', 594, 'scripta', r271_Middle, r271_XH / 2);
        r271_xn$derivecomposites$7Hrq('alphaRetroflexHook', 7568, 'scripta.singleStoreySerifless', r271_RetroflexHook.rSideJut(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke)));
        r271_CreateAccentedComposition('aDieresis', 228, 'a', 'dieresisAbove');
        r271_CreateAccentedComposition('aSbRsbUnderlineBelow', null, 'a', 'sbRsbUnderlineBelow');
        r271_CreateAccentedComposition('aRightHalfRingTR', 7834, 'a', 'rightHalfCircleTR');
        return r271_CreateOgonekComposition('aOgonek', 261, 'a');
    });
    return void 0;
});
