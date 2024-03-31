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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Arith', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t9, _r270_t10, _r270_t11, _r270_tag12, _r270_t13, _r270_tag14, _r270_t15, _r270_tag16, _r270_t17, _r270_tag18, _r270_t19, _r270_tag20;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_PlusTop = _r270_t1.PlusTop;
        var r270_PlusBot = _r270_t1.PlusBot;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_DotSize = _r270_t1.DotSize;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var r270_GeometryStroke = _r270_t1.GeometryStroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_SquareAt = _r270_t4.SquareAt;
        var r270_DotAt = _r270_t4.DotAt;
        var r270_RingStrokeAt = _r270_t4.RingStrokeAt;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_xn$clearanchors$1aao = _r270_t4['clear-anchors'];
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Frame'].resolve();
        var r270_MathEnclosureSw = _r270_t6.MathEnclosureSw;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Common'].resolve();
        var r270_EqualHalfSpace = _r270_t7.EqualHalfSpace;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Math-Relation-Sym'].resolve();
        var r270_symWave = _r270_t8.symWave;
        (function () {
            r270_xn$ExportCapture$2Lrc4b(function () {
                var _r279_t0, _r279_t1;
                return { 'PlusShape': r277_PlusShape };
            });
            var r277_PlusShape = function (r280_left, r280_right, r280_s, r280_sw) {
                var _r280_t0, _r280_t1;
                return r270_union(r270_HBar.m(r280_left, r280_right, r270_SymbolMid, r1_fallback(r280_sw, r270_OperatorStroke)), r270_VBar.m(r270_Middle + r1_fallback(r280_s, 0), r270_PlusTop, r270_PlusBot, r1_fallback(r280_sw, r270_OperatorStroke)));
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plus', '+', r277_PlusShape(r270_SB, r270_RightSB));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('minus', 8722, r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_OperatorStroke));
            var r277_IsraeliPlusShape = function (r283_left, r283_right, r283_s, r283_sw) {
                var _r283_t0, _r283_t1;
                return r270_union(r270_HBar.m(r283_left, r283_right, r270_SymbolMid, r1_fallback(r283_sw, r270_OperatorStroke)), r270_VBar.m(r270_Middle + r1_fallback(r283_s, 0), r270_PlusTop, r270_SymbolMid, r1_fallback(r283_sw, r270_OperatorStroke)));
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('israeliPlus', 64297, r277_IsraeliPlusShape(r270_SB, r270_RightSB));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerPlus', null, r277_PlusShape(r270_SB, r270_RightSB, 0, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMinus', null, r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerVerticalBar', null, r270_VBar.m(r270_Middle, r270_PlusTop, r270_PlusBot, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerIsraeliPlus', null, r277_IsraeliPlusShape(r270_SB, r270_RightSB, 0, r270_MathEnclosureSw));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('hermetianConjugateMatrixPlus', 8889, r270_difference(r277_PlusShape(r270_SB, r270_RightSB), r270_SquareAt(r270_Middle, r270_SymbolMid, r270_DotRadius)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusminus', 177, function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.include(r270_xn$referglyph$1aao('plus'));
                r292_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0, r270_OperatorStroke));
                return void 0;
            });
            r270_turned('minusplus', 8723, 'plusminus', r270_Middle, r270_SymbolMid);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plustilde', 10790, function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                r297_currentGlyph.include(r270_xn$referglyph$1aao('plus'));
                r297_currentGlyph.include(r270_symWave(0, 1));
                return void 0;
            });
            r270_turned('tildeplus', 10788, 'plustilde', r270_Middle, r270_SymbolMid);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusequal', 10866, function () {
                var _r302_t1;
                var _r302_t0 = this;
                var r302_currentGlyph = _r302_t0;
                r302_currentGlyph.include(r270_xn$referglyph$1aao('plus'));
                r302_currentGlyph.include(r270_ApparentTranslate(0, r270_EqualHalfSpace * 1.5));
                r302_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, r270_EqualHalfSpace * 1.5, r270_OperatorStroke));
                r302_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0, r270_OperatorStroke));
                return void 0;
            });
            r270_turned('equalplus', 10865, 'plusequal', r270_Middle, r270_SymbolMid);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusRing', 10786, function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                r309_currentGlyph.include(r270_xn$referglyph$1aao('plus'), true, true);
                r309_currentGlyph.include(r270_MarkSet.plus());
                r309_currentGlyph.include(r270_xn$referglyph$1aao('ringAbove'));
                r309_currentGlyph.include(r270_xn$clearanchors$1aao());
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('plusCircumflex', 10787, function () {
                var _r316_t1;
                var _r316_t0 = this;
                var r316_currentGlyph = _r316_t0;
                r316_currentGlyph.include(r270_xn$referglyph$1aao('plus'), true, true);
                r316_currentGlyph.include(r270_MarkSet.plus());
                r316_currentGlyph.include(r270_xn$referglyph$1aao('circumflexAbove'));
                r316_currentGlyph.include(r270_xn$clearanchors$1aao());
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('doublePlus', 10746, function () {
                var _r323_t1;
                var _r323_t0 = this;
                var r323_currentGlyph = _r323_t0;
                r323_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_OperatorStroke));
                r323_currentGlyph.include(r270_VBar.m(r1_mix(r270_SB, r270_RightSB, 1 / 3) - 1 / 6 * r270_HSwToV(r270_OperatorStroke), r270_PlusTop, r270_PlusBot, r270_OperatorStroke));
                r323_currentGlyph.include(r270_VBar.m(r1_mix(r270_SB, r270_RightSB, 2 / 3) + 1 / 6 * r270_HSwToV(r270_OperatorStroke), r270_PlusTop, r270_PlusBot, r270_OperatorStroke));
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('triplePlus', 10747, function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                var r329_fine = r270_AdviceStroke(4);
                r329_currentGlyph.include(r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r270_OperatorStroke));
                r329_currentGlyph.include(r270_VBar.m(r1_mix(r270_SB, r270_RightSB, 1 / 4) - 1 / 8 * r270_HSwToV(r270_OperatorStroke), r270_PlusTop, r270_PlusBot, r329_fine));
                r329_currentGlyph.include(r270_VBar.m(r1_mix(r270_SB, r270_RightSB, 1 / 2), r270_PlusTop, r270_PlusBot, r329_fine));
                r329_currentGlyph.include(r270_VBar.m(r1_mix(r270_SB, r270_RightSB, 3 / 4) + 1 / 8 * r270_HSwToV(r270_OperatorStroke), r270_PlusTop, r270_PlusBot, r329_fine));
                return void 0;
            });
        }());
        (function () {
            var r335_Size = 0.5 * (r270_RightSB - r270_SB) + 0.25 * r270_SB;
            var r335_swBowtie = r270_AdviceStroke(4.25);
            var r335_swBowtieHv = r270_AdviceStroke(4.75);
            var r335_MultiplyMask = function (r336_py, r336_p1, r336_p2) {
                var _r336_t0, _r336_t1;
                return r270_xn$spirooutline$1aao(r270_corner(r270_Middle - r336_p1 * r335_Size, r270_SymbolMid - r336_p1 * r336_py * r335_Size), r270_corner(r270_Middle + r336_p2 * r335_Size, r270_SymbolMid + r336_p2 * r336_py * r335_Size), r270_corner(r270_Middle + r336_p2 * r335_Size, r270_SymbolMid - r336_p2 * r336_py * r335_Size), r270_corner(r270_Middle - r336_p1 * r335_Size, r270_SymbolMid + r336_p1 * r336_py * r335_Size));
            };
            var r335_CoMultiplyMask = function (r337_py, r337_p1, r337_p2) {
                var _r337_t0, _r337_t1;
                return r270_xn$spirooutline$1aao(r270_corner(r270_Middle + r337_p2 * r335_Size, r270_SymbolMid + r337_p2 * r337_py * r335_Size), r270_corner(r270_Middle - r337_p1 * r335_Size, r270_SymbolMid - r337_p1 * r337_py * r335_Size), r270_corner(r270_Middle + r337_p2 * r335_Size, r270_SymbolMid - r337_p2 * r337_py * r335_Size), r270_corner(r270_Middle - r337_p1 * r335_Size, r270_SymbolMid + r337_p1 * r337_py * r335_Size));
            };
            var r335_MultiplyStroke1Shape = function (r338_s, r338_py, r338_p1, r338_p2) {
                var _r338_t0, _r338_t1;
                return r270_dispiro(r270_widths.center(r338_s), r270_flat(r270_Middle - r338_p1 * r335_Size, r270_SymbolMid - r338_p1 * r338_py * r335_Size), r270_curl(r270_Middle + r338_p2 * r335_Size, r270_SymbolMid + r338_p2 * r338_py * r335_Size));
            };
            var r335_MultiplyStroke2Shape = function (r339_s, r339_py, r339_p1, r339_p2) {
                var _r339_t0, _r339_t1;
                return r270_dispiro(r270_widths.center(r339_s), r270_flat(r270_Middle - r339_p1 * r335_Size, r270_SymbolMid + r339_p1 * r339_py * r335_Size), r270_curl(r270_Middle + r339_p2 * r335_Size, r270_SymbolMid - r339_p2 * r339_py * r335_Size));
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multiply', 215, function () {
                var _r342_t1;
                var _r342_t0 = this;
                var r342_currentGlyph = _r342_t0;
                r342_currentGlyph.include(r335_MultiplyStroke1Shape(r270_OperatorStroke, 1, 1, 1));
                r342_currentGlyph.include(r335_MultiplyStroke2Shape(r270_OperatorStroke, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multiplyUnderbar', 10801, function () {
                var _r347_t1;
                var _r347_t0 = this;
                var r347_currentGlyph = _r347_t0;
                r347_currentGlyph.include(r270_xn$referglyph$1aao('multiply'));
                r347_currentGlyph.include(r270_HBar.b(r270_Middle - r335_Size, r270_Middle + r335_Size, 0, r270_OperatorStroke));
                return void 0;
            });
            r270_alias('vectorOrCrossProduct', 10799, 'multiply');
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multiplyInMulDiv', null, function () {
                var _r352_t1;
                var _r352_t0 = this;
                var r352_currentGlyph = _r352_t0;
                r352_currentGlyph.include(r335_MultiplyStroke1Shape(r335_swBowtie, 1, 1, 1));
                r352_currentGlyph.include(r335_MultiplyStroke2Shape(r335_swBowtie, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtie', 8904, function () {
                var _r357_t1;
                var _r357_t0 = this;
                var r357_currentGlyph = _r357_t0;
                r357_currentGlyph.include(r270_union(r270_intersection(r335_MultiplyMask(1, 1, 1), r270_union(r270_VBar.l(r270_Middle - r335_Size, r270_SymbolMid - r335_Size, r270_SymbolMid + r335_Size, r335_swBowtieHv), r270_VBar.r(r270_Middle + r335_Size, r270_SymbolMid - r335_Size, r270_SymbolMid + r335_Size, r335_swBowtieHv))), r270_intersection(r270_Rect(r270_ParenTop, r270_ParenBot, r270_Middle - r335_Size, r270_Middle + r335_Size), r270_union(r335_MultiplyStroke1Shape(r335_swBowtie, 1, 1, 1), r335_MultiplyStroke2Shape(r335_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieLeft', 8905, function () {
                var _r361_t1;
                var _r361_t0 = this;
                var r361_currentGlyph = _r361_t0;
                r361_currentGlyph.include(r270_union(r270_intersection(r335_MultiplyMask(1, 1, 1), r270_VBar.l(r270_Middle - r335_Size, r270_SymbolMid - r335_Size, r270_SymbolMid + r335_Size, r335_swBowtieHv)), r270_intersection(r270_Rect(r270_ParenTop, r270_ParenBot, r270_Middle - r335_Size, r1_mix(r270_SB, r270_RightSB, 2)), r270_union(r335_MultiplyStroke1Shape(r335_swBowtie, 1, 1, 1), r335_MultiplyStroke2Shape(r335_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieRight', 8906, function () {
                var _r365_t1;
                var _r365_t0 = this;
                var r365_currentGlyph = _r365_t0;
                r365_currentGlyph.include(r270_union(r270_intersection(r335_MultiplyMask(1, 1, 1), r270_VBar.r(r270_Middle + r335_Size, r270_SymbolMid - r335_Size, r270_SymbolMid + r335_Size, r335_swBowtieHv)), r270_intersection(r270_Rect(r270_ParenTop, r270_ParenBot, r1_mix(r270_RightSB, r270_SB, 2), r270_Middle + r335_Size), r270_union(r335_MultiplyStroke1Shape(r335_swBowtie, 1, 1, 1), r335_MultiplyStroke2Shape(r335_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieBot', 10802, function () {
                var _r369_t1;
                var _r369_t0 = this;
                var r369_currentGlyph = _r369_t0;
                r369_currentGlyph.include(r270_union(r270_intersection(r335_CoMultiplyMask(1, 1, 1), r270_HBar.b(r270_Middle - r335_Size, r270_Middle + r335_Size, r270_SymbolMid - r335_Size, r335_swBowtieHv)), r270_intersection(r270_Rect(r270_ParenTop, r270_SymbolMid - r335_Size, -r270_Width, 2 * r270_Width), r270_union(r335_MultiplyStroke1Shape(r335_swBowtie, 1, 1, 1), r335_MultiplyStroke2Shape(r335_swBowtie, 1, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieWithLeftHalfBlack', 10705, r270_union(r270_xn$referglyph$1aao('bowtie'), r335_MultiplyMask(1, 1, 0)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('bowtieWithRightHalfBlack', 10706, r270_union(r270_xn$referglyph$1aao('bowtie'), r335_MultiplyMask(1, 0, 1)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('blackBowtie', 10707, r270_union(r270_xn$referglyph$1aao('bowtie'), r335_MultiplyMask(1, 1, 1)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('timesWithLeftHalfBlack', 10708, r270_union(r270_xn$referglyph$1aao('bowtieLeft'), r335_MultiplyMask(1, 1, 0)));
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('timesWithRightHalfBlack', 10709, r270_union(r270_xn$referglyph$1aao('bowtieRight'), r335_MultiplyMask(1, 0, 1)));
            var r335_HourglassStretch = 1.6;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('whiteHourglass', 10710, function () {
                var _r378_t1;
                var _r378_t0 = this;
                var r378_currentGlyph = _r378_t0;
                r378_currentGlyph.include(r270_union(r270_intersection(r335_CoMultiplyMask(r335_HourglassStretch, 1, 1), r270_union(r270_HBar.t(r270_Middle - r335_Size, r270_Middle + r335_Size, r270_SymbolMid + r335_HourglassStretch * r335_Size, r335_swBowtieHv), r270_HBar.b(r270_Middle - r335_Size, r270_Middle + r335_Size, r270_SymbolMid - r335_HourglassStretch * r335_Size, r335_swBowtieHv))), r270_intersection(r270_Rect(r270_SymbolMid + r335_HourglassStretch * r335_Size, r270_SymbolMid - r335_HourglassStretch * r335_Size, -r270_Width, 2 * r270_Width), r270_union(r335_MultiplyStroke1Shape(r335_swBowtie, r335_HourglassStretch, 1, 1), r335_MultiplyStroke2Shape(r335_swBowtie, r335_HourglassStretch, 1, 1)))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('blackHourglass', 10711, function () {
                var _r382_t1;
                var _r382_t0 = this;
                var r382_currentGlyph = _r382_t0;
                r382_currentGlyph.include(r270_union(r270_xn$referglyph$1aao('whiteHourglass'), r335_CoMultiplyMask(r335_HourglassStretch, 1, 1)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('leftSemidirectProduct', 8907, function () {
                var _r386_t1;
                var _r386_t0 = this;
                var r386_currentGlyph = _r386_t0;
                r386_currentGlyph.include(r335_MultiplyStroke1Shape(r270_OperatorStroke, 1, 1, 0));
                r386_currentGlyph.include(r335_MultiplyStroke2Shape(r270_OperatorStroke, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightSemidirectProduct', 8908, function () {
                var _r391_t1;
                var _r391_t0 = this;
                var r391_currentGlyph = _r391_t0;
                r391_currentGlyph.include(r335_MultiplyStroke1Shape(r270_OperatorStroke, 1, 1, 1));
                r391_currentGlyph.include(r335_MultiplyStroke2Shape(r270_OperatorStroke, 1, 0, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMultiplyStroke1', null, function () {
                var _r396_t1;
                var _r396_t0 = this;
                var r396_currentGlyph = _r396_t0;
                r396_currentGlyph.include(r335_MultiplyStroke1Shape(r270_MathEnclosureSw, 1, 1, 1));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMultiplyStroke2', null, function () {
                var _r400_t1;
                var _r400_t0 = this;
                var r400_currentGlyph = _r400_t0;
                r400_currentGlyph.include(r335_MultiplyStroke2Shape(r270_MathEnclosureSw, 1, 1, 1));
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerMultiply', null, function () {
                var _r404_t1;
                var _r404_t0 = this;
                var r404_currentGlyph = _r404_t0;
                r404_currentGlyph.include(r335_MultiplyStroke1Shape(r270_MathEnclosureSw, 1, 1, 1));
                r404_currentGlyph.include(r335_MultiplyStroke2Shape(r270_MathEnclosureSw, 1, 1, 1));
                return void 0;
            });
        }());
        (function () {
            var r408_suffix, r408_DrawAt, r408_kDotRadius, r408_overshoot, _r408_t2, _r408_t3, _r408_tag4;
            var _r408_t0 = Object.entries(r270_DotVariants)[Symbol.iterator]();
            var _r408_t1 = void 0;
            while (!(_r408_t1 = _r408_t0.next()).done) {
                _r408_t2 = _r408_t1.value;
                r408_suffix = _r408_t2[0];
                r408_DrawAt = _r408_t2[1][0];
                r408_kDotRadius = _r408_t2[1][1];
                r408_overshoot = _r408_t2[1][2];
                _r408_t2[1];
                (function () {
                    var r411_dr = r270_DotRadius * r408_kDotRadius * r270_OperatorStroke / r270_Stroke;
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('dotplus.' + r408_suffix, null, function () {
                        var _r414_t1;
                        var _r414_t0 = this;
                        var r414_currentGlyph = _r414_t0;
                        var r414_gap = r270_AdviceStroke(12);
                        r414_currentGlyph.include(r270_union(r408_DrawAt(r270_Middle, r270_SymbolMid * 2 - r270_OperatorStroke / 2, r411_dr - r408_overshoot), r270_difference(r270_xn$referglyph$1aao('plus'), r408_DrawAt(r270_Middle, r270_SymbolMid * 2 - r270_OperatorStroke / 2, r411_dr + r414_gap - r408_overshoot))));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('dotminus.' + r408_suffix, null, function () {
                        var _r418_t1;
                        var _r418_t0 = this;
                        var r418_currentGlyph = _r418_t0;
                        r418_currentGlyph.include(r270_xn$referglyph$1aao('minus'), true, true);
                        r418_currentGlyph.include(r408_DrawAt(r270_Middle, r270_PlusTop, r411_dr - r408_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('dottimes.' + r408_suffix, null, function () {
                        var _r423_t1;
                        var _r423_t0 = this;
                        var r423_currentGlyph = _r423_t0;
                        r423_currentGlyph.include(r270_xn$referglyph$1aao('multiply'));
                        var r423_sw = r270_AdviceStroke(4);
                        var r423_gap = (r270_RightSB - r270_SB) / 2;
                        r423_currentGlyph.include(r408_DrawAt(r270_Middle, r270_SymbolMid + r423_gap, r411_dr * r423_sw / r270_OperatorStroke - r408_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('geometricProportion.' + r408_suffix, null, function () {
                        var _r428_t1;
                        var _r428_t0 = this;
                        var r428_currentGlyph = _r428_t0;
                        r428_currentGlyph.include(r270_xn$referglyph$1aao('minus'), true, true);
                        r428_currentGlyph.include(r408_DrawAt(r270_SB + r411_dr, r270_PlusTop, r411_dr - r408_overshoot));
                        r428_currentGlyph.include(r408_DrawAt(r270_SB + r411_dr, r270_PlusBot, r411_dr - r408_overshoot));
                        r428_currentGlyph.include(r408_DrawAt(r270_RightSB - r411_dr, r270_PlusTop, r411_dr - r408_overshoot));
                        r428_currentGlyph.include(r408_DrawAt(r270_RightSB - r411_dr, r270_PlusBot, r411_dr - r408_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('minusColon.' + r408_suffix, null, function () {
                        var _r436_t1;
                        var _r436_t0 = this;
                        var r436_currentGlyph = _r436_t0;
                        r436_currentGlyph.include(r408_DrawAt(r270_Middle, r411_dr, r411_dr - r408_overshoot));
                        r436_currentGlyph.include(r408_DrawAt(r270_Middle, r270_XH - r411_dr, r411_dr - r408_overshoot));
                        var r436_sbSquash = 0.5;
                        var r436_delta = Math.max(0, r270_Middle - r411_dr - r270_SB * r436_sbSquash);
                        r436_currentGlyph.include(r270_ApparentTranslate(+r436_delta, r270_SymbolMid - r270_XH / 2));
                        r436_currentGlyph.include(r270_HBar.m(r270_SB * r436_sbSquash, r270_RightSB - r270_DotSize, r270_SymbolMid, r270_OperatorStroke));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('divide.' + r408_suffix, null, function () {
                        var _r443_t1;
                        var _r443_t0 = this;
                        var r443_currentGlyph = _r443_t0;
                        r443_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
                        var r443_gap = (r270_RightSB - r270_SB) / 2;
                        r443_currentGlyph.include(r408_DrawAt(r270_Middle, r270_SymbolMid + r443_gap, r411_dr - r408_overshoot));
                        r443_currentGlyph.include(r408_DrawAt(r270_Middle, r270_SymbolMid - r443_gap, r411_dr - r408_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('innerDivide.' + r408_suffix, null, function () {
                        var _r449_t1;
                        var _r449_t0 = this;
                        var r449_currentGlyph = _r449_t0;
                        r449_currentGlyph.include(r270_xn$referglyph$1aao('innerMinus'));
                        var r449_sw = r270_MathEnclosureSw / 1.5;
                        r449_currentGlyph.include(r408_DrawAt(r270_Middle, r1_mix(r270_SymbolMid, r270_PlusTop, 0.5), r411_dr * r449_sw / r270_OperatorStroke - r408_overshoot));
                        r449_currentGlyph.include(r408_DrawAt(r270_Middle, r1_mix(r270_SymbolMid, r270_PlusBot, 0.5), r411_dr * r449_sw / r270_OperatorStroke - r408_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('rotatedInnerDivide.' + r408_suffix, null, function () {
                        var _r455_t1;
                        var _r455_t0 = this;
                        var r455_currentGlyph = _r455_t0;
                        r455_currentGlyph.include(r270_xn$referglyph$1aao('innerMultiplyStroke1'));
                        var r455_sw = r270_MathEnclosureSw / 1.5;
                        r455_currentGlyph.include(r408_DrawAt(r1_mix(r270_Middle, r270_SB, 0.35), r1_mix(r270_SymbolMid, r270_PlusTop, 0.35), r411_dr * r455_sw / r270_OperatorStroke - r408_overshoot));
                        r455_currentGlyph.include(r408_DrawAt(r1_mix(r270_Middle, r270_RightSB, 0.35), r1_mix(r270_SymbolMid, r270_PlusBot, 0.35), r411_dr * r455_sw / r270_OperatorStroke - r408_overshoot));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('divisionTimes.' + r408_suffix, null, function () {
                        var _r461_t1;
                        var _r461_t0 = this;
                        var r461_currentGlyph = _r461_t0;
                        var r461_sw = r270_AdviceStroke(4);
                        var r461_gap = (r270_RightSB - r270_SB) / 2;
                        r461_currentGlyph.include(r270_union(r270_xn$referglyph$1aao('multiplyInMulDiv'), r270_HBar.m(r270_SB, r270_RightSB, r270_SymbolMid, r461_sw), r408_DrawAt(r270_Middle, r270_SymbolMid + r461_gap, r411_dr * r461_sw / r270_OperatorStroke - r408_overshoot), r408_DrawAt(r270_Middle, r270_SymbolMid - r461_gap, r411_dr * r461_sw / r270_OperatorStroke - r408_overshoot)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('minusFallingDots.' + r408_suffix, null, function () {
                        var _r465_t1;
                        var _r465_t0 = this;
                        var r465_currentGlyph = _r465_t0;
                        r465_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
                        var r465_gap = (r270_RightSB - r270_SB) / 2;
                        r465_currentGlyph.include(r408_DrawAt(r1_mix(r270_SB, r270_RightSB, 1 / 6), r270_SymbolMid + r465_gap, r411_dr - r408_overshoot));
                        r465_currentGlyph.include(r408_DrawAt(r1_mix(r270_SB, r270_RightSB, 5 / 6), r270_SymbolMid - r465_gap, r411_dr - r408_overshoot));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('minusRisingDots.' + r408_suffix, null, function () {
                        var _r471_t1;
                        var _r471_t0 = this;
                        var r471_currentGlyph = _r471_t0;
                        r471_currentGlyph.include(r270_xn$referglyph$1aao('minus'));
                        var r471_gap = (r270_RightSB - r270_SB) / 2;
                        r471_currentGlyph.include(r408_DrawAt(r1_mix(r270_SB, r270_RightSB, 1 / 6), r270_SymbolMid - r471_gap, r411_dr - r408_overshoot));
                        r471_currentGlyph.include(r408_DrawAt(r1_mix(r270_SB, r270_RightSB, 5 / 6), r270_SymbolMid + r471_gap, r411_dr - r408_overshoot));
                        return void 0;
                    });
                }());
            }
            r270_xn$selectvariant$7Hrq('dotplus', 8724, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_turned('plusdot', 10789, 'dotplus', r270_Middle, r270_SymbolMid);
            r270_xn$selectvariant$7Hrq('dotminus', 8760, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_turned('minusdot', 10794, 'dotminus', r270_Middle, r270_SymbolMid);
            r270_xn$selectvariant$7Hrq('dottimes', 10800, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('geometricProportion', 8762, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('minusColon', 8761, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('divide', 247, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('innerDivide', null, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('rotatedInnerDivide', null, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('divisionTimes', 8903, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            r270_xn$selectvariant$7Hrq('minusFallingDots', 10795, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
            return r270_xn$selectvariant$7Hrq('minusRisingDots', 10796, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        }());
        (function () {
            var r487_fine = r270_AdviceStroke(5.5);
            var r487_radius = Math.max((r270_RightSB - r270_SB) / 8, r487_fine / 2);
            var r487_barOffset = r487_radius;
            var r487_dotCenterOffset = r270_OX + r487_fine + r487_radius;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('originalOf', 8886, function () {
                var _r490_t1;
                var _r490_t0 = this;
                var r490_currentGlyph = _r490_t0;
                r490_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r487_barOffset, r270_RightSB - r487_barOffset, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r487_dotCenterOffset, r270_SymbolMid, r487_radius + r487_fine), r270_DotAt(r270_RightSB - r487_dotCenterOffset, r270_SymbolMid, r487_radius + r487_fine)), r270_DotAt(r270_SB + r487_dotCenterOffset, r270_SymbolMid, r487_radius)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('imageOf', 8887, function () {
                var _r494_t1;
                var _r494_t0 = this;
                var r494_currentGlyph = _r494_t0;
                r494_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r487_barOffset, r270_RightSB - r487_barOffset, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r487_dotCenterOffset, r270_SymbolMid, r487_radius + r487_fine), r270_DotAt(r270_RightSB - r487_dotCenterOffset, r270_SymbolMid, r487_radius + r487_fine)), r270_DotAt(r270_RightSB - r487_dotCenterOffset, r270_SymbolMid, r487_radius)));
                return void 0;
            });
            var r487_singleSideFine = r270_AdviceStroke(4);
            var r487_singleSideRadius = Math.max((r270_RightSB - r270_SB) / 6, r487_singleSideFine / 2);
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('multimap', 8888, function () {
                var _r498_t1;
                var _r498_t0 = this;
                var r498_currentGlyph = _r498_t0;
                r498_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB, r270_RightSB - r487_singleSideRadius, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_RightSB - r487_dotCenterOffset, r270_SymbolMid, r487_singleSideRadius + r487_singleSideFine)), r270_DotAt(r270_RightSB - r487_dotCenterOffset, r270_SymbolMid, r487_singleSideRadius)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('leftMultimap', 10204, function () {
                var _r502_t1;
                var _r502_t0 = this;
                var r502_currentGlyph = _r502_t0;
                r502_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r487_singleSideRadius, r270_RightSB, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r487_dotCenterOffset, r270_SymbolMid, r487_singleSideRadius + r487_singleSideFine)), r270_DotAt(r270_SB + r487_dotCenterOffset, r270_SymbolMid, r487_singleSideRadius)));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('doubleMultimap', 10719, function () {
                var _r506_t1;
                var _r506_t0 = this;
                var r506_currentGlyph = _r506_t0;
                r506_currentGlyph.include(r270_difference(r270_union(r270_HBar.m(r270_SB + r487_barOffset, r270_RightSB - r487_barOffset, r270_SymbolMid, r270_OperatorStroke), r270_DotAt(r270_SB + r487_dotCenterOffset, r270_SymbolMid, r487_radius + r487_fine), r270_DotAt(r270_RightSB - r487_dotCenterOffset, r270_SymbolMid, r487_radius + r487_fine)), r270_union(r270_DotAt(r270_SB + r487_dotCenterOffset, r270_SymbolMid, r487_radius), r270_DotAt(r270_RightSB - r487_dotCenterOffset, r270_SymbolMid, r487_radius))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathSmallCircle', 8728, r270_RingStrokeAt(r270_Middle, r270_SymbolMid, r487_singleSideRadius + r487_singleSideFine, r487_singleSideFine));
            return r270_alias('ringpoint', 11824, 'mathSmallCircle');
        }());
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('wreathProduct', 8768, function () {
            var _r511_t1;
            var _r511_t0 = this;
            var r511_currentGlyph = _r511_t0;
            r511_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.45), r1_mix(r270_PlusBot, r270_PlusTop, 1)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.64), r1_mix(r270_PlusBot, r270_PlusTop, 0.75)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.5), r1_mix(r270_PlusBot, r270_PlusTop, 0.5)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.36), r1_mix(r270_PlusBot, r270_PlusTop, 0.25)), r270_g2(r1_mix(r270_SB, r270_RightSB, 0.55), r1_mix(r270_PlusBot, r270_PlusTop, 0))));
            return void 0;
        });
        return function () {
            var r515_FMosaicWide, r515_MosaicNameSuffix, r515_MosaicWidth, r515_MosaicWidthScalar, _r515_t3, _r515_t5, _r515_t6, _r515_tag7;
            var r515_WidthKinds = [
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
            var _r515_t0 = r515_WidthKinds;
            var _r515_t1 = _r515_t0.length;
            var _r515_t2 = 0;
            var _r515_t4 = _r515_t2 < _r515_t1;
            while (_r515_t4) {
                _r515_t3 = _r515_t0[_r515_t2];
                r515_FMosaicWide = _r515_t3[0];
                r515_MosaicNameSuffix = _r515_t3[1];
                r515_MosaicWidth = _r515_t3[2];
                r515_MosaicWidthScalar = _r515_t3[3];
                (function () {
                    var r518_MosaicDesiredWidth = r270_WideWidth1;
                    var r518_MosaicMiddle = r515_MosaicWidth / 2;
                    var r518_MosaicUnitWidth = r515_MosaicWidth / r515_MosaicWidthScalar;
                    var r518_MangleUnicode = function (r519_unicode, r519__desiredOverride) {
                        var _r519_t0, _r519_t1;
                        return r515_MosaicWidth === (r519__desiredOverride || r518_MosaicDesiredWidth) ? r519_unicode : void 0;
                    };
                    var r518_MangleName = function (r520_name) {
                        var _r520_t0, _r520_t1;
                        return r520_name + r515_MosaicNameSuffix;
                    };
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r518_MangleName('innerPlusBig'), null, function () {
                        var _r523_t1;
                        var _r523_t0 = this;
                        var r523_currentGlyph = _r523_t0;
                        r523_currentGlyph.setWidth(r515_MosaicWidth);
                        r523_currentGlyph.include(r270_union(r270_HBar.m(r270_SB, r515_MosaicWidth - r270_SB, r270_SymbolMid, r270_GeometryStroke), r270_VBar.m(r518_MosaicMiddle, r1_mix(r270_SymbolMid, r270_PlusTop, r515_MosaicWidthScalar), r1_mix(r270_SymbolMid, r270_PlusBot, r515_MosaicWidthScalar), r270_GeometryStroke)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r518_MangleName('innerMultiplyStroke1Big'), null, function () {
                        var _r528_t1;
                        var _r528_t0 = this;
                        var r528_currentGlyph = _r528_t0;
                        r528_currentGlyph.setWidth(r515_MosaicWidth);
                        var r528_radius = (r270_RightSB - r270_SB) / 2 * Math.sqrt(r515_MosaicWidthScalar);
                        r528_currentGlyph.include(r270_dispiro(r270_widths.center(r270_GeometryStroke), r270_flat(r518_MosaicMiddle - r528_radius, r270_SymbolMid - r528_radius), r270_curl(r518_MosaicMiddle + r528_radius, r270_SymbolMid + r528_radius)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r518_MangleName('innerMultiplyStroke2Big'), null, function () {
                        var _r533_t1;
                        var _r533_t0 = this;
                        var r533_currentGlyph = _r533_t0;
                        r533_currentGlyph.setWidth(r515_MosaicWidth);
                        var r533_radius = (r270_RightSB - r270_SB) / 2 * Math.sqrt(r515_MosaicWidthScalar);
                        r533_currentGlyph.include(r270_dispiro(r270_widths.center(r270_GeometryStroke), r270_flat(r518_MosaicMiddle + r533_radius, r270_SymbolMid - r533_radius), r270_curl(r518_MosaicMiddle - r533_radius, r270_SymbolMid + r533_radius)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r518_MangleName('innerMultiplyBig'), null, function () {
                        var _r538_t1;
                        var _r538_t0 = this;
                        var r538_currentGlyph = _r538_t0;
                        r538_currentGlyph.setWidth(r515_MosaicWidth);
                        r538_currentGlyph.include(r270_xn$referglyph$1aao(r518_MangleName('innerMultiplyStroke1Big')));
                        r538_currentGlyph.include(r270_xn$referglyph$1aao(r518_MangleName('innerMultiplyStroke2Big')));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c(r518_MangleName('risingDiagonal'), r518_MangleUnicode(10187), function () {
                        var _r544_t1;
                        var _r544_t0 = this;
                        var r544_currentGlyph = _r544_t0;
                        r544_currentGlyph.setWidth(r515_MosaicWidth);
                        r544_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_SB, r270_ParenBot), r270_curl(r515_MosaicWidth - r270_SB, r270_ParenTop)));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r518_MangleName('fallingDiagonal'), r518_MangleUnicode(10189), function () {
                        var _r549_t1;
                        var _r549_t0 = this;
                        var r549_currentGlyph = _r549_t0;
                        r549_currentGlyph.setWidth(r515_MosaicWidth);
                        r549_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_SB, r270_ParenTop), r270_curl(r515_MosaicWidth - r270_SB, r270_ParenBot)));
                        return void 0;
                    });
                }());
                _r515_t5 = _r515_t2 = _r515_t2 + 1;
                _r515_t4 = _r515_t2 < _r515_t1;
            }
            return _r515_t5;
        }();
    });
    return void 0;
});
