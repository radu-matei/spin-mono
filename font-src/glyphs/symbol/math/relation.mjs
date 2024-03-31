'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/geometry/box.mjs';
import * as _s0_t2 from '../../../support/gr.mjs';
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
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Joining = _r1_t10.Joining;
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
    r271_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r271_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Common', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_dSH, _r272_t6, _r272_t7;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$Exec$2Lrc5 = _r272_t0['$Exec$'];
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_DesignParameters = _r272_t1.DesignParameters;
        var r272_SB = _r272_t1.SB;
        var r272_XH = _r272_t1.XH;
        var r272_OperTop = _r272_t1.OperTop;
        var r272_OperBot = _r272_t1.OperBot;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r272_t5 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'EqualHoleWidth': r272_EqualHoleWidth };
        });
        var r272_EqualHoleWidth = r272_AdviceStroke(5);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'EqualHalfSpace': r272_EqualHalfSpace };
        });
        var r272_EqualHalfSpace = (r272_OperTop - r272_OperBot) * 2 * r272_DesignParameters.equal_wideness;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'LessSlope': r272_LessSlope };
        });
        var r272_LessSlope = 5 / 13 * (r272_OperTop - r272_OperBot) / (r272_RightSB - r272_SB);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'dH': r272_dH };
        });
        var r272_dH = r272_LessSlope * (r272_RightSB - r272_SB);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'dHSubstSimple': r272_dHSubstSimple };
        });
        var r272_dHSubstSimple = r272_dH * 1;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r286_t0, _r286_t1;
            return { 'dHElem': r272_dHElem };
        });
        var r272_dHElem = r272_dH * 7 / 6;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r288_t0, _r288_t1;
            return { 'dHSmallElem': r272_dHSmallElem };
        });
        var r272_dHSmallElem = r272_dH * (3 / 4);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'lessEqDist': r272_lessEqDist };
        });
        var r272_lessEqDist = Math.max(r272_AdviceStroke(4), r272_XH * 0.16);
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r292_t0, _r292_t1;
            return { 'dSH': r272_dSH };
        });
        return r272_dSH = (r272_dH * 2 + r272_lessEqDist * 2) / 3;
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r295_xn$Capture_Ext$2Lrc2b) {
    var _r295_t0, _r295_t1;
    r295_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r295_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Equal', function (r296_xn$Capture$2Lrc8, r296_xn$ExportCapture$2Lrc4b) {
        var _r296_t7, _r296_t8;
        var _r296_t0 = r296_xn$Capture$2Lrc8;
        var r296_xn$createAndSaveGlyphImpl$2Lrc3c = _r296_t0['$createAndSaveGlyphImpl$'];
        var r296_xn$NamedParameterPair$2Lrc9b = _r296_t0['$NamedParameterPair$'];
        var r296_xn$Exec$2Lrc5 = _r296_t0['$Exec$'];
        var r296_MarkSet = _r296_t0.MarkSet;
        var _r296_t1 = r296_xn$Capture$2Lrc8.Metrics;
        var r296_Width = _r296_t1.Width;
        var r296_SB = _r296_t1.SB;
        var r296_SymbolMid = _r296_t1.SymbolMid;
        var r296_ParenTop = _r296_t1.ParenTop;
        var r296_ParenBot = _r296_t1.ParenBot;
        var r296_ApparentTranslate = _r296_t1.ApparentTranslate;
        var r296_TanSlope = _r296_t1.TanSlope;
        var r296_Rightward = _r296_t1.Rightward;
        var r296_O = _r296_t1.O;
        var r296_Stroke = _r296_t1.Stroke;
        var r296_RightSB = _r296_t1.RightSB;
        var r296_Middle = _r296_t1.Middle;
        var r296_DotRadius = _r296_t1.DotRadius;
        var r296_AdviceStroke = _r296_t1.AdviceStroke;
        var r296_OperatorStroke = _r296_t1.OperatorStroke;
        var r296_ArchDepthAOf = _r296_t1.ArchDepthAOf;
        var r296_ArchDepthBOf = _r296_t1.ArchDepthBOf;
        var _r296_t2 = r296_xn$Capture$2Lrc8.SpiroFns;
        var r296_g4 = _r296_t2.g4;
        var r296_widths = _r296_t2.widths;
        var r296_heading = _r296_t2.heading;
        var r296_dispiro = _r296_t2.dispiro;
        var _r296_t3 = r296_xn$Capture$2Lrc8.BooleFns;
        var r296_union = _r296_t3.union;
        var r296_intersection = _r296_t3.intersection;
        var r296_difference = _r296_t3.difference;
        var _r296_t4 = r296_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r296_Rect = _r296_t4.Rect;
        var r296_RingAt = _r296_t4.RingAt;
        var r296_RingStrokeAt = _r296_t4.RingStrokeAt;
        var r296_OShape = _r296_t4.OShape;
        var r296_OShapeOutline = _r296_t4.OShapeOutline;
        var r296_HBar = _r296_t4.HBar;
        var r296_VBar = _r296_t4.VBar;
        var r296_xn$clearanchors$1aao = _r296_t4['clear-anchors'];
        var r296_MaskLeft = _r296_t4.MaskLeft;
        var r296_MaskRight = _r296_t4.MaskRight;
        var r296_WithDotVariants = _r296_t4.WithDotVariants;
        var _r296_t5 = r296_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r296_xn$referglyph$1aao = _r296_t5['refer-glyph'];
        var r296_turned = _r296_t5.turned;
        var _r296_t6 = r296_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r296_EqualHalfSpace = _r296_t6.EqualHalfSpace;
        var r296_dH = _r296_t6.dH;
        var r296_EqualHoleWidth = _r296_t6.EqualHoleWidth;
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r301_t0, _r301_t1;
            return {
                'EqualShape': r296_EqualShape,
                'EqualHole': r296_EqualHole,
                'IdentShape': r296_IdentShape,
                'IdentHole': r296_IdentHole
            };
        });
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r303_t0, _r303_t1;
            return { 'EqualShape': r296_EqualShape };
        });
        var r296_EqualShape = function (r304_left, r304_right) {
            var _r304_t0, _r304_t1;
            return r296_union(r296_HBar.m(r304_left, r304_right, r296_SymbolMid + r296_EqualHalfSpace, r296_OperatorStroke), r296_HBar.m(r304_left, r304_right, r296_SymbolMid - r296_EqualHalfSpace, r296_OperatorStroke));
        };
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r306_t0, _r306_t1;
            return { 'EqualHole': r296_EqualHole };
        });
        var r296_EqualHole = function (r307_x) {
            var _r307_t0, _r307_t1;
            return r296_VBar.m(r307_x, r296_SymbolMid - r296_EqualHalfSpace, r296_SymbolMid + r296_EqualHalfSpace, r296_EqualHoleWidth);
        };
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r309_t0, _r309_t1;
            return { 'IdentShape': r296_IdentShape };
        });
        var r296_IdentShape = function (r310_left, r310_right) {
            var _r310_t0, _r310_t1;
            return r296_union(r296_HBar.m(r310_left, r310_right, r296_SymbolMid + r296_EqualHalfSpace * 1.5, r296_OperatorStroke), r296_HBar.m(r310_left, r310_right, r296_SymbolMid, r296_OperatorStroke), r296_HBar.m(r310_left, r310_right, r296_SymbolMid - r296_EqualHalfSpace * 1.5, r296_OperatorStroke));
        };
        r296_xn$ExportCapture$2Lrc4b(function () {
            var _r312_t0, _r312_t1;
            return { 'IdentHole': r296_IdentHole };
        });
        var r296_IdentHole = function (r313_x) {
            var _r313_t0, _r313_t1;
            return r296_VBar.m(r313_x, r296_SymbolMid - r296_EqualHalfSpace * 1.5, r296_SymbolMid + r296_EqualHalfSpace * 1.5, r296_EqualHoleWidth);
        };
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equal', '=', function () {
            var _r316_t1;
            var _r316_t0 = this;
            var r316_currentGlyph = _r316_t0;
            r316_currentGlyph.include(r296_EqualShape(r296_SB, r296_RightSB));
            return void 0;
        });
        var r296_EqDotDistance = r296_EqualHalfSpace * 2 + r296_DotRadius * r296_OperatorStroke / r296_Stroke;
        r296_WithDotVariants('oneDotApproxEq', 8784, function (r318_DrawAt, r318_kr, r318_ov) {
            var _r318_t0, _r318_t1;
            return function () {
                var _r320_t1;
                var _r320_t0 = this;
                var r320_currentGlyph = _r320_t0;
                var r320_dr = r296_DotRadius * r318_kr * r296_OperatorStroke / r296_Stroke;
                r320_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r320_currentGlyph.include(r318_DrawAt(r296_Middle, r296_SymbolMid + r296_EqDotDistance, r320_dr - r318_ov));
                return void 0;
            };
        });
        r296_WithDotVariants('twoDotApproxEqCenter', 8785, function (r323_DrawAt, r323_kr, r323_ov) {
            var _r323_t0, _r323_t1;
            return function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                var r325_dr = r296_DotRadius * r323_kr * r296_OperatorStroke / r296_Stroke;
                r325_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r325_currentGlyph.include(r323_DrawAt(r296_Middle, r296_SymbolMid + r296_EqDotDistance, r325_dr - r323_ov));
                r325_currentGlyph.include(r323_DrawAt(r296_Middle, r296_SymbolMid - r296_EqDotDistance, r325_dr - r323_ov));
                return void 0;
            };
        });
        r296_WithDotVariants('twoDotApproxEq', 8786, function (r329_DrawAt, r329_kr, r329_ov) {
            var _r329_t0, _r329_t1;
            return function () {
                var _r331_t1;
                var _r331_t0 = this;
                var r331_currentGlyph = _r331_t0;
                var r331_dr = r296_DotRadius * r329_kr * r296_OperatorStroke / r296_Stroke;
                r331_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r331_currentGlyph.include(r329_DrawAt(r1_mix(r296_SB, r296_RightSB, 1 / 6), r296_SymbolMid + r296_EqDotDistance, r331_dr - r329_ov));
                r331_currentGlyph.include(r329_DrawAt(r1_mix(r296_SB, r296_RightSB, 5 / 6), r296_SymbolMid - r296_EqDotDistance, r331_dr - r329_ov));
                return void 0;
            };
        });
        r296_WithDotVariants('twoDotApproxEqAlt', 8787, function (r335_DrawAt, r335_kr, r335_ov) {
            var _r335_t0, _r335_t1;
            return function () {
                var _r337_t1;
                var _r337_t0 = this;
                var r337_currentGlyph = _r337_t0;
                var r337_dr = r296_DotRadius * r335_kr * r296_OperatorStroke / r296_Stroke;
                r337_currentGlyph.include(r296_xn$referglyph$1aao('equal'));
                r337_currentGlyph.include(r335_DrawAt(r1_mix(r296_SB, r296_RightSB, 5 / 6), r296_SymbolMid + r296_EqDotDistance, r337_dr - r335_ov));
                r337_currentGlyph.include(r335_DrawAt(r1_mix(r296_SB, r296_RightSB, 1 / 6), r296_SymbolMid - r296_EqDotDistance, r337_dr - r335_ov));
                return void 0;
            };
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('ringInEqual', 8790, function () {
            var _r343_t1;
            var _r343_t0 = this;
            var r343_currentGlyph = _r343_t0;
            var r343_ringSw = r296_AdviceStroke(4);
            r343_currentGlyph.include(r296_difference(r296_xn$referglyph$1aao('equal'), r296_RingAt(r296_Middle, r296_SymbolMid, r296_EqualHalfSpace + r296_O + r343_ringSw / 2)));
            r343_currentGlyph.include(r296_RingStrokeAt(r296_Middle, r296_SymbolMid, r296_EqualHalfSpace + r343_ringSw / 2, r343_ringSw));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('ringEqual', 8791, function () {
            var _r348_t1;
            var _r348_t0 = this;
            var r348_currentGlyph = _r348_t0;
            r348_currentGlyph.include(r296_xn$referglyph$1aao('equal'), true, true);
            r348_currentGlyph.include(r296_MarkSet.plus());
            r348_currentGlyph.include(r296_xn$referglyph$1aao('ringAbove'));
            r348_currentGlyph.include(r296_xn$clearanchors$1aao());
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('geometricallyEquivalentTo', 8782, function () {
            var _r355_t1;
            var _r355_t0 = this;
            var r355_currentGlyph = _r355_t0;
            var r355_ringSw = r296_AdviceStroke(4);
            var r355_halfGap = r296_EqualHalfSpace - r296_OperatorStroke / 2;
            var r355_outerRad = r296_EqualHalfSpace + r355_ringSw / 2;
            r355_currentGlyph.include(r296_difference(r296_xn$referglyph$1aao('equal'), r296_OShapeOutline.NoOvershoot(r296_SymbolMid + r296_EqualHalfSpace + r355_outerRad, r296_SymbolMid - r296_EqualHalfSpace - r355_outerRad, r296_Middle - r355_outerRad, r296_Middle + r355_outerRad, r355_ringSw, r296_ArchDepthAOf(r355_outerRad, r296_Width), r296_ArchDepthBOf(r355_outerRad, r296_Width))));
            r355_currentGlyph.include(r296_difference(r296_OShape(r296_SymbolMid + r296_EqualHalfSpace + r355_outerRad, r296_SymbolMid - r296_EqualHalfSpace - r355_outerRad, r296_Middle - r355_outerRad, r296_Middle + r355_outerRad, r355_ringSw, r296_ArchDepthAOf(r355_outerRad, r296_Width), r296_ArchDepthBOf(r355_outerRad, r296_Width)), r296_Rect(r296_SymbolMid + r355_halfGap, r296_SymbolMid - r355_halfGap, 0, r296_Width)));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('differenceBetween', 8783, function () {
            var _r360_t1;
            var _r360_t0 = this;
            var r360_currentGlyph = _r360_t0;
            r360_currentGlyph.include(r296_intersection(r296_Rect(r296_ParenTop, r296_SymbolMid, 0, r296_Width), r296_xn$referglyph$1aao('geometricallyEquivalentTo')));
            r360_currentGlyph.include(r296_intersection(r296_Rect(r296_SymbolMid, r296_ParenBot, 0, r296_Width), r296_xn$referglyph$1aao('equal')));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('ident', 8801, function () {
            var _r365_t1;
            var _r365_t0 = this;
            var r365_currentGlyph = _r365_t0;
            r365_currentGlyph.include(r296_IdentShape(r296_SB, r296_RightSB));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('iiiident', 8803, function () {
            var _r369_t1;
            var _r369_t0 = this;
            var r369_currentGlyph = _r369_t0;
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid + r296_EqualHalfSpace * 2.25, r296_OperatorStroke));
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid + r296_EqualHalfSpace * 0.75, r296_OperatorStroke));
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid - r296_EqualHalfSpace * 0.75, r296_OperatorStroke));
            r369_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid - r296_EqualHalfSpace * 2.25, r296_OperatorStroke));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equivalentTo', 8781, function () {
            var _r376_t1;
            var _r376_t0 = this;
            var r376_currentGlyph = _r376_t0;
            var r376_kArcExtY1 = 3;
            var r376_kArcExtY2 = 3 + r296_TanSlope * 2;
            var r376_kArcExtX = 2;
            r376_currentGlyph.include(r296_intersection(r296_MaskRight(r296_SB), r296_MaskLeft(r296_RightSB), r296_union(r296_dispiro(r296_widths.center(r296_OperatorStroke), r296_g4(r1_mix(r296_Middle, r296_SB, r376_kArcExtX), r296_SymbolMid + r296_EqualHalfSpace * r376_kArcExtY1), r296_g4(r296_Middle, r296_SymbolMid + r296_EqualHalfSpace, r296_heading(r296_Rightward)), r296_g4(r1_mix(r296_Middle, r296_RightSB, r376_kArcExtX), r296_SymbolMid + r296_EqualHalfSpace * r376_kArcExtY2)), r296_dispiro(r296_widths.center(r296_OperatorStroke), r296_g4(r1_mix(r296_Middle, r296_SB, r376_kArcExtX), r296_SymbolMid - r296_EqualHalfSpace * r376_kArcExtY2), r296_g4(r296_Middle, r296_SymbolMid - r296_EqualHalfSpace, r296_heading(r296_Rightward)), r296_g4(r1_mix(r296_Middle, r296_RightSB, r376_kArcExtX), r296_SymbolMid - r296_EqualHalfSpace * r376_kArcExtY1)))));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equalParallel', 8917, function () {
            var _r380_t1;
            var _r380_t0 = this;
            var r380_currentGlyph = _r380_t0;
            r380_currentGlyph.include(r296_xn$referglyph$1aao('equal'), true, true);
            r380_currentGlyph.include(r296_xn$referglyph$1aao('parallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equalDoubleSlash', 10723, function () {
            var _r385_t1;
            var _r385_t0 = this;
            var r385_currentGlyph = _r385_t0;
            r385_currentGlyph.include(r296_EqualShape(r1_mix(r296_SB, 0, 0.5), r1_mix(r296_RightSB, r296_Width, 0.5)), true, true);
            r385_currentGlyph.include(r296_xn$referglyph$1aao('slantedParallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('equalDoubleSlashTilde', 10724, function () {
            var _r390_t1;
            var _r390_t0 = this;
            var r390_currentGlyph = _r390_t0;
            r390_currentGlyph.include(r296_xn$referglyph$1aao('equalDoubleSlash'), true, true);
            r390_currentGlyph.include(r296_MarkSet.tack());
            r390_currentGlyph.include(r296_xn$referglyph$1aao('tildeAbove'));
            r390_currentGlyph.include(r296_xn$clearanchors$1aao());
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('identDoubleSlash', 10725, function () {
            var _r397_t1;
            var _r397_t0 = this;
            var r397_currentGlyph = _r397_t0;
            r397_currentGlyph.include(r296_IdentShape(r1_mix(r296_SB, 0, 0.5), r1_mix(r296_RightSB, r296_Width, 0.5)), true, true);
            r397_currentGlyph.include(r296_xn$referglyph$1aao('slantedParallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('recordMark', 10727, function () {
            var _r402_t1;
            var _r402_t0 = this;
            var r402_currentGlyph = _r402_t0;
            r402_currentGlyph.include(r296_xn$referglyph$1aao('equal'), true, true);
            r402_currentGlyph.include(r296_xn$referglyph$1aao('stile'));
            return void 0;
        });
        r296_turned('equalDot', 10854, 'oneDotApproxEq', r296_Middle, r296_SymbolMid);
        r296_WithDotVariants('oneDotIdent', 10855, function (r405_DrawAt, r405_kr, r405_ov) {
            var _r405_t0, _r405_t1;
            return function () {
                var _r407_t1;
                var _r407_t0 = this;
                var r407_currentGlyph = _r407_t0;
                var r407_dr = r296_DotRadius * r405_kr * r296_OperatorStroke / r296_Stroke;
                r407_currentGlyph.include(r296_xn$referglyph$1aao('ident'));
                r407_currentGlyph.include(r405_DrawAt(r296_Middle, r296_SymbolMid + r296_EqualHalfSpace * 0.5 + r296_EqDotDistance, r407_dr - r405_ov));
                return void 0;
            };
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('identParallel', 10856, function () {
            var _r412_t1;
            var _r412_t0 = this;
            var r412_currentGlyph = _r412_t0;
            r412_currentGlyph.include(r296_xn$referglyph$1aao('ident'), true, true);
            r412_currentGlyph.include(r296_xn$referglyph$1aao('parallel'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('identInterleave', 10857, function () {
            var _r417_t1;
            var _r417_t0 = this;
            var r417_currentGlyph = _r417_t0;
            r417_currentGlyph.include(r296_IdentShape(r1_mix(r296_SB, 0, 0.5), r1_mix(r296_RightSB, r296_Width, 0.5)), true, true);
            r417_currentGlyph.include(r296_xn$referglyph$1aao('interleave'));
            return void 0;
        });
        r296_xn$createAndSaveGlyphImpl$2Lrc3c('bumpEqual', 10926, function () {
            var _r422_t1;
            var _r422_t0 = this;
            var r422_currentGlyph = _r422_t0;
            r422_currentGlyph.include(r296_intersection(r296_Rect(r296_ParenTop, r296_SymbolMid, 0, r296_Width), r296_xn$referglyph$1aao('geometricallyEquivalentTo')));
            r422_currentGlyph.include(r296_ApparentTranslate(0, r296_EqualHalfSpace * 0.5));
            r422_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid, r296_OperatorStroke));
            r422_currentGlyph.include(r296_HBar.m(r296_SB, r296_RightSB, r296_SymbolMid - r296_EqualHalfSpace * 1.5, r296_OperatorStroke));
            return void 0;
        });
        return r296_xn$createAndSaveGlyphImpl$2Lrc3c('groupMark', 11218, function () {
            var _r429_t1;
            var _r429_t0 = this;
            var r429_currentGlyph = _r429_t0;
            r429_currentGlyph.include(r296_xn$referglyph$1aao('ident'), true, true);
            r429_currentGlyph.include(r296_xn$referglyph$1aao('stile'));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r434_xn$Capture_Ext$2Lrc2b) {
    var _r434_t0, _r434_t1;
    r434_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r434_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Addons', function (r435_xn$Capture$2Lrc8, r435_xn$ExportCapture$2Lrc4b) {
        var r435_EqEqBarNegation, _r435_t7, _r435_t8;
        var _r435_t0 = r435_xn$Capture$2Lrc8;
        var r435_xn$createAndSaveGlyphImpl$2Lrc3c = _r435_t0['$createAndSaveGlyphImpl$'];
        var r435_xn$NamedParameterPair$2Lrc9b = _r435_t0['$NamedParameterPair$'];
        var r435_xn$Exec$2Lrc5 = _r435_t0['$Exec$'];
        var r435_para = _r435_t0.para;
        var _r435_t1 = r435_xn$Capture$2Lrc8.Metrics;
        var r435_SymbolMid = _r435_t1.SymbolMid;
        var r435_Downward = _r435_t1.Downward;
        var r435_Middle = _r435_t1.Middle;
        var r435_AdviceStroke = _r435_t1.AdviceStroke;
        var _r435_t2 = r435_xn$Capture$2Lrc8.SpiroFns;
        var r435_flat = _r435_t2.flat;
        var r435_widths = _r435_t2.widths;
        var r435_heading = _r435_t2.heading;
        var r435_dispiro = _r435_t2.dispiro;
        var _r435_t3 = r435_xn$Capture$2Lrc8.BooleFns;
        var _r435_t4 = r435_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r435_t5 = r435_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r435_t6 = r435_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r435_lessEqDist = _r435_t6.lessEqDist;
        var r435_dH = _r435_t6.dH;
        var r435_dSH = _r435_t6.dSH;
        r435_xn$ExportCapture$2Lrc4b(function () {
            var _r440_t0, _r440_t1;
            return {
                'lesslessSW': r435_lesslessSW,
                'muchLessSW': r435_muchLessSW,
                'lesslessSWO': r435_lesslessSWO,
                'llggHeight': r435_llggHeight
            };
        });
        var r435_lesslessSW = r435_AdviceStroke(3.5);
        var r435_muchLessSW = r435_AdviceStroke(4.5, r435_para.diversityM);
        var r435_lesslessSWO = Math.max(r435_lesslessSW, r435_lessEqDist);
        var r435_llggHeight = r435_dH * 2 + r435_lessEqDist * 2;
        r435_xn$ExportCapture$2Lrc4b(function () {
            var _r442_t0, _r442_t1;
            return { 'EqEqBarNegationImpl': r435_EqEqBarNegationImpl };
        });
        var r435_EqEqBarNegationImpl = function (r443_sw, r443_y1, r443_y2) {
            var _r443_t0, _r443_t1;
            return r435_dispiro(r435_widths.center(r443_sw), r435_flat(r435_Middle + r435_lessEqDist, r443_y1 + r435_lesslessSWO, r435_heading(r435_Downward)), r435_flat(r435_Middle - r435_lessEqDist, r443_y2 - r435_lesslessSWO, r435_heading(r435_Downward)));
        };
        r435_xn$ExportCapture$2Lrc4b(function () {
            var _r445_t0, _r445_t1;
            return { 'EqEqBarNegation': r435_EqEqBarNegation };
        });
        return r435_EqEqBarNegation = function () {
            var _r446_t0, _r446_t1;
            return r435_EqEqBarNegationImpl(r435_lesslessSW, r435_SymbolMid - r435_dSH + r435_lessEqDist * 2 / 3, r435_SymbolMid - r435_dSH - r435_lessEqDist);
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r449_xn$Capture_Ext$2Lrc2b) {
    var _r449_t0, _r449_t1;
    r449_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r449_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Colons', function (r450_xn$Capture$2Lrc8, r450_xn$ExportCapture$2Lrc4b) {
        var _r450_t8, _r450_t9;
        var _r450_t0 = r450_xn$Capture$2Lrc8;
        var r450_xn$createAndSaveGlyphImpl$2Lrc3c = _r450_t0['$createAndSaveGlyphImpl$'];
        var r450_xn$NamedParameterPair$2Lrc9b = _r450_t0['$NamedParameterPair$'];
        var r450_xn$Exec$2Lrc5 = _r450_t0['$Exec$'];
        var _r450_t1 = r450_xn$Capture$2Lrc8.Metrics;
        var r450_Width = _r450_t1.Width;
        var r450_SB = _r450_t1.SB;
        var r450_XH = _r450_t1.XH;
        var r450_SymbolMid = _r450_t1.SymbolMid;
        var r450_PlusTop = _r450_t1.PlusTop;
        var r450_PlusBot = _r450_t1.PlusBot;
        var r450_ApparentTranslate = _r450_t1.ApparentTranslate;
        var r450_Stroke = _r450_t1.Stroke;
        var r450_DotSize = _r450_t1.DotSize;
        var r450_RightSB = _r450_t1.RightSB;
        var r450_Middle = _r450_t1.Middle;
        var r450_DotRadius = _r450_t1.DotRadius;
        var r450_OperatorStroke = _r450_t1.OperatorStroke;
        var _r450_t2 = r450_xn$Capture$2Lrc8.SpiroFns;
        var _r450_t3 = r450_xn$Capture$2Lrc8.BooleFns;
        var _r450_t4 = r450_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r450_HBar = _r450_t4.HBar;
        var r450_WithDotVariants = _r450_t4.WithDotVariants;
        var _r450_t5 = r450_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r450_t6 = r450_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Arrow'].resolve();
        var r450_ArrowShape = _r450_t6.ArrowShape;
        var _r450_t7 = r450_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Equal'].resolve();
        var r450_EqualShape = _r450_t7.EqualShape;
        var r450_ColonEqSbSquash = 0.5;
        var r450_ColonEqColonShape = function (r455_sign, r455_DrawAt, r455_kr, r455_ov) {
            var _r455_t0, _r455_t1;
            return r450_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r458_t1;
                var _r458_t0 = this;
                var r458_currentGlyph = _r458_t0;
                var r458_dr = r450_DotRadius * r455_kr * r450_OperatorStroke / r450_Stroke;
                r458_currentGlyph.include(r455_DrawAt(r450_Middle, r458_dr, r458_dr - r455_ov));
                r458_currentGlyph.include(r455_DrawAt(r450_Middle, r450_XH - r458_dr, r458_dr - r455_ov));
                var r458_delta = Math.max(0, r450_Middle - r458_dr - r450_SB * r450_ColonEqSbSquash);
                r458_currentGlyph.include(r450_ApparentTranslate(r455_sign * r458_delta, r450_SymbolMid - r450_XH / 2));
                return void 0;
            });
        };
        r450_WithDotVariants('eqColon', 8789, function (r462_DrawAt, r462_kr, r462_ov) {
            var _r462_t0, _r462_t1;
            return function () {
                var _r464_t1;
                var _r464_t0 = this;
                var r464_currentGlyph = _r464_t0;
                r464_currentGlyph.include(r450_ColonEqColonShape(+1, r462_DrawAt, r462_kr, r462_ov));
                r464_currentGlyph.include(r450_EqualShape(r450_SB * r450_ColonEqSbSquash, r450_RightSB - r450_DotSize * r462_kr));
                return void 0;
            };
        });
        r450_WithDotVariants('colonEq', 8788, function (r467_DrawAt, r467_kr, r467_ov) {
            var _r467_t0, _r467_t1;
            return function () {
                var _r469_t1;
                var _r469_t0 = this;
                var r469_currentGlyph = _r469_t0;
                r469_currentGlyph.include(r450_ColonEqColonShape(-1, r467_DrawAt, r467_kr, r467_ov));
                r469_currentGlyph.include(r450_EqualShape(r450_SB + r450_DotSize * r467_kr, r450_Width - r450_SB * r450_ColonEqSbSquash));
                return void 0;
            };
        });
        return r450_WithDotVariants('colonArrow', 10740, function (r472_DrawAt, r472_kr, r472_ov) {
            var _r472_t0, _r472_t1;
            return function () {
                var _r474_t1;
                var _r474_t0 = this;
                var r474_currentGlyph = _r474_t0;
                var r474_barLeft = r450_SB + r450_DotSize * r472_kr;
                var r474_barRight = r450_Width - r450_SB * r450_ColonEqSbSquash;
                var r474_arrowHeadSize = Math.min((r450_PlusTop - r450_PlusBot) / 2, 0.75 * (r474_barRight - r474_barLeft));
                r474_currentGlyph.include(r450_ColonEqColonShape(-1, r472_DrawAt, r472_kr, r472_ov));
                r474_currentGlyph.include(r450_HBar.m(r1_mix(r450_SB, r474_barLeft, 0.8), r1_mix(r474_barLeft, r474_barRight, 0.5), r450_SymbolMid, r450_OperatorStroke));
                r474_currentGlyph.include(r450_ArrowShape(r474_barLeft, r450_SymbolMid, r474_barRight, r450_SymbolMid, r474_arrowHeadSize));
                return void 0;
            };
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r480_xn$Capture_Ext$2Lrc2b) {
    var _r480_t0, _r480_t1;
    r480_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r480_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Sym', function (r481_xn$Capture$2Lrc8, r481_xn$ExportCapture$2Lrc4b) {
        var _r481_t9, _r481_t10;
        var _r481_t0 = r481_xn$Capture$2Lrc8;
        var r481_xn$createAndSaveGlyphImpl$2Lrc3c = _r481_t0['$createAndSaveGlyphImpl$'];
        var r481_xn$NamedParameterPair$2Lrc9b = _r481_t0['$NamedParameterPair$'];
        var r481_xn$Exec$2Lrc5 = _r481_t0['$Exec$'];
        var r481_MarkSet = _r481_t0.MarkSet;
        var r481_AS_BASE = _r481_t0.AS_BASE;
        var _r481_t1 = r481_xn$Capture$2Lrc8.Metrics;
        var r481_SB = _r481_t1.SB;
        var r481_SymbolMid = _r481_t1.SymbolMid;
        var r481_OperTop = _r481_t1.OperTop;
        var r481_PlusTop = _r481_t1.PlusTop;
        var r481_PlusBot = _r481_t1.PlusBot;
        var r481_ApparentTranslate = _r481_t1.ApparentTranslate;
        var r481_Stroke = _r481_t1.Stroke;
        var r481_RightSB = _r481_t1.RightSB;
        var r481_Middle = _r481_t1.Middle;
        var r481_DotRadius = _r481_t1.DotRadius;
        var r481_OperatorStroke = _r481_t1.OperatorStroke;
        var _r481_t2 = r481_xn$Capture$2Lrc8.SpiroFns;
        var _r481_t3 = r481_xn$Capture$2Lrc8.BooleFns;
        var _r481_t4 = r481_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r481_HBar = _r481_t4.HBar;
        var r481_xn$clearanchors$1aao = _r481_t4['clear-anchors'];
        var r481_WithDotVariants = _r481_t4.WithDotVariants;
        var _r481_t5 = r481_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r481_xn$referglyph$1aao = _r481_t5['refer-glyph'];
        var r481_VDual = _r481_t5.VDual;
        var _r481_t6 = r481_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r481_TildeShape = _r481_t6.TildeShape;
        var _r481_t7 = r481_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r481_EqualHalfSpace = _r481_t7.EqualHalfSpace;
        var _r481_t8 = r481_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addons'].resolve();
        var r481_EqEqBarNegationImpl = _r481_t8.EqEqBarNegationImpl;
        var r481_approxDist = r481_EqualHalfSpace * 1.75;
        var r481_symMag = (r481_OperTop - r481_SymbolMid) * 0.17;
        r481_xn$ExportCapture$2Lrc4b(function () {
            var _r488_t0, _r488_t1;
            return { 'symWave': r481_symWave };
        });
        var r481_symWave = function (r489_height, r489_mul, r489_sw) {
            var _r489_t0, _r489_t1;
            return r481_TildeShape(new r481_xn$NamedParameterPair$2Lrc9b('ttop', r489_height + r481_symMag * r489_mul), new r481_xn$NamedParameterPair$2Lrc9b('tbot', r489_height - r481_symMag * r489_mul), new r481_xn$NamedParameterPair$2Lrc9b('leftEnd', r481_SB), new r481_xn$NamedParameterPair$2Lrc9b('rightEnd', r481_RightSB), new r481_xn$NamedParameterPair$2Lrc9b('hs', r1_fallback(r489_sw, r481_OperatorStroke) / 2));
        };
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('sym', 8764, r481_symWave(r481_SymbolMid, 1));
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('flipSym', 8765, r481_symWave(r481_SymbolMid, -1));
        r481_WithDotVariants('twoDotSym', 8763, function (r497_DrawAt, r497_kr, r497_ov) {
            var _r497_t0, _r497_t1;
            return function () {
                var _r499_t1;
                var _r499_t0 = this;
                var r499_currentGlyph = _r499_t0;
                r499_currentGlyph.include(r481_xn$referglyph$1aao('sym'), true, true);
                r499_currentGlyph.include(r497_DrawAt(r481_Middle, r481_PlusTop, r481_DotRadius * r497_kr * r481_OperatorStroke / r481_Stroke - r497_ov));
                r499_currentGlyph.include(r497_DrawAt(r481_Middle, r481_PlusBot, r481_DotRadius * r497_kr * r481_OperatorStroke / r481_Stroke - r497_ov));
                return void 0;
            };
        });
        r481_VDual('approx', 8776, 'sym', r481_approxDist);
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('aapprox', 8779, function () {
            var _r505_t1;
            var _r505_t0 = this;
            var r505_currentGlyph = _r505_t0;
            r505_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist, 1));
            r505_currentGlyph.include(r481_symWave(r481_SymbolMid, 1));
            r505_currentGlyph.include(r481_symWave(r481_SymbolMid - r481_approxDist, 1));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('approxBar', 8778, function () {
            var _r511_t1;
            var _r511_t0 = this;
            var r511_currentGlyph = _r511_t0;
            r511_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist, 1));
            r511_currentGlyph.include(r481_symWave(r481_SymbolMid, 1));
            r511_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('barSym', 8770, function () {
            var _r517_t1;
            var _r517_t0 = this;
            var r517_currentGlyph = _r517_t0;
            r517_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r517_currentGlyph.include(r481_ApparentTranslate(0, -r481_approxDist / 2));
            r517_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid + r481_approxDist / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('symEq', 8771, function () {
            var _r523_t1;
            var _r523_t0 = this;
            var r523_currentGlyph = _r523_t0;
            r523_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r523_currentGlyph.include(r481_ApparentTranslate(0, r481_approxDist / 2));
            r523_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('symEqEq', 8773, function () {
            var _r529_t1;
            var _r529_t0 = this;
            var r529_currentGlyph = _r529_t0;
            var r529_sympShift = r481_approxDist + r481_EqualHalfSpace * 1.5;
            r529_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r529_currentGlyph.include(r481_ApparentTranslate(0, r529_sympShift / 2));
            r529_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r529_sympShift / 2 + r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r529_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r529_sympShift / 2, r481_OperatorStroke));
            r481_xn$createAndSaveGlyphImpl$2Lrc3c('symEqEqBarNegated', 8774, function () {
                var _r535_t1;
                var _r535_t0 = this;
                _r535_t0.include(r529_currentGlyph, true, true);
                _r535_t0.cloneRankFromGlyph(r529_currentGlyph);
                return _r535_t0.include(r481_EqEqBarNegationImpl(r481_OperatorStroke, r481_SymbolMid - r529_sympShift / 2 + r481_EqualHalfSpace * 1.5, r481_SymbolMid - r529_sympShift / 2));
            });
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('flipSymEq', 8909, function () {
            var _r538_t1;
            var _r538_t0 = this;
            var r538_currentGlyph = _r538_t0;
            r538_currentGlyph.include(r481_xn$referglyph$1aao('flipSym'), r481_AS_BASE);
            r538_currentGlyph.include(r481_ApparentTranslate(0, r481_approxDist / 2));
            r538_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('flipSymEqEq', 8780, function () {
            var _r544_t1;
            var _r544_t0 = this;
            var r544_currentGlyph = _r544_t0;
            var r544_sympShift = r481_approxDist + r481_EqualHalfSpace * 1.5;
            r544_currentGlyph.include(r481_xn$referglyph$1aao('flipSym'), r481_AS_BASE);
            r544_currentGlyph.include(r481_ApparentTranslate(0, r544_sympShift / 2));
            r544_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r544_sympShift / 2 + r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r544_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r544_sympShift / 2, r481_OperatorStroke));
            return void 0;
        });
        r481_WithDotVariants('oneDotSym', 10858, function (r549_DrawAt, r549_kr, r549_ov) {
            var _r549_t0, _r549_t1;
            return function () {
                var _r551_t1;
                var _r551_t0 = this;
                var r551_currentGlyph = _r551_t0;
                r551_currentGlyph.include(r481_xn$referglyph$1aao('sym'), true, true);
                r551_currentGlyph.include(r549_DrawAt(r481_Middle, r481_PlusTop, r481_DotRadius * r549_kr * r481_OperatorStroke / r481_Stroke - r549_ov));
                return void 0;
            };
        });
        r481_WithDotVariants('twoDotSymAlt', 10859, function (r554_DrawAt, r554_kr, r554_ov) {
            var _r554_t0, _r554_t1;
            return function () {
                var _r556_t1;
                var _r556_t0 = this;
                var r556_currentGlyph = _r556_t0;
                var r556_dr = r481_DotRadius * r554_kr * r481_OperatorStroke / r481_Stroke;
                r556_currentGlyph.include(r481_xn$referglyph$1aao('sym'));
                r556_currentGlyph.include(r554_DrawAt(r1_mix(r481_SB, r481_RightSB, 1 / 6), r481_PlusBot, r556_dr - r554_ov));
                r556_currentGlyph.include(r554_DrawAt(r1_mix(r481_SB, r481_RightSB, 5 / 6), r481_PlusTop, r556_dr - r554_ov));
                return void 0;
            };
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('symMinusSym', 10860, function () {
            var _r562_t1;
            var _r562_t0 = this;
            var r562_currentGlyph = _r562_t0;
            r562_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist, 1));
            r562_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid, r481_OperatorStroke));
            r562_currentGlyph.include(r481_symWave(r481_SymbolMid - r481_approxDist, 1));
            return void 0;
        });
        r481_WithDotVariants('oneDotSymEqEq', 10861, function (r566_DrawAt, r566_kr, r566_ov) {
            var _r566_t0, _r566_t1;
            return function () {
                var _r568_t1;
                var _r568_t0 = this;
                var r568_currentGlyph = _r568_t0;
                r568_currentGlyph.include(r481_xn$referglyph$1aao('symEqEq'), true, true);
                r568_currentGlyph.include(r566_DrawAt(r481_Middle, r481_PlusTop + r481_EqualHalfSpace * 1.5, r481_DotRadius * r566_kr * r481_OperatorStroke / r481_Stroke - r566_ov));
                return void 0;
            };
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('approxCircumflex', 10863, function () {
            var _r573_t1;
            var _r573_t0 = this;
            var r573_currentGlyph = _r573_t0;
            r573_currentGlyph.include(r481_xn$referglyph$1aao('approx'), true, true);
            r573_currentGlyph.include(r481_MarkSet.plus());
            r573_currentGlyph.include(r481_xn$referglyph$1aao('circumflexAbove'));
            r573_currentGlyph.include(r481_xn$clearanchors$1aao());
            return void 0;
        });
        r481_xn$createAndSaveGlyphImpl$2Lrc3c('approxEqEq', 10864, function () {
            var _r580_t1;
            var _r580_t0 = this;
            var r580_currentGlyph = _r580_t0;
            r580_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist * 1.375, 1));
            r580_currentGlyph.include(r481_symWave(r481_SymbolMid + r481_approxDist * 0.375, 1));
            r580_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist * 1.5 + r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r580_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid - r481_approxDist * 1.5, r481_OperatorStroke));
            return void 0;
        });
        return r481_xn$createAndSaveGlyphImpl$2Lrc3c('eqEqSym', 10867, function () {
            var _r587_t1;
            var _r587_t0 = this;
            var r587_currentGlyph = _r587_t0;
            var r587_sympShift = r481_approxDist + r481_EqualHalfSpace * 1.5;
            r587_currentGlyph.include(r481_xn$referglyph$1aao('sym'), r481_AS_BASE);
            r587_currentGlyph.include(r481_ApparentTranslate(0, -r587_sympShift / 2));
            r587_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid + r587_sympShift / 2 - r481_EqualHalfSpace * 1.5, r481_OperatorStroke));
            r587_currentGlyph.include(r481_HBar.m(r481_SB, r481_RightSB, r481_SymbolMid + r587_sympShift / 2, r481_OperatorStroke));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r594_xn$Capture_Ext$2Lrc2b) {
    var _r594_t0, _r594_t1;
    r594_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r594_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Inequality', function (r595_xn$Capture$2Lrc8, r595_xn$ExportCapture$2Lrc4b) {
        var _r595_t9, _r595_t10, _r595_t11, _r595_tag12;
        var _r595_t0 = r595_xn$Capture$2Lrc8;
        var r595_xn$createAndSaveGlyphImpl$2Lrc3c = _r595_t0['$createAndSaveGlyphImpl$'];
        var r595_xn$NamedParameterPair$2Lrc9b = _r595_t0['$NamedParameterPair$'];
        var r595_xn$Exec$2Lrc5 = _r595_t0['$Exec$'];
        var r595_para = _r595_t0.para;
        var r595_DivFrame = _r595_t0.DivFrame;
        var _r595_t1 = r595_xn$Capture$2Lrc8.Metrics;
        var r595_Width = _r595_t1.Width;
        var r595_SB = _r595_t1.SB;
        var r595_SymbolMid = _r595_t1.SymbolMid;
        var r595_ApparentTranslate = _r595_t1.ApparentTranslate;
        var r595_Rightward = _r595_t1.Rightward;
        var r595_Leftward = _r595_t1.Leftward;
        var r595_O = _r595_t1.O;
        var r595_Stroke = _r595_t1.Stroke;
        var r595_RightSB = _r595_t1.RightSB;
        var r595_Middle = _r595_t1.Middle;
        var r595_DotRadius = _r595_t1.DotRadius;
        var r595_AdviceStroke = _r595_t1.AdviceStroke;
        var r595_OperatorStroke = _r595_t1.OperatorStroke;
        var _r595_t2 = r595_xn$Capture$2Lrc8.SpiroFns;
        var r595_corner = _r595_t2.corner;
        var r595_flat = _r595_t2.flat;
        var r595_curl = _r595_t2.curl;
        var r595_widths = _r595_t2.widths;
        var r595_heading = _r595_t2.heading;
        var r595_dispiro = _r595_t2.dispiro;
        var r595_xn$spirooutline$1aao = _r595_t2['spiro-outline'];
        var _r595_t3 = r595_xn$Capture$2Lrc8.BooleFns;
        var r595_union = _r595_t3.union;
        var r595_intersection = _r595_t3.intersection;
        var r595_difference = _r595_t3.difference;
        var _r595_t4 = r595_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r595_Rect = _r595_t4.Rect;
        var r595_HBar = _r595_t4.HBar;
        var r595_AsRadical = _r595_t4.AsRadical;
        var r595_WithDotVariants = _r595_t4.WithDotVariants;
        var _r595_t5 = r595_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r595_xn$selectvariant$7Hrq = _r595_t5['select-variant'];
        var r595_turned = _r595_t5.turned;
        var r595_xn$derivecomposites$7Hrq = _r595_t5['derive-composites'];
        var _r595_t6 = r595_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r595_dH = _r595_t6.dH;
        var r595_dSH = _r595_t6.dSH;
        var r595_lessEqDist = _r595_t6.lessEqDist;
        var _r595_t7 = r595_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Sym'].resolve();
        var r595_symWave = _r595_t7.symWave;
        var _r595_t8 = r595_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addons'].resolve();
        var r595_lesslessSW = _r595_t8.lesslessSW;
        var r595_muchLessSW = _r595_t8.muchLessSW;
        var r595_llggHeight = _r595_t8.llggHeight;
        r595_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r595_LessGreaterExpansion = function (r602_top, r602_bot, r602_l, r602_r) {
            var _r602_t0, _r602_t1;
            return Math.sqrt(1 + (r602_top - r602_bot) / (2 * (r602_r - r602_l)) * (r602_top - r602_bot) / (2 * (r602_r - r602_l)));
        };
        var r595_LessMaskShape = function (r603_top, r603_bot, r603_l, r603_r) {
            var _r603_t0, _r603_t1;
            return r595_xn$spirooutline$1aao(r595_corner(r603_r, r603_top), r595_corner(r603_r, r603_bot), r595_corner(r603_l, r1_mix(r603_bot, r603_top, 0.5)));
        };
        var r595_GreaterMaskShape = function (r604_top, r604_bot, r604_l, r604_r) {
            var _r604_t0, _r604_t1;
            return r595_xn$spirooutline$1aao(r595_corner(r604_l, r604_top), r595_corner(r604_l, r604_bot), r595_corner(r604_r, r1_mix(r604_bot, r604_top, 0.5)));
        };
        var r595_LessShapeHalf = function (r605_sign, r605_top, r605_bot, r605_l, r605_r, r605_s, r605_p) {
            var _r605_t0, _r605_t1;
            var r605_exp = r595_LessGreaterExpansion(r605_top, r605_bot, r605_l, r605_r);
            var r605_expAmend = Math.min(Math.sqrt(2), r605_exp);
            var r605_endAdj = 0.5 * r605_s * (r605_exp - r605_expAmend);
            var r605_pp = r1_fallback(r605_p, 1);
            return r595_dispiro(r595_widths.center(r605_s), r595_flat(r1_mix(r605_l, r605_r, r605_pp), r1_mix(r1_mix(r605_top, r605_bot, 0.5), r1_mix(r605_bot, r605_top, r605_sign), r605_pp)), r595_curl(r605_l - r605_endAdj, r1_mix(r605_top, r605_bot, 0.5), r595_widths.center.heading(r605_s * r605_expAmend, r595_Leftward)));
        };
        var r595_GreaterShapeHalf = function (r606_sign, r606_top, r606_bot, r606_l, r606_r, r606_s, r606_p) {
            var _r606_t0, _r606_t1;
            var r606_exp = r595_LessGreaterExpansion(r606_top, r606_bot, r606_l, r606_r);
            var r606_expAmend = Math.min(Math.sqrt(2), r606_exp);
            var r606_endAdj = 0.5 * r606_s * (r606_exp - r606_expAmend);
            var r606_pp = r1_fallback(r606_p, 1);
            return r595_dispiro(r595_widths.center(r606_s), r595_flat(r1_mix(r606_r, r606_l, r606_pp), r1_mix(r1_mix(r606_top, r606_bot, 0.5), r1_mix(r606_bot, r606_top, r606_sign), r606_pp)), r595_curl(r606_r + r606_endAdj, r1_mix(r606_top, r606_bot, 0.5), r595_widths.center.heading(r606_s * r606_expAmend, r595_Rightward)));
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r608_t0, _r608_t1;
            return { 'LessShape': r595_LessShape };
        });
        var r595_LessShape = function (r609_top, r609_bot, r609_l, r609_r, r609_s) {
            var _r609_t0, _r609_t1;
            return r595_union(r595_LessShapeHalf(0, r609_top, r609_bot, r609_l, r609_r, r1_fallback(r609_s, r595_OperatorStroke)), r595_LessShapeHalf(1, r609_top, r609_bot, r609_l, r609_r, r1_fallback(r609_s, r595_OperatorStroke)));
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r611_t0, _r611_t1;
            return { 'LigationLessShape': r595_LigationLessShape };
        });
        var r595_LigationLessShape = function (r612_top, r612_bot, r612_l, r612_r, r612_s, r612_t, r612_gap) {
            var _r612_t0, _r612_t1;
            return r595_union(r595_intersection(r595_Rect(r1_mix(r612_bot, r612_top, 2), r1_mix(r612_top, r612_bot, 2), r1_mix(r612_r, r612_l, 2), r612_r), r595_union(r595_LessShapeHalf(0, r612_top, r612_bot, r612_l, r612_r, r1_fallback(r612_s, r595_OperatorStroke), 2), r595_LessShapeHalf(1, r612_top, r612_bot, r612_l, r612_r, r1_fallback(r612_s, r595_OperatorStroke), 2))), r595_intersection(r595_LessMaskShape(r612_top, r612_bot, r612_l, r612_r), r595_difference(r595_dispiro(r595_widths.lhs(r1_fallback(r612_t, r595_OperatorStroke)), r595_corner(r612_r, r612_bot), r595_corner(r612_r, r612_top)), r595_Rect(r1_mix(r612_top, r612_bot, 0.5) + r612_gap / 2, r1_mix(r612_top, r612_bot, 0.5) - r612_gap / 2, r612_l + r595_O, r612_r - r595_O))));
        };
        var r595_NormalSubsetShape = function (r613_top, r613_bot, r613_l, r613_r, r613_s) {
            var _r613_t0, _r613_t1;
            return r595_LigationLessShape(r613_top, r613_bot, r613_l, r613_r, r613_s, r613_s, 0);
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r615_t0, _r615_t1;
            return { 'GreaterShape': r595_GreaterShape };
        });
        var r595_GreaterShape = function (r616_top, r616_bot, r616_l, r616_r, r616_s) {
            var _r616_t0, _r616_t1;
            return r595_union(r595_GreaterShapeHalf(0, r616_top, r616_bot, r616_l, r616_r, r1_fallback(r616_s, r595_OperatorStroke)), r595_GreaterShapeHalf(1, r616_top, r616_bot, r616_l, r616_r, r1_fallback(r616_s, r595_OperatorStroke)));
        };
        r595_xn$ExportCapture$2Lrc4b(function () {
            var _r618_t0, _r618_t1;
            return { 'LigationGreaterShape': r595_LigationGreaterShape };
        });
        var r595_LigationGreaterShape = function (r619_top, r619_bot, r619_l, r619_r, r619_s, r619_t, r619_gap) {
            var _r619_t0, _r619_t1;
            return r595_union(r595_intersection(r595_Rect(r1_mix(r619_bot, r619_top, 2), r1_mix(r619_top, r619_bot, 2), r1_mix(r619_l, r619_r, 2), r619_l), r595_union(r595_GreaterShapeHalf(0, r619_top, r619_bot, r619_l, r619_r, r1_fallback(r619_s, r595_OperatorStroke), 2), r595_GreaterShapeHalf(1, r619_top, r619_bot, r619_l, r619_r, r1_fallback(r619_s, r595_OperatorStroke), 2))), r595_intersection(r595_GreaterMaskShape(r619_top, r619_bot, r619_l, r619_r), r595_difference(r595_dispiro(r595_widths.rhs(r1_fallback(r619_t, r595_OperatorStroke)), r595_corner(r619_l, r619_bot), r595_corner(r619_l, r619_top)), r595_Rect(r1_mix(r619_top, r619_bot, 0.5) + r619_gap / 2, r1_mix(r619_top, r619_bot, 0.5) - r619_gap / 2, r619_l + r595_O, r619_r - r595_O))));
        };
        var r595_NormalSupersetShape = function (r620_top, r620_bot, r620_l, r620_r, r620_s) {
            var _r620_t0, _r620_t1;
            return r595_LigationGreaterShape(r620_top, r620_bot, r620_l, r620_r, r620_s, r620_s, 0);
        };
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('less', '<', function () {
            var _r623_t1;
            var _r623_t0 = this;
            var r623_currentGlyph = _r623_t0;
            r623_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_WithDotVariants('lessDot', 8918, function (r625_DrawAt, r625_kr, r625_ov) {
            var _r625_t0, _r625_t1;
            return function () {
                var _r627_t1;
                var _r627_t0 = this;
                var r627_currentGlyph = _r627_t0;
                r627_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r627_currentGlyph.include(r625_DrawAt(r595_RightSB - r595_DotRadius, r595_SymbolMid, r595_DotRadius * r625_kr * r595_AdviceStroke(4) / r595_Stroke - r625_ov));
                return void 0;
            };
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSubsetOf', 8882, function () {
            var _r632_t1;
            var _r632_t0 = this;
            var r632_currentGlyph = _r632_t0;
            r632_currentGlyph.include(r595_NormalSubsetShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greater', '>', function () {
            var _r636_t1;
            var _r636_t0 = this;
            var r636_currentGlyph = _r636_t0;
            r636_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_WithDotVariants('greaterDot', 8919, function (r638_DrawAt, r638_kr, r638_ov) {
            var _r638_t0, _r638_t1;
            return function () {
                var _r640_t1;
                var _r640_t0 = this;
                var r640_currentGlyph = _r640_t0;
                r640_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r640_currentGlyph.include(r638_DrawAt(r595_SB + r595_DotRadius, r595_SymbolMid, r595_DotRadius * r638_kr * r595_AdviceStroke(4) / r595_Stroke - r638_ov));
                return void 0;
            };
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSupersetOf', 8883, function () {
            var _r645_t1;
            var _r645_t0 = this;
            var r645_currentGlyph = _r645_t0;
            r645_currentGlyph.include(r595_NormalSupersetShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB, r595_RightSB));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessEqUpper', null, r595_AsRadical(r595_LessShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterEqUpper', null, r595_AsRadical(r595_GreaterShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSubsetUpper', null, r595_AsRadical(r595_NormalSubsetShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('normalSupersetUpper', null, r595_AsRadical(r595_NormalSupersetShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB)));
        r595_xn$derivecomposites$7Hrq('less.narrow', null, 'lessEqUpper', r595_ApparentTranslate(0, -r595_lessEqDist));
        r595_xn$derivecomposites$7Hrq('lessEq', 8804, 'lessEqUpper', 'eqLower');
        r595_xn$derivecomposites$7Hrq('lessEqBarNegated', 10887, 'lessEqUpper', 'eqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('lessSym', 8818, 'lessEqUpper', 'symLower');
        r595_xn$derivecomposites$7Hrq('lessSymBarNegated', 8934, 'lessEqUpper', 'symBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('lessEqSlant', 10877, 'lessEqUpper', r595_LessShapeHalf(0, r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_OperatorStroke));
        r595_WithDotVariants('lessEqSlantDot', 10879, function (r651_DrawAt, r651_kr, r651_ov) {
            var _r651_t0, _r651_t1;
            return function () {
                var _r653_t1;
                var _r653_t0 = this;
                var r653_currentGlyph = _r653_t0;
                r653_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r653_currentGlyph.include(r595_LessShapeHalf(0, r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)));
                r653_currentGlyph.include(r651_DrawAt(r595_RightSB - r595_DotRadius, r595_SymbolMid + r595_lessEqDist, r595_DotRadius * r651_kr * r595_AdviceStroke(4) / r595_Stroke - r651_ov));
                return void 0;
            };
        });
        r595_xn$derivecomposites$7Hrq('greater.narrow', null, 'greaterEqUpper', r595_ApparentTranslate(0, -r595_lessEqDist));
        r595_xn$derivecomposites$7Hrq('greaterEq', 8805, 'greaterEqUpper', 'eqLower');
        r595_xn$derivecomposites$7Hrq('greaterEqBarNegated', 10888, 'greaterEqUpper', 'eqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterSym', 8819, 'greaterEqUpper', 'symLower');
        r595_xn$derivecomposites$7Hrq('greaterSymBarNegated', 8935, 'greaterEqUpper', 'symBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterEqSlant', 10878, 'greaterEqUpper', r595_GreaterShapeHalf(0, r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_OperatorStroke));
        r595_WithDotVariants('greaterEqSlantDot', 10880, function (r657_DrawAt, r657_kr, r657_ov) {
            var _r657_t0, _r657_t1;
            return function () {
                var _r659_t1;
                var _r659_t0 = this;
                var r659_currentGlyph = _r659_t0;
                r659_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)), true, true);
                r659_currentGlyph.include(r595_GreaterShapeHalf(0, r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_SB, r595_RightSB, r595_AdviceStroke(4)));
                r659_currentGlyph.include(r657_DrawAt(r595_SB + r595_DotRadius, r595_SymbolMid + r595_lessEqDist, r595_DotRadius * r657_kr * r595_AdviceStroke(4) / r595_Stroke - r657_ov));
                return void 0;
            };
        });
        r595_xn$derivecomposites$7Hrq('normalSubsetEq', 8884, 'normalSubsetUpper', 'eqLower');
        r595_xn$derivecomposites$7Hrq('normalSupersetEq', 8885, 'normalSupersetUpper', 'eqLower');
        r595_turned('turnGreaterEq', 8924, 'greaterEq', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEq', 8925, 'lessEq', r595_Middle, r595_SymbolMid);
        (function () {
            var r664_l = 0.3 * r595_Width;
            var r664_r = 2 * r595_Width - r664_l;
            var r664_l2 = r664_l - r595_Width;
            var r664_r2 = r664_r - r595_Width;
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('less.lig2', null, function () {
                var _r667_t1;
                var _r667_t0 = this;
                var r667_currentGlyph = _r667_t0;
                r1_Joining.set(r667_currentGlyph, r1_Joining.Classes.Right);
                r667_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH + r595_lessEqDist, r595_SymbolMid - r595_dH + r595_lessEqDist, r664_l, r664_r));
                return void 0;
            });
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('greater.lig2', null, function () {
                var _r671_t1;
                var _r671_t0 = this;
                var r671_currentGlyph = _r671_t0;
                r1_Joining.set(r671_currentGlyph, r1_Joining.Classes.Right);
                r671_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH + r595_lessEqDist, r595_SymbolMid - r595_dH + r595_lessEqDist, r664_l, r664_r));
                return void 0;
            });
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-lteq.lig2.flat', null, function () {
                var _r675_t1;
                var _r675_t0 = this;
                var r675_currentGlyph = _r675_t0;
                r1_Joining.set(r675_currentGlyph, r1_Joining.Classes.Left);
                r675_currentGlyph.include(r595_HBar.m(r664_l2, r664_r2, r595_SymbolMid - r595_dH - r595_lessEqDist, r595_OperatorStroke));
                r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-gteq.lig2.flat', null, function () {
                    var _r679_t1;
                    var _r679_t0 = this;
                    _r679_t0.include(r675_currentGlyph, true, true);
                    return _r679_t0.cloneRankFromGlyph(r675_currentGlyph);
                });
                return void 0;
            });
            r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-lteq.lig2.slanted', null, function () {
                var _r682_t1;
                var _r682_t0 = this;
                var r682_currentGlyph = _r682_t0;
                r1_Joining.set(r682_currentGlyph, r1_Joining.Classes.Left);
                r682_currentGlyph.include(r595_LessShapeHalf(0, r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r664_l2, r664_r2, r595_OperatorStroke));
                return void 0;
            });
            return r595_xn$createAndSaveGlyphImpl$2Lrc3c('eq.at-gteq.lig2.slanted', null, function () {
                var _r686_t1;
                var _r686_t0 = this;
                var r686_currentGlyph = _r686_t0;
                r1_Joining.set(r686_currentGlyph, r1_Joining.Classes.Left);
                r686_currentGlyph.include(r595_GreaterShapeHalf(0, r595_SymbolMid + r595_dH - r595_lessEqDist, r595_SymbolMid - r595_dH - r595_lessEqDist, r664_l2, r664_r2, r595_OperatorStroke));
                return void 0;
            });
        }());
        r595_xn$selectvariant$7Hrq('eq.at-lteq.lig2');
        r595_xn$selectvariant$7Hrq('eq.at-gteq.lig2');
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessEqEqUpper', null, r595_AsRadical(r595_LessShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist * 1.75, r595_SB, r595_RightSB, r595_lesslessSW)));
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterEqEqUpper', null, r595_AsRadical(r595_GreaterShape(r595_SymbolMid + r595_dSH + r595_lessEqDist, r595_SymbolMid - r595_dSH + r595_lessEqDist * 1.75, r595_SB, r595_RightSB, r595_lesslessSW)));
        r595_xn$derivecomposites$7Hrq('lessEqEq', 8806, 'lessEqEqUpper', 'eqEqLower');
        r595_xn$derivecomposites$7Hrq('lessEqEqBarNegated', 8808, 'lessEqEqUpper', 'eqEqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('lessSymSym', 10885, 'lessEqEqUpper', 'symSymLower');
        r595_xn$derivecomposites$7Hrq('lessSymSymBarNegated', 10889, 'lessEqEqUpper', 'symSymBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterEqEq', 8807, 'greaterEqEqUpper', 'eqEqLower');
        r595_xn$derivecomposites$7Hrq('greaterEqEqBarNegated', 8809, 'greaterEqEqUpper', 'eqEqBarNegatedLower');
        r595_xn$derivecomposites$7Hrq('greaterSymSym', 10886, 'greaterEqEqUpper', 'symSymLower');
        r595_xn$derivecomposites$7Hrq('greaterSymSymBarNegated', 10890, 'greaterEqEqUpper', 'symSymBarNegatedLower');
        r595_turned('turnGreaterEqSlant', 10901, 'greaterEqSlant', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEqSlant', 10902, 'lessEqSlant', r595_Middle, r595_SymbolMid);
        r595_turned('turnGreaterEqSlantDot', 10903, 'greaterEqSlantDot', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEqSlantDot', 10904, 'lessEqSlantDot', r595_Middle, r595_SymbolMid);
        r595_turned('turnGreaterEqEq', 10905, 'greaterEqEq', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessEqEq', 10906, 'lessEqEq', r595_Middle, r595_SymbolMid);
        r595_turned('turnGreaterSym', 10909, 'greaterSym', r595_Middle, r595_SymbolMid);
        r595_turned('turnLessSym', 10910, 'lessSym', r595_Middle, r595_SymbolMid);
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessGreater', 8822, function () {
            var _r692_t1;
            var _r692_t0 = this;
            var r692_currentGlyph = _r692_t0;
            r692_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 2, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r692_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 2, r595_SB, r595_RightSB, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterLess', 8823, function () {
            var _r697_t1;
            var _r697_t0 = this;
            var r697_currentGlyph = _r697_t0;
            r697_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 2, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r697_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 2, r595_SB, r595_RightSB, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessEqGreater', 8922, function () {
            var _r702_t1;
            var _r702_t0 = this;
            var r702_currentGlyph = _r702_t0;
            r702_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 2 + r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist * 2, r595_SB, r595_RightSB, r595_lesslessSW));
            r702_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist * 2, r595_SymbolMid - r595_llggHeight / 2 - r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r702_currentGlyph.include(r595_HBar.m(r595_SB, r595_RightSB, r595_SymbolMid, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greaterEqLess', 8923, function () {
            var _r708_t1;
            var _r708_t0 = this;
            var r708_currentGlyph = _r708_t0;
            r708_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_llggHeight / 2 + r595_lessEqDist, r595_SymbolMid - r595_llggHeight / 6 + r595_lessEqDist * 2, r595_SB, r595_RightSB, r595_lesslessSW));
            r708_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_llggHeight / 6 - r595_lessEqDist * 2, r595_SymbolMid - r595_llggHeight / 2 - r595_lessEqDist, r595_SB, r595_RightSB, r595_lesslessSW));
            r708_currentGlyph.include(r595_HBar.m(r595_SB, r595_RightSB, r595_SymbolMid, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('lessless', 8810, function () {
            var _r714_t1;
            var _r714_t0 = this;
            var r714_currentGlyph = _r714_t0;
            r714_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB - r595_lessEqDist / 2, r595_RightSB - r595_lessEqDist * 2, r595_lesslessSW));
            r714_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB + r595_lessEqDist * 2, r595_RightSB + r595_lessEqDist / 2, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('greatergreater', 8811, function () {
            var _r719_t1;
            var _r719_t0 = this;
            var r719_currentGlyph = _r719_t0;
            r719_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB - r595_lessEqDist / 2, r595_RightSB - r595_lessEqDist * 2, r595_lesslessSW));
            r719_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r595_SB + r595_lessEqDist * 2, r595_RightSB + r595_lessEqDist / 2, r595_lesslessSW));
            return void 0;
        });
        r595_xn$createAndSaveGlyphImpl$2Lrc3c('muchLess', 8920, function () {
            var _r724_t1;
            var _r724_t0 = this;
            var r724_currentGlyph = _r724_t0;
            var r724_df = r724_currentGlyph.include(r595_DivFrame(r595_para.diversityM, 3));
            r724_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r1_mix(r724_df.leftSB, r724_df.rightSB, 0 / 3), r1_mix(r724_df.leftSB, r724_df.rightSB, 1 / 3), r595_muchLessSW));
            r724_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r1_mix(r724_df.leftSB, r724_df.rightSB, 1 / 3), r1_mix(r724_df.leftSB, r724_df.rightSB, 2 / 3), r595_muchLessSW));
            r724_currentGlyph.include(r595_LessShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r1_mix(r724_df.leftSB, r724_df.rightSB, 2 / 3), r1_mix(r724_df.leftSB, r724_df.rightSB, 3 / 3), r595_muchLessSW));
            return void 0;
        });
        return r595_xn$createAndSaveGlyphImpl$2Lrc3c('muchGreater', 8921, function () {
            var _r731_t1;
            var _r731_t0 = this;
            var r731_currentGlyph = _r731_t0;
            var r731_df = r731_currentGlyph.include(r595_DivFrame(r595_para.diversityM, 3));
            r731_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r1_mix(r731_df.leftSB, r731_df.rightSB, 0 / 3), r1_mix(r731_df.leftSB, r731_df.rightSB, 1 / 3), r595_muchLessSW));
            r731_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r1_mix(r731_df.leftSB, r731_df.rightSB, 1 / 3), r1_mix(r731_df.leftSB, r731_df.rightSB, 2 / 3), r595_muchLessSW));
            r731_currentGlyph.include(r595_GreaterShape(r595_SymbolMid + r595_dH, r595_SymbolMid - r595_dH, r1_mix(r731_df.leftSB, r731_df.rightSB, 2 / 3), r1_mix(r731_df.leftSB, r731_df.rightSB, 3 / 3), r595_muchLessSW));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r738_xn$Capture_Ext$2Lrc2b) {
    var _r738_t0, _r738_t1;
    r738_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r738_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Precedes-Succeeds', function (r739_xn$Capture$2Lrc8, r739_xn$ExportCapture$2Lrc4b) {
        var _r739_t8, _r739_t9;
        var _r739_t0 = r739_xn$Capture$2Lrc8;
        var r739_xn$createAndSaveGlyphImpl$2Lrc3c = _r739_t0['$createAndSaveGlyphImpl$'];
        var r739_xn$NamedParameterPair$2Lrc9b = _r739_t0['$NamedParameterPair$'];
        var r739_xn$Exec$2Lrc5 = _r739_t0['$Exec$'];
        var _r739_t1 = r739_xn$Capture$2Lrc8.Metrics;
        var r739_SB = _r739_t1.SB;
        var r739_SymbolMid = _r739_t1.SymbolMid;
        var r739_ApparentTranslate = _r739_t1.ApparentTranslate;
        var r739_Rightward = _r739_t1.Rightward;
        var r739_Leftward = _r739_t1.Leftward;
        var r739_CThin = _r739_t1.CThin;
        var r739_RightSB = _r739_t1.RightSB;
        var r739_Middle = _r739_t1.Middle;
        var r739_OperatorStroke = _r739_t1.OperatorStroke;
        var _r739_t2 = r739_xn$Capture$2Lrc8.SpiroFns;
        var r739_g4 = _r739_t2.g4;
        var r739_end = _r739_t2.end;
        var r739_straight = _r739_t2.straight;
        var r739_widths = _r739_t2.widths;
        var r739_heading = _r739_t2.heading;
        var r739_dispiro = _r739_t2.dispiro;
        var _r739_t3 = r739_xn$Capture$2Lrc8.BooleFns;
        var _r739_t4 = r739_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r739_AsRadical = _r739_t4.AsRadical;
        var _r739_t5 = r739_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r739_turned = _r739_t5.turned;
        var r739_xn$derivecomposites$7Hrq = _r739_t5['derive-composites'];
        var _r739_t6 = r739_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r739_dH = _r739_t6.dH;
        var r739_dSH = _r739_t6.dSH;
        var r739_lessEqDist = _r739_t6.lessEqDist;
        var _r739_t7 = r739_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addons'].resolve();
        var r739_lesslessSW = _r739_t7.lesslessSW;
        r739_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r739_PrecedesShapeA = function (r745_top, r745_bot, r745_l, r745_r, r745_s, r745_cth) {
            var _r745_t0, _r745_t1;
            var r745_fine = r745_s * r745_cth;
            return r739_dispiro(r739_widths.center(r745_s), r739_g4(r745_r, r745_top), r739_straight.left.end(r745_l, r1_mix(r745_top, r745_bot, 0.5) + r745_s / 2, r739_widths.heading(r745_fine, 0, r739_Leftward)));
        };
        var r739_PrecedesShapeB = function (r746_top, r746_bot, r746_l, r746_r, r746_s, r746_cth) {
            var _r746_t0, _r746_t1;
            var r746_fine = r746_s * r746_cth;
            return r739_dispiro(r739_widths.center(r746_s), r739_g4(r746_r, r746_bot), r739_straight.left.end(r746_l, r1_mix(r746_top, r746_bot, 0.5) - r746_s / 2, r739_widths.heading(0, r746_fine, r739_Leftward)));
        };
        var r739_SucceedsShapeA = function (r747_top, r747_bot, r747_l, r747_r, r747_s, r747_cth) {
            var _r747_t0, _r747_t1;
            var r747_fine = r747_s * r747_cth;
            return r739_dispiro(r739_widths.center(r747_s), r739_g4(r747_l, r747_top), r739_straight.right.end(r747_r, r1_mix(r747_top, r747_bot, 0.5) + r747_s / 2, r739_widths.heading(0, r747_fine, r739_Rightward)));
        };
        var r739_SucceedsShapeB = function (r748_top, r748_bot, r748_l, r748_r, r748_s, r748_cth) {
            var _r748_t0, _r748_t1;
            var r748_fine = r748_s * r748_cth;
            return r739_dispiro(r739_widths.center(r748_s), r739_g4(r748_l, r748_bot), r739_straight.right.end(r748_r, r1_mix(r748_top, r748_bot, 0.5) - r748_s / 2, r739_widths.heading(r748_fine, 0, r739_Rightward)));
        };
        var r739_PrecedesShape = function (r749_top, r749_bot, r749_l, r749_r, r749_s) {
            var _r749_t0, _r749_t1;
            return function () {
                var _r751_t1;
                var _r751_t0 = this;
                var r751_currentGlyph = _r751_t0;
                r751_currentGlyph.include(r739_PrecedesShapeA(r749_top, r749_bot, r749_l, r749_r, r1_fallback(r749_s, r739_OperatorStroke), r739_CThin));
                r751_currentGlyph.include(r739_PrecedesShapeB(r749_top, r749_bot, r749_l, r749_r, r1_fallback(r749_s, r739_OperatorStroke), r739_CThin));
                return void 0;
            };
        };
        var r739_SucceedsShape = function (r754_top, r754_bot, r754_l, r754_r, r754_s) {
            var _r754_t0, _r754_t1;
            return function () {
                var _r756_t1;
                var _r756_t0 = this;
                var r756_currentGlyph = _r756_t0;
                r756_currentGlyph.include(r739_SucceedsShapeA(r754_top, r754_bot, r754_l, r754_r, r1_fallback(r754_s, r739_OperatorStroke), r739_CThin));
                r756_currentGlyph.include(r739_SucceedsShapeB(r754_top, r754_bot, r754_l, r754_r, r1_fallback(r754_s, r739_OperatorStroke), r739_CThin));
                return void 0;
            };
        };
        r739_xn$createAndSaveGlyphImpl$2Lrc3c('precedes', 8826, r739_AsRadical(r739_PrecedesShape(r739_SymbolMid + r739_dH, r739_SymbolMid - r739_dH, r739_SB, r739_RightSB)));
        r739_xn$createAndSaveGlyphImpl$2Lrc3c('succeeds', 8827, r739_AsRadical(r739_SucceedsShape(r739_SymbolMid + r739_dH, r739_SymbolMid - r739_dH, r739_SB, r739_RightSB)));
        r739_xn$createAndSaveGlyphImpl$2Lrc3c('precedesEqUpper', null, r739_AsRadical(r739_PrecedesShape(r739_SymbolMid + r739_dSH + r739_lessEqDist, r739_SymbolMid - r739_dSH + r739_lessEqDist, r739_SB, r739_RightSB)));
        r739_xn$createAndSaveGlyphImpl$2Lrc3c('precedesEqEqUpper', null, r739_AsRadical(r739_PrecedesShape(r739_SymbolMid + r739_dSH + r739_lessEqDist, r739_SymbolMid - r739_dSH + r739_lessEqDist * 1.75, r739_SB, r739_RightSB, r739_lesslessSW)));
        r739_xn$createAndSaveGlyphImpl$2Lrc3c('succeedsEqUpper', null, r739_AsRadical(r739_SucceedsShape(r739_SymbolMid + r739_dSH + r739_lessEqDist, r739_SymbolMid - r739_dSH + r739_lessEqDist, r739_SB, r739_RightSB)));
        r739_xn$createAndSaveGlyphImpl$2Lrc3c('succeedsEqEqUpper', null, r739_AsRadical(r739_SucceedsShape(r739_SymbolMid + r739_dSH + r739_lessEqDist, r739_SymbolMid - r739_dSH + r739_lessEqDist * 1.75, r739_SB, r739_RightSB, r739_lesslessSW)));
        r739_xn$derivecomposites$7Hrq('precedes.narrow', null, 'precedesEqUpper', r739_ApparentTranslate(0, -r739_lessEqDist));
        r739_xn$derivecomposites$7Hrq('precedesEq', 10927, 'precedesEqUpper', 'eqLower');
        r739_xn$derivecomposites$7Hrq('precedesEqBarNegated', 10929, 'precedesEqUpper', 'eqBarNegatedLower');
        r739_xn$derivecomposites$7Hrq('precedesSym', 8830, 'precedesEqUpper', 'symLower');
        r739_xn$derivecomposites$7Hrq('precedesSymBarNegated', 8936, 'precedesEqUpper', 'symBarNegatedLower');
        r739_xn$derivecomposites$7Hrq('precedesEqSlant', 8828, 'precedesEqUpper', r739_PrecedesShapeB(r739_SymbolMid + r739_dH - r739_lessEqDist, r739_SymbolMid - r739_dH - r739_lessEqDist, r739_SB, r739_RightSB, r739_OperatorStroke, 1));
        r739_xn$derivecomposites$7Hrq('precedesEqEq', 10931, 'precedesEqEqUpper', 'eqEqLower');
        r739_xn$derivecomposites$7Hrq('precedesEqEqBarNegated', 10933, 'precedesEqEqUpper', 'eqEqBarNegatedLower');
        r739_xn$derivecomposites$7Hrq('precedesSymSym', 10935, 'precedesEqEqUpper', 'symSymLower');
        r739_xn$derivecomposites$7Hrq('precedesSymSymBarNegated', 10937, 'precedesEqEqUpper', 'symSymBarNegatedLower');
        r739_xn$derivecomposites$7Hrq('succeeds.narrow', null, 'succeedsEqUpper', r739_ApparentTranslate(0, -r739_lessEqDist));
        r739_xn$derivecomposites$7Hrq('succeedsEq', 10928, 'succeedsEqUpper', 'eqLower');
        r739_xn$derivecomposites$7Hrq('succeedsEqBarNegated', 10930, 'succeedsEqUpper', 'eqBarNegatedLower');
        r739_xn$derivecomposites$7Hrq('succeedsSym', 8831, 'succeedsEqUpper', 'symLower');
        r739_xn$derivecomposites$7Hrq('succeedsSymBarNegated', 8937, 'succeedsEqUpper', 'symBarNegatedLower');
        r739_xn$derivecomposites$7Hrq('succeedsEqSlant', 8829, 'succeedsEqUpper', r739_SucceedsShapeB(r739_SymbolMid + r739_dH - r739_lessEqDist, r739_SymbolMid - r739_dH - r739_lessEqDist, r739_SB, r739_RightSB, r739_OperatorStroke, 1));
        r739_xn$derivecomposites$7Hrq('succeedsEqEq', 10932, 'succeedsEqEqUpper', 'eqEqLower');
        r739_xn$derivecomposites$7Hrq('succeedsEqEqBarNegated', 10934, 'succeedsEqEqUpper', 'eqEqBarNegatedLower');
        r739_xn$derivecomposites$7Hrq('succeedsSymSym', 10936, 'succeedsEqEqUpper', 'symSymLower');
        r739_xn$derivecomposites$7Hrq('succeedsSymSymBarNegated', 10938, 'succeedsEqEqUpper', 'symSymBarNegatedLower');
        r739_turned('turnSucceedsEqSlant', 8926, 'succeedsEqSlant', r739_Middle, r739_SymbolMid);
        return r739_turned('turnPrecedesEqSlant', 8927, 'precedesEqSlant', r739_Middle, r739_SymbolMid);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r767_xn$Capture_Ext$2Lrc2b) {
    var _r767_t0, _r767_t1;
    r767_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r767_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Precedes-Succeeds-Under-Relation', function (r768_xn$Capture$2Lrc8, r768_xn$ExportCapture$2Lrc4b) {
        var _r768_t7, _r768_t8;
        var _r768_t0 = r768_xn$Capture$2Lrc8;
        var r768_xn$createAndSaveGlyphImpl$2Lrc3c = _r768_t0['$createAndSaveGlyphImpl$'];
        var r768_xn$NamedParameterPair$2Lrc9b = _r768_t0['$NamedParameterPair$'];
        var r768_xn$Exec$2Lrc5 = _r768_t0['$Exec$'];
        var _r768_t1 = r768_xn$Capture$2Lrc8.Metrics;
        var r768_SB = _r768_t1.SB;
        var r768_SymbolMid = _r768_t1.SymbolMid;
        var r768_Upward = _r768_t1.Upward;
        var r768_Downward = _r768_t1.Downward;
        var r768_Rightward = _r768_t1.Rightward;
        var r768_Leftward = _r768_t1.Leftward;
        var r768_O = _r768_t1.O;
        var r768_CThin = _r768_t1.CThin;
        var r768_RightSB = _r768_t1.RightSB;
        var r768_OperatorStroke = _r768_t1.OperatorStroke;
        var _r768_t2 = r768_xn$Capture$2Lrc8.SpiroFns;
        var r768_g4 = _r768_t2.g4;
        var r768_end = _r768_t2.end;
        var r768_straight = _r768_t2.straight;
        var r768_widths = _r768_t2.widths;
        var r768_heading = _r768_t2.heading;
        var r768_archv = _r768_t2.archv;
        var r768_arcvh = _r768_t2.arcvh;
        var r768_dispiro = _r768_t2.dispiro;
        var _r768_t3 = r768_xn$Capture$2Lrc8.BooleFns;
        var _r768_t4 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r768_FlipAround = _r768_t4.FlipAround;
        var r768_AsRadical = _r768_t4.AsRadical;
        var _r768_t5 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var _r768_t6 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r768_dH = _r768_t6.dH;
        var r768_PrecedesUnderRelationShape = function (r772_t, r772_b, r772_l, r772_r, r772_s) {
            var _r772_t0, _r772_t1;
            return function () {
                var _r774_t1;
                var _r774_t0 = this;
                var r774_currentGlyph = _r774_t0;
                var r774_yBias = r772_s * 0.375;
                var r774_fine = r772_s * r768_CThin;
                var r774_hookDepth = Math.max((r772_r - r772_l) / 4, r772_s * 2);
                var r774_hookWidth = Math.max((r772_t - r772_b) / 6, r772_s * 1.25);
                r774_currentGlyph.include(r768_dispiro(r768_straight.right.start(r772_r - r774_hookDepth, r772_t - r768_O + r774_yBias, r768_widths.rhs.heading(r772_s, r768_Rightward)), r768_archv(), r768_g4.down.mid(r772_r, r772_t - r774_hookWidth + r774_yBias, r768_heading(r768_Downward)), r768_arcvh(), r768_straight.left.end(r772_l, r1_mix(r772_t, r772_b, 0.5) + r772_s / 2 - r774_fine, r768_widths.rhs.heading(r774_fine, r768_Leftward))));
                r774_currentGlyph.include(r768_dispiro(r768_straight.right.start(r772_r - r774_hookDepth, r772_b + r768_O - r774_yBias, r768_widths.lhs.heading(r772_s, r768_Rightward)), r768_archv(), r768_g4.up.mid(r772_r, r772_b + r774_hookWidth - r774_yBias, r768_heading(r768_Upward)), r768_arcvh(), r768_straight.left.end(r772_l, r1_mix(r772_t, r772_b, 0.5) - r772_s / 2 + r774_fine, r768_widths.lhs.heading(r774_fine, r768_Leftward))));
                return void 0;
            };
        };
        var r768_SucceedsUnderRelationShape = function (r777_t, r777_b, r777_l, r777_r, r777_s) {
            var _r777_t0, _r777_t1;
            return r768_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r780_t1;
                var _r780_t0 = this;
                var r780_currentGlyph = _r780_t0;
                r780_currentGlyph.include(r768_PrecedesUnderRelationShape(r777_t, r777_b, r777_l, r777_r, r777_s));
                r780_currentGlyph.include(r768_FlipAround(r1_mix(r777_l, r777_r, 0.5), r1_mix(r777_t, r777_b, 0.5)));
                return void 0;
            });
        };
        r768_xn$createAndSaveGlyphImpl$2Lrc3c('precedesUnderRelation', 8880, r768_AsRadical(r768_PrecedesUnderRelationShape(r768_SymbolMid + r768_dH, r768_SymbolMid - r768_dH, r768_SB, r768_RightSB, r768_OperatorStroke)));
        return r768_xn$createAndSaveGlyphImpl$2Lrc3c('succeedsUnderRelation', 8881, r768_AsRadical(r768_SucceedsUnderRelationShape(r768_SymbolMid + r768_dH, r768_SymbolMid - r768_dH, r768_SB, r768_RightSB, r768_OperatorStroke)));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r787_xn$Capture_Ext$2Lrc2b) {
    var _r787_t0, _r787_t1;
    r787_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r787_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Subset', function (r788_xn$Capture$2Lrc8, r788_xn$ExportCapture$2Lrc4b) {
        var _r788_t7, _r788_t8;
        var _r788_t0 = r788_xn$Capture$2Lrc8;
        var r788_xn$createAndSaveGlyphImpl$2Lrc3c = _r788_t0['$createAndSaveGlyphImpl$'];
        var r788_xn$NamedParameterPair$2Lrc9b = _r788_t0['$NamedParameterPair$'];
        var r788_xn$Exec$2Lrc5 = _r788_t0['$Exec$'];
        var r788_para = _r788_t0.para;
        var _r788_t1 = r788_xn$Capture$2Lrc8.Metrics;
        var r788_Width = _r788_t1.Width;
        var r788_SB = _r788_t1.SB;
        var r788_XH = _r788_t1.XH;
        var r788_SymbolMid = _r788_t1.SymbolMid;
        var r788_ApparentTranslate = _r788_t1.ApparentTranslate;
        var r788_Rightward = _r788_t1.Rightward;
        var r788_Leftward = _r788_t1.Leftward;
        var r788_O = _r788_t1.O;
        var r788_Stroke = _r788_t1.Stroke;
        var r788_HalfStroke = _r788_t1.HalfStroke;
        var r788_RightSB = _r788_t1.RightSB;
        var r788_Middle = _r788_t1.Middle;
        var r788_DotRadius = _r788_t1.DotRadius;
        var r788_AdviceStroke = _r788_t1.AdviceStroke;
        var r788_AdviceStroke2 = _r788_t1.AdviceStroke2;
        var r788_OperatorStroke = _r788_t1.OperatorStroke;
        var r788_HSwToV = _r788_t1.HSwToV;
        var _r788_t2 = r788_xn$Capture$2Lrc8.SpiroFns;
        var r788_g4 = _r788_t2.g4;
        var r788_corner = _r788_t2.corner;
        var r788_flat = _r788_t2.flat;
        var r788_curl = _r788_t2.curl;
        var r788_widths = _r788_t2.widths;
        var r788_heading = _r788_t2.heading;
        var r788_archv = _r788_t2.archv;
        var r788_arcvh = _r788_t2.arcvh;
        var r788_dispiro = _r788_t2.dispiro;
        var r788_xn$spirooutline$1aao = _r788_t2['spiro-outline'];
        var _r788_t3 = r788_xn$Capture$2Lrc8.BooleFns;
        var r788_union = _r788_t3.union;
        var r788_intersection = _r788_t3.intersection;
        var _r788_t4 = r788_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r788_HBar = _r788_t4.HBar;
        var r788_VBar = _r788_t4.VBar;
        var r788_FlipAround = _r788_t4.FlipAround;
        var r788_AsRadical = _r788_t4.AsRadical;
        var r788_WithDotVariants = _r788_t4.WithDotVariants;
        var _r788_t5 = r788_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r788_xn$referglyph$1aao = _r788_t5['refer-glyph'];
        var r788_turned = _r788_t5.turned;
        var r788_xn$derivecomposites$7Hrq = _r788_t5['derive-composites'];
        var _r788_t6 = r788_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r788_dH = _r788_t6.dH;
        var r788_dSH = _r788_t6.dSH;
        var r788_dHSubstSimple = _r788_t6.dHSubstSimple;
        var r788_lessEqDist = _r788_t6.lessEqDist;
        var r788_dHElem = _r788_t6.dHElem;
        var r788_dHSmallElem = _r788_t6.dHSmallElem;
        r788_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r788_SubsetMaskShape = function () {
            var _r793_t6;
            var _r793_t7 = arguments;
            var _r793_t0 = [].slice.call(_r793_t7, 0);
            var _r793_t1 = [];
            var _r793_t2 = 0;
            while (_r793_t2 < _r793_t0.length) {
                if (!(_r793_t0[_r793_t2] instanceof r788_xn$NamedParameterPair$2Lrc9b))
                    _r793_t1.push(_r793_t0[_r793_t2]);
                _r793_t2 = _r793_t2 + 1;
            }
            var _r793_t3 = _r793_t0;
            var _r793_t4 = _r793_t3.length;
            var _r793_t5 = 0;
            while (_r793_t5 < _r793_t4) {
                _r793_t2 = _r793_t3[_r793_t5];
                if (_r793_t2 && _r793_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'top')
                    r793_top = _r793_t2.right;
                if (_r793_t2 && _r793_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'bot')
                    r793_bot = _r793_t2.right;
                if (_r793_t2 && _r793_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'sw')
                    r793_sw = _r793_t2.right;
                if (_r793_t2 && _r793_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'offset')
                    r793_offset = _r793_t2.right;
                if (_r793_t2 && _r793_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'xShift')
                    r793_xShift = _r793_t2.right;
                _r793_t5 = _r793_t5 + 1;
            }
            var r793_top = r1_fallback(r793_top, _r793_t1[0]);
            var r793_bot = r1_fallback(r793_bot, _r793_t1[1]);
            var r793_sw = r1_fallback(r793_sw, _r793_t1[2], r788_OperatorStroke);
            var r793_offset = r1_fallback(r793_offset, _r793_t1[3], 0);
            var r793_xShift = r1_fallback(r793_xShift, _r793_t1[4], 0);
            return r788_xn$spirooutline$1aao(r788_corner(r788_RightSB, r793_top - r793_offset, r788_heading(r788_Leftward)), r788_curl(r788_SB + Math.max(r793_sw * 1.5, (r793_xShift + r793_top - r793_bot) / 2), r793_top - r793_offset), r788_archv(), r788_g4(r788_SB + r793_xShift + r793_offset + r788_O, r1_mix(r793_top, r793_bot, 0.5)), r788_arcvh(), r788_flat(r788_SB + Math.max(r793_sw * 1.5, (r793_xShift + r793_top - r793_bot) / 2), r793_bot + r793_offset), r788_corner(r788_RightSB, r793_bot + r793_offset, r788_heading(r788_Rightward)));
        };
        var r788_SubsetShape = function () {
            var _r798_t6;
            var _r798_t7 = arguments;
            var _r798_t0 = [].slice.call(_r798_t7, 0);
            var _r798_t1 = [];
            var _r798_t2 = 0;
            while (_r798_t2 < _r798_t0.length) {
                if (!(_r798_t0[_r798_t2] instanceof r788_xn$NamedParameterPair$2Lrc9b))
                    _r798_t1.push(_r798_t0[_r798_t2]);
                _r798_t2 = _r798_t2 + 1;
            }
            var _r798_t3 = _r798_t0;
            var _r798_t4 = _r798_t3.length;
            var _r798_t5 = 0;
            while (_r798_t5 < _r798_t4) {
                _r798_t2 = _r798_t3[_r798_t5];
                if (_r798_t2 && _r798_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r798_t2.left === 'top')
                    r798_top = _r798_t2.right;
                if (_r798_t2 && _r798_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r798_t2.left === 'bot')
                    r798_bot = _r798_t2.right;
                if (_r798_t2 && _r798_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r798_t2.left === 'sw')
                    r798_sw = _r798_t2.right;
                if (_r798_t2 && _r798_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r798_t2.left === 'offset')
                    r798_offset = _r798_t2.right;
                if (_r798_t2 && _r798_t2 instanceof r788_xn$NamedParameterPair$2Lrc9b && _r798_t2.left === 'xShift')
                    r798_xShift = _r798_t2.right;
                _r798_t5 = _r798_t5 + 1;
            }
            var r798_top = r1_fallback(r798_top, _r798_t1[0]);
            var r798_bot = r1_fallback(r798_bot, _r798_t1[1]);
            var r798_sw = r1_fallback(r798_sw, _r798_t1[2], r788_OperatorStroke);
            var r798_offset = r1_fallback(r798_offset, _r798_t1[3], 0);
            var r798_xShift = r1_fallback(r798_xShift, _r798_t1[4], 0);
            return r788_dispiro(r788_widths.lhs(r798_sw), r788_flat(r788_RightSB, r798_top - r798_offset, r788_heading(r788_Leftward)), r788_curl(r788_SB + Math.max(r798_sw * 1.5, (r798_xShift + r798_top - r798_bot) / 2), r798_top - r798_offset), r788_archv(), r788_g4(r788_SB + r798_xShift + r798_offset + r788_O, r1_mix(r798_top, r798_bot, 0.5)), r788_arcvh(), r788_flat(r788_SB + Math.max(r798_sw * 1.5, (r798_xShift + r798_top - r798_bot) / 2), r798_bot + r798_offset), r788_curl(r788_RightSB, r798_bot + r798_offset, r788_heading(r788_Rightward)));
        };
        var r788_SupsetShape = function (r803_top, r803_bot, r803_sw) {
            var _r803_t0, _r803_t1;
            return function () {
                var _r805_t1;
                var _r805_t0 = this;
                var r805_currentGlyph = _r805_t0;
                r805_currentGlyph.include(r788_SubsetShape(r803_top, r803_bot, r803_sw));
                r805_currentGlyph.include(r788_FlipAround(r788_Middle, r1_mix(r803_top, r803_bot, 0.5)));
                return void 0;
            };
        };
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('subst', 8834, r788_SubsetShape(r788_SymbolMid + r788_dHSubstSimple, r788_SymbolMid - r788_dHSubstSimple));
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('subst/aplLeft', null, r788_SubsetShape(r788_SymbolMid + r788_dHSubstSimple, r788_SymbolMid - r788_dHSubstSimple, r788_AdviceStroke(3.5)));
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('doubleSubst', 8912, function () {
            var _r812_t1;
            var _r812_t0 = this;
            var r812_currentGlyph = _r812_t0;
            var r812_sw = r788_AdviceStroke(6);
            var r812_gap = Math.max(r788_Width / 8, r812_sw / 2);
            r812_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHSubstSimple, r788_SymbolMid - r788_dHSubstSimple, new r788_xn$NamedParameterPair$2Lrc9b('sw', r812_sw)));
            r812_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHSubstSimple, r788_SymbolMid - r788_dHSubstSimple, new r788_xn$NamedParameterPair$2Lrc9b('sw', r812_sw), new r788_xn$NamedParameterPair$2Lrc9b('offset', r812_gap + r812_sw)));
            return void 0;
        });
        r788_turned('supst', 8835, 'subst', r788_Middle, r788_SymbolMid);
        r788_turned('doubleSupst', 8913, 'doubleSubst', r788_Middle, r788_SymbolMid);
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('substBarUpper', null, r788_AsRadical(r788_SubsetShape(r788_SymbolMid + r788_dSH + r788_lessEqDist, r788_SymbolMid - r788_dSH + r788_lessEqDist)));
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('supstBarUpper', null, r788_AsRadical(r788_SupsetShape(r788_SymbolMid + r788_dSH + r788_lessEqDist, r788_SymbolMid - r788_dSH + r788_lessEqDist)));
        r788_xn$derivecomposites$7Hrq('substBar', 8838, 'substBarUpper', 'eqLower');
        r788_xn$derivecomposites$7Hrq('substBarNoRise', null, 'subst', 'eqLower2');
        r788_xn$derivecomposites$7Hrq('substBarNegated', 8842, 'substBarUpper', 'eqBarNegatedLower');
        r788_xn$derivecomposites$7Hrq('supstBar', 8839, 'supstBarUpper', 'eqLower');
        r788_xn$derivecomposites$7Hrq('supstBarNoRise', null, 'supst', 'eqLower2');
        r788_xn$derivecomposites$7Hrq('supstBarNegated', 8843, 'supstBarUpper', 'eqBarNegatedLower');
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('element', 8712, function () {
            var _r822_t1;
            var _r822_t0 = this;
            var r822_currentGlyph = _r822_t0;
            r822_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHElem, r788_SymbolMid - r788_dHElem));
            r822_currentGlyph.include(r788_HBar.m(r788_SB + r788_HalfStroke, r788_RightSB, r788_SymbolMid, r788_OperatorStroke));
            return void 0;
        });
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('elementWithTwoHorizontalStrokes', 8953, function () {
            var _r827_t1;
            var _r827_t0 = this;
            var r827_currentGlyph = _r827_t0;
            var r827_sw = Math.min(r788_OperatorStroke, r788_AdviceStroke2(2, 4, 2 * r788_dHElem));
            r827_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHElem, r788_SymbolMid - r788_dHElem, new r788_xn$NamedParameterPair$2Lrc9b('sw', r827_sw)));
            r827_currentGlyph.include(r788_intersection(r788_SubsetMaskShape(r788_SymbolMid + r788_dHElem, r788_SymbolMid - r788_dHElem, new r788_xn$NamedParameterPair$2Lrc9b('sw', r827_sw), new r788_xn$NamedParameterPair$2Lrc9b('offset', 0.1)), r788_union(r788_HBar.m(r788_SB, r788_RightSB, r788_SymbolMid - r788_dHElem / 3 + r827_sw / 6, r827_sw), r788_HBar.m(r788_SB, r788_RightSB, r788_SymbolMid + r788_dHElem / 3 - r827_sw / 6, r827_sw))));
            return void 0;
        });
        r788_turned('turnElement', 8715, 'element', r788_Middle, r788_SymbolMid);
        var r788_CodeNonApl = function (r833_u) {
            var _r833_t0, _r833_t1;
            return r788_para.variantSelector['__enableAplForm'] === 'enable' ? null : r833_u;
        };
        var r788_CodeApl = function (r834_u) {
            var _r834_t0, _r834_t1;
            return r788_para.variantSelector['__enableAplForm'] === 'enable' ? r834_u : null;
        };
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('smallElement', r788_CodeNonApl(8714), function () {
            var _r837_t1;
            var _r837_t0 = this;
            var r837_currentGlyph = _r837_t0;
            var r837_sw = r788_AdviceStroke2(3, 2.5, r788_dHSmallElem * 2);
            r837_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHSmallElem, r788_SymbolMid - r788_dHSmallElem, new r788_xn$NamedParameterPair$2Lrc9b('sw', r837_sw)));
            r837_currentGlyph.include(r788_HBar.m(r788_SB + r788_HalfStroke, r788_RightSB, r788_SymbolMid, r837_sw));
            return void 0;
        });
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('smallElement.aplForm', r788_CodeApl(8714), function () {
            var _r843_t1;
            var _r843_t0 = this;
            var r843_currentGlyph = _r843_t0;
            var r843_sw = r788_AdviceStroke2(3, 2.5, r788_dHSmallElem * 2);
            r843_currentGlyph.include(r788_SubsetShape(r788_XH, 0, new r788_xn$NamedParameterPair$2Lrc9b('sw', r843_sw)));
            r843_currentGlyph.include(r788_HBar.m(r788_SB + r788_HalfStroke, r788_RightSB, 0.5 * r788_XH, r843_sw));
            return void 0;
        });
        r788_turned('turnSmallElement', 8717, 'smallElement', r788_Middle, r788_SymbolMid);
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('elementStroke', 8946, function () {
            var _r849_t1;
            var _r849_t0 = this;
            var r849_currentGlyph = _r849_t0;
            r849_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHElem, r788_SymbolMid - r788_dHElem, new r788_xn$NamedParameterPair$2Lrc9b('xShift', (r788_RightSB - r788_SB) * 0.2 + r788_HSwToV(0.25 * r788_Stroke))));
            r849_currentGlyph.include(r788_HBar.m(r788_SB + r788_HalfStroke, r788_RightSB, r788_SymbolMid, r788_OperatorStroke));
            return void 0;
        });
        r788_turned('turnElementStroke', 8954, 'elementStroke', r788_Middle, r788_SymbolMid);
        var r788_ElementBarHalfHeight = function (r853_h) {
            var _r853_t0, _r853_t1;
            return r853_h / 2 - r788_OperatorStroke / 4;
        };
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('elementBarAtEnd', 8947, function () {
            var _r856_t1;
            var _r856_t0 = this;
            var r856_currentGlyph = _r856_t0;
            r856_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHElem, r788_SymbolMid - r788_dHElem));
            r856_currentGlyph.include(r788_VBar.r(r788_RightSB, r788_SymbolMid - r788_ElementBarHalfHeight(r788_dHElem), r788_SymbolMid + r788_ElementBarHalfHeight(r788_dHElem), r788_OperatorStroke));
            r856_currentGlyph.include(r788_HBar.m(r788_SB + r788_HalfStroke, r788_RightSB, r788_SymbolMid, r788_OperatorStroke));
            return void 0;
        });
        r788_turned('turnElementBarAtEnd', 8955, 'elementBarAtEnd', r788_Middle, r788_SymbolMid);
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('smallElementBarAtEnd', 8948, function () {
            var _r862_t1;
            var _r862_t0 = this;
            var r862_currentGlyph = _r862_t0;
            var r862_sw = r788_AdviceStroke2(3, 2.75, r788_dHSmallElem * 2);
            r862_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dHSmallElem, r788_SymbolMid - r788_dHSmallElem, new r788_xn$NamedParameterPair$2Lrc9b('sw', r862_sw)));
            r862_currentGlyph.include(r788_VBar.r(r788_RightSB, r788_SymbolMid - r788_ElementBarHalfHeight(r788_dHSmallElem), r788_SymbolMid + r788_ElementBarHalfHeight(r788_dHSmallElem), r862_sw));
            r862_currentGlyph.include(r788_HBar.m(r788_SB + r788_HalfStroke, r788_RightSB, r788_SymbolMid, r862_sw));
            return void 0;
        });
        r788_turned('turnSmallElementBarAtEnd', 8956, 'smallElementBarAtEnd', r788_Middle, r788_SymbolMid);
        var r788_dSHElem = r788_dHElem * r788_dSH / r788_dH;
        r788_xn$createAndSaveGlyphImpl$2Lrc3c('elementAtUpper', null, function () {
            var _r869_t1;
            var _r869_t0 = this;
            var r869_currentGlyph = _r869_t0;
            r869_currentGlyph.include(r788_SubsetShape(r788_SymbolMid + r788_dSHElem, r788_SymbolMid - r788_dSHElem));
            r869_currentGlyph.include(r788_HBar.m(r788_SB + r788_HalfStroke, r788_RightSB, r788_SymbolMid, r788_OperatorStroke));
            return void 0;
        });
        r788_turned('turnElementAtUpper', null, 'elementAtUpper', r788_Middle, r788_SymbolMid);
        r788_WithDotVariants('elementOfWithDotAbove', 8949, function (r872_DrawAt, r872_kDotRadius, r872_overshoot) {
            var _r872_t0, _r872_t1;
            return function () {
                var _r874_t1;
                var _r874_t0 = this;
                var r874_currentGlyph = _r874_t0;
                r874_currentGlyph.include(r788_xn$referglyph$1aao('elementAtUpper'), true, true);
                r874_currentGlyph.include(r788_ApparentTranslate(0, -r788_lessEqDist));
                r874_currentGlyph.include(r872_DrawAt(r788_Middle, r788_SymbolMid + (r788_dSHElem + r788_lessEqDist), r872_kDotRadius + r788_DotRadius - r872_overshoot));
                return void 0;
            };
        });
        r788_xn$createAndSaveGlyphImpl$2Lrc3c(8950, null, function () {
            var _r880_t1;
            var _r880_t0 = this;
            var r880_currentGlyph = _r880_t0;
            r880_currentGlyph.include(r788_xn$referglyph$1aao('elementAtUpper'), true, true);
            r880_currentGlyph.include(r788_ApparentTranslate(0, -r788_lessEqDist));
            r880_currentGlyph.include(r788_HBar.m(r788_SB, r788_RightSB, r788_SymbolMid + (r788_dSHElem + r788_lessEqDist), r788_OperatorStroke));
            return void 0;
        });
        r788_xn$createAndSaveGlyphImpl$2Lrc3c(8957, null, function () {
            var _r886_t1;
            var _r886_t0 = this;
            var r886_currentGlyph = _r886_t0;
            r886_currentGlyph.include(r788_xn$referglyph$1aao('turnElementAtUpper'), true, true);
            r886_currentGlyph.include(r788_ApparentTranslate(0, -r788_lessEqDist));
            r886_currentGlyph.include(r788_HBar.m(r788_SB, r788_RightSB, r788_SymbolMid + (r788_dSHElem + r788_lessEqDist), r788_OperatorStroke));
            return void 0;
        });
        r788_xn$createAndSaveGlyphImpl$2Lrc3c(8952, null, function () {
            var _r892_t1;
            var _r892_t0 = this;
            var r892_currentGlyph = _r892_t0;
            r892_currentGlyph.include(r788_xn$referglyph$1aao('elementAtUpper'), true, true);
            r892_currentGlyph.include(r788_ApparentTranslate(0, +r788_lessEqDist));
            r892_currentGlyph.include(r788_HBar.m(r788_SB, r788_RightSB, r788_SymbolMid - (r788_dSHElem + r788_lessEqDist), r788_OperatorStroke));
            return void 0;
        });
        r788_xn$createAndSaveGlyphImpl$2Lrc3c(8951, null, function () {
            var _r898_t1;
            var _r898_t0 = this;
            var r898_currentGlyph = _r898_t0;
            r898_currentGlyph.include(r788_xn$referglyph$1aao('smallElement'), true, true);
            r898_currentGlyph.include(r788_ApparentTranslate(0, -(r788_dHSmallElem / r788_dHElem) * r788_lessEqDist));
            r898_currentGlyph.include(r788_HBar.m(r788_SB, r788_RightSB, r788_SymbolMid + (r788_dHSmallElem + r788_dHSmallElem / r788_dHElem * r788_lessEqDist), r788_OperatorStroke));
            return void 0;
        });
        return r788_xn$createAndSaveGlyphImpl$2Lrc3c(8958, null, function () {
            var _r904_t1;
            var _r904_t0 = this;
            var r904_currentGlyph = _r904_t0;
            r904_currentGlyph.include(r788_xn$referglyph$1aao('turnSmallElement'), true, true);
            r904_currentGlyph.include(r788_ApparentTranslate(0, -(r788_dHSmallElem / r788_dHElem) * r788_lessEqDist));
            r904_currentGlyph.include(r788_HBar.m(r788_SB, r788_RightSB, r788_SymbolMid + (r788_dHSmallElem + r788_dHSmallElem / r788_dHElem * r788_lessEqDist), r788_OperatorStroke));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r910_xn$Capture_Ext$2Lrc2b) {
    var _r910_t0, _r910_t1;
    r910_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r910_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Precedes-Succeeds-Prefix-Suffix', function (r911_xn$Capture$2Lrc8, r911_xn$ExportCapture$2Lrc4b) {
        var _r911_t7, _r911_t8;
        var _r911_t0 = r911_xn$Capture$2Lrc8;
        var r911_xn$createAndSaveGlyphImpl$2Lrc3c = _r911_t0['$createAndSaveGlyphImpl$'];
        var r911_xn$NamedParameterPair$2Lrc9b = _r911_t0['$NamedParameterPair$'];
        var r911_xn$Exec$2Lrc5 = _r911_t0['$Exec$'];
        var _r911_t1 = r911_xn$Capture$2Lrc8.Metrics;
        var r911_SB = _r911_t1.SB;
        var r911_SymbolMid = _r911_t1.SymbolMid;
        var r911_HalfStroke = _r911_t1.HalfStroke;
        var r911_RightSB = _r911_t1.RightSB;
        var r911_Middle = _r911_t1.Middle;
        var r911_OperatorStroke = _r911_t1.OperatorStroke;
        var _r911_t2 = r911_xn$Capture$2Lrc8.SpiroFns;
        var _r911_t3 = r911_xn$Capture$2Lrc8.BooleFns;
        var r911_union = _r911_t3.union;
        var _r911_t4 = r911_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r911_HBar = _r911_t4.HBar;
        var r911_VBar = _r911_t4.VBar;
        var r911_FlipAround = _r911_t4.FlipAround;
        var r911_AsRadical = _r911_t4.AsRadical;
        var _r911_t5 = r911_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r911_xn$derivecomposites$7Hrq = _r911_t5['derive-composites'];
        var _r911_t6 = r911_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r911_dSH = _r911_t6.dSH;
        var r911_dHSubstSimple = _r911_t6.dHSubstSimple;
        var r911_lessEqDist = _r911_t6.lessEqDist;
        var r911_dHElem = _r911_t6.dHElem;
        r911_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addon-Glyphs'].resolve();
        var r911_PrefixShape = function (r916_top, r916_bot, r916_sw) {
            var _r916_t0, _r916_t1;
            return r911_union(r911_VBar.l(r911_SB, r916_bot, r916_top, r1_fallback(r916_sw, r911_OperatorStroke)), r911_HBar.t(r911_SB, r911_RightSB, r916_top, r1_fallback(r916_sw, r911_OperatorStroke)), r911_HBar.b(r911_SB, r911_RightSB, r916_bot, r1_fallback(r916_sw, r911_OperatorStroke)));
        };
        var r911_SuffixShape = function (r917_top, r917_bot, r917_sw) {
            var _r917_t0, _r917_t1;
            return function () {
                var _r919_t1;
                var _r919_t0 = this;
                var r919_currentGlyph = _r919_t0;
                r919_currentGlyph.include(r911_PrefixShape(r917_top, r917_bot, r917_sw));
                r919_currentGlyph.include(r911_FlipAround(r911_Middle, r1_mix(r917_top, r917_bot, 0.5)));
                return void 0;
            };
        };
        r911_xn$createAndSaveGlyphImpl$2Lrc3c('prefix', 8847, r911_PrefixShape(r911_SymbolMid + r911_dHSubstSimple, r911_SymbolMid - r911_dHSubstSimple));
        r911_xn$createAndSaveGlyphImpl$2Lrc3c('suffix', 8848, r911_SuffixShape(r911_SymbolMid + r911_dHSubstSimple, r911_SymbolMid - r911_dHSubstSimple));
        r911_xn$createAndSaveGlyphImpl$2Lrc3c('prefixBarUpper', null, r911_AsRadical(r911_PrefixShape(r911_SymbolMid + r911_dSH + r911_lessEqDist, r911_SymbolMid - r911_dSH + r911_lessEqDist)));
        r911_xn$createAndSaveGlyphImpl$2Lrc3c('suffixBarUpper', null, r911_AsRadical(r911_SuffixShape(r911_SymbolMid + r911_dSH + r911_lessEqDist, r911_SymbolMid - r911_dSH + r911_lessEqDist)));
        r911_xn$derivecomposites$7Hrq('prefixBar', 8849, 'prefixBarUpper', 'eqLower');
        r911_xn$derivecomposites$7Hrq('prefixBarNegated', 8932, 'prefixBarUpper', 'eqBarNegatedLower');
        r911_xn$derivecomposites$7Hrq('suffixBar', 8850, 'suffixBarUpper', 'eqLower');
        r911_xn$derivecomposites$7Hrq('suffixBarNegated', 8933, 'suffixBarUpper', 'eqBarNegatedLower');
        return r911_xn$createAndSaveGlyphImpl$2Lrc3c('prefixElement', 8959, function () {
            var _r928_t1;
            var _r928_t0 = this;
            var r928_currentGlyph = _r928_t0;
            r928_currentGlyph.include(r911_PrefixShape(r911_SymbolMid + r911_dHElem, r911_SymbolMid - r911_dHElem));
            r928_currentGlyph.include(r911_HBar.m(r911_SB + r911_HalfStroke, r911_RightSB, r911_SymbolMid));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r933_xn$Capture_Ext$2Lrc2b) {
    var _r933_t0, _r933_t1;
    r933_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r933_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Between', function (r934_xn$Capture$2Lrc8, r934_xn$ExportCapture$2Lrc4b) {
        var _r934_t6, _r934_t7;
        var _r934_t0 = r934_xn$Capture$2Lrc8;
        var r934_xn$createAndSaveGlyphImpl$2Lrc3c = _r934_t0['$createAndSaveGlyphImpl$'];
        var r934_xn$NamedParameterPair$2Lrc9b = _r934_t0['$NamedParameterPair$'];
        var r934_xn$Exec$2Lrc5 = _r934_t0['$Exec$'];
        var _r934_t1 = r934_xn$Capture$2Lrc8.Metrics;
        var r934_SB = _r934_t1.SB;
        var r934_PlusTop = _r934_t1.PlusTop;
        var r934_PlusBot = _r934_t1.PlusBot;
        var r934_RightSB = _r934_t1.RightSB;
        var r934_OperatorStroke = _r934_t1.OperatorStroke;
        var _r934_t2 = r934_xn$Capture$2Lrc8.SpiroFns;
        var r934_g4 = _r934_t2.g4;
        var r934_g2 = _r934_t2.g2;
        var r934_widths = _r934_t2.widths;
        var r934_alsoThru = _r934_t2.alsoThru;
        var r934_dispiro = _r934_t2.dispiro;
        var _r934_t3 = r934_xn$Capture$2Lrc8.BooleFns;
        var _r934_t4 = r934_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r934_t5 = r934_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        return r934_xn$createAndSaveGlyphImpl$2Lrc3c('between', 8812, function () {
            var _r939_t1;
            var _r939_t0 = this;
            var r939_currentGlyph = _r939_t0;
            var r939_frame = new r1_Box(r934_PlusTop + r934_OperatorStroke / 2, r934_PlusBot - r934_OperatorStroke / 2, r934_SB, r934_RightSB);
            var r939_kShape = 0.25;
            var r939_kExt = 0.2;
            r939_currentGlyph.include(r934_dispiro(r934_g4(r939_frame.mixX(r939_kExt), r939_frame.mixY(1), r934_widths.rhs(r934_OperatorStroke)), r934_alsoThru.g2(1 - r939_kShape, 0.5), r934_g4(r939_frame.mixX(1 - r939_kExt), r939_frame.mixY(0.5), r934_widths.center(r934_OperatorStroke)), r934_alsoThru.g2(r939_kShape, 0.5), r934_g4(r939_frame.mixX(r939_kExt), r939_frame.mixY(0), r934_widths.rhs(r934_OperatorStroke))));
            r939_currentGlyph.include(r934_dispiro(r934_g4(r939_frame.mixX(1 - r939_kExt), r939_frame.mixY(1), r934_widths.lhs(r934_OperatorStroke)), r934_alsoThru.g2(1 - r939_kShape, 0.5), r934_g4(r939_frame.mixX(r939_kExt), r939_frame.mixY(0.5), r934_widths.center(r934_OperatorStroke)), r934_alsoThru.g2(r939_kShape, 0.5), r934_g4(r939_frame.mixX(1 - r939_kExt), r939_frame.mixY(0), r934_widths.lhs(r934_OperatorStroke))));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r944_xn$Capture_Ext$2Lrc2b) {
    var _r944_t0, _r944_t1;
    r944_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r944_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Relation-Addon-Glyphs', function (r945_xn$Capture$2Lrc8, r945_xn$ExportCapture$2Lrc4b) {
        var _r945_t9, _r945_t10;
        var _r945_t0 = r945_xn$Capture$2Lrc8;
        var r945_xn$createAndSaveGlyphImpl$2Lrc3c = _r945_t0['$createAndSaveGlyphImpl$'];
        var r945_xn$NamedParameterPair$2Lrc9b = _r945_t0['$NamedParameterPair$'];
        var r945_xn$Exec$2Lrc5 = _r945_t0['$Exec$'];
        var _r945_t1 = r945_xn$Capture$2Lrc8.Metrics;
        var r945_SB = _r945_t1.SB;
        var r945_SymbolMid = _r945_t1.SymbolMid;
        var r945_Downward = _r945_t1.Downward;
        var r945_RightSB = _r945_t1.RightSB;
        var r945_Middle = _r945_t1.Middle;
        var r945_OperatorStroke = _r945_t1.OperatorStroke;
        var _r945_t2 = r945_xn$Capture$2Lrc8.SpiroFns;
        var r945_flat = _r945_t2.flat;
        var r945_widths = _r945_t2.widths;
        var r945_heading = _r945_t2.heading;
        var r945_dispiro = _r945_t2.dispiro;
        var _r945_t3 = r945_xn$Capture$2Lrc8.BooleFns;
        var r945_union = _r945_t3.union;
        var _r945_t4 = r945_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r945_HBar = _r945_t4.HBar;
        var r945_AsRadical = _r945_t4.AsRadical;
        var _r945_t5 = r945_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r945_xn$referglyph$1aao = _r945_t5['refer-glyph'];
        var _r945_t6 = r945_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r945_dSH = _r945_t6.dSH;
        var r945_lessEqDist = _r945_t6.lessEqDist;
        var _r945_t7 = r945_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Sym'].resolve();
        var r945_symWave = _r945_t7.symWave;
        var _r945_t8 = r945_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Addons'].resolve();
        var r945_lesslessSW = _r945_t8.lesslessSW;
        var r945_EqEqBarNegation = _r945_t8.EqEqBarNegation;
        var r945_BarNegator = function (r951_symbolBottom, r951_dist) {
            var _r951_t0, _r951_t1;
            var r951_swo = Math.max(r945_OperatorStroke * 1.5, r951_dist * 1.5);
            return r945_dispiro(r945_widths.center(r945_OperatorStroke), r945_flat(r945_Middle + r951_dist, r951_symbolBottom - r951_dist + r951_swo, r945_heading(r945_Downward)), r945_flat(r945_Middle - r951_dist, r951_symbolBottom - r951_dist - r951_swo, r945_heading(r945_Downward)));
        };
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('eqLower', null, r945_AsRadical(r945_HBar.m(r945_SB, r945_RightSB, r945_SymbolMid - r945_dSH - r945_lessEqDist, r945_OperatorStroke)));
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('eqLower2', null, r945_AsRadical(r945_HBar.m(r945_SB, r945_RightSB, r945_SymbolMid - r945_dSH - 2 * r945_lessEqDist, r945_OperatorStroke)));
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('eqBarNegatedLower', null, r945_AsRadical(r945_union(r945_xn$referglyph$1aao('eqLower'), r945_BarNegator(r945_SymbolMid - r945_dSH, r945_lessEqDist))));
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('symLower', null, r945_AsRadical(r945_symWave(r945_SymbolMid - r945_dSH - r945_lessEqDist, 1)));
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('symBarNegatedLower', null, r945_AsRadical(r945_union(r945_xn$referglyph$1aao('symLower'), r945_BarNegator(r945_SymbolMid - r945_dSH, r945_lessEqDist))));
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('eqEqLower', null, r945_AsRadical(r945_union(r945_HBar.m(r945_SB, r945_RightSB, r945_SymbolMid - r945_dSH + r945_lessEqDist * 2 / 3, r945_lesslessSW), r945_HBar.m(r945_SB, r945_RightSB, r945_SymbolMid - r945_dSH - r945_lessEqDist, r945_lesslessSW))));
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('symSymLower', null, r945_AsRadical(r945_union(r945_symWave(r945_SymbolMid - r945_dSH + r945_lessEqDist * 2 / 3, 1, r945_lesslessSW), r945_symWave(r945_SymbolMid - r945_dSH - r945_lessEqDist, 1, r945_lesslessSW))));
        r945_xn$createAndSaveGlyphImpl$2Lrc3c('eqEqBarNegatedLower', null, r945_AsRadical(r945_union(r945_xn$referglyph$1aao('eqEqLower'), r945_EqEqBarNegation())));
        return r945_xn$createAndSaveGlyphImpl$2Lrc3c('symSymBarNegatedLower', null, r945_AsRadical(r945_union(r945_xn$referglyph$1aao('symSymLower'), r945_EqEqBarNegation())));
    });
    return void 0;
});
