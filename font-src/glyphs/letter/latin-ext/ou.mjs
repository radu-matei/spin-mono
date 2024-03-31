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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-OU', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HBarPos = _r270_t1.HBarPos;
        var r270_CThin = _r270_t1.CThin;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_end = _r270_t2.end;
        var r270_widths = _r270_t2.widths;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_OuShape = function (r273_top, r273_yBar, r273_gapL, r273_gapR) {
            var _r273_t0, _r273_t1;
            return function () {
                var _r275_t1;
                var _r275_t0 = this;
                var r275_currentGlyph = _r275_t0;
                r275_currentGlyph.include(r270_OShape(r273_yBar + r270_HalfStroke, 0, r270_SB, r270_RightSB, void 0, r270_ArchDepthA, r270_ArchDepthB));
                var r275_xLeft = r1_clamp(r270_SB + r270_HSwToV(1.25 * r270_Stroke), r1_mix(r270_SB, r270_RightSB, 0.4), r270_Middle - r270_Width * 0.05);
                var r275_d = 0.25 * r270_TanSlope * (r270_RightSB - r270_SB);
                r275_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_g4.left.start(r275_xLeft - r270_CorrectionOMidS, r273_top - r273_gapL), r270_archv(), r270_g4.down.mid(r270_SB, r1_mix(r273_yBar - r270_HalfStroke, r273_top - r273_gapL, 0.5) + r275_d), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidS, r273_yBar - r270_O - r270_HalfStroke + r270_Stroke * (1 - r270_CThin), r270_widths.lhs(r270_Stroke * r270_CThin)), r270_archv(), r270_g4.up.mid(r270_RightSB, r1_mix(r273_yBar - r270_HalfStroke, r273_top - r273_gapR, 0.5) - r275_d, r270_widths.lhs()), r270_arcvh(), r270_g4.left.end(r270_Width - r275_xLeft - r270_CorrectionOMidS, r273_top - r273_gapR)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('OU', 546, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_MarkSet.capital());
            r280_currentGlyph.include(r270_OuShape(r270_CAP, r270_CAP * r270_HBarPos, r270_CAP * 0.05, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('smcpOU', 7445, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r270_MarkSet.e());
            r285_currentGlyph.include(r270_OuShape(r270_XH, r270_XH * r270_HBarPos, 0, 0));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('ou', 547, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r270_MarkSet.b());
            r290_currentGlyph.include(r270_OuShape(r270_Ascender, r270_Ascender * r1_mix(r270_HBarPos, r270_XH / r270_CAP, 0.5), 0, 0));
            return void 0;
        });
    });
    return void 0;
});
