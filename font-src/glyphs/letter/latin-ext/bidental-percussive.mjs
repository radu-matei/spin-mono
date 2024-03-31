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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Bidental-Percussive', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_RightSB = _r270_t1.RightSB;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('bidentalPercussive', 685, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            var r275_g = r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph.include(r270_HBar.t(r270_SB, r270_RightSB, r270_CAP * 0.4));
                r278_currentGlyph.include(r270_VBar.l(r270_SB, r270_CAP * 0.1, r270_CAP * 0.4));
                r278_currentGlyph.include(r270_VBar.r(r270_RightSB, r270_CAP * 0.1, r270_CAP * 0.4));
                return void 0;
            });
            r275_currentGlyph.include(r275_g);
            r275_currentGlyph.include(r270_ApparentTranslate(0, r270_CAP / 2));
            r275_currentGlyph.include(r275_g);
            return void 0;
        });
    });
    return void 0;
});
