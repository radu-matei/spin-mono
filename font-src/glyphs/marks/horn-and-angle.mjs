'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
import * as _s0_t3 from '../../support/geometry/box.mjs';
var _s0_t4;
export {
    _s0_t4 as apply
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
var r1_Box = _r1_t11.Box;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r268_block, _r268_t4, _r268_t6;
    var _r268_t3 = this;
    var _r268_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r268_t1 = _r268_t0.length;
    var _r268_t2 = 0;
    var _r268_t5 = _r268_t2 < _r268_t1;
    while (_r268_t5) {
        _r268_t6 = (r268_block = _r268_t0[_r268_t2], r268_block(_r268_t3), _r268_t2 = _r268_t2 + 1);
        _r268_t5 = _r268_t2 < _r268_t1;
    }
    return _r268_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r272_xn$Capture_Ext$2Lrc2b) {
    var _r272_t0, _r272_t1;
    r272_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r272_xn$Capture_Ext$2Lrc2b, 'Mark-Horn-And-Angle', function (r273_xn$Capture$2Lrc8, r273_xn$ExportCapture$2Lrc4b) {
        var r273_suffix, r273_DrawAt, r273_kdr, r273_glyphName, r273_pExtL, r273_pExtR, r273_cwMidStrokeWidth, r273_paren, _r273_t13, _r273_t16, _r273_t17, _r273_t18, _r273_t19, _r273_tag20, _r273_t22, _r273_t23, _r273_tag24;
        var _r273_t0 = r273_xn$Capture$2Lrc8;
        var r273_xn$createAndSaveGlyphImpl$2Lrc3c = _r273_t0['$createAndSaveGlyphImpl$'];
        var r273_xn$NamedParameterPair$2Lrc9b = _r273_t0['$NamedParameterPair$'];
        var r273_xn$Exec$2Lrc5 = _r273_t0['$Exec$'];
        var _r273_t1 = r273_xn$Capture$2Lrc8.Metrics;
        var r273_DesignParameters = _r273_t1.DesignParameters;
        var r273_Width = _r273_t1.Width;
        var r273_SB = _r273_t1.SB;
        var r273_XH = _r273_t1.XH;
        var r273_Descender = _r273_t1.Descender;
        var r273_ApparentTranslate = _r273_t1.ApparentTranslate;
        var r273_TanSlope = _r273_t1.TanSlope;
        var r273_HVContrast = _r273_t1.HVContrast;
        var r273_Downward = _r273_t1.Downward;
        var r273_Rightward = _r273_t1.Rightward;
        var r273_Leftward = _r273_t1.Leftward;
        var r273_O = _r273_t1.O;
        var r273_OX = _r273_t1.OX;
        var r273_Hook = _r273_t1.Hook;
        var r273_HookX = _r273_t1.HookX;
        var r273_ArchDepth = _r273_t1.ArchDepth;
        var r273_Stroke = _r273_t1.Stroke;
        var r273_HalfStroke = _r273_t1.HalfStroke;
        var r273_RightSB = _r273_t1.RightSB;
        var r273_Middle = _r273_t1.Middle;
        var r273_DotRadius = _r273_t1.DotRadius;
        var r273_ArchDepthB = _r273_t1.ArchDepthB;
        var r273_AdviceStroke = _r273_t1.AdviceStroke;
        var r273_HSwToV = _r273_t1.HSwToV;
        var _r273_t2 = r273_xn$Capture$2Lrc8.SpiroFns;
        var r273_g4 = _r273_t2.g4;
        var r273_flat = _r273_t2.flat;
        var r273_curl = _r273_t2.curl;
        var r273_end = _r273_t2.end;
        var r273_straight = _r273_t2.straight;
        var r273_widths = _r273_t2.widths;
        var r273_heading = _r273_t2.heading;
        var r273_alsoThru = _r273_t2.alsoThru;
        var r273_quadControls = _r273_t2.quadControls;
        var r273_archv = _r273_t2.archv;
        var r273_arcvh = _r273_t2.arcvh;
        var r273_dispiro = _r273_t2.dispiro;
        var _r273_t3 = r273_xn$Capture$2Lrc8.BooleFns;
        var r273_union = _r273_t3.union;
        var r273_intersection = _r273_t3.intersection;
        var r273_difference = _r273_t3.difference;
        var _r273_t4 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r273_SquareAt = _r273_t4.SquareAt;
        var r273_RingAt = _r273_t4.RingAt;
        var r273_HBar = _r273_t4.HBar;
        var r273_VBar = _r273_t4.VBar;
        var r273_FlipAround = _r273_t4.FlipAround;
        var r273_MaskAbove = _r273_t4.MaskAbove;
        var r273_MaskRight = _r273_t4.MaskRight;
        var r273_DotVariants = _r273_t4.DotVariants;
        var _r273_t5 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r273_xn$selectvariant$7Hrq = _r273_t5['select-variant'];
        var r273_xn$referglyph$1aao = _r273_t5['refer-glyph'];
        var r273_xn$deriveglyphs$7Hrq = _r273_t5['derive-glyphs'];
        var _r273_t6 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r273_markExtend = _r273_t6.markExtend;
        var r273_markStroke = _r273_t6.markStroke;
        var r273_markStress = _r273_t6.markStress;
        var r273_markFine = _r273_t6.markFine;
        var _r273_t7 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r273_markMiddle = _r273_t7.markMiddle;
        var r273_markDotsRadius = _r273_t7.markDotsRadius;
        var _r273_t8 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r273_aboveMarkTop = _r273_t8.aboveMarkTop;
        var r273_aboveMarkBot = _r273_t8.aboveMarkBot;
        var r273_aboveMarkMid = _r273_t8.aboveMarkMid;
        var r273_aboveMarkStack = _r273_t8.aboveMarkStack;
        var _r273_t9 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r273_commaAboveRadius = _r273_t9.commaAboveRadius;
        var _r273_t10 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Below'].resolve();
        var r273_belowMarkBot = _r273_t10.belowMarkBot;
        var r273_belowMarkTop = _r273_t10.belowMarkTop;
        var r273_belowMarkMid = _r273_t10.belowMarkMid;
        var r273_HornDim = function (r281_attX, r281_attY, r281_overshootX, r281_overshootY, r281_yrP) {
            var _r281_t0, _r281_t1;
            var r281_radius = r273_commaAboveRadius;
            var r281_hornFine = Math.min(r281_radius * 0.75, r273_markFine * 1.75);
            var r281_hornStroke = Math.min(r281_radius * 1, r273_markFine * 1.75);
            var r281_startX = r281_attX + 2 * r281_radius;
            var r281_startY = r281_attY + r281_yrP * r281_radius + (r273_aboveMarkTop - r273_aboveMarkBot) / 2;
            return {
                'radius': r281_radius,
                'hornFine': r281_hornFine,
                'hornStroke': r281_hornStroke,
                'startX': r281_startX,
                'startY': r281_startY
            };
        };
        var r273_HornMarkAnchor = function (r282_attX, r282_attY, r282_overshootX, r282_overshootY, r282_yrP) {
            var _r282_t0, _r282_t1;
            return function () {
                var _r284_t2;
                var _r284_t1 = this;
                var r284_currentGlyph = _r284_t1;
                var _r284_t0 = r273_HornDim(r282_attX, r282_attY, r282_overshootX, r282_overshootY, r282_yrP);
                var r284_radius = _r284_t0.radius;
                var r284_hornFine = _r284_t0.hornFine;
                var r284_startX = _r284_t0.startX;
                var r284_startY = _r284_t0.startY;
                r284_currentGlyph.setMarkAnchor('topRight', r282_attX, r282_attY, r284_startX, r284_startY);
                r284_currentGlyph.setBaseAnchor('aboveBraceL', r284_startX - r284_radius, r284_startY);
                r284_currentGlyph.setBaseAnchor('aboveBraceR', r284_startX - r284_radius, r284_startY);
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r289_t0, _r289_t1;
            return { 'HornBaseAnchor': r273_HornBaseAnchor };
        });
        var r273_HornBaseAnchor = function (r290_attX, r290_attY, r290_overshootX, r290_overshootY, r290_yrP) {
            var _r290_t0, _r290_t1;
            return function () {
                var _r292_t2;
                var _r292_t1 = this;
                var r292_currentGlyph = _r292_t1;
                var _r292_t0 = r273_HornDim(r290_attX, r290_attY, r290_overshootX, r290_overshootY, r290_yrP);
                var r292_radius = _r292_t0.radius;
                var r292_hornFine = _r292_t0.hornFine;
                var r292_startX = _r292_t0.startX;
                var r292_startY = _r292_t0.startY;
                r292_currentGlyph.setBaseAnchor('topRight', r292_startX, r292_startY);
                r292_currentGlyph.setBaseAnchor('aboveBraceL', r292_startX - r292_radius, r292_startY);
                r292_currentGlyph.setBaseAnchor('aboveBraceR', r292_startX - r292_radius, r292_startY);
                return void 0;
            };
        };
        var r273_HornShape = function (r296_attX, r296_attY, r296_overshootX, r296_overshootY, r296_yrP) {
            var _r296_t0, _r296_t1;
            return function () {
                var _r298_t2;
                var _r298_t1 = this;
                var r298_currentGlyph = _r298_t1;
                var _r298_t0 = r273_HornDim(r296_attX, r296_attY, r296_overshootX, r296_overshootY, r296_yrP);
                var r298_radius = _r298_t0.radius;
                var r298_hornFine = _r298_t0.hornFine;
                var r298_hornStroke = _r298_t0.hornStroke;
                var r298_startX = _r298_t0.startX;
                var r298_startY = _r298_t0.startY;
                r298_currentGlyph.include(r273_union(r273_RingAt(r298_startX - r298_radius, r298_startY, r298_radius - r298_hornFine / 8), r273_dispiro(r273_g4(r298_startX + r273_OX, r298_startY, r273_widths.rhs(r298_hornFine / 4)), r273_arcvh(), r273_g4(r298_startX - r298_radius, r298_startY - r298_radius), r273_archv(), r273_g4(r298_startX - 2 * r298_radius, r298_startY), r273_arcvh(), r273_g4(r298_startX - r298_radius, r298_startY + r298_radius, r273_widths.rhs(r298_hornFine / 2)), r273_archv(), r273_g4(r298_startX, r298_startY, r273_widths.rhs(r298_hornFine)), r273_quadControls(0, 0.75, 16, {
                    'blend': function (r300_t) {
                        var _r300_t0, _r300_t1;
                        return r273_widths.rhs(r1_mix(r298_hornFine, r298_hornStroke, r300_t));
                    }
                }), r273_g4(r296_attX - r296_overshootX - r273_HSwToV(r273_HalfStroke), r296_attY - r296_overshootY - r273_Stroke, r273_widths.rhs(r298_hornStroke)))));
                return void 0;
            };
        };
        var r273_SquareHornShape = function (r301_attX, r301_attY, r301_overshootX, r301_overshootY, r301_yrP) {
            var _r301_t0, _r301_t1;
            return function () {
                var _r303_t2;
                var _r303_t1 = this;
                var r303_currentGlyph = _r303_t1;
                var _r303_t0 = r273_HornDim(r301_attX, r301_attY, r301_overshootX, r301_overshootY, r301_yrP);
                var r303_r = _r303_t0.radius;
                var r303_hornFine = _r303_t0.hornFine;
                var r303_hornStroke = _r303_t0.hornStroke;
                var r303_startX = _r303_t0.startX;
                var r303_startY = _r303_t0.startY;
                var r303_radius = r303_r * r273_DesignParameters.squareDotScalar;
                r303_currentGlyph.include(r273_union(r273_SquareAt(r303_startX - r303_radius, r303_startY, r303_radius), r273_dispiro(r273_flat(r303_startX, r303_startY + r303_radius, r273_widths.rhs.heading(r303_hornFine, r273_Downward)), r273_curl(r303_startX, r303_startY - r303_radius), r273_quadControls(0, 0.8, 8, {
                    'blend': function (r305_t) {
                        var _r305_t0, _r305_t1;
                        return r273_widths.rhs(r1_mix(r303_hornFine, r303_hornStroke, r305_t));
                    }
                }), r273_g4(r301_attX - r301_overshootX - r273_HSwToV(r273_HalfStroke), r301_attY - r301_overshootY - r273_Stroke, r273_widths.rhs(r303_hornStroke)))));
                return void 0;
            };
        };
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('horn.round', null, function () {
            var _r308_t1;
            var _r308_t0 = this;
            var r308_currentGlyph = _r308_t0;
            r308_currentGlyph.setWidth(0);
            r308_currentGlyph.include(r273_HornShape(0, r273_XH, 0, 0, 0.5));
            r308_currentGlyph.include(r273_HornMarkAnchor(0, r273_XH, 0, 0, 0.5));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('horn.square', null, function () {
            var _r314_t1;
            var _r314_t0 = this;
            var r314_currentGlyph = _r314_t0;
            r314_currentGlyph.setWidth(0);
            r314_currentGlyph.include(r273_SquareHornShape(0, r273_XH, 0, 0, 0.5));
            r314_currentGlyph.include(r273_HornMarkAnchor(0, r273_XH, 0, 0, 0.5));
            return void 0;
        });
        r273_xn$selectvariant$7Hrq('horn', 795, new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('longHorn.round', null, function () {
            var _r321_t1;
            var _r321_t0 = this;
            var r321_currentGlyph = _r321_t0;
            r321_currentGlyph.setWidth(0);
            r321_currentGlyph.include(r273_HornShape(0, r273_XH, r273_Width / 2, r273_ArchDepthB, 0.5));
            r321_currentGlyph.include(r273_HornMarkAnchor(0, r273_XH, r273_Width / 2, r273_ArchDepthB, 0.5));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('longHorn.square', null, function () {
            var _r327_t1;
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            r327_currentGlyph.setWidth(0);
            r327_currentGlyph.include(r273_SquareHornShape(0, r273_XH, r273_Width / 2, r273_ArchDepthB, 0.5));
            r327_currentGlyph.include(r273_HornMarkAnchor(0, r273_XH, r273_Width / 2, r273_ArchDepthB, 0.5));
            return void 0;
        });
        r273_xn$selectvariant$7Hrq('longHorn', null, new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('leftangleTR', 794, function () {
            var _r334_t1;
            var _r334_t0 = this;
            var r334_currentGlyph = _r334_t0;
            r334_currentGlyph.setWidth(0);
            r334_currentGlyph.include(r273_VBar.l(0, r273_aboveMarkBot, r273_aboveMarkTop, r273_markFine * 2));
            r334_currentGlyph.include(r273_HBar.t(-r273_markExtend * 1.5, 0, r273_aboveMarkTop, r273_markFine * 2));
            r334_currentGlyph.setMarkAnchor('topRight', 0, r273_XH, 0, r273_aboveMarkTop);
            r334_currentGlyph.setBaseAnchor('aboveBraceL', -0.75 * r273_markExtend, r273_aboveMarkMid);
            r334_currentGlyph.setBaseAnchor('aboveBraceR', 0, r273_aboveMarkMid);
            return void 0;
        });
        var _r273_t11 = Object.entries(r273_DotVariants)[Symbol.iterator]();
        var _r273_t12 = void 0;
        while (!(_r273_t12 = _r273_t11.next()).done) {
            _r273_t13 = _r273_t12.value;
            r273_suffix = _r273_t13[0];
            r273_DrawAt = _r273_t13[1][0];
            r273_kdr = _r273_t13[1][1];
            _r273_t13[1];
            (function () {
                r273_xn$createAndSaveGlyphImpl$2Lrc3c('dotTL.' + r273_suffix, 856, function () {
                    var _r346_t2;
                    var _r346_t1 = this;
                    var r346_currentGlyph = _r346_t1;
                    r346_currentGlyph.setWidth(0);
                    var _r346_t0 = r273_HornDim(0, r273_XH, 0, 0, 0.5);
                    var r346_radius = _r346_t0.radius;
                    var r346_attX = _r346_t0.attX;
                    var r346_attY = _r346_t0.attY;
                    var r346_startX = _r346_t0.startX;
                    var r346_startY = _r346_t0.startY;
                    var r346_r = r1_mix(r346_radius, r273_DotRadius, 0.5);
                    r346_currentGlyph.include(r273_DrawAt(-r346_startX + r346_r, r346_startY, r346_r * r273_kdr));
                    r346_currentGlyph.setMarkAnchor('topLeft', 0, r273_XH, -r346_startX, r346_startY);
                    r346_currentGlyph.setBaseAnchor('aboveBraceL', r346_startX - r346_r, r346_startY);
                    r346_currentGlyph.setBaseAnchor('aboveBraceR', r346_startX - r346_r, r346_startY);
                    return void 0;
                });
                r273_xn$createAndSaveGlyphImpl$2Lrc3c('dotTR.' + r273_suffix, 856, function () {
                    var _r354_t2;
                    var _r354_t1 = this;
                    var r354_currentGlyph = _r354_t1;
                    r354_currentGlyph.setWidth(0);
                    var _r354_t0 = r273_HornDim(0, r273_XH, 0, 0, 0.5);
                    var r354_radius = _r354_t0.radius;
                    var r354_attX = _r354_t0.attX;
                    var r354_attY = _r354_t0.attY;
                    var r354_startX = _r354_t0.startX;
                    var r354_startY = _r354_t0.startY;
                    var r354_r = r1_mix(r354_radius, r273_DotRadius, 0.5);
                    r354_currentGlyph.include(r273_DrawAt(r354_startX - r354_r, r354_startY, r354_r * r273_kdr));
                    r354_currentGlyph.setMarkAnchor('topRight', 0, r273_XH, r354_startX, r354_startY);
                    r354_currentGlyph.setBaseAnchor('aboveBraceL', r354_startX - r354_r, r354_startY);
                    r354_currentGlyph.setBaseAnchor('aboveBraceR', r354_startX - r354_r, r354_startY);
                    return void 0;
                });
                return r273_xn$createAndSaveGlyphImpl$2Lrc3c('dotBL.' + r273_suffix, 856, function () {
                    var _r362_t2;
                    var _r362_t1 = this;
                    var r362_currentGlyph = _r362_t1;
                    r362_currentGlyph.setWidth(0);
                    var _r362_t0 = r273_HornDim(0, r273_XH, 0, 0, 0.5);
                    var r362_radius = _r362_t0.radius;
                    var r362_attX = _r362_t0.attX;
                    var r362_attY = _r362_t0.attY;
                    var r362_startX = _r362_t0.startX;
                    var r362_startY = _r362_t0.startY;
                    var r362_r = r1_mix(r362_radius, r273_DotRadius, 0.5);
                    r362_currentGlyph.include(r273_DrawAt(-r362_startX + r362_r, r273_XH - r362_startY, r362_r * r273_kdr));
                    r362_currentGlyph.setMarkAnchor('bottomLeft', 0, 0, -r362_startX, r273_XH - r362_startY);
                    r362_currentGlyph.setBaseAnchor('belowBraceL', r362_startX - r362_r, r362_startY);
                    r362_currentGlyph.setBaseAnchor('belowBraceR', r362_startX - r362_r, r362_startY);
                    return void 0;
                });
            }());
        }
        r273_xn$selectvariant$7Hrq('dotBL', 7674, new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r273_xn$selectvariant$7Hrq('dotTL', 7672, new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r273_xn$selectvariant$7Hrq('dotTR', 856, new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r273_xn$deriveglyphs$7Hrq('commaTR', 789, 'commaAbove', function (r371_src, r371_gr) {
            var _r371_t0, _r371_t1;
            return function () {
                var _r373_t1;
                var _r373_t0 = this;
                var r373_currentGlyph = _r373_t0;
                r373_currentGlyph.setWidth(0);
                r373_currentGlyph.include(r273_xn$referglyph$1aao(r371_src));
                r373_currentGlyph.include(r273_ApparentTranslate(r273_RightSB - r273_Middle + r273_DotRadius, 0));
                r373_currentGlyph.setMarkAnchor('topRight', 0, r273_XH, 0, r273_aboveMarkTop);
                r373_currentGlyph.setBaseAnchor('aboveBraceL', -r273_SB + r273_DotRadius, r273_aboveMarkMid);
                r373_currentGlyph.setBaseAnchor('aboveBraceR', -r273_SB + r273_DotRadius, r273_aboveMarkMid);
                return void 0;
            };
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('rtailBR', 802, function () {
            var _r382_t1;
            var _r382_t0 = this;
            var r382_currentGlyph = _r382_t0;
            r382_currentGlyph.setWidth(0);
            r382_currentGlyph.setMarkAnchor('bottomRight', 0, 0, 0, r273_belowMarkBot);
            r382_currentGlyph.setBaseAnchor('belowBraceL', 0.5 * r273_HookX - 0.25 * r273_markExtend - r273_HSwToV(0.75 * r273_Stroke), -0.5 * r273_Hook - r273_HalfStroke);
            r382_currentGlyph.setBaseAnchor('belowBraceR', 0.5 * r273_HookX + 0.25 * r273_markExtend - r273_HSwToV(0.5 * r273_Stroke), -0.5 * r273_Hook - r273_HalfStroke);
            r382_currentGlyph.include(r273_dispiro(r273_widths.rhs(), r273_flat(0, -r273_O, r273_heading(r273_Downward)), r273_curl(0, 0, r273_heading(r273_Downward)), r273_straight.right.end(r273_HookX - r273_HSwToV(r273_HalfStroke), -r273_Hook + r273_HalfStroke)));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('ltailBR', 801, function () {
            var _r390_t1;
            var _r390_t0 = this;
            var r390_currentGlyph = _r390_t0;
            r390_currentGlyph.setWidth(0);
            r390_currentGlyph.setMarkAnchor('bottomRight', 0, 0, 0, r273_belowMarkBot);
            r390_currentGlyph.setBaseAnchor('belowBraceL', -0.5 * r273_HookX - 0.25 * r273_markExtend - r273_HSwToV(0.25 * r273_Stroke), -0.5 * r273_Hook - r273_HalfStroke);
            r390_currentGlyph.setBaseAnchor('belowBraceR', -0.5 * r273_HookX + 0.25 * r273_markExtend - r273_HSwToV(0.25 * r273_Stroke), -0.5 * r273_Hook - r273_HalfStroke);
            r390_currentGlyph.include(r273_dispiro(r273_widths.rhs(), r273_flat(0, -r273_O, r273_heading(r273_Downward)), r273_curl(0, 0, r273_heading(r273_Downward)), r273_straight.left.end(-r273_HookX - r273_HSwToV(r273_HalfStroke), -r273_Hook - r273_HalfStroke)));
            return void 0;
        });
        r273_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfCircleTR', null, function () {
            var _r398_t1;
            var _r398_t0 = this;
            var r398_currentGlyph = _r398_t0;
            r398_currentGlyph.setWidth(0);
            r398_currentGlyph.include(r273_xn$referglyph$1aao('leftHalfCircleBelow'));
            r398_currentGlyph.include(r273_FlipAround(r273_markMiddle, r273_XH / 2));
            r398_currentGlyph.clearAnchors();
            r398_currentGlyph.setMarkAnchor('topRight', r273_markMiddle, r273_XH, r273_markMiddle, r273_aboveMarkStack);
            r398_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle, r273_aboveMarkMid);
            r398_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle, r273_aboveMarkMid);
            return void 0;
        });
        var r273_ogonekTrConfig = {
            'ogonekTR': [
                7 / 16,
                1 / 8,
                1,
                0
            ],
            'ogonekTR_Y': [
                3 / 16,
                1,
                6,
                0.5
            ]
        };
        var _r273_t14 = Object.entries(r273_ogonekTrConfig)[Symbol.iterator]();
        var _r273_t15 = void 0;
        var _r273_t21 = !(_r273_t15 = _r273_t14.next()).done;
        while (_r273_t21) {
            _r273_t16 = _r273_t15.value;
            r273_glyphName = _r273_t16[0];
            r273_pExtL = _r273_t16[1][0];
            r273_pExtR = _r273_t16[1][1];
            r273_cwMidStrokeWidth = _r273_t16[1][2];
            r273_paren = _r273_t16[1][3];
            _r273_t16[1];
            _r273_t22 = function () {
                var r407_depth = 0 - r273_Descender - r273_markStroke;
                r273_xn$createAndSaveGlyphImpl$2Lrc3c(r273_glyphName, null, function () {
                    var _r410_t1;
                    var _r410_t0 = this;
                    var r410_currentGlyph = _r410_t0;
                    r410_currentGlyph.setWidth(0);
                    var r410_fine = r273_AdviceStroke(8);
                    var r410_extL = r273_pExtL * r407_depth + 0.125 * r273_markStress;
                    var r410_extR = Math.max(r273_pExtR * r273_markExtend, 1.5 * r273_TanSlope * r273_markStroke);
                    var r410_turnSlope = 0.5 * ((r273_markStroke - r410_fine) / r273_markStroke - (r273_ArchDepthB - r273_ArchDepth) / r273_ArchDepth);
                    var r410_swMid = Math.min(r273_markStroke, r273_AdviceStroke(r273_cwMidStrokeWidth));
                    r410_currentGlyph.include(r273_difference(r273_dispiro(r273_g4(r273_markMiddle, 0, r273_widths.rhs.heading(r410_fine, r273_Leftward)), r273_alsoThru(0.5, 0.375 - 0.2 * r273_markStroke / r407_depth, r273_widths.rhs(r1_mix(r410_fine, r410_swMid, 0.25))), r273_g4.down.mid(r273_markMiddle - r410_extL, -0.75 * r407_depth, r273_widths.rhs.heading(r410_swMid, {
                        'x': r273_HVContrast,
                        'y': r410_turnSlope
                    })), r273_arcvh(), r273_g4(r273_markMiddle + r1_mix(-r410_extL, r410_extR, 11 / 16), -r407_depth + r273_O, r273_widths.rhs.heading(r273_markStroke, r273_Rightward)), r273_g4(r273_markMiddle + r410_extR, -r407_depth + 0.5 * r273_O, r273_heading(r273_Rightward))), r273_intersection(r273_MaskAbove(0), r273_MaskRight(r273_markMiddle))));
                    r410_currentGlyph.setMarkAnchor('trailing', r273_markMiddle, 0, r273_markMiddle + r410_extR, -r407_depth - 0.5 * r273_O - r273_markStroke);
                    r410_currentGlyph.setBaseAnchor('belowBraceL', r273_markMiddle - r410_extL - r273_paren * r273_markExtend - r273_HSwToV(0.25 * r410_swMid), -0.75 * r407_depth);
                    r410_currentGlyph.setBaseAnchor('belowBraceR', r273_markMiddle - 0.75 * r410_extL + r273_paren * r273_markExtend, -0.75 * r407_depth);
                    return void 0;
                });
                return r273_xn$createAndSaveGlyphImpl$2Lrc3c('' + r273_glyphName + '/spacer', null, function () {
                    var _r418_t1;
                    var _r418_t0 = this;
                    var r418_currentGlyph = _r418_t0;
                    r418_currentGlyph.setWidth(0);
                    r418_currentGlyph.setMarkAnchor('below', 0, 0, 0, -r407_depth - 0.5 * r273_O - r273_markStroke);
                    return void 0;
                });
            }();
            _r273_t21 = !(_r273_t15 = _r273_t14.next()).done;
        }
        return _r273_t22;
    });
    return void 0;
});
