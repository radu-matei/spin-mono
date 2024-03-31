'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../meta/aesthetics.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r336_t) {
    var r336_n, r336_i, r336_a, _r336_t3, _r336_t4, _r336_t5, _r336_t6, _r336_t7, _r336_t8, _r336_t9, _r336_t10, _r336_t11, _r336_t12, _r336_t13, _r336_t14, _r336_t15, _r336_t16, _r336_t17, _r336_t18, _r336_t19, _r336_t20, _r336_t21, _r336_t22, _r336_t23, _r336_t24, _r336_t25, _r336_t26;
    var _r336_t0 = function () {
        _r336_t7 = function (_r336_t8) {
            _r336_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r336_t8
            };
        };
        _r336_t9 = r336_t instanceof Array;
        if (_r336_t9) {
            _r336_t10 = r336_n = r336_t.length;
            _r336_t11 = r336_i = 0;
            _r336_t12 = function (_r336_t14) {
                return _r336_t7(_r336_t14);
            };
            _r336_t13 = function (_r336_t15) {
                _r336_t16 = r336_i < r336_n;
                if (_r336_t16) {
                    _r336_t0 = function (_r336_t17) {
                        return _r336_t13(r336_i = r336_i + 1);
                    };
                    return {
                        'value': [
                            r336_i,
                            r336_t[r336_i]
                        ],
                        'done': false
                    };
                } else
                    return _r336_t12(_r336_t15);
            };
            return _r336_t13();
        } else {
            _r336_t18 = r336_a = Object.keys(r336_t);
            _r336_t19 = r336_n = r336_a.length;
            _r336_t20 = r336_i = 0;
            _r336_t21 = function (_r336_t23) {
                return _r336_t7(_r336_t23);
            };
            _r336_t22 = function (_r336_t24) {
                _r336_t25 = r336_i < r336_n;
                if (_r336_t25) {
                    _r336_t0 = function (_r336_t26) {
                        return _r336_t22(r336_i = r336_i + 1);
                    };
                    return {
                        'value': [
                            r336_a[r336_i],
                            r336_t[r336_a[r336_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r336_t21(_r336_t24);
            };
            return _r336_t22();
        }
    };
    var _r336_t1 = function (x) {
        try {
            return _r336_t0(x);
        } catch (ex) {
            return _r336_t2(ex);
        }
    };
    var _r336_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r336_t3 = this;
    else {
        _r336_t4 = function () {
            void 0;
        };
        _r336_t4.prototype = _r1_t10.prototype;
        _r336_t3 = new _r336_t4();
    }
    _r336_t3[Symbol.iterator] = function () {
        return _r336_t3;
    };
    _r336_t3.next = _r336_t1;
    _r336_t3.throw = function (x) {
        return _r336_t2(x);
    };
    return _r336_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Pi', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_shrink, r271_slab, r271_tail, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t6.BBS;
        var r271_BBD = _r271_t6.BBD;
        var r271_BBBarLeft = _r271_t6.BBBarLeft;
        var r271_BBBarRight = _r271_t6.BBBarRight;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_RightwardTailedBar = _r271_t7.RightwardTailedBar;
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_nShoulder = _r271_t7.nShoulder;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CyrDescender = _r271_t8.CyrDescender;
        var r271_MidHook = _r271_t8.MidHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'PiShape': r271_PiShape };
        });
        var r271_PiShape = function () {
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
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'df')
                    r279_df = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'top')
                    r279_top = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'bottom')
                    r279_bottom = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'shrinkRate')
                    r279_shrinkRate = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'fine')
                    r279_fine = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'doSerif')
                    r279_doSerif = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'endShrink')
                    r279_endShrink = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'tailed')
                    r279_tailed = _r279_t2.right;
                _r279_t5 = _r279_t5 + 1;
            }
            var r279_df = r1_fallback(r279_df, _r279_t1[0]);
            var r279_top = r1_fallback(r279_top, _r279_t1[1]);
            var r279_bottom = r1_fallback(r279_bottom, _r279_t1[2]);
            var r279_shrinkRate = r1_fallback(r279_shrinkRate, _r279_t1[3], 0.05);
            var r279_fine = r1_fallback(r279_fine, _r279_t1[4], r271_Stroke);
            var r279_doSerif = r1_fallback(r279_doSerif, _r279_t1[5], false);
            var r279_endShrink = r1_fallback(r279_endShrink, _r279_t1[6], 0);
            var r279_tailed = r1_fallback(r279_tailed, _r279_t1[7], false);
            return function () {
                var r285_sf, _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_shrink = r279_doSerif ? 0 : r279_shrinkRate * (r279_df.rightSB - r279_df.leftSB);
                var r285_endexpand = r279_doSerif ? 0 : -r279_endShrink * (r279_df.rightSB - r279_df.leftSB) || r285_shrink / 2;
                r285_currentGlyph.include(r271_HBar.t(r279_df.leftSB - r285_endexpand, r279_df.rightSB + r285_endexpand, r279_top, r279_fine));
                r285_currentGlyph.include(r271_VBar.l(r279_df.leftSB + r285_shrink, r279_bottom, r279_top - r279_fine / 2, r279_fine));
                if (r279_tailed)
                    r285_currentGlyph.include(r271_RightwardTailedBar(r279_df.rightSB - r285_shrink, r279_bottom, r279_top));
                else
                    r285_currentGlyph.include(r271_VBar.r(r279_df.rightSB - r285_shrink, r279_bottom, r279_top - r279_fine / 2, r279_fine));
                if (r279_doSerif) {
                    r285_sf = r271_SerifFrame(r279_top, r279_bottom, r279_df.leftSB + r285_shrink, r279_df.rightSB - r285_shrink, new r271_xn$NamedParameterPair$2Lrc9b('swRef', r279_fine));
                    r285_currentGlyph.include(function () {
                        var _r293_t1;
                        var _r293_t0 = this;
                        var r293_currentGlyph = _r293_t0;
                        r293_currentGlyph.include(r285_sf.lt.outer, true, true);
                        r293_currentGlyph.include(r285_sf.rt.outer);
                        r293_currentGlyph.include(r285_sf.lb.full);
                        r293_currentGlyph.include(r285_sf.rb.full);
                        return void 0;
                    });
                }
                return void 0;
            };
        };
        var r271_MathBBPiShape = function () {
            var _r298_t6;
            var _r298_t7 = arguments;
            var _r298_t0 = [].slice.call(_r298_t7, 0);
            var _r298_t1 = [];
            var _r298_t2 = 0;
            while (_r298_t2 < _r298_t0.length) {
                if (!(_r298_t0[_r298_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r298_t1.push(_r298_t0[_r298_t2]);
                _r298_t2 = _r298_t2 + 1;
            }
            var _r298_t3 = _r298_t0;
            var _r298_t4 = _r298_t3.length;
            var _r298_t5 = 0;
            while (_r298_t5 < _r298_t4) {
                _r298_t2 = _r298_t3[_r298_t5];
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'df')
                    r298_df = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'top')
                    r298_top = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'bottom')
                    r298_bottom = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'shrinkRate')
                    r298_shrinkRate = _r298_t2.right;
                if (_r298_t2 && _r298_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r298_t2.left === 'endShrink')
                    r298_endShrink = _r298_t2.right;
                _r298_t5 = _r298_t5 + 1;
            }
            var r298_df = r1_fallback(r298_df, _r298_t1[0]);
            var r298_top = r1_fallback(r298_top, _r298_t1[1]);
            var r298_bottom = r1_fallback(r298_bottom, _r298_t1[2]);
            var r298_shrinkRate = r1_fallback(r298_shrinkRate, _r298_t1[3], 0.05);
            var r298_endShrink = r1_fallback(r298_endShrink, _r298_t1[4], 0);
            return function () {
                var _r304_t1;
                var _r304_t0 = this;
                var r304_currentGlyph = _r304_t0;
                var r304_shrink = r298_shrinkRate * (r298_df.rightSB - r298_df.leftSB);
                var r304_endexpand = -r298_endShrink * (r298_df.rightSB - r298_df.leftSB) || r304_shrink / 2;
                r304_currentGlyph.include(r271_HBar.t(r298_df.leftSB - r304_endexpand, r298_df.rightSB + r304_endexpand, r298_top, r271_BBS));
                r304_currentGlyph.include(r271_BBBarLeft(r298_df.leftSB + r304_shrink, r298_bottom, r298_top));
                r304_currentGlyph.include(r271_BBBarRight(r298_df.rightSB - r304_shrink, r298_bottom, r298_top));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Pi', 928, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r271_MarkSet.capital());
            r310_currentGlyph.include(r271_PiShape(r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r271_xn$NamedParameterPair$2Lrc9b('doSerif', r271_SLAB)));
            return void 0;
        });
        r271_alias('cyrl/Pe', 1055, 'grek/Pi');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/smcpPi', 7464, function () {
            var _r317_t1;
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            r317_currentGlyph.include(r271_MarkSet.e());
            r317_currentGlyph.include(r271_PiShape(r271_DivFrame(1), r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r271_xn$NamedParameterPair$2Lrc9b('doSerif', r271_SLAB)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/grek/Pi', 8511, function () {
            var _r324_t1;
            var _r324_t0 = this;
            var r324_currentGlyph = _r324_t0;
            r324_currentGlyph.include(r271_MarkSet.capital());
            r324_currentGlyph.include(r271_MathBBPiShape(r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/pe.upright', null, function () {
            var _r330_t1;
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            r330_currentGlyph.include(r271_MarkSet.e());
            r330_currentGlyph.include(r271_PiShape(r271_DivFrame(1), r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0), new r271_xn$NamedParameterPair$2Lrc9b('doSerif', r271_SLAB)));
            return void 0;
        });
        r271_xn$derivecomposites$7Hrq('cyrl/PeDescender', 1316, 'cyrl/Pe', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        r271_xn$derivecomposites$7Hrq('cyrl/peDescender.upright', null, 'cyrl/pe.upright', r271_CyrDescender.rSideJut(r271_RightSB, 0));
        var r271_SmallPiShrink = 1 / 6 - r271_HSwToV(0.25 * r271_Stroke) / (r271_RightSB - r271_SB);
        var r271_SmallPiConfig = {
            'smallCap': [
                [
                    0,
                    r271_SLAB
                ],
                false
            ],
            'tailless': [
                [
                    r271_SmallPiShrink,
                    false
                ],
                false
            ],
            'tailed': [
                [
                    r271_SmallPiShrink,
                    false
                ],
                true
            ]
        };
        var _r271_t9 = _r1_t2(r271_SmallPiConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_shrink = _r271_t11[1][0][0];
            r271_slab = _r271_t11[1][0][1];
            _r271_t11[1][0];
            r271_tail = _r271_t11[1][1];
            _r271_t11[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/pi.' + r271_suffix, null, function () {
                    var _r342_t1;
                    var _r342_t0 = this;
                    var r342_currentGlyph = _r342_t0;
                    var r342_df = r342_currentGlyph.include(r271_DivFrame(1));
                    r342_currentGlyph.include(r342_df.markSet.e());
                    r342_currentGlyph.include(r271_PiShape(r342_df, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', r271_shrink), new r271_xn$NamedParameterPair$2Lrc9b('doSerif', r271_slab), new r271_xn$NamedParameterPair$2Lrc9b('tailed', r271_tail)));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('grek/pi', 960);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/grek/pi', 8508, function () {
            var _r351_t1;
            var _r351_t0 = this;
            var r351_currentGlyph = _r351_t0;
            r351_currentGlyph.include(r271_MarkSet.e());
            r351_currentGlyph.include(r271_MathBBPiShape(r271_DivFrame(1), r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('shrinkRate', 0.06)));
            return void 0;
        });
        var r271_CyrlPeHookShape = function (r355_df, r355_top) {
            var _r355_t0, _r355_t1;
            return function () {
                var r357_sf, _r357_t1;
                var _r357_t0 = this;
                var r357_currentGlyph = _r357_t0;
                var r357_xm = r355_df.middle + r271_HSwToV(0.5 * r355_df.mvs);
                r357_currentGlyph.include(r271_HBar.t(r355_df.leftSB, r357_xm, r355_top, r355_df.mvs));
                r357_currentGlyph.include(r271_VBar.l(r355_df.leftSB, 0, r355_top - r355_df.mvs / 2, r355_df.mvs));
                r357_currentGlyph.include(r271_VBar.r(r357_xm, 0, r355_top - r355_df.mvs / 2, r355_df.mvs));
                r357_currentGlyph.include(r271_MidHook.m(r355_df, r355_top));
                if (r271_SLAB) {
                    r357_sf = r271_SerifFrame.fromDf(r355_df, r355_top, 0).slice(0, 1);
                    if (r355_df.width > r271_para.refJut * 7) {
                        r357_currentGlyph.include(r357_sf.lt.outer);
                        r357_currentGlyph.include(r357_sf.rt.outer);
                        r357_currentGlyph.include(r357_sf.lb.full);
                        r357_currentGlyph.include(r357_sf.rb.full);
                    } else {
                        r357_currentGlyph.include(r357_sf.lt.outer);
                        r357_currentGlyph.include(r357_sf.rt.outer);
                        r357_currentGlyph.include(r357_sf.lb.outer);
                        r357_currentGlyph.include(r357_sf.rb.outer);
                    }
                }
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/PeMidHook', 1190, function () {
            var _r372_t1;
            var _r372_t0 = this;
            var r372_currentGlyph = _r372_t0;
            var r372_df = r372_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
            r372_currentGlyph.include(r372_df.markSet.capDesc());
            r372_currentGlyph.include(r271_CyrlPeHookShape(r372_df, r271_CAP));
            return void 0;
        });
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/peMidHook.upright', null, function () {
            var _r378_t1;
            var _r378_t0 = this;
            var r378_currentGlyph = _r378_t0;
            var r378_df = r378_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
            r378_currentGlyph.include(r378_df.markSet.p());
            r378_currentGlyph.include(r271_CyrlPeHookShape(r378_df, r271_XH));
            return void 0;
        });
    });
    return void 0;
});
