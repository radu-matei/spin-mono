'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
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
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Symbol-Cross', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t4, _r271_t5, _r271_t6, _r271_tag7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_WideWidth1 = _r271_t1.WideWidth1;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_widths = _r271_t2.widths;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        return function () {
            var r274_FMosaicWide, r274_MosaicNameSuffix, r274_MosaicWidth, r274_MosaicWidthScalar, _r274_t3, _r274_t5, _r274_t6, _r274_tag7;
            var r274_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r271_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r271_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r274_t0 = r274_WidthKinds;
            var _r274_t1 = _r274_t0.length;
            var _r274_t2 = 0;
            var _r274_t4 = _r274_t2 < _r274_t1;
            while (_r274_t4) {
                _r274_t3 = _r274_t0[_r274_t2];
                r274_FMosaicWide = _r274_t3[0];
                r274_MosaicNameSuffix = _r274_t3[1];
                r274_MosaicWidth = _r274_t3[2];
                r274_MosaicWidthScalar = _r274_t3[3];
                (function () {
                    var r277_MosaicDesiredWidth = r271_WideWidth1;
                    var r277_MosaicMiddle = r274_MosaicWidth / 2;
                    var r277_MosaicUnitWidth = r274_MosaicWidth / r274_MosaicWidthScalar;
                    var r277_MangleUnicode = function (r278_unicode, r278__desiredOverride) {
                        var _r278_t0, _r278_t1;
                        return r274_MosaicWidth === (r278__desiredOverride || r277_MosaicDesiredWidth) ? r278_unicode : void 0;
                    };
                    var r277_MangleName = function (r279_name) {
                        var _r279_t0, _r279_t1;
                        return r279_name + r274_MosaicNameSuffix;
                    };
                    var _r277_t0 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
                    var r277_RingStrokeAt = _r277_t0.RingStrokeAt;
                    var _r277_t1 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
                    var _r277_t2 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Geometric-Shared'].resolve();
                    var r277_GeometricDim = _r277_t2.GeometricDim;
                    var r277_UnicodeWeightGrade = _r277_t2.UnicodeWeightGrade;
                    var r277_GeometricSizes = _r277_t2.GeometricSizes;
                    var r277_Geom = r277_GeometricDim(r277_MosaicUnitWidth, r274_MosaicWidth);
                    var r277_Size = r277_GeometricSizes(r277_Geom);
                    var r277_mediumSw = r277_UnicodeWeightGrade(5, r277_Geom.Scalar);
                    var r277_heavySw = r277_UnicodeWeightGrade(9, r277_Geom.Scalar);
                    var r277_pBottom = 2;
                    var r277_pShortBar = 0.6;
                    var r277_pRing = 0.6;
                    var r277_crossHeight = r277_Geom.Size * r277_Size.Large.size * 2;
                    var r277_shortSize = r277_crossHeight / (r277_pBottom + 1);
                    var r277_yTop = r277_Geom.MidY + 0.5 * r277_crossHeight;
                    var r277_yBot = r277_Geom.MidY - 0.5 * r277_crossHeight;
                    var r277_yCenter = r277_yTop - r277_shortSize;
                    var r277_LatinCross = function (r283_sw, r283_fSecondBar) {
                        var _r283_t0, _r283_t1;
                        return function () {
                            var _r285_t1;
                            var _r285_t0 = this;
                            var r285_currentGlyph = _r285_t0;
                            r285_currentGlyph.include(r271_dispiro(r271_corner(r277_Geom.MidX, r277_yTop, r271_widths.center(r283_sw)), r271_corner(r277_Geom.MidX, r277_yBot)));
                            r285_currentGlyph.include(r271_dispiro(r271_corner(r277_Geom.MidX - r277_shortSize, r277_yCenter, r271_widths.center(r283_sw)), r271_corner(r277_Geom.MidX + r277_shortSize, r277_yCenter)));
                            if (r283_fSecondBar)
                                r285_currentGlyph.include(r271_dispiro(r271_corner(r277_Geom.MidX - r277_pShortBar * r277_shortSize, r1_mix(r277_yCenter, r277_yTop, 0.5), r271_widths.center(r283_sw)), r271_corner(r277_Geom.MidX + r277_pShortBar * r277_shortSize, r1_mix(r277_yCenter, r277_yTop, 0.5))));
                            return void 0;
                        };
                    };
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('latinCross'), r277_MangleUnicode(10013), function () {
                        var _r291_t1;
                        var _r291_t0 = this;
                        var r291_currentGlyph = _r291_t0;
                        r291_currentGlyph.setWidth(r277_Geom.Width);
                        r291_currentGlyph.include(r277_LatinCross(r277_mediumSw, false));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('heavyLatinCross'), r277_MangleUnicode(128327), function () {
                        var _r296_t1;
                        var _r296_t0 = this;
                        var r296_currentGlyph = _r296_t0;
                        r296_currentGlyph.setWidth(r277_Geom.Width);
                        r296_currentGlyph.include(r277_LatinCross(r277_heavySw, false));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('lorraineCross'), r277_MangleUnicode(9768), function () {
                        var _r301_t1;
                        var _r301_t0 = this;
                        var r301_currentGlyph = _r301_t0;
                        r301_currentGlyph.setWidth(r277_Geom.Width);
                        r301_currentGlyph.include(r277_LatinCross(r277_mediumSw, true));
                        return void 0;
                    });
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('orthodoxCross'), r277_MangleUnicode(9766), function () {
                        var _r306_t1;
                        var _r306_t0 = this;
                        var r306_currentGlyph = _r306_t0;
                        r306_currentGlyph.setWidth(r277_Geom.Width);
                        r306_currentGlyph.include(r277_LatinCross(r277_mediumSw, true));
                        r306_currentGlyph.include(r271_dispiro(r271_corner(r277_Geom.MidX - r277_pShortBar * r277_shortSize, r1_mix(r277_yBot, r277_yCenter, 0.45), r271_widths.center(r277_mediumSw)), r271_corner(r277_Geom.MidX + r277_pShortBar * r277_shortSize, r1_mix(r277_yBot, r277_yCenter, 0.3))));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c(r277_MangleName('celticCross'), r277_MangleUnicode(128328), function () {
                        var _r312_t1;
                        var _r312_t0 = this;
                        var r312_currentGlyph = _r312_t0;
                        r312_currentGlyph.setWidth(r277_Geom.Width);
                        r312_currentGlyph.include(r277_LatinCross(r277_mediumSw, false));
                        r312_currentGlyph.include(r277_RingStrokeAt(r277_Geom.MidX, r277_yCenter, r277_pRing * r277_shortSize + 0.5 * r277_mediumSw, r277_mediumSw));
                        return void 0;
                    });
                }());
                _r274_t5 = _r274_t2 = _r274_t2 + 1;
                _r274_t4 = _r274_t2 < _r274_t1;
            }
            return _r274_t5;
        }();
    });
    return void 0;
});
