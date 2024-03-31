'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/geometry/curve-util.mjs';
import * as _s0_t2 from '../../support/utils.mjs';
import * as _s0_t3 from '../../meta/aesthetics.mjs';
import * as _s0_t4 from '../../support/gr.mjs';
import * as _s0_t5 from '../../support/geometry/box.mjs';
import * as _s0_t6 from '../../support/geometry/point.mjs';
var _s0_t7;
export {
    _s0_t7 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_OffsetCurve = _r1_t9.OffsetCurve;
var r1_BezToContoursSink = _r1_t9.BezToContoursSink;
var r1_GEOMETRY_PRECISION = _r1_t9.GEOMETRY_PRECISION;
var _r1_t10 = _s0_t2;
var r1_mix = _r1_t10.mix;
var r1_linreg = _r1_t10.linreg;
var r1_clamp = _r1_t10.clamp;
var r1_fallback = _r1_t10.fallback;
var _r1_t11 = _s0_t3;
var r1_DesignParameters = _r1_t11.DesignParameters;
var _r1_t12 = _s0_t4;
var r1_ScheduleLeaningMark = _r1_t12.ScheduleLeaningMark;
var _r1_t13 = _s0_t5;
var r1_Box = _r1_t13.Box;
var _r1_t14 = _s0_t6;
var r1_Point = _r1_t14.Point;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t7 = r1_apply = function () {
    var r271_block, _r271_t4, _r271_t6;
    var _r271_t3 = this;
    var _r271_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r271_t1 = _r271_t0.length;
    var _r271_t2 = 0;
    var _r271_t5 = _r271_t2 < _r271_t1;
    while (_r271_t5) {
        _r271_t6 = (r271_block = _r271_t0[_r271_t2], r271_block(_r271_t3), _r271_t2 = _r271_t2 + 1);
        _r271_t5 = _r271_t2 < _r271_t1;
    }
    return _r271_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r275_xn$Capture_Ext$2Lrc2b) {
    var _r275_t0, _r275_t1;
    r275_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r275_xn$Capture_Ext$2Lrc2b, 'Mark-Above', function (r276_xn$Capture$2Lrc8, r276_xn$ExportCapture$2Lrc4b) {
        var r276_suffix, r276_DrawAt, r276_kdr, _r276_t11, _r276_t14, _r276_t17, _r276_t20, _r276_t21, _r276_t22, _r276_t23, _r276_tag24, _r276_t25, _r276_tag26, _r276_t27, _r276_tag28, _r276_t29, _r276_tag30, _r276_t31, _r276_tag32, _r276_t33, _r276_tag34;
        var _r276_t0 = r276_xn$Capture$2Lrc8;
        var r276_xn$createAndSaveGlyphImpl$2Lrc3c = _r276_t0['$createAndSaveGlyphImpl$'];
        var r276_xn$NamedParameterPair$2Lrc9b = _r276_t0['$NamedParameterPair$'];
        var r276_xn$Exec$2Lrc5 = _r276_t0['$Exec$'];
        var r276_para = _r276_t0.para;
        var r276_DivFrame = _r276_t0.DivFrame;
        var _r276_t1 = r276_xn$Capture$2Lrc8.Metrics;
        var r276_DesignParameters = _r276_t1.DesignParameters;
        var r276_UPM = _r276_t1.UPM;
        var r276_Width = _r276_t1.Width;
        var r276_SB = _r276_t1.SB;
        var r276_CAP = _r276_t1.CAP;
        var r276_XH = _r276_t1.XH;
        var r276_Descender = _r276_t1.Descender;
        var r276_SymbolMid = _r276_t1.SymbolMid;
        var r276_Translate = _r276_t1.Translate;
        var r276_ApparentTranslate = _r276_t1.ApparentTranslate;
        var r276_TanSlope = _r276_t1.TanSlope;
        var r276_HVContrast = _r276_t1.HVContrast;
        var r276_Upward = _r276_t1.Upward;
        var r276_Downward = _r276_t1.Downward;
        var r276_Rightward = _r276_t1.Rightward;
        var r276_Leftward = _r276_t1.Leftward;
        var r276_O = _r276_t1.O;
        var r276_OX = _r276_t1.OX;
        var r276_ArchDepth = _r276_t1.ArchDepth;
        var r276_Stroke = _r276_t1.Stroke;
        var r276_AccentStackOffset = _r276_t1.AccentStackOffset;
        var r276_AccentClearance = _r276_t1.AccentClearance;
        var r276_AccentHeight = _r276_t1.AccentHeight;
        var r276_WideWidth1 = _r276_t1.WideWidth1;
        var r276_HalfStroke = _r276_t1.HalfStroke;
        var r276_RightSB = _r276_t1.RightSB;
        var r276_Middle = _r276_t1.Middle;
        var r276_DotRadius = _r276_t1.DotRadius;
        var r276_ArchDepthA = _r276_t1.ArchDepthA;
        var r276_ArchDepthB = _r276_t1.ArchDepthB;
        var r276_AdviceStroke = _r276_t1.AdviceStroke;
        var r276_OperatorStroke = _r276_t1.OperatorStroke;
        var r276_StrokeWidthBlend = _r276_t1.StrokeWidthBlend;
        var r276_HSwToV = _r276_t1.HSwToV;
        var _r276_t2 = r276_xn$Capture$2Lrc8.SpiroFns;
        var r276_g4 = _r276_t2.g4;
        var r276_g2 = _r276_t2.g2;
        var r276_corner = _r276_t2.corner;
        var r276_flat = _r276_t2.flat;
        var r276_curl = _r276_t2.curl;
        var r276_end = _r276_t2.end;
        var r276_straight = _r276_t2.straight;
        var r276_widths = _r276_t2.widths;
        var r276_heading = _r276_t2.heading;
        var r276_alsoThru = _r276_t2.alsoThru;
        var r276_alsoThruThem = _r276_t2.alsoThruThem;
        var r276_quadControls = _r276_t2.quadControls;
        var r276_archv = _r276_t2.archv;
        var r276_arcvh = _r276_t2.arcvh;
        var r276_dispiro = _r276_t2.dispiro;
        var _r276_t3 = r276_xn$Capture$2Lrc8.BooleFns;
        var r276_union = _r276_t3.union;
        var r276_intersection = _r276_t3.intersection;
        var r276_difference = _r276_t3.difference;
        var _r276_t4 = r276_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r276_Rect = _r276_t4.Rect;
        var r276_Ring = _r276_t4.Ring;
        var r276_DotAt = _r276_t4.DotAt;
        var r276_HBar = _r276_t4.HBar;
        var r276_VBar = _r276_t4.VBar;
        var r276_FlipAround = _r276_t4.FlipAround;
        var r276_ScaleAround = _r276_t4.ScaleAround;
        var r276_ForceUpright = _r276_t4.ForceUpright;
        var r276_xn$withtransform$5sIl = _r276_t4['with-transform'];
        var r276_ExtLineLhs = _r276_t4.ExtLineLhs;
        var r276_MaskAbove = _r276_t4.MaskAbove;
        var r276_MaskBelow = _r276_t4.MaskBelow;
        var r276_MaskLeft = _r276_t4.MaskLeft;
        var r276_MaskRight = _r276_t4.MaskRight;
        var r276_DotVariants = _r276_t4.DotVariants;
        var _r276_t5 = r276_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r276_xn$selectvariant$7Hrq = _r276_t5['select-variant'];
        var r276_xn$referglyph$1aao = _r276_t5['refer-glyph'];
        var r276_alias = _r276_t5.alias;
        var r276_turned = _r276_t5.turned;
        var r276_xn$deriveglyphs$7Hrq = _r276_t5['derive-glyphs'];
        var r276_xn$derivecomposites$7Hrq = _r276_t5['derive-composites'];
        var _r276_t6 = r276_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r276_markExtend = _r276_t6.markExtend;
        var r276_markStroke = _r276_t6.markStroke;
        var r276_markHalfStroke = _r276_t6.markHalfStroke;
        var r276_markStress = _r276_t6.markStress;
        var r276_markFine = _r276_t6.markFine;
        var _r276_t7 = r276_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r276_asciiMarkZoomX = _r276_t7.asciiMarkZoomX;
        var r276_asciiMarkZoomY = _r276_t7.asciiMarkZoomY;
        var _r276_t8 = r276_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r276_markMiddle = _r276_t8.markMiddle;
        var r276_markDotsRadius = _r276_t8.markDotsRadius;
        var r276_dialytikaRadius = _r276_t8.dialytikaRadius;
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r283_t0, _r283_t1;
            return {
                'aboveMarkTop': r276_aboveMarkTop,
                'aboveMarkBot': r276_aboveMarkBot,
                'aboveMarkMid': r276_aboveMarkMid,
                'aboveMarkStack': r276_aboveMarkStack
            };
        });
        var r276_aboveMarkTop = r276_XH + r276_AccentClearance + r276_AccentHeight;
        var r276_aboveMarkBot = r276_XH + r276_AccentClearance;
        var r276_aboveMarkMid = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.5);
        var r276_aboveMarkStack = r276_XH + r276_AccentStackOffset;
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r285_t0, _r285_t1;
            return {
                'commaOvershoot': r276_commaOvershoot,
                'commaOvershoot2': r276_commaOvershoot2,
                'commaAboveRadius': r276_commaAboveRadius
            };
        });
        var r276_commaOvershoot = r276_O * r1_linreg(16, 0, 90, -1, r276_markStroke);
        var r276_commaOvershoot2 = r276_O * r1_linreg(16, 1, 90, -1, r276_markStroke);
        var r276_commaAboveRadius = 0.85 * r276_DotRadius * r276_markHalfStroke / r276_HalfStroke;
        var r276_StdAnchors = function () {
            var r288_impl, r288_narrow, r288_mediumNarrow, r288_medium, r288_mediumWide, r288_wide, r288_extraWide;
            var r288_exports = {};
            r288_exports.impl = r288_impl = function (r296_mk, r296_padding, r296_k, r296_fLeaning) {
                var _r296_t0, _r296_t1;
                return function () {
                    var _r298_t1;
                    var _r298_t0 = this;
                    var r298_currentGlyph = _r298_t0;
                    if (r296_mk === 'above')
                        r298_currentGlyph.setMarkAnchor(r296_mk, r276_markMiddle, r276_XH - r296_padding * r276_AccentHeight, r276_markMiddle, r276_aboveMarkStack + r296_padding * r276_AccentHeight);
                    else
                        r298_currentGlyph.setMarkAnchor(r296_mk, r276_markMiddle, r276_XH - r296_padding * r276_AccentHeight);
                    r298_currentGlyph.setBaseAnchor('aboveBraceL', r276_markMiddle - r296_k * r276_markExtend, r276_aboveMarkMid);
                    r298_currentGlyph.setBaseAnchor('aboveBraceR', r276_markMiddle + r296_k * r276_markExtend, r276_aboveMarkMid);
                    if (r296_fLeaning)
                        r1_ScheduleLeaningMark.set(r298_currentGlyph);
                    return void 0;
                };
            };
            r288_exports.narrow = r288_narrow = function () {
                var _r304_t0, _r304_t1;
                return r288_impl('above', 0, 0, true);
            };
            r288_exports.mediumNarrow = r288_mediumNarrow = function () {
                var _r306_t0, _r306_t1;
                return r288_impl('above', 0, 0.25, true);
            };
            r288_exports.medium = r288_medium = function () {
                var _r308_t0, _r308_t1;
                return r288_impl('above', 0, 0.5, true);
            };
            r288_exports.mediumWide = r288_mediumWide = function () {
                var _r310_t0, _r310_t1;
                return r288_impl('above', 0, 0.75);
            };
            r288_exports.wide = r288_wide = function () {
                var _r312_t0, _r312_t1;
                return r288_impl('above', 0, 1);
            };
            r288_exports.extraWide = r288_extraWide = function () {
                var _r314_t0, _r314_t1;
                return r288_impl('above', 0, 1.5);
            };
            return r288_exports;
        }();
        var _r276_t9 = Object.entries(r276_DotVariants)[Symbol.iterator]();
        var _r276_t10 = void 0;
        while (!(_r276_t10 = _r276_t9.next()).done) {
            _r276_t11 = _r276_t10.value;
            r276_suffix = _r276_t11[0];
            r276_DrawAt = _r276_t11[1][0];
            r276_kdr = _r276_t11[1][1];
            _r276_t11[1];
            (function () {
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dotAbove.' + r276_suffix, null, function () {
                    var _r320_t1;
                    var _r320_t0 = this;
                    var r320_currentGlyph = _r320_t0;
                    r320_currentGlyph.setWidth(0);
                    r320_currentGlyph.include(r276_StdAnchors.narrow());
                    r320_currentGlyph.include(r276_DrawAt(r276_markMiddle, r276_aboveMarkMid, r276_DotRadius * r276_kdr));
                    r1_ScheduleLeaningMark.set(r320_currentGlyph);
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dieresisAbove.' + r276_suffix, null, function () {
                    var _r326_t1;
                    var _r326_t0 = this;
                    var r326_currentGlyph = _r326_t0;
                    r326_currentGlyph.setWidth(0);
                    r326_currentGlyph.include(r276_StdAnchors.wide());
                    r326_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r326_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dieresisAboveAlwaysUpright.' + r276_suffix, null, function () {
                    var _r333_t1;
                    var _r333_t0 = this;
                    var r333_currentGlyph = _r333_t0;
                    r333_currentGlyph.setWidth(0);
                    r333_currentGlyph.include(r276_StdAnchors.wide());
                    r333_currentGlyph.include(r276_ForceUpright());
                    r333_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r333_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaAbove.' + r276_suffix, null, function () {
                    var _r341_t1;
                    var _r341_t0 = this;
                    var r341_currentGlyph = _r341_t0;
                    r341_currentGlyph.setWidth(0);
                    r341_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend * 1.25, r276_aboveMarkMid, r276_dialytikaRadius * r276_kdr));
                    r341_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend * 1.25, r276_aboveMarkMid, r276_dialytikaRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('tripleDotAbove.' + r276_suffix, null, function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    r347_currentGlyph.setWidth(0);
                    var r347_height = r276_markExtend * Math.sqrt(3);
                    r347_currentGlyph.setMarkAnchor('above', r276_markMiddle, r276_XH, r276_markMiddle, r276_aboveMarkStack + r347_height);
                    r347_currentGlyph.setBaseAnchor('aboveBraceL', r276_markMiddle - r276_markExtend, r276_aboveMarkMid + r347_height / 2);
                    r347_currentGlyph.setBaseAnchor('aboveBraceR', r276_markMiddle + r276_markExtend, r276_aboveMarkMid + r347_height / 2);
                    r347_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r347_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r347_currentGlyph.include(r276_DrawAt(r276_markMiddle, r276_aboveMarkMid + r347_height, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('elipsisAbove.' + r276_suffix, null, function () {
                    var _r357_t1;
                    var _r357_t0 = this;
                    var r357_currentGlyph = _r357_t0;
                    r357_currentGlyph.setWidth(0);
                    r357_currentGlyph.include(r276_StdAnchors.wide());
                    var r357_fine = Math.min(r276_markDotsRadius * r276_kdr, r276_markExtend * 0.375);
                    var r357_coFine = r276_markExtend * 1.5 - r357_fine;
                    r357_currentGlyph.include(r276_DrawAt(r276_markMiddle - r357_coFine, r276_aboveMarkMid, r357_fine));
                    r357_currentGlyph.include(r276_DrawAt(r276_markMiddle, r276_aboveMarkMid, r357_fine));
                    r357_currentGlyph.include(r276_DrawAt(r276_markMiddle + r357_coFine, r276_aboveMarkMid, r357_fine));
                    return void 0;
                });
                return r276_xn$createAndSaveGlyphImpl$2Lrc3c('fourDotsAbove.' + r276_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    r365_currentGlyph.setWidth(0);
                    r365_currentGlyph.include(r276_StdAnchors.extraWide());
                    var r365_fine = Math.min(r276_markDotsRadius * r276_kdr, r276_markExtend * 0.3125);
                    var r365_coFine = r276_markExtend * 2 - r365_fine;
                    r365_currentGlyph.include(r276_DrawAt(r276_markMiddle - r365_coFine, r276_aboveMarkMid, r365_fine));
                    r365_currentGlyph.include(r276_DrawAt(r276_markMiddle - r365_coFine / 3, r276_aboveMarkMid, r365_fine));
                    r365_currentGlyph.include(r276_DrawAt(r276_markMiddle + r365_coFine / 3, r276_aboveMarkMid, r365_fine));
                    r365_currentGlyph.include(r276_DrawAt(r276_markMiddle + r365_coFine, r276_aboveMarkMid, r365_fine));
                    return void 0;
                });
            }());
        }
        r276_xn$selectvariant$7Hrq('dotAbove', 775, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dieresisAbove', 776, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dieresisAboveAlwaysUpright', new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dialytikaAbove', new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('tripleDotAbove', 6836, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('elipsisAbove', 8411, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('fourDotsAbove', 8412, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r380_t0, _r380_t1;
            return {
                'RingDims': r276_RingDims,
                'RingShape': r276_RingShape
            };
        });
        var r276_RingDims = function (r381__radiusOut) {
            var _r381_t0, _r381_t1;
            var r381_radiusOut = r1_fallback(r381__radiusOut, r276_AccentHeight * r1_linreg(16, 0.5, 90, 0.75, r276_markStroke));
            var r381_radiusIn = r381_radiusOut - r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke);
            return {
                'radiusIn': r381_radiusIn,
                'radiusOut': r381_radiusOut
            };
        };
        var r276_RingShape = function (r382_cx, r382_cy, r382__radiusOut) {
            var _r382_t0, _r382_t1;
            return function () {
                var _r384_t2;
                var _r384_t1 = this;
                var r384_currentGlyph = _r384_t1;
                var _r384_t0 = r276_RingDims(r382__radiusOut);
                var r384_radiusIn = _r384_t0.radiusIn;
                var r384_radiusOut = _r384_t0.radiusOut;
                r384_currentGlyph.include(r276_difference(r276_DotAt(r382_cx, r382_cy, r384_radiusOut), r276_DotAt(r382_cx, r382_cy, r384_radiusIn)));
                return void 0;
            };
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('ringAbove', 778, function () {
            var _r388_t1;
            var _r388_t0 = this;
            var r388_currentGlyph = _r388_t0;
            r388_currentGlyph.setWidth(0);
            r388_currentGlyph.include(r276_StdAnchors.medium());
            r388_currentGlyph.include(r276_RingShape(r276_markMiddle, r276_aboveMarkMid));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblRingAbove', 6834, function () {
            var _r394_t2;
            var _r394_t1 = this;
            var r394_currentGlyph = _r394_t1;
            r394_currentGlyph.setWidth(0);
            var _r394_t0 = r276_RingDims();
            var r394_radiusIn = _r394_t0.radiusIn;
            var r394_radiusOut = _r394_t0.radiusOut;
            var r394_k = 2 * (r394_radiusOut - (r394_radiusOut - r394_radiusIn) * 0.25);
            r394_currentGlyph.include(r276_xn$withtransform$5sIl(r276_Translate(+r394_k / 2, 0), r276_xn$referglyph$1aao('ringAbove')));
            r394_currentGlyph.include(r276_xn$withtransform$5sIl(r276_Translate(-r394_k / 2, 0), r276_xn$referglyph$1aao('ringAbove')));
            r394_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        var _r276_t12 = Object.entries(r276_DotVariants)[Symbol.iterator]();
        var _r276_t13 = void 0;
        while (!(_r276_t13 = _r276_t12.next()).done) {
            _r276_t14 = _r276_t13.value;
            r276_suffix = _r276_t14[0];
            r276_DrawAt = _r276_t14[1][0];
            r276_kdr = _r276_t14[1][1];
            _r276_t14[1];
            (function () {
                return r276_xn$createAndSaveGlyphImpl$2Lrc3c('dieresisRingAbove.' + r276_suffix, null, function () {
                    var _r404_t1;
                    var _r404_t0 = this;
                    var r404_currentGlyph = _r404_t0;
                    r404_currentGlyph.setWidth(0);
                    r404_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
                    r404_currentGlyph.include(r276_RingShape(r276_markMiddle, r276_aboveMarkMid));
                    r404_currentGlyph.include(r276_DrawAt(r276_markMiddle + r276_markExtend * 1.7, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    r404_currentGlyph.include(r276_DrawAt(r276_markMiddle - r276_markExtend * 1.7, r276_aboveMarkMid, r276_markDotsRadius * r276_kdr));
                    return void 0;
                });
            }());
        }
        r276_xn$selectvariant$7Hrq('dieresisRingAbove', 6833, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('graveAbove', 768, function () {
            var _r413_t1;
            var _r413_t0 = this;
            var r413_currentGlyph = _r413_t0;
            r413_currentGlyph.setWidth(0);
            r413_currentGlyph.include(r276_StdAnchors.medium());
            r413_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle + r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r276_markFine)), r276_curl(r276_markMiddle - 0.875 * r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('asciiGrave/body/straight', null, function () {
            var _r419_t1;
            var _r419_t0 = this;
            var r419_currentGlyph = _r419_t0;
            var r419_df = r419_currentGlyph.include(r276_DivFrame(r276_para.diversityF));
            r419_currentGlyph.include(r276_dispiro(r276_flat(r419_df.middle + r276_HalfStroke * 1.1 * r276_asciiMarkZoomX * Math.sqrt(r419_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkBot, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 0.9)), r276_curl(r419_df.middle - r276_markExtend * r276_asciiMarkZoomX * Math.sqrt(r419_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 1.1))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('acuteAbove', 769, function () {
            var _r424_t1;
            var _r424_t0 = this;
            var r424_currentGlyph = _r424_t0;
            r424_currentGlyph.setWidth(0);
            r424_currentGlyph.include(r276_StdAnchors.medium());
            r424_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r276_markFine)), r276_curl(r276_markMiddle + 0.875 * r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('latin1acute', 180, function () {
            var _r430_t1;
            var _r430_t0 = this;
            var r430_currentGlyph = _r430_t0;
            var r430_df = r430_currentGlyph.include(r276_DivFrame(r276_para.diversityF));
            r430_currentGlyph.include(r276_dispiro(r276_flat(r430_df.middle - r276_HalfStroke * 1.1 * r276_asciiMarkZoomX * Math.sqrt(r430_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkBot, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 0.9)), r276_curl(r430_df.middle + r276_markExtend * r276_asciiMarkZoomX * Math.sqrt(r430_df.div), r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY), r276_widths.center(r276_Stroke * 1.1))));
            return void 0;
        });
        var r276_CaretCaronWidth = 2 * r276_markExtend + r276_markStress;
        var r276_CaretCaronMidSw = r276_StrokeWidthBlend(1.375, 1.25) * r276_markStroke;
        var r276_CaretCaronTerminalSw = r276_AdviceStroke(5);
        var r276_CaretLeftShape = function () {
            var _r433_t6;
            var _r433_t7 = arguments;
            var _r433_t0 = [].slice.call(_r433_t7, 0);
            var _r433_t1 = [];
            var _r433_t2 = 0;
            while (_r433_t2 < _r433_t0.length) {
                if (!(_r433_t0[_r433_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r433_t1.push(_r433_t0[_r433_t2]);
                _r433_t2 = _r433_t2 + 1;
            }
            var _r433_t3 = _r433_t0;
            var _r433_t4 = _r433_t3.length;
            var _r433_t5 = 0;
            while (_r433_t5 < _r433_t4) {
                _r433_t2 = _r433_t3[_r433_t5];
                if (_r433_t2 && _r433_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r433_t2.left === 'top')
                    r433_top = _r433_t2.right;
                if (_r433_t2 && _r433_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r433_t2.left === 'bottom')
                    r433_bottom = _r433_t2.right;
                if (_r433_t2 && _r433_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r433_t2.left === 'xMiddle')
                    r433_xMiddle = _r433_t2.right;
                if (_r433_t2 && _r433_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r433_t2.left === 'width')
                    r433_width = _r433_t2.right;
                if (_r433_t2 && _r433_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r433_t2.left === 'swEnd')
                    r433_swEnd = _r433_t2.right;
                if (_r433_t2 && _r433_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r433_t2.left === 'swMid')
                    r433_swMid = _r433_t2.right;
                _r433_t5 = _r433_t5 + 1;
            }
            var r433_top = r1_fallback(r433_top, _r433_t1[0]);
            var r433_bottom = r1_fallback(r433_bottom, _r433_t1[1]);
            var r433_xMiddle = r1_fallback(r433_xMiddle, _r433_t1[2]);
            var r433_width = r1_fallback(r433_width, _r433_t1[3]);
            var r433_swEnd = r1_fallback(r433_swEnd, _r433_t1[4]);
            var r433_swMid = r1_fallback(r433_swMid, _r433_t1[5]);
            return r276_dispiro(r276_flat(r433_xMiddle - 0.5 * r433_width, r433_bottom, r276_widths.center(r433_swEnd)), r276_curl(r433_xMiddle, r433_top, r276_widths.center.heading(r433_swMid, r276_Upward)));
        };
        var r276_CaretRightShape = function () {
            var _r438_t6;
            var _r438_t7 = arguments;
            var _r438_t0 = [].slice.call(_r438_t7, 0);
            var _r438_t1 = [];
            var _r438_t2 = 0;
            while (_r438_t2 < _r438_t0.length) {
                if (!(_r438_t0[_r438_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r438_t1.push(_r438_t0[_r438_t2]);
                _r438_t2 = _r438_t2 + 1;
            }
            var _r438_t3 = _r438_t0;
            var _r438_t4 = _r438_t3.length;
            var _r438_t5 = 0;
            while (_r438_t5 < _r438_t4) {
                _r438_t2 = _r438_t3[_r438_t5];
                if (_r438_t2 && _r438_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r438_t2.left === 'top')
                    r438_top = _r438_t2.right;
                if (_r438_t2 && _r438_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r438_t2.left === 'bottom')
                    r438_bottom = _r438_t2.right;
                if (_r438_t2 && _r438_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r438_t2.left === 'xMiddle')
                    r438_xMiddle = _r438_t2.right;
                if (_r438_t2 && _r438_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r438_t2.left === 'width')
                    r438_width = _r438_t2.right;
                if (_r438_t2 && _r438_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r438_t2.left === 'swEnd')
                    r438_swEnd = _r438_t2.right;
                if (_r438_t2 && _r438_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r438_t2.left === 'swMid')
                    r438_swMid = _r438_t2.right;
                _r438_t5 = _r438_t5 + 1;
            }
            var r438_top = r1_fallback(r438_top, _r438_t1[0]);
            var r438_bottom = r1_fallback(r438_bottom, _r438_t1[1]);
            var r438_xMiddle = r1_fallback(r438_xMiddle, _r438_t1[2]);
            var r438_width = r1_fallback(r438_width, _r438_t1[3]);
            var r438_swEnd = r1_fallback(r438_swEnd, _r438_t1[4]);
            var r438_swMid = r1_fallback(r438_swMid, _r438_t1[5]);
            return r276_dispiro(r276_flat(r438_xMiddle + 0.5 * r438_width, r438_bottom, r276_widths.center(r438_swEnd)), r276_curl(r438_xMiddle, r438_top, r276_widths.center.heading(r438_swMid, r276_Upward)));
        };
        var r276_CaretTopBarShape = function () {
            var _r443_t6;
            var _r443_t7 = arguments;
            var _r443_t0 = [].slice.call(_r443_t7, 0);
            var _r443_t1 = [];
            var _r443_t2 = 0;
            while (_r443_t2 < _r443_t0.length) {
                if (!(_r443_t0[_r443_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r443_t1.push(_r443_t0[_r443_t2]);
                _r443_t2 = _r443_t2 + 1;
            }
            var _r443_t3 = _r443_t0;
            var _r443_t4 = _r443_t3.length;
            var _r443_t5 = 0;
            while (_r443_t5 < _r443_t4) {
                _r443_t2 = _r443_t3[_r443_t5];
                if (_r443_t2 && _r443_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r443_t2.left === 'top')
                    r443_top = _r443_t2.right;
                if (_r443_t2 && _r443_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r443_t2.left === 'xMiddle')
                    r443_xMiddle = _r443_t2.right;
                if (_r443_t2 && _r443_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r443_t2.left === 'width')
                    r443_width = _r443_t2.right;
                if (_r443_t2 && _r443_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r443_t2.left === 'pL')
                    r443_pL = _r443_t2.right;
                if (_r443_t2 && _r443_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r443_t2.left === 'pR')
                    r443_pR = _r443_t2.right;
                if (_r443_t2 && _r443_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r443_t2.left === 'swMid')
                    r443_swMid = _r443_t2.right;
                if (_r443_t2 && _r443_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r443_t2.left === 'swBar')
                    r443_swBar = _r443_t2.right;
                _r443_t5 = _r443_t5 + 1;
            }
            var r443_top = r1_fallback(r443_top, _r443_t1[0]);
            var r443_xMiddle = r1_fallback(r443_xMiddle, _r443_t1[1]);
            var r443_width = r1_fallback(r443_width, _r443_t1[2]);
            var r443_pL = r1_fallback(r443_pL, _r443_t1[3]);
            var r443_pR = r1_fallback(r443_pR, _r443_t1[4]);
            var r443_swMid = r1_fallback(r443_swMid, _r443_t1[5]);
            var r443_swBar = r1_fallback(r443_swBar, _r443_t1[6]);
            return r276_dispiro(r276_widths.rhs(r443_swBar), r276_flat(Math.min(r443_xMiddle + 0.5 * r443_width * r443_pL, r443_xMiddle - r276_HSwToV(0.5 * r443_swMid)), r443_top), r276_curl(Math.max(r443_xMiddle + 0.5 * r443_width * r443_pR, r443_xMiddle + r276_HSwToV(0.5 * r443_swMid)), r443_top));
        };
        var r276_CaretShape = function () {
            var _r448_t6;
            var _r448_t7 = arguments;
            var _r448_t0 = [].slice.call(_r448_t7, 0);
            var _r448_t1 = [];
            var _r448_t2 = 0;
            while (_r448_t2 < _r448_t0.length) {
                if (!(_r448_t0[_r448_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r448_t1.push(_r448_t0[_r448_t2]);
                _r448_t2 = _r448_t2 + 1;
            }
            var _r448_t3 = _r448_t0;
            var _r448_t4 = _r448_t3.length;
            var _r448_t5 = 0;
            while (_r448_t5 < _r448_t4) {
                _r448_t2 = _r448_t3[_r448_t5];
                if (_r448_t2 && _r448_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r448_t2.left === 'top')
                    r448_top = _r448_t2.right;
                if (_r448_t2 && _r448_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r448_t2.left === 'bottom')
                    r448_bottom = _r448_t2.right;
                if (_r448_t2 && _r448_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r448_t2.left === 'xMiddle')
                    r448_xMiddle = _r448_t2.right;
                if (_r448_t2 && _r448_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r448_t2.left === 'width')
                    r448_width = _r448_t2.right;
                if (_r448_t2 && _r448_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r448_t2.left === 'swEnd')
                    r448_swEnd = _r448_t2.right;
                if (_r448_t2 && _r448_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r448_t2.left === 'swMid')
                    r448_swMid = _r448_t2.right;
                _r448_t5 = _r448_t5 + 1;
            }
            var r448_top = r1_fallback(r448_top, _r448_t1[0]);
            var r448_bottom = r1_fallback(r448_bottom, _r448_t1[1]);
            var r448_xMiddle = r1_fallback(r448_xMiddle, _r448_t1[2]);
            var r448_width = r1_fallback(r448_width, _r448_t1[3]);
            var r448_swEnd = r1_fallback(r448_swEnd, _r448_t1[4]);
            var r448_swMid = r1_fallback(r448_swMid, _r448_t1[5]);
            return r276_union(r276_CaretLeftShape(r448_top, r448_bottom, r448_xMiddle, r448_width, r448_swEnd, r448_swMid), r276_CaretRightShape(r448_top, r448_bottom, r448_xMiddle, r448_width, r448_swEnd, r448_swMid));
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('asciiCaret.high', null, function () {
            var _r455_t1;
            var _r455_t0 = this;
            var r455_currentGlyph = _r455_t0;
            r455_currentGlyph.include(r276_CaretShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_Middle), new r276_xn$NamedParameterPair$2Lrc9b('width', 3 * r276_markExtend * r276_asciiMarkZoomX - 0.25 * r276_Stroke), new r276_xn$NamedParameterPair$2Lrc9b('top', r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY) + 0.5 * r276_Stroke), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r1_mix(r276_aboveMarkMid, r276_aboveMarkBot, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_Stroke * 1.05), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_StrokeWidthBlend(1.25, 1) * r276_Stroke)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('circumflexAbove', 770, function () {
            var _r465_t1;
            var _r465_t0 = this;
            var r465_currentGlyph = _r465_t0;
            r465_currentGlyph.setWidth(0);
            r465_currentGlyph.include(r276_StdAnchors.medium());
            r465_currentGlyph.include(r276_CaretShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot + r276_markStress - r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('bardownAbove', 7622, function () {
            var _r477_t1;
            var _r477_t0 = this;
            var r477_currentGlyph = _r477_t0;
            r477_currentGlyph.setWidth(0);
            r477_currentGlyph.include(r276_StdAnchors.medium());
            r477_currentGlyph.include(r276_CaretRightShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot + r276_markStress - r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r477_currentGlyph.include(r276_CaretTopBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('pL', -1), new r276_xn$NamedParameterPair$2Lrc9b('pR', 0), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upbarAbove', 7623, function () {
            var _r497_t1;
            var _r497_t0 = this;
            var r497_currentGlyph = _r497_t0;
            r497_currentGlyph.setWidth(0);
            r497_currentGlyph.include(r276_StdAnchors.medium());
            r497_currentGlyph.include(r276_CaretLeftShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot + r276_markStress - r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r497_currentGlyph.include(r276_CaretTopBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop + r276_markFine * 0.7), new r276_xn$NamedParameterPair$2Lrc9b('pL', 0), new r276_xn$NamedParameterPair$2Lrc9b('pR', 1), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        var r276_CaronLeftShape = function () {
            var _r515_t6;
            var _r515_t7 = arguments;
            var _r515_t0 = [].slice.call(_r515_t7, 0);
            var _r515_t1 = [];
            var _r515_t2 = 0;
            while (_r515_t2 < _r515_t0.length) {
                if (!(_r515_t0[_r515_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r515_t1.push(_r515_t0[_r515_t2]);
                _r515_t2 = _r515_t2 + 1;
            }
            var _r515_t3 = _r515_t0;
            var _r515_t4 = _r515_t3.length;
            var _r515_t5 = 0;
            while (_r515_t5 < _r515_t4) {
                _r515_t2 = _r515_t3[_r515_t5];
                if (_r515_t2 && _r515_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r515_t2.left === 'top')
                    r515_top = _r515_t2.right;
                if (_r515_t2 && _r515_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r515_t2.left === 'bottom')
                    r515_bottom = _r515_t2.right;
                if (_r515_t2 && _r515_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r515_t2.left === 'xMiddle')
                    r515_xMiddle = _r515_t2.right;
                if (_r515_t2 && _r515_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r515_t2.left === 'width')
                    r515_width = _r515_t2.right;
                if (_r515_t2 && _r515_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r515_t2.left === 'swEnd')
                    r515_swEnd = _r515_t2.right;
                if (_r515_t2 && _r515_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r515_t2.left === 'swMid')
                    r515_swMid = _r515_t2.right;
                _r515_t5 = _r515_t5 + 1;
            }
            var r515_top = r1_fallback(r515_top, _r515_t1[0]);
            var r515_bottom = r1_fallback(r515_bottom, _r515_t1[1]);
            var r515_xMiddle = r1_fallback(r515_xMiddle, _r515_t1[2]);
            var r515_width = r1_fallback(r515_width, _r515_t1[3]);
            var r515_swEnd = r1_fallback(r515_swEnd, _r515_t1[4]);
            var r515_swMid = r1_fallback(r515_swMid, _r515_t1[5]);
            return r276_dispiro(r276_flat(r515_xMiddle - 0.5 * r515_width, r515_top, r276_widths.center(r515_swEnd)), r276_curl(r515_xMiddle, r515_bottom, r276_widths.center.heading(r515_swMid, r276_Downward)));
        };
        var r276_CaronRightShape = function () {
            var _r520_t6;
            var _r520_t7 = arguments;
            var _r520_t0 = [].slice.call(_r520_t7, 0);
            var _r520_t1 = [];
            var _r520_t2 = 0;
            while (_r520_t2 < _r520_t0.length) {
                if (!(_r520_t0[_r520_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r520_t1.push(_r520_t0[_r520_t2]);
                _r520_t2 = _r520_t2 + 1;
            }
            var _r520_t3 = _r520_t0;
            var _r520_t4 = _r520_t3.length;
            var _r520_t5 = 0;
            while (_r520_t5 < _r520_t4) {
                _r520_t2 = _r520_t3[_r520_t5];
                if (_r520_t2 && _r520_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'top')
                    r520_top = _r520_t2.right;
                if (_r520_t2 && _r520_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'bottom')
                    r520_bottom = _r520_t2.right;
                if (_r520_t2 && _r520_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'xMiddle')
                    r520_xMiddle = _r520_t2.right;
                if (_r520_t2 && _r520_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'width')
                    r520_width = _r520_t2.right;
                if (_r520_t2 && _r520_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'swEnd')
                    r520_swEnd = _r520_t2.right;
                if (_r520_t2 && _r520_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'swMid')
                    r520_swMid = _r520_t2.right;
                _r520_t5 = _r520_t5 + 1;
            }
            var r520_top = r1_fallback(r520_top, _r520_t1[0]);
            var r520_bottom = r1_fallback(r520_bottom, _r520_t1[1]);
            var r520_xMiddle = r1_fallback(r520_xMiddle, _r520_t1[2]);
            var r520_width = r1_fallback(r520_width, _r520_t1[3]);
            var r520_swEnd = r1_fallback(r520_swEnd, _r520_t1[4]);
            var r520_swMid = r1_fallback(r520_swMid, _r520_t1[5]);
            return r276_dispiro(r276_flat(r520_xMiddle + 0.5 * r520_width, r520_top, r276_widths.center(r520_swEnd)), r276_curl(r520_xMiddle, r520_bottom, r276_widths.center.heading(r520_swMid, r276_Downward)));
        };
        var r276_CaronBottomBarShape = function () {
            var _r525_t6;
            var _r525_t7 = arguments;
            var _r525_t0 = [].slice.call(_r525_t7, 0);
            var _r525_t1 = [];
            var _r525_t2 = 0;
            while (_r525_t2 < _r525_t0.length) {
                if (!(_r525_t0[_r525_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r525_t1.push(_r525_t0[_r525_t2]);
                _r525_t2 = _r525_t2 + 1;
            }
            var _r525_t3 = _r525_t0;
            var _r525_t4 = _r525_t3.length;
            var _r525_t5 = 0;
            while (_r525_t5 < _r525_t4) {
                _r525_t2 = _r525_t3[_r525_t5];
                if (_r525_t2 && _r525_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r525_t2.left === 'bottom')
                    r525_bottom = _r525_t2.right;
                if (_r525_t2 && _r525_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r525_t2.left === 'xMiddle')
                    r525_xMiddle = _r525_t2.right;
                if (_r525_t2 && _r525_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r525_t2.left === 'width')
                    r525_width = _r525_t2.right;
                if (_r525_t2 && _r525_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r525_t2.left === 'pL')
                    r525_pL = _r525_t2.right;
                if (_r525_t2 && _r525_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r525_t2.left === 'pR')
                    r525_pR = _r525_t2.right;
                if (_r525_t2 && _r525_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r525_t2.left === 'swMid')
                    r525_swMid = _r525_t2.right;
                if (_r525_t2 && _r525_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r525_t2.left === 'swBar')
                    r525_swBar = _r525_t2.right;
                _r525_t5 = _r525_t5 + 1;
            }
            var r525_bottom = r1_fallback(r525_bottom, _r525_t1[0]);
            var r525_xMiddle = r1_fallback(r525_xMiddle, _r525_t1[1]);
            var r525_width = r1_fallback(r525_width, _r525_t1[2]);
            var r525_pL = r1_fallback(r525_pL, _r525_t1[3]);
            var r525_pR = r1_fallback(r525_pR, _r525_t1[4]);
            var r525_swMid = r1_fallback(r525_swMid, _r525_t1[5]);
            var r525_swBar = r1_fallback(r525_swBar, _r525_t1[6]);
            return r276_dispiro(r276_widths.lhs(r525_swBar), r276_flat(Math.min(r525_xMiddle + 0.5 * r525_width * r525_pL, r525_xMiddle - r276_HSwToV(0.5 * r525_swMid)), r525_bottom), r276_curl(Math.max(r525_xMiddle + 0.5 * r525_width * r525_pR, r525_xMiddle + r276_HSwToV(0.5 * r525_swMid)), r525_bottom));
        };
        var r276_CaronShape = function () {
            var _r530_t6;
            var _r530_t7 = arguments;
            var _r530_t0 = [].slice.call(_r530_t7, 0);
            var _r530_t1 = [];
            var _r530_t2 = 0;
            while (_r530_t2 < _r530_t0.length) {
                if (!(_r530_t0[_r530_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r530_t1.push(_r530_t0[_r530_t2]);
                _r530_t2 = _r530_t2 + 1;
            }
            var _r530_t3 = _r530_t0;
            var _r530_t4 = _r530_t3.length;
            var _r530_t5 = 0;
            while (_r530_t5 < _r530_t4) {
                _r530_t2 = _r530_t3[_r530_t5];
                if (_r530_t2 && _r530_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r530_t2.left === 'top')
                    r530_top = _r530_t2.right;
                if (_r530_t2 && _r530_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r530_t2.left === 'bottom')
                    r530_bottom = _r530_t2.right;
                if (_r530_t2 && _r530_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r530_t2.left === 'xMiddle')
                    r530_xMiddle = _r530_t2.right;
                if (_r530_t2 && _r530_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r530_t2.left === 'width')
                    r530_width = _r530_t2.right;
                if (_r530_t2 && _r530_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r530_t2.left === 'swEnd')
                    r530_swEnd = _r530_t2.right;
                if (_r530_t2 && _r530_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r530_t2.left === 'swMid')
                    r530_swMid = _r530_t2.right;
                _r530_t5 = _r530_t5 + 1;
            }
            var r530_top = r1_fallback(r530_top, _r530_t1[0]);
            var r530_bottom = r1_fallback(r530_bottom, _r530_t1[1]);
            var r530_xMiddle = r1_fallback(r530_xMiddle, _r530_t1[2]);
            var r530_width = r1_fallback(r530_width, _r530_t1[3]);
            var r530_swEnd = r1_fallback(r530_swEnd, _r530_t1[4]);
            var r530_swMid = r1_fallback(r530_swMid, _r530_t1[5]);
            return r276_union(r276_CaronLeftShape(r530_top, r530_bottom, r530_xMiddle, r530_width, r530_swEnd, r530_swMid), r276_CaronRightShape(r530_top, r530_bottom, r530_xMiddle, r530_width, r530_swEnd, r530_swMid));
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('caronAbove', 780, function () {
            var _r537_t1;
            var _r537_t0 = this;
            var r537_currentGlyph = _r537_t0;
            r537_currentGlyph.setWidth(0);
            r537_currentGlyph.include(r276_StdAnchors.medium());
            r537_currentGlyph.include(r276_CaronShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop - r276_markStress + 1.7 * r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('barupAbove', 7620, function () {
            var _r549_t1;
            var _r549_t0 = this;
            var r549_currentGlyph = _r549_t0;
            r549_currentGlyph.setWidth(0);
            r549_currentGlyph.include(r276_StdAnchors.medium());
            r549_currentGlyph.include(r276_CaronRightShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop - r276_markStress + 1.7 * r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r549_currentGlyph.include(r276_CaronBottomBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('pL', -1), new r276_xn$NamedParameterPair$2Lrc9b('pR', 0), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('downbarAbove', 7621, function () {
            var _r569_t1;
            var _r569_t0 = this;
            var r569_currentGlyph = _r569_t0;
            r569_currentGlyph.setWidth(0);
            r569_currentGlyph.include(r276_StdAnchors.medium());
            r569_currentGlyph.include(r276_CaronLeftShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('top', r276_aboveMarkTop - r276_markStress + 1.7 * r276_markFine), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('swEnd', r276_CaretCaronTerminalSw), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw)));
            r569_currentGlyph.include(r276_CaronBottomBarShape(new r276_xn$NamedParameterPair$2Lrc9b('xMiddle', r276_markMiddle), new r276_xn$NamedParameterPair$2Lrc9b('width', r276_CaretCaronWidth), new r276_xn$NamedParameterPair$2Lrc9b('bottom', r276_aboveMarkBot), new r276_xn$NamedParameterPair$2Lrc9b('pL', 0), new r276_xn$NamedParameterPair$2Lrc9b('pR', 1), new r276_xn$NamedParameterPair$2Lrc9b('swMid', r276_CaretCaronMidSw), new r276_xn$NamedParameterPair$2Lrc9b('swBar', 2 * r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblCircumflexAbove', 6832, function () {
            var _r589_t1;
            var _r589_t0 = this;
            var r589_currentGlyph = _r589_t0;
            r589_currentGlyph.setWidth(0);
            r589_currentGlyph.include(r276_intersection(r276_MaskRight(r276_markMiddle), r276_xn$withtransform$5sIl(r276_Translate(+r276_markExtend, 0), r276_xn$referglyph$1aao('circumflexAbove'))));
            r589_currentGlyph.include(r276_intersection(r276_MaskLeft(r276_markMiddle), r276_xn$withtransform$5sIl(r276_Translate(-r276_markExtend, 0), r276_xn$referglyph$1aao('circumflexAbove'))));
            r589_currentGlyph.include(r276_StdAnchors.extraWide());
            return void 0;
        });
        var r276_TildeKnots = function () {
            var _r594_t6;
            var _r594_t7 = arguments;
            var _r594_t0 = [].slice.call(_r594_t7, 0);
            var _r594_t1 = [];
            var _r594_t2 = 0;
            while (_r594_t2 < _r594_t0.length) {
                if (!(_r594_t0[_r594_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r594_t1.push(_r594_t0[_r594_t2]);
                _r594_t2 = _r594_t2 + 1;
            }
            var _r594_t3 = _r594_t0;
            var _r594_t4 = _r594_t3.length;
            var _r594_t5 = 0;
            while (_r594_t5 < _r594_t4) {
                _r594_t2 = _r594_t3[_r594_t5];
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'ttop')
                    r594_ttop = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'tbot')
                    r594_tbot = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'leftEnd')
                    r594_leftEnd = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'rightEnd')
                    r594_rightEnd = _r594_t2.right;
                if (_r594_t2 && _r594_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r594_t2.left === 'hs')
                    r594_hs = _r594_t2.right;
                _r594_t5 = _r594_t5 + 1;
            }
            var r594_ttop = r1_fallback(r594_ttop, _r594_t1[0]);
            var r594_tbot = r1_fallback(r594_tbot, _r594_t1[1]);
            var r594_leftEnd = r1_fallback(r594_leftEnd, _r594_t1[2]);
            var r594_rightEnd = r1_fallback(r594_rightEnd, _r594_t1[3]);
            var r594_hs = r1_fallback(r594_hs, _r594_t1[4]);
            return function () {
                var _r600_t1;
                var _r600_t0 = this;
                var r600_currentGlyph = _r600_t0;
                var r600_fine = r594_hs * 8 / 9;
                var r600_hsvh = r594_hs * 2 / Math.abs(r594_ttop - r594_tbot);
                var r600_hvc = (r594_rightEnd - r594_leftEnd) / Math.abs(r594_ttop - r594_tbot);
                var r600_defaultHvc = r276_markExtend * 3 / (r276_aboveMarkTop - r276_aboveMarkBot - r276_markFine / 2);
                var r600_hsvhThin = 0.116;
                var r600_hsvhHeav = 0.732;
                var r600_tildeWave = r1_linreg(r600_hsvhThin, 2.925, r600_hsvhHeav, 2.375, r600_hsvh) * r1_linreg(r600_defaultHvc, 1, 4.35, 1.1, r600_hvc);
                var r600_tildeWaveX = 0.51;
                var r600_z1 = r600_currentGlyph.gizmo.apply({
                    'x': r594_leftEnd,
                    'y': r594_tbot
                });
                var r600_z2 = r600_currentGlyph.gizmo.apply({
                    'x': r1_mix(r594_leftEnd, r594_rightEnd, r600_tildeWaveX),
                    'y': r1_mix(r594_tbot, r594_ttop, r600_tildeWave)
                });
                var r600_z3 = r600_currentGlyph.gizmo.apply({
                    'x': r1_mix(r594_leftEnd, r594_rightEnd, 1 - r600_tildeWaveX),
                    'y': r1_mix(r594_tbot, r594_ttop, 1 - r600_tildeWave)
                });
                var r600_z4 = r600_currentGlyph.gizmo.apply({
                    'x': r594_rightEnd,
                    'y': r594_ttop
                });
                return [
                    r600_z1,
                    r600_z2,
                    r600_z3,
                    r600_z4
                ];
            };
        };
        r276_xn$ExportCapture$2Lrc4b(function () {
            var _r602_t0, _r602_t1;
            return { 'TildeShape': r276_TildeShape };
        });
        var r276_TildeShape = function () {
            var _r603_t6;
            var _r603_t7 = arguments;
            var _r603_t0 = [].slice.call(_r603_t7, 0);
            var _r603_t1 = [];
            var _r603_t2 = 0;
            while (_r603_t2 < _r603_t0.length) {
                if (!(_r603_t0[_r603_t2] instanceof r276_xn$NamedParameterPair$2Lrc9b))
                    _r603_t1.push(_r603_t0[_r603_t2]);
                _r603_t2 = _r603_t2 + 1;
            }
            var _r603_t3 = _r603_t0;
            var _r603_t4 = _r603_t3.length;
            var _r603_t5 = 0;
            while (_r603_t5 < _r603_t4) {
                _r603_t2 = _r603_t3[_r603_t5];
                if (_r603_t2 && _r603_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r603_t2.left === 'ttop')
                    r603_ttop = _r603_t2.right;
                if (_r603_t2 && _r603_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r603_t2.left === 'tbot')
                    r603_tbot = _r603_t2.right;
                if (_r603_t2 && _r603_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r603_t2.left === 'leftEnd')
                    r603_leftEnd = _r603_t2.right;
                if (_r603_t2 && _r603_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r603_t2.left === 'rightEnd')
                    r603_rightEnd = _r603_t2.right;
                if (_r603_t2 && _r603_t2 instanceof r276_xn$NamedParameterPair$2Lrc9b && _r603_t2.left === 'hs')
                    r603_hs = _r603_t2.right;
                _r603_t5 = _r603_t5 + 1;
            }
            var r603_ttop = r1_fallback(r603_ttop, _r603_t1[0]);
            var r603_tbot = r1_fallback(r603_tbot, _r603_t1[1]);
            var r603_leftEnd = r1_fallback(r603_leftEnd, _r603_t1[2]);
            var r603_rightEnd = r1_fallback(r603_rightEnd, _r603_t1[3]);
            var r603_hs = r1_fallback(r603_hs, _r603_t1[4]);
            return function () {
                var _r609_t2;
                var _r609_t1 = this;
                var r609_currentGlyph = _r609_t1;
                var _r609_t0 = r609_currentGlyph.include(r276_TildeKnots(r603_ttop, r603_tbot, r603_leftEnd, r603_rightEnd, r603_hs));
                var r609_z1 = _r609_t0[0];
                var r609_z2 = _r609_t0[1];
                var r609_z3 = _r609_t0[2];
                var r609_z4 = _r609_t0[3];
                var r609_bone = new r1_Arcs.Bez3(r609_z1, r609_z2, r609_z3, r609_z4);
                var r609_inner = new r1_OffsetCurve(r609_bone, +r603_hs, r276_HVContrast);
                var r609_outer = new r1_Arcs.Reverted(new r1_OffsetCurve(r609_bone, -r603_hs, r276_HVContrast));
                var r609_cs = new r1_BezToContoursSink();
                r1_ShapeConv.transferGenericShapeAsBezier([[
                        r609_inner,
                        r609_outer
                    ]], r609_cs, r1_GEOMETRY_PRECISION);
                r609_currentGlyph.includeContours(r609_cs.contours, 0, 0);
                return void 0;
            };
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tildeAbove', 771, function () {
            var _r613_t1;
            var _r613_t0 = this;
            var r613_currentGlyph = _r613_t0;
            r613_currentGlyph.setWidth(0);
            r613_currentGlyph.include(r276_StdAnchors.wide());
            r613_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r276_aboveMarkTop), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r276_aboveMarkBot + r276_markFine / 2), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_markMiddle - r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_markMiddle + r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_markHalfStroke)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('asciiTilde.high', null, function () {
            var _r624_t1;
            var _r624_t0 = this;
            var r624_currentGlyph = _r624_t0;
            r624_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r1_mix(r276_aboveMarkMid, r276_aboveMarkBot + r276_markFine / 2, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_SB), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_RightSB), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_OperatorStroke / 2)));
            return void 0;
        });
        (function () {
            var r633_FMosaicWide, r633_MosaicNameSuffix, r633_MosaicWidth, r633_MosaicWidthScalar, _r633_t3, _r633_t5, _r633_t6, _r633_tag7;
            var r633_WidthKinds = [
                [
                    0,
                    '.NWID',
                    r276_xn$Capture$2Lrc8.Metrics.Width,
                    1
                ],
                [
                    1,
                    '.WWID',
                    r276_xn$Capture$2Lrc8.Metrics.WideWidth0,
                    2
                ]
            ];
            var _r633_t0 = r633_WidthKinds;
            var _r633_t1 = _r633_t0.length;
            var _r633_t2 = 0;
            var _r633_t4 = _r633_t2 < _r633_t1;
            while (_r633_t4) {
                _r633_t3 = _r633_t0[_r633_t2];
                r633_FMosaicWide = _r633_t3[0];
                r633_MosaicNameSuffix = _r633_t3[1];
                r633_MosaicWidth = _r633_t3[2];
                r633_MosaicWidthScalar = _r633_t3[3];
                (function () {
                    var r636_MosaicDesiredWidth = r276_WideWidth1;
                    var r636_MosaicMiddle = r633_MosaicWidth / 2;
                    var r636_MosaicUnitWidth = r633_MosaicWidth / r633_MosaicWidthScalar;
                    var r636_MangleUnicode = function (r637_unicode, r637__desiredOverride) {
                        var _r637_t0, _r637_t1;
                        return r633_MosaicWidth === (r637__desiredOverride || r636_MosaicDesiredWidth) ? r637_unicode : void 0;
                    };
                    var r636_MangleName = function (r638_name) {
                        var _r638_t0, _r638_t1;
                        return r638_name + r633_MosaicNameSuffix;
                    };
                    var r636_emDashWidth = r276_para.isQuasiProportional && r633_MosaicWidthScalar > 1 ? r276_UPM : r633_MosaicWidth;
                    return r276_xn$createAndSaveGlyphImpl$2Lrc3c(r636_MangleName('swungDash.high'), null, function () {
                        var _r641_t1;
                        var _r641_t0 = this;
                        var r641_currentGlyph = _r641_t0;
                        r641_currentGlyph.setWidth(r636_emDashWidth);
                        r641_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r1_mix(r276_aboveMarkMid, r276_aboveMarkBot + r276_markFine / 2, r276_asciiMarkZoomY)), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_SB), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r636_emDashWidth - r276_SB), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_OperatorStroke / 2)));
                        return void 0;
                    });
                }());
                _r633_t5 = _r633_t2 = _r633_t2 + 1;
                _r633_t4 = _r633_t2 < _r633_t1;
            }
            return _r633_t5;
        }());
        var r276_OverlayTildeT = function (r649_sink) {
            var _r649_t0, _r649_t1;
            var r649_t = r1_mix(r276_aboveMarkMid, r276_aboveMarkTop, r276_asciiMarkZoomY);
            var r649_b = r1_mix(r276_aboveMarkMid, r276_aboveMarkBot + r276_markFine / 2, r276_asciiMarkZoomY);
            var r649_offset = r276_SymbolMid - r1_mix(r649_t, r649_b, 1 / 2);
            return r649_sink(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r649_t + r649_offset), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r649_b + r649_offset), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r1_mix(0, r276_SB, 1 / 3)), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r1_mix(r276_Width, r276_RightSB, 1 / 3)), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_AdviceStroke(4) / 2));
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('overlayTildeOperator', null, function () {
            var _r657_t1;
            var _r657_t0 = this;
            var r657_currentGlyph = _r657_t0;
            r657_currentGlyph.include(r276_OverlayTildeT(r276_TildeShape));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('overlayTildeOperatorAboveMask', null, function () {
            var _r661_t2;
            var _r661_t1 = this;
            var r661_currentGlyph = _r661_t1;
            var r661_FarRight = r276_Width * 4;
            var r661_FarLeft = -r276_Width * 3;
            var r661_FarAbove = r276_CAP * 4;
            var _r661_t0 = r661_currentGlyph.include(r276_OverlayTildeT(r276_TildeKnots));
            var r661_z1 = _r661_t0[0];
            var r661_z2 = _r661_t0[1];
            var r661_z3 = _r661_t0[2];
            var r661_z4 = _r661_t0[3];
            var r661_arcs = [[
                    new r1_Arcs.Bez3(r661_z1, r661_z2, r661_z3, r661_z4),
                    new r1_Arcs.StraightSegment(r661_z4, r1_Point.withX(r661_z4, r661_FarRight)),
                    new r1_Arcs.StraightSegment(r1_Point.withX(r661_z4, r661_FarRight), r1_Point.corner(r661_FarRight, r661_FarAbove)),
                    new r1_Arcs.StraightSegment(r1_Point.corner(r661_FarRight, r661_FarAbove), r1_Point.corner(r661_FarLeft, r661_FarAbove)),
                    new r1_Arcs.StraightSegment(r1_Point.corner(r661_FarLeft, r661_FarAbove), r1_Point.withX(r661_z1, r661_FarLeft)),
                    new r1_Arcs.StraightSegment(r1_Point.withX(r661_z1, r661_FarLeft), r661_z1)
                ]];
            var r661_cs = new r1_BezToContoursSink();
            r1_ShapeConv.transferGenericShapeAsBezier(r661_arcs, r661_cs, r1_GEOMETRY_PRECISION);
            r661_currentGlyph.includeContours(r661_cs.contours, 0, 0);
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('.WF.font-src/glyphs/marks/above.ptl.1', null, function () {
            var r665_suffix, r665_DrawAt, r665_kdr, _r665_t2, _r665_t4, _r665_t5, _r665_tag6;
            var _r665_t3 = this;
            var r665_currentGlyph = _r665_t3;
            r665_currentGlyph.setWidth(0);
            r665_currentGlyph.include(r276_StdAnchors.wide());
            var r665_m = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.4);
            var r665_ttop = r1_mix(r665_m, r276_aboveMarkTop, 0.7);
            var r665_tbot = r1_mix(r665_m, r276_aboveMarkBot + r276_markFine / 2, 0.7);
            var r665_fine = r276_AdviceStroke(4.5) / 2;
            r665_currentGlyph.include(r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r665_ttop), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r665_tbot), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_markMiddle - r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_markMiddle + r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('hs', r665_fine)));
            r276_xn$createAndSaveGlyphImpl$2Lrc3c('tildeSlashAbove', 842, function () {
                var _r675_t1;
                var _r675_t0 = this;
                _r675_t0.include(r665_currentGlyph, true, true);
                _r675_t0.cloneRankFromGlyph(r665_currentGlyph);
                return _r675_t0.include(function () {
                    var _r677_t1;
                    var _r677_t0 = this;
                    var r677_currentGlyph = _r677_t0;
                    r677_currentGlyph.include(r276_dispiro(r276_widths.center(r665_fine * 2), r276_flat(r276_markMiddle + r276_markExtend * 0.2, r1_mix(r665_tbot, r665_ttop, 1.5)), r276_curl(r276_markMiddle - r276_markExtend * 0.2, r1_mix(r665_ttop, r665_tbot, 1.5))));
                    return void 0;
                });
            });
            var _r665_t0 = Object.entries(r276_DotVariants)[Symbol.iterator]();
            var _r665_t1 = void 0;
            while (!(_r665_t1 = _r665_t0.next()).done) {
                _r665_t2 = _r665_t1.value;
                r665_suffix = _r665_t2[0];
                r665_DrawAt = _r665_t2[1][0];
                r665_kdr = _r665_t2[1][1];
                _r665_t2[1];
                (function () {
                    return r276_xn$createAndSaveGlyphImpl$2Lrc3c('tildedotdotAbove.' + r665_suffix, null, function () {
                        var _r684_t1;
                        var _r684_t0 = this;
                        _r684_t0.include(r665_currentGlyph, true, true);
                        _r684_t0.cloneRankFromGlyph(r665_currentGlyph);
                        return _r684_t0.include(function () {
                            var _r686_t1;
                            var _r686_t0 = this;
                            var r686_currentGlyph = _r686_t0;
                            r686_currentGlyph.include(r276_StdAnchors.impl('above', 1 / 4, 1));
                            var r686_r = 0.75 * r276_DotRadius * r665_fine / r276_HalfStroke;
                            r686_currentGlyph.include(r665_DrawAt(r276_markMiddle, r1_mix(r665_tbot, r665_ttop, 1.5), r686_r * r665_kdr));
                            r686_currentGlyph.include(r665_DrawAt(r276_markMiddle, r1_mix(r665_ttop, r665_tbot, 1.5), r686_r * r665_kdr));
                            return void 0;
                        });
                    });
                }());
            }
            return void 0;
        });
        r276_xn$selectvariant$7Hrq('tildedotdotAbove', 843, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblTildeAbove', 844, function () {
            var _r693_t1;
            var _r693_t0 = this;
            var r693_currentGlyph = _r693_t0;
            r693_currentGlyph.setWidth(0);
            r693_currentGlyph.include(r276_StdAnchors.impl('above', 1 / 4, 1));
            var r693_m = r276_aboveMarkBot;
            var r693_ttop = r1_mix(r693_m, r276_aboveMarkTop, 0.7);
            var r693_tbot = r1_mix(r693_m, r276_aboveMarkBot + r276_markFine / 2, 0.7);
            var r693_addTilde = function () {
                var _r696_t0, _r696_t1;
                return r276_TildeShape(new r276_xn$NamedParameterPair$2Lrc9b('ttop', r693_ttop), new r276_xn$NamedParameterPair$2Lrc9b('tbot', r693_tbot), new r276_xn$NamedParameterPair$2Lrc9b('leftEnd', r276_markMiddle - r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('rightEnd', r276_markMiddle + r276_markExtend * 1.5), new r276_xn$NamedParameterPair$2Lrc9b('hs', r276_AdviceStroke(4.5) / 2));
            };
            var r693_shift = (r693_ttop - r693_tbot) * 1.2;
            r693_currentGlyph.include(r693_addTilde());
            r693_currentGlyph.include(r276_ApparentTranslate(0, r693_shift));
            r693_currentGlyph.include(r693_addTilde());
            r693_currentGlyph.include(r276_ApparentTranslate(0, -0.5 * r693_shift));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('macronAbove', 772, function () {
            var _r708_t1;
            var _r708_t0 = this;
            var r708_currentGlyph = _r708_t0;
            r708_currentGlyph.setWidth(0);
            r708_currentGlyph.include(r276_StdAnchors.wide());
            var r708_leftEnd = r276_markMiddle - r276_markExtend * 1.5;
            var r708_rightEnd = r276_markMiddle + r276_markExtend * 1.5;
            r708_currentGlyph.include(r276_dispiro(r276_flat(r708_leftEnd, r276_aboveMarkMid, r276_widths.center(2 * r276_markHalfStroke)), r276_curl(r708_rightEnd, r276_aboveMarkMid)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('overlineAbove', 773, function () {
            var _r714_t1;
            var _r714_t0 = this;
            var r714_currentGlyph = _r714_t0;
            r714_currentGlyph.setWidth(0);
            r714_currentGlyph.include(r276_StdAnchors.impl('above', 0, 2));
            r714_currentGlyph.include(r276_dispiro(r276_flat(0 - r276_Width, r276_aboveMarkMid, r276_widths.center(2 * r276_markHalfStroke)), r276_curl(0, r276_aboveMarkMid)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('sbRsbOverlineAbove', null, function () {
            var _r720_t1;
            var _r720_t0 = this;
            var r720_currentGlyph = _r720_t0;
            r720_currentGlyph.setWidth(0);
            r720_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
            r720_currentGlyph.include(r276_dispiro(r276_flat(r276_SB - r276_Width, r276_aboveMarkMid, r276_widths.center(2 * r276_markHalfStroke)), r276_curl(r276_RightSB - r276_Width, r276_aboveMarkMid)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblOverlineAbove', 831, function () {
            var _r726_t1;
            var _r726_t0 = this;
            var r726_currentGlyph = _r726_t0;
            r726_currentGlyph.setWidth(0);
            r726_currentGlyph.include(r276_StdAnchors.impl('above', 0, 2));
            var r726_boxsw = Math.min(r276_markFine * 2, (r276_aboveMarkTop - r276_aboveMarkBot) / 3);
            r726_currentGlyph.include(r276_dispiro(r276_widths.lhs(r726_boxsw), r276_flat(0 - r276_Width, r276_aboveMarkBot), r276_curl(0, r276_aboveMarkBot)));
            r726_currentGlyph.include(r276_dispiro(r276_widths.rhs(r726_boxsw), r276_flat(0 - r276_Width, r276_aboveMarkTop), r276_curl(0, r276_aboveMarkTop)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('breveAbove', 774, function () {
            var _r733_t1;
            var _r733_t0 = this;
            var r733_currentGlyph = _r733_t0;
            r733_currentGlyph.setWidth(0);
            r733_currentGlyph.include(r276_StdAnchors.wide());
            var r733_leftEnd = r276_markMiddle - r276_markExtend * 1.2;
            var r733_rightEnd = r276_markMiddle + r276_markExtend * 1.2;
            r733_currentGlyph.include(r276_dispiro(r276_g4.down.start(r733_leftEnd, r276_aboveMarkTop, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Downward)), r276_arcvh(), r276_g4.right.mid(r276_markMiddle, r276_aboveMarkBot + r276_markHalfStroke, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.end(r733_rightEnd, r276_aboveMarkTop, r276_heading(r276_Upward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('archAbove', 785, function () {
            var _r739_t1;
            var _r739_t0 = this;
            var r739_currentGlyph = _r739_t0;
            r739_currentGlyph.setWidth(0);
            r739_currentGlyph.include(r276_StdAnchors.wide());
            var r739_leftEnd = r276_markMiddle - r276_markExtend * 1.2;
            var r739_rightEnd = r276_markMiddle + r276_markExtend * 1.2;
            r739_currentGlyph.include(r276_dispiro(r276_g4.up.start(r739_leftEnd, r276_aboveMarkBot, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Upward)), r276_arcvh(), r276_g4.right.mid(r276_markMiddle, r276_aboveMarkTop - r276_markHalfStroke, r276_heading(r276_Rightward)), r276_archv(), r276_g4.down.end(r739_rightEnd, r276_aboveMarkBot, r276_heading(r276_Downward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('hookAbove', 777, function () {
            var _r745_t1;
            var _r745_t0 = this;
            var r745_currentGlyph = _r745_t0;
            r745_currentGlyph.setWidth(0);
            r745_currentGlyph.include(r276_StdAnchors.medium());
            var r745_fine = Math.min(r276_markFine, (r276_aboveMarkTop - r276_aboveMarkBot) * 0.2);
            var r745_hookBot = r276_aboveMarkBot - r745_fine / 2;
            var r745_hookTop = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.9) + r745_fine / 2;
            r745_currentGlyph.include(r276_dispiro(r276_widths.lhs(r745_fine * 2), r276_flat(r276_markMiddle - r276_HSwToV(r745_fine), r745_hookBot, r276_heading(r276_Rightward)), r276_curl(r276_markMiddle + r745_fine * 0.4, r745_hookBot, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.mid(r276_markMiddle + r276_markExtend - r276_O, r1_mix(r745_hookBot, r745_hookTop, r276_ArchDepthB / (r276_ArchDepthB + r276_ArchDepthA)), r276_heading(r276_Upward)), r276_arcvh(), r276_flat(r276_markMiddle + r745_fine * 0.4, r745_hookTop, r276_heading(r276_Leftward)), r276_curl(r276_markMiddle - r276_markExtend + r745_fine, r745_hookTop, r276_heading(r276_Leftward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('doubleGraveAbove', 783, function () {
            var _r751_t1;
            var _r751_t0 = this;
            var r751_currentGlyph = _r751_t0;
            r751_currentGlyph.setWidth(0);
            r751_currentGlyph.include(r276_StdAnchors.wide());
            var r751_m1 = r276_markMiddle - r276_markExtend * 0.85;
            var r751_m2 = r276_markMiddle + r276_markExtend * 0.85;
            r751_currentGlyph.include(r276_dispiro(r276_flat(r751_m1 + r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r276_markFine)), r276_curl(r751_m1 - r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r276_markStress))));
            r751_currentGlyph.include(r276_dispiro(r276_flat(r751_m2 + r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r276_markFine)), r276_curl(r751_m2 - r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('doubleAcuteAbove', 779, function () {
            var _r758_t1;
            var _r758_t0 = this;
            var r758_currentGlyph = _r758_t0;
            r758_currentGlyph.setWidth(0);
            r758_currentGlyph.include(r276_StdAnchors.wide());
            var r758_m1 = r276_markMiddle - r276_markExtend * 0.85;
            var r758_m2 = r276_markMiddle + r276_markExtend * 0.85;
            r758_currentGlyph.include(r276_dispiro(r276_flat(r758_m1 - r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r276_markFine)), r276_curl(r758_m1 + r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r276_markStress))));
            r758_currentGlyph.include(r276_dispiro(r276_flat(r758_m2 - r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r276_markFine)), r276_curl(r758_m2 + r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tripleAcuteAbove', 6859, function () {
            var _r765_t1;
            var _r765_t0 = this;
            var r765_currentGlyph = _r765_t0;
            r765_currentGlyph.setWidth(0);
            r765_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
            var r765_fine = 0.5 * r276_AdviceStroke(6);
            var r765_stress = 1.2 * r765_fine;
            var r765_m1 = r276_markMiddle - r276_markExtend * 1.275;
            var r765_m2 = r276_markMiddle;
            var r765_m3 = r276_markMiddle + r276_markExtend * 1.275;
            r765_currentGlyph.include(r276_dispiro(r276_flat(r765_m1 - r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r765_fine)), r276_curl(r765_m1 + r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r765_stress))));
            r765_currentGlyph.include(r276_dispiro(r276_flat(r765_m2 - r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r765_fine)), r276_curl(r765_m2 + r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r765_stress))));
            r765_currentGlyph.include(r276_dispiro(r276_flat(r765_m3 - r276_markStress, r276_aboveMarkBot, r276_widths.center(2 * r765_fine)), r276_curl(r765_m3 + r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r765_stress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('commaAbove.round', null, function () {
            var _r773_t1;
            var _r773_t0 = this;
            var r773_currentGlyph = _r773_t0;
            r773_currentGlyph.setWidth(0);
            r773_currentGlyph.include(r276_StdAnchors.narrow());
            var r773_radius = r276_commaAboveRadius;
            r773_currentGlyph.include(r276_Ring(r276_aboveMarkTop + r276_commaOvershoot, r276_aboveMarkTop - r773_radius * 2 + r276_commaOvershoot, r276_markMiddle - r773_radius, r276_markMiddle + r773_radius));
            r773_currentGlyph.include(r276_dispiro(r276_widths.rhs(Math.min(r773_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_straight.down.start(r276_markMiddle + r773_radius, r276_aboveMarkTop - r773_radius + r276_commaOvershoot), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle - r773_radius, 0.2), r276_aboveMarkBot - r773_radius - r276_commaOvershoot2)));
            r773_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('commaAbove.square', null, function () {
            var _r781_t1;
            var _r781_t0 = this;
            var r781_currentGlyph = _r781_t0;
            r781_currentGlyph.setWidth(0);
            r781_currentGlyph.include(r276_StdAnchors.narrow());
            var r781_radius = r276_commaAboveRadius * r276_DesignParameters.squareDotScalar;
            r781_currentGlyph.include(r276_Rect(r276_aboveMarkTop, r276_aboveMarkTop - r781_radius * 2, r276_markMiddle - r781_radius, r276_markMiddle + r781_radius));
            r781_currentGlyph.include(r276_dispiro(r276_widths.rhs(Math.min(r781_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_flat(r276_markMiddle + r781_radius, r276_aboveMarkTop, r276_heading(r276_Downward)), r276_curl(r276_markMiddle + r781_radius, r276_aboveMarkTop - 2 * r781_radius, r276_heading(r276_Downward)), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle - r781_radius, 0.2), r276_aboveMarkBot - r781_radius - r276_commaOvershoot2)));
            r781_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$selectvariant$7Hrq('commaAbove', 787, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('commaAbove/asPunctuation', new r276_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'commaAbove'), new r276_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        r276_xn$deriveglyphs$7Hrq('commaGrekUpperTonos', null, 'commaAbove', function (r790_src, r790_gr) {
            var _r790_t0, _r790_t1;
            return function () {
                var _r792_t1;
                var _r792_t0 = this;
                var r792_currentGlyph = _r792_t0;
                r792_currentGlyph.setWidth(0);
                r792_currentGlyph.include(r276_xn$referglyph$1aao(r790_src));
                r792_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
                return void 0;
            };
        });
        r276_xn$deriveglyphs$7Hrq('turnCommaAbove', 786, 'commaAbove', function (r796_src, r796_gr) {
            var _r796_t0, _r796_t1;
            return function () {
                var _r798_t1;
                var _r798_t0 = this;
                var r798_currentGlyph = _r798_t0;
                r798_currentGlyph.setWidth(0);
                r798_currentGlyph.include(r276_xn$referglyph$1aao(r796_src));
                r798_currentGlyph.include(r276_FlipAround(r276_markMiddle, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot - r276_commaAboveRadius, 0.5) + r276_DotRadius * 0.3 + r276_commaOvershoot / 2));
                r798_currentGlyph.include(r276_StdAnchors.narrow());
                return void 0;
            };
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('revCommaAbove.round', null, function () {
            var _r805_t1;
            var _r805_t0 = this;
            var r805_currentGlyph = _r805_t0;
            r805_currentGlyph.setWidth(0);
            r805_currentGlyph.include(r276_StdAnchors.narrow());
            var r805_radius = r276_commaAboveRadius;
            r805_currentGlyph.include(r276_Ring(r276_aboveMarkTop + r276_commaOvershoot, r276_aboveMarkTop - r805_radius * 2 + r276_commaOvershoot, r276_markMiddle - r805_radius, r276_markMiddle + r805_radius));
            r805_currentGlyph.include(r276_dispiro(r276_widths.lhs(Math.min(r805_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_straight.down.start(r276_markMiddle - r805_radius, r276_aboveMarkTop - r805_radius + r276_commaOvershoot), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle + r805_radius, 0.2), r276_aboveMarkBot - r805_radius - r276_commaOvershoot2)));
            r805_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('revCommaAbove.square', null, function () {
            var _r813_t1;
            var _r813_t0 = this;
            var r813_currentGlyph = _r813_t0;
            r813_currentGlyph.setWidth(0);
            r813_currentGlyph.include(r276_StdAnchors.narrow());
            var r813_radius = r276_commaAboveRadius * r276_DesignParameters.squareDotScalar;
            r813_currentGlyph.include(r276_Rect(r276_aboveMarkTop + r276_commaOvershoot, r276_aboveMarkTop - r813_radius * 2 + r276_commaOvershoot, r276_markMiddle - r813_radius, r276_markMiddle + r813_radius));
            r813_currentGlyph.include(r276_dispiro(r276_widths.lhs(Math.min(r813_radius, r276_markFine * r1_linreg(16, 2, 90, 1.75, r276_markStroke))), r276_flat(r276_markMiddle - r813_radius, r276_aboveMarkTop, r276_heading(r276_Downward)), r276_curl(r276_markMiddle - r813_radius, r276_aboveMarkTop - 2 * r813_radius, r276_heading(r276_Downward)), r276_quadControls(0, 0.6), r276_g4(r1_mix(r276_markMiddle, r276_markMiddle + r813_radius, 0.2), r276_aboveMarkBot - r813_radius - r276_commaOvershoot2)));
            r813_currentGlyph.include(r276_ApparentTranslate(0, r276_DotRadius * 0.3));
            return void 0;
        });
        r276_xn$selectvariant$7Hrq('revCommaAbove', 788, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$deriveglyphs$7Hrq('revCommaGrekUpperTonos', null, 'revCommaAbove', function (r820_src, r820_gr) {
            var _r820_t0, _r820_t1;
            return function () {
                var _r822_t1;
                var _r822_t0 = this;
                var r822_currentGlyph = _r822_t0;
                r822_currentGlyph.setWidth(0);
                r822_currentGlyph.include(r276_xn$referglyph$1aao(r820_src));
                r822_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
                return void 0;
            };
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('barAbove', 781, function () {
            var _r828_t1;
            var _r828_t0 = this;
            var r828_currentGlyph = _r828_t0;
            r828_currentGlyph.setWidth(0);
            r828_currentGlyph.include(r276_StdAnchors.narrow());
            r828_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markStroke));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('ascenderBarAbove', null, function () {
            var _r834_t1;
            var _r834_t0 = this;
            var r834_currentGlyph = _r834_t0;
            r834_currentGlyph.setWidth(0);
            r834_currentGlyph.include(r276_StdAnchors.narrow());
            r834_currentGlyph.include(r276_VBar.m(r276_markMiddle, r1_mix(r276_XH, r276_aboveMarkBot, 0.5), r276_CAP, r276_markStroke));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblBarAbove', 782, function () {
            var _r840_t1;
            var _r840_t0 = this;
            var r840_currentGlyph = _r840_t0;
            r840_currentGlyph.setWidth(0);
            r840_currentGlyph.include(r276_StdAnchors.mediumWide());
            r840_currentGlyph.include(r276_VBar.m(r276_markMiddle - r276_markExtend * 0.75, r276_aboveMarkBot, r276_aboveMarkTop, r276_markStroke));
            r840_currentGlyph.include(r276_VBar.m(r276_markMiddle + r276_markExtend * 0.75, r276_aboveMarkBot, r276_aboveMarkTop, r276_markStroke));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('bridgeAbove', 838, function () {
            var _r847_t1;
            var _r847_t0 = this;
            var r847_currentGlyph = _r847_t0;
            r847_currentGlyph.setWidth(0);
            r847_currentGlyph.include(r276_StdAnchors.wide());
            r847_currentGlyph.include(r276_VBar.m(r276_markMiddle - r276_markExtend, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r847_currentGlyph.include(r276_VBar.m(r276_markMiddle + r276_markExtend, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r847_currentGlyph.include(r276_HBar.t(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkTop, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('wideBridgeAbove', 8425, function () {
            var _r855_t1;
            var _r855_t0 = this;
            var r855_currentGlyph = _r855_t0;
            r855_currentGlyph.setWidth(0);
            r855_currentGlyph.include(r276_StdAnchors.impl('above', 0, 1.5));
            r855_currentGlyph.include(r276_VBar.m(r276_SB - r276_Width, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r855_currentGlyph.include(r276_VBar.m(r276_RightSB - r276_Width, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r855_currentGlyph.include(r276_HBar.t(r276_SB - r276_Width, r276_RightSB - r276_Width, r276_aboveMarkTop, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('yerikAbove', 830, function () {
            var _r863_t1;
            var _r863_t0 = this;
            var r863_currentGlyph = _r863_t0;
            r863_currentGlyph.setWidth(0);
            r863_currentGlyph.include(r276_StdAnchors.narrow());
            r863_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_g2(r276_markMiddle - r276_markFine * 0.5, r276_aboveMarkBot, r276_heading(r276_Upward)), r276_alsoThruThem([
                [
                    0.9,
                    0.36
                ],
                [
                    0.1,
                    0.64
                ]
            ], r276_heading(r276_Upward)), r276_g2(r276_markMiddle + r276_markFine * 0.5, r276_aboveMarkTop, r276_heading(r276_Upward))));
            return void 0;
        });
        var _r276_t15 = Object.entries(r276_DotVariants)[Symbol.iterator]();
        var _r276_t16 = void 0;
        while (!(_r276_t16 = _r276_t15.next()).done) {
            _r276_t17 = _r276_t16.value;
            r276_suffix = _r276_t17[0];
            r276_DrawAt = _r276_t17[1][0];
            r276_kdr = _r276_t17[1][1];
            _r276_t17[1];
            (function () {
                return r276_xn$createAndSaveGlyphImpl$2Lrc3c('candrabinduAbove.' + r276_suffix, null, function () {
                    var _r872_t1;
                    var _r872_t0 = this;
                    var r872_currentGlyph = _r872_t0;
                    r872_currentGlyph.setWidth(0);
                    var r872_fine = r276_AdviceStroke(6.5);
                    var r872_arcSw = Math.min(r276_markStroke, r872_fine * 1.25);
                    var r872_radius = Math.max(r276_markExtend - r276_DotRadius, r872_fine * 1.35);
                    var r872_yDot = r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.625);
                    r872_currentGlyph.include(r276_dispiro(r276_widths.rhs(r872_arcSw), r276_g4.down.start(r276_markMiddle - r872_radius, r872_yDot, r276_heading(r276_Downward)), r276_arcvh(), r276_g4.right.mid(r276_markMiddle, r872_yDot - r872_radius), r276_archv(), r276_g4.up.end(r276_markMiddle + r872_radius, r872_yDot, r276_heading(r276_Upward))));
                    r872_currentGlyph.include(r276_DrawAt(r276_markMiddle, r872_yDot, r872_fine * r276_kdr));
                    r872_currentGlyph.include(r276_ApparentTranslate(0, r872_fine * 0.5));
                    r872_currentGlyph.include(r276_StdAnchors.mediumWide());
                    return void 0;
                });
            }());
        }
        r276_xn$selectvariant$7Hrq('candrabinduAbove', 784, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_turned('turncandrabinduAbove', 850, 'candrabinduAbove', r276_markMiddle, r276_aboveMarkMid);
        r276_alias('graveToneAbove', 832, 'graveAbove');
        r276_alias('acuteToneAbove', 833, 'acuteAbove');
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tonosAbove', null, function () {
            var _r881_t1;
            var _r881_t0 = this;
            var r881_currentGlyph = _r881_t0;
            r881_currentGlyph.setWidth(0);
            r881_currentGlyph.include(r276_StdAnchors.narrow());
            var r881_shift = 0.05 * r276_markExtend + (r276_markStress - r276_markFine) * r276_HVContrast;
            r881_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle + r881_shift, r276_aboveMarkTop + 0.4 * r276_markStress, r276_widths.center.heading(r276_markStress * 2, r276_Downward)), r276_curl(r276_markMiddle - 0.5 * r881_shift, r276_aboveMarkBot, r276_widths.center.heading(r276_markFine * 2, r276_Downward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('tonosGrekUpperTonos', null, function () {
            var _r887_t1;
            var _r887_t0 = this;
            var r887_currentGlyph = _r887_t0;
            r887_currentGlyph.setWidth(0);
            r887_currentGlyph.include(r276_xn$referglyph$1aao('tonosAbove'));
            r887_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('variaAbove', null, function () {
            var _r893_t1;
            var _r893_t0 = this;
            var r893_currentGlyph = _r893_t0;
            r893_currentGlyph.setWidth(0);
            r893_currentGlyph.include(r276_StdAnchors.medium());
            r893_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle + r276_markStress, r276_aboveMarkBot - r276_markFine * 0.5, r276_widths.center(2 * r276_markFine)), r276_curl(r276_markMiddle - r276_markExtend * 0.5, r276_aboveMarkTop + r276_markStress * 0.25, r276_widths.center(2 * r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('variaGrekUpperTonos', null, function () {
            var _r899_t1;
            var _r899_t0 = this;
            var r899_currentGlyph = _r899_t0;
            r899_currentGlyph.setWidth(0);
            r899_currentGlyph.include(r276_xn$referglyph$1aao('variaAbove'));
            r899_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('oxiaAbove', null, function () {
            var _r905_t1;
            var _r905_t0 = this;
            var r905_currentGlyph = _r905_t0;
            r905_currentGlyph.setWidth(0);
            r905_currentGlyph.include(r276_StdAnchors.medium());
            r905_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markStress, r276_aboveMarkBot - r276_markFine * 0.5, r276_widths.center(2 * r276_markFine)), r276_curl(r276_markMiddle + r276_markExtend * 0.5, r276_aboveMarkTop + r276_markStress * 0.25, r276_widths.center(2 * r276_markStress))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('oxiaGrekUpperTonos', null, function () {
            var _r911_t1;
            var _r911_t0 = this;
            var r911_currentGlyph = _r911_t0;
            r911_currentGlyph.setWidth(0);
            r911_currentGlyph.include(r276_xn$referglyph$1aao('oxiaAbove'));
            r911_currentGlyph.include(r276_StdAnchors.impl('grekUpperTonos', 0, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('perispomeniAbove', 834, function () {
            var _r917_t1;
            var _r917_t0 = this;
            var r917_currentGlyph = _r917_t0;
            r917_currentGlyph.setWidth(0);
            r917_currentGlyph.include(r276_xn$referglyph$1aao('archAbove'));
            r917_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        r276_alias('koronisAbove', 835, 'commaAbove');
        var _r276_t18 = Object.entries(r276_DotVariants)[Symbol.iterator]();
        var _r276_t19 = void 0;
        while (!(_r276_t19 = _r276_t18.next()).done) {
            _r276_t20 = _r276_t19.value;
            r276_suffix = _r276_t20[0];
            r276_DrawAt = _r276_t20[1][0];
            r276_kdr = _r276_t20[1][1];
            _r276_t20[1];
            (function () {
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaTonosAbove.' + r276_suffix, null, function () {
                    var _r926_t1;
                    var _r926_t0 = this;
                    var r926_currentGlyph = _r926_t0;
                    r926_currentGlyph.setWidth(0);
                    r926_currentGlyph.include(r276_xn$withtransform$5sIl(r276_ApparentTranslate(0, -1 / 8 * r276_AccentHeight), r276_xn$referglyph$1aao('dialytikaAbove.' + r276_suffix)));
                    r926_currentGlyph.include(r276_xn$withtransform$5sIl(r276_ApparentTranslate(0, 0), r276_xn$referglyph$1aao('tonosAbove')));
                    r926_currentGlyph.include(r276_StdAnchors.wide());
                    return void 0;
                });
                r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaVariaAbove.' + r276_suffix, null, function () {
                    var _r933_t1;
                    var _r933_t0 = this;
                    var r933_currentGlyph = _r933_t0;
                    r933_currentGlyph.setWidth(0);
                    var r933_shift = 0.125 * (r276_markExtend * 0.875 - r276_markStress);
                    r933_currentGlyph.include(r276_xn$withtransform$5sIl(r276_ApparentTranslate(0, -1 / 8 * r276_AccentHeight), r276_xn$referglyph$1aao('dialytikaAbove.' + r276_suffix)));
                    r933_currentGlyph.include(r276_xn$withtransform$5sIl(r276_ApparentTranslate(r933_shift, 0), r276_xn$referglyph$1aao('variaAbove')));
                    r933_currentGlyph.include(r276_StdAnchors.wide());
                    return void 0;
                });
                return r276_xn$createAndSaveGlyphImpl$2Lrc3c('dialytikaOxiaAbove.' + r276_suffix, null, function () {
                    var _r940_t1;
                    var _r940_t0 = this;
                    var r940_currentGlyph = _r940_t0;
                    r940_currentGlyph.setWidth(0);
                    var r940_shift = 0.125 * (r276_markExtend * 0.875 - r276_markStress);
                    r940_currentGlyph.include(r276_xn$withtransform$5sIl(r276_ApparentTranslate(0, -1 / 8 * r276_AccentHeight), r276_xn$referglyph$1aao('dialytikaAbove.' + r276_suffix)));
                    r940_currentGlyph.include(r276_xn$withtransform$5sIl(r276_ApparentTranslate(-r940_shift, 0), r276_xn$referglyph$1aao('oxiaAbove')));
                    r940_currentGlyph.include(r276_StdAnchors.wide());
                    return void 0;
                });
            }());
        }
        r276_xn$selectvariant$7Hrq('dialytikaTonosAbove', 836, new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dialytikaVariaAbove', new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$selectvariant$7Hrq('dialytikaOxiaAbove', new r276_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('crossAbove', 829, function () {
            var _r950_t1;
            var _r950_t0 = this;
            var r950_currentGlyph = _r950_t0;
            r950_currentGlyph.setWidth(0);
            r950_currentGlyph.include(r276_StdAnchors.mediumWide());
            r950_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markExtend, r276_aboveMarkTop, r276_widths.center(2 * r276_markFine)), r276_curl(r276_markMiddle + r276_markExtend, r276_aboveMarkBot)));
            r950_currentGlyph.include(r276_dispiro(r276_flat(r276_markMiddle - r276_markExtend, r276_aboveMarkBot, r276_widths.center(2 * r276_markFine)), r276_curl(r276_markMiddle + r276_markExtend, r276_aboveMarkTop)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('lessAbove', 7678, function () {
            var _r957_t1;
            var _r957_t0 = this;
            var r957_currentGlyph = _r957_t0;
            r957_currentGlyph.setWidth(0);
            r957_currentGlyph.include(r276_StdAnchors.mediumWide());
            var r957_top = r276_aboveMarkTop;
            var r957_bot = r276_aboveMarkBot;
            var r957_exp = Math.sqrt(1 + Math.pow((r957_top - r957_bot) / r276_markExtend, 2));
            r957_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle + r276_markExtend, r957_top), r276_curl(r276_markMiddle - r276_markExtend, r1_mix(r957_top, r957_bot, 0.5), r276_widths.center.heading(r276_markFine * r957_exp, r276_Leftward))));
            r957_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle + r276_markExtend, r957_bot), r276_curl(r276_markMiddle - r276_markExtend, r1_mix(r957_top, r957_bot, 0.5), r276_widths.center.heading(r276_markFine * r957_exp, r276_Leftward))));
            return void 0;
        });
        r276_turned('greaterAbove', 848, 'lessAbove', r276_markMiddle, r276_aboveMarkMid);
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upArrowHeadAbove', 57346, function () {
            var _r964_t1;
            var _r964_t0 = this;
            var r964_currentGlyph = _r964_t0;
            r964_currentGlyph.setWidth(0);
            r964_currentGlyph.include(r276_StdAnchors.medium());
            var r964_top = r276_aboveMarkTop;
            var r964_bot = r276_aboveMarkBot;
            var r964_exp = Math.sqrt(1 + Math.pow(3 * r276_markExtend / (r964_top - r964_bot), 2));
            r964_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle - r276_markExtend, r964_bot), r276_curl(r276_markMiddle, r964_top, r276_widths.center.heading(r276_markFine * r964_exp, r276_Upward))));
            r964_currentGlyph.include(r276_dispiro(r276_widths.center(r276_markFine * 2), r276_flat(r276_markMiddle + r276_markExtend, r964_bot), r276_curl(r276_markMiddle, r964_top, r276_widths.center.heading(r276_markFine * r964_exp, r276_Upward))));
            return void 0;
        });
        r276_turned('downArrowHeadAbove', 57347, 'upArrowHeadAbove', r276_markMiddle, r276_aboveMarkMid);
        var r276_xn$ArrowheadForArrowMarkAboveUp$7KZjb = function () {
            var _r969_t0, _r969_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r972_t1;
                var _r972_t0 = this;
                var r972_currentGlyph = _r972_t0;
                var r972_fine = r276_AdviceStroke(6) / 2;
                var r972_top = r276_aboveMarkTop;
                var r972_bot = r276_aboveMarkMid;
                var r972_left = r276_markMiddle - r276_markExtend * 0.75;
                var r972_right = r276_markMiddle + r276_markExtend * 0.75;
                var r972_exp = Math.sqrt(1 + 2 * (r972_top - r972_bot) / (r972_right - r972_left) * (2 * (r972_top - r972_bot)) / (r972_right - r972_left));
                r972_currentGlyph.include(r276_dispiro(r276_widths.center(r972_fine * 2), r276_flat(r972_left, r972_bot), r276_curl(r1_mix(r972_left, r972_right, 0.5), r972_top, r276_widths.heading(r972_fine * r972_exp, r972_fine * r972_exp, r276_Rightward))));
                r972_currentGlyph.include(r276_dispiro(r276_widths.center(r972_fine * 2), r276_flat(r972_right, r972_bot), r276_curl(r1_mix(r972_left, r972_right, 0.5), r972_top, r276_widths.heading(r972_fine * r972_exp, r972_fine * r972_exp, r276_Leftward))));
                return void 0;
            });
        };
        var r276_xn$ArrowheadForArrowMarkAboveDown$7KZjb = function () {
            var _r975_t0, _r975_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r978_t1;
                var _r978_t0 = this;
                var r978_currentGlyph = _r978_t0;
                r978_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveUp$7KZjb());
                r978_currentGlyph.include(r276_FlipAround(r276_markMiddle, r276_aboveMarkMid));
                return void 0;
            });
        };
        r276_VBar.mForArrowMarkAbove = function () {
            var _r981_t0, _r981_t1;
            return function () {
                var _r983_t1;
                var _r983_t0 = this;
                var r983_currentGlyph = _r983_t0;
                var r983_fine = r276_AdviceStroke(6) / 2;
                r983_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkTop, r276_aboveMarkBot, r983_fine * 2));
                return void 0;
            };
        };
        var r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb = function () {
            var _r985_t0, _r985_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r988_t1;
                var _r988_t0 = this;
                var r988_currentGlyph = _r988_t0;
                var r988_fine = r276_AdviceStroke(5.75) / 2;
                var r988_top = r276_aboveMarkTop;
                var r988_bot = r276_aboveMarkBot;
                var r988_left = r276_markMiddle - r276_markExtend * 1.5;
                var r988_right = r276_markMiddle - r276_markExtend * 0.5;
                var r988_exp = Math.sqrt(1 + (r988_top - r988_bot) / (2 * (r988_right - r988_left)) * (r988_top - r988_bot) / (2 * (r988_right - r988_left)));
                r988_currentGlyph.include(r276_dispiro(r276_widths.center(r988_fine * 2), r276_flat(r988_right, r988_top), r276_curl(r988_left, r1_mix(r988_top, r988_bot, 0.5), r276_widths.heading(r988_fine * r988_exp, r988_fine * r988_exp, r276_Downward))));
                r988_currentGlyph.include(r276_dispiro(r276_widths.center(r988_fine * 2), r276_flat(r988_right, r988_bot), r276_curl(r988_left, r1_mix(r988_top, r988_bot, 0.5), r276_widths.heading(r988_fine * r988_exp, r988_fine * r988_exp, r276_Upward))));
                return void 0;
            });
        };
        var r276_xn$ArrowheadForArrowMarkAboveRight$7KZjb = function () {
            var _r991_t0, _r991_t1;
            return r276_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r994_t1;
                var _r994_t0 = this;
                var r994_currentGlyph = _r994_t0;
                r994_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb());
                r994_currentGlyph.include(r276_FlipAround(r276_markMiddle, r276_aboveMarkMid));
                return void 0;
            });
        };
        r276_HBar.mForArrowMarkAbove = function () {
            var _r997_t0, _r997_t1;
            return function () {
                var _r999_t1;
                var _r999_t0 = this;
                var r999_currentGlyph = _r999_t0;
                var r999_fine = r276_AdviceStroke(5.75) / 2;
                r999_currentGlyph.include(r276_HBar.m(r276_markMiddle - r276_markExtend * 1.5, r276_markMiddle + r276_markExtend * 1.5, r276_aboveMarkMid, r999_fine * 2));
                return void 0;
            };
        };
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upArrowAbove', null, function () {
            var _r1003_t1;
            var _r1003_t0 = this;
            var r1003_currentGlyph = _r1003_t0;
            r1003_currentGlyph.setWidth(0);
            r1003_currentGlyph.include(r276_StdAnchors.medium());
            r1003_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveUp$7KZjb());
            r1003_currentGlyph.include(r276_VBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('downArrowAbove', 6835, function () {
            var _r1010_t1;
            var _r1010_t0 = this;
            var r1010_currentGlyph = _r1010_t0;
            r1010_currentGlyph.setWidth(0);
            r1010_currentGlyph.include(r276_StdAnchors.medium());
            r1010_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveDown$7KZjb());
            r1010_currentGlyph.include(r276_VBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftArrowAbove', 8406, function () {
            var _r1017_t1;
            var _r1017_t0 = this;
            var r1017_currentGlyph = _r1017_t0;
            r1017_currentGlyph.setWidth(0);
            r1017_currentGlyph.include(r276_StdAnchors.wide());
            r1017_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb());
            r1017_currentGlyph.include(r276_HBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightArrowAbove', 8407, function () {
            var _r1024_t1;
            var _r1024_t0 = this;
            var r1024_currentGlyph = _r1024_t0;
            r1024_currentGlyph.setWidth(0);
            r1024_currentGlyph.include(r276_StdAnchors.wide());
            r1024_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveRight$7KZjb());
            r1024_currentGlyph.include(r276_HBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('lrArrowAbove', 8417, function () {
            var _r1031_t1;
            var _r1031_t0 = this;
            var r1031_currentGlyph = _r1031_t0;
            r1031_currentGlyph.setWidth(0);
            r1031_currentGlyph.include(r276_StdAnchors.wide());
            r1031_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveLeft$7KZjb());
            r1031_currentGlyph.include(r276_xn$ArrowheadForArrowMarkAboveRight$7KZjb());
            r1031_currentGlyph.include(r276_HBar.mForArrowMarkAbove());
            return void 0;
        });
        r276_alias('cyrlDasiaAbove', 1157, 'revCommaAbove');
        r276_alias('cyrlPsiliAbove', 1158, 'commaAbove');
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('cyrlPalatilizationAbove', 1156, function () {
            var _r1039_t1;
            var _r1039_t0 = this;
            var r1039_currentGlyph = _r1039_t0;
            r1039_currentGlyph.setWidth(0);
            r1039_currentGlyph.include(r276_StdAnchors.wide());
            var r1039_leftEnd = r276_markMiddle - r276_markExtend * 2;
            var r1039_rightEnd = r276_markMiddle + r276_markExtend * 1.2;
            r1039_currentGlyph.include(r276_dispiro(r276_g4.up.start(r1039_rightEnd, r276_aboveMarkBot, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Upward)), r276_arcvh(), r276_g2.left.mid(r276_markMiddle, r276_aboveMarkTop - r276_markHalfStroke, r276_heading(r276_Leftward)), r276_alsoThru.g2(0.5, 0.5), r276_g2.left.end(r1039_leftEnd, r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.5) - r276_markHalfStroke, r276_heading(r276_Leftward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('cyrlPokrytieAbove', 1159, function () {
            var _r1045_t1;
            var _r1045_t0 = this;
            var r1045_currentGlyph = _r1045_t0;
            r1045_currentGlyph.setWidth(0);
            r1045_currentGlyph.include(r276_StdAnchors.wide());
            var r1045_leftEnd = r276_markMiddle - r276_markExtend * 1.2;
            var r1045_rightEnd = r276_markMiddle + r276_markExtend * 2;
            r1045_currentGlyph.include(r276_dispiro(r276_g4.up.start(r1045_leftEnd, r276_aboveMarkBot, r276_widths.heading(r276_markHalfStroke, r276_markHalfStroke, r276_Upward)), r276_arcvh(), r276_g2.right.mid(r276_markMiddle, r276_aboveMarkTop - r276_markHalfStroke, r276_heading(r276_Rightward)), r276_alsoThru.g2(0.5, 0.5), r276_g2.right.end(r1045_rightEnd, r1_mix(r276_aboveMarkBot, r276_aboveMarkTop, 0.5) - r276_markHalfStroke, r276_heading(r276_Rightward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('cyrlTitloAbove', 1155, function () {
            var _r1051_t1;
            var _r1051_t0 = this;
            var r1051_currentGlyph = _r1051_t0;
            r1051_currentGlyph.setWidth(0);
            r1051_currentGlyph.include(r276_StdAnchors.wide());
            r1051_currentGlyph.include(r276_VBar.m(r276_markMiddle - r276_markExtend, r276_aboveMarkBot, r276_aboveMarkMid + r276_markFine, r276_markFine * 2));
            r1051_currentGlyph.include(r276_VBar.m(r276_markMiddle + r276_markExtend, r276_aboveMarkMid - r276_markFine, r276_aboveMarkTop, r276_markFine * 2));
            r1051_currentGlyph.include(r276_HBar.m(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('zigzagAbove', 859, function () {
            var _r1059_t1;
            var _r1059_t0 = this;
            var r1059_currentGlyph = _r1059_t0;
            r1059_currentGlyph.setWidth(0);
            r1059_currentGlyph.include(r276_StdAnchors.mediumWide());
            var r1059_ext = 0.625 * r276_markExtend + r276_markFine;
            var r1059_coSlope = 0.2;
            var r1059_fr = new r1_Box(r276_aboveMarkTop, r276_aboveMarkBot, r276_markMiddle - r1059_ext, r276_markMiddle + r1059_ext);
            r1059_currentGlyph.include(r276_HBar.m(r1059_fr.left, r1059_fr.right, r1059_fr.yMid, r276_markFine * 2));
            r1059_currentGlyph.include(r276_intersection(r276_MaskBelow(r1059_fr.top), r276_MaskAbove(r1059_fr.yMid - r276_markFine), r276_ExtLineLhs(4, r276_markFine * 2, r1059_fr.left + r1059_coSlope * (r1059_fr.top - r1059_fr.yMid - r276_markFine), r1059_fr.top, r1059_fr.left - 2 * r276_markFine * r1059_coSlope, r1059_fr.yMid - r276_markFine)));
            r1059_currentGlyph.include(r276_intersection(r276_MaskAbove(r1059_fr.bot), r276_MaskBelow(r1059_fr.yMid + r276_markFine), r276_ExtLineLhs(4, r276_markFine * 2, r1059_fr.right - r1059_coSlope * (r1059_fr.yMid - r1059_fr.bot - r276_markFine), r1059_fr.bot, r1059_fr.right + 2 * r276_markFine * r1059_coSlope, r1059_fr.yMid + r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('ogonekAbove', 7630, function () {
            var _r1067_t1;
            var _r1067_t0 = this;
            var r1067_currentGlyph = _r1067_t0;
            r1067_currentGlyph.setWidth(0);
            r1067_currentGlyph.setMarkAnchor('above', r276_markMiddle, r276_XH, r276_markMiddle, r276_aboveMarkStack);
            r1067_currentGlyph.setBaseAnchor('aboveBraceL', r276_markMiddle - 0.25 * r276_markExtend, r276_aboveMarkMid);
            r1067_currentGlyph.setBaseAnchor('aboveBraceR', r276_markMiddle + 0.25 * r276_markExtend + r276_HSwToV(0.25 * r276_markStroke), r276_aboveMarkMid);
            var r1067_fine = r276_AdviceStroke(8);
            var r1067_depth = 0 - r276_Descender - r276_markStroke;
            var r1067_fullExt = 7 / 16 * r1067_depth + 0.125 * r276_markStress;
            var r1067_extR = 0.25 * r1067_fullExt;
            var r1067_extL = 0.5 * r1067_fullExt + 0.375 * r276_markStroke + Math.max(0.125 * r276_markExtend, 1.5 * r276_TanSlope * r276_markStroke);
            var r1067_turnSlope = 0.5 * ((r276_markStroke - r1067_fine) / r276_markStroke - (r276_ArchDepthB - r276_ArchDepth) / r276_ArchDepth);
            r1067_currentGlyph.include(r276_intersection(r276_MaskAbove(r276_XH + r276_O), r276_dispiro(r276_g4(r276_markMiddle + r1_mix(r1067_extR, -r1067_extL, 0.75), r276_XH, r276_widths.rhs.heading(r1067_fine, r276_Rightward)), r276_alsoThru(0.5, 0.375 - 0.2 * r276_markStroke / r1067_depth, r276_widths.rhs(r1_mix(r1067_fine, r276_markStroke, 0.25))), r276_g4.up.mid(r276_markMiddle + r1067_extR, r276_XH + 0.75 * r1067_depth, r276_widths.rhs.heading(r276_markStroke, {
                'x': -r276_HVContrast,
                'y': -r1067_turnSlope
            })), r276_arcvh(r276_widths.rhs(r276_markStroke)), r276_g4(r276_markMiddle + r1_mix(r1067_extR, -r1067_extL, 0.625), r276_XH + r1067_depth - r276_O, r276_heading(r276_Leftward)), r276_g4(r276_markMiddle - r1067_extL, r276_XH + r1067_depth - 0.5 * r276_O, r276_heading(r276_Leftward)))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftHalfCircleAbove', 849, function () {
            var _r1075_t2;
            var _r1075_t1 = this;
            var r1075_currentGlyph = _r1075_t1;
            r1075_currentGlyph.setWidth(0);
            r1075_currentGlyph.include(r276_StdAnchors.narrow());
            var _r1075_t0 = r276_RingDims();
            var r1075_radiusIn = _r1075_t0.radiusIn;
            var r1075_radiusOut = _r1075_t0.radiusOut;
            r1075_currentGlyph.include(r276_dispiro(r276_g4.left.start(r276_markMiddle, r276_aboveMarkTop, r276_widths.center.heading(r1075_radiusOut - r1075_radiusIn, r276_Leftward)), r276_archv(), r276_g4.down.mid(r276_markMiddle - (r276_aboveMarkTop - r276_aboveMarkBot) / 2, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot, 0.5), r276_heading(r276_Downward)), r276_arcvh(), r276_g4.right.end(r276_markMiddle, r276_aboveMarkBot, r276_heading(r276_Rightward))));
            r1075_currentGlyph.include(r276_Translate((r276_aboveMarkTop - r276_aboveMarkBot) / 4, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfCircleAbove', 855, function () {
            var _r1082_t2;
            var _r1082_t1 = this;
            var r1082_currentGlyph = _r1082_t1;
            r1082_currentGlyph.setWidth(0);
            r1082_currentGlyph.include(r276_StdAnchors.narrow());
            var _r1082_t0 = r276_RingDims();
            var r1082_radiusIn = _r1082_t0.radiusIn;
            var r1082_radiusOut = _r1082_t0.radiusOut;
            r1082_currentGlyph.include(r276_dispiro(r276_g4.right.start(r276_markMiddle, r276_aboveMarkTop, r276_widths.center.heading(r1082_radiusOut - r1082_radiusIn, r276_Rightward)), r276_archv(), r276_g4.down.mid(r276_markMiddle + (r276_aboveMarkTop - r276_aboveMarkBot) / 2, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot, 0.5), r276_heading(r276_Downward)), r276_arcvh(), r276_g4.left.end(r276_markMiddle, r276_aboveMarkBot, r276_heading(r276_Leftward))));
            r1082_currentGlyph.include(r276_Translate(-(r276_aboveMarkTop - r276_aboveMarkBot) / 4, 0));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblBreveAbove', 6855, function () {
            var _r1089_t1;
            var _r1089_t0 = this;
            var r1089_currentGlyph = _r1089_t0;
            r1089_currentGlyph.setWidth(0);
            r1089_currentGlyph.include(r276_StdAnchors.wide());
            var r1089_sw = r276_AdviceStroke(3.5) / r276_Stroke * r276_markStroke;
            var r1089_extend = (r276_aboveMarkTop - r276_aboveMarkBot - 0.5 * r276_markStroke) * 1.25;
            r1089_currentGlyph.include(r276_dispiro(r276_g4.down.start(r276_markMiddle - r1089_extend, r276_aboveMarkTop, r276_widths.center.heading(r1089_sw, r276_Downward)), r276_arcvh(), r276_g4.right.mid(r1_mix(r276_markMiddle, r276_markMiddle - r1089_extend, 0.5), r276_aboveMarkBot + 0.5 * r1089_sw, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.end(r276_markMiddle, r276_aboveMarkTop, r276_heading(r276_Upward))));
            r1089_currentGlyph.include(r276_dispiro(r276_g4.down.start(r276_markMiddle, r276_aboveMarkTop, r276_widths.center.heading(r1089_sw, r276_Downward)), r276_arcvh(), r276_g4.right.mid(r1_mix(r276_markMiddle, r276_markMiddle + r1089_extend, 0.5), r276_aboveMarkBot + 0.5 * r1089_sw, r276_heading(r276_Rightward)), r276_archv(), r276_g4.up.end(r276_markMiddle + r1089_extend, r276_aboveMarkTop, r276_heading(r276_Upward))));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblArchAbove', null, function () {
            var _r1096_t1;
            var _r1096_t0 = this;
            var r1096_currentGlyph = _r1096_t0;
            r1096_currentGlyph.setWidth(0);
            r1096_currentGlyph.include(r276_xn$referglyph$1aao('dblBreveAbove'));
            r1096_currentGlyph.include(r276_FlipAround(r276_markMiddle, r1_mix(r276_aboveMarkTop, r276_aboveMarkBot, 0.5)));
            r1096_currentGlyph.include(r276_StdAnchors.wide());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('plusAbove', 6856, function () {
            var _r1103_t1;
            var _r1103_t0 = this;
            var r1103_currentGlyph = _r1103_t0;
            r1103_currentGlyph.setWidth(0);
            r1103_currentGlyph.include(r276_StdAnchors.mediumWide());
            r1103_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r1103_currentGlyph.include(r276_HBar.m(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('minusAbove', null, function () {
            var _r1110_t1;
            var _r1110_t0 = this;
            var r1110_currentGlyph = _r1110_t0;
            r1110_currentGlyph.setWidth(0);
            r1110_currentGlyph.include(r276_StdAnchors.mediumWide());
            r1110_currentGlyph.include(r276_HBar.m(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkMid, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('dblPlusAbove', 6857, function () {
            var _r1116_t1;
            var _r1116_t0 = this;
            var r1116_currentGlyph = _r1116_t0;
            r1116_currentGlyph.setWidth(0);
            r1116_currentGlyph.include(r276_xn$withtransform$5sIl(r276_Translate(+r276_markExtend, 0), r276_xn$referglyph$1aao('plusAbove')));
            r1116_currentGlyph.include(r276_xn$withtransform$5sIl(r276_Translate(-r276_markExtend, 0), r276_xn$referglyph$1aao('plusAbove')));
            r1116_currentGlyph.include(r276_StdAnchors.extraWide());
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('upTackAbove', 7669, function () {
            var _r1123_t1;
            var _r1123_t0 = this;
            var r1123_currentGlyph = _r1123_t0;
            r1123_currentGlyph.setWidth(0);
            r1123_currentGlyph.include(r276_StdAnchors.medium());
            r1123_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r1123_currentGlyph.include(r276_HBar.b(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkBot, r276_markFine * 2));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('downTackAbove', null, function () {
            var _r1130_t1;
            var _r1130_t0 = this;
            var r1130_currentGlyph = _r1130_t0;
            r1130_currentGlyph.setWidth(0);
            r1130_currentGlyph.include(r276_StdAnchors.medium());
            r1130_currentGlyph.include(r276_VBar.m(r276_markMiddle, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine * 2));
            r1130_currentGlyph.include(r276_HBar.t(r276_markMiddle - r276_markExtend, r276_markMiddle + r276_markExtend, r276_aboveMarkTop, r276_markFine * 2));
            return void 0;
        });
        var r276_VNSecondaryMark = function (r1135_s, r1135_kx, r1135_ky, r1135_d) {
            var _r1135_t0, _r1135_t1;
            return function () {
                var _r1137_t1;
                var _r1137_t0 = this;
                var r1137_currentGlyph = _r1137_t0;
                r1137_currentGlyph.include(r276_ScaleAround(r276_markMiddle, r276_aboveMarkMid, r1135_s, r1135_s));
                r1137_currentGlyph.include(r276_ApparentTranslate(1.5 * r1135_kx * r276_markExtend, 0));
                var r1137_my = r276_aboveMarkStack - 0.5 * r1135_ky * r276_AccentHeight;
                r1137_currentGlyph.setMarkAnchor('above', r276_markMiddle, r1137_my, r276_markMiddle, r1137_my + r1135_d * r276_AccentHeight);
                return void 0;
            };
        };
        r276_xn$derivecomposites$7Hrq('acuteAbove/viSide', null, 'acuteAbove', r276_VNSecondaryMark(0.75, 1, 1, 0));
        r276_xn$derivecomposites$7Hrq('graveAbove/viSide', null, 'graveAbove', r276_VNSecondaryMark(0.75, -1, 1, 0));
        r276_xn$derivecomposites$7Hrq('hookAbove/viSide', null, 'hookAbove', r276_VNSecondaryMark(0.75, 1, 1, 0));
        r276_xn$derivecomposites$7Hrq('acuteAbove/viCenter', null, 'acuteAbove', r276_VNSecondaryMark(0.875, 0, 1.75, 0.5));
        r276_xn$derivecomposites$7Hrq('graveAbove/viCenter', null, 'graveAbove', r276_VNSecondaryMark(0.875, 0, 1.75, 0.5));
        r276_xn$derivecomposites$7Hrq('hookAbove/viCenter', null, 'hookAbove', r276_VNSecondaryMark(0.875, 0, 1.75, 0.5));
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftParenAbove', 6849, function () {
            var _r1143_t1;
            var _r1143_t0 = this;
            var r1143_currentGlyph = _r1143_t0;
            r1143_currentGlyph.setWidth(0);
            r1143_currentGlyph.setMarkAnchor('aboveBraceL', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle - r276_markExtend, r276_aboveMarkMid);
            var r1143_braceDepth = r276_markExtend * 0.25;
            var r1143_left = r276_markMiddle - 1.5 * r276_markExtend;
            r1143_currentGlyph.include(r276_dispiro(r276_widths.lhs(r276_markFine), r276_g4(r1143_left + r1143_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1143_left + r276_OX, r276_aboveMarkMid), r276_g4(r1143_left + r1143_braceDepth, r276_aboveMarkBot - r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightParenAbove', 6850, function () {
            var _r1149_t1;
            var _r1149_t0 = this;
            var r1149_currentGlyph = _r1149_t0;
            r1149_currentGlyph.setWidth(0);
            r1149_currentGlyph.setMarkAnchor('aboveBraceR', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle + r276_markExtend, r276_aboveMarkMid);
            var r1149_braceDepth = r276_markExtend * 0.25;
            var r1149_right = r276_markMiddle + 1.5 * r276_markExtend;
            r1149_currentGlyph.include(r276_dispiro(r276_widths.rhs(r276_markFine), r276_g4(r1149_right - r1149_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1149_right - r276_OX, r276_aboveMarkMid), r276_g4(r1149_right - r1149_braceDepth, r276_aboveMarkBot - r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('parenAbove', 6843, function () {
            var _r1155_t1;
            var _r1155_t0 = this;
            var r1155_currentGlyph = _r1155_t0;
            r1155_currentGlyph.setWidth(0);
            r1155_currentGlyph.include(r276_xn$referglyph$1aao('leftParenAbove'));
            r1155_currentGlyph.include(r276_xn$referglyph$1aao('rightParenAbove'));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftDoubleParenAbove', null, function () {
            var _r1161_t1;
            var _r1161_t0 = this;
            var r1161_currentGlyph = _r1161_t0;
            r1161_currentGlyph.setWidth(0);
            r1161_currentGlyph.setMarkAnchor('aboveBraceL', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle - 1.5 * r276_markExtend, r276_aboveMarkMid);
            var r1161_braceDepth = r276_markExtend * 0.25;
            var r1161_left = r276_markMiddle - 1.5 * r276_markExtend;
            var r1161_gap = r276_HSwToV(r276_markFine) + Math.max(r276_markFine, r276_markExtend * 0.5);
            r1161_currentGlyph.include(r276_dispiro(r276_widths.lhs(r276_markFine), r276_g4(r1161_left + r1161_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1161_left + r276_OX, r276_aboveMarkMid), r276_g4(r1161_left + r1161_braceDepth, r276_aboveMarkBot - r276_markFine)));
            r1161_currentGlyph.include(r276_dispiro(r276_widths.lhs(r276_markFine), r276_g4(r1161_left - r1161_gap + r1161_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1161_left - r1161_gap + r276_OX, r276_aboveMarkMid), r276_g4(r1161_left - r1161_gap + r1161_braceDepth, r276_aboveMarkBot - r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightDoubleParenAbove', null, function () {
            var _r1168_t1;
            var _r1168_t0 = this;
            var r1168_currentGlyph = _r1168_t0;
            r1168_currentGlyph.setWidth(0);
            r1168_currentGlyph.setMarkAnchor('aboveBraceR', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle + 1.5 * r276_markExtend, r276_aboveMarkMid);
            var r1168_braceDepth = r276_markExtend * 0.25;
            var r1168_right = r276_markMiddle + 1.5 * r276_markExtend;
            var r1168_gap = r276_HSwToV(r276_markFine) + Math.max(r276_markFine, r276_markExtend * 0.5);
            r1168_currentGlyph.include(r276_dispiro(r276_widths.rhs(r276_markFine), r276_g4(r1168_right - r1168_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1168_right - r276_OX, r276_aboveMarkMid), r276_g4(r1168_right - r1168_braceDepth, r276_aboveMarkBot - r276_markFine)));
            r1168_currentGlyph.include(r276_dispiro(r276_widths.rhs(r276_markFine), r276_g4(r1168_right + r1168_gap - r1168_braceDepth, r276_aboveMarkTop + r276_markFine), r276_g4(r1168_right + r1168_gap - r276_OX, r276_aboveMarkMid), r276_g4(r1168_right + r1168_gap - r1168_braceDepth, r276_aboveMarkBot - r276_markFine)));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('doubleParenAbove', 6844, function () {
            var _r1175_t1;
            var _r1175_t0 = this;
            var r1175_currentGlyph = _r1175_t0;
            r1175_currentGlyph.setWidth(0);
            r1175_currentGlyph.include(r276_xn$referglyph$1aao('leftDoubleParenAbove'));
            r1175_currentGlyph.include(r276_xn$referglyph$1aao('rightDoubleParenAbove'));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('leftBrackAbove', null, function () {
            var _r1181_t1;
            var _r1181_t0 = this;
            var r1181_currentGlyph = _r1181_t0;
            r1181_currentGlyph.setWidth(0);
            r1181_currentGlyph.setMarkAnchor('aboveBraceL', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle - r276_markExtend, r276_aboveMarkMid);
            var r1181_braceDepth = r276_markExtend * 0.75;
            var r1181_left = r276_markMiddle - 1.75 * r276_markExtend;
            r1181_currentGlyph.include(r276_VBar.l(r1181_left, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine));
            r1181_currentGlyph.include(r276_HBar.t(r1181_left, r1181_left + r1181_braceDepth, r276_aboveMarkTop, r276_markFine));
            r1181_currentGlyph.include(r276_HBar.b(r1181_left, r1181_left + r1181_braceDepth, r276_aboveMarkBot, r276_markFine));
            return void 0;
        });
        r276_xn$createAndSaveGlyphImpl$2Lrc3c('rightBrackAbove', null, function () {
            var _r1189_t1;
            var _r1189_t0 = this;
            var r1189_currentGlyph = _r1189_t0;
            r1189_currentGlyph.setWidth(0);
            r1189_currentGlyph.setMarkAnchor('aboveBraceR', r276_markMiddle, r276_aboveMarkMid, r276_markMiddle + r276_markExtend, r276_aboveMarkMid);
            var r1189_braceDepth = r276_markExtend * 0.75;
            var r1189_right = r276_markMiddle + 1.75 * r276_markExtend;
            r1189_currentGlyph.include(r276_VBar.r(r1189_right, r276_aboveMarkBot, r276_aboveMarkTop, r276_markFine));
            r1189_currentGlyph.include(r276_HBar.t(r1189_right - r1189_braceDepth, r1189_right, r276_aboveMarkTop, r276_markFine));
            r1189_currentGlyph.include(r276_HBar.b(r1189_right - r1189_braceDepth, r1189_right, r276_aboveMarkBot, r276_markFine));
            return void 0;
        });
        return r276_xn$createAndSaveGlyphImpl$2Lrc3c('brackAbove', 6853, function () {
            var _r1197_t1;
            var _r1197_t0 = this;
            var r1197_currentGlyph = _r1197_t0;
            r1197_currentGlyph.setWidth(0);
            r1197_currentGlyph.include(r276_xn$referglyph$1aao('leftBrackAbove'));
            r1197_currentGlyph.include(r276_xn$referglyph$1aao('rightBrackAbove'));
            return void 0;
        });
    });
    return void 0;
});
