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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Four', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_Jut = _r270_t1.Jut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_HSerif = _r270_t4.HSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Shared'].resolve();
        var r270_OnumMarks = _r270_t6.OnumMarks;
        var r270_ShiftDown = _r270_t6.ShiftDown;
        var r270_CodeLnum = _r270_t6.CodeLnum;
        var r270_CodeOnum = _r270_t6.CodeOnum;
        var r270_FourStdShape = function () {
            var _r274_t6;
            var _r274_t7 = arguments;
            var _r274_t0 = [].slice.call(_r274_t7, 0);
            var _r274_t1 = [];
            var _r274_t2 = 0;
            while (_r274_t2 < _r274_t0.length) {
                if (!(_r274_t0[_r274_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r274_t1.push(_r274_t0[_r274_t2]);
                _r274_t2 = _r274_t2 + 1;
            }
            var _r274_t3 = _r274_t0;
            var _r274_t4 = _r274_t3.length;
            var _r274_t5 = 0;
            while (_r274_t5 < _r274_t4) {
                _r274_t2 = _r274_t3[_r274_t5];
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'top')
                    r274_top = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'open')
                    r274_open = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'crossing')
                    r274_crossing = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'fine')
                    r274_fine = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'sw')
                    r274_sw = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'bbd')
                    r274_bbd = _r274_t2.right;
                _r274_t5 = _r274_t5 + 1;
            }
            var r274_top = r1_fallback(r274_top, _r274_t1[0]);
            var r274_open = r1_fallback(r274_open, _r274_t1[1]);
            var r274_crossing = r1_fallback(r274_crossing, _r274_t1[2]);
            var r274_fine = r1_fallback(r274_fine, _r274_t1[3], r270_AdviceStroke(3));
            var r274_sw = r1_fallback(r274_sw, _r274_t1[4], r270_Stroke);
            var r274_bbd = r1_fallback(r274_bbd, _r274_t1[5], 0);
            return function () {
                var _r280_t1;
                var _r280_t0 = this;
                var r280_currentGlyph = _r280_t0;
                var r280_yBar = r274_top * 0.3 + 0.625 * r274_sw;
                var r280_xVertBar = r1_mix(r270_SB, r270_RightSB, r274_crossing ? 0.75 : 0.9125) - r274_bbd * 0.75 + (r274_crossing ? r270_HSwToV(0.375 * r274_sw) : 0);
                var r280_yVertBarTop = r1_mix(r280_yBar - r274_sw, r274_top, r274_open ? 0.5 : 1) - (r274_open ? 0.3 * r274_sw : 0);
                var r280_xHBarTerminal = r274_crossing ? r270_RightSB : r280_xVertBar;
                var r280_xSlopeTop = r280_xVertBar - r270_HSwToV(r274_sw) - (r274_open ? 0.25 : 1) * r270_HSwToV(r274_fine) * (r274_crossing ? 0.25 : 0.5);
                r280_currentGlyph.include(r270_union(r270_VBar.r(r280_xVertBar, 0, r280_yVertBarTop, r274_sw), r270_difference(r270_HBar.t(r270_SB + r270_OX, r280_xHBarTerminal, r280_yBar, r274_sw), r270_Rect(r270_CAP, 0, r280_xVertBar, r280_xVertBar + r274_bbd)), r270_intersection(r274_open ? r270_Rect(r274_top, r280_yBar, 0, r270_Width) : r270_Rect(r274_top, r280_yBar, 0, r280_xVertBar), r270_dispiro(r270_widths.rhs(r274_fine), r270_g4(r270_SB + r270_OX, r280_yBar), r270_g4(r1_mix(r270_SB + r270_OX, r280_xSlopeTop, 2), r1_mix(r280_yBar, r274_top, 2))))));
                if (r274_bbd) {
                    r280_currentGlyph.include(r270_VBar.r(r280_xVertBar + r274_bbd, 0, r280_yVertBarTop, r274_sw));
                    r280_currentGlyph.include(r270_HBar.t(r280_xVertBar, r280_xVertBar + r274_bbd, r270_CAP, r274_sw));
                    r280_currentGlyph.include(r270_HBar.b(r280_xVertBar, r280_xVertBar + r274_bbd, 0, r274_sw));
                }
                if (!r274_bbd && r270_SLAB)
                    r280_currentGlyph.include(r270_HSerif.mb(r280_xVertBar - r270_HSwToV(r270_HalfStroke), 0, r270_Jut));
                return void 0;
            };
        };
        var r270_FourOpenShape = function (r286_top, r286_crossing) {
            var _r286_t0, _r286_t1;
            return function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                var r288_yBar = r286_top * 0.4;
                var r288_fine = r270_AdviceStroke(3);
                var r288_xVertBar = r1_mix(r270_SB, r270_RightSB, r286_crossing ? 0.825 : 0.9125);
                var r288_xHBarTerminal = r286_crossing ? r270_RightSB : r288_xVertBar;
                r288_currentGlyph.include(r270_HBar.t(r270_SB, r288_xHBarTerminal, r288_yBar));
                r288_currentGlyph.include(r270_VBar.r(r288_xVertBar, 0, r1_mix(r288_yBar - r270_Stroke, r286_top, 0.75)));
                r288_currentGlyph.include(r270_VBar.l(r270_SB, r288_yBar, r286_top));
                if (r270_SLAB)
                    r288_currentGlyph.include(r270_HSerif.mb(r288_xVertBar - r270_HSwToV(r270_HalfStroke), 0, r270_Jut));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.closed', null, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r270_MarkSet.capital());
            r295_currentGlyph.include(r270_FourStdShape(r270_CAP, false, true));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.closedNonCrossing', null, function () {
            var _r300_t1;
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            r300_currentGlyph.include(r270_MarkSet.capital());
            r300_currentGlyph.include(r270_FourStdShape(r270_CAP, false, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.semiOpen', null, function () {
            var _r305_t1;
            var _r305_t0 = this;
            var r305_currentGlyph = _r305_t0;
            r305_currentGlyph.include(r270_MarkSet.capital());
            r305_currentGlyph.include(r270_FourStdShape(r270_CAP, true, true, new r270_xn$NamedParameterPair$2Lrc9b('fine', r270_AdviceStroke(2.75))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.semiOpenNonCrossing', null, function () {
            var _r311_t1;
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            r311_currentGlyph.include(r270_MarkSet.capital());
            r311_currentGlyph.include(r270_FourStdShape(r270_CAP, true, false, new r270_xn$NamedParameterPair$2Lrc9b('fine', r270_AdviceStroke(2.75))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.open', null, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            r317_currentGlyph.include(r270_MarkSet.capital());
            r317_currentGlyph.include(r270_FourOpenShape(r270_CAP, true));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.lnum.openNonCrossing', null, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.include(r270_MarkSet.capital());
            r322_currentGlyph.include(r270_FourOpenShape(r270_CAP, false));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.closed', null, function () {
            var _r327_t1;
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            r327_currentGlyph.include(r270_OnumMarks.p());
            r327_currentGlyph.include(r270_FourStdShape(r270_CAP, false, true));
            r327_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.closedNonCrossing', null, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            r333_currentGlyph.include(r270_OnumMarks.p());
            r333_currentGlyph.include(r270_FourStdShape(r270_CAP, false, false));
            r333_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.semiOpen', null, function () {
            var _r339_t1;
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            r339_currentGlyph.include(r270_OnumMarks.p());
            r339_currentGlyph.include(r270_FourStdShape(r270_CAP, true, true));
            r339_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.semiOpenNonCrossing', null, function () {
            var _r345_t1;
            var _r345_t0 = this;
            var r345_currentGlyph = _r345_t0;
            r345_currentGlyph.include(r270_OnumMarks.p());
            r345_currentGlyph.include(r270_FourStdShape(r270_CAP, true, false));
            r345_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.open', null, function () {
            var _r351_t1;
            var _r351_t0 = this;
            var r351_currentGlyph = _r351_t0;
            r351_currentGlyph.include(r270_OnumMarks.p());
            r351_currentGlyph.include(r270_FourOpenShape(r270_CAP, true));
            r351_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('four.onum.openNonCrossing', null, function () {
            var _r357_t1;
            var _r357_t0 = this;
            var r357_currentGlyph = _r357_t0;
            r357_currentGlyph.include(r270_OnumMarks.p());
            r357_currentGlyph.include(r270_FourOpenShape(r270_CAP, false));
            r357_currentGlyph.include(r270_ShiftDown());
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('four.lnum', r270_CodeLnum('4'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'four'));
        r270_xn$selectvariant$7Hrq('four.onum', r270_CodeOnum('4'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'four'));
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t7.BBS;
        var r270_BBD = _r270_t7.BBD;
        var r270_BBBarCenter = _r270_t7.BBBarCenter;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/four', 120796, function () {
            var _r366_t1;
            var _r366_t0 = this;
            var r366_currentGlyph = _r366_t0;
            r366_currentGlyph.include(r270_MarkSet.capital());
            r366_currentGlyph.include(r270_FourStdShape(r270_CAP, false, true, new r270_xn$NamedParameterPair$2Lrc9b('sw', r270_BBS), new r270_xn$NamedParameterPair$2Lrc9b('bbd', r270_BBD), new r270_xn$NamedParameterPair$2Lrc9b('fine', r270_BBS)));
            return void 0;
        });
    });
    return void 0;
});
