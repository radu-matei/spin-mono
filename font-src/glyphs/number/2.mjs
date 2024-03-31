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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Two', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
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
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_VJut = _r270_t1.VJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceGlottalStopArchDepth = _r270_t1.AdviceGlottalStopArchDepth;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_hookstart = _r270_t4.hookstart;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_turned = _r270_t5.turned;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Shared'].resolve();
        var r270_OnumHeight = _r270_t6.OnumHeight;
        var r270_OnumMarks = _r270_t6.OnumMarks;
        var r270_CodeLnum = _r270_t6.CodeLnum;
        var r270_CodeOnum = _r270_t6.CodeOnum;
        var r270_TwoStraightNeckArcT = function (r274_sink, r274_offset, r274_sw, r274_top) {
            var _r274_t0, _r274_t1;
            var r274_archDepth = r270_AdviceGlottalStopArchDepth(r274_top, 1) * 0.95;
            var r274_xLeft = r270_SB + r274_offset;
            var r274_xRight = r270_RightSB - r274_offset - r270_OX / 2;
            var r274_yPhRight = r274_top - r274_archDepth * 1.5 - r274_sw / 2 * (r274_top / r270_CAP - r270_TanSlope);
            var r274_pStraightBarStart = 0.75;
            return r274_sink(r270_widths.rhs(r274_sw), r270_g4(r274_xLeft, r274_top - r270_Hook), r270_hookstart(r274_top - r274_offset - r270_O), r270_g4.down.mid(r274_xRight, r274_top - r274_archDepth), r270_flat(r1_mix(r274_xLeft, r274_xRight, r274_pStraightBarStart), r1_mix(r274_sw, r274_yPhRight, r274_pStraightBarStart)), r270_curl(r274_xLeft, r274_sw, r270_widths.lhs(r274_sw)));
        };
        var r270_TwoArcShapeT = function (r275_sink, r275_offset, r275_sw, r275_top) {
            var _r275_t0, _r275_t1;
            var r275_archDepth = r270_AdviceGlottalStopArchDepth(r275_top, 1) * 0.95;
            return r275_sink(r270_widths.rhs(r275_sw), r270_g4(r270_SB + r275_offset, r275_top - r270_Hook), r270_hookstart(r275_top - r275_offset - r270_O), r270_g4.down.mid(r270_RightSB - r275_offset - r270_OX / 2, r275_top - r275_archDepth), r270_alsoThru.g2(0.5, r270_StrokeWidthBlend(0.425, 0.4, r275_sw) * r1_linreg(500, 1, 700, 0.95, r270_Width), r270_widths.center(r275_sw)), r270_flat(r270_SB - r275_offset, 1, r270_widths.heading(r275_sw, 0, r270_Downward)), r270_curl(r270_SB - r275_offset, 0, r270_heading(r270_Downward)));
        };
        var r270_TwoShape = function (r276_top) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph.include(r270_TwoArcShapeT(r270_dispiro, 0, r270_Stroke, r276_top));
                r278_currentGlyph.include(r270_HBar.b(r270_SB + r270_HalfStroke, r270_RightSB, 0));
                if (r270_SLAB)
                    r278_currentGlyph.include(r270_VSerif.ur(r270_RightSB, 0, r270_VJut));
                return void 0;
            };
        };
        var r270_TwoStraightNeckShape = function (r282_top) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                r284_currentGlyph.include(r270_TwoStraightNeckArcT(r270_dispiro, 0, r270_Stroke, r282_top));
                r284_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0));
                if (r270_SLAB)
                    r284_currentGlyph.include(r270_VSerif.ur(r270_RightSB, 0, r270_VJut));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('two.lnum.straightNeck', null, function () {
            var _r290_t1;
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            r290_currentGlyph.include(r270_MarkSet.capital());
            r290_currentGlyph.include(r270_TwoStraightNeckShape(r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('two.onum.straightNeck', null, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r270_OnumMarks.e());
            r295_currentGlyph.include(r270_TwoStraightNeckShape(r270_OnumHeight));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('two.lnum.curlyNeck', null, function () {
            var _r300_t1;
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            r300_currentGlyph.include(r270_MarkSet.capital());
            r300_currentGlyph.include(r270_TwoShape(r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('two.onum.curlyNeck', null, function () {
            var _r305_t1;
            var _r305_t0 = this;
            var r305_currentGlyph = _r305_t0;
            r305_currentGlyph.include(r270_OnumMarks.e());
            r305_currentGlyph.include(r270_TwoShape(r270_OnumHeight));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('two.lnum', r270_CodeLnum('2'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'two'));
        r270_xn$selectvariant$7Hrq('two.onum', r270_CodeOnum('2'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'two'));
        r270_turned('turnDigitTwo', 8586, 'two.lnum', r270_Middle, r270_CAP / 2);
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t7.BBS;
        var r270_BBD = _r270_t7.BBD;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/two', 120794, function () {
            var _r313_t1;
            var _r313_t0 = this;
            var r313_currentGlyph = _r313_t0;
            r313_currentGlyph.include(r270_MarkSet.capital());
            r313_currentGlyph.include(r270_TwoArcShapeT(r270_dispiro, 0, r270_BBS, r270_CAP));
            r313_currentGlyph.include(r270_intersection(r270_TwoArcShapeT(r270_xn$spirooutline$1aao, 1, r270_BBS, r270_CAP), r270_VBar.r(r270_RightSB - r270_OX / 2 - r270_BBD, 0, r270_CAP, r270_BBS)));
            r313_currentGlyph.include(r270_HBar.b(r270_SB + r270_HSwToV(0.5 * r270_BBS), r270_RightSB, 0, r270_BBS));
            return void 0;
        });
    });
    return void 0;
});
