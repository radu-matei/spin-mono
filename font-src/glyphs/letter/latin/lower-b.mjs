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
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-B', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_Serifs, r271_doTS, _r271_t12, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Translate = _r271_t1.Translate;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_tagged = _r271_t4.tagged;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t6.LeaningAnchor;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t8.OBarLeft;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var r271_DMBlend = _r271_t8.DMBlend;
        var r271_TopHook = _r271_t8.TopHook;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t9.LetterBarOverlay;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var r271_ToothedBody = function (r278_yTop) {
            var _r278_t0, _r278_t1;
            return r271_union(r271_OBarLeft.shape(), r271_VBar.l(r271_SB, 0, r278_yTop));
        };
        var r271_ToothlessCornerBody = function (r279_yTop) {
            var _r279_t0, _r279_t1;
            return r271_union(r271_OBarLeft.toothless(new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend)), r271_VBar.l(r271_SB, r271_DToothlessRise, r279_yTop));
        };
        var r271_ToothlessRoundedBody = function (r282_yTop) {
            var _r282_t0, _r282_t1;
            return r271_OBarLeft.rounded(new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r282_yTop));
        };
        var r271_LTSerifs = function () {
            var _r284_t0, _r284_t1;
            return r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut));
        };
        var r271_LBSerifs = function () {
            var _r285_t0, _r285_t1;
            return r271_tagged('serifLB', r271_HSerif.lb(r271_SB, 0, r271_SideJut));
        };
        var r271_FullSerifs = function () {
            var _r286_t0, _r286_t1;
            return function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                r288_currentGlyph.include(r271_LTSerifs(), true, true);
                r288_currentGlyph.include(r271_LBSerifs());
                return void 0;
            };
        };
        var r271_BConfig = r1_SuffixCfg.weave({
            'toothed': r271_ToothedBody,
            'toothlessCorner': r271_ToothlessCornerBody,
            'toothlessRounded': r271_ToothlessRoundedBody
        }, {
            'serifless': [
                r271_xn$noshape$3cah,
                false
            ],
            'motionSerifed': [
                r271_LTSerifs,
                true
            ],
            'bottomSerifed': [
                r271_LBSerifs,
                false
            ],
            'serifed': [
                r271_FullSerifs,
                true
            ]
        });
        var _r271_t10 = Object.entries(r271_BConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_Body = _r271_t12[1][0];
            r271_Serifs = _r271_t12[1][1][0];
            r271_doTS = _r271_t12[1][1][1];
            _r271_t12[1][1];
            _r271_t12[1];
            (function () {
                var r293_yOverlay = r1_mix(r271_XH, r271_Ascender - (r271_doTS ? r271_Stroke : 0), 0.5);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('b.' + r271_suffix, null, function () {
                    var _r296_t1;
                    var _r296_t0 = this;
                    var r296_currentGlyph = _r296_t0;
                    r296_currentGlyph.include(r271_MarkSet.b());
                    r296_currentGlyph.include(r271_Body(r271_Ascender));
                    r296_currentGlyph.include(r271_Serifs());
                    r296_currentGlyph.include(r271_LeaningAnchor.Above.VBar.l(r271_SB));
                    r296_currentGlyph.setBaseAnchor('overlayOnExtension', r271_SB + r271_HSwToV(0.5 * r271_Stroke), r293_yOverlay);
                    r296_currentGlyph.setBaseAnchor('overlay', r271_Middle, r271_XH / 2);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('bBar.' + r271_suffix, null, function () {
                    var _r305_t1;
                    var _r305_t0 = this;
                    var r305_currentGlyph = _r305_t0;
                    r305_currentGlyph.include(r271_xn$referglyph$1aao('b.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r305_currentGlyph.include(r271_LetterBarOverlay.l.in(r271_SB, r271_XH, r271_Ascender - (r271_doTS ? r271_Stroke : 0)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('bSlash.' + r271_suffix, null, function () {
                    var _r310_t1;
                    var _r310_t0 = this;
                    var r310_currentGlyph = _r310_t0;
                    r310_currentGlyph.include(r271_xn$referglyph$1aao('b.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r310_currentGlyph.include(r271_dispiro(r271_widths.center(r271_OverlayStroke), r271_flat(r1_mix(r271_SB, 0, 0.7), r293_yOverlay - r271_Ascender * 0.1), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.625), r293_yOverlay + r271_Ascender * 0.05)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/be.' + r271_suffix, null, function () {
                    var _r315_t1;
                    var _r315_t0 = this;
                    var r315_currentGlyph = _r315_t0;
                    r315_currentGlyph.include(r271_xn$referglyph$1aao('b.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r315_currentGlyph.include(r271_HBar.t(r271_SB - r271_O, r1_mix(r271_SB, r271_RightSB, 0.9), r271_Ascender));
                    if (r271_doTS)
                        r315_currentGlyph.include(r271_VSerif.dr(r1_mix(r271_SB, r271_RightSB, 0.9), r271_Ascender, r271_VJut));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('bHookTop.' + r271_suffix, null, function () {
                    var _r321_t1;
                    var _r321_t0 = this;
                    var r321_currentGlyph = _r321_t0;
                    r321_currentGlyph.include(r271_MarkSet.b());
                    r321_currentGlyph.include(r271_Body(r271_XH));
                    r321_currentGlyph.include(r271_TopHook.lBarInner(r271_SB, r271_XH / 2, r271_Ascender));
                    r321_currentGlyph.include(r271_Serifs());
                    r321_currentGlyph.ejectTagged('serifLT');
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('b', 'b');
        r271_xn$selectvariant$7Hrq('bBar', 384, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'b'));
        r271_xn$selectvariant$7Hrq('bSlash', 9250, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'b'));
        r271_xn$selectvariant$7Hrq('latn/be', 387, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'b'));
        r271_xn$derivecomposites$7Hrq('bPalatalHook', 7552, 'b', r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r1_mix(r271_Middle + r271_CorrectionOMidS, r271_RightSB, 0.75)), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r1_mix(r271_O, r271_SmallArchDepthA, r271_archv.yFromX(0.75)))));
        r271_xn$linkreducedvariant$5sIl8('b/sansSerif', 'b', r1_MathSansSerif);
        r271_CreateAccentedComposition('bTildeOver', 7532, 'b', 'tildeOverOnExension');
        r271_xn$selectvariant$7Hrq('bHookTop', 595);
        r271_xn$derivemultipartglyphs$7Hrq65('bDot', 7683, [
            'b',
            'dotAbove'
        ], function (r333_srcs, r333_gr) {
            var _r333_t0, _r333_t1;
            return function () {
                var _r335_t2;
                var _r335_t1 = this;
                var r335_currentGlyph = _r335_t1;
                var _r335_t0 = r333_srcs;
                var r335_base = _r335_t0[0];
                var r335_mark = _r335_t0[1];
                r335_currentGlyph.include(r271_xn$referglyph$1aao(r335_mark));
                r335_currentGlyph.include(r271_Translate(r271_Width + r271_HSwToV(r271_HalfStroke), 0));
                r335_currentGlyph.include(r271_xn$referglyph$1aao(r335_base), r271_AS_BASE);
                r335_currentGlyph.include(r271_LeaningAnchor.Above.VBar.l(r271_Middle));
                return void 0;
            };
        });
        var _r271_t13 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t13.BBS;
        var r271_BBD = _r271_t13.BBD;
        var r271_BBBarLeft = _r271_t13.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/b', 120147, function () {
            var _r343_t1;
            var _r343_t0 = this;
            var r343_currentGlyph = _r343_t0;
            r343_currentGlyph.include(r271_MarkSet.b());
            r343_currentGlyph.include(r271_BBBarLeft(r271_SB, 0, r271_Ascender));
            r343_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB + r271_BBD + r271_HSwToV(r271_BBS), r271_RightSB), r271_VBar.r(r271_RightSB - r271_BBD - r271_OX, 0, r271_XH, r271_BBS)));
            r343_currentGlyph.include(r271_OBarLeft.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
