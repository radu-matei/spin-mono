'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r388_t) {
    var r388_n, r388_i, r388_a, _r388_t3, _r388_t4, _r388_t5, _r388_t6, _r388_t7, _r388_t8, _r388_t9, _r388_t10, _r388_t11, _r388_t12, _r388_t13, _r388_t14, _r388_t15, _r388_t16, _r388_t17, _r388_t18, _r388_t19, _r388_t20, _r388_t21, _r388_t22, _r388_t23, _r388_t24, _r388_t25, _r388_t26;
    var _r388_t0 = function () {
        _r388_t7 = function (_r388_t8) {
            _r388_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r388_t8
            };
        };
        _r388_t9 = r388_t instanceof Array;
        if (_r388_t9) {
            _r388_t10 = r388_n = r388_t.length;
            _r388_t11 = r388_i = 0;
            _r388_t12 = function (_r388_t14) {
                return _r388_t7(_r388_t14);
            };
            _r388_t13 = function (_r388_t15) {
                _r388_t16 = r388_i < r388_n;
                if (_r388_t16) {
                    _r388_t0 = function (_r388_t17) {
                        return _r388_t13(r388_i = r388_i + 1);
                    };
                    return {
                        'value': [
                            r388_i,
                            r388_t[r388_i]
                        ],
                        'done': false
                    };
                } else
                    return _r388_t12(_r388_t15);
            };
            return _r388_t13();
        } else {
            _r388_t18 = r388_a = Object.keys(r388_t);
            _r388_t19 = r388_n = r388_a.length;
            _r388_t20 = r388_i = 0;
            _r388_t21 = function (_r388_t23) {
                return _r388_t7(_r388_t23);
            };
            _r388_t22 = function (_r388_t24) {
                _r388_t25 = r388_i < r388_n;
                if (_r388_t25) {
                    _r388_t0 = function (_r388_t26) {
                        return _r388_t22(r388_i = r388_i + 1);
                    };
                    return {
                        'value': [
                            r388_a[r388_i],
                            r388_t[r388_a[r388_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r388_t21(_r388_t24);
            };
            return _r388_t22();
        }
    };
    var _r388_t1 = function (x) {
        try {
            return _r388_t0(x);
        } catch (ex) {
            return _r388_t2(ex);
        }
    };
    var _r388_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r388_t3 = this;
    else {
        _r388_t4 = function () {
            void 0;
        };
        _r388_t4.prototype = _r1_t10.prototype;
        _r388_t3 = new _r388_t4();
    }
    _r388_t3[Symbol.iterator] = function () {
        return _r388_t3;
    };
    _r388_t3.next = _r388_t1;
    _r388_t3.throw = function (x) {
        return _r388_t2(x);
    };
    return _r388_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-M', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_earless, r271_shortLeg, r271_tailed, r271_Serifs, r271_toothless, r271_doBottomSerif, _r271_t12, _r271_t15, _r271_t17, _r271_t18, _r271_t23, _r271_tag24, _r271_t30, _r271_tag31, _r271_t33, _r271_tag34, _r271_t35, _r271_tag36;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_close = _r271_t2.close;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_tagged = _r271_t4.tagged;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_PointingTo = _r271_t4.PointingTo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t6.LeaningAnchor;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_RightwardTailedBar = _r271_t7.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t7.DToothlessRise;
        var r271_DMBlend = _r271_t7.DMBlend;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_nShoulder = _r271_t8.nShoulder;
        var r271_nShoulderMask = _r271_t8.nShoulderMask;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t9.CyrDescender;
        var r271_PalatalHook = _r271_t9.PalatalHook;
        var r271_CurlyTail = _r271_t9.CurlyTail;
        var r271_UpwardHookShape = _r271_t9.UpwardHookShape;
        var r271_SmallMSmooth = function (r278_df) {
            var _r278_t0, _r278_t1;
            return r278_df.div * (0.5 * r271_SmallArchDepth + 0.375 * r271_Stroke);
        };
        var r271_SmallMShoulderSpiro = function () {
            var _r279_t6;
            var _r279_t7 = arguments;
            var _r279_t0 = [].slice.call(_r279_t7, 0);
            var _r279_t1 = [];
            var _r279_t2 = 0;
            while (_r279_t2 < _r279_t0.length) {
                if (!(_r279_t0[_r279_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r279_t1.push(_r279_t0[_r279_t2]);
                _r279_t2 = _r279_t2 + 1;
            }
            var _r279_t3 = _r279_t0;
            var _r279_t4 = _r279_t3.length;
            var _r279_t5 = 0;
            while (_r279_t5 < _r279_t4) {
                _r279_t2 = _r279_t3[_r279_t5];
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'left')
                    r279_left = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'right')
                    r279_right = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'top')
                    r279_top = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'bottom')
                    r279_bottom = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'width')
                    r279_width = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'fine')
                    r279_fine = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'df')
                    r279_df = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'coBottom')
                    r279_coBottom = _r279_t2.right;
                _r279_t5 = _r279_t5 + 1;
            }
            var r279_left = r1_fallback(r279_left, _r279_t1[0]);
            var r279_right = r1_fallback(r279_right, _r279_t1[1]);
            var r279_top = r1_fallback(r279_top, _r279_t1[2]);
            var r279_bottom = r1_fallback(r279_bottom, _r279_t1[3]);
            var r279_width = r1_fallback(r279_width, _r279_t1[4]);
            var r279_fine = r1_fallback(r279_fine, _r279_t1[5]);
            var r279_df = r1_fallback(r279_df, _r279_t1[6]);
            var r279_coBottom = r1_fallback(r279_coBottom, _r279_t1[7]);
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_fix = r271_TanSlope * r271_HSwToV(r271_Stroke) * r279_width / r271_Stroke;
                var r285_sm = r271_SmallMSmooth(r279_df) + r285_fix / 2;
                r285_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r279_right - r271_HSwToV(r279_width), Math.min(r279_top - r285_sm - 0.1, r279_bottom)), r271_curl(r279_right - r271_HSwToV(r279_width), r279_top - r285_sm + r285_fix), r271_arcvh(8), r271_g2(r1_mix(r279_left, r279_right - r271_HSwToV(r279_width), 0.5), r279_top - r271_O - r279_width), r271_archv(8), r271_flat(r279_left, r279_top - r285_sm - r285_fix), r271_corner(r279_left, r279_top - r285_sm - r285_fix - 1), r279_coBottom !== void 0 ? [
                    r271_corner(r279_left, r279_coBottom),
                    r271_corner(r279_left - r279_fine, r279_coBottom)
                ] : [], r271_corner(r279_left - r279_fine, r279_top - r285_sm - 1), r271_curl(r279_left - r279_fine, r279_top - r285_sm), r271_arcvh(8), r271_g2(r1_mix(r279_left - r271_HSwToV(r279_fine), r279_right, 0.5), r279_top - r271_O), r271_archv(8), r271_flat(r279_right, r279_top - r285_sm), r271_corner(r279_right, Math.min(r279_top - r285_sm - 0.1, r279_bottom)), r271_close()));
                return void 0;
            };
        };
        var r271_RevSmallMShoulderSpiro = function () {
            var _r287_t6;
            var _r287_t7 = arguments;
            var _r287_t0 = [].slice.call(_r287_t7, 0);
            var _r287_t1 = [];
            var _r287_t2 = 0;
            while (_r287_t2 < _r287_t0.length) {
                if (!(_r287_t0[_r287_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r287_t1.push(_r287_t0[_r287_t2]);
                _r287_t2 = _r287_t2 + 1;
            }
            var _r287_t3 = _r287_t0;
            var _r287_t4 = _r287_t3.length;
            var _r287_t5 = 0;
            while (_r287_t5 < _r287_t4) {
                _r287_t2 = _r287_t3[_r287_t5];
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'left')
                    r287_left = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'right')
                    r287_right = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'top')
                    r287_top = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'bottom')
                    r287_bottom = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'width')
                    r287_width = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'fine')
                    r287_fine = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'df')
                    r287_df = _r287_t2.right;
                if (_r287_t2 && _r287_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r287_t2.left === 'coBottom')
                    r287_coBottom = _r287_t2.right;
                _r287_t5 = _r287_t5 + 1;
            }
            var r287_left = r1_fallback(r287_left, _r287_t1[0]);
            var r287_right = r1_fallback(r287_right, _r287_t1[1]);
            var r287_top = r1_fallback(r287_top, _r287_t1[2]);
            var r287_bottom = r1_fallback(r287_bottom, _r287_t1[3]);
            var r287_width = r1_fallback(r287_width, _r287_t1[4]);
            var r287_fine = r1_fallback(r287_fine, _r287_t1[5]);
            var r287_df = r1_fallback(r287_df, _r287_t1[6]);
            var r287_coBottom = r1_fallback(r287_coBottom, _r287_t1[7]);
            return function () {
                var _r293_t1;
                var _r293_t0 = this;
                var r293_currentGlyph = _r293_t0;
                var r293_fix = r271_TanSlope * r271_HSwToV(r271_Stroke) * r287_width / r271_Stroke;
                var r293_sm = r271_SmallMSmooth(r287_df) - r293_fix / 2;
                r293_currentGlyph.include(r271_xn$spirooutline$1aao(r271_corner(r287_left + r271_HSwToV(r287_width), Math.min(r287_top - r293_sm - 0.1, r287_bottom)), r271_curl(r287_left + r271_HSwToV(r287_width), r287_top - r293_sm - r293_fix), r271_arcvh(8), r271_g2(r1_mix(r287_right, r287_left + r271_HSwToV(r287_width), 0.5), r287_top - r271_O - r287_width), r271_archv(8), r271_flat(r287_right, r287_top - r293_sm - r293_fix), r271_corner(r287_right, r287_top - r293_sm - r293_fix - 1), r287_coBottom !== void 0 ? [
                    r271_corner(r287_right, r287_coBottom),
                    r271_corner(r287_right + r287_fine, r287_coBottom)
                ] : [], r271_corner(r287_right + r287_fine, r287_top - r293_sm - 1), r271_curl(r287_right + r287_fine, r287_top - r293_sm), r271_arcvh(8), r271_g2(r1_mix(r287_right + r271_HSwToV(r287_fine), r287_left, 0.5), r287_top - r271_O), r271_archv(8), r271_flat(r287_left, r287_top - r293_sm), r271_corner(r287_left, Math.min(r287_top - r293_sm - 0.1, r287_bottom)), r271_close()));
                return void 0;
            };
        };
        var r271_SmallMTopLeftSerif = function (r295_df, r295_top, r295_lbot, r295_fFull) {
            var _r295_t0, _r295_t1;
            var r295_sf = r271_SerifFrame.fromDf(r295_df, r295_top, 0);
            return r295_sf.lt.outer;
        };
        var r271_SmallMBottomLeftSerif = function (r296_df, r296_top, r296_lbot, r296_fFull) {
            var _r296_t0, _r296_t1;
            var r296_sf = r271_SerifFrame.fromDf(r296_df, r296_top, r296_lbot);
            return r296_fFull ? r296_sf.lb.full : r296_sf.lb.outer;
        };
        var r271_SmallMBottomMotionLeftSerif = function (r297_df, r297_top, r297_lbot, r297_fFull) {
            var _r297_t0, _r297_t1;
            var r297_sf = r271_SerifFrame.fromDf(r297_df, r297_top, r297_lbot);
            return r297_fFull ? r297_sf.lb.inner : r297_sf.lb.outer;
        };
        var r271_SmallMBottomMiddleSerif = function (r298_df, r298_top, r298_mbot, r298_fFull, r298_mid) {
            var _r298_t0, _r298_t1;
            var r298_sf = r271_SerifFrame.fromDf(r298_df, r298_top, r298_mbot);
            return r298_fFull ? r298_sf.mb.fullAt(r298_mid) : r271_xn$noshape$3cah();
        };
        var r271_SmallMBottomMotionMiddleSerif = function (r299_df, r299_top, r299_mbot, r299_fFull, r299_mid) {
            var _r299_t0, _r299_t1;
            var r299_sf = r271_SerifFrame.fromDf(r299_df, r299_top, r299_mbot);
            return r299_fFull ? r299_sf.mb.rightAt(r299_mid) : r271_xn$noshape$3cah();
        };
        var r271_SmallMBottomRightSerif = function (r300_df, r300_top, r300_rbot, r300_fFull) {
            var _r300_t0, _r300_t1;
            var r300_sf = r271_SerifFrame.fromDf(r300_df, r300_top, r300_rbot);
            return r300_fFull ? r300_sf.rb.full : r300_sf.rb.outer;
        };
        var r271_SmallMBottomMotionRightSerif = function (r301_df, r301_top, r301_rbot, r301_fFull) {
            var _r301_t0, _r301_t1;
            var r301_sf = r271_SerifFrame.fromDf(r301_df, r301_top, r301_rbot);
            return r301_sf.rb.outer;
        };
        var r271_MEnoughSpaceForFullSerifs = function (r302_df, r302_mid) {
            var _r302_t0, _r302_t1;
            var r302_ink = r271_HSwToV(r302_df.mvs);
            var r302_gap = Math.min(r302_mid - r302_df.leftSB, r302_df.rightSB - r302_mid) - 1.5 * r302_ink;
            return 0.5 * r302_ink + 0.375 * r302_gap > r271_para.refJut;
        };
        var r271_FullSerifs = function (r303_df, r303_top, r303_lbot, r303_mbot, r303_rbot, r303_tailed, r303_earless, r303__mid) {
            var _r303_t0, _r303_t1;
            return function () {
                var _r305_t1;
                var _r305_t0 = this;
                var r305_currentGlyph = _r305_t0;
                var r305_mid = r1_fallback(r303__mid, r303_df.middle);
                var r305_fFull = r271_MEnoughSpaceForFullSerifs(r303_df, r305_mid);
                if (!r303_earless)
                    r305_currentGlyph.include(r271_SmallMTopLeftSerif(r303_df, r303_top, r303_lbot, r305_fFull));
                r305_currentGlyph.include(r271_SmallMBottomLeftSerif(r303_df, r303_top, r303_lbot, r305_fFull));
                r305_currentGlyph.include(r271_SmallMBottomMiddleSerif(r303_df, r303_top, r303_mbot, r305_fFull, r305_mid));
                if (!r303_tailed)
                    r305_currentGlyph.include(r271_SmallMBottomRightSerif(r303_df, r303_top, r303_rbot, r305_fFull));
                return void 0;
            };
        };
        var r271_FullTurnMSerifs = function (r310_df, r310_top, r310_lbot, r310_mbot, r310_rbot, r310_tailed, r310_earless, r310__mid) {
            var _r310_t0, _r310_t1;
            return function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                var r312_mid = r1_fallback(r310__mid, r310_df.middle);
                var r312_fFull = r271_MEnoughSpaceForFullSerifs(r310_df, r312_mid);
                if (!r310_earless)
                    r312_currentGlyph.include(r271_SmallMTopLeftSerif(r310_df, r310_top, r310_lbot, r312_fFull));
                r312_currentGlyph.include(r271_SmallMBottomMotionLeftSerif(r310_df, r310_top, r310_lbot, r312_fFull));
                r312_currentGlyph.include(r271_SmallMBottomMotionMiddleSerif(r310_df, r310_top, r310_mbot, r312_fFull, r312_mid));
                if (!r310_tailed)
                    r312_currentGlyph.include(r271_SmallMBottomMotionRightSerif(r310_df, r310_top, r310_rbot, r312_fFull));
                return void 0;
            };
        };
        var r271_AutoSerifs = function (r317_df, r317_top, r317_lbot, r317_mbot, r317_rbot, r317_tailed, r317_earless, r317__mid) {
            var _r317_t0, _r317_t1;
            return r271_SLAB ? r271_FullSerifs(r317_df, r317_top, r317_lbot, r317_mbot, r317_rbot, r317_tailed, r317_earless, r317__mid) : r271_xn$noshape$3cah();
        };
        var r271_LtSerifs = function (r318_df, r318_top, r318_lbot, r318_mbot, r318_rbot, r318_tailed, r318_earless, r318__mid) {
            var _r318_t0, _r318_t1;
            return function () {
                var _r320_t1;
                var _r320_t0 = this;
                var r320_currentGlyph = _r320_t0;
                var r320_fFull = r271_MEnoughSpaceForFullSerifs(r318_df, r1_fallback(r318__mid, r318_df.middle));
                r320_currentGlyph.include(r271_SmallMTopLeftSerif(r318_df, r318_top, r318_lbot, r320_fFull));
                return void 0;
            };
        };
        var r271_LtRbSerifs = function (r322_df, r322_top, r322_lbot, r322_mbot, r322_rbot, r322_tailed, r322_earless, r322__mid) {
            var _r322_t0, _r322_t1;
            return function () {
                var _r324_t1;
                var _r324_t0 = this;
                var r324_currentGlyph = _r324_t0;
                var r324_fFull = r271_MEnoughSpaceForFullSerifs(r322_df, r1_fallback(r322__mid, r322_df.middle));
                r324_currentGlyph.include(r271_SmallMTopLeftSerif(r322_df, r322_top, r322_lbot, r324_fFull));
                r324_currentGlyph.include(r271_SmallMBottomMotionRightSerif(r322_df, r322_top, r322_rbot, r324_fFull));
                return void 0;
            };
        };
        var r271_RbSerifs = function (r327_df, r327_top, r327_lbot, r327_mbot, r327_rbot, r327_tailed, r327_earless, r327__mid) {
            var _r327_t0, _r327_t1;
            return function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                var r329_fFull = r271_MEnoughSpaceForFullSerifs(r327_df, r1_fallback(r327__mid, r327_df.middle));
                r329_currentGlyph.include(r271_SmallMBottomMotionRightSerif(r327_df, r327_top, r327_rbot, r329_fFull));
                return void 0;
            };
        };
        var r271_dfM = function () {
            var _r331_t0, _r331_t1;
            return r271_DivFrame(r271_para.diversityM, 3);
        };
        var r271_SmallMArches = function (r332_df, r332_top, r332_lbot, r332_mbot, r332_rbot, r332__mid) {
            var _r332_t0, _r332_t1;
            return function () {
                var _r334_t1;
                var _r334_t0 = this;
                var r334_currentGlyph = _r334_t0;
                var r334_mid = r1_fallback(r332__mid, r332_df.middle);
                r334_currentGlyph.include(r271_SmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r332_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r332_df.leftSB + r271_HSwToV(r332_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r334_mid + r271_HSwToV(0.5 * r332_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('top', r332_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r332_mbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r332_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r332_df.mvs * r271_ShoulderFine / r271_Stroke)));
                r334_currentGlyph.include(r271_SmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r332_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r334_mid + r271_HSwToV(0.5 * r332_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r332_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('top', r332_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r332_rbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r332_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r332_df.mvs * r271_ShoulderFine / r271_Stroke)));
                r334_currentGlyph.include(r271_tagged('barL', r271_VBar.l(r332_df.leftSB, r332_lbot, r332_top, r332_df.mvs)));
                return void 0;
            };
        };
        var r271_SmallMShortLegHeight = function (r352_top, r352_df) {
            var _r352_t0, _r352_t1;
            return (r352_top - r352_df.mvs) * 0.45;
        };
        var r271_SmallMSmoothHeight = function (r353_top, r353_df) {
            var _r353_t0, _r353_t1;
            return r353_top - r271_SmallMSmooth(r353_df) - r271_TanSlope * r271_Stroke;
        };
        var r271_EarlessCornerDoubleArchSmallMShape = function (r354_df, r354_top, r354_lbot, r354_mbot, r354_rbot, r354__mid) {
            var _r354_t0, _r354_t1;
            return function () {
                var _r356_t1;
                var _r356_t0 = this;
                var r356_currentGlyph = _r356_t0;
                var r356_mid = r1_fallback(r354__mid, r354_df.middle);
                r356_currentGlyph.include(r271_dispiro(r271_widths.rhs(r354_df.mvs), r271_g4(r354_df.leftSB, r354_top - r271_DToothlessRise), r271_g4.right.mid(r1_mix(r354_df.leftSB, r356_mid + r271_HSwToV(0.5 * r354_df.mvs), 0.5), r354_top - r271_O, r271_heading(r271_Rightward)), r271_g4(r356_mid + r271_HSwToV(0.5 * r354_df.mvs), r354_top - r271_DToothlessRise)));
                r356_currentGlyph.include(r271_dispiro(r271_widths.rhs(r354_df.mvs), r271_g4(r356_mid - r271_HSwToV(0.5 * r354_df.mvs), r354_top - r271_DToothlessRise), r271_g4.right.mid(r1_mix(r354_df.rightSB, r356_mid - r271_HSwToV(0.5 * r354_df.mvs), 0.5), r354_top - r271_O, r271_heading(r271_Rightward)), r271_archv(), r271_flat(r354_df.rightSB, r354_top - r271_SmallMSmooth(r354_df), r271_heading(r271_Downward)), r271_curl(r354_df.rightSB, r354_rbot, r271_heading(r271_Downward))));
                r356_currentGlyph.include(r271_tagged('barL', r271_VBar.l(r354_df.leftSB, r354_lbot, r354_top - r271_DToothlessRise, r354_df.mvs)));
                r356_currentGlyph.include(r271_tagged('barM', r271_VBar.m(r356_mid, r354_mbot, r354_top - r271_DToothlessRise, r354_df.mvs)));
                return void 0;
            };
        };
        var r271_EarlessRoundedDoubleArchSmallMShape = function (r361_df, r361_top, r361_lbot, r361_mbot, r361_rbot, r361__mid) {
            var _r361_t0, _r361_t1;
            return function () {
                var _r363_t1;
                var _r363_t0 = this;
                var r363_currentGlyph = _r363_t0;
                var r363_mid = r1_fallback(r361__mid, r361_df.middle);
                r363_currentGlyph.include(r271_union(r271_RevSmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r361_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r361_df.leftSB), new r271_xn$NamedParameterPair$2Lrc9b('right', r363_mid - r271_HSwToV(0.5 * r361_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('top', r361_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r361_lbot), new r271_xn$NamedParameterPair$2Lrc9b('coBottom', r361_mbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r361_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r361_df.mvs * r271_CThin)), r271_SmallMShoulderSpiro(new r271_xn$NamedParameterPair$2Lrc9b('df', r361_df), new r271_xn$NamedParameterPair$2Lrc9b('left', r363_mid + r271_HSwToV(0.5 * r361_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r361_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('top', r361_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r361_rbot), new r271_xn$NamedParameterPair$2Lrc9b('coBottom', r361_mbot), new r271_xn$NamedParameterPair$2Lrc9b('width', r361_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('fine', r361_df.mvs * r271_CThin))));
                return void 0;
            };
        };
        var r271_EarlessSingleArchSmallMShape = function (r381_df, r381_top, r381_lbot, r381_mbot, r381_rbot, r381__mid) {
            var _r381_t0, _r381_t1;
            return function () {
                var _r383_t1;
                var _r383_t0 = this;
                var r383_currentGlyph = _r383_t0;
                var r383_mid = r1_fallback(r381__mid, r381_df.middle);
                r383_currentGlyph.include(r271_tagged('barL', r271_VBar.l(r381_df.leftSB, r381_lbot, r381_top - r271_DToothlessRise, r381_df.mvs)));
                r383_currentGlyph.include(r271_tagged('barM', r271_VBar.m(r383_mid, r381_mbot, r381_top, r381_df.mvs)));
                r383_currentGlyph.include(r271_dispiro(r271_widths.rhs(r381_df.mvs), r271_g4(r381_df.leftSB, r381_top - r271_DToothlessRise), r271_g4(r383_mid - r271_CorrectionOMidS, r381_top - r271_O), r271_archv(), r271_flat(r381_df.rightSB, Math.max(r381_top - r271_SmallMSmooth(r381_df), r381_rbot + 0.1)), r271_curl(r381_df.rightSB, r381_rbot, r271_heading(r271_Downward))));
                return void 0;
            };
        };
        var r271_SmallMConfig = r1_SuffixCfg.weave({
            '': [
                r271_SmallMArches,
                0
            ],
            'earlessCornerDoubleArch': [
                r271_EarlessCornerDoubleArchSmallMShape,
                1
            ],
            'earlessRoundedDoubleArch': [
                r271_EarlessRoundedDoubleArchSmallMShape,
                1
            ],
            'earlessSingleArch': [
                r271_EarlessSingleArchSmallMShape,
                1
            ]
        }, {
            '': [0],
            'shortLeg': [1]
        }, {
            '': [0],
            'tailed': [1]
        }, {
            'serifless': [r271_xn$noshape$3cah],
            'serifed': [r271_FullSerifs],
            'topLeftSerifed': [r271_LtSerifs],
            'bottomRightSerifed': [r271_RbSerifs],
            'topLeftAndBottomRightSerifed': [r271_LtRbSerifs]
        });
        var _r271_t10 = _r1_t2(r271_SmallMConfig)[Symbol.iterator]();
        var _r271_t11 = void 0;
        while (!(_r271_t11 = _r271_t10.next()).done) {
            _r271_t12 = _r271_t11.value;
            r271_suffix = _r271_t12[0];
            r271_Body = _r271_t12[1][0][0];
            r271_earless = _r271_t12[1][0][1];
            _r271_t12[1][0];
            r271_shortLeg = _r271_t12[1][1][0];
            _r271_t12[1][1];
            r271_tailed = _r271_t12[1][2][0];
            _r271_t12[1][2];
            r271_Serifs = _r271_t12[1][3][0];
            _r271_t12[1][3];
            _r271_t12[1];
            (function () {
                var r391_mShapeBody = function (r392_df, r392_height) {
                    var _r392_t0, _r392_t1;
                    return function () {
                        var _r394_t1;
                        var _r394_t0 = this;
                        var r394_currentGlyph = _r394_t0;
                        r394_currentGlyph.include(r271_Body(r392_df, r392_height, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r392_height, r392_df) : 0, r271_tailed ? r271_SmallMSmoothHeight(r392_height, r392_df) + r271_O : 0));
                        if (r271_tailed)
                            r394_currentGlyph.include(r271_RightwardTailedBar(r392_df.rightSB, 0, r271_SmallMSmoothHeight(r392_height, r392_df), new r271_xn$NamedParameterPair$2Lrc9b('sw', r392_df.mvs)));
                        r394_currentGlyph.include(r271_Serifs(r392_df, r392_height, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r392_height, r392_df) : 0, 0, r271_tailed, r271_earless));
                        return void 0;
                    };
                };
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('m.' + r271_suffix, null, function () {
                    var _r401_t1;
                    var _r401_t0 = this;
                    var r401_currentGlyph = _r401_t0;
                    var r401_df = r401_currentGlyph.include(r271_dfM());
                    r401_currentGlyph.include(r401_df.markSet.e());
                    r401_currentGlyph.include(r391_mShapeBody(r401_df, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('meng.' + r271_suffix, null, function () {
                    var _r407_t1;
                    var _r407_t0 = this;
                    var r407_currentGlyph = _r407_t0;
                    var r407_df = r407_currentGlyph.include(r271_dfM());
                    r407_currentGlyph.include(r407_df.markSet.e());
                    r407_currentGlyph.include(r271_xn$referglyph$1aao('m.' + r271_suffix));
                    r407_currentGlyph.ejectTagged('serifRB');
                    r407_currentGlyph.include(r271_PalatalHook.rExt(r407_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r407_df.mvs)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('mCrossedTail.' + r271_suffix, null, function () {
                    var _r416_t1;
                    var _r416_t0 = this;
                    var r416_currentGlyph = _r416_t0;
                    var r416_df = r416_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 4));
                    r416_currentGlyph.include(r416_df.markSet.e());
                    var r416_fine = r271_AdviceStroke(4.5, r416_df.div);
                    var r416_rinner = r271_XH * 0.15 - r416_fine * 0.75;
                    var r416_gap = (r416_df.rightSB - r416_df.leftSB - 3 * r271_HSwToV(r416_df.mvs) - r271_HSwToV(r416_fine)) / 3;
                    var r416_m1 = r416_df.rightSB - r271_HSwToV(r416_df.mvs);
                    var r416_m2 = r416_df.leftSB + 2 * (r271_HSwToV(r416_df.mvs) + r416_gap);
                    var r416_x2 = r416_df.rightSB + r271_SideJut;
                    var r416_y2 = r416_rinner * 2 + r416_fine - r271_O;
                    r416_currentGlyph.include(r271_Body(r416_df, r271_XH, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r271_XH, r416_df) : 0, r416_y2 + r271_O));
                    r416_currentGlyph.include(r271_dispiro(r271_straight.down.start(r416_df.rightSB, r416_y2 + r271_O, r271_widths.rhs.heading(r416_df.mvs, r271_Downward)), r271_CurlyTail(r416_fine, r416_rinner, r416_m1, 0, r416_m2, r416_x2, r416_y2, new r271_xn$NamedParameterPair$2Lrc9b('adj', 0.2))));
                    r416_currentGlyph.include(r271_Serifs(r416_df, r271_XH, 0, r271_shortLeg ? r271_SmallMShortLegHeight(r271_XH, r416_df) : 0, 0, true, r271_earless));
                    return void 0;
                });
                return r271_Body === r271_SmallMArches && r271_shortLeg === 0 && r271_tailed === 0 ? r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/tjeKomi.italic.' + r271_suffix, null, function () {
                    var _r425_t1;
                    var _r425_t0 = this;
                    var r425_currentGlyph = _r425_t0;
                    var r425_df = r425_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 4));
                    r425_currentGlyph.include(r425_df.markSet.e());
                    var r425_subDf = r425_df.slice(4, 3, 0);
                    r425_currentGlyph.include(r271_Body(r425_subDf, r271_XH, 0, 0, r271_XH / 2));
                    r425_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r425_subDf.rightSB - r271_HSwToV(r425_subDf.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r425_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA * 0.6 * r425_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB * 0.6 * r425_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r425_subDf.mvs)));
                    r425_currentGlyph.include(r271_Serifs(r425_subDf, r271_XH, 0, 0, r271_XH / 2, true, false));
                    var r425_sf2 = r271_SerifFrame.fromDf(r425_df, r271_XH / 2, 0).slice(2, 3);
                    if (r271_SLAB)
                        r425_currentGlyph.include(r425_sf2.rt.full);
                    return void 0;
                }) : void 0;
            }());
        }
        r271_xn$selectvariant$7Hrq('m', 'm');
        r271_xn$selectvariant$7Hrq('m/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'm'));
        r271_xn$linkreducedvariant$5sIl8('m/sansSerif', 'm', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('cyrl/te.italic', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'm'));
        r271_xn$selectvariant$7Hrq('cyrl/te.italic/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'm'));
        r271_xn$selectvariant$7Hrq('cyrl/tjeKomi.italic');
        r271_alias('cyrl/te.BGR', null, 'cyrl/te.italic');
        r271_alias('cyrl/teThreeLeg.italic', null, 'cyrl/te.italic');
        var _r271_t19 = r271_xn$derivecomposites$7Hrq;
        var _r271_t20 = 'cyrl/teDescender.italic';
        var _r271_t21 = null;
        var _r271_t22 = 'cyrl/te.italic/descBase';
        var _r271_t25 = function () {
            var r443_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_CyrDescender.rSideJut(r443_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r443_df.mvs));
        }();
        _r271_t19(_r271_t20, _r271_t21, _r271_t22, _r271_t25);
        var _r271_t26 = r271_xn$derivecomposites$7Hrq;
        var _r271_t27 = 'mPalatalHook';
        var _r271_t28 = 7558;
        var _r271_t29 = 'm/descBase';
        var _r271_t32 = function () {
            var r446_df = r271_DivFrame(r271_para.diversityM, 3);
            return r271_PalatalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('xLink', r446_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('x', r446_df.rightSB + r271_SideJut), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('refSw', r446_df.mvs));
        }();
        _r271_t26(_r271_t27, _r271_t28, _r271_t29, _r271_t32);
        r271_xn$selectvariant$7Hrq('meng', 625);
        r271_xn$selectvariant$7Hrq('mCrossedTail', 43834, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'meng'));
        var r271_TurnMConfig = r1_SuffixCfg.weave({
            'toothed': [
                r271_SmallMArches,
                0,
                0
            ],
            'tailed': [
                r271_SmallMArches,
                0,
                1
            ],
            'toothlessCorner': [
                r271_EarlessCornerDoubleArchSmallMShape,
                1,
                0
            ],
            'toothlessRounded': [
                r271_EarlessRoundedDoubleArchSmallMShape,
                1,
                0
            ]
        }, {
            'serifless': [
                r271_xn$noshape$3cah,
                0
            ],
            'serifed': [
                r271_FullTurnMSerifs,
                1
            ],
            'topLeftSerifed': [
                r271_RbSerifs,
                0
            ],
            'bottomRightSerifed': [
                r271_LtSerifs,
                1
            ],
            'motionSerifed': [
                r271_LtRbSerifs,
                1
            ]
        });
        var _r271_t13 = _r1_t2(r271_TurnMConfig)[Symbol.iterator]();
        var _r271_t14 = void 0;
        while (!(_r271_t14 = _r271_t13.next()).done) {
            _r271_t15 = _r271_t14.value;
            r271_suffix = _r271_t15[0];
            r271_Body = _r271_t15[1][0][0];
            r271_toothless = _r271_t15[1][0][1];
            r271_tailed = _r271_t15[1][0][2];
            _r271_t15[1][0];
            r271_Serifs = _r271_t15[1][1][0];
            r271_doBottomSerif = _r271_t15[1][1][1];
            _r271_t15[1][1];
            _r271_t15[1];
            (function () {
                var r455_turnMShapeBody = function (r456_df, r456_top) {
                    var _r456_t0, _r456_t1;
                    return function () {
                        var _r458_t1;
                        var _r458_t0 = this;
                        var r458_currentGlyph = _r458_t0;
                        r458_currentGlyph.include(r271_Body(r456_df, r456_top, 0, 0, 0));
                        r458_currentGlyph.include(r271_Serifs(r456_df, r456_top, 0, 0, 0, 0, r271_toothless));
                        r458_currentGlyph.include(r271_FlipAround(r456_df.middle, r456_top / 2));
                        if (r271_tailed) {
                            r458_currentGlyph.ejectTagged('barL');
                            r458_currentGlyph.ejectTagged('serifLT');
                            r458_currentGlyph.include(r271_RightwardTailedBar(r456_df.rightSB, 0, r456_top, new r271_xn$NamedParameterPair$2Lrc9b('sw', r456_df.mvs)));
                        }
                        return void 0;
                    };
                };
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('turnm.' + r271_suffix, null, function () {
                    var _r468_t1;
                    var _r468_t0 = this;
                    var r468_currentGlyph = _r468_t0;
                    var r468_df = r468_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r468_currentGlyph.include(r468_df.markSet.e());
                    r468_currentGlyph.include(r455_turnMShapeBody(r468_df, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('capitalTurnm.' + r271_suffix, null, function () {
                    var _r474_t1;
                    var _r474_t0 = this;
                    var r474_currentGlyph = _r474_t0;
                    var r474_df = r474_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r474_currentGlyph.include(r474_df.markSet.capital());
                    r474_currentGlyph.include(r455_turnMShapeBody(r474_df, r271_CAP));
                    return void 0;
                });
                if (!r271_toothless && !r271_tailed)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('turnmLeg.' + r271_suffix, null, function () {
                        var r480_sf, _r480_t1;
                        var _r480_t0 = this;
                        var r480_currentGlyph = _r480_t0;
                        var r480_df = r480_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                        r480_currentGlyph.include(r480_df.markSet.p());
                        r480_currentGlyph.include(r455_turnMShapeBody(r480_df, r271_XH));
                        r480_currentGlyph.ejectTagged('serifLT');
                        r480_currentGlyph.include(r271_VBar.r(r480_df.rightSB, r271_Descender, r271_XH, r480_df.mvs));
                        if (r271_doBottomSerif) {
                            r480_sf = r271_SerifFrame.fromDf(r480_df, r271_XH, r271_Descender);
                            r480_currentGlyph.include(r480_sf.rb.fullSide);
                        }
                        r480_currentGlyph.include(r271_LeaningAnchor.Below.VBar.r(r480_df.rightSB));
                        return void 0;
                    });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('turnmSideways.' + r271_suffix, null, function () {
                    var _r490_t1;
                    var _r490_t0 = this;
                    var r490_currentGlyph = _r490_t0;
                    var r490_realHeight = r271_XH * r271_para.diversityM;
                    var r490_realTop = r271_XH / 2 + r490_realHeight / 2;
                    var r490_realBot = r271_XH / 2 - r490_realHeight / 2;
                    var r490_df = r271_DivFrame(r490_realHeight / r271_Width, 3, r271_XH * 0.1 / r271_SB);
                    r490_currentGlyph.include(r490_df.markSet.e());
                    r490_currentGlyph.include(r271_PointingTo(r271_Width, r490_realTop, r271_Width, r490_realBot, function () {
                        var _r493_t0, _r493_t1;
                        return function () {
                            var _r495_t1;
                            var _r495_t0 = this;
                            var r495_currentGlyph = _r495_t0;
                            r495_currentGlyph.include(r455_turnMShapeBody(r490_df, r271_Width - r271_SB));
                            r495_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/shcha.italic.' + r271_suffix, null, function () {
                    var _r500_t1;
                    var _r500_t0 = this;
                    var r500_currentGlyph = _r500_t0;
                    var r500_df = r500_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r500_currentGlyph.include(r500_df.markSet.e());
                    r500_currentGlyph.include(r455_turnMShapeBody(r500_df, r271_XH));
                    r500_currentGlyph.ejectTagged('serifLT');
                    r500_currentGlyph.include(r271_CyrDescender.rSideJut(r500_df.rightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r500_df.mvs)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('turnm', 623);
        r271_xn$selectvariant$7Hrq('capitalTurnm', 412, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'turnm'));
        r271_xn$selectvariant$7Hrq('turnmLeg', 624);
        r271_xn$selectvariant$7Hrq('turnmSideways', 7455, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'turnm'));
        r271_xn$selectvariant$7Hrq('cyrl/sha.italic', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'turnm'));
        r271_alias('cyrl/sha.BGR', null, 'cyrl/sha.italic');
        r271_xn$selectvariant$7Hrq('cyrl/shcha.italic');
        r271_alias('cyrl/shcha.BGR', null, 'cyrl/shcha.italic');
        r271_xn$derivecomposites$7Hrq('cyrl/te.SRB', null, 'cyrl/sha.italic', 'macronAbove');
        var _r271_t16 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t16.BBS;
        var r271_BBD = _r271_t16.BBD;
        var r271_BBBarLeft = _r271_t16.BBBarLeft;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/m', 120158, function () {
            var _r513_t1;
            var _r513_t0 = this;
            var r513_currentGlyph = _r513_t0;
            var r513_df = r513_currentGlyph.include(r271_DivFrame(1, 3));
            r513_currentGlyph.include(r513_df.markSet.e());
            var r513_bbs = r271_AdviceStroke(8);
            var r513_bbd = r271_BBD * Math.min(3 / 4, r513_bbs / r271_BBS);
            var r513_xMid = r1_mix(r513_df.leftSB + r513_bbd + r271_HSwToV(r513_bbs), r513_df.rightSB, 0.5);
            r513_currentGlyph.include(r271_BBBarLeft(r513_df.leftSB, 0, r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('bbd', r513_bbd), new r271_xn$NamedParameterPair$2Lrc9b('bbs', r513_bbs)));
            r513_currentGlyph.include(r271_union(r271_HBar.b(r513_xMid - r513_bbd, r513_xMid, 0, r513_bbs), r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r513_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r513_df.leftSB + r513_bbd + r271_HSwToV(r513_bbs)), new r271_xn$NamedParameterPair$2Lrc9b('right', r513_xMid), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)), r271_intersection(r271_VBar.r(r513_xMid - r513_bbd, 0, r271_XH, r513_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r513_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r513_df.leftSB + r513_bbd + r271_HSwToV(r513_bbs) + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r513_xMid - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)))));
            r513_currentGlyph.include(r271_union(r271_HBar.b(r513_df.rightSB - r513_bbd, r513_df.rightSB, 0, r513_bbs), r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('leftY0', 0), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r513_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r513_xMid), new r271_xn$NamedParameterPair$2Lrc9b('right', r513_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)), r271_intersection(r271_VBar.r(r513_df.rightSB - r513_bbd, 0, r271_XH, r513_bbs), r271_nShoulderMask(new r271_xn$NamedParameterPair$2Lrc9b('stroke', r513_bbs), new r271_xn$NamedParameterPair$2Lrc9b('left', r513_xMid + 1), new r271_xn$NamedParameterPair$2Lrc9b('right', r513_df.rightSB - 1), new r271_xn$NamedParameterPair$2Lrc9b('top', r271_XH - 1), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)))));
            return void 0;
        });
    });
    return void 0;
});
