'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/util/mask-bit.mjs';
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
var r1_maskBit = _r1_t9.maskBit;
var r1_maskBits = _r1_t9.maskBits;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Long-S', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_serifStyle, r271_pShift, _r271_t13, _r271_t16, _r271_t17, _r271_t18, _r271_t19, _r271_tag20, _r271_t21, _r271_tag22;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_HookX = _r271_t1.HookX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_IBalance2 = _r271_t1.IBalance2;
        var r271_JBalance = _r271_t1.JBalance;
        var r271_RBalance2 = _r271_t1.RBalance2;
        var r271_FBalance = _r271_t1.FBalance;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_MidJutCenter = _r271_t1.MidJutCenter;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_tagged = _r271_t4.tagged;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t6.LeaningAnchor;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CurlyTail = _r271_t7.CurlyTail;
        var r271_FlatHookDepth = _r271_t7.FlatHookDepth;
        var r271_LetterBarOverlay = _r271_t7.LetterBarOverlay;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_PalatalHook = _r271_t8.PalatalHook;
        var r271_RetroflexHook = _r271_t8.RetroflexHook;
        var r271_VerticalHook = _r271_t8.VerticalHook;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-F'].resolve();
        var r271_StdSmallFBarLeftPos = _r271_t9.StdSmallFBarLeftPos;
        var r271_StdSmallFBarLeftPos0 = _r271_t9.StdSmallFBarLeftPos0;
        var r271_fbar = _r271_t9.fbar;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-F'].resolve();
        var r271_SmallFDiagonalTail = _r271_t10.SmallFDiagonalTail;
        var r271_SLAB_SERIFLESS = 0;
        var r271_SLAB_BOTTOM = 1;
        var r271_SLAB_MIDDLE = 2;
        var r271_SLAB_MIDDLE_XH = 4;
        var r271_SLAB_DOUBLE = r271_SLAB_BOTTOM + r271_SLAB_MIDDLE;
        var r271_SLAB_DOUBLE_XH = r271_SLAB_BOTTOM + r271_SLAB_MIDDLE_XH;
        var r271_LongSUpperHalf = function (r279_sign, r279_x, r279_top, r279_bottom, r279_hookX, r279_hookY, r279__sw) {
            var _r279_t0, _r279_t1;
            var r279_hd = r271_FlatHookDepth(r271_DivFrame(1));
            var r279_sw = r1_fallback(r279__sw, r271_Stroke);
            return r271_dispiro(r271_widths.center(r279_sw), r271_flat(r279_x + r279_sign * r279_hookX, r279_top - r279_sw / 2), r271_curl(r279_x + r279_sign * Math.min(r279_hd.x - r271_HSwToV(0.25 * r279_sw), r279_hookX - 0.1), r279_top - r279_sw / 2), r271_archv.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r279_x, r279_top - r279_sw / 2 - Math.min(r279_hd.y, r279_hookY)), r271_curl(r279_x, r279_bottom, r271_heading(r271_Downward)));
        };
        var r271_LongSLowerHalf = function (r280_sign, r280_x, r280_top, r280_bottom, r280_hookX, r280_hookY, r280__sw) {
            var _r280_t0, _r280_t1;
            var r280_hd = r271_FlatHookDepth(r271_DivFrame(1));
            var r280_sw = r1_fallback(r280__sw, r271_Stroke);
            return r271_dispiro(r271_widths.center(r280_sw), r271_flat(r280_x - r280_sign * r280_hookX, r280_bottom + r280_sw / 2), r271_curl(r280_x - r280_sign * Math.min(r280_hd.x - r271_HSwToV(0.25 * r280_sw), r280_hookX - 0.1), r280_bottom + r280_sw / 2), r271_archv.superness(r271_DesignParameters.tightHookSuperness), r271_flat(r280_x, r280_bottom + r280_sw / 2 + Math.min(r280_hd.y, r280_hookY)), r271_curl(r280_x, r280_top, r271_heading(r271_Upward)));
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'LongSShape': r271_LongSShape };
        });
        var r271_LongSShape = function (r283_top, r283_bottom, r283_hookx, r283_hooky, r283_fine) {
            var _r283_t0, _r283_t1;
            return r271_union(r271_LongSUpperHalf(1, r271_Middle, r283_top, r1_mix(r283_top, r283_bottom, 0.5), r283_hookx, r283_hooky, r283_fine), r271_LongSLowerHalf(1, r271_Middle, r1_mix(r283_top, r283_bottom, 0.5), r283_bottom, r283_hookx, r283_hooky, r283_fine));
        };
        var r271_RevLongSShape = function (r284_top, r284_bottom, r284_hookx, r284_hooky, r284_fine) {
            var _r284_t0, _r284_t1;
            return r271_union(r271_LongSUpperHalf(-1, r271_Middle, r284_top, r1_mix(r284_top, r284_bottom, 0.5), r284_hookx, r284_hooky, r284_fine), r271_LongSLowerHalf(-1, r271_Middle, r1_mix(r284_top, r284_bottom, 0.5), r284_bottom, r284_hookx, r284_hooky, r284_fine));
        };
        var r271_IFishHookShape = function (r285_top, r285_bottom, r285_fSlab) {
            var _r285_t0, _r285_t1;
            return function () {
                var _r287_t1;
                var _r287_t0 = this;
                var r287_currentGlyph = _r287_t0;
                var r287_balance = r271_IBalance2(r271_DivFrame(1));
                r287_currentGlyph.include(r271_xn$withtransform$5sIl(r271_Translate(r287_balance, 0), function () {
                    var _r290_t1;
                    var _r290_t0 = this;
                    var r290_currentGlyph = _r290_t0;
                    r290_currentGlyph.include(r271_VBar.m(r271_Middle, r285_bottom, r285_top - r271_Hook));
                    r290_currentGlyph.include(r271_VerticalHook.m(r271_Middle, r285_top - r271_Hook, -r271_LongJut + r287_balance, -r271_Hook + r271_HalfStroke));
                    if (r285_fSlab)
                        r290_currentGlyph.include(r271_union(r271_HSerif.lb(r271_Middle - r271_HSwToV(r271_HalfStroke), r285_bottom, r271_SideJut + r287_balance), r271_HSerif.rb(r271_Middle + r271_HSwToV(r271_HalfStroke), r285_bottom, r271_SideJut)));
                    return void 0;
                }));
                return void 0;
            };
        };
        var r271_StandardSerifs = function (r294_m0, r294_fSlab) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_m = r294_m0 + r271_HSwToV(r271_HalfStroke);
                var r296_serifLength = 1 * r271_MidJutCenter;
                var r296_xSerifPos = r296_m + (r271_Middle - r296_m) / r271_Width * r296_serifLength;
                if (r1_maskBits(r294_fSlab, r271_SLAB_BOTTOM))
                    r296_currentGlyph.include(r271_tagged('serifLB', r271_HSerif.mb(r296_xSerifPos, 0, r296_serifLength)));
                if (r1_maskBits(r294_fSlab, r271_SLAB_MIDDLE))
                    r296_currentGlyph.include(r271_tagged('serifLM', r271_intersection(r271_MaskLeft(r296_m + 0.1), r271_HSerif.mt(r296_xSerifPos, r271_fbar, r296_serifLength))));
                if (r1_maskBits(r294_fSlab, r271_SLAB_MIDDLE_XH))
                    r296_currentGlyph.include(r271_tagged('serifLM', r271_intersection(r271_MaskLeft(r296_m + 0.1), r271_HSerif.mt(r296_xSerifPos, r271_XH, r296_serifLength))));
                return void 0;
            };
        };
        var r271_LongSBentHookBase = function (r300_y0, r300_m, r300_fSlab) {
            var _r300_t0, _r300_t1;
            return function () {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                var r302_xTerminal = r271_RightSB + r271_RBalance2 + Math.max(0, r300_m - r271_StdSmallFBarLeftPos0());
                r302_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4(r302_xTerminal, r271_Ascender - r271_Hook), r271_hookstart(r271_Ascender - r271_O), r271_flat(r300_m, r271_Ascender - r271_ArchDepthA), r271_curl(r300_m, 0, r271_heading(r271_Downward))));
                r302_currentGlyph.include(r271_LeaningAnchor.Above.Hook(r300_m, r302_xTerminal));
                r302_currentGlyph.setBaseAnchor('overlay', r300_m + r271_HSwToV(0.65 * r271_Stroke), r271_Ascender * r271_OverlayPos);
                r302_currentGlyph.include(r271_StandardSerifs(r300_m, r300_fSlab));
                return void 0;
            };
        };
        var r271_LongSBentHookOverlayBar = function (r307_m) {
            var _r307_t0, _r307_t1;
            return r271_LetterBarOverlay.m.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r307_m + r271_HSwToV(r271_HalfStroke)), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0.75 * r271_XH - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_Ascender - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('py', r271_OverlayPos));
        };
        var r271_LongSSymmetricOverlayBar = function (r312_m) {
            var _r312_t0, _r312_t1;
            return r271_LetterBarOverlay.m.in(new r271_xn$NamedParameterPair$2Lrc9b('x', r312_m), new r271_xn$NamedParameterPair$2Lrc9b('bot', 0.75 * r271_XH - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_Ascender - r271_Stroke), new r271_xn$NamedParameterPair$2Lrc9b('py', r271_OverlayPos));
        };
        var r271_LongSFlatHookNoTailShape = function (r317_m, r317_yBot, r317_fSlab) {
            var _r317_t0, _r317_t1;
            return function () {
                var _r319_t1;
                var _r319_t0 = this;
                var r319_currentGlyph = _r319_t0;
                var r319_hd = r271_FlatHookDepth(r271_DivFrame(1));
                r319_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r271_RightSB, r271_Ascender), r271_curl(Math.min(r271_RightSB - 0.01, r317_m + r319_hd.x), r271_Ascender), r271_archv(), r271_flat(r317_m, r271_Ascender - r319_hd.y), r271_curl(r317_m, r317_yBot, r271_heading(r271_Downward))));
                r319_currentGlyph.include(r271_LeaningAnchor.Above.Hook(r317_m, r271_RightSB));
                r319_currentGlyph.setBaseAnchor('overlay', r317_m + r271_HSwToV(0.65 * r271_Stroke), r271_Ascender * r271_OverlayPos);
                r319_currentGlyph.include(r271_StandardSerifs(r317_m, r317_fSlab));
                return void 0;
            };
        };
        var r271_SerifSuffixes = {
            'Serifless': [
                r271_SLAB_SERIFLESS,
                1
            ],
            'MiddleSerifed': [
                r271_SLAB_MIDDLE,
                0.5
            ],
            'MiddleSerifedXH': [
                r271_SLAB_MIDDLE_XH,
                0.5
            ],
            'BottomSerifed': [
                r271_SLAB_BOTTOM,
                0.5
            ],
            'DoubleSerifed': [
                r271_SLAB_DOUBLE,
                0.5
            ],
            'DoubleSerifedXH': [
                r271_SLAB_DOUBLE_XH,
                0.5
            ]
        };
        var _r271_t11 = Object.entries(r271_SerifSuffixes)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_serifStyle = _r271_t13[1][0];
            r271_pShift = _r271_t13[1][1];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHook' + r271_suffix, null, function () {
                    var _r329_t1;
                    var _r329_t0 = this;
                    var r329_currentGlyph = _r329_t0;
                    r329_currentGlyph.include(r271_MarkSet.b());
                    var r329_m = r271_Middle - r271_JBalance - r271_HSwToV(r271_HalfStroke);
                    r329_currentGlyph.include(r271_LongSBentHookBase(0, r329_m, r271_serifStyle));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.bentHook' + r271_suffix, null, function () {
                        var _r334_t1;
                        var _r334_t0 = this;
                        _r334_t0.include(r329_currentGlyph, true, true);
                        _r334_t0.cloneRankFromGlyph(r329_currentGlyph);
                        return _r334_t0.include(r271_LongSBentHookOverlayBar(r329_m));
                    });
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHook' + r271_suffix, null, function () {
                    var _r337_t1;
                    var _r337_t0 = this;
                    var r337_currentGlyph = _r337_t0;
                    r337_currentGlyph.include(r271_MarkSet.b());
                    var r337_m = r271_Middle - r271_pShift * (r271_JBalance + r271_HSwToV(r271_HalfStroke));
                    r337_currentGlyph.include(r271_LongSFlatHookNoTailShape(r337_m, 0, r271_serifStyle));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.flatHook' + r271_suffix, null, function () {
                        var _r342_t1;
                        var _r342_t0 = this;
                        _r342_t0.include(r337_currentGlyph, true, true);
                        _r342_t0.cloneRankFromGlyph(r337_currentGlyph);
                        return _r342_t0.include(r271_LongSBentHookOverlayBar(r337_m));
                    });
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookExt' + r271_suffix, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.include(r271_xn$referglyph$1aao('longs.flatHook' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r345_currentGlyph.include(r271_HBar.t(r271_RightSB, 2 * r271_Width, r271_Ascender));
                    return void 0;
                });
            }());
        }
        var r271_SerifSuffixesDescending = {
            'Serifless': [
                r271_SLAB_SERIFLESS,
                1
            ],
            'MiddleSerifed': [
                r271_SLAB_MIDDLE,
                0.5
            ],
            'MiddleSerifedXH': [
                r271_SLAB_MIDDLE_XH,
                0.5
            ]
        };
        var _r271_t14 = Object.entries(r271_SerifSuffixesDescending)[Symbol.iterator]();
        var _r271_t15 = void 0;
        while (!(_r271_t15 = _r271_t14.next()).done) {
            _r271_t16 = _r271_t15.value;
            r271_suffix = _r271_t16[0];
            r271_serifStyle = _r271_t16[1][0];
            r271_pShift = _r271_t16[1][1];
            _r271_t16[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookDescending' + r271_suffix, null, function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    r353_currentGlyph.include(r271_MarkSet.bp());
                    var r353_m = r271_Middle - r271_pShift * (r271_JBalance + r271_HSwToV(r271_HalfStroke));
                    r353_currentGlyph.include(r271_LongSFlatHookNoTailShape(r353_m, r271_Descender, false));
                    r353_currentGlyph.include(r271_StandardSerifs(r353_m, r271_serifStyle));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.flatHookDescending' + r271_suffix, null, function () {
                        var _r359_t1;
                        var _r359_t0 = this;
                        _r359_t0.include(r353_currentGlyph, true, true);
                        _r359_t0.cloneRankFromGlyph(r353_currentGlyph);
                        return _r359_t0.include(r271_LongSBentHookOverlayBar(r353_m));
                    });
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookExtDescending' + r271_suffix, null, function () {
                    var _r362_t1;
                    var _r362_t0 = this;
                    var r362_currentGlyph = _r362_t0;
                    r362_currentGlyph.include(r271_xn$referglyph$1aao('longs.flatHookDescending' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r362_currentGlyph.include(r271_HBar.t(r271_RightSB, 2 * r271_Width, r271_Ascender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookTailed' + r271_suffix, null, function () {
                    var _r367_t1;
                    var _r367_t0 = this;
                    var r367_currentGlyph = _r367_t0;
                    r367_currentGlyph.include(r271_MarkSet.bp());
                    r367_currentGlyph.copyBaseAnchorIfAbsent('leaningAbove', 'above');
                    r367_currentGlyph.include(r271_LongSShape(r271_Ascender, r271_Descender, r271_HookX + 0.25 * r271_Stroke, r271_Hook));
                    r367_currentGlyph.include(r271_StandardSerifs(r271_Middle - r271_HSwToV(r271_HalfStroke), r271_serifStyle));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.flatHookTailed' + r271_suffix, null, function () {
                        var _r373_t1;
                        var _r373_t0 = this;
                        _r373_t0.include(r367_currentGlyph, true, true);
                        _r373_t0.cloneRankFromGlyph(r367_currentGlyph);
                        return _r373_t0.include(r271_LongSSymmetricOverlayBar(r271_Middle));
                    });
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookExtTailed' + r271_suffix, null, function () {
                    var _r376_t1;
                    var _r376_t0 = this;
                    var r376_currentGlyph = _r376_t0;
                    r376_currentGlyph.include(r271_xn$referglyph$1aao('longs.flatHookTailed' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r376_currentGlyph.include(r271_HBar.t(r271_Middle + r271_HookX + (0.25 - r271_TanSlope) * r271_Stroke, 2 * r271_Width, r271_Ascender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookDiagonalTailed' + r271_suffix, null, function () {
                    var _r381_t1;
                    var _r381_t0 = this;
                    var r381_currentGlyph = _r381_t0;
                    r381_currentGlyph.include(r271_MarkSet.bp());
                    r381_currentGlyph.copyBaseAnchorIfAbsent('leaningAbove', 'above');
                    r381_currentGlyph.include(r271_union(r271_intersection(r271_MaskAbove(0), r271_LongSShape(r271_Ascender, r271_Descender, r271_HookX + 0.25 * r271_Stroke, r271_Hook)), r271_SmallFDiagonalTail(r271_DivFrame(1), r271_Middle - r271_HSwToV(r271_HalfStroke)), r271_StandardSerifs(r271_Middle - r271_HSwToV(r271_HalfStroke), r271_serifStyle)));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.flatHookDiagonalTailed' + r271_suffix, null, function () {
                        var _r386_t1;
                        var _r386_t0 = this;
                        _r386_t0.include(r381_currentGlyph, true, true);
                        _r386_t0.cloneRankFromGlyph(r381_currentGlyph);
                        return _r386_t0.include(r271_LongSSymmetricOverlayBar(r271_Middle));
                    });
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.flatHookExtDiagonalTailed' + r271_suffix, null, function () {
                    var _r389_t1;
                    var _r389_t0 = this;
                    var r389_currentGlyph = _r389_t0;
                    r389_currentGlyph.include(r271_xn$referglyph$1aao('longs.flatHookDiagonalTailed' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r389_currentGlyph.include(r271_HBar.t(r271_Middle + r271_HookX + (0.25 - r271_TanSlope) * r271_Stroke, 2 * r271_Width, r271_Ascender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHookDescending' + r271_suffix, null, function () {
                    var _r394_t1;
                    var _r394_t0 = this;
                    var r394_currentGlyph = _r394_t0;
                    r394_currentGlyph.include(r271_MarkSet.bp());
                    var r394_m = r271_StdSmallFBarLeftPos(true);
                    r394_currentGlyph.include(r271_LongSBentHookBase(r271_XH / 2, r394_m, r271_SLAB_SERIFLESS));
                    r394_currentGlyph.include(r271_VBar.l(r394_m, r271_Descender, 0));
                    r394_currentGlyph.include(r271_StandardSerifs(r394_m, r271_serifStyle));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.bentHookDescending' + r271_suffix, null, function () {
                        var _r401_t1;
                        var _r401_t0 = this;
                        _r401_t0.include(r394_currentGlyph, true, true);
                        _r401_t0.cloneRankFromGlyph(r394_currentGlyph);
                        return _r401_t0.include(r271_LongSBentHookOverlayBar(r394_m));
                    });
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHookTailed' + r271_suffix, null, function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    r404_currentGlyph.include(r271_MarkSet.bp());
                    var r404_m = r271_StdSmallFBarLeftPos(true);
                    r404_currentGlyph.include(r271_LongSBentHookBase(r271_XH / 2, r404_m, r271_SLAB_SERIFLESS));
                    r404_currentGlyph.include(r271_LongSLowerHalf(1, r404_m + r271_HSwToV(r271_HalfStroke), r271_XH / 2 - r271_O, r271_Descender, r271_HookX + 0.25 * r271_Stroke, r271_Hook, r271_Stroke));
                    r404_currentGlyph.include(r271_StandardSerifs(r404_m, r271_serifStyle));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.bentHookTailed' + r271_suffix, null, function () {
                        var _r411_t1;
                        var _r411_t0 = this;
                        _r411_t0.include(r404_currentGlyph, true, true);
                        _r411_t0.cloneRankFromGlyph(r404_currentGlyph);
                        return _r411_t0.include(r271_LongSBentHookOverlayBar(r404_m));
                    });
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('longs.bentHookDiagonalTailed' + r271_suffix, null, function () {
                    var _r414_t1;
                    var _r414_t0 = this;
                    var r414_currentGlyph = _r414_t0;
                    r414_currentGlyph.include(r271_MarkSet.bp());
                    var r414_m = r271_StdSmallFBarLeftPos(true);
                    r414_currentGlyph.include(r271_LongSBentHookBase(r271_XH / 2, r414_m, r271_SLAB_SERIFLESS));
                    r414_currentGlyph.include(r271_SmallFDiagonalTail(r271_DivFrame(1), r414_m));
                    r414_currentGlyph.include(r271_StandardSerifs(r414_m, r271_serifStyle));
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('longsBar.bentHookDiagonalTailed' + r271_suffix, null, function () {
                        var _r421_t1;
                        var _r421_t0 = this;
                        _r421_t0.include(r414_currentGlyph, true, true);
                        _r421_t0.cloneRankFromGlyph(r414_currentGlyph);
                        return _r421_t0.include(r271_LongSBentHookOverlayBar(r414_m));
                    });
                    return void 0;
                });
            }());
        }
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('eshBaseline', 43853, function () {
            var _r424_t1;
            var _r424_t0 = this;
            var r424_currentGlyph = _r424_t0;
            r424_currentGlyph.include(r271_MarkSet.b());
            r424_currentGlyph.include(r271_LongSShape(r271_Ascender, 0, r271_HookX + 0.25 * r271_Stroke, r271_Hook));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('longs', 383);
        r271_xn$selectvariant$7Hrq('longs/flatExt', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'longs'));
        r271_xn$selectvariant$7Hrq('longsBar', 7837);
        r271_alias('esh', 643, 'longs.flatHookTailedSerifless');
        r271_xn$derivecomposites$7Hrq('eshPalatalHook', 7563, 'esh', r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_RightSB), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('xLink', r271_Middle), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke(3)), new r271_xn$NamedParameterPair$2Lrc9b('maskOut', r271_intersection(r271_MaskBelow(0), r271_MaskLeft(r271_Middle + r271_HSwToV(r271_HalfStroke))))));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('eshRetroflexHook', 7576, function () {
            var _r435_t1;
            var _r435_t0 = this;
            var r435_currentGlyph = _r435_t0;
            r435_currentGlyph.include(r271_MarkSet.bp());
            r435_currentGlyph.include(r271_LongSShape(r271_Ascender, 0, r271_HookX + 0.25 * r271_Stroke, r271_Hook));
            r435_currentGlyph.include(r271_RetroflexHook.l(new r271_xn$NamedParameterPair$2Lrc9b('x', r271_Middle - (r271_HookX + 0.25 * r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('eshCurlyTail', 646, function () {
            var _r444_t1;
            var _r444_t0 = this;
            var r444_currentGlyph = _r444_t0;
            r444_currentGlyph.include(r271_MarkSet.bp());
            var r444_fine = r271_AdviceStroke(3.5);
            var r444_rinner = r271_LongJut / 2 - r444_fine / 2;
            var r444_m1 = r271_Middle - r271_HSwToV(r271_HalfStroke) - r271_FBalance;
            var r444_x2 = r1_mix(r271_RightSB, r444_m1, 0.25);
            var r444_y2 = r271_Descender + r271_O;
            r444_currentGlyph.include(r271_union(r271_LongSUpperHalf(1, r271_Middle - r271_FBalance, r271_Ascender, 0, r271_HookX + 0.25 * r271_Stroke, r271_Hook), r271_dispiro(r271_widths.lhs(), r271_flat(r444_m1, -r271_O, r271_heading(r271_Downward)), r271_curl(r444_m1, r271_Descender + r444_fine + r444_rinner * 2), r271_CurlyTail(new r271_xn$NamedParameterPair$2Lrc9b('fine', r444_fine), new r271_xn$NamedParameterPair$2Lrc9b('rinner', r444_rinner), new r271_xn$NamedParameterPair$2Lrc9b('xleft', r444_m1), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r271_Descender), new r271_xn$NamedParameterPair$2Lrc9b('right', r444_m1 - r271_LongJut), new r271_xn$NamedParameterPair$2Lrc9b('x2', r444_x2), new r271_xn$NamedParameterPair$2Lrc9b('y2', r444_y2)))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('iFishHook.serifless', null, function () {
            var _r456_t1;
            var _r456_t0 = this;
            var r456_currentGlyph = _r456_t0;
            r456_currentGlyph.include(r271_MarkSet.p());
            r456_currentGlyph.include(r271_IFishHookShape(r271_XH, r271_Descender, false));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('iFishHook.serifed', null, function () {
            var _r461_t1;
            var _r461_t0 = this;
            var r461_currentGlyph = _r461_t0;
            r461_currentGlyph.include(r271_MarkSet.p());
            r461_currentGlyph.include(r271_IFishHookShape(r271_XH, r271_Descender, true));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('iFishHook', 639);
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('iviby', 645, function () {
            var _r466_t1;
            var _r466_t0 = this;
            var r466_currentGlyph = _r466_t0;
            r466_currentGlyph.include(r271_MarkSet.p());
            r466_currentGlyph.include(r271_RevLongSShape(r271_XH, r271_Descender, r271_HookX + 0.25 * r271_Stroke, r271_Hook));
            return void 0;
        });
    });
    return void 0;
});
