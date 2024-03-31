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
    r272_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r272_xn$Capture_Ext$2Lrc2b, 'Mark-Overlay', function (r273_xn$Capture$2Lrc8, r273_xn$ExportCapture$2Lrc4b) {
        var _r273_t11, _r273_t12, _r273_t13, _r273_tag14, _r273_t15, _r273_tag16, _r273_t17, _r273_tag18, _r273_t19, _r273_tag20, _r273_t21, _r273_tag22, _r273_t23, _r273_tag24;
        var _r273_t0 = r273_xn$Capture$2Lrc8;
        var r273_xn$createAndSaveGlyphImpl$2Lrc3c = _r273_t0['$createAndSaveGlyphImpl$'];
        var r273_xn$NamedParameterPair$2Lrc9b = _r273_t0['$NamedParameterPair$'];
        var r273_xn$Exec$2Lrc5 = _r273_t0['$Exec$'];
        var r273_para = _r273_t0.para;
        var r273_DivFrame = _r273_t0.DivFrame;
        var _r273_t1 = r273_xn$Capture$2Lrc8.Metrics;
        var r273_Width = _r273_t1.Width;
        var r273_SB = _r273_t1.SB;
        var r273_CAP = _r273_t1.CAP;
        var r273_XH = _r273_t1.XH;
        var r273_SymbolMid = _r273_t1.SymbolMid;
        var r273_ApparentTranslate = _r273_t1.ApparentTranslate;
        var r273_Downward = _r273_t1.Downward;
        var r273_Rightward = _r273_t1.Rightward;
        var r273_Leftward = _r273_t1.Leftward;
        var r273_O = _r273_t1.O;
        var r273_OX = _r273_t1.OX;
        var r273_Stroke = _r273_t1.Stroke;
        var r273_LongJut = _r273_t1.LongJut;
        var r273_HalfStroke = _r273_t1.HalfStroke;
        var r273_RightSB = _r273_t1.RightSB;
        var r273_Middle = _r273_t1.Middle;
        var r273_DotRadius = _r273_t1.DotRadius;
        var r273_AdviceStroke = _r273_t1.AdviceStroke;
        var r273_OverlayStroke = _r273_t1.OverlayStroke;
        var r273_OperatorStroke = _r273_t1.OperatorStroke;
        var r273_StrokeWidthBlend = _r273_t1.StrokeWidthBlend;
        var r273_ArchDepthAOf = _r273_t1.ArchDepthAOf;
        var r273_ArchDepthBOf = _r273_t1.ArchDepthBOf;
        var r273_HSwToV = _r273_t1.HSwToV;
        var _r273_t2 = r273_xn$Capture$2Lrc8.SpiroFns;
        var r273_g2 = _r273_t2.g2;
        var r273_flat = _r273_t2.flat;
        var r273_curl = _r273_t2.curl;
        var r273_end = _r273_t2.end;
        var r273_straight = _r273_t2.straight;
        var r273_widths = _r273_t2.widths;
        var r273_heading = _r273_t2.heading;
        var r273_archv = _r273_t2.archv;
        var r273_arcvh = _r273_t2.arcvh;
        var r273_dispiro = _r273_t2.dispiro;
        var _r273_t3 = r273_xn$Capture$2Lrc8.BooleFns;
        var _r273_t4 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r273_Rect = _r273_t4.Rect;
        var r273_RingAt = _r273_t4.RingAt;
        var r273_DotAt = _r273_t4.DotAt;
        var r273_RingStrokeAt = _r273_t4.RingStrokeAt;
        var r273_OShapeOutline = _r273_t4.OShapeOutline;
        var r273_HBar = _r273_t4.HBar;
        var r273_HOverlayBar = _r273_t4.HOverlayBar;
        var r273_VBar = _r273_t4.VBar;
        var r273_FlatSlashShape = _r273_t4.FlatSlashShape;
        var r273_xn$withtransform$5sIl = _r273_t4['with-transform'];
        var r273_DotVariants = _r273_t4.DotVariants;
        var r273_WithDotVariants = _r273_t4.WithDotVariants;
        var _r273_t5 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r273_xn$selectvariant$7Hrq = _r273_t5['select-variant'];
        var r273_xn$referglyph$1aao = _r273_t5['refer-glyph'];
        var _r273_t6 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r273_markExtend = _r273_t6.markExtend;
        var r273_MarkStroke = _r273_t6.MarkStroke;
        var r273_markStress = _r273_t6.markStress;
        var r273_markFine = _r273_t6.markFine;
        var _r273_t7 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r273_asciiMarkZoomX = _r273_t7.asciiMarkZoomX;
        var r273_asciiMarkZoomY = _r273_t7.asciiMarkZoomY;
        var _r273_t8 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r273_markMiddle = _r273_t8.markMiddle;
        var r273_markDotsRadius = _r273_t8.markDotsRadius;
        var _r273_t9 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r273_aboveMarkTop = _r273_t9.aboveMarkTop;
        var r273_aboveMarkBot = _r273_t9.aboveMarkBot;
        var r273_aboveMarkMid = _r273_t9.aboveMarkMid;
        var r273_TildeShape = _r273_t9.TildeShape;
        var r273_RingShape = _r273_t9.RingShape;
        var _r273_t10 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Below'].resolve();
        var r273_belowMarkBot = _r273_t10.belowMarkBot;
        var r273_belowMarkTop = _r273_t10.belowMarkTop;
        var r273_belowMarkMid = _r273_t10.belowMarkMid;
        var r273_tildeHeight = 0.75 * (r273_aboveMarkTop - r273_aboveMarkBot);
        var r273_tildeHalfWidth = r273_markExtend + r273_HSwToV(0.4 * r273_Stroke);
        (function () {
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('tildeOver', 820, function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                r285_currentGlyph.setWidth(0);
                r285_currentGlyph.setMarkAnchor('overlay', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r285_currentGlyph.include(r273_TildeShape(new r273_xn$NamedParameterPair$2Lrc9b('ttop', r273_XH / 2 + r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('tbot', r273_XH / 2 - r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('leftEnd', r273_markMiddle - r273_tildeHalfWidth), new r273_xn$NamedParameterPair$2Lrc9b('rightEnd', r273_markMiddle + r273_tildeHalfWidth), new r273_xn$NamedParameterPair$2Lrc9b('hs', r273_AdviceStroke(4) / 2)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('dblTildeOver', null, function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                r296_currentGlyph.setWidth(0);
                r296_currentGlyph.setMarkAnchor('overlay', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                var r296_ttop = r273_XH / 2 + r273_tildeHeight / 2;
                var r296_tbot = r273_XH / 2 - r273_tildeHeight / 2;
                var r296_addTilde = function () {
                    var _r299_t0, _r299_t1;
                    return r273_TildeShape(new r273_xn$NamedParameterPair$2Lrc9b('ttop', r296_ttop), new r273_xn$NamedParameterPair$2Lrc9b('tbot', r296_tbot), new r273_xn$NamedParameterPair$2Lrc9b('leftEnd', r273_markMiddle - r273_tildeHalfWidth), new r273_xn$NamedParameterPair$2Lrc9b('rightEnd', r273_markMiddle + r273_tildeHalfWidth), new r273_xn$NamedParameterPair$2Lrc9b('hs', r273_AdviceStroke(4.5) / 2));
                };
                var r296_shift = (r296_ttop - r296_tbot) * 1.2;
                r296_currentGlyph.include(r296_addTilde());
                r296_currentGlyph.include(r273_ApparentTranslate(0, r296_shift));
                r296_currentGlyph.include(r296_addTilde());
                r296_currentGlyph.include(r273_ApparentTranslate(0, -0.5 * r296_shift));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('asciiTilde.symbolMid', null, function () {
                var _r311_t1;
                var _r311_t0 = this;
                var r311_currentGlyph = _r311_t0;
                r311_currentGlyph.include(r273_TildeShape(new r273_xn$NamedParameterPair$2Lrc9b('ttop', r273_SymbolMid + r273_tildeHeight * 0.5 * r273_asciiMarkZoomY), new r273_xn$NamedParameterPair$2Lrc9b('tbot', r273_SymbolMid - r273_tildeHeight * 0.5 * r273_asciiMarkZoomY), new r273_xn$NamedParameterPair$2Lrc9b('leftEnd', r273_SB), new r273_xn$NamedParameterPair$2Lrc9b('rightEnd', r273_RightSB), new r273_xn$NamedParameterPair$2Lrc9b('hs', r273_OperatorStroke / 2)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('tildeOverOnExension', null, function () {
                var _r320_t1;
                var _r320_t0 = this;
                var r320_currentGlyph = _r320_t0;
                r320_currentGlyph.setWidth(0);
                r320_currentGlyph.setMarkAnchor('overlayOnExtension', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r320_currentGlyph.include(r273_TildeShape(new r273_xn$NamedParameterPair$2Lrc9b('ttop', r273_XH / 2 + r273_tildeHeight / 3), new r273_xn$NamedParameterPair$2Lrc9b('tbot', r273_XH / 2 - r273_tildeHeight / 3), new r273_xn$NamedParameterPair$2Lrc9b('leftEnd', r273_markMiddle - r273_tildeHalfWidth), new r273_xn$NamedParameterPair$2Lrc9b('rightEnd', r273_markMiddle + r273_tildeHalfWidth), new r273_xn$NamedParameterPair$2Lrc9b('hs', r273_AdviceStroke(4) / 2)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('invLazySOver', null, function () {
                var _r331_t1;
                var _r331_t0 = this;
                var r331_currentGlyph = _r331_t0;
                r331_currentGlyph.setWidth(0);
                r331_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                var r331_sw = r273_AdviceStroke(4);
                var r331_gap = Math.max(r273_AdviceStroke(6), r273_Width * 0.1);
                var r331_xStart = r273_HSwToV(r273_HalfStroke) + r331_gap;
                var r331_r = Math.max(0.75 * r273_markExtend, r331_sw);
                r331_currentGlyph.include(r273_dispiro(r273_widths.center(r331_sw), r273_straight.right.start(r331_xStart, 2 * r331_r, r273_heading(r273_Rightward)), r273_archv(), r273_g2.down.mid(r331_xStart + r331_r, r331_r, r273_heading(r273_Downward)), r273_arcvh(), r273_flat(r331_xStart, 0, r273_heading(r273_Leftward)), r273_curl(-r331_xStart, 0, r273_heading(r273_Leftward)), r273_archv(), r273_g2.down.mid(-r331_xStart - r331_r, -r331_r, r273_heading(r273_Downward)), r273_arcvh(), r273_straight.right.end(-r331_xStart, -2 * r331_r, r273_heading(r273_Rightward))));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('barOver', 821, function () {
                var _r337_t1;
                var _r337_t0 = this;
                var r337_currentGlyph = _r337_t0;
                r337_currentGlyph.setWidth(0);
                r337_currentGlyph.setMarkAnchor('overlay', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r337_currentGlyph.include(r273_HOverlayBar(r273_markMiddle - r273_LongJut * 0.75, r273_markMiddle + r273_LongJut * 0.75, r273_XH / 2));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('dblBarOver', null, function () {
                var _r343_t1;
                var _r343_t0 = this;
                var r343_currentGlyph = _r343_t0;
                r343_currentGlyph.setWidth(0);
                r343_currentGlyph.setMarkAnchor('overlay', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                var r343_gap = 0.2 * r273_CAP;
                r343_currentGlyph.include(r273_HOverlayBar(r273_markMiddle - r273_LongJut * 0.75, r273_markMiddle + r273_LongJut * 0.75, r273_XH / 2 + 0.5 * r343_gap));
                r343_currentGlyph.include(r273_HOverlayBar(r273_markMiddle - r273_LongJut * 0.75, r273_markMiddle + r273_LongJut * 0.75, r273_XH / 2 - 0.5 * r343_gap));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('shortSlashOver', 57344, function () {
                var _r350_t1;
                var _r350_t0 = this;
                var r350_currentGlyph = _r350_t0;
                r350_currentGlyph.setWidth(0);
                r350_currentGlyph.setMarkAnchor('overlay', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r350_currentGlyph.include(r273_FlatSlashShape(r273_markMiddle, r273_XH / 2, 0.5 * r273_OverlayStroke));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('antiSlashOver', null, function () {
                var _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                r356_currentGlyph.setWidth(0);
                r356_currentGlyph.setMarkAnchor('overlay', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r356_currentGlyph.include(r273_FlatSlashShape(r273_markMiddle, r273_XH / 2, 0.5 * r273_OverlayStroke, 0.75, -0.3));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('ringOver', 8408, function () {
                var _r362_t1;
                var _r362_t0 = this;
                var r362_currentGlyph = _r362_t0;
                r362_currentGlyph.setWidth(0);
                r362_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                r362_currentGlyph.include(r273_RingShape(0, 0, r273_tildeHalfWidth));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('aleutSlashOver', null, function () {
                var _r368_t1;
                var _r368_t0 = this;
                var r368_currentGlyph = _r368_t0;
                r368_currentGlyph.setWidth(0);
                r368_currentGlyph.setMarkAnchor('armOverlay', 0, 0, 0, 0);
                r368_currentGlyph.include(r273_dispiro(r273_widths.center(r273_OverlayStroke), r273_flat(-r273_markExtend, r273_markExtend), r273_curl(r273_markExtend, -r273_markExtend)));
                return void 0;
            });
            return r273_xn$createAndSaveGlyphImpl$2Lrc3c('legSlashOver', null, function () {
                var _r374_t1;
                var _r374_t0 = this;
                var r374_currentGlyph = _r374_t0;
                r374_currentGlyph.setWidth(0);
                r374_currentGlyph.setMarkAnchor('legOverlay', 0, 0, 0, 0);
                r374_currentGlyph.include(r273_dispiro(r273_widths.center(r273_OverlayStroke), r273_flat(-r273_markExtend, -r273_markExtend), r273_curl(r273_markExtend, r273_markExtend)));
                return void 0;
            });
        }());
        (function () {
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('hStrike', null, function () {
                var _r382_t1;
                var _r382_t0 = this;
                var r382_currentGlyph = _r382_t0;
                r382_currentGlyph.setWidth(0);
                r382_currentGlyph.setMarkAnchor('strike', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r382_currentGlyph.include(r273_HOverlayBar(r1_mix(0, r273_SB, 0.5) - r273_Width, r1_mix(r273_Width, r273_RightSB, 0.5) - r273_Width, r273_XH / 2));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('strikeThrough', 822, function () {
                var _r388_t1;
                var _r388_t0 = this;
                var r388_currentGlyph = _r388_t0;
                r388_currentGlyph.setWidth(0);
                r388_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r388_currentGlyph.include(r273_HOverlayBar(0 - r273_Width, 0, r273_XH / 2));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('oblStrike', null, function () {
                var _r394_t1;
                var _r394_t0 = this;
                var r394_currentGlyph = _r394_t0;
                r394_currentGlyph.setWidth(0);
                r394_currentGlyph.setMarkAnchor('strike', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r394_currentGlyph.include(r273_dispiro(r273_widths.center(r273_OverlayStroke), r273_flat(r1_mix(0, r273_SB, 0.5) - r273_Width, 0.4 * r273_XH), r273_curl(r1_mix(r273_Width, r273_RightSB, 0.5) - r273_Width, 0.6 * r273_XH)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('tildeStrike', null, function () {
                var _r400_t1;
                var _r400_t0 = this;
                var r400_currentGlyph = _r400_t0;
                r400_currentGlyph.setWidth(0);
                r400_currentGlyph.setMarkAnchor('strike', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r400_currentGlyph.include(r273_TildeShape(new r273_xn$NamedParameterPair$2Lrc9b('ttop', r273_XH / 2 + r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('tbot', r273_XH / 2 - r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('leftEnd', r273_markMiddle - r273_Width / 2), new r273_xn$NamedParameterPair$2Lrc9b('rightEnd', r273_markMiddle + r273_Width / 2), new r273_xn$NamedParameterPair$2Lrc9b('hs', r273_OverlayStroke / 2)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('tildeStrike2', null, function () {
                var _r411_t1;
                var _r411_t0 = this;
                var r411_currentGlyph = _r411_t0;
                r411_currentGlyph.setWidth(0);
                r411_currentGlyph.setMarkAnchor('strike', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r411_currentGlyph.include(r273_TildeShape(new r273_xn$NamedParameterPair$2Lrc9b('ttop', r273_XH / 2 + r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('tbot', r273_XH / 2 - r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('leftEnd', r273_markMiddle - r273_Width / 2 + r273_SB), new r273_xn$NamedParameterPair$2Lrc9b('rightEnd', r273_markMiddle + r273_Width / 2 - r273_SB), new r273_xn$NamedParameterPair$2Lrc9b('hs', r273_OverlayStroke / 2)));
                return void 0;
            });
            return r273_xn$createAndSaveGlyphImpl$2Lrc3c('tildeStrikeDivM', null, function () {
                var _r422_t1;
                var _r422_t0 = this;
                var r422_currentGlyph = _r422_t0;
                r422_currentGlyph.setWidth(0);
                r422_currentGlyph.setMarkAnchor('strike', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r422_currentGlyph.include(r273_TildeShape(new r273_xn$NamedParameterPair$2Lrc9b('ttop', r273_XH / 2 + r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('tbot', r273_XH / 2 - r273_tildeHeight / 2), new r273_xn$NamedParameterPair$2Lrc9b('leftEnd', r273_markMiddle - r273_Width / 2 * r273_para.diversityM), new r273_xn$NamedParameterPair$2Lrc9b('rightEnd', r273_markMiddle + r273_Width / 2 * r273_para.diversityM), new r273_xn$NamedParameterPair$2Lrc9b('hs', r273_OverlayStroke / 2)));
                return void 0;
            });
        }());
        (function () {
            var r432_fine = r273_AdviceStroke(6);
            var r432_fineDbl = r273_AdviceStroke(7);
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('shortSlash', 823, function () {
                var _r435_t1;
                var _r435_t0 = this;
                var r435_currentGlyph = _r435_t0;
                r435_currentGlyph.setWidth(0);
                r435_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r435_currentGlyph.include(r273_dispiro(r273_flat(r273_SB - r273_O * 3 + 0.5 * r432_fine - r273_Width, r273_XH * -0.1, r273_widths.center(r432_fine)), r273_curl(r273_RightSB + r273_O * 3 - 0.5 * r432_fine - r273_Width, r273_XH * 1.1)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('longSlash', 824, function () {
                var _r441_t1;
                var _r441_t0 = this;
                var r441_currentGlyph = _r441_t0;
                r441_currentGlyph.setWidth(0);
                r441_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r441_currentGlyph.include(r273_dispiro(r273_flat(r273_SB - r273_O * 3 + 0.5 * r432_fine - r273_Width, r273_XH * 0.5 - r273_CAP * 0.6, r273_widths.center(r432_fine)), r273_curl(r273_RightSB + r273_O * 3 - 0.5 * r432_fine - r273_Width, r273_XH * 0.5 + r273_CAP * 0.6)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('longVStrokeOver', 8402, function () {
                var _r447_t1;
                var _r447_t0 = this;
                var r447_currentGlyph = _r447_t0;
                r447_currentGlyph.setWidth(0);
                r447_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH * 0.5, r273_markMiddle, r273_XH * 0.5);
                r447_currentGlyph.include(r273_dispiro(r273_flat(r273_markMiddle, r273_XH * 0.5 - r273_CAP * 0.6, r273_widths.center(r432_fine)), r273_curl(r273_markMiddle, r273_XH * 0.5 + r273_CAP * 0.6)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('shortVStrokeOver', 8403, function () {
                var _r453_t1;
                var _r453_t0 = this;
                var r453_currentGlyph = _r453_t0;
                r453_currentGlyph.setWidth(0);
                r453_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH * 0.5, r273_markMiddle, r273_XH * 0.5);
                r453_currentGlyph.include(r273_dispiro(r273_flat(r273_markMiddle, r273_XH * -0.1, r273_widths.center(r432_fine)), r273_curl(r273_markMiddle, r273_XH * 1.1)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('revLongSlash', 8421, function () {
                var _r459_t1;
                var _r459_t0 = this;
                var r459_currentGlyph = _r459_t0;
                r459_currentGlyph.setWidth(0);
                r459_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH * 0.5, r273_markMiddle, r273_XH * 0.5);
                r459_currentGlyph.include(r273_dispiro(r273_flat(r273_RightSB + r273_O * 3 - 0.5 * r432_fine - r273_Width, r273_XH * 0.5 - r273_CAP * 0.6, r273_widths.center(r432_fine)), r273_curl(r273_SB - r273_O * 3 + 0.5 * r432_fine - r273_Width, r273_XH * 0.5 + r273_CAP * 0.6)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('dblLongVStrokeOver', 8422, function () {
                var _r465_t1;
                var _r465_t0 = this;
                var r465_currentGlyph = _r465_t0;
                r465_currentGlyph.setWidth(0);
                var r465_dy = r273_CAP * 0.6;
                var r465_gap = Math.max(r432_fineDbl, r273_Width * 0.1);
                r465_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH * 0.5, r273_markMiddle, r273_XH * 0.5);
                r465_currentGlyph.include(r273_dispiro(r273_flat(r273_markMiddle - r465_gap, r273_XH * 0.5 - r465_dy, r273_widths.center(r432_fineDbl)), r273_curl(r273_markMiddle - r465_gap, r273_XH * 0.5 + r465_dy)));
                r465_currentGlyph.include(r273_dispiro(r273_flat(r273_markMiddle + r465_gap, r273_XH * 0.5 - r465_dy, r273_widths.center(r432_fineDbl)), r273_curl(r273_markMiddle + r465_gap, r273_XH * 0.5 + r465_dy)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('dblLongSlash', 8427, function () {
                var _r472_t1;
                var _r472_t0 = this;
                var r472_currentGlyph = _r472_t0;
                r472_currentGlyph.setWidth(0);
                var r472_l = r273_SB - r273_O * 3 + 0.5 * r432_fineDbl - r273_Width;
                var r472_r = r273_RightSB + r273_O * 3 - 0.5 * r432_fineDbl - r273_Width;
                var r472_dy = r273_CAP * 0.6;
                var r472_gap = Math.max(r432_fineDbl, r273_Width * 0.1);
                r472_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH * 0.5, r273_markMiddle, r273_XH * 0.5);
                r472_currentGlyph.include(r273_dispiro(r273_flat(r472_l - r472_gap, r273_XH * 0.5 - r472_dy, r273_widths.center(r432_fineDbl)), r273_curl(r472_r - r472_gap, r273_XH * 0.5 + r472_dy)));
                r472_currentGlyph.include(r273_dispiro(r273_flat(r472_l + r472_gap, r273_XH * 0.5 - r472_dy, r273_widths.center(r432_fineDbl)), r273_curl(r472_r + r472_gap, r273_XH * 0.5 + r472_dy)));
                return void 0;
            });
            return r273_xn$createAndSaveGlyphImpl$2Lrc3c('wideSlash', null, function () {
                var _r479_t1;
                var _r479_t0 = this;
                var r479_currentGlyph = _r479_t0;
                r479_currentGlyph.setWidth(0);
                r479_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r479_currentGlyph.include(r273_dispiro(r273_flat(r273_SB + r273_O * 3 + 0.5 * r432_fine - r273_Width, r273_XH * -0.1, r273_widths.center(r432_fine)), r273_curl(r273_RightSB - r273_O * 3 - 0.5 * r432_fine - r273_Width, r273_XH * 1.1)));
                return void 0;
            });
        }());
        (function () {
            var r484_fine = r273_AdviceStroke(6);
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrSlashOver', null, function () {
                var _r487_t1;
                var _r487_t0 = this;
                var r487_currentGlyph = _r487_t0;
                r487_currentGlyph.setWidth(0);
                var r487_dx = r273_Width * 0.1;
                var r487_dy = r273_Width * 0.4;
                r487_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r487_currentGlyph.include(r273_dispiro(r273_flat(r273_Middle - r487_dx - r273_Width, r273_XH / 2 - r487_dy, r273_widths.center(r484_fine)), r273_curl(r273_Middle + r487_dx - r273_Width, r273_XH / 2 + r487_dy)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrVStrokeOver', null, function () {
                var _r493_t1;
                var _r493_t0 = this;
                var r493_currentGlyph = _r493_t0;
                r493_currentGlyph.setWidth(0);
                var r493_dx = r273_Width * 0;
                var r493_dy = r273_Width * 0.3;
                r493_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r493_currentGlyph.include(r273_dispiro(r273_flat(r273_Middle - r493_dx - r273_Width, r273_XH / 2 - r493_dy, r273_widths.center(r484_fine)), r273_curl(r273_Middle + r493_dx - r273_Width, r273_XH / 2 + r493_dy)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrDblVStrokeOver', null, function () {
                var _r499_t1;
                var _r499_t0 = this;
                var r499_currentGlyph = _r499_t0;
                r499_currentGlyph.setWidth(0);
                var r499_dx = r273_Width * 0;
                var r499_dy = r273_Width * 0.3;
                var r499_gap = Math.max(r484_fine, r273_Width / 10);
                r499_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r499_currentGlyph.include(r273_dispiro(r273_flat(r273_Middle - r499_dx - r273_Width - r499_gap, r273_XH / 2 - r499_dy, r273_widths.center(r484_fine)), r273_curl(r273_Middle + r499_dx - r273_Width - r499_gap, r273_XH / 2 + r499_dy)));
                r499_currentGlyph.include(r273_dispiro(r273_flat(r273_Middle - r499_dx - r273_Width + r499_gap, r273_XH / 2 - r499_dy, r273_widths.center(r484_fine)), r273_curl(r273_Middle + r499_dx - r273_Width + r499_gap, r273_XH / 2 + r499_dy)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrHStrokeOver', null, function () {
                var _r506_t1;
                var _r506_t0 = this;
                var r506_currentGlyph = _r506_t0;
                r506_currentGlyph.setWidth(0);
                var r506_dx = r273_Width * 0.3;
                r506_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r506_currentGlyph.include(r273_dispiro(r273_flat(r273_Middle - r273_Width - r506_dx, r273_XH / 2, r273_widths.center(r484_fine)), r273_curl(r273_Middle - r273_Width + r506_dx, r273_XH / 2)));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrDblHStrokeOver', null, function () {
                var _r512_t1;
                var _r512_t0 = this;
                var r512_currentGlyph = _r512_t0;
                r512_currentGlyph.setWidth(0);
                var r512_dx = r273_Width * 0.3;
                var r512_gap = Math.max(r484_fine, r273_Width / 10);
                r512_currentGlyph.setMarkAnchor('slash', r273_markMiddle, r273_XH / 2, r273_markMiddle, r273_XH / 2);
                r512_currentGlyph.include(r273_dispiro(r273_flat(r273_Middle - r273_Width - r512_dx, r273_XH / 2 - r512_gap, r273_widths.center(r484_fine)), r273_curl(r273_Middle - r273_Width + r512_dx, r273_XH / 2 - r512_gap)));
                r512_currentGlyph.include(r273_dispiro(r273_flat(r273_Middle - r273_Width - r512_dx, r273_XH / 2 + r512_gap, r273_widths.center(r484_fine)), r273_curl(r273_Middle - r273_Width + r512_dx, r273_XH / 2 + r512_gap)));
                return void 0;
            });
            var r484_ArrowRingOverlay = function (r517_kr, r517_c) {
                var _r517_t0, _r517_t1;
                return function () {
                    var _r519_t1;
                    var _r519_t0 = this;
                    var r519_currentGlyph = _r519_t0;
                    r519_currentGlyph.setWidth(0);
                    var r519_r = r273_Width * r517_kr;
                    r519_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                    r519_currentGlyph.include(r273_RingStrokeAt(0, 0, r519_r, r273_AdviceStroke(r517_c)));
                    return void 0;
                };
            };
            var r484_ArrowRingMaskOverlay = function (r523_kr, r523_c) {
                var _r523_t0, _r523_t1;
                return function () {
                    var _r525_t1;
                    var _r525_t0 = this;
                    var r525_currentGlyph = _r525_t0;
                    r525_currentGlyph.setWidth(0);
                    var r525_r = r273_Width * r523_kr;
                    r525_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                    r525_currentGlyph.include(r273_RingAt(0, 0, r525_r, r273_AdviceStroke(r523_c)));
                    return void 0;
                };
            };
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOver.NWID', null, r484_ArrowRingOverlay(0.25, 5));
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOver.WWID', null, r484_ArrowRingOverlay(0.35, 4.5));
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOverLR.NWID', null, r484_ArrowRingOverlay(0.2, 6));
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOverLR.WWID', null, r484_ArrowRingOverlay(0.35, 4.5));
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOverMask.NWID', null, r484_ArrowRingMaskOverlay(0.25, 5));
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOverMask.WWID', null, r484_ArrowRingMaskOverlay(0.35, 4.5));
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOverLRMask.NWID', null, r484_ArrowRingMaskOverlay(0.2, 6));
            return r273_xn$createAndSaveGlyphImpl$2Lrc3c('arrRingOverLRMask.WWID', null, r484_ArrowRingMaskOverlay(0.35, 4.5));
        }());
        (function () {
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('leftTackOver', null, function () {
                var _r541_t1;
                var _r541_t0 = this;
                var r541_currentGlyph = _r541_t0;
                r541_currentGlyph.setWidth(0);
                r541_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                r541_currentGlyph.include(r273_VBar.m(r273_markExtend, -r273_XH / 4, r273_XH / 4, r273_MarkStroke));
                r541_currentGlyph.include(r273_HBar.m(-r273_markExtend, r273_markExtend, 0, r273_MarkStroke));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('rightTackOver', null, function () {
                var _r548_t1;
                var _r548_t0 = this;
                var r548_currentGlyph = _r548_t0;
                r548_currentGlyph.setWidth(0);
                r548_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                r548_currentGlyph.include(r273_VBar.m(-r273_markExtend, -r273_XH / 4, r273_XH / 4, r273_MarkStroke));
                r548_currentGlyph.include(r273_HBar.m(-r273_markExtend, r273_markExtend, 0, r273_MarkStroke));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('upTackOver', null, function () {
                var _r555_t1;
                var _r555_t0 = this;
                var r555_currentGlyph = _r555_t0;
                r555_currentGlyph.setWidth(0);
                r555_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                var r555_ext = Math.min(r273_markExtend, r273_belowMarkTop - r273_belowMarkBot);
                r555_currentGlyph.include(r273_VBar.m(0, -r555_ext, +r555_ext, r273_markFine * 2));
                r555_currentGlyph.include(r273_HBar.b(-r273_markExtend, +r273_markExtend, -r555_ext, r273_markFine * 2));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('downTackOver', null, function () {
                var _r562_t1;
                var _r562_t0 = this;
                var r562_currentGlyph = _r562_t0;
                r562_currentGlyph.setWidth(0);
                r562_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                var r562_ext = Math.min(r273_markExtend, r273_belowMarkTop - r273_belowMarkBot);
                r562_currentGlyph.include(r273_VBar.m(0, -r562_ext, +r562_ext, r273_markFine * 2));
                r562_currentGlyph.include(r273_HBar.t(-r273_markExtend, +r273_markExtend, +r562_ext, r273_markFine * 2));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('plusOver', null, function () {
                var _r569_t1;
                var _r569_t0 = this;
                var r569_currentGlyph = _r569_t0;
                r569_currentGlyph.setWidth(0);
                r569_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                var r569_ext = Math.min(r273_markExtend, r273_belowMarkTop - r273_belowMarkBot);
                r569_currentGlyph.include(r273_VBar.m(0, -r569_ext, +r569_ext, r273_markFine * 2));
                r569_currentGlyph.include(r273_HBar.m(-r273_markExtend, +r273_markExtend, 0, r273_markFine * 2));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('minusOver', null, function () {
                var _r576_t1;
                var _r576_t0 = this;
                var r576_currentGlyph = _r576_t0;
                r576_currentGlyph.setWidth(0);
                r576_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                var r576_ext = 0.5 * Math.min(r273_markExtend, r273_belowMarkTop - r273_belowMarkBot);
                r576_currentGlyph.include(r273_HBar.m(-r273_markExtend, +r273_markExtend, 0, r273_markFine * 2));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('equalOver', null, function () {
                var _r582_t1;
                var _r582_t0 = this;
                var r582_currentGlyph = _r582_t0;
                r582_currentGlyph.setWidth(0);
                r582_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                var r582_ext = Math.min(r273_markExtend, r273_belowMarkTop - r273_belowMarkBot);
                var r582_sw = Math.min(2 * r273_markFine, 2 / 3 * r582_ext);
                r582_currentGlyph.include(r273_HBar.t(-r273_markExtend, +r273_markExtend, +r582_ext, r582_sw));
                r582_currentGlyph.include(r273_HBar.b(-r273_markExtend, +r273_markExtend, -r582_ext, r582_sw));
                return void 0;
            });
            r273_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfCircleOver', null, function () {
                var _r589_t1;
                var _r589_t0 = this;
                var r589_currentGlyph = _r589_t0;
                r589_currentGlyph.setWidth(0);
                r589_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                r589_currentGlyph.include(r273_xn$withtransform$5sIl(r273_ApparentTranslate(-r273_markMiddle, -r273_aboveMarkMid), r273_xn$referglyph$1aao('rightHalfCircleAbove')));
                return void 0;
            });
            return r273_xn$createAndSaveGlyphImpl$2Lrc3c('leftHalfCircleOver', null, function () {
                var _r595_t1;
                var _r595_t0 = this;
                var r595_currentGlyph = _r595_t0;
                r595_currentGlyph.setWidth(0);
                r595_currentGlyph.setMarkAnchor('overlay', 0, 0, 0, 0);
                r595_currentGlyph.include(r273_xn$withtransform$5sIl(r273_ApparentTranslate(-r273_markMiddle, -r273_aboveMarkMid), r273_xn$referglyph$1aao('leftHalfCircleAbove')));
                return void 0;
            });
        }());
        return function () {
            var r600_suffix, r600_DrawAt, r600_kdr, _r600_t2, _r600_t3, _r600_tag4;
            r273_xn$ExportCapture$2Lrc4b(function () {
                var _r602_t0, _r602_t1;
                return { 'InnerDot': r600_InnerDot };
            });
            var r600_InnerDot = function (r603_x, r603_y, r603_kHeight, r603_fRound, r603_kdr, r603__space, r603__div) {
                var _r603_t0, _r603_t1, _r603_t2;
                var r603_space = r1_fallback(r603__space, r600_InnerDot.spaceOfDf(r273_DivFrame(1)));
                var r603_div = r1_fallback(r603__div, 4);
                var r603_halfDotWidth = r603_kdr * Math.min(r273_DotRadius, r603_space / r603_div);
                var r603_halfDotHeight = r603_kdr * Math.min(r273_DotRadius, r603_halfDotWidth * r603_kHeight);
                if (r603_fRound)
                    return r273_OShapeOutline.NoOvershoot(r603_y + r603_halfDotHeight, r603_y - r603_halfDotHeight, r603_x + r603_halfDotWidth, r603_x - r603_halfDotWidth, r273_Stroke * r603_halfDotWidth * 2 / r273_Width, r273_ArchDepthAOf(r603_halfDotWidth, r603_halfDotWidth * 2), r273_ArchDepthBOf(r603_halfDotWidth, r603_halfDotWidth * 2));
                else
                    return r273_Rect(r603_y + r603_halfDotHeight, r603_y - r603_halfDotHeight, r603_x + r603_halfDotWidth, r603_x - r603_halfDotWidth);
            };
            r600_InnerDot.spaceOfDf = function (r604_df) {
                var _r604_t0, _r604_t1;
                return r604_df.rightSB - r604_df.leftSB - 2 * r273_OX - r273_HSwToV(2 * r604_df.mvs);
            };
            var r600_InnerDot2 = function (r605_kHeight, r605_fRound, r605_kdr) {
                var _r605_t0, _r605_t1;
                return function () {
                    var _r607_t1;
                    var _r607_t0 = this;
                    var r607_currentGlyph = _r607_t0;
                    var r607_space = r600_InnerDot.spaceOfDf(r273_DivFrame(1));
                    var r607_div = r273_StrokeWidthBlend(7, 5);
                    var r607_halfDotWidth = r605_kdr * Math.min(r273_DotRadius, r607_space / r607_div);
                    var r607_kHeight2 = r607_div / 4 * r605_kHeight;
                    var r607_offset = (0.5 * r607_space - 2 * r607_halfDotWidth) / 3 + r607_halfDotWidth;
                    r607_currentGlyph.include(r600_InnerDot(-r607_offset, 0, r607_kHeight2, r605_fRound, r605_kdr, r607_space, r607_div));
                    r607_currentGlyph.include(r600_InnerDot(r607_offset, 0, r607_kHeight2, r605_fRound, r605_kdr, r607_space, r607_div));
                    return void 0;
                };
            };
            var _r600_t0 = Object.entries(r273_DotVariants)[Symbol.iterator]();
            var _r600_t1 = void 0;
            while (!(_r600_t1 = _r600_t0.next()).done) {
                _r600_t2 = _r600_t1.value;
                r600_suffix = _r600_t2[0];
                r600_DrawAt = _r600_t2[1][0];
                r600_kdr = _r600_t2[1][1];
                _r600_t2[1];
                (function () {
                    r273_xn$createAndSaveGlyphImpl$2Lrc3c('innerDot.' + r600_suffix, null, function () {
                        var _r615_t1;
                        var _r615_t0 = this;
                        var r615_currentGlyph = _r615_t0;
                        r615_currentGlyph.setWidth(0);
                        r615_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        r615_currentGlyph.include(r600_InnerDot(0, 0, 2, r600_DrawAt === r273_DotAt, r600_kdr));
                        return void 0;
                    });
                    r273_xn$createAndSaveGlyphImpl$2Lrc3c('innerDotSmall.' + r600_suffix, null, function () {
                        var _r621_t1;
                        var _r621_t0 = this;
                        var r621_currentGlyph = _r621_t0;
                        r621_currentGlyph.setWidth(0);
                        r621_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        r621_currentGlyph.include(r600_InnerDot(0, 0, 1.5, r600_DrawAt === r273_DotAt, r600_kdr));
                        return void 0;
                    });
                    r273_xn$createAndSaveGlyphImpl$2Lrc3c('innerDoubleDot.' + r600_suffix, null, function () {
                        var _r627_t1;
                        var _r627_t0 = this;
                        var r627_currentGlyph = _r627_t0;
                        r627_currentGlyph.setWidth(0);
                        r627_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        r627_currentGlyph.include(r600_InnerDot2(2, r600_DrawAt === r273_DotAt, r600_kdr));
                        return void 0;
                    });
                    return r273_xn$createAndSaveGlyphImpl$2Lrc3c('innerDoubleDotSmall.' + r600_suffix, null, function () {
                        var _r633_t1;
                        var _r633_t0 = this;
                        var r633_currentGlyph = _r633_t0;
                        r633_currentGlyph.setWidth(0);
                        r633_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        r633_currentGlyph.include(r600_InnerDot2(1.5, r600_DrawAt === r273_DotAt, r600_kdr));
                        return void 0;
                    });
                }());
            }
            r273_xn$selectvariant$7Hrq('innerDot', new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
            r273_xn$selectvariant$7Hrq('innerDotSmall', new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
            r273_xn$selectvariant$7Hrq('innerDoubleDot', new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
            r273_xn$selectvariant$7Hrq('innerDoubleDotSmall', new r273_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
            return r273_WithDotVariants('LDotDot', null, function (r641_DrawAt, r641_kdr, r641_overshoot) {
                var _r641_t0, _r641_t1;
                return function () {
                    var _r643_t1;
                    var _r643_t0 = this;
                    var r643_currentGlyph = _r643_t0;
                    r643_currentGlyph.setWidth(0);
                    r643_currentGlyph.include(r641_DrawAt(0, 0, r273_DotRadius * r641_kdr - r641_overshoot));
                    r643_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                    return void 0;
                };
            });
        }();
    });
    return void 0;
});
