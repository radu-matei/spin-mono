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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-De', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_st, r270_sb, _r270_t10, _r270_t13, _r270_t14, _r270_t15, _r270_t16, _r270_tag17, _r270_t18, _r270_tag19;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Hook = _r270_t1.Hook;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_VJut = _r270_t1.VJut;
        var r270_VJutStroke = _r270_t1.VJutStroke;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_CorrectionOMidX = _r270_t1.CorrectionOMidX;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_tagged = _r270_t4.tagged;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r270_ExtendBelowBaseAnchors = _r270_t6.ExtendBelowBaseAnchors;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Greek-Lower-Epsilon'].resolve();
        var r270_CyrZe = _r270_t7.CyrZe;
        var r270_EpsilonConfig = _r270_t7.EpsilonConfig;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'BottomExtension': r270_BottomExtension };
        });
        var r270_BottomExtension = 0.25 * r270_Stroke - r270_LongJut;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r278_t0, _r278_t1;
            return { 'CyrDeBottom': r270_CyrDeBottom };
        });
        var r270_CyrDeBottom = function (r279_left, r279_right, r279__sw, r279__desc) {
            var _r279_t0, _r279_t1;
            return function () {
                var _r281_t1;
                var _r281_t0 = this;
                var r281_currentGlyph = _r281_t0;
                var r281_descenderOverflow = r270_SLAB ? r270_SideJut : (r279_right - r279_left) * 0.075;
                var r281_xTopLeft = r1_mix(r279_left, r279_right, r270_StrokeWidthBlend(0.15, 0.1));
                var r281_xTopRight = r1_mix(r279_left, r279_right, r270_StrokeWidthBlend(0.95, 0.96));
                var r281_swOuter = r1_fallback(r279__sw, r270_Stroke);
                var r281_desc = r1_fallback(r279__desc, r270_BottomExtension);
                r281_currentGlyph.include(r270_HBar.b(r281_xTopLeft, r281_xTopRight, 0, r281_swOuter));
                r281_currentGlyph.include(r270_tagged('footL', r270_union(r270_HBar.b(r279_left - r281_descenderOverflow, r281_xTopLeft, 0, r281_swOuter), r270_VBar.l(r279_left - r281_descenderOverflow, r281_desc, 0.1, r281_swOuter))));
                r281_currentGlyph.include(r270_tagged('footR', r270_union(r270_HBar.b(r281_xTopRight, r279_right + r281_descenderOverflow, 0, r281_swOuter), r270_VBar.r(r279_right + r281_descenderOverflow, r281_desc, 0.1, r281_swOuter))));
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r286_t0, _r286_t1;
            return { 'CyrDeShape': r270_CyrDeShape };
        });
        var r270_CyrDeShape = function (r287_top, r287_left, r287_right, r287__sw, r287__desc) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_descenderOverflow = r270_SLAB ? r270_SideJut : (r287_right - r287_left) * 0.075;
                var r289_xTopLeft = r1_mix(r287_left, r287_right, r270_StrokeWidthBlend(0.15, 0.1));
                var r289_xTopRight = r1_mix(r287_left, r287_right, r270_StrokeWidthBlend(0.95, 0.96));
                var r289_swOuter = r1_fallback(r287__sw, r270_Stroke);
                var r289_swInner = r289_swOuter * r270_AdviceStroke(2.75) / r270_Stroke;
                var r289_desc = r1_fallback(r287__desc, r270_BottomExtension);
                r289_currentGlyph.include(r270_CyrDeBottom(r287_left, r287_right, r287__sw, r287__desc));
                r289_currentGlyph.include(r270_VBar.r(r289_xTopRight, 0, r287_top, r289_swInner));
                r289_currentGlyph.include(r270_dispiro(r270_widths.lhs(r289_swInner), r270_flat(r289_xTopLeft, r287_top), r270_curl(r289_xTopLeft, r1_mix(0, r287_top, 0.625)), r270_g4(r287_left, r289_swOuter)));
                r289_currentGlyph.include(r270_SLAB ? r270_dispiro(r270_widths.rhs(r289_swOuter), r270_flat(r289_xTopLeft - r289_descenderOverflow, r287_top), r270_curl(r289_xTopRight + r289_descenderOverflow, r287_top)) : r270_HBar.t(r289_xTopLeft, r289_xTopRight, r287_top, r289_swOuter));
                return {
                    'desc': r289_desc,
                    'xTopLeft': r289_xTopLeft,
                    'xTopRight': r289_xTopRight
                };
            };
        };
        var r270_CyrSoftDeShape = function (r294_top, r294_left, r294_right, r294__sw) {
            var _r294_t0, _r294_t1;
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_descenderOverflow = r270_SLAB ? r270_SideJut : (r294_right - r294_left) * 0.075;
                var r296_sw = r1_fallback(r294__sw, r270_Stroke);
                var r296_xm = r270_SLAB ? r1_mix(r294_left, r294_right, 0.625) + r270_HSwToV(0.25 * r296_sw) : r1_mix(r294_left, r294_right, 0.75);
                var r296_xTopRight = r1_mix(r294_left, r296_xm, r270_StrokeWidthBlend(0.95, 0.96));
                r296_currentGlyph.include(r270_CyrDeShape(r294_top, r294_left, r296_xm, r294__sw));
                if (r270_SLAB) {
                    r296_currentGlyph.include(r270_HBar.t(r296_xTopRight + r296_descenderOverflow, r294_right, r294_top, r296_sw));
                    r296_currentGlyph.include(r270_VSerif.dr(r294_right, r294_top, r270_VJut, r296_sw * r270_VJutStroke / r270_Stroke));
                } else
                    r296_currentGlyph.include(r270_HBar.t(r296_xTopRight, r294_right, r294_top, r296_sw));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/De', 1044, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            r303_currentGlyph.include(r270_MarkSet.capital());
            r303_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r303_currentGlyph.include(r270_CyrDeShape(r270_CAP, r270_SB, r270_RightSB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/de.upright', null, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            r309_currentGlyph.include(r270_MarkSet.e());
            r309_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r309_currentGlyph.include(r270_CyrDeShape(r270_XH, r270_SB, r270_RightSB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/deLongLeg', 7297, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.include(r270_MarkSet.p());
            r315_currentGlyph.include(r270_CyrDeShape(r270_XH, r270_SB, r270_RightSB, r270_Stroke, r270_Descender));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DeSoft', 42594, function () {
            var _r320_t1;
            var _r320_t0 = this;
            var r320_currentGlyph = _r320_t0;
            var r320_df = r320_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r320_currentGlyph.include(r320_df.markSet.capital());
            r320_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r320_currentGlyph.include(r270_CyrSoftDeShape(r270_CAP, r320_df.leftSB, r320_df.rightSB, r320_df.mvs));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/deSoft', 42595, function () {
            var _r327_t1;
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            var r327_df = r327_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r327_currentGlyph.include(r327_df.markSet.e());
            r327_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
            r327_currentGlyph.include(r270_CyrSoftDeShape(r270_XH, r327_df.leftSB, r327_df.rightSB, r327_df.mvs));
            return void 0;
        });
        var _r270_t8 = Object.entries(r270_EpsilonConfig)[Symbol.iterator]();
        var _r270_t9 = void 0;
        while (!(_r270_t9 = _r270_t8.next()).done) {
            _r270_t10 = _r270_t9.value;
            r270_suffix = _r270_t10[0];
            r270_st = _r270_t10[1][0];
            r270_sb = _r270_t10[1][1];
            _r270_t10[1];
            (function () {
                var r334_DzzeDescendershape = function (r335_de) {
                    var _r335_t0, _r335_t1;
                    var r335_sr = r1_mix(r270_RightSB, r270_Width, 0.5) - r270_O * 2;
                    var r335_sl = r1_mix(r335_sr, r335_de.xTopRight, 2);
                    var r335_sw = r270_AdviceStroke(2.5, (r335_sr - r335_sl + 2 * r270_SB) / r270_Width);
                    var r335_shapeBot = r335_de.desc - 0.5 * r335_sw;
                    var r335_hook = r270_Hook * (0 - r335_shapeBot) / r270_CAP;
                    var r335_ze = r270_CyrZe(3, r270_sb, r335_sw, r335_shapeBot, r335_sl, r335_sr, 0.65, r335_hook, r335_sw, 0.5 * r270_O, 0.5);
                    return r270_union(r335_ze.Shape(), r335_ze.AutoEndSerifL());
                };
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dzze.' + r270_suffix, null, function () {
                    var _r338_t1;
                    var _r338_t0 = this;
                    var r338_currentGlyph = _r338_t0;
                    r338_currentGlyph.include(r270_MarkSet.capital());
                    r338_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
                    var r338_de = r338_currentGlyph.include(r270_CyrDeShape(r270_CAP, r270_SB, r270_RightSB));
                    r338_currentGlyph.ejectTagged('footR');
                    r338_currentGlyph.include(r334_DzzeDescendershape(r338_de));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzze.upright.' + r270_suffix, null, function () {
                    var _r346_t1;
                    var _r346_t0 = this;
                    var r346_currentGlyph = _r346_t0;
                    r346_currentGlyph.include(r270_MarkSet.e());
                    r346_currentGlyph.include(r270_ExtendBelowBaseAnchors(r270_BottomExtension));
                    var r346_de = r346_currentGlyph.include(r270_CyrDeShape(r270_XH, r270_SB, r270_RightSB));
                    r346_currentGlyph.ejectTagged('footR');
                    r346_currentGlyph.include(r334_DzzeDescendershape(r346_de));
                    return void 0;
                });
            }());
        }
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r353_t0, _r353_t1;
            return { 'CyrDeItalicShapeT': r270_CyrDeItalicShapeT };
        });
        var r270_CyrDeItalicShapeT = function (r354_sink, r354_df, r354__sw) {
            var _r354_t0, _r354_t1;
            var r354_left = r354_df.leftSB;
            var r354_right = r354_df.rightSB;
            var r354_middle = r1_mix(r354_left, r354_right, 0.5);
            var r354_sw = r1_fallback(r354__sw, r354_df.mvs);
            var r354_ada = r354_df.archDepthA(r270_SmallArchDepth);
            var r354_adb = r354_df.archDepthB(r270_SmallArchDepth);
            return r354_sink(r270_widths.lhs(r354_sw * r270_CThinB), r270_flat(r354_right - r270_OX - r270_HSwToV(r354_sw) * (1 - r270_CThinB), r354_ada), r270_curl(r354_right - r270_OX - r270_HSwToV(r354_sw) * (1 - r270_CThinB), r270_XH - r354_adb), r270_arcvh(), r270_g4(r354_middle - r270_CorrectionOMidX * r354_df.mvs, r270_Ascender * 0.7 - r270_O, r270_widths.lhs(r354_sw)), r270_archv(), r270_flat(r354_left + r270_OX, r270_XH - r354_ada), r270_curl(r354_left + r270_OX, r354_adb), r270_arcvh(), r270_g4(r354_middle + r270_CorrectionOMidX * r354_sw, r270_O), r270_archv(), r270_flat(r354_right - r270_OX, r354_ada), r270_curl(r354_right - r270_OX, r270_XH - r354_adb), r270_quadControls(0, 0.8), r270_g4(r354_left + r354_sw * 1.1, r270_Ascender));
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/de.italic', null, function () {
            var _r357_t1;
            var _r357_t0 = this;
            var r357_currentGlyph = _r357_t0;
            r357_currentGlyph.include(r270_MarkSet.b());
            r357_currentGlyph.include(r270_CyrDeItalicShapeT(r270_dispiro, r270_DivFrame(1)));
            return void 0;
        });
        var _r270_t11 = Object.entries(r270_EpsilonConfig)[Symbol.iterator]();
        var _r270_t12 = void 0;
        while (!(_r270_t12 = _r270_t11.next()).done) {
            _r270_t13 = _r270_t12.value;
            r270_suffix = _r270_t13[0];
            r270_st = _r270_t13[1][0];
            r270_sb = _r270_t13[1][1];
            _r270_t13[1];
            (function () {
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzze.italic.' + r270_suffix, null, function () {
                    var _r365_t1;
                    var _r365_t0 = this;
                    var r365_currentGlyph = _r365_t0;
                    var r365_df = r365_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                    r365_currentGlyph.include(r365_df.markSet.bp());
                    var r365_dfLeft = r365_df.slice(3, 2, r270_OX);
                    r365_currentGlyph.include(r270_CyrDeItalicShapeT(r270_dispiro, r365_dfLeft));
                    var r365_xZeLeft = r365_dfLeft.leftSB + r365_df.width - r365_dfLeft.width + r270_OX;
                    var r365_xZeRight = r365_dfLeft.rightSB + r365_df.width - r365_dfLeft.width - r270_OX;
                    var r365_ze = r270_CyrZe(1, r270_sb, r270_XH, r270_Descender, r365_xZeLeft, r365_xZeRight, 0.65, r270_Hook, r365_df.mvs);
                    r365_currentGlyph.include(r270_union(r365_ze.Shape(), r365_ze.AutoEndSerifL()));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/Dzze', 42632, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze/topAttached'));
        r270_xn$selectvariant$7Hrq('cyrl/dzze.upright', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze/topAttached'));
        return r270_xn$selectvariant$7Hrq('cyrl/dzze.italic', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze/topAttached'));
    });
    return void 0;
});
