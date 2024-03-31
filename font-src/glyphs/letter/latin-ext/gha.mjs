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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Gha', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_O = _r270_t1.O;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_OShape = _r270_t4.OShape;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_GhaShape = function (r274_df, r274_top) {
            var _r274_t0, _r274_t1;
            return function () {
                var r276_sf, _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                var r276_abarRight = r274_df.middle + r270_HSwToV(0.5 * r274_df.mvs);
                var r276_ada = r270_ArchDepthAOf(Math.max(r274_df.mvs * 1.125, r270_SmallArchDepth * 0.6 * r274_df.div), r270_Width * r274_df.div);
                var r276_adb = r270_ArchDepthBOf(Math.max(r274_df.mvs * 1.125, r270_SmallArchDepth * 0.6 * r274_df.div), r270_Width * r274_df.div);
                r276_currentGlyph.include(r270_OShape(r274_top, 0, r274_df.leftSB, r276_abarRight, r274_df.mvs, r276_ada, r276_adb));
                r276_currentGlyph.include(r270_VBar.r(r274_df.rightSB - r270_O, r270_Descender, r274_top, r274_df.mvs));
                r276_currentGlyph.include(r270_dispiro(r270_widths.lhs(r274_df.mvs), r270_flat(r274_df.middle, r274_top - r276_adb, r270_heading(r270_Rightward)), r270_curl(r274_df.middle + 1, r274_top - r276_adb, r270_heading(r270_Rightward)), r270_alsoThru(0.5, 0.15), r270_g4(r274_df.rightSB - r270_O - r270_HSwToV(r274_df.mvs), r274_top, r270_widths(0, r274_df.mvs))));
                if (r270_SLAB) {
                    r276_sf = r270_SerifFrame.fromDf(r274_df, r274_top, r270_Descender);
                    r276_currentGlyph.include(r276_sf.rb.full);
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('Gha', 418, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            var r283_df = r283_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r283_currentGlyph.include(r283_df.markSet.capDesc());
            r283_currentGlyph.include(r270_GhaShape(r283_df, r270_CAP));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('gha', 419, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            var r289_df = r289_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r289_currentGlyph.include(r289_df.markSet.p());
            r289_currentGlyph.include(r270_GhaShape(r289_df, r270_XH));
            return void 0;
        });
    });
    return void 0;
});
