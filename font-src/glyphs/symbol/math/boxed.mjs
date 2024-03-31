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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Boxed', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_xn$deriveglyphs$7Hrq = _r270_t5['derive-glyphs'];
        var r270_MakeMathBoxed = function (r273_u, r273_inner) {
            var _r273_t0, _r273_t1;
            return r270_xn$deriveglyphs$7Hrq('mathBoxed{' + r273_inner + '}', r273_u, r273_inner, function (r274_src, r274_gr) {
                var _r274_t0, _r274_t1;
                return function () {
                    var _r276_t1;
                    var _r276_t0 = this;
                    var r276_currentGlyph = _r276_t0;
                    r276_currentGlyph.include(r270_xn$referglyph$1aao('mathBox'), true, true);
                    r276_currentGlyph.include(r270_intersection(r270_xn$referglyph$1aao('mathBoxOutline'), r270_xn$referglyph$1aao(r274_src)));
                    return void 0;
                };
            });
        };
        r270_MakeMathBoxed(8862, 'innerPlus');
        r270_MakeMathBoxed(8863, 'innerMinus');
        r270_MakeMathBoxed(8864, 'innerMultiply');
        r270_MakeMathBoxed(8865, 'mathCDotInner');
        r270_MakeMathBoxed(10692, 'innerMultiplyStroke1');
        r270_MakeMathBoxed(10693, 'innerMultiplyStroke2');
        r270_MakeMathBoxed(10694, 'opAsterisk');
        r270_MakeMathBoxed(10695, 'whiteSmallCircle.NWID');
        return r270_MakeMathBoxed(10696, 'whiteSmallSquare.NWID');
    });
    return void 0;
});
