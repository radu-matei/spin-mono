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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-X', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_baseShape, r271_serifShape, r271_fMaskBase, _r271_t11, _r271_t13, _r271_t14, _r271_t15, _r271_tag16, _r271_t17, _r271_tag18;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
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
        var r271_tagged = _r271_t4.tagged;
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_HOverlayBar = _r271_t4.HOverlayBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_DiagCor = _r271_t4.DiagCor;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_DiagCorDs = _r271_t4.DiagCorDs;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_ShoulderMidKnotRhs = _r271_t6.ShoulderMidKnotRhs;
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var r271_WithSerifOverflowMask = _r271_t6.WithSerifOverflowMask;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_DiagonalTailInnerRadius = _r271_t7.DiagonalTailInnerRadius;
        var r271_DiagonalTailF = _r271_t7.DiagonalTailF;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t8.CyrDescender;
        var r271_PalatalHook = _r271_t8.PalatalHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'HalfXStrand': r271_HalfXStrand };
        });
        var r271_HalfXStrand = function (r279_stb, r279_fSlab, r279__leftx, r279_lefty, r279_rightx, r279_righty, r279_turn, r279_pStraight, r279_tension, r279__fine) {
            var _r279_t0, _r279_t1;
            return function () {
                var r281_hst, r281_hse, r281_leftx2, r281_height, r281_slabClearance, r281_turnyleft, r281_cyleft, r281_straightxleft, r281_straightyleft, _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_sbCor = r279_stb ? r271_StrokeWidthBlend(1, 6) * r271_OX * (Math.abs(r279_lefty - r279_righty) / r271_CAP) : 0;
                var r281_leftx = r279__leftx + (r271_HSwToV(r271_HalfStroke) + Math.max(-r271_SideJut, r281_sbCor)) * (r279_rightx > r279__leftx ? 1 : -1);
                var r281_fine = (r279__fine || r271_Stroke) * 0.5;
                if (r279_stb) {
                    r281_hst = r271_HalfStroke * r271_DiagCor(r279_righty - r279_lefty, r279_rightx - r281_leftx, 0, 0);
                    r281_hse = r271_HalfStroke * Math.min(0.97, r271_AdviceStroke(3) / r271_Stroke);
                    r281_leftx2 = r279__leftx + (r271_HSwToV(r281_hst) + Math.max(-r271_SideJut, r281_sbCor)) * (r279_rightx > r279__leftx ? 1 : -1);
                    r281_currentGlyph.include(r271_dispiro(r271_corner(r281_leftx2, r279_lefty, r271_widths.heading(r281_hst, r281_hst, r279_lefty < r279_righty ? r271_Upward : r271_Downward)), r271_corner(r279_rightx, r279_righty, r271_widths.center(2 * r281_hse))));
                } else {
                    r281_height = Math.abs(r279_lefty - r279_righty);
                    r281_slabClearance = r279_fSlab ? r271_AdviceStroke2(2, 3, r281_height) : 0;
                    r281_turnyleft = r1_mix(r279_lefty, r279_righty, r279_fSlab ? Math.max(r279_turn, r281_slabClearance / r281_height) : r279_turn);
                    r281_cyleft = r1_mix(r281_turnyleft, r279_righty, r279_tension);
                    r281_straightxleft = r1_mix(r281_leftx, r279_rightx, r279_pStraight);
                    r281_straightyleft = r1_mix(r281_cyleft, r279_righty, r279_pStraight);
                    r281_currentGlyph.include(r271_dispiro(r271_widths.center(), r271_flat(r281_leftx, r279_lefty, r271_heading(r279_lefty < r279_righty ? r271_Upward : r271_Downward)), r271_curl(r281_leftx, r281_turnyleft, r271_heading(r279_lefty < r279_righty ? r271_Upward : r271_Downward)), r271_quadControls(0, (r281_cyleft - r281_turnyleft) / (r281_straightyleft - r281_turnyleft), 24), r271_flat(r281_straightxleft, r281_straightyleft), r271_curl(r279_rightx, r279_righty)));
                }
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r285_t0, _r285_t1;
            return { 'XStrand': r271_XStrand };
        });
        var r271_XStrand = function (r286_stb, r286_slab, r286__leftx, r286_lefty, r286__rightx, r286_righty, r286_turn, r286_pStraight, r286_tension) {
            var _r286_t0, _r286_t1;
            return function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                var r288_middlex = r1_mix(r286__leftx, r286__rightx, 0.5);
                var r288_middley = r1_mix(r286_lefty, r286_righty, 0.5);
                r288_currentGlyph.include(r271_HalfXStrand(r286_stb, r286_slab, r286__leftx, r286_lefty, r288_middlex, r288_middley, r286_turn, r286_pStraight, r286_tension));
                r288_currentGlyph.include(r271_HalfXStrand(r286_stb, r286_slab, r286__rightx, r286_righty, r288_middlex, r288_middley, r286_turn, r286_pStraight, r286_tension));
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r292_t0, _r292_t1;
            return { 'XCursiveHalfShape': r271_XCursiveHalfShape };
        });
        var r271_XCursiveHalfShape = function () {
            var _r293_t6;
            var _r293_t7 = arguments;
            var _r293_t0 = [].slice.call(_r293_t7, 0);
            var _r293_t1 = [];
            var _r293_t2 = 0;
            while (_r293_t2 < _r293_t0.length) {
                if (!(_r293_t0[_r293_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r293_t1.push(_r293_t0[_r293_t2]);
                _r293_t2 = _r293_t2 + 1;
            }
            var _r293_t3 = _r293_t0;
            var _r293_t4 = _r293_t3.length;
            var _r293_t5 = 0;
            while (_r293_t5 < _r293_t4) {
                _r293_t2 = _r293_t3[_r293_t5];
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'top')
                    r293_top = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'bottom')
                    r293_bottom = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'left')
                    r293_left = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'right')
                    r293_right = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'swEnd')
                    r293_swEnd = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'swMid')
                    r293_swMid = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'kThin')
                    r293_kThin = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'setMark')
                    r293_setMark = _r293_t2.right;
                _r293_t5 = _r293_t5 + 1;
            }
            var r293_top = r1_fallback(r293_top, _r293_t1[0]);
            var r293_bottom = r1_fallback(r293_bottom, _r293_t1[1]);
            var r293_left = r1_fallback(r293_left, _r293_t1[2]);
            var r293_right = r1_fallback(r293_right, _r293_t1[3]);
            var r293_swEnd = r1_fallback(r293_swEnd, _r293_t1[4], r271_AdviceStroke(2.75));
            var r293_swMid = r1_fallback(r293_swMid, _r293_t1[5], r271_AdviceStroke(3));
            var r293_kThin = r1_fallback(r293_kThin, _r293_t1[6], 0.55);
            var r293_setMark = r1_fallback(r293_setMark, _r293_t1[7], false);
            return function () {
                var r299_lowerHalfLastKnot, _r299_t1;
                var _r299_t0 = this;
                var r299_currentGlyph = _r299_t0;
                var r299_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.8, r271_Width / 2);
                var r299_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.8, r271_Width / 2);
                var r299_xCenterRight = r293_left + r271_HSwToV(r293_swMid) / 2;
                var r299_xCenterLeft = r293_left - r271_HSwToV(r293_swMid) / 2;
                var r299_xTurn = r1_mix(r293_right - r271_HSwToV(r293_swEnd), r299_xCenterRight, 0.5);
                var r299_hook1Depth = r271_Hook + r271_Stroke * 0.125;
                var r299_hook1StraightDepth = Math.min(r299_hook1Depth - r293_swEnd * 1.125, Math.max(1, r299_hook1Depth / 5 - r293_swEnd / 4));
                var r299_fineMid = r293_swMid * r293_kThin;
                var r299_rIn = Math.max(0.4 * (r293_right - r293_left) - r271_HSwToV(0.7 * r271_Stroke), r271_AdviceStroke(16));
                var r299_flatHookDepth = 1.4 * (r293_right - r293_left) - r293_swEnd - 1.5 * r299_rIn;
                var r299_upperHalf = r299_currentGlyph.include(r271_dispiro(r271_flat(r299_xCenterRight - r271_HSwToV(r299_fineMid), r1_mix(r293_bottom, r293_top, 0.5) + r271_O, r271_widths.rhs.heading(r299_fineMid, r271_Upward)), r271_curl(r299_xCenterRight - r271_HSwToV(r299_fineMid), r293_top - r299_ada), r271_arcvh(), r271_ShoulderMidKnotRhs(r299_xTurn, r293_top - r271_O, r299_fineMid, r293_swEnd, +1, -1), r271_archv(), r271_flat(r293_right - r271_OX, r293_top - r299_hook1Depth + r299_hook1StraightDepth, r271_heading(r271_Downward)), r271_curl(r293_right - r271_OX, r293_top - r299_hook1Depth, r271_heading(r271_Downward))));
                var r299_lowerHalf = r299_currentGlyph.include(r271_dispiro(r271_flat(r299_xCenterRight - r271_HSwToV(0.5 * r299_fineMid), r1_mix(r293_bottom, r293_top, 0.5) - r271_O, r271_widths.center(r299_fineMid)), r271_curl(r299_xCenterRight - r271_HSwToV(0.5 * r299_fineMid), r293_bottom + Math.min(r299_adb, r293_swMid + r299_rIn)), r271_arcvh(16), r271_DiagonalTailF(1, r271_DivFrame(1), r299_xCenterRight - r271_HSwToV(0.5 * r271_Stroke) + r271_TanSlope * r299_rIn, r293_bottom, r299_rIn, 50, r299_flatHookDepth, r271_Stroke)));
                if (r293_setMark) {
                    r299_lowerHalfLastKnot = r299_lowerHalf.rhsKnots[r299_lowerHalf.rhsKnots.length - 1];
                    r299_currentGlyph.setBaseAnchor('cyrlDescenderAttach', r299_lowerHalfLastKnot.x, r299_lowerHalfLastKnot.y);
                }
                return void 0;
            };
        };
        var r271_XChanceryStrand = function (r303_sign, r303_leftX, r303_leftY, r303_rightX, r303_rightY, r303_sw) {
            var _r303_t0, _r303_t1;
            var r303_blendK1X = r271_StrokeWidthBlend(0.58, 0.65);
            var r303_blendK1Y = 0.2;
            var r303_blendK2X = 0.78;
            var r303_blendK2Y = r271_StrokeWidthBlend(0.5, 0.4);
            var r303_pStraightX = r271_StrokeWidthBlend(0.3, 0.35);
            var r303_pStraightY = r271_StrokeWidthBlend(0.2, 0.25);
            var r303_fine = r271_AdviceStroke(3) / r271_Stroke * r303_sw;
            return r271_dispiro(r271_straight.right.start(r303_leftX, r303_leftY - r303_sign * r303_sw / 2, r271_widths.center(r303_sw)), r271_alsoThruThem([
                [
                    r303_blendK1X,
                    r303_blendK1Y
                ],
                [
                    r303_blendK2X,
                    r303_blendK2Y
                ]
            ]), r271_flat(r1_mix(r303_leftX, r303_rightX, r303_pStraightX), r1_mix(r303_leftY, r303_rightY, r303_pStraightY), r271_widths.center(r1_mix(r303_sw, r303_fine, 0.5))), r271_corner(r1_mix(r303_leftX, r303_rightX, 0.5), r1_mix(r303_leftY, r303_rightY, 0.5), r271_widths.center(r303_fine)), r271_curl(r1_mix(r303_leftX, r303_rightX, 1 - r303_pStraightX), r1_mix(r303_leftY, r303_rightY, 1 - r303_pStraightY), r271_widths.center(r1_mix(r303_sw, r303_fine, 0.5))), r271_alsoThruThem([
                [
                    1 - r303_blendK2X,
                    1 - r303_blendK2Y
                ],
                [
                    1 - r303_blendK1X,
                    1 - r303_blendK1Y
                ]
            ]), r271_straight.right.end(r303_rightX, r303_rightY + r303_sign * r303_sw / 2, r271_widths.center(r303_sw)));
        };
        var r271_Shape = function () {
            var r306_StraightBase, r306_CurlyBase, r306_CursiveBase, r306_SemiChanceryStr, r306_SemiChanceryCur, r306_ChanceryBase, r306_FullSerifs, r306_MotionSerifs, r306_MotionSerifsBilateral;
            var r306_exports = {};
            var r306_XBase = function (r313_fStraight, r313_fSlab, r313_top, r313_bottom, r313_turn, r313_tension) {
                var _r313_t0, _r313_t1;
                return function () {
                    var _r315_t1;
                    var _r315_t0 = this;
                    var r315_currentGlyph = _r315_t0;
                    r315_currentGlyph.include(r271_XStrand(r313_fStraight, r313_fSlab, r271_SB, r313_bottom, r271_RightSB, r313_top, r313_turn, 0.4, r313_tension), true, true);
                    r315_currentGlyph.include(r271_XStrand(r313_fStraight, r313_fSlab, r271_SB, r313_top, r271_RightSB, r313_bottom, r313_turn, 0.4, r313_tension));
                    return void 0;
                };
            };
            r306_exports.StraightBase = r306_StraightBase = function (r319_fSlab, r319_top, r319_bottom, r319_turn, r319_tension) {
                var _r319_t0, _r319_t1;
                return r306_XBase(true, r319_fSlab, r319_top, r319_bottom, r319_turn, r319_tension);
            };
            r306_exports.CurlyBase = r306_CurlyBase = function (r321_fSlab, r321_top, r321_bottom, r321_turn, r321_tension) {
                var _r321_t0, _r321_t1;
                return r306_XBase(false, r321_fSlab, r321_top, r321_bottom, r321_turn, r321_tension);
            };
            r306_exports.CursiveBase = r306_CursiveBase = function (r323_fSerifs, r323_top, r323_bottom, r323_turn, r323_tension) {
                var _r323_t0, _r323_t1;
                return function () {
                    var _r325_t1;
                    var _r325_t0 = this;
                    var r325_currentGlyph = _r325_t0;
                    r325_currentGlyph.include(r271_XCursiveHalfShape(r323_top, r323_bottom, r271_Middle, r271_RightSB));
                    r325_currentGlyph.include(r271_FlipAround(r271_Middle, r1_mix(r323_bottom, r323_top, 0.5)));
                    r325_currentGlyph.include(r271_XCursiveHalfShape(r323_top, r323_bottom, r271_Middle, r271_RightSB, new r271_xn$NamedParameterPair$2Lrc9b('setMark', true)));
                    return void 0;
                };
            };
            r306_exports.SemiChanceryStr = r306_SemiChanceryStr = function (r331_fSlab, r331_top, r331_bottom, r331_turn, r331_tension) {
                var _r331_t0, _r331_t1;
                return r271_union(r271_XChanceryStrand(+1, r271_SB, r331_top, r271_RightSB, r331_bottom, r271_Stroke), r271_XStrand(true, r331_fSlab, r271_SB, r331_bottom, r271_RightSB, r331_top, r331_turn, 0.4, r331_tension));
            };
            r306_exports.SemiChanceryCur = r306_SemiChanceryCur = function (r333_fSlab, r333_top, r333_bottom, r333_turn, r333_tension) {
                var _r333_t0, _r333_t1;
                return r271_union(r271_XChanceryStrand(+1, r271_SB, r333_top, r271_RightSB, r333_bottom, r271_Stroke), r271_XStrand(false, r333_fSlab, r271_SB, r333_bottom, r271_RightSB, r333_top, r333_turn, 0.4, r333_tension));
            };
            r306_exports.ChanceryBase = r306_ChanceryBase = function (r335_fSlab, r335_top, r335_bottom, r335_turn, r335_tension) {
                var _r335_t0, _r335_t1;
                return r271_union(r271_XChanceryStrand(+1, r271_SB, r335_top, r271_RightSB, r335_bottom, r271_Stroke), r271_XChanceryStrand(-1, r271_SB, r335_bottom, r271_RightSB, r335_top, r271_Stroke));
            };
            r306_exports.FullSerifs = r306_FullSerifs = function (r337_top, r337_bot) {
                var _r337_leti0, _r337_t1, _r337_t2, _r337_t4, _r337_tag5;
                var _r337_t3 = r271_SerifFrame.fromDf(r271_DivFrame(1), r337_top, r337_bot);
                return function (_r337_leti0) {
                    var r338_sf = _r337_leti0;
                    return function () {
                        var _r340_t1;
                        var _r340_t0 = this;
                        var r340_currentGlyph = _r340_t0;
                        r340_currentGlyph.include(r338_sf.lt.full, true, true);
                        r340_currentGlyph.include(r338_sf.rt.full);
                        r340_currentGlyph.include(r338_sf.lb.full);
                        r340_currentGlyph.include(r338_sf.rb.full);
                        return void 0;
                    };
                }(_r337_t3);
            };
            r306_exports.MotionSerifs = r306_MotionSerifs = function (r346_top, r346_bot) {
                var _r346_t0, _r346_t1;
                return function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    r348_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r346_top, r271_SideJut)));
                    return void 0;
                };
            };
            r306_exports.MotionSerifsBilateral = r306_MotionSerifsBilateral = function (r351_top, r351_bot) {
                var _r351_t0, _r351_t1;
                return function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    r353_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r351_top, r271_SideJut)));
                    r353_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_RightSB, r351_bot, r271_SideJut)));
                    return void 0;
                };
            };
            return r306_exports;
        }();
        var r271_Config = {
            'straightSerifless': [
                r271_Shape.StraightBase,
                null,
                false
            ],
            'curlySerifless': [
                r271_Shape.CurlyBase,
                null,
                false
            ],
            'cursive': [
                r271_Shape.CursiveBase,
                null,
                false
            ],
            'semiChanceryStraight': [
                r271_Shape.SemiChanceryStr,
                null,
                false
            ],
            'semiChanceryCurly': [
                r271_Shape.SemiChanceryCur,
                null,
                false
            ],
            'chancery': [
                r271_Shape.ChanceryBase,
                null,
                false
            ],
            'straightSerifed': [
                r271_Shape.StraightBase,
                r271_Shape.FullSerifs,
                true
            ],
            'curlySerifed': [
                r271_Shape.CurlyBase,
                r271_Shape.FullSerifs,
                true
            ],
            'straightMotionSerifed': [
                r271_Shape.StraightBase,
                r271_Shape.MotionSerifs,
                false
            ],
            'curlyMotionSerifed': [
                r271_Shape.CurlyBase,
                r271_Shape.MotionSerifs,
                false
            ],
            'straightBilateralMotionSerifed': [
                r271_Shape.StraightBase,
                r271_Shape.MotionSerifsBilateral,
                false
            ],
            'curlyBilateralMotionSerifed': [
                r271_Shape.CurlyBase,
                r271_Shape.MotionSerifsBilateral,
                false
            ]
        };
        var _r271_t9 = Object.entries(r271_Config)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_baseShape = _r271_t11[1][0];
            r271_serifShape = _r271_t11[1][1];
            r271_fMaskBase = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                var r358_letterShape = function (r359_top, r359_bottom, r359_turn, r359_tension) {
                    var _r359_t0, _r359_t1;
                    return function () {
                        var _r361_t1;
                        var _r361_t0 = this;
                        var r361_currentGlyph = _r361_t0;
                        var r361_base = r271_baseShape(r271_fMaskBase, r359_top, r359_bottom, r359_turn, r359_tension);
                        r361_currentGlyph.include(r271_WithSerifOverflowMask(r271_fMaskBase, r359_top, r359_bottom, r271_SB, r271_RightSB, r361_base));
                        if (r271_serifShape)
                            r361_currentGlyph.include(r271_serifShape(r359_top, r359_bottom));
                        return void 0;
                    };
                };
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('X.' + r271_suffix, null, function () {
                    var _r366_t1;
                    var _r366_t0 = this;
                    var r366_currentGlyph = _r366_t0;
                    r366_currentGlyph.include(r271_MarkSet.capital());
                    r366_currentGlyph.include(r358_letterShape(r271_CAP, 0, 0.1, 0.28));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('x.' + r271_suffix, null, function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    r371_currentGlyph.include(r271_MarkSet.e());
                    r371_currentGlyph.include(r358_letterShape(r271_XH, 0, 0.1, 0.2));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/chi.' + r271_suffix, null, function () {
                    var _r376_t1;
                    var _r376_t0 = this;
                    var r376_currentGlyph = _r376_t0;
                    r376_currentGlyph.include(r271_MarkSet.p());
                    r376_currentGlyph.include(r358_letterShape(r271_XH, r271_Descender, 0.1, 0.2));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Chi.' + r271_suffix, null, function () {
                    var _r381_t1;
                    var _r381_t0 = this;
                    var r381_currentGlyph = _r381_t0;
                    r381_currentGlyph.include(r271_MarkSet.capDesc());
                    r381_currentGlyph.include(r358_letterShape(r271_CAP, r271_Descender, 0.1, 0.2));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('X', 'X');
        r271_xn$linkreducedvariant$5sIl8('X/sansSerif', 'X', r1_MathSansSerif);
        r271_alias('grek/Chi', 935, 'X');
        r271_xn$aliasreducedvariant$1aao8('grek/Chi/sansSerif', 'grek/Chi', 'X/sansSerif', r1_MathSansSerif);
        r271_alias('cyrl/Ha', 1061, 'X');
        r271_xn$selectvariant$7Hrq('x', 'x');
        r271_xn$linkreducedvariant$5sIl8('x/sansSerif', 'x', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('cyrl/ha', 1093, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'x'));
        r271_xn$selectvariant$7Hrq('grek/chi', 967, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'latn/chi'));
        r271_xn$linkreducedvariant$5sIl8('grek/chi/sansSerif', 'grek/chi', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'latn/chi'));
        r271_xn$selectvariant$7Hrq('latn/chi', 43859, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'x'));
        r271_xn$selectvariant$7Hrq('latn/Chi', 42931, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'X'));
        var r271_AddDescender = function (r389_Ctor) {
            var _r389_t0, _r389_t1;
            return function (r390_src, r390_sel) {
                var _r390_t0, _r390_t1;
                return function () {
                    var r392_attach, r392_sw, _r392_t1;
                    var _r392_t0 = this;
                    var r392_currentGlyph = _r392_t0;
                    r392_currentGlyph.include(r271_xn$referglyph$1aao(r390_src), r271_AS_BASE, r271_ALSO_METRICS);
                    var r392_attachAnchor = r392_currentGlyph.baseAnchors.cyrlDescenderAttach;
                    if (r392_attachAnchor) {
                        r392_attach = r392_currentGlyph.gizmo.unapply(r392_attachAnchor);
                        r392_currentGlyph.include(r389_Ctor.r(r392_attach.x, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r392_attach.y)));
                    } else {
                        r392_sw = r389_Ctor.Sw(r271_Stroke);
                        r392_currentGlyph.include(r389_Ctor.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_RightSB + r271_SideJut + r392_sw * r271_TanSlope), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r271_RightSB - r271_HSwToV(r271_HalfStroke))));
                    }
                    return void 0;
                };
            };
        };
        r271_xn$deriveglyphs$7Hrq('cyrl/HaDescender', 1202, 'cyrl/Ha', r271_AddDescender(r271_CyrDescender));
        r271_xn$deriveglyphs$7Hrq('cyrl/haDescender', 1203, 'cyrl/ha', r271_AddDescender(r271_CyrDescender));
        r271_xn$deriveglyphs$7Hrq('cyrl/HaHook', 1276, 'cyrl/Ha', r271_AddDescender(r271_PalatalHook));
        r271_xn$deriveglyphs$7Hrq('cyrl/haHook', 1277, 'cyrl/ha', r271_AddDescender(r271_PalatalHook));
        r271_alias('xPalatalHook', 7565, 'cyrl/haHook');
        var r271_CyrlHaBarShape = function (r400_top) {
            var _r400_t0, _r400_t1;
            return r271_HOverlayBar(r1_mix(r271_SB, r271_RightSB, 0.08), r1_mix(r271_SB, r271_RightSB, 0.92), r400_top / 2);
        };
        r271_xn$derivecomposites$7Hrq('cyrl/HaBar', 1278, 'cyrl/Ha', r271_CyrlHaBarShape(r271_CAP));
        r271_xn$derivecomposites$7Hrq('cyrl/haBar', 1279, 'cyrl/ha', r271_CyrlHaBarShape(r271_XH));
        var _r271_t12 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t12.BBS;
        var r271_BBD = _r271_t12.BBD;
        var r271_BBXShape = function (r402_l, r402_r, r402_top) {
            var _r402_leti0, _r402_t1, _r402_t2, _r402_t4, _r402_tag5;
            var _r402_t3 = r271_DiagCorDs(r402_top, r402_r - r402_l, r271_BBD);
            return function (_r402_leti0) {
                var r403_kDiag = _r402_leti0;
                return r271_union(r271_intersection(r271_Rect(r402_top, 0, -r271_Width, r271_Width * 2), r271_union(r271_ExtLineCenter(1, r271_BBS, r402_l, r402_top, r402_r - r403_kDiag * r271_BBD, 0), r271_ExtLineCenter(1, r271_BBS, r402_l + r403_kDiag * r271_BBD, r402_top, r402_r, 0))), r271_HBar.t(r402_l, r402_l + r403_kDiag * r271_BBD, r402_top, r271_BBS), r271_HBar.b(r402_r, r402_r - r403_kDiag * r271_BBD, 0, r271_BBS), r271_intersection(r271_Rect(r402_top, 0, -r271_Width, r271_Width * 2), r271_difference(r271_ExtLineCenter(1, r271_BBS, r402_l, 0, r402_r, r402_top), r271_xn$spirooutline$1aao(r271_corner(r402_l, r402_top), r271_corner(r402_l + r403_kDiag * r271_BBD, r402_top), r271_corner(r402_r, 0), r271_corner(r402_r - r403_kDiag * r271_BBD, 0)))));
            }(_r402_t3);
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/X', 120143, function () {
            var _r406_t1;
            var _r406_t0 = this;
            var r406_currentGlyph = _r406_t0;
            r406_currentGlyph.include(r271_MarkSet.capital(), true, true);
            r406_currentGlyph.include(r271_BBXShape(r271_SB, r271_RightSB, r271_CAP));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/x', 120169, function () {
            var _r411_t1;
            var _r411_t0 = this;
            var r411_currentGlyph = _r411_t0;
            r411_currentGlyph.include(r271_MarkSet.e(), true, true);
            r411_currentGlyph.include(r271_BBXShape(r271_SB, r271_RightSB, r271_XH));
            return void 0;
        });
    });
    return void 0;
});
