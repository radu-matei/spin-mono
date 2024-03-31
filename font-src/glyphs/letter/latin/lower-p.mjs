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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-P', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_Serifs, r271_doBS, _r271_t12, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_tagged = _r271_t4.tagged;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_VBar = _r271_t4.VBar;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var r271_LeaningAnchor = _r271_t6.LeaningAnchor;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t8.OBarLeft;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var r271_DMBlend = _r271_t8.DMBlend;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_TopHook = _r271_t9.TopHook;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var r271_SerifFrame = _r271_t9.SerifFrame;
        var r271_EaredBody = function (r278_top) {
            var _r278_t0, _r278_t1;
            return function () {
                var _r280_t1;
                var _r280_t0 = this;
                var r280_currentGlyph = _r280_t0;
                r280_currentGlyph.include(r271_tagged('bowl', r271_OBarLeft.shape()));
                r280_currentGlyph.include(r271_tagged('stemLeft', r271_VBar.l(r271_SB, r271_Descender, r278_top)));
                return void 0;
            };
        };
        var r271_EarlessCornerBody = function () {
            var _r283_t0, _r283_t1;
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                r285_currentGlyph.include(r271_tagged('bowl', r271_OBarLeft.toothlessTop(new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend))));
                r285_currentGlyph.include(r271_tagged('stemLeft', r271_VBar.l(r271_SB, r271_Descender, r271_XH - r271_DToothlessRise)));
                return void 0;
            };
        };
        var r271_EarlessRoundedBody = function () {
            var _r290_t0, _r290_t1;
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.include(r271_tagged('bowl', r271_OBarLeft.roundedTop(new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r271_Descender))));
                return void 0;
            };
        };
        var r271_SmallPSerifLT = function (r295_top) {
            var _r295_t0, _r295_t1;
            return r271_SerifFrame.fromDf(r271_DivFrame(1), r295_top, r271_Descender).lt.outer;
        };
        var r271_SmallPSerifLB = function (r296_top) {
            var _r296_t0, _r296_t1;
            return r271_SerifFrame.fromDf(r271_DivFrame(1), r296_top, r271_Descender).lb.fullSide;
        };
        var r271_FullSerifs = function (r297_top) {
            var _r297_t0, _r297_t1;
            return function () {
                var _r299_t1;
                var _r299_t0 = this;
                var r299_currentGlyph = _r299_t0;
                r299_currentGlyph.include(r271_SmallPSerifLT(r297_top), true, true);
                r299_currentGlyph.include(r271_SmallPSerifLB(r297_top));
                return void 0;
            };
        };
        var r271_MotionSerif = function (r302_top) {
            var _r302_t0, _r302_t1;
            return r271_SmallPSerifLT(r302_top);
        };
        var r271_BottomSerif = function (r303_top) {
            var _r303_t0, _r303_t1;
            return r271_SmallPSerifLB(r303_top);
        };
        var r271_PConfig = r1_SuffixCfg.weave({
            'eared': r271_EaredBody,
            'earlessCorner': r271_EarlessCornerBody,
            'earlessRounded': r271_EarlessRoundedBody
        }, {
            'serifless': [
                r271_xn$noshape$3cah,
                false
            ],
            'motionSerifed': [
                r271_MotionSerif,
                false
            ],
            'bottomSerifed': [
                r271_BottomSerif,
                true
            ],
            'serifed': [
                r271_FullSerifs,
                true
            ]
        });
        var _r271_t10 = Object.entries(r271_PConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_Body = _r271_t12[1][0];
            r271_Serifs = _r271_t12[1][1][0];
            r271_doBS = _r271_t12[1][1][1];
            _r271_t12[1][1];
            _r271_t12[1];
            (function () {
                var r306_yOverlay = r1_mix(0, r271_Descender + (r271_doBS ? r271_Stroke : 0), 0.5);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('p.' + r271_suffix, null, function () {
                    var _r309_t1;
                    var _r309_t0 = this;
                    var r309_currentGlyph = _r309_t0;
                    r309_currentGlyph.include(r271_MarkSet.p());
                    r309_currentGlyph.include(r271_Body(r271_XH));
                    r309_currentGlyph.include(r271_Serifs(r271_XH));
                    r309_currentGlyph.include(r271_LeaningAnchor.Below.VBar.l(r271_SB));
                    r309_currentGlyph.setBaseAnchor('overlayOnExtension', r271_SB + r271_HSwToV(0.5 * r271_Stroke), r306_yOverlay);
                    r309_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('thorn.' + r271_suffix, null, function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    r318_currentGlyph.include(r271_MarkSet.bp());
                    r318_currentGlyph.include(r271_Body(r271_Ascender));
                    r318_currentGlyph.include(r271_Serifs(r271_Ascender));
                    r318_currentGlyph.include(r271_LeaningAnchor.Above.VBar.l(r271_SB));
                    r318_currentGlyph.include(r271_LeaningAnchor.Below.VBar.l(r271_SB));
                    r318_currentGlyph.setBaseAnchor('overlayOnExtension', r271_SB + r271_HSwToV(0.5 * r271_Stroke), r306_yOverlay);
                    r318_currentGlyph.setBaseAnchor('strike', r271_Middle, r271_XH / 2);
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('pPalatalHook.' + r271_suffix, null, function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    r328_currentGlyph.include(r271_xn$referglyph$1aao('p.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r328_tinyGap = Math.max(r271_Width / 32, r271_AdviceStroke(24));
                    var r328_xMask = Math.max(r271_SB + r271_HSwToV(r271_Stroke) + 2 * r328_tinyGap, r271_SB + r271_HSwToV(0.5 * r271_Stroke) + r271_MidJutSide + r328_tinyGap);
                    r328_currentGlyph.include(r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r1_mix(r271_Middle + r271_CorrectionOMidS, r271_RightSB, 0.75)), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r1_mix(r271_O, r271_SmallArchDepthA, r271_archv.yFromX(0.75))), new r271_xn$NamedParameterPair$2Lrc9b('maskOut', r271_intersection(r271_MaskBelow(0), r271_MaskLeft(r328_xMask)))));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('p', 'p');
        r271_xn$linkreducedvariant$5sIl8('p/sansSerif', 'p', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('p/hookTopBase', 'p');
        r271_xn$selectvariant$7Hrq('cyrl/er', 1088, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'p'));
        r271_xn$selectvariant$7Hrq('pPalatalHook', 7560, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'p'));
        r271_xn$selectvariant$7Hrq('thorn', 254);
        r271_alias('grek/sho', 1016, 'thorn.earedSerifless');
        r271_CreateAccentedComposition('pTildeOver', 7537, 'p', 'tildeOverOnExension');
        r271_xn$deriveglyphs$7Hrq('cyrl/rrTick', 1167, 'cyrl/er', function (r337_src, r337_gr) {
            var _r337_t0, _r337_t1;
            return function () {
                var _r339_t1;
                var _r339_t0 = this;
                var r339_currentGlyph = _r339_t0;
                r339_currentGlyph.include(r271_xn$referglyph$1aao(r337_src), r271_AS_BASE, r271_ALSO_METRICS);
                r339_currentGlyph.include(r271_dispiro(r271_widths.center(r271_AdviceStroke(4)), r271_flat(r1_mix(r271_SB, r271_RightSB, 0.5), r271_HalfStroke + r271_XH * 0.25), r271_curl(r1_mix(r271_SB, r271_RightSB, 0.875), r271_HalfStroke - r271_XH * 0.25)));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('pHookTop', 421, 'p/hookTopBase', function (r342_src, r342_gr) {
            var _r342_t0, _r342_t1;
            return function () {
                var _r344_t1;
                var _r344_t0 = this;
                var r344_currentGlyph = _r344_t0;
                r344_currentGlyph.include(r271_xn$referglyph$1aao(r342_src), r271_AS_BASE, r271_ALSO_METRICS);
                r344_currentGlyph.ejectTagged('serifLT');
                r344_currentGlyph.ejectTagged('stemLeft');
                r344_currentGlyph.include(r271_TopHook.lBarOuter(r271_SB, r271_Descender, r271_XH));
                return void 0;
            };
        });
        var _r271_t13 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t13.BBS;
        var r271_BBD = _r271_t13.BBD;
        var r271_BBBarLeft = _r271_t13.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/p', 120161, function () {
            var _r352_t1;
            var _r352_t0 = this;
            var r352_currentGlyph = _r352_t0;
            r352_currentGlyph.include(r271_MarkSet.p());
            r352_currentGlyph.include(r271_BBBarLeft(r271_SB, r271_Descender, r271_XH));
            r352_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB + r271_BBD + r271_HSwToV(r271_BBS), r271_RightSB), r271_VBar.r(r271_RightSB - r271_BBD - r271_OX, 0, r271_XH, r271_BBS)));
            r352_currentGlyph.include(r271_OBarLeft.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
