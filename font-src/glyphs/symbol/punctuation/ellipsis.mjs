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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Ellipsis', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_DrawAt, r270_kDotRadius, r270_overshoot, _r270_t8, _r270_t9, _r270_t10, _r270_t11, _r270_tag12, _r270_t13, _r270_tag14;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_XH = _r270_t1.XH;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_OperTop = _r270_t1.OperTop;
        var r270_OperBot = _r270_t1.OperBot;
        var r270_PlusTop = _r270_t1.PlusTop;
        var r270_PlusBot = _r270_t1.PlusBot;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_PeriodSize = _r270_t1.PeriodSize;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_EllipsisDotRadius = function (r273_nDots, r273_space) {
            var _r273_t0, _r273_t1;
            return 0.5 * r270_AdviceStroke(r273_nDots + 1.5, r273_space / r270_Width) * r270_PeriodSize / r270_Stroke;
        };
        var r270_VThreeDotsShape = function (r274_DrawAt, r274_radius, r274_overshoot, r274_l, r274_r, r274_p, r274_bottom, r274_top) {
            var _r274_t0, _r274_t1;
            return function () {
                var _r276_t1;
                var _r276_t0 = this;
                var r276_currentGlyph = _r276_t0;
                var r276_xMid = r1_mix(r274_l, r274_r, 0.5);
                var r276_yMid = r1_mix(r274_bottom, r274_top, 0.5);
                r276_currentGlyph.include(r274_DrawAt(r1_mix(r276_xMid, r274_l, r274_p), r274_bottom + r274_radius, r274_radius - r274_overshoot));
                r276_currentGlyph.include(r274_DrawAt(r276_xMid, r276_yMid, r274_radius - r274_overshoot));
                r276_currentGlyph.include(r274_DrawAt(r1_mix(r276_xMid, r274_r, r274_p), r274_top - r274_radius, r274_radius - r274_overshoot));
                return void 0;
            };
        };
        var r270_VFourDotShape = function (r280_DrawAt, r280_radius, r280_overshoot, r280_xMid, r280_bottom, r280_top) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                var r282_yp = function (r283_p) {
                    var _r283_t0, _r283_t1;
                    return r1_mix(r280_bottom + r280_radius, r280_top - r280_radius, r283_p);
                };
                r282_currentGlyph.include(r280_DrawAt(r280_xMid, r282_yp(0), r280_radius - r280_overshoot));
                r282_currentGlyph.include(r280_DrawAt(r280_xMid, r282_yp(1 / 3), r280_radius - r280_overshoot));
                r282_currentGlyph.include(r280_DrawAt(r280_xMid, r282_yp(2 / 3), r280_radius - r280_overshoot));
                r282_currentGlyph.include(r280_DrawAt(r280_xMid, r282_yp(1), r280_radius - r280_overshoot));
                return void 0;
            };
        };
        (function () {
            var r290_FMosaicWide, r290_MosaicNameSuffix, r290_MosaicWidth, r290_MosaicWidthScalar, _r290_t3, _r290_t5, _r290_t6, _r290_tag7;
            var r290_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r270_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r270_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r290_t0 = r290_WidthKinds;
            var _r290_t1 = _r290_t0.length;
            var _r290_t2 = 0;
            var _r290_t4 = _r290_t2 < _r290_t1;
            while (_r290_t4) {
                _r290_t3 = _r290_t0[_r290_t2];
                r290_FMosaicWide = _r290_t3[0];
                r290_MosaicNameSuffix = _r290_t3[1];
                r290_MosaicWidth = _r290_t3[2];
                r290_MosaicWidthScalar = _r290_t3[3];
                (function () {
                    var r293_suffix, r293_DrawAt, r293_kDotRadius, r293_overshoot, _r293_t2, _r293_t3, _r293_tag4;
                    var r293_MosaicDesiredWidth = r270_WideWidth1;
                    var r293_MosaicMiddle = r290_MosaicWidth / 2;
                    var r293_MosaicUnitWidth = r290_MosaicWidth / r290_MosaicWidthScalar;
                    var r293_MangleUnicode = function (r294_unicode, r294__desiredOverride) {
                        var _r294_t0, _r294_t1;
                        return r290_MosaicWidth === (r294__desiredOverride || r293_MosaicDesiredWidth) ? r294_unicode : void 0;
                    };
                    var r293_MangleName = function (r295_name) {
                        var _r295_t0, _r295_t1;
                        return r295_name + r290_MosaicNameSuffix;
                    };
                    var _r293_t0 = Object.entries(r270_DotVariants)[Symbol.iterator]();
                    var _r293_t1 = void 0;
                    while (!(_r293_t1 = _r293_t0.next()).done) {
                        _r293_t2 = _r293_t1.value;
                        r293_suffix = _r293_t2[0];
                        r293_DrawAt = _r293_t2[1][0];
                        r293_kDotRadius = _r293_t2[1][1];
                        r293_overshoot = _r293_t2[1][2];
                        _r293_t2[1];
                        (function () {
                            r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r293_MangleName('onedotLeader') + '.' + r293_suffix, null, function () {
                                var _r301_t1;
                                var _r301_t0 = this;
                                var r301_currentGlyph = _r301_t0;
                                var r301_width = r290_MosaicWidth * r1_mix(r270_para.diversityF, r270_para.diversityII, r290_MosaicWidthScalar - 1);
                                r301_currentGlyph.setWidth(r301_width);
                                var r301_radius = r270_EllipsisDotRadius(2, r290_MosaicWidth) * r293_kDotRadius;
                                r301_currentGlyph.include(r293_DrawAt(r301_width / 2, r301_radius, r301_radius - r293_overshoot));
                                return void 0;
                            });
                            r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r293_MangleName('twodotsLEader') + '.' + r293_suffix, null, function () {
                                var _r306_t1;
                                var _r306_t0 = this;
                                var r306_currentGlyph = _r306_t0;
                                var r306_width = r290_MosaicWidth * r1_mix(1, r270_para.diversityF, r290_MosaicWidthScalar - 1);
                                r306_currentGlyph.setWidth(r306_width);
                                var r306_radius = r270_EllipsisDotRadius(2, r290_MosaicWidth) * r293_kDotRadius;
                                var r306_left = r1_mix(0, r306_width, 1 / 4);
                                var r306_right = r1_mix(0, r306_width, 3 / 4);
                                r306_currentGlyph.include(r293_DrawAt(r306_left, r306_radius, r306_radius - r293_overshoot));
                                r306_currentGlyph.include(r293_DrawAt(r306_right, r306_radius, r306_radius - r293_overshoot));
                                return void 0;
                            });
                            r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r293_MangleName('ellipsis') + '.' + r293_suffix, null, function () {
                                var _r312_t1;
                                var _r312_t0 = this;
                                var r312_currentGlyph = _r312_t0;
                                r312_currentGlyph.setWidth(r290_MosaicWidth);
                                var r312_radius = r270_EllipsisDotRadius(3, r290_MosaicWidth) * r293_kDotRadius;
                                var r312_left = r1_mix(0, r290_MosaicWidth, 1 / 6);
                                var r312_right = r1_mix(0, r290_MosaicWidth, 5 / 6);
                                r312_currentGlyph.include(r270_VThreeDotsShape(r293_DrawAt, r312_radius, r293_overshoot, r312_left, r312_right, +1, 0, 2 * r312_radius));
                                r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r293_MangleName('mathCDots') + '.' + r293_suffix, null, function () {
                                    var _r317_t1;
                                    var _r317_t0 = this;
                                    _r317_t0.include(r312_currentGlyph, true, true);
                                    _r317_t0.cloneRankFromGlyph(r312_currentGlyph);
                                    return _r317_t0.include(r270_ApparentTranslate(0, r270_SymbolMid - r312_radius));
                                });
                                return void 0;
                            });
                            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/symbol/punctuation/ellipsis.ptl.1', null, function () {
                                var _r320_t1;
                                var _r320_t0 = this;
                                var r320_currentGlyph = _r320_t0;
                                r320_currentGlyph.setWidth(r290_MosaicWidth);
                                var r320_left = r1_mix(0, r290_MosaicWidth, 1 / 6);
                                var r320_right = r1_mix(0, r290_MosaicWidth, 5 / 6);
                                var r320_top = r270_SymbolMid + Math.max(r320_right - r1_mix(r320_left, r320_right, 0.5), r1_mix(r270_PlusTop, r270_OperTop, 0.5) - r270_SymbolMid);
                                var r320_bot = r270_SymbolMid - Math.max(r1_mix(r320_left, r320_right, 0.5) - r320_left, r270_SymbolMid - r1_mix(r270_PlusBot, r270_OperBot, 0.5));
                                var r320_radius = r270_EllipsisDotRadius(3, Math.min(r290_MosaicWidth, r320_top - r320_bot)) * r293_kDotRadius;
                                r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r293_MangleName('mathCVDots') + '.' + r293_suffix, null, function () {
                                    var _r324_t1;
                                    var _r324_t0 = this;
                                    _r324_t0.include(r320_currentGlyph, true, true);
                                    _r324_t0.cloneRankFromGlyph(r320_currentGlyph);
                                    return _r324_t0.include(r270_VThreeDotsShape(r293_DrawAt, r320_radius, r293_overshoot, r320_left, r320_right, 0, r320_bot - r320_radius, r320_top + r320_radius));
                                });
                                r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r293_MangleName('mathCD1Dots') + '.' + r293_suffix, null, function () {
                                    var _r327_t1;
                                    var _r327_t0 = this;
                                    _r327_t0.include(r320_currentGlyph, true, true);
                                    _r327_t0.cloneRankFromGlyph(r320_currentGlyph);
                                    return _r327_t0.include(r270_VThreeDotsShape(r293_DrawAt, r320_radius, r293_overshoot, r320_left, r320_right, -1, r320_bot - r320_radius, r320_top + r320_radius));
                                });
                                r270_xn$createAndSaveGlyphImpl$2Lrc3c('' + r293_MangleName('mathCD2Dots') + '.' + r293_suffix, null, function () {
                                    var _r330_t1;
                                    var _r330_t0 = this;
                                    _r330_t0.include(r320_currentGlyph, true, true);
                                    _r330_t0.cloneRankFromGlyph(r320_currentGlyph);
                                    return _r330_t0.include(r270_VThreeDotsShape(r293_DrawAt, r320_radius, r293_overshoot, r320_left, r320_right, +1, r320_bot - r320_radius, r320_top + r320_radius));
                                });
                                return void 0;
                            });
                        }());
                    }
                    r270_xn$selectvariant$7Hrq(r293_MangleName('onedotLeader'), r293_MangleUnicode(8228), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                    r270_xn$selectvariant$7Hrq(r293_MangleName('twodotsLEader'), r293_MangleUnicode(8229), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                    r270_xn$selectvariant$7Hrq(r293_MangleName('ellipsis'), r293_MangleUnicode(8230), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                    r270_xn$selectvariant$7Hrq(r293_MangleName('mathCDots'), r293_MangleUnicode(8943), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                    r270_xn$selectvariant$7Hrq(r293_MangleName('mathCVDots'), r293_MangleUnicode(8942), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                    r270_xn$selectvariant$7Hrq(r293_MangleName('mathCD1Dots'), r293_MangleUnicode(8945), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                    return r270_xn$selectvariant$7Hrq(r293_MangleName('mathCD2Dots'), r293_MangleUnicode(8944), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
                }());
                _r290_t5 = _r290_t2 = _r290_t2 + 1;
                _r290_t4 = _r290_t2 < _r290_t1;
            }
            return _r290_t5;
        }());
        var _r270_t6 = Object.entries(r270_DotVariants)[Symbol.iterator]();
        var _r270_t7 = void 0;
        while (!(_r270_t7 = _r270_t6.next()).done) {
            _r270_t8 = _r270_t7.value;
            r270_suffix = _r270_t8[0];
            r270_DrawAt = _r270_t8[1][0];
            r270_kDotRadius = _r270_t8[1][1];
            r270_overshoot = _r270_t8[1][2];
            _r270_t8[1];
            (function () {
                var r340_radius = r270_kDotRadius * r270_EllipsisDotRadius(3, r270_XH);
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('triColon.' + r270_suffix, null, function () {
                    var _r343_t1;
                    var _r343_t0 = this;
                    var r343_currentGlyph = _r343_t0;
                    var r343_df = r343_currentGlyph.include(r270_DivFrame(r270_para.diversityF));
                    r343_currentGlyph.include(r270_VThreeDotsShape(r270_DrawAt, r340_radius, r270_overshoot, 0, r343_df.width, 0, 0, r270_XH));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathTriColon.' + r270_suffix, null, function () {
                    var _r348_t1;
                    var _r348_t0 = this;
                    var r348_currentGlyph = _r348_t0;
                    var r348_df = r348_currentGlyph.include(r270_DivFrame(r270_para.diversityF));
                    r348_currentGlyph.include(r270_VThreeDotsShape(r270_DrawAt, r340_radius, r270_overshoot, 0, r348_df.width, 0, r270_SymbolMid - r270_XH / 2, r270_SymbolMid + r270_XH / 2));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('quadColon.' + r270_suffix, null, function () {
                    var _r353_t1;
                    var _r353_t0 = this;
                    var r353_currentGlyph = _r353_t0;
                    var r353_df = r353_currentGlyph.include(r270_DivFrame(r270_para.diversityF));
                    r353_currentGlyph.include(r270_VFourDotShape(r270_DrawAt, r340_radius, r270_overshoot, r353_df.middle, -r270_XH / 6, r270_XH * 7 / 6));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathQuadColon.' + r270_suffix, null, function () {
                    var _r358_t1;
                    var _r358_t0 = this;
                    var r358_currentGlyph = _r358_t0;
                    var r358_df = r358_currentGlyph.include(r270_DivFrame(r270_para.diversityF));
                    r358_currentGlyph.include(r270_VFourDotShape(r270_DrawAt, r340_radius, r270_overshoot, r358_df.middle, r270_SymbolMid - r270_XH * 2 / 3, r270_SymbolMid + r270_XH * 2 / 3));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('triColon', 8285, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_xn$selectvariant$7Hrq('quadColon', 8286, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r270_xn$selectvariant$7Hrq('mathTriColon', 10998, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        return r270_xn$selectvariant$7Hrq('mathQuadColon', 10649, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
    });
    return void 0;
});
