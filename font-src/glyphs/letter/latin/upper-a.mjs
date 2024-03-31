'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
import * as _s0_t2 from '../../../support/util/mask-bit.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r386_t) {
    var r386_n, r386_i, r386_a, _r386_t3, _r386_t4, _r386_t5, _r386_t6, _r386_t7, _r386_t8, _r386_t9, _r386_t10, _r386_t11, _r386_t12, _r386_t13, _r386_t14, _r386_t15, _r386_t16, _r386_t17, _r386_t18, _r386_t19, _r386_t20, _r386_t21, _r386_t22, _r386_t23, _r386_t24, _r386_t25, _r386_t26;
    var _r386_t0 = function () {
        _r386_t7 = function (_r386_t8) {
            _r386_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r386_t8
            };
        };
        _r386_t9 = r386_t instanceof Array;
        if (_r386_t9) {
            _r386_t10 = r386_n = r386_t.length;
            _r386_t11 = r386_i = 0;
            _r386_t12 = function (_r386_t14) {
                return _r386_t7(_r386_t14);
            };
            _r386_t13 = function (_r386_t15) {
                _r386_t16 = r386_i < r386_n;
                if (_r386_t16) {
                    _r386_t0 = function (_r386_t17) {
                        return _r386_t13(r386_i = r386_i + 1);
                    };
                    return {
                        'value': [
                            r386_i,
                            r386_t[r386_i]
                        ],
                        'done': false
                    };
                } else
                    return _r386_t12(_r386_t15);
            };
            return _r386_t13();
        } else {
            _r386_t18 = r386_a = Object.keys(r386_t);
            _r386_t19 = r386_n = r386_a.length;
            _r386_t20 = r386_i = 0;
            _r386_t21 = function (_r386_t23) {
                return _r386_t7(_r386_t23);
            };
            _r386_t22 = function (_r386_t24) {
                _r386_t25 = r386_i < r386_n;
                if (_r386_t25) {
                    _r386_t0 = function (_r386_t26) {
                        return _r386_t22(r386_i = r386_i + 1);
                    };
                    return {
                        'value': [
                            r386_a[r386_i],
                            r386_t[r386_a[r386_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r386_t21(_r386_t24);
            };
            return _r386_t22();
        }
    };
    var _r386_t1 = function (x) {
        try {
            return _r386_t0(x);
        } catch (ex) {
            return _r386_t2(ex);
        }
    };
    var _r386_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11)
        _r386_t3 = this;
    else {
        _r386_t4 = function () {
            void 0;
        };
        _r386_t4.prototype = _r1_t11.prototype;
        _r386_t3 = new _r386_t4();
    }
    _r386_t3[Symbol.iterator] = function () {
        return _r386_t3;
    };
    _r386_t3.next = _r386_t1;
    _r386_t3.throw = function (x) {
        return _r386_t2(x);
    };
    return _r386_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var _r1_t10 = _s0_t2;
var r1_maskBits = _r1_t10.maskBits;
var r1_bitOr = _r1_t10.bitOr;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r271_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-A', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_suffix, r272_fStraightBar, r272_slabKind, r272_fBarStraight, _r272_t12, _r272_t15, _r272_t18, _r272_t19, _r272_t20, _r272_tag21, _r272_t22, _r272_tag23;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$Exec$2Lrc5 = _r272_t0['$Exec$'];
        var r272_para = _r272_t0.para;
        var r272_MarkSet = _r272_t0.MarkSet;
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var r272_DivFrame = _r272_t0.DivFrame;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_Width = _r272_t1.Width;
        var r272_SB = _r272_t1.SB;
        var r272_CAP = _r272_t1.CAP;
        var r272_XH = _r272_t1.XH;
        var r272_SymbolMid = _r272_t1.SymbolMid;
        var r272_OperTop = _r272_t1.OperTop;
        var r272_OperBot = _r272_t1.OperBot;
        var r272_ApparentTranslate = _r272_t1.ApparentTranslate;
        var r272_Stroke = _r272_t1.Stroke;
        var r272_LongJut = _r272_t1.LongJut;
        var r272_SLAB = _r272_t1.SLAB;
        var r272_HalfStroke = _r272_t1.HalfStroke;
        var r272_RightSB = _r272_t1.RightSB;
        var r272_Middle = _r272_t1.Middle;
        var r272_SideJut = _r272_t1.SideJut;
        var r272_AdviceStroke = _r272_t1.AdviceStroke;
        var r272_OverlayStroke = _r272_t1.OverlayStroke;
        var r272_OperatorStroke = _r272_t1.OperatorStroke;
        var r272_MidJutSide = _r272_t1.MidJutSide;
        var r272_HSwToV = _r272_t1.HSwToV;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var r272_straight = _r272_t2.straight;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var r272_union = _r272_t3.union;
        var r272_intersection = _r272_t3.intersection;
        var _r272_t4 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r272_tagged = _r272_t4.tagged;
        var r272_HSerif = _r272_t4.HSerif;
        var r272_HBar = _r272_t4.HBar;
        var r272_HOverlayBar = _r272_t4.HOverlayBar;
        var r272_VBar = _r272_t4.VBar;
        var r272_FlipAround = _r272_t4.FlipAround;
        var r272_MaskLeft = _r272_t4.MaskLeft;
        var _r272_t5 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_alias = _r272_t5.alias;
        var r272_turned = _r272_t5.turned;
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$linkreducedvariant$5sIl8 = _r272_t5['link-reduced-variant'];
        var _r272_t6 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r272_markHalfStroke = _r272_t6.markHalfStroke;
        var _r272_t7 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r272_SetGrekUpperTonos = _r272_t7.SetGrekUpperTonos;
        var r272_CreateOgonekComposition = _r272_t7.CreateOgonekComposition;
        var _r272_t8 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r272_SerifFrame = _r272_t8.SerifFrame;
        var _r272_t9 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-V'].resolve();
        var r272_VShapeOutline = _r272_t9.VShapeOutline;
        var r272_VShape = _r272_t9.VShape;
        var r272_xn$SLABNONE$5sIl = 0;
        var r272_xn$SLABTOP$5sIl = 1;
        var r272_xn$SLABLEFT$5sIl = 2;
        var r272_xn$SLABRIGHT$5sIl = 4;
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return { 'AMaskShape': r272_AMaskShape };
        });
        var r272_AMaskShape = function () {
            var _r281_t6;
            var _r281_t7 = arguments;
            var _r281_t0 = [].slice.call(_r281_t7, 0);
            var _r281_t1 = [];
            var _r281_t2 = 0;
            while (_r281_t2 < _r281_t0.length) {
                if (!(_r281_t0[_r281_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r281_t1.push(_r281_t0[_r281_t2]);
                _r281_t2 = _r281_t2 + 1;
            }
            var _r281_t3 = _r281_t0;
            var _r281_t4 = _r281_t3.length;
            var _r281_t5 = 0;
            while (_r281_t5 < _r281_t4) {
                _r281_t2 = _r281_t3[_r281_t5];
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'df')
                    r281_df = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'fBarStraight')
                    r281_fBarStraight = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'top')
                    r281_top = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'sw')
                    r281_sw = _r281_t2.right;
                _r281_t5 = _r281_t5 + 1;
            }
            var r281_df = r1_fallback(r281_df, _r281_t1[0]);
            var r281_fBarStraight = r1_fallback(r281_fBarStraight, _r281_t1[1]);
            var r281_top = r1_fallback(r281_top, _r281_t1[2]);
            var r281_sw = r1_fallback(r281_sw, _r281_t1[3]);
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r288_t1;
                var _r288_t0 = this;
                var r288_currentGlyph = _r288_t0;
                r288_currentGlyph.include(r272_VShapeOutline(r281_df, r281_fBarStraight, r281_top, r281_sw));
                r288_currentGlyph.include(r272_FlipAround(r281_df.width / 2, r281_top / 2));
                return void 0;
            });
        };
        var r272_ABarPosition = function (r291_fBaseSlabs, r291_top) {
            var _r291_t0, _r291_t1;
            return r1_mix(r291_fBaseSlabs ? r272_Stroke : 0, r291_top, r272_XH / 2 / r272_CAP);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r293_t0, _r293_t1;
            return { 'AConfig': r272_AConfig };
        });
        var r272_AConfig = r1_SuffixCfg.weave({
            'straight': true,
            'curly': false
        }, {
            'serifless': r272_xn$SLABNONE$5sIl,
            'topSerifed': r272_xn$SLABTOP$5sIl,
            'baseSerifed': r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl),
            'triSerifed': r1_bitOr(r272_xn$SLABTOP$5sIl, r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)
        });
        var r272_ASerifs = function (r294_df, r294_top, r294_sw, r294_slabKind) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_sf = r272_SerifFrame.fromDf(r294_df, r294_top, 0);
                if (r1_maskBits(r294_slabKind, r272_xn$SLABLEFT$5sIl))
                    r296_currentGlyph.include(r296_sf.lb.full);
                if (r1_maskBits(r294_slabKind, r272_xn$SLABRIGHT$5sIl))
                    r296_currentGlyph.include(r296_sf.rb.full);
                if (r1_maskBits(r294_slabKind, r272_xn$SLABTOP$5sIl))
                    r296_currentGlyph.include(r272_intersection(r272_MaskLeft(r294_df.middle), r1_maskBits(r294_slabKind, r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)) ? r272_HSerif.lt(r294_df.middle, r294_top, r272_MidJutSide + r272_HSwToV(0.25 * r294_sw), r296_sf.swSerif) : r272_HSerif.lt(r294_df.middle, r294_top, r1_mix(r272_MidJutSide, r272_LongJut, 0.5), r296_sf.swSerif)));
                return void 0;
            };
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r301_t0, _r301_t1;
            return { 'ALetterShape': r272_ALetterShape };
        });
        var r272_ALetterShape = function () {
            var _r302_t6;
            var _r302_t7 = arguments;
            var _r302_t0 = [].slice.call(_r302_t7, 0);
            var _r302_t1 = [];
            var _r302_t2 = 0;
            while (_r302_t2 < _r302_t0.length) {
                if (!(_r302_t0[_r302_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r302_t1.push(_r302_t0[_r302_t2]);
                _r302_t2 = _r302_t2 + 1;
            }
            var _r302_t3 = _r302_t0;
            var _r302_t4 = _r302_t3.length;
            var _r302_t5 = 0;
            while (_r302_t5 < _r302_t4) {
                _r302_t2 = _r302_t3[_r302_t5];
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'df')
                    r302_df = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'fStraightBar')
                    r302_fStraightBar = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'slabKind')
                    r302_slabKind = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'top')
                    r302_top = _r302_t2.right;
                if (_r302_t2 && _r302_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r302_t2.left === 'sw')
                    r302_sw = _r302_t2.right;
                _r302_t5 = _r302_t5 + 1;
            }
            var r302_df = r1_fallback(r302_df, _r302_t1[0]);
            var r302_fStraightBar = r1_fallback(r302_fStraightBar, _r302_t1[1]);
            var r302_slabKind = r1_fallback(r302_slabKind, _r302_t1[2]);
            var r302_top = r1_fallback(r302_top, _r302_t1[3]);
            var r302_sw = r1_fallback(r302_sw, _r302_t1[4]);
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                r309_currentGlyph.include(r272_VShape(r302_df, r302_fStraightBar, r302_top, r302_sw));
                r309_currentGlyph.include(r272_FlipAround(r302_df.middle, r302_top / 2));
                var r309_yBar = r272_ABarPosition(r1_maskBits(r302_slabKind, r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)), r302_top);
                r309_currentGlyph.include(r272_tagged('crossBar', r272_intersection(r272_HBar.t(0, r302_df.width, r309_yBar), r272_AMaskShape(r302_df, r302_fStraightBar, r302_top, r302_sw))));
                r309_currentGlyph.include(r272_ASerifs(r302_df, r302_top, r302_sw, r302_slabKind));
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r315_t0, _r315_t1;
            return { 'LambdaShape': r272_LambdaShape };
        });
        var r272_LambdaShape = function () {
            var _r316_t6;
            var _r316_t7 = arguments;
            var _r316_t0 = [].slice.call(_r316_t7, 0);
            var _r316_t1 = [];
            var _r316_t2 = 0;
            while (_r316_t2 < _r316_t0.length) {
                if (!(_r316_t0[_r316_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r316_t1.push(_r316_t0[_r316_t2]);
                _r316_t2 = _r316_t2 + 1;
            }
            var _r316_t3 = _r316_t0;
            var _r316_t4 = _r316_t3.length;
            var _r316_t5 = 0;
            while (_r316_t5 < _r316_t4) {
                _r316_t2 = _r316_t3[_r316_t5];
                if (_r316_t2 && _r316_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'df')
                    r316_df = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'fBarStraight')
                    r316_fBarStraight = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'top')
                    r316_top = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'sw')
                    r316_sw = _r316_t2.right;
                if (_r316_t2 && _r316_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r316_t2.left === 'slabKind')
                    r316_slabKind = _r316_t2.right;
                _r316_t5 = _r316_t5 + 1;
            }
            var r316_df = r1_fallback(r316_df, _r316_t1[0]);
            var r316_fBarStraight = r1_fallback(r316_fBarStraight, _r316_t1[1]);
            var r316_top = r1_fallback(r316_top, _r316_t1[2]);
            var r316_sw = r1_fallback(r316_sw, _r316_t1[3]);
            var r316_slabKind = r1_fallback(r316_slabKind, _r316_t1[4]);
            return function () {
                var _r322_t1;
                var _r322_t0 = this;
                var r322_currentGlyph = _r322_t0;
                r322_currentGlyph.include(r272_VShape(r316_df, r316_fBarStraight, r316_top, r316_sw));
                r322_currentGlyph.include(r272_FlipAround(r316_df.middle, r316_top / 2));
                r322_currentGlyph.include(r272_ASerifs(r316_df, r316_top, r316_sw, r316_slabKind));
                return void 0;
            };
        };
        var _r272_t10 = Object.entries(r272_AConfig)[Symbol.iterator]();
        var _r272_t11 = void 0;
        while (!(_r272_t11 = _r272_t10.next()).done) {
            _r272_t12 = _r272_t11.value;
            r272_suffix = _r272_t12[0];
            r272_fStraightBar = _r272_t12[1][0];
            r272_slabKind = _r272_t12[1][1];
            _r272_t12[1];
            (function () {
                var r328_AShapeImpl = function (r329_mak, r329_top, r329_fGrek, r329_fOverlays) {
                    var _r329_t0, _r329_t1;
                    return function () {
                        var r331_yBar, _r331_t1;
                        var _r331_t0 = this;
                        var r331_currentGlyph = _r331_t0;
                        var r331_df = r272_DivFrame(1);
                        r331_currentGlyph.include(r331_df.markSet[r329_mak]());
                        r331_currentGlyph.setBaseAnchor('trailing', r331_df.rightSB, 0);
                        if (r329_fGrek)
                            r331_currentGlyph.include(r272_SetGrekUpperTonos((r331_df.rightSB - r331_df.leftSB) * (r1_maskBits(r272_slabKind, r272_xn$SLABTOP$5sIl) ? 0 : 0.2)));
                        r331_currentGlyph.include(r272_ALetterShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r331_df), new r272_xn$NamedParameterPair$2Lrc9b('top', r329_top), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('fStraightBar', r272_fStraightBar), new r272_xn$NamedParameterPair$2Lrc9b('slabKind', r272_slabKind)));
                        if (r329_fOverlays) {
                            r331_yBar = r272_ABarPosition(r1_maskBits(r272_slabKind, r1_bitOr(r272_xn$SLABLEFT$5sIl, r272_xn$SLABRIGHT$5sIl)), r329_top);
                            r331_currentGlyph.ejectTagged('crossBar');
                            r331_currentGlyph.include(r272_HOverlayBar(r1_mix(0, r272_SB, 0.5), r1_mix(r272_Width, r272_RightSB, 0.5), r331_yBar - r272_HalfStroke + 0.5 * r272_OverlayStroke));
                            r331_currentGlyph.include(r272_HOverlayBar(r1_mix(0, r272_SB, 0.5), r1_mix(r272_Width, r272_RightSB, 0.5), r1_mix(r331_yBar, r329_top, 0.25)));
                        }
                        return void 0;
                    };
                };
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('A.' + r272_suffix, null, r328_AShapeImpl('capital', r272_CAP));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Alpha.' + r272_suffix, null, r328_AShapeImpl('capital', r272_CAP, true));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('smcpA.' + r272_suffix, null, r328_AShapeImpl('e', r272_XH));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('currency/australSign.' + r272_suffix, null, r328_AShapeImpl('capital', r272_CAP, false, true));
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Lambda.' + r272_suffix, null, function () {
                    var _r350_t1;
                    var _r350_t0 = this;
                    var r350_currentGlyph = _r350_t0;
                    r350_currentGlyph.include(r272_MarkSet.capital());
                    r350_currentGlyph.include(r272_LambdaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r272_fStraightBar), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('slabKind', r272_slabKind)));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/smcpLambda.' + r272_suffix, null, function () {
                    var _r360_t1;
                    var _r360_t0 = this;
                    var r360_currentGlyph = _r360_t0;
                    r360_currentGlyph.include(r272_MarkSet.e());
                    r360_currentGlyph.include(r272_LambdaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r272_fStraightBar), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_XH), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_Stroke), new r272_xn$NamedParameterPair$2Lrc9b('slabKind', r272_slabKind)));
                    return void 0;
                });
            }());
        }
        r272_xn$selectvariant$7Hrq('A', 'A');
        r272_xn$linkreducedvariant$5sIl8('A/sansSerif', 'A', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('smcpA', 7424, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r272_xn$selectvariant$7Hrq('grek/Alpha', 913, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r272_xn$selectvariant$7Hrq('currency/australSign', 8371, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r272_xn$linkreducedvariant$5sIl8('grek/Alpha/sansSerif', 'grek/Alpha', r1_MathSansSerif, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'A/sansSerif'));
        r272_alias('cyrl/A', 1040, 'A');
        r272_turned('turnA', 11375, 'A', r272_Middle, r272_CAP / 2);
        r272_xn$selectvariant$7Hrq('grek/Lambda', 923);
        r272_xn$linkreducedvariant$5sIl8('grek/Lambda/sansSerif', 'grek/Lambda', r1_MathSansSerif);
        r272_xn$selectvariant$7Hrq('grek/smcpLambda', 7463, new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Lambda'));
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r374_t0, _r374_t1;
            return { 'DeltaShape': r272_DeltaShape };
        });
        var r272_DeltaShape = function () {
            var _r375_t6;
            var _r375_t7 = arguments;
            var _r375_t0 = [].slice.call(_r375_t7, 0);
            var _r375_t1 = [];
            var _r375_t2 = 0;
            while (_r375_t2 < _r375_t0.length) {
                if (!(_r375_t0[_r375_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r375_t1.push(_r375_t0[_r375_t2]);
                _r375_t2 = _r375_t2 + 1;
            }
            var _r375_t3 = _r375_t0;
            var _r375_t4 = _r375_t3.length;
            var _r375_t5 = 0;
            while (_r375_t5 < _r375_t4) {
                _r375_t2 = _r375_t3[_r375_t5];
                if (_r375_t2 && _r375_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r375_t2.left === 'df')
                    r375_df = _r375_t2.right;
                if (_r375_t2 && _r375_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r375_t2.left === 'top')
                    r375_top = _r375_t2.right;
                if (_r375_t2 && _r375_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r375_t2.left === 'sw')
                    r375_sw = _r375_t2.right;
                if (_r375_t2 && _r375_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r375_t2.left === 'fBarStraight')
                    r375_fBarStraight = _r375_t2.right;
                _r375_t5 = _r375_t5 + 1;
            }
            var r375_df = r1_fallback(r375_df, _r375_t1[0]);
            var r375_top = r1_fallback(r375_top, _r375_t1[1]);
            var r375_sw = r1_fallback(r375_sw, _r375_t1[2]);
            var r375_fBarStraight = r1_fallback(r375_fBarStraight, _r375_t1[3]);
            return r272_union(r272_LambdaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r375_df), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r375_fBarStraight), new r272_xn$NamedParameterPair$2Lrc9b('top', r375_top), new r272_xn$NamedParameterPair$2Lrc9b('sw', r375_sw), new r272_xn$NamedParameterPair$2Lrc9b('slab', false)), r272_intersection(r272_HBar.b(0, r375_df.width, 0, r375_sw), r272_AMaskShape(r375_df, r375_fBarStraight, r375_top, r375_sw)));
        };
        var r272_DeltaConfig = {
            'straight': true,
            'curly': false
        };
        var _r272_t13 = _r1_t2(r272_DeltaConfig)[Symbol.iterator]();
        var _r272_t14 = void 0;
        while (!(_r272_t14 = _r272_t13.next()).done) {
            _r272_t15 = _r272_t14.value;
            r272_suffix = _r272_t15[0];
            r272_fBarStraight = _r272_t15[1];
            (function () {
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Delta.' + r272_suffix, null, function () {
                    var _r392_t1;
                    var _r392_t0 = this;
                    var r392_currentGlyph = _r392_t0;
                    r392_currentGlyph.include(r272_MarkSet.capital());
                    r392_currentGlyph.include(r272_DeltaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r272_fBarStraight), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_Stroke)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('increment.' + r272_suffix, null, function () {
                    var _r401_t1;
                    var _r401_t0 = this;
                    var r401_currentGlyph = _r401_t0;
                    r401_currentGlyph.include(r272_MarkSet.capital());
                    r401_currentGlyph.include(r272_DeltaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r272_fBarStraight), new r272_xn$NamedParameterPair$2Lrc9b('top', r272_CAP), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_OperatorStroke)));
                    return void 0;
                });
                r272_xn$createAndSaveGlyphImpl$2Lrc3c('increment.aplForm.' + r272_suffix, null, function () {
                    var _r410_t1;
                    var _r410_t0 = this;
                    var r410_currentGlyph = _r410_t0;
                    r410_currentGlyph.include(r272_MarkSet.oper());
                    var r410_shapeHeight = r272_OperTop - r272_OperBot;
                    r410_currentGlyph.include(r272_DeltaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r272_fBarStraight), new r272_xn$NamedParameterPair$2Lrc9b('top', r410_shapeHeight), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_OperatorStroke)));
                    r410_currentGlyph.include(r272_ApparentTranslate(0, r272_SymbolMid - r410_shapeHeight / 2));
                    return void 0;
                });
                return r272_xn$createAndSaveGlyphImpl$2Lrc3c('increment.aplThin.' + r272_suffix, null, function () {
                    var _r420_t1;
                    var _r420_t0 = this;
                    var r420_currentGlyph = _r420_t0;
                    r420_currentGlyph.include(r272_MarkSet.oper());
                    var r420_shapeHeight = r272_OperTop - r272_OperBot;
                    r420_currentGlyph.include(r272_DeltaShape(new r272_xn$NamedParameterPair$2Lrc9b('df', r272_DivFrame(1)), new r272_xn$NamedParameterPair$2Lrc9b('fBarStraight', r272_fBarStraight), new r272_xn$NamedParameterPair$2Lrc9b('top', r420_shapeHeight), new r272_xn$NamedParameterPair$2Lrc9b('sw', r272_AdviceStroke(3.75))));
                    r420_currentGlyph.include(r272_ApparentTranslate(0, r272_SymbolMid - r420_shapeHeight / 2));
                    return void 0;
                });
            }());
        }
        var r272_CodeNonApl = function (r428_u) {
            var _r428_t0, _r428_t1;
            return r272_para.variantSelector['__enableAplForm'] === 'enable' ? null : r428_u;
        };
        var r272_CodeApl = function (r429_u) {
            var _r429_t0, _r429_t1;
            return r272_para.variantSelector['__enableAplForm'] === 'enable' ? r429_u : null;
        };
        r272_xn$selectvariant$7Hrq('grek/Delta', 916);
        r272_xn$selectvariant$7Hrq('increment', r272_CodeNonApl(8710), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Delta'));
        r272_xn$selectvariant$7Hrq('increment.aplForm', r272_CodeApl(8710), new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Delta'));
        r272_xn$selectvariant$7Hrq('increment.aplThin', new r272_xn$NamedParameterPair$2Lrc9b('follow', 'grek/Delta'));
        r272_turned('nabla', r272_CodeNonApl(8711), 'increment', r272_Middle, r272_CAP / 2);
        r272_turned('nabla.aplForm', r272_CodeApl(8711), 'increment.aplForm', r272_Middle, r272_SymbolMid);
        r272_turned('nabla.aplThin', null, 'increment.aplThin', r272_Middle, r272_SymbolMid);
        r272_xn$deriveglyphs$7Hrq('cyrl/De.BGR', null, 'grek/Delta', function (r433_src, r433_gr) {
            var _r433_t0, _r433_t1;
            return function () {
                var _r435_t1;
                var _r435_t0 = this;
                var r435_currentGlyph = _r435_t0;
                r435_currentGlyph.include(r272_xn$referglyph$1aao(r433_src), r272_AS_BASE, r272_ALSO_METRICS);
                var r435_descenderOverflow = r272_SLAB ? r272_SideJut : (r272_RightSB - r272_SB) * 0.075;
                var r435_xCutLeft = r272_SB;
                var r435_xCutRight = r272_RightSB;
                r435_currentGlyph.include(r272_HBar.b(r435_xCutLeft - r435_descenderOverflow, r435_xCutRight + r435_descenderOverflow, 0));
                r435_currentGlyph.include(r272_VBar.l(r435_xCutLeft - r435_descenderOverflow, -r272_LongJut + r272_HalfStroke, r272_Stroke));
                r435_currentGlyph.include(r272_VBar.r(r435_xCutRight + r435_descenderOverflow, -r272_LongJut + r272_HalfStroke, r272_Stroke));
                return void 0;
            };
        });
        var _r272_t16 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r272_BBS = _r272_t16.BBS;
        var r272_BBD = _r272_t16.BBD;
        var _r272_t17 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-V'].resolve();
        var r272_BBVShape = _r272_t17.BBVShape;
        var r272_BBVInnerMaskShape = _r272_t17.BBVInnerMaskShape;
        r272_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/A', 120120, function () {
            var _r444_t1;
            var _r444_t0 = this;
            var r444_currentGlyph = _r444_t0;
            r444_currentGlyph.include(r272_MarkSet.capital());
            r444_currentGlyph.include(r272_union(r272_BBVShape(r272_SB, r272_RightSB, 1, 1, r272_CAP), r272_intersection(r272_BBVInnerMaskShape(r272_SB, r272_RightSB, 1, 1, r272_CAP), r272_HBar.t(0, r272_Width, r272_CAP - r272_XH / 2, r272_BBS))));
            r444_currentGlyph.include(r272_FlipAround(r272_Middle, r272_CAP / 2));
            return void 0;
        });
        return r272_CreateOgonekComposition('AOgonek', 260, 'A');
    });
    return void 0;
});
