'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Ezh', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_AS_BASE = _r270_t0.AS_BASE;
        var r270_ALSO_METRICS = _r270_t0.ALSO_METRICS;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_VJut = _r270_t1.VJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_hookend = _r270_t4.hookend;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_CurlyTail = _r270_t6.CurlyTail;
        var r270_SerifedArcEnd = _r270_t6.SerifedArcEnd;
        var r270_RetroflexHook = _r270_t6.RetroflexHook;
        var r270_StdTerminalShape = function (r274_top, r274_bot, r274_yMidBar) {
            var _r274_t0, _r274_t1;
            var r274_hookDepth = r270_Hook * (r274_top - r274_bot) / r1_fallback(r270_para.cap0, r270_CAP);
            var r274_pArc = r270_SmallArchDepthB / (r270_SmallArchDepthA + r270_SmallArchDepthB);
            return [
                r270_g4(r270_RightSB - r270_OX, r1_mix(r274_yMidBar, r274_bot, r274_pArc)),
                r270_hookend(r274_bot),
                r270_g4(r270_SB, r274_bot + r274_hookDepth)
            ];
        };
        var r270_HooklessTerminalShape = function (r275_p) {
            var _r275_t0, _r275_t1;
            return function (r276_top, r276_bot, r276_yMidBar) {
                var _r276_t0, _r276_t1;
                return [r270_g4.down.mid(r270_RightSB - r270_OX, r1_mix(r276_yMidBar, r276_bot, r275_p), r270_heading(r270_Downward))];
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'EzhShape': r270_EzhShape };
        });
        var r270_EzhShape = function () {
            var _r279_t6;
            var _r279_t7 = arguments;
            var _r279_t0 = [].slice.call(_r279_t7, 0);
            var _r279_t1 = [];
            var _r279_t2 = 0;
            while (_r279_t2 < _r279_t0.length) {
                if (!(_r279_t0[_r279_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r279_t1.push(_r279_t0[_r279_t2]);
                _r279_t2 = _r279_t2 + 1;
            }
            var _r279_t3 = _r279_t0;
            var _r279_t4 = _r279_t3.length;
            var _r279_t5 = 0;
            while (_r279_t5 < _r279_t4) {
                _r279_t2 = _r279_t3[_r279_t5];
                if (_r279_t2 && _r279_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'top')
                    r279_top = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'bot')
                    r279_bot = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'pleft')
                    r279_pleft = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'pright')
                    r279_pright = _r279_t2.right;
                if (_r279_t2 && _r279_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r279_t2.left === 'terminalShape')
                    r279_terminalShape = _r279_t2.right;
                _r279_t5 = _r279_t5 + 1;
            }
            var r279_top = r1_fallback(r279_top, _r279_t1[0]);
            var r279_bot = r1_fallback(r279_bot, _r279_t1[1]);
            var r279_pleft = r1_fallback(r279_pleft, _r279_t1[2]);
            var r279_pright = r1_fallback(r279_pright, _r279_t1[3]);
            var r279_terminalShape = r1_fallback(r279_terminalShape, _r279_t1[4]);
            return function () {
                var _r285_t1;
                var _r285_t0 = this;
                var r285_currentGlyph = _r285_t0;
                var r285_cor = 1.2 * r270_HVContrast;
                var r285_yMidBar = r1_mix(r279_bot, r279_top, 0.6);
                var r285_ezhLeft = r1_mix(r270_SB, r270_RightSB, r1_fallback(r279_pleft, 0.2));
                var r285_ezhRight = r1_mix(r270_SB, r270_RightSB, r1_fallback(r279_pright, 0.925));
                r285_currentGlyph.include(r270_union(r270_HBar.t(r270_SB, r285_ezhRight, r279_top), r270_xn$spirooutline$1aao(r270_corner(r285_ezhLeft, r285_yMidBar), r270_corner(r285_ezhLeft + r270_Stroke * r285_cor, r285_yMidBar - r270_HalfStroke), r270_corner(r285_ezhLeft + r270_Stroke * r285_cor, r285_yMidBar), r270_corner(r285_ezhRight, r279_top - r270_Stroke), r270_corner(r285_ezhRight - r270_Stroke * r285_cor, r279_top - r270_Stroke)), r270_dispiro(r270_widths.rhs(), r270_flat(r285_ezhLeft, r285_yMidBar, r270_heading(r270_Rightward)), r270_curl(r270_Middle - r270_CorrectionOMidS, r285_yMidBar), r270_archv(), r1_fallback(r279_terminalShape, r270_StdTerminalShape)(r279_top, r279_bot, r285_yMidBar))));
                if (r270_SLAB)
                    r285_currentGlyph.include(r270_VSerif.dl(r270_SB, r279_top, r270_VJut));
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r289_t0, _r289_t1;
            return { 'RevEzhShape': r270_RevEzhShape };
        });
        var r270_RevEzhShape = function () {
            var _r290_t6;
            var _r290_t7 = arguments;
            var _r290_t0 = [].slice.call(_r290_t7, 0);
            var _r290_t1 = [];
            var _r290_t2 = 0;
            while (_r290_t2 < _r290_t0.length) {
                if (!(_r290_t0[_r290_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r290_t1.push(_r290_t0[_r290_t2]);
                _r290_t2 = _r290_t2 + 1;
            }
            var _r290_t3 = _r290_t0;
            var _r290_t4 = _r290_t3.length;
            var _r290_t5 = 0;
            while (_r290_t5 < _r290_t4) {
                _r290_t2 = _r290_t3[_r290_t5];
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'top')
                    r290_top = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'bot')
                    r290_bot = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'pleft')
                    r290_pleft = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'pright')
                    r290_pright = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'hookless')
                    r290_hookless = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'ada')
                    r290_ada = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'adb')
                    r290_adb = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'diagCoeff')
                    r290_diagCoeff = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'pyBar')
                    r290_pyBar = _r290_t2.right;
                _r290_t5 = _r290_t5 + 1;
            }
            var r290_top = r1_fallback(r290_top, _r290_t1[0]);
            var r290_bot = r1_fallback(r290_bot, _r290_t1[1]);
            var r290_pleft = r1_fallback(r290_pleft, _r290_t1[2]);
            var r290_pright = r1_fallback(r290_pright, _r290_t1[3]);
            var r290_hookless = r1_fallback(r290_hookless, _r290_t1[4]);
            var r290_ada = r1_fallback(r290_ada, _r290_t1[5], r270_SmallArchDepthA);
            var r290_adb = r1_fallback(r290_adb, _r290_t1[6], r270_SmallArchDepthB);
            var r290_diagCoeff = r1_fallback(r290_diagCoeff, _r290_t1[7], 1.2);
            var r290_pyBar = r1_fallback(r290_pyBar, _r290_t1[8], 0.6);
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_cor = r270_HSwToV(r290_diagCoeff);
                var r296_yMidBar = r270_RevEzhShape.yMidBar(r290_top, r290_bot, r290_pyBar);
                var r296_ezhRight = r1_mix(r270_SB, r270_RightSB, r1_fallback(r290_pright, 0.8));
                var r296_ezhLeft = r1_mix(r270_SB, r270_RightSB, r1_fallback(r290_pleft, 0.075));
                r296_currentGlyph.include(r270_HBar.t(r296_ezhLeft, r270_RightSB, r290_top));
                r296_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r296_ezhRight, r296_yMidBar), r270_corner(r296_ezhRight - r270_Stroke * r296_cor, r296_yMidBar - r270_HalfStroke), r270_corner(r296_ezhRight - r270_Stroke * r296_cor, r296_yMidBar), r270_corner(r296_ezhLeft, r290_top - r270_Stroke), r270_corner(r296_ezhLeft + r270_Stroke * r296_cor, r290_top - r270_Stroke)));
                r296_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_flat(r296_ezhRight, r296_yMidBar, r270_heading(r270_Leftward)), r270_curl(r270_Middle + r270_CorrectionOMidS, r296_yMidBar), r270_archv(), r290_hookless ? [r270_g4.down.mid(r270_SB + r270_OX, r270_RevEzhShape.yLoopLeft(r290_top, r290_bot, r290_pyBar, r290_ada, r290_adb))] : [
                    r270_g4(r270_SB + r270_OX, r270_RevEzhShape.yLoopLeft(r290_top, r290_bot, r290_pyBar, r290_ada, r290_adb)),
                    r270_hookend(r290_bot),
                    r270_g4(r270_RightSB, r290_bot + r270_Hook * ((r290_top - r290_bot) / r270_CAP))
                ]));
                if (r270_SLAB)
                    r296_currentGlyph.include(r270_VSerif.dr(r270_RightSB, r290_top, r270_VJut));
                return void 0;
            };
        };
        r270_RevEzhShape.yMidBar = function (r301_top, r301_bot, r301_pyBar) {
            var _r301_t0, _r301_t1;
            return r1_mix(r301_bot, r301_top, r301_pyBar);
        };
        r270_RevEzhShape.yLoopLeft = function (r302_top, r302_bot, r302_pyBar, r302_ada, r302_adb) {
            var _r302_t0, _r302_t1;
            return r1_mix(r270_RevEzhShape.yMidBar(r302_top, r302_bot, r302_pyBar), r302_bot, r302_ada / (r302_ada + r302_adb));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('Ezh', 439, function () {
            var _r305_t1;
            var _r305_t0 = this;
            var r305_currentGlyph = _r305_t0;
            r305_currentGlyph.include(r270_MarkSet.capital());
            r305_currentGlyph.include(r270_EzhShape(r270_CAP, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('smcpEzh', 7459, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r270_MarkSet.e());
            r310_currentGlyph.include(r270_EzhShape(r270_XH, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ezh', 658, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.include(r270_MarkSet.p());
            r315_currentGlyph.include(r270_EzhShape(r270_XH, r270_Descender));
            return void 0;
        });
        r270_alias('cyrl/Ezh', 1248, 'Ezh');
        r270_alias('cyrl/ezh', 1249, 'ezh');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('revEzh', 440, function () {
            var _r320_t1;
            var _r320_t0 = this;
            var r320_currentGlyph = _r320_t0;
            r320_currentGlyph.include(r270_MarkSet.capital());
            r320_currentGlyph.include(r270_RevEzhShape(r270_CAP, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('revezh', 441, function () {
            var _r325_t1;
            var _r325_t0 = this;
            var r325_currentGlyph = _r325_t0;
            r325_currentGlyph.include(r270_MarkSet.p());
            r325_currentGlyph.include(r270_RevEzhShape(r270_XH, r270_Descender));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('lyogh.serifless', null, function () {
            var _r330_t1;
            var _r330_t0 = this;
            var r330_currentGlyph = _r330_t0;
            r330_currentGlyph.include(r270_MarkSet.bp());
            r330_currentGlyph.include(r270_EzhShape(r270_XH, r270_Descender, 0.4));
            r330_currentGlyph.include(r270_VBar.l(r270_SB, r270_XH * 0.1, r270_Ascender));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('lyogh.hooky', null, function () {
            var _r336_t1;
            var _r336_t0 = this;
            var r336_currentGlyph = _r336_t0;
            r336_currentGlyph.include(r270_xn$referglyph$1aao('lyogh.serifless'), r270_AS_BASE, r270_ALSO_METRICS);
            r336_currentGlyph.include(r270_HSerif.lt(r270_SB, r270_Ascender, r270_SideJut));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('lyogh', 622);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('lyoghRTail.serifless', null, function () {
            var _r341_t1;
            var _r341_t0 = this;
            var r341_currentGlyph = _r341_t0;
            r341_currentGlyph.include(r270_MarkSet.b());
            r341_currentGlyph.include(r270_EzhShape(r270_XH, 0, 0.4));
            r341_currentGlyph.include(r270_VBar.l(r270_SB, 0, r270_Ascender));
            r341_currentGlyph.include(r270_RetroflexHook.lExt(r270_SB, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('lyoghRTail.hooky', null, function () {
            var _r348_t1;
            var _r348_t0 = this;
            var r348_currentGlyph = _r348_t0;
            r348_currentGlyph.include(r270_xn$referglyph$1aao('lyoghRTail.serifless'), r270_AS_BASE, r270_ALSO_METRICS);
            r348_currentGlyph.include(r270_HSerif.lt(r270_SB, r270_Ascender, r270_SideJut));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('lyoghRTail', 122629, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'lyogh'));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ezhTail', 442, function () {
            var _r354_t1;
            var _r354_t0 = this;
            var r354_currentGlyph = _r354_t0;
            r354_currentGlyph.include(r270_MarkSet.p());
            var r354_b = r1_mix(r270_Descender, r270_XH, 0.25);
            r354_currentGlyph.include(r270_EzhShape(r270_XH, r354_b, new r270_xn$NamedParameterPair$2Lrc9b('terminalShape', r270_HooklessTerminalShape(0.5))));
            var r354_y = r1_mix(r1_mix(r354_b, r270_XH, 0.6), r354_b, 0.5);
            r354_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_g4.down.mid(r270_RightSB - r270_OX, r354_y, r270_heading(r270_Downward)), r270_arcvh(), r270_flat(r1_mix(r270_SB, r270_RightSB, 0.45), r354_b), r270_curl(r1_mix(r270_SB, r270_RightSB, 0.4), r354_b), r270_archv(), r270_g4(r270_SB + r270_HSwToV(r270_Stroke), r1_mix(r270_Descender + r270_Stroke, r354_b, 0.5)), r270_arcvh(), r270_flat(r1_mix(r270_SB, r270_RightSB, 0.4), r270_Descender + r270_Stroke), r270_curl(r270_RightSB, r270_Descender + r270_Stroke)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ezhCurlyTail', 659, function () {
            var _r361_t1;
            var _r361_t0 = this;
            var r361_currentGlyph = _r361_t0;
            r361_currentGlyph.include(r270_MarkSet.p());
            var r361_p = r270_SmallArchDepthB / (r270_SmallArchDepthA + r270_SmallArchDepthB);
            r361_currentGlyph.include(r270_EzhShape(r270_XH, r270_Descender, new r270_xn$NamedParameterPair$2Lrc9b('terminalShape', r270_HooklessTerminalShape(r361_p))));
            var r361_fine = r270_AdviceStroke2(3, 5, r270_XH - r270_Descender);
            var r361_rinner = (r270_XH * 0.4 - r361_fine * 1.5) / 2;
            var r361_m1 = r270_RightSB - r270_HSwToV(r270_Stroke) - r270_OX;
            var r361_x2 = r270_RightSB - r270_HalfStroke;
            var r361_y2 = r270_Descender;
            r361_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_g4.down.mid(r361_m1, r1_mix(r1_mix(r270_Descender, r270_XH, 0.6), r270_Descender, r361_p), r270_heading(r270_Downward)), r270_CurlyTail(r361_fine, r361_rinner, r361_m1, r270_Descender, r270_SB, r361_x2, r361_y2)));
            return void 0;
        });
        var r270_RetroflexConnectionTerminal = function (r366_top, r366_bot, r366_yMidBar) {
            var _r366_t0, _r366_t1;
            var r366_hookDepth = r270_Hook * (r366_top - r366_bot) / r1_fallback(r270_para.cap0, r270_CAP);
            var r366_pArc = r270_SmallArchDepthB / (r270_SmallArchDepthA + r270_SmallArchDepthB);
            return [
                r270_g4(r270_RightSB - r270_OX, r1_mix(r366_yMidBar, r366_bot, r366_pArc)),
                r270_SerifedArcEnd.RtlRhs(r270_SB, r270_Middle, r366_bot, r270_Stroke, r366_hookDepth)
            ];
        };
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('ezhRetroflexHook', 7578, function () {
            var _r369_t1;
            var _r369_t0 = this;
            var r369_currentGlyph = _r369_t0;
            r369_currentGlyph.include(r270_MarkSet.p());
            r369_currentGlyph.include(r270_EzhShape(r270_XH, 0, new r270_xn$NamedParameterPair$2Lrc9b('terminalShape', r270_RetroflexConnectionTerminal)));
            r369_currentGlyph.include(r270_RetroflexHook.l(r270_SB, 0, new r270_xn$NamedParameterPair$2Lrc9b('yAttach', r270_Hook)));
            return void 0;
        });
    });
    return void 0;
});
