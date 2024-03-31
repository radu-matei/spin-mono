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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Circled', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7, _r270_t8, _r270_tag9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_PlusTop = _r270_t1.PlusTop;
        var r270_PlusBot = _r270_t1.PlusBot;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_xn$clearanchors$1aao = _r270_t4['clear-anchors'];
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_xn$deriveglyphs$7Hrq = _r270_t5['derive-glyphs'];
        var r270_MakeMathCircled = function (r273_u, r273_inner) {
            var _r273_t0, _r273_t1;
            return r270_xn$deriveglyphs$7Hrq('mathCircled{' + r273_inner + '}', r273_u, r273_inner, function (r274_src, r274_gr) {
                var _r274_t0, _r274_t1;
                return function () {
                    var _r276_t1;
                    var _r276_t0 = this;
                    var r276_currentGlyph = _r276_t0;
                    r276_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
                    r276_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_xn$referglyph$1aao(r274_src)));
                    return void 0;
                };
            });
        };
        r270_MakeMathCircled(8853, 'innerPlus');
        r270_MakeMathCircled(8854, 'innerMinus');
        r270_MakeMathCircled(8855, 'innerMultiply');
        r270_MakeMathCircled(8856, 'innerMultiplyStroke1');
        r270_MakeMathCircled(8857, 'mathCDotInner');
        r270_MakeMathCircled(8858, 'whiteSmallCircle.NWID');
        r270_MakeMathCircled(8859, 'opAsterisk');
        r270_MakeMathCircled(10678, 'innerVerticalBar');
        r270_MakeMathCircled(10680, 'innerMultiplyStroke2');
        r270_MakeMathCircled(10682, 'innerIsraeliPlus');
        r270_MakeMathCircled(10684, 'rotatedInnerDivide');
        r270_MakeMathCircled(10686, 'whiteVerySmallCircle.NWID');
        r270_MakeMathCircled(10687, 'blackVerySmallCircle.NWID');
        r270_MakeMathCircled(10808, 'innerDivide');
        var r270_MakeMathCircledAllowingOverflow = function (r279_u, r279_inner) {
            var _r279_t0, _r279_t1;
            return r270_xn$deriveglyphs$7Hrq('mathCircledAllowingOverflow{' + r279_inner + '}', r279_u, r279_inner, function (r280_src, r280_gr) {
                var _r280_t0, _r280_t1;
                return function () {
                    var _r282_t1;
                    var _r282_t0 = this;
                    var r282_currentGlyph = _r282_t0;
                    r282_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
                    r282_currentGlyph.include(r270_xn$referglyph$1aao(r280_src));
                    return void 0;
                };
            });
        };
        r270_MakeMathCircledAllowingOverflow(8960, 'innerMultiplyStroke1');
        r270_MakeMathCircledAllowingOverflow(10683, 'innerMultiply');
        var r270_MakeMathLeftHalfCircled = function (r285_u, r285_inner) {
            var _r285_t0, _r285_t1;
            return r270_xn$deriveglyphs$7Hrq('mathLeftHalfCircled{' + r285_inner + '}', r285_u, r285_inner, function (r286_src, r286_gr) {
                var _r286_t0, _r286_t1;
                return function () {
                    var _r288_t1;
                    var _r288_t0 = this;
                    var r288_currentGlyph = _r288_t0;
                    r288_currentGlyph.include(r270_xn$referglyph$1aao('mathOlefthalf'), true, true);
                    r288_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_xn$referglyph$1aao(r286_src)));
                    return void 0;
                };
            });
        };
        var r270_MakeMathRightHalfCircled = function (r291_u, r291_inner) {
            var _r291_t0, _r291_t1;
            return r270_xn$deriveglyphs$7Hrq('mathRightHalfCircled{' + r291_inner + '}', r291_u, r291_inner, function (r292_src, r292_gr) {
                var _r292_t0, _r292_t1;
                return function () {
                    var _r294_t1;
                    var _r294_t0 = this;
                    var r294_currentGlyph = _r294_t0;
                    r294_currentGlyph.include(r270_xn$referglyph$1aao('mathOrighthalf'), true, true);
                    r294_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_xn$referglyph$1aao(r292_src)));
                    return void 0;
                };
            });
        };
        r270_MakeMathLeftHalfCircled(10797, 'innerPlus');
        r270_MakeMathRightHalfCircled(10798, 'innerPlus');
        r270_MakeMathLeftHalfCircled(10804, 'innerMultiply');
        r270_MakeMathRightHalfCircled(10805, 'innerMultiply');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(10806, null, function () {
            var _r299_t1;
            var _r299_t0 = this;
            var r299_currentGlyph = _r299_t0;
            r299_currentGlyph.include(r270_xn$referglyph$1aao('mathCircled{innerMultiply}'), true, true);
            r299_currentGlyph.include(r270_MarkSet.plus());
            r299_currentGlyph.include(r270_xn$referglyph$1aao('circumflexAbove'));
            r299_currentGlyph.include(r270_xn$clearanchors$1aao());
            return void 0;
        });
        (function () {
            var r306_FMosaicWide, r306_MosaicNameSuffix, r306_MosaicWidth, r306_MosaicWidthScalar, _r306_t3, _r306_t5, _r306_t6, _r306_tag7;
            var r306_WidthKinds = [
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
            var _r306_t0 = r306_WidthKinds;
            var _r306_t1 = _r306_t0.length;
            var _r306_t2 = 0;
            var _r306_t4 = _r306_t2 < _r306_t1;
            while (_r306_t4) {
                _r306_t3 = _r306_t0[_r306_t2];
                r306_FMosaicWide = _r306_t3[0];
                r306_MosaicNameSuffix = _r306_t3[1];
                r306_MosaicWidth = _r306_t3[2];
                r306_MosaicWidthScalar = _r306_t3[3];
                (function () {
                    var r309_MosaicDesiredWidth = r270_WideWidth1;
                    var r309_MosaicMiddle = r306_MosaicWidth / 2;
                    var r309_MosaicUnitWidth = r306_MosaicWidth / r306_MosaicWidthScalar;
                    var r309_MangleUnicode = function (r310_unicode, r310__desiredOverride) {
                        var _r310_t0, _r310_t1;
                        return r306_MosaicWidth === (r310__desiredOverride || r309_MosaicDesiredWidth) ? r310_unicode : void 0;
                    };
                    var r309_MangleName = function (r311_name) {
                        var _r311_t0, _r311_t1;
                        return r311_name + r306_MosaicNameSuffix;
                    };
                    var r309_MakeMathBigCircled = function (r312_u, r312_inner) {
                        var _r312_t0, _r312_t1;
                        return r270_xn$deriveglyphs$7Hrq(r309_MangleName('mathBigCircled{' + r312_inner + '}'), r309_MangleUnicode(r312_u), r309_MangleName(r312_inner), function (r313_src, r313_gr) {
                            var _r313_t0, _r313_t1;
                            return function () {
                                var _r315_t1;
                                var _r315_t0 = this;
                                var r315_currentGlyph = _r315_t0;
                                r315_currentGlyph.include(r270_xn$referglyph$1aao(r309_MangleName('mathOBig')), true, true);
                                r315_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao(r309_MangleName('mathOOutlineBig')), r270_xn$referglyph$1aao(r313_src)));
                                return void 0;
                            };
                        });
                    };
                    r309_MakeMathBigCircled(10752, 'mathCDotBig');
                    r309_MakeMathBigCircled(10753, 'innerPlusBig');
                    return r309_MakeMathBigCircled(10754, 'innerMultiplyBig');
                }());
                _r306_t5 = _r306_t2 = _r306_t2 + 1;
                _r306_t4 = _r306_t2 < _r306_t1;
            }
            return _r306_t5;
        }());
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(8861, null, function () {
            var _r320_t1;
            var _r320_t0 = this;
            var r320_currentGlyph = _r320_t0;
            r320_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r320_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_HBar.m(r270_SB + r270_GeometryStroke, r270_RightSB - r270_GeometryStroke, r270_SymbolMid, r270_GeometryStroke)));
            return void 0;
        });
        var r270_eqS = Math.min(r270_GeometryStroke, (r270_RightSB - r270_SB) / 8);
        var r270_eqD = Math.max(r270_eqS, (r270_RightSB - r270_SB) / 6);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(8860, null, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            r325_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r325_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_union(r270_HBar.m(r270_SB + r270_eqS, r270_RightSB - r270_eqS, r270_SymbolMid + r270_eqD, r270_eqS), r270_HBar.m(r270_SB + r270_eqS, r270_RightSB - r270_eqS, r270_SymbolMid - r270_eqD, r270_eqS))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(10679, null, function () {
            var _r330_t1;
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            r330_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r330_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_union(r270_VBar.m(r270_Middle + r270_eqD, r270_PlusBot + r270_eqS, r270_PlusTop - r270_eqS, r270_eqS), r270_VBar.m(r270_Middle - r270_eqD, r270_PlusBot + r270_eqS, r270_PlusTop - r270_eqS, r270_eqS))));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(10681, null, function () {
            var _r335_t1;
            var _r335_t0 = this;
            var r335_currentGlyph = _r335_t0;
            r335_currentGlyph.include(r270_xn$referglyph$1aao('mathO'), true, true);
            r335_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathOOutline'), r270_union(r270_VBar.m(r270_Middle, r270_PlusTop, r270_SymbolMid - r270_eqD, r270_eqS), r270_HBar.m(r270_SB + r270_eqS, r270_RightSB - r270_eqS, r270_SymbolMid - r270_eqD, r270_eqS))));
            return void 0;
        });
    });
    return void 0;
});
