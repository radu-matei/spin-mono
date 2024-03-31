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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Wynn', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_Serifs, r270_doBS, _r270_t9, _r270_t10, _r270_t11, _r270_t12, _r270_tag13;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_widths = _r270_t2.widths;
        var r270_important = _r270_t2.important;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_xn$noshape$3cah = _r270_t4['no-shape'];
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t6.SerifFrame;
        var r270_SerifedArcStart = _r270_t6.SerifedArcStart;
        var r270_SerifLT = function (r274_top, r274_bot) {
            var _r274_t0, _r274_t1;
            return r270_SerifFrame.fromDf(r270_DivFrame(1), r274_top, r274_bot).lt.outer;
        };
        var r270_SerifLB = function (r275_top, r275_bot) {
            var _r275_t0, _r275_t1;
            return r270_SerifFrame.fromDf(r270_DivFrame(1), r275_top, r275_bot).lb.fullSide;
        };
        var r270_FullSerifs = function (r276_top, r276_bot) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph.include(r270_SerifLT(r276_top, r276_bot), true, true);
                r278_currentGlyph.include(r270_SerifLB(r276_top, r276_bot));
                return void 0;
            };
        };
        var r270_MotionSerif = function (r281_top, r281_bot) {
            var _r281_t0, _r281_t1;
            return r270_SerifLT(r281_top, r281_bot);
        };
        var r270_WynnShape = function (r282_bot, r282_top) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t1;
                var _r284_t0 = this;
                var r284_currentGlyph = _r284_t0;
                r284_currentGlyph.include(r270_VBar.l(r270_SB, r282_bot, r282_top));
                var r284_bowlBottom = 0.5 * r270_Stroke + r1_mix(r282_bot, r282_top, 0.15);
                var r284_bowlStartDepth = 0.15 * (r282_top - r284_bowlBottom);
                var r284_yCounterPesudoBottom = r1_mix(r284_bowlBottom, r282_top, 0.333);
                r284_currentGlyph.include(r270_dispiro(r270_SerifedArcStart.LtrRhs(r270_SB, r270_Middle, r282_top, r270_Stroke, Math.max(r270_Hook, r284_bowlStartDepth), r270_Stroke), r270_g4(r270_RightSB - r270_O, r282_top - r270_ArchDepthBOf(0.5 * (r282_top - r284_yCounterPesudoBottom), r270_Width), r270_widths.rhs()), r270_alsoThru(0.25, 0.45, r270_important), r270_g4(r270_SB + r270_HSwToV(r270_Stroke), r284_bowlBottom)));
                return void 0;
            };
        };
        var r270_WynnConfig = {
            'serifless': [
                r270_xn$noshape$3cah,
                false
            ],
            'motionSerifed': [
                r270_MotionSerif,
                false
            ],
            'serifed': [
                r270_FullSerifs,
                true
            ]
        };
        var _r270_t7 = Object.entries(r270_WynnConfig)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_Serifs = _r270_t9[1][0];
            r270_doBS = _r270_t9[1][1];
            _r270_t9[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('wynn.' + r270_suffix, null, function () {
                    var _r292_t1;
                    var _r292_t0 = this;
                    var r292_currentGlyph = _r292_t0;
                    r292_currentGlyph.include(r270_MarkSet.p());
                    r292_currentGlyph.include(r270_WynnShape(r270_Descender, r270_XH));
                    r292_currentGlyph.include(r270_Serifs(r270_XH, r270_Descender));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('wynn', 447);
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('Wynn', 503, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.include(r270_MarkSet.capital());
            r298_currentGlyph.include(r270_WynnShape(0, r270_CAP));
            if (r270_SLAB)
                r298_currentGlyph.include(r270_FullSerifs(r270_CAP, 0));
            return void 0;
        });
    });
    return void 0;
});
