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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Yogh', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_slabTop, _r270_t9, _r270_t10, _r270_t11, _r270_t12, _r270_tag13;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_OverlayPos = _r270_t1.OverlayPos;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_widths = _r270_t2.widths;
        var r270_important = _r270_t2.important;
        var r270_alsoThruThem = _r270_t2.alsoThruThem;
        var r270_archv = _r270_t2.archv;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_xn$noshape$3cah = _r270_t4['no-shape'];
        var r270_hookstart = _r270_t4.hookstart;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_SerifedArcStart = _r270_t6.SerifedArcStart;
        var r270_InwardSlabArcStart = _r270_t6.InwardSlabArcStart;
        var r270_ArcStartSerif = _r270_t6.ArcStartSerif;
        var r270_xn$SLABNONE$5sIl = 0;
        var r270_xn$SLABCLASSICAL$5sIl = 1;
        var r270_xn$SLABINWARD$5sIl = 2;
        var r270_PhantomBotYOfUpperHalf = function (r274_top, r274_bot) {
            var _r274_t0, _r274_t1;
            return r1_mix(r274_bot, r274_top, r270_OverlayPos) - 0.25 * r270_Stroke;
        };
        var r270_TopYOfLowerHalf = function (r275_top, r275_bot) {
            var _r275_t0, _r275_t1;
            return r1_mix(r275_bot, r275_top, r270_OverlayPos) + 0.06 * r270_Stroke;
        };
        var r270_UpperHalfT = function (r276_sink, r276_slab, r276_offset, r276_top, r276_bot) {
            var r276___, _r276_t0, _r276_t1, _r276_t2;
            var r276_py = r270_PhantomBotYOfUpperHalf(r276_top, r276_bot);
            var r276_yRightHalf = r270_YSmoothMidR(r276_top, r276_py);
            var r276_yBottomTerminal = r1_mix(r276_top, r276_py, 1.2);
            return r276_sink((_r276_t0 = r276_slab, _r276_t0 === r270_xn$SLABCLASSICAL$5sIl ? r270_SerifedArcStart.LtrRhs(r270_SB, r270_Middle, r276_top - r276_offset, r270_Stroke, r270_Hook) : _r276_t0 === r270_xn$SLABINWARD$5sIl ? r270_InwardSlabArcStart.LtrRhs(r270_SB, r270_Middle, r276_top - r276_offset, r270_Stroke, r270_Hook) : (r276___ = _r276_t0, [
                r270_g4(r270_SB, r276_top - r270_Hook, r270_widths.rhs()),
                r270_hookstart(r276_top - r276_offset - r270_O)
            ])), r270_g4(r270_RightSB - r276_offset, r276_yRightHalf), r270_alsoThruThem([
                [
                    0.5,
                    0.8
                ],
                [
                    0.75,
                    0.92
                ]
            ], r270_important), (r276_sink === r270_dispiro ? r270_g4 : r270_corner)(r1_mix(r270_SB, r270_RightSB, 0.1) + r270_Stroke * 0.25, r276_yBottomTerminal));
        };
        var r270_LowerHalfT = function (r277_sink, r277_top, r277_bot) {
            var _r277_t0, _r277_t1;
            var r277_pyt = r1_mix(r277_bot, r270_TopYOfLowerHalf(r277_top, r277_bot), 1.2);
            var r277_pyb = r1_mix(r277_bot, r270_TopYOfLowerHalf(r277_top, r277_bot), 0.2);
            return r277_sink(r270_g4(r270_Middle - r270_CorrectionOMidS, r277_pyt, r270_widths.rhs()), r270_archv(), r270_g4(r270_RightSB, r270_YSmoothMidR(r277_pyt, r277_pyb)), r270_alsoThruThem([
                [
                    0.25,
                    r270_StrokeWidthBlend(0.63, 0.66)
                ],
                [
                    0.5,
                    r270_StrokeWidthBlend(0.84, 0.85)
                ]
            ], r270_important), r270_g4(r270_SB + 0.1 * r270_HVContrast * r270_Stroke, r277_bot + r270_O));
        };
        var r270_YoghShape = function (r278_slab, r278_top, r278_bot) {
            var _r278_t0, _r278_t1;
            return function () {
                var r280___, _r280_t0, _r280_t2;
                var _r280_t1 = this;
                var r280_currentGlyph = _r280_t1;
                r280_currentGlyph.include(r270_UpperHalfT(r270_dispiro, r278_slab, 0, r278_top, r278_bot));
                r280_currentGlyph.include(r270_difference(r270_LowerHalfT(r270_dispiro, r278_top, r278_bot), r270_UpperHalfT(r270_xn$spirooutline$1aao, r278_slab, 0.1, r278_top, r278_bot)));
                r280_currentGlyph.include((_r280_t0 = r278_slab, _r280_t0 === r270_xn$SLABCLASSICAL$5sIl ? r270_ArcStartSerif.L(r270_SB, r278_top, r270_Stroke, r270_Hook) : _r280_t0 === r270_xn$SLABINWARD$5sIl ? r270_ArcStartSerif.InwardL(r270_SB, r278_top, r270_Stroke, r270_Hook) : (r280___ = _r280_t0, r270_xn$noshape$3cah())));
                return void 0;
            };
        };
        var r270_Config = {
            'serifless': [r270_xn$SLABNONE$5sIl],
            'unilateralSerifed': [r270_xn$SLABCLASSICAL$5sIl],
            'unilateralInwardSerifed': [r270_xn$SLABINWARD$5sIl]
        };
        var _r270_t7 = Object.entries(r270_Config)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_slabTop = _r270_t9[1][0];
            _r270_t9[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('Yogh.' + r270_suffix, null, function () {
                    var _r289_t1;
                    var _r289_t0 = this;
                    var r289_currentGlyph = _r289_t0;
                    r289_currentGlyph.include(r270_MarkSet.capital());
                    r289_currentGlyph.include(r270_YoghShape(r270_slabTop, r270_CAP, 0));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('yogh.' + r270_suffix, null, function () {
                    var _r294_t1;
                    var _r294_t0 = this;
                    var r294_currentGlyph = _r294_t0;
                    r294_currentGlyph.include(r270_MarkSet.capital());
                    r294_currentGlyph.include(r270_YoghShape(r270_slabTop, r270_XH, r270_Descender));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('Yogh', 540);
        return r270_xn$selectvariant$7Hrq('yogh', 541);
    });
    return void 0;
});
