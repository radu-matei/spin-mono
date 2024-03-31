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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Eth', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
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
        var r270_Ascender = _r270_t1.Ascender;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThin = _r270_t1.CThin;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OverlayStroke = _r270_t1.OverlayStroke;
        var r270_ShoulderFine = _r270_t1.ShoulderFine;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_YSmoothMidL = _r270_t1.YSmoothMidL;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var r270_fine = r270_Stroke * r270_CThin;
        var r270_coFine = r1_mix(r270_fine, r270_Stroke, 0.5);
        var r270_yMid = r270_Ascender * 0.6;
        var r270_yMid2 = r1_mix(r270_yMid, r270_YSmoothMidR(r270_yMid, 0, r270_SmallArchDepthA, r270_SmallArchDepthB), 0.875);
        var r270_ArcStartKnots = function () {
            var _r273_t0, _r273_t1;
            return [
                r270_g4.right.start(r270_Middle + r270_CorrectionOMidS - r270_TanSlope * (r270_Stroke - r270_fine), r270_O + r270_Stroke - r270_fine + 1 / 16, r270_widths.lhs(r270_fine)),
                r270_straight.up.mid(r270_RightSB - r270_OX - (1 - r270_CThin) * r270_HSwToV(r270_Stroke), r270_YSmoothMidR(r270_yMid, 0, r270_SmallArchDepthA, r270_SmallArchDepthB)),
                r270_arcvh(),
                r270_g4(r270_Middle - r270_CorrectionOMidS, r270_yMid - r270_O, r270_widths.lhs()),
                r270_archv(),
                r270_g4(r270_SB + r270_OX, r270_YSmoothMidL(r270_yMid, 0, r270_SmallArchDepthA, r270_SmallArchDepthB)),
                r270_arcvh(),
                r270_g4(r270_Middle + r270_CorrectionOMidS, r270_O),
                r270_archv(),
                r270_flat(r270_RightSB - r270_OX, r270_YSmoothMidR(r270_yMid, 0, r270_SmallArchDepthA, r270_SmallArchDepthB), r270_widths.lhs(r270_coFine)),
                r270_curl(r270_RightSB - r270_OX, r270_yMid2)
            ];
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('dInsular.curly-bar', null, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r270_MarkSet.b());
            r276_currentGlyph.include(r270_dispiro(r270_ArcStartKnots(), r270_quadControls(0, 0.8), r270_g4(r270_SB + r270_Stroke * 1.1, r270_Ascender, r270_widths.lhs())));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('dInsular.straight-bar', null, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r270_MarkSet.b());
            var r281_yMockBarStart = r270_yMid2 + r270_Stroke * 0.3;
            var r281_xTerminal = r1_mix(r270_SB, r270_RightSB, 0.4) + r270_HSwToV(0.5 * r270_Stroke);
            var r281_pStraightBarStart = 0.75 - r270_Stroke / r270_Ascender;
            r281_currentGlyph.include(r270_intersection(r270_MaskBelow(r270_Ascender), r270_dispiro(r270_ArcStartKnots(), r270_flat(r1_mix(r270_Width, r281_xTerminal, r281_pStraightBarStart), r1_mix(r281_yMockBarStart, r270_CAP, r281_pStraightBarStart), r270_widths.lhs()), r270_curl(r1_mix(r270_Width, r281_xTerminal, 2), r1_mix(r281_yMockBarStart, r270_CAP, 2)))));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('dInsular', 42874, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'eth'));
        r270_xn$selectvariant$7Hrq('partial', 8706, new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'dInsular'));
        r270_xn$derivecomposites$7Hrq('eth', 240, 'dInsular', r270_dispiro(r270_widths.center(r270_OverlayStroke), r270_flat(r1_mix(r270_SB, r270_RightSB, 0.1), r1_mix(r270_XH, r270_Ascender, -0.05)), r270_curl(r1_mix(r270_SB, r270_RightSB, 0.95), r1_mix(r270_XH, r270_Ascender, 0.35))));
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('DInsular', 42873, function () {
            var _r288_t1;
            var _r288_t0 = this;
            var r288_currentGlyph = _r288_t0;
            r288_currentGlyph.include(r270_MarkSet.capital());
            var r288_df = r270_DivFrame(1);
            var r288_fine = r1_mix(r270_ShoulderFine, r270_Stroke, 0.125);
            var r288_cofine = r270_Stroke - r288_fine;
            var r288_top = r270_CAP - r270_O;
            r288_currentGlyph.include(r270_union(r270_dispiro(r270_flat(r288_df.middle + r270_Stroke * r270_TanSlope - r270_O, r288_top - r288_cofine, r270_widths.lhs(r288_fine)), r270_curl(r288_df.middle - r270_CorrectionOMidX * r288_fine, r288_top - r288_cofine), r270_archv(), r270_flat(r288_df.leftSB, r270_CAP - r270_ArchDepthA, r270_widths.lhs(r270_Stroke)), r270_curl(r288_df.leftSB, r270_ArchDepthB), r270_arcvh(), r270_g4(r288_df.middle + r270_CorrectionOMidS, 0), r270_archv(), r270_flat(r288_df.rightSB, r270_ArchDepthA), r270_curl(r288_df.rightSB, r270_CAP - r270_ArchDepthB), r270_arcvh(), r270_straight.left.end(r288_df.middle - r270_CorrectionOMidS, r288_top)), r270_dispiro(r270_flat(r288_df.middle + r270_CorrectionOMidS, r288_top, r270_widths.lhs(r270_AdviceStroke(3))), r270_curl(r1_mix(0, r288_df.leftSB, 0.5), r288_top))));
            return void 0;
        });
    });
    return void 0;
});
