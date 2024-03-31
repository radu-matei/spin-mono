'use strict';
import * as _s0_t0 from '../../support/geometry/transform.mjs';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../support/gr.mjs';
import * as _s0_t3 from '../../support/geometry/spiro-control.mjs';
var _s0_t4;
export {
    _s0_t4 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Transform = _r1_t8.Transform;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_Radical = _r1_t10.Radical;
var _r1_t11 = _s0_t3;
var r1_Interpolator = _r1_t11.Interpolator;
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
    r272_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r272_xn$Capture_Ext$2Lrc2b, 'CommonShapes', function (r273_xn$Capture$2Lrc8, r273_xn$ExportCapture$2Lrc4b) {
        var r273_WithDotVariants, _r273_t5, _r273_t6, _r273_t7, _r273_tag8, _r273_t9, _r273_tag10, _r273_t11, _r273_tag12, _r273_t13, _r273_tag14, _r273_t15, _r273_tag16;
        var _r273_t0 = r273_xn$Capture$2Lrc8;
        var r273_xn$createAndSaveGlyphImpl$2Lrc3c = _r273_t0['$createAndSaveGlyphImpl$'];
        var r273_xn$NamedParameterPair$2Lrc9b = _r273_t0['$NamedParameterPair$'];
        var r273_xn$Exec$2Lrc5 = _r273_t0['$Exec$'];
        var r273_para = _r273_t0.para;
        var _r273_t1 = r273_xn$Capture$2Lrc8.Metrics;
        var r273_DesignParameters = _r273_t1.DesignParameters;
        var r273_UPM = _r273_t1.UPM;
        var r273_Width = _r273_t1.Width;
        var r273_Contrast = _r273_t1.Contrast;
        var r273_Scale = _r273_t1.Scale;
        var r273_Translate = _r273_t1.Translate;
        var r273_ApparentTranslate = _r273_t1.ApparentTranslate;
        var r273_Rotate = _r273_t1.Rotate;
        var r273_TanSlope = _r273_t1.TanSlope;
        var r273_HVContrast = _r273_t1.HVContrast;
        var r273_Upward = _r273_t1.Upward;
        var r273_Downward = _r273_t1.Downward;
        var r273_Rightward = _r273_t1.Rightward;
        var r273_Leftward = _r273_t1.Leftward;
        var r273_O = _r273_t1.O;
        var r273_OX = _r273_t1.OX;
        var r273_OXHook = _r273_t1.OXHook;
        var r273_Stroke = _r273_t1.Stroke;
        var r273_LongJut = _r273_t1.LongJut;
        var r273_VJutStroke = _r273_t1.VJutStroke;
        var r273_TailAdjX = _r273_t1.TailAdjX;
        var r273_TailAdjY = _r273_t1.TailAdjY;
        var r273_SmallArchDepthA = _r273_t1.SmallArchDepthA;
        var r273_SmallArchDepthB = _r273_t1.SmallArchDepthB;
        var r273_CorrectionOMidX = _r273_t1.CorrectionOMidX;
        var r273_OverlayStroke = _r273_t1.OverlayStroke;
        var r273__SuperXY = _r273_t1['_SuperXY'];
        var r273_SmoothAdjust = _r273_t1.SmoothAdjust;
        var r273_HSwToV = _r273_t1.HSwToV;
        var _r273_t2 = r273_xn$Capture$2Lrc8.SpiroFns;
        var r273_g4 = _r273_t2.g4;
        var r273_corner = _r273_t2.corner;
        var r273_flat = _r273_t2.flat;
        var r273_curl = _r273_t2.curl;
        var r273_close = _r273_t2.close;
        var r273_widths = _r273_t2.widths;
        var r273_heading = _r273_t2.heading;
        var r273_unimportant = _r273_t2.unimportant;
        var r273_archv = _r273_t2.archv;
        var r273_arcvh = _r273_t2.arcvh;
        var r273_dispiro = _r273_t2.dispiro;
        var r273_xn$spirooutline$1aao = _r273_t2['spiro-outline'];
        var _r273_t3 = r273_xn$Capture$2Lrc8.BooleFns;
        var _r273_t4 = r273_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r273_xn$selectvariant$7Hrq = _r273_t4['select-variant'];
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'no-shape': r273_xn$noshape$3cah };
        });
        var r273_xn$noshape$3cah = function () {
            var _r277_t0, _r277_t1;
            return { '__isNoShape': true };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'tagged': r273_tagged };
        });
        var r273_tagged = function (r280_tag, r280_component) {
            var _r280_t0, _r280_t1;
            return function (r281_ca, r281_cw) {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_t = _r281_t0.ctxTag;
                _r281_t0.ctxTag = r280_tag;
                var r281_ret = _r281_t0.include(r280_component, r281_ca, r281_cw);
                _r281_t0.ctxTag = r281_t;
                return r281_ret;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r283_t0, _r283_t1;
            return { 'KnotAdj': r273_KnotAdj };
        });
        var r273_KnotAdj = function () {
            var r286_BowlLeft, r286_BowlRight, r286_ArchTop, r286_ArchBot;
            var r286_exports = {};
            var r286_BowlYAdjImpl = function (r293_sign, r293_y, r293_w) {
                var _r293_t0, _r293_t1;
                return r293_y + r293_sign * r273_TanSlope * r273_SmoothAdjust * r293_w / r273_Width;
            };
            r286_exports.BowlLeft = r286_BowlLeft = function () {
                var _r295_t6;
                var _r295_t7 = arguments;
                var _r295_t0 = [].slice.call(_r295_t7, 0);
                var _r295_t1 = [];
                var _r295_t2 = 0;
                while (_r295_t2 < _r295_t0.length) {
                    if (!(_r295_t0[_r295_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r295_t1.push(_r295_t0[_r295_t2]);
                    _r295_t2 = _r295_t2 + 1;
                }
                var _r295_t3 = _r295_t0;
                var _r295_t4 = _r295_t3.length;
                var _r295_t5 = 0;
                while (_r295_t5 < _r295_t4) {
                    _r295_t2 = _r295_t3[_r295_t5];
                    if (_r295_t2 && _r295_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r295_t2.left === 'ty')
                        r295_ty = _r295_t2.right;
                    if (_r295_t2 && _r295_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r295_t2.left === 'x')
                        r295_x = _r295_t2.right;
                    if (_r295_t2 && _r295_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r295_t2.left === 'y')
                        r295_y = _r295_t2.right;
                    if (_r295_t2 && _r295_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r295_t2.left === 'af')
                        r295_af = _r295_t2.right;
                    if (_r295_t2 && _r295_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r295_t2.left === 'width')
                        r295_width = _r295_t2.right;
                    _r295_t5 = _r295_t5 + 1;
                }
                var r295_ty = r1_fallback(r295_ty, _r295_t1[0]);
                var r295_x = r1_fallback(r295_x, _r295_t1[1]);
                var r295_y = r1_fallback(r295_y, _r295_t1[2]);
                var r295_af = r1_fallback(r295_af, _r295_t1[3]);
                var r295_width = r1_fallback(r295_width, _r295_t1[4], r273_Width);
                return r295_ty(r295_x, r286_BowlYAdjImpl(+1, r295_y, r295_width), r295_af);
            };
            r286_BowlLeft.yOf = function () {
                var _r300_t6;
                var _r300_t7 = arguments;
                var _r300_t0 = [].slice.call(_r300_t7, 0);
                var _r300_t1 = [];
                var _r300_t2 = 0;
                while (_r300_t2 < _r300_t0.length) {
                    if (!(_r300_t0[_r300_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r300_t1.push(_r300_t0[_r300_t2]);
                    _r300_t2 = _r300_t2 + 1;
                }
                var _r300_t3 = _r300_t0;
                var _r300_t4 = _r300_t3.length;
                var _r300_t5 = 0;
                while (_r300_t5 < _r300_t4) {
                    _r300_t2 = _r300_t3[_r300_t5];
                    if (_r300_t2 && _r300_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'y')
                        r300_y = _r300_t2.right;
                    if (_r300_t2 && _r300_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'width')
                        r300_width = _r300_t2.right;
                    _r300_t5 = _r300_t5 + 1;
                }
                var r300_y = r1_fallback(r300_y, _r300_t1[0]);
                var r300_width = r1_fallback(r300_width, _r300_t1[1], r273_Width);
                return r286_BowlYAdjImpl(+1, r300_y, r300_width);
            };
            r286_BowlLeft.o = function () {
                var _r305_t6;
                var _r305_t7 = arguments;
                var _r305_t0 = [].slice.call(_r305_t7, 0);
                var _r305_t1 = [];
                var _r305_t2 = 0;
                while (_r305_t2 < _r305_t0.length) {
                    if (!(_r305_t0[_r305_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r305_t1.push(_r305_t0[_r305_t2]);
                    _r305_t2 = _r305_t2 + 1;
                }
                var _r305_t3 = _r305_t0;
                var _r305_t4 = _r305_t3.length;
                var _r305_t5 = 0;
                while (_r305_t5 < _r305_t4) {
                    _r305_t2 = _r305_t3[_r305_t5];
                    if (_r305_t2 && _r305_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'ty')
                        r305_ty = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'x')
                        r305_x = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'y')
                        r305_y = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'af')
                        r305_af = _r305_t2.right;
                    if (_r305_t2 && _r305_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'width')
                        r305_width = _r305_t2.right;
                    _r305_t5 = _r305_t5 + 1;
                }
                var r305_ty = r1_fallback(r305_ty, _r305_t1[0]);
                var r305_x = r1_fallback(r305_x, _r305_t1[1]);
                var r305_y = r1_fallback(r305_y, _r305_t1[2]);
                var r305_af = r1_fallback(r305_af, _r305_t1[3]);
                var r305_width = r1_fallback(r305_width, _r305_t1[4], r273_Width);
                return r305_ty(r305_x + r273_OX, r286_BowlYAdjImpl(+1, r305_y, r305_width), r305_af);
            };
            r286_exports.BowlRight = r286_BowlRight = function () {
                var _r311_t6;
                var _r311_t7 = arguments;
                var _r311_t0 = [].slice.call(_r311_t7, 0);
                var _r311_t1 = [];
                var _r311_t2 = 0;
                while (_r311_t2 < _r311_t0.length) {
                    if (!(_r311_t0[_r311_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r311_t1.push(_r311_t0[_r311_t2]);
                    _r311_t2 = _r311_t2 + 1;
                }
                var _r311_t3 = _r311_t0;
                var _r311_t4 = _r311_t3.length;
                var _r311_t5 = 0;
                while (_r311_t5 < _r311_t4) {
                    _r311_t2 = _r311_t3[_r311_t5];
                    if (_r311_t2 && _r311_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'ty')
                        r311_ty = _r311_t2.right;
                    if (_r311_t2 && _r311_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'x')
                        r311_x = _r311_t2.right;
                    if (_r311_t2 && _r311_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'y')
                        r311_y = _r311_t2.right;
                    if (_r311_t2 && _r311_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'af')
                        r311_af = _r311_t2.right;
                    if (_r311_t2 && _r311_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r311_t2.left === 'width')
                        r311_width = _r311_t2.right;
                    _r311_t5 = _r311_t5 + 1;
                }
                var r311_ty = r1_fallback(r311_ty, _r311_t1[0]);
                var r311_x = r1_fallback(r311_x, _r311_t1[1]);
                var r311_y = r1_fallback(r311_y, _r311_t1[2]);
                var r311_af = r1_fallback(r311_af, _r311_t1[3]);
                var r311_width = r1_fallback(r311_width, _r311_t1[4], r273_Width);
                return r311_ty(r311_x, r286_BowlYAdjImpl(-1, r311_y, r311_width), r311_af);
            };
            r286_BowlRight.yOf = function () {
                var _r316_t6;
                var _r316_t7 = arguments;
                var _r316_t0 = [].slice.call(_r316_t7, 0);
                var _r316_t1 = [];
                var _r316_t2 = 0;
                while (_r316_t2 < _r316_t0.length) {
                    if (!(_r316_t0[_r316_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r316_t1.push(_r316_t0[_r316_t2]);
                    _r316_t2 = _r316_t2 + 1;
                }
                var _r316_t3 = _r316_t0;
                var _r316_t4 = _r316_t3.length;
                var _r316_t5 = 0;
                while (_r316_t5 < _r316_t4) {
                    _r316_t2 = _r316_t3[_r316_t5];
                    if (_r316_t2 && _r316_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'y')
                        r316_y = _r316_t2.right;
                    if (_r316_t2 && _r316_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'width')
                        r316_width = _r316_t2.right;
                    _r316_t5 = _r316_t5 + 1;
                }
                var r316_y = r1_fallback(r316_y, _r316_t1[0]);
                var r316_width = r1_fallback(r316_width, _r316_t1[1], r273_Width);
                return r286_BowlYAdjImpl(-1, r316_y, r316_width);
            };
            r286_BowlRight.o = function () {
                var _r321_t6;
                var _r321_t7 = arguments;
                var _r321_t0 = [].slice.call(_r321_t7, 0);
                var _r321_t1 = [];
                var _r321_t2 = 0;
                while (_r321_t2 < _r321_t0.length) {
                    if (!(_r321_t0[_r321_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r321_t1.push(_r321_t0[_r321_t2]);
                    _r321_t2 = _r321_t2 + 1;
                }
                var _r321_t3 = _r321_t0;
                var _r321_t4 = _r321_t3.length;
                var _r321_t5 = 0;
                while (_r321_t5 < _r321_t4) {
                    _r321_t2 = _r321_t3[_r321_t5];
                    if (_r321_t2 && _r321_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'ty')
                        r321_ty = _r321_t2.right;
                    if (_r321_t2 && _r321_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'x')
                        r321_x = _r321_t2.right;
                    if (_r321_t2 && _r321_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'y')
                        r321_y = _r321_t2.right;
                    if (_r321_t2 && _r321_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'af')
                        r321_af = _r321_t2.right;
                    if (_r321_t2 && _r321_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r321_t2.left === 'width')
                        r321_width = _r321_t2.right;
                    _r321_t5 = _r321_t5 + 1;
                }
                var r321_ty = r1_fallback(r321_ty, _r321_t1[0]);
                var r321_x = r1_fallback(r321_x, _r321_t1[1]);
                var r321_y = r1_fallback(r321_y, _r321_t1[2]);
                var r321_af = r1_fallback(r321_af, _r321_t1[3]);
                var r321_width = r1_fallback(r321_width, _r321_t1[4], r273_Width);
                return r321_ty(r321_x - r273_OX, r286_BowlYAdjImpl(-1, r321_y, r321_width), r321_af);
            };
            r286_exports.ArchTop = r286_ArchTop = function () {
                var _r327_t6;
                var _r327_t7 = arguments;
                var _r327_t0 = [].slice.call(_r327_t7, 0);
                var _r327_t1 = [];
                var _r327_t2 = 0;
                while (_r327_t2 < _r327_t0.length) {
                    if (!(_r327_t0[_r327_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r327_t1.push(_r327_t0[_r327_t2]);
                    _r327_t2 = _r327_t2 + 1;
                }
                var _r327_t3 = _r327_t0;
                var _r327_t4 = _r327_t3.length;
                var _r327_t5 = 0;
                while (_r327_t5 < _r327_t4) {
                    _r327_t2 = _r327_t3[_r327_t5];
                    if (_r327_t2 && _r327_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r327_t2.left === 'x')
                        r327_x = _r327_t2.right;
                    if (_r327_t2 && _r327_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r327_t2.left === 'y')
                        r327_y = _r327_t2.right;
                    if (_r327_t2 && _r327_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r327_t2.left === 'af')
                        r327_af = _r327_t2.right;
                    if (_r327_t2 && _r327_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r327_t2.left === 'ty')
                        r327_ty = _r327_t2.right;
                    if (_r327_t2 && _r327_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r327_t2.left === 'sw')
                        r327_sw = _r327_t2.right;
                    _r327_t5 = _r327_t5 + 1;
                }
                var r327_x = r1_fallback(r327_x, _r327_t1[0]);
                var r327_y = r1_fallback(r327_y, _r327_t1[1]);
                var r327_af = r1_fallback(r327_af, _r327_t1[2]);
                var r327_ty = r1_fallback(r327_ty, _r327_t1[3], r273_g4);
                var r327_sw = r1_fallback(r327_sw, _r327_t1[4], r273_Stroke);
                return r327_ty(r327_x - r273_CorrectionOMidX * r327_sw, r327_y, r327_af);
            };
            r286_ArchTop.o = function () {
                var _r332_t6;
                var _r332_t7 = arguments;
                var _r332_t0 = [].slice.call(_r332_t7, 0);
                var _r332_t1 = [];
                var _r332_t2 = 0;
                while (_r332_t2 < _r332_t0.length) {
                    if (!(_r332_t0[_r332_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r332_t1.push(_r332_t0[_r332_t2]);
                    _r332_t2 = _r332_t2 + 1;
                }
                var _r332_t3 = _r332_t0;
                var _r332_t4 = _r332_t3.length;
                var _r332_t5 = 0;
                while (_r332_t5 < _r332_t4) {
                    _r332_t2 = _r332_t3[_r332_t5];
                    if (_r332_t2 && _r332_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'x')
                        r332_x = _r332_t2.right;
                    if (_r332_t2 && _r332_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'y')
                        r332_y = _r332_t2.right;
                    if (_r332_t2 && _r332_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'af')
                        r332_af = _r332_t2.right;
                    if (_r332_t2 && _r332_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'ty')
                        r332_ty = _r332_t2.right;
                    if (_r332_t2 && _r332_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'sw')
                        r332_sw = _r332_t2.right;
                    _r332_t5 = _r332_t5 + 1;
                }
                var r332_x = r1_fallback(r332_x, _r332_t1[0]);
                var r332_y = r1_fallback(r332_y, _r332_t1[1]);
                var r332_af = r1_fallback(r332_af, _r332_t1[2]);
                var r332_ty = r1_fallback(r332_ty, _r332_t1[3], r273_g4);
                var r332_sw = r1_fallback(r332_sw, _r332_t1[4], r273_Stroke);
                return r332_ty(r332_x - r273_CorrectionOMidX * r332_sw, r332_y - r273_O, r332_af);
            };
            r286_exports.ArchBot = r286_ArchBot = function () {
                var _r338_t6;
                var _r338_t7 = arguments;
                var _r338_t0 = [].slice.call(_r338_t7, 0);
                var _r338_t1 = [];
                var _r338_t2 = 0;
                while (_r338_t2 < _r338_t0.length) {
                    if (!(_r338_t0[_r338_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r338_t1.push(_r338_t0[_r338_t2]);
                    _r338_t2 = _r338_t2 + 1;
                }
                var _r338_t3 = _r338_t0;
                var _r338_t4 = _r338_t3.length;
                var _r338_t5 = 0;
                while (_r338_t5 < _r338_t4) {
                    _r338_t2 = _r338_t3[_r338_t5];
                    if (_r338_t2 && _r338_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r338_t2.left === 'x')
                        r338_x = _r338_t2.right;
                    if (_r338_t2 && _r338_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r338_t2.left === 'y')
                        r338_y = _r338_t2.right;
                    if (_r338_t2 && _r338_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r338_t2.left === 'af')
                        r338_af = _r338_t2.right;
                    if (_r338_t2 && _r338_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r338_t2.left === 'ty')
                        r338_ty = _r338_t2.right;
                    if (_r338_t2 && _r338_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r338_t2.left === 'sw')
                        r338_sw = _r338_t2.right;
                    _r338_t5 = _r338_t5 + 1;
                }
                var r338_x = r1_fallback(r338_x, _r338_t1[0]);
                var r338_y = r1_fallback(r338_y, _r338_t1[1]);
                var r338_af = r1_fallback(r338_af, _r338_t1[2]);
                var r338_ty = r1_fallback(r338_ty, _r338_t1[3], r273_g4);
                var r338_sw = r1_fallback(r338_sw, _r338_t1[4], r273_Stroke);
                return r338_ty(r338_x + r273_CorrectionOMidX * r338_sw, r338_y, r338_af);
            };
            r286_ArchBot.o = function () {
                var _r343_t6;
                var _r343_t7 = arguments;
                var _r343_t0 = [].slice.call(_r343_t7, 0);
                var _r343_t1 = [];
                var _r343_t2 = 0;
                while (_r343_t2 < _r343_t0.length) {
                    if (!(_r343_t0[_r343_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                        _r343_t1.push(_r343_t0[_r343_t2]);
                    _r343_t2 = _r343_t2 + 1;
                }
                var _r343_t3 = _r343_t0;
                var _r343_t4 = _r343_t3.length;
                var _r343_t5 = 0;
                while (_r343_t5 < _r343_t4) {
                    _r343_t2 = _r343_t3[_r343_t5];
                    if (_r343_t2 && _r343_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'x')
                        r343_x = _r343_t2.right;
                    if (_r343_t2 && _r343_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'y')
                        r343_y = _r343_t2.right;
                    if (_r343_t2 && _r343_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'af')
                        r343_af = _r343_t2.right;
                    if (_r343_t2 && _r343_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'ty')
                        r343_ty = _r343_t2.right;
                    if (_r343_t2 && _r343_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r343_t2.left === 'sw')
                        r343_sw = _r343_t2.right;
                    _r343_t5 = _r343_t5 + 1;
                }
                var r343_x = r1_fallback(r343_x, _r343_t1[0]);
                var r343_y = r1_fallback(r343_y, _r343_t1[1]);
                var r343_af = r1_fallback(r343_af, _r343_t1[2]);
                var r343_ty = r1_fallback(r343_ty, _r343_t1[3], r273_g4);
                var r343_sw = r1_fallback(r343_sw, _r343_t1[4], r273_Stroke);
                return r343_ty(r343_x + r273_CorrectionOMidX * r343_sw, r343_y + r273_O, r343_af);
            };
            return r286_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r349_t0, _r349_t1;
            return { 'Rect': r273_Rect };
        });
        var r273_Rect = function (r350_u, r350_d, r350_l, r350_r, r350_transformShiftOnly) {
            var _r350_t0, _r350_t1;
            return function () {
                var _r352_t1;
                var _r352_t0 = this;
                var r352_currentGlyph = _r352_t0;
                var r352_giz = r352_currentGlyph.gizmo;
                r352_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r356_mx1, r356_my1, _r356_t0, _r356_t2;
                    var _r356_t1 = this;
                    var r356_currentGlyph = _r356_t1;
                    var r356_my = (r350_u + r350_d) / 2;
                    var r356_mx = (r350_l + r350_r) / 2;
                    r356_currentGlyph.gizmo = r350_transformShiftOnly ? r1_Transform.Id() : r352_giz;
                    r356_currentGlyph.include(r273_xn$spirooutline$1aao(r273_corner(r350_l, r350_d), r273_corner(r350_l, r350_u), r273_corner(r350_r, r350_u), r273_corner(r350_r, r350_d)));
                    if (r350_transformShiftOnly) {
                        _r356_t0 = r352_giz.apply({
                            'x': r356_mx,
                            'y': r356_my
                        });
                        r356_mx1 = _r356_t0.x;
                        r356_my1 = _r356_t0.y;
                        r356_currentGlyph.include(r273_Translate(r356_mx1 - r356_mx, r356_my1 - r356_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r360_t0, _r360_t1;
            return { 'SquareAt': r273_SquareAt };
        });
        var r273_SquareAt = function (r361_x, r361_y, r361_r) {
            var _r361_t0, _r361_t1;
            return r273_Rect(r361_y + r361_r, r361_y - r361_r, r361_x - r361_r, r361_x + r361_r);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r363_t0, _r363_t1;
            return { 'VERY-FAR': r273_xn$VERYFAR$5sIl };
        });
        var r273_xn$VERYFAR$5sIl = r273_UPM * 16;
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r365_t0, _r365_t1;
            return { 'MaskAbove': r273_MaskAbove };
        });
        var r273_MaskAbove = function (r366_y) {
            var _r366_t0, _r366_t1;
            return r273_Rect(r273_xn$VERYFAR$5sIl, r366_y, -r273_xn$VERYFAR$5sIl, r273_xn$VERYFAR$5sIl);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r368_t0, _r368_t1;
            return { 'MaskBelow': r273_MaskBelow };
        });
        var r273_MaskBelow = function (r369_y) {
            var _r369_t0, _r369_t1;
            return r273_Rect(r369_y, -r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, r273_xn$VERYFAR$5sIl);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r371_t0, _r371_t1;
            return { 'MaskLeft': r273_MaskLeft };
        });
        var r273_MaskLeft = function (r372_x) {
            var _r372_t0, _r372_t1;
            return r273_Rect(r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, r372_x);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r374_t0, _r374_t1;
            return { 'MaskRight': r273_MaskRight };
        });
        var r273_MaskRight = function (r375_x) {
            var _r375_t0, _r375_t1;
            return r273_Rect(r273_xn$VERYFAR$5sIl, -r273_xn$VERYFAR$5sIl, r375_x, r273_xn$VERYFAR$5sIl);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r377_t0, _r377_t1;
            return { 'MaskAboveLine': r273_MaskAboveLine };
        });
        var r273_MaskAboveLine = function (r378_x1, r378_y1, r378_x2, r378_y2) {
            var _r378_t0, _r378_t1;
            return r273_xn$spirooutline$1aao(r273_corner(r378_x1, +r273_xn$VERYFAR$5sIl), r273_corner(r378_x1, r378_y1), r273_corner(r378_x2, r378_y2), r273_corner(r378_x2, +r273_xn$VERYFAR$5sIl));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r380_t0, _r380_t1;
            return { 'MaskBelowLine': r273_MaskBelowLine };
        });
        var r273_MaskBelowLine = function (r381_x1, r381_y1, r381_x2, r381_y2) {
            var _r381_t0, _r381_t1;
            return r273_xn$spirooutline$1aao(r273_corner(r381_x1, -r273_xn$VERYFAR$5sIl), r273_corner(r381_x1, r381_y1), r273_corner(r381_x2, r381_y2), r273_corner(r381_x2, -r273_xn$VERYFAR$5sIl));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r383_t0, _r383_t1;
            return { 'MaskLeftLine': r273_MaskLeftLine };
        });
        var r273_MaskLeftLine = function (r384_x1, r384_y1, r384_x2, r384_y2) {
            var _r384_t0, _r384_t1;
            return r273_xn$spirooutline$1aao(r273_corner(-r273_xn$VERYFAR$5sIl, r384_y1), r273_corner(r384_x1, r384_y1), r273_corner(r384_x2, r384_y2), r273_corner(-r273_xn$VERYFAR$5sIl, r384_y2));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r386_t0, _r386_t1;
            return { 'MaskRightLine': r273_MaskRightLine };
        });
        var r273_MaskRightLine = function (r387_x1, r387_y1, r387_x2, r387_y2) {
            var _r387_t0, _r387_t1;
            return r273_xn$spirooutline$1aao(r273_corner(+r273_xn$VERYFAR$5sIl, r387_y1), r273_corner(r387_x1, r387_y1), r273_corner(r387_x2, r387_y2), r273_corner(+r273_xn$VERYFAR$5sIl, r387_y2));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r389_t0, _r389_t1;
            return { 'HalfRectTriangle': r273_HalfRectTriangle };
        });
        var r273_HalfRectTriangle = function (r390_x1, r390_y1, r390_x2, r390_y2) {
            var _r390_t0, _r390_t1;
            return r273_xn$spirooutline$1aao(r273_corner(r390_x1, r390_y1), r273_corner(r390_x2, r390_y2), r273_corner(r390_x2, r390_y1));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r392_t0, _r392_t1;
            return { 'Ring': r273_Ring };
        });
        var r273_Ring = function (r393_u, r393_d, r393_l, r393_r, r393_transformShiftOnly) {
            var _r393_t0, _r393_t1;
            return function () {
                var _r395_t1;
                var _r395_t0 = this;
                var r395_currentGlyph = _r395_t0;
                var r395_giz = r395_currentGlyph.gizmo;
                r395_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r399_mx1, r399_my1, _r399_t0, _r399_t2;
                    var _r399_t1 = this;
                    var r399_currentGlyph = _r399_t1;
                    var r399_my = (r393_u + r393_d) / 2;
                    var r399_mx = (r393_l + r393_r) / 2;
                    r399_currentGlyph.gizmo = r393_transformShiftOnly ? r1_Transform.Id() : r395_giz;
                    r399_currentGlyph.include(r273_xn$spirooutline$1aao(r273_g4(r399_mx, r393_d), r273_archv(), r273_g4(r393_l, r399_my), r273_arcvh(), r273_g4(r399_mx, r393_u), r273_archv(), r273_g4(r393_r, r399_my), r273_arcvh(), r273_close()));
                    if (r393_transformShiftOnly) {
                        _r399_t0 = r395_giz.apply({
                            'x': r399_mx,
                            'y': r399_my
                        });
                        r399_mx1 = _r399_t0.x;
                        r399_my1 = _r399_t0.y;
                        r399_currentGlyph.include(r273_Translate(r399_mx1 - r399_mx, r399_my1 - r399_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r403_t0, _r403_t1;
            return { 'RingAt': r273_RingAt };
        });
        var r273_RingAt = function (r404_x, r404_y, r404_r) {
            var _r404_t0, _r404_t1;
            return r273_Ring(r404_y + r404_r, r404_y - r404_r, r404_x - r404_r, r404_x + r404_r);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r406_t0, _r406_t1;
            return { 'DotAt': r273_DotAt };
        });
        var r273_DotAt = function (r407_x, r407_y, r407_r) {
            var _r407_t0, _r407_t1;
            return r273_Ring(r407_y + r407_r, r407_y - r407_r, r407_x - r407_r, r407_x + r407_r, true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r409_t0, _r409_t1;
            return { 'RingStroke': r273_RingStroke };
        });
        var r273_RingStroke = function (r410_u, r410_d, r410_l, r410_r, r410_s, r410_transformShiftOnly) {
            var _r410_t0, _r410_t1;
            return function () {
                var _r412_t1;
                var _r412_t0 = this;
                var r412_currentGlyph = _r412_t0;
                var r412_giz = r412_currentGlyph.gizmo;
                r412_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r416_mx1, r416_my1, _r416_t0, _r416_t2;
                    var _r416_t1 = this;
                    var r416_currentGlyph = _r416_t1;
                    var r416_my = (r410_u + r410_d) / 2;
                    var r416_mx = (r410_l + r410_r) / 2;
                    r416_currentGlyph.gizmo = r410_transformShiftOnly ? r1_Transform.Id() : r412_giz;
                    r416_currentGlyph.include(r273_dispiro(function () {
                        var _r418_t1;
                        var _r418_t0 = this;
                        return _r418_t0.gizmo = r416_currentGlyph.gizmo;
                    }, r273_widths.rhs(r1_fallback(r410_s, r273_Stroke)), r273_g4(r416_mx, r410_d, r273_heading(r273_Leftward)), r273_archv(), r273_g4(r410_l, r416_my), r273_arcvh(), r273_g4(r416_mx, r410_u, r273_heading(r273_Rightward)), r273_archv(), r273_g4(r410_r, r416_my), r273_arcvh(), r273_close()));
                    if (r410_transformShiftOnly) {
                        _r416_t0 = r412_giz.apply({
                            'x': r416_mx,
                            'y': r416_my
                        });
                        r416_mx1 = _r416_t0.x;
                        r416_my1 = _r416_t0.y;
                        r416_currentGlyph.include(r273_Translate(r416_mx1 - r416_mx, r416_my1 - r416_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r421_t0, _r421_t1;
            return { 'RingStrokeAt': r273_RingStrokeAt };
        });
        var r273_RingStrokeAt = function (r422_x, r422_y, r422_r, r422_s) {
            var _r422_t0, _r422_t1;
            return r273_RingStroke(r422_y + r422_r, r422_y - r422_r, r422_x - r422_r, r422_x + r422_r, r422_s);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r424_t0, _r424_t1;
            return { 'DotStrokeAt': r273_DotStrokeAt };
        });
        var r273_DotStrokeAt = function (r425_x, r425_y, r425_r, r425_s) {
            var _r425_t0, _r425_t1;
            return r273_RingStroke(r425_y + r425_r, r425_y - r425_r, r425_x - r425_r, r425_x + r425_r, r425_s, true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r427_t0, _r427_t1;
            return { 'CircleRing': r273_CircleRing };
        });
        var r273_CircleRing = function (r428_u, r428_d, r428_l, r428_r, r428_transformShiftOnly) {
            var _r428_t0, _r428_t1;
            return function () {
                var _r430_t1;
                var _r430_t0 = this;
                var r430_currentGlyph = _r430_t0;
                var r430_giz = r430_currentGlyph.gizmo;
                r430_currentGlyph.include(r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r434_mx1, r434_my1, _r434_t0, _r434_t2;
                    var _r434_t1 = this;
                    var r434_currentGlyph = _r434_t1;
                    var r434_my = (r428_u + r428_d) / 2;
                    var r434_mx = (r428_l + r428_r) / 2;
                    r434_currentGlyph.gizmo = r428_transformShiftOnly ? r1_Transform.Id() : r430_giz;
                    r434_currentGlyph.include(r273_xn$spirooutline$1aao(function () {
                        var _r436_t1;
                        var _r436_t0 = this;
                        return _r436_t0.gizmo = r434_currentGlyph.gizmo;
                    }, r273_g4(r434_mx, r428_d), r273_archv(32, 2), r273_g4(r428_l, r434_my), r273_arcvh(32, 2), r273_g4(r434_mx, r428_u), r273_archv(32, 2), r273_g4(r428_r, r434_my), r273_arcvh(32, 2), r273_close()));
                    if (r428_transformShiftOnly) {
                        _r434_t0 = r430_giz.apply({
                            'x': r434_mx,
                            'y': r434_my
                        });
                        r434_mx1 = _r434_t0.x;
                        r434_my1 = _r434_t0.y;
                        r434_currentGlyph.include(r273_Translate(r434_mx1 - r434_mx, r434_my1 - r434_my));
                    }
                    return void 0;
                }));
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r439_t0, _r439_t1;
            return { 'CircleRingAt': r273_CircleRingAt };
        });
        var r273_CircleRingAt = function (r440_x, r440_y, r440_r) {
            var _r440_t0, _r440_t1;
            return r273_CircleRing(r440_y + r440_r, r440_y - r440_r, r440_x - r440_r, r440_x + r440_r);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r442_t0, _r442_t1;
            return { 'CircleDotAt': r273_CircleDotAt };
        });
        var r273_CircleDotAt = function (r443_x, r443_y, r443_r) {
            var _r443_t0, _r443_t1;
            return r273_CircleRing(r443_y + r443_r, r443_y - r443_r, r443_x - r443_r, r443_x + r443_r, true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r445_t0, _r445_t1;
            return { 'RoundStrokeTerminalAt': r273_RoundStrokeTerminalAt };
        });
        var r273_RoundStrokeTerminalAt = function (r446_x, r446_y, r446_r) {
            var _r446_t0, _r446_t1;
            return r273_CircleRing(r446_y + r446_r, r446_y - r446_r, r446_x - r273_HSwToV(r446_r), r446_x + r273_HSwToV(r446_r), true);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r448_t0, _r448_t1;
            return { 'OShapeT': r273_OShapeT };
        });
        var r273_OShapeT = function (r449_sink, r449_u, r449_d, r449_l, r449_r, r449__width, r449__ada, r449__adb) {
            var r449_ymiddlea, r449_ymiddleb, _r449_t0, _r449_t1, _r449_t2;
            var r449_middle = (r449_l + r449_r) / 2;
            var r449_width = r1_fallback(r449__width, r273_Stroke);
            var r449_ada = r1_fallback(r449__ada, r273_SmallArchDepthA);
            var r449_adb = r1_fallback(r449__adb, r273_SmallArchDepthB);
            var r449_mc = r273_CorrectionOMidX * r449_width;
            if (r449_u - r449_d > r449_ada + r449_adb)
                return r449_sink(r273_widths(r449_width, 0), r273_g4(r449_middle - r449_mc, r449_u - r273_O), r273_archv(), r273_flat(r449_l + r273_OX, r449_u - r449_ada), r273_curl(r449_l + r273_OX, r449_d + r449_adb), r273_arcvh(), r273_g4(r449_middle + r449_mc, r449_d + r273_O), r273_archv(), r273_flat(r449_r - r273_OX, r449_d + r449_ada), r273_curl(r449_r - r273_OX, r449_u - r449_adb), r273_arcvh(), r273_close());
            else {
                r449_ymiddlea = r1_mix(r449_d, r449_u, r449_adb / (r449_ada + r449_adb));
                r449_ymiddleb = r1_mix(r449_d, r449_u, r449_ada / (r449_ada + r449_adb));
                return r449_sink(r273_widths(r449_width, 0), r273_g4(r449_middle - r449_mc, r449_u - r273_O), r273_archv(), r273_g4(r449_l + r273_OX, r449_ymiddlea), r273_arcvh(), r273_g4(r449_middle + r449_mc, r449_d + r273_O), r273_archv(), r273_g4(r449_r - r273_OX, r449_ymiddleb), r273_arcvh(), r273_close());
            }
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r451_t0, _r451_t1;
            return { 'OShape': r273_OShape };
        });
        var r273_OShape = function (r452_u, r452_d, r452_l, r452_r, r452__width, r452__ada, r452__adb) {
            var _r452_t0, _r452_t1;
            return r273_OShapeT(r273_dispiro, r452_u, r452_d, r452_l, r452_r, r452__width, r452__ada, r452__adb);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r454_t0, _r454_t1;
            return { 'OShapeOutline': r273_OShapeOutline };
        });
        var r273_OShapeOutline = function (r455_u, r455_d, r455_l, r455_r, r455__width, r455__ada, r455__adb) {
            var _r455_t0, _r455_t1;
            return r273_OShapeT(r273_xn$spirooutline$1aao, r455_u, r455_d, r455_l, r455_r, r455__width, r455__ada, r455__adb);
        };
        r273_OShape.NoOvershoot = function (r456_u, r456_d, r456_l, r456_r, r456__width, r456__ada, r456__adb) {
            var _r456_t0, _r456_t1;
            return r273_OShape(r456_u + r273_O, r456_d - r273_O, r456_l - r273_OX, r456_r + r273_OX, r456__width, r456__ada, r456__adb);
        };
        r273_OShapeOutline.NoOvershoot = function (r457_u, r457_d, r457_l, r457_r, r457__width, r457__ada, r457__adb) {
            var _r457_t0, _r457_t1;
            return r273_OShapeOutline(r457_u + r273_O, r457_d - r273_O, r457_l - r273_OX, r457_r + r273_OX, r457__width, r457__ada, r457__adb);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r459_t0, _r459_t1;
            return { 'OShapeFlatTB': r273_OShapeFlatTB };
        });
        var r273_OShapeFlatTB = function (r460_u, r460_d, r460_l, r460_r, r460__width, r460__ada, r460__adb, r460_gap) {
            var _r460_t0, _r460_t1;
            return function () {
                var r462_ymiddlea, r462_ymiddleb, _r462_t1;
                var _r462_t0 = this;
                var r462_currentGlyph = _r462_t0;
                var r462_middle = (r460_l + r460_r) / 2;
                var r462_width = r1_fallback(r460__width, r273_Stroke);
                var r462_ada = r1_fallback(r460__ada, r273_SmallArchDepthA);
                var r462_adb = r1_fallback(r460__adb, r273_SmallArchDepthB);
                var r462_mc = r273_CorrectionOMidX * r462_width;
                if (r460_u - r460_d > r462_ada + r462_adb)
                    r462_currentGlyph.include(r273_dispiro(r273_flat(r462_middle - r462_mc, r460_u - r273_O, r273_widths.lhs(r462_width)), r273_curl(r462_middle - r462_mc - r460_gap / 2, r460_u - r273_O), r273_archv(), r273_flat(r460_l + r273_OX, r460_u - r462_ada), r273_curl(r460_l + r273_OX, r460_d + r462_adb), r273_arcvh(), r273_flat(r462_middle + r462_mc - r460_gap / 2, r460_d + r273_O), r273_curl(r462_middle + r462_mc + r460_gap / 2, r460_d + r273_O), r273_archv(), r273_flat(r460_r - r273_OX, r460_d + r462_ada), r273_curl(r460_r - r273_OX, r460_u - r462_adb), r273_arcvh(), r273_flat(r462_middle - r462_mc + r460_gap / 2, r460_u - r273_O), r273_curl(r462_middle - r462_mc, r460_u - r273_O)));
                else {
                    r462_ymiddlea = r1_mix(r460_d, r460_u, r462_adb / (r462_ada + r462_adb));
                    r462_ymiddleb = r1_mix(r460_d, r460_u, r462_ada / (r462_ada + r462_adb));
                    r462_currentGlyph.include(r273_dispiro(r273_flat(r462_middle - r462_mc, r460_u - r273_O, r273_widths.lhs(r462_width)), r273_curl(r462_middle - r462_mc - r460_gap / 2, r460_u - r273_O), r273_archv(), r273_g4(r460_l + r273_OX, r462_ymiddlea), r273_arcvh(), r273_flat(r462_middle + r462_mc - r460_gap / 2, r460_d + r273_O), r273_curl(r462_middle + r462_mc + r460_gap / 2, r460_d + r273_O), r273_archv(), r273_g4(r460_r - r273_OX, r462_ymiddleb), r273_arcvh(), r273_flat(r462_middle - r462_mc + r460_gap / 2, r460_u - r273_O), r273_curl(r462_middle - r462_mc, r460_u - r273_O)));
                }
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r466_t0, _r466_t1;
            return { 'HSerif': r273_HSerif };
        });
        var r273_HSerif = function () {
            var r469_lt, r469_lb, r469_rt, r469_rb, r469_mt, r469_mtAsymmetric, r469_mb, r469_mbAsymmetric;
            var r469_exports = {};
            r469_exports.lt = r469_lt = function (r477_x, r477_y, r477_length, r477__sw, r477__swRef) {
                var _r477_t0, _r477_t1;
                return function () {
                    var _r479_t1;
                    var _r479_t0 = this;
                    var r479_currentGlyph = _r479_t0;
                    var r479_sw = r1_fallback(r477__sw, r273_Stroke);
                    var r479_swRef = r1_fallback(r477__swRef, r479_sw);
                    r479_currentGlyph.include(r273_dispiro(r273_flat(r477_x + r273_HSwToV(0.5 * r479_swRef), r477_y, r273_widths.heading(r479_sw, 0, r273_Leftward)), r273_curl(r477_x - r477_length - r273_TanSlope * (r479_sw * r273_DesignParameters.serifShiftX), r477_y)));
                    return void 0;
                };
            };
            r469_exports.lb = r469_lb = function (r482_x, r482_y, r482_length, r482__sw, r482__swRef) {
                var _r482_t0, _r482_t1;
                return function () {
                    var _r484_t1;
                    var _r484_t0 = this;
                    var r484_currentGlyph = _r484_t0;
                    var r484_sw = r1_fallback(r482__sw, r273_Stroke);
                    var r484_swRef = r1_fallback(r482__swRef, r484_sw);
                    r484_currentGlyph.include(r273_dispiro(r273_flat(r482_x + r273_HSwToV(0.5 * r484_swRef), r482_y, r273_widths.heading(0, r484_sw, r273_Leftward)), r273_curl(r482_x - r482_length + r273_TanSlope * (r484_sw * r273_DesignParameters.serifShiftX), r482_y)));
                    return void 0;
                };
            };
            r469_exports.rt = r469_rt = function (r487_x, r487_y, r487_length, r487__sw, r487__swRef) {
                var _r487_t0, _r487_t1;
                return function () {
                    var _r489_t1;
                    var _r489_t0 = this;
                    var r489_currentGlyph = _r489_t0;
                    var r489_sw = r1_fallback(r487__sw, r273_Stroke);
                    var r489_swRef = r1_fallback(r487__swRef, r489_sw);
                    r489_currentGlyph.include(r273_dispiro(r273_flat(r487_x - r273_HSwToV(0.5 * r489_swRef), r487_y, r273_widths.heading(0, r489_sw, r273_Rightward)), r273_curl(r487_x + r487_length - r273_TanSlope * (r489_sw * r273_DesignParameters.serifShiftX), r487_y)));
                    return void 0;
                };
            };
            r469_exports.rb = r469_rb = function (r492_x, r492_y, r492_length, r492__sw, r492__swRef) {
                var _r492_t0, _r492_t1;
                return function () {
                    var _r494_t1;
                    var _r494_t0 = this;
                    var r494_currentGlyph = _r494_t0;
                    var r494_sw = r1_fallback(r492__sw, r273_Stroke);
                    var r494_swRef = r1_fallback(r492__swRef, r494_sw);
                    r494_currentGlyph.include(r273_dispiro(r273_flat(r492_x - r273_HSwToV(0.5 * r494_swRef), r492_y, r273_widths.heading(r494_sw, 0, r273_Rightward)), r273_curl(r492_x + r492_length + r273_TanSlope * (r494_sw * r273_DesignParameters.serifShiftX), r492_y)));
                    return void 0;
                };
            };
            r469_exports.mt = r469_mt = function (r497_x, r497_y, r497_length, r497__sw) {
                var _r497_t0, _r497_t1;
                return r469_mtAsymmetric(r497_x, r497_y, r497_length, r497_length, r497__sw);
            };
            r469_exports.mtAsymmetric = r469_mtAsymmetric = function (r499_x, r499_y, r499_l, r499_r, r499__sw) {
                var _r499_t0, _r499_t1;
                var r499_sw = r1_fallback(r499__sw, r273_Stroke);
                return r273_dispiro(r273_flat(r499_x + r499_r - r273_TanSlope * (r499_sw * r273_DesignParameters.serifShiftX), r499_y, r273_widths.lhs(r499_sw)), r273_curl(r499_x - r499_l - r273_TanSlope * (r499_sw * r273_DesignParameters.serifShiftX), r499_y));
            };
            r469_exports.mb = r469_mb = function (r501_x, r501_y, r501_length, r501__sw) {
                var _r501_t0, _r501_t1;
                return r469_mbAsymmetric(r501_x, r501_y, r501_length, r501_length, r501__sw);
            };
            r469_exports.mbAsymmetric = r469_mbAsymmetric = function (r503_x, r503_y, r503_l, r503_r, r503__sw) {
                var _r503_t0, _r503_t1;
                var r503_sw = r1_fallback(r503__sw, r273_Stroke);
                return r273_dispiro(r273_flat(r503_x + r503_r + r273_TanSlope * (r503_sw * r273_DesignParameters.serifShiftX), r503_y, r273_widths.rhs(r503_sw)), r273_curl(r503_x - r503_l + r273_TanSlope * (r503_sw * r273_DesignParameters.serifShiftX), r503_y));
            };
            return r469_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r505_t0, _r505_t1;
            return { 'VSerif': r273_VSerif };
        });
        var r273_VSerif = function () {
            var r508_dr, r508_ur, r508_dl, r508_ul;
            var r508_exports = {};
            r508_exports.dr = r508_dr = function (r516_x, r516_y, r516_length, r516_sw) {
                var _r516_t0, _r516_t1;
                return function () {
                    var _r518_t1;
                    var _r518_t0 = this;
                    var r518_currentGlyph = _r518_t0;
                    r518_currentGlyph.include(r273_dispiro(r273_widths.rhs(r1_fallback(r516_sw, r273_VJutStroke)), r273_flat(r516_x, r516_y, r273_heading(r273_Downward)), r273_curl(r516_x, r516_y - r516_length, r273_heading(r273_Downward))));
                    return void 0;
                };
            };
            r508_exports.ur = r508_ur = function (r521_x, r521_y, r521_length, r521_sw) {
                var _r521_t0, _r521_t1;
                return function () {
                    var _r523_t1;
                    var _r523_t0 = this;
                    var r523_currentGlyph = _r523_t0;
                    r523_currentGlyph.include(r273_dispiro(r273_widths.lhs(r1_fallback(r521_sw, r273_VJutStroke)), r273_flat(r521_x, r521_y, r273_heading(r273_Upward)), r273_curl(r521_x, r521_y + r521_length, r273_heading(r273_Upward))));
                    return void 0;
                };
            };
            r508_exports.dl = r508_dl = function (r526_x, r526_y, r526_length, r526_sw) {
                var _r526_t0, _r526_t1;
                return function () {
                    var _r528_t1;
                    var _r528_t0 = this;
                    var r528_currentGlyph = _r528_t0;
                    r528_currentGlyph.include(r273_dispiro(r273_widths.lhs(r1_fallback(r526_sw, r273_VJutStroke)), r273_flat(r526_x, r526_y, r273_heading(r273_Downward)), r273_curl(r526_x, r526_y - r526_length, r273_heading(r273_Downward))));
                    return void 0;
                };
            };
            r508_exports.ul = r508_ul = function (r531_x, r531_y, r531_length, r531_sw) {
                var _r531_t0, _r531_t1;
                return function () {
                    var _r533_t1;
                    var _r533_t0 = this;
                    var r533_currentGlyph = _r533_t0;
                    r533_currentGlyph.include(r273_dispiro(r273_widths.rhs(r1_fallback(r531_sw, r273_VJutStroke)), r273_flat(r531_x, r531_y, r273_heading(r273_Upward)), r273_curl(r531_x, r531_y + r531_length, r273_heading(r273_Upward))));
                    return void 0;
                };
            };
            return r508_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r536_t0, _r536_t1;
            return { 'NeedSlab': r273_NeedSlab };
        });
        var r273_NeedSlab = function (r537_level, r537_p) {
            var _r537_t0, _r537_t1;
            return r537_level ? r537_p : function () {
                var _r539_t1;
                var _r539_t0 = this;
                var r539_currentGlyph = _r539_t0;
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r541_t0, _r541_t1;
            return { 'NeedNotItalic': r273_NeedNotItalic };
        });
        var r273_NeedNotItalic = function (r542_p) {
            var _r542_t0, _r542_t1;
            return r273_para.isItalic ? function () {
                var _r544_t1;
                var _r544_t0 = this;
                var r544_currentGlyph = _r544_t0;
                return void 0;
            } : r542_p;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r546_t0, _r546_t1;
            return { 'DiagCor': r273_DiagCor };
        });
        var r273_DiagCor = function (r547_dy, r547_dx, r547_dyt, r547_dxt) {
            var _r547_t0, _r547_t1;
            var r547_ay = Math.max(0, Math.abs(r547_dy) - r1_fallback(r547_dyt, 0));
            var r547_ax = Math.max(0, Math.abs(r547_dx) - r1_fallback(r547_dxt, 0));
            return Math.hypot(r547_ay, r547_ax) / r547_ay;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r549_t0, _r549_t1;
            return { 'DiagCorDs': r273_DiagCorDs };
        });
        var r273_DiagCorDs = function (r550_dy, r550_dx, r550_ds) {
            var _r550_t0, _r550_t1;
            var r550_kDiag = r273_DiagCor(r550_dy, r550_dx);
            var r550_n = 0;
            while (r550_n < 4) {
                r550_kDiag = r273_DiagCor(r550_dy, r550_dx - r550_ds * r550_kDiag);
                r550_n = r550_n + 1;
            }
            return r550_kDiag;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r552_t0, _r552_t1;
            return { 'HBar': r273_HBar };
        });
        var r273_HBar = function () {
            var r555_m, r555_t, r555_b;
            var r555_exports = {};
            r555_exports.m = r555_m = function (r563_xleft, r563_xright, r563_y, r563__fine) {
                var _r563_t0, _r563_t1;
                return r273_dispiro(r273_widths.center(r1_fallback(r563__fine, r273_Stroke)), r273_flat(r563_xleft, r563_y, r273_heading(r273_Rightward)), r273_curl(r563_xright, r563_y, r273_heading(r273_Rightward)));
            };
            r555_exports.t = r555_t = function (r565_xl, r565_xr, r565_y, r565__fine) {
                var _r565_t0, _r565_t1;
                return r555_m(r565_xl, r565_xr, r565_y - r1_fallback(r565__fine, r273_Stroke) * 0.5, r565__fine);
            };
            r555_exports.b = r555_b = function (r567_xl, r567_xr, r567_y, r567__fine) {
                var _r567_t0, _r567_t1;
                return r555_m(r567_xl, r567_xr, r567_y + r1_fallback(r567__fine, r273_Stroke) * 0.5, r567__fine);
            };
            return r555_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r569_t0, _r569_t1;
            return { 'VBar': r273_VBar };
        });
        var r273_VBar = function () {
            var r572_m, r572_l, r572_r;
            var r572_exports = {};
            r572_exports.m = r572_m = function (r580_x, r580_ydown, r580_yup, r580__sw) {
                var _r580_t0, _r580_t1;
                var r580_sw = r1_fallback(r580__sw, r273_Stroke);
                return r273_dispiro(r273_widths.center(r580_sw), r273_flat(r580_x, r580_ydown, r273_heading(r580_ydown < r580_yup ? r273_Upward : r273_Downward)), r273_curl(r580_x, r580_yup, r273_heading(r580_ydown < r580_yup ? r273_Upward : r273_Downward)));
            };
            r572_exports.l = r572_l = function (r582_x, r582_yd, r582_yu, r582__sw) {
                var _r582_t0, _r582_t1;
                return r572_m(r582_x + r1_fallback(r582__sw, r273_Stroke) * 0.5 * r273_HVContrast, r582_yd, r582_yu, r582__sw);
            };
            r572_exports.r = r572_r = function (r584_x, r584_yd, r584_yu, r584__sw) {
                var _r584_t0, _r584_t1;
                return r572_m(r584_x - r1_fallback(r584__sw, r273_Stroke) * 0.5 * r273_HVContrast, r584_yd, r584_yu, r584__sw);
            };
            return r572_exports;
        }();
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r586_t0, _r586_t1;
            return { 'HOverlayBar': r273_HOverlayBar };
        });
        var r273_HOverlayBar = function (r587_xleft, r587_xright, r587_y, r587_s) {
            var _r587_t0, _r587_t1;
            return r273_dispiro(r273_widths.center(r1_fallback(r587_s, r273_OverlayStroke)), r273_flat(r587_xleft, r587_y), r273_curl(r587_xright, r587_y));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r589_t0, _r589_t1;
            return { 'HCrossBar': r273_HCrossBar };
        });
        var r273_HCrossBar = function (r590_xl, r590_xr, r590_y, r590_s) {
            var _r590_t0, _r590_t1;
            return r273_dispiro(r273_widths.center(r1_fallback(r590_s, r273_OverlayStroke)), r273_flat(r590_xl, r590_y), r273_curl(r590_xr, r590_y));
        };
        r273_HCrossBar.top = function (r591_xl, r591_xr, r591_y, r591__s) {
            var _r591_t0, _r591_t1;
            var r591_s = r1_fallback(r591__s, r273_Stroke);
            return r273_HCrossBar(r591_xl - 0 * r591_s * r273_TanSlope, r591_xr - 0 * r591_s * r273_TanSlope, r591_y - 0.5 * r591_s, r591_s);
        };
        r273_HCrossBar.bottom = function (r592_xl, r592_xr, r592_y, r592__s) {
            var _r592_t0, _r592_t1;
            var r592_s = r1_fallback(r592__s, r273_Stroke);
            return r273_HCrossBar(r592_xl + 0 * r592_s * r273_TanSlope, r592_xr + 0 * r592_s * r273_TanSlope, r592_y + 0.5 * r592_s, r592_s);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r594_t0, _r594_t1;
            return { 'FlatSlashShape': r273_FlatSlashShape };
        });
        var r273_FlatSlashShape = function (r595_middlex, r595_middle, r595_fine, r595_kx, r595_ky) {
            var _r595_t0, _r595_t1;
            return function () {
                var _r597_t1;
                var _r597_t0 = this;
                var r597_currentGlyph = _r597_t0;
                r597_currentGlyph.include(r273_dispiro(r273_flat(r595_middlex - r273_LongJut * r1_fallback(r595_kx, 0.8), r595_middle - r273_LongJut * r1_fallback(r595_ky, 0.4), r273_widths.center(2 * r595_fine)), r273_curl(r595_middlex + r273_LongJut * r1_fallback(r595_kx, 0.8), r595_middle + r273_LongJut * r1_fallback(r595_ky, 0.4))));
                return void 0;
            };
        };
        var r273_determineMixR = function (r599_w, r599_v, r599_u, r599_sw, r599_swash) {
            var r599_idepth, r599_iwidth, r599_adjust, _r599_t0, _r599_t1;
            if (!r599_swash && r599_w < r599_v)
                return 1 - r273_determineMixR(r599_v, r599_w, r599_u, r599_sw, r599_swash);
            var r599_superness = r273_DesignParameters.superness;
            var r599_r = r599_w <= r599_v ? 0.5 : true ? 1 / (Math.pow(1 - Math.pow(1 - r599_v / r599_w, r599_superness), 1 / r599_superness) + 1) : void 0;
            if (r599_swash) {
                r599_idepth = r599_w - r599_sw;
                r599_iwidth = r599_u * r599_r - r599_sw;
                if (r599_iwidth > 0 && r599_idepth > 0 && r599_iwidth / r599_idepth >= 2) {
                    r599_adjust = r1_clamp(0.975, 1, 1 - (r599_iwidth / r599_idepth - 2) * 0.0125);
                    r599_r = r599_r * r599_adjust;
                }
            } else
                r599_r = 0.5 + (r599_r - 0.5) * (r599_v + r599_w) / (r599_u * 2);
            if (r599_r < 0.5)
                r599_r = 0.5;
            return r599_r;
        };
        var r273_nHookSegments = 12;
        var r273_HookShape = function (r600_toStraight, r600_toFinish, r600_isStart, r600_args) {
            var r600_s, r600_fraction, r600_mixRatioAdjust, r600_fractionAfter, r600_myfinal, _r600_t3, _r600_t4, _r600_t5, _r600_tag6, _r600_t7;
            var _r600_t0 = r600_args;
            var r600_y = _r600_t0.y;
            var r600_tight = _r600_t0.tight;
            var r600_sw = _r600_t0.sw;
            var r600_swItalicAdj = _r600_t0.swItalicAdj;
            var r600_noAdjTerminalY = _r600_t0.noAdjTerminalY;
            var r600_turnSlope = _r600_t0.turnSlope;
            var r600_atBottom = r600_toStraight.y > r600_y;
            var r600_ltr = r600_isStart ? r600_toFinish.x < r600_toStraight.x : r600_toFinish.x > r600_toStraight.x;
            var r600_dtu = r600_isStart ? r600_y > r600_toFinish.y : r600_y < r600_toFinish.y;
            var r600_doSwash = !r600_tight && r273_para.isItalic && r600_ltr && r600_atBottom && !r600_isStart;
            var r600_superness = r600_tight ? r273_DesignParameters.tightHookSuperness : r273_DesignParameters.superness;
            r600_toFinish.x = r600_toFinish.x + r273_OXHook * (r600_ltr ? -1 : 1) * (r600_isStart ? -1 : 1);
            if (r600_doSwash) {
                r600_toFinish.x = r600_toFinish.x + r273_TailAdjX * r273_TanSlope;
                r600_toFinish.y = r600_toFinish.y - r273_TailAdjY * r273_TanSlope;
            }
            var r600_w = Math.abs(r600_toStraight.y - r600_y);
            var r600_v = Math.abs(r600_toFinish.y - r600_y);
            var r600_u = Math.abs(r600_toFinish.x - r600_toStraight.x);
            var r600_mixRatio = r273_determineMixR(r600_w, r600_v, r600_u, r600_sw, r600_doSwash);
            var r600_mxSwMultiplier = (r600_tight && r600_tight.shift ? r600_tight.shift : 1 - (r600_tight || 0)) * (r600_atBottom ? 1 : -1);
            var r600_mx = r1_mix(r600_toStraight.x, r600_toFinish.x, r600_mixRatio) + r600_mxSwMultiplier * r273_CorrectionOMidX * r600_swItalicAdj;
            var r600_keyKnot = r273_g4[r600_ltr ? 'right' : 'left'].mid(r600_mx, r600_y, r600_tight ? (r600_s = r600_ltr ? r273_Rightward : r273_Leftward, r273_heading({
                'x': r600_s.x * r1_fallback(r600_tight.skew, 1),
                'y': r600_s.y
            })) : r600_turnSlope ? (r600_s = r600_ltr ? r273_Rightward : r273_Leftward, r273_heading({
                'x': r600_turnSlope,
                'y': r600_s.y
            })) : true ? void 0 : void 0);
            (function () {
                var r602_rad = Math.min(r600_w, r600_mixRatio * r600_u);
                var r602_skew0 = r1_clamp(0, r600_w, r600_w - r600_v) / r602_rad + (r1_clamp(1, 1.5, r600_mixRatio * r600_u / r600_w) - 1) * 0.5;
                var r602_depth = r600_v + r602_skew0 * r600_sw - r600_sw;
                var r602_shallowLimit = r600_sw / 2;
                var r602_skew = r1_clamp(0, 1 / 2, r602_skew0 + r1_clamp(0, r602_shallowLimit, r602_shallowLimit - r602_depth) / r602_rad);
                var r602_faf = r600_toFinish.af;
                r600_toFinish.af = function () {
                    var _r603_t0 = this;
                    var _r603_t1 = arguments;
                    if (r602_faf)
                        r602_faf.apply(_r603_t0, _r603_t1);
                    return _r603_t0.headsTo ? _r603_t0.headsTo(r600_doSwash ? {
                        'x': r273_Contrast / Math.sqrt(1 + r602_skew * r602_skew) * (r600_dtu ? -1 : 1),
                        'y': r602_skew / Math.sqrt(1 + r602_skew * r602_skew) * (r600_ltr ? 1 : -1)
                    } : {
                        'x': r273_Contrast * (r600_dtu ? -1 : 1),
                        'y': 0
                    }) : void 0;
                };
                return !r600_noAdjTerminalY && !r600_doSwash ? r600_toFinish.y = r600_toFinish.y + r602_skew * r600_sw * (r600_y > r600_toFinish.y ? -1 : +1) : void 0;
            }());
            var r600_segBefore = [];
            var r600_segAfter = [];
            var _r600_t1 = 1;
            var _r600_t2 = r273_nHookSegments;
            var r600_j = _r600_t1;
            while (r600_j < _r600_t2) {
                r600_fraction = r600_j / r273_nHookSegments;
                r600_mixRatioAdjust = Math.max(1 / 2, 1 / 2 + (r600_doSwash ? 1 : r600_tight ? 0 : 1 / 8) * (r600_mixRatio - 1 / 2));
                r600_fractionAfter = r600_fraction * (1 - r600_mixRatioAdjust) / r600_mixRatioAdjust;
                r600_myfinal = r273__SuperXY((1 - r600_mixRatioAdjust) / r600_mixRatioAdjust, r600_superness);
                r600_segBefore.push(r273_g4(r1_mix(r600_mx, r600_toStraight.x, r600_fraction), r1_mix(r600_y, r600_toStraight.y, 1 - r273__SuperXY(r600_fraction, r600_superness)), r273_unimportant));
                r600_segAfter.push(r273_g4(r1_mix(r600_mx, r600_toFinish.x, r600_fraction), r1_mix(r600_y, r600_toFinish.y, (1 - r273__SuperXY(r600_fractionAfter, r600_superness)) / (1 - r600_myfinal)), r273_unimportant));
                r600_j = r600_j + 1;
            }
            if (r600_isStart)
                return [
                    r600_segAfter.reverse(),
                    r600_keyKnot,
                    r600_segBefore
                ];
            else
                return [
                    r600_segBefore.reverse(),
                    r600_keyKnot,
                    r600_segAfter
                ];
        };
        var r273_hookStartBlender = function (r606_before, r606_after, r606_args) {
            var _r606_t0, _r606_t1;
            return r273_HookShape(r606_after, r606_before, true, r606_args);
        };
        var r273_hookEndBlender = function (r607_before, r607_after, r607_args) {
            var _r607_t0, _r607_t1;
            return r273_HookShape(r607_before, r607_after, false, r607_args);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r609_t0, _r609_t1;
            return { 'hookstart': r273_hookstart };
        });
        var r273_hookstart = function () {
            var _r610_t6;
            var _r610_t7 = arguments;
            var _r610_t0 = [].slice.call(_r610_t7, 0);
            var _r610_t1 = [];
            var _r610_t2 = 0;
            while (_r610_t2 < _r610_t0.length) {
                if (!(_r610_t0[_r610_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                    _r610_t1.push(_r610_t0[_r610_t2]);
                _r610_t2 = _r610_t2 + 1;
            }
            var _r610_t3 = _r610_t0;
            var _r610_t4 = _r610_t3.length;
            var _r610_t5 = 0;
            while (_r610_t5 < _r610_t4) {
                _r610_t2 = _r610_t3[_r610_t5];
                if (_r610_t2 && _r610_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r610_t2.left === 'y')
                    r610_y = _r610_t2.right;
                if (_r610_t2 && _r610_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r610_t2.left === 'tight')
                    r610_tight = _r610_t2.right;
                if (_r610_t2 && _r610_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r610_t2.left === 'sw')
                    r610_sw = _r610_t2.right;
                if (_r610_t2 && _r610_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r610_t2.left === 'swItalicAdj')
                    r610_swItalicAdj = _r610_t2.right;
                if (_r610_t2 && _r610_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r610_t2.left === 'noAdjTerminalY')
                    r610_noAdjTerminalY = _r610_t2.right;
                if (_r610_t2 && _r610_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r610_t2.left === 'turnSlope')
                    r610_turnSlope = _r610_t2.right;
                _r610_t5 = _r610_t5 + 1;
            }
            var r610_y = r1_fallback(r610_y, _r610_t1[0]);
            var r610_tight = r1_fallback(r610_tight, _r610_t1[1]);
            var r610_sw = r1_fallback(r610_sw, _r610_t1[2], r273_Stroke);
            var r610_swItalicAdj = r1_fallback(r610_swItalicAdj, _r610_t1[3], r610_sw);
            var r610_noAdjTerminalY = r1_fallback(r610_noAdjTerminalY, _r610_t1[4], false);
            var r610_turnSlope = r1_fallback(r610_turnSlope, _r610_t1[5], void 0);
            return r1_Interpolator(r273_hookStartBlender, {
                'y': r610_y,
                'tight': r610_tight,
                'sw': r610_sw,
                'swItalicAdj': r610_swItalicAdj,
                'noAdjTerminalY': r610_noAdjTerminalY,
                'turnSlope': r610_turnSlope
            });
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r615_t0, _r615_t1;
            return { 'hookend': r273_hookend };
        });
        var r273_hookend = function () {
            var _r616_t6;
            var _r616_t7 = arguments;
            var _r616_t0 = [].slice.call(_r616_t7, 0);
            var _r616_t1 = [];
            var _r616_t2 = 0;
            while (_r616_t2 < _r616_t0.length) {
                if (!(_r616_t0[_r616_t2] instanceof r273_xn$NamedParameterPair$2Lrc9b))
                    _r616_t1.push(_r616_t0[_r616_t2]);
                _r616_t2 = _r616_t2 + 1;
            }
            var _r616_t3 = _r616_t0;
            var _r616_t4 = _r616_t3.length;
            var _r616_t5 = 0;
            while (_r616_t5 < _r616_t4) {
                _r616_t2 = _r616_t3[_r616_t5];
                if (_r616_t2 && _r616_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r616_t2.left === 'y')
                    r616_y = _r616_t2.right;
                if (_r616_t2 && _r616_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r616_t2.left === 'tight')
                    r616_tight = _r616_t2.right;
                if (_r616_t2 && _r616_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r616_t2.left === 'sw')
                    r616_sw = _r616_t2.right;
                if (_r616_t2 && _r616_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r616_t2.left === 'swItalicAdj')
                    r616_swItalicAdj = _r616_t2.right;
                if (_r616_t2 && _r616_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r616_t2.left === 'noAdjTerminalY')
                    r616_noAdjTerminalY = _r616_t2.right;
                if (_r616_t2 && _r616_t2 instanceof r273_xn$NamedParameterPair$2Lrc9b && _r616_t2.left === 'turnSlope')
                    r616_turnSlope = _r616_t2.right;
                _r616_t5 = _r616_t5 + 1;
            }
            var r616_y = r1_fallback(r616_y, _r616_t1[0]);
            var r616_tight = r1_fallback(r616_tight, _r616_t1[1]);
            var r616_sw = r1_fallback(r616_sw, _r616_t1[2], r273_Stroke);
            var r616_swItalicAdj = r1_fallback(r616_swItalicAdj, _r616_t1[3], r616_sw);
            var r616_noAdjTerminalY = r1_fallback(r616_noAdjTerminalY, _r616_t1[4], false);
            var r616_turnSlope = r1_fallback(r616_turnSlope, _r616_t1[5], void 0);
            return r1_Interpolator(r273_hookEndBlender, {
                'y': r616_y,
                'tight': r616_tight,
                'sw': r616_sw,
                'swItalicAdj': r616_swItalicAdj,
                'noAdjTerminalY': r616_noAdjTerminalY,
                'turnSlope': r616_turnSlope
            });
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r621_t0, _r621_t1;
            return { 'Ungizmo': r273_Ungizmo };
        });
        var r273_Ungizmo = function () {
            var _r622_t0, _r622_t1;
            return function () {
                var _r624_t1;
                var _r624_t0 = this;
                var r624_currentGlyph = _r624_t0;
                r624_currentGlyph.include(_r624_t0.gizmo.inverse());
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r627_t0, _r627_t1;
            return { 'Regizmo': r273_Regizmo };
        });
        var r273_Regizmo = function () {
            var _r628_t0, _r628_t1;
            return function () {
                var _r630_t1;
                var _r630_t0 = this;
                var r630_currentGlyph = _r630_t0;
                r630_currentGlyph.include(_r630_t0.gizmo);
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r633_t0, _r633_t1;
            return { 'FlipAround': r273_FlipAround };
        });
        var r273_FlipAround = function (r634_x, r634_y, r634_sx, r634_sy) {
            var _r634_t0, _r634_t1;
            return function () {
                var _r636_t1;
                var _r636_t0 = this;
                var r636_currentGlyph = _r636_t0;
                r636_currentGlyph.include(r273_Ungizmo());
                r636_currentGlyph.include(r273_Translate(-r634_x, -r634_y));
                r636_currentGlyph.include(r273_Scale(r1_fallback(r634_sx, -1), r1_fallback(r634_sy, r634_sx, -1)));
                r636_currentGlyph.include(r273_Translate(r634_x, r634_y));
                r636_currentGlyph.include(r273_Regizmo());
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r643_t0, _r643_t1;
            return { 'ScaleAround': r273_ScaleAround };
        });
        var r273_ScaleAround = r273_FlipAround;
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r645_t0, _r645_t1;
            return { 'Realign': r273_Realign };
        });
        var r273_Realign = function (r646_x, r646_y, r646_sx, r646_sy) {
            var _r646_t0, _r646_t1;
            return r273_ApparentTranslate(r646_sx - r646_x, r646_sy - r646_y);
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r648_t0, _r648_t1;
            return { 'ForceUpright': r273_ForceUpright };
        });
        var r273_ForceUpright = function () {
            var _r649_t0, _r649_t1;
            return function () {
                var _r651_t1;
                var _r651_t0 = this;
                var r651_currentGlyph = _r651_t0;
                _r651_t0.gizmo = r1_Transform.Id();
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r653_t0, _r653_t1;
            return { 'NameUni': r273_NameUni };
        });
        var r273_NameUni = function (r654_unicode) {
            var _r654_t0, _r654_t1;
            var r654_hex = r654_unicode.toString(16).toUpperCase();
            while (r654_hex.length < 4)
                r654_hex = '0' + r654_hex;
            return 'uni' + r654_hex;
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r656_t0, _r656_t1;
            return { 'PointingTo': r273_PointingTo };
        });
        var r273_PointingTo = function (r657_x1, r657_y1, r657_x2, r657_y2, r657_G) {
            var _r657_t0, _r657_t1;
            return function () {
                var _r659_t1;
                var _r659_t0 = this;
                var r659_currentGlyph = _r659_t0;
                var r659_giz = _r659_t0.gizmo;
                var r659_g = r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r662_t3;
                    var _r662_t2 = this;
                    var r662_currentGlyph = _r662_t2;
                    _r662_t2.gizmo = r1_Transform.Id();
                    var _r662_t0 = r1_Transform.Id().apply({
                        'x': r657_x1,
                        'y': r657_y1
                    });
                    var r662_xo = _r662_t0.x;
                    var r662_yo = _r662_t0.y;
                    var _r662_t1 = r1_Transform.Id().apply({
                        'x': r657_x2,
                        'y': r657_y2
                    });
                    var r662_xt = _r662_t1.x;
                    var r662_yt = _r662_t1.y;
                    var r662_mag = Math.hypot(r662_yo - r662_yt, r662_xo - r662_xt);
                    r662_currentGlyph.include(r657_G(r662_mag));
                    r662_currentGlyph.include(r273_Rotate(Math.atan2(r662_yo - r662_yt, r662_xo - r662_xt)));
                    r662_currentGlyph.include(r273_Translate(r662_xt, r662_yt));
                    r662_currentGlyph.include(r659_giz);
                    return void 0;
                });
                r659_currentGlyph.include(r659_g);
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r669_t0, _r669_t1;
            return { 'with-transform': r273_xn$withtransform$5sIl };
        });
        var r273_xn$withtransform$5sIl = function (r670_tfm, r670_gr) {
            var _r670_t0, _r670_t1;
            return r273_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r673_t1;
                var _r673_t0 = this;
                var r673_currentGlyph = _r673_t0;
                r673_currentGlyph.include(r670_gr, true, true);
                r673_currentGlyph.include(r670_tfm);
                return void 0;
            });
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r677_t0, _r677_t1;
            return { 'clear-geometry': r273_xn$cleargeometry$1aao };
        });
        var r273_xn$cleargeometry$1aao = function () {
            var _r678_t0, _r678_t1;
            return function () {
                var _r680_t1;
                var _r680_t0 = this;
                var r680_currentGlyph = _r680_t0;
                r680_currentGlyph.clearGeometry();
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r682_t0, _r682_t1;
            return { 'clear-anchors': r273_xn$clearanchors$1aao };
        });
        var r273_xn$clearanchors$1aao = function () {
            var _r683_t0, _r683_t1;
            return function () {
                var _r685_t1;
                var _r685_t0 = this;
                var r685_currentGlyph = _r685_t0;
                r685_currentGlyph.markAnchors = {};
                r685_currentGlyph.markBnchors = {};
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r687_t0, _r687_t1;
            return { 'AsRadical': r273_AsRadical };
        });
        var r273_AsRadical = function (r688_gr) {
            var _r688_t0, _r688_t1;
            return function () {
                var _r690_t1;
                var _r690_t0 = this;
                var r690_currentGlyph = _r690_t0;
                r1_Radical.set(r690_currentGlyph);
                r690_currentGlyph.include(r688_gr, true, true);
                return void 0;
            };
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r693_t0, _r693_t1;
            return { 'ExtLineCenter': r273_ExtLineCenter };
        });
        var r273_ExtLineCenter = function (r694_k, r694_sw, r694_x1, r694_y1, r694_x2, r694_y2) {
            var _r694_t0, _r694_t1;
            return r273_dispiro(r273_widths.center(r694_sw), r273_corner(r1_mix(r694_x1, r694_x2, -r694_k), r1_mix(r694_y1, r694_y2, -r694_k)), r273_corner(r1_mix(r694_x1, r694_x2, 1 + r694_k), r1_mix(r694_y1, r694_y2, 1 + r694_k)));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r696_t0, _r696_t1;
            return { 'ExtLineLhs': r273_ExtLineLhs };
        });
        var r273_ExtLineLhs = function (r697_k, r697_sw, r697_x1, r697_y1, r697_x2, r697_y2) {
            var _r697_t0, _r697_t1;
            return r273_dispiro(r273_widths.lhs(r697_sw), r273_corner(r1_mix(r697_x1, r697_x2, -r697_k), r1_mix(r697_y1, r697_y2, -r697_k)), r273_corner(r1_mix(r697_x1, r697_x2, 1 + r697_k), r1_mix(r697_y1, r697_y2, 1 + r697_k)));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r699_t0, _r699_t1;
            return { 'ExtLineRhs': r273_ExtLineRhs };
        });
        var r273_ExtLineRhs = function (r700_k, r700_sw, r700_x1, r700_y1, r700_x2, r700_y2) {
            var _r700_t0, _r700_t1;
            return r273_dispiro(r273_widths.rhs(r700_sw), r273_corner(r1_mix(r700_x1, r700_x2, -r700_k), r1_mix(r700_y1, r700_y2, -r700_k)), r273_corner(r1_mix(r700_x1, r700_x2, 1 + r700_k), r1_mix(r700_y1, r700_y2, 1 + r700_k)));
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r702_t0, _r702_t1;
            return { 'DotVariants': r273_DotVariants };
        });
        var r273_DotVariants = {
            'round': [
                r273_DotAt,
                1,
                r273_O
            ],
            'square': [
                r273_SquareAt,
                r273_DesignParameters.squareDotScalar,
                0
            ]
        };
        r273_xn$ExportCapture$2Lrc4b(function () {
            var _r704_t0, _r704_t1;
            return { 'WithDotVariants': r273_WithDotVariants };
        });
        return r273_WithDotVariants = function (r705_name, r705_unicode, r705_F) {
            var r705_suffix, r705_DrawAt, r705_kDotRadius, r705_overshoot, _r705_t2, _r705_t3, _r705_t4, _r705_t5, _r705_tag6;
            var _r705_t0 = Object.entries(r273_DotVariants)[Symbol.iterator]();
            var _r705_t1 = void 0;
            while (!(_r705_t1 = _r705_t0.next()).done) {
                _r705_t2 = _r705_t1.value;
                r705_suffix = _r705_t2[0];
                r705_DrawAt = _r705_t2[1][0];
                r705_kDotRadius = _r705_t2[1][1];
                r705_overshoot = _r705_t2[1][2];
                _r705_t2[1];
                (function () {
                    return r273_xn$createAndSaveGlyphImpl$2Lrc3c('' + r705_name + '.' + r705_suffix, null, r705_F(r705_DrawAt, r705_kDotRadius, r705_overshoot));
                }());
            }
            return r273_xn$selectvariant$7Hrq(r705_name, r705_unicode, new r273_xn$NamedParameterPair$2Lrc9b('follow', 'punctuationDot'));
        };
    });
    return void 0;
});
