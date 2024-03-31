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
    r272_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r272_xn$Capture_Ext$2Lrc2b, 'Mark-Shared-Metrics', function (r273_xn$Capture$2Lrc8, r273_xn$ExportCapture$2Lrc4b) {
        var r273_dialytikaRadius, _r273_t6, _r273_t7;
        var _r273_t0 = r273_xn$Capture$2Lrc8;
        var r273_xn$createAndSaveGlyphImpl$2Lrc3c = _r273_t0['$createAndSaveGlyphImpl$'];
        var r273_xn$NamedParameterPair$2Lrc9b = _r273_t0['$NamedParameterPair$'];
        var r273_xn$Exec$2Lrc5 = _r273_t0['$Exec$'];
        var _r273_t1 = r273_xn$Capture$2Lrc8.Metrics;
        var r273_SB = _r273_t1.SB;
        var r273_XH = _r273_t1.XH;
        var r273_Stroke = _r273_t1.Stroke;
        var r273_AccentWidth = _r273_t1.AccentWidth;
        var r273_AccentHeight = _r273_t1.AccentHeight;
        var r273_HalfStroke = _r273_t1.HalfStroke;
        var r273_RightSB = _r273_t1.RightSB;
        var r273_Middle = _r273_t1.Middle;
        var r273_DotRadius = _r273_t1.DotRadius;
        var r273_AdviceStroke = _r273_t1.AdviceStroke;
        var r273_AdviceStroke2 = _r273_t1.AdviceStroke2;
        var _r273_t2 = r273_xn$Capture$2Lrc8.SpiroFns;
        var _r273_t3 = r273_xn$Capture$2Lrc8.BooleFns;
        var _r273_t4 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r273_t5 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return {
                'markExtend': r273_markExtend,
                'markStroke': r273_markStroke,
                'markHalfStroke': r273_markHalfStroke,
                'markStress': r273_markStress,
                'markFine': r273_markFine
            };
        });
        var r273_markExtend = r273_AccentWidth * 0.5;
        var r273_markStroke = Math.min(r273_AdviceStroke2(3.375, 4, r273_XH), 0.875 * r273_AccentHeight);
        var r273_markHalfStroke = 0.5 * r273_markStroke;
        var r273_markStress = r273_markHalfStroke * 1.1;
        var r273_markFine = Math.min(r273_markHalfStroke * 0.9, 0.5 * r273_AdviceStroke2(3.875, 4.25, r273_XH));
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return {
                'asciiMarkZoomX': r273_asciiMarkZoomX,
                'asciiMarkZoomY': r273_asciiMarkZoomY
            };
        });
        var r273_asciiMarkZoomX = (r273_RightSB - r273_SB) / (r273_markExtend * 3);
        var r273_asciiMarkZoomY = 1.25 * r273_asciiMarkZoomX;
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r281_t0, _r281_t1;
            return {
                'markMiddle': r273_markMiddle,
                'markDotsRadius': r273_markDotsRadius,
                'dialytikaRadius': r273_dialytikaRadius
            };
        });
        var r273_markMiddle = -r273_Middle;
        var r273_markDotsRadius = r273_DotRadius * Math.min(1, r273_markStress / r273_HalfStroke);
        return r273_dialytikaRadius = r273_DotRadius * Math.min(1, r273_AdviceStroke(5) / r273_Stroke);
    });
    return void 0;
});
