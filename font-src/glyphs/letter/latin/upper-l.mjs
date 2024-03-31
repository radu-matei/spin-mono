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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-L', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_serifGrade, _r271_t13, _r271_t14, _r271_t15, _r271_t16, _r271_tag17;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Translate = _r271_t1.Translate;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_Jut = _r271_t1.Jut;
        var r271_VJut = _r271_t1.VJut;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_turned = _r271_t5.turned;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markMiddle = _r271_t6.markMiddle;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r271_aboveMarkMid = _r271_t7.aboveMarkMid;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t8.LeaningAnchor;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t9.BBS;
        var r271_BBD = _r271_t9.BBD;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_BeltOverlay = _r271_t10.BeltOverlay;
        var r271_LetterBarOverlay = _r271_t10.LetterBarOverlay;
        var r271_LBarLeftX = function (r279_df) {
            var _r279_t0, _r279_t1;
            return r279_df.leftSB * 1.5;
        };
        var r271_LRightX = function (r280_df) {
            var _r280_t0, _r280_t1;
            return r280_df.rightSB - 0.75 * r271_OX;
        };
        var r271_LShape = function (r281_df, r281_top, r281_sgr, r281_swv) {
            var _r281_t0, _r281_t1;
            return function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                r283_currentGlyph.include(r271_VBar.l(r271_LBarLeftX(r281_df), 0, r281_top, r281_swv));
                r283_currentGlyph.include(r271_HBar.b(r271_LBarLeftX(r281_df) - r271_O, r271_LRightX(r281_df), 0));
                if (r281_sgr > 1) {
                    r283_currentGlyph.include(r271_HSerif.lb(r271_LBarLeftX(r281_df) + r271_HSwToV(0.5 * r281_swv), 0, r271_Jut));
                    r283_currentGlyph.include(r271_HSerif.lt(r271_LBarLeftX(r281_df) + r271_HSwToV(0.5 * r281_swv), r281_top, r271_Jut));
                    r283_currentGlyph.include(r271_HSerif.rt(r271_LBarLeftX(r281_df) + r271_HSwToV(0.5 * r281_swv), r281_top, r271_MidJutSide));
                }
                if (r281_sgr > 0)
                    r283_currentGlyph.include(r271_VSerif.ur(r271_LRightX(r281_df), 0, r271_VJut));
                return void 0;
            };
        };
        var r271_LConfig = {
            'serifless': [0],
            'motionSerifed': [1],
            'serifed': [2]
        };
        var _r271_t11 = Object.entries(r271_LConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_serifGrade = _r271_t13[1][0];
            _r271_t13[1];
            (function () {
                var r292_df = r271_DivFrame(1);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('L.' + r271_suffix, null, function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.setWidth(r292_df.width);
                    r295_currentGlyph.include(r292_df.markSet.capital());
                    r295_currentGlyph.include(r271_LeaningAnchor.Above.VBar.l(r271_LBarLeftX(r292_df)));
                    r295_currentGlyph.include(r271_LShape(r292_df, r271_CAP, r271_serifGrade, r271_Stroke));
                    r295_currentGlyph.setBaseAnchor('cvDecompose', r1_mix(r292_df.leftSB, r292_df.rightSB, 0.65) + r271_HSwToV(0.25 * r271_Stroke), r1_mix(r271_Stroke, r271_CAP, 0.5));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpL.' + r271_suffix, null, function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    r303_currentGlyph.setWidth(r292_df.width);
                    r303_currentGlyph.include(r292_df.markSet.e());
                    r303_currentGlyph.include(r271_LeaningAnchor.Above.VBar.l(r271_LBarLeftX(r292_df)));
                    r303_currentGlyph.include(r271_LShape(r292_df, r271_XH, r271_serifGrade, r271_Stroke));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('LLWelsh.' + r271_suffix, null, function () {
                    var _r310_t1;
                    var _r310_t0 = this;
                    var r310_currentGlyph = _r310_t0;
                    r310_currentGlyph.setWidth(r292_df.width);
                    r310_currentGlyph.include(r292_df.markSet.capital());
                    var r310_sw = r271_AdviceStroke(4);
                    var r310_gap = Math.max(r271_Width / 8, r271_AdviceStroke(8));
                    r310_currentGlyph.include(r271_LShape(r292_df, r271_CAP, r271_serifGrade, r310_sw));
                    r310_currentGlyph.include(r271_intersection(r271_MaskLeft(r271_RightSB), r271_MaskAbove(r310_sw), r271_xn$withtransform$5sIl(r271_ApparentTranslate(r271_HSwToV(r310_sw) + r310_gap, 0), r271_LShape(r292_df, r271_CAP, r271_serifGrade, r310_sw))));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('LHighBar.' + r271_suffix, null, function () {
                    var _r317_t1;
                    var _r317_t0 = this;
                    var r317_currentGlyph = _r317_t0;
                    r317_currentGlyph.include(r271_xn$referglyph$1aao('L.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r317_currentGlyph.include(r271_LetterBarOverlay.l.in(r271_LBarLeftX(r271_DivFrame(1)), r271_XH, r271_CAP - (r271_serifGrade > 1 ? r271_Stroke : 0)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('L', 'L');
        r271_xn$linkreducedvariant$5sIl8('L/sansSerif', 'L', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpL', 671, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'L'));
        r271_xn$selectvariant$7Hrq('LLWelsh', 7930, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'L'));
        r271_xn$selectvariant$7Hrq('LHighBar', 42824, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'L'));
        r271_turned('turnL', 42880, 'L', r271_Middle, r271_CAP / 2);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/L', 120131, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            var r325_df = r325_currentGlyph.include(r271_DivFrame(1));
            r325_currentGlyph.include(r325_df.markSet.capital());
            r325_currentGlyph.include(r271_VBar.l(r271_LBarLeftX(r325_df), 0, r271_CAP, r271_BBS));
            r325_currentGlyph.include(r271_HBar.b(r271_LBarLeftX(r325_df) - r271_O, r271_LRightX(r325_df), 0, r271_BBS));
            r325_currentGlyph.include(r271_VBar.l(r271_LBarLeftX(r325_df) + r271_BBD, 0, r271_CAP, r271_BBS));
            r325_currentGlyph.include(r271_HBar.t(r271_LBarLeftX(r325_df), r271_LBarLeftX(r325_df) + r271_BBD, r271_CAP, r271_BBS));
            return void 0;
        });
        r271_xn$derivemultipartglyphs$7Hrq65('Lcaron', 317, [
            'L',
            'commaAbove'
        ], function (r332_srcs, r332_gr) {
            var _r332_t0, _r332_t1;
            return function () {
                var _r334_t2;
                var _r334_t1 = this;
                var r334_currentGlyph = _r334_t1;
                var _r334_t0 = r332_srcs;
                var r334_base = _r334_t0[0];
                var r334_mark = _r334_t0[1];
                r334_currentGlyph.include(r271_xn$withtransform$5sIl(r271_Translate(r271_Width + (r271_RightSB - r271_SB) * 0.375, 0), r271_xn$referglyph$1aao(r334_mark)));
                r334_currentGlyph.include(r271_xn$referglyph$1aao(r334_base), r271_AS_BASE, r271_ALSO_METRICS);
                return void 0;
            };
        });
        var r271_LSlashOverlay = function (r337_top) {
            var _r337_t0, _r337_t1;
            var r337_fine = 0.5 * r271_OverlayStroke;
            var r337_middle = r1_mix(r271_Stroke, r337_top, 0.5);
            return r271_dispiro(r271_flat(r1_mix(0, r271_SB, 0.5), r337_middle - r271_LongJut * 0.4, r271_widths.center(2 * r337_fine)), r271_curl(1.6 * r271_LongJut + r1_mix(0, r271_SB, 0.5), r337_middle + r271_LongJut * 0.4));
        };
        r271_xn$deriveglyphs$7Hrq('LSlash', 321, 'L', function (r338_src, r338_gr) {
            var _r338_t0, _r338_t1;
            return function () {
                var _r340_t1;
                var _r340_t0 = this;
                var r340_currentGlyph = _r340_t0;
                r340_currentGlyph.include(r271_xn$referglyph$1aao(r338_src), r271_AS_BASE, r271_ALSO_METRICS);
                r340_currentGlyph.include(r271_LSlashOverlay(r271_CAP));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('smcpLSlash', 7436, 'smcpL', function (r343_src, r343_gr) {
            var _r343_t0, _r343_t1;
            return function () {
                var _r345_t1;
                var _r345_t0 = this;
                var r345_currentGlyph = _r345_t0;
                r345_currentGlyph.include(r271_xn$referglyph$1aao(r343_src), r271_AS_BASE, r271_ALSO_METRICS);
                r345_currentGlyph.include(r271_LSlashOverlay(r271_XH));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('LTildeOver', 11362, 'L', function (r348_src, r348_gr) {
            var _r348_t0, _r348_t1;
            return function () {
                var _r350_t1;
                var _r350_t0 = this;
                var r350_currentGlyph = _r350_t0;
                r350_currentGlyph.include(r271_xn$referglyph$1aao(r348_src), r271_AS_BASE, r271_ALSO_METRICS);
                r350_currentGlyph.include(r271_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    r355_currentGlyph.include(r271_xn$referglyph$1aao('tildeOver'));
                    r355_currentGlyph.include(r271_ApparentTranslate(r271_LBarLeftX(r271_DivFrame(1)) + r271_HSwToV(r271_Stroke) / 2 - r271_markMiddle, r271_CAP * 0.525 - r271_XH / 2));
                    return void 0;
                }));
                return void 0;
            };
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('LBarOverlay', null, r271_LetterBarOverlay.l.in(r271_LBarLeftX(r271_DivFrame(1)), 0, r271_CAP));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('LDoubleBarOverlay', null, function () {
            var _r361_t1;
            var _r361_t0 = this;
            var r361_currentGlyph = _r361_t0;
            r361_currentGlyph.include(r271_LetterBarOverlay.l.in(r271_LBarLeftX(r271_DivFrame(1)), 0, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('py', 0.6)), true, true);
            r361_currentGlyph.include(r271_LetterBarOverlay.l.in(r271_LBarLeftX(r271_DivFrame(1)), 0, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('py', 0.4)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('LBeltOverlay', null, r271_BeltOverlay(r271_CAP, r271_LBarLeftX(r271_DivFrame(1)) + r271_HSwToV(0.5 * r271_Stroke)));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpLBeltOverlay', null, r271_BeltOverlay(r271_XH, r271_LBarLeftX(r271_DivFrame(1)) + r271_HSwToV(0.5 * r271_Stroke)));
        r271_xn$derivecomposites$7Hrq('LBar', 573, 'L', 'LBarOverlay');
        r271_xn$derivecomposites$7Hrq('LDoubleBar', 11360, 'L', 'LDoubleBarOverlay');
        r271_xn$derivecomposites$7Hrq('LBelt', 42925, 'L', 'LBeltOverlay');
        r271_xn$derivecomposites$7Hrq('smcpLBelt', 122628, 'smcpL', 'smcpLBeltOverlay');
        return r271_xn$derivecomposites$7Hrq('LDot', 319, 'L', 'LDotDot');
    });
    return void 0;
});
