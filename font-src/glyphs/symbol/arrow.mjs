'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Arrow', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t4, _r270_t5, _r270_t6, _r270_tag7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_DesignParameters = _r270_t1.DesignParameters;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_OperTop = _r270_t1.OperTop;
        var r270_OperBot = _r270_t1.OperBot;
        var r270_Translate = _r270_t1.Translate;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_WideWidth1 = _r270_t1.WideWidth1;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        return function () {
            var r273_FMosaicWide, r273_MosaicNameSuffix, r273_MosaicWidth, r273_MosaicWidthScalar, _r273_t3, _r273_t5, _r273_t6, _r273_tag7;
            var r273_WidthKinds = [
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
            var _r273_t0 = r273_WidthKinds;
            var _r273_t1 = _r273_t0.length;
            var _r273_t2 = 0;
            var _r273_t4 = _r273_t2 < _r273_t1;
            while (_r273_t4) {
                _r273_t3 = _r273_t0[_r273_t2];
                r273_FMosaicWide = _r273_t3[0];
                r273_MosaicNameSuffix = _r273_t3[1];
                r273_MosaicWidth = _r273_t3[2];
                r273_MosaicWidthScalar = _r273_t3[3];
                (function () {
                    var _r276_t3, _r276_tag4, _r276_t5, _r276_tag6, _r276_t7, _r276_tag8, _r276_t9, _r276_tag10, _r276_t11, _r276_tag12, _r276_t13, _r276_tag14, _r276_t15, _r276_tag16, _r276_t17, _r276_tag18, _r276_t19, _r276_tag20, _r276_t21, _r276_tag22, _r276_t23, _r276_tag24, _r276_t25, _r276_tag26, _r276_t27, _r276_tag28, _r276_t29, _r276_tag30, _r276_t31, _r276_tag32, _r276_t33, _r276_tag34, _r276_t35, _r276_tag36, _r276_t37, _r276_tag38, _r276_t39, _r276_tag40, _r276_t41, _r276_tag42, _r276_t43, _r276_tag44, _r276_t45, _r276_tag46, _r276_t47, _r276_tag48, _r276_t49, _r276_tag50, _r276_t51, _r276_tag52, _r276_t53, _r276_tag54, _r276_t55, _r276_tag56, _r276_t57, _r276_tag58, _r276_t59, _r276_tag60, _r276_t61, _r276_tag62;
                    var r276_MosaicDesiredWidth = r270_WideWidth1;
                    var r276_MosaicMiddle = r273_MosaicWidth / 2;
                    var r276_MosaicUnitWidth = r273_MosaicWidth / r273_MosaicWidthScalar;
                    var r276_MangleUnicode = function (r277_unicode, r277__desiredOverride) {
                        var _r277_t0, _r277_t1;
                        return r273_MosaicWidth === (r277__desiredOverride || r276_MosaicDesiredWidth) ? r277_unicode : void 0;
                    };
                    var r276_MangleName = function (r278_name) {
                        var _r278_t0, _r278_t1;
                        return r278_name + r273_MosaicNameSuffix;
                    };
                    var _r276_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
                    var r276_Rect = _r276_t0.Rect;
                    var r276_RoundStrokeTerminalAt = _r276_t0.RoundStrokeTerminalAt;
                    var r276_OShape = _r276_t0.OShape;
                    var r276_HBar = _r276_t0.HBar;
                    var r276_VBar = _r276_t0.VBar;
                    var r276_FlipAround = _r276_t0.FlipAround;
                    var r276_PointingTo = _r276_t0.PointingTo;
                    var r276_xn$withtransform$5sIl = _r276_t0['with-transform'];
                    var r276_xn$cleargeometry$1aao = _r276_t0['clear-geometry'];
                    var r276_MaskAbove = _r276_t0.MaskAbove;
                    var r276_MaskBelow = _r276_t0.MaskBelow;
                    var r276_MaskLeft = _r276_t0.MaskLeft;
                    var r276_MaskRight = _r276_t0.MaskRight;
                    var r276_MaskAboveLine = _r276_t0.MaskAboveLine;
                    var r276_MaskBelowLine = _r276_t0.MaskBelowLine;
                    var r276_MaskLeftLine = _r276_t0.MaskLeftLine;
                    var r276_MaskRightLine = _r276_t0.MaskRightLine;
                    var _r276_t1 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
                    var r276_xn$referglyph$1aao = _r276_t1['refer-glyph'];
                    var r276_HCombine = _r276_t1.HCombine;
                    var r276_VCombine = _r276_t1.VCombine;
                    var _r276_t2 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Symbol-Geometric-Shared'].resolve();
                    var r276_UnicodeWeightGrade = _r276_t2.UnicodeWeightGrade;
                    var r276_arrowHeight = r270_para.arrowHeight * (r270_Width - r270_SB / 2) * Math.pow(r273_MosaicWidth / r276_MosaicUnitWidth, 1 / 3);
                    var r276_arrowWidth = Math.min(r273_MosaicWidth - r270_SB / 2, r276_arrowHeight);
                    var r276_arrowTop = r1_mix(r270_OperBot, r270_OperTop, 1 / 2) + r276_arrowHeight / 2;
                    var r276_arrowBot = r1_mix(r270_OperBot, r270_OperTop, 1 / 2) - r276_arrowHeight / 2;
                    var r276_arrowMidX = r273_MosaicWidth / 2;
                    var r276_arrowSB = (r273_MosaicWidth - r276_arrowWidth) / 2;
                    var r276_arrowRSB = r273_MosaicWidth - r276_arrowSB;
                    var r276_o = r270_O * 2;
                    var r276_arrowHeadSize = (r270_Width - r270_SB) * r270_DesignParameters.arrow_size * Math.pow(r276_arrowWidth / r270_Width, 0.5) - r270_AdviceStroke(5) / 4;
                    var r276_arrowSw = r270_OperatorStroke;
                    var r276_halfArrowSw = r276_arrowSw / 2;
                    var r276_bendArrowHeadSize = r1_mix(r276_arrowSw, r276_arrowHeadSize, 0.75);
                    var r276_fine = r270_AdviceStroke(3.5);
                    var r276_terminal = r270_AdviceStroke(5);
                    var r276_halfTerminal = r276_terminal / 2;
                    var r276_doubleArrowStemWidth = r276_arrowHeadSize * 1.1;
                    var r276_kLongArrowSB = r270_DivFrame(r273_MosaicWidthScalar, 4).leftSB / r270_DivFrame(r273_MosaicWidthScalar, 2).leftSB;
                    var r276_diagPropX = 1 / Math.pow(2, 1 / 4);
                    var r276_diagPropY = 1 / Math.pow(2, 1 / 4);
                    var r276_arrowDiagRSB = r1_mix(r276_arrowMidX, r276_arrowRSB, r276_diagPropX);
                    var r276_arrowDiagSB = r1_mix(r276_arrowMidX, r276_arrowSB, r276_diagPropX);
                    var r276_arrowDiagBot = r1_mix(r276_arrowMidX, r276_arrowBot, r276_diagPropY);
                    var r276_arrowDiagTop = r1_mix(r276_arrowMidX, r276_arrowTop, r276_diagPropY);
                    var r276_ArrowBar = function (r282_x1, r282_y1, r282_x2, r282_y2, r282_halfSw, r282_w) {
                        var _r282_t0, _r282_t1;
                        return r276_PointingTo(r282_x1, r282_y1, r282_x2, r282_y2, function (r283_mag) {
                            var _r283_t0, _r283_t1;
                            var r283_p = (r283_mag - r276_o - r282_halfSw * r1_fallback(r282_w, 1.1)) / r283_mag;
                            return r270_dispiro(r270_widths.center(r282_halfSw * 2), r270_flat(r283_mag * (1 - r283_p), 0), r270_curl(r283_mag, 0));
                        });
                    };
                    var r276_DashArrowBar = function (r284_x1, r284_y1, r284_x2, r284_y2, r284_halfSw, r284_gap, r284_stop, r284_w) {
                        var _r284_t0, _r284_t1;
                        return r276_PointingTo(r284_x1, r284_y1, r284_x2, r284_y2, function (r285_mag) {
                            var _r285_t0, _r285_t1;
                            return function () {
                                var _r287_t1;
                                var _r287_t0 = this;
                                var r287_currentGlyph = _r287_t0;
                                var r287_p = (r285_mag - r276_o - r284_halfSw * r1_fallback(r284_w, 1.1)) / r285_mag;
                                var r287_deltaT = (r284_gap + r284_stop) / r285_mag;
                                var r287_t = 0;
                                while (r287_t < r287_p) {
                                    r287_currentGlyph.include(r270_dispiro(r270_widths.center(r284_halfSw * 2), r270_flat(r1_mix(r285_mag * (1 - r287_p), r285_mag, r287_t), 0), r270_curl(r1_mix(r285_mag * (1 - r287_p), r285_mag, Math.min(r287_p, r287_t + r284_stop / r285_mag)), 0)));
                                    r287_t = r287_t + r287_deltaT;
                                }
                                return void 0;
                            };
                        });
                    };
                    var r276_HookArrowBar = function (r289_x1, r289_y1, r289_x2, r289_y2, r289_halfSw, r289_s, r289_w) {
                        var _r289_t0, _r289_t1;
                        return r276_PointingTo(r289_x1, r289_y1, r289_x2, r289_y2, function (r290_mag) {
                            var _r290_t0, _r290_t1;
                            var r290_p = (r290_mag - r276_o - r289_halfSw * r1_fallback(r289_w, 1.1)) / r290_mag;
                            return r270_dispiro(r270_widths.center(r289_halfSw * 2), r270_g4(r290_mag - Math.abs(r289_s) / 2 - 0.1, r289_s), r270_g4(r290_mag - Math.abs(r289_s) / 2, r289_s), r270_archv(), r270_g4(r290_mag - r270_O, r289_s / 2), r270_arcvh(), r270_flat(r290_mag - Math.abs(r289_s) / 2, 0), r270_curl(r1_mix(r290_mag, 0, r290_p), 0));
                        });
                    };
                    var r276_LoopArrowBar = function (r291_x1, r291_y1, r291_x2, r291_y2, r291_halfSw, r291_s, r291_w) {
                        var _r291_t0, _r291_t1;
                        return r276_PointingTo(r291_x1, r291_y1, r291_x2, r291_y2, function (r292_mag) {
                            var _r292_t0, _r292_t1;
                            var r292_p = (r292_mag - r276_o - r291_halfSw * r1_fallback(r291_w, 1.1)) / r292_mag;
                            return r270_dispiro(r270_widths.center(r291_halfSw * 2), r270_flat(r292_mag - Math.abs(r291_s), -r291_s, r270_heading(r291_s > 0 ? r270_Upward : r270_Downward)), r270_curl(r292_mag - Math.abs(r291_s), r291_s / 2), r270_g4(r292_mag - Math.abs(r291_s) / 2, r291_s, r270_heading(r270_Rightward)), r270_archv(), r270_g4(r292_mag - r270_O, r291_s / 2), r270_arcvh(), r270_flat(r292_mag - Math.abs(r291_s) / 2, 0), r270_curl(r1_mix(r292_mag, 0, r292_p), 0));
                        });
                    };
                    var r276_SemiHookArrowBar = function (r293_x1, r293_y1, r293_x2, r293_y2, r293_halfSw, r293_halfFine, r293_s, r293_w) {
                        var _r293_t0, _r293_t1;
                        return r276_PointingTo(r293_x1, r293_y1, r293_x2, r293_y2, function (r294_mag) {
                            var _r294_t0, _r294_t1;
                            var r294_p = (r294_mag - r276_o - r293_halfSw * r1_fallback(r293_w, 1.1)) / r294_mag;
                            return r270_dispiro(r270_straight[r293_s > 0 ? 'down' : 'up'].start(r294_mag - r270_O, r293_s, r270_widths.center(r293_halfFine * 2)), r270_arcvh(), r270_flat(r294_mag - Math.abs(r293_s) / 2, 0, r270_widths.center(r293_halfSw * 2)), r270_curl(r1_mix(r294_mag, 0, r294_p), 0));
                        });
                    };
                    var r276_ArrowHead = function (r295_x1, r295_y1, r295_x2, r295_y2, r295__size) {
                        var _r295_t0, _r295_t1;
                        return r270_union(r276_LHSHalfArrowHead(r295_x1, r295_y1, r295_x2, r295_y2, 0, r295__size), r276_RHSHalfArrowHead(r295_x1, r295_y1, r295_x2, r295_y2, 0, r295__size));
                    };
                    var r276_LHSHalfArrowHead = function (r296_x1, r296_y1, r296_x2, r296_y2, r296_width, r296__size) {
                        var _r296_t0, _r296_t1;
                        var r296_size = r1_fallback(r296__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r296_x1, r296_y1, r296_x2, r296_y2, function (r298_mag) {
                            var _r298_t0, _r298_t1;
                            return r270_dispiro(r270_widths.lhs(r276_fine), r270_flat(r276_o, r296_width / 2, r270_heading(r270_Downward)), r270_curl(r276_o + r296_size, -r296_size, r270_widths.lhs(r276_terminal)));
                        }));
                    };
                    var r276_RHSHalfArrowHead = function (r299_x1, r299_y1, r299_x2, r299_y2, r299_width, r299__size) {
                        var _r299_t0, _r299_t1;
                        var r299_size = r1_fallback(r299__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r299_x1, r299_y1, r299_x2, r299_y2, function (r301_mag) {
                            var _r301_t0, _r301_t1;
                            return r270_dispiro(r270_widths.rhs(r276_fine), r270_flat(r276_o, -r299_width / 2, r270_heading(r270_Upward)), r270_curl(r276_o + r299_size, r299_size, r270_widths.rhs(r276_terminal)));
                        }));
                    };
                    var r276_SsArrowHead = function (r302_x1, r302_y1, r302_x2, r302_y2, r302__size) {
                        var _r302_t0, _r302_t1;
                        return r270_union(r276_LHSHalfSsArrowHead(r302_x1, r302_y1, r302_x2, r302_y2, 0, r302__size), r276_RHSHalfSsArrowHead(r302_x1, r302_y1, r302_x2, r302_y2, 0, r302__size));
                    };
                    var r276_LHSHalfSsArrowHead = function (r303_x1, r303_y1, r303_x2, r303_y2, r303_width, r303__size) {
                        var _r303_t0, _r303_t1;
                        var r303_size = r1_fallback(r303__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r303_x1, r303_y1, r303_x2, r303_y2, function (r305_mag) {
                            var _r305_t0, _r305_t1;
                            return r270_dispiro(r270_widths.lhs(r276_fine), r270_flat(r276_o, r303_width / 2, r270_heading(r270_Downward)), r270_curl(r276_o + r303_size, -r303_size));
                        }));
                    };
                    var r276_RHSHalfSsArrowHead = function (r306_x1, r306_y1, r306_x2, r306_y2, r306_width, r306__size) {
                        var _r306_t0, _r306_t1;
                        var r306_size = r1_fallback(r306__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r306_x1, r306_y1, r306_x2, r306_y2, function (r308_mag) {
                            var _r308_t0, _r308_t1;
                            return r270_dispiro(r270_widths.rhs(r276_fine), r270_flat(r276_o, -r306_width / 2, r270_heading(r270_Upward)), r270_curl(r276_o + r306_size, r306_size));
                        }));
                    };
                    var r276_ArrowHeadMaskOut = function (r309_x1, r309_y1, r309_x2, r309_y2, r309__size) {
                        var _r309_t0, _r309_t1;
                        return r270_union(r276_RHSHalfArrowHeadMaskOut(r309_x1, r309_y1, r309_x2, r309_y2, 0, r309__size), r276_LHSHalfArrowHeadMaskOut(r309_x1, r309_y1, r309_x2, r309_y2, 0, r309__size));
                    };
                    var r276_RHSHalfArrowHeadMaskOut = function (r310_x1, r310_y1, r310_x2, r310_y2, r310_width, r310__size) {
                        var _r310_t0, _r310_t1;
                        var r310_size = r1_fallback(r310__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r310_x1, r310_y1, r310_x2, r310_y2, function (r312_mag) {
                            var _r312_t0, _r312_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r270_O, -r310_width / 2), r270_corner(r270_O + r310_size, r310_size), r270_corner(r276_o, r310_size), r270_corner(r276_o, -r310_width / 2));
                        }));
                    };
                    var r276_LHSHalfArrowHeadMaskOut = function (r313_x1, r313_y1, r313_x2, r313_y2, r313_width, r313__size) {
                        var _r313_t0, _r313_t1;
                        var r313_size = r1_fallback(r313__size, r276_arrowHeadSize);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r313_x1, r313_y1, r313_x2, r313_y2, function (r315_mag) {
                            var _r315_t0, _r315_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r270_O, +r313_width / 2), r270_corner(r270_O + r313_size, -r313_size), r270_corner(r276_o, -r313_size), r270_corner(r276_o, +r313_width / 2));
                        }));
                    };
                    var r276_ArrowHeadMaskGap = function (r316_x1, r316_y1, r316_x2, r316_y2, r316_width, r316_length, r316_gap) {
                        var _r316_t0, _r316_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r316_x1, r316_y1, r316_x2, r316_y2, function (r318_mag) {
                            var _r318_t0, _r318_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r316_length, r316_width - r276_o), r270_corner(r276_o, 0), r270_corner(r316_length, -r316_width + r276_o), r270_corner(r316_length - r316_gap, -r316_width + r276_o), r270_corner(r276_o - r316_gap, 0), r270_corner(r316_length - r316_gap, r316_width - r276_o));
                        }));
                    };
                    var r276_TriangleArrowHead = function (r319_x1, r319_y1, r319_x2, r319_y2, r319_width, r319__length) {
                        var _r319_t0, _r319_t1;
                        var r319_length = r1_fallback(r319__length, r319_width);
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r276_PointingTo(r319_x1, r319_y1, r319_x2, r319_y2, function (r321_mag) {
                            var _r321_t0, _r321_t1;
                            return r270_xn$spirooutline$1aao(r270_corner(r276_o, 0), r270_corner(r319_length, r319_width - r276_o), r270_corner(r319_length, -r319_width + r276_o));
                        }));
                    };
                    var r276_ArrowShape = function (r322_x1, r322_y1, r322_x2, r322_y2, r322_size) {
                        var _r322_t0, _r322_t1;
                        return function () {
                            var _r324_t1;
                            var _r324_t0 = this;
                            var r324_currentGlyph = _r324_t0;
                            r324_currentGlyph.include(r276_ArrowHead(r322_x1, r322_y1, r322_x2, r322_y2, r322_size));
                            r324_currentGlyph.include(r276_ArrowBar(r322_x1, r322_y1, r322_x2, r322_y2, r276_halfArrowSw));
                            return void 0;
                        };
                    };
                    var r276_ThinArrowShape = function (r327_x1, r327_y1, r327_x2, r327_y2, r327_size) {
                        var _r327_t0, _r327_t1;
                        return function () {
                            var _r329_t1;
                            var _r329_t0 = this;
                            var r329_currentGlyph = _r329_t0;
                            r329_currentGlyph.include(r276_ArrowHead(r327_x1, r327_y1, r327_x2, r327_y2, r327_size));
                            r329_currentGlyph.include(r276_ArrowBar(r327_x1, r327_y1, r327_x2, r327_y2, 0.5 * r1_mix(r276_fine, r276_terminal, 0.5)));
                            return void 0;
                        };
                    };
                    var r276_TrigArrowShape = function (r332_x1, r332_y1, r332_x2, r332_y2, r332_size) {
                        var _r332_t0, _r332_t1;
                        return function () {
                            var _r334_t1;
                            var _r334_t0 = this;
                            var r334_currentGlyph = _r334_t0;
                            r334_currentGlyph.include(r276_TriangleArrowHead(r332_x1, r332_y1, r332_x2, r332_y2, 0.75 * r332_size));
                            r334_currentGlyph.include(r276_ArrowBar(r332_x1, r332_y1, r332_x2, r332_y2, r276_halfArrowSw));
                            return void 0;
                        };
                    };
                    var r276_OpenArrowShape = function (r337_x1, r337_y1, r337_x2, r337_y2, r337_size) {
                        var _r337_t0, _r337_t1;
                        return function () {
                            var _r339_t1;
                            var _r339_t0 = this;
                            var r339_currentGlyph = _r339_t0;
                            var r339_fine = Math.min(r270_AdviceStroke(5), r337_size * 0.75 / 3);
                            var r339_mag = Math.hypot(r337_y2 - r337_y1, r337_x2 - r337_x1);
                            var r339_p = (r339_mag - r339_fine) / r339_mag;
                            var r339_p2 = (r339_mag - r339_fine * Math.sqrt(2)) / r339_mag;
                            var r339_innerHeaderLengthShrink = r339_fine * (1 + Math.sqrt(2));
                            var r339_x1a = r1_mix(r337_x1, r337_x2, 1 - r339_p);
                            var r339_y1a = r1_mix(r337_y1, r337_y2, 1 - r339_p);
                            var r339_x2a = r1_mix(r337_x1, r337_x2, r339_p2);
                            var r339_y2a = r1_mix(r337_y1, r337_y2, r339_p2);
                            r339_currentGlyph.include(r270_difference(r270_union(r276_ArrowBar(r337_x1, r337_y1, r337_x2, r337_y2, r276_halfArrowSw), r276_TriangleArrowHead(r337_x1, r337_y1, r337_x2, r337_y2, 0.75 * r337_size)), r276_TriangleArrowHead(r339_x1a, r339_y1a, r339_x2a, r339_y2a, 0.75 * r337_size - r339_innerHeaderLengthShrink)));
                            return void 0;
                        };
                    };
                    var r276_DoubleTrigArrowShape = function (r341_x1, r341_y1, r341_x2, r341_y2, r341_size) {
                        var _r341_t0, _r341_t1;
                        return function () {
                            var _r343_t1;
                            var _r343_t0 = this;
                            var r343_currentGlyph = _r343_t0;
                            var r343_mag = Math.hypot(r341_y2 - r341_y1, r341_x2 - r341_x1);
                            var r343_p = (r343_mag - 0.75 * r341_size + r276_o) / r343_mag;
                            var r343_x3 = r1_mix(r341_x1, r341_x2, r343_p);
                            var r343_y3 = r1_mix(r341_y1, r341_y2, r343_p);
                            r343_currentGlyph.include(r276_TriangleArrowHead(r341_x1, r341_y1, r341_x2, r341_y2, 0.75 * r341_size));
                            r343_currentGlyph.include(r276_TriangleArrowHead(r341_x1, r341_y1, r343_x3, r343_y3, 0.75 * r341_size));
                            r343_currentGlyph.include(r276_ArrowBar(r341_x1, r341_y1, r343_x3, r343_y3, r276_halfArrowSw));
                            return void 0;
                        };
                    };
                    var r276_SsArrowShape = function (r347_x1, r347_y1, r347_x2, r347_y2, r347_size) {
                        var _r347_t0, _r347_t1;
                        return function () {
                            var _r349_t1;
                            var _r349_t0 = this;
                            var r349_currentGlyph = _r349_t0;
                            r349_currentGlyph.include(r276_SsArrowHead(r347_x1, r347_y1, r347_x2, r347_y2, r347_size));
                            r349_currentGlyph.include(r276_ArrowBar(r347_x1, r347_y1, r347_x2, r347_y2, r276_halfArrowSw));
                            return void 0;
                        };
                    };
                    var r276_DashArrowShape = function (r352_x1, r352_y1, r352_x2, r352_y2, r352_size) {
                        var _r352_t0, _r352_t1;
                        return function () {
                            var _r354_t1;
                            var _r354_t0 = this;
                            var r354_currentGlyph = _r354_t0;
                            var r354_gap = r270_AdviceStroke(6);
                            r354_currentGlyph.include(r276_ArrowHead(r352_x1, r352_y1, r352_x2, r352_y2, r352_size));
                            r354_currentGlyph.include(r276_DashArrowBar(r352_x1, r352_y1, r352_x2, r352_y2, r276_halfArrowSw, r354_gap, Math.max(r270_Width / 5, r354_gap * 3)));
                            return void 0;
                        };
                    };
                    var r276_TrigDashArrowShape = function (r357_x1, r357_y1, r357_x2, r357_y2, r357_size) {
                        var _r357_t0, _r357_t1;
                        return function () {
                            var _r359_t1;
                            var _r359_t0 = this;
                            var r359_currentGlyph = _r359_t0;
                            var r359_gap = r270_AdviceStroke(6);
                            r359_currentGlyph.include(r276_TriangleArrowHead(r357_x1, r357_y1, r357_x2, r357_y2, 0.75 * r357_size));
                            r359_currentGlyph.include(r276_DashArrowBar(r357_x1, r357_y1, r357_x2, r357_y2, r276_halfArrowSw, r359_gap, Math.max(r270_Width / 5, r359_gap * 3)));
                            return void 0;
                        };
                    };
                    var r276_HookArrowShape = function (r362_mul) {
                        var _r362_t0, _r362_t1;
                        return function (r363_x1, r363_y1, r363_x2, r363_y2, r363_size) {
                            var _r363_t0, _r363_t1;
                            return function () {
                                var _r365_t1;
                                var _r365_t0 = this;
                                var r365_currentGlyph = _r365_t0;
                                r365_currentGlyph.include(r276_ArrowHead(r363_x1, r363_y1, r363_x2, r363_y2, r363_size));
                                r365_currentGlyph.include(r276_HookArrowBar(r363_x1, r363_y1, r363_x2, r363_y2, r276_halfArrowSw, r363_size * r362_mul));
                                return void 0;
                            };
                        };
                    };
                    var r276_LoopArrowShape = function (r368_mul) {
                        var _r368_t0, _r368_t1;
                        return function (r369_x1, r369_y1, r369_x2, r369_y2, r369_size) {
                            var _r369_t0, _r369_t1;
                            return function () {
                                var _r371_t1;
                                var _r371_t0 = this;
                                var r371_currentGlyph = _r371_t0;
                                r371_currentGlyph.include(r276_ArrowHead(r369_x1, r369_y1, r369_x2, r369_y2, r369_size));
                                r371_currentGlyph.include(r276_LoopArrowBar(r369_x1, r369_y1, r369_x2, r369_y2, r276_halfArrowSw, r369_size * r368_mul));
                                return void 0;
                            };
                        };
                    };
                    var r276_ThickArrowShape = function (r374_color) {
                        var _r374_t0, _r374_t1;
                        return function (r375_x1, r375_y1, r375_x2, r375_y2) {
                            var _r375_t0, _r375_t1, _r375_t2;
                            var r375_headLen = r276_MosaicUnitWidth * Math.sqrt(r273_MosaicWidthScalar) * 0.4;
                            var r375_halfBarWidth = r375_headLen / 3;
                            var r375_headWidth = r375_halfBarWidth * 2;
                            var r375_fine = Math.min(r270_AdviceStroke(5), r375_halfBarWidth * 0.6);
                            var r375_mag = Math.hypot(r375_y2 - r375_y1, r375_x2 - r375_x1);
                            var r375_p = (r375_mag - r375_fine) / r375_mag;
                            var r375_p2 = (r375_mag - r375_fine * Math.sqrt(13) / 2) / r375_mag;
                            var r375_innerHeaderLengthShrink = r375_fine * (1 + Math.sqrt(13) / 2);
                            var r375_x1a = r1_mix(r375_x1, r375_x2, 1 - r375_p);
                            var r375_y1a = r1_mix(r375_y1, r375_y2, 1 - r375_p);
                            var r375_x2a = r1_mix(r375_x1, r375_x2, r375_p2);
                            var r375_y2a = r1_mix(r375_y1, r375_y2, r375_p2);
                            var r375_x1CoA = r1_mix(r375_x1, r375_x2, -0.05);
                            var r375_y1CoA = r1_mix(r375_y1, r375_y2, -0.05);
                            return _r375_t0 = r374_color, _r375_t0 === 'white' ? r270_difference(r270_union(r276_TriangleArrowHead(r375_x1, r375_y1, r375_x2, r375_y2, r375_headWidth, r375_headLen), r276_ArrowBar(r375_x1, r375_y1, r375_x2, r375_y2, r375_halfBarWidth + r375_fine / 2, 2)), r270_union(r276_TriangleArrowHead(r375_x1a, r375_y1a, r375_x2a, r375_y2a, r375_headWidth - r375_innerHeaderLengthShrink * r375_headWidth / r375_headLen, r375_headLen - r375_innerHeaderLengthShrink), r276_ArrowBar(r375_x1a, r375_y1a, r375_x2a, r375_y2a, r375_halfBarWidth - r375_fine / 2, 2))) : _r375_t0 === 'white-open' ? r270_difference(r270_union(r276_TriangleArrowHead(r375_x1, r375_y1, r375_x2, r375_y2, r375_headWidth, r375_headLen), r276_ArrowBar(r375_x1, r375_y1, r375_x2, r375_y2, r375_halfBarWidth + r375_fine / 2, 2)), r270_union(r276_TriangleArrowHead(r375_x1CoA, r375_y1CoA, r375_x2a, r375_y2a, r375_headWidth - r375_innerHeaderLengthShrink * r375_headWidth / r375_headLen, r375_headLen - r375_innerHeaderLengthShrink), r276_ArrowBar(r375_x1CoA, r375_y1CoA, r375_x2a, r375_y2a, r375_halfBarWidth - r375_fine / 2, 2))) : _r375_t0 === 'black' ? r270_union(r276_TriangleArrowHead(r375_x1, r375_y1, r375_x2, r375_y2, r375_headWidth, r375_headLen), r276_ArrowBar(r375_x1, r375_y1, r375_x2, r375_y2, r375_halfBarWidth, 2)) : _r375_t0 === 'blackSemiHookR' ? r270_union(r276_TriangleArrowHead(r375_x1, r375_y1, r375_x2, r375_y2, r375_headWidth, r375_headLen), r276_SemiHookArrowBar(r375_x1, r375_y1, r375_x2, r375_y2, r375_halfBarWidth, r276_halfTerminal, r375_headWidth, 2)) : _r375_t0 === 'blackSemiHookL' ? r270_union(r276_TriangleArrowHead(r375_x1, r375_y1, r375_x2, r375_y2, r375_headWidth, r375_headLen), r276_SemiHookArrowBar(r375_x1, r375_y1, r375_x2, r375_y2, r375_halfBarWidth, r276_halfTerminal, -r375_headWidth, 2)) : void 0;
                        };
                    };
                    var r276_RoundArrow = function () {
                        var r378_Shape;
                        var r378_exports = {};
                        var r378_Blob = function (r385_x, r385_y, r385_sw) {
                            var _r385_t0, _r385_t1;
                            return r276_RoundStrokeTerminalAt(r385_x, r385_y, r385_sw / 2);
                        };
                        var r378_Bar = function (r386_x1, r386_y1, r386_x2, r386_y2, r386_sw) {
                            var _r386_t0, _r386_t1;
                            return r276_PointingTo(r386_x1, r386_y1, r386_x2, r386_y2, function (r387_mag) {
                                var _r387_t0, _r387_t1;
                                return r270_union(r378_Blob(0, 0, r386_sw), r378_Blob(r387_mag, 0, r386_sw), r270_dispiro(r270_widths.center(r386_sw), r270_flat(0, 0), r270_curl(r387_mag, 0)));
                            });
                        };
                        var r378_Head = function (r388_x1, r388_y1, r388_x2, r388_y2, r388_sw, r388_headLen, r388_headWidth) {
                            var _r388_t0, _r388_t1;
                            return r276_PointingTo(r388_x1, r388_y1, r388_x2, r388_y2, function (r389_mag) {
                                var _r389_t0, _r389_t1;
                                return r270_union(r378_Blob(r388_headLen, r388_headWidth, r388_sw), r378_Blob(r388_headLen, -r388_headWidth, r388_sw), r270_dispiro(r270_widths.center(r388_sw), r270_flat(0, 0), r270_curl(r388_headLen, r388_headWidth)), r270_dispiro(r270_widths.center(r388_sw), r270_flat(0, 0), r270_curl(r388_headLen, -r388_headWidth)));
                            });
                        };
                        r378_exports.Shape = r378_Shape = function (r391_sw) {
                            var _r391_t0, _r391_t1;
                            return function (r392_x1, r392_y1, r392_x2, r392_y2) {
                                var _r392_t0, _r392_t1;
                                var r392_headLen = r276_MosaicUnitWidth * Math.sqrt(r273_MosaicWidthScalar) * 0.5;
                                var r392_headWidth = r392_headLen * 1;
                                var r392_mag = Math.hypot(r392_x2 - r392_x1, r392_y2 - r392_y1);
                                var r392_p = 1 - r391_sw / r392_mag;
                                var r392_pHalf = r1_mix(1, r392_p, 0.5);
                                var r392_x1a = r1_mix(r1_mix(r392_x1, r392_x2, 0.5), r392_x1, r392_p);
                                var r392_x2a = r1_mix(r1_mix(r392_x1, r392_x2, 0.5), r392_x2, r392_p);
                                var r392_y1a = r1_mix(r1_mix(r392_y1, r392_y2, 0.5), r392_y1, r392_p);
                                var r392_y2a = r1_mix(r1_mix(r392_y1, r392_y2, 0.5), r392_y2, r392_p);
                                return r270_union(r378_Bar(r392_x1a, r392_y1a, r392_x2a, r392_y2a, r391_sw), r378_Head(r392_x1a, r392_y1a, r392_x2a, r392_y2a, r391_sw, r392_pHalf * r392_headLen, r392_pHalf * r392_headWidth));
                            };
                        };
                        return r378_exports;
                    }();
                    var r276_BarbArrowHead = function (r393_x1, r393_y1, r393_x2, r393_y2, r393_width, r393_length, r393_thickness) {
                        var _r393_t0, _r393_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                            var _r396_t1;
                            var _r396_t0 = this;
                            var r396_currentGlyph = _r396_t0;
                            r396_currentGlyph.include(r276_PointingTo(r393_x1, r393_y1, r393_x2, r393_y2, function (r398_mag) {
                                var _r398_t0, _r398_t1;
                                return r270_xn$spirooutline$1aao(r270_corner(r276_o, 0), r270_corner(r393_length, r393_width - r276_o), r270_corner(r393_length + r393_thickness, r393_width - r276_o), r270_corner(r276_o + r393_thickness, 0), r270_corner(r393_length + r393_thickness, -r393_width + r276_o), r270_corner(r393_length, -r393_width + r276_o));
                            }));
                            return void 0;
                        });
                    };
                    var r276_BarbArrowShape = function (r399_k, r399_thickness) {
                        var _r399_t0, _r399_t1;
                        return function (r400_x1, r400_y1, r400_x2, r400_y2) {
                            var _r400_t0, _r400_t1;
                            var r400_headLen = r276_MosaicUnitWidth * Math.sqrt(r273_MosaicWidthScalar) * r399_k;
                            var r400_halfBarWidth = r399_thickness / 2;
                            return r270_union(r276_BarbArrowHead(r400_x1, r400_y1, r400_x2, r400_y2, r400_headLen, r400_headLen, r399_thickness * 1.125), r276_ArrowBar(r400_x1, r400_y1, r400_x2, r400_y2, r400_halfBarWidth, 2));
                        };
                    };
                    var r276_HalfArrowShape = function (r401_side) {
                        var _r401_t0, _r401_t1;
                        return function (r402_x1, r402_y1, r402_x2, r402_y2, r402_size) {
                            var _r402_t0, _r402_t1;
                            return function () {
                                var _r404_t1;
                                var _r404_t0 = this;
                                var r404_currentGlyph = _r404_t0;
                                r404_currentGlyph.include(r401_side(r402_x1, r402_y1, r402_x2, r402_y2, r276_arrowSw, r402_size));
                                r404_currentGlyph.include(r276_ArrowBar(r402_x1, r402_y1, r402_x2, r402_y2, r276_halfArrowSw, 1.75));
                                return void 0;
                            };
                        };
                    };
                    var r276_ArrowBarMaskOut = function (r407_d) {
                        var _r407_t0, _r407_t1;
                        return r270_xn$spirooutline$1aao(r270_corner(r270_O, 0), r270_corner(2 * r407_d + r270_O, 2 * r407_d), r270_corner(-2 * r407_d + r270_O, 2 * r407_d), r270_corner(-2 * r407_d + r270_O, -2 * r407_d), r270_corner(2 * r407_d + r270_O, -2 * r407_d));
                    };
                    var r276_DoubleArrowBarShape = function (r408_w, r408_x1, r408_y1, r408_x2, r408_y2) {
                        var _r408_t0, _r408_t1;
                        return r276_PointingTo(r408_x1, r408_y1, r408_x2, r408_y2, function (r409_mag) {
                            var _r409_t0, _r409_t1;
                            var r409_fine = Math.min(r408_w / 3, r276_arrowSw);
                            var r409_coFine = r408_w / 2 - r409_fine / 2;
                            return r270_difference(r270_union(r270_dispiro(r270_widths.center(r409_fine), r270_flat(0, +r409_coFine), r270_curl(r409_mag, +r409_coFine)), r270_dispiro(r270_widths.center(r409_fine), r270_flat(0, -r409_coFine), r270_curl(r409_mag, -r409_coFine))), r276_ArrowBarMaskOut(r409_coFine));
                        });
                    };
                    var r276_DoubleArrowShape = function (r410_w) {
                        var _r410_t0, _r410_t1;
                        return function (r411_x1, r411_y1, r411_x2, r411_y2, r411_size) {
                            var _r411_t0, _r411_t1;
                            return function () {
                                var _r413_t1;
                                var _r413_t0 = this;
                                var r413_currentGlyph = _r413_t0;
                                r413_currentGlyph.include(r276_ArrowHead(r411_x1, r411_y1, r411_x2, r411_y2, r411_size));
                                r413_currentGlyph.include(r276_DoubleArrowBarShape(r410_w, r411_x1, r411_y1, r411_x2, r411_y2));
                                return void 0;
                            };
                        };
                    };
                    var r276_TripleArrowBarShape = function (r416_w, r416_x1, r416_y1, r416_x2, r416_y2) {
                        var _r416_t0, _r416_t1;
                        return r276_PointingTo(r416_x1, r416_y1, r416_x2, r416_y2, function (r417_mag) {
                            var _r417_t0, _r417_t1;
                            var r417_fine = Math.min(r416_w / 4, r276_arrowSw);
                            var r417_coFine = r416_w / 2 - r417_fine / 2;
                            return r270_difference(r270_union(r270_dispiro(r270_widths.center(r417_fine), r270_flat(0, +r417_coFine), r270_curl(r417_mag, +r417_coFine)), r270_dispiro(r270_widths.center(r417_fine), r270_flat(0, 0), r270_curl(r417_mag, 0)), r270_dispiro(r270_widths.center(r417_fine), r270_flat(0, -r417_coFine), r270_curl(r417_mag, -r417_coFine))), r276_ArrowBarMaskOut(r417_coFine));
                        });
                    };
                    var r276_TripleArrowShape = function (r418_w) {
                        var _r418_t0, _r418_t1;
                        return function (r419_x1, r419_y1, r419_x2, r419_y2, r419_size) {
                            var _r419_t0, _r419_t1;
                            return function () {
                                var _r421_t1;
                                var _r421_t0 = this;
                                var r421_currentGlyph = _r421_t0;
                                r421_currentGlyph.include(r276_ArrowHead(r419_x1, r419_y1, r419_x2, r419_y2, r419_size));
                                r421_currentGlyph.include(r276_TripleArrowBarShape(r418_w, r419_x1, r419_y1, r419_x2, r419_y2));
                                return void 0;
                            };
                        };
                    };
                    var r276_QuadrupleArrowBarShape = function (r424_w, r424_x1, r424_y1, r424_x2, r424_y2) {
                        var _r424_t0, _r424_t1;
                        return r276_PointingTo(r424_x1, r424_y1, r424_x2, r424_y2, function (r425_mag) {
                            var _r425_t0, _r425_t1;
                            var r425_fine = Math.min(r424_w / 6.4, r276_arrowSw);
                            var r425_coFine = r424_w / 2 - r425_fine / 2;
                            return r270_difference(r270_union(r270_dispiro(r270_widths.center(r425_fine), r270_flat(0, +r425_coFine), r270_curl(r425_mag, +r425_coFine)), r270_dispiro(r270_widths.center(r425_fine), r270_flat(0, +r425_coFine / 3), r270_curl(r425_mag, +r425_coFine / 3)), r270_dispiro(r270_widths.center(r425_fine), r270_flat(0, -r425_coFine / 3), r270_curl(r425_mag, -r425_coFine / 3)), r270_dispiro(r270_widths.center(r425_fine), r270_flat(0, -r425_coFine), r270_curl(r425_mag, -r425_coFine))), r276_ArrowBarMaskOut(r425_coFine));
                        });
                    };
                    var r276_QuadrupleArrowShape = function (r426_w) {
                        var _r426_t0, _r426_t1;
                        return function (r427_x1, r427_y1, r427_x2, r427_y2, r427_size) {
                            var _r427_t0, _r427_t1;
                            return function () {
                                var _r429_t1;
                                var _r429_t0 = this;
                                var r429_currentGlyph = _r429_t0;
                                r429_currentGlyph.include(r276_ArrowHead(r427_x1, r427_y1, r427_x2, r427_y2, r427_size));
                                r429_currentGlyph.include(r276_QuadrupleArrowBarShape(r426_w, r427_x1, r427_y1, r427_x2, r427_y2));
                                return void 0;
                            };
                        };
                    };
                    var r276_dhArrowShape = function (r432_x1, r432_y1, r432_x2, r432_y2, r432_size) {
                        var _r432_t0, _r432_t1;
                        return function () {
                            var _r434_t1;
                            var _r434_t0 = this;
                            var r434_currentGlyph = _r434_t0;
                            var r434_mag = Math.hypot(r432_y2 - r432_y1, r432_x2 - r432_x1);
                            var r434_p = (r434_mag - r276_o - r432_size) / r434_mag;
                            r434_currentGlyph.include(r276_ArrowShape(r432_x1, r432_y1, r432_x2, r432_y2, r432_size));
                            r434_currentGlyph.include(r276_ArrowHead(r432_x1, r432_y1, r1_mix(r432_x1, r432_x2, r434_p), r1_mix(r432_y1, r432_y2, r434_p), r432_size));
                            return void 0;
                        };
                    };
                    var r276_htArrowShape = function (r437_x1, r437_y1, r437_x2, r437_y2, r437_size) {
                        var _r437_t0, _r437_t1;
                        return function () {
                            var _r439_t1;
                            var _r439_t0 = this;
                            var r439_currentGlyph = _r439_t0;
                            var r439_mag = Math.hypot(r437_y2 - r437_y1, r437_x2 - r437_x1);
                            var r439_p1 = (r437_size - r276_o - r276_halfArrowSw * 1.1) / r439_mag;
                            var r439_p2 = r437_size / r439_mag;
                            r439_currentGlyph.include(r276_ArrowShape(r1_mix(r437_x1, r437_x2, r439_p1), r1_mix(r437_y1, r437_y2, r439_p1), r437_x2, r437_y2, r437_size));
                            r439_currentGlyph.include(r276_ArrowHead(r437_x1, r437_y1, r1_mix(r437_x1, r437_x2, r439_p2), r1_mix(r437_y1, r437_y2, r439_p2), r437_size));
                            return void 0;
                        };
                    };
                    var r276_MkArrow = function (r442_shape, r442_id, r442_unicode, r442_x1, r442_y1, r442_x2, r442_y2, r442_width, r442_headSize) {
                        var _r442_t0, _r442_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r442_id, r442_unicode, function () {
                            var _r445_t1;
                            var _r445_t0 = this;
                            var r445_currentGlyph = _r445_t0;
                            r445_currentGlyph.setWidth(r1_fallback(r442_width, r273_MosaicWidth));
                            r445_currentGlyph.setBaseAnchor('slash', r1_mix(r442_x1, r442_x2, 2 / 5), r1_mix(r442_y1, r442_y2, 2 / 5));
                            r445_currentGlyph.include(r442_shape(r442_x1, r442_y1, r442_x2, r442_y2, r1_fallback(r442_headSize, r276_arrowHeadSize)));
                            return void 0;
                        });
                    };
                    var r276_DoubleArrow = function (r449_shape, r449_id, r449_unicode, r449_x1, r449_y1, r449_x2, r449_y2) {
                        var _r449_t0, _r449_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r449_id, r449_unicode, function () {
                            var _r452_t1;
                            var _r452_t0 = this;
                            var r452_currentGlyph = _r452_t0;
                            r452_currentGlyph.setWidth(r273_MosaicWidth);
                            r452_currentGlyph.setBaseAnchor('slash', r1_mix(r449_x1, r449_x2, 1 / 2), r1_mix(r449_y1, r449_y2, 1 / 2));
                            var r452_xm = r1_mix(r449_x1, r449_x2, 0.5);
                            var r452_ym = r1_mix(r449_y1, r449_y2, 0.5);
                            r452_currentGlyph.include(r449_shape(r452_xm, r452_ym, r449_x1, r449_y1, r276_arrowHeadSize));
                            r452_currentGlyph.include(r449_shape(r452_xm, r452_ym, r449_x2, r449_y2, r276_arrowHeadSize));
                            return void 0;
                        });
                    };
                    var r276_DoubleArrow2 = function (r457_shape1, r457_shape2, r457_id, r457_unicode, r457_x1, r457_y1, r457_x2, r457_y2) {
                        var _r457_t0, _r457_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r457_id, r457_unicode, function () {
                            var _r460_t1;
                            var _r460_t0 = this;
                            var r460_currentGlyph = _r460_t0;
                            r460_currentGlyph.setWidth(r273_MosaicWidth);
                            r460_currentGlyph.setBaseAnchor('slash', r1_mix(r457_x1, r457_x2, 1 / 2), r1_mix(r457_y1, r457_y2, 1 / 2));
                            var r460_xm = r1_mix(r457_x1, r457_x2, 0.5);
                            var r460_ym = r1_mix(r457_y1, r457_y2, 0.5);
                            r460_currentGlyph.include(r457_shape1(r460_xm, r460_ym, r457_x1, r457_y1, r276_arrowHeadSize));
                            r460_currentGlyph.include(r457_shape2(r460_xm, r460_ym, r457_x2, r457_y2, r276_arrowHeadSize));
                            return void 0;
                        });
                    };
                    var r276_MkAngleArrow = function (r465_shape, r465_bar, r465_id, r465_unicode, r465_x1, r465_y1, r465_x2, r465_y2, r465_x3, r465_y3, r465_size) {
                        var _r465_t0, _r465_t1;
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r465_id, r465_unicode, function () {
                            var _r468_t1;
                            var _r468_t0 = this;
                            var r468_currentGlyph = _r468_t0;
                            r468_currentGlyph.setWidth(r273_MosaicWidth);
                            r468_currentGlyph.include(r270_union(r465_shape(r465_x2, r465_y2, r465_x3, r465_y3, r465_size), r465_bar(r465_x1, r465_y1, r465_x2, r465_y2)));
                            return void 0;
                        });
                    };
                    (function () {
                        var _r472_t0, _r472_t1, _r472_tag2;
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeft'), r276_MangleUnicode(8592), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUp'), r276_MangleUnicode(8593), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRight'), r276_MangleUnicode(8594), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDown'), r276_MangleUnicode(8595), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpLeft'), r276_MangleUnicode(8598), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpRight'), r276_MangleUnicode(8599), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownRight'), r276_MangleUnicode(8600), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownLeft'), r276_MangleUnicode(8601), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ThinArrowShape, r276_MangleName('thinArrowLeft'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThinArrowShape, r276_MangleName('thinArrowUp'), null, r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThinArrowShape, r276_MangleName('thinArrowRight'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThinArrowShape, r276_MangleName('thinArrowDown'), null, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowLeft'), r276_MangleUnicode(11104), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowUp'), r276_MangleUnicode(11105), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowRight'), r276_MangleUnicode(11106), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowDown'), r276_MangleUnicode(11107), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowUpLeft'), r276_MangleUnicode(11110), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowUpRight'), r276_MangleUnicode(11111), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowDownRight'), r276_MangleUnicode(11112), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowDownLeft'), r276_MangleUnicode(11113), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_OpenArrowShape, r276_MangleName('openHeadArrowLeft'), r276_MangleUnicode(8701), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_OpenArrowShape, r276_MangleName('openHeadArrowRight'), r276_MangleUnicode(8702), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleTrigArrowShape, r276_MangleName('dblTrigArrowLeft'), r276_MangleUnicode(11244), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleTrigArrowShape, r276_MangleName('dblTrigArrowUp'), r276_MangleUnicode(11245), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_DoubleTrigArrowShape, r276_MangleName('dblTrigArrowRight'), r276_MangleUnicode(11246), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleTrigArrowShape, r276_MangleName('dblTrigArrowDown'), r276_MangleUnicode(11247), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRightCompact'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid, void 0, r276_bendArrowHeadSize);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeftCompact'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid, void 0, r276_bendArrowHeadSize);
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r472_t0 = function () {
                                var r474_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r474_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                r276_MkArrow(r276_ArrowShape, 'longArrowLeft', 10229, r474_r, r270_SymbolMid, r474_l, r270_SymbolMid);
                                return r276_MkArrow(r276_ArrowShape, 'longArrowRight', 10230, r474_l, r270_SymbolMid, r474_r, r270_SymbolMid);
                            }();
                        return _r472_t0;
                    }());
                    (function () {
                        r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowLeft'), r276_MangleUnicode(8672), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowUp'), r276_MangleUnicode(8673), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowRight'), r276_MangleUnicode(8674), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_DashArrowShape, r276_MangleName('dashArrowDown'), r276_MangleUnicode(8675), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_TrigDashArrowShape, r276_MangleName('trigDashArrowLeft'), r276_MangleUnicode(11114), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_TrigDashArrowShape, r276_MangleName('trigDashArrowUp'), r276_MangleUnicode(11115), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_TrigDashArrowShape, r276_MangleName('trigDashArrowRight'), r276_MangleUnicode(11116), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_MkArrow(r276_TrigDashArrowShape, r276_MangleName('trigDashArrowDown'), r276_MangleUnicode(11117), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_MkArrow(r276_HookArrowShape(1), r276_MangleName('hookArrowLeft'), r276_MangleUnicode(8617), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HookArrowShape(-1), r276_MangleName('hookArrowRight'), r276_MangleUnicode(8618), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HookArrowShape(-1), r276_MangleName('hookArrowUpLeft'), r276_MangleUnicode(10531), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_HookArrowShape(1), r276_MangleName('hookArrowUpRight'), r276_MangleUnicode(10532), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_HookArrowShape(-1), r276_MangleName('hookArrowDownRight'), r276_MangleUnicode(10533), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        return r276_MkArrow(r276_HookArrowShape(1), r276_MangleName('hookArrowDownLeft'), r276_MangleUnicode(10534), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                    }());
                    (function () {
                        r276_MkArrow(r276_LoopArrowShape(1), r276_MangleName('loopArrowLeft'), r276_MangleUnicode(8619), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        return r276_MkArrow(r276_LoopArrowShape(-1), r276_MangleName('loopArrowRight'), r276_MangleUnicode(8620), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        var _r482_t0, _r482_t1, _r482_tag2;
                        var r482_arcSW = Math.min(r276_arrowSw, r270_AdviceStroke(5, r273_MosaicWidthScalar));
                        var r482_headSize = r1_mix(r482_arcSW, r276_arrowHeadSize, 0.5);
                        var r482_headLength = (r482_headSize + r276_fine) * Math.sqrt(0.5);
                        var r482_l = r276_arrowSB + 0.5 * r482_headSize;
                        var r482_r = r276_arrowRSB - 0.5 * r482_headSize;
                        var r482_t = r276_arrowTop - 0.5 * r482_headSize;
                        var r482_b = r276_arrowBot + 0.5 * r482_headSize;
                        var r482_ada = r270_ArchDepthAOf(r270_SmallArchDepth * (r482_r - r482_l) / (r270_RightSB - r270_SB), r482_r - r482_l);
                        var r482_adb = r270_ArchDepthBOf(r270_SmallArchDepth * (r482_r - r482_l) / (r270_RightSB - r270_SB), r482_r - r482_l);
                        var r482_gapWidth = Math.max((r482_t - r482_b) * 0.05, r276_fine * Math.sqrt(0.5));
                        var r482_HalfCircleArrow = function (r483_headFunc, r483_fCcw, r483_fGapped) {
                            var _r483_t0, _r483_t1;
                            return function () {
                                var _r485_t1;
                                var _r485_t0 = this;
                                var r485_currentGlyph = _r485_t0;
                                var r485_arrowX = r483_fCcw ? r482_l + r270_HSwToV(0.5 * r482_arcSW) : r482_r - r270_HSwToV(0.5 * r482_arcSW);
                                var r485_arrowY = r270_SymbolMid;
                                var r485_arrowYS = r485_arrowY + 0.5 * r482_headLength;
                                var r485_arrowYE = r485_arrowY - 0.5 * r482_headLength;
                                r485_currentGlyph.setWidth(r273_MosaicWidth);
                                r485_currentGlyph.include(r270_union(r270_difference(r276_OShape.NoOvershoot(r482_t, r482_b, r482_l, r482_r, r482_arcSW, r482_ada, r482_adb), r483_fGapped ? r276_ArrowHeadMaskGap(r485_arrowX, r485_arrowYS, r485_arrowX, r485_arrowYE, r482_headSize, r482_headSize, r482_gapWidth) : r276_MaskBelow(r485_arrowY)), r270_difference(r270_dispiro(r270_widths.center(r482_arcSW), r270_flat(r485_arrowX, r485_arrowY), r270_curl(r485_arrowX, r485_arrowYE, r270_heading(r270_Downward))), r276_ArrowHeadMaskOut(r485_arrowX, r485_arrowYS, r485_arrowX, r485_arrowYE, r482_headSize))));
                                r485_currentGlyph.include(r483_headFunc(r485_arrowX, r485_arrowYS, r485_arrowX, r485_arrowYE, r482_headSize));
                                return void 0;
                            };
                        };
                        var r482_ShareAlikeArrow = function () {
                            var _r489_t0, _r489_t1;
                            return function () {
                                var _r491_t1;
                                var _r491_t0 = this;
                                var r491_currentGlyph = _r491_t0;
                                var r491_arrowX = r482_l + r270_HSwToV(0.5 * r270_Stroke);
                                var r491_headLength = r482_headSize * Math.sqrt(0.5);
                                var r491_gapSize = Math.max(2 * r491_headLength, r270_CAP - 0 - r482_ada - r482_adb);
                                var r491_gapTop = r270_CAP / 2 + 0.5 * r491_gapSize;
                                var r491_gapBot = r270_CAP / 2 - 0.5 * r491_gapSize;
                                r491_currentGlyph.setWidth(r273_MosaicWidth);
                                r491_currentGlyph.include(r270_union(r270_difference(r276_OShape.NoOvershoot(r270_CAP, 0, r482_l, r482_r, r270_Stroke, r482_ada, r482_adb), r270_xn$spirooutline$1aao(r270_corner(r276_arrowSB, r491_gapTop), r270_corner(r276_arrowMidX, r491_gapTop), r270_corner(r276_arrowMidX, r491_gapBot), r270_corner(r276_arrowSB, r491_gapBot)))));
                                r491_currentGlyph.include(r276_TriangleArrowHead(r491_arrowX, r491_gapTop, r491_arrowX, r491_gapTop - r491_headLength, r482_headSize));
                                return void 0;
                            };
                        };
                        var r482_OpenCircleArrow = function (r495_headFunc, r495_fCcw, r495_fClosed) {
                            var _r495_t0, _r495_t1;
                            return function () {
                                var _r497_t1;
                                var _r497_t0 = this;
                                var r497_currentGlyph = _r497_t0;
                                var r497_arrowX = r276_arrowMidX - r270_CorrectionOMidX * r482_arcSW;
                                var r497_arrowXS = r497_arrowX + (r495_fCcw ? 0.5 : -0.5) * r482_headLength;
                                var r497_arrowXE = r497_arrowX + (r495_fCcw ? -0.5 : 0.5) * r482_headLength;
                                var r497_arrowY = r482_t - 0.5 * r482_arcSW;
                                var r497_circle = r276_OShape.NoOvershoot(r482_t, r482_b, r482_l, r482_r, r482_arcSW, r482_ada, r482_adb);
                                r497_currentGlyph.setWidth(r273_MosaicWidth);
                                if (r495_fClosed)
                                    r497_currentGlyph.include(r497_circle);
                                else
                                    r497_currentGlyph.include(r270_union(r270_difference(r276_OShape.NoOvershoot(r482_t, r482_b, r482_l, r482_r, r482_arcSW, r482_ada, r482_adb), r270_intersection(r276_MaskAbove(r270_SymbolMid), (r495_fCcw ? r276_MaskLeft : r276_MaskRight)(r497_arrowX))), r270_difference(r270_dispiro(r270_widths.center(r482_arcSW), r270_flat(r497_arrowX, r497_arrowY), r270_curl(r497_arrowXE, r497_arrowY, r270_heading(r495_fCcw ? r270_Leftward : r270_Rightward))), r276_ArrowHeadMaskOut(r497_arrowXS, r497_arrowY, r497_arrowXE, r497_arrowY, r482_headSize))));
                                r497_currentGlyph.include(r495_headFunc(r497_arrowXS, r497_arrowY, r497_arrowXE, r497_arrowY, r482_headSize));
                                return void 0;
                            };
                        };
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('ccwHalfCircleArrow'), r276_MangleUnicode(8630), function () {
                            var _r504_t1;
                            var _r504_t0 = this;
                            var r504_currentGlyph = _r504_t0;
                            r504_currentGlyph.include(r482_HalfCircleArrow(r276_ArrowHead, true, false));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('cwHalfCircleArrow'), r276_MangleUnicode(8631), function () {
                            var _r508_t1;
                            var _r508_t0 = this;
                            var r508_currentGlyph = _r508_t0;
                            r508_currentGlyph.include(r482_HalfCircleArrow(r276_ArrowHead, false, false));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('ccwOpenCircleArrow'), r276_MangleUnicode(8634), function () {
                            var _r512_t1;
                            var _r512_t0 = this;
                            var r512_currentGlyph = _r512_t0;
                            r512_currentGlyph.include(r482_OpenCircleArrow(r276_ArrowHead, true, false));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('cwOpenCircleArrow'), r276_MangleUnicode(8635), function () {
                            var _r516_t1;
                            var _r516_t0 = this;
                            var r516_currentGlyph = _r516_t0;
                            r516_currentGlyph.include(r482_OpenCircleArrow(r276_ArrowHead, false, false));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('ccwGappedCircleArrow'), r276_MangleUnicode(10226), function () {
                            var _r520_t1;
                            var _r520_t0 = this;
                            var r520_currentGlyph = _r520_t0;
                            r520_currentGlyph.include(r482_HalfCircleArrow(r276_ArrowHead, true, true));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('cwGappedCircleArrow'), r276_MangleUnicode(10227), function () {
                            var _r524_t1;
                            var _r524_t0 = this;
                            var r524_currentGlyph = _r524_t0;
                            r524_currentGlyph.include(r482_HalfCircleArrow(r276_ArrowHead, false, true));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('ccwClosedCircleArrow'), r276_MangleUnicode(10560), function () {
                            var _r528_t1;
                            var _r528_t0 = this;
                            var r528_currentGlyph = _r528_t0;
                            r528_currentGlyph.include(r482_OpenCircleArrow(r276_ArrowHead, true, true));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('cwClosedCircleArrow'), r276_MangleUnicode(10561), function () {
                            var _r532_t1;
                            var _r532_t0 = this;
                            var r532_currentGlyph = _r532_t0;
                            r532_currentGlyph.include(r482_OpenCircleArrow(r276_ArrowHead, false, true));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('cwOpenCircleArrowTriangle'), r276_MangleUnicode(11118), function () {
                            var _r536_t1;
                            var _r536_t0 = this;
                            var r536_currentGlyph = _r536_t0;
                            r536_currentGlyph.include(r482_OpenCircleArrow(r276_TriangleArrowHead, false, false));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('ccwOpenCircleArrowTriangle'), r276_MangleUnicode(11119), function () {
                            var _r540_t1;
                            var _r540_t0 = this;
                            var r540_currentGlyph = _r540_t0;
                            r540_currentGlyph.include(r482_OpenCircleArrow(r276_TriangleArrowHead, true, false));
                            return void 0;
                        });
                        if (r273_MosaicWidthScalar === 1)
                            _r482_t0 = function () {
                                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('ccCcwArrow', null, function () {
                                    var _r546_t1;
                                    var _r546_t0 = this;
                                    var r546_currentGlyph = _r546_t0;
                                    r546_currentGlyph.include(r482_ShareAlikeArrow());
                                    return void 0;
                                });
                            }();
                        return _r482_t0;
                    }());
                    (function () {
                        var r549_bendL = r1_mix(r276_arrowMidX, r276_arrowSB, Math.max(r276_bendArrowHeadSize / (r276_arrowMidX - r276_arrowSB), Math.pow(0.6, 2 / r273_MosaicWidthScalar)));
                        var r549_bendR = r1_mix(r276_arrowMidX, r276_arrowRSB, Math.max(r276_bendArrowHeadSize / (r276_arrowMidX - r276_arrowSB), Math.pow(0.6, 2 / r273_MosaicWidthScalar)));
                        var r549_bendT = r270_SymbolMid + r276_bendArrowHeadSize * 2;
                        var r549_bendB = r270_SymbolMid - r276_bendArrowHeadSize * 2;
                        var r549_VBS = function (r550_x1, r550_y1, r550_x2, r550_y2) {
                            var _r550_t0, _r550_t1;
                            return r276_VBar.m(r550_x1, r550_y1, r550_y2 - 0.5 * r276_arrowSw, r276_arrowSw);
                        };
                        var r549_VBE = function (r551_x1, r551_y1, r551_x2, r551_y2) {
                            var _r551_t0, _r551_t1;
                            return r276_VBar.m(r551_x1, r551_y1, r551_y2 + 0.5 * r276_arrowSw, r276_arrowSw);
                        };
                        var r549_HBS = function (r552_x1, r552_y1, r552_x2, r552_y2) {
                            var _r552_t0, _r552_t1;
                            return r276_HBar.m(r552_x1, r552_x2 - 0.5 * r276_arrowSw, r552_y1, r276_arrowSw);
                        };
                        var r549_HBE = function (r553_x1, r553_y1, r553_x2, r553_y2) {
                            var _r553_t0, _r553_t1;
                            return r276_HBar.m(r553_x1, r553_x2 + 0.5 * r276_arrowSw, r553_y1, r276_arrowSw);
                        };
                        r276_MkAngleArrow(r276_ArrowShape, r549_VBE, r276_MangleName('Arrow-up-angle-bend-left'), r276_MangleUnicode(8624), r549_bendR, r276_arrowBot, r549_bendR, r276_arrowTop - r276_bendArrowHeadSize, r549_bendL, r276_arrowTop - r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_VBE, r276_MangleName('Arrow-up-angle-bend-right'), r276_MangleUnicode(8625), r549_bendL, r276_arrowBot, r549_bendL, r276_arrowTop - r276_bendArrowHeadSize, r549_bendR, r276_arrowTop - r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_VBS, r276_MangleName('Arrow-down-angle-bend-left'), r276_MangleUnicode(8626), r549_bendR, r276_arrowTop, r549_bendR, r276_arrowBot + r276_bendArrowHeadSize, r549_bendL, r276_arrowBot + r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_VBS, r276_MangleName('Arrow-down-angle-bend-right'), r276_MangleUnicode(8627), r549_bendL, r276_arrowTop, r549_bendL, r276_arrowBot + r276_bendArrowHeadSize, r549_bendR, r276_arrowBot + r276_bendArrowHeadSize, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_HBE, r276_MangleName('Arrow-right-angle-bend-down'), r276_MangleUnicode(11022), r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r549_bendB, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_HBE, r276_MangleName('Arrow-right-angle-bend-up'), r276_MangleUnicode(11023), r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowRSB - r276_bendArrowHeadSize, r549_bendT, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_HBS, r276_MangleName('Arrow-left-angle-bend-down'), r276_MangleUnicode(11024), r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r549_bendB, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_HBS, r276_MangleName('Arrow-left-angle-bend-up'), r276_MangleUnicode(11025), r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r270_SymbolMid, r276_arrowSB + r276_bendArrowHeadSize, r549_bendT, r276_bendArrowHeadSize);
                        r276_MkAngleArrow(r276_ArrowShape, r549_HBE, r276_MangleName('Arrow-right-angle-down'), r276_MangleUnicode(8628), r276_arrowSB, r276_arrowTop, r276_arrowRSB - r276_arrowHeadSize, r276_arrowTop, r276_arrowRSB - r276_arrowHeadSize, r276_arrowBot, r276_arrowHeadSize);
                        return r276_MkAngleArrow(r276_ArrowShape, r549_VBS, r276_MangleName('Arrow-down-angle-left'), r276_MangleUnicode(8629), r276_arrowRSB, r276_arrowTop, r276_arrowRSB, r276_arrowBot + r276_arrowHeadSize, r276_arrowSB, r276_arrowBot + r276_arrowHeadSize, r276_arrowHeadSize);
                    }());
                    (function () {
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowLeftHR'), r276_MangleUnicode(8636), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowLeftHL'), r276_MangleUnicode(8637), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowUpHR'), r276_MangleUnicode(8638), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowUpHL'), r276_MangleUnicode(8639), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowRightHL'), r276_MangleUnicode(8640), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowRightHR'), r276_MangleUnicode(8641), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowDownHL'), r276_MangleUnicode(8642), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        return r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowDownHR'), r276_MangleUnicode(8643), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_DoubleArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowLeftRightHR'), r276_MangleUnicode(10570), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowLeftRightHL'), r276_MangleUnicode(10571), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowUpDownHR'), r276_MangleUnicode(10572), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        return r276_DoubleArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowUpDownHL'), r276_MangleUnicode(10573), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_DoubleArrow2(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowLeftHRRightHL'), r276_MangleUnicode(10574), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow2(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowUpHRDownHL'), r276_MangleUnicode(10575), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_DoubleArrow2(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowLeftHLRightHR'), r276_MangleUnicode(10576), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_DoubleArrow2(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowUpHLDownHR'), r276_MangleUnicode(10577), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    var r276_waveArrowAmplitude = (r270_Width - r270_SB) * r270_DesignParameters.arrow_size * (0.7 + 0.4 * r273_MosaicWidthScalar);
                    (function () {
                        var _r561_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Shared-Symbol-Shapes'].resolve();
                        var r561_CreateWaveShape = _r561_t0.CreateWaveShape;
                        var r561_WaveSw = r270_AdviceStroke(5.5 - r273_MosaicWidthScalar);
                        var r561_WaveShape = r561_CreateWaveShape(r276_waveArrowAmplitude * 0.4 + r561_WaveSw / 4 * r273_MosaicWidthScalar, r561_WaveSw);
                        var r561_rightTBias = r273_MosaicWidth / r276_MosaicUnitWidth - 1;
                        var r561_freeCoT = r276_arrowSB / r273_MosaicWidth;
                        var r561_connectedCoT = r276_arrowSB / r273_MosaicWidth + 9 / 32 * r273_MosaicWidthScalar;
                        var r561_mag = r276_arrowRSB - r276_arrowSB;
                        var r561_p = (r561_mag - r276_o - r276_halfArrowSw * 1.1) / r561_mag;
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('waveArrowLeftRight'), r276_MangleUnicode(8621), function () {
                            var _r565_t1;
                            var _r565_t0 = this;
                            var r565_currentGlyph = _r565_t0;
                            r565_currentGlyph.setWidth(r273_MosaicWidth);
                            r565_currentGlyph.include(r561_WaveShape(new r270_xn$NamedParameterPair$2Lrc9b('left', -r561_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('right', r561_rightTBias - r561_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('xsJoin', r1_mix(r276_arrowSB, r276_arrowRSB, 1 - r561_p)), new r270_xn$NamedParameterPair$2Lrc9b('xfJoin', r1_mix(r276_arrowSB, r276_arrowRSB, r561_p)), new r270_xn$NamedParameterPair$2Lrc9b('unitWidth', r276_MosaicUnitWidth), new r270_xn$NamedParameterPair$2Lrc9b('waveCount', 2 / r273_MosaicWidthScalar)));
                            r565_currentGlyph.include(r276_ArrowHead(r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid));
                            r565_currentGlyph.include(r276_ArrowHead(r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('waveArrowLeft'), r276_MangleUnicode(8604), function () {
                            var _r578_t1;
                            var _r578_t0 = this;
                            var r578_currentGlyph = _r578_t0;
                            r578_currentGlyph.setWidth(r273_MosaicWidth);
                            r578_currentGlyph.include(r561_WaveShape(new r270_xn$NamedParameterPair$2Lrc9b('left', -r561_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('right', r561_rightTBias - r561_freeCoT), new r270_xn$NamedParameterPair$2Lrc9b('xsJoin', r1_mix(r276_arrowSB, r276_arrowRSB, 1 - r561_p)), new r270_xn$NamedParameterPair$2Lrc9b('unitWidth', r276_MosaicUnitWidth), new r270_xn$NamedParameterPair$2Lrc9b('waveCount', 2 / r273_MosaicWidthScalar)));
                            r578_currentGlyph.include(r276_ArrowHead(r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('waveArrowRight'), r276_MangleUnicode(8605), function () {
                            var _r589_t1;
                            var _r589_t0 = this;
                            var r589_currentGlyph = _r589_t0;
                            r589_currentGlyph.setWidth(r273_MosaicWidth);
                            r589_currentGlyph.include(r561_WaveShape(new r270_xn$NamedParameterPair$2Lrc9b('left', -r561_freeCoT), new r270_xn$NamedParameterPair$2Lrc9b('right', r561_rightTBias - r561_connectedCoT), new r270_xn$NamedParameterPair$2Lrc9b('xfJoin', r1_mix(r276_arrowSB, r276_arrowRSB, r561_p)), new r270_xn$NamedParameterPair$2Lrc9b('unitWidth', r276_MosaicUnitWidth), new r270_xn$NamedParameterPair$2Lrc9b('waveCount', 2 / r273_MosaicWidthScalar)));
                            r589_currentGlyph.include(r276_ArrowHead(r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid));
                            return void 0;
                        });
                    }());
                    (function () {
                        var _r599_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Shared-Symbol-Shapes'].resolve();
                        var r599_CreateWaveShape = _r599_t0.CreateWaveShape;
                        var r599_WaveSw = r270_AdviceStroke(5.5 - r273_MosaicWidthScalar);
                        var r599_SquiggleArrowBarSide = function (r601_kMag1, r601_kMag2, r601_kL, r601_kR, r601_y0) {
                            var _r601_t2, _r601_t3;
                            var r601_mag = r276_arrowRSB - r276_arrowSB;
                            var r601_p = (r601_mag - r276_o - r276_halfArrowSw * 1.1) / r601_mag;
                            var r601_p2 = 0.75;
                            var r601_p2L = r1_mix(1, r601_p2, r1_mix(1, r601_kL, 1 / 2));
                            var r601_p2R = r1_mix(1, r601_p2, r1_mix(1, r601_kR, 1 / 2));
                            var r601_innerStops = 3 * r273_MosaicWidthScalar;
                            var r601_knots = [];
                            r601_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r1_mix(0, 1 - r601_p, r601_kL)), r601_y0));
                            r601_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, 1 - r601_p2L), r601_y0));
                            var _r601_t0 = 0;
                            var _r601_t1 = r601_innerStops;
                            var r601_j = _r601_t0;
                            while (r601_j < _r601_t1) {
                                r601_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r1_mix(1 - r601_p2L, r601_p2R, (r601_j + 1 / 2) / r601_innerStops)), r601_y0 + r276_waveArrowAmplitude * (r601_j % 2 ? r601_kMag1 : r601_kMag2)));
                                r601_j = r601_j + 1;
                            }
                            r601_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r601_p2R), r601_y0));
                            r601_knots.push(r270_corner(r1_mix(r276_arrowSB, r276_arrowRSB, r1_mix(1, r601_p, r601_kR)), r601_y0));
                            return r601_knots;
                        };
                        var r599_SquiggleArrowBar = function (r603_kL, r603_kR) {
                            var _r603_t0, _r603_t1;
                            return r270_xn$spirooutline$1aao(r599_SquiggleArrowBarSide(0.3, -0.25, r603_kL, r603_kR, r270_SymbolMid + r276_arrowSw / 2), r599_SquiggleArrowBarSide(0.25, -0.3, r603_kL, r603_kR, r270_SymbolMid - r276_arrowSw / 2).reverse());
                        };
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('squiggleArrowLeft'), r276_MangleUnicode(8668), function () {
                            var _r606_t1;
                            var _r606_t0 = this;
                            var r606_currentGlyph = _r606_t0;
                            r606_currentGlyph.setWidth(r273_MosaicWidth);
                            r606_currentGlyph.include(r599_SquiggleArrowBar(1, 0));
                            r606_currentGlyph.include(r276_ArrowHead(r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('squiggleArrowRight'), r276_MangleUnicode(8669), function () {
                            var _r612_t1;
                            var _r612_t0 = this;
                            var r612_currentGlyph = _r612_t0;
                            r612_currentGlyph.setWidth(r273_MosaicWidth);
                            r612_currentGlyph.include(r599_SquiggleArrowBar(0, 1));
                            r612_currentGlyph.include(r276_ArrowHead(r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid));
                            return void 0;
                        });
                    }());
                    (function () {
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E6'), r276_MangleUnicode(8678), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E7'), r276_MangleUnicode(8679), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E8'), r276_MangleUnicode(8680), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni21E9'), r276_MangleUnicode(8681), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B00'), r276_MangleUnicode(11008), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B01'), r276_MangleUnicode(11009), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B02'), r276_MangleUnicode(11010), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ThickArrowShape('white'), r276_MangleName('uni2B03'), r276_MangleUnicode(11011), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_ThickArrowShape('white-open'), r276_MangleName('uni2B04'), r276_MangleUnicode(11012), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_ThickArrowShape('white-open'), r276_MangleName('uni21F3'), r276_MangleUnicode(8691), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B05'), r276_MangleUnicode(11013), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B06'), r276_MangleUnicode(11014), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni27A1'), r276_MangleUnicode(10145), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B95'), r276_MangleUnicode(11157), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B07'), r276_MangleUnicode(11015), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B08'), r276_MangleUnicode(11016), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B09'), r276_MangleUnicode(11017), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0A'), r276_MangleUnicode(11018), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0B'), r276_MangleUnicode(11019), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0C'), r276_MangleUnicode(11020), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_ThickArrowShape('black'), r276_MangleName('uni2B0D'), r276_MangleUnicode(11021), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ThickArrowShape('blackSemiHookL'), r276_MangleName('uni27A5'), r276_MangleUnicode(10149), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_MkArrow(r276_ThickArrowShape('blackSemiHookR'), r276_MangleName('uni27A6'), r276_MangleUnicode(10150), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        var r619_BarbHeavyWideHeaded = r276_BarbArrowShape(0.25, r276_UnicodeWeightGrade(9, r273_MosaicWidthScalar));
                        r276_MkArrow(r619_BarbHeavyWideHeaded, r276_MangleName('uni2794'), r276_MangleUnicode(10132), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        var r619_BarbGroup = function (r620_prefix, r620_b, r620_k, r620_w) {
                            var _r620_t0, _r620_t1;
                            var r620_BarbLight = r276_BarbArrowShape(r620_k, r276_UnicodeWeightGrade(r620_w, r273_MosaicWidthScalar));
                            r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'Left'), r276_MangleUnicode(r620_b + 0), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                            r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'Up'), r276_MangleUnicode(r620_b + 1), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                            r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'Right'), r276_MangleUnicode(r620_b + 2), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                            r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'Down'), r276_MangleUnicode(r620_b + 3), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                            r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'LT'), r276_MangleUnicode(r620_b + 4), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                            r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'RT'), r276_MangleUnicode(r620_b + 5), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                            r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'RB'), r276_MangleUnicode(r620_b + 6), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                            return r276_MkArrow(r620_BarbLight, r276_MangleName('' + r620_prefix + 'LB'), r276_MangleUnicode(r620_b + 7), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        };
                        r619_BarbGroup('barbArrowLight', 129120, 0.375, 3);
                        r619_BarbGroup('barbArrow', 129128, 0.375, 5);
                        r619_BarbGroup('barbArrowMedium', 129136, 0.375, 7);
                        r619_BarbGroup('barbArrowHeavy', 129144, 0.375, 9);
                        return r619_BarbGroup('barbArrowVeryHeavy', 129152, 0.375, 10);
                    }());
                    (function () {
                        var r622_sw = r276_UnicodeWeightGrade(9, r273_MosaicWidthScalar);
                        return r276_MkArrow(r276_RoundArrow.Shape(r622_sw), r276_MangleName('heavyRoundArrowRight'), r276_MangleUnicode(10140), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowLeft'), r276_MangleUnicode(129104), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUp'), r276_MangleUnicode(129105), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowRight'), r276_MangleUnicode(129106), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowDown'), r276_MangleUnicode(129107), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUpLeft'), r276_MangleUnicode(129108), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUpRight'), r276_MangleUnicode(129109), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowDownRight'), r276_MangleUnicode(129110), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowDownLeft'), r276_MangleUnicode(129111), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowLeftRight'), r276_MangleUnicode(129112), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        return r276_DoubleArrow(r276_SsArrowShape, r276_MangleName('sansSerifArrowUpDown'), r276_MangleUnicode(129113), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        var _r626_t0, _r626_t1, _r626_tag2;
                        var r626_dasw = r276_doubleArrowStemWidth;
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowLeft'), r276_MangleUnicode(8656), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowRight'), r276_MangleUnicode(8658), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowUp'), r276_MangleUnicode(8657), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowDown'), r276_MangleUnicode(8659), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowUpLeft'), r276_MangleUnicode(8662), r276_arrowDiagRSB, r276_arrowDiagBot, r276_arrowDiagSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowUpRight'), r276_MangleUnicode(8663), r276_arrowDiagSB, r276_arrowDiagBot, r276_arrowDiagRSB, r276_arrowDiagTop);
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowDownRight'), r276_MangleUnicode(8664), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_MkArrow(r276_DoubleArrowShape(r626_dasw), r276_MangleName('dblArrowDownLeft'), r276_MangleUnicode(8665), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r626_t0 = function () {
                                var r628_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r628_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                r276_MkArrow(r276_DoubleArrowShape(r626_dasw), 'longDblArrowLeft', 10232, r628_r, r270_SymbolMid, r628_l, r270_SymbolMid);
                                return r276_MkArrow(r276_DoubleArrowShape(r626_dasw), 'longDblArrowRight', 10233, r628_l, r270_SymbolMid, r628_r, r270_SymbolMid);
                            }();
                        return _r626_t0;
                    }());
                    (function () {
                        var r630_dasw = r276_doubleArrowStemWidth;
                        r276_MkArrow(r276_TripleArrowShape(r630_dasw), r276_MangleName('tripleArrowLeft'), r276_MangleUnicode(8666), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_TripleArrowShape(r630_dasw), r276_MangleName('tripleArrowRight'), r276_MangleUnicode(8667), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_TripleArrowShape(r630_dasw), r276_MangleName('tripleArrowUp'), r276_MangleUnicode(10506), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        return r276_MkArrow(r276_TripleArrowShape(r630_dasw), r276_MangleName('tripleArrowDown'), r276_MangleUnicode(10507), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        var r632_dasw = r276_doubleArrowStemWidth;
                        r276_MkArrow(r276_QuadrupleArrowShape(r632_dasw), r276_MangleName('quadrupleArrowUp'), r276_MangleUnicode(10224), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_QuadrupleArrowShape(r632_dasw), r276_MangleName('quadrupleArrowDown'), r276_MangleUnicode(10225), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_QuadrupleArrowShape(r632_dasw), r276_MangleName('quadrupleArrowLeft'), r276_MangleUnicode(11077), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        return r276_MkArrow(r276_QuadrupleArrowShape(r632_dasw), r276_MangleName('quadrupleArrowRight'), r276_MangleUnicode(11078), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        var _r634_t0, _r634_t1, _r634_tag2;
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeftK'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRightK'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpK'), null, r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop - r276_fine);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownK'), null, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot + r276_fine);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowLeftSK'), null, r276_arrowRSB - r276_fine / 2, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowRightSK'), null, r276_arrowSB + r276_fine / 2, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpSK'), null, r276_arrowMidX, r276_arrowBot + r276_fine / 2, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowDownSK'), null, r276_arrowMidX, r276_arrowTop - r276_fine / 2, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_ArrowShape, r276_MangleName('arrowUpLeftTK'), null, r276_arrowRSB, r276_arrowBot, r276_arrowSB, r276_arrowTop - Math.max(r276_arrowWidth / 8, r276_fine * 1.5));
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarLeft'), r276_MangleUnicode(8676), function () {
                            var _r637_t1;
                            var _r637_t0 = this;
                            var r637_currentGlyph = _r637_t0;
                            r637_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftK')), true, true);
                            r637_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarRight'), r276_MangleUnicode(8677), function () {
                            var _r642_t1;
                            var _r642_t0 = this;
                            var r642_currentGlyph = _r642_t0;
                            r642_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightK')), true, true);
                            r642_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarUp'), r276_MangleUnicode(10514), function () {
                            var _r647_t1;
                            var _r647_t0 = this;
                            var r647_currentGlyph = _r647_t0;
                            r647_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpK')), true, true);
                            r647_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarDown'), r276_MangleUnicode(10515), function () {
                            var _r652_t1;
                            var _r652_t0 = this;
                            var r652_currentGlyph = _r652_t0;
                            r652_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownK')), true, true);
                            r652_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowLeft'), r276_MangleUnicode(8612), function () {
                            var _r657_t1;
                            var _r657_t0 = this;
                            var r657_currentGlyph = _r657_t0;
                            r657_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftSK')), true, true);
                            r657_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowRight'), r276_MangleUnicode(8614), function () {
                            var _r662_t1;
                            var _r662_t0 = this;
                            var r662_currentGlyph = _r662_t0;
                            r662_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightSK')), true, true);
                            r662_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowUp'), r276_MangleUnicode(8613), function () {
                            var _r667_t1;
                            var _r667_t0 = this;
                            var r667_currentGlyph = _r667_t0;
                            r667_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpSK')), true, true);
                            r667_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowDown'), r276_MangleUnicode(8615), function () {
                            var _r672_t1;
                            var _r672_t0 = this;
                            var r672_currentGlyph = _r672_t0;
                            r672_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownSK')), true, true);
                            r672_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowLeftHRK'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowLeftHLK'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowRightHRK'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowRightHLK'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowUpHRK'), null, r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop - r276_fine);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowUpHLK'), null, r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop - r276_fine);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowDownHRK'), null, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot + r276_fine);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowDownHLK'), null, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot + r276_fine);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowLeftHRSK'), null, r276_arrowRSB - r276_fine / 2, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowLeftHLSK'), null, r276_arrowRSB - r276_fine / 2, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowRightHRSK'), null, r276_arrowSB + r276_fine / 2, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowRightHLSK'), null, r276_arrowSB + r276_fine / 2, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowUpHRSK'), null, r276_arrowMidX, r276_arrowBot + r276_fine / 2, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowUpHLSK'), null, r276_arrowMidX, r276_arrowBot + r276_fine / 2, r276_arrowMidX, r276_arrowTop);
                        r276_MkArrow(r276_HalfArrowShape(r276_RHSHalfArrowHead), r276_MangleName('arrowDownHRSK'), null, r276_arrowMidX, r276_arrowTop - r276_fine / 2, r276_arrowMidX, r276_arrowBot);
                        r276_MkArrow(r276_HalfArrowShape(r276_LHSHalfArrowHead), r276_MangleName('arrowDownHLSK'), null, r276_arrowMidX, r276_arrowTop - r276_fine / 2, r276_arrowMidX, r276_arrowBot);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarLeftHR'), r276_MangleUnicode(10578), function () {
                            var _r677_t1;
                            var _r677_t0 = this;
                            var r677_currentGlyph = _r677_t0;
                            r677_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftHRK')), true, true);
                            r677_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarRightHL'), r276_MangleUnicode(10579), function () {
                            var _r682_t1;
                            var _r682_t0 = this;
                            var r682_currentGlyph = _r682_t0;
                            r682_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightHLK')), true, true);
                            r682_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarUpHR'), r276_MangleUnicode(10580), function () {
                            var _r687_t1;
                            var _r687_t0 = this;
                            var r687_currentGlyph = _r687_t0;
                            r687_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpHRK')), true, true);
                            r687_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarDownHL'), r276_MangleUnicode(10581), function () {
                            var _r692_t1;
                            var _r692_t0 = this;
                            var r692_currentGlyph = _r692_t0;
                            r692_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownHLK')), true, true);
                            r692_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarLeftHL'), r276_MangleUnicode(10582), function () {
                            var _r697_t1;
                            var _r697_t0 = this;
                            var r697_currentGlyph = _r697_t0;
                            r697_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftHLK')), true, true);
                            r697_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarRightHR'), r276_MangleUnicode(10583), function () {
                            var _r702_t1;
                            var _r702_t0 = this;
                            var r702_currentGlyph = _r702_t0;
                            r702_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightHRK')), true, true);
                            r702_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarUpHL'), r276_MangleUnicode(10584), function () {
                            var _r707_t1;
                            var _r707_t0 = this;
                            var r707_currentGlyph = _r707_t0;
                            r707_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpHLK')), true, true);
                            r707_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowBarDownHR'), r276_MangleUnicode(10585), function () {
                            var _r712_t1;
                            var _r712_t0 = this;
                            var r712_currentGlyph = _r712_t0;
                            r712_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownHRK')), true, true);
                            r712_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowLeftHR'), r276_MangleUnicode(10586), function () {
                            var _r717_t1;
                            var _r717_t0 = this;
                            var r717_currentGlyph = _r717_t0;
                            r717_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftHRSK')), true, true);
                            r717_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowRightHL'), r276_MangleUnicode(10587), function () {
                            var _r722_t1;
                            var _r722_t0 = this;
                            var r722_currentGlyph = _r722_t0;
                            r722_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightHLSK')), true, true);
                            r722_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowUpHR'), r276_MangleUnicode(10588), function () {
                            var _r727_t1;
                            var _r727_t0 = this;
                            var r727_currentGlyph = _r727_t0;
                            r727_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpHRSK')), true, true);
                            r727_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowDownHL'), r276_MangleUnicode(10589), function () {
                            var _r732_t1;
                            var _r732_t0 = this;
                            var r732_currentGlyph = _r732_t0;
                            r732_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownHLSK')), true, true);
                            r732_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowLeftHL'), r276_MangleUnicode(10590), function () {
                            var _r737_t1;
                            var _r737_t0 = this;
                            var r737_currentGlyph = _r737_t0;
                            r737_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftHLSK')), true, true);
                            r737_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowRightHR'), r276_MangleUnicode(10591), function () {
                            var _r742_t1;
                            var _r742_t0 = this;
                            var r742_currentGlyph = _r742_t0;
                            r742_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightHRSK')), true, true);
                            r742_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowUpHL'), r276_MangleUnicode(10592), function () {
                            var _r747_t1;
                            var _r747_t0 = this;
                            var r747_currentGlyph = _r747_t0;
                            r747_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpHLSK')), true, true);
                            r747_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barArrowDownHR'), r276_MangleUnicode(10593), function () {
                            var _r752_t1;
                            var _r752_t0 = this;
                            var r752_currentGlyph = _r752_t0;
                            r752_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDownHRSK')), true, true);
                            r752_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowLeftK'), null, r276_arrowRSB, r270_SymbolMid, r276_arrowSB + r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowRightK'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB - r276_fine, r270_SymbolMid);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowUpK'), null, r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop - r276_fine);
                        r276_MkArrow(r276_TrigArrowShape, r276_MangleName('trigArrowDownK'), null, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot + r276_fine);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('trigArrowBarLeft'), r276_MangleUnicode(11120), function () {
                            var _r757_t1;
                            var _r757_t0 = this;
                            var r757_currentGlyph = _r757_t0;
                            r757_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowLeftK')), true, true);
                            r757_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('trigArrowBarUp'), r276_MangleUnicode(11121), function () {
                            var _r762_t1;
                            var _r762_t0 = this;
                            var r762_currentGlyph = _r762_t0;
                            r762_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowUpK')), true, true);
                            r762_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowTop, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('trigArrowBarRight'), r276_MangleUnicode(11122), function () {
                            var _r767_t1;
                            var _r767_t0 = this;
                            var r767_currentGlyph = _r767_t0;
                            r767_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowRightK')), true, true);
                            r767_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('trigArrowBarDown'), r276_MangleUnicode(11123), function () {
                            var _r772_t1;
                            var _r772_t0 = this;
                            var r772_currentGlyph = _r772_t0;
                            r772_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowDownK')), true, true);
                            r772_currentGlyph.include(r276_HBar.m(r276_arrowMidX - r276_arrowHeadSize, r276_arrowMidX + r276_arrowHeadSize, r276_arrowBot, r276_fine));
                            return void 0;
                        });
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r634_t0 = function () {
                                var r776_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r776_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                r276_MkArrow(r276_ArrowShape, 'longArrowLeftSK', null, r776_r - r276_fine / 2, r270_SymbolMid, r776_l, r270_SymbolMid);
                                r276_MkArrow(r276_ArrowShape, 'longArrowRightSK', null, r776_l + r276_fine / 2, r270_SymbolMid, r776_r, r270_SymbolMid);
                                r270_xn$createAndSaveGlyphImpl$2Lrc3c('longBarArrowLeft', 10235, function () {
                                    var _r779_t1;
                                    var _r779_t0 = this;
                                    var r779_currentGlyph = _r779_t0;
                                    r779_currentGlyph.include(r276_xn$referglyph$1aao('longArrowLeftSK'), true, true);
                                    r779_currentGlyph.include(r276_VBar.m(r776_r, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                                    return void 0;
                                });
                                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('longBarArrowRight', 10236, function () {
                                    var _r784_t1;
                                    var _r784_t0 = this;
                                    var r784_currentGlyph = _r784_t0;
                                    r784_currentGlyph.include(r276_xn$referglyph$1aao('longArrowRightSK'), true, true);
                                    r784_currentGlyph.include(r276_VBar.m(r776_l, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                                    return void 0;
                                });
                            }();
                        return _r634_t0;
                    }());
                    (function () {
                        var _r788_t0, _r788_t1, _r788_tag2;
                        var r788_dasw = r276_doubleArrowStemWidth;
                        r276_MkArrow(r276_DoubleArrowShape(r788_dasw), r276_MangleName('dblArrowLeftSK'), null, r276_arrowRSB - r276_fine / 2, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_DoubleArrowShape(r788_dasw), r276_MangleName('dblArrowRightSK'), null, r276_arrowSB + r276_fine / 2, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barDblArrowLeft'), r276_MangleUnicode(10502), function () {
                            var _r791_t1;
                            var _r791_t0 = this;
                            var r791_currentGlyph = _r791_t0;
                            r791_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowLeftSK')), true, true);
                            r791_currentGlyph.include(r276_VBar.m(r276_arrowRSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('barDblArrowRight'), r276_MangleUnicode(10503), function () {
                            var _r796_t1;
                            var _r796_t0 = this;
                            var r796_currentGlyph = _r796_t0;
                            r796_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowRightSK')), true, true);
                            r796_currentGlyph.include(r276_VBar.m(r276_arrowSB, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                            return void 0;
                        });
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r788_t0 = function () {
                                var r800_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r800_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                r276_MkArrow(r276_DoubleArrowShape(r788_dasw), 'longDblArrowLeftSK', null, r800_r - r276_fine / 2, r270_SymbolMid, r800_l, r270_SymbolMid);
                                r276_MkArrow(r276_DoubleArrowShape(r788_dasw), 'longDblArrowRightSK', null, r800_l + r276_fine / 2, r270_SymbolMid, r800_r, r270_SymbolMid);
                                r270_xn$createAndSaveGlyphImpl$2Lrc3c('longBarDblArrowLeft', 10237, function () {
                                    var _r803_t1;
                                    var _r803_t0 = this;
                                    var r803_currentGlyph = _r803_t0;
                                    r803_currentGlyph.include(r276_xn$referglyph$1aao('longDblArrowLeftSK'), true, true);
                                    r803_currentGlyph.include(r276_VBar.m(r800_r, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                                    return void 0;
                                });
                                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('longBarDblArrowRight', 10238, function () {
                                    var _r808_t1;
                                    var _r808_t0 = this;
                                    var r808_currentGlyph = _r808_t0;
                                    r808_currentGlyph.include(r276_xn$referglyph$1aao('longDblArrowRightSK'), true, true);
                                    r808_currentGlyph.include(r276_VBar.m(r800_l, r270_SymbolMid - r276_arrowHeadSize, r270_SymbolMid + r276_arrowHeadSize, r276_fine));
                                    return void 0;
                                });
                            }();
                        return _r788_t0;
                    }());
                    (function () {
                        var _r812_t0, _r812_t1, _r812_tag2;
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowLeftRight'), r276_MangleUnicode(8596), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_ThinArrowShape, r276_MangleName('thinArrowLeftRight'), null, r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpDown'), r276_MangleUnicode(8597), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpDown.bottomSpaceLeft'), void 0, r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot + r276_arrowSw * 1.5);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpLeftAndDownRight'), r276_MangleUnicode(10529), r276_arrowDiagSB, r276_arrowDiagTop, r276_arrowDiagRSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_ArrowShape, r276_MangleName('arrowUpRightAndDownLeft'), r276_MangleUnicode(10530), r276_arrowDiagRSB, r276_arrowDiagTop, r276_arrowDiagSB, r276_arrowDiagBot);
                        r276_DoubleArrow(r276_TrigArrowShape, r276_MangleName('trigArrowLeftRight'), r276_MangleUnicode(11108), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_TrigArrowShape, r276_MangleName('trigArrowUpDown'), r276_MangleUnicode(11109), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        r276_DoubleArrow(r276_OpenArrowShape, r276_MangleName('openHeadArrowLeftRight'), r276_MangleUnicode(8703), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowUpDownBar'), r276_MangleUnicode(8616), function () {
                            var _r815_t1;
                            var _r815_t0 = this;
                            var r815_currentGlyph = _r815_t0;
                            r815_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUpDown.bottomSpaceLeft')), true, true);
                            r815_currentGlyph.include(r276_HBar.b(r276_arrowSB, r276_arrowRSB, r276_arrowBot, r276_arrowSw));
                            return void 0;
                        });
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r812_t0 = function () {
                                var r819_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r819_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                return r276_DoubleArrow(r276_ArrowShape, 'longArrowLeftRight', 10231, r819_l, r270_SymbolMid, r819_r, r270_SymbolMid);
                            }();
                        return _r812_t0;
                    }());
                    (function () {
                        var _r821_t0, _r821_t1, _r821_tag2;
                        var r821_dasw = r276_doubleArrowStemWidth;
                        r276_DoubleArrow(r276_DoubleArrowShape(r821_dasw), r276_MangleName('dblArrowLeftRight'), r276_MangleUnicode(8660), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_DoubleArrow(r276_DoubleArrowShape(r821_dasw), r276_MangleName('dblArrowUpDown'), r276_MangleUnicode(8661), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                        if (r273_MosaicWidthScalar > 1 && !r270_para.forceMonospace)
                            _r821_t0 = function () {
                                var r823_l = r1_mix(0, r276_arrowSB, r276_kLongArrowSB);
                                var r823_r = r1_mix(r273_MosaicWidth, r276_arrowRSB, r276_kLongArrowSB);
                                return r276_DoubleArrow(r276_DoubleArrowShape(r821_dasw), 'longDblArrowLeftRight', 10234, r823_l, r270_SymbolMid, r823_r, r270_SymbolMid);
                            }();
                        return _r821_t0;
                    }());
                    (function () {
                        r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowLeft'), r276_MangleUnicode(8606), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowRight'), r276_MangleUnicode(8608), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                        r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowUp'), r276_MangleUnicode(8607), r276_arrowMidX, r276_arrowBot, r276_arrowMidX, r276_arrowTop);
                        return r276_MkArrow(r276_dhArrowShape, r276_MangleName('dhArrowDown'), r276_MangleUnicode(8609), r276_arrowMidX, r276_arrowTop, r276_arrowMidX, r276_arrowBot);
                    }());
                    (function () {
                        r276_MkArrow(r276_htArrowShape, r276_MangleName('htArrowLeft'), r276_MangleUnicode(8610), r276_arrowRSB, r270_SymbolMid, r276_arrowSB, r270_SymbolMid);
                        return r276_MkArrow(r276_htArrowShape, r276_MangleName('htArrowRight'), r276_MangleUnicode(8611), r276_arrowSB, r270_SymbolMid, r276_arrowRSB, r270_SymbolMid);
                    }());
                    (function () {
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni219A'), r276_MangleUnicode(8602), function () {
                            var _r832_t1;
                            var _r832_t0 = this;
                            var r832_currentGlyph = _r832_t0;
                            r832_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeft')), true, true);
                            r832_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni219B'), r276_MangleUnicode(8603), function () {
                            var _r837_t1;
                            var _r837_t0 = this;
                            var r837_currentGlyph = _r837_t0;
                            r837_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRight')), true, true);
                            r837_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21AE'), r276_MangleUnicode(8622), function () {
                            var _r842_t1;
                            var _r842_t0 = this;
                            var r842_currentGlyph = _r842_t0;
                            r842_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftRight')), true, true);
                            r842_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F7'), r276_MangleUnicode(8695), function () {
                            var _r847_t1;
                            var _r847_t0 = this;
                            var r847_currentGlyph = _r847_t0;
                            r847_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeft')), true, true);
                            r847_currentGlyph.include(r276_xn$referglyph$1aao('arrVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F8'), r276_MangleUnicode(8696), function () {
                            var _r852_t1;
                            var _r852_t0 = this;
                            var r852_currentGlyph = _r852_t0;
                            r852_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRight')), true, true);
                            r852_currentGlyph.include(r276_xn$referglyph$1aao('arrVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F9'), r276_MangleUnicode(8697), function () {
                            var _r857_t1;
                            var _r857_t0 = this;
                            var r857_currentGlyph = _r857_t0;
                            r857_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftRight')), true, true);
                            r857_currentGlyph.include(r276_xn$referglyph$1aao('arrVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21FA'), r276_MangleUnicode(8698), function () {
                            var _r862_t1;
                            var _r862_t0 = this;
                            var r862_currentGlyph = _r862_t0;
                            r862_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeft')), true, true);
                            r862_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21FB'), r276_MangleUnicode(8699), function () {
                            var _r867_t1;
                            var _r867_t0 = this;
                            var r867_currentGlyph = _r867_t0;
                            r867_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRight')), true, true);
                            r867_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21FC'), r276_MangleUnicode(8700), function () {
                            var _r872_t1;
                            var _r872_t0 = this;
                            var r872_currentGlyph = _r872_t0;
                            r872_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftRight')), true, true);
                            r872_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21CD'), r276_MangleUnicode(8653), function () {
                            var _r877_t1;
                            var _r877_t0 = this;
                            var r877_currentGlyph = _r877_t0;
                            r877_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowLeft')), true, true);
                            r877_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21CE'), r276_MangleUnicode(8654), function () {
                            var _r882_t1;
                            var _r882_t0 = this;
                            var r882_currentGlyph = _r882_t0;
                            r882_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowLeftRight')), true, true);
                            r882_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21CF'), r276_MangleUnicode(8655), function () {
                            var _r887_t1;
                            var _r887_t0 = this;
                            var r887_currentGlyph = _r887_t0;
                            r887_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('dblArrowRight')), true, true);
                            r887_currentGlyph.include(r276_xn$referglyph$1aao('arrSlashOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2908'), r276_MangleUnicode(10504), function () {
                            var _r892_t1;
                            var _r892_t0 = this;
                            var r892_currentGlyph = _r892_t0;
                            r892_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDown')), true, true);
                            r892_currentGlyph.include(r276_xn$referglyph$1aao('arrHStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2909'), r276_MangleUnicode(10505), function () {
                            var _r897_t1;
                            var _r897_t0 = this;
                            var r897_currentGlyph = _r897_t0;
                            r897_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUp')), true, true);
                            r897_currentGlyph.include(r276_xn$referglyph$1aao('arrHStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21DF'), r276_MangleUnicode(8671), function () {
                            var _r902_t1;
                            var _r902_t0 = this;
                            var r902_currentGlyph = _r902_t0;
                            r902_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowDown')), true, true);
                            r902_currentGlyph.include(r276_xn$referglyph$1aao('arrDblHStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21DE'), r276_MangleUnicode(8670), function () {
                            var _r907_t1;
                            var _r907_t0 = this;
                            var r907_currentGlyph = _r907_t0;
                            r907_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowUp')), true, true);
                            r907_currentGlyph.include(r276_xn$referglyph$1aao('arrDblHStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2B7A'), r276_MangleUnicode(11130), function () {
                            var _r912_t1;
                            var _r912_t0 = this;
                            var r912_currentGlyph = _r912_t0;
                            r912_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowLeft')), true, true);
                            r912_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2B7B'), r276_MangleUnicode(11131), function () {
                            var _r917_t1;
                            var _r917_t0 = this;
                            var r917_currentGlyph = _r917_t0;
                            r917_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowUp')), true, true);
                            r917_currentGlyph.include(r276_xn$referglyph$1aao('arrDblHStrokeOver'));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2B7C'), r276_MangleUnicode(11132), function () {
                            var _r922_t1;
                            var _r922_t0 = this;
                            var r922_currentGlyph = _r922_t0;
                            r922_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowRight')), true, true);
                            r922_currentGlyph.include(r276_xn$referglyph$1aao('arrDblVStrokeOver'));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2B7D'), r276_MangleUnicode(11133), function () {
                            var _r927_t1;
                            var _r927_t0 = this;
                            var r927_currentGlyph = _r927_t0;
                            r927_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('trigArrowDown')), true, true);
                            r927_currentGlyph.include(r276_xn$referglyph$1aao('arrDblHStrokeOver'));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r931_RingOverlayShape = function (r932_base, r932_baseThin, r932_overlay, r932_overlayMask) {
                            var _r932_t0, _r932_t1;
                            return function () {
                                var _r934_t1;
                                var _r934_t0 = this;
                                var r934_currentGlyph = _r934_t0;
                                r934_currentGlyph.include(r276_xn$withtransform$5sIl(r270_Translate(0, 0), function () {
                                    var _r937_t1;
                                    var _r937_t0 = this;
                                    var r937_currentGlyph = _r937_t0;
                                    r937_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName(r932_base)), true, true);
                                    r937_currentGlyph.include(r276_xn$cleargeometry$1aao());
                                    r937_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName(r932_overlay)));
                                    return void 0;
                                }), true, true);
                                r934_currentGlyph.include(r270_difference(r276_xn$referglyph$1aao(r276_MangleName(r932_base)), r276_xn$withtransform$5sIl(r270_Translate(0, 0), function () {
                                    var _r943_t1;
                                    var _r943_t0 = this;
                                    var r943_currentGlyph = _r943_t0;
                                    r943_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName(r932_base)), true, true);
                                    r943_currentGlyph.include(r276_xn$cleargeometry$1aao());
                                    r943_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName(r932_overlayMask)));
                                    return void 0;
                                })));
                                r934_currentGlyph.include(r270_intersection(r276_xn$referglyph$1aao(r276_MangleName(r932_baseThin)), r276_xn$withtransform$5sIl(r270_Translate(0, 0), function () {
                                    var _r949_t1;
                                    var _r949_t0 = this;
                                    var r949_currentGlyph = _r949_t0;
                                    r949_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName(r932_base)), true, true);
                                    r949_currentGlyph.include(r276_xn$cleargeometry$1aao());
                                    r949_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName(r932_overlayMask)));
                                    return void 0;
                                })));
                                return void 0;
                            };
                        };
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F4'), r276_MangleUnicode(8692), r931_RingOverlayShape('arrowRight', 'thinArrowRight', 'arrRingOverLR', 'arrRingOverLRMask'));
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2B30'), r276_MangleUnicode(11056), r931_RingOverlayShape('arrowLeft', 'thinArrowLeft', 'arrRingOverLR', 'arrRingOverLRMask'));
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2948'), r276_MangleUnicode(10568), r931_RingOverlayShape('arrowLeftRight', 'thinArrowLeftRight', 'arrRingOverLR', 'arrRingOverLRMask'));
                    }());
                    (function () {
                        var r957_hcDist = Math.max(r276_halfArrowSw * 5, r276_arrowWidth / 2);
                        r276_VCombine(r276_MangleName('uni21C4'), r276_MangleUnicode(8644), r276_MangleName('arrowRight'), r276_MangleName('arrowLeft'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni21C5'), r276_MangleUnicode(8645), r276_MangleName('arrowUp'), r276_MangleName('arrowDown'), r957_hcDist);
                        r276_VCombine(r276_MangleName('uni21C6'), r276_MangleUnicode(8646), r276_MangleName('arrowLeft'), r276_MangleName('arrowRight'), r276_arrowHeadSize * 1.75);
                        r276_VCombine(r276_MangleName('uni21C7'), r276_MangleUnicode(8647), r276_MangleName('arrowLeft'), r276_MangleName('arrowLeft'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni21C8'), r276_MangleUnicode(8648), r276_MangleName('arrowUp'), r276_MangleName('arrowUp'), r957_hcDist);
                        r276_VCombine(r276_MangleName('uni21C9'), r276_MangleUnicode(8649), r276_MangleName('arrowRight'), r276_MangleName('arrowRight'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni21CA'), r276_MangleUnicode(8650), r276_MangleName('arrowDown'), r276_MangleName('arrowDown'), r957_hcDist);
                        r276_HCombine(r276_MangleName('uni21F5'), r276_MangleUnicode(8693), r276_MangleName('arrowDown'), r276_MangleName('arrowUp'), r957_hcDist);
                        r276_VCombine(r276_MangleName('uni21CB'), r276_MangleUnicode(8651), r276_MangleName('arrowLeftHR'), r276_MangleName('arrowRightHR'), r276_arrowHeadSize);
                        r276_VCombine(r276_MangleName('uni21CC'), r276_MangleUnicode(8652), r276_MangleName('arrowRightHL'), r276_MangleName('arrowLeftHL'), r276_arrowHeadSize);
                        r276_VCombine(r276_MangleName('uni21B9'), r276_MangleUnicode(8633), r276_MangleName('arrowBarLeft'), r276_MangleName('arrowBarRight'), r276_arrowHeadSize * 1.75);
                        r276_VCombine(r276_MangleName('uni2B80'), r276_MangleUnicode(11136), r276_MangleName('trigArrowLeft'), r276_MangleName('trigArrowRight'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni2B81'), r276_MangleUnicode(11137), r276_MangleName('trigArrowUp'), r276_MangleName('trigArrowDown'), r957_hcDist);
                        r276_VCombine(r276_MangleName('uni2B82'), r276_MangleUnicode(11138), r276_MangleName('trigArrowRight'), r276_MangleName('trigArrowLeft'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni2B83'), r276_MangleUnicode(11139), r276_MangleName('trigArrowDown'), r276_MangleName('trigArrowUp'), r957_hcDist);
                        r276_VCombine(r276_MangleName('uni2B84'), r276_MangleUnicode(11140), r276_MangleName('trigArrowLeft'), r276_MangleName('trigArrowLeft'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni2B85'), r276_MangleUnicode(11141), r276_MangleName('trigArrowUp'), r276_MangleName('trigArrowUp'), r957_hcDist);
                        r276_VCombine(r276_MangleName('uni2B86'), r276_MangleUnicode(11142), r276_MangleName('trigArrowRight'), r276_MangleName('trigArrowRight'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni2B87'), r276_MangleUnicode(11143), r276_MangleName('trigArrowDown'), r276_MangleName('trigArrowDown'), r957_hcDist);
                        r276_VCombine(r276_MangleName('uni2B7E'), r276_MangleUnicode(11134), r276_MangleName('trigArrowBarLeft'), r276_MangleName('trigArrowBarRight'), r276_arrowHeadSize * 1.75);
                        r276_HCombine(r276_MangleName('uni2B7F'), r276_MangleUnicode(11135), r276_MangleName('trigArrowBarDown'), r276_MangleName('trigArrowBarUp'), r957_hcDist);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F6'), r276_MangleUnicode(8694), function () {
                            var _r960_t1;
                            var _r960_t0 = this;
                            var r960_currentGlyph = _r960_t0;
                            r960_currentGlyph.setWidth(r273_MosaicWidth);
                            var r960_distance = r276_bendArrowHeadSize * 2 - r276_arrowSw;
                            r960_currentGlyph.include(r276_xn$withtransform$5sIl(r270_ApparentTranslate(0, +r960_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowRightCompact'))));
                            r960_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowRightCompact')));
                            r960_currentGlyph.include(r276_xn$withtransform$5sIl(r270_ApparentTranslate(0, -r960_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowRightCompact'))));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni2B31'), r276_MangleUnicode(11057), function () {
                            var _r967_t1;
                            var _r967_t0 = this;
                            var r967_currentGlyph = _r967_t0;
                            r967_currentGlyph.setWidth(r273_MosaicWidth);
                            var r967_distance = r276_bendArrowHeadSize * 2 - r276_arrowSw;
                            r967_currentGlyph.include(r276_xn$withtransform$5sIl(r270_ApparentTranslate(0, +r967_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowLeftCompact'))));
                            r967_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('arrowLeftCompact')));
                            r967_currentGlyph.include(r276_xn$withtransform$5sIl(r270_ApparentTranslate(0, -r967_distance), r276_xn$referglyph$1aao(r276_MangleName('arrowLeftCompact'))));
                            return void 0;
                        });
                    }());
                    (function () {
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('zigZagArrow'), r276_MangleUnicode(8623), function () {
                            var _r976_t1;
                            var _r976_t0 = this;
                            var r976_currentGlyph = _r976_t0;
                            r976_currentGlyph.setWidth(r273_MosaicWidth);
                            var r976_x2 = r1_mix(r276_arrowMidX, r276_arrowSB, 0.875 / Math.sqrt(r273_MosaicWidthScalar));
                            var r976_x3 = r1_mix(r276_arrowMidX, r276_arrowRSB, 0.875 / Math.sqrt(r273_MosaicWidthScalar));
                            var r976_x1 = r1_mix(r976_x2, r976_x3, 1 / 3);
                            var r976_x4 = r1_mix(r976_x2, r976_x3, 2 / 3);
                            var r976_y2 = r1_mix(r276_arrowBot, r276_arrowTop, 0.375);
                            var r976_y3 = r1_mix(r276_arrowBot, r276_arrowTop, 0.625);
                            var r976_magLastSeg = Math.hypot(r976_x3 - r976_x4, r976_y3 - r276_arrowBot);
                            var r976_x3ArrowHeadMock = r976_x3 - (r976_x3 - r976_x4) / r976_magLastSeg * r270_HSwToV(r276_arrowSw);
                            var r976_pLastSeg = (r976_magLastSeg - r276_o - 0.55 * r276_arrowSw) / r976_magLastSeg;
                            r976_currentGlyph.include(r270_union(r276_ArrowHead(r976_x3ArrowHeadMock, r976_y3, r976_x4, r276_arrowBot, r276_arrowHeadSize), r270_difference(r270_dispiro(r270_flat(r1_mix(r976_x3, r976_x4, r976_pLastSeg), r1_mix(r976_y3, r276_arrowBot, r976_pLastSeg), r270_widths.center(r276_arrowSw)), r270_curl(r976_x3, r976_y3, r270_widths.lhs(r276_arrowSw))), r276_MaskAboveLine(r976_x2, r976_y2, r976_x3, r976_y3)), r270_difference(r270_dispiro(r270_flat(r976_x3, r976_y3, r270_widths.lhs(r276_arrowSw)), r270_curl(r976_x2, r976_y2, r270_widths.rhs(r276_arrowSw))), r276_MaskRightLine(r976_x3, r976_y3, r976_x4, r276_arrowBot), r276_MaskLeftLine(r976_x2, r976_y2, r976_x1, r276_arrowTop)), r270_difference(r270_dispiro(r270_flat(r976_x2, r976_y2, r270_widths.rhs(r276_arrowSw)), r270_curl(r976_x1, r276_arrowTop, r270_widths.center(r276_arrowSw))), r276_MaskBelowLine(r976_x2, r976_y2, r976_x3, r976_y3))));
                            return void 0;
                        });
                    }());
                    (function () {
                        var r980_bodyWidth = Math.min(r276_arrowWidth, r276_arrowHeight * 0.6);
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowUpThenNW'), r276_MangleUnicode(129200), function () {
                            var _r983_t1;
                            var _r983_t0 = this;
                            var r983_currentGlyph = _r983_t0;
                            r983_currentGlyph.setWidth(r273_MosaicWidth);
                            var r983_x1 = r276_arrowMidX + r980_bodyWidth / 2;
                            var r983_y1 = r276_arrowTop - r980_bodyWidth;
                            var r983_x2 = r276_arrowMidX - r980_bodyWidth / 2;
                            var r983_y2 = r276_arrowTop + 0;
                            r983_currentGlyph.include(r276_ArrowHead(r983_x1, r983_y1, r983_x2, r983_y2));
                            r983_currentGlyph.include(r270_intersection(r276_Rect(r276_arrowTop, r276_arrowBot, 0, r983_x1), r276_ArrowBar(r983_x1, r983_y1, r983_x2, r983_y2, r276_halfArrowSw)));
                            r983_currentGlyph.include(r270_intersection(r276_VBar.r(r983_x1, r276_arrowBot, r276_arrowTop, r276_arrowSw), r270_xn$spirooutline$1aao(r270_corner(r983_x1, r983_y1), r270_corner(r983_x2, r983_y2), r270_corner(r983_x2, r276_arrowBot), r270_corner(r983_x1, r276_arrowBot))));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('arrowRightThenCurlbSW'), r276_MangleUnicode(129201), function () {
                            var _r990_t1;
                            var _r990_t0 = this;
                            var r990_currentGlyph = _r990_t0;
                            r990_currentGlyph.setWidth(r273_MosaicWidth);
                            var r990_x1 = r276_arrowMidX + r980_bodyWidth / 2;
                            var r990_y1 = r276_arrowBot + r980_bodyWidth;
                            var r990_x2 = r276_arrowMidX - r980_bodyWidth / 2;
                            var r990_y2 = r276_arrowBot + 0;
                            r990_currentGlyph.include(r276_ArrowHead(r990_x1, r990_y1, r990_x2, r990_y2));
                            r990_currentGlyph.include(r270_intersection(r276_Rect(r1_mix(r990_y1, r990_y2, 1 / 2), r276_arrowBot, 0, r990_x1), r276_ArrowBar(r990_x1, r990_y1, r990_x2, r990_y2, r276_halfArrowSw)));
                            r990_currentGlyph.include(r270_intersection(r276_Rect(r1_mix(r990_y1, r990_y2, 1), r276_arrowTop, r990_x2, r990_x1), r270_dispiro(r270_widths(r276_halfArrowSw, r276_halfArrowSw), r270_flat(r990_x2, r990_y2), r270_curl(r1_mix(r990_x2, r990_x1, 2 / 3), r1_mix(r990_y2, r990_y1, 2 / 3)), r270_g4.up.mid(r990_x1 - r270_HSwToV(r276_halfArrowSw), r1_mix(r990_y2, r276_arrowTop - r276_halfArrowSw, 0.75) - r276_halfArrowSw * 0.6), r270_arcvh(), r270_flat(r1_mix(r990_x2, r990_x1 - r270_HSwToV(r276_halfArrowSw), 0.5), r276_arrowTop - r276_halfArrowSw), r270_curl(r990_x2, r276_arrowTop - r276_halfArrowSw, r270_heading(r270_Leftward)))));
                            return void 0;
                        });
                        var r980_enclosedSize = r980_bodyWidth * 1.2 + r276_arrowSw;
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21B8'), r276_MangleUnicode(8632), function () {
                            var _r997_t1;
                            var _r997_t0 = this;
                            var r997_currentGlyph = _r997_t0;
                            r997_currentGlyph.setWidth(r273_MosaicWidth);
                            var r997_x1 = r276_arrowMidX + r980_bodyWidth / 2;
                            var r997_x2 = r276_arrowMidX - r980_bodyWidth / 2;
                            r997_currentGlyph.include(r276_HBar.t(r997_x2, r997_x1, r270_SymbolMid + r980_enclosedSize / 2, r276_arrowSw));
                            r997_currentGlyph.include(r276_xn$withtransform$5sIl(r270_ApparentTranslate(0, (r980_bodyWidth - r980_enclosedSize) / 2), r276_ArrowShape(r997_x1, r270_SymbolMid - r980_bodyWidth / 2, r997_x2, r270_SymbolMid + r980_bodyWidth / 2)));
                            return void 0;
                        });
                        r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F1'), r276_MangleUnicode(8689), function () {
                            var _r1003_t1;
                            var _r1003_t0 = this;
                            var r1003_currentGlyph = _r1003_t0;
                            r1003_currentGlyph.setWidth(r273_MosaicWidth);
                            var r1003_x1 = r276_arrowMidX + r980_bodyWidth / 2;
                            var r1003_x2 = r276_arrowMidX - r980_bodyWidth / 2;
                            var r1003_y1 = r270_SymbolMid - r980_bodyWidth / 2;
                            var r1003_y2 = r270_SymbolMid + r980_bodyWidth / 2;
                            r1003_currentGlyph.include(r276_xn$withtransform$5sIl(r270_ApparentTranslate((r980_enclosedSize - r980_bodyWidth) / 2, (r980_bodyWidth - r980_enclosedSize) / 2), r276_ArrowShape(r1003_x1, r1003_y1, r1003_x2, r1003_y2)));
                            r1003_currentGlyph.include(r276_HBar.t(r276_arrowMidX - r980_enclosedSize / 2, r276_arrowMidX + r980_enclosedSize / 2, r270_SymbolMid + r980_enclosedSize / 2, r276_arrowSw));
                            r1003_currentGlyph.include(r276_VBar.l(r276_arrowMidX - r980_enclosedSize / 2, r270_SymbolMid - r980_enclosedSize / 2, r270_SymbolMid + r980_enclosedSize / 2, r276_arrowSw));
                            return void 0;
                        });
                        return r270_xn$createAndSaveGlyphImpl$2Lrc3c(r276_MangleName('uni21F2'), r276_MangleUnicode(8690), function () {
                            var _r1010_t1;
                            var _r1010_t0 = this;
                            var r1010_currentGlyph = _r1010_t0;
                            r1010_currentGlyph.include(r276_xn$referglyph$1aao(r276_MangleName('uni21F1')), r270_AS_BASE, r270_ALSO_METRICS);
                            r1010_currentGlyph.include(r276_FlipAround(r276_arrowMidX, r270_SymbolMid));
                            return void 0;
                        });
                    }());
                    return r273_MosaicWidthScalar === 1 ? r270_xn$ExportCapture$2Lrc4b(function () {
                        var _r1014_t0, _r1014_t1;
                        return { 'ArrowShape': r276_ArrowShape };
                    }) : void 0;
                }());
                _r273_t5 = _r273_t2 = _r273_t2 + 1;
                _r273_t4 = _r273_t2 < _r273_t1;
            }
            return _r273_t5;
        }();
    });
    return void 0;
});
