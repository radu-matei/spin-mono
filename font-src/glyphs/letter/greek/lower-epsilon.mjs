'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var r1_isFinite = isFinite;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Greek-Lower-Epsilon', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_slabTop, r271_slabBot, _r271_t15, _r271_t16, _r271_t17, _r271_t18, _r271_tag19, _r271_t20, _r271_tag21, _r271_t22, _r271_tag23, _r271_t24, _r271_tag25;
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
        var r271_Descender = _r271_t1.Descender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_SHook = _r271_t1.SHook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_OverlayPos = _r271_t1.OverlayPos;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_archv = _r271_t2.archv;
        var r271_arcvh = _r271_t2.arcvh;
        var r271_dispiro = _r271_t2.dispiro;
        var r271_xn$spirooutline$1aao = _r271_t2['spiro-outline'];
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_Rect = _r271_t4.Rect;
        var r271_VBar = _r271_t4.VBar;
        var r271_hookstart = _r271_t4.hookstart;
        var r271_hookend = _r271_t4.hookend;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_alias = _r271_t5.alias;
        var r271_turned = _r271_t5.turned;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_ExtendBelowBaseAnchors = _r271_t6.ExtendBelowBaseAnchors;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_SerifedArcStart = _r271_t8.SerifedArcStart;
        var r271_SerifedArcEnd = _r271_t8.SerifedArcEnd;
        var r271_SerifFrame = _r271_t8.SerifFrame;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_InwardSlabArcStart = _r271_t9.InwardSlabArcStart;
        var r271_InwardSlabArcEnd = _r271_t9.InwardSlabArcEnd;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_ArcStartSerif = _r271_t10.ArcStartSerif;
        var r271_ArcEndSerif = _r271_t10.ArcEndSerif;
        var _r271_t11 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t11.OBarLeft;
        var r271_OBarRight = _r271_t11.OBarRight;
        var _r271_t12 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_DToothlessRise = _r271_t12.DToothlessRise;
        var r271_RetroflexHook = _r271_t12.RetroflexHook;
        var r271_CyrDescender = _r271_t12.CyrDescender;
        var r271_UpwardHookShape = _r271_t12.UpwardHookShape;
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABCLASSICAL$5sIl = 1;
        var r271_xn$SLABINWARD$5sIl = 2;
        var r271_xn$FLATCONNECTION$5sIl = 3;
        var r271_xn$OPENHALF$5sIl = 4;
        var r271_xn$OPENVERTICAL$5sIl = 5;
        var r271_xn$CLOSEDCIRCLE$7Hrq = 6;
        var r271_xn$CLOSEDROUND$7Hrq = 7;
        var r271_xn$CLOSEDSTEM$7Hrq = 8;
        var r271_StdBlend = 0.65;
        var r271_VolBlend = 0.52;
        var r271_SmallEpsilon = function () {
            var _r281_t6, _r281_t8, _r281_tag9;
            var _r281_t7 = arguments;
            var _r281_t0 = [].slice.call(_r281_t7, 0);
            var _r281_t1 = [];
            var _r281_t2 = 0;
            while (_r281_t2 < _r281_t0.length) {
                if (!(_r281_t0[_r281_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r281_t1.push(_r281_t0[_r281_t2]);
                _r281_t2 = _r281_t2 + 1;
            }
            var _r281_t3 = _r281_t0;
            var _r281_t4 = _r281_t3.length;
            var _r281_t5 = 0;
            while (_r281_t5 < _r281_t4) {
                _r281_t2 = _r281_t3[_r281_t5];
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'slabTop')
                    r281_slabTop = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'slabBot')
                    r281_slabBot = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'top')
                    r281_top = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'bot')
                    r281_bot = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'blend')
                    r281_blend = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'hook')
                    r281_hook = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'ada2')
                    r281_ada2 = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'adb2')
                    r281_adb2 = _r281_t2.right;
                _r281_t5 = _r281_t5 + 1;
            }
            var r281_slabTop = r1_fallback(r281_slabTop, _r281_t1[0]);
            var r281_slabBot = r1_fallback(r281_slabBot, _r281_t1[1]);
            var r281_top = r1_fallback(r281_top, _r281_t1[2]);
            var r281_bot = r1_fallback(r281_bot, _r281_t1[3]);
            var r281_blend = r1_fallback(r281_blend, _r281_t1[4]);
            var r281_hook = r1_fallback(r281_hook, _r281_t1[5]);
            var r281_ada2 = r1_fallback(r281_ada2, _r281_t1[6], r271_SmallArchDepthA);
            var r281_adb2 = r1_fallback(r281_adb2, _r281_t1[7], r271_SmallArchDepthB);
            return function () {
                var r288_Dim, r288_UpperShape, r288_LowerShape, r288_Shape, r288_AutoStartSerifR, r288_AutoEndSerifR;
                var r288_exports = {};
                r288_exports.Dim = r288_Dim = function () {
                    var _r296_t0, _r296_t1;
                    var r296_stroke = r271_AdviceStroke2(2, 3, r281_top - r281_bot);
                    var r296_midx = r1_mix(r271_SB, r271_RightSB, r281_blend);
                    var r296_midy = r1_mix(r281_bot, r281_top, r271_OverlayPos);
                    var r296_topHeight = r281_top - r281_bot;
                    var r296_midyHeight = r296_midy - r281_bot;
                    var r296_ada = r296_topHeight - r1_mix(r296_midyHeight + r296_stroke / 2, r296_topHeight - r271_O - r296_stroke, r271_ArchDepthB / (r271_ArchDepthA + r271_ArchDepthB)) - r271_HSwToV(r271_TanSlope) * r296_stroke;
                    var r296_adb = r1_mix(r296_stroke + r271_O, r296_midyHeight - r296_stroke / 2, r271_ArchDepthB / (r271_ArchDepthA + r271_ArchDepthB)) + r271_HSwToV(r271_TanSlope) * r296_stroke;
                    var r296_fine = r296_stroke * r271_CThin;
                    var r296_stemFine = r296_stroke * (r271_ShoulderFine / r271_Stroke);
                    return {
                        'stroke': r296_stroke,
                        'midx': r296_midx,
                        'midy': r296_midy,
                        'ada': r296_ada,
                        'adb': r296_adb,
                        'fine': r296_fine,
                        'stemFine': r296_stemFine
                    };
                };
                r288_exports.UpperShape = r288_UpperShape = function () {
                    var r298___, _r298_t1, _r298_t2, _r298_t3;
                    var _r298_t0 = r288_Dim();
                    var r298_stroke = _r298_t0.stroke;
                    var r298_midx = _r298_t0.midx;
                    var r298_midy = _r298_t0.midy;
                    var r298_ada = _r298_t0.ada;
                    var r298_adb = _r298_t0.adb;
                    var r298_fine = _r298_t0.fine;
                    var r298_stemFine = _r298_t0.stemFine;
                    return r271_dispiro((_r298_t1 = r281_slabTop, _r298_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.RtlLhs(r271_RightSB, r271_Middle, r281_top, r298_stroke, r281_hook) : _r298_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcStart.RtlLhs(r271_RightSB, r271_Middle, r281_top, r298_stroke, r281_hook) : _r298_t1 === r271_xn$OPENVERTICAL$5sIl ? r271_straight.down.start(r271_SB, r281_top, r271_widths.lhs.heading(r298_stroke, r271_Downward)) : _r298_t1 === r271_xn$CLOSEDCIRCLE$7Hrq || _r298_t1 === r271_xn$CLOSEDROUND$7Hrq ? [
                        r271_flat(r271_RightSB - (r281_slabTop === r271_xn$CLOSEDCIRCLE$7Hrq ? r271_OX : 0), r298_midy, r271_widths.lhs(r298_stroke)),
                        r271_curl(r271_RightSB - (r281_slabTop === r271_xn$CLOSEDCIRCLE$7Hrq ? r271_OX : 0), r281_top - r281_adb2),
                        r271_arcvh(),
                        r271_g4(r271_Middle - r271_CorrectionOMidX * r298_stroke, r281_top - r271_O),
                        r271_archv()
                    ] : _r298_t1 === r271_xn$CLOSEDSTEM$7Hrq ? r271_OBarRight.arcStart(r281_top, r271_SB, r271_RightSB, r298_stroke, r298_stemFine, r281_ada2, r281_adb2, r298_midy) : (r298___ = _r298_t1, [
                        r271_g4(r271_RightSB + r271_O, r281_top - r281_hook, r271_widths.lhs()),
                        r271_hookstart(r281_top - r271_O)
                    ])), r271_g4(r271_SB, r271_YSmoothMidL(r281_top, r298_midy - r298_stroke / 2)), r271_arcvh(), r271_flat(r271_Middle, r298_midy - (r298_fine - r298_stroke / 2), r271_widths.heading(r298_fine, 0, r271_Rightward)), r271_curl(r298_midx, r298_midy - (r298_fine - r298_stroke / 2), r271_heading(r271_Rightward)));
                };
                r288_exports.LowerShape = r288_LowerShape = function () {
                    var r300___, _r300_t1, _r300_t2, _r300_t3;
                    var _r300_t0 = r288_Dim();
                    var r300_stroke = _r300_t0.stroke;
                    var r300_midx = _r300_t0.midx;
                    var r300_midy = _r300_t0.midy;
                    var r300_ada = _r300_t0.ada;
                    var r300_adb = _r300_t0.adb;
                    var r300_fine = _r300_t0.fine;
                    var r300_stemFine = _r300_t0.stemFine;
                    return r271_dispiro(r271_flat(r300_midx, r300_midy + (r300_fine - r300_stroke / 2), r271_widths.heading(r300_fine, 0, r271_Leftward)), r271_curl(r271_Middle, r300_midy + (r300_fine - r300_stroke / 2), r271_heading(r271_Leftward)), r271_archv(), r271_g4(r271_SB + r271_OX * 2, r271_YSmoothMidL(r300_midy + r300_stroke / 2, r281_bot), r271_widths.lhs(r300_stroke)), (_r300_t1 = r281_slabBot, _r300_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.LtrLhs(r271_RightSB, r271_Middle, r281_bot, r300_stroke, r281_hook) : _r300_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcEnd.LtrLhs(r271_RightSB, r271_Middle, r281_bot, r300_stroke, r281_hook) : _r300_t1 === r271_xn$OPENVERTICAL$5sIl ? r271_straight.down.end(r271_SB + r271_OX * 2, r281_bot, r271_heading(r271_Downward)) : _r300_t1 === r271_xn$CLOSEDCIRCLE$7Hrq || _r300_t1 === r271_xn$CLOSEDROUND$7Hrq ? [
                        r271_arcvh(),
                        r271_g4(r271_Middle + r271_CorrectionOMidX * r300_stroke, r281_bot + r271_O),
                        r271_archv(),
                        r271_flat(r271_RightSB - (r281_slabBot === r271_xn$CLOSEDCIRCLE$7Hrq ? r271_OX : 0), r281_bot + r281_adb2),
                        r271_curl(r271_RightSB - (r281_slabBot === r271_xn$CLOSEDCIRCLE$7Hrq ? r271_OX : 0), r300_midy)
                    ] : _r300_t1 === r271_xn$CLOSEDSTEM$7Hrq ? r271_OBarRight.arcEnd(r281_bot, r271_SB, r271_RightSB, r300_stroke, r300_stemFine, r281_ada2, r281_adb2, r300_midy) : (r300___ = _r300_t1, [
                        r271_hookend(r281_bot + r271_O),
                        r271_g4(r271_RightSB - r271_O, r281_bot + r281_hook)
                    ])));
                };
                r288_exports.Shape = r288_Shape = function () {
                    var _r302_t0, _r302_t1;
                    return r271_union(r288_UpperShape(), r288_LowerShape());
                };
                r288_exports.AutoStartSerifR = r288_AutoStartSerifR = function () {
                    var r304___, _r304_t1, _r304_t2, _r304_t3;
                    var _r304_t0 = r288_Dim();
                    var r304_stroke = _r304_t0.stroke;
                    return _r304_t1 = r281_slabTop, _r304_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.R(r271_RightSB, r281_top, r304_stroke, r281_hook) : _r304_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardR(r271_RightSB, r281_top, r304_stroke, r281_hook) : (r304___ = _r304_t1, function () {
                        var _r306_t1;
                        var _r306_t0 = this;
                        var r306_currentGlyph = _r306_t0;
                        return void 0;
                    });
                };
                r288_exports.AutoEndSerifR = r288_AutoEndSerifR = function () {
                    var r308___, _r308_t1, _r308_t2, _r308_t3;
                    var _r308_t0 = r288_Dim();
                    var r308_stroke = _r308_t0.stroke;
                    return _r308_t1 = r281_slabBot, _r308_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.R(r271_RightSB, r281_bot, r308_stroke, r281_hook) : _r308_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardR(r271_RightSB, r281_bot, r308_stroke, r281_hook) : (r308___ = _r308_t1, function () {
                        var _r310_t1;
                        var _r310_t0 = this;
                        var r310_currentGlyph = _r310_t0;
                        return void 0;
                    });
                };
                return r288_exports;
            }();
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r312_t0, _r312_t1;
            return { 'CyrZe': r271_CyrZe };
        });
        var r271_CyrZe = function () {
            var _r313_t6, _r313_t8, _r313_tag9;
            var _r313_t7 = arguments;
            var _r313_t0 = [].slice.call(_r313_t7, 0);
            var _r313_t1 = [];
            var _r313_t2 = 0;
            while (_r313_t2 < _r313_t0.length) {
                if (!(_r313_t0[_r313_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r313_t1.push(_r313_t0[_r313_t2]);
                _r313_t2 = _r313_t2 + 1;
            }
            var _r313_t3 = _r313_t0;
            var _r313_t4 = _r313_t3.length;
            var _r313_t5 = 0;
            while (_r313_t5 < _r313_t4) {
                _r313_t2 = _r313_t3[_r313_t5];
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'slabTop')
                    r313_slabTop = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'slabBot')
                    r313_slabBot = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'top')
                    r313_top = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'bot')
                    r313_bot = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'left')
                    r313_left = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'right')
                    r313_right = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'blend')
                    r313_blend = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'hook')
                    r313_hook = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === '_stroke')
                    r313__stroke = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'xo')
                    r313_xo = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'op')
                    r313_op = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'ada2')
                    r313_ada2 = _r313_t2.right;
                if (_r313_t2 && _r313_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r313_t2.left === 'adb2')
                    r313_adb2 = _r313_t2.right;
                _r313_t5 = _r313_t5 + 1;
            }
            var r313_slabTop = r1_fallback(r313_slabTop, _r313_t1[0]);
            var r313_slabBot = r1_fallback(r313_slabBot, _r313_t1[1]);
            var r313_top = r1_fallback(r313_top, _r313_t1[2]);
            var r313_bot = r1_fallback(r313_bot, _r313_t1[3]);
            var r313_left = r1_fallback(r313_left, _r313_t1[4]);
            var r313_right = r1_fallback(r313_right, _r313_t1[5]);
            var r313_blend = r1_fallback(r313_blend, _r313_t1[6]);
            var r313_hook = r1_fallback(r313_hook, _r313_t1[7]);
            var r313__stroke = r1_fallback(r313__stroke, _r313_t1[8]);
            var r313_xo = r1_fallback(r313_xo, _r313_t1[9], r271_OX);
            var r313_op = r1_fallback(r313_op, _r313_t1[10], r271_OverlayPos);
            var r313_ada2 = r1_fallback(r313_ada2, _r313_t1[11], r271_SmallArchDepthA);
            var r313_adb2 = r1_fallback(r313_adb2, _r313_t1[12], r271_SmallArchDepthB);
            return function () {
                var r320_Dim, r320_UpperShape, r320_LowerShape, r320_Shape, r320_ShapeMask, r320_KsiBaseShape, r320_AutoStartSerifL, r320_AutoEndSerifL;
                var r320_exports = {};
                r320_exports.Dim = r320_Dim = function () {
                    var _r328_t0, _r328_t1;
                    var r328_stroke = r1_fallback(r313__stroke, r271_AdviceStroke2(2, 3, r313_top - r313_bot));
                    var r328_midx = r1_mix(r313_right, r313_left, r313_blend);
                    var r328_midy = r1_mix(r313_bot, r313_top, r313_op);
                    var r328_topHeight = r313_top - r313_bot;
                    var r328_midyHeight = r328_midy - r313_bot;
                    var r328_adb = r328_topHeight - r1_mix(r328_midyHeight + r328_stroke / 2, r328_topHeight - r271_O - r328_stroke, r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB)) + r271_HSwToV(r271_TanSlope) * r328_stroke;
                    var r328_ada = r1_mix(r328_stroke + r271_O, r328_midyHeight - r328_stroke / 2, r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB)) - r271_HSwToV(r271_TanSlope) * r328_stroke;
                    var r328_fine = r328_stroke * r271_CThin;
                    var r328_stemFine = r328_stroke * (r271_ShoulderFine / r271_Stroke);
                    return {
                        'stroke': r328_stroke,
                        'midx': r328_midx,
                        'midy': r328_midy,
                        'ada': r328_ada,
                        'adb': r328_adb,
                        'fine': r328_fine,
                        'stemFine': r328_stemFine
                    };
                };
                var r320_UpperShapeT = function (r329_sink) {
                    var r329___, _r329_t1, _r329_t2, _r329_t3;
                    var _r329_t0 = r320_Dim();
                    var r329_stroke = _r329_t0.stroke;
                    var r329_midx = _r329_t0.midx;
                    var r329_midy = _r329_t0.midy;
                    var r329_ada = _r329_t0.ada;
                    var r329_adb = _r329_t0.adb;
                    var r329_fine = _r329_t0.fine;
                    var r329_stemFine = _r329_t0.stemFine;
                    var r329_middle = (r313_left + r313_right) / 2;
                    return r329_sink((_r329_t1 = r313_slabTop, _r329_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcStart.LtrRhs(r313_left, r329_middle, r313_top, r329_stroke, r313_hook) : _r329_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcStart.LtrRhs(r313_left, r329_middle, r313_top, r329_stroke, r313_hook) : _r329_t1 === r271_xn$FLATCONNECTION$5sIl ? [
                        r271_flat(r313_left - r313_xo, r313_top, r271_widths.rhs.heading(r329_stroke, r271_Rightward)),
                        r271_curl(r329_middle - r271_CorrectionOMidX * r329_stroke, r313_top, r271_heading(r271_Rightward))
                    ] : _r329_t1 === r271_xn$OPENVERTICAL$5sIl ? r271_straight.down.start(r313_right, r313_top, r271_widths.rhs.heading(r329_stroke, r271_Downward)) : _r329_t1 === r271_xn$CLOSEDCIRCLE$7Hrq || _r329_t1 === r271_xn$CLOSEDROUND$7Hrq ? [
                        r271_flat(r313_left + (r313_slabTop === r271_xn$CLOSEDCIRCLE$7Hrq ? r313_xo : 0), r329_midy, r271_widths.rhs(r329_stroke)),
                        r271_curl(r313_left + (r313_slabTop === r271_xn$CLOSEDCIRCLE$7Hrq ? r313_xo : 0), r313_top - r313_ada2),
                        r271_arcvh(),
                        r271_g4(r329_middle - r271_CorrectionOMidX * r329_stroke, r313_top - r271_O),
                        r271_archv()
                    ] : _r329_t1 === r271_xn$CLOSEDSTEM$7Hrq ? r271_OBarLeft.arcStart(r313_top, r313_left, r313_right, r329_stroke, r329_stemFine, r313_ada2, r313_adb2, r329_midy) : (r329___ = _r329_t1, [
                        r271_g4(r313_left - r313_xo, r313_top - r313_hook, r271_widths.rhs(r329_stroke)),
                        r271_hookstart(r313_top - r271_O)
                    ])), r271_g4(r313_right, r271_YSmoothMidR(r313_top, r329_midy - r329_stroke / 2)), r271_arcvh(), r271_flat(r329_middle, r329_midy - (r329_fine - r329_stroke / 2), r271_widths.heading(0, r329_fine, r271_Leftward)), r271_curl(r329_midx, r329_midy - (r329_fine - r329_stroke / 2), r271_heading(r271_Leftward)));
                };
                var r320_LowerShapeT = function (r330_sink) {
                    var r330___, _r330_t1, _r330_t2, _r330_t3;
                    var _r330_t0 = r320_Dim();
                    var r330_stroke = _r330_t0.stroke;
                    var r330_midx = _r330_t0.midx;
                    var r330_midy = _r330_t0.midy;
                    var r330_ada = _r330_t0.ada;
                    var r330_adb = _r330_t0.adb;
                    var r330_fine = _r330_t0.fine;
                    var r330_stemFine = _r330_t0.stemFine;
                    var r330_middle = (r313_left + r313_right) / 2;
                    return r330_sink(r271_flat(r330_midx, r330_midy + (r330_fine - r330_stroke / 2), r271_widths.heading(0, r330_fine, r271_Rightward)), r271_curl(r330_middle, r330_midy + (r330_fine - r330_stroke / 2), r271_heading(r271_Rightward)), r271_archv(), r313_slabBot === r271_xn$OPENHALF$5sIl ? r271_g4.down.end(r313_right - r313_xo * 2, r271_YSmoothMidR(r330_midy + r330_stroke / 2, r313_bot), r271_widths.rhs.heading(r330_stroke, r271_Downward)) : r271_g4(r313_right - r313_xo * 2, r271_YSmoothMidR(r330_midy + r330_stroke / 2, r313_bot), r271_widths.rhs(r330_stroke)), (_r330_t1 = r313_slabBot, _r330_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_SerifedArcEnd.RtlRhs(r313_left, r330_middle, r313_bot, r330_stroke, r313_hook) : _r330_t1 === r271_xn$SLABINWARD$5sIl ? r271_InwardSlabArcEnd.RtlRhs(r313_left, r330_middle, r313_bot, r330_stroke, r313_hook) : _r330_t1 === r271_xn$OPENHALF$5sIl ? [] : _r330_t1 === r271_xn$OPENVERTICAL$5sIl ? r271_straight.down.end(r313_right - r313_xo * 2, r313_bot, r271_heading(r271_Downward)) : _r330_t1 === r271_xn$CLOSEDCIRCLE$7Hrq || _r330_t1 === r271_xn$CLOSEDROUND$7Hrq ? [
                        r271_arcvh(),
                        r271_g4(r330_middle + r271_CorrectionOMidX * r330_stroke, r313_bot + r271_O),
                        r271_archv(),
                        r271_flat(r313_left + (r313_slabBot === r271_xn$CLOSEDCIRCLE$7Hrq ? r313_xo : 0), r313_bot + r313_adb2),
                        r271_curl(r313_left + (r313_slabBot === r271_xn$CLOSEDCIRCLE$7Hrq ? r313_xo : 0), r330_midy)
                    ] : _r330_t1 === r271_xn$CLOSEDSTEM$7Hrq ? r271_OBarLeft.arcEnd(r313_bot, r313_left, r313_right, r330_stroke, r330_stemFine, r313_ada2, r313_adb2, r330_midy) : (r330___ = _r330_t1, [
                        r271_hookend(r313_bot + r271_O, new r271_xn$NamedParameterPair$2Lrc9b('sw', r330_stroke)),
                        r271_g4(r313_left + r313_xo, r313_bot + r313_hook)
                    ])));
                };
                r320_exports.UpperShape = r320_UpperShape = function () {
                    var _r333_t0, _r333_t1;
                    return r320_UpperShapeT(r271_dispiro);
                };
                r320_exports.LowerShape = r320_LowerShape = function () {
                    var _r335_t0, _r335_t1;
                    return r320_LowerShapeT(r271_dispiro);
                };
                var r320_LowerShapeTailed = function () {
                    var _r336_t1, _r336_t2;
                    var _r336_t0 = r320_Dim();
                    var r336_stroke = _r336_t0.stroke;
                    var r336_midx = _r336_t0.midx;
                    var r336_midy = _r336_t0.midy;
                    var r336_ada = _r336_t0.ada;
                    var r336_adb = _r336_t0.adb;
                    var r336_fine = _r336_t0.fine;
                    var r336_middle = (r313_left + r313_right) / 2;
                    return r271_dispiro(r271_flat(r271_TanSlope * r271_Stroke + Math.max(r313_left + (r271_Stroke - r1_mix(r271_Descender, r271_Stroke, 0.5)) * 1.1 + 1, r336_middle), r271_Descender, r271_widths.rhs()), r271_curl(r271_TanSlope * r271_Stroke + r313_left + (r271_Stroke - r1_mix(r271_Descender, r271_Stroke, 0.5)) * 1.1, r271_Descender), r271_archv(), r271_g4.up.mid(r313_left + r271_HSwToV(r271_HalfStroke), r1_mix(r271_Descender, r271_Stroke, 0.5), r271_widths.center.heading(r271_Stroke, r271_Upward)), r271_arcvh(), r271_g4(r336_middle + r271_CorrectionOMidS, 0, r271_widths.lhs()), r271_archv(), r271_g4(r313_right - r271_OX * 2, r313_bot + r336_ada), r271_arcvh(), r271_flat(r336_middle, r336_midy + (r336_fine - r336_stroke / 2), r271_widths.heading(r336_fine, 0, r271_Leftward)), r271_curl(r336_midx, r336_midy + (r336_fine - r336_stroke / 2), r271_heading(r271_Leftward)));
                };
                r320_exports.Shape = r320_Shape = function () {
                    var _r338_t0, _r338_t1;
                    return r271_union(r320_UpperShapeT(r271_dispiro), r320_LowerShapeT(r271_dispiro));
                };
                r320_exports.ShapeMask = r320_ShapeMask = function () {
                    var _r340_t0, _r340_t1;
                    return r271_union(r320_UpperShapeT(r271_xn$spirooutline$1aao), r320_LowerShapeT(r271_xn$spirooutline$1aao));
                };
                r320_exports.KsiBaseShape = r320_KsiBaseShape = function () {
                    var _r342_t0, _r342_t1;
                    return r271_union(r320_UpperShapeT(r271_dispiro), r320_LowerShapeTailed());
                };
                r320_exports.AutoStartSerifL = r320_AutoStartSerifL = function () {
                    var r344___, _r344_t1, _r344_t2, _r344_t3;
                    var _r344_t0 = r320_Dim();
                    var r344_stroke = _r344_t0.stroke;
                    return _r344_t1 = r313_slabTop, _r344_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcStartSerif.L(r313_left, r313_top, r344_stroke, r313_hook) : _r344_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcStartSerif.InwardL(r313_left, r313_top, r344_stroke, r313_hook) : (r344___ = _r344_t1, function () {
                        var _r346_t1;
                        var _r346_t0 = this;
                        var r346_currentGlyph = _r346_t0;
                        return void 0;
                    });
                };
                r320_exports.AutoEndSerifL = r320_AutoEndSerifL = function () {
                    var r348___, _r348_t1, _r348_t2, _r348_t3;
                    var _r348_t0 = r320_Dim();
                    var r348_stroke = _r348_t0.stroke;
                    return _r348_t1 = r313_slabBot, _r348_t1 === r271_xn$SLABCLASSICAL$5sIl ? r271_ArcEndSerif.L(r313_left, r313_bot, r348_stroke, r313_hook) : _r348_t1 === r271_xn$SLABINWARD$5sIl ? r271_ArcEndSerif.InwardL(r313_left, r313_bot, r348_stroke, r313_hook) : (r348___ = _r348_t1, function () {
                        var _r350_t1;
                        var _r350_t0 = this;
                        var r350_currentGlyph = _r350_t0;
                        return void 0;
                    });
                };
                return r320_exports;
            }();
        };
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r352_t0, _r352_t1;
            return { 'EpsilonConfig': r271_EpsilonConfig };
        });
        var r271_EpsilonConfig = {
            'serifless': [
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABNONE$5sIl
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
            'seriflessDesc': [
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ],
            'unilateralInwardSerifedDesc': [
                r271_xn$SLABINWARD$5sIl,
                r271_xn$SLABCLASSICAL$5sIl
            ]
        };
        var _r271_t13 = Object.entries(r271_EpsilonConfig)[Symbol.iterator]();
        var _r271_t14 = void 0;
        while (!(_r271_t14 = _r271_t13.next()).done) {
            _r271_t15 = _r271_t14.value;
            r271_suffix = _r271_t15[0];
            r271_slabTop = _r271_t15[1][0];
            r271_slabBot = _r271_t15[1][1];
            _r271_t15[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Epsilon.' + r271_suffix, null, function () {
                    var _r358_leti0, _r358_t2, _r358_t6, _r358_tag7;
                    var _r358_t1 = this;
                    var r358_currentGlyph = _r358_t1;
                    r358_currentGlyph.include(r271_MarkSet.capital());
                    var _r358_t3 = r358_currentGlyph;
                    var _r358_t4 = _r358_t3.include;
                    var _r358_t5 = r271_SmallEpsilon(r271_slabTop, r271_slabBot, r271_CAP, 0, r271_StdBlend, r271_Hook);
                    var _r358_t8 = function (_r358_leti0) {
                        var r361_eps = _r358_leti0;
                        return r271_union(r361_eps.Shape(), r361_eps.AutoStartSerifR(), r361_eps.AutoEndSerifR());
                    }(_r358_t5);
                    _r358_t4.call(_r358_t3, _r358_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/epsilon.' + r271_suffix, null, function () {
                    var _r364_leti0, _r364_t2, _r364_t6, _r364_tag7;
                    var _r364_t1 = this;
                    var r364_currentGlyph = _r364_t1;
                    r364_currentGlyph.include(r271_MarkSet.e());
                    var _r364_t3 = r364_currentGlyph;
                    var _r364_t4 = _r364_t3.include;
                    var _r364_t5 = r271_SmallEpsilon(r271_slabTop, r271_slabBot, r271_XH, 0, r271_StdBlend, r271_SHook);
                    var _r364_t8 = function (_r364_leti0) {
                        var r367_eps = _r364_leti0;
                        return r271_union(r367_eps.Shape(), r367_eps.AutoStartSerifR(), r367_eps.AutoEndSerifR());
                    }(_r364_t5);
                    _r364_t4.call(_r364_t3, _r364_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Ze.' + r271_suffix, null, function () {
                    var _r370_leti0, _r370_t2, _r370_t6, _r370_tag7;
                    var _r370_t1 = this;
                    var r370_currentGlyph = _r370_t1;
                    r370_currentGlyph.include(r271_MarkSet.capital());
                    var _r370_t3 = r370_currentGlyph;
                    var _r370_t4 = _r370_t3.include;
                    var _r370_t5 = r271_CyrZe(r271_slabTop, r271_slabBot, r271_CAP, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_Hook);
                    var _r370_t8 = function (_r370_leti0) {
                        var r373_ze = _r370_leti0;
                        return r271_union(r373_ze.Shape(), r373_ze.AutoStartSerifL(), r373_ze.AutoEndSerifL());
                    }(_r370_t5);
                    _r370_t4.call(_r370_t3, _r370_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ze.' + r271_suffix, null, function () {
                    var _r376_leti0, _r376_t2, _r376_t6, _r376_tag7;
                    var _r376_t1 = this;
                    var r376_currentGlyph = _r376_t1;
                    r376_currentGlyph.include(r271_MarkSet.e());
                    var _r376_t3 = r376_currentGlyph;
                    var _r376_t4 = _r376_t3.include;
                    var _r376_t5 = r271_CyrZe(r271_slabTop, r271_slabBot, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    var _r376_t8 = function (_r376_leti0) {
                        var r379_ze = _r376_leti0;
                        return r271_union(r379_ze.Shape(), r379_ze.AutoStartSerifL(), r379_ze.AutoEndSerifL());
                    }(_r376_t5);
                    _r376_t4.call(_r376_t3, _r376_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ze.BGR.' + r271_suffix, null, function () {
                    var _r382_leti0, _r382_t2, _r382_t6, _r382_tag7;
                    var _r382_t1 = this;
                    var r382_currentGlyph = _r382_t1;
                    r382_currentGlyph.include(r271_MarkSet.p());
                    var _r382_t3 = r382_currentGlyph;
                    var _r382_t4 = _r382_t3.include;
                    var _r382_t5 = r271_CyrZe(r271_slabTop, r271_slabBot, r271_XH, r271_Descender, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    var _r382_t8 = function (_r382_leti0) {
                        var r385_ze = _r382_leti0;
                        return r271_union(r385_ze.Shape(), r385_ze.AutoStartSerifL(), r385_ze.AutoEndSerifL());
                    }(_r382_t5);
                    _r382_t4.call(_r382_t3, _r382_t8);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/DzjeKomi.' + r271_suffix, null, function () {
                    var _r388_t1;
                    var _r388_t0 = this;
                    var r388_currentGlyph = _r388_t0;
                    r388_currentGlyph.include(r271_MarkSet.capital());
                    var r388_ze = r271_CyrZe(r271_slabTop, r271_xn$OPENVERTICAL$5sIl, r271_CAP, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_Hook);
                    r388_currentGlyph.include(r388_ze.Shape());
                    r388_currentGlyph.include(r388_ze.AutoStartSerifL());
                    r388_currentGlyph.include(r271_CyrDescender.rSideJut(r271_RightSB - r271_OX * 2, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzjeKomi.' + r271_suffix, null, function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.include(r271_MarkSet.e());
                    var r395_ze = r271_CyrZe(r271_slabTop, r271_xn$OPENVERTICAL$5sIl, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    r395_currentGlyph.include(r395_ze.Shape());
                    r395_currentGlyph.include(r395_ze.AutoStartSerifL());
                    r395_currentGlyph.include(r271_CyrDescender.rSideJut(r271_RightSB - r271_OX * 2, 0));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ZjeKomi.' + r271_suffix, null, function () {
                    var _r402_t2;
                    var _r402_t1 = this;
                    var r402_currentGlyph = _r402_t1;
                    var r402_df = r402_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r402_currentGlyph.include(r402_df.markSet.capital());
                    var r402_xm = r402_df.middle + r271_HSwToV(0.5 * r402_df.mvs);
                    var r402_ze = r271_CyrZe(r271_slabTop, r271_xn$OPENHALF$5sIl, r271_CAP, 0, r402_df.leftSB, r402_xm, r271_StdBlend, r271_Hook, r402_df.mvs);
                    var _r402_t0 = r402_ze.Dim();
                    var r402_stroke = _r402_t0.stroke;
                    var r402_midy = _r402_t0.midy;
                    r402_currentGlyph.include(r402_ze.Shape());
                    r402_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r402_xm - r271_OX * 2 - r271_HSwToV(r402_stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r402_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_YSmoothMidR(r402_midy + r402_stroke / 2, 0)), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_CAP / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_ArchDepthA * 0.6 * r402_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_ArchDepthB * 0.6 * r402_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r402_stroke)));
                    r402_currentGlyph.include(r402_ze.AutoStartSerifL());
                    var r402_sf2 = r271_SerifFrame.fromDf(r402_df, r271_CAP / 2, 0).slice(1, 2);
                    if (r271_SLAB)
                        r402_currentGlyph.include(r402_sf2.rt.full);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zjeKomi.' + r271_suffix, null, function () {
                    var _r418_t2;
                    var _r418_t1 = this;
                    var r418_currentGlyph = _r418_t1;
                    var r418_df = r418_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3));
                    r418_currentGlyph.include(r418_df.markSet.e());
                    var r418_xm = r418_df.middle + r271_HSwToV(0.5 * r418_df.mvs);
                    var r418_ze = r271_CyrZe(r271_slabTop, r271_xn$OPENHALF$5sIl, r271_XH, 0, r418_df.leftSB, r418_xm, r271_StdBlend, r271_SHook, r418_df.mvs);
                    var _r418_t0 = r418_ze.Dim();
                    var r418_stroke = _r418_t0.stroke;
                    var r418_midy = _r418_t0.midy;
                    r418_currentGlyph.include(r418_ze.Shape());
                    r418_currentGlyph.include(r271_UpwardHookShape(new r271_xn$NamedParameterPair$2Lrc9b('left', r418_xm - r271_OX * 2 - r271_HSwToV(r418_stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r418_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('ybegin', r271_YSmoothMidR(r418_midy + r418_stroke / 2, 0)), new r271_xn$NamedParameterPair$2Lrc9b('yend', r271_XH / 2), new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA * 0.6 * r418_df.div), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB * 0.6 * r418_df.div), new r271_xn$NamedParameterPair$2Lrc9b('sw', r418_stroke)));
                    r418_currentGlyph.include(r418_ze.AutoStartSerifL());
                    var r418_sf2 = r271_SerifFrame.fromDf(r418_df, r271_XH / 2, 0).slice(1, 2);
                    if (r271_SLAB)
                        r418_currentGlyph.include(r418_sf2.rt.full);
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/KsiBase.' + r271_suffix, null, function () {
                    var _r434_leti0, _r434_t2, _r434_t6, _r434_tag7;
                    var _r434_t1 = this;
                    var r434_currentGlyph = _r434_t1;
                    r434_currentGlyph.include(r271_MarkSet.capDesc());
                    var _r434_t3 = r434_currentGlyph;
                    var _r434_t4 = _r434_t3.include;
                    var _r434_t5 = r271_CyrZe(r271_slabTop, r271_xn$SLABNONE$5sIl, r271_CAP, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_Hook);
                    var _r434_t8 = function (_r434_leti0) {
                        var r437_ze = _r434_leti0;
                        return r271_union(r437_ze.KsiBaseShape(), r437_ze.AutoStartSerifL());
                    }(_r434_t5);
                    _r434_t4.call(_r434_t3, _r434_t8);
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ksiBase.' + r271_suffix, null, function () {
                    var _r440_leti0, _r440_t2, _r440_t6, _r440_tag7;
                    var _r440_t1 = this;
                    var r440_currentGlyph = _r440_t1;
                    r440_currentGlyph.include(r271_MarkSet.p());
                    var _r440_t3 = r440_currentGlyph;
                    var _r440_t4 = _r440_t3.include;
                    var _r440_t5 = r271_CyrZe(r271_slabTop, r271_xn$SLABNONE$5sIl, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook);
                    var _r440_t8 = function (_r440_leti0) {
                        var r443_ze = _r440_leti0;
                        return r271_union(r443_ze.KsiBaseShape(), r443_ze.AutoStartSerifL());
                    }(_r440_t5);
                    _r440_t4.call(_r440_t3, _r440_t8);
                    return void 0;
                });
            }());
        }
        (function () {
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('epsilonClosed', 666, function () {
                var _r448_t1;
                var _r448_t0 = this;
                var r448_currentGlyph = _r448_t0;
                r448_currentGlyph.include(r271_MarkSet.e());
                var r448_eps = r271_SmallEpsilon(r271_xn$CLOSEDCIRCLE$7Hrq, r271_xn$CLOSEDCIRCLE$7Hrq, r271_XH, 0, r271_StdBlend, r271_SHook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r271_SmallArchDepthB));
                r448_currentGlyph.include(r448_eps.Shape());
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('epsilonRevClosed', 606, function () {
                var _r455_t1;
                var _r455_t0 = this;
                var r455_currentGlyph = _r455_t0;
                r455_currentGlyph.include(r271_MarkSet.e());
                var r455_ze = r271_CyrZe(r271_xn$CLOSEDCIRCLE$7Hrq, r271_xn$CLOSEDCIRCLE$7Hrq, r271_XH, 0, r271_SB, r271_RightSB, r271_StdBlend, r271_SHook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r271_SmallArchDepthB));
                r455_currentGlyph.include(r455_ze.Shape());
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('OeVolapuk', 42908, function () {
                var _r462_t1;
                var _r462_t0 = this;
                var r462_currentGlyph = _r462_t0;
                r462_currentGlyph.include(r271_MarkSet.capital());
                var r462_eps = r271_SmallEpsilon(r271_xn$CLOSEDCIRCLE$7Hrq, r271_xn$CLOSEDCIRCLE$7Hrq, r271_CAP, 0, r271_VolBlend, r271_Hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r271_ArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r271_ArchDepthB));
                r462_currentGlyph.include(r462_eps.Shape());
                return void 0;
            });
            return r271_xn$createAndSaveGlyphImpl$2Lrc3c('oeVolapuk', 42909, function () {
                var _r469_t1;
                var _r469_t0 = this;
                var r469_currentGlyph = _r469_t0;
                r469_currentGlyph.include(r271_MarkSet.e());
                var r469_eps = r271_SmallEpsilon(r271_xn$CLOSEDCIRCLE$7Hrq, r271_xn$CLOSEDCIRCLE$7Hrq, r271_XH, 0, r271_VolBlend, r271_SHook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r271_SmallArchDepthB));
                r469_currentGlyph.include(r469_eps.Shape());
                return void 0;
            });
        }());
        (function () {
            var r475_suffix, r475_body, r475_bar, _r475_t3, _r475_t5, _r475_t6, _r475_tag7;
            var _r475_t0 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-A'].resolve();
            var r475_SingleStorey = _r475_t0.SingleStorey;
            var r475_FullBarBody = function (r477_df, r477_height, r477_bar, r477_hook, r477_ada2, r477_adb2) {
                var _r477_t0, _r477_t1;
                return function () {
                    var _r479_t2;
                    var _r479_t1 = this;
                    var r479_currentGlyph = _r479_t1;
                    var r479_eps = r271_SmallEpsilon(r271_xn$CLOSEDSTEM$7Hrq, r271_xn$CLOSEDSTEM$7Hrq, r477_height, 0, r271_VolBlend, r477_hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r477_ada2), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r477_adb2));
                    var _r479_t0 = r479_eps.Dim();
                    var r479_stroke = _r479_t0.stroke;
                    r479_currentGlyph.include(r479_eps.Shape());
                    r479_currentGlyph.include(r477_bar(r477_df, r477_height, r271_xn$noshape$3cah, r479_stroke));
                    return void 0;
                };
            };
            var r475_EarlessCornerBody = function (r484_df, r484_height, r484_bar, r484_hook, r484_ada2, r484_adb2) {
                var _r484_t0, _r484_t1;
                return function () {
                    var _r486_t2;
                    var _r486_t1 = this;
                    var r486_currentGlyph = _r486_t1;
                    var r486_eps = r271_SmallEpsilon(r271_xn$SLABINWARD$5sIl, r271_xn$CLOSEDSTEM$7Hrq, r484_height, 0, r271_VolBlend, r484_hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r484_ada2), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r484_adb2));
                    var _r486_t0 = r486_eps.Dim();
                    var r486_stroke = _r486_t0.stroke;
                    r486_currentGlyph.include(r486_eps.Shape());
                    r486_currentGlyph.include(r484_bar(r484_df, r484_height - r271_DToothlessRise, r271_xn$noshape$3cah, r486_stroke));
                    return void 0;
                };
            };
            var r475_EarlessRoundedBody = function (r491_df, r491_height, r491_bar, r491_hook, r491_ada2, r491_adb2) {
                var _r491_t0, _r491_t1;
                return function () {
                    var _r493_t2;
                    var _r493_t1 = this;
                    var r493_currentGlyph = _r493_t1;
                    var r493_eps = r271_SmallEpsilon(r271_xn$CLOSEDROUND$7Hrq, r271_xn$CLOSEDSTEM$7Hrq, r491_height, 0, r271_VolBlend, r491_hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r491_ada2), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r491_adb2));
                    var _r493_t0 = r493_eps.Dim();
                    var r493_stroke = _r493_t0.stroke;
                    r493_currentGlyph.include(r493_eps.Shape());
                    r493_currentGlyph.include(r491_bar(r491_df, r491_height - r491_adb2, r271_xn$noshape$3cah, r493_stroke));
                    return void 0;
                };
            };
            var r475_SingleStoreyConfig = r1_SuffixCfg.weave({
                'singleStorey': r475_FullBarBody,
                'singleStoreyEarlessCorner': r475_EarlessCornerBody,
                'singleStoreyEarlessRounded': r475_EarlessRoundedBody
            }, {
                'serifless': r475_SingleStorey.SeriflessBar,
                'serifed': r475_SingleStorey.SerifedBar,
                'tailed': r475_SingleStorey.TailedBar
            });
            var _r475_t1 = Object.entries(r475_SingleStoreyConfig)[Symbol.iterator]();
            var _r475_t2 = void 0;
            var _r475_t4 = !(_r475_t2 = _r475_t1.next()).done;
            while (_r475_t4) {
                _r475_t3 = _r475_t2.value;
                r475_suffix = _r475_t3[0];
                r475_body = _r475_t3[1][0];
                r475_bar = _r475_t3[1][1];
                _r475_t3[1];
                _r475_t5 = function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('AeVolapuk.' + r475_suffix, null, function () {
                        var _r503_t1;
                        var _r503_t0 = this;
                        var r503_currentGlyph = _r503_t0;
                        r503_currentGlyph.include(r271_MarkSet.capital());
                        r503_currentGlyph.include(r475_body(r271_DivFrame(1), r271_CAP, r475_bar, r271_Hook, r271_ArchDepthA, r271_ArchDepthB));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('aeVolapuk.' + r475_suffix, null, function () {
                        var _r508_t1;
                        var _r508_t0 = this;
                        var r508_currentGlyph = _r508_t0;
                        r508_currentGlyph.include(r271_MarkSet.e());
                        r508_currentGlyph.include(r475_body(r271_DivFrame(1), r271_XH, r475_bar, r271_SHook, r271_SmallArchDepthA, r271_SmallArchDepthB));
                        return void 0;
                    });
                }();
                _r475_t4 = !(_r475_t2 = _r475_t1.next()).done;
            }
            return _r475_t5;
        }());
        (function () {
            var r512_suffix, r512_Base, r512_Slabs, _r512_t4, _r512_t6, _r512_t7, _r512_tag8;
            var _r512_t0 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-U'].resolve();
            var r512_USerifs = _r512_t0.USerifs;
            var _r512_t1 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
            var r512_RightwardTailedBar = _r512_t1.RightwardTailedBar;
            var r512_UToothed = function (r515_df, r515_height, r515_slab, r515_hook, r515_ada2, r515_adb2) {
                var _r515_t0, _r515_t1;
                return function () {
                    var _r517_t2;
                    var _r517_t1 = this;
                    var r517_currentGlyph = _r517_t1;
                    r517_currentGlyph.setBaseAnchor('trailing', r515_df.rightSB, 0);
                    var r517_eps = r271_SmallEpsilon(r271_xn$OPENVERTICAL$5sIl, r271_xn$CLOSEDSTEM$7Hrq, r515_height, 0, r271_VolBlend, r515_hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r515_ada2), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r515_adb2));
                    var _r517_t0 = r517_eps.Dim();
                    var r517_stroke = _r517_t0.stroke;
                    r517_currentGlyph.include(r517_eps.Shape());
                    r517_currentGlyph.include(r271_VBar.r(r515_df.rightSB, 0, r515_height, r517_stroke));
                    r517_currentGlyph.include(r515_slab(r515_df, r515_height));
                    return void 0;
                };
            };
            var r512_UTailed = function (r524_df, r524_height, r524_slab, r524_hook, r524_ada2, r524_adb2) {
                var _r524_t0, _r524_t1;
                return function () {
                    var _r526_t2;
                    var _r526_t1 = this;
                    var r526_currentGlyph = _r526_t1;
                    r526_currentGlyph.setBaseAnchor('trailing', r524_df.rightSB + r271_SideJut, 0);
                    var r526_eps = r271_SmallEpsilon(r271_xn$OPENVERTICAL$5sIl, r271_xn$CLOSEDSTEM$7Hrq, r524_height, 0, r271_VolBlend, r524_hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r524_ada2), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r524_adb2));
                    var _r526_t0 = r526_eps.Dim();
                    var r526_stroke = _r526_t0.stroke;
                    r526_currentGlyph.include(r526_eps.Shape());
                    r526_currentGlyph.include(r512_RightwardTailedBar(r524_df.rightSB, 0, r524_height, r526_stroke));
                    r526_currentGlyph.include(r524_slab(r524_df, r524_height));
                    return void 0;
                };
            };
            var r512_UToothlessRounded = function (r533_df, r533_height, r533_slab, r533_hook, r533_ada2, r533_adb2) {
                var _r533_t0, _r533_t1;
                return function () {
                    var _r535_t2;
                    var _r535_t1 = this;
                    var r535_currentGlyph = _r535_t1;
                    var r535_eps = r271_SmallEpsilon(r271_xn$OPENVERTICAL$5sIl, r271_xn$CLOSEDROUND$7Hrq, r533_height, 0, r271_VolBlend, r533_hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r533_ada2), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r533_adb2));
                    var _r535_t0 = r535_eps.Dim();
                    var r535_stroke = _r535_t0.stroke;
                    r535_currentGlyph.include(r535_eps.Shape());
                    r535_currentGlyph.include(r271_VBar.r(r533_df.rightSB, r533_ada2, r533_height, r535_stroke));
                    r535_currentGlyph.include(r533_slab(r533_df, r533_height));
                    return void 0;
                };
            };
            var r512_UToothlessCorner = function (r541_df, r541_height, r541_slab, r541_hook, r541_ada2, r541_adb2) {
                var _r541_t0, _r541_t1;
                return function () {
                    var _r543_t2;
                    var _r543_t1 = this;
                    var r543_currentGlyph = _r543_t1;
                    var r543_eps = r271_SmallEpsilon(r271_xn$OPENVERTICAL$5sIl, r271_xn$SLABINWARD$5sIl, r541_height, 0, r271_VolBlend, r541_hook, new r271_xn$NamedParameterPair$2Lrc9b('ada2', r541_ada2), new r271_xn$NamedParameterPair$2Lrc9b('adb2', r541_adb2));
                    var _r543_t0 = r543_eps.Dim();
                    var r543_stroke = _r543_t0.stroke;
                    r543_currentGlyph.include(r543_eps.Shape());
                    r543_currentGlyph.include(r271_VBar.r(r541_df.rightSB, r271_DToothlessRise, r541_height, r543_stroke));
                    r543_currentGlyph.include(r541_slab(r541_df, r541_height, r543_stroke));
                    return void 0;
                };
            };
            var r512_SmallUConfig = r1_SuffixCfg.weave({
                'toothed': r512_UToothed,
                'tailed': r512_UTailed,
                'toothlessCorner': r512_UToothlessCorner,
                'toothlessRounded': r512_UToothlessRounded
            }, function (r549_body) {
                var r549___, _r549_t0, _r549_t1, _r549_t2, _r549_t3;
                return {
                    'serifless': r271_xn$noshape$3cah,
                    'bottomRightSerifed': r512_USerifs.BottomRight,
                    'motionSerifed': (_r549_t0 = r549_body, _r549_t0 === 'toothed' ? r512_USerifs.MotionToothed : (r549___ = _r549_t0, r512_USerifs.MotionToothless)),
                    'serifed': (_r549_t1 = r549_body, _r549_t1 === 'toothed' ? r512_USerifs.Toothed : _r549_t1 === 'tailed' ? r512_USerifs.Tailed : (r549___ = _r549_t1, r512_USerifs.SmallToothless))
                };
            });
            var _r512_t2 = Object.entries(r512_SmallUConfig)[Symbol.iterator]();
            var _r512_t3 = void 0;
            var _r512_t5 = !(_r512_t3 = _r512_t2.next()).done;
            while (_r512_t5) {
                _r512_t4 = _r512_t3.value;
                r512_suffix = _r512_t4[0];
                r512_Base = _r512_t4[1][0];
                r512_Slabs = _r512_t4[1][1];
                _r512_t4[1];
                _r512_t6 = function () {
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('UeVolapuk.' + r512_suffix, null, function () {
                        var _r555_t1;
                        var _r555_t0 = this;
                        var r555_currentGlyph = _r555_t0;
                        var r555_df = r271_DivFrame(1);
                        r555_currentGlyph.include(r271_MarkSet.capital());
                        r555_currentGlyph.include(r512_Base(r555_df, r271_CAP, r512_Slabs, r271_Hook, r271_ArchDepthA, r271_ArchDepthB));
                        return void 0;
                    });
                    return r271_xn$createAndSaveGlyphImpl$2Lrc3c('ueVolapuk.' + r512_suffix, null, function () {
                        var _r560_t1;
                        var _r560_t0 = this;
                        var r560_currentGlyph = _r560_t0;
                        var r560_df = r271_DivFrame(1);
                        r560_currentGlyph.include(r271_MarkSet.e());
                        r560_currentGlyph.include(r512_Base(r560_df, r271_XH, r512_Slabs, r271_SHook, r271_SmallArchDepthA, r271_SmallArchDepthB));
                        return void 0;
                    });
                }();
                _r512_t5 = !(_r512_t3 = _r512_t2.next()).done;
            }
            return _r512_t6;
        }());
        r271_xn$selectvariant$7Hrq('AeVolapuk', 42906, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'a/single'));
        r271_xn$selectvariant$7Hrq('aeVolapuk', 42907, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'a/single'));
        r271_xn$selectvariant$7Hrq('UeVolapuk', 42910, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'u'));
        r271_xn$selectvariant$7Hrq('ueVolapuk', 42911, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'u'));
        r271_alias('grek/epsilon', 949, 'latn/epsilon.serifless');
        r271_xn$selectvariant$7Hrq('latn/Epsilon', 400);
        r271_xn$selectvariant$7Hrq('latn/epsilon', 603);
        r271_turned('turnepsilon', 7432, 'latn/epsilon', r271_Middle, r271_XH / 2);
        r271_alias('cyrl/ZeRev', 1296, 'latn/Epsilon');
        r271_alias('cyrl/zeRev', 1297, 'latn/epsilon');
        r271_xn$selectvariant$7Hrq('cyrl/Ze', 1047);
        r271_xn$selectvariant$7Hrq('cyrl/ze', 1079);
        r271_xn$selectvariant$7Hrq('cyrl/KsiBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/ksiBase', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/ze.BGR', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze'));
        r271_alias('latn/EpsilonRev', 42923, 'cyrl/Ze');
        r271_alias('latn/epsilonRev', 604, 'cyrl/ze');
        r271_xn$selectvariant$7Hrq('cyrl/ZjeKomi', 1284, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/zjeKomi', 1285, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/DzjeKomi', 1286, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ksi'));
        r271_xn$selectvariant$7Hrq('cyrl/dzjeKomi', 1287, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ksi'));
        r271_xn$derivecomposites$7Hrq('cyrl/ZeCedilla', 1176, 'cyrl/Ze', 'cedillaExtShapeBelowOArc');
        r271_xn$derivecomposites$7Hrq('cyrl/zeCedilla', 1177, 'cyrl/ze', 'cedillaExtShapeBelowSOArc');
        r271_xn$selectvariant$7Hrq('latn/epsilon/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'latn/epsilon'));
        r271_xn$selectvariant$7Hrq('latn/epsilonRev/descBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'cyrl/ze'), new r271_xn$NamedParameterPair$2Lrc9b('follow', 'latn/epsilon/descBase'));
        r271_xn$derivecomposites$7Hrq('latn/epsilonRetroflexHook', 7571, 'latn/epsilon/descBase', r271_RetroflexHook.r(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_XH))));
        r271_xn$derivecomposites$7Hrq('latn/epsilonRevRetroflexHook', 7572, 'latn/epsilonRev/descBase', r271_RetroflexHook.l(r271_SB, 0, new r271_xn$NamedParameterPair$2Lrc9b('refSw', r271_AdviceStroke2(2, 3, r271_XH))), r271_ExtendBelowBaseAnchors(r271_Descender));
        r271_CreateAccentedComposition('cyrl/Ksi', 1134, 'cyrl/KsiBase', 'caronAbove');
        r271_CreateAccentedComposition('cyrl/ksi', 1135, 'cyrl/ksiBase', 'caronAbove');
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('voicedLaryngealSpirant', 7460, function () {
            var _r581_t1;
            var _r581_t0 = this;
            var r581_currentGlyph = _r581_t0;
            r581_currentGlyph.include(r271_MarkSet.b());
            var r581_blend = 0.505;
            var r581_midGap = Math.max(r271_AdviceStroke2(3, 12, r271_CAP), r271_CAP / 8 - r271_AdviceStroke2(3, 6, r271_XH));
            var r581_strokeV = r271_AdviceStroke(4);
            var r581_ze = r271_CyrZe(r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_CAP, r581_midGap, r271_SB, r271_RightSB, r581_blend, r271_Hook);
            var r581_dimUpper = r581_ze.Dim();
            var r581_epsilon = r271_SmallEpsilon(r271_xn$SLABNONE$5sIl, r271_xn$SLABNONE$5sIl, r271_CAP - r581_midGap, 0, r581_blend, r271_Hook);
            var r581_dimLower = r581_epsilon.Dim();
            r581_currentGlyph.include(r271_union(r581_epsilon.LowerShape(), r581_ze.UpperShape(), r271_Rect(r581_dimUpper.midy + r581_dimUpper.stroke / 2, r581_dimLower.midy - r581_dimLower.stroke / 2, r271_Middle - r271_HSwToV(0.5 * r581_strokeV), r271_Middle + r271_HSwToV(0.5 * r581_strokeV))));
            return void 0;
        });
    });
    return void 0;
});
