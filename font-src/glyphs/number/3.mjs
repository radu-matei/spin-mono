'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Three', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t9, _r270_t10;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HBarPos = _r270_t1.HBarPos;
        var r270_CThin = _r270_t1.CThin;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var r270_hookstart = _r270_t4.hookstart;
        var r270_hookend = _r270_t4.hookend;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_turned = _r270_t5.turned;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Shared'].resolve();
        var r270_OnumHeight = _r270_t6.OnumHeight;
        var r270_OnumMarks = _r270_t6.OnumMarks;
        var r270_ShiftDown = _r270_t6.ShiftDown;
        var r270_CodeLnum = _r270_t6.CodeLnum;
        var r270_CodeOnum = _r270_t6.CodeOnum;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Ezh'].resolve();
        var r270_EzhShape = _r270_t7.EzhShape;
        var r270_ThreeShapeT = function (r275_sink, r275_offset, r275_sw, r275_top) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_barcenter = r275_top * r270_HBarPos;
                var r277_xMid = r1_mix(r270_SB, r270_RightSB, 0.4);
                var r277_fine = r275_sw * r270_CThin;
                r277_currentGlyph.include(r275_sink(r270_widths.rhs(r275_sw), r270_g4(r270_SB + r275_offset - r270_O, r275_top - r270_Hook), r270_hookstart(r275_top - r275_offset - r270_O), r270_g4(r270_RightSB - r275_offset, r270_YSmoothMidR(r275_top - r275_offset - r270_O, r277_barcenter - r275_sw / 2, r270_ArchDepthA, r270_ArchDepthB)), r270_flat(r277_xMid + 0.01, r277_barcenter - (r277_fine - r275_sw / 2), r270_widths.rhs.heading(r277_fine, r270_Leftward)), r270_curl(r277_xMid, r277_barcenter - (r277_fine - r275_sw / 2), r270_heading(r270_Leftward))));
                r277_currentGlyph.include(r275_sink(r270_widths.rhs(r277_fine), r270_flat(r277_xMid, r277_barcenter + (r277_fine - r275_sw / 2), r270_heading(r270_Rightward)), r270_curl(r277_xMid + 0.01, r277_barcenter + (r277_fine - r275_sw / 2), r270_heading(r270_Rightward)), r270_g4(r270_RightSB - r275_offset - r270_O * 2, r270_YSmoothMidR(r277_barcenter + r275_sw / 2, r275_offset + r270_O, r270_ArchDepthA, r270_ArchDepthB), r270_widths.rhs(r275_sw)), r270_hookend(r275_offset + r270_O), r270_g4(r270_SB + r275_offset + r270_O, r270_Hook)));
                return void 0;
            };
        };
        var r270_ThreeShape = function (r280_top) {
            var _r280_t0, _r280_t1;
            return r270_ThreeShapeT(r270_dispiro, 0, r270_Stroke, r280_top);
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('three.lnum.twoArcs', null, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            r283_currentGlyph.include(r270_MarkSet.capital());
            r283_currentGlyph.include(r270_ThreeShape(r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('three.lnum.flatTop', null, function () {
            var _r288_t1;
            var _r288_t0 = this;
            var r288_currentGlyph = _r288_t0;
            r288_currentGlyph.include(r270_MarkSet.capital());
            r288_currentGlyph.include(r270_EzhShape(r270_CAP, 0, 0.25, 0.975));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('three.onum.twoArcs', null, function () {
            var _r293_t1;
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            r293_currentGlyph.include(r270_OnumMarks.p());
            r293_currentGlyph.include(r270_ThreeShape(r270_CAP));
            r293_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('three.onum.flatTop', null, function () {
            var _r299_t1;
            var _r299_t0 = this;
            var r299_currentGlyph = _r299_t0;
            r299_currentGlyph.include(r270_OnumMarks.p());
            r299_currentGlyph.include(r270_EzhShape(r270_CAP, 0, 0.25, 0.975));
            r299_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('three.lnum', r270_CodeLnum('3'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'three'));
        r270_xn$selectvariant$7Hrq('three.onum', r270_CodeOnum('3'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'three'));
        r270_turned('turnDigitThree', 8587, 'three.lnum', r270_Middle, r270_CAP / 2);
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t8.BBS;
        var r270_BBD = _r270_t8.BBD;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/three', 120795, function () {
            var _r308_t1;
            var _r308_t0 = this;
            var r308_currentGlyph = _r308_t0;
            r308_currentGlyph.include(r270_MarkSet.capital());
            r308_currentGlyph.include(r270_union(r270_ThreeShapeT(r270_dispiro, 0, r270_BBS, r270_CAP), r270_intersection(r270_ThreeShapeT(r270_xn$spirooutline$1aao, 1, r270_BBS, r270_CAP), r270_union(r270_VBar.r(r270_RightSB - r270_BBD, r270_CAP * r270_HBarPos, r270_CAP, r270_BBS), r270_VBar.r(r270_RightSB - r270_BBD - r270_O * 2, 0, r270_CAP * r270_HBarPos, r270_BBS)))));
            return void 0;
        });
    });
    return void 0;
});
