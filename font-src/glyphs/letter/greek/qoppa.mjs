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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Qoppa', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var _r271_t6, _r271_t7;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_ExtLineCenter = _r271_t4.ExtLineCenter;
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var r271_MaskRight = _r271_t4.MaskRight;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Qoppa', 990, function () {
            var r276_kSerifShift, _r276_t1;
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            r276_currentGlyph.include(r271_MarkSet.capital());
            var r276_x1 = r271_SB + r271_HSwToV(0.25 * r271_Stroke) - r271_O;
            var r276_x1co = r271_Width - r276_x1;
            var r276_x2 = r1_mix(r271_SB, r271_RightSB, 0.3);
            var r276_x2co = r271_Width - r276_x2;
            r276_currentGlyph.include(r271_intersection(r271_MaskAbove(r271_CAP / 2 - r271_HalfStroke), r271_MaskBelow(r271_CAP), r271_ExtLineCenter(2, r271_Stroke, r276_x1, r271_CAP / 2 - r271_HalfStroke, r276_x2, r271_CAP)));
            r276_currentGlyph.include(r271_intersection(r271_MaskAbove(0), r271_MaskBelow(r271_CAP / 2 + r271_HalfStroke), r271_ExtLineCenter(2, r271_Stroke, r276_x1co, r271_CAP / 2 + r271_HalfStroke, r276_x2co, 0)));
            r276_currentGlyph.include(r271_HBar.m(r276_x1 + r271_HSwToV(r271_HalfStroke), r276_x1co - r271_HSwToV(r271_HalfStroke), r271_CAP / 2));
            if (r271_SLAB) {
                r276_kSerifShift = 0.45 * (0.3 * (r271_RightSB - r271_SB) / (r271_CAP / 2 + r271_HalfStroke));
                r276_currentGlyph.include(r271_HSerif.mb(r276_x2co + r276_kSerifShift * r271_Stroke, 0, r271_Jut));
                r276_currentGlyph.include(r271_HSerif.mt(r276_x2 - r276_kSerifShift * r271_Stroke, r271_CAP, r271_Jut));
            }
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/qoppa', 991, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r271_MarkSet.b());
            var r285_y1 = r1_mix(0, r271_Ascender, 0.4);
            var r285_y1co = r1_mix(0, r271_Ascender, 0.6);
            r285_currentGlyph.include(r271_intersection(r271_VBar.l(r271_SB, 0, r271_Ascender), r271_xn$spirooutline$1aao(r271_corner(r271_SB, r285_y1), r271_corner(r271_SB, r271_Ascender), r271_corner(r271_RightSB, r271_Ascender), r271_corner(r271_RightSB, r285_y1co))));
            r285_currentGlyph.include(r271_intersection(r271_VBar.r(r271_RightSB, 0, r271_Ascender), r271_xn$spirooutline$1aao(r271_corner(r271_SB, r285_y1), r271_corner(r271_SB, 0), r271_corner(r271_RightSB, 0), r271_corner(r271_RightSB, r285_y1co))));
            r285_currentGlyph.include(r271_intersection(r271_ExtLineCenter(2, r271_Stroke, r271_SB, r285_y1, r271_RightSB, r285_y1co), r271_MaskRight(r271_SB), r271_MaskLeft(r271_RightSB)));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r292_xn$Capture_Ext$2Lrc2b) {
    var _r292_t0, _r292_t1;
    r292_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r292_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Qoppa-Archaic', function (r293_xn$Capture$2Lrc8, r293_xn$ExportCapture$2Lrc4b) {
        var _r293_t6, _r293_t7;
        var _r293_t0 = r293_xn$Capture$2Lrc8;
        var r293_xn$createAndSaveGlyphImpl$2Lrc3c = _r293_t0['$createAndSaveGlyphImpl$'];
        var r293_xn$NamedParameterPair$2Lrc9b = _r293_t0['$NamedParameterPair$'];
        var r293_xn$Exec$2Lrc5 = _r293_t0['$Exec$'];
        var r293_MarkSet = _r293_t0.MarkSet;
        var _r293_t1 = r293_xn$Capture$2Lrc8.Metrics;
        var r293_SB = _r293_t1.SB;
        var r293_CAP = _r293_t1.CAP;
        var r293_XH = _r293_t1.XH;
        var r293_Descender = _r293_t1.Descender;
        var r293_Stroke = _r293_t1.Stroke;
        var r293_SLAB = _r293_t1.SLAB;
        var r293_HalfStroke = _r293_t1.HalfStroke;
        var r293_RightSB = _r293_t1.RightSB;
        var r293_Middle = _r293_t1.Middle;
        var r293_ArchDepthA = _r293_t1.ArchDepthA;
        var r293_ArchDepthB = _r293_t1.ArchDepthB;
        var r293_MidJutSide = _r293_t1.MidJutSide;
        var _r293_t2 = r293_xn$Capture$2Lrc8.SpiroFns;
        var _r293_t3 = r293_xn$Capture$2Lrc8.BooleFns;
        var _r293_t4 = r293_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r293_OShape = _r293_t4.OShape;
        var r293_HSerif = _r293_t4.HSerif;
        var r293_VBar = _r293_t4.VBar;
        var _r293_t5 = r293_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        r293_xn$createAndSaveGlyphImpl$2Lrc3c('grek/QoppaArchaic', 984, function () {
            var _r298_t1;
            var _r298_t0 = this;
            var r298_currentGlyph = _r298_t0;
            r298_currentGlyph.include(r293_MarkSet.capital());
            var r298_yAttach = (r293_SLAB ? r293_Stroke : 0) + r293_XH * 0.2;
            r298_currentGlyph.include(r293_OShape(r293_CAP, r298_yAttach, r293_SB, r293_RightSB, r293_Stroke, r293_ArchDepthA, r293_ArchDepthB));
            r298_currentGlyph.include(r293_VBar.m(r293_Middle, 0, r298_yAttach + r293_HalfStroke));
            if (r293_SLAB)
                r298_currentGlyph.include(r293_HSerif.mb(r293_Middle, 0, r293_MidJutSide));
            return void 0;
        });
        return r293_xn$createAndSaveGlyphImpl$2Lrc3c('grek/qoppaArchaic', 985, function () {
            var _r305_t1;
            var _r305_t0 = this;
            var r305_currentGlyph = _r305_t0;
            r305_currentGlyph.include(r293_MarkSet.p());
            r305_currentGlyph.include(r293_OShape(r293_XH, 0, r293_SB, r293_RightSB));
            r305_currentGlyph.include(r293_VBar.m(r293_Middle, r293_Descender, r293_HalfStroke));
            return void 0;
        });
    });
    return void 0;
});
