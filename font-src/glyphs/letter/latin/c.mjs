'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-C', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_sty, r271_styBot, r271_bot, r271_top, r271_fillType, r271_selector, _r271_t17, _r271_t20, _r271_t21, _r271_t22, _r271_t23, _r271_tag24, _r271_t25, _r271_tag26;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_UPM = _r271_t1.UPM;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_hookend = _r271_t4.hookend;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_PointingTo = _r271_t4.PointingTo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_ExtendAboveBaseAnchors = _r271_t6.ExtendAboveBaseAnchors;
        var r271_ExtendBelowBaseAnchors = _r271_t6.ExtendBelowBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markStroke = _r271_t7.markStroke;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateDependentComposite = _r271_t8.CreateDependentComposite;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifFrame = _r271_t9.SerifFrame;
        var r271_CurlyTail = _r271_t9.CurlyTail;
        var r271_DToothlessRise = _r271_t9.DToothlessRise;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifedArcStart = _r271_t10.SerifedArcStart;
        var r271_SerifedArcEnd = _r271_t10.SerifedArcEnd;
        var r271_InwardSlabArcStart = _r271_t10.InwardSlabArcStart;
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_ArcStartSerif = _r271_t11.ArcStartSerif;
        var r271_ArcEndSerif = _r271_t11.ArcEndSerif;
        var _r271_t12 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_LetterBarOverlay = _r271_t12.LetterBarOverlay;
        var r271_PalatalHook = _r271_t12.PalatalHook;
        var r271_RetroflexHook = _r271_t12.RetroflexHook;
        var r271_TopHook = _r271_t12.TopHook;
        var _r271_t13 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_ArcStartSerifWidth = _r271_t13.ArcStartSerifWidth;
        var r271_ArcStartSerifDepth = _r271_t13.ArcStartSerifDepth;
        var _r271_t14 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t14.BBS;
        var r271_BBD = _r271_t14.BBD;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABCLASSICAL$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        var r271_xn$FLATCONNECTION$5sIl = 3;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'CShapeT': r271_CShapeT };
        });
        var r271_CShapeT = function (r285_sink, r285_offset, r285_df, r285_st, r285_sb, r285_top, r285_bot, r285_ada, r285_adb, r285_hook, r285_sw, r285_origBar) {
            var r285__, _r285_t0, _r285_t1, _r285_t2, _r285_t3;
            return r285_sink(r271_widths.lhs(r285_sw), (_r285_t0 = r285_st, _r285_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.RtlLhs(r285_df.rightSB - r285_offset, r285_df.middle, r285_top, r285_sw, r1_fallback(r285_hook, r271_Hook), r285_origBar) : _r285_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_g4(r285_df.rightSB - r285_offset, r285_top - r271_DToothlessRise),
                r271_g4(r285_df.middle - r271_CorrectionOMidX * r285_sw, r285_top - r271_O - r285_offset),
                r271_archv()
            ] : _r285_t0 === r271_xn$FLATCONNECTION$5sIl ? [
                r271_flat(r285_df.rightSB - r285_offset, r285_top - r285_offset),
                r271_curl(r285_df.middle - r271_CorrectionOMidX * r285_sw, r285_top - r285_offset),
                r271_archv()
            ] : (r285__ = _r285_t0, [
                r271_g4(r285_df.rightSB - r285_offset, r285_top - r1_fallback(r285_hook, r271_Hook)),
                r271_hookstart(r285_top - r271_O - r285_offset)
            ])), r271_flat(r285_df.leftSB + r271_OX + r285_offset, r285_top - r285_ada), r271_curl(r285_df.leftSB + r271_OX + r285_offset, r285_bot + r285_adb), (_r285_t1 = r285_sb, _r285_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.LtrLhs(r285_df.rightSB - r285_offset, r285_df.middle, r285_bot, r285_sw, r1_fallback(r285_hook, r271_Hook), r285_origBar) : _r285_t1 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r285_df.middle + r271_CorrectionOMidX * r285_sw, r285_bot + r271_O + r285_offset),
                r271_g4(r285_df.rightSB - r285_offset, r285_bot + r271_DToothlessRise)
            ] : _r285_t1 === r271_xn$FLATCONNECTION$5sIl ? [
                r271_arcvh(),
                r271_flat(r285_df.middle + r271_CorrectionOMidX * r285_sw, r285_bot + r271_O + r285_offset),
                r271_curl(r285_df.rightSB - r285_offset, r285_bot + r271_O + r285_offset)
            ] : (r285__ = _r285_t1, [
                r271_hookend(r285_bot + r271_O + r285_offset),
                r271_g4(r285_df.rightSB - r285_offset, r285_bot + r1_fallback(r285_hook, r271_Hook))
            ])));
        };
        var r271_RevCShapeT = function (r286_sink, r286_offset, r286_df, r286_st, r286_sb, r286_top, r286_bot, r286_ada, r286_adb, r286_hook, r286_sw, r286_origBar) {
            var r286__, _r286_t0, _r286_t1, _r286_t2, _r286_t3;
            return r286_sink(r271_widths.rhs(r286_sw), (_r286_t0 = r286_st, _r286_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.LtrRhs(r286_df.leftSB + r286_offset, r286_df.middle, r286_top, r286_sw, r1_fallback(r286_hook, r271_Hook), r286_origBar) : _r286_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_g4(r286_df.leftSB + r286_offset, r286_top - r271_DToothlessRise),
                r271_g4(r286_df.middle - r271_CorrectionOMidX * r286_sw, r286_top - r271_O - r286_offset),
                r271_archv()
            ] : _r286_t0 === r271_xn$FLATCONNECTION$5sIl ? [
                r271_flat(r286_df.leftSB + r286_offset, r286_top - r286_offset),
                r271_curl(r286_df.middle - r271_CorrectionOMidX * r286_sw, r286_top - r286_offset),
                r271_archv()
            ] : (r286__ = _r286_t0, [
                r271_g4(r286_df.leftSB + r286_offset, r286_top - r1_fallback(r286_hook, r271_Hook)),
                r271_hookstart(r286_top - r271_O - r286_offset)
            ])), r271_flat(r286_df.rightSB - r271_OX + r286_offset, r286_top - r286_ada), r271_curl(r286_df.rightSB - r271_OX + r286_offset, r286_bot + r286_adb), (_r286_t1 = r286_sb, _r286_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.RtlRhs(r286_df.leftSB + r286_offset, r286_df.middle, r286_bot, r286_sw, r1_fallback(r286_hook, r271_Hook)) : _r286_t1 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r286_df.middle + r271_CorrectionOMidX * r286_sw, r286_bot + r271_O + r286_offset),
                r271_g4(r286_df.leftSB + r286_offset, r286_bot + r271_DToothlessRise)
            ] : _r286_t1 === r271_xn$FLATCONNECTION$5sIl ? [
                r271_arcvh(),
                r271_flat(r286_df.middle + r271_CorrectionOMidX * r286_sw, r286_bot + r271_O + r286_offset),
                r271_curl(r286_df.leftSB + r286_offset, r286_bot + r271_O + r286_offset)
            ] : (r286__ = _r286_t1, [
                r271_hookend(r286_bot + r271_O + r286_offset),
                r271_g4(r286_df.leftSB + r286_offset, r286_bot + r1_fallback(r286_hook, r271_Hook))
            ])));
        };
        var r271_AutoStartSerifR = function (r287_df, r287_sty, r287_top, r287_hook, r287_sw) {
            var r287___, _r287_t1, _r287_t2;
            var _r287_t0 = r287_sty;
            return _r287_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.R(r287_df.rightSB, r287_top, r1_fallback(r287_sw, r271_Stroke), r1_fallback(r287_hook, r271_Hook)) : _r287_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardR(r287_df.rightSB, r287_top, r1_fallback(r287_sw, r271_Stroke), r1_fallback(r287_hook, r271_Hook)) : (r287___ = _r287_t0, function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                return void 0;
            });
        };
        var r271_AutoStartSerifL = function (r290_df, r290_sty, r290_top, r290_hook, r290_sw) {
            var r290___, _r290_t1, _r290_t2;
            var _r290_t0 = r290_sty;
            return _r290_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.L(r290_df.leftSB, r290_top, r1_fallback(r290_sw, r271_Stroke), r1_fallback(r290_hook, r271_Hook)) : _r290_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardL(r290_df.leftSB, r290_top, r1_fallback(r290_sw, r271_Stroke), r1_fallback(r290_hook, r271_Hook)) : (r290___ = _r290_t0, function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                return void 0;
            });
        };
        var r271_AutoStartSerifRB = function (r293_df, r293_sty, r293_bot, r293_hook, r293_sw) {
            var r293___, _r293_t1, _r293_t2;
            var _r293_t0 = r293_sty;
            return _r293_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.R(r293_df.rightSB, r293_bot, r1_fallback(r293_sw, r271_Stroke), r1_fallback(r293_hook, r271_Hook)) : _r293_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardR(r293_df.rightSB, r293_bot, r1_fallback(r293_sw, r271_Stroke), r1_fallback(r293_hook, r271_Hook)) : (r293___ = _r293_t0, function () {
                var _r295_t1;
                var _r295_t0 = this;
                var r295_currentGlyph = _r295_t0;
                return void 0;
            });
        };
        var r271_AutoStartSerifLB = function (r296_df, r296_sty, r296_bot, r296_hook, r296_sw) {
            var r296___, _r296_t1, _r296_t2;
            var _r296_t0 = r296_sty;
            return _r296_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.L(r296_df.leftSB, r296_bot, r1_fallback(r296_sw, r271_Stroke), r1_fallback(r296_hook, r271_Hook)) : _r296_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardL(r296_df.leftSB, r296_bot, r1_fallback(r296_sw, r271_Stroke), r1_fallback(r296_hook, r271_Hook)) : (r296___ = _r296_t0, function () {
                var _r298_t1;
                var _r298_t0 = this;
                var r298_currentGlyph = _r298_t0;
                return void 0;
            });
        };
        var r271_CCurlyTailShape = function (r299_slabType) {
            var _r299_t0, _r299_t1;
            return function () {
                var r301___, _r301_t0, _r301_t2;
                var _r301_t1 = this;
                var r301_currentGlyph = _r301_t1;
                var r301_sw = r271_AdviceStroke2(2, 3, r271_XH);
                var r301_fine = r271_AdviceStroke2(3, 3, r271_XH);
                var r301_rinner = (r271_XH * 0.45 - r301_fine * 1.5) / 2;
                var r301_m1 = r271_SB + r271_O + r271_HSwToV(r301_sw);
                var r301_x2 = r271_SB + r301_sw * 0.3;
                var r301_y2 = -r271_XH * 0.05;
                r301_currentGlyph.include(r271_dispiro((_r301_t0 = r299_slabType, _r301_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.RtlLhs(r271_RightSB, r271_Middle, r271_XH, r301_sw, r271_Hook) : _r301_t0 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcStart.RtlLhs(r271_RightSB, r271_Middle, r271_XH, r301_sw, r271_Hook) : (r301___ = _r301_t0, [
                    r271_g4(r271_RightSB, r271_XH - r271_Hook, r271_widths.lhs(r301_sw)),
                    r271_hookstart(r271_XH)
                ])), r271_flat(r271_SB + r271_OX, r271_XH - r271_SmallArchDepthA), r271_curl(r271_SB + r271_OX, r271_SmallArchDepthB), r271_arcvh(), r271_CurlyTail(r301_fine, r301_rinner, r301_m1, 0, r271_RightSB, r301_x2, r301_y2)));
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r304_t0, _r304_t1;
            return { 'CLetterForm': r271_CLetterForm };
        });
        var r271_CLetterForm = function () {
            var _r305_t6, _r305_t8, _r305_tag9;
            var _r305_t7 = arguments;
            var _r305_t0 = [].slice.call(_r305_t7, 0);
            var _r305_t1 = [];
            var _r305_t2 = 0;
            while (_r305_t2 < _r305_t0.length) {
                if (!(_r305_t0[_r305_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r305_t1.push(_r305_t0[_r305_t2]);
                _r305_t2 = _r305_t2 + 1;
            }
            var _r305_t3 = _r305_t0;
            var _r305_t4 = _r305_t3.length;
            var _r305_t5 = 0;
            while (_r305_t5 < _r305_t4) {
                _r305_t2 = _r305_t3[_r305_t5];
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'df')
                    r305_df = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'sty')
                    r305_sty = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'styBot')
                    r305_styBot = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'top')
                    r305_top = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'bot')
                    r305_bot = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'ada')
                    r305_ada = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'adb')
                    r305_adb = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'hook')
                    r305_hook = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'sw')
                    r305_sw = _r305_t2.right;
                if (_r305_t2 && _r305_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r305_t2.left === 'ob')
                    r305_ob = _r305_t2.right;
                _r305_t5 = _r305_t5 + 1;
            }
            var r305_df = r1_fallback(r305_df, _r305_t1[0]);
            var r305_sty = r1_fallback(r305_sty, _r305_t1[1]);
            var r305_styBot = r1_fallback(r305_styBot, _r305_t1[2]);
            var r305_top = r1_fallback(r305_top, _r305_t1[3]);
            var r305_bot = r1_fallback(r305_bot, _r305_t1[4]);
            var r305_ada = r1_fallback(r305_ada, _r305_t1[5], r271_ArchDepthA);
            var r305_adb = r1_fallback(r305_adb, _r305_t1[6], r271_ArchDepthB);
            var r305_hook = r1_fallback(r305_hook, _r305_t1[7], r271_Hook);
            var r305_sw = r1_fallback(r305_sw, _r305_t1[8], r271_Stroke);
            var r305_ob = r1_fallback(r305_ob, _r305_t1[9], void 0);
            return function () {
                var r312_base, r312_topSerif, r312_botSerif, r312_revBase, r312_revTopSerif, r312_revBotSerif, r312_hookTop, r312_baseTopOnly, r312_descBase, r312_full, r312_revFull;
                var r312_exports = {};
                r312_exports.base = r312_base = function () {
                    var _r320_t0, _r320_t1;
                    return r271_CShapeT(r271_dispiro, 0, r305_df, r305_sty, r305_styBot, r305_top, r305_bot, r305_ada, r305_adb, r305_hook, r305_sw, r305_ob);
                };
                r312_exports.topSerif = r312_topSerif = function () {
                    var _r322_t0, _r322_t1;
                    return r271_AutoStartSerifR(r305_df, r305_sty, r305_top, r305_hook, r305_sw);
                };
                r312_exports.botSerif = r312_botSerif = function () {
                    var _r324_t0, _r324_t1;
                    return r271_AutoStartSerifRB(r305_df, r305_styBot, r305_bot, r305_hook, r305_sw);
                };
                r312_exports.revBase = r312_revBase = function () {
                    var _r326_t0, _r326_t1;
                    return r271_RevCShapeT(r271_dispiro, 0, r305_df, r305_sty, r305_styBot, r305_top, r305_bot, r305_ada, r305_adb, r305_hook, r305_sw, r305_ob);
                };
                r312_exports.revTopSerif = r312_revTopSerif = function () {
                    var _r328_t0, _r328_t1;
                    return r271_AutoStartSerifL(r305_df, r305_sty, r305_top, r305_hook, r305_sw);
                };
                r312_exports.revBotSerif = r312_revBotSerif = function () {
                    var _r330_t0, _r330_t1;
                    return r271_AutoStartSerifLB(r305_df, r305_styBot, r305_bot, r305_hook, r305_sw);
                };
                r312_exports.hookTop = r312_hookTop = function () {
                    var _r332_t0, _r332_t1;
                    return r271_TopHook.arcStart(r305_df.rightSB, r305_top, r305_hook, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r305_sw));
                };
                r312_exports.baseTopOnly = r312_baseTopOnly = function () {
                    var _r335_t0, _r335_t1;
                    return r271_CShapeT(r271_dispiro, 0, r305_df, r305_sty, r271_xn$SLABNONE$5sIl, r305_top, r305_bot, r305_ada, r305_adb, r305_hook, r305_sw, r305_ob);
                };
                r312_exports.descBase = r312_descBase = function () {
                    var _r337_t0, _r337_t1;
                    return r271_CShapeT(r271_dispiro, 0, r305_df, r305_sty, r305_styBot || r271_xn$SLABCLASSICAL$5sIl, r305_top, r305_bot, r305_ada, r305_adb, r305_hook, r305_sw, r305_ob);
                };
                r312_exports.full = r312_full = function () {
                    var _r339_t0, _r339_t1;
                    return function () {
                        var _r341_t1;
                        var _r341_t0 = this;
                        var r341_currentGlyph = _r341_t0;
                        r341_currentGlyph.include(r312_base(), true, true);
                        r341_currentGlyph.include(r312_topSerif());
                        r341_currentGlyph.include(r312_botSerif());
                        return void 0;
                    };
                };
                r312_exports.revFull = r312_revFull = function () {
                    var _r346_t0, _r346_t1;
                    return function () {
                        var _r348_t1;
                        var _r348_t0 = this;
                        var r348_currentGlyph = _r348_t0;
                        r348_currentGlyph.include(r312_revBase(), true, true);
                        r348_currentGlyph.include(r312_revTopSerif());
                        r348_currentGlyph.include(r312_revBotSerif());
                        return void 0;
                    };
                };
                return r312_exports;
            }();
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r353_t0, _r353_t1;
            return { 'CConfig': r271_CConfig };
        });
        var r271_CConfig = {
            'serifless': [
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'bottomSerifed': [
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ],
            'unilateralSerifed': [
                r271_xn$SLABCLASSICAL$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'bilateralSerifed': [
                r271_xn$SLABCLASSICAL$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ],
            'unilateralInwardSerifed': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'bilateralInwardSerifed': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABINWARD$5sIl
            ],
            'hybridSerifed1': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ]
        };
        var _r271_t15 = Object.entries(r271_CConfig)[Symbol.iterator]();
        var _r271_t16 = void 0;
        while (!(_r271_t16 = _r271_t15.next()).done) {
            _r271_t17 = _r271_t16.value;
            r271_suffix = _r271_t17[0];
            r271_sty = _r271_t17[1][0];
            r271_styBot = _r271_t17[1][1];
            _r271_t17[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('C.' + r271_suffix, null, function () {
                    var _r359_t1;
                    var _r359_t0 = this;
                    var r359_currentGlyph = _r359_t0;
                    r359_currentGlyph.include(r271_MarkSet.capital());
                    var r359_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_CAP, 0);
                    r359_currentGlyph.include(r359_lf.full());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpC.' + r271_suffix, null, function () {
                    var _r364_t1;
                    var _r364_t0 = this;
                    var r364_currentGlyph = _r364_t0;
                    r364_currentGlyph.include(r271_MarkSet.e());
                    var r364_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, 0);
                    r364_currentGlyph.include(r364_lf.full());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('revC.' + r271_suffix, null, function () {
                    var _r369_t1;
                    var _r369_t0 = this;
                    var r369_currentGlyph = _r369_t0;
                    r369_currentGlyph.include(r271_MarkSet.capital());
                    var r369_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_CAP, 0);
                    r369_currentGlyph.include(r369_lf.revFull());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('CHookTop.' + r271_suffix, null, function () {
                    var _r374_t1;
                    var _r374_t0 = this;
                    var r374_currentGlyph = _r374_t0;
                    r374_currentGlyph.include(r271_MarkSet.capital());
                    var r374_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_CAP, 0);
                    r374_currentGlyph.include(r271_union(r374_lf.base(), r374_lf.hookTop(), r374_lf.botSerif()));
                    r374_currentGlyph.include(r271_ExtendAboveBaseAnchors(r271_CAP + r271_Ascender - r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('c.' + r271_suffix, null, function () {
                    var _r380_t1;
                    var _r380_t0 = this;
                    var r380_currentGlyph = _r380_t0;
                    r380_currentGlyph.include(r271_MarkSet.e());
                    var r380_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB));
                    r380_currentGlyph.include(r380_lf.full());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('c/centKernelStd.' + r271_suffix, null, function () {
                    var _r387_t1;
                    var _r387_t0 = this;
                    var r387_currentGlyph = _r387_t0;
                    r387_currentGlyph.setWidth(0);
                    r387_currentGlyph.setMarkAnchor('cvDecompose', r271_Middle, r271_XH / 2);
                    var r387_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB));
                    r387_currentGlyph.include(r387_lf.full());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('c/centKernelCap.' + r271_suffix, null, function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.setWidth(0);
                    r395_currentGlyph.setMarkAnchor('cvDecompose', r271_Middle, r271_CAP / 2);
                    var r395_t = r271_CAP / 2 + r271_XH / 2;
                    var r395_b = r271_CAP / 2 - r271_XH / 2;
                    var r395_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r395_t, r395_b, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB));
                    r395_currentGlyph.include(r395_lf.full());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('revSmallC.' + r271_suffix, null, function () {
                    var _r403_t1;
                    var _r403_t0 = this;
                    var r403_currentGlyph = _r403_t0;
                    r403_currentGlyph.include(r271_MarkSet.e());
                    var r403_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB));
                    r403_currentGlyph.include(r403_lf.revFull());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('turncSideways.' + r271_suffix, null, function () {
                    var _r410_t1;
                    var _r410_t0 = this;
                    var r410_currentGlyph = _r410_t0;
                    var r410_df = r271_DivFrame(r271_XH / r271_Width, 2, r271_XH * 0.1 / r271_SB);
                    r410_currentGlyph.include(r410_df.markSet.e());
                    var r410_top = r271_Width - r271_SB;
                    var r410_p = r1_mix(1, r271_Width / r271_UPM, 0.5);
                    r410_currentGlyph.include(r271_PointingTo(r271_Width, r271_XH, r271_Width, 0, function () {
                        var _r413_t0, _r413_t1;
                        return function () {
                            var _r415_t1;
                            var _r415_t0 = this;
                            var r415_currentGlyph = _r415_t0;
                            var r415_lf = r271_CLetterForm(r410_df, r271_sty, r271_styBot, r410_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('hook', r271_Hook * r410_p));
                            r415_currentGlyph.include(r415_lf.full());
                            r415_currentGlyph.include(r271_FlipAround(r410_df.middle, r410_top / 2));
                            r415_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/esWide.' + r271_suffix, null, function () {
                    var _r422_t1;
                    var _r422_t0 = this;
                    var r422_currentGlyph = _r422_t0;
                    var r422_df = r422_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r422_currentGlyph.include(r422_df.markSet.e());
                    var r422_desc = -r271_LongJut + 0.5 * r271_Stroke;
                    r422_currentGlyph.include(r271_ExtendBelowBaseAnchors(r422_desc));
                    var r422_lf = r271_CLetterForm(r422_df, r271_sty, r271_styBot, r271_XH, r422_desc, new r271_xn$NamedParameterPair$2Lrc9b('ada', r422_df.archDepthA(r271_SmallArchDepth, r422_df.mvs)), new r271_xn$NamedParameterPair$2Lrc9b('adb', r422_df.archDepthB(r271_SmallArchDepth, r422_df.mvs)));
                    r422_currentGlyph.include(r422_lf.full());
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cHookTop.' + r271_suffix, null, function () {
                    var _r431_t1;
                    var _r431_t0 = this;
                    var r431_currentGlyph = _r431_t0;
                    r431_currentGlyph.include(r271_MarkSet.e());
                    var r431_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB));
                    r431_currentGlyph.include(r271_union(r431_lf.base(), r431_lf.hookTop(), r431_lf.botSerif()));
                    r431_currentGlyph.include(r271_ExtendAboveBaseAnchors(r271_Ascender));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cCurlyTail.' + r271_suffix, null, function () {
                    var _r439_t1;
                    var _r439_t0 = this;
                    var r439_currentGlyph = _r439_t0;
                    r439_currentGlyph.include(r271_MarkSet.e());
                    r439_currentGlyph.include(r271_CCurlyTailShape(r271_sty));
                    r439_currentGlyph.include(r271_AutoStartSerifR(r271_DivFrame(1), r271_sty, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('stretchedC.' + r271_suffix, null, function () {
                    var _r445_t1;
                    var _r445_t0 = this;
                    var r445_currentGlyph = _r445_t0;
                    r445_currentGlyph.include(r271_MarkSet.p());
                    var r445_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, r271_Descender);
                    r445_currentGlyph.include(r445_lf.full());
                    return void 0;
                });
                var r356_KoppaShapeT = function (r448_styTop, r448_styBot, r448_top, r448_base) {
                    var _r448_t0, _r448_t1;
                    return r271_union(r271_VBar.r(r271_Middle + r271_HSwToV(r271_Stroke), r271_Descender, r271_Stroke / 2), r271_difference(r448_base, r271_Rect(r448_top / 2, r271_Descender, r271_Middle + r271_HSwToV(r271_Stroke), r271_Width * 4), r271_Rect(r271_XH / 2, r1_mix(r271_Stroke, r271_Hook, 0.5), r271_Middle, r271_Width * 4)), r448_styBot ? r271_HSerif.mb(r271_Middle + r271_HSwToV(r271_HalfStroke), r271_Descender, r271_MidJutSide) : r271_xn$noshape$3cah());
                };
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Koppa.' + r271_suffix, null, function () {
                    var _r451_t1;
                    var _r451_t0 = this;
                    var r451_currentGlyph = _r451_t0;
                    r451_currentGlyph.include(r271_MarkSet.capDesc());
                    var r451_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_CAP, 0);
                    r451_currentGlyph.include(r356_KoppaShapeT(r271_sty, r271_styBot, r271_CAP, r271_union(r451_lf.baseTopOnly(), r451_lf.topSerif())));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/koppa.' + r271_suffix, null, function () {
                    var _r456_t1;
                    var _r456_t0 = this;
                    var r456_currentGlyph = _r456_t0;
                    r456_currentGlyph.include(r271_MarkSet.p());
                    var r456_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB));
                    r456_currentGlyph.include(r356_KoppaShapeT(r271_sty, r271_styBot, r271_XH, r271_union(r456_lf.baseTopOnly(), r456_lf.topSerif())));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('C/descBase.' + r271_suffix, null, function () {
                    var _r463_t1;
                    var _r463_t0 = this;
                    var r463_currentGlyph = _r463_t0;
                    r463_currentGlyph.include(r271_MarkSet.capital());
                    var r463_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_CAP, 0);
                    r463_currentGlyph.include(r271_union(r463_lf.descBase(), r463_lf.topSerif()));
                    r463_currentGlyph.include(r271_VBar.r(r271_RightSB, 0, r271_ArcStartSerifDepth(r271_Hook), r271_ArcStartSerifWidth(r271_Stroke)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('c/descBase.' + r271_suffix, null, function () {
                    var _r469_t1;
                    var _r469_t0 = this;
                    var r469_currentGlyph = _r469_t0;
                    r469_currentGlyph.include(r271_MarkSet.e());
                    var r469_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_XH, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB));
                    r469_currentGlyph.include(r271_union(r469_lf.descBase(), r469_lf.topSerif()));
                    r469_currentGlyph.include(r271_VBar.r(r271_RightSB, 0, r271_ArcStartSerifDepth(r271_Hook), r271_ArcStartSerifWidth(r271_Stroke)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('romanSixLateForm.' + r271_suffix, null, function () {
                    var _r477_leti0, _r477_t2, _r477_t3, _r477_t4, _r477_tag5;
                    var _r477_t1 = this;
                    var r477_currentGlyph = _r477_t1;
                    r477_currentGlyph.include(r271_MarkSet.capDesc());
                    var r477_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r271_CAP, 0);
                    r477_currentGlyph.include(r271_union(r477_lf.descBase(), r477_lf.topSerif()));
                    r477_currentGlyph.include(r271_VBar.r(r271_RightSB, r271_Descender, r271_ArcStartSerifDepth(r271_Hook), r271_ArcStartSerifWidth(r271_Stroke)));
                    if (r271_styBot) {
                        _r477_t3 = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_CAP, r271_Descender);
                        (function (_r477_leti0) {
                            var r481_sf = _r477_leti0;
                            return r477_currentGlyph.include(r481_sf.rb.full);
                        }(_r477_t3));
                    }
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/somSign.' + r271_suffix, null, function () {
                    var _r485_t1;
                    var _r485_t0 = this;
                    var r485_currentGlyph = _r485_t0;
                    r485_currentGlyph.include(r271_MarkSet.capital());
                    var r485_height = r1_mix(r271_XH, r271_CAP, 2 / 3);
                    var r485_lf = r271_CLetterForm(r271_DivFrame(1), r271_sty, r271_styBot, r485_height, r485_height - r271_XH);
                    r485_currentGlyph.include(r485_lf.full());
                    r485_currentGlyph.include(r271_HBar.b(r271_SB, r271_RightSB, 0, r271_markStroke));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('C', 'C');
        r271_xn$linkreducedvariant$5sIl8('C/sansSerif', 'C', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('revC', 8579, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'C'));
        r271_alias('cyrl/Es', 1057, 'C');
        r271_alias('grek/lunateSigma', 1017, 'C');
        r271_xn$selectvariant$7Hrq('CTopSerifOnly', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'C'));
        r271_xn$selectvariant$7Hrq('CHookTop', 391);
        r271_xn$selectvariant$7Hrq('smcpC', 7428, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'C'));
        r271_xn$selectvariant$7Hrq('c', 'c');
        r271_xn$linkreducedvariant$5sIl8('c/sansSerif', 'c', r1_MathSansSerif);
        r271_xn$linkreducedvariant$5sIl8('c/turnDescBase', 'c');
        r271_xn$selectvariant$7Hrq('revSmallC', 8580, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$selectvariant$7Hrq('c/centKernelStd', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$selectvariant$7Hrq('c/centKernelCap', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_alias('cyrl/es', 1089, 'c');
        r271_alias('grek/lunateSmallSigma', 1010, 'c.serifless');
        r271_xn$selectvariant$7Hrq('turncSideways', 7442, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$selectvariant$7Hrq('cyrl/esWide', 7299, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$selectvariant$7Hrq('cTopSerifOnly', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'c'));
        r271_xn$selectvariant$7Hrq('cCurlyTail', 597);
        r271_xn$selectvariant$7Hrq('cHookTop', 392);
        r271_xn$selectvariant$7Hrq('stretchedC', 663, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$selectvariant$7Hrq('cyrl/Koppa', 1152, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'C'));
        r271_xn$selectvariant$7Hrq('cyrl/koppa', 1153, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$selectvariant$7Hrq('C/descBase');
        r271_xn$selectvariant$7Hrq('c/descBase');
        r271_xn$selectvariant$7Hrq('romanSixLateForm', 8581, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'C/descBase'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/C', 8450, function () {
            var _r504_t1;
            var _r504_t0 = this;
            var r504_currentGlyph = _r504_t0;
            r504_currentGlyph.include(r271_MarkSet.capital());
            r504_currentGlyph.include(r271_CShapeT(r271_dispiro, 0, r271_DivFrame(1), r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_CAP, 0, r271_ArchDepthA, r271_ArchDepthB, r271_Hook, r271_BBS));
            r504_currentGlyph.include(r271_intersection(r271_CShapeT(r271_xn$spirooutline$1aao, 0.1, r271_DivFrame(1), r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_CAP, 0, r271_ArchDepthA, r271_ArchDepthB, r271_Hook, r271_BBS), r271_VBar.l(r271_SB + r271_BBD, 0, r271_CAP, r271_BBS)));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/c', 120148, function () {
            var _r510_t1;
            var _r510_t0 = this;
            var r510_currentGlyph = _r510_t0;
            r510_currentGlyph.include(r271_MarkSet.capital());
            r510_currentGlyph.include(r271_CShapeT(r271_dispiro, 0, r271_DivFrame(1), r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_XH, 0, r271_SmallArchDepthA, r271_SmallArchDepthB, r271_Hook, r271_BBS));
            r510_currentGlyph.include(r271_intersection(r271_CShapeT(r271_xn$spirooutline$1aao, 0.1, r271_DivFrame(1), r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_XH, 0, r271_SmallArchDepthA, r271_SmallArchDepthB, r271_Hook, r271_BBS), r271_VBar.l(r271_SB + r271_BBD + r271_OX, 0, r271_CAP, r271_BBS)));
            return void 0;
        });
        r271_xn$selectvariant$7Hrq('currency/somSign', 8384, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/euroSign/overlay', null, r271_union(r271_LetterBarOverlay.l(r271_SB, r271_CAP * 0.4), r271_LetterBarOverlay.l(r271_SB, r271_CAP * 0.6)));
        r271_xn$derivecomposites$7Hrq('currency/euroSign', 8364, 'C', 'currency/euroSign/overlay');
        var r271_CentBarConfig = {
            'open': [
                r271_Descender / 2,
                r271_XH - r271_Descender / 2,
                0,
                'std'
            ],
            'through': [
                r271_Descender / 2,
                r271_XH - r271_Descender / 2,
                1,
                'std'
            ],
            'interrupted': [
                r271_Descender / 2,
                r271_XH - r271_Descender / 2,
                2,
                'std'
            ],
            'openCap': [
                0,
                r271_CAP,
                0,
                'cap'
            ],
            'throughCap': [
                0,
                r271_CAP,
                1,
                'cap'
            ],
            'interruptedCap': [
                0,
                r271_CAP,
                2,
                'cap'
            ]
        };
        var _r271_t18 = Object.entries(r271_CentBarConfig)[Symbol.iterator]();
        var _r271_t19 = void 0;
        while (!(_r271_t19 = _r271_t18.next()).done) {
            _r271_t20 = _r271_t19.value;
            r271_suffix = _r271_t20[0];
            r271_bot = _r271_t20[1][0];
            r271_top = _r271_t20[1][1];
            r271_fillType = _r271_t20[1][2];
            r271_selector = _r271_t20[1][3];
            _r271_t20[1];
            (function () {
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cent/bar.' + r271_suffix, null, function () {
                    var r521___, r521_cofine, r521_gap, _r521_t0, _r521_t2;
                    var _r521_t1 = this;
                    var r521_currentGlyph = _r521_t1;
                    var r521_w = r271_AdviceStroke(3);
                    var r521_fine = r271_AdviceStroke(r271_StrokeWidthBlend(3, 5.5));
                    var r521_yMid = r1_mix(r271_bot, r271_top, 0.5);
                    var r521_fillBottom = r521_yMid - r271_XH / 2 + r271_HalfStroke;
                    var r521_fillTop = r521_yMid + r271_XH / 2 - r271_HalfStroke;
                    r521_currentGlyph.setBaseAnchor('cvDecompose', r271_Middle, r521_yMid);
                    r521_currentGlyph.include(r271_dispiro(r271_flat(r271_Middle, r521_fillTop, r271_widths.center(r521_w)), r271_curl(r271_Middle, r271_top, r271_heading(r271_Upward))));
                    r521_currentGlyph.include(r271_dispiro(r271_flat(r271_Middle, r521_fillBottom, r271_widths.center(r521_w)), r271_curl(r271_Middle, r271_bot, r271_heading(r271_Downward))));
                    r521_currentGlyph.include((_r521_t0 = r271_fillType, _r521_t0 === 1 ? r271_VBar.m(r271_Middle, r521_fillBottom, r521_fillTop, r521_fine) : _r521_t0 === 2 ? (r521_cofine = r271_AdviceStroke(4), r521_gap = Math.max(r271_XH / 8, r271_AdviceStroke2(6, 6, r271_XH)), r271_union(r271_dispiro(r271_flat(r271_Middle, r521_fillTop, r271_widths.center.heading(r521_cofine, r271_Downward)), r271_curl(r271_Middle, r521_yMid + r521_gap / 2, r271_widths.center.heading(r521_fine, r271_Downward))), r271_dispiro(r271_flat(r271_Middle, r521_fillBottom, r271_widths.center.heading(r521_cofine, r271_Upward)), r271_curl(r271_Middle, r521_yMid - r521_gap / 2, r271_widths.center.heading(r521_fine, r271_Upward))))) : (r521___ = _r521_t0, r271_xn$noshape$3cah())));
                    r1_DependentSelector.set(r521_currentGlyph, r271_selector);
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('cent/bar', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cent'));
        r271_CreateDependentComposite('cent/centSign', 162, 'cent/bar', {
            'std': 'c/centKernelStd',
            'cap': 'c/centKernelCap'
        });
        r271_turned('turnC', 390, 'C', r271_Middle, r271_CAP / 2);
        r271_turned('turnc', 596, 'c', r271_Middle, r271_XH / 2);
        r271_turned('turnSmcpC', 7440, 'smcpC', r271_Middle, r271_XH / 2);
        r271_alias('grek/revLunateSigma', 1021, 'revC');
        r271_alias('grek/revLunateSmallSigma', 891, 'revSmallC.serifless');
        r271_turned('turnc/turnDescBase', null, 'c/turnDescBase', r271_Middle, r271_XH / 2);
        r271_xn$derivecomposites$7Hrq('turncRetroflexHook', 7575, 'turnc/turnDescBase', r271_RetroflexHook.l(r271_SB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_DToothlessRise)));
        r271_xn$derivecomposites$7Hrq('CPalatalHook', 42948, 'C/descBase', r271_PalatalHook.r(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_DToothlessRise)));
        r271_xn$derivecomposites$7Hrq('cPalatalHook', 42900, 'c/descBase', r271_PalatalHook.r(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r271_DToothlessRise)));
        r271_xn$derivecomposites$7Hrq('grek/dotLunateSigma', 1022, 'grek/lunateSigma', 'innerDot');
        r271_xn$derivecomposites$7Hrq('grek/dotRevLunateSigma', 1023, 'grek/revLunateSigma', 'innerDot');
        r271_xn$derivecomposites$7Hrq('grek/dotLunateSmallSigma', 892, 'grek/lunateSmallSigma', 'innerDotSmall');
        r271_xn$derivecomposites$7Hrq('grek/dotRevLunateSmallSigma', 893, 'grek/revLunateSmallSigma', 'innerDotSmall');
        r271_xn$derivecomposites$7Hrq('CRevDot', 42814, 'revC', 'innerDotSmall');
        r271_xn$derivecomposites$7Hrq('cRevDot', 42815, 'revSmallC', 'innerDotSmall');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('CBarOverlay', null, r271_LetterBarOverlay.l.in(r271_SB, 0, r271_CAP));
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cBarOverlay', null, r271_LetterBarOverlay.l.in(r271_SB, 0, r271_XH));
        r271_xn$derivecomposites$7Hrq('CBar', 42898, 'C', 'CBarOverlay');
        r271_xn$derivecomposites$7Hrq('cBar', 42899, 'c', 'cBarOverlay');
        r271_xn$derivecomposites$7Hrq('CCedilla', 199, 'C', 'cedillaExtShapeBelowOArc');
        r271_xn$derivecomposites$7Hrq('cCedilla', 231, 'c', 'cedillaExtShapeBelowOArc');
        r271_xn$derivecomposites$7Hrq('CCedillaAcute', 7688, 'C', 'cedillaExtShapeBelowOArc', 'acuteAbove');
        r271_xn$derivecomposites$7Hrq('cCedillaAcute', 7689, 'c', 'cedillaExtShapeBelowOArc', 'acuteAbove');
        r271_xn$derivecomposites$7Hrq('cyrl/The', 1194, 'cyrl/Es', 'cedillaExtShapeBelowOArc');
        return r271_xn$derivecomposites$7Hrq('cyrl/the', 1195, 'cyrl/es', 'cedillaExtShapeBelowOArc');
    });
    return void 0;
});
