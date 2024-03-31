'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r295_t) {
    var r295_n, r295_i, r295_a, _r295_t3, _r295_t4, _r295_t5, _r295_t6, _r295_t7, _r295_t8, _r295_t9, _r295_t10, _r295_t11, _r295_t12, _r295_t13, _r295_t14, _r295_t15, _r295_t16, _r295_t17, _r295_t18, _r295_t19, _r295_t20, _r295_t21, _r295_t22, _r295_t23, _r295_t24, _r295_t25, _r295_t26;
    var _r295_t0 = function () {
        _r295_t7 = function (_r295_t8) {
            _r295_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r295_t8
            };
        };
        _r295_t9 = r295_t instanceof Array;
        if (_r295_t9) {
            _r295_t10 = r295_n = r295_t.length;
            _r295_t11 = r295_i = 0;
            _r295_t12 = function (_r295_t14) {
                return _r295_t7(_r295_t14);
            };
            _r295_t13 = function (_r295_t15) {
                _r295_t16 = r295_i < r295_n;
                if (_r295_t16) {
                    _r295_t0 = function (_r295_t17) {
                        return _r295_t13(r295_i = r295_i + 1);
                    };
                    return {
                        'value': [
                            r295_i,
                            r295_t[r295_i]
                        ],
                        'done': false
                    };
                } else
                    return _r295_t12(_r295_t15);
            };
            return _r295_t13();
        } else {
            _r295_t18 = r295_a = Object.keys(r295_t);
            _r295_t19 = r295_n = r295_a.length;
            _r295_t20 = r295_i = 0;
            _r295_t21 = function (_r295_t23) {
                return _r295_t7(_r295_t23);
            };
            _r295_t22 = function (_r295_t24) {
                _r295_t25 = r295_i < r295_n;
                if (_r295_t25) {
                    _r295_t0 = function (_r295_t26) {
                        return _r295_t22(r295_i = r295_i + 1);
                    };
                    return {
                        'value': [
                            r295_a[r295_i],
                            r295_t[r295_a[r295_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r295_t21(_r295_t24);
            };
            return _r295_t22();
        }
    };
    var _r295_t1 = function (x) {
        try {
            return _r295_t0(x);
        } catch (ex) {
            return _r295_t2(ex);
        }
    };
    var _r295_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r295_t3 = this;
    else {
        _r295_t4 = function () {
            void 0;
        };
        _r295_t4.prototype = _r1_t9.prototype;
        _r295_t3 = new _r295_t4();
    }
    _r295_t3[Symbol.iterator] = function () {
        return _r295_t3;
    };
    _r295_t3.next = _r295_t1;
    _r295_t3.throw = function (x) {
        return _r295_t2(x);
    };
    return _r295_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Five', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_obl, r270_bottomShape, r270_pBarPos, r270_pBarPosSwAdj, r270_pXLeft, _r270_t9, _r270_t11, _r270_t12, _r270_t13, _r270_tag14;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_DesignParameters = _r270_t1.DesignParameters;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Upward = _r270_t1.Upward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_AHook = _r270_t1.AHook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_VJut = _r270_t1.VJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_YSmoothMidR = _r270_t1.YSmoothMidR;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_hookstart = _r270_t4.hookstart;
        var r270_hookend = _r270_t4.hookend;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Shared'].resolve();
        var r270_OnumMarks = _r270_t6.OnumMarks;
        var r270_ShiftDown = _r270_t6.ShiftDown;
        var r270_CodeLnum = _r270_t6.CodeLnum;
        var r270_CodeOnum = _r270_t6.CodeOnum;
        var r270_FiveFlatStroke = function (r274_xLeft, r274_archTop, r274_pShapeHeight, r274_sw) {
            var _r274_t0, _r274_t1;
            return r270_dispiro(r270_widths.rhs(r274_sw), r270_flat(r274_xLeft + r270_HSwToV(r274_sw), r274_archTop), r270_curl(Math.max(r274_xLeft + 0.01, r270_Middle - r270_CorrectionOMidX * r274_sw), r274_archTop), r270_archv(), r270_g4(r270_RightSB - r270_OX, r270_YSmoothMidR(r274_archTop, 0, r270_ArchDepthA, r270_ArchDepthB)), r270_hookend(r270_O), r270_g4(r270_SB, r270_Hook * r274_pShapeHeight));
        };
        var r270_FiveArcStroke = function (r275_xLeft, r275_archTop, r275_pShapeHeight, r275_sw) {
            var _r275_t0, _r275_t1;
            return r270_dispiro(r270_widths.rhs(r275_sw), r270_g4(r275_xLeft, r275_archTop - r270_AHook * r275_pShapeHeight), r270_hookstart(r275_archTop - r270_O), r270_g4(r270_RightSB - r270_OX, r270_YSmoothMidR(r275_archTop, 0, r270_ArchDepthA, r270_ArchDepthB)), r270_hookend(r270_O), r270_g4(r270_SB, r270_Hook * r275_pShapeHeight));
        };
        var r270_FiveArcStrokeMask = function (r276_xLeft, r276_archTop, r276_pShapeHeight, r276_sw) {
            var _r276_t0, _r276_t1;
            return r270_xn$spirooutline$1aao(r270_g4(r276_xLeft + 1, r276_archTop - r270_AHook * r276_pShapeHeight), r270_hookstart(r276_archTop - r270_O - 1), r270_g4(r270_RightSB - r270_OX - 1, r270_YSmoothMidR(r276_archTop, 0, r270_ArchDepthA, r270_ArchDepthB)), r270_hookend(r270_O + 1), r270_g4(r270_SB + 1, r270_Hook * r276_pShapeHeight));
        };
        var r270_FiveShape = function () {
            var _r277_t6;
            var _r277_t7 = arguments;
            var _r277_t0 = [].slice.call(_r277_t7, 0);
            var _r277_t1 = [];
            var _r277_t2 = 0;
            while (_r277_t2 < _r277_t0.length) {
                if (!(_r277_t0[_r277_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r277_t1.push(_r277_t0[_r277_t2]);
                _r277_t2 = _r277_t2 + 1;
            }
            var _r277_t3 = _r277_t0;
            var _r277_t4 = _r277_t3.length;
            var _r277_t5 = 0;
            while (_r277_t5 < _r277_t4) {
                _r277_t2 = _r277_t3[_r277_t5];
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'top')
                    r277_top = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'bp')
                    r277_bp = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'pBarPosSwAdj')
                    r277_pBarPosSwAdj = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'sw')
                    r277_sw = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'bbd')
                    r277_bbd = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'obl')
                    r277_obl = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'zt')
                    r277_zt = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'bottomShape')
                    r277_bottomShape = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'pXLeft')
                    r277_pXLeft = _r277_t2.right;
                _r277_t5 = _r277_t5 + 1;
            }
            var r277_top = r1_fallback(r277_top, _r277_t1[0]);
            var r277_bp = r1_fallback(r277_bp, _r277_t1[1]);
            var r277_pBarPosSwAdj = r1_fallback(r277_pBarPosSwAdj, _r277_t1[2]);
            var r277_sw = r1_fallback(r277_sw, _r277_t1[3], r270_Stroke);
            var r277_bbd = r1_fallback(r277_bbd, _r277_t1[4], 0);
            var r277_obl = r1_fallback(r277_obl, _r277_t1[5], 0);
            var r277_zt = r1_fallback(r277_zt, _r277_t1[6], 0);
            var r277_bottomShape = r1_fallback(r277_bottomShape, _r277_t1[7], r270_FiveArcStroke);
            var r277_pXLeft = r1_fallback(r277_pXLeft, _r277_t1[8], 0.025);
            return function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                var r283_t1 = (r277_top * r277_bp + r277_sw * r277_pBarPosSwAdj) * 0.8;
                var r283_t2 = (r277_top * r277_bp + r277_sw * r277_pBarPosSwAdj) * 1;
                var r283_xLeft = r1_mix(r270_SB, r270_RightSB, r277_pXLeft) + r277_zt;
                var r283_xRight = r1_mix(r270_RightSB, r270_SB, 0.05) - (r270_OX - r270_O);
                var r283_kGap = 0.144 - 0.1 * r277_sw / r283_t2;
                r283_currentGlyph.include(r270_difference(function () {
                    var _r286_leti0, _r286_t2, _r286_t3, _r286_t4, _r286_tag5;
                    var _r286_t1 = this;
                    var r286_currentGlyph = _r286_t1;
                    var r286_fiveStroke = r286_currentGlyph.include(r277_bottomShape(r283_xLeft, r283_t2, r277_top / r270_CAP, r277_sw));
                    var r286_firstKnot = r286_fiveStroke.rhsKnots[0];
                    var r286_oblCor = Math.hypot(1, r277_obl);
                    var r286_xVBar = r286_firstKnot.x - r286_oblCor * r270_HSwToV(r277_sw);
                    var r286_xVBarOffset = (r277_top - r286_firstKnot.y) * r277_obl;
                    r286_currentGlyph.include(r270_HBar.t(r277_zt ? r270_SB : r286_xVBar + r286_xVBarOffset, r283_xRight, r277_top, r277_sw));
                    r286_currentGlyph.include(r270_union(r270_intersection(r270_Rect(r286_firstKnot.y + r277_sw, r286_firstKnot.y, 0, r270_Width), r270_dispiro(r270_flat(r286_xVBar, r286_firstKnot.y, r270_widths.rhs.heading(r277_sw, r270_Upward)), r270_flat(r286_xVBar + r286_xVBarOffset, r277_top, r270_heading(r270_Upward)))), r270_intersection(r270_Rect(r277_top, r286_firstKnot.y + r277_sw, 0, r270_Width), r270_dispiro(r270_flat(r286_xVBar, r286_firstKnot.y, r270_widths.rhs.heading(r286_oblCor * r277_sw, r270_Upward)), r270_flat(r286_xVBar + r286_xVBarOffset, r277_top, r270_heading(r270_Upward))))));
                    if (r277_bbd) {
                        _r286_t3 = r270_FiveArcStrokeMask(r283_xLeft, r283_t2, r277_top / r270_CAP, r277_sw);
                        (function (_r286_leti0) {
                            var r290_mask = _r286_leti0;
                            r286_currentGlyph.include(r270_intersection(r290_mask, r270_VBar.r(r270_RightSB - r270_OX - r277_bbd, 0, r270_CAP, r277_sw)));
                            return r286_currentGlyph.include(r270_difference(r270_VBar.r(r286_firstKnot.x + r277_bbd, 0, r270_CAP, r277_sw), r290_mask, r270_Rect(r283_t2 / 2, 0, 0, r270_Width)));
                        }(_r286_t3));
                    }
                    return void 0;
                }, r270_Rect(r283_t2 / 2 + r283_t2 * r283_kGap, r283_t2 / 2 - r283_t2 * r283_kGap, 0, r270_Middle)));
                if (!r277_bbd && r270_SLAB)
                    r283_currentGlyph.include(r270_VSerif.dr(r283_xRight, r277_top, Math.min(r270_VJut, (r277_top - r283_t2) * 0.8)));
                return void 0;
            };
        };
        var r270_FiveConfig = r1_SuffixCfg.weave({
            'upright': 0,
            'oblique': 1 / 12
        }, {
            'arched': [
                r270_FiveArcStroke,
                r270_DesignParameters.fiveBarPos,
                0,
                0.025
            ],
            'flat': [
                r270_FiveFlatStroke,
                7 / 8 * r270_DesignParameters.fiveBarPos,
                1 / 3,
                0.05
            ]
        });
        var _r270_t7 = _r1_t2(r270_FiveConfig)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_obl = _r270_t9[1][0];
            r270_bottomShape = _r270_t9[1][1][0];
            r270_pBarPos = _r270_t9[1][1][1];
            r270_pBarPosSwAdj = _r270_t9[1][1][2];
            r270_pXLeft = _r270_t9[1][1][3];
            _r270_t9[1][1];
            _r270_t9[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('five.lnum.' + r270_suffix, null, function () {
                    var _r301_t1;
                    var _r301_t0 = this;
                    var r301_currentGlyph = _r301_t0;
                    r301_currentGlyph.include(r270_MarkSet.capital());
                    r301_currentGlyph.include(r270_FiveShape(r270_CAP, r270_pBarPos, r270_pBarPosSwAdj, new r270_xn$NamedParameterPair$2Lrc9b('bottomShape', r270_bottomShape), new r270_xn$NamedParameterPair$2Lrc9b('obl', r270_obl), new r270_xn$NamedParameterPair$2Lrc9b('pXLeft', r270_pXLeft)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('five.onum.' + r270_suffix, null, function () {
                    var _r309_t1;
                    var _r309_t0 = this;
                    var r309_currentGlyph = _r309_t0;
                    r309_currentGlyph.include(r270_OnumMarks.p());
                    r309_currentGlyph.include(r270_FiveShape(r270_CAP, r270_pBarPos, r270_pBarPosSwAdj, new r270_xn$NamedParameterPair$2Lrc9b('bottomShape', r270_bottomShape), new r270_xn$NamedParameterPair$2Lrc9b('obl', r270_obl), new r270_xn$NamedParameterPair$2Lrc9b('pXLeft', r270_pXLeft)));
                    r309_currentGlyph.include(r270_ShiftDown());
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('zhuangToneFive.' + r270_suffix, null, function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    r318_currentGlyph.include(r270_MarkSet.capital());
                    r318_currentGlyph.include(r270_FiveShape(r270_CAP, r270_pBarPos, r270_pBarPosSwAdj, new r270_xn$NamedParameterPair$2Lrc9b('bottomShape', r270_bottomShape), new r270_xn$NamedParameterPair$2Lrc9b('zt', (r270_RightSB - r270_SB) * 0.05), new r270_xn$NamedParameterPair$2Lrc9b('pXLeft', r270_pXLeft)));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('zhuangtonefive.' + r270_suffix, null, function () {
                    var _r326_t1;
                    var _r326_t0 = this;
                    var r326_currentGlyph = _r326_t0;
                    r326_currentGlyph.include(r270_MarkSet.e());
                    r326_currentGlyph.include(r270_FiveShape(r270_XH, r270_pBarPos, r270_pBarPosSwAdj, new r270_xn$NamedParameterPair$2Lrc9b('bottomShape', r270_bottomShape), new r270_xn$NamedParameterPair$2Lrc9b('zt', (r270_RightSB - r270_SB) * 0.05), new r270_xn$NamedParameterPair$2Lrc9b('pXLeft', r270_pXLeft)));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('five.lnum', r270_CodeLnum('5'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'five'));
        r270_xn$selectvariant$7Hrq('five.onum', r270_CodeOnum('5'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'five'));
        r270_xn$selectvariant$7Hrq('zhuangToneFive', 444);
        r270_xn$selectvariant$7Hrq('zhuangtonefive', 445, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'zhuangToneFive'));
        var _r270_t10 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t10.BBS;
        var r270_BBD = _r270_t10.BBD;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/five', 120797, function () {
            var _r338_t1;
            var _r338_t0 = this;
            var r338_currentGlyph = _r338_t0;
            r338_currentGlyph.include(r270_MarkSet.capital());
            r338_currentGlyph.include(r270_FiveShape(r270_CAP, r270_DesignParameters.fiveBarPos, 0, new r270_xn$NamedParameterPair$2Lrc9b('sw', r270_BBS), new r270_xn$NamedParameterPair$2Lrc9b('bbd', r270_BBD)));
            return void 0;
        });
    });
    return void 0;
});
