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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Rams-Horn', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
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
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_VJut = _r270_t1.VJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_close = _r270_t2.close;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_xn$noshape$3cah = _r270_t4['no-shape'];
        var r270_VSerif = _r270_t4.VSerif;
        var r270_FlipAround = _r270_t4.FlipAround;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_LatinGammaShape = function (r274_bottom, r274_top) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                var r276_hf = r270_AdviceStroke(4) / 2;
                var r276_d = r276_hf * 2 + r270_Width * 0.05;
                r276_currentGlyph.include(r270_dispiro(r270_widths.center(), r270_g4(r270_SB + r270_HSwToV(r270_HalfStroke) + r270_O, r274_top, r270_heading(r270_Downward)), r270_quadControls(1, 0.7, 16), r270_g4(r270_Middle + r276_d - r276_hf, r274_bottom + r276_d * (1 - r270_TanSlope * 0.5), r270_widths.center(2 * r276_hf)), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidX * r276_hf * 2, r274_bottom + r276_hf), r270_archv(), r270_g4(r270_Middle - r276_d + r276_hf, r274_bottom + r276_d * (1 + r270_TanSlope * 0.5)), r270_quadControls(0, 0.3, 16), r270_g4(r270_RightSB - r270_HSwToV(r270_HalfStroke) - r270_O, r274_top, r270_widths.heading(r270_HalfStroke, r270_HalfStroke, r270_Upward))));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('latn/gamma', 611, function () {
            var r280_sf, _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_MarkSet.p());
            r280_currentGlyph.include(r270_LatinGammaShape(r270_Descender, r270_XH));
            if (r270_SLAB) {
                r280_sf = r270_SerifFrame.fromDf(r270_DivFrame(1), r270_XH, r270_Descender);
                r280_currentGlyph.include(function () {
                    var _r285_t1;
                    var _r285_t0 = this;
                    var r285_currentGlyph = _r285_t0;
                    r285_currentGlyph.include(r280_sf.lt.full, true, true);
                    r285_currentGlyph.include(r280_sf.rt.full);
                    return void 0;
                });
            }
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Gamma', 404, function () {
            var r290_sf, _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r270_MarkSet.capDesc());
            r290_currentGlyph.include(r270_LatinGammaShape(r270_Descender, r270_CAP));
            if (r270_SLAB) {
                r290_sf = r270_SerifFrame.fromDf(r270_DivFrame(1), r270_CAP, r270_Descender);
                r290_currentGlyph.include(function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.include(r290_sf.lt.full, true, true);
                    r295_currentGlyph.include(r290_sf.rt.full);
                    return void 0;
                });
            }
            return void 0;
        });
        var r270_RamsHornShape = function (r298_fFill, r298_bottom, r298_top) {
            var _r298_t0, _r298_t1;
            return function () {
                var _r300_t1;
                var _r300_t0 = this;
                var r300_currentGlyph = _r300_t0;
                var r300_k1 = 0.625;
                var r300_k2 = 0.7;
                var r300_kIntersection = 0.15;
                var r300_d = 0.25 * (r270_RightSB - r270_SB) * r300_k1 * r270_TanSlope;
                var r300_sw = r270_AdviceStroke(r270_SLAB ? 3 : 2.75);
                var r300_fine = r270_AdviceStroke(r270_SLAB ? 3.75 : 3.5);
                var r300_coFine = r1_mix(r300_sw, r300_fine, r300_kIntersection / r300_k2);
                var r300_fillOffset = r300_sw * 0.25;
                r300_currentGlyph.include(r270_union(r270_dispiro(r270_widths.rhs(r300_sw), r270_straight.right.start(r270_SB, r298_top, r270_heading(r270_Rightward)), r270_g4(r270_Middle, r1_mix(r298_top, r298_bottom, r300_kIntersection), r270_widths.rhs(r300_coFine)), r270_g4.down.mid(r1_mix(r270_Middle, r270_RightSB, r300_k1), r1_mix(r298_top, r298_bottom, r300_k2) - r300_d, r270_widths.rhs(r300_fine)), r270_arcvh(), r270_g4.left.mid(r270_Middle + r270_CorrectionOMidX * r300_fine, r298_bottom + r270_O), r270_archv(), r270_g4.up.mid(r1_mix(r270_Middle, r270_SB, r300_k1), r1_mix(r298_top, r298_bottom, r300_k2) + r300_d), r270_g4(r270_Middle, r1_mix(r298_top, r298_bottom, r300_kIntersection), r270_widths.rhs(r300_coFine)), r270_straight.right.end(r270_RightSB, r298_top, r270_widths.rhs.heading(r300_sw, r270_Rightward))), r298_fFill ? r270_xn$spirooutline$1aao(r270_corner(r270_Middle, r1_mix(r298_top, r298_bottom, r300_kIntersection) - r300_fillOffset), r270_g4.down.mid(r1_mix(r270_Middle, r270_RightSB, r300_k1) - r300_fillOffset, r1_mix(r298_top, r298_bottom, r300_k2) - r300_d), r270_g4.left.mid(r270_Middle + r270_CorrectionOMidX * r300_fine, r298_bottom + r300_fillOffset), r270_g4.up.mid(r1_mix(r270_Middle, r270_SB, r300_k1) + r300_fillOffset, r1_mix(r298_top, r298_bottom, r300_k2) + r300_d), r270_close()) : r270_xn$noshape$3cah()));
                if (r270_SLAB) {
                    r300_currentGlyph.include(r270_VSerif.dl(r270_SB, r298_top - r300_sw, r270_VJut * (r300_sw / r270_Stroke) - r300_sw, r300_fine));
                    r300_currentGlyph.include(r270_VSerif.dr(r270_RightSB, r298_top - r300_sw, r270_VJut * (r300_sw / r270_Stroke) - r300_sw, r300_fine));
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ramshorn', 612, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r270_MarkSet.e());
            r306_currentGlyph.include(r270_RamsHornShape(false, 0, r270_XH));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('latinAyin', 7461, function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.include(r270_MarkSet.e());
            r311_currentGlyph.include(r270_RamsHornShape(true, 0, r270_XH));
            r311_currentGlyph.include(r270_FlipAround(r270_Middle, r270_XH / 2));
            return void 0;
        });
    });
    return void 0;
});
