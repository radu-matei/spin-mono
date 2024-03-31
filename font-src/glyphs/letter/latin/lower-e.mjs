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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-E', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_RevBody, _r271_t15, _r271_t17, _r271_t18, _r271_t19, _r271_tag20;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_DesignParameters = _r271_t1.DesignParameters;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_AHook = _r271_t1.AHook;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_SmallArchDepth = _r271_t1.SmallArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_LongJut = _r271_t1.LongJut;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_StrokeWidthBlend = _r271_t1.StrokeWidthBlend;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_g2 = _r271_t2.g2;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_alsoThru = _r271_t2.alsoThru;
        var r271_alsoThruThem = _r271_t2.alsoThruThem;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookend = _r271_t4.hookend;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_MaskBelow = _r271_t4.MaskBelow;
        var r271_MaskLeft = _r271_t4.MaskLeft;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateSelectorVariants = _r271_t6.CreateSelectorVariants;
        var r271_DefineSelectorGlyph = _r271_t6.DefineSelectorGlyph;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_FlatHookDepth = _r271_t7.FlatHookDepth;
        var r271_RetroflexHook = _r271_t7.RetroflexHook;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifedArcEnd = _r271_t8.SerifedArcEnd;
        var r271_ArcEndSerif = _r271_t8.ArcEndSerif;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markExtend = _r271_t9.markExtend;
        var r271_markStroke = _r271_t9.markStroke;
        var r271_markStress = _r271_t9.markStress;
        var r271_markFine = _r271_t9.markFine;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r271_aboveMarkTop = _r271_t10.aboveMarkTop;
        var r271_aboveMarkBot = _r271_t10.aboveMarkBot;
        var r271_aboveMarkMid = _r271_t10.aboveMarkMid;
        var r271_aboveMarkStack = _r271_t10.aboveMarkStack;
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_ExtendBelowBaseAnchors = _r271_t11.ExtendBelowBaseAnchors;
        var _r271_t12 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-C'].resolve();
        var r271_CConfig = _r271_t12.CConfig;
        var r271_xTerminalR = function (r281_df) {
            var _r281_t0, _r281_t1;
            return r281_df.rightSB - r271_OX * (r271_para.isItalic ? 0 : 0.5);
        };
        var r271_HookHeight = function (r282_top, r282_stroke) {
            var _r282_t0, _r282_t1;
            return Math.min(r271_Hook, r271_AHook / r271_XH * r282_top, r271_para.isItalic ? r282_top : r282_stroke / 2 + (r282_top - r282_stroke * 3) / 4);
        };
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABCLASSICAL$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        var r271_SmallESerifedTerminalShape = function (r283_df, r283_top, r283_stroke, r283_tailSlab) {
            var r283___, _r283_t1, _r283_t2;
            var _r283_t0 = r283_tailSlab;
            return _r283_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.LtrLhs(r283_df.rightSB, r283_df.middle, 0, r283_stroke, r271_HookHeight(r283_top, r283_stroke)) : _r283_t0 === r271_xn$SLABINWARD$5sIl ? [
                r271_arcvh(),
                r271_g4(r283_df.middle + r271_CorrectionOMidX * r283_stroke, r271_O),
                r271_g4(r283_df.rightSB, r271_DToothlessRise)
            ] : (r283___ = _r283_t0, [
                r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r283_stroke)),
                r271_g4(r271_xTerminalR(r283_df), r271_HookHeight(r283_top, r283_stroke))
            ]);
        };
        var r271_SmallETerminalSerif = function (r285_df, r285_top, r285_stroke, r285_tailSlab) {
            var r285___, _r285_t1, _r285_t2;
            var _r285_t0 = r285_tailSlab;
            return _r285_t0 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.R(r285_df.rightSB, 0, r285_stroke, r271_HookHeight(r285_top, r285_stroke)) : _r285_t0 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardR(r285_df.rightSB, 0, r285_stroke, r271_HookHeight(r285_top, r285_stroke)) : (r285___ = _r285_t0, r271_xn$noshape$3cah());
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r287_t0, _r287_t1;
            return { 'SmallEShape': r271_SmallEShape };
        });
        var r271_SmallEShape = function () {
            var _r288_t6;
            var _r288_t7 = arguments;
            var _r288_t0 = [].slice.call(_r288_t7, 0);
            var _r288_t1 = [];
            var _r288_t2 = 0;
            while (_r288_t2 < _r288_t0.length) {
                if (!(_r288_t0[_r288_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r288_t1.push(_r288_t0[_r288_t2]);
                _r288_t2 = _r288_t2 + 1;
            }
            var _r288_t3 = _r288_t0;
            var _r288_t4 = _r288_t3.length;
            var _r288_t5 = 0;
            while (_r288_t5 < _r288_t4) {
                _r288_t2 = _r288_t3[_r288_t5];
                if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'df')
                    r288_df = _r288_t2.right;
                if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'top')
                    r288_top = _r288_t2.right;
                if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'stroke')
                    r288_stroke = _r288_t2.right;
                if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'barpos')
                    r288_barpos = _r288_t2.right;
                if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'bbd')
                    r288_bbd = _r288_t2.right;
                if (_r288_t2 && _r288_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r288_t2.left === 'tailSlab')
                    r288_tailSlab = _r288_t2.right;
                _r288_t5 = _r288_t5 + 1;
            }
            var r288_df = r1_fallback(r288_df, _r288_t1[0]);
            var r288_top = r1_fallback(r288_top, _r288_t1[1]);
            var r288_stroke = r1_fallback(r288_stroke, _r288_t1[2]);
            var r288_barpos = r1_fallback(r288_barpos, _r288_t1[3]);
            var r288_bbd = r1_fallback(r288_bbd, _r288_t1[4], 0);
            var r288_tailSlab = r1_fallback(r288_tailSlab, _r288_t1[5]);
            return function () {
                var _r294_t1;
                var _r294_t0 = this;
                var r294_currentGlyph = _r294_t0;
                var r294_barbottom = r288_top * r1_fallback(r288_barpos, r271_DesignParameters.eBarPos) - r288_stroke / 2;
                r294_currentGlyph.include(r271_HBar.b(r288_df.leftSB + r288_stroke / 2 + r271_OX + r288_bbd, r288_df.rightSB - r288_stroke / 2 - r271_OX, r294_barbottom, r288_stroke));
                var r294_path = r294_currentGlyph.include(r271_dispiro(r271_widths.lhs(r288_stroke), r271_flat(r288_df.rightSB - r271_OX, r294_barbottom, r271_heading(r271_Upward)), r271_curl(r288_df.rightSB - r271_OX, r288_top - r288_df.archDepthB(r271_SmallArchDepth)), r271_arcvh(), r271_g4(r288_df.middle - r271_CorrectionOMidS, r288_top - r271_O), r271_archv(), r271_flat(r288_df.leftSB + r271_OX, r288_top - r288_df.archDepthA(r271_SmallArchDepth)), r271_curl(r288_df.leftSB + r271_OX, 0 + r288_df.archDepthB(r271_SmallArchDepth)), r271_SmallESerifedTerminalShape(r288_df, r288_top, r288_stroke, r288_tailSlab)));
                r294_currentGlyph.include(r271_SmallETerminalSerif(r288_df, r288_top, r288_stroke, r288_tailSlab));
                return r294_path.rhsKnots[r294_path.rhsKnots.length - 1];
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r299_t0, _r299_t1;
            return { 'RevSmallEShape': r271_RevSmallEShape };
        });
        var r271_RevSmallEShape = function () {
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
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'top')
                    r300_top = _r300_t2.right;
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'stroke')
                    r300_stroke = _r300_t2.right;
                if (_r300_t2 && _r300_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r300_t2.left === 'barpos')
                    r300_barpos = _r300_t2.right;
                _r300_t5 = _r300_t5 + 1;
            }
            var r300_df = r1_fallback(r300_df, _r300_t1[0]);
            var r300_top = r1_fallback(r300_top, _r300_t1[1]);
            var r300_stroke = r1_fallback(r300_stroke, _r300_t1[2]);
            var r300_barpos = r1_fallback(r300_barpos, _r300_t1[3]);
            return function () {
                var _r306_t1;
                var _r306_t0 = this;
                var r306_currentGlyph = _r306_t0;
                var r306_barbottom = r300_top * r1_fallback(r300_barpos, r271_DesignParameters.eBarPos) - r271_HalfStroke;
                var r306_hookx = r300_df.leftSB;
                var r306_hookmiddle = r1_mix(r300_df.rightSB - r271_O, r306_hookx, 0.55) + r271_CorrectionOMidS;
                r306_currentGlyph.include(r271_HBar.b(r300_df.leftSB + r300_stroke / 2, r300_df.rightSB - r300_stroke / 2, r306_barbottom, r300_stroke));
                r306_currentGlyph.include(r271_dispiro(r271_widths.rhs(r300_stroke), r271_flat(r300_df.leftSB + r271_OX, r306_barbottom, r271_heading(r271_Upward)), r271_curl(r300_df.leftSB + r271_OX, r300_top - r300_df.archDepthA(r271_SmallArchDepth)), r271_arcvh(), r271_g4(r300_df.middle, r300_top - r271_O), r271_archv(), r271_flat(r300_df.rightSB - r271_OX, r300_top - r300_df.archDepthB(r271_SmallArchDepth)), r271_curl(r300_df.rightSB - r271_OX, r300_df.archDepthA(r271_SmallArchDepth)), r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r300_stroke)), r271_g4(r300_df.width - r271_xTerminalR(r300_df), r271_HookHeight(r300_top, r300_stroke))));
                return void 0;
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r311_t0, _r311_t1;
            return { 'SmallERoundedShape': r271_SmallERoundedShape };
        });
        var r271_SmallERoundedShape = function () {
            var _r312_t6;
            var _r312_t7 = arguments;
            var _r312_t0 = [].slice.call(_r312_t7, 0);
            var _r312_t1 = [];
            var _r312_t2 = 0;
            while (_r312_t2 < _r312_t0.length) {
                if (!(_r312_t0[_r312_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r312_t1.push(_r312_t0[_r312_t2]);
                _r312_t2 = _r312_t2 + 1;
            }
            var _r312_t3 = _r312_t0;
            var _r312_t4 = _r312_t3.length;
            var _r312_t5 = 0;
            while (_r312_t5 < _r312_t4) {
                _r312_t2 = _r312_t3[_r312_t5];
                if (_r312_t2 && _r312_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r312_t2.left === 'df')
                    r312_df = _r312_t2.right;
                if (_r312_t2 && _r312_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r312_t2.left === 'top')
                    r312_top = _r312_t2.right;
                if (_r312_t2 && _r312_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r312_t2.left === 'stroke')
                    r312_stroke = _r312_t2.right;
                if (_r312_t2 && _r312_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r312_t2.left === 'barpos')
                    r312_barpos = _r312_t2.right;
                if (_r312_t2 && _r312_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r312_t2.left === 'tailSlab')
                    r312_tailSlab = _r312_t2.right;
                _r312_t5 = _r312_t5 + 1;
            }
            var r312_df = r1_fallback(r312_df, _r312_t1[0]);
            var r312_top = r1_fallback(r312_top, _r312_t1[1]);
            var r312_stroke = r1_fallback(r312_stroke, _r312_t1[2]);
            var r312_barpos = r1_fallback(r312_barpos, _r312_t1[3]);
            var r312_tailSlab = r1_fallback(r312_tailSlab, _r312_t1[4]);
            return function () {
                var _r318_t1;
                var _r318_t0 = this;
                var r318_currentGlyph = _r318_t0;
                var r318_barbottom = r312_top * r1_fallback(r312_barpos, r271_para.isItalic ? 0.5 : 0.475) - r312_stroke / 2;
                var r318_pBarRight = 0.475 - r271_TanSlope * 0.5;
                var r318_pArcRight = r271_para.isItalic ? 0.425 - r271_TanSlope * 0.25 : r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB);
                var r318_xStart = r312_df.leftSB + r271_HSwToV(0.125 * r312_stroke);
                var r318_pfIt = r271_para.isItalic ? 1 : 0;
                var r318_path = r318_currentGlyph.include(r271_dispiro(r271_widths.lhs(r312_stroke), (r271_para.isItalic ? r271_g2 : r271_flat)(r318_xStart, r318_barbottom - r318_pfIt * r271_StrokeWidthBlend(2, 3) * r271_O), r271_para.isItalic ? r271_alsoThru.g2(0.5, 0.8) : [], (r271_para.isItalic ? r271_g2 : r271_curl)(r1_mix(r318_xStart + (r271_para.isItalic ? 0.25 : 0) * r271_HSwToV(r312_stroke), r312_df.rightSB, r318_pBarRight), r318_barbottom + r318_pfIt * r271_StrokeWidthBlend(0.25, 1) * r271_O), r271_para.isItalic ? [] : r271_archv(), r271_g4(r312_df.rightSB - r271_OX, r1_mix(r318_barbottom, r312_top, r318_pArcRight)), r271_arcvh(), r271_g4(r312_df.middle - r271_CorrectionOMidS, r312_top - r271_O), r271_archv(), r271_flat(r312_df.leftSB + r271_OX, r312_top - r312_df.archDepthA(r271_SmallArchDepth)), r271_curl(r312_df.leftSB + r271_OX, 0 + r312_df.archDepthB(r271_SmallArchDepth)), r271_SmallESerifedTerminalShape(r312_df, r312_top, r312_stroke, r312_tailSlab)));
                r318_currentGlyph.include(r271_SmallETerminalSerif(r312_df, r312_top, r312_stroke, r312_tailSlab));
                return r318_path.rhsKnots[r318_path.rhsKnots.length - 1];
            };
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r322_t0, _r322_t1;
            return { 'RevSmallERoundedShape': r271_RevSmallERoundedShape };
        });
        var r271_RevSmallERoundedShape = function () {
            var _r323_t6;
            var _r323_t7 = arguments;
            var _r323_t0 = [].slice.call(_r323_t7, 0);
            var _r323_t1 = [];
            var _r323_t2 = 0;
            while (_r323_t2 < _r323_t0.length) {
                if (!(_r323_t0[_r323_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r323_t1.push(_r323_t0[_r323_t2]);
                _r323_t2 = _r323_t2 + 1;
            }
            var _r323_t3 = _r323_t0;
            var _r323_t4 = _r323_t3.length;
            var _r323_t5 = 0;
            while (_r323_t5 < _r323_t4) {
                _r323_t2 = _r323_t3[_r323_t5];
                if (_r323_t2 && _r323_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'df')
                    r323_df = _r323_t2.right;
                if (_r323_t2 && _r323_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'top')
                    r323_top = _r323_t2.right;
                if (_r323_t2 && _r323_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'stroke')
                    r323_stroke = _r323_t2.right;
                if (_r323_t2 && _r323_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r323_t2.left === 'barpos')
                    r323_barpos = _r323_t2.right;
                _r323_t5 = _r323_t5 + 1;
            }
            var r323_df = r1_fallback(r323_df, _r323_t1[0]);
            var r323_top = r1_fallback(r323_top, _r323_t1[1]);
            var r323_stroke = r1_fallback(r323_stroke, _r323_t1[2]);
            var r323_barpos = r1_fallback(r323_barpos, _r323_t1[3]);
            return function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                var r329_barbottom = r323_top * r1_fallback(r323_barpos, r271_para.isItalic ? 0.5 : 0.475) - r323_stroke / 2;
                var r329_pBarRight = 0.475 - r271_TanSlope * 0.5;
                var r329_pArcRight = r271_para.isItalic ? 0.425 + r271_TanSlope * 0.25 : r271_ArchDepthB / (r271_ArchDepthA + r271_ArchDepthB);
                var r329_xStart = r323_df.rightSB - r271_HSwToV(0.125 * r323_stroke);
                var r329_pfIt = r271_para.isItalic ? 1 : 0;
                r329_currentGlyph.include(r271_dispiro(r271_widths.rhs(r323_stroke), (r271_para.isItalic ? r271_g2 : r271_flat)(r329_xStart, r329_barbottom - r329_pfIt * r271_StrokeWidthBlend(2, 3) * r271_O), r271_para.isItalic ? r271_alsoThru.g2(0.5, 0.8) : [], (r271_para.isItalic ? r271_g2 : r271_curl)(r1_mix(r329_xStart - (r271_para.isItalic ? 0.25 : 0) * r271_HSwToV(r323_stroke), r323_df.leftSB, r329_pBarRight), r329_barbottom + r329_pfIt * r271_StrokeWidthBlend(0.25, 1) * r271_O), r271_para.isItalic ? [] : r271_archv(), r271_g4(r323_df.leftSB + r271_OX, r1_mix(r329_barbottom, r323_top, r329_pArcRight)), r271_arcvh(), r271_g4(r323_df.middle - r271_CorrectionOMidS, r323_top - r271_O), r271_archv(), r271_flat(r323_df.rightSB - r271_OX, r323_top - r323_df.archDepthB(r271_SmallArchDepth)), r271_curl(r323_df.rightSB - r271_OX, 0 + r323_df.archDepthA(r271_SmallArchDepth)), r271_hookend(r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r323_stroke)), r271_g4(r323_df.width - r271_xTerminalR(r323_df), r271_HookHeight(r323_top, r323_stroke))));
                return void 0;
            };
        };
        var r271_AbkCheShape = function () {
            var _r332_t6;
            var _r332_t7 = arguments;
            var _r332_t0 = [].slice.call(_r332_t7, 0);
            var _r332_t1 = [];
            var _r332_t2 = 0;
            while (_r332_t2 < _r332_t0.length) {
                if (!(_r332_t0[_r332_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r332_t1.push(_r332_t0[_r332_t2]);
                _r332_t2 = _r332_t2 + 1;
            }
            var _r332_t3 = _r332_t0;
            var _r332_t4 = _r332_t3.length;
            var _r332_t5 = 0;
            while (_r332_t5 < _r332_t4) {
                _r332_t2 = _r332_t3[_r332_t5];
                if (_r332_t2 && _r332_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'fDesc')
                    r332_fDesc = _r332_t2.right;
                if (_r332_t2 && _r332_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'Body')
                    r332_Body = _r332_t2.right;
                if (_r332_t2 && _r332_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'df')
                    r332_df = _r332_t2.right;
                if (_r332_t2 && _r332_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'top')
                    r332_top = _r332_t2.right;
                if (_r332_t2 && _r332_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r332_t2.left === 'tailSlab')
                    r332_tailSlab = _r332_t2.right;
                _r332_t5 = _r332_t5 + 1;
            }
            var r332_fDesc = r1_fallback(r332_fDesc, _r332_t1[0]);
            var r332_Body = r1_fallback(r332_Body, _r332_t1[1]);
            var r332_df = r1_fallback(r332_df, _r332_t1[2]);
            var r332_top = r1_fallback(r332_top, _r332_t1[3]);
            var r332_tailSlab = r1_fallback(r332_tailSlab, _r332_t1[4]);
            return function () {
                var _r338_t1;
                var _r338_t0 = this;
                var r338_currentGlyph = _r338_t0;
                var r338_gap = (r332_df.width - 2 * r332_df.leftSB - 2.5 * r332_df.mvs) * 0.375 - r271_HSwToV(0.25 * r332_df.mvs);
                var r338_divSub = (r332_df.width - r338_gap - r332_df.mvs) / r271_Width;
                var r338_dfSub = r271_DivFrame(r338_divSub, 2);
                r338_currentGlyph.include(r332_Body(r338_dfSub, r332_top, r332_df.mvs, new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r332_tailSlab)));
                if (r332_fDesc) {
                    r338_currentGlyph.include(r271_ExtendBelowBaseAnchors(-r271_LongJut + 0.5 * r271_Stroke));
                    r338_currentGlyph.include(r271_difference(r271_VBar.m(r338_dfSub.middle, -r271_LongJut + 0.5 * r271_Stroke, r332_df.mvs + r271_O, r271_AdviceStroke(3.5, r332_df.div)), r271_OShapeOutline.NoOvershoot(r332_top, 0, r338_dfSub.leftSB, r338_dfSub.rightSB, r332_df.mvs)));
                }
                r338_currentGlyph.include(r271_Translate(r271_Width * (r332_df.div - r338_divSub), 0));
                var r338_hd = r271_FlatHookDepth(r332_df);
                var r338_yBar = r332_top * r271_DesignParameters.eBarPos - 0.5 * r332_df.mvs;
                r338_currentGlyph.include(r271_intersection(r271_MaskLeft(r338_dfSub.leftSB + r271_Width * (r332_df.div - r338_divSub)), r271_dispiro(r271_flat(r332_df.leftSB - r271_HSwToV(0.25 * r332_df.mvs), r338_yBar + r271_Hook, r271_widths.lhs.heading(r332_df.mvs, r271_Downward)), r271_curl(r332_df.leftSB - r271_HSwToV(0.25 * r332_df.mvs), r338_yBar + Math.min(r271_Hook, r338_hd.y) - r332_df.mvs * 0.25, r271_heading(r271_Downward)), r271_arcvh(), r271_flat(Math.min(r332_df.leftSB + r338_hd.x - r271_HSwToV(0.5 * r332_df.mvs), r338_dfSub.leftSB + r271_Width * (r332_df.div - r338_divSub)), r338_yBar), r271_curl(r338_dfSub.middle + r271_Width * (r332_df.div - r338_divSub), r338_yBar))));
                return void 0;
            };
        };
        var r271_SmallEConfig = {
            'flatCrossbar': [
                r271_SmallEShape,
                r271_RevSmallEShape
            ],
            'rounded': [
                r271_SmallERoundedShape,
                r271_RevSmallERoundedShape
            ]
        };
        var _r271_t13 = Object.entries(r271_SmallEConfig)[Symbol.iterator]();
        var _r271_t14 = void 0;
        while (!(_r271_t14 = _r271_t13.next()).done) {
            _r271_t15 = _r271_t14.value;
            r271_suffix = _r271_t15[0];
            r271_Body = _r271_t15[1][0];
            r271_RevBody = _r271_t15[1][1];
            _r271_t15[1];
            (function () {
                var r347_suffixSerif, r347_styTop, r347_styBot, _r347_t2, _r347_t3, _r347_tag4;
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('e.' + r271_suffix, null, function () {
                    var _r350_t1;
                    var _r350_t0 = this;
                    var r350_currentGlyph = _r350_t0;
                    r350_currentGlyph.include(r271_MarkSet.e());
                    r350_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eOgonek.' + r271_suffix, null, function () {
                    var _r355_t1;
                    var _r355_t0 = this;
                    var r355_currentGlyph = _r355_t0;
                    r355_currentGlyph.include(r271_MarkSet.e());
                    var r355_lastKnot = r355_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    r355_currentGlyph.include(r271_xn$referglyph$1aao('ogonekTR/spacer'));
                    var r355_fine = r271_AdviceStroke(8);
                    var r355_depth = 0 - r271_Descender - r271_markStroke;
                    var r355_extL = 7 / 16 * r355_depth + 0.25 * r271_markStress;
                    var r355_extR = Math.max(0.0625 * r271_markExtend, 1.5 * r271_TanSlope * r271_markStroke);
                    var r355_beginCoSlope = r271_para.isItalic ? 0.2 : 0;
                    r355_currentGlyph.setBaseAnchor('trailing', r271_RightSB + r355_extR, -r355_depth + 0.5 * r271_O - r271_markStroke);
                    r355_currentGlyph.setBaseAnchor('belowBraceL', r271_RightSB - r355_extL - r271_HSwToV(0.25 * r271_markStroke), -0.75 * r355_depth);
                    r355_currentGlyph.setBaseAnchor('belowBraceR', r271_RightSB - 0.75 * r355_extL, -0.75 * r355_depth);
                    var r355_turnSlope = 0.5 * ((r271_markStroke - r355_fine) / r271_markStroke - (r271_ArchDepthB - r271_ArchDepth) / r271_ArchDepth);
                    r355_currentGlyph.include(r271_intersection(r271_MaskBelow(r355_lastKnot.y), r271_dispiro(r271_g4(r355_lastKnot.x, r355_lastKnot.y, r271_widths.rhs(r355_fine)), r271_g4(r355_lastKnot.x - r355_beginCoSlope * 0.01, r355_lastKnot.y - 0.01), r271_alsoThruThem.fromTWithOffset([
                        1 / 3,
                        2 / 3
                    ], {
                        'rx': function (r363_rt) {
                            var _r363_t0, _r363_t1;
                            return r363_rt;
                        },
                        'deltaX': function (r364_rt) {
                            var _r364_t0, _r364_t1;
                            return 0;
                        },
                        'ry': function (r365_rt) {
                            var _r365_t0, _r365_t1;
                            return 1 / 24 + r365_rt + (1 / 2 - r365_rt) * (3 / 8);
                        },
                        'deltaY': function (r366_rt) {
                            var _r366_t0, _r366_t1;
                            return -0.25 * r1_mix(r355_fine, r271_markStroke, r366_rt);
                        },
                        'modifier': function (r367_rt) {
                            var _r367_t0, _r367_t1;
                            return r271_widths.rhs(r1_mix(r355_fine, r271_markStroke, Math.pow(r367_rt, 2)));
                        }
                    }), r271_g4.down.mid(r271_RightSB - r355_extL, -0.75 * r355_depth, r271_widths.rhs.heading(r271_markStroke, {
                        'x': r271_HVContrast,
                        'y': r355_turnSlope
                    })), r271_arcvh(r271_widths.rhs(r271_markStroke)), r271_g4(r271_RightSB + r1_mix(-r355_extL, r355_extR, 11 / 16), -r355_depth + r271_O, r271_heading(r271_Rightward)), r271_g4(r271_RightSB + r355_extR, -r355_depth + 0.5 * r271_O, r271_heading(r271_Rightward)))));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eWithNotch.' + r271_suffix, null, function () {
                    var _r370_t1;
                    var _r370_t0 = this;
                    var r370_currentGlyph = _r370_t0;
                    r370_currentGlyph.include(r271_MarkSet.e());
                    var r370_lastKnot = r370_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    var r370_sw = r271_AdviceStroke(4);
                    var r370_ry = Math.min(r370_lastKnot.y - r370_sw, r271_XH * 0.08);
                    var r370_rx = Math.min(r370_ry);
                    r370_currentGlyph.include(r271_dispiro(r271_g4.down.start(r370_lastKnot.x, r370_lastKnot.y, r271_widths.rhs(r370_sw)), r271_arcvh(), r271_g4(r370_lastKnot.x + r370_rx, r370_lastKnot.y - r370_ry + r271_O), r271_archv(), r271_g4.up.end(r370_lastKnot.x + r370_rx * 2, r370_lastKnot.y)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eRetroflexHook.' + r271_suffix, null, function () {
                    var _r376_t1;
                    var _r376_t0 = this;
                    var r376_currentGlyph = _r376_t0;
                    r376_currentGlyph.include(r271_MarkSet.e());
                    var r376_lastKnot = r376_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    r376_currentGlyph.include(r271_RetroflexHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r376_lastKnot.x), new r271_xn$NamedParameterPair$2Lrc9b('y', 0), new r271_xn$NamedParameterPair$2Lrc9b('yAttach', r376_lastKnot.y)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eRev.' + r271_suffix, null, function () {
                    var _r385_t1;
                    var _r385_t0 = this;
                    var r385_currentGlyph = _r385_t0;
                    r385_currentGlyph.include(r271_MarkSet.e());
                    r385_currentGlyph.include(r271_RevBody(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH)));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('eBar.' + r271_suffix, null, function () {
                    var _r390_t1;
                    var _r390_t0 = this;
                    var r390_currentGlyph = _r390_t0;
                    r390_currentGlyph.include(r271_xn$referglyph$1aao('e.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r390_currentGlyph.include(r271_HBar.m(r1_mix(r271_SB, 0, 0.7), r1_mix(r271_RightSB, r271_Width, 0.7), r271_XH * 0.25 + r271_Stroke * 0.25, Math.min(r271_AdviceStroke(5), 0.25 * (r271_XH - 3 * r271_Stroke))));
                    return void 0;
                });
                r271_DefineSelectorGlyph('Schwa', r271_suffix, r271_MarkSet.capital());
                r271_DefineSelectorGlyph('schwa', r271_suffix, r271_MarkSet.e());
                var r347_abkCheDf = r271_DivFrame(r271_para.diversityM, 3);
                r271_DefineSelectorGlyph('cyrl/abk/Che', r271_suffix, r347_abkCheDf.markSet.capital());
                r271_DefineSelectorGlyph('cyrl/abk/che', r271_suffix, r347_abkCheDf.markSet.e());
                r271_DefineSelectorGlyph('cyrl/abk/CheDescender', r271_suffix, r347_abkCheDf.markSet.capDesc());
                r271_DefineSelectorGlyph('cyrl/abk/cheDescender', r271_suffix, r347_abkCheDf.markSet.p());
                var _r347_t0 = Object.entries(r271_CConfig)[Symbol.iterator]();
                var _r347_t1 = void 0;
                while (!(_r347_t1 = _r347_t0.next()).done) {
                    _r347_t2 = _r347_t1.value;
                    r347_suffixSerif = _r347_t2[0];
                    r347_styTop = _r347_t2[1][0];
                    r347_styBot = _r347_t2[1][1];
                    _r347_t2[1];
                    (function () {
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('Schwa.' + r271_suffix + '.' + r347_suffixSerif, null, function () {
                            var _r398_t1;
                            var _r398_t0 = this;
                            var r398_currentGlyph = _r398_t0;
                            r398_currentGlyph.setWidth(0);
                            r398_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                            r398_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_CAP, r271_AdviceStroke2(2, 3, r271_CAP), new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r347_styTop)));
                            r398_currentGlyph.include(r271_FlipAround(r271_Middle, r271_CAP / 2));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('schwa.' + r271_suffix + '.' + r347_suffixSerif, null, function () {
                            var _r406_t1;
                            var _r406_t0 = this;
                            var r406_currentGlyph = _r406_t0;
                            r406_currentGlyph.setWidth(0);
                            r406_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                            r406_currentGlyph.include(r271_Body(r271_DivFrame(1), r271_XH, r271_AdviceStroke2(2, 3, r271_XH), new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r347_styTop)));
                            r406_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/Che.' + r271_suffix + '.' + r347_suffixSerif, null, function () {
                            var _r414_t1;
                            var _r414_t0 = this;
                            var r414_currentGlyph = _r414_t0;
                            r414_currentGlyph.setWidth(0);
                            r414_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                            r414_currentGlyph.include(r271_AbkCheShape(0, r271_Body, r347_abkCheDf, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r347_styBot)));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/che.' + r271_suffix + '.' + r347_suffixSerif, null, function () {
                            var _r421_t1;
                            var _r421_t0 = this;
                            var r421_currentGlyph = _r421_t0;
                            r421_currentGlyph.setWidth(0);
                            r421_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                            r421_currentGlyph.include(r271_AbkCheShape(0, r271_Body, r347_abkCheDf, r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r347_styBot)));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/CheDescender.' + r271_suffix + '.' + r347_suffixSerif, null, function () {
                            var _r428_t1;
                            var _r428_t0 = this;
                            var r428_currentGlyph = _r428_t0;
                            r428_currentGlyph.setWidth(0);
                            r428_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                            r428_currentGlyph.include(r271_AbkCheShape(1, r271_Body, r347_abkCheDf, r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r347_styBot)));
                            return void 0;
                        });
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/abk/cheDescender.' + r271_suffix + '.' + r347_suffixSerif, null, function () {
                            var _r435_t1;
                            var _r435_t0 = this;
                            var r435_currentGlyph = _r435_t0;
                            r435_currentGlyph.setWidth(0);
                            r435_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                            r435_currentGlyph.include(r271_AbkCheShape(1, r271_Body, r347_abkCheDf, r271_XH, new r271_xn$NamedParameterPair$2Lrc9b('tailSlab', r347_styBot)));
                            return void 0;
                        });
                    }());
                }
                r271_xn$selectvariant$7Hrq('Schwa.' + r271_suffix, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'CTopSerifOnly'));
                r271_xn$selectvariant$7Hrq('schwa.' + r271_suffix, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cTopSerifOnly'));
                r271_xn$selectvariant$7Hrq('cyrl/abk/Che.' + r271_suffix, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'CBottomSerifOnly'));
                r271_xn$selectvariant$7Hrq('cyrl/abk/che.' + r271_suffix, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cBottomSerifOnly'));
                r271_xn$selectvariant$7Hrq('cyrl/abk/CheDescender.' + r271_suffix, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'CBottomSerifOnly'));
                return r271_xn$selectvariant$7Hrq('cyrl/abk/cheDescender.' + r271_suffix, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cBottomSerifOnly'));
            }());
        }
        r271_xn$selectvariant$7Hrq('e', 'e');
        r271_alias('cyrl/ie', 1077, 'e');
        r271_turned('turne', 477, 'e', r271_Middle, r271_XH / 2);
        r271_xn$selectvariant$7Hrq('eOgonek', 281, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('eRetroflexHook', 7570, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('eWithNotch', 11384, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('eRev', 600, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_xn$selectvariant$7Hrq('eBar', 43827, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_CreateSelectorVariants('Schwa', 399, Object.keys(r271_SmallEConfig));
        r271_alias('cyrl/Schwa', 1240, 'Schwa');
        r271_CreateSelectorVariants('schwa', 601, Object.keys(r271_SmallEConfig));
        r271_alias('cyrl/schwa', 1241, 'schwa');
        r271_CreateSelectorVariants('cyrl/abk/Che', 1212, Object.keys(r271_SmallEConfig), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_CreateSelectorVariants('cyrl/abk/che', 1213, Object.keys(r271_SmallEConfig), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_CreateSelectorVariants('cyrl/abk/CheDescender', 1214, Object.keys(r271_SmallEConfig), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r271_CreateSelectorVariants('cyrl/abk/cheDescender', 1215, Object.keys(r271_SmallEConfig), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        var _r271_t16 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t16.BBS;
        var r271_BBD = _r271_t16.BBD;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/e', 120150, function () {
            var _r458_t1;
            var _r458_t0 = this;
            var r458_currentGlyph = _r458_t0;
            r458_currentGlyph.include(r271_MarkSet.e());
            r458_currentGlyph.include(r271_SmallEShape(r271_DivFrame(1), r271_XH, r271_BBS, new r271_xn$NamedParameterPair$2Lrc9b('bbd', r271_BBD)));
            r458_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB, r271_BBS), r271_union(r271_VBar.l(r271_SB + r271_BBD + r271_OX, 0, r271_XH, r271_BBS), r271_VBar.r(r271_RightSB - r271_BBD - r271_OX, r271_XH * r271_DesignParameters.eBarPos, r271_XH, r271_BBS))));
            return void 0;
        });
    });
    return void 0;
});
