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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Nine', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t9, _r270_t10;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_Middle = _r270_t1.Middle;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_FlipAround = _r270_t4.FlipAround;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Shared'].resolve();
        var r270_OnumHeight = _r270_t6.OnumHeight;
        var r270_OnumMarks = _r270_t6.OnumMarks;
        var r270_ShiftDown = _r270_t6.ShiftDown;
        var r270_CodeLnum = _r270_t6.CodeLnum;
        var r270_CodeOnum = _r270_t6.CodeOnum;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Six'].resolve();
        var r270_ClosedContourSixShape = _r270_t7.ClosedContourSixShape;
        var r270_OpenContourSixShape = _r270_t7.OpenContourSixShape;
        var r270_StraightBarSixShape = _r270_t7.StraightBarSixShape;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('nine.lnum.closedContour', null, function () {
            var _r277_t1;
            var _r277_t0 = this;
            var r277_currentGlyph = _r277_t0;
            r277_currentGlyph.include(r270_MarkSet.capital());
            r277_currentGlyph.include(r270_ClosedContourSixShape(r270_CAP));
            r277_currentGlyph.include(r270_FlipAround(r270_Middle, r270_CAP / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('nine.onum.closedContour', null, function () {
            var _r283_t1;
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            r283_currentGlyph.include(r270_OnumMarks.p());
            r283_currentGlyph.include(r270_ClosedContourSixShape(r270_CAP));
            r283_currentGlyph.include(r270_FlipAround(r270_Middle, r270_OnumHeight / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('nine.lnum.openContour', null, function () {
            var _r289_t1;
            var _r289_t0 = this;
            var r289_currentGlyph = _r289_t0;
            r289_currentGlyph.include(r270_MarkSet.capital());
            r289_currentGlyph.include(r270_OpenContourSixShape(r270_CAP));
            r289_currentGlyph.include(r270_FlipAround(r270_Middle, r270_CAP / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('nine.onum.openContour', null, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r270_OnumMarks.p());
            r295_currentGlyph.include(r270_OpenContourSixShape(r270_CAP));
            r295_currentGlyph.include(r270_FlipAround(r270_Middle, r270_OnumHeight / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('nine.lnum.straightBar', null, function () {
            var _r301_t1;
            var _r301_t0 = this;
            var r301_currentGlyph = _r301_t0;
            r301_currentGlyph.include(r270_MarkSet.capital());
            r301_currentGlyph.include(r270_StraightBarSixShape(r270_CAP));
            r301_currentGlyph.include(r270_FlipAround(r270_Middle, r270_CAP / 2));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('nine.onum.straightBar', null, function () {
            var _r307_t1;
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            r307_currentGlyph.include(r270_OnumMarks.p());
            r307_currentGlyph.include(r270_StraightBarSixShape(r270_CAP));
            r307_currentGlyph.include(r270_FlipAround(r270_Middle, r270_OnumHeight / 2));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('nine.lnum', r270_CodeLnum('9'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'nine'));
        r270_xn$selectvariant$7Hrq('nine.onum', r270_CodeOnum('9'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'nine'));
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t8.BBS;
        var r270_BBD = _r270_t8.BBD;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/nine', 120801, function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            r316_currentGlyph.include(r270_MarkSet.capital());
            r316_currentGlyph.include(r270_StraightBarSixShape(r270_CAP, new r270_xn$NamedParameterPair$2Lrc9b('sw', r270_BBS), new r270_xn$NamedParameterPair$2Lrc9b('bbd', r270_BBD)));
            r316_currentGlyph.include(r270_FlipAround(r270_Middle, r270_CAP / 2));
            return void 0;
        });
    });
    return void 0;
});
