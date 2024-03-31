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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-DB-QP', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_OX = _r270_t1.OX;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_Jut = _r270_t1.Jut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VBar = _r270_t4.VBar;
        var r270_FlipAround = _r270_t4.FlipAround;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_OBarLeft = _r270_t6.OBarLeft;
        var r270_UpwardHookShape = _r270_t6.UpwardHookShape;
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-AE-OE'].resolve();
        var r270_SubDfAndShift = _r270_t7.SubDfAndShift;
        var r270_DbCenterShape = function (r275_df) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t2;
                var _r277_t1 = this;
                var r277_currentGlyph = _r277_t1;
                var _r277_t0 = r270_SubDfAndShift(0, r275_df, r270_OX);
                var r277_subDf = _r277_t0[0];
                var r277_ada = r277_subDf.archDepthA(r270_SmallArchDepth, r275_df.mvs);
                var r277_adb = r277_subDf.archDepthB(r270_SmallArchDepth, r275_df.mvs);
                r277_currentGlyph.include(r270_OBarLeft.roundedTop(new r270_xn$NamedParameterPair$2Lrc9b('left', r275_df.middle - r270_HSwToV(0.5 * r275_df.mvs)), new r270_xn$NamedParameterPair$2Lrc9b('right', r275_df.rightSB), new r270_xn$NamedParameterPair$2Lrc9b('yTerminal', 0), new r270_xn$NamedParameterPair$2Lrc9b('sw', r275_df.mvs), new r270_xn$NamedParameterPair$2Lrc9b('ada', r277_ada), new r270_xn$NamedParameterPair$2Lrc9b('adb', r277_adb)));
                r277_currentGlyph.include(r270_FlipAround(r275_df.middle, r270_XH / 2));
                r277_currentGlyph.include(r270_OBarLeft.rounded(new r270_xn$NamedParameterPair$2Lrc9b('left', r275_df.middle - r270_HSwToV(0.5 * r275_df.mvs)), new r270_xn$NamedParameterPair$2Lrc9b('right', r275_df.rightSB), new r270_xn$NamedParameterPair$2Lrc9b('yTerminal', r270_XH / 2), new r270_xn$NamedParameterPair$2Lrc9b('sw', r275_df.mvs), new r270_xn$NamedParameterPair$2Lrc9b('ada', r277_ada), new r270_xn$NamedParameterPair$2Lrc9b('adb', r277_adb)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('db', 568, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            var r295_df = r295_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r295_currentGlyph.include(r295_df.markSet.b());
            r295_currentGlyph.include(r270_DbCenterShape(r295_df));
            r295_currentGlyph.include(r270_VBar.m(r295_df.middle, r270_XH, r270_Ascender, r295_df.mvs));
            if (r270_SLAB)
                r295_currentGlyph.include(r270_HSerif.lt(r295_df.middle - r270_HSwToV(0.5 * r295_df.mvs), r270_Ascender, r270_SideJut));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('qp', 569, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            var r303_df = r303_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r303_currentGlyph.include(r303_df.markSet.p());
            r303_currentGlyph.include(r270_DbCenterShape(r303_df));
            r303_currentGlyph.include(r270_FlipAround(r303_df.middle, r270_XH / 2));
            r303_currentGlyph.include(r270_VBar.m(r303_df.middle, r270_Descender, 0, r303_df.mvs));
            if (r270_SLAB)
                r303_currentGlyph.include(r270_HSerif.mb(r303_df.middle, r270_Descender, r270_Jut));
            return void 0;
        });
    });
    return void 0;
});
