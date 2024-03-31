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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Glottal-Stop', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_Jut = _r270_t1.Jut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceGlottalStopArchDepth = _r270_t1.AdviceGlottalStopArchDepth;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_important = _r270_t2.important;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_hookstart = _r270_t4.hookstart;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r270_markHalfStroke = _r270_t6.markHalfStroke;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_LetterBarOverlay = _r270_t7.LetterBarOverlay;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('glottalStop', 660, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r270_MarkSet.b());
            r277_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_g4(r270_SB, r270_Ascender - r270_Hook), r270_hookstart(r270_Ascender - r270_O), r270_g4(r270_RightSB, r270_Ascender - r270_AdviceGlottalStopArchDepth(r270_Ascender, 1)), r270_alsoThru.g2(0.5, 0.5, r270_important), r270_flat(r270_Middle + r270_HSwToV(r270_HalfStroke), r270_XH * 0.3), r270_curl(r270_Middle + r270_HSwToV(r270_HalfStroke), 0, r270_heading(r270_Downward))));
            if (r270_SLAB)
                r277_currentGlyph.include(r270_HSerif.mb(r270_Middle, 0, r270_Jut));
            return void 0;
        });
        r270_alias('capGlottalStop', 577, 'glottalStop');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('revGlottalStop', 661, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            r283_currentGlyph.include(r270_MarkSet.b());
            r283_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_g4(r270_RightSB, r270_Ascender - r270_Hook), r270_hookstart(r270_Ascender - r270_O), r270_g4(r270_SB, r270_Ascender - r270_AdviceGlottalStopArchDepth(r270_Ascender, -1)), r270_alsoThru.g2(0.5, 0.5, r270_important), r270_flat(r270_Middle - r270_HSwToV(r270_HalfStroke), r270_XH * 0.3), r270_curl(r270_Middle - r270_HSwToV(r270_HalfStroke), 0, r270_heading(r270_Downward))));
            if (r270_SLAB)
                r283_currentGlyph.include(r270_HSerif.mb(r270_Middle, 0, r270_Jut));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('smallGlottalStop', 578, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r270_MarkSet.e());
            r289_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_g4(r270_SB, r270_XH - r270_Hook), r270_hookstart(r270_XH - r270_O), r270_g4(r270_RightSB, r270_XH - r270_AdviceGlottalStopArchDepth(r270_XH, 1)), r270_alsoThru.g2(0.5, 0.5, r270_important), r270_flat(r270_Middle + r270_HSwToV(r270_HalfStroke), r270_XH * 0.15), r270_curl(r270_Middle + r270_HSwToV(r270_HalfStroke), 0, r270_heading(r270_Downward))));
            if (r270_SLAB)
                r289_currentGlyph.include(r270_HSerif.mb(r270_Middle, 0, r270_Jut));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('smallRevGlottalStop', null, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r270_MarkSet.e());
            r295_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_g4(r270_RightSB, r270_XH - r270_Hook), r270_hookstart(r270_XH - r270_O), r270_g4(r270_SB, r270_XH - r270_AdviceGlottalStopArchDepth(r270_XH, -1)), r270_alsoThru.g2(0.5, 0.5, r270_important), r270_flat(r270_Middle - r270_HSwToV(r270_HalfStroke), r270_XH * 0.15), r270_curl(r270_Middle - r270_HSwToV(r270_HalfStroke), 0, r270_heading(r270_Downward))));
            if (r270_SLAB)
                r295_currentGlyph.include(r270_HSerif.mb(r270_Middle, 0, r270_Jut));
            return void 0;
        });
        r270_turned('invGlottalStop', 662, 'revGlottalStop', r270_Middle, r270_Ascender / 2);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('glottalStopBar', 673, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r270_xn$referglyph$1aao('glottalStop'), r270_AS_BASE);
            r301_currentGlyph.include(r270_LetterBarOverlay.m.in(r270_Middle, r270_SLAB ? r270_Stroke : 0, r270_Ascender * 0.5, 0.5));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('revGlottalStopBar', 674, function () {
            var _r306_t1;
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            r306_currentGlyph.include(r270_xn$referglyph$1aao('revGlottalStop'), r270_AS_BASE);
            r306_currentGlyph.include(r270_LetterBarOverlay.m.in(r270_Middle, r270_SLAB ? r270_Stroke : 0, r270_Ascender * 0.5, 0.5));
            return void 0;
        });
    });
    return void 0;
});
