'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r271_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Upper-Gamma', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_suffix, r272_slabType, r272_doSM, _r272_t13, _r272_t14, _r272_t15, _r272_t16, _r272_tag17;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$Exec$2Lrc5 = _r272_t0['$Exec$'];
        var r272_MarkSet = _r272_t0.MarkSet;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_SB = _r272_t1.SB;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_Descender = _r272_t1.Descender;
        var r272_O = _r272_t1.O;
        var r272_OX = _r272_t1.OX;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_HBarPos = _r272_t1.HBarPos;
        var r272_OverlayPos = _r272_t1.OverlayPos;
        var r272_LongJut = _r272_t1.LongJut;
        var r272_Jut = _r272_t1.Jut;
        var r272_VJut = _r272_t1.VJut;
        var r272_SLAB = _r272_t1.SLAB;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_SideJut = _r272_t1.SideJut;
        var r272_ArchDepthA = _r272_t1.ArchDepthA;
        var r272_ArchDepthB = _r272_t1.ArchDepthB;
        var r272_MidJutSide = _r272_t1.MidJutSide;
        var r272_HSwToV = _r272_t1.HSwToV;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r272_tagged = _r272_t4.tagged;
        var r272_HSerif = _r272_t4.HSerif;
        var r272_VSerif = _r272_t4.VSerif;
        var r272_HBar = _r272_t4.HBar;
        var r272_VBar = _r272_t4.VBar;
        var _r272_t5 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$derivecomposites$7Hrq = _r272_t5['derive-composites'];
        var r272_xn$linkreducedvariant$5sIl8 = _r272_t5['link-reduced-variant'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r272_CyrDescender = _r272_t6.CyrDescender;
        var r272_MidHook = _r272_t6.MidHook;
        var _r272_t7 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r272_LetterBarOverlay = _r272_t7.LetterBarOverlay;
        var r272_PalatalHook = _r272_t7.PalatalHook;
        var _r272_t8 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r272_BBS = _r272_t8.BBS;
        var r272_BBD = _r272_t8.BBD;
        var r272_BBBarLeft = _r272_t8.BBBarLeft;
        var _r272_t9 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Upper-F'].resolve();
        var r272_xMidBarShrink = _r272_t9.xMidBarShrink;
        var _r272_t10 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r272_ExtendAboveBaseAnchors = _r272_t10.ExtendAboveBaseAnchors;
        var r272_LeaningAnchor = _r272_t10.LeaningAnchor;
        var r272_xn$SLABNONE$5sIl = 0;
        var r272_xn$SLABTR$5sIl = 1;
        var r272_xn$SLABLT$5sIl = 2;
        var r272_xn$SLABBOTTOM$5sIl = 3;
        var r272_xn$SLABALL$5sIl = 4;
        var r272_GammaBarLeft = r272_SB * 1.5;
        var r272_GammaShape = function (r280_top, r280_bot, r280_slabType) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t2;
                var _r282_t1 = this;
                var r282_currentGlyph = _r282_t1;
                r282_currentGlyph.include(r272_LeaningAnchor.Below.VBar.l(r272_GammaBarLeft));
                r282_currentGlyph.include(r272_VBar.l(r272_GammaBarLeft, r280_bot, r280_top));
                r282_currentGlyph.include(r272_HBar.t(r272_GammaBarLeft - r272_O, r272_RightSB - r272_OX, r280_top));
                var _r282_t0 = r280_slabType;
                if (_r282_t0 === r272_xn$SLABALL$5sIl) {
                    r282_currentGlyph.include(r272_HSerif.lt(r272_GammaBarLeft, r280_top, r272_SideJut));
                    r282_currentGlyph.include(r272_HSerif.lb(r272_GammaBarLeft + r272_HSwToV(r272_HalfStroke), r280_bot, r272_Jut));
                    r282_currentGlyph.include(r272_HSerif.rb(r272_GammaBarLeft + r272_HSwToV(r272_HalfStroke), r280_bot, r272_MidJutSide));
                    r282_currentGlyph.include(r272_tagged('serifRT', r272_VSerif.dr(r272_RightSB - r272_OX, r280_top, r272_VJut)));
                } else if (_r282_t0 === r272_xn$SLABBOTTOM$5sIl) {
                    r282_currentGlyph.include(r272_HSerif.lb(r272_GammaBarLeft + r272_HSwToV(r272_HalfStroke), r280_bot, r272_Jut));
                    r282_currentGlyph.include(r272_HSerif.rb(r272_GammaBarLeft + r272_HSwToV(r272_HalfStroke), r280_bot, r272_MidJutSide));
                } else if (_r282_t0 === r272_xn$SLABLT$5sIl) {
                    r282_currentGlyph.include(r272_HSerif.lt(r272_GammaBarLeft, r280_top, r272_SideJut));
                } else if (_r282_t0 === r272_xn$SLABTR$5sIl) {
                    r282_currentGlyph.include(r272_tagged('serifRT', r272_VSerif.dr(r272_RightSB - r272_OX, r280_top, r272_VJut)));
                } else
                    void 0;
                return void 0;
            };
        };
        var r272_GammaConfig = {
            'serifless': [
                r272_xn$SLABNONE$5sIl,
                r272_SLAB
            ],
            'topLeftSerifed': [
                r272_xn$SLABLT$5sIl,
                r272_SLAB
            ],
            'topRightSerifed': [
                r272_xn$SLABTR$5sIl,
                true
            ],
            'bottomSerifed': [
                r272_xn$SLABBOTTOM$5sIl,
                r272_SLAB
            ],
            'serifed': [
                r272_xn$SLABALL$5sIl,
                true
            ]
        };
        var _r272_t11 = Object.entries(r272_GammaConfig)[Symbol.iterator]();
        var _r272_t12 = void 0;
        while (!(_r272_t12 = _r272_t11.next()).done) {
            _r272_t13 = _r272_t12.value;
            r272_suffix = _r272_t13[0];
            r272_slabType = _r272_t13[1][0];
            r272_doSM = _r272_t13[1][1];
            _r272_t13[1];
            (function () {
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Gamma.' + r272_suffix, null, function () {
                    var _r299_t1;
                    var _r299_t0 = this;
                    var r299_currentGlyph = _r299_t0;
                    r299_currentGlyph.include(r272_MarkSet.capital());
                    r299_currentGlyph.include(r272_GammaShape(r272_CAP, 0, r272_slabType));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Digamma.' + r272_suffix, null, function () {
                    var _r304_t1;
                    var _r304_t0 = this;
                    var r304_currentGlyph = _r304_t0;
                    r304_currentGlyph.include(r272_MarkSet.capital());
                    r304_currentGlyph.include(r272_GammaShape(r272_CAP, 0, r272_slabType));
                    var r304_yBar = r272_CAP * r272_DesignParameters.upperEBarPos;
                    r304_currentGlyph.include(r272_HBar.m(r272_GammaBarLeft, r272_RightSB - r272_xMidBarShrink(r272_doSM), r304_yBar));
                    if (r272_doSM)
                        r304_currentGlyph.include(r272_tagged('serifRM', r272_VSerif.dr(r272_RightSB - r272_xMidBarShrink(r272_doSM), r304_yBar + r272_HalfStroke, r1_mix(r272_Stroke, r272_VJut, 0.5))));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/GheDescender.' + r272_suffix, null, function () {
                    var _r311_t1;
                    var _r311_t0 = this;
                    var r311_currentGlyph = _r311_t0;
                    r311_currentGlyph.include(r272_xn$referglyph$1aao('grek/Gamma.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r311_currentGlyph.include(r272_CyrDescender.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_HSwToV(r272_Stroke)), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/GheDHook.' + r272_suffix, null, function () {
                    var _r319_t1;
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    r319_currentGlyph.include(r272_xn$referglyph$1aao('grek/Gamma.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r319_currentGlyph.include(r272_PalatalHook.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_HSwToV(r272_Stroke)), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ghe.upright.' + r272_suffix, null, function () {
                    var _r327_t1;
                    var _r327_t0 = this;
                    var r327_currentGlyph = _r327_t0;
                    r327_currentGlyph.include(r272_MarkSet.e());
                    r327_currentGlyph.include(r272_GammaShape(r272_XH, 0, r272_slabType));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/gheDescender.upright.' + r272_suffix, null, function () {
                    var _r332_t1;
                    var _r332_t0 = this;
                    var r332_currentGlyph = _r332_t0;
                    r332_currentGlyph.include(r272_xn$referglyph$1aao('cyrl/ghe.upright.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r332_currentGlyph.include(r272_CyrDescender.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_HSwToV(r272_Stroke)), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/gheDHook.upright.' + r272_suffix, null, function () {
                    var _r340_t1;
                    var _r340_t0 = this;
                    var r340_currentGlyph = _r340_t0;
                    r340_currentGlyph.include(r272_xn$referglyph$1aao('cyrl/ghe.upright.' + r272_suffix), r272_AS_BASE, r272_ALSO_METRICS);
                    r340_currentGlyph.include(r272_PalatalHook.rSideJut(new r272_xn$NamedParameterPair$2Lrc9b('x', r272_GammaBarLeft + r272_HSwToV(r272_Stroke)), new r272_xn$NamedParameterPair$2Lrc9b('y', 0), new r272_xn$NamedParameterPair$2Lrc9b('jut', r272_MidJutSide)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ge.' + r272_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    r348_currentGlyph.include(r272_MarkSet.capital());
                    r348_currentGlyph.include(r272_ExtendAboveBaseAnchors(r272_CAP + r272_LongJut - 0.5 * r272_Stroke));
                    r348_currentGlyph.include(r272_GammaShape(r272_CAP, 0, r272_slabType));
                    r348_currentGlyph.ejectTagged('serifRT');
                    r348_currentGlyph.include(r272_VBar.r(r272_RightSB - r272_OX, r272_CAP, r272_CAP + r272_LongJut - 0.5 * r272_Stroke));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ge.upright.' + r272_suffix, null, function () {
                    var _r356_t1;
                    var _r356_t0 = this;
                    var r356_currentGlyph = _r356_t0;
                    r356_currentGlyph.include(r272_MarkSet.e());
                    r356_currentGlyph.include(r272_ExtendAboveBaseAnchors(r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    r356_currentGlyph.include(r272_GammaShape(r272_XH, 0, r272_slabType));
                    r356_currentGlyph.ejectTagged('serifRT');
                    r356_currentGlyph.include(r272_VBar.r(r272_RightSB - r272_OX, r272_XH, r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ge.italic.' + r272_suffix, null, function () {
                    var _r364_t1;
                    var _r364_t0 = this;
                    var r364_currentGlyph = _r364_t0;
                    r364_currentGlyph.include(r272_MarkSet.e());
                    r364_currentGlyph.include(r272_ExtendAboveBaseAnchors(r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    r364_currentGlyph.include(r272_GammaShape(r272_XH, 0, r272_slabType));
                    r364_currentGlyph.ejectTagged('serifRT');
                    r364_currentGlyph.include(r272_VBar.r(r272_RightSB - r272_OX, r272_XH, r272_XH + r272_LongJut - 0.5 * r272_Stroke));
                    return void 0;
                });
            }());
        }
        r272_xn$selectvariant$7Hrq('grek/Gamma', 915);
        r272_xn$linkreducedvariant$5sIl8('grek/Gamma/sansSerif', 'grek/Gamma', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('cyrl/Ghe', 1043, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'grek/Gamma'));
        r272_xn$selectvariant$7Hrq('cyrl/GheDescender', 1270, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ghe'));
        r272_xn$selectvariant$7Hrq('cyrl/GheDHook', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ghe'));
        r272_xn$selectvariant$7Hrq('cyrl/Ge', 1168);
        r272_xn$selectvariant$7Hrq('cyrl/ghe.upright');
        r272_xn$selectvariant$7Hrq('cyrl/gheDescender.upright', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ghe.upright'));
        r272_xn$selectvariant$7Hrq('cyrl/gheDHook.upright', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ghe.upright'));
        r272_xn$selectvariant$7Hrq('grek/smcpGamma', 7462, new r272_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/ghe.upright'), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Gamma'));
        r272_xn$selectvariant$7Hrq('cyrl/ge.upright');
        r272_xn$selectvariant$7Hrq('cyrl/ge.italic');
        r272_xn$selectvariant$7Hrq('grek/Digamma', 988, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Gamma'));
        r272_xn$deriveglyphs$7Hrq('cyrl/GheMidHook', 1172, 'cyrl/Ghe', function (r378_src, r378_gr) {
            var _r378_t0, _r378_t1;
            return function () {
                var _r380_t1;
                var _r380_t0 = this;
                var r380_currentGlyph = _r380_t0;
                r380_currentGlyph.include(r272_xn$referglyph$1aao(r378_src), r272_AS_BASE, r272_ALSO_METRICS);
                r380_currentGlyph.include(r272_MarkSet.capDesc());
                r380_currentGlyph.include(r272_MidHook.general(new r272_xn$NamedParameterPair$2Lrc9b('left', r272_GammaBarLeft + r272_HSwToV(r272_Stroke)), new r272_xn$NamedParameterPair$2Lrc9b('right', r272_RightSB), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP * r272_HBarPos + r272_Stroke / 4), new r272_xn$NamedParameterPair$2Lrc9b('ada', r272_ArchDepthA), new r272_xn$NamedParameterPair$2Lrc9b('adb', r272_ArchDepthB)));
                return void 0;
            };
        });
        r272_xn$deriveglyphs$7Hrq('cyrl/gheMidHook', 1173, 'cyrl/ghe.upright', function (r389_src, r389_gr) {
            var _r389_t0, _r389_t1;
            return function () {
                var _r391_t1;
                var _r391_t0 = this;
                var r391_currentGlyph = _r391_t0;
                r391_currentGlyph.include(r272_xn$referglyph$1aao(r389_src), r272_AS_BASE, r272_ALSO_METRICS);
                r391_currentGlyph.include(r272_MarkSet.p());
                r391_currentGlyph.include(r272_MidHook.general(new r272_xn$NamedParameterPair$2Lrc9b('left', r272_GammaBarLeft + r272_HSwToV(r272_Stroke)), new r272_xn$NamedParameterPair$2Lrc9b('right', r272_RightSB), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_XH * r272_HBarPos + r272_Stroke / 4), new r272_xn$NamedParameterPair$2Lrc9b('ada', r272_ArchDepthA * Math.pow(r272_HBarPos, 0.3)), new r272_xn$NamedParameterPair$2Lrc9b('adb', r272_ArchDepthB * Math.pow(r272_HBarPos, 0.3))));
                return void 0;
            };
        });
        var r272_GhaynOverlayBar = function (r400_top) {
            var _r400_t0, _r400_t1;
            return r272_LetterBarOverlay.l(r272_GammaBarLeft, r400_top * (1 - r272_OverlayPos));
        };
        r272_xn$derivecomposites$7Hrq('cyrl/Ghayn', 1170, 'cyrl/Ghe', r272_GhaynOverlayBar(r272_CAP));
        r272_xn$derivecomposites$7Hrq('cyrl/ghayn.upright', null, 'cyrl/ghe.upright', r272_GhaynOverlayBar(r272_XH));
        r272_xn$derivecomposites$7Hrq('cyrl/GheStrokeHook', 1274, 'cyrl/GheDHook', r272_GhaynOverlayBar(r272_CAP));
        r272_xn$derivecomposites$7Hrq('cyrl/gheStrokeHook.upright', null, 'cyrl/gheDHook.upright', r272_GhaynOverlayBar(r272_XH));
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/grek/Gamma', 8510, function () {
            var _r403_t1;
            var _r403_t0 = this;
            var r403_currentGlyph = _r403_t0;
            r403_currentGlyph.include(r272_MarkSet.capital());
            r403_currentGlyph.include(r272_BBBarLeft(r272_GammaBarLeft, 0, r272_CAP));
            r403_currentGlyph.include(r272_HBar.t(r272_GammaBarLeft, r272_RightSB, r272_CAP, r272_BBS));
            return void 0;
        });
        return r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/digamma', 989, function () {
            var _r409_t1;
            var _r409_t0 = this;
            var r409_currentGlyph = _r409_t0;
            r409_currentGlyph.include(r272_MarkSet.p());
            r409_currentGlyph.include(r272_GammaShape(r272_XH, r272_Descender, r272_xn$SLABNONE$5sIl));
            var r409_yBar = r1_mix(0, r272_XH, r272_DesignParameters.upperEBarPos);
            r409_currentGlyph.include(r272_HBar.m(r272_GammaBarLeft, r272_RightSB - r272_xMidBarShrink(r272_SLAB), r409_yBar));
            if (r272_SLAB)
                r409_currentGlyph.include(r272_tagged('serifRM', r272_VSerif.dr(r272_RightSB - r272_xMidBarShrink(r272_SLAB), r409_yBar + r272_HalfStroke, r1_mix(r272_Stroke, r272_VJut, 0.5))));
            return void 0;
        });
    });
    return void 0;
});
