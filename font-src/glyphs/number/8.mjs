'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Eight', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThin = _r270_t1.CThin;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_close = _r270_t2.close;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_alsoThruThem = _r270_t2.alsoThruThem;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Shared'].resolve();
        var r270_CodeLnum = _r270_t6.CodeLnum;
        var r270_CodeOnum = _r270_t6.CodeOnum;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t7.BBS;
        var r270_BBD = _r270_t7.BBD;
        var r270_EightPr = r270_StrokeWidthBlend(0.85, 0.925);
        var r270_EightShape = function (r275_top) {
            var _r275_t0, _r275_t1;
            var r275_stroke = r270_AdviceStroke2(2, 3, r270_CAP);
            var r275_p = 0.96;
            var r275_l = r270_SB + r270_OX;
            var r275_r = r270_RightSB - r270_OX;
            return r270_dispiro(r270_widths.rhs(r275_stroke), r270_g4.right.mid(r270_Middle - r270_CorrectionOMidS, r275_top - r270_O), r270_archv(), r270_g4(r1_mix(r275_l, r275_r, r275_p), r275_top - r270_ArchDepthBOf(r270_ArchDepth * r270_EightPr * r275_p, r270_Width)), r270_alsoThru.g2(0.5, 0.5, r270_widths.center(r275_stroke)), r270_g4(r275_l, r270_ArchDepthBOf(r270_ArchDepth * r270_EightPr, r270_Width), r270_widths.lhs(r275_stroke)), r270_arcvh(), r270_g4.right.mid(r270_Middle + r270_CorrectionOMidS, r270_O), r270_archv(), r270_g4(r275_r, r270_ArchDepthAOf(r270_ArchDepth * r270_EightPr, r270_Width), r270_widths.lhs(r275_stroke)), r270_alsoThru.g2(0.5, 0.5, r270_widths.center(r275_stroke)), r270_g4(r1_mix(r275_r, r275_l, r275_p), r275_top - r270_ArchDepthAOf(r270_ArchDepth * r270_EightPr * r275_p, r270_Width), r270_widths.rhs(r275_stroke)), r270_arcvh(), r270_close());
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('eight.lnum.crossing', null, function () {
            var _r278_t1;
            var _r278_t0 = this;
            var r278_currentGlyph = _r278_t0;
            r278_currentGlyph.include(r270_MarkSet.capital());
            r278_currentGlyph.include(r270_EightShape(r270_CAP));
            return void 0;
        });
        var r270_EightCirclesShape = function (r281_stroke, r281_top) {
            var _r281_t0, _r281_t1;
            var r281_pShrink = 1;
            var r281_pSizeDiffY = r270_StrokeWidthBlend(0.95, 0.94);
            var r281_pSizeDiffX = r270_StrokeWidthBlend(0.95, 0.96);
            var r281_yMid = r281_top / (1 + r281_pSizeDiffY);
            var r281_ada = r270_ArchDepthAOf(r270_ArchDepth * 0.9, r270_Width);
            var r281_adb = r270_ArchDepthBOf(r270_ArchDepth * 0.9, r270_Width);
            var r281_adaTop = r270_ArchDepthAOf(r270_ArchDepth * 0.9 * r281_pSizeDiffY, r270_Width);
            var r281_adbTop = r270_ArchDepthBOf(r270_ArchDepth * 0.9 * r281_pSizeDiffY, r270_Width);
            var r281_botLeft = r1_mix(r270_SB, r270_RightSB, 1 - r281_pShrink);
            var r281_botRight = r1_mix(r270_SB, r270_RightSB, r281_pShrink);
            var r281_topLeft = r1_mix(r270_SB, r270_RightSB, 1 - r281_pShrink * r281_pSizeDiffX);
            var r281_topRight = r1_mix(r270_SB, r270_RightSB, r281_pShrink * r281_pSizeDiffX);
            var r281_fine = r281_stroke * r270_CThin;
            var r281_mc = r270_CorrectionOMidX * r281_stroke;
            var r281_coFine = r281_stroke / 2 - (r281_stroke - r281_fine);
            var r281_spT = r270_StrokeWidthBlend(2.08, 2.2);
            var r281_spB = r270_StrokeWidthBlend(2.18, 2.2);
            return r270_union(r270_dispiro(r270_widths.rhs(r281_stroke), r270_g4(r270_Middle - r281_mc, r281_top - r270_O), r270_archv.superness(r281_spB), r270_g4(r281_topRight - r270_OX, r270_YSmoothMidR(r281_top - r270_O, r281_yMid - r281_coFine, r281_adaTop, r281_adbTop)), r270_arcvh.superness(r281_spT), r270_g4(r270_Middle + r281_mc, r281_yMid - r281_coFine, r270_widths.rhs(r281_fine)), r270_archv.superness(r281_spT), r270_g4(r281_topLeft + r270_OX, r270_YSmoothMidL(r281_top - r270_O, r281_yMid - r281_coFine, r281_adaTop, r281_adbTop), r270_widths.rhs(r281_stroke)), r270_arcvh.superness(r281_spB), r270_close()), r270_dispiro(r270_widths.rhs(r281_stroke), r270_g4(r270_Middle + r281_mc, r270_O), r270_archv.superness(r281_spB), r270_g4(r281_botLeft + r270_OX, r270_YSmoothMidL(r281_yMid + r281_coFine, r270_O, r281_ada, r281_adb)), r270_arcvh.superness(r281_spT), r270_g4(r270_Middle - r281_mc, r281_yMid + r281_coFine, r270_widths.rhs(r281_fine)), r270_archv.superness(r281_spT), r270_g4(r281_botRight - r270_OX, r270_YSmoothMidR(r281_yMid + r281_coFine, r270_O, r281_ada, r281_adb), r270_widths.rhs(r281_stroke)), r270_arcvh.superness(r281_spB), r270_close()));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('eight.lnum.twoCircles', null, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r270_MarkSet.capital());
            r284_currentGlyph.include(r270_EightCirclesShape(r270_AdviceStroke2(2, 3, r270_CAP), r270_CAP));
            return void 0;
        });
        var r270_EightCrossingAsymmetricShape = function (r287_top) {
            var _r287_t0, _r287_t1;
            var r287_stroke = r270_AdviceStroke2(2, 3, r270_CAP);
            var r287_fine = r270_AdviceStroke2(3, 4, r270_CAP);
            var r287_p = 0.96;
            var r287_l = r270_SB + r270_OX;
            var r287_r = r270_RightSB - r270_OX;
            var r287_arch = r270_ArchDepth * r1_mix(1, r270_EightPr, 0.5);
            var r287_gap = (r287_r - r287_l) * 0.25;
            var r287_Spine = function (r288_kty) {
                var _r288_t0, _r288_t1;
                return [
                    r288_kty(r270_Middle - r270_CorrectionOMidS, r287_top - r270_O, r270_widths.lhs(r287_stroke)),
                    r270_archv(),
                    r270_g4(r1_mix(r287_r, r287_l, r287_p), r287_top - r270_ArchDepthAOf(r287_arch * r287_p, r270_Width)),
                    r270_alsoThruThem([
                        [
                            0.34,
                            0.45,
                            2 / 3
                        ],
                        [
                            0.66,
                            0.55,
                            1 / 3
                        ]
                    ], {
                        'blend': function (r289_rt) {
                            var _r289_t0, _r289_t1;
                            return r270_widths(r287_stroke * r289_rt, r287_stroke * (1 - r289_rt));
                        }
                    }),
                    r270_g4(r287_r, r270_ArchDepthAOf(r287_arch, r270_Width), r270_widths.rhs(r287_stroke)),
                    r270_arcvh(),
                    r288_kty(r270_Middle + r270_CorrectionOMidS, r270_O)
                ];
            };
            var r287_CoSpineMask = function (r290_xFar) {
                var _r290_t0, _r290_t1;
                return r270_xn$spirooutline$1aao(r270_corner(r290_xFar, 2 * r270_CAP), r270_corner(r270_Middle - r270_CorrectionOMidS, 2 * r270_CAP), r287_Spine(r270_corner), r270_corner(r270_Middle + r270_CorrectionOMidS, -r270_CAP), r270_corner(r290_xFar, -r270_CAP));
            };
            return r270_union(r270_difference(r270_dispiro(r270_g4.right.mid(r270_Middle - r270_CorrectionOMidS, r287_top - r270_O, r270_widths.rhs(r287_stroke)), r270_g4.down.mid(r1_mix(r287_l, r287_r, r287_p), r287_top - r270_ArchDepthBOf(r287_arch * r287_p, r270_Width)), r270_straight.left.end(0, r287_top * 0.4 - r287_stroke * 0.5, r270_widths.rhs(r287_fine))), r287_CoSpineMask(-r270_Width * 4), r270_MaskBelow(r287_arch)), r270_difference(r270_dispiro(r270_straight.left.start(r270_Width, r287_top * 0.6 + r287_stroke * 0.5, r270_widths.lhs(r287_fine)), r270_g4.down.mid(r287_l, r270_ArchDepthBOf(r287_arch, r270_Width), r270_widths.lhs(r287_stroke)), r270_g4.right.mid(r270_Middle + r270_CorrectionOMidS, r270_O)), r287_CoSpineMask(r270_Width * 4), r270_MaskAbove(r287_top - r287_arch * r287_p)), r270_dispiro(r287_Spine(r270_g4.left.mid)));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('eight.lnum.crossingAsymmetric', null, function () {
            var _r293_t1;
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            r293_currentGlyph.include(r270_MarkSet.capital());
            r293_currentGlyph.include(r270_EightCrossingAsymmetricShape(r270_CAP));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('eight.lnum', r270_CodeLnum('8'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'eight'));
        r270_alias('eight.onum', r270_CodeOnum('8'), 'eight.lnum');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('rotatedPropto', null, function () {
            var _r299_t1;
            var _r299_t0 = this;
            var r299_currentGlyph = _r299_t0;
            var r299_p = 0.96;
            var r299_py = 0.4;
            var r299_l = r270_SB + r270_OX;
            var r299_r = r270_RightSB - r270_OX;
            r299_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_straight.up.start(r299_r, 0, r270_heading(r270_Upward)), r270_alsoThru(0.5, 1 - r299_py, r270_widths(r270_Stroke * r299_py, r270_Stroke * (1 - r299_py))), r270_g4(r1_mix(r299_r, r299_l, r299_p), r270_CAP - r270_ArchDepthA * r299_p * r270_EightPr, r270_widths.rhs()), r270_arcvh(), r270_g4(r270_Middle - r270_CorrectionOMidS, r270_CAP - r270_O), r270_archv(), r270_g4(r1_mix(r299_l, r299_r, r299_p), r270_CAP - r270_ArchDepthB * r299_p * r270_EightPr), r270_alsoThru(0.5, r299_py, r270_widths(r270_Stroke * r299_py, r270_Stroke * (1 - r299_py))), r270_straight.down.end(r299_l, 0, r270_widths.heading(r270_Stroke, 0, r270_Downward))));
            return void 0;
        });
        var r270_BBEightSd = function () {
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
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'swStart')
                    r301_swStart = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'swEnd')
                    r301_swEnd = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'kTop')
                    r301_kTop = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'sign')
                    r301_sign = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'OffsetLT')
                    r301_OffsetLT = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'OffsetRB')
                    r301_OffsetRB = _r301_t2.right;
                if (_r301_t2 && _r301_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r301_t2.left === 'OffsetC')
                    r301_OffsetC = _r301_t2.right;
                _r301_t5 = _r301_t5 + 1;
            }
            var r301_top = r1_fallback(r301_top, _r301_t1[0]);
            var r301_swStart = r1_fallback(r301_swStart, _r301_t1[1]);
            var r301_swEnd = r1_fallback(r301_swEnd, _r301_t1[2]);
            var r301_kTop = r1_fallback(r301_kTop, _r301_t1[3]);
            var r301_sign = r1_fallback(r301_sign, _r301_t1[4]);
            var r301_OffsetLT = r1_fallback(r301_OffsetLT, _r301_t1[5]);
            var r301_OffsetRB = r1_fallback(r301_OffsetRB, _r301_t1[6]);
            var r301_OffsetC = r1_fallback(r301_OffsetC, _r301_t1[7]);
            var r301_stroke = Math.max(r301_swStart, r301_swEnd);
            var r301_fine = Math.min(r301_swStart, r301_swEnd);
            var r301_soStart = r301_stroke - r301_swStart;
            var r301_soEnd = r301_stroke - r301_swEnd;
            var r301_bbOvershoot = r270_BBD / 8;
            var r301_xLeftTop = r1_mix(r270_SB, r270_RightSB, 1 - r301_kTop) - r301_bbOvershoot;
            var r301_xRightTop = r1_mix(r270_SB, r270_RightSB, r301_kTop);
            var r301_xLeftBot = r270_SB + r270_OX;
            var r301_xRightBot = r270_RightSB - r270_OX + r301_bbOvershoot;
            var r301_ada = r270_ArchDepthAOf(r270_ArchDepth * r270_EightPr, r270_Width);
            var r301_adb = r270_ArchDepthBOf(r270_ArchDepth * r270_EightPr, r270_Width);
            var r301_NcCenterX = r1_mix(r301_xLeftTop, r301_xRightBot, 0.5);
            var r301_NcCenterY = r1_mix(r301_top - r301_ada, r301_ada, 0.5);
            var r301_Center = function (r306_s) {
                var _r306_t0, _r306_t1;
                return {
                    'x': r1_mix(r301_xLeftTop + r301_OffsetLT(r306_s).x, r301_xRightBot - r301_OffsetRB(r306_s).x, 0.5),
                    'y': r1_mix(r301_top - r301_ada, r301_ada, 0.5)
                };
            };
            return r270_dispiro(r270_g2(r301_Center(1).x + r301_OffsetC(1).x, r301_Center(1).y + r301_OffsetC(1).y, r270_widths.center(r301_stroke)), r270_g4(r301_xRightTop - r270_HSwToV(r301_soStart), r301_top - r301_adb, r270_widths.lhs(r301_fine)), r270_arcvh(), r270_g4(r270_Middle - r270_CorrectionOMidX * r301_stroke - r301_bbOvershoot / 2, r301_top - r270_O - r301_soStart), r270_archv(), r270_g4(r301_xLeftTop + r301_OffsetLT(r301_sign).x, r301_top - r301_ada + r301_OffsetLT(r301_sign).y), r270_g2(r301_Center(r301_sign).x + r301_OffsetC(r301_sign).x, r301_Center(r301_sign).y + r301_OffsetC(r301_sign).y, r270_widths.center(r301_stroke)), r270_g4(r301_xRightBot - r301_OffsetRB(r301_sign).x, r301_ada + r301_OffsetRB(r301_sign).y, r270_widths.rhs(r301_fine)), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidX * r301_stroke + r301_bbOvershoot / 2, r270_O + r301_soEnd), r270_archv(), r270_g4(r301_xLeftBot + r270_HSwToV(r301_soEnd), r301_adb, r270_widths.rhs(r301_fine)), r270_g2(r301_Center(-1).x + r301_OffsetC(-1).x, r301_Center(-1).y + r301_OffsetC(-1).y, r270_widths.center(r301_stroke)));
        };
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/eight', 120800, function () {
            var r309_sign, _r309_t4;
            var _r309_t3 = this;
            var r309_currentGlyph = _r309_t3;
            r309_currentGlyph.include(r270_MarkSet.capital());
            var r309_theta = Math.PI / 4;
            var _r309_t0 = [
                1,
                -1
            ];
            var _r309_t1 = _r309_t0.length;
            var _r309_t2 = 0;
            while (_r309_t2 < _r309_t1) {
                r309_sign = _r309_t0[_r309_t2];
                r309_currentGlyph.include(r270_BBEightSd(new r270_xn$NamedParameterPair$2Lrc9b('top', r270_CAP), new r270_xn$NamedParameterPair$2Lrc9b('swStart', r270_BBS * (r309_sign > 0 ? r270_CThin : 1)), new r270_xn$NamedParameterPair$2Lrc9b('swEnd', r270_BBS * (r309_sign < 0 ? r270_CThin : 1)), new r270_xn$NamedParameterPair$2Lrc9b('kTop', 0.96), new r270_xn$NamedParameterPair$2Lrc9b('ess', r270_BBD), new r270_xn$NamedParameterPair$2Lrc9b('sign', r309_sign), new r270_xn$NamedParameterPair$2Lrc9b('OffsetC', function (r320_s) {
                    var _r320_t0, _r320_t1;
                    return {
                        'x': 0.5 * r320_s * r270_BBD * Math.sin(r309_theta),
                        'y': 0.5 * r320_s * r270_BBD * Math.cos(r309_theta)
                    };
                }), new r270_xn$NamedParameterPair$2Lrc9b('OffsetLT', function (r322_s) {
                    var _r322_t0, _r322_t1;
                    return {
                        'x': r322_s > 0 ? r270_BBD / 2 : 0,
                        'y': (r322_s > 0 ? 0.25 : 0.375) * r322_s * r270_BBD * Math.cos(r309_theta)
                    };
                }), new r270_xn$NamedParameterPair$2Lrc9b('OffsetRB', function (r324_s) {
                    var _r324_t0, _r324_t1;
                    return {
                        'x': r324_s < 0 ? r270_BBD / 2 : 0,
                        'y': (r324_s < 0 ? 0.25 : 0.375) * r324_s * r270_BBD * Math.cos(r309_theta)
                    };
                })));
                _r309_t2 = _r309_t2 + 1;
            }
            return void 0;
        });
    });
    return void 0;
});
