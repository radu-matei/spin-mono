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
var r1_LowerYDotAtBelow = _r1_t9.LowerYDotAtBelow;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_OgonekTrY = _r1_t9.OgonekTrY;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-Y', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_straightBar, r271_bottomShape, r271_slabKind, r271_hookShape, r271_DrawAt, r271_kdr, _r271_t13, _r271_t16, _r271_t19, _r271_t21, _r271_t22, _r271_t23, _r271_tag24, _r271_t25, _r271_tag26, _r271_t27, _r271_tag28, _r271_t29, _r271_tag30;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_Metrics = _r271_t0.Metrics;
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
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
        var r271_Italify = _r271_t1.Italify;
        var r271_Scale = _r271_t1.Scale;
        var r271_Translate = _r271_t1.Translate;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_SHook = _r271_t1.SHook;
        var r271_TailX = _r271_t1.TailX;
        var r271_TailY = _r271_t1.TailY;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_AccentStackOffset = _r271_t1.AccentStackOffset;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_DotRadius = _r271_t1.DotRadius;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_important = _r271_t2.important;
        var r271_alsoThruThem = _r271_t2.alsoThruThem;
        var r271_quadControls = _r271_t2.quadControls;
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
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_FlatSlashShape = _r271_t4.FlatSlashShape;
        var r271_hookend = _r271_t4.hookend;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var r271_DotVariants = _r271_t4.DotVariants;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markExtend = _r271_t6.markExtend;
        var r271_markStroke = _r271_t6.markStroke;
        var r271_markStress = _r271_t6.markStress;
        var r271_markFine = _r271_t6.markFine;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r271_aboveMarkTop = _r271_t7.aboveMarkTop;
        var r271_aboveMarkBot = _r271_t7.aboveMarkBot;
        var r271_aboveMarkMid = _r271_t7.aboveMarkMid;
        var r271_aboveMarkStack = _r271_t7.aboveMarkStack;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Below'].resolve();
        var r271_belowMarkStack = _r271_t8.belowMarkStack;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t9.CreateAccentedComposition;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_nShoulder = _r271_t10.nShoulder;
        var r271_FlatHookDepth = _r271_t10.FlatHookDepth;
        var r271_SerifFrame = _r271_t10.SerifFrame;
        var r271_BeltOverlay = _r271_t10.BeltOverlay;
        var r271_TopHook = _r271_t10.TopHook;
        var r271_xn$SLABNONE$5sIl = [
            false,
            false,
            false
        ];
        var r271_xn$SLABAUTO$5sIl = [
            r271_SLAB,
            r271_SLAB,
            false
        ];
        var r271_xn$SLABALL$5sIl = [
            true,
            true,
            false
        ];
        var r271_xn$SLABMOTION$5sIl = [
            false,
            false,
            true
        ];
        var r271_xn$SLABCURSIVEMOTION$5sIl8 = [
            true,
            true,
            true
        ];
        var r271_xn$TSNONE$3cah = 0;
        var r271_xn$TSHOOKTOP$3cah = 1;
        var r271_xn$SHRINKNONE$7Hrq = 0;
        var r271_xn$SHRINKINNER$7Hrq = 1;
        var r271_xn$BSSTRAIGHT$3cah = 0;
        var r271_xn$BSTURN$3cah = 1;
        var r271_xn$BSLOOP$3cah = 2;
        var r271_GenNonCursiveShape = function (r279_straightBar, r279_bottomShape, r279_slabKind) {
            var _r279_t0, _r279_t1, _r279_t2, _r279_tag3;
            return function () {
                var r282_SmallYShape, r282_SmallYHookTopShape, r282_SmallLambdaShape, r282_SmallLambdaShapeFromHookTop;
                var r282_exports = {};
                var _r282_t0 = r279_slabKind;
                var r282_doSlabTop = _r282_t0[0];
                var r282_doSlabBottom = _r282_t0[1];
                var r282_doSlabMotion = _r282_t0[2];
                var r282_useStraightBottom = r279_straightBar && !r279_bottomShape;
                var r282_slabCurly = r282_doSlabTop && !r279_straightBar;
                var r282_slabCurlyNoTurnT = r282_doSlabTop && !r279_straightBar && !r279_bottomShape;
                var r282_slabCurlyNoTurnB = r282_doSlabBottom && !r279_straightBar && !r279_bottomShape;
                var r282_bottomIsNotVertical = r282_doSlabBottom || r282_useStraightBottom || r279_bottomShape;
                var r282_yBottomJut = r271_Jut * 1.25;
                var r282_slabysize = r282_yBottomJut * (r271_Width / r271_UPM) + r271_Stroke;
                var r282_CalcDS = function (r289_top, r289_bottom) {
                    var _r289_t0, _r289_t1;
                    var r289_pds = 0.1;
                    var r289_pds2 = 0.01;
                    var r289_slabyvx = 0.625;
                    var r289_ds0 = (r289_top - r289_bottom) * r289_pds;
                    var r289_ds20 = (r289_top - r289_bottom) * r289_pds2;
                    var r289_ds = r282_slabCurly ? Math.max(r271_AdviceStroke2(3, 6, r289_top - r289_bottom), r289_ds0) : r289_ds0;
                    var r289_ds2 = r282_slabCurlyNoTurnB ? r289_ds : r289_ds20 + (r282_bottomIsNotVertical ? r282_slabysize * r289_slabyvx : 0);
                    return [
                        r289_ds,
                        r289_ds2
                    ];
                };
                var r282_Metrics = function (r290_ts, r290_kShrink) {
                    var _r290_t0, _r290_t1, _r290_t2, _r290_tag3;
                    return function () {
                        var r293_px1, r293_py1, r293_px2, r293_py2VertBot, r293_py2, r293_dpy1, r293_dpy2, r293_yrstrokel, r293_yrstroker, r293_yshrink, r293_diagCor, r293_yJoinProportion, r293_yJoinHeight, r293_createSplitMask;
                        var r293_exports = {};
                        var r293_pxHookTopOffset = r271_StrokeWidthBlend(0.5 * r271_TailX, 0.375 * r271_TailX) / (r271_RightSB - r271_SB);
                        r293_exports.px1 = r293_px1 = 0.84 - (r290_ts === r271_xn$TSHOOKTOP$3cah ? r293_pxHookTopOffset : 0);
                        r293_exports.py1 = r293_py1 = r271_StrokeWidthBlend(0.8, 0.76) * (r282_slabCurly ? r271_StrokeWidthBlend(1, 0.9) : 1);
                        r293_exports.px2 = r293_px2 = r282_slabCurlyNoTurnB ? r293_px1 : 0.95;
                        r293_exports.py2VertBot = r293_py2VertBot = 0.88 * (r282_slabCurly ? r271_StrokeWidthBlend(1, 0.9) : 1);
                        r293_exports.py2 = r293_py2 = r282_slabCurlyNoTurnB ? r293_py1 : r282_bottomIsNotVertical ? 0.97 : r293_py2VertBot;
                        r293_exports.dpy1 = r293_dpy1 = (1 - r1_linreg(1 - r293_px2, 1 - r293_py2, r293_px1, r293_py1, 1)) / (1 - r293_py1);
                        r293_exports.dpy2 = r293_dpy2 = (1 - r1_linreg(1 - r293_px1, 1 - r293_py1, r293_px2, r293_py2, 1)) / (1 - r293_py2);
                        var r293_yrstrokel0 = r271_Middle - r271_Width * 0.1;
                        r293_exports.yrstrokel = r293_yrstrokel = r271_Middle - r271_Width * 0.1 + r271_HSwToV(r271_Stroke) * (r282_bottomIsNotVertical ? 2 / 3 : 1 / 3) * (r282_slabCurly ? r271_StrokeWidthBlend(0.95, 0.97) : 1);
                        r293_exports.yrstroker = r293_yrstroker = r271_Width - r271_SB * (r279_straightBar ? r271_DesignParameters.straightSmallYShapeSbShrink : 1);
                        r293_exports.yshrink = r293_yshrink = r1_mix(1, r271_StrokeWidthBlend(1, 0.85) * (r279_straightBar ? r271_AdviceStroke(3.25) / r271_Stroke : 1), r290_kShrink);
                        r293_exports.diagCor = r293_diagCor = function (r311_dy) {
                            var _r311_t0, _r311_t1;
                            return r271_DiagCor(r311_dy, r293_yrstroker - r293_yrstrokel, 0, 0);
                        };
                        r293_exports.yJoinProportion = r293_yJoinProportion = function (r313_x) {
                            var _r313_t0, _r313_t1;
                            return r1_linreg(1 - r293_px2, 1 - r293_py2, r279_straightBar && r290_ts !== r271_xn$TSHOOKTOP$3cah ? 1 : r293_px1, r279_straightBar && r290_ts !== r271_xn$TSHOOKTOP$3cah ? 1 : r293_py1, (r313_x - r293_yrstrokel) / (r293_yrstroker - r293_yrstrokel));
                        };
                        r293_exports.yJoinHeight = r293_yJoinHeight = function (r315_top, r315_bottom) {
                            var _r315_t1, _r315_t2;
                            var _r315_t0 = r282_CalcDS(r315_top, r315_bottom);
                            var r315_ds = _r315_t0[0];
                            var r315_ds2 = _r315_t0[1];
                            return r1_mix(r315_bottom + r315_ds2, r315_top - r315_ds, r293_yJoinProportion(r271_Middle));
                        };
                        r293_exports.createSplitMask = r293_createSplitMask = function (r317_top, r317_bottom, r317_dir, r317_elev) {
                            var _r317_t1, _r317_t2;
                            var _r317_t0 = r282_CalcDS(r317_top, r317_bottom);
                            var r317_ds = _r317_t0[0];
                            var r317_ds2 = _r317_t0[1];
                            var r317_jp0 = r293_yJoinProportion(r271_Width / 2 - r271_Width / 2 * r317_dir);
                            var r317_jp1 = r293_yJoinProportion(r271_Width / 2 + r271_Width / 2 * r317_dir);
                            var r317_hs = 0.75 * r271_Stroke;
                            var r317_yLeft = r1_mix(r317_bottom + r317_ds2, r317_top - r317_ds, r317_jp1) + r317_hs - r1_fallback(r317_elev, 0);
                            var r317_yRight = r1_mix(r317_bottom + r317_ds2, r317_top - r317_ds, r317_jp0) + r317_hs - r1_fallback(r317_elev, 0);
                            var r317_yMin = Math.min(r317_bottom, r317_yLeft, r317_yRight);
                            return r271_xn$spirooutline$1aao(r271_corner(r271_Width, r317_yMin), r271_corner(r271_Width, r317_yRight), r271_corner(0, r317_yLeft), r271_corner(0, r317_yMin));
                        };
                        return r293_exports;
                    }();
                };
                var r282_RightHalf = function (r318_ts, r318_kShrink) {
                    var _r318_t0, _r318_t1, _r318_t2, _r318_tag3;
                    return function () {
                        var r321_topKnots, r321_baseKnots, r321_baseSerif, r321_ogonekAttach, r321_splitMask;
                        var r321_exports = {};
                        var r321_me = r282_Metrics(r318_ts, r318_kShrink);
                        r321_exports.topKnots = r321_topKnots = function (r329_top, r329_bottom) {
                            var _r329_t1, _r329_t2;
                            var _r329_t0 = r282_CalcDS(r329_top, r329_bottom);
                            var r329_ds = _r329_t0[0];
                            return r318_ts === r271_xn$TSHOOKTOP$3cah ? [
                                r271_straight.left.start(r1_mix(r321_me.yrstrokel, r321_me.yrstroker, r321_me.px1) - r271_HalfStroke + 0.875 * r271_TailX, r329_top - r271_Stroke - r271_O, r271_widths.rhs()),
                                r271_alsoThruThem([
                                    [
                                        r271_StrokeWidthBlend(0.58, 0.65),
                                        0.2
                                    ],
                                    [
                                        r271_StrokeWidthBlend(0.78, 0.85),
                                        0.5
                                    ]
                                ], r271_important)
                            ] : r279_straightBar ? [r271_flat(r321_me.yrstroker, r329_top, r271_widths.rhs.heading(r321_me.diagCor(r329_top - r329_bottom) * r271_Stroke, r271_Downward))] : true ? [
                                r271_flat(r321_me.yrstroker, r329_top, r271_widths.rhs.heading(r271_Stroke, r271_Downward)),
                                r271_curl(r321_me.yrstroker, r329_top - r329_ds, r271_heading(r271_Downward)),
                                r271_quadControls(0, r321_me.dpy1, 16)
                            ] : void 0;
                        };
                        r321_exports.baseKnots = r321_baseKnots = function (r331_top, r331_bottom) {
                            var r331_joinHeight1, r331_k, r331_joinHeight3, r331_deltaX, r331_fine, r331_xLoopLeft, r331_xCenter, _r331_t1, _r331_t2;
                            var _r331_t0 = r282_CalcDS(r331_top, r331_bottom);
                            var r331_ds = _r331_t0[0];
                            var r331_ds2 = _r331_t0[1];
                            var r331_coJoinX = r1_mix(r321_me.yrstrokel, r321_me.yrstroker, r321_me.px1);
                            var r331_coJoinY = r1_mix(r331_bottom + r331_ds2, r331_top - r331_ds, r321_me.py1);
                            var r331_joinX = r1_mix(r321_me.yrstrokel, r321_me.yrstroker, 1 - r321_me.px2);
                            var r331_joinY = r1_mix(r331_bottom + r331_ds2, r331_top - r331_ds, 1 - r321_me.py2);
                            var r331_ConnectZ = function (r332_shrink) {
                                var _r332_t0, _r332_t1;
                                return r271_curl(r331_joinX, r331_joinY, r271_widths.rhs(r271_Stroke * r332_shrink));
                            };
                            return [
                                r279_straightBar && r318_ts !== r271_xn$TSHOOKTOP$3cah ? [] : [r271_flat(r331_coJoinX, r331_coJoinY)],
                                r282_useStraightBottom ? [
                                    r331_ConnectZ(r321_me.yshrink),
                                    r271_curl(r1_mix(r321_me.yrstroker, r331_joinX, (r331_top - r331_bottom) / (r331_top - r331_joinY)), r331_bottom, r271_widths.rhs.heading(r321_me.diagCor(r331_top - r331_bottom) * r271_Stroke, r271_Downward))
                                ] : r279_bottomShape === r271_xn$BSLOOP$3cah ? (r331_joinHeight1 = r321_me.yJoinHeight(r331_top, r331_bottom), r331_k = 1 / Math.sin(Math.atan2(r331_joinX - r271_Middle, r331_joinY - r331_joinHeight1)) - 0.25, r331_joinHeight3 = Math.abs(r331_k) * r271_Stroke + r331_joinHeight1, r331_deltaX = Math.max(r282_yBottomJut, r271_HSwToV(1.2 * r271_Stroke)), r331_fine = r271_AdviceStroke(3), r331_xLoopLeft = Math.max(r271_SB * -0.25, r1_mix(r331_joinX, r321_me.yrstrokel - r331_deltaX, 2)), r331_xCenter = r1_mix(r331_xLoopLeft, r331_joinX, 0.5), [
                                    r331_ConnectZ(r321_me.yshrink),
                                    r271_g4.left.mid(Math.min(r321_me.yrstrokel - r331_deltaX, r331_xCenter) + r271_CorrectionOMidS, r331_bottom, r271_widths.rhs()),
                                    r271_archv(),
                                    r271_g4.up.mid(r331_xLoopLeft, r1_mix(r331_bottom, r331_joinHeight3, 0.5), r271_widths.rhs.heading(r331_fine, r271_Upward)),
                                    r271_arcvh(),
                                    r271_flat(r331_xCenter, r331_joinHeight3, r271_heading(r271_Rightward)),
                                    r271_curl(r271_Middle, r331_joinHeight3, r271_heading(r271_Rightward))
                                ]) : r279_bottomShape === r271_xn$BSTURN$3cah ? [
                                    r331_ConnectZ(r321_me.yshrink),
                                    r271_flat(r321_me.yrstrokel - r282_slabysize, r331_bottom, r271_widths.rhs()),
                                    r271_curl(Math.min(r321_me.yrstrokel - r282_slabysize - 0.1, r321_me.yrstrokel - r271_Stroke - r282_yBottomJut), r331_bottom)
                                ] : true ? [
                                    r331_ConnectZ(1),
                                    r271_quadControls(1, 1 - r321_me.dpy2, 16),
                                    r271_flat(r321_me.yrstrokel, r331_bottom + r331_ds2, r271_widths.heading(0, r271_Stroke, r271_Downward)),
                                    r271_curl(r321_me.yrstrokel, r331_bottom, r271_widths.heading(0, r271_Stroke, r271_Downward))
                                ] : void 0
                            ];
                        };
                        r321_exports.baseSerif = r321_baseSerif = function (r334_top, r334_bottom) {
                            var _r334_t0, _r334_t1;
                            return function () {
                                var r336_xBaseKnot, _r336_t2;
                                var _r336_t1 = this;
                                var r336_currentGlyph = _r336_t1;
                                var _r336_t0 = r282_CalcDS(r334_top, r334_bottom);
                                var r336_ds = _r336_t0[0];
                                var r336_ds2 = _r336_t0[1];
                                var r336_joinX = r1_mix(r321_me.yrstrokel, r321_me.yrstroker, 1 - r321_me.px2);
                                var r336_joinY = r1_mix(r334_bottom + r336_ds2, r334_top - r336_ds, 1 - r321_me.py2);
                                if (r279_bottomShape)
                                    return void 0;
                                if (r282_useStraightBottom) {
                                    r336_xBaseKnot = r1_mix(r321_me.yrstroker, r336_joinX, (r334_top - r334_bottom) / (r334_top - r336_joinY));
                                    r336_currentGlyph.include(r271_HSerif.lb(r336_xBaseKnot - r271_HSwToV(r271_HalfStroke), r334_bottom, r282_yBottomJut));
                                } else
                                    r336_currentGlyph.include(r271_HSerif.lb(r321_me.yrstrokel - r271_HSwToV(r271_HalfStroke), r334_bottom, r282_yBottomJut));
                                return void 0;
                            };
                        };
                        r321_exports.ogonekAttach = r321_ogonekAttach = function (r340_top, r340_bottom) {
                            var _r340_t0, _r340_t1;
                            return function () {
                                var _r342_t2;
                                var _r342_t1 = this;
                                var r342_currentGlyph = _r342_t1;
                                var _r342_t0 = r282_CalcDS(r340_top, r340_bottom);
                                var r342_ds = _r342_t0[0];
                                var r342_ds2 = _r342_t0[1];
                                var r342_coJoinX = r279_straightBar && r318_ts !== r271_xn$TSHOOKTOP$3cah ? r321_me.yrstroker : r1_mix(r321_me.yrstrokel, r321_me.yrstroker, r321_me.px1);
                                var r342_coJoinY = r279_straightBar && r318_ts !== r271_xn$TSHOOKTOP$3cah ? r340_top : r1_mix(r340_bottom + r342_ds2, r340_top - r342_ds, r321_me.py1);
                                var r342_joinX = r1_mix(r321_me.yrstrokel, r321_me.yrstroker, 1 - r321_me.px2);
                                var r342_joinY = r1_mix(r340_bottom + r342_ds2, r340_top - r342_ds, 1 - r321_me.py2);
                                var r342_anchorX = r1_mix(r342_coJoinX, r342_joinX, (0 - r342_coJoinY) / (r342_joinY - r342_coJoinY));
                                r342_currentGlyph.setBaseAnchor('trailing', r342_anchorX, 0);
                                r1_OgonekTrY.set(r342_currentGlyph);
                                return void 0;
                            };
                        };
                        r321_exports.splitMask = r321_splitMask = function (r345_top, r345_bottom, r345_elev) {
                            var _r345_t0, _r345_t1;
                            return r321_me.createSplitMask(r345_top, r345_bottom, -1, r345_elev);
                        };
                        return r321_exports;
                    }();
                };
                var r282_LeftHalf = function (r346_ts, r346_kShrink) {
                    var _r346_t0, _r346_t1, _r346_t2, _r346_tag3;
                    return function () {
                        var r349_topKnots, r349_joinKnots, r349_splitMask;
                        var r349_exports = {};
                        var r349_me = r282_Metrics(r346_ts, r346_kShrink);
                        r349_exports.topKnots = r349_topKnots = function (r357_top, r357_bottom) {
                            var _r357_t1, _r357_t2, _r357_t3;
                            var _r357_t0 = r282_CalcDS(r357_top, r357_bottom);
                            var r357_ds = _r357_t0[0];
                            if (r279_straightBar)
                                return [r271_flat(r271_Width - r349_me.yrstroker, r357_top, r271_widths.lhs.heading(r349_me.diagCor(r357_top - r357_bottom) * r271_Stroke, r271_Downward))];
                            else
                                return [
                                    r271_flat(r271_Width - r349_me.yrstroker, r357_top, r271_widths.lhs.heading(r271_Stroke, r271_Downward)),
                                    r271_curl(r271_Width - r349_me.yrstroker, r357_top - r357_ds, r271_heading(r271_Downward)),
                                    r271_quadControls(0, r349_me.dpy1, 16)
                                ];
                        };
                        r349_exports.joinKnots = r349_joinKnots = function (r359_top, r359_bottom) {
                            var _r359_t1, _r359_t2;
                            var _r359_t0 = r282_CalcDS(r359_top, r359_bottom);
                            var r359_ds = _r359_t0[0];
                            var r359_ds2 = _r359_t0[1];
                            return [
                                r279_straightBar ? [] : [r271_flat(r1_mix(r271_Width - r349_me.yrstrokel, r271_Width - r349_me.yrstroker, r349_me.px1), r1_mix(r359_bottom + r359_ds2, r359_top - r359_ds, r349_me.py1))],
                                r271_curl(r271_Middle, r349_me.yJoinHeight(r359_top, r359_bottom), r271_widths.lhs(r271_Stroke * r349_me.yshrink))
                            ];
                        };
                        r349_exports.splitMask = r349_splitMask = function (r361_top, r361_bottom, r361_elev) {
                            var _r361_t0, _r361_t1;
                            return r349_me.createSplitMask(r361_top, r361_bottom, +1, r361_elev);
                        };
                        return r349_exports;
                    }();
                };
                r282_exports.SmallYShape = r282_SmallYShape = function (r363_top, r363_bottom) {
                    var _r363_t0, _r363_t1;
                    return function () {
                        var _r365_leti0, _r365_t2, _r365_t3, _r365_t4, _r365_t5, _r365_t6, _r365_tag7, _r365_t8;
                        var _r365_t1 = this;
                        var r365_currentGlyph = _r365_t1;
                        var r365_right = r282_RightHalf(r271_xn$TSNONE$3cah, r271_xn$SHRINKNONE$7Hrq);
                        var r365_rightSh = r282_RightHalf(r271_xn$TSNONE$3cah, r271_xn$SHRINKINNER$7Hrq);
                        var r365_left = r282_LeftHalf(r271_xn$TSNONE$3cah, r271_xn$SHRINKINNER$7Hrq);
                        r365_currentGlyph.include(r365_right.ogonekAttach(r363_top, r363_bottom));
                        r365_currentGlyph.include(r271_union(r271_intersection(r271_dispiro(r365_right.topKnots(r363_top, r363_bottom), r365_right.baseKnots(r363_top, r363_bottom)), r365_left.splitMask(r363_top, r363_bottom)), r271_difference(r271_dispiro(r365_right.topKnots(r363_top, r363_bottom), r365_rightSh.baseKnots(r363_top, r363_bottom)), r365_left.splitMask(r363_top, r363_bottom)), r271_difference(r271_dispiro(r365_left.topKnots(r363_top, r363_bottom), r365_left.joinKnots(r363_top, r363_bottom)), r365_right.splitMask(r363_top, r363_bottom), r271_Rect(r363_bottom + r271_HalfStroke, r363_bottom - r363_top, 0, r271_Width))));
                        if (r282_doSlabTop) {
                            _r365_t3 = r365_currentGlyph;
                            _r365_t4 = _r365_t3.include;
                            _r365_t5 = r271_SerifFrame.fromDf(r271_DivFrame(1), r363_top, r363_bottom);
                            _r365_t8 = function (_r365_leti0) {
                                var r369_sf = _r365_leti0;
                                return function () {
                                    var _r371_t1;
                                    var _r371_t0 = this;
                                    var r371_currentGlyph = _r371_t0;
                                    r371_currentGlyph.include(r369_sf.lt.full, true, true);
                                    r371_currentGlyph.include(r369_sf.rt.full);
                                    return void 0;
                                };
                            }(_r365_t5);
                            _r365_t4.call(_r365_t3, _r365_t8);
                        }
                        if (r282_doSlabBottom)
                            r365_currentGlyph.include(r365_right.baseSerif(r363_top, r363_bottom));
                        if (r282_doSlabMotion)
                            r365_currentGlyph.include(r271_HSerif.lt(r271_SB, r363_top, r271_SideJut));
                        return void 0;
                    };
                };
                r282_exports.SmallYHookTopShape = r282_SmallYHookTopShape = function (r377_top, r377_bottom) {
                    var _r377_t0, _r377_t1;
                    return function () {
                        var _r379_leti0, _r379_t2, _r379_t3, _r379_t4, _r379_t5, _r379_t6, _r379_tag7, _r379_t8;
                        var _r379_t1 = this;
                        var r379_currentGlyph = _r379_t1;
                        var r379_right = r282_RightHalf(r271_xn$TSHOOKTOP$3cah, r271_xn$SHRINKNONE$7Hrq);
                        var r379_rightSh = r282_RightHalf(r271_xn$TSHOOKTOP$3cah, r271_xn$SHRINKINNER$7Hrq);
                        var r379_left = r282_LeftHalf(r271_xn$TSNONE$3cah, r271_xn$SHRINKINNER$7Hrq);
                        r379_currentGlyph.include(r379_right.ogonekAttach(r377_top, r377_bottom));
                        r379_currentGlyph.include(r271_union(r271_intersection(r271_dispiro(r379_right.topKnots(r377_top, r377_bottom), r379_right.baseKnots(r377_top, r377_bottom)), r379_left.splitMask(r377_top, r377_bottom)), r271_difference(r271_dispiro(r379_right.topKnots(r377_top, r377_bottom), r379_rightSh.baseKnots(r377_top, r377_bottom)), r379_left.splitMask(r377_top, r377_bottom)), r271_difference(r271_dispiro(r379_left.topKnots(r377_top, r377_bottom), r379_left.joinKnots(r377_top, r377_bottom)), r379_right.splitMask(r377_top, r377_bottom), r271_Rect(r377_bottom + r271_HalfStroke, r377_bottom - r377_top, 0, r271_Width))));
                        if (r282_doSlabTop) {
                            _r379_t3 = r379_currentGlyph;
                            _r379_t4 = _r379_t3.include;
                            _r379_t5 = r271_SerifFrame.fromDf(r271_DivFrame(1), r377_top, r377_bottom);
                            _r379_t8 = function (_r379_leti0) {
                                var r383_sf = _r379_leti0;
                                return r383_sf.lt.full;
                            }(_r379_t5);
                            _r379_t4.call(_r379_t3, _r379_t8);
                        }
                        if (r282_doSlabBottom)
                            r379_currentGlyph.include(r379_right.baseSerif(r377_top, r377_bottom));
                        if (r282_doSlabMotion)
                            r379_currentGlyph.include(r271_HSerif.lt(r271_SB, r377_top, r271_SideJut));
                        return void 0;
                    };
                };
                r282_exports.SmallLambdaShape = r282_SmallLambdaShape = function (r387_top, r387_bottom) {
                    var _r387_t0, _r387_t1;
                    return r271_union(function () {
                        var _r389_t1;
                        var _r389_t0 = this;
                        var r389_currentGlyph = _r389_t0;
                        r389_currentGlyph.gizmo = r271_Italify(-r271_para.slopeAngle);
                        r389_currentGlyph.include(r282_SmallYShape(r387_top, r387_bottom));
                        r389_currentGlyph.gizmo = r271_Italify(+r271_para.slopeAngle);
                        r389_currentGlyph.include(r271_Translate(0, -r1_mix(r387_bottom, r387_top, 0.5)));
                        r389_currentGlyph.include(r271_Scale(1, -1));
                        r389_currentGlyph.include(r271_Translate(0, +r1_mix(r387_bottom, r387_top, 0.5)));
                        return void 0;
                    });
                };
                r282_exports.SmallLambdaShapeFromHookTop = r282_SmallLambdaShapeFromHookTop = function (r395_top, r395_bottom) {
                    var _r395_t0, _r395_t1;
                    return r271_union(function () {
                        var _r397_t1;
                        var _r397_t0 = this;
                        var r397_currentGlyph = _r397_t0;
                        r397_currentGlyph.gizmo = r271_Italify(-r271_para.slopeAngle);
                        r397_currentGlyph.include(r282_SmallYHookTopShape(r395_top, r395_bottom));
                        r397_currentGlyph.gizmo = r271_Italify(+r271_para.slopeAngle);
                        r397_currentGlyph.include(r271_Translate(0, -r1_mix(r395_bottom, r395_top, 0.5)));
                        r397_currentGlyph.include(r271_Scale(1, -1));
                        r397_currentGlyph.include(r271_Translate(0, +r1_mix(r395_bottom, r395_top, 0.5)));
                        return void 0;
                    });
                };
                return r282_exports;
            }();
        };
        var r271_NonCursiveConfig = r1_SuffixCfg.weave({
            'straight': true,
            'curly': false
        }, {
            '': r271_xn$BSSTRAIGHT$3cah,
            'turn': r271_xn$BSTURN$3cah,
            'loop': r271_xn$BSLOOP$3cah
        }, {
            'serifless': r271_xn$SLABNONE$5sIl,
            'serifed': r271_xn$SLABALL$5sIl,
            'motionSerifed': r271_xn$SLABMOTION$5sIl
        });
        var _r271_t11 = Object.entries(r271_NonCursiveConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_straightBar = _r271_t13[1][0];
            r271_bottomShape = _r271_t13[1][1];
            r271_slabKind = _r271_t13[1][2];
            _r271_t13[1];
            (function () {
                var r404_Shapes = r271_GenNonCursiveShape(r271_straightBar, r271_bottomShape, r271_slabKind);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('y.' + r271_suffix, null, function () {
                    var _r407_t1;
                    var _r407_t0 = this;
                    var r407_currentGlyph = _r407_t0;
                    r407_currentGlyph.include(r271_MarkSet.p());
                    r407_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    r407_currentGlyph.setBaseAnchor('yBelowDot', r271_RightSB - 0.5 * r271_DotRadius, r271_Descender + r271_AccentStackOffset + r271_DotRadius);
                    r407_currentGlyph.include(r404_Shapes.SmallYShape(r271_XH, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/lambda.' + r271_suffix, null, function () {
                    var _r414_t1;
                    var _r414_t0 = this;
                    var r414_currentGlyph = _r414_t0;
                    r414_currentGlyph.include(r271_MarkSet.b());
                    r414_currentGlyph.include(r404_Shapes.SmallLambdaShape(r271_Ascender, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/lambdaFHT.' + r271_suffix, null, function () {
                    var _r419_t1;
                    var _r419_t0 = this;
                    var r419_currentGlyph = _r419_t0;
                    r419_currentGlyph.include(r271_MarkSet.b());
                    r419_currentGlyph.include(r404_Shapes.SmallLambdaShapeFromHookTop(r271_Ascender, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lambdaSlash.' + r271_suffix, null, function () {
                    var _r424_t1;
                    var _r424_t0 = this;
                    var r424_currentGlyph = _r424_t0;
                    r424_currentGlyph.include(r271_MarkSet.b());
                    r424_currentGlyph.include(r271_union(r271_FlatSlashShape(r1_mix(r271_SB, r271_RightSB, 0.45), r1_mix(0, r271_CAP, 0.8), r271_OverlayStroke / 2), r404_Shapes.SmallLambdaShape(r271_Ascender, 0)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('lambdaSlashFHT.' + r271_suffix, null, function () {
                    var _r429_t1;
                    var _r429_t0 = this;
                    var r429_currentGlyph = _r429_t0;
                    r429_currentGlyph.include(r271_MarkSet.b());
                    r429_currentGlyph.include(r271_union(r271_FlatSlashShape(r1_mix(r271_SB, r271_RightSB, 0.45), r1_mix(0, r271_CAP, 0.8), r271_OverlayStroke / 2), r404_Shapes.SmallLambdaShapeFromHookTop(r271_Ascender, 0)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('yHookTop.' + r271_suffix, null, function () {
                    var _r434_t1;
                    var _r434_t0 = this;
                    var r434_currentGlyph = _r434_t0;
                    r434_currentGlyph.include(r271_MarkSet.p());
                    r434_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    r434_currentGlyph.setBaseAnchor('yBelowDot', r271_RightSB - 0.5 * r271_DotRadius, r271_Descender + r271_AccentStackOffset + r271_DotRadius);
                    r434_currentGlyph.include(r404_Shapes.SmallYHookTopShape(r271_XH, r271_Descender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('yCap.' + r271_suffix, null, function () {
                    var _r441_t1;
                    var _r441_t0 = this;
                    var r441_currentGlyph = _r441_t0;
                    r441_currentGlyph.include(r271_MarkSet.capital());
                    r441_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2 - r271_Descender);
                    r441_currentGlyph.include(r404_Shapes.SmallYShape(r271_CAP, 0));
                    return void 0;
                });
            }());
        }
        r271_alias('grek/lambda.tailedTurnSerifless', null, 'grek/lambdaFHT.straightTurnSerifless');
        r271_alias('lambdaSlash.tailedTurnSerifless', null, 'lambdaSlashFHT.straightTurnSerifless');
        r271_alias('grek/lambda.curlyTailedTurnSerifless', null, 'grek/lambdaFHT.curlyTurnSerifless');
        r271_alias('lambdaSlash.curlyTailedTurnSerifless', null, 'lambdaSlashFHT.curlyTurnSerifless');
        var r271_Cursive = function () {
            var r447_Arc, r447_Hook, r447_FlatHook, r447_Serifs;
            var r447_exports = {};
            r447_exports.Arc = r447_Arc = function (r455_top, r455_bottom) {
                var _r455_t0, _r455_t1;
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r458_t1;
                    var _r458_t0 = this;
                    var r458_currentGlyph = _r458_t0;
                    r458_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('top', r455_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r455_bottom), new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
                    r458_currentGlyph.include(r271_FlipAround(r271_Middle, r1_mix(r455_bottom, r455_top, 0.5)));
                    return void 0;
                });
            };
            r447_exports.Hook = r447_Hook = function (r467_y0, r467_bottom) {
                var _r467_t0, _r467_t1;
                return r271_dispiro(r271_widths.rhs(), r271_flat(r271_RightSB, r467_y0, r271_heading(r271_Downward)), r271_curl(r271_RightSB, r467_bottom + r271_SmallArchDepthA), r271_hookend(r467_bottom + r271_O), r271_g4(r271_SB, r467_bottom + r271_SHook));
            };
            r447_exports.FlatHook = r447_FlatHook = function (r469_y0, r469_bottom) {
                var _r469_t0, _r469_t1;
                var r469_hd = r271_FlatHookDepth(r271_DivFrame(1), 9 / 8);
                var r469_xTerminal = Math.min(r271_RightSB - r469_hd.x - 0.1, r1_mix(r271_SB, r271_RightSB, 1 / 5));
                return r271_dispiro(r271_widths.rhs(), r271_flat(r271_RightSB, r469_y0, r271_heading(r271_Downward)), r271_curl(r271_RightSB, r469_bottom + r469_hd.y), r271_arcvh(), r271_flat(r271_RightSB - r469_hd.x, r469_bottom), r271_curl(r469_xTerminal, r469_bottom));
            };
            r447_exports.Serifs = r447_Serifs = function (r471_top, r471_slabType) {
                var _r471_t1, _r471_t2;
                var _r471_t0 = r271_slabKind;
                var r471_doSlabTop = _r471_t0[0];
                var r471_doSlabBottom = _r471_t0[1];
                var r471_doSlabMotion = _r471_t0[2];
                return !r471_doSlabTop ? r271_xn$noshape$3cah() : function () {
                    var _r473_t1;
                    var _r473_t0 = this;
                    var r473_currentGlyph = _r473_t0;
                    var r473_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r471_top, 0);
                    r473_currentGlyph.include(r473_sf.lt.outer);
                    if (!r471_doSlabMotion)
                        r473_currentGlyph.include(r473_sf.rt.inner);
                    return void 0;
                };
            };
            return r447_exports;
        }();
        var r271_CursiveConfig = r1_SuffixCfg.weave({
            'cursive': r271_Cursive.Hook,
            'cursiveFlatHook': r271_Cursive.FlatHook
        }, {
            'serifless': r271_xn$SLABNONE$5sIl,
            'serifed': r271_xn$SLABALL$5sIl,
            'motionSerifed': r271_xn$SLABCURSIVEMOTION$5sIl8
        });
        var _r271_t14 = Object.entries(r271_CursiveConfig)[Symbol.iterator]();
        var _r271_t15 = void 0;
        while (!(_r271_t15 = _r271_t14.next()).done) {
            _r271_t16 = _r271_t15.value;
            r271_suffix = _r271_t16[0];
            r271_hookShape = _r271_t16[1][0];
            r271_slabKind = _r271_t16[1][1];
            _r271_t16[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('y.' + r271_suffix, null, function () {
                    var _r481_t1;
                    var _r481_t0 = this;
                    var r481_currentGlyph = _r481_t0;
                    r481_currentGlyph.include(r271_MarkSet.p());
                    r481_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    r481_currentGlyph.setBaseAnchor('yBelowDot', r271_Middle, r271_Descender);
                    r481_currentGlyph.include(r271_Cursive.Arc(r271_XH, 0));
                    r481_currentGlyph.include(r271_hookShape(r271_XH, r271_Descender));
                    r481_currentGlyph.include(r271_Cursive.Serifs(r271_XH, r271_slabKind));
                    return void 0;
                });
                if (r271_slabKind !== r271_xn$SLABALL$5sIl)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('yHookTop.' + r271_suffix, null, function () {
                        var _r490_t1;
                        var _r490_t0 = this;
                        var r490_currentGlyph = _r490_t0;
                        r490_currentGlyph.include(r271_MarkSet.p());
                        r490_currentGlyph.include(r271_Cursive.Arc(r271_XH, 0));
                        r490_currentGlyph.include(r271_hookShape(r271_XH - r271_TailY - r271_HalfStroke, r271_Descender));
                        r490_currentGlyph.include(r271_TopHook.rBarInner(r271_RightSB, 0, r271_XH));
                        r490_currentGlyph.include(r271_Cursive.Serifs(r271_XH, r271_slabKind));
                        r490_currentGlyph.ejectTagged('serifRT');
                        return void 0;
                    });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('yCap.' + r271_suffix, null, function () {
                    var _r499_t1;
                    var _r499_t0 = this;
                    var r499_currentGlyph = _r499_t0;
                    r499_currentGlyph.include(r271_MarkSet.capital());
                    r499_currentGlyph.include(r271_Cursive.Arc(r271_CAP, r271_CAP - r271_XH));
                    r499_currentGlyph.include(r271_hookShape(r271_CAP, 0));
                    r499_currentGlyph.include(r271_Cursive.Serifs(r271_CAP, r271_slabKind));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('y', 'y');
        r271_xn$selectvariant$7Hrq('y/nonCursive', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'y'));
        r271_xn$linkreducedvariant$5sIl8('y/sansSerif', 'y', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('cyrl/u', 1091, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'y'));
        r271_turned('turny', 654, 'y/nonCursive', r271_Middle, r271_XH / 2, r271_MarkSet.b());
        r271_xn$deriveglyphs$7Hrq('turnyBelt', 122630, 'y/nonCursive', function (r506_src, r506_sel) {
            var _r506_t0, _r506_t1;
            return function () {
                var _r508_t1;
                var _r508_t0 = this;
                var r508_currentGlyph = _r508_t0;
                r508_currentGlyph.include(r271_MarkSet.b());
                r508_currentGlyph.include(r271_xn$referglyph$1aao(r506_src));
                r508_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
                r508_currentGlyph.include(r271_BeltOverlay.at(r271_Middle, r271_XH));
                return void 0;
            };
        });
        var _r271_t17 = Object.entries(r271_DotVariants)[Symbol.iterator]();
        var _r271_t18 = void 0;
        while (!(_r271_t18 = _r271_t17.next()).done) {
            _r271_t19 = _r271_t18.value;
            r271_suffix = _r271_t19[0];
            r271_DrawAt = _r271_t19[1][0];
            r271_kdr = _r271_t19[1][1];
            _r271_t19[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('yDotBelowDot1.' + r271_suffix, null, function () {
                    var _r518_t1;
                    var _r518_t0 = this;
                    var r518_currentGlyph = _r518_t0;
                    r518_currentGlyph.setMarkAnchor('yBelowDot', 0, 0, 0, r271_belowMarkStack);
                    r518_currentGlyph.include(r271_DrawAt(0, -r271_AccentStackOffset, r271_DotRadius * r271_kdr));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('yDotBelowDot1', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r271_CreateAccentedComposition('yDotBelow', 7925, 'y', 'yDotBelowDot1');
        r271_xn$selectvariant$7Hrq('yHookTop', 436);
        r271_xn$selectvariant$7Hrq('cyrl/U', 1059, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'yCap'));
        r271_xn$selectvariant$7Hrq('YLoop', 7934, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'yCap'));
        r271_xn$selectvariant$7Hrq('yLoop', 7935, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'y'));
        r271_xn$selectvariant$7Hrq('grek/lambda', 955);
        r271_xn$selectvariant$7Hrq('lambdaSlash', 411, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'grek/lambda'));
        var _r271_t20 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t20.BBS;
        var r271_BBD = _r271_t20.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/y', 120170, function () {
            var _r529_t1;
            var _r529_t0 = this;
            var r529_currentGlyph = _r529_t0;
            var r529_kDiag = r271_DiagCorDs(r271_XH, (r271_RightSB - r271_SB) / 2, r271_BBD * 0.25);
            r529_currentGlyph.include(r271_MarkSet.p());
            r529_currentGlyph.include(r271_HBar.t(r271_SB, r271_SB + r529_kDiag * r271_BBD, r271_XH, r271_BBS));
            r529_currentGlyph.include(r271_intersection(r271_xn$spirooutline$1aao(r271_corner(r1_mix(r271_RightSB, r271_Middle, -1), r1_mix(r271_XH, 0, -1)), r271_corner(r1_mix(r271_RightSB, r271_Middle, 2), r1_mix(r271_XH, 0, 2)), r271_corner(-r271_Width * 2, r1_mix(r271_XH, 0, 2)), r271_corner(-r271_Width * 2, r1_mix(r271_XH, 0, -1))), r271_Rect(r271_XH, r271_Descender, -r271_Width, 2 * r271_Width), r271_union(r271_ExtLineCenter(1, r271_BBS, r271_SB, r271_XH, r271_Middle - 0.25 * r529_kDiag * r271_BBD, 0), r271_ExtLineCenter(1, r271_BBS, r271_SB + r529_kDiag * r271_BBD, r271_XH, r271_Middle + 0.75 * r529_kDiag * r271_BBD, 0))));
            r529_currentGlyph.include(r271_intersection(r271_Rect(r271_XH, r271_Descender, -r271_Width, 2 * r271_Width), r271_ExtLineCenter(1, r271_BBS, r271_RightSB, r271_XH, r271_Middle, 0)));
            return void 0;
        });
    });
    return void 0;
});
