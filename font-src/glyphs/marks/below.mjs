'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
import * as _s0_t3 from '../../support/gr.mjs';
import * as _s0_t4 from '../../support/geometry/box.mjs';
var _s0_t5;
export {
    _s0_t5 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var _r1_t11 = _s0_t3;
var r1_ScheduleLeaningMark = _r1_t11.ScheduleLeaningMark;
var _r1_t12 = _s0_t4;
var r1_Box = _r1_t12.Box;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r269_block, _r269_t4, _r269_t6;
    var _r269_t3 = this;
    var _r269_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r269_t1 = _r269_t0.length;
    var _r269_t2 = 0;
    var _r269_t5 = _r269_t2 < _r269_t1;
    while (_r269_t5) {
        _r269_t6 = (r269_block = _r269_t0[_r269_t2], r269_block(_r269_t3), _r269_t2 = _r269_t2 + 1);
        _r269_t5 = _r269_t2 < _r269_t1;
    }
    return _r269_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r273_xn$Capture_Ext$2Lrc2b) {
    var _r273_t0, _r273_t1;
    r273_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r273_xn$Capture_Ext$2Lrc2b, 'Mark-Below', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var _r274_t8, _r274_t9, _r274_t10, _r274_tag11;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$Exec$2Lrc5 = _r274_t0['$Exec$'];
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var r274_Width = _r274_t1.Width;
        var r274_SB = _r274_t1.SB;
        var r274_XH = _r274_t1.XH;
        var r274_Translate = _r274_t1.Translate;
        var r274_HVContrast = _r274_t1.HVContrast;
        var r274_Rightward = _r274_t1.Rightward;
        var r274_Leftward = _r274_t1.Leftward;
        var r274_O = _r274_t1.O;
        var r274_OX = _r274_t1.OX;
        var r274_Stroke = _r274_t1.Stroke;
        var r274_AccentStackOffset = _r274_t1.AccentStackOffset;
        var r274_AccentClearance = _r274_t1.AccentClearance;
        var r274_AccentHeight = _r274_t1.AccentHeight;
        var r274_RightSB = _r274_t1.RightSB;
        var r274_AdviceStroke = _r274_t1.AdviceStroke;
        var r274_AdviceStroke2 = _r274_t1.AdviceStroke2;
        var r274_HSwToV = _r274_t1.HSwToV;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var r274_g4 = _r274_t2.g4;
        var r274_flat = _r274_t2.flat;
        var r274_curl = _r274_t2.curl;
        var r274_widths = _r274_t2.widths;
        var r274_heading = _r274_t2.heading;
        var r274_archv = _r274_t2.archv;
        var r274_arcvh = _r274_t2.arcvh;
        var r274_dispiro = _r274_t2.dispiro;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        var r274_union = _r274_t3.union;
        var _r274_t4 = r274_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r274_HBar = _r274_t4.HBar;
        var r274_VBar = _r274_t4.VBar;
        var r274_FlipAround = _r274_t4.FlipAround;
        var r274_xn$withtransform$5sIl = _r274_t4['with-transform'];
        var _r274_t5 = r274_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r274_xn$referglyph$1aao = _r274_t5['refer-glyph'];
        var r274_xn$queryglyph$1aao = _r274_t5['query-glyph'];
        var r274_xn$deriveglyphs$7Hrq = _r274_t5['derive-glyphs'];
        var _r274_t6 = r274_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r274_markExtend = _r274_t6.markExtend;
        var r274_markStroke = _r274_t6.markStroke;
        var r274_markStress = _r274_t6.markStress;
        var r274_markFine = _r274_t6.markFine;
        var _r274_t7 = r274_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r274_markMiddle = _r274_t7.markMiddle;
        var r274_markDotsRadius = _r274_t7.markDotsRadius;
        r274_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return {
                'belowMarkBot': r274_belowMarkBot,
                'belowMarkTop': r274_belowMarkTop,
                'belowMarkMid': r274_belowMarkMid,
                'belowMarkStack': r274_belowMarkStack
            };
        });
        var r274_belowMarkBot = 0 - r274_AccentClearance - r274_AccentHeight;
        var r274_belowMarkTop = 0 - r274_AccentClearance;
        var r274_belowMarkMid = r1_mix(r274_belowMarkBot, r274_belowMarkTop, 0.5);
        var r274_belowMarkStack = 0 - r274_AccentStackOffset;
        var r274_StdAnchors = function () {
            var r283_impl, r283_narrow, r283_mediumNarrow, r283_medium, r283_mediumWide, r283_wide;
            var r283_exports = {};
            r283_exports.impl = r283_impl = function (r291_padding, r291_k, r291_fLeaning) {
                var _r291_t0, _r291_t1;
                return function () {
                    var _r293_t1;
                    var _r293_t0 = this;
                    var r293_currentGlyph = _r293_t0;
                    r293_currentGlyph.setMarkAnchor('below', r274_markMiddle, 0 + r291_padding * r274_AccentHeight, r274_markMiddle, r274_belowMarkStack - r291_padding * r274_AccentHeight);
                    r293_currentGlyph.setBaseAnchor('belowBraceL', r274_markMiddle - r291_k * r274_markExtend, r274_belowMarkMid);
                    r293_currentGlyph.setBaseAnchor('belowBraceR', r274_markMiddle + r291_k * r274_markExtend, r274_belowMarkMid);
                    if (r291_fLeaning)
                        r1_ScheduleLeaningMark.set(r293_currentGlyph);
                    return void 0;
                };
            };
            r283_exports.narrow = r283_narrow = function () {
                var _r298_t0, _r298_t1;
                return r283_impl(0, 0, true);
            };
            r283_exports.mediumNarrow = r283_mediumNarrow = function () {
                var _r300_t0, _r300_t1;
                return r283_impl(0, 0.25, true);
            };
            r283_exports.medium = r283_medium = function () {
                var _r302_t0, _r302_t1;
                return r283_impl(0, 0.5, true);
            };
            r283_exports.mediumWide = r283_mediumWide = function () {
                var _r304_t0, _r304_t1;
                return r283_impl(0, 0.75);
            };
            r283_exports.wide = r283_wide = function () {
                var _r306_t0, _r306_t1;
                return r283_impl(0, 1);
            };
            return r283_exports;
        }();
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('blankBelow', null, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            r309_currentGlyph.setWidth(0);
            r309_currentGlyph.include(r274_StdAnchors.narrow());
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('blankLeaningBelow', null, function () {
            var _r314_t1;
            var _r314_t0 = this;
            var r314_currentGlyph = _r314_t0;
            r314_currentGlyph.setWidth(0);
            r314_currentGlyph.setMarkAnchor('leaningBelow', r274_markMiddle, 0, r274_markMiddle, r274_belowMarkStack);
            r314_currentGlyph.setBaseAnchor('belowBraceL', r274_markMiddle - 0.5 * r274_markExtend, r274_belowMarkMid);
            r314_currentGlyph.setBaseAnchor('belowBraceR', r274_markMiddle + 0.5 * r274_markExtend, r274_belowMarkMid);
            return void 0;
        });
        var r274_CedillaShape = function (r319_ext) {
            var _r319_t0, _r319_t1;
            var r319_fine = Math.min(r274_AdviceStroke(6), 0.75 * (r274_belowMarkTop - r274_belowMarkBot - r274_markStroke));
            var r319_cedillaTop = r274_belowMarkTop + 0.875 * r319_fine;
            var r319_cedillaBot = r274_belowMarkBot;
            return r274_union(r274_VBar.m(r274_markMiddle, r319_ext, r319_cedillaTop - r319_fine, r274_markStroke), r274_dispiro(r274_flat(r274_markMiddle - r274_HSwToV(0.5 * r274_markStroke), r319_cedillaTop, r274_widths.rhs.heading(r319_fine, r274_Rightward)), r274_curl(r274_markMiddle, r319_cedillaTop, r274_heading(r274_Rightward)), r274_archv(), r274_g4(r274_markMiddle + r274_markExtend - r274_O, r1_mix(r319_cedillaTop, r319_cedillaBot, 0.5), r274_widths.rhs.heading(r1_mix(r319_fine, r274_markStroke, 0.5), {
                'x': r274_HVContrast,
                'y': -0.5 * (r274_markStroke - r319_fine) / r274_markStroke
            })), r274_arcvh(), r274_flat(r274_markMiddle, r319_cedillaBot, r274_widths.rhs.heading(r274_markStroke, r274_Leftward)), r274_curl(r274_markMiddle - r274_markExtend, r319_cedillaBot, r274_heading(r274_Leftward))));
        };
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaExtShapeBelow', null, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.setWidth(0);
            r322_currentGlyph.include(r274_StdAnchors.medium());
            r322_currentGlyph.include(r274_CedillaShape(4 * r274_Stroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaExtShapeBelowOArc', null, function () {
            var _r328_t1;
            var _r328_t0 = this;
            var r328_currentGlyph = _r328_t0;
            r328_currentGlyph.setWidth(0);
            r328_currentGlyph.include(r274_StdAnchors.medium());
            r328_currentGlyph.include(r274_CedillaShape(r274_Stroke + r274_O));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaExtShapeBelowSOArc', null, function () {
            var _r334_t1;
            var _r334_t0 = this;
            var r334_currentGlyph = _r334_t0;
            r334_currentGlyph.setWidth(0);
            r334_currentGlyph.include(r274_StdAnchors.medium());
            r334_currentGlyph.include(r274_CedillaShape(r274_AdviceStroke2(2, 3, r274_XH) + r274_O));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('cedillaBelow', 807, function () {
            var _r340_t1;
            var _r340_t0 = this;
            var r340_currentGlyph = _r340_t0;
            r340_currentGlyph.setWidth(0);
            r340_currentGlyph.include(r274_StdAnchors.medium());
            r340_currentGlyph.include(r274_CedillaShape(0));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('iotaBelow', 837, function () {
            var _r346_t1;
            var _r346_t0 = this;
            var r346_currentGlyph = _r346_t0;
            r346_currentGlyph.setWidth(0);
            r346_currentGlyph.include(r274_StdAnchors.narrow());
            r346_currentGlyph.include(r274_VBar.m(r274_markMiddle, r274_belowMarkBot, r274_belowMarkTop, r274_markStroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('iotaLF', null, function () {
            var _r352_t1;
            var _r352_t0 = this;
            var r352_currentGlyph = _r352_t0;
            r352_currentGlyph.setWidth(0);
            r352_currentGlyph.setMarkAnchor('lf', r274_markMiddle, 0, r274_markMiddle, r274_belowMarkStack);
            r352_currentGlyph.include(r274_VBar.m(r274_markMiddle, r274_belowMarkBot, r274_belowMarkTop, r274_markStroke));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftTackBelow', 792, function () {
            var _r358_t1;
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            r358_currentGlyph.setWidth(0);
            r358_currentGlyph.include(r274_StdAnchors.mediumWide());
            r358_currentGlyph.include(r274_VBar.r(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r358_currentGlyph.include(r274_HBar.m(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r1_mix(r274_belowMarkTop, r274_belowMarkBot, 0.5), r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rightTackBelow', 793, function () {
            var _r365_t1;
            var _r365_t0 = this;
            var r365_currentGlyph = _r365_t0;
            r365_currentGlyph.setWidth(0);
            r365_currentGlyph.include(r274_StdAnchors.mediumWide());
            r365_currentGlyph.include(r274_VBar.l(r274_markMiddle - r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r365_currentGlyph.include(r274_HBar.m(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r1_mix(r274_belowMarkTop, r274_belowMarkBot, 0.5), r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftAngleBelow', 841, function () {
            var _r372_t1;
            var _r372_t0 = this;
            var r372_currentGlyph = _r372_t0;
            r372_currentGlyph.setWidth(0);
            r372_currentGlyph.include(r274_StdAnchors.mediumWide());
            r372_currentGlyph.include(r274_VBar.r(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r372_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('bridgeBelow', 810, function () {
            var _r379_t1;
            var _r379_t0 = this;
            var r379_currentGlyph = _r379_t0;
            r379_currentGlyph.setWidth(0);
            r379_currentGlyph.include(r274_StdAnchors.wide());
            r379_currentGlyph.include(r274_VBar.m(r274_markMiddle - r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r379_currentGlyph.include(r274_VBar.m(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r379_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('boxBelow', 827, function () {
            var _r387_t1;
            var _r387_t0 = this;
            var r387_currentGlyph = _r387_t0;
            r387_currentGlyph.setWidth(0);
            r387_currentGlyph.include(r274_StdAnchors.wide());
            var r387_boxsw = Math.min(r274_markFine * 2, (r274_belowMarkTop - r274_belowMarkBot) / 3);
            r387_currentGlyph.include(r274_VBar.m(r274_markMiddle - r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r387_currentGlyph.include(r274_VBar.m(r274_markMiddle + r274_markExtend, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r387_currentGlyph.include(r274_HBar.b(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkBot, r387_boxsw));
            r387_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r387_boxsw));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('equalBelow', 839, function () {
            var _r396_t1;
            var _r396_t0 = this;
            var r396_currentGlyph = _r396_t0;
            r396_currentGlyph.setWidth(0);
            r396_currentGlyph.include(r274_StdAnchors.mediumWide());
            var r396_boxsw = Math.min(r274_markFine * 2, (r274_belowMarkTop - r274_belowMarkBot) / 3);
            r396_currentGlyph.include(r274_HBar.b(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkBot, r396_boxsw));
            r396_currentGlyph.include(r274_HBar.t(r274_markMiddle - r274_markExtend, r274_markMiddle + r274_markExtend, r274_belowMarkTop, r396_boxsw));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('shelfBelow', null, function () {
            var _r403_t1;
            var _r403_t0 = this;
            var r403_currentGlyph = _r403_t0;
            r403_currentGlyph.setWidth(0);
            r403_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            r403_currentGlyph.include(r274_VBar.m(r274_SB - r274_Width, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r403_currentGlyph.include(r274_VBar.m(r274_RightSB - r274_Width, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r403_currentGlyph.include(r274_HBar.b(r274_SB - r274_Width, r274_RightSB - r274_Width, r274_belowMarkBot, r274_markFine * 2));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('openShelfBelow', null, function () {
            var _r411_t1;
            var _r411_t0 = this;
            var r411_currentGlyph = _r411_t0;
            r411_currentGlyph.setWidth(0);
            r411_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            r411_currentGlyph.include(r274_VBar.m(r274_SB - r274_Width, r274_belowMarkBot, r274_belowMarkTop, r274_markFine * 2));
            r411_currentGlyph.include(r274_HBar.b(r274_SB - r274_Width, r274_RightSB - r274_Width, r274_belowMarkBot, r274_markFine * 2));
            return void 0;
        });
        var r274_mirrorAnchor = function (r416_gs, r416_gt, r416_srcCls, r416_dstCls) {
            var r416_a, _r416_t0, _r416_t1;
            if (r416_gs.markAnchors[r416_srcCls]) {
                r416_a = r416_gs.gizmo.unapply(r416_gs.markAnchors[r416_srcCls]);
                r416_gt.setMarkAnchor(r416_dstCls, r1_mix(r274_markMiddle, r416_a.x, -1), r1_mix(r274_XH / 2, r416_a.y, -1));
            }
            return r416_gs.baseAnchors[r416_srcCls] ? (r416_a = r416_gs.gizmo.unapply(r416_gs.baseAnchors[r416_srcCls]), r416_gt.setBaseAnchor(r416_dstCls, r1_mix(r274_markMiddle, r416_a.x, -1), r1_mix(r274_XH / 2, r416_a.y, -1))) : void 0;
        };
        var r274_TurnAboveMarkToBelow = function (r417_gnBelowMark, r417_unicodeBelowMark, r417_gnAboveMark) {
            var _r417_t0, _r417_t1;
            return r274_xn$deriveglyphs$7Hrq(r417_gnBelowMark, r417_unicodeBelowMark, r417_gnAboveMark, function (r418_src, r418_gr) {
                var _r418_t0, _r418_t1;
                return function () {
                    var _r420_t1;
                    var _r420_t0 = this;
                    var r420_currentGlyph = _r420_t0;
                    r420_currentGlyph.setWidth(0);
                    r420_currentGlyph.include(r274_xn$referglyph$1aao(r418_src));
                    r420_currentGlyph.include(r274_FlipAround(r274_markMiddle, r274_XH / 2));
                    var r420_aboveGlyph = r274_xn$queryglyph$1aao(r418_src);
                    if (r420_aboveGlyph) {
                        r274_mirrorAnchor(r420_aboveGlyph, r420_currentGlyph, 'above', 'below');
                        r274_mirrorAnchor(r420_aboveGlyph, r420_currentGlyph, 'aboveBraceL', 'belowBraceR');
                        r274_mirrorAnchor(r420_aboveGlyph, r420_currentGlyph, 'aboveBraceR', 'belowBraceL');
                    }
                    if (r1_ScheduleLeaningMark.get(r420_aboveGlyph))
                        r1_ScheduleLeaningMark.set(r420_currentGlyph);
                    return void 0;
                };
            });
        };
        r274_TurnAboveMarkToBelow('graveBelow', 790, 'graveAbove');
        r274_TurnAboveMarkToBelow('acuteBelow', 791, 'acuteAbove');
        r274_TurnAboveMarkToBelow('leftHalfCircleBelow', 796, 'rightHalfCircleAbove');
        r274_TurnAboveMarkToBelow('upTackBelow', 797, 'downTackAbove');
        r274_TurnAboveMarkToBelow('downTackBelow', 798, 'upTackAbove');
        r274_TurnAboveMarkToBelow('plusBelow', 799, 'plusAbove');
        r274_TurnAboveMarkToBelow('minusBelow', 800, 'minusAbove');
        r274_TurnAboveMarkToBelow('dotBelow', 803, 'dotAbove');
        r274_TurnAboveMarkToBelow('dieresisBelow', 804, 'dieresisAbove');
        r274_TurnAboveMarkToBelow('ringBelow', 805, 'ringAbove');
        r274_TurnAboveMarkToBelow('commaBelow', 806, 'turnCommaAbove');
        r274_TurnAboveMarkToBelow('ogonekBelow', 808, 'ogonekAbove');
        r274_TurnAboveMarkToBelow('barBelow', 809, 'barAbove');
        r274_TurnAboveMarkToBelow('dblBreveBelow', 811, 'dblArchAbove');
        r274_TurnAboveMarkToBelow('caronBelow', 812, 'circumflexAbove');
        r274_TurnAboveMarkToBelow('circumflexBelow', 813, 'caronAbove');
        r274_TurnAboveMarkToBelow('breveBelow', 814, 'archAbove');
        r274_TurnAboveMarkToBelow('archBelow', 815, 'breveAbove');
        r274_TurnAboveMarkToBelow('tildeBelow', 816, 'tildeAbove');
        r274_TurnAboveMarkToBelow('macronBelow', 817, 'macronAbove');
        r274_TurnAboveMarkToBelow('underlineBelow', 818, 'overlineAbove');
        r274_TurnAboveMarkToBelow('dblUnderlineBelow', 819, 'dblOverlineAbove');
        r274_TurnAboveMarkToBelow('rightHalfCircleBelow', 825, 'leftHalfCircleAbove');
        r274_TurnAboveMarkToBelow('invBridgeBelow', 826, 'bridgeAbove');
        r274_TurnAboveMarkToBelow('dblArchBelow', 828, 'dblBreveAbove');
        r274_TurnAboveMarkToBelow('dblBarBelow', 840, 'dblBarAbove');
        r274_TurnAboveMarkToBelow('lrArrowBelow', 845, 'lrArrowAbove');
        r274_TurnAboveMarkToBelow('upArrowBelow', 846, 'downArrowAbove');
        r274_TurnAboveMarkToBelow('crossBelow', 851, 'crossAbove');
        r274_TurnAboveMarkToBelow('lessBelow', 852, 'greaterAbove');
        r274_TurnAboveMarkToBelow('greaterBelow', 853, 'lessAbove');
        r274_TurnAboveMarkToBelow('dblRingBelow', 858, 'dblRingAbove');
        r274_TurnAboveMarkToBelow('dblPlusBelow', 6858, 'dblPlusAbove');
        r274_TurnAboveMarkToBelow('zigzagBelow', 7631, 'zigzagAbove');
        r274_TurnAboveMarkToBelow('wideInvertedBridgeBelow', 7673, 'wideBridgeAbove');
        r274_TurnAboveMarkToBelow('dblTildeBelow', 7677, 'dblTildeAbove');
        r274_TurnAboveMarkToBelow('elipsisBelow', 8424, 'elipsisAbove');
        r274_TurnAboveMarkToBelow('leftArrowBelow', 8430, 'rightArrowAbove');
        r274_TurnAboveMarkToBelow('rightArrowBelow', 8431, 'leftArrowAbove');
        r274_TurnAboveMarkToBelow('upArrowHeadBelow', 57348, 'downArrowHeadAbove');
        r274_TurnAboveMarkToBelow('downArrowHeadBelow', 57349, 'upArrowHeadAbove');
        r274_TurnAboveMarkToBelow('descenderBarBelow', null, 'ascenderBarAbove');
        r274_TurnAboveMarkToBelow('sbRsbUnderlineBelow', null, 'sbRsbOverlineAbove');
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('greaterAndUpArrowheadBelow', 854, function () {
            var _r426_t1;
            var _r426_t0 = this;
            var r426_currentGlyph = _r426_t0;
            r426_currentGlyph.setWidth(0);
            r426_currentGlyph.include(r274_xn$withtransform$5sIl(r274_Translate(-r274_markExtend, 0), r274_xn$referglyph$1aao('greaterBelow')));
            r426_currentGlyph.include(r274_xn$withtransform$5sIl(r274_Translate(+r274_markExtend, 0), r274_xn$referglyph$1aao('upArrowHeadBelow')));
            r426_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('greaterAndDownArrowheadBelow', 7679, function () {
            var _r433_t1;
            var _r433_t0 = this;
            var r433_currentGlyph = _r433_t0;
            r433_currentGlyph.setWidth(0);
            r433_currentGlyph.include(r274_xn$withtransform$5sIl(r274_Translate(-r274_markExtend, 0), r274_xn$referglyph$1aao('greaterBelow')));
            r433_currentGlyph.include(r274_xn$withtransform$5sIl(r274_Translate(+r274_markExtend, 0), r274_xn$referglyph$1aao('downArrowHeadBelow')));
            r433_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('dblCrossBelow', 6837, function () {
            var _r440_t1;
            var _r440_t0 = this;
            var r440_currentGlyph = _r440_t0;
            r440_currentGlyph.setWidth(0);
            r440_currentGlyph.include(r274_xn$withtransform$5sIl(r274_Translate(-r274_markExtend, 0), r274_xn$referglyph$1aao('crossBelow')));
            r440_currentGlyph.include(r274_xn$withtransform$5sIl(r274_Translate(+r274_markExtend, 0), r274_xn$referglyph$1aao('crossBelow')));
            r440_currentGlyph.include(r274_StdAnchors.impl(0, 1.5));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('leftParenBelow', 6851, function () {
            var _r447_t1;
            var _r447_t0 = this;
            var r447_currentGlyph = _r447_t0;
            r447_currentGlyph.setWidth(0);
            r447_currentGlyph.setMarkAnchor('belowBraceL', r274_markMiddle, r274_belowMarkMid, r274_markMiddle - r274_markExtend, r274_belowMarkMid);
            var r447_braceDepth = r274_markExtend * 0.25;
            var r447_left = r274_markMiddle - 1.5 * r274_markExtend;
            r447_currentGlyph.include(r274_dispiro(r274_widths.lhs(r274_markFine), r274_g4(r447_left + r447_braceDepth, r274_belowMarkTop + r274_markFine), r274_g4(r447_left + r274_OX, r274_belowMarkMid), r274_g4(r447_left + r447_braceDepth, r274_belowMarkBot - r274_markFine)));
            return void 0;
        });
        r274_xn$createAndSaveGlyphImpl$2Lrc3c('rightParenBelow', 6852, function () {
            var _r453_t1;
            var _r453_t0 = this;
            var r453_currentGlyph = _r453_t0;
            r453_currentGlyph.setWidth(0);
            r453_currentGlyph.setMarkAnchor('belowBraceR', r274_markMiddle, r274_belowMarkMid, r274_markMiddle + r274_markExtend, r274_belowMarkMid);
            var r453_braceDepth = r274_markExtend * 0.25;
            var r453_right = r274_markMiddle + 1.5 * r274_markExtend;
            r453_currentGlyph.include(r274_dispiro(r274_widths.rhs(r274_markFine), r274_g4(r453_right - r453_braceDepth, r274_belowMarkTop + r274_markFine), r274_g4(r453_right - r274_OX, r274_belowMarkMid), r274_g4(r453_right - r453_braceDepth, r274_belowMarkBot - r274_markFine)));
            return void 0;
        });
        return r274_xn$createAndSaveGlyphImpl$2Lrc3c('parenBelow', 6845, function () {
            var _r459_t1;
            var _r459_t0 = this;
            var r459_currentGlyph = _r459_t0;
            r459_currentGlyph.setWidth(0);
            r459_currentGlyph.include(r274_xn$referglyph$1aao('leftParenBelow'));
            r459_currentGlyph.include(r274_xn$referglyph$1aao('rightParenBelow'));
            return void 0;
        });
    });
    return void 0;
});
