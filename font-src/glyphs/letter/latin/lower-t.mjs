'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r417_t) {
    var r417_n, r417_i, r417_a, _r417_t3, _r417_t4, _r417_t5, _r417_t6, _r417_t7, _r417_t8, _r417_t9, _r417_t10, _r417_t11, _r417_t12, _r417_t13, _r417_t14, _r417_t15, _r417_t16, _r417_t17, _r417_t18, _r417_t19, _r417_t20, _r417_t21, _r417_t22, _r417_t23, _r417_t24, _r417_t25, _r417_t26;
    var _r417_t0 = function () {
        _r417_t7 = function (_r417_t8) {
            _r417_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r417_t8
            };
        };
        _r417_t9 = r417_t instanceof Array;
        if (_r417_t9) {
            _r417_t10 = r417_n = r417_t.length;
            _r417_t11 = r417_i = 0;
            _r417_t12 = function (_r417_t14) {
                return _r417_t7(_r417_t14);
            };
            _r417_t13 = function (_r417_t15) {
                _r417_t16 = r417_i < r417_n;
                if (_r417_t16) {
                    _r417_t0 = function (_r417_t17) {
                        return _r417_t13(r417_i = r417_i + 1);
                    };
                    return {
                        'value': [
                            r417_i,
                            r417_t[r417_i]
                        ],
                        'done': false
                    };
                } else
                    return _r417_t12(_r417_t15);
            };
            return _r417_t13();
        } else {
            _r417_t18 = r417_a = Object.keys(r417_t);
            _r417_t19 = r417_n = r417_a.length;
            _r417_t20 = r417_i = 0;
            _r417_t21 = function (_r417_t23) {
                return _r417_t7(_r417_t23);
            };
            _r417_t22 = function (_r417_t24) {
                _r417_t25 = r417_i < r417_n;
                if (_r417_t25) {
                    _r417_t0 = function (_r417_t26) {
                        return _r417_t22(r417_i = r417_i + 1);
                    };
                    return {
                        'value': [
                            r417_a[r417_i],
                            r417_t[r417_a[r417_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r417_t21(_r417_t24);
            };
            return _r417_t22();
        }
    };
    var _r417_t1 = function (x) {
        try {
            return _r417_t0(x);
        } catch (ex) {
            return _r417_t2(ex);
        }
    };
    var _r417_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r417_t3 = this;
    else {
        _r417_t4 = function () {
            void 0;
        };
        _r417_t4.prototype = _r1_t9.prototype;
        _r417_t3 = new _r417_t4();
    }
    _r417_t3[Symbol.iterator] = function () {
        return _r417_t3;
    };
    _r417_t3.next = _r417_t1;
    _r417_t3.throw = function (x) {
        return _r417_t2(x);
    };
    return _r417_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-T', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_df, r270_Style, r270_sym, r270_top, r270_yTop, r270_doBS, _r270_t15, _r270_t18, _r270_t21, _r270_t22, _r270_t23, _r270_t24, _r270_tag25, _r270_t26, _r270_tag27, _r270_t28, _r270_tag29, _r270_t30, _r270_tag31, _r270_t32, _r270_tag33, _r270_t34, _r270_tag35, _r270_t36, _r270_tag37, _r270_t38, _r270_tag39;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_DesignParameters = _r270_t1.DesignParameters;
        var r270_SB = _r270_t1.SB;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_SHook = _r270_t1.SHook;
        var r270_HookX = _r270_t1.HookX;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_TBalance = _r270_t1.TBalance;
        var r270_TBalance2 = _r270_t1.TBalance2;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_g2 = _r270_t2.g2;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_alsoThru = _r270_t2.alsoThru;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_Rect = _r270_t4.Rect;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_hookend = _r270_t4.hookend;
        var r270_HCrossBar = _r270_t4.HCrossBar;
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var r270_MaskLeft = _r270_t4.MaskLeft;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        var r270_xn$deriveglyphs$7Hrq = _r270_t5['derive-glyphs'];
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r270_LeaningAnchor = _r270_t6.LeaningAnchor;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r270_CreateCommaCaronComposition = _r270_t7.CreateCommaCaronComposition;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_CurlyTail = _r270_t8.CurlyTail;
        var r270_FlatHookDepth = _r270_t8.FlatHookDepth;
        var r270_ConnectedCedilla = _r270_t8.ConnectedCedilla;
        var r270_SerifedArcEnd = _r270_t8.SerifedArcEnd;
        var _r270_t9 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_DiagonalTailR = _r270_t9.DiagonalTailR;
        var r270_DiagonalTailStdDepth = _r270_t9.DiagonalTailStdDepth;
        var r270_DToothlessRise = _r270_t9.DToothlessRise;
        var _r270_t10 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_TopHook = _r270_t10.TopHook;
        var r270_PalatalHook = _r270_t10.PalatalHook;
        var _r270_t11 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-S'].resolve();
        var r270_SAutoSlabEnd = _r270_t11.SAutoSlabEnd;
        var r270_AdviceSArchDepth = _r270_t11.AdviceSArchDepth;
        var _r270_t12 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t12.BBS;
        var r270_BBD = _r270_t12.BBD;
        var r270_xn$SYMLEFT$9Jrj = 0;
        var r270_xn$SYMBALANCED$9Jrj = 1;
        var r270_xn$SYMPRLEFT$9Jrj3 = 2;
        var r270_xn$SYMPRBALANCED$9Jrj3 = 3;
        var r270_dfNarrowT = r270_DivFrame(r270_para.diversityF);
        var r270_xSmallTBarLeftT = function (r280_df) {
            var _r280_t0, _r280_t1;
            return r280_df.middle - r270_TBalance * r280_df.div * r280_df.div - r270_HSwToV(r270_HalfStroke);
        };
        var r270_xSmallTCrossRefT = function (r281_df) {
            var _r281_t0, _r281_t1;
            return r270_xSmallTBarLeftT(r281_df) + r281_df.div * r270_TBalance2 + r270_HSwToV(r270_HalfStroke);
        };
        var r270_yCrossBar = r270_XH;
        var r270_yShortNeck1 = Math.max(r1_mix(r270_XH, r270_Ascender, 0.5), r1_mix(r270_XH, r270_Ascender, 0.875) - r270_Stroke * 0.125);
        var r270_yShortNeck2 = Math.max(r1_mix(r270_XH, r270_Ascender, 0.5), r1_mix(r270_XH, r270_Ascender, 0.75) - r270_Stroke * 0.125);
        var r270_BentHook = function () {
            var r284_BarLeftPos, r284_HookShapeT, r284_CrossBar, r284_Body, r284_Retroflex;
            var r284_exports = {};
            r284_exports.BarLeftPos = r284_BarLeftPos = function (r292_df, r292_sym) {
                var _r292_t1, _r292_t2;
                var _r292_t0 = r292_sym;
                return _r292_t0 === r270_xn$SYMLEFT$9Jrj ? r1_mix(r292_df.leftSB, r270_xSmallTBarLeftT(r292_df), 0.5) : _r292_t0 === r270_xn$SYMBALANCED$9Jrj ? r270_xSmallTBarLeftT(r292_df) : _r292_t0 === r270_xn$SYMPRLEFT$9Jrj3 || _r292_t0 === r270_xn$SYMPRBALANCED$9Jrj3 ? r292_df.middle - r270_HSwToV(r270_HalfStroke) : void 0;
            };
            var r284_xCrossBarPos = function (r293_df, r293_sym) {
                var r293___, _r293_t1, _r293_t2;
                var _r293_t0 = r293_sym;
                return _r293_t0 === r270_xn$SYMLEFT$9Jrj || _r293_t0 === r270_xn$SYMPRLEFT$9Jrj3 ? [
                    r284_BarLeftPos(r293_df, r293_sym),
                    r270_xSmallTCrossRefT(r293_df) + r270_LongJut * Math.sqrt(r293_df.div)
                ] : (r293___ = _r293_t0, [
                    r270_xSmallTCrossRefT(r293_df) - r270_LongJut * Math.sqrt(r293_df.div),
                    r270_xSmallTCrossRefT(r293_df) + r270_LongJut * Math.sqrt(r293_df.div)
                ]);
            };
            var r284_XHookTerminal = function (r294_df, r294_sym) {
                var r294___, _r294_t1, _r294_t2;
                var _r294_t0 = r294_sym;
                return _r294_t0 === r270_xn$SYMLEFT$9Jrj ? r294_df.rightSB : (r294___ = _r294_t0, r284_BarLeftPos(r294_df, r294_sym) + Math.max((r294_df.width - r294_df.leftSB * 2) * 0.75 + r270_HSwToV(0.25 * r270_Stroke), r270_HSwToV(2.25 * r270_Stroke)));
            };
            r284_exports.HookShapeT = r284_HookShapeT = function (r296_sink, r296_df, r296_sym, r296_offset, r296_top, r296_bot, r296_sw) {
                var _r296_t0, _r296_t1;
                var r296_xLeft = r284_BarLeftPos(r296_df, r296_sym);
                var r296_xHook = r284_XHookTerminal(r296_df, r296_sym);
                var r296_xTurn = r1_mix(r296_xLeft, r296_xHook, 0.5) + r270_CorrectionOMidS;
                var r296_adb = r1_clamp(r270_Hook, (r296_xTurn - r296_xLeft) * 1.2, r270_SmallArchDepthB);
                return r296_sink(r270_widths.lhs(r296_sw), (r296_sink === r270_xn$spirooutline$1aao ? r270_corner : r270_flat)(r296_offset + r296_xLeft, r296_top, r270_heading(r270_Downward)), r270_curl(r296_offset + r296_xLeft, r296_bot + r296_adb), r270_hookend(r296_bot + r270_O + r296_offset, new r270_xn$NamedParameterPair$2Lrc9b('tight', !r270_para.isItalic)), r270_g4(r296_xHook - r296_offset, r296_bot + r270_Hook), r296_sink === r270_xn$spirooutline$1aao ? [r270_corner(r296_xHook - r296_offset, r296_top)] : []);
            };
            r284_exports.CrossBar = r284_CrossBar = function (r299_df, r299_sym) {
                var _r299_t1, _r299_t2;
                var _r299_t0 = r284_xCrossBarPos(r299_df, r299_sym);
                var r299_xcl = _r299_t0[0];
                var r299_xcr = _r299_t0[1];
                return r270_HCrossBar.top(r299_xcl, r299_xcr, r270_yCrossBar);
            };
            r284_exports.Body = r284_Body = function (r301_df, r301_sym, r301_top, r301_bot) {
                var _r301_t0, _r301_t1;
                return function () {
                    var _r303_t1;
                    var _r303_t0 = this;
                    var r303_currentGlyph = _r303_t0;
                    r303_currentGlyph.include(r284_CrossBar(r301_df, r301_sym));
                    var r303_g = r303_currentGlyph.include(r284_HookShapeT(r270_dispiro, r301_df, r301_sym, 0, r301_top, r301_bot, r270_Stroke));
                    var r303_gEnd = r303_g.knots[r303_g.knots.length - 1];
                    var r303_xLeft = r284_BarLeftPos(r301_df, r301_sym);
                    r303_currentGlyph.include(r270_LeaningAnchor.Above.VBar.l(r303_xLeft));
                    r303_currentGlyph.include(r270_LeaningAnchor.Below.Hook(r303_xLeft, r303_gEnd.x));
                    r303_currentGlyph.setBaseAnchor('hooktopAttach', r303_xLeft + r270_HSwToV(r270_HalfStroke), r301_top);
                    r303_currentGlyph.setBaseAnchor('bottomRight', r303_gEnd.x, r303_gEnd.y);
                    r303_currentGlyph.setBaseAnchor('overlay', r303_g.knots[0].x + r270_HSwToV(0.625 * r270_Stroke), r270_XH * 0.58);
                    return void 0;
                };
            };
            r284_exports.Retroflex = r284_Retroflex = function (r312_df, r312_sym, r312_top, r312_bot) {
                var _r312_t0, _r312_t1;
                return r270_Flat.Retroflex(r312_df, r312_sym, r312_top, r312_bot);
            };
            return r284_exports;
        }();
        var r270_DiagTail = function () {
            var r315_BarLeftPos, r315_Body, r315_Retroflex;
            var r315_exports = {};
            var r315_HookShape = function (r322_df, r322_sym, r322_top, r322_bot, r322_sw) {
                var _r322_t0, _r322_t1;
                var r322_xMid = r315_BarLeftPos(r322_df, r322_sym) + r270_HSwToV(r270_HalfStroke);
                var r322_hookDepth = (r322_sym === r270_xn$SYMLEFT$9Jrj ? 1.375 : 1) * r270_DiagonalTailStdDepth(r270_DivFrame(Math.sqrt(r322_df.div)), r322_sw) - r270_HSwToV(r270_HalfStroke);
                return r270_dispiro(r270_flat(r322_xMid, r322_top, r270_widths.center.heading(r322_sw, r270_Downward)), r270_DiagonalTailR(r322_df, r322_xMid, r322_bot, r322_hookDepth, r322_sw));
            };
            r315_exports.BarLeftPos = r315_BarLeftPos = r270_BentHook.BarLeftPos;
            r315_exports.Body = r315_Body = function (r325_df, r325_sym, r325_top, r325_bot) {
                var _r325_t0, _r325_t1;
                return function () {
                    var _r327_t1;
                    var _r327_t0 = this;
                    var r327_currentGlyph = _r327_t0;
                    r327_currentGlyph.include(r270_BentHook.CrossBar(r325_df, r325_sym));
                    var r327_g = r327_currentGlyph.include(r315_HookShape(r325_df, r325_sym, r325_top, 0, r270_Stroke));
                    var r327_gEnd = r327_g.rhsKnots[r327_g.rhsKnots.length - 1];
                    r327_currentGlyph.include(r270_LeaningAnchor.Above.VBar.l(r315_BarLeftPos(r325_df, r325_sym)));
                    r327_currentGlyph.include(r270_LeaningAnchor.Below.VBar.l(r315_BarLeftPos(r325_df, r325_sym), 2 * r270_Stroke));
                    r327_currentGlyph.setBaseAnchor('hooktopAttach', r315_BarLeftPos(r325_df, r325_sym) + r270_HSwToV(r270_HalfStroke), r325_top);
                    r327_currentGlyph.setBaseAnchor('bottomRight', r327_gEnd.x, r327_gEnd.y);
                    r327_currentGlyph.setBaseAnchor('overlay', r327_g.knots[0].x + r270_HSwToV(0.125 * r270_Stroke), r270_XH * 0.58);
                    return void 0;
                };
            };
            r315_exports.Retroflex = r315_Retroflex = function (r336_df, r336_sym, r336_top, r336_bot) {
                var _r336_t0, _r336_t1;
                return r270_Flat.Retroflex(r336_df, r336_sym, r336_top, r336_bot);
            };
            return r315_exports;
        }();
        var r270_Flat = function () {
            var r339_xCrossBarPos, r339_BarLeftPos, r339_Body, r339_Retroflex, r339_CrossRTBody;
            var r339_exports = {};
            r339_exports.xCrossBarPos = r339_xCrossBarPos = function (r347_df, r347_sym) {
                var r347___, _r347_t1, _r347_t2;
                var _r347_t0 = r347_sym;
                return _r347_t0 === r270_xn$SYMLEFT$9Jrj || _r347_t0 === r270_xn$SYMPRLEFT$9Jrj3 ? [
                    r339_BarLeftPos(r347_df, r347_sym),
                    r1_mix(r347_df.width, r347_df.rightSB, r1_mix(1, r347_df.div, 2))
                ] : (r347___ = _r347_t0, [
                    r1_mix(0, r347_df.leftSB, r1_mix(1, r347_df.div, 2)),
                    r1_mix(r347_df.width, r347_df.rightSB, r1_mix(1, r347_df.div, 2))
                ]);
            };
            var r339_CrossLeft = function (r348_df) {
                var _r348_t0, _r348_t1;
                return r1_mix(0, r348_df.leftSB, r1_mix(1, r348_df.div, 2));
            };
            var r339_CrossRight = function (r349_df) {
                var _r349_t0, _r349_t1;
                return r1_mix(r349_df.width, r349_df.rightSB, r1_mix(1, r349_df.div, 2));
            };
            var r339_NORMAL = 0;
            var r339_RETROFLEX = 1;
            var r339_PR = 2;
            r339_exports.BarLeftPos = r339_BarLeftPos = function (r351_df, r351_sym) {
                var _r351_t1, _r351_t2;
                var _r351_t0 = r351_sym;
                return _r351_t0 === r270_xn$SYMLEFT$9Jrj ? r1_mix(r351_df.leftSB, r270_xSmallTBarLeftT(r351_df), 0.5) : _r351_t0 === r270_xn$SYMBALANCED$9Jrj ? r1_mix(r339_CrossLeft(r351_df), r339_CrossRight(r351_df), 0.42) - r270_HSwToV(0.375 * r270_Stroke) : _r351_t0 === r270_xn$SYMPRLEFT$9Jrj3 || _r351_t0 === r270_xn$SYMPRBALANCED$9Jrj3 ? r351_df.middle - r270_HSwToV(0.5 * r270_Stroke) : void 0;
            };
            r339_exports.Body = r339_Body = function (r353_df, r353_sym, r353_top, r353_bot) {
                var _r353_t0, _r353_t1;
                return r339_Impl(r339_NORMAL, r353_df, r353_sym, r353_top, r353_bot, 0);
            };
            r339_exports.Retroflex = r339_Retroflex = function (r355_df, r355_sym, r355_top, r355_bot) {
                var _r355_t0, _r355_t1;
                return r339_Impl(r339_RETROFLEX, r355_df, r355_sym, r355_top, r355_bot, 0);
            };
            r339_exports.CrossRTBody = r339_CrossRTBody = function (r357_df, r357_sym, r357_top, r357_bot) {
                var _r357_t0, _r357_t1;
                return r339_Impl(r339_RETROFLEX, r357_df, r357_sym, r357_top, r357_bot, 0);
            };
            var r339_Impl = function (r358_shape, r358_df, r358_sym, r358_top, r358_bot, r358_ext) {
                var _r358_t0, _r358_t1;
                return function () {
                    var r360___, _r360_t1, _r360_t3;
                    var _r360_t2 = this;
                    var r360_currentGlyph = _r360_t2;
                    var r360_xBarLeft = r339_BarLeftPos(r358_df, r358_sym);
                    var _r360_t0 = r339_xCrossBarPos(r358_df, r358_sym);
                    var r360_xCrossLeft = _r360_t0[0];
                    var r360_xCrossRight = _r360_t0[1];
                    var r360_hd = r270_FlatHookDepth(r358_df);
                    var r360_xTailEnd = (_r360_t1 = r358_shape, _r360_t1 === r339_RETROFLEX ? r360_xBarLeft + r270_HookX + r270_HSwToV(r270_HalfStroke) : (r360___ = _r360_t1, r360_xCrossRight));
                    r360_currentGlyph.include(r270_union(r270_HCrossBar.top(r360_xCrossLeft, r360_xCrossRight + r358_ext, r270_yCrossBar), r270_dispiro(r270_widths.rhs(), r358_shape === r339_RETROFLEX ? r270_straight.left.start(r360_xTailEnd, r358_bot) : [
                        r270_flat(r360_xCrossRight, r358_bot),
                        r270_curl(Math.min(r360_xBarLeft + r360_hd.x, r360_xCrossRight - 1), r358_bot)
                    ], r270_archv.superness(r270_DesignParameters.tightHookSuperness), r270_flat(r360_xBarLeft, r358_shape === r339_RETROFLEX ? r358_bot + r270_Hook + r270_HalfStroke : r360_hd.y), r270_curl(r360_xBarLeft, r358_top, r270_heading(r270_Upward)))));
                    r360_currentGlyph.include(r270_LeaningAnchor.Above.VBar.l(r360_xBarLeft));
                    r360_currentGlyph.include(r270_LeaningAnchor.Below.Hook(r360_xBarLeft, r360_xCrossRight));
                    r360_currentGlyph.setBaseAnchor('hooktopAttach', r360_xBarLeft + r270_HSwToV(r270_HalfStroke), r358_top);
                    r360_currentGlyph.setBaseAnchor('topRight', r360_xCrossRight, r270_Ascender);
                    r360_currentGlyph.setBaseAnchor('overlay', r360_xBarLeft + r270_HSwToV(0.625 * r270_Stroke), r270_XH * 0.58);
                    r360_currentGlyph.setBaseAnchor('bottomRight', r360_xTailEnd, r358_bot);
                    r360_currentGlyph.setBaseAnchor('lTailHookAttach', r360_xTailEnd, r358_bot + r270_Stroke);
                    return void 0;
                };
            };
            return r339_exports;
        }();
        var r270_UprightTailed = function () {
            var r371_BarLeftPos, r371_Body;
            var r371_exports = {};
            r371_exports.BarLeftPos = r371_BarLeftPos = r270_Flat.BarLeftPos;
            r371_exports.Body = r371_Body = function (r380_df, r380_sym, r380_top, r380_bot) {
                var _r380_t0, _r380_t1;
                return function () {
                    var _r382_t2;
                    var _r382_t1 = this;
                    var r382_currentGlyph = _r382_t1;
                    var _r382_t0 = r270_Flat.xCrossBarPos(r380_df, r380_sym);
                    var r382_xCrossLeft = _r382_t0[0];
                    var r382_xCrossRight = _r382_t0[1];
                    var r382_xBarLeft = r371_BarLeftPos(r380_df, r380_sym);
                    r382_currentGlyph.include(r270_union(r270_HCrossBar.top(r382_xCrossLeft, r382_xCrossRight, r270_yCrossBar), r270_dispiro(r270_widths.rhs(), r270_flat(r382_xCrossRight, r380_bot), r270_curl(r382_xCrossRight, r380_top, r270_heading(r270_Upward)), r270_flat(r382_xBarLeft, r380_top), r270_curl(r382_xBarLeft, r380_bot, r270_heading(r270_Downward)))));
                    return void 0;
                };
            };
            return r371_exports;
        }();
        var r270_Hookless = function () {
            var r386_BarLeftPos, r386_Body, r386_Retroflex, r386_PLBody;
            var r386_exports = {};
            r386_exports.BarLeftPos = r386_BarLeftPos = function (r394_df, r394_sym) {
                var r394___, _r394_t1, _r394_t2;
                var _r394_t0 = r394_sym;
                return _r394_t0 === r270_xn$SYMLEFT$9Jrj ? r1_mix(r394_df.leftSB, r270_xSmallTBarLeftT(r394_df), 0.5) : (r394___ = _r394_t0, r394_df.middle - r270_HSwToV(r270_HalfStroke));
            };
            var r386_xCrossBarPos = function (r395_df, r395_sym) {
                var r395___, _r395_t1, _r395_t2;
                var _r395_t0 = r395_sym;
                return _r395_t0 === r270_xn$SYMLEFT$9Jrj || _r395_t0 === r270_xn$SYMPRLEFT$9Jrj3 ? [
                    r386_BarLeftPos(r395_df, r395_sym),
                    r395_df.middle + r270_LongJut * Math.sqrt(r395_df.div)
                ] : (r395___ = _r395_t0, [
                    r395_df.middle - r270_LongJut * Math.sqrt(r395_df.div),
                    r395_df.middle + r270_LongJut * Math.sqrt(r395_df.div)
                ]);
            };
            r386_exports.Body = r386_Body = function (r397_df, r397_sym, r397_top, r397_bot) {
                var _r397_t0, _r397_t1;
                return function () {
                    var _r399_t2;
                    var _r399_t1 = this;
                    var r399_currentGlyph = _r399_t1;
                    var r399_xLeft = r386_BarLeftPos(r397_df, r397_sym);
                    var _r399_t0 = r386_xCrossBarPos(r397_df, r397_sym);
                    var r399_xcl = _r399_t0[0];
                    var r399_xcr = _r399_t0[1];
                    var r399_xEnd = r399_xLeft + r270_HSwToV(1.75 * r270_Stroke);
                    r399_currentGlyph.include(r270_VBar.l(r399_xLeft, 0, r397_top));
                    r399_currentGlyph.include(r270_HCrossBar.top(r399_xcl, r399_xcr, r270_yCrossBar));
                    r399_currentGlyph.include(r270_LeaningAnchor.Above.VBar.l(r399_xLeft));
                    r399_currentGlyph.include(r270_LeaningAnchor.Below.VBar.l(r399_xLeft));
                    r399_currentGlyph.setBaseAnchor('overlay', r399_xLeft + r270_HSwToV(r270_HalfStroke), r270_XH * 0.58);
                    r399_currentGlyph.setBaseAnchor('hooktopAttach', r399_xLeft + r270_HSwToV(r270_HalfStroke), r397_top);
                    r399_currentGlyph.setBaseAnchor('bottomRight', r399_xEnd, r397_bot + r270_Stroke);
                    r399_currentGlyph.setBaseAnchor('lTailHookAttach', r399_xEnd, r397_bot + r270_Stroke);
                    return void 0;
                };
            };
            r386_exports.Retroflex = r386_Retroflex = function (r409_df, r409_sym, r409_top, r409_bot) {
                var _r409_t0, _r409_t1;
                return r270_Flat.CrossRTBody(r409_df, r409_sym, r409_top, r409_bot);
            };
            r386_exports.PLBody = r386_PLBody = function (r411_df, r411_sym, r411_top, r411_bot) {
                var _r411_t0, _r411_t1;
                return function () {
                    var _r413_t1;
                    var _r413_t0 = this;
                    var r413_currentGlyph = _r413_t0;
                    var r413_xLeft = r386_BarLeftPos(r411_df, r411_sym);
                    r413_currentGlyph.include(r386_Body(r411_df, r411_sym, r411_top, r411_bot));
                    r413_currentGlyph.include(r270_HBar.b(r413_xLeft, r270_RightSB, 0));
                    return void 0;
                };
            };
            return r386_exports;
        }();
        var r270_SmallTConfig = r1_SuffixCfg.weave({
            'bentHook': [
                r270_DivFrame(1),
                r270_BentHook
            ],
            'diagonalTailed': [
                r270_dfNarrowT,
                r270_DiagTail
            ],
            'flatHook': [
                r270_dfNarrowT,
                r270_Flat
            ],
            'hookless': [
                r270_dfNarrowT,
                r270_Hookless
            ]
        }, {
            '': r270_xn$SYMBALANCED$9Jrj,
            'asymmetric': r270_xn$SYMLEFT$9Jrj
        }, {
            '': r270_Ascender,
            'shortNeck': r270_yShortNeck1,
            'shortNeck2': r270_yShortNeck2
        });
        var _r270_t13 = _r1_t2(r270_SmallTConfig)[Symbol.iterator]();
        var _r270_t14 = void 0;
        while (!(_r270_t14 = _r270_t13.next()).done) {
            _r270_t15 = _r270_t14.value;
            r270_suffix = _r270_t15[0];
            r270_df = _r270_t15[1][0][0];
            r270_Style = _r270_t15[1][0][1];
            _r270_t15[1][0];
            r270_sym = _r270_t15[1][1];
            r270_top = _r270_t15[1][2];
            _r270_t15[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('t.' + r270_suffix, null, function () {
                    var _r423_t1;
                    var _r423_t0 = this;
                    var r423_currentGlyph = _r423_t0;
                    r423_currentGlyph.setWidth(r270_df.width);
                    r423_currentGlyph.include(r270_df.markSet.b());
                    r423_currentGlyph.include(r270_Style.Body(r270_df, r270_sym, r270_top, 0));
                    r423_currentGlyph.copyBaseAnchorIfAbsent('leaningAbove', 'above');
                    r423_currentGlyph.copyBaseAnchorIfAbsent('leaningBelow', 'below');
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('t/phoneticLeft2.' + r270_suffix, null, function () {
                    var _r429_t1;
                    var _r429_t0 = this;
                    var r429_currentGlyph = _r429_t0;
                    r429_currentGlyph.setWidth(r270_df.width);
                    r429_currentGlyph.include(r270_df.markSet.b());
                    r429_currentGlyph.include((r270_Style.PLBody || r270_Style.Body)(r270_df, r270_sym, r270_top, 0));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('t/phoneticRight.' + r270_suffix, null, function () {
                    var _r435_t1;
                    var _r435_t0 = this;
                    var r435_currentGlyph = _r435_t0;
                    r435_currentGlyph.setWidth(r270_df.width);
                    r435_currentGlyph.include(r270_df.markSet.b());
                    r435_currentGlyph.include(r270_difference(r270_Style.Body(r270_df, r270_sym + r270_xn$SYMPRLEFT$9Jrj3, r270_top, 0), r270_MaskLeft(r1_mix(r270_df.leftSB, r270_df.middle - r270_HSwToV(r270_HalfStroke), 0.5))));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('t/teshLeft.' + r270_suffix, null, function () {
                    var _r441_t1;
                    var _r441_t0 = this;
                    var r441_currentGlyph = _r441_t0;
                    var r441_df1 = r441_currentGlyph.include(r270_DivFrame(1));
                    r441_currentGlyph.include(r441_df1.markSet.b());
                    r441_currentGlyph.include(r270_Style.Body(r441_df1, r270_sym, r270_top, 0));
                    r441_currentGlyph.include(r270_HCrossBar.top(r441_df1.middle, r441_df1.width + r441_df1.middle, r270_yCrossBar));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('tHookTop.' + r270_suffix, null, function () {
                    var _r448_t1;
                    var _r448_t0 = this;
                    var r448_currentGlyph = _r448_t0;
                    r448_currentGlyph.include(r270_xn$referglyph$1aao('t.' + r270_suffix), r270_AS_BASE, r270_ALSO_METRICS);
                    var r448_attach = r448_currentGlyph.gizmo.unapply(r448_currentGlyph.baseAnchors.hooktopAttach);
                    r448_currentGlyph.clearGeometry();
                    r448_currentGlyph.include(r270_union(r270_difference(r270_Style.Body(r270_df, r270_sym, r270_top, 0), r270_MaskAbove(r270_XH)), r270_TopHook.mBarInner(r448_attach.x, r270_XH, r270_Ascender)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('tLTail.' + r270_suffix, null, function () {
                    var _r453_t1;
                    var _r453_t0 = this;
                    var r453_currentGlyph = _r453_t0;
                    r453_currentGlyph.setWidth(r270_df.width);
                    r453_currentGlyph.include(r270_df.markSet.bp());
                    r453_currentGlyph.include(r270_Style.Body(r270_df, r270_sym, r270_top, 0));
                    var r453_attach = r453_currentGlyph.gizmo.unapply(r453_currentGlyph.baseAnchors.lTailHookAttach || r453_currentGlyph.baseAnchors.bottomRight);
                    r453_currentGlyph.include(r270_PalatalHook.r(new r270_xn$NamedParameterPair$2Lrc9b('x', r453_attach.x), new r270_xn$NamedParameterPair$2Lrc9b('y', 0), new r270_xn$NamedParameterPair$2Lrc9b('yAttach', r453_attach.y)));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('tRTail.' + r270_suffix, null, function () {
                    var _r463_t1;
                    var _r463_t0 = this;
                    var r463_currentGlyph = _r463_t0;
                    r463_currentGlyph.setWidth(r270_df.width);
                    r463_currentGlyph.include(r270_df.markSet.bp());
                    r463_currentGlyph.include(r270_Style.Retroflex(r270_df, r270_sym, r270_top, r270_Descender));
                    return void 0;
                });
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('tHookTopRTail.' + r270_suffix, null, function () {
                    var _r469_t1;
                    var _r469_t0 = this;
                    var r469_currentGlyph = _r469_t0;
                    r469_currentGlyph.setWidth(r270_df.width);
                    r469_currentGlyph.include(r270_df.markSet.bp());
                    r469_currentGlyph.include(r270_Style.Retroflex(r270_df, r270_sym, r270_XH, r270_Descender));
                    var r469_attach = r469_currentGlyph.gizmo.unapply(r469_currentGlyph.baseAnchors.hooktopAttach);
                    r469_currentGlyph.include(r270_TopHook.mBarInner(r469_attach.x, r270_XH, r270_Ascender));
                    return void 0;
                });
                r270_turned('turnt.' + r270_suffix, void 0, 't.' + r270_suffix, r270_df.middle, r270_XH / 2, r270_df.markSet.p());
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('tCurlyTail.' + r270_suffix, null, function () {
                    var _r476_t1;
                    var _r476_t0 = this;
                    var r476_currentGlyph = _r476_t0;
                    r476_currentGlyph.include(r270_MarkSet.b());
                    var r476_df = r270_DivFrame(1);
                    var r476_fine = r270_AdviceStroke(3.5);
                    var r476_rinner = r270_LongJut / 2 - r476_fine / 2;
                    var r476_xLeft = r270_Style.BarLeftPos(r476_df, r270_sym);
                    var r476_x2 = r1_mix(r270_SB, r476_xLeft, 0.4);
                    var r476_y2 = -r476_fine;
                    r476_currentGlyph.include(r270_difference(r270_Style.Body(r476_df, r270_sym, r270_top, 0), r270_MaskBelow(r270_yCrossBar - r270_Stroke - 0.1)));
                    r476_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_flat(r476_xLeft, r270_yCrossBar - r270_Stroke, r270_heading(r270_Downward)), r270_curl(r476_xLeft, r476_fine + r476_rinner * 2), r270_CurlyTail(r476_fine, r476_rinner, r476_xLeft + r270_HSwToV(r270_Stroke), 0, r476_xLeft + r270_HSwToV(r270_Stroke) + r270_LongJut, r476_x2, r476_y2)));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('t', 't');
        r270_xn$selectvariant$7Hrq('t/teshLeft', new r270_xn$NamedParameterPair$2Lrc9b('follow', 't'));
        r270_xn$selectvariant$7Hrq('t/phoneticLeft1', new r270_xn$NamedParameterPair$2Lrc9b('shapeFrom', 't'));
        r270_xn$selectvariant$7Hrq('t/phoneticLeft2');
        r270_xn$selectvariant$7Hrq('t/phoneticRight');
        r270_xn$selectvariant$7Hrq('turnt', 647, new r270_xn$NamedParameterPair$2Lrc9b('follow', 't'));
        r270_CreateCommaCaronComposition('tcaron', 357, 't');
        r270_xn$deriveglyphs$7Hrq('tCedilla', 355, 't', r270_ConnectedCedilla);
        r270_xn$selectvariant$7Hrq('tHookTop', 429);
        r270_xn$selectvariant$7Hrq('tLTail', 427);
        r270_xn$selectvariant$7Hrq('tRTail', 648);
        r270_xn$selectvariant$7Hrq('tCurlyTail', 566);
        r270_xn$selectvariant$7Hrq('tHookTopRTail', 122633);
        var r270_xn$SLABNONE$5sIl = 0;
        var r270_xn$SLABCLASSICAL$5sIl = 1;
        var r270_xn$SLABINWARD$5sIl = 2;
        var r270_TsLigStrokeShape = function (r483_df, r483_stroke, r483_top, r483_sb) {
            var r483___, _r483_t0, _r483_t1, _r483_t2;
            var r483_archDepth = r270_AdviceSArchDepth(r270_XH + 0.5 * r270_ArchDepth, -1, r483_stroke);
            return r270_dispiro(r270_widths.lhs(r483_stroke), r270_flat(r270_xSmallTBarLeftT(r483_df), r483_top, r270_heading(r270_Downward)), r270_curl(r270_xSmallTBarLeftT(r483_df), r270_XH, r270_heading(r270_Downward)), r270_alsoThru.g2(0.5, 0.5, r270_widths.center(r483_stroke)), r270_g4(r483_df.rightSB, r483_archDepth, r270_widths.rhs(r483_stroke)), (_r483_t0 = r483_sb, _r483_t0 === r270_xn$SLABCLASSICAL$5sIl ? r270_SerifedArcEnd.RtlRhs(r483_df.leftSB, r270_Middle, 0, r483_stroke, r270_SHook) : _r483_t0 === r270_xn$SLABINWARD$5sIl ? [
                r270_arcvh(),
                r270_g4(r483_df.middle + r270_CorrectionOMidX * r483_stroke, r270_O),
                r270_g4(r483_df.leftSB, r270_DToothlessRise)
            ] : (r483___ = _r483_t0, [
                r270_hookend(r270_O, new r270_xn$NamedParameterPair$2Lrc9b('sw', r483_stroke), new r270_xn$NamedParameterPair$2Lrc9b('swItalicAdj', r270_Stroke)),
                r270_g4(r483_df.leftSB, r270_SHook)
            ])));
        };
        var r270_TSUpperConfig = {
            'bentHook': [r270_Ascender],
            'bentHookShortNeck': [r270_yShortNeck1],
            'bentHookShortNeck2': [r270_yShortNeck2]
        };
        var _r270_t16 = Object.entries(r270_TSUpperConfig)[Symbol.iterator]();
        var _r270_t17 = void 0;
        while (!(_r270_t17 = _r270_t16.next()).done) {
            _r270_t18 = _r270_t17.value;
            r270_suffix = _r270_t18[0];
            r270_yTop = _r270_t18[1][0];
            _r270_t18[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('tsLig/upperHalf.' + r270_suffix, null, function () {
                    var _r491_t1;
                    var _r491_t0 = this;
                    var r491_currentGlyph = _r491_t0;
                    var r491_df = r270_DivFrame(1);
                    r491_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r491_currentGlyph.include(r270_difference(r270_TsLigStrokeShape(r491_df, r270_Stroke, r270_top, false), r270_MaskBelow(r270_XH)));
                    r491_currentGlyph.include(r270_BentHook.CrossBar(r491_df, r270_xn$SYMBALANCED$9Jrj));
                    return void 0;
                });
            }());
        }
        var r270_TSLowerConfig = {
            'serifless': [r270_xn$SLABNONE$5sIl],
            'bilateralSerifed': [r270_xn$SLABCLASSICAL$5sIl],
            'bilateralInwardSerifed': [r270_xn$SLABINWARD$5sIl]
        };
        var _r270_t19 = Object.entries(r270_TSLowerConfig)[Symbol.iterator]();
        var _r270_t20 = void 0;
        while (!(_r270_t20 = _r270_t19.next()).done) {
            _r270_t21 = _r270_t20.value;
            r270_suffix = _r270_t21[0];
            r270_doBS = _r270_t21[1][0];
            _r270_t21[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('tsLig/lowerHalf.' + r270_suffix, null, function () {
                    var _r500_t1;
                    var _r500_t0 = this;
                    var r500_currentGlyph = _r500_t0;
                    var r500_df = r270_DivFrame(1);
                    r500_currentGlyph.include(r500_df.markSet.b());
                    r500_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                    r500_currentGlyph.include(r270_intersection(r270_TsLigStrokeShape(r500_df, r270_Stroke, r270_Ascender, r270_doBS), r270_MaskBelow(r270_XH)));
                    r500_currentGlyph.include(r270_SAutoSlabEnd(r270_doBS, 0, r270_Stroke, r270_Hook));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('tsLig/upperHalf');
        r270_xn$selectvariant$7Hrq('tsLig/lowerHalf');
        r270_xn$derivecomposites$7Hrq('tsLig', 446, 'tsLig/upperHalf', 'tsLig/lowerHalf');
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/t', 120165, function () {
            var _r507_t1;
            var _r507_t0 = this;
            var r507_currentGlyph = _r507_t0;
            var r507_df = r270_DivFrame(1);
            r507_currentGlyph.include(r507_df.markSet.b());
            var r507_xLeft = r270_xSmallTBarLeftT(r507_df);
            r507_currentGlyph.include(r270_HBar.t(r507_xLeft, r507_xLeft + r270_BBD, r270_Ascender, r270_BBS));
            r507_currentGlyph.include(r270_BentHook.HookShapeT(r270_dispiro, r507_df, r270_xn$SYMBALANCED$9Jrj, 0, r270_Ascender, 0, r270_BBS));
            r507_currentGlyph.include(r270_intersection(r270_VBar.l(r507_xLeft + r270_BBD, 0, r270_Ascender, r270_BBS), r270_BentHook.HookShapeT(r270_xn$spirooutline$1aao, r507_df, r270_xn$SYMBALANCED$9Jrj, 1, r270_Ascender, 0, r270_BBS)));
            r507_currentGlyph.include(r270_difference(r270_HCrossBar.top(r507_xLeft + r270_BBD / 2 - r270_LongJut + r270_TBalance2, r507_xLeft + r270_BBD / 2 + r270_LongJut + r270_TBalance2, r270_yCrossBar, r270_BBS), r270_Rect(r270_Ascender, 0, r507_xLeft, r507_xLeft + r270_BBD)));
            return void 0;
        });
    });
    return void 0;
});
