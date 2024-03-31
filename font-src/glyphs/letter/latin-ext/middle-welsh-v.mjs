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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Middle-Welsh-V', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_O = _r270_t1.O;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_nShoulderKnots = _r270_t6.nShoulderKnots;
        var r270_MiddleWelshVShape = function (r274_top, r274_pL, r274_pR) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                r276_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_g4(r270_Middle, r274_top - r270_O / 2), r270_g4.down.mid(r270_SB + r270_O, r1_mix(0, r274_top, r274_pL * r270_SmallArchDepthB / (r270_SmallArchDepthA + r270_SmallArchDepthB))), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidS, r270_O), r270_archv(), r270_g4(r270_RightSB - r270_O, r1_mix(0, r274_top, r274_pR * r270_SmallArchDepthA / (r270_SmallArchDepthA + r270_SmallArchDepthB))), r270_g4(r1_mix(r270_SB, r270_RightSB, 0.75), r1_mix(0, r274_top, r274_pR))));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('VMiddleWelsh', 7932, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_MarkSet.capital());
            r280_currentGlyph.include(r270_MiddleWelshVShape(r270_CAP, 0.75, 0.625));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('vMiddleWelsh', 7933, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r270_MarkSet.capital());
            r285_currentGlyph.include(r270_MiddleWelshVShape(r270_Ascender, 0.625, 0.625));
            return void 0;
        });
    });
    return void 0;
});
