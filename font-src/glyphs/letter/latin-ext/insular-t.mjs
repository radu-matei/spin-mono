'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Insular-T', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_hookend = _r270_t4.hookend;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_InsularTShape = function (r273_top, r273_bot, r273_ada, r273_adb) {
            var _r273_t0, _r273_t1;
            return function () {
                var _r275_t1;
                var _r275_t0 = this;
                var r275_currentGlyph = _r275_t0;
                r275_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r273_top));
                var r275_fine = r270_Stroke * r270_CThinB;
                r275_currentGlyph.include(r270_dispiro(r270_straight.left.start(r270_Middle, r273_top - r270_Stroke + r275_fine, r270_widths.lhs.heading(r275_fine, r270_Leftward)), r270_archv(), r270_flat(r270_SB + r270_OX, r273_top - r273_ada - r270_Stroke + r275_fine, r270_widths.lhs()), r270_curl(r270_SB + r270_OX, r273_bot + r273_adb), r270_hookend(r273_bot + r270_O), r270_g4(r270_RightSB, r273_bot + r270_Hook)));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('TInsular', 42886, function () {
            var _r280_t1;
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            r280_currentGlyph.include(r270_MarkSet.capital());
            r280_currentGlyph.include(r270_InsularTShape(r270_CAP, 0, r270_ArchDepthA, r270_ArchDepthB));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('tInsular', 42887, function () {
            var _r285_t1;
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            r285_currentGlyph.include(r270_MarkSet.e());
            r285_currentGlyph.include(r270_InsularTShape(r270_XH, 0, r270_SmallArchDepthA, r270_SmallArchDepthB));
            return void 0;
        });
    });
    return void 0;
});
