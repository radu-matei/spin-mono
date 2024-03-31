'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r266_block, _r266_t4, _r266_t6;
    var _r266_t3 = this;
    var _r266_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r266_t1 = _r266_t0.length;
    var _r266_t2 = 0;
    var _r266_t5 = _r266_t2 < _r266_t1;
    while (_r266_t5) {
        _r266_t6 = (r266_block = _r266_t0[_r266_t2], r266_block(_r266_t3), _r266_t2 = _r266_t2 + 1);
        _r266_t5 = _r266_t2 < _r266_t1;
    }
    return _r266_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r270_xn$Capture_Ext$2Lrc2b) {
    var _r270_t0, _r270_t1;
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-F', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_lt, r271_lb, r271_v, _r271_t10, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_tagged = _r271_t4.tagged;
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t6.LeaningAnchor;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t7.LetterBarOverlay;
        var r271_PalatalHook = _r271_t7.PalatalHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'xMidBarShrink': r271_xMidBarShrink };
        });
        var r271_xMidBarShrink = function (r278_serifV) {
            var _r278_t0, _r278_t1;
            return Math.max(r271_HalfStroke, (r271_RightSB - r271_SB) * 0.15) + (r278_serifV ? r271_Stroke * 0.25 : 0);
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'yMidBar': r271_yMidBar };
        });
        var r271_yMidBar = function (r281_top, r281_y) {
            var _r281_t0, _r281_t1;
            return r281_top * r1_fallback(r281_y, r271_DesignParameters.upperEBarPos);
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r283_t0, _r283_t1;
            return { 'EFVJutLength': r271_EFVJutLength };
        });
        var r271_EFVJutLength = function (r284_top, r284_pyBar, r284_stroke) {
            var _r284_t0, _r284_t1;
            var r284_jutTop = Math.min(r271_VJut, r284_top - r1_mix(r284_top - r284_stroke, r271_yMidBar(r284_top, r284_pyBar) + r284_stroke / 2, 0.5));
            var r284_jutBot = Math.min(r271_VJut, r1_mix(r284_stroke, r271_yMidBar(r284_top, r284_pyBar) - r284_stroke / 2, 0.5));
            return [
                r284_jutTop,
                r284_jutBot
            ];
        };
        var r271_xFBarLeft = r271_SB * 1.5;
        var r271_xFBarRight = r271_Width - r271_SB * 1.5;
        var r271_FShape = function () {
            var _r285_t6;
            var _r285_t7 = arguments;
            var _r285_t0 = [].slice.call(_r285_t7, 0);
            var _r285_t1 = [];
            var _r285_t2 = 0;
            while (_r285_t2 < _r285_t0.length) {
                if (!(_r285_t0[_r285_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r285_t1.push(_r285_t0[_r285_t2]);
                _r285_t2 = _r285_t2 + 1;
            }
            var _r285_t3 = _r285_t0;
            var _r285_t4 = _r285_t3.length;
            var _r285_t5 = 0;
            while (_r285_t5 < _r285_t4) {
                _r285_t2 = _r285_t3[_r285_t5];
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'top')
                    r285_top = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'pyBar')
                    r285_pyBar = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'serifLT')
                    r285_serifLT = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'serifLB')
                    r285_serifLB = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'serifV')
                    r285_serifV = _r285_t2.right;
                if (_r285_t2 && _r285_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r285_t2.left === 'stroke')
                    r285_stroke = _r285_t2.right;
                _r285_t5 = _r285_t5 + 1;
            }
            var r285_top = r1_fallback(r285_top, _r285_t1[0]);
            var r285_pyBar = r1_fallback(r285_pyBar, _r285_t1[1]);
            var r285_serifLT = r1_fallback(r285_serifLT, _r285_t1[2]);
            var r285_serifLB = r1_fallback(r285_serifLB, _r285_t1[3]);
            var r285_serifV = r1_fallback(r285_serifV, _r285_t1[4]);
            var r285_stroke = r1_fallback(r285_stroke, _r285_t1[5], r271_AdviceStroke2(2, 3, r285_top));
            return function () {
                var r291_jutTop, r291_jutBot, _r291_t0, _r291_t2;
                var _r291_t1 = this;
                var r291_currentGlyph = _r291_t1;
                r291_currentGlyph.include(r271_VBar.l(r271_xFBarLeft, 0, r285_top, r285_stroke));
                r291_currentGlyph.include(r271_HBar.t(r271_xFBarLeft - r271_O, r271_RightSB, r285_top, r285_stroke));
                r291_currentGlyph.include(r271_tagged('crossBar', r271_HBar.m(r271_xFBarLeft - r271_O, r271_RightSB - r271_xMidBarShrink(r285_serifV), r271_yMidBar(r285_top, r285_pyBar), r285_stroke)));
                if (r285_serifLT)
                    r291_currentGlyph.include(r271_HSerif.lt(r271_xFBarLeft, r285_top, r271_SideJut));
                if (r285_serifLB) {
                    r291_currentGlyph.include(r271_tagged('serifBottom', r271_HSerif.lb(r271_xFBarLeft, 0, r271_SideJut)));
                    r291_currentGlyph.include(r271_tagged('serifBottom', r271_HSerif.rb(r271_xFBarLeft + r271_HSwToV(r271_HalfStroke), 0, r271_MidJutSide)));
                }
                if (r285_serifV) {
                    _r291_t0 = r271_EFVJutLength(r285_top, r285_pyBar, r285_stroke);
                    r291_jutTop = _r291_t0[0];
                    r291_jutBot = _r291_t0[1];
                    r291_currentGlyph.include(r271_VSerif.dr(r271_RightSB, r285_top, r291_jutTop));
                }
                return void 0;
            };
        };
        var r271_FConfig = {
            'serifless': [
                false,
                false,
                false
            ],
            'topLeftSerifed': [
                true,
                false,
                false
            ],
            'serifed': [
                true,
                true,
                true
            ]
        };
        var _r271_t8 = Object.entries(r271_FConfig)[Symbol.iterator]();
        var _r271_t9 = void 0;
        while (!(_r271_t9 = _r271_t8.next()).done) {
            _r271_t10 = _r271_t9.value;
            r271_suffix = _r271_t10[0];
            r271_lt = _r271_t10[1][0];
            r271_lb = _r271_t10[1][1];
            r271_v = _r271_t10[1][2];
            _r271_t10[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('F.' + r271_suffix, null, function () {
                    var _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    r304_currentGlyph.include(r271_MarkSet.capital());
                    r304_currentGlyph.include(r271_LeaningAnchor.Below.VBar.l(r271_xFBarLeft, r271_AdviceStroke2(2, 3, r271_CAP)));
                    r304_currentGlyph.include(r271_FShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('serifLT', r271_lt), new r271_xn$NamedParameterPair$2Lrc9b('serifLB', r271_lb), new r271_xn$NamedParameterPair$2Lrc9b('serifV', r271_v)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/frenchFrancSign.' + r271_suffix, null, function () {
                    var _r313_t1;
                    var _r313_t0 = this;
                    var r313_currentGlyph = _r313_t0;
                    r313_currentGlyph.include(r271_xn$referglyph$1aao('F.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r313_currentGlyph.ejectTagged('crossBar');
                    r313_currentGlyph.include(r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xFBarLeft), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('py', 0.375)));
                    r313_currentGlyph.include(r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xFBarLeft), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('py', 0.625)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('FBar.' + r271_suffix, null, function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    r328_currentGlyph.include(r271_xn$referglyph$1aao('F.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r328_currentGlyph.include(r271_LetterBarOverlay.l.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_xFBarLeft), new r271_xn$NamedParameterPair$2Lrc9b('bot', r271_yMidBar(r271_CAP) + r271_HalfStroke), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_CAP - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('space', [
                        0,
                        r271_RightSB - (r271_v ? r271_HSwToV(r271_VJutStroke) : 0)
                    ])));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpF.' + r271_suffix, null, function () {
                    var _r337_t1;
                    var _r337_t0 = this;
                    var r337_currentGlyph = _r337_t0;
                    r337_currentGlyph.include(r271_MarkSet.e());
                    r337_currentGlyph.include(r271_LeaningAnchor.Below.VBar.l(r271_xFBarLeft, r271_AdviceStroke2(2, 3, r271_XH)));
                    r337_currentGlyph.include(r271_FShape(r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('serifLT', r271_lt), new r271_xn$NamedParameterPair$2Lrc9b('serifLB', r271_lb), new r271_xn$NamedParameterPair$2Lrc9b('serifV', r271_v)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('F', 'F');
        r271_xn$linkreducedvariant$5sIl8('F/sansSerif', 'F', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpF', 42800, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'F'));
        r271_xn$selectvariant$7Hrq('FBar', 42904, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'F'));
        r271_xn$selectvariant$7Hrq('currency/frenchFrancSign', 8355, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'F'));
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t11.BBS;
        var r271_BBD = _r271_t11.BBD;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/F', 120125, function () {
            var _r350_t1;
            var _r350_t0 = this;
            var r350_currentGlyph = _r350_t0;
            r350_currentGlyph.include(r271_MarkSet.capital());
            r350_currentGlyph.include(r271_union(r271_VBar.l(r271_xFBarLeft + r271_BBD, 0, r271_CAP, r271_BBS), r271_HBar.b(r271_xFBarLeft, r271_xFBarLeft + r271_BBD, 0, r271_BBS), r271_difference(r271_FShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS)), r271_Rect(r271_CAP - r271_BBS, r271_BBS, r271_xFBarLeft + r271_HSwToV(r271_BBS), r271_xFBarLeft + r271_BBD))));
            return void 0;
        });
        r271_turned('turnF', 8498, 'F', r271_Middle, r271_CAP / 2);
        r271_turned('turnSmcpF', 8526, 'smcpF', r271_Middle, r271_XH / 2);
        return r271_xn$deriveglyphs$7Hrq('Fltail', 401, 'F', function (r354_src, r354_gr) {
            var _r354_t0, _r354_t1;
            return function () {
                var _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                r356_currentGlyph.include(r271_xn$referglyph$1aao(r354_src), r271_AS_BASE, r271_ALSO_METRICS);
                r356_currentGlyph.ejectTagged('serifBottom');
                r356_currentGlyph.include(r271_PalatalHook.lExt(r271_xFBarLeft, 0));
                return void 0;
            };
        });
    });
    return void 0;
});
