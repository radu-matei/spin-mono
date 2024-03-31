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
var r1_clamp = _r1_t8.clamp;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-D', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_topSerif, r271_bottomSerif, r271_fSerif, _r271_t14, _r271_t17, _r271_t19, _r271_t20, _r271_t21, _r271_tag22, _r271_t23, _r271_tag24;
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
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_tagged = _r271_t4.tagged;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markExtend = _r271_t6.markExtend;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t7.LeaningAnchor;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t8.CreateAccentedComposition;
        var r271_CreateCommaCaronComposition = _r271_t8.CreateCommaCaronComposition;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_OBarRight = _r271_t9.OBarRight;
        var r271_RightwardTailedBar = _r271_t9.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t9.DToothlessRise;
        var r271_DMBlend = _r271_t9.DMBlend;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t10.CurlyTail;
        var r271_LetterBarOverlay = _r271_t10.LetterBarOverlay;
        var r271_SerifFrame = _r271_t10.SerifFrame;
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_UpwardHookShape = _r271_t11.UpwardHookShape;
        var r271_PalatalHook = _r271_t11.PalatalHook;
        var r271_RetroflexHook = _r271_t11.RetroflexHook;
        var r271_TopHook = _r271_t11.TopHook;
        var r271_ToothedBody = function (r280_df, r280_yTop) {
            var _r280_t0, _r280_t1;
            return r271_union(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r280_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r280_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r280_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r280_df.archDepthA(r271_SmallArchDepth, r280_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r280_df.archDepthB(r271_SmallArchDepth, r280_df.mvs))), r271_tagged('rightBar', r271_VBar.r(r280_df.rightSB, 0, r280_yTop)));
        };
        var r271_ToothlessCornerBody = function (r286_df, r286_yTop) {
            var _r286_t0, _r286_t1;
            return r271_union(r271_OBarRight.toothless(new r271_xn$NamedParameterPair$2Lrc9b('left', r286_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r286_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r286_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend), new r271_xn$NamedParameterPair$2Lrc9b('ada', r286_df.archDepthA(r271_SmallArchDepth, r286_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r286_df.archDepthB(r271_SmallArchDepth, r286_df.mvs))), r271_tagged('rightBar', r271_VBar.r(r286_df.rightSB, r271_DToothlessRise, r286_yTop)));
        };
        var r271_ToothlessCornerHBBBody = function (r294_df, r294_yTop) {
            var _r294_t0, _r294_t1;
            return r271_union(r271_OBarRight.toothless(new r271_xn$NamedParameterPair$2Lrc9b('left', r294_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r294_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r294_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend), new r271_xn$NamedParameterPair$2Lrc9b('ada', r294_df.archDepthA(r271_SmallArchDepth, r294_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r294_df.archDepthB(r271_SmallArchDepth, r294_df.mvs))), r271_tagged('rightBar', r271_VBar.r(r294_df.rightSB, 0, r294_yTop)));
        };
        var r271_ToothlessRoundedBody = function (r302_df, r302_yTop) {
            var _r302_t0, _r302_t1;
            return r271_OBarRight.rounded(new r271_xn$NamedParameterPair$2Lrc9b('left', r302_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r302_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r302_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r302_yTop), new r271_xn$NamedParameterPair$2Lrc9b('ada', r302_df.archDepthA(r271_SmallArchDepth, r302_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r302_df.archDepthB(r271_SmallArchDepth, r302_df.mvs)));
        };
        var r271_ToothlessRoundedHBBBody = function (r309_df, r309_yTop) {
            var _r309_t0, _r309_t1;
            return r271_union(r271_ToothlessRoundedBody(r309_df, r309_yTop), r271_tagged('rightBar', r271_VBar.r(r309_df.rightSB, 0, r309_yTop)));
        };
        var r271_TailedBody = function (r310_df, r310_yTop) {
            var _r310_t0, _r310_t1;
            return r271_union(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r310_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r310_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('sw', r310_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('ada', r310_df.archDepthA(r271_SmallArchDepth, r310_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r310_df.archDepthB(r271_SmallArchDepth, r310_df.mvs))), r271_RightwardTailedBar(r310_df.rightSB, 0, r310_yTop));
        };
        var r271_TopSerif = function (r316_df, r316_yTop) {
            var _r316_t0, _r316_t1;
            return r271_tagged('serifRT', r271_HSerif.lt(r316_df.rightSB - r271_HSwToV(r271_Stroke), r316_yTop, r271_SideJut));
        };
        var r271_BaseSerif = function (r317_df, r317_yTop) {
            var _r317_t0, _r317_t1;
            return r271_tagged('serifRB', r271_HSerif.rb(r317_df.rightSB, 0, r271_SideJut));
        };
        var r271_DConfig = r1_SuffixCfg.weave({
            'toothed': r271_ToothedBody,
            'toothlessCorner': r271_ToothlessCornerBody,
            'toothlessCornerHBB': r271_ToothlessCornerHBBBody,
            'toothlessRounded': r271_ToothlessRoundedBody,
            'toothlessRoundedHBB': r271_ToothlessRoundedHBBBody,
            'tailed': r271_TailedBody
        }, function (r318_body) {
            var _r318_t0, _r318_t1;
            return {
                'serifless': [
                    null,
                    null
                ],
                'topSerifed': [
                    r271_TopSerif,
                    null
                ],
                'bottomSerifed': [
                    null,
                    r271_BaseSerif
                ],
                'serifed': [
                    r271_TopSerif,
                    r271_BaseSerif
                ]
            };
        });
        var _r271_t12 = Object.entries(r271_DConfig)[Symbol.iterator]();
        var _r271_t13 = void 0;
        while (!(_r271_t13 = _r271_t12.next()).done) {
            _r271_t14 = _r271_t13.value;
            r271_suffix = _r271_t14[0];
            r271_Body = _r271_t14[1][0];
            r271_topSerif = _r271_t14[1][1][0];
            r271_bottomSerif = _r271_t14[1][1][1];
            _r271_t14[1][1];
            _r271_t14[1];
            (function () {
                var _r321_t0, _r321_tag1;
                var r321_yOverlay = r1_mix(r271_XH, r271_Ascender - (r271_topSerif ? r271_Stroke : 0), 0.5);
                (function () {
                    var r323_make = function (r324_df) {
                        var _r324_t0, _r324_t1;
                        return function () {
                            var _r326_t1;
                            var _r326_t0 = this;
                            var r326_currentGlyph = _r326_t0;
                            r326_currentGlyph.include(r324_df.markSet.b());
                            r326_currentGlyph.include(r271_Body(r324_df, r271_Ascender));
                            if (r271_topSerif)
                                r326_currentGlyph.include(r271_topSerif(r324_df, r271_Ascender));
                            if (r271_bottomSerif)
                                r326_currentGlyph.include(r271_bottomSerif(r324_df, r271_Ascender));
                            r326_currentGlyph.include(r271_LeaningAnchor.Above.VBar.r(r324_df.rightSB));
                            r326_currentGlyph.setBaseAnchor('overlayOnExtension', r324_df.rightSB - r271_HSwToV(0.5 * r271_Stroke), r321_yOverlay);
                            return void 0;
                        };
                    };
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('d.' + r271_suffix, null, r323_make(r271_DivFrame(1)));
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('dCaronBase.' + r271_suffix, null, r323_make(r271_DivFrame(0.95)));
                }());
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dcroat.' + r271_suffix, null, function () {
                    var _r337_t1;
                    var _r337_t0 = this;
                    var r337_currentGlyph = _r337_t0;
                    var r337_df = r271_DivFrame(1);
                    r337_currentGlyph.include(r271_xn$referglyph$1aao('d.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r337_currentGlyph.include(r271_LetterBarOverlay.r.in(r337_df.rightSB, r271_XH, r271_Ascender - (r271_topSerif ? r271_Stroke : 0)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/de.' + r271_suffix, null, function () {
                    var _r342_t1;
                    var _r342_t0 = this;
                    var r342_currentGlyph = _r342_t0;
                    var r342_df = r271_DivFrame(1);
                    r342_currentGlyph.include(r271_xn$referglyph$1aao('d.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    var r342_xLeft = r1_mix(r342_df.rightSB, r342_df.leftSB, 0.9);
                    r342_currentGlyph.include(r271_HBar.t(r342_xLeft, r342_df.rightSB + r271_O, r271_CAP));
                    if (r271_topSerif)
                        r342_currentGlyph.include(r271_VSerif.dl(r342_xLeft, r271_CAP, Math.min(r271_VJut, 0.8 * (r271_Ascender - r271_XH))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('dHookTop.' + r271_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    var r348_df = r271_DivFrame(1);
                    r348_currentGlyph.include(r348_df.markSet.b());
                    r348_currentGlyph.include(r271_Body(r348_df, r271_Ascender - r271_Hook - r271_HalfStroke));
                    r348_currentGlyph.include(r271_TopHook.rBarInner(r348_df.rightSB, r271_XH / 2, r271_Ascender));
                    if (r271_bottomSerif)
                        r348_currentGlyph.include(r271_bottomSerif(r348_df, r271_Ascender));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/djeKomi.' + r271_suffix, null, function () {
                    var r355_sf2, _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    var r355_df = r271_DivFrame(1, 3);
                    r355_currentGlyph.include(r355_df.markSet.b());
                    var r355_dfHalf = r355_df.slice(3, 2);
                    r355_currentGlyph.include(r271_Body(r355_dfHalf, r271_Ascender));
                    r355_currentGlyph.ejectTagged('rightBar');
                    r355_currentGlyph.include(r271_xn$withtransform$5sIl(r271_ApparentTranslate(r355_df.width - r355_dfHalf.width, 0), r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r355_dfHalf.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r355_dfHalf.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_Ascender), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r355_dfHalf.archDepthA(r271_SmallArchDepth, r355_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r355_dfHalf.archDepthB(r271_SmallArchDepth, r355_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('sw', r355_df.mvs))));
                    if (r271_topSerif)
                        r355_currentGlyph.include(r271_topSerif(r355_dfHalf, r271_Ascender));
                    if (r271_bottomSerif) {
                        r355_sf2 = r271_SerifFrame.fromDf(r355_df, r271_XH / 2, 0).slice(1, 2);
                        r355_currentGlyph.include(r355_sf2.rt.full);
                    }
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('d', 'd');
        r271_xn$selectvariant$7Hrq('dCaronBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'd'));
        r271_xn$selectvariant$7Hrq('dcroat', 273, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'd'));
        r271_xn$selectvariant$7Hrq('latn/de', 396, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'd'));
        r271_alias('cyrl/deKomi', 1281, 'd');
        r271_xn$linkreducedvariant$5sIl8('d/sansSerif', 'd', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('d/phoneticLeft', 'd');
        r271_xn$linkreducedvariant$5sIl8('d/hookBottomBase', 'd');
        r271_CreateAccentedComposition('dTildeOver', 7533, 'd', 'tildeOverOnExension');
        r271_xn$selectvariant$7Hrq('dHookTop', 599);
        r271_xn$linkreducedvariant$5sIl8('dHookTop/hookBottomBase', 'dHookTop');
        r271_xn$selectvariant$7Hrq('cyrl/djeKomi', 1283);
        r271_xn$linkreducedvariant$5sIl8('d/descBase', 'd');
        r271_xn$derivecomposites$7Hrq('dPalatalHook', 7553, 'd/descBase', r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('xLink', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('x', r271_RightSB + r271_SideJut), new r271_xn$NamedParameterPair$2Lrc9b('y', 0)));
        r271_xn$derivecomposites$7Hrq('dHookBottom', 598, 'd/hookBottomBase', r271_RetroflexHook.rExt(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('dHookTopBottom', 7569, 'dHookTop/hookBottomBase', r271_RetroflexHook.rExt(r271_RightSB, 0));
        r271_CreateCommaCaronComposition('dCaron', 271, 'dCaronBase', r271_Width - r271_HSwToV(0.25 * r271_Stroke));
        r271_xn$derivemultipartglyphs$7Hrq65('dDot', 7691, [
            'd',
            'dotAbove'
        ], function (r375_srcs, r375_gr) {
            var _r375_t0, _r375_t1;
            return function () {
                var _r377_t2;
                var _r377_t1 = this;
                var r377_currentGlyph = _r377_t1;
                var _r377_t0 = r375_srcs;
                var r377_base = _r377_t0[0];
                var r377_mark = _r377_t0[1];
                r377_currentGlyph.include(r271_xn$referglyph$1aao(r377_mark));
                r377_currentGlyph.include(r271_Translate(r271_Width - r271_HSwToV(r271_HalfStroke), 0));
                r377_currentGlyph.include(r271_xn$referglyph$1aao(r377_base), r271_AS_BASE);
                r377_currentGlyph.include(r271_LeaningAnchor.Above.VBar.r(r271_Middle));
                return void 0;
            };
        });
        r271_xn$derivecomposites$7Hrq('dBar', 42952, 'd', r271_HBar.m(r271_SB - r271_OX, r271_RightSB + r271_OX, r271_XH * 0.5, r271_OverlayStroke));
        var r271_DCurlyTailConfig = {
            'toothedSerifless': [false],
            'toothedTopSerifed': [true]
        };
        var _r271_t15 = Object.entries(r271_DCurlyTailConfig)[Symbol.iterator]();
        var _r271_t16 = void 0;
        while (!(_r271_t16 = _r271_t15.next()).done) {
            _r271_t17 = _r271_t16.value;
            r271_suffix = _r271_t17[0];
            r271_fSerif = _r271_t17[1][0];
            _r271_t17[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('dCurlyTail.' + r271_suffix, null, function () {
                    var _r387_t1;
                    var _r387_t0 = this;
                    var r387_currentGlyph = _r387_t0;
                    var r387_fine = r271_AdviceStroke(4);
                    var r387_rinner = r1_clamp(r271_Width * 0.065, r271_XH * 0.05, r387_fine * 0.35);
                    var r387_wide = r271_Stroke;
                    var r387_m1 = Math.min(r271_RightSB, r271_Width - r387_rinner * 2 - r387_fine - r271_OX);
                    var r387_x2 = r1_mix(r271_SB, r387_m1, 0.5);
                    var r387_y2 = 0 - r387_fine - r387_rinner * 1.25;
                    r387_currentGlyph.include(r271_MarkSet.b());
                    r387_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB), new r271_xn$NamedParameterPair$2Lrc9b('right', r387_m1)));
                    r387_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r387_m1, r271_Ascender, r271_heading(r271_Downward)), r271_curl(r387_m1, r387_rinner * 2 + r387_fine), r271_CurlyTail(r387_fine, r387_rinner, r387_m1, 0, r387_m1 + r387_rinner * 2 + r387_fine, r387_x2, r387_y2)));
                    if (r271_fSerif)
                        r387_currentGlyph.include(r271_HSerif.lt(r387_m1 - r271_HSwToV(r271_Stroke), r271_Ascender, r271_SideJut));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('dCurlyTail', 545);
        var _r271_t18 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t18.BBS;
        var r271_BBD = _r271_t18.BBD;
        var r271_BBBarRight = _r271_t18.BBBarRight;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/d', 120149, function () {
            var _r397_t1;
            var _r397_t0 = this;
            var r397_currentGlyph = _r397_t0;
            r397_currentGlyph.include(r271_MarkSet.b());
            r397_currentGlyph.include(r271_BBBarRight(r271_RightSB, 0, r271_Ascender));
            r397_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB - r271_BBD - r271_HSwToV(r271_BBS)), r271_VBar.l(r271_SB + r271_BBD + r271_OX, 0, r271_XH, r271_BBS)));
            r397_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB - r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
