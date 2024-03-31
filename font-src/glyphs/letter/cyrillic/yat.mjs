'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r318_t) {
    var r318_n, r318_i, r318_a, _r318_t3, _r318_t4, _r318_t5, _r318_t6, _r318_t7, _r318_t8, _r318_t9, _r318_t10, _r318_t11, _r318_t12, _r318_t13, _r318_t14, _r318_t15, _r318_t16, _r318_t17, _r318_t18, _r318_t19, _r318_t20, _r318_t21, _r318_t22, _r318_t23, _r318_t24, _r318_t25, _r318_t26;
    var _r318_t0 = function () {
        _r318_t7 = function (_r318_t8) {
            _r318_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r318_t8
            };
        };
        _r318_t9 = r318_t instanceof Array;
        if (_r318_t9) {
            _r318_t10 = r318_n = r318_t.length;
            _r318_t11 = r318_i = 0;
            _r318_t12 = function (_r318_t14) {
                return _r318_t7(_r318_t14);
            };
            _r318_t13 = function (_r318_t15) {
                _r318_t16 = r318_i < r318_n;
                if (_r318_t16) {
                    _r318_t0 = function (_r318_t17) {
                        return _r318_t13(r318_i = r318_i + 1);
                    };
                    return {
                        'value': [
                            r318_i,
                            r318_t[r318_i]
                        ],
                        'done': false
                    };
                } else
                    return _r318_t12(_r318_t15);
            };
            return _r318_t13();
        } else {
            _r318_t18 = r318_a = Object.keys(r318_t);
            _r318_t19 = r318_n = r318_a.length;
            _r318_t20 = r318_i = 0;
            _r318_t21 = function (_r318_t23) {
                return _r318_t7(_r318_t23);
            };
            _r318_t22 = function (_r318_t24) {
                _r318_t25 = r318_i < r318_n;
                if (_r318_t25) {
                    _r318_t0 = function (_r318_t26) {
                        return _r318_t22(r318_i = r318_i + 1);
                    };
                    return {
                        'value': [
                            r318_a[r318_i],
                            r318_t[r318_a[r318_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r318_t21(_r318_t24);
            };
            return _r318_t22();
        }
    };
    var _r318_t1 = function (x) {
        try {
            return _r318_t0(x);
        } catch (ex) {
            return _r318_t2(ex);
        }
    };
    var _r318_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r318_t3 = this;
    else {
        _r318_t4 = function () {
            void 0;
        };
        _r318_t4.prototype = _r1_t10.prototype;
        _r318_t3 = new _r318_t4();
    }
    _r318_t3[Symbol.iterator] = function () {
        return _r318_t3;
    };
    _r318_t3.next = _r318_t1;
    _r318_t3.throw = function (x) {
        return _r318_t2(x);
    };
    return _r318_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Yat', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Yeri, _r271_t14, _r271_t15, _r271_t16, _r271_t17, _r271_tag18;
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
        var r271_Ascender = _r271_t1.Ascender;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_O = _r271_t1.O;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_VJut = _r271_t1.VJut;
        var r271_VJutStroke = _r271_t1.VJutStroke;
        var r271_AccentStackOffset = _r271_t1.AccentStackOffset;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_OverlayStroke = _r271_t1.OverlayStroke;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_corner = _r271_t2.corner;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_tagged = _r271_t4.tagged;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_VSerif = _r271_t4.VSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateDependentComposite = _r271_t7.CreateDependentComposite;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Metrics'].resolve();
        var r271_BowlXDepth = _r271_t8.BowlXDepth;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t9.LetterBarOverlay;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-Yeri'].resolve();
        var r271_YeriConfig = _r271_t10.YeriConfig;
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-Iotified-A'].resolve();
        var r271_Iotified = _r271_t11.Iotified;
        var r271_xBarLeft = function (r280_df) {
            var _r280_t0, _r280_t1;
            return Math.max(r280_df.rightSB - (r271_RightSB - r271_SB), r271_SLAB ? r1_mix(r280_df.leftSB, r280_df.rightSB, 0.35) - r271_HSwToV(0.5 * r280_df.mvs) : r1_mix(r280_df.leftSB, r280_df.rightSB, 0.2));
        };
        var r271_YatShape = function () {
            var _r283_t6;
            var _r283_t7 = arguments;
            var _r283_t0 = [].slice.call(_r283_t7, 0);
            var _r283_t1 = [];
            var _r283_t2 = 0;
            while (_r283_t2 < _r283_t0.length) {
                if (!(_r283_t0[_r283_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r283_t1.push(_r283_t0[_r283_t2]);
                _r283_t2 = _r283_t2 + 1;
            }
            var _r283_t3 = _r283_t0;
            var _r283_t4 = _r283_t3.length;
            var _r283_t5 = 0;
            while (_r283_t5 < _r283_t4) {
                _r283_t2 = _r283_t3[_r283_t5];
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'df')
                    r283_df = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'Yeri')
                    r283_Yeri = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'top')
                    r283_top = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'pBar')
                    r283_pBar = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'fLowerCase')
                    r283_fLowerCase = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'sw')
                    r283_sw = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'xCrossbarLeftOverride')
                    r283_xCrossbarLeftOverride = _r283_t2.right;
                if (_r283_t2 && _r283_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r283_t2.left === 'yCrossbarOverride')
                    r283_yCrossbarOverride = _r283_t2.right;
                _r283_t5 = _r283_t5 + 1;
            }
            var r283_df = r1_fallback(r283_df, _r283_t1[0]);
            var r283_Yeri = r1_fallback(r283_Yeri, _r283_t1[1]);
            var r283_top = r1_fallback(r283_top, _r283_t1[2]);
            var r283_pBar = r1_fallback(r283_pBar, _r283_t1[3], 0.5);
            var r283_fLowerCase = r1_fallback(r283_fLowerCase, _r283_t1[4], false);
            var r283_sw = r1_fallback(r283_sw, _r283_t1[5], r283_df.mvs);
            var r283_xCrossbarLeftOverride = r1_fallback(r283_xCrossbarLeftOverride, _r283_t1[6], void 0);
            var r283_yCrossbarOverride = r1_fallback(r283_yCrossbarOverride, _r283_t1[7], void 0);
            return function () {
                var r289_swSerif, r289_vJut, _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_xYeriLeft = r271_xBarLeft(r283_df);
                r289_currentGlyph.include(r283_Yeri(r283_top, new r271_xn$NamedParameterPair$2Lrc9b('left', r289_xYeriLeft), new r271_xn$NamedParameterPair$2Lrc9b('right', r283_df.rightSB - r271_O * 2), new r271_xn$NamedParameterPair$2Lrc9b('pBar', r283_pBar), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r283_sw)));
                var r289_cTop = r271_SLAB ? r283_top - r271_Stroke / 2 : r283_top;
                var r289__xCrossbarLeft = r1_mix(0, r283_df.leftSB, r271_SLAB ? 0.25 : 0.375);
                var r289_xCrossbarLeft = r1_fallback(r283_xCrossbarLeftOverride, r289__xCrossbarLeft);
                var r289_xCrossbarRight = r1_mix(r289__xCrossbarLeft, r289_xYeriLeft + r271_HSwToV(0.5 * r283_sw), 2);
                var r289_yCrossbar = r1_fallback(r283_yCrossbarOverride, r1_mix(r283_top * r283_pBar + r283_sw / 2, r289_cTop, r271_SLAB ? 0.625 : 0.5) + 0.25 * r271_OverlayStroke);
                r289_currentGlyph.include(r271_HBar.t(r289_xCrossbarLeft, r289_xCrossbarRight, r289_yCrossbar, r271_OverlayStroke));
                if (r271_SLAB) {
                    r289_swSerif = Math.min(r271_VJutStroke * r283_sw / r271_Stroke, 0.625 * (r289_xYeriLeft - r289__xCrossbarLeft));
                    r289_vJut = Math.min(r271_VJut, r271_OverlayStroke + 0.5 * (r289_yCrossbar - r271_OverlayStroke - r283_top * r283_pBar));
                    r289_currentGlyph.include(r271_tagged('serifDL', r271_VSerif.dl(r289_xCrossbarLeft, r289_yCrossbar, r289_vJut, r289_swSerif)));
                    r289_currentGlyph.include(r271_tagged('serifDR', r271_VSerif.dr(r289_xCrossbarRight, r289_yCrossbar, r289_vJut, r289_swSerif)));
                    if (r283_fLowerCase) {
                        r289_currentGlyph.ejectTagged('serifYeriLT');
                        r289_currentGlyph.include(r271_tagged('serifLT', r271_HSerif.lt(r289_xYeriLeft, r271_Ascender, r271_SideJut, r283_sw)));
                    }
                }
                return void 0;
            };
        };
        var r271_IotifiedYatShape = function () {
            var _r300_t6;
            var _r300_t7 = arguments;
            var _r300_t0 = [].slice.call(_r300_t7, 0);
            var _r300_t1 = [];
            var _r300_t2 = 0;
            while (_r300_t2 < _r300_t0.length) {
                if (!(_r300_t0[_r300_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r300_t1.push(_r300_t0[_r300_t2]);
                _r300_t2 = _r300_t2 + 1;
            }
            var _r300_t3 = _r300_t0;
            var _r300_t4 = _r300_t3.length;
            var _r300_t5 = 0;
            while (_r300_t5 < _r300_t4) {
                _r300_t2 = _r300_t3[_r300_t5];
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'df')
                    r300_df = _r300_t2.right;
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'Yeri')
                    r300_Yeri = _r300_t2.right;
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'top')
                    r300_top = _r300_t2.right;
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'pBar')
                    r300_pBar = _r300_t2.right;
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'fLowerCase')
                    r300_fLowerCase = _r300_t2.right;
                _r300_t5 = _r300_t5 + 1;
            }
            var r300_df = r1_fallback(r300_df, _r300_t1[0]);
            var r300_Yeri = r1_fallback(r300_Yeri, _r300_t1[1]);
            var r300_top = r1_fallback(r300_top, _r300_t1[2]);
            var r300_pBar = r1_fallback(r300_pBar, _r300_t1[3], 0.5);
            var r300_fLowerCase = r1_fallback(r300_fLowerCase, _r300_t1[4], false);
            return function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                var r306_gap = 0.25 * (r300_df.width - 2 * r300_df.leftSB - (r271_SLAB ? 2.5 : 4.5) * r300_df.mvs);
                var r306_divSub = (r300_df.width - r306_gap - r300_df.mvs) / r271_Width;
                var r306_dfSub = r271_DivFrame(r306_divSub, 2);
                var r306_shift = r271_Width * (r300_df.div - r306_divSub);
                r306_currentGlyph.include(r271_xn$withtransform$5sIl(r271_ApparentTranslate(r306_shift, 0), r271_YatShape(r306_dfSub, r300_Yeri, r300_top, new r271_xn$NamedParameterPair$2Lrc9b('pBar', r300_pBar), new r271_xn$NamedParameterPair$2Lrc9b('fLowerCase', r300_fLowerCase), new r271_xn$NamedParameterPair$2Lrc9b('sw', r300_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('xCrossbarLeftOverride', r300_df.leftSB - r306_shift))));
                r306_currentGlyph.ejectTagged('serifDL');
                if (r300_fLowerCase)
                    r306_currentGlyph.include(r271_Iotified.ascender(r300_df, r300_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('fCapital', false)));
                else
                    r306_currentGlyph.include(r271_Iotified.full(r300_df, r300_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('fCapital', true)));
                return void 0;
            };
        };
        var _r271_t12 = _r1_t2(r271_YeriConfig)[Symbol.iterator]();
        var _r271_t13 = void 0;
        while (!(_r271_t13 = _r271_t12.next()).done) {
            _r271_t14 = _r271_t13.value;
            r271_suffix = _r271_t14[0];
            r271_Yeri = _r271_t14[1][0];
            _r271_t14[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Yat.' + r271_suffix, null, function () {
                    var _r324_t1;
                    var _r324_t0 = this;
                    var r324_currentGlyph = _r324_t0;
                    var r324_df = r324_currentGlyph.include(r271_DivFrame(r1_mix(1, r271_para.diversityM, 0.5)));
                    r324_currentGlyph.include(r324_df.markSet.capital());
                    r324_currentGlyph.include(r271_YatShape(r324_df, r271_Yeri, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('pBar', 0.5)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yat.upright.' + r271_suffix, null, function () {
                    var _r331_t1;
                    var _r331_t0 = this;
                    var r331_currentGlyph = _r331_t0;
                    var r331_df = r331_currentGlyph.include(r271_DivFrame(r1_mix(1, r271_para.diversityM, 0.5)));
                    r331_currentGlyph.include(r331_df.markSet.b());
                    r331_currentGlyph.include(r271_YatShape(r331_df, r271_Yeri, r271_Ascender, new r271_xn$NamedParameterPair$2Lrc9b('pBar', 0.55 * r271_XH / r271_Ascender), new r271_xn$NamedParameterPair$2Lrc9b('fLowerCase', true)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yatTall.' + r271_suffix, null, function () {
                    var _r339_t1;
                    var _r339_t0 = this;
                    var r339_currentGlyph = _r339_t0;
                    var r339_df = r339_currentGlyph.include(r271_DivFrame(r1_mix(1, r271_para.diversityM, 0.5)));
                    r339_currentGlyph.include(r339_df.markSet.b());
                    r339_currentGlyph.include(r271_ExtendAboveBaseAnchors(r271_Ascender + 0.5 * r271_AccentStackOffset));
                    r339_currentGlyph.include(r271_YatShape(r339_df, r271_Yeri, r271_Ascender + 0.5 * r271_AccentStackOffset, new r271_xn$NamedParameterPair$2Lrc9b('pBar', 0.55 * r271_XH / (r271_Ascender + 0.5 * r271_AccentStackOffset)), new r271_xn$NamedParameterPair$2Lrc9b('fLowerCase', true), new r271_xn$NamedParameterPair$2Lrc9b('yCrossbarOverride', r271_Ascender)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/YatIotified.' + r271_suffix, null, function () {
                    var _r349_t1;
                    var _r349_t0 = this;
                    var r349_currentGlyph = _r349_t0;
                    var r349_df = r349_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r349_currentGlyph.include(r349_df.markSet.capital());
                    r349_currentGlyph.include(r271_IotifiedYatShape(r349_df, r271_Yeri, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('pBar', 0.5)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yatIotified.' + r271_suffix, null, function () {
                    var _r356_t1;
                    var _r356_t0 = this;
                    var r356_currentGlyph = _r356_t0;
                    var r356_df = r356_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r356_currentGlyph.include(r356_df.markSet.b());
                    r356_currentGlyph.include(r271_IotifiedYatShape(r356_df, r271_Yeri, r271_Ascender, new r271_xn$NamedParameterPair$2Lrc9b('pBar', 0.375), new r271_xn$NamedParameterPair$2Lrc9b('fLowerCase', true)));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/yat.italic/yeri.' + r271_suffix, null, function () {
                    var _r364_t1;
                    var _r364_t0 = this;
                    var r364_currentGlyph = _r364_t0;
                    var r364_df = r364_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r364_currentGlyph.include(r364_df.markSet.e());
                    var r364_xMidBarLeft = r364_df.middle - r271_HSwToV(0.5 * r364_df.mvs);
                    r364_currentGlyph.include(r271_Yeri(r271_XH, r364_xMidBarLeft, r364_df.rightSB, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r364_df.mvs), new r271_xn$NamedParameterPair$2Lrc9b('yStart', r271_XH - r271_SmallArchDepthB)));
                    r364_currentGlyph.ejectTagged('serifYeriLT');
                    r364_currentGlyph.ejectTagged('serifYeriLB');
                    r1_DependentSelector.set(r364_currentGlyph, r271_suffix === 'corner' ? 'full' : 'reduced');
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('cyrl/Yat', 1122, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yeri'));
        r271_xn$selectvariant$7Hrq('cyrl/yat.upright', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yeri'));
        r271_xn$selectvariant$7Hrq('cyrl/yatTall', 7303, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yeri'));
        r271_xn$selectvariant$7Hrq('cyrl/YatIotified', 42578, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Yeri'));
        r271_xn$selectvariant$7Hrq('cyrl/yatIotified', 42579, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yeri'));
        r271_xn$selectvariant$7Hrq('cyrl/yat.italic/yeri', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/yeri'));
        r271_CreateDependentComposite('cyrl/yat.italic', null, 'cyrl/yat.italic/yeri', {
            'full': 'cyrl/yat.italic/base/corner',
            'reduced': 'cyrl/yat.italic/base/cursive'
        });
        return r271_alias('latn/yatSakha.italic', null, 'cyrl/yat.italic');
    });
    return void 0;
});
