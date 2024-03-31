'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Yeri', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_Yeri, r270_fTail, _r270_t11, _r270_t14, _r270_t15, _r270_t16, _r270_t17, _r270_tag18, _r270_t19, _r270_tag20;
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
        var r270_Ascender = _r270_t1.Ascender;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_TailY = _r270_t1.TailY;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_Jut = _r270_t1.Jut;
        var r270_VJut = _r270_t1.VJut;
        var r270_VJutStroke = _r270_t1.VJutStroke;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_tagged = _r270_t4.tagged;
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Metrics'].resolve();
        var r270_BowlXDepth = _r270_t6.BowlXDepth;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_ShoulderMidKnotLhsRev = _r270_t7.ShoulderMidKnotLhsRev;
        var r270_RightwardTailedBar = _r270_t7.RightwardTailedBar;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_LetterBarOverlay = _r270_t8.LetterBarOverlay;
        var r270_UpwardHookShape = _r270_t8.UpwardHookShape;
        var r270_VerticalHook = _r270_t8.VerticalHook;
        var r270_SerifFrame = _r270_t8.SerifFrame;
        var r270_DefaultBarPos = 0.55;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'CyrlYeriUprightShape': r270_CyrlYeriUprightShape };
        });
        var r270_CyrlYeriUprightShape = function () {
            var _r278_t6;
            var _r278_t7 = arguments;
            var _r278_t0 = [].slice.call(_r278_t7, 0);
            var _r278_t1 = [];
            var _r278_t2 = 0;
            while (_r278_t2 < _r278_t0.length) {
                if (!(_r278_t0[_r278_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r278_t1.push(_r278_t0[_r278_t2]);
                _r278_t2 = _r278_t2 + 1;
            }
            var _r278_t3 = _r278_t0;
            var _r278_t4 = _r278_t3.length;
            var _r278_t5 = 0;
            while (_r278_t5 < _r278_t4) {
                _r278_t2 = _r278_t3[_r278_t5];
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'top')
                    r278_top = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'left')
                    r278_left = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'right')
                    r278_right = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'stroke')
                    r278_stroke = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'jut')
                    r278_jut = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'pBar')
                    r278_pBar = _r278_t2.right;
                if (_r278_t2 && _r278_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r278_t2.left === 'yStart')
                    r278_yStart = _r278_t2.right;
                _r278_t5 = _r278_t5 + 1;
            }
            var r278_top = r1_fallback(r278_top, _r278_t1[0]);
            var r278_left = r1_fallback(r278_left, _r278_t1[1], r270_SB);
            var r278_right = r1_fallback(r278_right, _r278_t1[2], r270_RightSB);
            var r278_stroke = r1_fallback(r278_stroke, _r278_t1[3], r270_Stroke);
            var r278_jut = r1_fallback(r278_jut, _r278_t1[4], r270_Jut);
            var r278_pBar = r1_fallback(r278_pBar, _r278_t1[5], r270_DefaultBarPos);
            var r278_yStart = r1_fallback(r278_yStart, _r278_t1[6], r278_top);
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                var r284_bowl = r278_top * r278_pBar + r270_HalfStroke;
                var r284_turnRadius = r270_BowlXDepth(r284_bowl, 0, r278_left, r278_right, r278_stroke);
                var r284_ada = r270_ArchDepthAOf(r270_ArchDepth, r278_right - r278_left + r270_SB * 2);
                var r284_adb = r270_ArchDepthBOf(r270_ArchDepth, r278_right - r278_left + r270_SB * 2);
                var r284_fine = r278_stroke * r270_CThinB;
                var r284_yTurnBottomL = r270_YSmoothMidL(r284_bowl, 0, r284_ada, r284_adb);
                var r284_yTurnBottomR = r270_YSmoothMidR(r284_bowl, 0, r284_ada, r284_adb);
                r284_currentGlyph.include(r270_union(r270_dispiro(r270_widths.lhs(r278_stroke), r270_flat(r278_left + r270_Stroke * 0.2, 0, r270_heading(r270_Rightward)), r270_curl(Math.max(r278_left + r278_stroke * r270_TanSlope, r278_right - r284_turnRadius) + r270_CorrectionOMidX * r278_stroke, 0), r270_archv(8), r270_g4(r278_right - r270_OX, r284_yTurnBottomR), r270_arcvh(8), r270_flat(Math.max(r278_left + r278_stroke * r270_TanSlope, r278_right - r284_turnRadius) - r270_CorrectionOMidX * r278_stroke, r284_bowl), r270_curl(r278_left + r270_Stroke * 0.2, r284_bowl, r270_heading(r270_Leftward))), r270_VBar.l(r278_left, 0, r278_yStart, r278_stroke)));
                if (r270_SLAB) {
                    r284_currentGlyph.include(r270_tagged('serifYeriLB', r270_HSerif.lb(r278_left, 0, r278_jut - r270_HSwToV(0.5 * r278_stroke), r278_stroke)));
                    r284_currentGlyph.include(r270_tagged('serifYeriLT', r270_HSerif.mt(r278_left + r270_HSwToV(0.5 * r278_stroke), r278_top, r278_jut, r278_stroke)));
                }
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r289_t0, _r289_t1;
            return { 'CyrlYeriRoundShape': r270_CyrlYeriRoundShape };
        });
        var r270_CyrlYeriRoundShape = function () {
            var _r290_t6;
            var _r290_t7 = arguments;
            var _r290_t0 = [].slice.call(_r290_t7, 0);
            var _r290_t1 = [];
            var _r290_t2 = 0;
            while (_r290_t2 < _r290_t0.length) {
                if (!(_r290_t0[_r290_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r290_t1.push(_r290_t0[_r290_t2]);
                _r290_t2 = _r290_t2 + 1;
            }
            var _r290_t3 = _r290_t0;
            var _r290_t4 = _r290_t3.length;
            var _r290_t5 = 0;
            while (_r290_t5 < _r290_t4) {
                _r290_t2 = _r290_t3[_r290_t5];
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'top')
                    r290_top = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'left')
                    r290_left = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'right')
                    r290_right = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'stroke')
                    r290_stroke = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'jut')
                    r290_jut = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'pBar')
                    r290_pBar = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'yStart')
                    r290_yStart = _r290_t2.right;
                _r290_t5 = _r290_t5 + 1;
            }
            var r290_top = r1_fallback(r290_top, _r290_t1[0]);
            var r290_left = r1_fallback(r290_left, _r290_t1[1], r270_SB);
            var r290_right = r1_fallback(r290_right, _r290_t1[2], r270_RightSB);
            var r290_stroke = r1_fallback(r290_stroke, _r290_t1[3], r270_Stroke);
            var r290_jut = r1_fallback(r290_jut, _r290_t1[4], r270_Jut);
            var r290_pBar = r1_fallback(r290_pBar, _r290_t1[5], r270_DefaultBarPos);
            var r290_yStart = r1_fallback(r290_yStart, _r290_t1[6], r290_top);
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_bowl = r290_top * r290_pBar + r270_HalfStroke;
                var r296_turnRadius = r270_BowlXDepth(r296_bowl, 0, r290_left, r290_right, r290_stroke);
                var r296_ada = r270_ArchDepthAOf(r270_ArchDepth, r290_right - r290_left + r270_SB * 2);
                var r296_adb = r270_ArchDepthBOf(r270_ArchDepth, r290_right - r290_left + r270_SB * 2);
                var r296_fine = r290_stroke * r270_CThinB;
                var r296_yTurnBottomL = r270_YSmoothMidL(r296_bowl, 0, r296_ada, r296_adb);
                var r296_yTurnBottomR = r270_YSmoothMidR(r296_bowl, 0, r296_ada, r296_adb);
                r296_currentGlyph.include(r270_dispiro(r270_flat(r290_left, Math.max(r290_yStart, r296_yTurnBottomL + 0.1), r270_widths.lhs.heading(r290_stroke, r270_Downward)), r270_curl(r290_left, r296_yTurnBottomL), r270_arcvh(), r270_g4(r1_mix(r290_left, r290_right, 0.5) + r270_CorrectionOMidX * r290_stroke, r270_O), r270_archv(), r270_g4(r290_right - r270_OX, r296_yTurnBottomR), r270_arcvh(), r270_flat(r1_mix(r290_left, r290_right, 0.5) - r270_CorrectionOMidX * r290_stroke, r296_bowl), r270_curl(r290_left + r270_Stroke * 0.2, r296_bowl, r270_heading(r270_Leftward))));
                if (r270_SLAB)
                    r296_currentGlyph.include(r270_tagged('serifYeriLT', r270_HSerif.lt(r290_left, r290_top, r290_jut - r270_HSwToV(0.5 * r290_stroke), r290_stroke)));
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r300_t0, _r300_t1;
            return { 'CyrlYeriCursiveShape': r270_CyrlYeriCursiveShape };
        });
        var r270_CyrlYeriCursiveShape = function () {
            var _r301_t6;
            var _r301_t7 = arguments;
            var _r301_t0 = [].slice.call(_r301_t7, 0);
            var _r301_t1 = [];
            var _r301_t2 = 0;
            while (_r301_t2 < _r301_t0.length) {
                if (!(_r301_t0[_r301_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r301_t1.push(_r301_t0[_r301_t2]);
                _r301_t2 = _r301_t2 + 1;
            }
            var _r301_t3 = _r301_t0;
            var _r301_t4 = _r301_t3.length;
            var _r301_t5 = 0;
            while (_r301_t5 < _r301_t4) {
                _r301_t2 = _r301_t3[_r301_t5];
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'top')
                    r301_top = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'left')
                    r301_left = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'right')
                    r301_right = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'stroke')
                    r301_stroke = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'jut')
                    r301_jut = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'pBar')
                    r301_pBar = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'yStart')
                    r301_yStart = _r301_t2.right;
                _r301_t5 = _r301_t5 + 1;
            }
            var r301_top = r1_fallback(r301_top, _r301_t1[0]);
            var r301_left = r1_fallback(r301_left, _r301_t1[1], r270_SB);
            var r301_right = r1_fallback(r301_right, _r301_t1[2], r270_RightSB);
            var r301_stroke = r1_fallback(r301_stroke, _r301_t1[3], r270_Stroke);
            var r301_jut = r1_fallback(r301_jut, _r301_t1[4], r270_Jut);
            var r301_pBar = r1_fallback(r301_pBar, _r301_t1[5], r270_DefaultBarPos);
            var r301_yStart = r1_fallback(r301_yStart, _r301_t1[6], r301_top);
            return function () {
                var _r307_t1;
                var _r307_t0 = this;
                var r307_currentGlyph = _r307_t0;
                var r307_bowl = r301_top * r301_pBar + r270_HalfStroke;
                var r307_turnRadius = r270_BowlXDepth(r307_bowl, 0, r301_left, r301_right, r301_stroke);
                var r307_ada = r270_ArchDepthAOf(r270_ArchDepth, r301_right - r301_left + r270_SB * 2);
                var r307_adb = r270_ArchDepthBOf(r270_ArchDepth, r301_right - r301_left + r270_SB * 2);
                var r307_fine = r301_stroke * r270_CThinB;
                var r307_yTurnBottomL = r270_YSmoothMidL(r307_bowl, 0, r307_ada, r307_adb);
                var r307_yTurnBottomR = r270_YSmoothMidR(r307_bowl, 0, r307_ada, r307_adb);
                r307_currentGlyph.include(r270_dispiro(r270_flat(r301_left, Math.max(r301_yStart, r307_yTurnBottomL + 0.1), r270_widths.lhs.heading(r301_stroke, r270_Downward)), r270_curl(r301_left, r307_yTurnBottomL), r270_arcvh(), r270_g4(r1_mix(r301_left, r301_right, 0.5) + r270_CorrectionOMidX * r301_stroke, r270_O), r270_archv(), r270_g4(r301_right - r270_OX, r307_yTurnBottomR), r270_arcvh(), r270_ShoulderMidKnotLhsRev(r1_mix(r301_left, r301_right, 0.5), r307_bowl, r307_fine, r301_stroke, -1, -1), r270_archv(), r270_g4.down.end(r301_left + (r301_stroke - r307_fine) * r270_HVContrast, r307_yTurnBottomL, r270_widths.lhs.heading(r307_fine, r270_Downward))));
                if (r270_SLAB)
                    r307_currentGlyph.include(r270_tagged('serifYeriLT', r270_HSerif.lt(r301_left, r301_top, r301_jut - r270_HSwToV(0.5 * r301_stroke), r301_stroke)));
                return void 0;
            };
        };
        var r270_RevCyrYeriShape = function () {
            var _r310_t6;
            var _r310_t7 = arguments;
            var _r310_t0 = [].slice.call(_r310_t7, 0);
            var _r310_t1 = [];
            var _r310_t2 = 0;
            while (_r310_t2 < _r310_t0.length) {
                if (!(_r310_t0[_r310_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r310_t1.push(_r310_t0[_r310_t2]);
                _r310_t2 = _r310_t2 + 1;
            }
            var _r310_t3 = _r310_t0;
            var _r310_t4 = _r310_t3.length;
            var _r310_t5 = 0;
            while (_r310_t5 < _r310_t4) {
                _r310_t2 = _r310_t3[_r310_t5];
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'top')
                    r310_top = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'left')
                    r310_left = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'right')
                    r310_right = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'stroke')
                    r310_stroke = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'jut')
                    r310_jut = _r310_t2.right;
                if (_r310_t2 && _r310_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r310_t2.left === 'pBar')
                    r310_pBar = _r310_t2.right;
                _r310_t5 = _r310_t5 + 1;
            }
            var r310_top = r1_fallback(r310_top, _r310_t1[0]);
            var r310_left = r1_fallback(r310_left, _r310_t1[1], r270_SB);
            var r310_right = r1_fallback(r310_right, _r310_t1[2], r270_RightSB);
            var r310_stroke = r1_fallback(r310_stroke, _r310_t1[3], r270_Stroke);
            var r310_jut = r1_fallback(r310_jut, _r310_t1[4], r270_Jut);
            var r310_pBar = r1_fallback(r310_pBar, _r310_t1[5], r270_DefaultBarPos);
            return function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                var r316_bowl = r310_top * r310_pBar + r270_HalfStroke;
                var r316_turnRadius = r316_bowl * 0.45;
                var r316_turnbottom = r1_mix(0, r316_bowl, r270_ArchDepthB / (r270_ArchDepthA + r270_ArchDepthB));
                var r316_trShrink = Math.pow((r310_right - r310_left) / (r270_RightSB - r270_SB), 0.5);
                r316_currentGlyph.include(r270_dispiro(r270_widths.rhs(r310_stroke), r270_flat(r310_right - r270_Stroke * 0.2, 0, r270_heading(r270_Leftward)), r270_curl(r310_left + r316_turnRadius * r316_trShrink + r270_CorrectionOMidX * r310_stroke, 0), r270_archv(), r270_g4(r310_left + r270_O, r316_turnbottom), r270_arcvh(), r270_flat(r310_left + r316_turnRadius * r316_trShrink - r270_CorrectionOMidX * r310_stroke, r316_bowl), r270_curl(r310_right - r270_Stroke * 0.2, r316_bowl, r270_heading(r270_Rightward))));
                r316_currentGlyph.include(r270_VBar.r(r310_right, 0, r310_top, r310_stroke));
                if (r270_SLAB) {
                    r316_currentGlyph.include(r270_tagged('serifYeriRB', r270_HSerif.rb(r310_right, 0, r310_jut - r270_HSwToV(0.5 * r310_stroke), r310_stroke)));
                    r316_currentGlyph.include(r270_tagged('serifYeriRT', r270_HSerif.mt(r310_right - r270_HSwToV(0.5 * r310_stroke), r310_top, r310_jut, r310_stroke)));
                }
                return void 0;
            };
        };
        var r270_RevCyrYeriRoundShape = function () {
            var _r321_t6;
            var _r321_t7 = arguments;
            var _r321_t0 = [].slice.call(_r321_t7, 0);
            var _r321_t1 = [];
            var _r321_t2 = 0;
            while (_r321_t2 < _r321_t0.length) {
                if (!(_r321_t0[_r321_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r321_t1.push(_r321_t0[_r321_t2]);
                _r321_t2 = _r321_t2 + 1;
            }
            var _r321_t3 = _r321_t0;
            var _r321_t4 = _r321_t3.length;
            var _r321_t5 = 0;
            while (_r321_t5 < _r321_t4) {
                _r321_t2 = _r321_t3[_r321_t5];
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'top')
                    r321_top = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'left')
                    r321_left = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'right')
                    r321_right = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'stroke')
                    r321_stroke = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'jut')
                    r321_jut = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'pBar')
                    r321_pBar = _r321_t2.right;
                if (_r321_t2 && _r321_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'yStart')
                    r321_yStart = _r321_t2.right;
                _r321_t5 = _r321_t5 + 1;
            }
            var r321_top = r1_fallback(r321_top, _r321_t1[0]);
            var r321_left = r1_fallback(r321_left, _r321_t1[1], r270_SB);
            var r321_right = r1_fallback(r321_right, _r321_t1[2], r270_RightSB);
            var r321_stroke = r1_fallback(r321_stroke, _r321_t1[3], r270_Stroke);
            var r321_jut = r1_fallback(r321_jut, _r321_t1[4], r270_Jut);
            var r321_pBar = r1_fallback(r321_pBar, _r321_t1[5], r270_DefaultBarPos);
            var r321_yStart = r1_fallback(r321_yStart, _r321_t1[6], r321_top);
            return function () {
                var _r327_t1;
                var _r327_t0 = this;
                var r327_currentGlyph = _r327_t0;
                var r327_bowl = r321_top * r321_pBar + r270_HalfStroke;
                var r327_turnRadius = r270_BowlXDepth(r327_bowl, 0, r321_left, r321_right, r321_stroke);
                var r327_ada = r270_ArchDepthAOf(r270_ArchDepth, r321_right - r321_left + r270_SB * 2);
                var r327_adb = r270_ArchDepthBOf(r270_ArchDepth, r321_right - r321_left + r270_SB * 2);
                var r327_fine = r321_stroke * r270_CThinB;
                var r327_yTurnBottomL = r270_YSmoothMidL(r327_bowl, 0, r327_ada, r327_adb);
                var r327_yTurnBottomR = r270_YSmoothMidR(r327_bowl, 0, r327_ada, r327_adb);
                r327_currentGlyph.include(r270_dispiro(r270_flat(r321_right, Math.max(r321_yStart, r327_yTurnBottomR + 0.1), r270_widths.rhs.heading(r321_stroke, r270_Downward)), r270_curl(r321_right, r327_yTurnBottomR), r270_arcvh(), r270_g4(r1_mix(r321_left, r321_right, 0.5) + r270_CorrectionOMidX * r321_stroke, r270_O), r270_archv(), r270_g4(r321_left + r270_OX, r327_yTurnBottomL), r270_arcvh(), r270_flat(r1_mix(r321_left, r321_right, 0.5) - r270_CorrectionOMidX * r321_stroke, r327_bowl), r270_curl(r321_right - r270_Stroke * 0.2, r327_bowl, r270_heading(r270_Rightward))));
                return void 0;
            };
        };
        var r270_CyrBackYerShape = function () {
            var _r329_t6;
            var _r329_t7 = arguments;
            var _r329_t0 = [].slice.call(_r329_t7, 0);
            var _r329_t1 = [];
            var _r329_t2 = 0;
            while (_r329_t2 < _r329_t0.length) {
                if (!(_r329_t0[_r329_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r329_t1.push(_r329_t0[_r329_t2]);
                _r329_t2 = _r329_t2 + 1;
            }
            var _r329_t3 = _r329_t0;
            var _r329_t4 = _r329_t3.length;
            var _r329_t5 = 0;
            while (_r329_t5 < _r329_t4) {
                _r329_t2 = _r329_t3[_r329_t5];
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'Yeri')
                    r329_Yeri = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'top')
                    r329_top = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'left')
                    r329_left = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'right')
                    r329_right = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'stroke')
                    r329_stroke = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'jut')
                    r329_jut = _r329_t2.right;
                if (_r329_t2 && _r329_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r329_t2.left === 'pBar')
                    r329_pBar = _r329_t2.right;
                _r329_t5 = _r329_t5 + 1;
            }
            var r329_Yeri = r1_fallback(r329_Yeri, _r329_t1[0]);
            var r329_top = r1_fallback(r329_top, _r329_t1[1]);
            var r329_left = r1_fallback(r329_left, _r329_t1[2]);
            var r329_right = r1_fallback(r329_right, _r329_t1[3]);
            var r329_stroke = r1_fallback(r329_stroke, _r329_t1[4], r270_Stroke);
            var r329_jut = r1_fallback(r329_jut, _r329_t1[5], r270_Jut);
            var r329_pBar = r1_fallback(r329_pBar, _r329_t1[6], r270_DefaultBarPos);
            return function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                var r335_xLeftBarLeftEdge = Math.max(r329_right - (r270_RightSB - r270_SB), r270_SLAB ? r1_mix(r329_left, r329_right, 0.35) - r270_HSwToV(0.5 * r329_stroke) : r1_mix(r329_left, r329_right, 0.2) - r270_HSwToV(0.25 * r329_stroke));
                var r335_xTopBarLeftEnd = r1_mix(0, r329_left, r270_SLAB ? 0.25 : 0.375);
                r335_currentGlyph.include(r270_HBar.t(r335_xTopBarLeftEnd, r270_Stroke * 0.1 + r335_xLeftBarLeftEdge, r329_top, r329_stroke));
                r335_currentGlyph.include(r329_Yeri(r329_top, new r270_xn$NamedParameterPair$2Lrc9b('left', r335_xLeftBarLeftEdge), new r270_xn$NamedParameterPair$2Lrc9b('right', r329_right), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r329_stroke), new r270_xn$NamedParameterPair$2Lrc9b('jut', r329_jut), new r270_xn$NamedParameterPair$2Lrc9b('pBar', r329_pBar)));
                if (r270_SLAB)
                    r335_currentGlyph.include(r270_VSerif.dl(r335_xTopBarLeftEnd, r329_top, r270_VJut, Math.min(r270_VJutStroke * r329_stroke / r270_Stroke, 0.625 * (r335_xLeftBarLeftEdge - r335_xTopBarLeftEnd))));
                return void 0;
            };
        };
        var r270_CyrNeutralYerShape = function () {
            var _r344_t6;
            var _r344_t7 = arguments;
            var _r344_t0 = [].slice.call(_r344_t7, 0);
            var _r344_t1 = [];
            var _r344_t2 = 0;
            while (_r344_t2 < _r344_t0.length) {
                if (!(_r344_t0[_r344_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r344_t1.push(_r344_t0[_r344_t2]);
                _r344_t2 = _r344_t2 + 1;
            }
            var _r344_t3 = _r344_t0;
            var _r344_t4 = _r344_t3.length;
            var _r344_t5 = 0;
            while (_r344_t5 < _r344_t4) {
                _r344_t2 = _r344_t3[_r344_t5];
                if (_r344_t2 && _r344_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r344_t2.left === 'Yeri')
                    r344_Yeri = _r344_t2.right;
                if (_r344_t2 && _r344_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r344_t2.left === 'top')
                    r344_top = _r344_t2.right;
                if (_r344_t2 && _r344_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r344_t2.left === 'left')
                    r344_left = _r344_t2.right;
                if (_r344_t2 && _r344_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r344_t2.left === 'right')
                    r344_right = _r344_t2.right;
                if (_r344_t2 && _r344_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r344_t2.left === 'stroke')
                    r344_stroke = _r344_t2.right;
                if (_r344_t2 && _r344_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r344_t2.left === 'jut')
                    r344_jut = _r344_t2.right;
                _r344_t5 = _r344_t5 + 1;
            }
            var r344_Yeri = r1_fallback(r344_Yeri, _r344_t1[0]);
            var r344_top = r1_fallback(r344_top, _r344_t1[1]);
            var r344_left = r1_fallback(r344_left, _r344_t1[2]);
            var r344_right = r1_fallback(r344_right, _r344_t1[3]);
            var r344_stroke = r1_fallback(r344_stroke, _r344_t1[4], r270_Stroke);
            var r344_jut = r1_fallback(r344_jut, _r344_t1[5], r270_Jut);
            return function () {
                var _r350_t1;
                var _r350_t0 = this;
                var r350_currentGlyph = _r350_t0;
                var r350_xLeftBarLeftEdge = Math.max(r344_right - (r270_RightSB - r270_SB), r270_SLAB ? r1_mix(r344_left, r344_right, 0.35) - r270_HSwToV(0.5 * r344_stroke) : r1_mix(r344_left, r344_right, 0.2) - r270_HSwToV(0.25 * r344_stroke));
                var r350_xTopBarLeftEnd = r1_mix(0, r344_left, r270_SLAB ? 0.25 : 0.375);
                r350_currentGlyph.include(r344_Yeri(r344_top, new r270_xn$NamedParameterPair$2Lrc9b('left', r350_xLeftBarLeftEdge), new r270_xn$NamedParameterPair$2Lrc9b('right', r344_right), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r344_stroke), new r270_xn$NamedParameterPair$2Lrc9b('jut', r344_jut), new r270_xn$NamedParameterPair$2Lrc9b('yStart', r344_top - r270_TailY - 0.5 * r344_stroke)));
                r350_currentGlyph.ejectTagged('serifYeriLT');
                r350_currentGlyph.include(r270_VerticalHook.l(r350_xLeftBarLeftEdge, r344_top - r270_TailY - 0.5 * r344_stroke, r350_xTopBarLeftEnd - r350_xLeftBarLeftEdge - 0.5 * r344_stroke, -r270_TailY, r344_stroke));
                return void 0;
            };
        };
        var r270_CyrYeryShape = function (r359_Yeri, r359_df, r359_top, r359_fBackYer, r359_fTail) {
            var _r359_t0, _r359_t1;
            return function () {
                var _r361_t1;
                var _r361_t0 = this;
                var r361_currentGlyph = _r361_t0;
                var r361_sw = r359_fBackYer ? r270_AdviceStroke(3.25, r359_df.div) : r359_df.mvs;
                var r361_jut = Math.min(r270_Jut, Math.pow(r361_sw / r270_Stroke, 0.5) * r270_Jut);
                var r361_xm = r1_mix(r359_df.rightSB - r270_HSwToV(r361_sw), r359_df.middle + r270_HSwToV(0.5 * r361_sw), 0.75);
                r361_currentGlyph.include(r359_fBackYer ? r270_CyrBackYerShape(r359_Yeri, new r270_xn$NamedParameterPair$2Lrc9b('top', r359_top), new r270_xn$NamedParameterPair$2Lrc9b('left', r359_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r361_xm), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r361_sw), new r270_xn$NamedParameterPair$2Lrc9b('jut', r361_jut)) : r359_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('top', r359_top), new r270_xn$NamedParameterPair$2Lrc9b('left', r359_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r361_xm), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r361_sw), new r270_xn$NamedParameterPair$2Lrc9b('jut', r361_jut)));
                r361_currentGlyph.include(r359_fTail ? r270_RightwardTailedBar(r359_df.rightSB, 0, r359_top, r361_sw) : r270_VBar.r(r359_df.rightSB, 0, r359_top, r361_sw));
                if (r270_SLAB) {
                    r361_currentGlyph.include(r270_tagged('serifRT', r359_Yeri !== r270_CyrlYeriUprightShape ? function () {
                        var _r376_t1;
                        var _r376_t0 = this;
                        var r376_currentGlyph = _r376_t0;
                        return void 0;
                    } : r270_HSerif.mt(r359_df.rightSB - r270_HSwToV(0.5 * r361_sw), r359_top, r361_jut, r361_sw)));
                    if (!r359_fTail)
                        r361_currentGlyph.include(r270_tagged('serifRB', r359_Yeri !== r270_CyrlYeriUprightShape ? r270_HSerif.rb(r359_df.rightSB, 0, r361_jut - r270_HSwToV(0.5 * r361_sw), r361_sw) : r270_HSerif.mb(r359_df.rightSB - r270_HSwToV(0.5 * r361_sw), 0, r361_jut, r361_sw)));
                }
                return void 0;
            };
        };
        var r270_ZhuangToneSixShape = function (r378_Yeri, r378_top) {
            var _r378_t0, _r378_t1;
            return function () {
                var _r380_t1;
                var _r380_t0 = this;
                var r380_currentGlyph = _r380_t0;
                var r380_xLeft = r1_mix(r270_SB, r270_RightSB, 0.2) - r270_HSwToV(0.125 * r270_Stroke);
                r380_currentGlyph.include(r378_Yeri(r378_top, new r270_xn$NamedParameterPair$2Lrc9b('left', r380_xLeft), new r270_xn$NamedParameterPair$2Lrc9b('right', r270_RightSB)));
                r380_currentGlyph.ejectTagged('serifYeriLT');
                r380_currentGlyph.include(r270_dispiro(r270_corner(r380_xLeft, r378_top, r270_widths.lhs(r270_AdviceStroke(5.5))), r270_corner(0.25 * r380_xLeft, r378_top - r380_xLeft)));
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r387_t0, _r387_t1;
            return { 'YeriConfig': r270_YeriConfig };
        });
        var r270_YeriConfig = {
            'corner': [r270_CyrlYeriUprightShape],
            'round': [r270_CyrlYeriRoundShape],
            'cursive': [r270_CyrlYeriCursiveShape]
        };
        var r270_YeryConfig = {
            'corner': [
                r270_CyrlYeriUprightShape,
                false
            ],
            'round': [
                r270_CyrlYeriRoundShape,
                false
            ],
            'cursive': [
                r270_CyrlYeriCursiveShape,
                false
            ],
            'cornerTailed': [
                r270_CyrlYeriUprightShape,
                true
            ],
            'roundTailed': [
                r270_CyrlYeriRoundShape,
                true
            ],
            'cursiveTailed': [
                r270_CyrlYeriCursiveShape,
                true
            ]
        };
        var r270_YeriOverlayBar = function (r388_df, r388_top) {
            var _r388_t0, _r388_t1;
            var r388_stroke = r270_AdviceStroke2(2, 3, r388_top);
            return r270_LetterBarOverlay.l.in(new r270_xn$NamedParameterPair$2Lrc9b('x', r388_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('bot', r388_top * r270_DefaultBarPos + r388_stroke / 2), new r270_xn$NamedParameterPair$2Lrc9b('top', r388_top - (r270_SLAB ? r270_Stroke : 0)));
        };
        var _r270_t9 = Object.entries(r270_YeriConfig)[Symbol.iterator]();
        var _r270_t10 = void 0;
        while (!(_r270_t10 = _r270_t9.next()).done) {
            _r270_t11 = _r270_t10.value;
            r270_suffix = _r270_t11[0];
            r270_Yeri = _r270_t11[1][0];
            _r270_t11[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yeri.' + r270_suffix, null, function () {
                    var _r397_t1;
                    var _r397_t0 = this;
                    var r397_currentGlyph = _r397_t0;
                    var r397_df = r397_currentGlyph.include(r270_DivFrame(1));
                    r397_currentGlyph.include(r397_df.markSet.capital());
                    r397_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r397_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r397_df.rightSB), r270_CAP));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yeri.' + r270_suffix, null, function () {
                    var _r405_t1;
                    var _r405_t0 = this;
                    var r405_currentGlyph = _r405_t0;
                    var r405_df = r405_currentGlyph.include(r270_DivFrame(1));
                    r405_currentGlyph.include(r405_df.markSet.e());
                    r405_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r405_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r405_df.rightSB), r270_XH));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YeriBar.' + r270_suffix, null, function () {
                    var _r413_t1;
                    var _r413_t0 = this;
                    var r413_currentGlyph = _r413_t0;
                    var r413_df = r413_currentGlyph.include(r270_DivFrame(1));
                    r413_currentGlyph.include(r413_df.markSet.capital());
                    r413_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r413_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r413_df.rightSB), r270_CAP));
                    r413_currentGlyph.include(r270_YeriOverlayBar(r413_df, r270_CAP));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yeriBar.' + r270_suffix, null, function () {
                    var _r422_t1;
                    var _r422_t0 = this;
                    var r422_currentGlyph = _r422_t0;
                    var r422_df = r422_currentGlyph.include(r270_DivFrame(1));
                    r422_currentGlyph.include(r422_df.markSet.e());
                    r422_currentGlyph.include(r270_Yeri(new r270_xn$NamedParameterPair$2Lrc9b('left', r422_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r422_df.rightSB), r270_XH));
                    r422_currentGlyph.include(r270_YeriOverlayBar(r422_df, r270_XH));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yer.' + r270_suffix, null, function () {
                    var _r431_t1;
                    var _r431_t0 = this;
                    var r431_currentGlyph = _r431_t0;
                    var r431_df = r431_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5)));
                    r431_currentGlyph.include(r431_df.markSet.capital());
                    r431_currentGlyph.include(r270_CyrBackYerShape(r270_Yeri, r270_CAP, new r270_xn$NamedParameterPair$2Lrc9b('left', r431_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r431_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yer.' + r270_suffix, null, function () {
                    var _r439_t1;
                    var _r439_t0 = this;
                    var r439_currentGlyph = _r439_t0;
                    var r439_df = r439_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5)));
                    r439_currentGlyph.include(r439_df.markSet.e());
                    r439_currentGlyph.include(r270_CyrBackYerShape(r270_Yeri, r270_XH, new r270_xn$NamedParameterPair$2Lrc9b('left', r439_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r439_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yerTall.' + r270_suffix, null, function () {
                    var _r447_t1;
                    var _r447_t0 = this;
                    var r447_currentGlyph = _r447_t0;
                    var r447_df = r447_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5)));
                    r447_currentGlyph.include(r447_df.markSet.b());
                    r447_currentGlyph.include(r270_CyrBackYerShape(r270_Yeri, r270_Ascender, new r270_xn$NamedParameterPair$2Lrc9b('left', r447_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r447_df.rightSB), new r270_xn$NamedParameterPair$2Lrc9b('pBar', r270_DefaultBarPos * r270_XH / r270_Ascender)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YerNeutral.' + r270_suffix, null, function () {
                    var _r456_t1;
                    var _r456_t0 = this;
                    var r456_currentGlyph = _r456_t0;
                    var r456_df = r456_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5)));
                    r456_currentGlyph.include(r456_df.markSet.capital());
                    r456_currentGlyph.include(r270_CyrNeutralYerShape(r270_Yeri, r270_CAP, new r270_xn$NamedParameterPair$2Lrc9b('left', r456_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r456_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yerNeutral.' + r270_suffix, null, function () {
                    var _r464_t1;
                    var _r464_t0 = this;
                    var r464_currentGlyph = _r464_t0;
                    var r464_df = r464_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 0.5)));
                    r464_currentGlyph.include(r464_df.markSet.e());
                    r464_currentGlyph.include(r270_CyrNeutralYerShape(r270_Yeri, r270_XH, new r270_xn$NamedParameterPair$2Lrc9b('left', r464_df.leftSB), new r270_xn$NamedParameterPair$2Lrc9b('right', r464_df.rightSB)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('ZhuangToneSix.' + r270_suffix, null, function () {
                    var _r472_t1;
                    var _r472_t0 = this;
                    var r472_currentGlyph = _r472_t0;
                    r472_currentGlyph.include(r270_MarkSet.capital());
                    r472_currentGlyph.include(r270_ZhuangToneSixShape(r270_Yeri, r270_CAP));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('zhuangToneSix.' + r270_suffix, null, function () {
                    var _r477_t1;
                    var _r477_t0 = this;
                    var r477_currentGlyph = _r477_t0;
                    r477_currentGlyph.include(r270_MarkSet.e());
                    r477_currentGlyph.include(r270_ZhuangToneSixShape(r270_Yeri, r270_XH));
                    return void 0;
                });
            }());
        }
        var _r270_t12 = Object.entries(r270_YeryConfig)[Symbol.iterator]();
        var _r270_t13 = void 0;
        while (!(_r270_t13 = _r270_t12.next()).done) {
            _r270_t14 = _r270_t13.value;
            r270_suffix = _r270_t14[0];
            r270_Yeri = _r270_t14[1][0];
            r270_fTail = _r270_t14[1][1];
            _r270_t14[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yery.' + r270_suffix, null, function () {
                    var _r485_t1;
                    var _r485_t0 = this;
                    var r485_currentGlyph = _r485_t0;
                    var r485_df = r485_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3));
                    r485_currentGlyph.include(r485_df.markSet.capital());
                    r485_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r485_df, r270_CAP, false, r270_fTail));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yery.' + r270_suffix, null, function () {
                    var _r491_t1;
                    var _r491_t0 = this;
                    var r491_currentGlyph = _r491_t0;
                    var r491_df = r491_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3));
                    r491_currentGlyph.include(r491_df.markSet.e());
                    r491_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r491_df, r270_XH, false, r270_fTail));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YeryBack.' + r270_suffix, null, function () {
                    var _r497_t1;
                    var _r497_t0 = this;
                    var r497_currentGlyph = _r497_t0;
                    var r497_df = r497_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3));
                    r497_currentGlyph.include(r497_df.markSet.capital());
                    r497_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r497_df, r270_CAP, true, r270_fTail));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yeryBack.' + r270_suffix, null, function () {
                    var _r503_t1;
                    var _r503_t0 = this;
                    var r503_currentGlyph = _r503_t0;
                    var r503_df = r503_currentGlyph.include(r270_DivFrame(r1_mix(1, r270_para.diversityM, 1.5), 3));
                    r503_currentGlyph.include(r503_df.markSet.e());
                    r503_currentGlyph.include(r270_CyrYeryShape(r270_Yeri, r503_df, r270_XH, true, r270_fTail));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/Yer', 1066);
        r270_xn$selectvariant$7Hrq('cyrl/yer', 1098);
        r270_xn$selectvariant$7Hrq('cyrl/yer.BGR', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/yer'));
        r270_xn$selectvariant$7Hrq('cyrl/yerTall', 7302, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yer'));
        r270_xn$selectvariant$7Hrq('cyrl/Yery', 1067);
        r270_xn$selectvariant$7Hrq('cyrl/yery', 1099);
        r270_xn$selectvariant$7Hrq('cyrl/Yeri', 1068);
        r270_xn$selectvariant$7Hrq('cyrl/yeri', 1100);
        r270_xn$selectvariant$7Hrq('cyrl/yeri.BGR', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/yeri'));
        r270_xn$selectvariant$7Hrq('cyrl/YeriBar', 1164, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yeri'));
        r270_xn$selectvariant$7Hrq('cyrl/yeriBar', 1165, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yeri'));
        r270_xn$selectvariant$7Hrq('cyrl/YerNeutral', 42574, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yer'));
        r270_xn$selectvariant$7Hrq('cyrl/yerNeutral', 42575, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yer'));
        r270_xn$selectvariant$7Hrq('cyrl/YeryBack', 42576, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yery'));
        r270_xn$selectvariant$7Hrq('cyrl/yeryBack', 42577, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yery'));
        r270_xn$selectvariant$7Hrq('ZhuangToneSix', 388, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yer'));
        r270_xn$selectvariant$7Hrq('zhuangToneSix', 389, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yer'));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Be', 1041, function () {
            var _r520_t1;
            var _r520_t0 = this;
            var r520_currentGlyph = _r520_t0;
            r520_currentGlyph.include(r270_MarkSet.capital());
            r520_currentGlyph.include(r270_CyrlYeriUprightShape(r270_CAP));
            r520_currentGlyph.include(r270_HBar.m(r270_SB, r1_mix(r270_SB, r270_RightSB, 0.9), r270_CAP - r270_HalfStroke));
            if (r270_SLAB)
                r520_currentGlyph.include(r270_VSerif.dr(r1_mix(r270_SB, r270_RightSB, 0.9), r270_CAP, r270_VJut));
            return void 0;
        });
        r270_alias('latn/Be', 386, 'cyrl/Be');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('latn/De', 395, function () {
            var _r527_t1;
            var _r527_t0 = this;
            var r527_currentGlyph = _r527_t0;
            r527_currentGlyph.include(r270_MarkSet.capital());
            r527_currentGlyph.include(r270_RevCyrYeriShape(r270_CAP));
            r527_currentGlyph.include(r270_HBar.t(r1_mix(r270_RightSB, r270_SB, 0.9), r270_RightSB + r270_O, r270_CAP));
            if (r270_SLAB)
                r527_currentGlyph.include(r270_VSerif.dl(r1_mix(r270_RightSB, r270_SB, 0.9), r270_CAP, r270_VJut));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DeKomi', 1280, function () {
            var _r534_t1;
            var _r534_t0 = this;
            var r534_currentGlyph = _r534_t0;
            r534_currentGlyph.include(r270_MarkSet.capital());
            r534_currentGlyph.include(r270_RevCyrYeriShape(r270_CAP));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DjeKomi', 1282, function () {
            var r539_sf2, _r539_t1;
            var _r539_t0 = this;
            var r539_currentGlyph = _r539_t0;
            var r539_df = r539_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r539_currentGlyph.include(r539_df.markSet.capital());
            var r539_xm = r539_df.middle + r270_HSwToV(0.5 * r539_df.mvs);
            r539_currentGlyph.include(r270_RevCyrYeriRoundShape(r270_CAP, r539_df.leftSB, r539_xm, r539_df.mvs));
            r539_currentGlyph.include(r270_UpwardHookShape(new r270_xn$NamedParameterPair$2Lrc9b('left', r539_df.middle - r270_HSwToV(0.5 * r539_df.mvs)), new r270_xn$NamedParameterPair$2Lrc9b('right', r539_df.rightSB), new r270_xn$NamedParameterPair$2Lrc9b('ybegin', r270_CAP), new r270_xn$NamedParameterPair$2Lrc9b('yend', r270_CAP / 2), new r270_xn$NamedParameterPair$2Lrc9b('ada', r270_SmallArchDepthA * 0.6 * r539_df.div), new r270_xn$NamedParameterPair$2Lrc9b('adb', r270_SmallArchDepthB * 0.6 * r539_df.div), new r270_xn$NamedParameterPair$2Lrc9b('sw', r539_df.mvs)));
            if (r270_SLAB) {
                r539_currentGlyph.include(r270_HSerif.mt(r539_df.middle, r270_CAP, r270_Jut, r539_df.mvs));
                r539_sf2 = r270_SerifFrame.fromDf(r539_df, r270_CAP / 2, 0).slice(1, 2);
                r539_currentGlyph.include(r539_sf2.rt.full);
            }
            return void 0;
        });
    });
    return void 0;
});
