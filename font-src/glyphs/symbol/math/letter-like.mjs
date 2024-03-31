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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Symbol-Math-Letter-Like', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t9, _r270_t10;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_O = _r270_t1.O;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_OperatorStroke = _r270_t1.OperatorStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Upper-A'].resolve();
        var r270_DeltaShape = _r270_t6.DeltaShape;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Upper-E'].resolve();
        var r270_RevEShape = _r270_t7.RevEShape;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Zero'].resolve();
        var r270_OvalShapeT = _r270_t8.OvalShapeT;
        r270_turned('forall', 8704, 'A.straightSerifless', r270_Middle, r270_CAP / 2);
        r270_alias('exists', 8707, 'revE.serifless');
        r270_turned('amalg', 10815, 'grek/Pi', r270_Middle, r270_CAP / 2);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('emptySet', 8709, function () {
            var _r278_t1;
            var _r278_t0 = this;
            var r278_currentGlyph = _r278_t0;
            r278_currentGlyph.include(r270_OvalShapeT(r270_dispiro, r270_CAP, 0, r270_SB, r270_RightSB, 1, r270_OperatorStroke));
            r278_currentGlyph.include(r270_MarkSet.capital());
            var r278_fine = r270_OperatorStroke / 2;
            r278_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_SB + r270_O + r278_fine, r1_mix(r270_CAP, 0, 1.05)), r270_curl(r270_RightSB - r270_O - r278_fine, r1_mix(0, r270_CAP, 1.05))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('reverseEmptySet', 10672, function () {
            var _r284_t1;
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r270_OvalShapeT(r270_dispiro, r270_CAP, 0, r270_SB, r270_RightSB, 1, r270_OperatorStroke));
            r284_currentGlyph.include(r270_MarkSet.capital());
            var r284_fine = r270_OperatorStroke / 2;
            r284_currentGlyph.include(r270_dispiro(r270_widths.center(r270_OperatorStroke), r270_flat(r270_RightSB - r270_O - r284_fine, r1_mix(r270_CAP, 0, 1.05)), r270_curl(r270_SB + r270_O + r284_fine, r1_mix(0, r270_CAP, 1.05))));
            return void 0;
        });
        r270_xn$derivecomposites$7Hrq('emptysetOverbar', 10673, 'emptySet', 'sbRsbOverlineAbove');
        r270_xn$derivecomposites$7Hrq('emptysetRing', 10674, 'emptySet', 'ringAbove');
        r270_xn$derivecomposites$7Hrq('emptysetRightArrow', 10675, 'emptySet', 'rightArrowAbove');
        return r270_xn$derivecomposites$7Hrq('emptysetLeftArrow', 10676, 'emptySet', 'leftArrowAbove');
    });
    return void 0;
});
