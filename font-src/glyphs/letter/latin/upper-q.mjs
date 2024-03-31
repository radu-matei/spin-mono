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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-Q', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_body, r270_swTailInner, r270_tailShape, r270_mkCapital, r270_mkSmcp, _r270_t9, _r270_t10, _r270_t11, _r270_t12, _r270_tag13;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_HookX = _r270_t1.HookX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThin = _r270_t1.CThin;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_ShoulderFine = _r270_t1.ShoulderFine;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var r270_OShapeOutline = _r270_t4.OShapeOutline;
        var r270_VBar = _r270_t4.VBar;
        var r270_DiagCor = _r270_t4.DiagCor;
        var r270_PointingTo = _r270_t4.PointingTo;
        var r270_MaskLeft = _r270_t4.MaskLeft;
        var r270_MaskBelowLine = _r270_t4.MaskBelowLine;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t6.BBS;
        var r270_BBD = _r270_t6.BBD;
        r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-O'].resolve();
        var r270_TailDepth = 0 - r270_Hook;
        var r270_QStdBody = function (r275_df, r275_top, r275_sw) {
            var _r275_t0, _r275_t1;
            return r270_OShape(r275_top, 0, r275_df.leftSB, r275_df.rightSB, r275_sw, r270_ArchDepthA, r270_ArchDepthB);
        };
        var r270_QHorizontalTailedBody = function (r276_df, r276_top, r276_sw) {
            var _r276_t0, _r276_t1;
            var r276_fine = r1_mix(r270_ShoulderFine, r276_sw, 0.125);
            return r270_dispiro(r270_flat(r276_df.middle - r276_sw * r270_TanSlope + r270_O, r276_sw - r276_fine, r270_widths.lhs(r276_fine)), r270_curl(r276_df.middle + r270_CorrectionOMidX * r276_fine, r276_sw - r276_fine), r270_archv(), r270_flat(r276_df.rightSB, r270_ArchDepthA, r270_widths.lhs(r276_sw)), r270_curl(r276_df.rightSB, r276_top - r270_ArchDepthB), r270_arcvh(), r270_g4(r276_df.middle - r270_CorrectionOMidS, r276_top - r270_O), r270_archv(), r270_flat(r276_df.leftSB, r276_top - r270_ArchDepthA), r270_curl(r276_df.leftSB, r270_ArchDepthB), r270_arcvh(), r270_straight.right.end(r276_df.middle + r270_CorrectionOMidS, 0));
        };
        var r270_QOpenSwashyBody = function (r277_df, r277_top) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_fine = r270_AdviceStroke(3.5);
                var r279_xLB0 = r1_mix(r277_df.leftSB, r277_df.rightSB, 1 / 16);
                var r279_xLB = r279_xLB0 + r270_HSwToV(0.6 * r279_fine);
                var r279_yLB = r1_mix(0, r270_Descender, 1 - 1 / 32) + r270_O;
                var r279_xMBArc = r1_mix(r277_df.rightSB, r279_xLB, 0.5);
                var r279_yMBArc = r1_mix(r270_ArchDepthA, r279_yLB, 0.625) + r270_Stroke * (1 / 16);
                var r279_xRB0 = r1_mix(r277_df.rightSB, r277_df.width, 0.7);
                var r279_xRB = r279_xRB0 - r270_HSwToV(0.75 * r270_Stroke);
                var r279_yRingStart = r270_XH / 12;
                var r279_notchOffset = -r270_Descender * 0.625 + r270_Stroke * 0.625 + r279_yRingStart / 2;
                var r279_tailSlope = 0.2 + 0.5 * (1 - r279_fine / r270_Stroke);
                r279_currentGlyph.include(r270_difference(r270_dispiro(r270_flat(r277_df.width, r279_yRingStart + r270_O, r270_widths.rhs.heading(r279_fine, r270_Leftward)), r270_curl(r277_df.middle + r270_CorrectionOMidS, r279_yRingStart + r270_O), r270_archv(), r270_flat(r277_df.leftSB + r270_OX, r279_yRingStart + r270_ArchDepthB, r270_widths.rhs(r270_Stroke)), r270_curl(r277_df.leftSB + r270_OX, r1_mix(r279_yRingStart, r277_top, 0.5), r270_heading(r270_Upward))), r270_MaskBelowLine(r1_mix(r279_xMBArc, r279_xLB0, 4), r1_mix(r279_yMBArc, r279_yLB, 4) + r279_notchOffset, r1_mix(r279_xLB0, r279_xMBArc, 4), r1_mix(r279_yLB, r279_yMBArc, 4) + r279_notchOffset)));
                r279_currentGlyph.include(r270_dispiro(r270_flat(r277_df.leftSB + r270_OX, r1_mix(r279_yRingStart, r277_top, 0.5), r270_widths.rhs.heading(r270_Stroke, r270_Upward)), r270_curl(r277_df.leftSB + r270_OX, r277_top - r270_ArchDepthA), r270_arcvh(), r270_g4(r277_df.middle - r270_CorrectionOMidS, r277_top - r270_O), r270_archv(), r270_flat(r277_df.rightSB - r270_OX, r277_top - r270_ArchDepthB), r270_curl(r277_df.rightSB - r270_OX, r270_ArchDepthA), r270_alsoThru.g2(0.5, 0.8, r270_widths.rhs(0.9 * r1_mix(r270_Stroke, r279_fine, 0.25))), r270_g2(r279_xMBArc, r279_yMBArc, r270_widths.rhs(0.8 * r1_mix(r270_Stroke, r279_fine, 0.5))), r270_alsoThru.g2(0.55, 0.35, r270_widths.rhs(0.9 * r1_mix(r270_Stroke, r279_fine, 0.75))), r270_g2(r279_xLB, r279_yLB, r270_widths.rhs(r279_fine))));
                r279_currentGlyph.include(r270_difference(r270_dispiro(r270_g2(r279_xLB, r279_yLB, r270_widths.lhs(r279_fine * r270_CThin)), r270_g2.right.mid(r1_mix(r279_xLB, r279_xRB, 1 / 4), r279_yLB - r270_Descender / 4 - r270_Stroke * (1 / 16), r270_widths.lhs.heading(r279_fine * r270_CThin, {
                    'x': r270_TanSlope + r279_tailSlope,
                    'y': 1
                })), r270_alsoThru.g2(0.5, 0.5), r270_g2.right.mid(r1_mix(r279_xLB, r279_xRB, 3 / 4) + r270_Stroke * r279_tailSlope, r270_Descender + r270_O, r270_widths.lhs.heading(r270_Stroke, {
                    'x': r270_TanSlope - r279_tailSlope,
                    'y': 1
                })), r270_archv(), r270_g2(r279_xRB0, r1_mix(r270_Descender, r279_xLB, 0.5), r270_widths.lhs.heading(r279_fine, r270_Upward))), r270_MaskLeft(r279_xLB)));
                return void 0;
            };
        };
        var r270_QStaraightTail = function (r283_df) {
            var _r283_t0, _r283_t1;
            var r283_shift = r270_StrokeWidthBlend(0, 0.25);
            return r270_dispiro(r270_widths.rhs(), r270_flat(r283_df.middle - r270_HSwToV(r270_Stroke) * r283_shift - r270_TailDepth * 0.25, r270_TailDepth, r270_heading(r270_Upward)), r270_curl(r283_df.middle - r270_HSwToV(r270_Stroke) * r283_shift, 0));
        };
        var r270_QCurlyTail = function (r284_df) {
            var _r284_t0, _r284_t1;
            var r284_shift = r270_StrokeWidthBlend(0.5, 0.6);
            var r284_startx = r284_df.middle + r270_Stroke * r284_shift * r270_HVContrast;
            return r270_dispiro(r270_widths.rhs(), r270_flat(r284_startx, r270_HalfStroke, r270_heading(r270_Downward)), r270_curl(r284_startx, 0, r270_heading(r270_Downward)), r270_arcvh(), r270_flat(Math.min(r284_df.middle + r270_HookX - 1, r284_startx - r270_TailDepth - r270_HSwToV(r270_Stroke)), r270_Stroke + r270_TailDepth), r270_curl(r284_df.middle + r270_HookX, r270_Stroke + r270_TailDepth));
        };
        var r270_QCrossingCurlyTail = function (r285_df, r285_top, r285_sw) {
            var _r285_t0, _r285_t1;
            return r270_union(r270_VBar.m(r285_df.middle, r270_HalfStroke, r1_mix(r270_Descender, r270_HalfStroke, 1.75), r285_sw), r270_dispiro(r270_widths.rhs(), r270_flat(r285_df.middle + r270_HSwToV(r270_HalfStroke), r270_HalfStroke, r270_heading(r270_Downward)), r270_curl(r285_df.middle + r270_HSwToV(r270_HalfStroke), 0, r270_heading(r270_Downward)), r270_arcvh(), r270_flat(Math.min(r285_df.middle + r270_HookX - 1, r285_df.middle - r270_HSwToV(r270_HalfStroke) - r270_TailDepth), r270_Stroke + r270_TailDepth), r270_curl(r285_df.middle + r270_HookX, r270_Stroke + r270_TailDepth)));
        };
        var r270_QCrossing = function (r286_df, r286_top, r286_sw) {
            var _r286_t0, _r286_t1;
            var r286_k = 1.5;
            var r286_cor = r270_DiagCor(r286_k * (r286_df.rightSB - r286_df.middle), r286_df.rightSB - r286_df.middle - r270_OX);
            var r286_shift = r270_XH * -0.1;
            return r270_dispiro(r270_widths.center(r286_cor * r286_sw), r270_flat(r286_df.rightSB, r286_shift, r270_heading(r270_Upward)), r270_curl(r286_df.middle + r270_OX, r286_k * (r286_df.rightSB - r286_df.middle) + r286_shift, r270_heading(r270_Upward)));
        };
        var r270_QCrossingBaseline = function (r287_df, r287_top, r287_sw) {
            var _r287_t0, _r287_t1;
            var r287_cor = r270_DiagCor(0.5 * (r287_top - r270_Stroke), r287_df.rightSB - r287_df.middle - r270_OX);
            return r270_dispiro(r270_widths.center(r287_cor * r287_sw), r270_flat(r287_df.rightSB, 0, r270_heading(r270_Upward)), r270_curl(r287_df.middle + r270_OX, 0.5 * (r287_top - r270_Stroke), r270_heading(r270_Upward)));
        };
        var r270_QVerticalCrossing = function (r288_df, r288_top, r288_sw) {
            var _r288_t0, _r288_t1;
            return r270_union(r270_VBar.m(r288_df.middle, r1_mix(r270_Descender, r270_HalfStroke, 1.75), 0, r288_sw), r270_VBar.m(r288_df.middle, 0, r270_TailDepth));
        };
        var r270_QHorizontalTail = function (r289_df, r289_tio, r289_sw) {
            var _r289_t0, _r289_t1;
            return r270_dispiro(r270_flat(r289_df.middle + r270_CorrectionOMidS, 0, r270_widths.lhs(r270_AdviceStroke(3))), r270_curl(r1_mix(r289_df.rightSB, r289_df.width, 0.5), 0));
        };
        var r270_detachedTailGap = Math.max(-0.25 * r270_Descender, r270_AdviceStroke(12));
        var r270_yObliqueTailStart = 0 - r270_detachedTailGap - r270_Stroke * 0.875;
        var r270_yObliqueTailEnd = r1_mix(0, r270_Descender, 0.75) - r270_Stroke * 0.5;
        var r270_xDetachedTailEnd = function (r290_df) {
            var _r290_t0, _r290_t1;
            return r1_mix(r290_df.rightSB, r290_df.width, 0.75);
        };
        var r270_kBendStartPartLeftLength = 0.5;
        var r270_xBendTailStart = function (r291_df) {
            var _r291_t0, _r291_t1;
            return r1_mix(r291_df.middle, r291_df.leftSB, r270_kBendStartPartLeftLength);
        };
        var r270_yBendTailStart = r1_mix(r270_yObliqueTailStart, r270_yObliqueTailEnd, r270_kBendStartPartLeftLength);
        var r270_QDetachedTail = function (r292_df) {
            var _r292_t0, _r292_t1;
            return r270_dispiro(r270_widths.lhs(r270_Stroke), r270_corner(r292_df.middle, r270_yObliqueTailStart, r270_heading(r270_Rightward)), r270_corner(r270_xDetachedTailEnd(r292_df), r270_yObliqueTailEnd, r270_heading(r270_Rightward)));
        };
        var r270_QDetachedBendTail = function (r293_df) {
            var _r293_t0, _r293_t1;
            return r270_union(r270_QDetachedTail(r293_df), r270_dispiro(r270_widths.lhs(r270_Stroke), r270_corner(r270_xBendTailStart(r293_df), r270_yBendTailStart, r270_heading(r270_Rightward)), r270_corner(r293_df.middle, r270_yObliqueTailStart, r270_heading(r270_Rightward))));
        };
        var r270_QSwashyTail = function () {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                return void 0;
            };
        };
        var r270_QInnerVertSw = Math.min(r270_AdviceStroke(3.5), (r270_RightSB - r270_SB - r270_HSwToV(2 * r270_Stroke)) / (2 * r270_HVContrast));
        var r270_QConfig = {
            'straight': [
                r270_QStdBody,
                r270_Stroke,
                r270_QStaraightTail,
                'bp',
                'p'
            ],
            'curlyTailed': [
                r270_QStdBody,
                r270_Stroke,
                r270_QCurlyTail,
                'bp',
                'p'
            ],
            'crossingCurlyTailed': [
                r270_QStdBody,
                r270_QInnerVertSw,
                r270_QCrossingCurlyTail,
                'bp',
                'p'
            ],
            'crossing': [
                r270_QStdBody,
                r270_AdviceStroke(4),
                r270_QCrossing,
                'capital',
                'e'
            ],
            'crossingBaseline': [
                r270_QStdBody,
                r270_AdviceStroke(4),
                r270_QCrossingBaseline,
                'capital',
                'e'
            ],
            'verticalCrossing': [
                r270_QStdBody,
                r270_QInnerVertSw,
                r270_QVerticalCrossing,
                'bp',
                'p'
            ],
            'horizontalTailed': [
                r270_QHorizontalTailedBody,
                r270_AdviceStroke(3),
                r270_QHorizontalTail,
                'capital',
                'e'
            ],
            'detachedTailed': [
                r270_QStdBody,
                r270_Stroke,
                r270_QDetachedTail,
                'bp',
                'p'
            ],
            'detachedBendTailed': [
                r270_QStdBody,
                r270_Stroke,
                r270_QDetachedBendTail,
                'bp',
                'p'
            ],
            'openSwash': [
                r270_QOpenSwashyBody,
                r270_Stroke,
                r270_QSwashyTail,
                'bp',
                'p'
            ]
        };
        var _r270_t7 = Object.entries(r270_QConfig)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_body = _r270_t9[1][0];
            r270_swTailInner = _r270_t9[1][1];
            r270_tailShape = _r270_t9[1][2];
            r270_mkCapital = _r270_t9[1][3];
            r270_mkSmcp = _r270_t9[1][4];
            _r270_t9[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('Q.' + r270_suffix, null, function () {
                    var _r302_t1;
                    var _r302_t0 = this;
                    var r302_currentGlyph = _r302_t0;
                    var r302_df = r270_DivFrame(1);
                    r302_currentGlyph.include(r270_MarkSet[r270_mkCapital]());
                    r302_currentGlyph.include(r270_body(r302_df, r270_CAP, r270_Stroke));
                    r302_currentGlyph.include(r270_tailShape(r302_df, r270_CAP, r270_swTailInner));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('smcpQ.' + r270_suffix, null, function () {
                    var _r308_t1;
                    var _r308_t0 = this;
                    var r308_currentGlyph = _r308_t0;
                    var r308_df = r270_DivFrame(1);
                    r308_currentGlyph.include(r270_MarkSet[r270_mkSmcp]());
                    r308_currentGlyph.include(r270_body(r308_df, r270_XH, r270_Stroke));
                    r308_currentGlyph.include(r270_tailShape(r308_df, r270_XH, r270_swTailInner));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('QSideways.' + r270_suffix, null, function () {
                    var _r314_t1;
                    var _r314_t0 = this;
                    var r314_currentGlyph = _r314_t0;
                    var r314_df = r270_DivFrame(r270_XH / r270_Width, 2, r270_XH * 0.1 / r270_SB);
                    r314_currentGlyph.include(r270_PointingTo(r270_Width, r270_XH, r270_Width, 0, function () {
                        var _r316_t0, _r316_t1;
                        return function () {
                            var _r318_t1;
                            var _r318_t0 = this;
                            var r318_currentGlyph = _r318_t0;
                            r318_currentGlyph.include(r270_body(r314_df, r270_Width - r270_SB, r270_Stroke));
                            r318_currentGlyph.include(r270_tailShape(r314_df, r270_Width - r270_SB, r270_swTailInner));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('Q', 'Q');
        r270_alias('cyrl/Qa', 1306, 'Q');
        r270_xn$selectvariant$7Hrq('smcpQ', 42927, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'Q'));
        r270_xn$selectvariant$7Hrq('QSideways', 8506, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'Q'));
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/Q', 8474, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            var r325_QInner = function () {
                var _r326_t0, _r326_t1;
                return r270_OShapeOutline.NoOvershoot(r270_CAP, 0, r270_SB, r270_RightSB, r270_BBS, r270_ArchDepthA, r270_ArchDepthB);
            };
            r325_currentGlyph.include(r270_MarkSet.capDesc());
            r325_currentGlyph.include(r270_OShape(r270_CAP, 0, r270_SB, r270_RightSB, r270_BBS, r270_ArchDepthA, r270_ArchDepthB));
            r325_currentGlyph.include(r270_intersection(r325_QInner(), r270_union(r270_VBar.l(r270_SB + r270_BBD, 0, r270_CAP, r270_BBS), r270_VBar.r(r270_RightSB - r270_BBD, 0, r270_CAP, r270_BBS))));
            var r325_terminalX = r270_Middle + r270_HookX;
            var r325_tailDeltaX = r270_BBD / 2;
            var r325_qTerminalY = r270_BBS - r270_Hook - r270_BBD / 4;
            var r325_QTail = function (r330_x) {
                var _r330_t0, _r330_t1;
                return r270_dispiro(r270_widths.center(r270_BBS), r270_flat(r330_x, r270_CAP / 2), r270_curl(r330_x, 0), r270_arcvh(), r270_flat(Math.min(r325_terminalX - 1, r330_x - r325_qTerminalY), r325_qTerminalY), r270_curl(r325_terminalX, r325_qTerminalY));
            };
            r325_currentGlyph.include(r270_difference(r270_union(r325_QTail(r270_Middle - r325_tailDeltaX), r325_QTail(r270_Middle + r325_tailDeltaX)), r325_QInner()));
            return void 0;
        });
    });
    return void 0;
});
