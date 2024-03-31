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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-P', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_fGap, r271_slabs, r271_revSlabs, _r271_t13, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HBarPos = _r271_t1.HBarPos;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
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
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t6.LeaningAnchor;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_SetGrekUpperTonos = _r271_t7.SetGrekUpperTonos;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Metrics'].resolve();
        var r271_BowlXDepth = _r271_t8.BowlXDepth;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t9.LetterBarOverlay;
        var r271_LeftHook = _r271_t9.LeftHook;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t10.BBS;
        var r271_BBD = _r271_t10.BBD;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return {
                'PShape': r271_PShape,
                'PShapeOutline': r271_PShapeOutline,
                'RevPShape': r271_RevPShape,
                'PBarPosY': r271_PBarPosY,
                'PRotundaShape': r271_PRotundaShape,
                'BBPShape': r271_BBPShape
            };
        });
        var r271_PBarPosY = function (r281_top, r281_sw, r281_bp) {
            var _r281_t0, _r281_t1;
            return (r281_top - r281_sw) * r281_bp - r281_sw * r271_PShape.SwBelowBar;
        };
        var r271_PRotundaOutlineKnots = function (r282_top, r282_mul, r282_bp, r282_overshoot, r282_sw, r282_offset, r282_endX, r282_hook) {
            var _r282_t0, _r282_t1;
            var r282_bowlTop = r282_top * 1 - r282_offset;
            var r282_bowlBottom = r271_PBarPosY(r282_top, r282_sw, r282_bp) + r282_offset;
            var r282_turnRadius = r271_BowlXDepth(r282_bowlTop, r282_bowlBottom, r271_SB, r271_RightSB, r282_sw);
            var r282_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
            var r282_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
            var r282_right = r271_RightSB - r282_offset;
            var r282_turn = r271_YSmoothMidR(r282_bowlTop, r282_bowlBottom, r282_ada, r282_adb);
            return [
                r271_g4(r271_SB * r282_mul - r271_O, r282_bowlTop - r282_hook),
                r271_hookstart(r282_bowlTop - r271_O),
                r271_g4(r282_right - r282_overshoot, r282_turn),
                r271_arcvh(),
                r271_flat(Math.max(r282_endX + 0.01 + r282_sw / 2 * r271_TanSlope, r271_Middle) + r271_CorrectionOMidX * r282_sw * 0.5, r282_bowlBottom),
                r271_curl(r282_endX, r282_bowlBottom, r271_heading(r271_Leftward))
            ];
        };
        var r271_PShapeOutlineKnots = function (r283_top, r283_mul, r283_bp, r283_overshoot, r283_sw, r283_offset) {
            var _r283_t0, _r283_t1;
            var r283_bowlTop = r283_top * 1 - r283_offset;
            var r283_bowlBottom = r271_PBarPosY(r283_top, r283_sw, r283_bp) + r283_offset;
            var r283_turnRadius = r271_BowlXDepth(r283_bowlTop, r283_bowlBottom, r271_SB, r271_RightSB, r283_sw);
            var r283_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
            var r283_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
            var r283_right = r271_RightSB - r283_offset;
            var r283_turn = r271_YSmoothMidR(r283_bowlTop, r283_bowlBottom, r283_ada, r283_adb);
            return [
                r271_flat(r271_SB * r283_mul - r271_O, r283_bowlTop, r271_heading(r271_Rightward)),
                r271_curl(r283_right - r283_turnRadius - r271_CorrectionOMidX * r283_sw, r283_bowlTop),
                r271_archv(),
                r271_g4(r283_right - r283_overshoot, r283_turn),
                r271_arcvh(),
                r271_flat(r283_right - r283_turnRadius + r271_CorrectionOMidX * r283_sw, r283_bowlBottom),
                r271_curl(r271_SB * r283_mul - r271_O, r283_bowlBottom, r271_heading(r271_Leftward))
            ];
        };
        var r271_RevPshapeOutlineKnots = function (r284_top, r284_mul, r284_bp, r284_overshoot, r284_sw, r284_offset) {
            var _r284_t0, _r284_t1;
            var r284_bowlTop = r284_top * 1 - r284_offset;
            var r284_bowlBottom = (r284_top - r284_sw) * r284_bp - r284_sw * r271_PShape.SwBelowBar + r284_offset;
            var r284_turnRadius = r271_BowlXDepth(r284_bowlTop, r284_bowlBottom, r271_SB, r271_RightSB, r284_sw);
            var r284_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
            var r284_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
            var r284_left = r271_SB + r284_offset;
            var r284_turn = r271_YSmoothMidL(r284_bowlTop, r284_bowlBottom, r284_ada, r284_adb);
            return [
                r271_flat(r271_Width - r271_SB * r284_mul + r271_O, r284_bowlTop, r271_heading(r271_Leftward)),
                r271_curl(r284_left + r284_turnRadius - r271_CorrectionOMidX * r284_sw, r284_bowlTop),
                r271_archv(),
                r271_g4(r284_left + r284_overshoot, r284_turn),
                r271_arcvh(),
                r271_flat(r284_left + r284_turnRadius + r271_CorrectionOMidX * r284_sw, r284_bowlBottom),
                r271_curl(r271_Width - r271_SB * r284_mul + r271_O, r284_bowlBottom, r271_heading(r271_Rightward))
            ];
        };
        var r271_PShapeOutline = function () {
            var _r285_t6;
            var _r285_t7 = arguments;
            var _r285_t0 = [].slice.call(_r285_t7, 0);
            var _r285_t1 = [];
            var _r285_t2 = 0;
            while (_r285_t2 < _r285_t0.length) {
                if (!(_r285_t0[_r285_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r285_t1.push(_r285_t0[_r285_t2]);
                _r285_t2 = _r285_t2 + 1;
            }
            var _r285_t3 = _r285_t0;
            var _r285_t4 = _r285_t3.length;
            var _r285_t5 = 0;
            while (_r285_t5 < _r285_t4) {
                _r285_t2 = _r285_t3[_r285_t5];
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'top')
                    r285_top = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'mul')
                    r285_mul = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'bp')
                    r285_bp = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'overshoot')
                    r285_overshoot = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'sw')
                    r285_sw = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'offset')
                    r285_offset = _r285_t2.right;
                _r285_t5 = _r285_t5 + 1;
            }
            var r285_top = r1_fallback(r285_top, _r285_t1[0]);
            var r285_mul = r1_fallback(r285_mul, _r285_t1[1], r271_PShape.defaultMul);
            var r285_bp = r1_fallback(r285_bp, _r285_t1[2], r271_PShape.BarPos);
            var r285_overshoot = r1_fallback(r285_overshoot, _r285_t1[3], r271_PShape.defaultOvershoot);
            var r285_sw = r1_fallback(r285_sw, _r285_t1[4], r271_Stroke);
            var r285_offset = r1_fallback(r285_offset, _r285_t1[5], 0);
            return function () {
                var _r291_t1;
                var _r291_t0 = this;
                var r291_currentGlyph = _r291_t0;
                r291_currentGlyph.include(r271_xn$spirooutline$1aao(r271_PShapeOutlineKnots(r285_top, r285_mul, r285_bp, r285_overshoot, r285_sw, r285_offset)));
                return void 0;
            };
        };
        var r271_PShape = function () {
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
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'mul')
                    r293_mul = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'bp')
                    r293_bp = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'overshoot')
                    r293_overshoot = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'sw')
                    r293_sw = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'slab')
                    r293_slab = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'withBar')
                    r293_withBar = _r293_t2.right;
                if (_r293_t2 && _r293_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r293_t2.left === 'setMark')
                    r293_setMark = _r293_t2.right;
                _r293_t5 = _r293_t5 + 1;
            }
            var r293_top = r1_fallback(r293_top, _r293_t1[0]);
            var r293_mul = r1_fallback(r293_mul, _r293_t1[1], r271_PShape.defaultMul);
            var r293_bp = r1_fallback(r293_bp, _r293_t1[2], r271_PShape.BarPos);
            var r293_overshoot = r1_fallback(r293_overshoot, _r293_t1[3], r271_PShape.defaultOvershoot);
            var r293_sw = r1_fallback(r293_sw, _r293_t1[4], r271_Stroke);
            var r293_slab = r1_fallback(r293_slab, _r293_t1[5], null);
            var r293_withBar = r1_fallback(r293_withBar, _r293_t1[6], true);
            var r293_setMark = r1_fallback(r293_setMark, _r293_t1[7], false);
            return function () {
                var _r299_t1;
                var _r299_t0 = this;
                var r299_currentGlyph = _r299_t0;
                r299_currentGlyph.include(r271_dispiro(r271_widths.rhs(r293_sw), r271_PShapeOutlineKnots(r293_top, r293_mul, r293_bp, r293_overshoot, r293_sw, 0)));
                if (r293_withBar)
                    r299_currentGlyph.include(r271_tagged('strokeL', r271_VBar.l(r271_SB * r293_mul, 0, r293_top, r293_sw)));
                if (r293_slab)
                    r299_currentGlyph.include(r293_slab(r293_top, r293_sw, r293_mul));
                return void 0;
            };
        };
        var r271_PRotundaShape = function () {
            var _r303_t6;
            var _r303_t7 = arguments;
            var _r303_t0 = [].slice.call(_r303_t7, 0);
            var _r303_t1 = [];
            var _r303_t2 = 0;
            while (_r303_t2 < _r303_t0.length) {
                if (!(_r303_t0[_r303_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r303_t1.push(_r303_t0[_r303_t2]);
                _r303_t2 = _r303_t2 + 1;
            }
            var _r303_t3 = _r303_t0;
            var _r303_t4 = _r303_t3.length;
            var _r303_t5 = 0;
            while (_r303_t5 < _r303_t4) {
                _r303_t2 = _r303_t3[_r303_t5];
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'top')
                    r303_top = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'mul')
                    r303_mul = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'bp')
                    r303_bp = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'overshoot')
                    r303_overshoot = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'sw')
                    r303_sw = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'slab')
                    r303_slab = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'endX')
                    r303_endX = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'hook')
                    r303_hook = _r303_t2.right;
                _r303_t5 = _r303_t5 + 1;
            }
            var r303_top = r1_fallback(r303_top, _r303_t1[0]);
            var r303_mul = r1_fallback(r303_mul, _r303_t1[1], r271_PShape.defaultMul);
            var r303_bp = r1_fallback(r303_bp, _r303_t1[2], r271_PShape.BarPos);
            var r303_overshoot = r1_fallback(r303_overshoot, _r303_t1[3], r271_PShape.defaultOvershoot);
            var r303_sw = r1_fallback(r303_sw, _r303_t1[4], r271_Stroke);
            var r303_slab = r1_fallback(r303_slab, _r303_t1[5], r271_SLAB);
            var r303_endX = r1_fallback(r303_endX, _r303_t1[6], r271_SB);
            var r303_hook = r1_fallback(r303_hook, _r303_t1[7], r271_Hook);
            return function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                r309_currentGlyph.include(r271_dispiro(r271_widths.rhs(r303_sw), r271_PRotundaOutlineKnots(r303_top, r303_mul, r303_bp, r303_overshoot, r303_sw, 0, r303_endX, r303_hook)));
                return void 0;
            };
        };
        var r271_RevPShape = function () {
            var _r311_t6;
            var _r311_t7 = arguments;
            var _r311_t0 = [].slice.call(_r311_t7, 0);
            var _r311_t1 = [];
            var _r311_t2 = 0;
            while (_r311_t2 < _r311_t0.length) {
                if (!(_r311_t0[_r311_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r311_t1.push(_r311_t0[_r311_t2]);
                _r311_t2 = _r311_t2 + 1;
            }
            var _r311_t3 = _r311_t0;
            var _r311_t4 = _r311_t3.length;
            var _r311_t5 = 0;
            while (_r311_t5 < _r311_t4) {
                _r311_t2 = _r311_t3[_r311_t5];
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'top')
                    r311_top = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'mul')
                    r311_mul = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'bp')
                    r311_bp = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'overshoot')
                    r311_overshoot = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'sw')
                    r311_sw = _r311_t2.right;
                if (_r311_t2 && _r311_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'slab')
                    r311_slab = _r311_t2.right;
                _r311_t5 = _r311_t5 + 1;
            }
            var r311_top = r1_fallback(r311_top, _r311_t1[0]);
            var r311_mul = r1_fallback(r311_mul, _r311_t1[1], r271_PShape.defaultMul);
            var r311_bp = r1_fallback(r311_bp, _r311_t1[2], r271_PShape.BarPos);
            var r311_overshoot = r1_fallback(r311_overshoot, _r311_t1[3], r271_PShape.defaultOvershoot);
            var r311_sw = r1_fallback(r311_sw, _r311_t1[4], r271_Stroke);
            var r311_slab = r1_fallback(r311_slab, _r311_t1[5], r271_SLAB);
            return function () {
                var _r317_t1;
                var _r317_t0 = this;
                var r317_currentGlyph = _r317_t0;
                r317_currentGlyph.include(r271_tagged('bowl', r271_dispiro(r271_widths.lhs(r311_sw), r271_RevPshapeOutlineKnots(r311_top, r311_mul, r311_bp, r311_overshoot, r311_sw, 0))));
                r317_currentGlyph.include(r271_tagged('strokeR', r271_VBar.r(r271_Width - r271_SB * r311_mul, 0, r311_top, r311_sw)));
                if (r311_slab)
                    r317_currentGlyph.include(r311_slab(r311_top, r311_sw, r311_mul));
                return void 0;
            };
        };
        r271_PShape.defaultMul = 1.25;
        r271_PShape.defaultOvershoot = r271_OX * 2;
        r271_PShape.BarPos = 1 - r271_HBarPos;
        r271_PShape.SwBelowBar = 0.25;
        r271_PShape.SlabMotion = function (r321_top, r321_sw, r321_mul) {
            var _r321_t0, _r321_t1;
            return function () {
                var _r323_t1;
                var _r323_t0 = this;
                var r323_currentGlyph = _r323_t0;
                r323_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB * r321_mul, r321_top, r271_SideJut, r321_sw)));
                return void 0;
            };
        };
        r271_PShape.SlabFullSymmetric = function (r325_top, r325_sw, r325_mul) {
            var _r325_t0, _r325_t1;
            return function () {
                var _r327_t1;
                var _r327_t0 = this;
                var r327_currentGlyph = _r327_t0;
                r327_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.mt(r271_SB * r325_mul + r271_HSwToV(0.5 * r325_sw), r325_top, r271_Jut, r325_sw)));
                r327_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.mb(r271_SB * r325_mul + r271_HSwToV(0.5 * r325_sw), 0, r271_Jut, r325_sw)));
                return void 0;
            };
        };
        r271_PShape.SlabSymmetric = function (r330_top, r330_sw, r330_mul) {
            var _r330_t0, _r330_t1;
            return function () {
                var _r332_t1;
                var _r332_t0 = this;
                var r332_currentGlyph = _r332_t0;
                r332_currentGlyph.include(r271_PShape.SlabMotion(r330_top, r330_sw, r330_mul));
                r332_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.mb(r271_SB * r330_mul + r271_HSwToV(0.5 * r330_sw), 0, r271_Jut, r330_sw)));
                return void 0;
            };
        };
        r271_PShape.SlabAsymmetric = function (r335_top, r335_sw, r335_mul) {
            var _r335_t0, _r335_t1;
            return function () {
                var _r337_t1;
                var _r337_t0 = this;
                var r337_currentGlyph = _r337_t0;
                r337_currentGlyph.include(r271_PShape.SlabMotion(r335_top, r335_sw, r335_mul));
                r337_currentGlyph.include(r271_tagged('serifLB', r271_union(r271_HSerif.lb(r271_SB * r335_mul, 0, r271_SideJut, r335_sw), r271_HSerif.rb(r271_SB * r335_mul + r271_HSwToV(0.5 * r335_sw), 0, r271_MidJutSide, r335_sw))));
                return void 0;
            };
        };
        r271_PShape.OpenGap = function () {
            var _r340_t6;
            var _r340_t7 = arguments;
            var _r340_t0 = [].slice.call(_r340_t7, 0);
            var _r340_t1 = [];
            var _r340_t2 = 0;
            while (_r340_t2 < _r340_t0.length) {
                if (!(_r340_t0[_r340_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r340_t1.push(_r340_t0[_r340_t2]);
                _r340_t2 = _r340_t2 + 1;
            }
            var _r340_t3 = _r340_t0;
            var _r340_t4 = _r340_t3.length;
            var _r340_t5 = 0;
            while (_r340_t5 < _r340_t4) {
                _r340_t2 = _r340_t3[_r340_t5];
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'top')
                    r340_top = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'bot')
                    r340_bot = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'mul')
                    r340_mul = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'bp')
                    r340_bp = _r340_t2.right;
                if (_r340_t2 && _r340_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r340_t2.left === 'sw')
                    r340_sw = _r340_t2.right;
                _r340_t5 = _r340_t5 + 1;
            }
            var r340_top = r1_fallback(r340_top, _r340_t1[0]);
            var r340_bot = r1_fallback(r340_bot, _r340_t1[1], 0);
            var r340_mul = r1_fallback(r340_mul, _r340_t1[2], r271_PShape.defaultMul);
            var r340_bp = r1_fallback(r340_bp, _r340_t1[3], r271_PShape.BarPos);
            var r340_sw = r1_fallback(r340_sw, _r340_t1[4], r271_Stroke);
            return r271_VBar.l(r271_SB * r340_mul + r271_HSwToV(r340_sw), Math.min(r271_PBarPosY(r340_top, r340_sw, r340_bp) - 0.5 * r340_sw - 0.1, r340_bot), Math.max(r271_PBarPosY(r340_top, r340_sw, r340_bp) + 0.5 * r340_sw + 0.1, r1_mix(r340_top, r271_PBarPosY(r340_top, r340_sw, r340_bp), 0.5)), 0.2 * (r271_RightSB - r271_SB) * (r271_AdviceStroke(5) / r271_Stroke));
        };
        r271_RevPShape.SlabMotion = function (r345_top, r345_sw, r345_mul) {
            var _r345_t0, _r345_t1;
            return function () {
                var _r347_t1;
                var _r347_t0 = this;
                var r347_currentGlyph = _r347_t0;
                r347_currentGlyph.include(r271_tagged('serifRT', r271_HSerif.rt(r271_Width - r271_SB * r345_mul, r345_top, r271_SideJut, r345_sw)));
                return void 0;
            };
        };
        r271_RevPShape.SlabSymmetric = function (r349_top, r349_sw, r349_mul) {
            var _r349_t0, _r349_t1;
            return function () {
                var _r351_t1;
                var _r351_t0 = this;
                var r351_currentGlyph = _r351_t0;
                r351_currentGlyph.include(r271_RevPShape.SlabMotion(r349_top, r349_sw, r349_mul));
                r351_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.mb(r271_Width - r271_SB * r349_mul - r271_HSwToV(r271_HalfStroke), 0, r271_Jut, r349_sw)));
                return void 0;
            };
        };
        r271_RevPShape.SlabCyrlItalic = function (r354_top, r354_sw, r354_mul) {
            var _r354_t0, _r354_t1;
            return function () {
                var _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                r356_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_Width - r271_SB * r354_mul, 0, r271_SideJut, r354_sw)));
                return void 0;
            };
        };
        r271_RevPShape.SlabAsymmetric = function (r358_top, r358_sw, r358_mul) {
            var _r358_t0, _r358_t1;
            return function () {
                var _r360_t1;
                var _r360_t0 = this;
                var r360_currentGlyph = _r360_t0;
                r360_currentGlyph.include(r271_RevPShape.SlabMotion(r358_top, r358_sw, r358_mul));
                r360_currentGlyph.include(r271_tagged('serifRB', r271_union(r271_HSerif.rb(r271_Width - r271_SB * r358_mul, 0, r271_SideJut, r358_sw), r271_HSerif.lb(r271_Width - r271_SB * r358_mul - r271_HSwToV(0.5 * r358_sw), 0, r271_MidJutSide, r358_sw))));
                return void 0;
            };
        };
        r271_RevPShape.OpenGap = function () {
            var _r363_t6;
            var _r363_t7 = arguments;
            var _r363_t0 = [].slice.call(_r363_t7, 0);
            var _r363_t1 = [];
            var _r363_t2 = 0;
            while (_r363_t2 < _r363_t0.length) {
                if (!(_r363_t0[_r363_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r363_t1.push(_r363_t0[_r363_t2]);
                _r363_t2 = _r363_t2 + 1;
            }
            var _r363_t3 = _r363_t0;
            var _r363_t4 = _r363_t3.length;
            var _r363_t5 = 0;
            while (_r363_t5 < _r363_t4) {
                _r363_t2 = _r363_t3[_r363_t5];
                if (_r363_t2 && _r363_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r363_t2.left === 'top')
                    r363_top = _r363_t2.right;
                if (_r363_t2 && _r363_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r363_t2.left === 'bot')
                    r363_bot = _r363_t2.right;
                if (_r363_t2 && _r363_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r363_t2.left === 'mul')
                    r363_mul = _r363_t2.right;
                if (_r363_t2 && _r363_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r363_t2.left === 'bp')
                    r363_bp = _r363_t2.right;
                if (_r363_t2 && _r363_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r363_t2.left === 'sw')
                    r363_sw = _r363_t2.right;
                _r363_t5 = _r363_t5 + 1;
            }
            var r363_top = r1_fallback(r363_top, _r363_t1[0]);
            var r363_bot = r1_fallback(r363_bot, _r363_t1[1], 0);
            var r363_mul = r1_fallback(r363_mul, _r363_t1[2], r271_PShape.defaultMul);
            var r363_bp = r1_fallback(r363_bp, _r363_t1[3], r271_PShape.BarPos);
            var r363_sw = r1_fallback(r363_sw, _r363_t1[4], r271_Stroke);
            return r271_VBar.r(r271_Width - r271_SB * r363_mul - r271_HSwToV(r363_sw), Math.min(r271_PBarPosY(r363_top, r363_sw, r363_bp) - 0.5 * r363_sw - 0.1, r363_bot), Math.max(r271_PBarPosY(r363_top, r363_sw, r363_bp) + 0.5 * r363_sw + 0.1, r1_mix(r363_top, r271_PBarPosY(r363_top, r363_sw, r363_bp), 0.5)), 0.2 * (r271_RightSB - r271_SB) * (r271_AdviceStroke(5) / r271_Stroke));
        };
        var r271_PConfig = {
            'closedSerifless': [
                false,
                null,
                null
            ],
            'openSerifless': [
                true,
                null,
                null
            ],
            'closedMotionSerifed': [
                false,
                r271_PShape.SlabMotion,
                r271_RevPShape.SlabMotion
            ],
            'openMotionSerifed': [
                true,
                r271_PShape.SlabMotion,
                r271_RevPShape.SlabMotion
            ],
            'closedSerifed': [
                false,
                r271_PShape.SlabAsymmetric,
                r271_RevPShape.SlabAsymmetric
            ],
            'openSerifed': [
                true,
                r271_PShape.SlabAsymmetric,
                r271_RevPShape.SlabAsymmetric
            ]
        };
        var _r271_t11 = Object.entries(r271_PConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_fGap = _r271_t13[1][0];
            r271_slabs = _r271_t13[1][1];
            r271_revSlabs = _r271_t13[1][2];
            _r271_t13[1];
            (function () {
                var r370_fMotion = r271_slabs === r271_PShape.SlabMotion;
                var r370_fSlabBot = r271_slabs && r271_slabs !== r271_PShape.SlabMotion;
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('P.' + r271_suffix, null, function () {
                    var _r373_t1;
                    var _r373_t0 = this;
                    var r373_currentGlyph = _r373_t0;
                    r373_currentGlyph.include(r271_MarkSet.capital());
                    r373_currentGlyph.include(r271_LeaningAnchor.Below.VBar.l(r271_SB * r271_PShape.defaultMul));
                    r373_currentGlyph.include(r271_difference(r271_PShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs)), r271_fGap ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('bot', r370_fSlabBot ? r271_Stroke : 0)) : function () {
                        var _r381_t1;
                        var _r381_t0 = this;
                        var r381_currentGlyph = _r381_t0;
                        return void 0;
                    }));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Rho.' + r271_suffix, null, function () {
                    var _r384_t1;
                    var _r384_t0 = this;
                    var r384_currentGlyph = _r384_t0;
                    r384_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r384_currentGlyph.include(r271_SetGrekUpperTonos(r271_slabs ? -r271_SideJut : 0));
                    return void 0;
                });
                if (!r370_fMotion)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('PHookLeft.' + r271_suffix, null, function () {
                        var _r389_t1;
                        var _r389_t0 = this;
                        var r389_currentGlyph = _r389_t0;
                        r389_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE);
                        r389_currentGlyph.ejectTagged('serifLT');
                        r389_currentGlyph.include(r271_LeftHook(r271_SB * 1.25, r271_CAP));
                        return void 0;
                    });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpP.' + r271_suffix, null, function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.include(r271_MarkSet.e());
                    r395_currentGlyph.include(r271_LeaningAnchor.Below.VBar.l(r271_SB * r271_PShape.defaultMul));
                    r395_currentGlyph.include(r271_difference(r271_PShape(r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('slab', r271_slabs)), r271_fGap ? r271_PShape.OpenGap(new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH), new r271_xn$NamedParameterPair$2Lrc9b('bot', r370_fSlabBot ? r271_Stroke : 0)) : function () {
                        var _r403_t1;
                        var _r403_t0 = this;
                        var r403_currentGlyph = _r403_t0;
                        return void 0;
                    }));
                    return void 0;
                });
                if (!r271_fGap)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/rubleSign.' + r271_suffix, null, function () {
                        var _r406_t1;
                        var _r406_t0 = this;
                        var r406_currentGlyph = _r406_t0;
                        r406_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                        var r406_bar1pos = r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos) + r271_HalfStroke;
                        var r406_xCrossBarLeft = r271_SB - r271_SideJut;
                        var r406_xPLeft = r271_SB * r271_PShape.defaultMul + r271_HSwToV(r271_HalfStroke);
                        var r406_xCrossBarRight = r1_mix(r271_SB, r271_RightSB, 0.8);
                        var r406_yBase = r271_slabs === r271_PShape.SlabAsymmetric ? r271_Stroke : 0;
                        var r406_yCrossbar = Math.max(r1_mix(r406_yBase, r406_bar1pos - r271_HalfStroke, 1 / 2), r1_mix(r406_yBase, r406_bar1pos - r271_HalfStroke, 2 / 3) - r271_OverlayStroke / 2);
                        r406_currentGlyph.include(r271_HOverlayBar(r406_xCrossBarLeft, r406_xPLeft, r406_bar1pos, r271_Stroke));
                        r406_currentGlyph.include(r271_HOverlayBar(r406_xCrossBarLeft, r406_xCrossBarRight, r406_yCrossbar));
                        return void 0;
                    });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/pesoSign.' + r271_suffix, null, function () {
                    var _r412_t1;
                    var _r412_t0 = this;
                    var r412_currentGlyph = _r412_t0;
                    r412_currentGlyph.include(r271_xn$referglyph$1aao('P.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r412_bar1pos = r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos);
                    var r412_sw = r271_AdviceStroke(7);
                    var r412_gap = r412_sw + Math.max(r412_sw, r271_CAP * 0.06);
                    r412_currentGlyph.include(r271_HOverlayBar(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5) - r271_O, r1_mix(r412_bar1pos, r271_CAP, 0.5) + 0.5 * r412_gap, r412_sw));
                    r412_currentGlyph.include(r271_HOverlayBar(r1_mix(0, r271_SB, 0.5), r1_mix(r271_Width, r271_RightSB, 0.5) - r271_O, r1_mix(r412_bar1pos, r271_CAP, 0.5) - 0.5 * r412_gap, r412_sw));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('P', 'P');
        r271_xn$linkreducedvariant$5sIl8('P/sansSerif', 'P', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('grek/Rho', 929, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P'));
        r271_xn$linkreducedvariant$5sIl8('grek/Rho/sansSerif', 'grek/Rho', r1_MathSansSerif, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P/sansSerif'));
        r271_xn$selectvariant$7Hrq('smcpP', 7448, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P'));
        r271_alias('grek/smcpRho', 7465, 'smcpP');
        r271_alias('cyrl/Er', 1056, 'P');
        r271_xn$selectvariant$7Hrq('PHookLeft', 420);
        r271_xn$selectvariant$7Hrq('currency/rubleSign', 8381);
        r271_xn$selectvariant$7Hrq('currency/pesoSign', 8369, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'P'));
        r271_xn$deriveglyphs$7Hrq('cyrl/ErTick', 1166, 'cyrl/Er', function (r420_src, r420_gr) {
            var _r420_t0, _r420_t1;
            return function () {
                var _r422_t1;
                var _r422_t0 = this;
                var r422_currentGlyph = _r422_t0;
                r422_currentGlyph.include(r271_xn$referglyph$1aao(r420_src), r271_AS_BASE, r271_ALSO_METRICS);
                var r422_yBowl = r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos) + 0.75 * r271_Stroke;
                r422_currentGlyph.include(r271_dispiro(r271_widths.center(r271_AdviceStroke(4)), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.5), r422_yBowl + r271_XH * 0.25), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.875), r422_yBowl - r271_XH * 0.25)));
                return void 0;
            };
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('PBar/overlay', null, r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_SB * r271_PShape.defaultMul), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_PBarPosY(r271_CAP, r271_Stroke, r271_PShape.BarPos) + r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('space', [
            0,
            r271_RightSB - r271_HSwToV(r271_Stroke)
        ])));
        r271_xn$derivecomposites$7Hrq('PBar', 11363, 'P', 'PBar/overlay');
        var r271_BBPShape = function () {
            var _r430_t6;
            var _r430_t7 = arguments;
            var _r430_t0 = [].slice.call(_r430_t7, 0);
            var _r430_t1 = [];
            var _r430_t2 = 0;
            while (_r430_t2 < _r430_t0.length) {
                if (!(_r430_t0[_r430_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r430_t1.push(_r430_t0[_r430_t2]);
                _r430_t2 = _r430_t2 + 1;
            }
            var _r430_t3 = _r430_t0;
            var _r430_t4 = _r430_t3.length;
            var _r430_t5 = 0;
            while (_r430_t5 < _r430_t4) {
                _r430_t2 = _r430_t3[_r430_t5];
                if (_r430_t2 && _r430_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r430_t2.left === 'mul')
                    r430_mul = _r430_t2.right;
                if (_r430_t2 && _r430_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r430_t2.left === 'overshoot')
                    r430_overshoot = _r430_t2.right;
                _r430_t5 = _r430_t5 + 1;
            }
            var r430_mul = r1_fallback(r430_mul, _r430_t1[0], r271_PShape.defaultMul);
            var r430_overshoot = r1_fallback(r430_overshoot, _r430_t1[1], r271_PShape.defaultOvershoot);
            return function () {
                var _r436_t1;
                var _r436_t0 = this;
                var r436_currentGlyph = _r436_t0;
                var r436_sb = r271_SB * r430_mul;
                r436_currentGlyph.include(r271_difference(r271_PShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('mul', r430_mul), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r430_overshoot), new r271_xn$NamedParameterPair$2Lrc9b('slab', false)), r271_Rect(r271_CAP - r271_BBS, 0, r436_sb + r271_HSwToV(r271_BBS) / 2, r436_sb + r271_BBD)));
                r436_currentGlyph.include(r271_VBar.l(r436_sb, 0, r271_CAP, r271_BBS));
                r436_currentGlyph.include(r271_VBar.l(r436_sb + r271_BBD, 0, r271_CAP, r271_BBS));
                r436_currentGlyph.include(r271_HBar.b(r436_sb, r436_sb + r271_BBD, 0, r271_BBS));
                r436_currentGlyph.include(r271_intersection(r271_PShapeOutline(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('mul', r430_mul), new r271_xn$NamedParameterPair$2Lrc9b('overshoot', r430_overshoot), new r271_xn$NamedParameterPair$2Lrc9b('offset', 1)), r271_VBar.r(r271_RightSB - r430_overshoot - r271_BBD, 0, r271_CAP, r271_BBS)));
                return void 0;
            };
        };
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/P', 8473, function () {
            var _r452_t1;
            var _r452_t0 = this;
            var r452_currentGlyph = _r452_t0;
            r452_currentGlyph.include(r271_MarkSet.capital(), true, true);
            r452_currentGlyph.include(r271_BBPShape());
            return void 0;
        });
    });
    return void 0;
});
