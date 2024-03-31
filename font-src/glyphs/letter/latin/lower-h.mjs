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
var r1_ScheduleLeaningMark = _r1_t9.ScheduleLeaningMark;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-H', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_fTailed, r271_fHasTopSerif, r271_Serifs, _r271_t14, _r271_t17, _r271_t19, _r271_t20, _r271_t21, _r271_tag22, _r271_t23, _r271_tag24;
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
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_O = _r271_t1.O;
        var r271_TailY = _r271_t1.TailY;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_tagged = _r271_t4.tagged;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markExtend = _r271_t6.markExtend;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r271_aboveMarkMid = _r271_t7.aboveMarkMid;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Below'].resolve();
        var r271_belowMarkMid = _r271_t8.belowMarkMid;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t9.LeaningAnchor;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t10.RightwardTailedBar;
        var r271_nShoulder = _r271_t10.nShoulder;
        var r271_nShoulderMask = _r271_t10.nShoulderMask;
        var r271_CyrDescender = _r271_t10.CyrDescender;
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_TopHook = _r271_t11.TopHook;
        var r271_PalatalHook = _r271_t11.PalatalHook;
        var r271_EngHook = _r271_t11.EngHook;
        var r271_RetroflexHook = _r271_t11.RetroflexHook;
        var r271_SmallHSerifs = function (r280_tailed, r280_hookTop) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                r282_currentGlyph.include(r271_SmallHLeftSerifs(r280_tailed, r280_hookTop));
                if (!r280_tailed)
                    r282_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.mb(r271_RightSB - r271_HSwToV(r271_HalfStroke), 0, r271_Jut)));
                return void 0;
            };
        };
        var r271_SmallHLeftSerifs = function (r285_tailed, r285_hookTop) {
            var _r285_t0, _r285_t1;
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                r287_currentGlyph.include(r271_SmallHTopLeftSerifs(r285_tailed, r285_hookTop));
                r287_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.mb(r271_SB + r271_HSwToV(r271_HalfStroke), 0, r271_Jut)));
                return void 0;
            };
        };
        var r271_SmallHMotionSerifs = function (r290_tailed, r290_hookTop) {
            var _r290_t0, _r290_t1;
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.include(r271_SmallHTopLeftSerifs(r290_tailed, r290_hookTop));
                if (!r290_tailed)
                    r292_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_RightSB, 0, r271_SideJut)));
                return void 0;
            };
        };
        var r271_SmallHTopLeftSerifs = function (r295_tailed, r295_hookTop) {
            var _r295_t0, _r295_t1;
            return function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                if (!r295_hookTop)
                    r297_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r271_SB, r271_Ascender, r271_SideJut)));
                return void 0;
            };
        };
        var r271_SmallTurnHSerifs = function (r299_tailed, r299_hookTop) {
            var _r299_t0, _r299_t1;
            return function () {
                var _r301_t1;
                var _r301_t0 = this;
                var r301_currentGlyph = _r301_t0;
                r301_currentGlyph.include(r271_SmallTurnHLeftSerifs(r299_tailed, r299_hookTop));
                if (!r299_tailed)
                    r301_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_RightSB, 0, r271_SideJut)));
                return void 0;
            };
        };
        var r271_SmallTurnHLeftSerifs = function (r304_tailed, r304_hookTop) {
            var _r304_t0, _r304_t1;
            return function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                r306_currentGlyph.include(r271_SmallTurnHTopLeftSerifs(r304_tailed, r304_hookTop));
                r306_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.rb(r271_SB + r271_HSwToV(r271_HalfStroke), 0, r271_Jut)));
                return void 0;
            };
        };
        var r271_SmallTurnHMotionSerifs = function (r309_tailed, r309_hookTop) {
            var _r309_t0, _r309_t1;
            return function () {
                var _r311_t1;
                var _r311_t0 = this;
                var r311_currentGlyph = _r311_t0;
                r311_currentGlyph.include(r271_SmallTurnHTopLeftSerifs(r309_tailed, r309_hookTop));
                if (!r309_tailed)
                    r311_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r271_RightSB, 0, r271_SideJut)));
                return void 0;
            };
        };
        var r271_SmallTurnHTopLeftSerifs = function (r314_tailed, r314_hookTop) {
            var _r314_t0, _r314_t1;
            return function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                if (!r314_hookTop)
                    r316_currentGlyph.include(r271_tagged('serifLT', r271_union(r271_HSerif.lt(r271_SB + r271_HSwToV(r271_HalfStroke), r271_Ascender, r271_Jut), r271_HSerif.rt(r271_SB + r271_HSwToV(r271_HalfStroke), r271_Ascender, r271_MidJutSide))));
                return void 0;
            };
        };
        r271_HBar.mOverlay = function (r318_fHasTopSerif) {
            var _r318_t0, _r318_t1;
            return function () {
                var _r320_t1;
                var _r320_t0 = this;
                var r320_currentGlyph = _r320_t0;
                var r320_barSpaceTop = r271_Ascender - (r318_fHasTopSerif ? r271_Stroke : 0);
                var r320_s = Math.min(r271_OverlayStroke, 0.625 * (r320_barSpaceTop - r271_XH));
                var r320_xOverlayStart = r1_mix(r271_SB, 0, 0.7);
                var r320_xOverlayEnd = r1_mix(r271_SB, r271_RightSB, 0.5);
                var r320_yOverlay = r1_mix(r271_XH, r320_barSpaceTop, 0.45) - r320_s / 2;
                r320_currentGlyph.include(r271_dispiro(r271_widths.lhs(r320_s), r271_corner(r320_xOverlayStart, r320_yOverlay), r271_corner(r271_SB + r271_HSwToV(r271_HalfStroke), r320_yOverlay)));
                r320_currentGlyph.include(r271_dispiro(r271_widths.lhs(r271_OverlayStroke), r271_corner(r271_SB + r271_HSwToV(r271_HalfStroke), r320_yOverlay), r271_corner(r320_xOverlayEnd, r320_yOverlay)));
                return void 0;
            };
        };
        var r271_HConfig = r1_SuffixCfg.weave({
            'straight': false,
            'tailed': true
        }, {
            'serifless': [
                false,
                r271_xn$noshape$3cah
            ],
            'serifed': [
                true,
                r271_SmallHSerifs
            ],
            'motionSerifed': [
                true,
                r271_SmallHMotionSerifs
            ],
            'topLeftSerifed': [
                true,
                r271_SmallHTopLeftSerifs
            ]
        });
        var _r271_t12 = Object.entries(r271_HConfig)[Symbol.iterator]();
        var _r271_t13 = void 0;
        while (!(_r271_t13 = _r271_t12.next()).done) {
            _r271_t14 = _r271_t13.value;
            r271_suffix = _r271_t14[0];
            r271_fTailed = _r271_t14[1][0];
            r271_fHasTopSerif = _r271_t14[1][1][0];
            r271_Serifs = _r271_t14[1][1][1];
            _r271_t14[1][1];
            _r271_t14[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('h.' + r271_suffix, null, function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    r328_currentGlyph.include(r271_MarkSet.b());
                    r328_currentGlyph.include(r271_LeaningAnchor.Above.VBar.l(r271_SB));
                    r328_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_Ascender));
                    r328_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_fTailed ? r271_XH - r271_SmallArchDepthB + r271_O : 0)));
                    if (r271_fTailed)
                        r328_currentGlyph.include(r271_RightwardTailedBar(r271_RightSB, 0, r271_XH - r271_SmallArchDepthB));
                    r328_currentGlyph.include(r271_Serifs(r271_fTailed, false));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('hBar.' + r271_suffix, null, function () {
                    var _r340_t1;
                    var _r340_t0 = this;
                    var r340_currentGlyph = _r340_t0;
                    r340_currentGlyph.include(r271_xn$referglyph$1aao('h.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r340_currentGlyph.include(r271_HBar.mOverlay(r271_fHasTopSerif));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('hHookTop.' + r271_suffix, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.include(r271_MarkSet.b());
                    r345_currentGlyph.include(r271_TopHook.lBarInner(r271_SB, 0, r271_Ascender));
                    r345_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_fTailed ? r271_XH - r271_SmallArchDepthB + r271_O : 0)));
                    if (r271_fTailed)
                        r345_currentGlyph.include(r271_RightwardTailedBar(r271_RightSB, 0, r271_XH - r271_SmallArchDepthB));
                    r345_currentGlyph.include(r271_Serifs(r271_fTailed, true));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('hengHookTop.' + r271_suffix, null, function () {
                    var _r356_t1;
                    var _r356_t0 = this;
                    var r356_currentGlyph = _r356_t0;
                    r356_currentGlyph.include(r271_MarkSet.bp());
                    r356_currentGlyph.include(r271_xn$referglyph$1aao('hHookTop.' + r271_suffix));
                    r356_currentGlyph.ejectTagged('serifRB');
                    r356_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('heng.' + r271_suffix, null, function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    r363_currentGlyph.include(r271_MarkSet.bp());
                    r363_currentGlyph.include(r271_xn$referglyph$1aao('h.' + r271_suffix));
                    r363_currentGlyph.ejectTagged('serifRB');
                    r363_currentGlyph.include(r271_EngHook(r271_RightSB, 0, r271_Descender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('hengBar.' + r271_suffix, null, function () {
                    var _r370_t1;
                    var _r370_t0 = this;
                    var r370_currentGlyph = _r370_t0;
                    r370_currentGlyph.include(r271_xn$referglyph$1aao('heng.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r370_currentGlyph.include(r271_HBar.mOverlay(r271_fHasTopSerif));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('h', 'h');
        r271_xn$linkreducedvariant$5sIl8('h/descBase', 'h');
        r271_xn$linkreducedvariant$5sIl8('h/sansSerif', 'h', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('hBar', 295, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'h'));
        r271_xn$selectvariant$7Hrq('hHookTop', 614);
        r271_xn$selectvariant$7Hrq('hengHookTop', 615);
        r271_xn$selectvariant$7Hrq('heng', 42791);
        r271_xn$selectvariant$7Hrq('cyrl/dje', 1106, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'heng'), new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'hengBar'));
        r271_xn$selectvariant$7Hrq('cyrl/shha', 1211, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'h'));
        r271_xn$derivecomposites$7Hrq('hPalatalHook', 42901, 'h/descBase', r271_PalatalHook.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('hDescender', 11368, 'h/descBase', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_alias('cyrl/shhaDescender', 1319, 'hDescender');
        r271_xn$derivemultipartglyphs$7Hrq65('hDot', 7715, [
            'h',
            'dotAbove'
        ], function (r377_srcs, r377_gr) {
            var _r377_t0, _r377_t1;
            return function () {
                var _r379_t2;
                var _r379_t1 = this;
                var r379_currentGlyph = _r379_t1;
                var _r379_t0 = r377_srcs;
                var r379_base = _r379_t0[0];
                var r379_mark = _r379_t0[1];
                r379_currentGlyph.include(r271_xn$referglyph$1aao(r379_mark));
                r379_currentGlyph.include(r271_Translate(r271_Width + r271_HSwToV(r271_HalfStroke), 0));
                r379_currentGlyph.include(r271_xn$referglyph$1aao(r379_base), r271_AS_BASE, r271_ALSO_METRICS);
                r379_currentGlyph.include(r271_LeaningAnchor.Above.VBar.l(r271_Middle));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('hCedilla', 7721, 'h', function (r384_src, r384_gr) {
            var _r384_t0, _r384_t1;
            return function () {
                var _r386_t1;
                var _r386_t0 = this;
                var r386_currentGlyph = _r386_t0;
                var r386_shift = r271_Width + r271_SB - r271_Middle + r271_HSwToV(r271_HalfStroke);
                r386_currentGlyph.include(r271_xn$referglyph$1aao('cedillaBelow'));
                r386_currentGlyph.include(r271_ApparentTranslate(r386_shift, 0));
                r386_currentGlyph.include(r271_xn$referglyph$1aao(r384_src));
                r386_currentGlyph.include(r271_MarkSet.bp());
                r386_currentGlyph.setBaseAnchor('belowBraceL', -r271_Middle + r386_shift - 0.5 * r271_markExtend, r271_belowMarkMid);
                r386_currentGlyph.setBaseAnchor('belowBraceR', -r271_Middle + r386_shift + 0.5 * r271_markExtend, r271_belowMarkMid);
                return void 0;
            };
        });
        r271_alias('cyrl/tshe', 1115, 'hBar');
        var r271_TurnHConfig = {
            'toothedSerifless': [r271_xn$noshape$3cah],
            'toothedSerifed': [r271_SmallTurnHSerifs],
            'toothedMotionSerifed': [r271_SmallTurnHMotionSerifs]
        };
        var _r271_t15 = Object.entries(r271_TurnHConfig)[Symbol.iterator]();
        var _r271_t16 = void 0;
        while (!(_r271_t16 = _r271_t15.next()).done) {
            _r271_t17 = _r271_t16.value;
            r271_suffix = _r271_t17[0];
            r271_Serifs = _r271_t17[1][0];
            _r271_t17[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('turnh.' + r271_suffix, null, function () {
                    var _r398_t1;
                    var _r398_t0 = this;
                    var r398_currentGlyph = _r398_t0;
                    r398_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', 0)));
                    r398_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_Ascender));
                    r398_currentGlyph.include(r271_Serifs(false, false));
                    r398_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
                    r398_currentGlyph.include(r271_MarkSet.p());
                    r398_currentGlyph.include(r271_LeaningAnchor.Below.VBar.r(r271_RightSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('hookturnh.' + r271_suffix, null, function () {
                    var _r410_t1;
                    var _r410_t0 = this;
                    var r410_currentGlyph = _r410_t0;
                    r410_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_TailY + r271_HalfStroke)));
                    r410_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_Ascender));
                    r410_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, r271_TailY + r271_HalfStroke));
                    r410_currentGlyph.include(r271_Serifs(true, false));
                    r410_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
                    r410_currentGlyph.include(r271_MarkSet.p());
                    r410_currentGlyph.include(r271_LeaningAnchor.Below.VBar.r(r271_RightSB));
                    return void 0;
                });
                return r271_Serifs !== r271_SmallTurnHMotionSerifs ? r271_xn$createAndSaveGlyphImpl$2Lrc3c('hookturnhrtail.' + r271_suffix, null, function () {
                    var _r423_t1;
                    var _r423_t0 = this;
                    var r423_currentGlyph = _r423_t0;
                    r423_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_TailY + r271_HalfStroke)));
                    r423_currentGlyph.include(r271_VBar.l(r271_SB, 0, r271_XH));
                    r423_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, r271_TailY + r271_HalfStroke));
                    r423_currentGlyph.include(r271_Serifs(true, true));
                    r423_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
                    r423_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, r271_Descender + r271_TailY + r271_HalfStroke, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', 0)));
                    r423_currentGlyph.include(r271_MarkSet.p());
                    return void 0;
                }) : void 0;
            }());
        }
        r271_xn$selectvariant$7Hrq('turnh', 613);
        r271_xn$selectvariant$7Hrq('hookturnh', 686);
        r271_xn$selectvariant$7Hrq('hookturnhrtail', 687);
        var _r271_t18 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t18.BBS;
        var r271_BBD = _r271_t18.BBD;
        var r271_BBBarLeft = _r271_t18.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/h', 120153, function () {
            var _r438_t1;
            var _r438_t0 = this;
            var r438_currentGlyph = _r438_t0;
            var r438_df = r438_currentGlyph.include(r271_DivFrame(1, 2));
            r438_currentGlyph.include(r438_df.markSet.e());
            var r438_bbs = r271_BBS;
            var r438_bbd = r271_BBD;
            r438_currentGlyph.include(r271_BBBarLeft(r438_df.leftSB, 0, r271_Ascender));
            r438_currentGlyph.include(r271_union(r271_HBar.b(r438_df.rightSB - r438_bbd, r438_df.rightSB, 0, r438_bbs), r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r438_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r438_df.leftSB + r438_bbd + r271_HSwToV(r438_bbs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r438_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)), r271_intersection(r271_VBar.r(r438_df.rightSB - r438_bbd, 0, r271_XH, r438_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r438_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r438_df.leftSB + r438_bbd + r271_HSwToV(r438_bbs) + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r438_df.rightSB - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)))));
            return void 0;
        });
    });
    return void 0;
});
