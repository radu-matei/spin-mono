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
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-B', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_body, r271_mask, r271_bp, r271_fGap, r271_ts, r271_bs, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Ascender = _r271_t1.Ascender;
        var r271_Descender = _r271_t1.Descender;
        var r271_TanSlope = _r271_t1.TanSlope;
        var r271_HVContrast = _r271_t1.HVContrast;
        var r271_Upward = _r271_t1.Upward;
        var r271_Rightward = _r271_t1.Rightward;
        var r271_Leftward = _r271_t1.Leftward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_ArchDepth = _r271_t1.ArchDepth;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_HBarPos = _r271_t1.HBarPos;
        var r271_CThin = _r271_t1.CThin;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_ArchDepthA = _r271_t1.ArchDepthA;
        var r271_ArchDepthB = _r271_t1.ArchDepthB;
        var r271_SmallArchDepthA = _r271_t1.SmallArchDepthA;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_CorrectionOMidX = _r271_t1.CorrectionOMidX;
        var r271_CorrectionOMidS = _r271_t1.CorrectionOMidS;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var r271_AdviceStroke2 = _r271_t1.AdviceStroke2;
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_ArchDepthAOf = _r271_t1.ArchDepthAOf;
        var r271_ArchDepthBOf = _r271_t1.ArchDepthBOf;
        var r271_YSmoothMidR = _r271_t1.YSmoothMidR;
        var r271_YSmoothMidL = _r271_t1.YSmoothMidL;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_flat = _r271_t2.flat;
        var r271_curl = _r271_t2.curl;
        var r271_end = _r271_t2.end;
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
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var r271_xn$aliasreducedvariant$1aao8 = _r271_t5['alias-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Metrics'].resolve();
        var r271_BowlXDepth = _r271_t6.BowlXDepth;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_ShoulderMidKnotRhs = _r271_t7.ShoulderMidKnotRhs;
        var r271_LetterBarOverlay = _r271_t7.LetterBarOverlay;
        var r271_SerifFrame = _r271_t7.SerifFrame;
        var r271_LeftHook = _r271_t7.LeftHook;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t8.BBS;
        var r271_BBD = _r271_t8.BBD;
        var r271_BArcMix = 0.93;
        var r271_BBarPos = 0.52;
        var r271_AsymmetricBBarPos = 0.6;
        var r271_BShapeArcsT = function () {
            var _r277_t6;
            var _r277_t7 = arguments;
            var _r277_t0 = [].slice.call(_r277_t7, 0);
            var _r277_t1 = [];
            var _r277_t2 = 0;
            while (_r277_t2 < _r277_t0.length) {
                if (!(_r277_t0[_r277_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r277_t1.push(_r277_t0[_r277_t2]);
                _r277_t2 = _r277_t2 + 1;
            }
            var _r277_t3 = _r277_t0;
            var _r277_t4 = _r277_t3.length;
            var _r277_t5 = 0;
            while (_r277_t5 < _r277_t4) {
                _r277_t2 = _r277_t3[_r277_t5];
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'sink')
                    r277_sink = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'top')
                    r277_top = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'stroke')
                    r277_stroke = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'offset')
                    r277_offset = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'barPos')
                    r277_barPos = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'topArcShift')
                    r277_topArcShift = _r277_t2.right;
                if (_r277_t2 && _r277_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r277_t2.left === 'topArcInnerShift')
                    r277_topArcInnerShift = _r277_t2.right;
                _r277_t5 = _r277_t5 + 1;
            }
            var r277_sink = r1_fallback(r277_sink, _r277_t1[0]);
            var r277_top = r1_fallback(r277_top, _r277_t1[1]);
            var r277_stroke = r1_fallback(r277_stroke, _r277_t1[2]);
            var r277_offset = r1_fallback(r277_offset, _r277_t1[3]);
            var r277_barPos = r1_fallback(r277_barPos, _r277_t1[4]);
            var r277_topArcShift = r1_fallback(r277_topArcShift, _r277_t1[5]);
            var r277_topArcInnerShift = r1_fallback(r277_topArcInnerShift, _r277_t1[6]);
            return function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                var r283_bowl = r277_top * r277_barPos + r277_stroke * (1 - r277_barPos);
                var r283_barleft = r271_SB;
                var r283_mockBowlDepth = r271_BowlXDepth(r277_top, r283_bowl - r277_stroke, r283_barleft, r271_RightSB, r277_stroke);
                var r283_curvleft = r271_RightSB - r271_SB * 0.5 - r283_mockBowlDepth + r277_topArcInnerShift;
                var r283_curvleftTop = Math.min(r283_curvleft, r271_RightSB - r271_SB * 0.5 - r271_OX - r277_stroke * 1.375 + r277_topArcInnerShift);
                var r283_xTopArcRight = r1_mix(r271_SB, r271_RightSB, r271_BArcMix) - r271_OX * 2 + r277_topArcShift;
                var r283_fine = r277_stroke * r271_CThin;
                var r283_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.9, r271_Width);
                var r283_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.9, r271_Width);
                var r283_adaTop = r271_ArchDepthAOf(r271_ArchDepth * 0.9 - (r283_curvleft - r283_curvleftTop), r271_Width);
                var r283_adbTop = r271_ArchDepthBOf(r271_ArchDepth * 0.9 - (r283_curvleft - r283_curvleftTop), r271_Width);
                r283_currentGlyph.include(r277_sink(r271_widths.rhs(r277_stroke), r271_flat(r283_barleft - r271_O, r277_top - r277_offset, r271_heading(r271_Rightward)), r271_curl(r283_curvleftTop - r271_CorrectionOMidX * r277_stroke, r277_top - r277_offset), r271_archv(), r271_g4(r283_xTopArcRight - r277_offset, r271_YSmoothMidR(r277_top, r283_bowl - r277_stroke, r283_adaTop, r283_adbTop)), r271_arcvh(), r271_flat(r283_curvleftTop + r271_CorrectionOMidX * r277_stroke, r283_bowl - r283_fine + r277_offset, r271_widths.rhs(r283_fine)), r271_curl(r283_barleft - r271_O, r283_bowl - r283_fine + r277_offset, r271_heading(r271_Leftward))));
                r283_currentGlyph.include(r277_sink(r271_widths.rhs(r283_fine), r271_flat(r283_barleft - r271_O, r283_bowl - r277_stroke + r283_fine - r277_offset, r271_heading(r271_Rightward)), r271_curl(r283_curvleft - r271_CorrectionOMidX * r277_stroke, r283_bowl - r277_stroke + r283_fine - r277_offset), r271_archv(), r271_g4(r271_RightSB - r271_OX * 2 - r277_offset, r271_YSmoothMidR(r283_bowl, 0, r283_ada, r283_adb), r271_widths.rhs(r277_stroke)), r271_arcvh(), r271_flat(r283_curvleft + r271_CorrectionOMidX * r277_stroke, r277_offset), r271_curl(r283_barleft - r271_O, r277_offset, r271_heading(r271_Leftward))));
                return { 'bowl': r283_bowl };
            };
        };
        var r271_BShape = function () {
            var _r286_t6;
            var _r286_t7 = arguments;
            var _r286_t0 = [].slice.call(_r286_t7, 0);
            var _r286_t1 = [];
            var _r286_t2 = 0;
            while (_r286_t2 < _r286_t0.length) {
                if (!(_r286_t0[_r286_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r286_t1.push(_r286_t0[_r286_t2]);
                _r286_t2 = _r286_t2 + 1;
            }
            var _r286_t3 = _r286_t0;
            var _r286_t4 = _r286_t3.length;
            var _r286_t5 = 0;
            while (_r286_t5 < _r286_t4) {
                _r286_t2 = _r286_t3[_r286_t5];
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'top')
                    r286_top = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'stroke')
                    r286_stroke = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'barPos')
                    r286_barPos = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'topArcShift')
                    r286_topArcShift = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'topArcInnerShift')
                    r286_topArcInnerShift = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'serifTop')
                    r286_serifTop = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'serifBot')
                    r286_serifBot = _r286_t2.right;
                _r286_t5 = _r286_t5 + 1;
            }
            var r286_top = r1_fallback(r286_top, _r286_t1[0]);
            var r286_stroke = r1_fallback(r286_stroke, _r286_t1[1], r271_AdviceStroke2(2, 3, r286_top));
            var r286_barPos = r1_fallback(r286_barPos, _r286_t1[2], r271_BBarPos);
            var r286_topArcShift = r1_fallback(r286_topArcShift, _r286_t1[3], 0);
            var r286_topArcInnerShift = r1_fallback(r286_topArcInnerShift, _r286_t1[4], 0);
            var r286_serifTop = r1_fallback(r286_serifTop, _r286_t1[5], false);
            var r286_serifBot = r1_fallback(r286_serifBot, _r286_t1[6], false);
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.include(r271_VBar.l(r271_SB, 0, r286_top, r286_stroke));
                var r292_dims = r292_currentGlyph.include(r271_BShapeArcsT(r271_dispiro, r286_top, new r271_xn$NamedParameterPair$2Lrc9b('offset', 0), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r286_stroke), new r271_xn$NamedParameterPair$2Lrc9b('barPos', r286_barPos), new r271_xn$NamedParameterPair$2Lrc9b('topArcShift', r286_topArcShift), new r271_xn$NamedParameterPair$2Lrc9b('topArcInnerShift', r286_topArcInnerShift)));
                r292_currentGlyph.setBaseAnchor('strike', r271_Middle, r292_dims.bowl - 0.5 * r286_stroke);
                var r292_sf = r271_SerifFrame.fromDf(r271_DivFrame(1), r286_top, 0);
                if (r286_serifTop)
                    r292_currentGlyph.include(r292_sf.lt.outer);
                if (r286_serifBot)
                    r292_currentGlyph.include(r292_sf.lb.outer);
                return void 0;
            };
        };
        var r271_BShapeMask = function () {
            var _r303_t6;
            var _r303_t7 = arguments;
            var _r303_t0 = [].slice.call(_r303_t7, 0);
            var _r303_t1 = [];
            var _r303_t2 = 0;
            while (_r303_t2 < _r303_t0.length) {
                if (!(_r303_t0[_r303_t2] instanceof r271_xn$NamedParameterPair$2Lrc9b))
                    _r303_t1.push(_r303_t0[_r303_t2]);
                _r303_t2 = _r303_t2 + 1;
            }
            var _r303_t3 = _r303_t0;
            var _r303_t4 = _r303_t3.length;
            var _r303_t5 = 0;
            while (_r303_t5 < _r303_t4) {
                _r303_t2 = _r303_t3[_r303_t5];
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'top')
                    r303_top = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'stroke')
                    r303_stroke = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'barPos')
                    r303_barPos = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'topArcShift')
                    r303_topArcShift = _r303_t2.right;
                if (_r303_t2 && _r303_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r303_t2.left === 'topArcInnerShift')
                    r303_topArcInnerShift = _r303_t2.right;
                _r303_t5 = _r303_t5 + 1;
            }
            var r303_top = r1_fallback(r303_top, _r303_t1[0]);
            var r303_stroke = r1_fallback(r303_stroke, _r303_t1[1], r271_AdviceStroke2(2, 3, r303_top));
            var r303_barPos = r1_fallback(r303_barPos, _r303_t1[2], r271_BBarPos);
            var r303_topArcShift = r1_fallback(r303_topArcShift, _r303_t1[3], 0);
            var r303_topArcInnerShift = r1_fallback(r303_topArcInnerShift, _r303_t1[4], 0);
            return function () {
                var _r309_t1;
                var _r309_t0 = this;
                var r309_currentGlyph = _r309_t0;
                r309_currentGlyph.include(r271_BShapeArcsT(r271_xn$spirooutline$1aao, r303_top, new r271_xn$NamedParameterPair$2Lrc9b('offset', 0.1), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r303_stroke), new r271_xn$NamedParameterPair$2Lrc9b('barPos', r303_barPos), new r271_xn$NamedParameterPair$2Lrc9b('topArcShift', r303_topArcShift), new r271_xn$NamedParameterPair$2Lrc9b('topArcInnerShift', r303_topArcInnerShift)));
                return void 0;
            };
        };
        var r271_InterruptShape = function (r316_bp, r316_top, r316_sw, r316_st, r316_sb) {
            var _r316_t0, _r316_t1;
            var r316_bowl = r316_top * r316_bp + r316_sw * (1 - r316_bp);
            var r316_gap = Math.max((r271_RightSB - r271_SB - r271_HSwToV(2 * r316_sw)) * 0.15, r271_AdviceStroke(10));
            return r271_VBar.l(r271_SB + r271_HSwToV(r316_sw), r316_bowl - 1 * r316_sw + r271_O, r316_bowl + 0 * r316_sw - r271_O, r316_gap);
        };
        var r271_StdShape = function (r317_top, r317_sw, r317_st, r317_sb) {
            var _r317_t0, _r317_t1;
            return r271_BShape(r317_top, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r317_sw), new r271_xn$NamedParameterPair$2Lrc9b('serifTop', r317_st), new r271_xn$NamedParameterPair$2Lrc9b('serifBot', r317_sb));
        };
        var r271_StdShapeInterrupted = function (r321_top, r321_sw, r321_st, r321_sb) {
            var _r321_t0, _r321_t1;
            return r271_difference(r271_StdShape(r321_top, r321_sw, r321_st, r321_sb), r271_InterruptShape(r271_BBarPos, r321_top, r321_sw, r321_st, r321_sb));
        };
        var r271_StdMask = function (r322_top, r322_sw) {
            var _r322_t0, _r322_t1;
            return r271_BShapeMask(r322_top, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r322_sw));
        };
        var r271_AsymmetricShape = function (r324_top, r324_sw, r324_st, r324_sb) {
            var _r324_t0, _r324_t1;
            return r271_BShape(r324_top, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r1_fallback(r324_sw, r271_AdviceStroke2(2, 3, r324_top))), new r271_xn$NamedParameterPair$2Lrc9b('barPos', r271_AsymmetricBBarPos), new r271_xn$NamedParameterPair$2Lrc9b('topArcShift', -(r271_RightSB - r271_SB) * 0.05), new r271_xn$NamedParameterPair$2Lrc9b('topArcInnerShift', -(r271_RightSB - r271_SB) * 0.1), new r271_xn$NamedParameterPair$2Lrc9b('serifTop', r324_st), new r271_xn$NamedParameterPair$2Lrc9b('serifBot', r324_sb));
        };
        var r271_AsymmetricShapeInterrupted = function (r331_top, r331_sw, r331_st, r331_sb) {
            var _r331_t0, _r331_t1;
            return r271_difference(r271_AsymmetricShape(r331_top, r331_sw, r331_st, r331_sb), r271_InterruptShape(0.6, r331_top, r331_sw, r331_st, r331_sb));
        };
        var r271_AsymmetricMask = function (r332_top, r332_sw) {
            var _r332_t0, _r332_t1;
            return r271_BShapeMask(r332_top, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r1_fallback(r332_sw, r271_AdviceStroke2(2, 3, r332_top))), new r271_xn$NamedParameterPair$2Lrc9b('barPos', r271_AsymmetricBBarPos), new r271_xn$NamedParameterPair$2Lrc9b('topArcShift', -(r271_RightSB - r271_SB) * 0.05), new r271_xn$NamedParameterPair$2Lrc9b('topArcInnerShift', -(r271_RightSB - r271_SB) * 0.1));
        };
        var r271_BOverlayStroke = function (r337_top, r337_bp) {
            var _r337_t0, _r337_t1;
            var r337_stroke = r271_AdviceStroke2(2, 3, r337_top);
            return r271_LetterBarOverlay.l.in(r271_SB, r337_stroke, r337_top * r337_bp - 0.5 * r337_stroke, new r271_xn$NamedParameterPair$2Lrc9b('space', [
                0,
                r271_RightSB - r271_HSwToV(r271_Stroke)
            ]));
        };
        var r271_BOverlayBar = function (r339_top, r339_bp) {
            var _r339_t0, _r339_t1;
            var r339_stroke = r271_AdviceStroke2(2, 3, r339_top);
            return r271_HBar.m(r1_mix(0, r271_SB, 0.3), r1_mix(r271_Width, r271_RightSB, 0.3), r339_top * r339_bp);
        };
        var r271_BahtBar = function (r340_sw) {
            var _r340_t0, _r340_t1;
            return r271_VBar.m(r1_mix(r271_SB, r271_RightSB, 0.48), r271_CAP - r271_Descender / 2, r271_Descender / 2, r340_sw);
        };
        var r271_BitcoinBar = function (r341_sw) {
            var _r341_t0, _r341_t1;
            var r341_xMid = r1_mix(r271_SB, r271_RightSB, 0.48);
            var r341_gap = Math.max(r271_AdviceStroke(4), (r271_RightSB - r271_SB) / 6);
            return r271_union(r271_VBar.m(r341_xMid - (r341_gap + r271_HSwToV(r341_sw)) / 2, r271_CAP - r271_Descender / 2, r271_Descender / 2, r341_sw), r271_VBar.m(r341_xMid + (r341_gap + r271_HSwToV(r341_sw)) / 2, r271_CAP - r271_Descender / 2, r271_Descender / 2, r341_sw));
        };
        var r271_BConfig = r1_SuffixCfg.weave({
            'standard': [
                r271_StdShape,
                r271_StdMask,
                r271_BBarPos,
                false
            ],
            'moreAsymmetric': [
                r271_AsymmetricShape,
                r271_AsymmetricMask,
                r271_AsymmetricBBarPos,
                false
            ],
            'standardInterrupted': [
                r271_StdShapeInterrupted,
                r271_StdMask,
                r271_BBarPos,
                true
            ],
            'moreAsymmetricInterrupted': [
                r271_AsymmetricShapeInterrupted,
                r271_AsymmetricMask,
                r271_AsymmetricBBarPos,
                true
            ]
        }, {
            'serifless': [
                false,
                false
            ],
            'unilateralSerifed': [
                true,
                false
            ],
            'bilateralSerifed': [
                true,
                true
            ]
        });
        var _r271_t9 = Object.entries(r271_BConfig)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_suffix = _r271_t11[0];
            r271_body = _r271_t11[1][0][0];
            r271_mask = _r271_t11[1][0][1];
            r271_bp = _r271_t11[1][0][2];
            r271_fGap = _r271_t11[1][0][3];
            _r271_t11[1][0];
            r271_ts = _r271_t11[1][1][0];
            r271_bs = _r271_t11[1][1][1];
            _r271_t11[1][1];
            _r271_t11[1];
            (function () {
                var r344_fMotion = r271_ts && !r271_bs;
                var r344_fAsymmetric = r271_mask === r271_AsymmetricMask;
                var r344_currencySw = r271_AdviceStroke2(3.5, 3, r271_CAP);
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('B.' + r271_suffix, null, function () {
                    var _r347_t1;
                    var _r347_t0 = this;
                    var r347_currentGlyph = _r347_t0;
                    r347_currentGlyph.include(r271_MarkSet.capital());
                    r347_currentGlyph.include(r271_body(r271_CAP, r271_AdviceStroke2(2, 3, r271_CAP), r271_ts, r271_bs));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('BStroke.' + r271_suffix, null, function () {
                    var _r352_t1;
                    var _r352_t0 = this;
                    var r352_currentGlyph = _r352_t0;
                    r352_currentGlyph.include(r271_xn$referglyph$1aao('B.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r352_currentGlyph.include(r271_BOverlayStroke(r271_CAP, r271_bp));
                    return void 0;
                });
                if (!r344_fMotion)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('Bhookleft.' + r271_suffix, null, function () {
                        var _r357_t1;
                        var _r357_t0 = this;
                        var r357_currentGlyph = _r357_t0;
                        r357_currentGlyph.include(r271_xn$referglyph$1aao('B.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                        r357_currentGlyph.ejectTagged('serifLT');
                        r357_currentGlyph.include(r271_LeftHook(r271_SB, r271_CAP));
                        return void 0;
                    });
                if (!r271_fGap)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('BBar.' + r271_suffix, null, function () {
                        var _r363_t1;
                        var _r363_t0 = this;
                        var r363_currentGlyph = _r363_t0;
                        r363_currentGlyph.include(r271_xn$referglyph$1aao('B.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                        r363_currentGlyph.include(r271_BOverlayBar(r271_CAP, r271_bp));
                        return void 0;
                    });
                if (!r344_fAsymmetric)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpB.' + r271_suffix, null, function () {
                        var _r368_t1;
                        var _r368_t0 = this;
                        var r368_currentGlyph = _r368_t0;
                        r368_currentGlyph.include(r271_MarkSet.e());
                        r368_currentGlyph.include(r271_body(r271_XH, r271_AdviceStroke2(2, 3, r271_XH), r271_ts, r271_bs));
                        return void 0;
                    });
                if (!r271_fGap && !r344_fAsymmetric)
                    r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpBBar.' + r271_suffix, null, function () {
                        var _r373_t1;
                        var _r373_t0 = this;
                        var r373_currentGlyph = _r373_t0;
                        r373_currentGlyph.include(r271_xn$referglyph$1aao('smcpB.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                        r373_currentGlyph.include(r271_BOverlayBar(r271_XH, r271_bp));
                        return void 0;
                    });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/baht.' + r271_suffix, null, r271_union(r271_body(r271_CAP, r344_currencySw, r271_ts, r271_bs), r271_intersection(r271_BahtBar(r271_AdviceStroke(5)), r271_mask(r271_CAP, r271_AdviceStroke2(2, 3, r271_CAP))), r271_difference(r271_BahtBar(r271_Stroke), r271_mask(r271_CAP, r271_AdviceStroke2(2, 3, r271_CAP)))));
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('currency/bitcoin.' + r271_suffix, null, r271_union(r271_body(r271_CAP, r344_currencySw, r271_ts, r271_bs), r271_difference(r271_BitcoinBar(r271_AdviceStroke(5)), r271_mask(r271_CAP, r271_AdviceStroke2(2, 3, r271_CAP)))));
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('latn/Beta.' + r271_suffix, null, function () {
                    var r380_fs, _r380_t1;
                    var _r380_t0 = this;
                    var r380_currentGlyph = _r380_t0;
                    r380_currentGlyph.include(r271_MarkSet.capDesc());
                    r380_currentGlyph.include(r271_body(r271_CAP, r271_AdviceStroke2(2, 3, r271_CAP), r271_ts, false));
                    r380_currentGlyph.include(r271_VBar.l(r271_SB, r271_Descender, 0));
                    if (r271_bs) {
                        r380_fs = r271_SerifFrame.fromDf(r271_DivFrame(1), r271_CAP, r271_Descender);
                        r380_currentGlyph.include(r380_fs.lb.fullSide);
                    }
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('B', 'B');
        r271_xn$linkreducedvariant$5sIl8('B/sansSerif', 'B', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('currency/baht', 3647, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'B'));
        r271_xn$selectvariant$7Hrq('currency/bitcoin', 8383, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'B'));
        r271_xn$selectvariant$7Hrq('BStroke', 579, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'B'));
        r271_xn$selectvariant$7Hrq('latn/Beta', 42932, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'B'));
        r271_alias('grek/Beta', 914, 'B');
        r271_xn$aliasreducedvariant$1aao8('grek/Beta/sansSerif', 'grek/Beta', 'B/sansSerif', r1_MathSansSerif);
        r271_alias('cyrl/Ve', 1042, 'B');
        r271_xn$selectvariant$7Hrq('smcpB', 665);
        r271_alias('cyrl/ve.upright', null, 'smcpB');
        r271_xn$selectvariant$7Hrq('BBar');
        r271_xn$selectvariant$7Hrq('smcpBBar', 7427);
        r271_xn$selectvariant$7Hrq('Bhookleft', 385);
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/B', 120121, function () {
            var _r391_t1;
            var _r391_t0 = this;
            var r391_currentGlyph = _r391_t0;
            r391_currentGlyph.include(r271_MarkSet.capital());
            r391_currentGlyph.include(r271_union(r271_BShape(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('serifs', false)), r271_intersection(r271_BShapeMask(r271_CAP, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS)), r271_union(r271_VBar.r(r271_RightSB - r271_BBD - r271_OX * 2, 0, r271_CAP * r271_BBarPos, r271_BBS), r271_VBar.r(r1_mix(r271_SB, r271_RightSB, r271_BArcMix) - r271_BBD - r271_OX * 2, r271_CAP * r271_BBarPos, r271_CAP, r271_BBS), r271_VBar.l(r271_SB + r271_BBD, 0, r271_CAP, r271_BBS)))));
            return void 0;
        });
        var r271_ItalicCyrveShape = function (r397_top) {
            var _r397_t0, _r397_t1;
            return function () {
                var _r399_t1;
                var _r399_t0 = this;
                var r399_currentGlyph = _r399_t0;
                var r399_stroke = r271_AdviceStroke2(2, 3, r397_top);
                var r399_mid = r1_mix(r271_RightSB, r271_SB, 0.65);
                var r399_midy = r397_top * r271_HBarPos;
                var r399_adb = r397_top - r1_mix(r399_midy + r399_stroke / 2, r397_top - r271_O - r399_stroke, r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB)) + r271_HSwToV(r271_TanSlope) * r399_stroke;
                var r399_ada = r1_mix(r399_stroke + r271_O, r399_midy - r399_stroke / 2, r271_ArchDepthA / (r271_ArchDepthA + r271_ArchDepthB)) - r271_HSwToV(r271_TanSlope) * r399_stroke;
                var r399_fine = r399_stroke * r271_CThin;
                r399_currentGlyph.include(r271_dispiro(r271_widths.lhs(r399_fine), r271_flat(r399_mid, r399_midy - (r399_fine - r399_stroke / 2), r271_heading(r271_Rightward)), r271_curl(r271_Middle, r399_midy - (r399_fine - r399_stroke / 2), r271_heading(r271_Rightward)), r271_archv(), r271_g4(r271_RightSB - (r271_OX - r271_O), r397_top - r399_adb, r271_widths.lhs(r399_stroke)), r271_arcvh(), r271_g4(r271_Middle + r399_stroke * 0.06 - r271_CorrectionOMidS, r397_top - r271_O), r271_archv(), r271_flat(r271_SB + r271_O, r397_top - r271_SmallArchDepthA), r271_curl(r271_SB + r271_O, r271_SmallArchDepthB), r271_arcvh(), r271_g4(r271_Middle + r399_stroke * 0.06 + r271_CorrectionOMidS, r271_O), r271_archv(), r271_g4(r271_RightSB - (r271_OX - r271_O) - r271_O * 2, r399_ada), r271_arcvh(), r271_flat(r271_Middle, r399_midy + (r399_fine - r399_stroke / 2), r271_widths.heading(r399_fine, 0, r271_Leftward)), r271_curl(r399_mid, r399_midy + (r399_fine - r399_stroke / 2), r271_widths.heading(r399_fine, 0, r271_Leftward))));
                return void 0;
            };
        };
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/ve.italic', null, function () {
            var _r403_t1;
            var _r403_t0 = this;
            var r403_currentGlyph = _r403_t0;
            r403_currentGlyph.include(r271_MarkSet.e());
            r403_currentGlyph.include(r271_ItalicCyrveShape(r271_XH));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/betaSymbol', 976, function () {
            var _r408_t1;
            var _r408_t0 = this;
            var r408_currentGlyph = _r408_t0;
            r408_currentGlyph.include(r271_MarkSet.e());
            r408_currentGlyph.include(r271_ItalicCyrveShape(r271_Ascender));
            return void 0;
        });
        r271_alias('cyrl/ve.BGR', null, 'grek/betaSymbol');
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/beta', 946, function () {
            var _r413_t1;
            var _r413_t0 = this;
            var r413_currentGlyph = _r413_t0;
            r413_currentGlyph.include(r271_MarkSet.bp());
            var r413_pBar = 0.55;
            var r413_fine = r271_Stroke * r271_CThin;
            var r413_yMiddle = r1_mix(0, r271_Ascender, r413_pBar) - r271_Stroke * 0.7;
            var r413_ada = r271_ArchDepthAOf(r271_ArchDepth * 0.75, r271_Width);
            var r413_adb = r271_ArchDepthBOf(r271_ArchDepth * 0.75, r271_Width);
            var r413_xMidLeft = r1_mix(r271_SB + r271_HSwToV(r271_Stroke), r271_RightSB - r271_HSwToV(r271_Stroke), 0.3);
            var r413_xMidArc = Math.max(r1_mix(r413_xMidLeft, r271_RightSB, 0.1), r1_mix(r271_SB, r271_RightSB, 0.5));
            r413_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r271_SB, r271_Descender, r271_heading(r271_Upward)), r271_curl(r271_SB, r271_Ascender - r271_SmallArchDepthA), r271_arcvh(), r271_g4(r1_mix(r271_SB, r271_RightSB - r271_OX + r271_O * 3, 0.5) - r271_CorrectionOMidS, r271_Ascender - r271_O), r271_archv(), r271_g4(r271_RightSB - r271_OX + r271_O * 3, r271_YSmoothMidR(r413_yMiddle, r271_Ascender, r413_ada, r413_adb)), r271_arcvh(), r271_flat(r413_xMidArc, r413_yMiddle + r271_Stroke - r413_fine, r271_widths.rhs.heading(r413_fine, r271_Leftward)), r271_curl(r413_xMidLeft, r413_yMiddle + r271_Stroke - r413_fine, r271_heading(r271_Leftward))));
            r413_currentGlyph.include(r271_dispiro(r271_widths.rhs(r413_fine), r271_flat(r413_xMidLeft, r413_yMiddle + r413_fine, r271_heading(r271_Rightward)), r271_curl(r413_xMidArc, r413_yMiddle + r413_fine, r271_heading(r271_Rightward)), r271_archv(), r271_g4(r271_RightSB - r271_OX, r271_YSmoothMidR(0, r413_yMiddle + r271_Stroke, r413_ada, r413_adb), r271_widths.rhs()), r271_arcvh(), r271_ShoulderMidKnotRhs(r271_Middle, r271_O, r271_ShoulderFine, r271_Stroke, -1, 1), r271_archv(), r271_g4.up.end(r271_SB + r271_HVContrast * (r271_Stroke - r271_ShoulderFine), r413_adb, r271_widths.rhs(r271_ShoulderFine))));
            return void 0;
        });
        r271_xn$derivecomposites$7Hrq('latn/beta', 42933, 'grek/beta', r271_SLAB ? r271_SerifFrame.fromDf(r271_DivFrame(1), r271_XH, r271_Descender).lb.fullSide : r271_xn$noshape$3cah());
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/veRounded', 7296, function () {
            var _r419_t1;
            var _r419_t0 = this;
            var r419_currentGlyph = _r419_t0;
            r419_currentGlyph.include(r271_MarkSet.e());
            var r419_fine = r271_AdviceStroke(4);
            var r419_r0 = 0.2 * (r271_RightSB - r271_SB);
            var r419_ry = r419_r0 + 0.25 * r419_fine;
            var r419_rx = r419_r0 + 0.25 * r271_HSwToV(r419_fine);
            var r419_cx = r271_RightSB - r419_rx;
            var r419_cyt = r271_XH - 1.375 * r419_ry;
            var r419_cyb = r271_XH - r419_cyt;
            r419_currentGlyph.include(r271_dispiro(r271_g4(r419_cx + r419_rx - r271_OX, r271_YSmoothMidR.cr(r419_cyt, r419_ry), r271_widths.lhs(r419_fine)), r271_arcvh(), r271_g4(r419_cx - r271_CorrectionOMidX * r419_fine, r419_cyt + r419_ry - r271_O), r271_archv(), r271_g4(r419_cx - r419_rx + r271_OX, r271_YSmoothMidL.cr(r419_cyt, r419_ry)), r271_arcvh(), r271_g4(r419_cx + r271_CorrectionOMidX * r419_fine, r419_cyt - r419_ry + r271_O), r271_archv(), r271_g4(r419_cx + r419_rx - r271_OX, r271_YSmoothMidR.cr(r419_cyt, r419_ry)), r271_arcvh(), r271_g4(r271_Middle - r271_CorrectionOMidS, r271_XH - r271_O, r271_widths.lhs()), r271_archv(), r271_flat(r271_SB, r271_XH - r271_SmallArchDepthA), r271_curl(r271_SB, 0 + r271_SmallArchDepthB), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r271_O), r271_archv(), r271_g4(r419_cx + r419_rx - r271_OX, r271_YSmoothMidR.cr(r419_cyb, r419_ry), r271_widths.lhs(r419_fine)), r271_arcvh(), r271_g4(r419_cx - r271_CorrectionOMidX * r419_fine, r419_cyb + r419_ry - r271_O), r271_archv(), r271_g4(r419_cx - r419_rx + r271_OX, r271_YSmoothMidL.cr(r419_cyb, r419_ry)), r271_arcvh(), r271_g4(r419_cx + r271_CorrectionOMidX * r419_fine, r419_cyb - r419_ry + r271_O), r271_archv(), r271_g4(r419_cx + r419_rx - r271_OX, r271_YSmoothMidR.cr(r419_cyb, r419_ry))));
            return void 0;
        });
    });
    return void 0;
});
