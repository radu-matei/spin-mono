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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Sha', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_SLAB = _r270_t1.SLAB;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_RightwardTailedBar = _r270_t6.RightwardTailedBar;
        var r270_CyrDescender = _r270_t6.CyrDescender;
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_CyrShaShape = function (r274_top, r274_df, r274_fInv) {
            var _r274_t0, _r274_t1;
            return function () {
                var r276_sf, _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                r276_currentGlyph.include(r270_union((r274_fInv ? r270_HBar.t : r270_HBar.b)(r274_df.leftSB, r274_df.rightSB, r274_fInv ? r274_top : 0), r270_VBar.l(r274_df.leftSB, 0, r274_top, r274_df.mvs), r270_VBar.r(r274_df.rightSB, 0, r274_top, r274_df.mvs), r270_VBar.m(r274_df.middle, 0, r274_top, r274_df.mvs)));
                if (r270_SLAB) {
                    r276_sf = r270_SerifFrame.fromDf(r274_df, r274_top, 0, new r270_xn$NamedParameterPair$2Lrc9b('swSerif', r274_df.mvs));
                    if (r274_fInv) {
                        r276_currentGlyph.include(function () {
                            var _r281_t1;
                            var _r281_t0 = this;
                            var r281_currentGlyph = _r281_t0;
                            r281_currentGlyph.include(r276_sf.lt.outer, true, true);
                            r281_currentGlyph.include(r276_sf.rt.outer);
                            return void 0;
                        });
                        if (r276_sf.enoughSpaceForFullSerifs)
                            r276_currentGlyph.include(function () {
                                var _r286_t1;
                                var _r286_t0 = this;
                                var r286_currentGlyph = _r286_t0;
                                r286_currentGlyph.include(r276_sf.lb.full, true, true);
                                r286_currentGlyph.include(r276_sf.mb.full);
                                r286_currentGlyph.include(r276_sf.rb.full);
                                return void 0;
                            });
                        else
                            r276_currentGlyph.include(function () {
                                var _r292_t1;
                                var _r292_t0 = this;
                                var r292_currentGlyph = _r292_t0;
                                r292_currentGlyph.include(r276_sf.lb.outer, true, true);
                                r292_currentGlyph.include(r276_sf.rb.outer);
                                return void 0;
                            });
                    } else {
                        r276_currentGlyph.include(function () {
                            var _r297_t1;
                            var _r297_t0 = this;
                            var r297_currentGlyph = _r297_t0;
                            r297_currentGlyph.include(r276_sf.lb.outer, true, true);
                            r297_currentGlyph.include(r276_sf.rb.outer);
                            return void 0;
                        });
                        if (r276_sf.enoughSpaceForFullSerifs)
                            r276_currentGlyph.include(function () {
                                var _r302_t1;
                                var _r302_t0 = this;
                                var r302_currentGlyph = _r302_t0;
                                r302_currentGlyph.include(r276_sf.lt.full, true, true);
                                r302_currentGlyph.include(r276_sf.mt.full);
                                r302_currentGlyph.include(r276_sf.rt.full);
                                return void 0;
                            });
                        else
                            r276_currentGlyph.include(function () {
                                var _r308_t1;
                                var _r308_t0 = this;
                                var r308_currentGlyph = _r308_t0;
                                r308_currentGlyph.include(r276_sf.lt.outer, true, true);
                                r308_currentGlyph.include(r276_sf.rt.outer);
                                return void 0;
                            });
                    }
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Sha', 1064, function () {
            var _r313_t1;
            var _r313_t0 = this;
            var r313_currentGlyph = _r313_t0;
            var r313_df = r313_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r313_currentGlyph.include(r313_df.markSet.capital());
            r313_currentGlyph.include(r270_CyrShaShape(r270_CAP, r313_df, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/sha.upright', null, function () {
            var _r319_t1;
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            var r319_df = r319_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r319_currentGlyph.include(r319_df.markSet.e());
            r319_currentGlyph.include(r270_CyrShaShape(r270_XH, r319_df, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/teThreeLeg.upright', null, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            var r325_df = r325_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r325_currentGlyph.include(r325_df.markSet.e());
            r325_currentGlyph.include(r270_CyrShaShape(r270_XH, r325_df, true));
            return void 0;
        });
        r270_alias('smcpMTurned', 43002, 'cyrl/sha.upright');
        var r270_CyrShchaShape = function (r329_top, r329_df) {
            var _r329_t0, _r329_t1;
            return function () {
                var _r331_t1;
                var _r331_t0 = this;
                var r331_currentGlyph = _r331_t0;
                r331_currentGlyph.include(r270_CyrShaShape(r329_top, r329_df));
                r331_currentGlyph.include(r270_CyrDescender.rSideJut(r329_df.rightSB, 0, new r270_xn$NamedParameterPair$2Lrc9b('refSw', r329_df.mvs)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Shcha', 1065, function () {
            var _r337_t1;
            var _r337_t0 = this;
            var r337_currentGlyph = _r337_t0;
            var r337_df = r337_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r337_currentGlyph.include(r337_df.markSet.capital());
            r337_currentGlyph.include(r270_CyrShchaShape(r270_CAP, r337_df));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/shcha.upright', null, function () {
            var _r343_t1;
            var _r343_t0 = this;
            var r343_currentGlyph = _r343_t0;
            var r343_df = r343_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r343_currentGlyph.include(r343_df.markSet.e());
            r343_currentGlyph.include(r270_CyrShchaShape(r270_XH, r343_df));
            return void 0;
        });
    });
    return void 0;
});
