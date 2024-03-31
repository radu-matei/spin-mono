'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/util/mask-bit.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r316_t) {
    var r316_n, r316_i, r316_a, _r316_t3, _r316_t4, _r316_t5, _r316_t6, _r316_t7, _r316_t8, _r316_t9, _r316_t10, _r316_t11, _r316_t12, _r316_t13, _r316_t14, _r316_t15, _r316_t16, _r316_t17, _r316_t18, _r316_t19, _r316_t20, _r316_t21, _r316_t22, _r316_t23, _r316_t24, _r316_t25, _r316_t26;
    var _r316_t0 = function () {
        _r316_t7 = function (_r316_t8) {
            _r316_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r316_t8
            };
        };
        _r316_t9 = r316_t instanceof Array;
        if (_r316_t9) {
            _r316_t10 = r316_n = r316_t.length;
            _r316_t11 = r316_i = 0;
            _r316_t12 = function (_r316_t14) {
                return _r316_t7(_r316_t14);
            };
            _r316_t13 = function (_r316_t15) {
                _r316_t16 = r316_i < r316_n;
                if (_r316_t16) {
                    _r316_t0 = function (_r316_t17) {
                        return _r316_t13(r316_i = r316_i + 1);
                    };
                    return {
                        'value': [
                            r316_i,
                            r316_t[r316_i]
                        ],
                        'done': false
                    };
                } else
                    return _r316_t12(_r316_t15);
            };
            return _r316_t13();
        } else {
            _r316_t18 = r316_a = Object.keys(r316_t);
            _r316_t19 = r316_n = r316_a.length;
            _r316_t20 = r316_i = 0;
            _r316_t21 = function (_r316_t23) {
                return _r316_t7(_r316_t23);
            };
            _r316_t22 = function (_r316_t24) {
                _r316_t25 = r316_i < r316_n;
                if (_r316_t25) {
                    _r316_t0 = function (_r316_t26) {
                        return _r316_t22(r316_i = r316_i + 1);
                    };
                    return {
                        'value': [
                            r316_a[r316_i],
                            r316_t[r316_a[r316_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r316_t21(_r316_t24);
            };
            return _r316_t22();
        }
    };
    var _r316_t1 = function (x) {
        try {
            return _r316_t0(x);
        } catch (ex) {
            return _r316_t2(ex);
        }
    };
    var _r316_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r316_t3 = this;
    else {
        _r316_t4 = function () {
            void 0;
        };
        _r316_t4.prototype = _r1_t10.prototype;
        _r316_t3 = new _r316_t4();
    }
    _r316_t3[Symbol.iterator] = function () {
        return _r316_t3;
    };
    _r316_t3.next = _r316_t1;
    _r316_t3.throw = function (x) {
        return _r316_t2(x);
    };
    return _r316_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_maskBits = _r1_t9.maskBits;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-Eszet', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Base, r271_tail, r271_serif, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_EssLower = _r271_t1.EssLower;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_corner = _r271_t2.corner;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t6.FlatHookDepth;
        var r271_PalatalHook = _r271_t6.PalatalHook;
        var r271_CyrDescender = _r271_t6.CyrDescender;
        var r271_SerifFrame = _r271_t6.SerifFrame;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-S'].resolve();
        var r271_AdviceSArchDepth = _r271_t7.AdviceSArchDepth;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-F'].resolve();
        var r271_fbar = _r271_t8.fbar;
        var r271_xn$NOTAIL$3cah = 0;
        var r271_DESCENDING = 1;
        var r271_TAILED = 2;
        var r271_xn$SERIFNONE$1aao = 0;
        var r271_xn$SERIFBOT$1aao = 1;
        var r271_xn$SERIFMID$1aao = 2;
        var r271_xn$SERIFMIDXH$1aao4 = 4;
        var r271_xn$SERIFDUAL$1aao = r271_xn$SERIFBOT$1aao + r271_xn$SERIFMID$1aao;
        var r271_xn$SERIFDUALXH$1aao5 = r271_xn$SERIFBOT$1aao + r271_xn$SERIFMIDXH$1aao4;
        var r271_EszetSerifs = function (r277_df, r277_fTraditional, r277_slab) {
            var _r277_t0, _r277_t1;
            return function () {
                var _r279_t1;
                var _r279_t0 = this;
                var r279_currentGlyph = _r279_t0;
                var r279_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_fbar, 0);
                var r279_lb = r277_fTraditional ? r279_sf.lb.full : r279_sf.lb.outer;
                if (r1_maskBits(r277_slab, r271_xn$SERIFBOT$1aao))
                    r279_currentGlyph.include(r279_lb);
                if (r1_maskBits(r277_slab, r271_xn$SERIFMID$1aao))
                    r279_currentGlyph.include(r279_sf.lt.outer);
                var r279_sfXH = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_XH, 0);
                if (r1_maskBits(r277_slab, r271_xn$SERIFMIDXH$1aao4))
                    r279_currentGlyph.include(r279_sfXH.lt.outer);
                return void 0;
            };
        };
        var r271_Traditional = function (r283_fFlathook) {
            var _r283_t0, _r283_t1;
            return function (r284_slab, r284_tail) {
                var _r284_t0, _r284_t1;
                return function () {
                    var r286___, _r286_t0, _r286_t2;
                    var _r286_t1 = this;
                    var r286_currentGlyph = _r286_t1;
                    r286_currentGlyph.include(r271_MarkSet.bp());
                    var r286_l = r271_SB * 1;
                    var r286_xHook = r1_mix(r271_SB, r271_RightSB, 0.75) + r271_HSwToV(r271_HalfStroke);
                    var r286_hd = r271_FlatHookDepth(r271_DivFrame(1));
                    if (r283_fFlathook)
                        r286_currentGlyph.include(r271_dispiro(r271_flat(r286_xHook, r271_Ascender, r271_widths.lhs()), r271_curl(r286_l + r286_hd.x, r271_Ascender), r271_archv(), r271_flat(r286_l, r271_Ascender - r286_hd.y), r271_curl(r286_l, 0, r271_heading(r271_Downward))));
                    else
                        r286_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_g4(r286_xHook, r271_Ascender - r271_Hook), r271_hookstart(r271_Ascender - r271_O), r271_flat(r286_l, r271_XH), r271_curl(r286_l, 0, r271_heading(r271_Downward))));
                    var r286_t = r1_mix(0, r271_Ascender, 0.7);
                    var r286_tm = r1_mix(r271_Descender, r286_t, 0.625) + r271_HalfStroke;
                    var r286_tl = r1_mix(r286_l, r271_RightSB, 0.35) + r271_HSwToV(r271_HalfStroke);
                    r286_currentGlyph.include(r271_HBar.t(r286_l + 1, r271_RightSB - r271_HalfStroke * 1.2 - r271_OX, r286_t));
                    r286_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r286_tl, r286_tm, r271_heading(r271_Rightward)), r271_curl(r286_tl + 1, r286_tm, r271_heading(r271_Rightward)), r271_g2(r271_RightSB - r271_OX * 1.5, r1_mix(r271_Descender, r286_tm, 0.7)), r271_g2(r271_RightSB - r271_OX * 1.5, r1_mix(r271_Descender, r286_tm, 0.67)), r271_alsoThru(0.5, 0.75), r271_g4(r1_mix(r271_SB, r271_RightSB, 0.35) + (r284_tail ? 0.625 : 0) * r271_HSwToV(r271_Stroke), r271_Descender)));
                    r286_currentGlyph.include(r271_dispiro(r271_widths.center(r271_Stroke * 1.1), r271_corner(r286_tl, r286_tm - r271_Stroke, r271_heading(r271_Upward)), r271_corner(r271_RightSB - r271_HalfStroke * 1.2 - r271_OX, r286_t, r271_heading(r271_Upward))));
                    r286_currentGlyph.include(r271_EszetSerifs(r271_DivFrame(1), true, r284_slab));
                    r286_currentGlyph.include((_r286_t0 = r284_tail, _r286_t0 === r271_DESCENDING ? r271_VBar.l(r286_l, r271_Descender, 0) : _r286_t0 === r271_TAILED ? r271_PalatalHook.lExt(r286_l, 0) : (r286___ = _r286_t0, function () {
                        var _r296_t1;
                        var _r296_t0 = this;
                        var r296_currentGlyph = _r296_t0;
                        return void 0;
                    })));
                    return void 0;
                };
            };
        };
        var r271_Sulzbacher = function (r297_slab, r297_tail) {
            var _r297_t0, _r297_t1;
            return function () {
                var r299___, _r299_t0, _r299_t2;
                var _r299_t1 = this;
                var r299_currentGlyph = _r299_t1;
                var r299_ymiddle = r1_mix(0, r271_Ascender, 0.5) - r271_HalfStroke;
                var r299_xFinal = Math.max(r1_mix(r271_SB + r271_HSwToV(r271_Stroke), r271_RightSB, 0.1), r1_mix(r271_SB, r271_RightSB, 0.3));
                var r299_xMiddle = Math.max(r299_xFinal, r271_SB + r271_HSwToV(1.2 * r271_Stroke), r271_RightSB - r299_ymiddle / 2 - r271_Stroke * 0.75);
                var r299_xMiddleBot = Math.max(r299_xMiddle, r299_xFinal + 0.01 + r271_TanSlope * r271_Stroke);
                r299_currentGlyph.include(r271_MarkSet.b());
                r299_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r271_SB, 0, r271_heading(r271_Upward)), r271_curl(r271_SB, r271_XH), r271_arcvh(), r271_g4(r271_Middle - r271_CorrectionOMidS, r271_Ascender - r271_O), r271_archv(), r271_g4(r271_RightSB + r271_O * 2, r271_YSmoothMidR(r299_ymiddle, r271_Ascender)), r271_g4.left.end(r299_xMiddle, r299_ymiddle, r271_heading(r271_Leftward))));
                r299_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4.right.start(r299_xMiddle, r299_ymiddle + r271_Stroke, r271_heading(r271_Rightward)), r271_archv(), r271_g4(r271_RightSB - r271_O, r271_YSmoothMidR(r299_ymiddle + r271_Stroke, 0)), r271_arcvh(), r271_flat(r299_xMiddleBot, 0, r271_heading(r271_Leftward)), r271_curl(r299_xFinal, 0, r271_heading(r271_Leftward))));
                r299_currentGlyph.include(r271_EszetSerifs(r271_DivFrame(1), false, r297_slab));
                r299_currentGlyph.include((_r299_t0 = r297_tail, _r299_t0 === r271_DESCENDING ? r271_VBar.l(r271_SB, r271_Descender, 0) : _r299_t0 === r271_TAILED ? r271_PalatalHook.lExt(r271_SB, 0) : (r299___ = _r299_t0, function () {
                    var _r306_t1;
                    var _r306_t0 = this;
                    var r306_currentGlyph = _r306_t0;
                    return void 0;
                })));
                return void 0;
            };
        };
        var r271_LongSSLig = function (r307_slab, r307_tail) {
            var _r307_t0, _r307_t1;
            return function () {
                var r309___, _r309_t0, _r309_t2;
                var _r309_t1 = this;
                var r309_currentGlyph = _r309_t1;
                r309_currentGlyph.include(r271_MarkSet.b());
                var r309_swOuter = r271_AdviceStroke2(2, 3, r271_Ascender);
                var r309_strokeCoeff = r271_StrokeWidthBlend(0, 1, r309_swInner);
                var r309_sEndX = Math.max(r1_mix(r271_SB + r271_HSwToV(r271_Stroke), r271_RightSB, 0.1), r1_mix(r271_SB, r271_RightSB, 0.3));
                var r309_swInner = r271_AdviceStroke2(2.5, 3, r271_Ascender);
                var r309_ess = r309_swInner * r271_EssLower / r271_Stroke;
                var r309_sTurnX = Math.max(r309_sEndX, r1_mix(r271_SB, r271_RightSB, 0.3));
                var r309_sBotX = Math.max(r309_sEndX + 1, r1_mix(r309_sEndX, r271_RightSB, 0.3));
                var r309_sTopX = r309_sTurnX + (r271_RightSB - r309_sBotX);
                var r309_sTopHookX = r309_sTopX + r271_HSwToV(0.5 * r309_swInner);
                var r309_archDepthATop = r271_ArchDepthAOf(r271_ArchDepth * (r309_sTopHookX - r271_SB - r309_swInner * 0.5) / (r271_RightSB - r271_SB), r271_Width - (r271_RightSB - r309_sTopHookX));
                var r309_archDepthBTop = r271_ArchDepthBOf(r271_ArchDepth * (r309_sTopHookX - r271_SB - r309_swInner * 0.5) / (r271_RightSB - r271_SB), r271_Width - (r271_RightSB - r309_sTopHookX));
                var r309_innerSmoothB = 1 * r309_archDepthBTop;
                r309_currentGlyph.include(r271_dispiro(r271_widths.rhs(r309_swOuter), r271_flat(r271_SB, 0, r271_heading(r271_Upward)), r271_curl(r271_SB, r271_Ascender - r309_archDepthATop), r271_arcvh(), r271_g4(r1_mix(r271_SB, r309_sTopHookX, 0.52) - r271_CorrectionOMidX * r309_swOuter, r271_Ascender - r271_O, r271_widths.rhs(r1_mix(r309_swOuter, r309_swInner, 0.5))), r271_archv(), r271_g4.down.mid(r309_sTopHookX, r271_Ascender - r309_archDepthBTop + r271_TanSlope * r309_swInner, r271_widths.rhs.heading(r309_swInner, r271_Downward)), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r309_swInner)), r271_g4(r309_sTurnX, r1_mix(r309_innerSmoothB, r271_Ascender - r309_archDepthBTop, 0.5), r271_widths.lhs.heading(r309_swInner, r271_Downward)), r271_alsoThru.g2(0.5, 0.5, r271_widths.center(r309_swInner)), r271_g4(r271_RightSB - r271_OX, r309_innerSmoothB - 2 * r271_TanSlope * r309_swInner, r271_widths.rhs.heading(r309_swInner, r271_Downward)), r271_arcvh(), r271_flat(Math.max(r309_sEndX + 0.1 + r271_TanSlope * r309_swInner, Math.min(r271_RightSB - r309_innerSmoothB, r1_mix(r309_sEndX, r271_RightSB, 0.375))) + r271_CorrectionOMidX * r309_swInner / 2 + r271_TanSlope * r309_swInner, 0), r271_curl(r309_sEndX, 0, r271_heading(r271_Leftward))));
                r309_currentGlyph.include(r271_EszetSerifs(r271_DivFrame(1), false, r307_slab));
                r309_currentGlyph.include((_r309_t0 = r307_tail, _r309_t0 === r271_DESCENDING ? r271_VBar.l(r271_SB, r271_Descender, 0, r309_swOuter) : _r309_t0 === r271_TAILED ? r271_PalatalHook.lExt(r271_SB, 0, new r271_xn$NamedParameterPair$2Lrc9b('sw', r309_swOuter)) : (r309___ = _r309_t0, r271_xn$noshape$3cah())));
                return void 0;
            };
        };
        var r271_EszetConfig = r1_SuffixCfg.weave({
            'traditional': r271_Traditional(false),
            'traditionalFlatHook': r271_Traditional(true),
            'sulzbacher': r271_Sulzbacher,
            'longSSLig': r271_LongSSLig
        }, {
            '': r271_xn$NOTAIL$3cah,
            'descending': r271_DESCENDING,
            'tailed': r271_TAILED
        }, {
            'serifless': r271_xn$SERIFNONE$1aao,
            'bottomSerifed': r271_xn$SERIFBOT$1aao,
            'middleSerifed': r271_xn$SERIFMID$1aao,
            'dualSerifed': r271_xn$SERIFDUAL$1aao,
            'middleSerifedXH': r271_xn$SERIFMIDXH$1aao4,
            'dualSerifedXH': r271_xn$SERIFDUALXH$1aao5
        });
        var _r271_t9 = _r1_t2(r271_EszetConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_Base = _r271_t11[1][0];
            r271_tail = _r271_t11[1][1];
            r271_serif = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('eszet.' + r271_suffix, null, r271_Base(r271_serif, r271_tail));
            }());
        }
        return r271_xn$selectvariant$7Hrq('eszet', 223);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r323_xn$Capture_Ext$2Lrc2b) {
    var _r323_t0, _r323_t1;
    r323_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r323_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-Eszet', function (r324_xn$Capture$2Lrc8, r324_xn$ExportCapture$2Lrc4b) {
        var _r324_t6, _r324_t7;
        var _r324_t0 = r324_xn$Capture$2Lrc8;
        var r324_xn$createAndSaveGlyphImpl$2Lrc3c = _r324_t0['$createAndSaveGlyphImpl$'];
        var r324_xn$NamedParameterPair$2Lrc9b = _r324_t0['$NamedParameterPair$'];
        var r324_xn$Exec$2Lrc5 = _r324_t0['$Exec$'];
        var r324_MarkSet = _r324_t0.MarkSet;
        var _r324_t1 = r324_xn$Capture$2Lrc8.Metrics;
        var r324_SB = _r324_t1.SB;
        var r324_CAP = _r324_t1.CAP;
        var r324_XH = _r324_t1.XH;
        var r324_TanSlope = _r324_t1.TanSlope;
        var r324_Downward = _r324_t1.Downward;
        var r324_Rightward = _r324_t1.Rightward;
        var r324_Leftward = _r324_t1.Leftward;
        var r324_O = _r324_t1.O;
        var r324_Stroke = _r324_t1.Stroke;
        var r324_SLAB = _r324_t1.SLAB;
        var r324_HalfStroke = _r324_t1.HalfStroke;
        var r324_RightSB = _r324_t1.RightSB;
        var r324_Middle = _r324_t1.Middle;
        var r324_SideJut = _r324_t1.SideJut;
        var r324_YSmoothMidR = _r324_t1.YSmoothMidR;
        var r324_HSwToV = _r324_t1.HSwToV;
        var _r324_t2 = r324_xn$Capture$2Lrc8.SpiroFns;
        var r324_g4 = _r324_t2.g4;
        var r324_flat = _r324_t2.flat;
        var r324_curl = _r324_t2.curl;
        var r324_widths = _r324_t2.widths;
        var r324_heading = _r324_t2.heading;
        var r324_archv = _r324_t2.archv;
        var r324_arcvh = _r324_t2.arcvh;
        var r324_dispiro = _r324_t2.dispiro;
        var _r324_t3 = r324_xn$Capture$2Lrc8.BooleFns;
        var _r324_t4 = r324_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r324_HSerif = _r324_t4.HSerif;
        var _r324_t5 = r324_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        return r324_xn$createAndSaveGlyphImpl$2Lrc3c('Eszet', 7838, function () {
            var _r329_t1;
            var _r329_t0 = this;
            var r329_currentGlyph = _r329_t0;
            r329_currentGlyph.include(r324_MarkSet.capital());
            var r329_ymiddle = r1_mix(0, r324_CAP, 0.5) - r324_HalfStroke;
            var r329_ymiddleCap = r1_mix(0, r324_CAP, 0.54) - r324_HalfStroke;
            var r329_xFinal = Math.max(r1_mix(r324_SB + r324_HSwToV(r324_Stroke), r324_RightSB, 0.1), r1_mix(r324_SB, r324_RightSB, 0.3));
            var r329_xMiddle = Math.max(r329_xFinal, r324_SB + r324_HSwToV(1.2 * r324_Stroke), r324_RightSB - r329_ymiddle / 2 - r324_Stroke * 0.75);
            var r329_xMiddleBot = Math.max(r329_xMiddle, r329_xFinal + 0.01 + r324_TanSlope * r324_Stroke);
            var r329_rightTopX = r324_RightSB + r324_O;
            r329_currentGlyph.include(r324_dispiro(r324_widths.lhs(), r324_flat(r329_rightTopX, r324_CAP, r324_heading(r324_Leftward)), r324_curl(r324_Middle, r324_CAP), r324_archv(), r324_flat(r324_SB, r324_XH), r324_curl(r324_SB, 0, r324_heading(r324_Downward))));
            r329_currentGlyph.include(r324_dispiro(r324_widths.rhs(), r324_g4(r329_xMiddle, r329_ymiddleCap + r324_Stroke, r324_heading(r324_Rightward)), r324_archv(), r324_g4(r324_RightSB - r324_O * 2, r324_YSmoothMidR(r329_ymiddleCap + r324_Stroke, 0)), r324_arcvh(), r324_flat(r329_xMiddleBot, 0), r324_curl(r329_xFinal, 0, r324_heading(r324_Leftward))));
            r329_currentGlyph.include(r324_dispiro(r324_widths.rhs(), r324_g4(r329_rightTopX, r324_CAP - r324_Stroke), r324_g4(r329_xMiddle, r329_ymiddleCap + r324_Stroke, r324_widths.lhs(r324_Stroke))));
            if (r324_SLAB)
                r329_currentGlyph.include(r324_HSerif.lb(r324_SB, 0, r324_SideJut));
            return void 0;
        });
    });
    return void 0;
});
