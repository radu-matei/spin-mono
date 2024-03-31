'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Mark-Adjustment', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_LeaningAnchor, _r270_t4, _r270_t5, _r270_t6, _r270_tag7;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r272_t0, _r272_t1;
            return { 'ExtendBelowBaseAnchors': r270_ExtendBelowBaseAnchors };
        });
        var r270_ExtendBelowBaseAnchors = function (r273_y) {
            var _r273_t0, _r273_t1;
            return function () {
                var r275_a, _r275_t1;
                var _r275_t0 = this;
                var r275_currentGlyph = _r275_t0;
                if (r275_currentGlyph.baseAnchors.below) {
                    r275_a = r275_currentGlyph.gizmo.unapply(r275_currentGlyph.baseAnchors.below);
                    if (r275_a.y > r273_y)
                        r275_currentGlyph.setBaseAnchor('below', r275_a.x, r273_y);
                }
                if (r275_currentGlyph.baseAnchors.leaningBelow) {
                    r275_a = r275_currentGlyph.gizmo.unapply(r275_currentGlyph.baseAnchors.leaningBelow);
                    if (r275_a.y > r273_y)
                        r275_currentGlyph.setBaseAnchor('leaningBelow', r275_a.x, r273_y);
                }
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'ExtendAboveBaseAnchors': r270_ExtendAboveBaseAnchors };
        });
        var r270_ExtendAboveBaseAnchors = function (r280_y) {
            var _r280_t0, _r280_t1;
            return function () {
                var r282_a, _r282_t1;
                var _r282_t0 = this;
                var r282_currentGlyph = _r282_t0;
                if (r282_currentGlyph.baseAnchors.above) {
                    r282_a = r282_currentGlyph.gizmo.unapply(r282_currentGlyph.baseAnchors.above);
                    if (r282_a.y < r280_y)
                        r282_currentGlyph.setBaseAnchor('above', r282_a.x, r280_y);
                }
                if (r282_currentGlyph.baseAnchors.leaningAbove) {
                    r282_a = r282_currentGlyph.gizmo.unapply(r282_currentGlyph.baseAnchors.leaningAbove);
                    if (r282_a.y < r280_y)
                        r282_currentGlyph.setBaseAnchor('leaningAbove', r282_a.x, r280_y);
                }
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r286_t0, _r286_t1;
            return { 'LeaningAnchor': r270_LeaningAnchor };
        });
        return r270_LeaningAnchor = function () {
            var r289_Above, r289_Below;
            var r289_exports = {};
            var r289_SetProcImpl = function (r296_mkCenter, r296_mkLeaning, r296_x) {
                var _r296_t0, _r296_t1;
                return function () {
                    var _r298_t1;
                    var _r298_t0 = this;
                    var r298_currentGlyph = _r298_t0;
                    var r298_existing = r298_currentGlyph.baseAnchors[r296_mkCenter];
                    if (!r298_existing)
                        return void 0;
                    var r298_existingNT = r298_currentGlyph.gizmo.unapply(r298_existing);
                    r298_currentGlyph.setBaseAnchor(r296_mkLeaning, r296_x, r298_existingNT.y);
                    return void 0;
                };
            };
            var r289_Impl = function (r299_mkCenter, r299_mkLeaning) {
                var _r299_t0, _r299_t1, _r299_t2, _r299_tag3;
                return function () {
                    var r302_At, r302_VBar, r302_Hook, _r302_t2, _r302_tag3;
                    var r302_exports = {};
                    r302_exports.At = r302_At = function (r310_x) {
                        var _r310_t0, _r310_t1;
                        return r289_SetProcImpl(r299_mkCenter, r299_mkLeaning, r310_x);
                    };
                    var _r302_t0 = r302_exports;
                    var _r302_t1 = 'VBar';
                    _r302_t0[_r302_t1] = r302_VBar = function () {
                        var r314_m, r314_l, r314_r;
                        var r314_exports = {};
                        r314_exports.m = r314_m = function (r322_x) {
                            var _r322_t0, _r322_t1;
                            return r302_At(r322_x);
                        };
                        r314_exports.l = r314_l = function (r324_x, r324_sw) {
                            var _r324_t0, _r324_t1;
                            return r302_At(r324_x + r270_HSwToV(0.5 * r1_fallback(r324_sw, r270_Stroke)));
                        };
                        r314_exports.r = r314_r = function (r326_x, r326_sw) {
                            var _r326_t0, _r326_t1;
                            return r302_At(r326_x - r270_HSwToV(0.5 * r1_fallback(r326_sw, r270_Stroke)));
                        };
                        return r314_exports;
                    }();
                    r302_exports.Hook = r302_Hook = function (r328_xOutsideBar, r328_xOutsideHook, r328_sw) {
                        var _r328_t0, _r328_t1;
                        var r328_xAnchor = r1_mix(r328_xOutsideBar, r328_xOutsideHook, 7 / 16);
                        return r289_SetProcImpl(r299_mkCenter, r299_mkLeaning, r328_xAnchor);
                    };
                    return r302_exports;
                }();
            };
            r289_exports.Above = r289_Above = r289_Impl('above', 'leaningAbove');
            r289_exports.Below = r289_Below = r289_Impl('below', 'leaningBelow');
            return r289_exports;
        }();
    });
    return void 0;
});
