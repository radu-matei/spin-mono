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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Egyptological', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t9, _r270_t10;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_end = _r270_t2.end;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r270_CreateAccentedComposition = _r270_t6.CreateAccentedComposition;
        var r270_EgyptologicalYodComponent = function (r274_sw, r274_x, r274_bot, r274_top) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                var r276_rad = (r274_top - r274_bot) / 2;
                var r276_wid = r276_rad * 1.2;
                var r276_balance = r276_wid * 0.55;
                r276_currentGlyph.include(r270_dispiro(r270_widths.rhs(r274_sw), r270_g4.right.start(r274_x - r276_balance, r274_top - r270_O, r270_heading(r270_Rightward)), r270_archv(), r270_g4.down.mid(r274_x + r276_wid - r276_balance, r1_mix(r274_bot, r274_top, 0.5), r270_heading(r270_Downward)), r270_arcvh(), r270_g4.left.end(r274_x - r276_balance, r274_bot + r270_O, r270_heading(r270_Leftward))));
                return void 0;
            };
        };
        var r270_EgyptologicalAyinComponent = function (r278_sw, r278_x, r278_bot, r278_top) {
            var _r278_t0, _r278_t1;
            return function () {
                var _r280_t1;
                var _r280_t0 = this;
                var r280_currentGlyph = _r280_t0;
                var r280_rad = (r278_top - r278_bot) / 2;
                var r280_wid = r280_rad * 1.2;
                var r280_balance = r280_wid * 0.55;
                r280_currentGlyph.include(r270_dispiro(r270_widths.lhs(r278_sw), r270_g4.left.start(r278_x + r280_balance, r278_top - r270_O, r270_heading(r270_Leftward)), r270_archv(), r270_g4.down.mid(r278_x - r280_wid + r280_balance, r1_mix(r278_bot, r278_top, 0.5), r270_heading(r270_Downward)), r270_arcvh(), r270_g4.right.end(r278_x + r280_balance, r278_bot + r270_O, r270_heading(r270_Rightward))));
                return void 0;
            };
        };
        var r270_EgyptologicalAlefShape = function (r282_bot, r282_top) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                var r284_sw = r270_AdviceStroke2(4, 4, r282_top);
                var r284_gap = Math.max(r284_sw / 2, r282_top / 12);
                var r284_rad = (r282_top - r284_gap) / 4;
                r284_currentGlyph.include(r270_EgyptologicalYodComponent(r284_sw, r270_Middle, r282_top - r284_rad * 2, r282_top));
                r284_currentGlyph.include(r270_EgyptologicalYodComponent(r284_sw, r270_Middle, r282_bot, r282_bot + r284_rad * 2));
                return void 0;
            };
        };
        var r270_EgyptologicalAyinShape = function (r287_bot, r287_top) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_sw = r270_AdviceStroke2(4, 4, r287_top);
                var r289_gap = Math.max(r289_sw / 2, r287_top / 12);
                var r289_rad = (r287_top + r289_gap) / 4;
                r289_currentGlyph.include(r270_EgyptologicalAyinComponent(r289_sw, r270_Middle, r287_top - r289_rad * 2, r287_top));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalCapitalAlef', 42786, function () {
            var _r293_t1;
            var _r293_t0 = this;
            var r293_currentGlyph = _r293_t0;
            r293_currentGlyph.include(r270_MarkSet.capital());
            r293_currentGlyph.include(r270_EgyptologicalAlefShape(0, r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalSmallAlef', 42787, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.include(r270_MarkSet.e());
            r298_currentGlyph.include(r270_EgyptologicalAlefShape(0, r270_XH));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalCapitalAyin', 42788, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            r303_currentGlyph.include(r270_MarkSet.capital());
            r303_currentGlyph.include(r270_EgyptologicalAyinShape(0, r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalSmallAyin', 42789, function () {
            var _r308_t1;
            var _r308_t0 = this;
            var r308_currentGlyph = _r308_t0;
            r308_currentGlyph.include(r270_MarkSet.e());
            r308_currentGlyph.include(r270_EgyptologicalAyinShape(0, r270_XH));
            return void 0;
        });
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r270_markMiddle = _r270_t7.markMiddle;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r270_aboveMarkTop = _r270_t8.aboveMarkTop;
        var r270_aboveMarkBot = _r270_t8.aboveMarkBot;
        var r270_aboveMarkMid = _r270_t8.aboveMarkMid;
        var r270_aboveMarkStack = _r270_t8.aboveMarkStack;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalYodAbove', 57360, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.setWidth(0);
            r315_currentGlyph.setMarkAnchor('above', r270_markMiddle, r270_XH, r270_markMiddle, r270_aboveMarkStack);
            r315_currentGlyph.setBaseAnchor('aboveBraceL', r270_markMiddle, r270_aboveMarkMid);
            r315_currentGlyph.setBaseAnchor('aboveBraceR', r270_markMiddle, r270_aboveMarkMid);
            var r315_fine = r270_AdviceStroke(5);
            r315_currentGlyph.include(r270_EgyptologicalYodComponent(r315_fine, r270_markMiddle, r270_aboveMarkBot, r270_aboveMarkTop));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('EgyptologicalYodTonos', null, function () {
            var _r323_t1;
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            r323_currentGlyph.setWidth(0);
            r323_currentGlyph.include(r270_xn$referglyph$1aao('EgyptologicalYodAbove'));
            r323_currentGlyph.setMarkAnchor('grekUpperTonos', r270_markMiddle, r270_XH);
            r323_currentGlyph.setBaseAnchor('aboveBraceL', r270_markMiddle, r270_aboveMarkMid);
            r323_currentGlyph.setBaseAnchor('aboveBraceR', r270_markMiddle, r270_aboveMarkMid);
            return void 0;
        });
        r270_CreateAccentedComposition('AGlottal', 42938, 'grek/Alpha', 'EgyptologicalYodTonos');
        r270_CreateAccentedComposition('IGlottal', 42940, 'grek/Iota', 'EgyptologicalYodTonos');
        return r270_CreateAccentedComposition('UGlottal', 42942, 'U/withTonos', 'EgyptologicalYodTonos');
    });
    return void 0;
});
