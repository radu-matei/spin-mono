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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Punctuation-Guillemet', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t6, _r270_t7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_SymbolMid = _r270_t1.SymbolMid;
        var r270_ParenTop = _r270_t1.ParenTop;
        var r270_ParenBot = _r270_t1.ParenBot;
        var r270_Translate = _r270_t1.Translate;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        var r270_xn$deriveglyphs$7Hrq = _r270_t5['derive-glyphs'];
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('singleGuillemetLeft.straight', null, function () {
            var _r275_t1;
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            var r275_top = r1_mix(r270_SymbolMid, r270_ParenTop, 0.5);
            var r275_bot = r1_mix(r270_SymbolMid, r270_ParenBot, 0.5);
            var r275_mid = r1_mix(r275_bot, r275_top, 0.5);
            var r275_extension = 0.55;
            var r275_sw = r270_AdviceStroke(3);
            var r275_fine = r270_AdviceStroke(4);
            r275_currentGlyph.include(r270_intersection(r270_MaskAbove(r275_mid), r270_dispiro(r270_flat(r1_mix(r270_Middle, r270_SB, r275_extension), r275_mid, r270_widths.rhs(r275_sw)), r270_curl(r1_mix(r270_Middle, r270_RightSB, r275_extension), r275_top, r270_widths.center(r275_fine)))));
            r275_currentGlyph.include(r270_intersection(r270_MaskBelow(r275_mid), r270_dispiro(r270_flat(r1_mix(r270_Middle, r270_SB, r275_extension), r275_mid, r270_widths.lhs(r275_sw)), r270_curl(r1_mix(r270_Middle, r270_RightSB, r275_extension), r275_bot, r270_widths.center(r275_fine)))));
            r275_currentGlyph.include(r270_Translate(-(r270_RightSB - r270_SB) * 0.05, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('singleGuillemetLeft.curly', null, function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            var r281_top = r1_mix(r270_SymbolMid, r270_ParenTop, 0.5);
            var r281_bot = r1_mix(r270_SymbolMid, r270_ParenBot, 0.5);
            var r281_mid = r1_mix(r281_bot, r281_top, 0.5);
            var r281_extension = 0.55;
            var r281_sw = r270_AdviceStroke(3);
            var r281_fine = r270_AdviceStroke(4);
            r281_currentGlyph.include(r270_intersection(r270_MaskAbove(r281_mid), r270_dispiro(r270_g4(r1_mix(r270_Middle, r270_SB, r281_extension), r281_mid + r281_sw * 0.25, r270_widths.rhs(r281_sw)), r270_quadControls(0.6, 0.3), r270_g4(r1_mix(r270_Middle, r270_RightSB, r281_extension), r281_top, r270_widths.center(r281_fine)))));
            r281_currentGlyph.include(r270_intersection(r270_MaskBelow(r281_mid), r270_dispiro(r270_g4(r1_mix(r270_Middle, r270_SB, r281_extension), r281_mid - r281_sw * 0.25, r270_widths.lhs(r281_sw)), r270_quadControls(0.6, 0.3), r270_g4(r1_mix(r270_Middle, r270_RightSB, r281_extension), r281_bot, r270_widths.center(r281_fine)))));
            r281_currentGlyph.include(r270_VBar.l(r1_mix(r270_Middle, r270_SB, r281_extension), r281_mid - r281_sw * 0.25, r281_mid + r281_sw * 0.25, r281_sw));
            r281_currentGlyph.include(r270_Translate(-(r270_RightSB - r270_SB) * 0.05, 0));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('singleGuillemetLeft', 8249, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'guillemet'));
        r270_xn$deriveglyphs$7Hrq('guillemetLeft', 171, 'singleGuillemetLeft', function (r287_src, r287_sel) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                r289_currentGlyph.include(r270_xn$referglyph$1aao(r287_src));
                r289_currentGlyph.include(r270_Translate((r270_RightSB - r270_SB) * 0.5, 0));
                r289_currentGlyph.include(r270_xn$referglyph$1aao(r287_src));
                r289_currentGlyph.include(r270_Translate(-(r270_RightSB - r270_SB) * 0.25, 0));
                return void 0;
            };
        });
        r270_turned('singleGuillemetRight', 8250, 'singleGuillemetLeft', r270_Middle, r270_SymbolMid);
        return r270_turned('guillemetRight', 187, 'guillemetLeft', r270_Middle, r270_SymbolMid);
    });
    return void 0;
});
