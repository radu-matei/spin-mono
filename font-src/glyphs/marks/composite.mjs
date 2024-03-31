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
    r272_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r272_xn$Capture_Ext$2Lrc2b, 'Mark-Composite', function (r273_xn$Capture$2Lrc8, r273_xn$ExportCapture$2Lrc4b) {
        var _r273_t11, _r273_t12;
        var _r273_t0 = r273_xn$Capture$2Lrc8;
        var r273_xn$createAndSaveGlyphImpl$2Lrc3c = _r273_t0['$createAndSaveGlyphImpl$'];
        var r273_xn$NamedParameterPair$2Lrc9b = _r273_t0['$NamedParameterPair$'];
        var r273_xn$Exec$2Lrc5 = _r273_t0['$Exec$'];
        var r273_AS_BASE = _r273_t0.AS_BASE;
        var _r273_t1 = r273_xn$Capture$2Lrc8.Metrics;
        var r273_Width = _r273_t1.Width;
        var r273_XH = _r273_t1.XH;
        var r273_Translate = _r273_t1.Translate;
        var r273_Upward = _r273_t1.Upward;
        var r273_Downward = _r273_t1.Downward;
        var r273_Rightward = _r273_t1.Rightward;
        var r273_DotRadius = _r273_t1.DotRadius;
        var r273_AdviceStroke = _r273_t1.AdviceStroke;
        var _r273_t2 = r273_xn$Capture$2Lrc8.SpiroFns;
        var r273_g4 = _r273_t2.g4;
        var r273_g2 = _r273_t2.g2;
        var r273_end = _r273_t2.end;
        var r273_widths = _r273_t2.widths;
        var r273_heading = _r273_t2.heading;
        var r273_alsoThru = _r273_t2.alsoThru;
        var r273_archv = _r273_t2.archv;
        var r273_arcvh = _r273_t2.arcvh;
        var r273_dispiro = _r273_t2.dispiro;
        var _r273_t3 = r273_xn$Capture$2Lrc8.BooleFns;
        var _r273_t4 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r273_t5 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r273_xn$referglyph$1aao = _r273_t5['refer-glyph'];
        var r273_xn$queryglyph$1aao = _r273_t5['query-glyph'];
        var r273_xn$deriveglyphs$7Hrq = _r273_t5['derive-glyphs'];
        var r273_xn$derivemultipartglyphs$7Hrq65 = _r273_t5['derive-multi-part-glyphs'];
        var _r273_t6 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r273_markExtend = _r273_t6.markExtend;
        var r273_markHalfStroke = _r273_t6.markHalfStroke;
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
        var r273_commaOvershoot = _r273_t9.commaOvershoot;
        var r273_commaAboveRadius = _r273_t9.commaAboveRadius;
        var _r273_t10 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Below'].resolve();
        var r273_belowMarkBot = _r273_t10.belowMarkBot;
        var r273_belowMarkTop = _r273_t10.belowMarkTop;
        var r273_belowMarkMid = _r273_t10.belowMarkMid;
        var r273_GreekLRDoubleMark = function (r281_id, r281_unicode, r281_gnLeft, r281_gnRight) {
            var _r281_t0, _r281_t1;
            var r281_k = -r273_Width * 0.15;
            r273_xn$derivemultipartglyphs$7Hrq65(r281_id, null, [
                r281_gnLeft,
                r281_gnRight
            ], function (r282_srcs, r282_gr) {
                var _r282_t0, _r282_t1;
                return function () {
                    var _r284_t2;
                    var _r284_t1 = this;
                    var r284_currentGlyph = _r284_t1;
                    var _r284_t0 = r282_srcs;
                    var r284_leftPart = _r284_t0[0];
                    var r284_rightPart = _r284_t0[1];
                    r284_currentGlyph.setWidth(0);
                    r284_currentGlyph.include(r273_xn$referglyph$1aao(r284_leftPart));
                    r284_currentGlyph.include(r273_Translate(2 * r281_k, 0));
                    r284_currentGlyph.include(r273_xn$referglyph$1aao(r284_rightPart));
                    r284_currentGlyph.include(r273_Translate(0 - r281_k, 0));
                    r284_currentGlyph.setMarkAnchor('above', r273_markMiddle, r273_XH, r273_markMiddle, r273_aboveMarkStack);
                    r284_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle - 0.75 * r273_markExtend, r273_aboveMarkMid);
                    r284_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle + 0.75 * r273_markExtend, r273_aboveMarkMid);
                    return void 0;
                };
            });
            r273_xn$deriveglyphs$7Hrq('' + r281_id + 'GrekUpperTonos', null, r281_id, function (r293_src, r293_gr) {
                var _r293_t0, _r293_t1;
                return function () {
                    var _r295_t1;
                    var _r295_t0 = this;
                    var r295_currentGlyph = _r295_t0;
                    r295_currentGlyph.setWidth(0);
                    r295_currentGlyph.include(r273_xn$referglyph$1aao(r293_src));
                    r295_currentGlyph.setMarkAnchor('grekUpperTonos', r273_markMiddle - r281_k, r273_XH);
                    r295_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle - 0.75 * r273_markExtend, r273_aboveMarkMid);
                    r295_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle + 0.75 * r273_markExtend, r273_aboveMarkMid);
                    return void 0;
                };
            });
            return r281_unicode ? r273_xn$deriveglyphs$7Hrq('spaced' + r281_id, r281_unicode, r281_id, function (r301_src, r301_gr) {
                var _r301_t0, _r301_t1;
                return function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    r303_currentGlyph.include(r273_xn$referglyph$1aao('markBaseSpace'), r273_AS_BASE);
                    r303_currentGlyph.setWidth(r273_xn$queryglyph$1aao('markBaseSpace').advanceWidth);
                    r303_currentGlyph.include(r273_xn$referglyph$1aao(r301_src));
                    return void 0;
                };
            }) : void 0;
        };
        r273_GreekLRDoubleMark('psiliVaria', 8141, 'commaAbove', 'variaAbove');
        r273_GreekLRDoubleMark('psiliOxia', 8142, 'commaAbove', 'oxiaAbove');
        r273_GreekLRDoubleMark('dasiaVaria', 8157, 'revCommaAbove', 'variaAbove');
        r273_GreekLRDoubleMark('dasiaOxia', 8158, 'revCommaAbove', 'oxiaAbove');
        var r273_yc = r273_aboveMarkTop - r273_commaAboveRadius + r273_DotRadius * 0.3 + r273_commaOvershoot;
        r273_xn$deriveglyphs$7Hrq('psiliPerispomeni', null, 'commaAbove', function (r307_src, r307_gr) {
            var _r307_t0, _r307_t1;
            return function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                r309_currentGlyph.setWidth(0);
                r309_currentGlyph.include(r273_xn$referglyph$1aao(r307_src));
                var r309_radius = Math.max(r273_markExtend - r273_commaAboveRadius, r273_commaAboveRadius * 1.25);
                r309_currentGlyph.include(r273_dispiro(r273_widths.lhs(Math.min(r273_markHalfStroke * 2, r273_AdviceStroke(6.5) * 1.25)), r273_g4.up.start(r273_markMiddle - r309_radius, r273_yc, r273_heading(r273_Upward)), r273_arcvh(), r273_g4.right.mid(r273_markMiddle, r273_yc + r309_radius), r273_archv(), r273_g4.down.end(r273_markMiddle + r309_radius, r273_yc, r273_heading(r273_Downward))));
                r309_currentGlyph.setMarkAnchor('above', r273_markMiddle, r273_XH, r273_markMiddle, r273_aboveMarkStack + r273_markHalfStroke * 2);
                r309_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle - 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                r309_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle + 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                return void 0;
            };
        });
        r273_xn$deriveglyphs$7Hrq('psiliPerispomeniGrekUpperTonos', null, 'psiliPerispomeni', function (r316_src, r316_gr) {
            var _r316_t0, _r316_t1;
            return function () {
                var _r318_t1;
                var _r318_t0 = this;
                var r318_currentGlyph = _r318_t0;
                r318_currentGlyph.setWidth(0);
                r318_currentGlyph.include(r273_xn$referglyph$1aao(r316_src));
                r318_currentGlyph.setMarkAnchor('grekUpperTonos', r273_markMiddle, r273_XH);
                r318_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle - 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                r318_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle + 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                return void 0;
            };
        });
        r273_xn$deriveglyphs$7Hrq('spaced_psiliPerispomeni', 8143, 'psiliPerispomeni', function (r324_src, r324_gr) {
            var _r324_t0, _r324_t1;
            return function () {
                var _r326_t1;
                var _r326_t0 = this;
                var r326_currentGlyph = _r326_t0;
                r326_currentGlyph.include(r273_xn$referglyph$1aao('markBaseSpace'), r273_AS_BASE);
                r326_currentGlyph.setWidth(r273_xn$queryglyph$1aao('markBaseSpace').advanceWidth);
                r326_currentGlyph.include(r273_xn$referglyph$1aao(r324_src));
                return void 0;
            };
        });
        r273_xn$deriveglyphs$7Hrq('dasiaPerispomeni', null, 'revCommaAbove', function (r330_src, r330_gr) {
            var _r330_t0, _r330_t1;
            return function () {
                var _r332_t1;
                var _r332_t0 = this;
                var r332_currentGlyph = _r332_t0;
                r332_currentGlyph.setWidth(0);
                r332_currentGlyph.include(r273_xn$referglyph$1aao(r330_src));
                var r332_radius = Math.max(r273_markExtend - r273_commaAboveRadius, r273_commaAboveRadius * 1.25);
                r332_currentGlyph.include(r273_dispiro(r273_widths.lhs(Math.min(r273_markHalfStroke * 2, r273_AdviceStroke(6.5) * 1.25)), r273_g4.up.start(r273_markMiddle - r332_radius, r273_yc, r273_heading(r273_Upward)), r273_arcvh(), r273_g4.right.mid(r273_markMiddle, r273_yc + r332_radius), r273_archv(), r273_g4.down.end(r273_markMiddle + r332_radius, r273_yc, r273_heading(r273_Downward))));
                r332_currentGlyph.setMarkAnchor('above', r273_markMiddle, r273_XH, r273_markMiddle, r273_aboveMarkStack + r273_markHalfStroke * 2);
                r332_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle - 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                r332_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle + 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                return void 0;
            };
        });
        r273_xn$deriveglyphs$7Hrq('dasiaPerispomeniGrekUpperTonos', null, 'dasiaPerispomeni', function (r339_src, r339_gr) {
            var _r339_t0, _r339_t1;
            return function () {
                var _r341_t1;
                var _r341_t0 = this;
                var r341_currentGlyph = _r341_t0;
                r341_currentGlyph.setWidth(0);
                r341_currentGlyph.include(r273_xn$referglyph$1aao(r339_src));
                r341_currentGlyph.setMarkAnchor('grekUpperTonos', r273_markMiddle, r273_XH);
                r341_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle - 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                r341_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle + 0.5 * r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                return void 0;
            };
        });
        r273_xn$deriveglyphs$7Hrq('spaced_dasiaPerispomeni', 8159, 'dasiaPerispomeni', function (r347_src, r347_gr) {
            var _r347_t0, _r347_t1;
            return function () {
                var _r349_t1;
                var _r349_t0 = this;
                var r349_currentGlyph = _r349_t0;
                r349_currentGlyph.include(r273_xn$referglyph$1aao('markBaseSpace'), r273_AS_BASE);
                r349_currentGlyph.setWidth(r273_xn$queryglyph$1aao('markBaseSpace').advanceWidth);
                r349_currentGlyph.include(r273_xn$referglyph$1aao(r347_src));
                return void 0;
            };
        });
        return r273_xn$deriveglyphs$7Hrq('cyrlPsiliPokrytieAbove', null, 'commaAbove', function (r353_src, r353_gr) {
            var _r353_t0, _r353_t1;
            return function () {
                var _r355_t1;
                var _r355_t0 = this;
                var r355_currentGlyph = _r355_t0;
                r355_currentGlyph.setWidth(0);
                r355_currentGlyph.include(r273_xn$referglyph$1aao(r353_src));
                var r355_radius = Math.max(r273_markExtend - r273_commaAboveRadius, r273_commaAboveRadius * 1.25);
                var r355_sw = Math.min(r273_markHalfStroke * 2, r273_AdviceStroke(6.5) * 1.25);
                r355_currentGlyph.include(r273_dispiro(r273_widths.lhs(r355_sw), r273_g4.up.start(r273_markMiddle - r355_radius, r273_yc, r273_heading(r273_Upward)), r273_arcvh(), r273_g2.right.mid(r273_markMiddle, r273_yc + r355_radius), r273_alsoThru.g2(0.5, 0.5), r273_g2.right.end(r273_markMiddle + Math.max(r355_radius, r273_markExtend * 2), r273_yc, r273_heading(r273_Rightward))));
                r355_currentGlyph.setMarkAnchor('above', r273_markMiddle, r273_XH, r273_markMiddle, r273_aboveMarkStack + r273_markHalfStroke * 2);
                r355_currentGlyph.setBaseAnchor('aboveBraceL', r273_markMiddle - r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                r355_currentGlyph.setBaseAnchor('aboveBraceR', r273_markMiddle + r273_markExtend, r273_aboveMarkMid + r273_markHalfStroke);
                return void 0;
            };
        });
    });
    return void 0;
});
