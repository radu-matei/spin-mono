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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-F-ligatures', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_DesignParameters = _r270_t1.DesignParameters;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Translate = _r270_t1.Translate;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_Upward = _r270_t1.Upward;
        var r270_O = _r270_t1.O;
        var r270_OXHook = _r270_t1.OXHook;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_Jut = _r270_t1.Jut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_JBalance = _r270_t1.JBalance;
        var r270_RBalance = _r270_t1.RBalance;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_tagged = _r270_t4.tagged;
        var r270_HSerif = _r270_t4.HSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_hookend = _r270_t4.hookend;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Long-S'].resolve();
        var r270_fbar = r270_XH * r270_DesignParameters.fBarPosToXH + r270_Stroke * r270_DesignParameters.fbarStrokeAdj;
        var r270_shift = -(r270_Width * 0.055 + r270_SB * 0.5);
        var r270_barr = r270_RightSB;
        var r270_hbarleft = r270_SB + r270_shift + r270_Stroke * (r270_para.slopeAngle ? 0.5 : 0.25);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('f_i.upright', null, function () {
            var _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r270_MarkSet.b());
            r276_currentGlyph.include(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                r281_currentGlyph.include(r270_xn$referglyph$1aao('longs.bentHookSerifless'));
                r281_currentGlyph.include(r270_Translate(r270_shift, 0));
                return void 0;
            }));
            r276_currentGlyph.include(r270_VBar.r(r270_barr, 0, r270_fbar));
            r276_currentGlyph.include(r270_HBar.t(r270_hbarleft, r270_barr, r270_fbar));
            if (r270_SLAB)
                r276_currentGlyph.include(r270_tagged('serifRB', r270_HSerif.mb(r270_barr - r270_HSwToV(r270_HalfStroke), 0, r270_Jut)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('f_i.italic', null, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r270_MarkSet.b());
            r289_currentGlyph.include(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r294_t1;
                var _r294_t0 = this;
                var r294_currentGlyph = _r294_t0;
                r294_currentGlyph.include(r270_xn$referglyph$1aao('longs.flatHookTailed'));
                r294_currentGlyph.include(r270_Translate(r270_shift, 0));
                return void 0;
            }));
            r289_currentGlyph.include(r270_VBar.r(r270_barr, 0, r270_fbar));
            r289_currentGlyph.include(r270_HBar.t(r270_hbarleft, r270_barr, r270_fbar));
            if (r270_SLAB)
                r289_currentGlyph.include(r270_tagged('serifRB', r270_HSerif.rb(r270_barr, 0, r270_SideJut)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('f_l.upright', null, function () {
            var _r302_t1;
            var _r302_t0 = this;
            var r302_currentGlyph = _r302_t0;
            var r302_m = r270_Middle - r270_JBalance - r270_HSwToV(r270_HalfStroke) + r270_shift;
            r302_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_flat(r302_m, 0, r270_heading(r270_Upward)), r270_curl(r302_m, r270_Ascender - r270_ArchDepthA), r270_hookend(r270_Ascender - r270_O), r270_g4(r270_barr + r270_OXHook, r270_Ascender - r270_Hook)));
            r302_currentGlyph.include(r270_VBar.r(r270_barr, 0, r270_Ascender - r270_Hook));
            r302_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_flat(Math.min(r302_m - r270_Stroke * 0.3, r270_hbarleft) - r270_TanSlope * r270_HalfStroke, r270_fbar), r270_curl(r1_mix(r270_SB, r270_barr, 0.6) - r270_TanSlope * r270_HalfStroke, r270_fbar)));
            if (r270_SLAB) {
                r302_currentGlyph.include(r270_tagged('serifLB', r270_HSerif.mb(r302_m + r270_HSwToV(r270_HalfStroke) + r270_RBalance * 0.35, 0, r270_Jut + r270_RBalance * 0.65)));
                r302_currentGlyph.include(r270_tagged('serifRB', r270_HSerif.mb(r270_barr - r270_HSwToV(r270_HalfStroke), 0, r270_Jut)));
            }
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('f_l.italic', null, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r314_t1;
                var _r314_t0 = this;
                var r314_currentGlyph = _r314_t0;
                r314_currentGlyph.include(r270_xn$referglyph$1aao('longs.flatHookTailed'), r270_AS_BASE);
                r314_currentGlyph.include(r270_Translate(r270_shift, 0));
                return void 0;
            }));
            r310_currentGlyph.include(r270_VBar.r(r270_barr, 0, r270_Ascender));
            r310_currentGlyph.include(r270_HBar.t(r270_hbarleft, r1_mix(r270_SB, r270_barr, 0.65), r270_fbar));
            if (r270_SLAB)
                r310_currentGlyph.include(r270_tagged('serifRB', r270_HSerif.rb(r270_barr, 0, r270_SideJut)));
            return void 0;
        });
    });
    return void 0;
});
