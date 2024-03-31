'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Shared', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_CodeOnum, _r270_t4, _r270_t5;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Translate = _r270_t1.Translate;
        var r270_TanSlope = _r270_t1.TanSlope;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r272_t0, _r272_t1;
            return { 'OnumHeight': r270_OnumHeight };
        });
        var r270_OnumHeight = r270_XH * r270_para.onumZeroHeightRatio;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r274_t0, _r274_t1;
            return { 'ShiftDown': r270_ShiftDown };
        });
        var r270_ShiftDown = function () {
            var _r275_t0, _r275_t1;
            return r270_Translate((r270_OnumHeight - r270_CAP) * r270_TanSlope, r270_OnumHeight - r270_CAP);
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'OnumMarks': r270_OnumMarks };
        });
        var r270_OnumMarks = {
            'e': r270_MarkSet.OfZone({
                'top': r270_OnumHeight,
                'bot': 0
            }),
            'p': r270_MarkSet.OfZone({
                'top': r270_OnumHeight,
                'bot': r270_OnumHeight - r270_CAP
            })
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return {
                'CodeLnum': r270_CodeLnum,
                'CodeOnum': r270_CodeOnum
            };
        });
        var r270_CodeLnum = function (r280_u) {
            var _r280_t0, _r280_t1;
            return r270_para.variantSelector['__defaultDigitForm'] === 'oldStyle' ? null : r280_u;
        };
        return r270_CodeOnum = function (r281_u) {
            var _r281_t0, _r281_t1;
            return r270_para.variantSelector['__defaultDigitForm'] === 'oldStyle' ? r281_u : null;
        };
    });
    return void 0;
});
