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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-U', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Base, r271_Slabs, r271_fLTSlab, _r271_t13, _r271_t16, _r271_t18, _r271_t19, _r271_t20, _r271_tag21, _r271_t22, _r271_tag23, _r271_t24, _r271_tag25, _r271_t26, _r271_tag27;
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
        var r271_Width = _r271_t1.Width;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Translate = _r271_t1.Translate;
        var r271_Upward = _r271_t1.Upward;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_AccentHeight = _r271_t1.AccentHeight;
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
        var r271_ShoulderFine = _r271_t1.ShoulderFine;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_g4 = _r271_t2.g4;
        var r271_corner = _r271_t2.corner;
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
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$noshape$3cah = _r271_t4['no-shape'];
        var r271_tagged = _r271_t4.tagged;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_HBar = _r271_t4.HBar;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var r271_PointingTo = _r271_t4.PointingTo;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$derivecomposites$7Hrq = _r271_t5['derive-composites'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_CreateAccentedComposition = _r271_t7.CreateAccentedComposition;
        var r271_CreateOgonekComposition = _r271_t7.CreateOgonekComposition;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r271_SetGrekUpperTonos = _r271_t8.SetGrekUpperTonos;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_nShoulder = _r271_t9.nShoulder;
        var r271_RightwardTailedBar = _r271_t9.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t9.DToothlessRise;
        var r271_SerifFrame = _r271_t9.SerifFrame;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_CyrTailDescender = _r271_t10.CyrTailDescender;
        var r271_RetroflexHook = _r271_t10.RetroflexHook;
        var r271_VerticalHook = _r271_t10.VerticalHook;
        r271_xn$ExportCapture$2Lrc4b(function () {
            var _r280_t0, _r280_t1;
            return {
                'UShape': r271_UShape,
                'USerifs': r271_USerifs
            };
        });
        var r271_UArcT = function () {
            var _r281_t6;
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
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'sink')
                    r281_sink = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'df')
                    r281_df = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'top')
                    r281_top = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'bottom')
                    r281_bottom = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'stroke')
                    r281_stroke = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'ada')
                    r281_ada = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'adb')
                    r281_adb = _r281_t2.right;
                if (_r281_t2 && _r281_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r281_t2.left === 'offset')
                    r281_offset = _r281_t2.right;
                _r281_t5 = _r281_t5 + 1;
            }
            var r281_sink = r1_fallback(r281_sink, _r281_t1[0]);
            var r281_df = r1_fallback(r281_df, _r281_t1[1]);
            var r281_top = r1_fallback(r281_top, _r281_t1[2]);
            var r281_bottom = r1_fallback(r281_bottom, _r281_t1[3]);
            var r281_stroke = r1_fallback(r281_stroke, _r281_t1[4], r271_Stroke);
            var r281_ada = r1_fallback(r281_ada, _r281_t1[5], r271_ArchDepthA);
            var r281_adb = r1_fallback(r281_adb, _r281_t1[6], r271_ArchDepthB);
            var r281_offset = r1_fallback(r281_offset, _r281_t1[7], 0);
            return r281_sink(r271_widths.lhs(r281_stroke), (r281_sink === r271_xn$spirooutline$1aao ? r271_corner : r271_flat)(r281_df.leftSB + r281_offset, r281_top, r271_heading(r271_Downward)), r271_curl(r281_df.leftSB + r281_offset, r281_bottom + r281_adb + r281_offset), r271_arcvh(), r271_g4(r281_df.middle + r271_CorrectionOMidX * r281_stroke, r281_bottom + r271_O + r281_offset), r271_archv(), r271_flat(r281_df.rightSB - r281_offset, r281_bottom + r281_ada + r281_offset), (r281_sink === r271_xn$spirooutline$1aao ? r271_corner : r271_curl)(r281_df.rightSB - r281_offset, r281_top, r271_heading(r271_Upward)));
        };
        var r271_UShape = function () {
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
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'df')
                    r286_df = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'top')
                    r286_top = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'bottom')
                    r286_bottom = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'stroke')
                    r286_stroke = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'ada')
                    r286_ada = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'adb')
                    r286_adb = _r286_t2.right;
                if (_r286_t2 && _r286_t2 instanceof r271_xn$NamedParameterPair$2Lrc9b && _r286_t2.left === 'offset')
                    r286_offset = _r286_t2.right;
                _r286_t5 = _r286_t5 + 1;
            }
            var r286_df = r1_fallback(r286_df, _r286_t1[0]);
            var r286_top = r1_fallback(r286_top, _r286_t1[1]);
            var r286_bottom = r1_fallback(r286_bottom, _r286_t1[2]);
            var r286_stroke = r1_fallback(r286_stroke, _r286_t1[3], r271_Stroke);
            var r286_ada = r1_fallback(r286_ada, _r286_t1[4], r271_ArchDepthA);
            var r286_adb = r1_fallback(r286_adb, _r286_t1[5], r271_ArchDepthB);
            var r286_offset = r1_fallback(r286_offset, _r286_t1[6], 0);
            return function () {
                var _r292_t1;
                var _r292_t0 = this;
                var r292_currentGlyph = _r292_t0;
                r292_currentGlyph.include(r271_UArcT(r271_dispiro, new r271_xn$NamedParameterPair$2Lrc9b('df', r286_df), new r271_xn$NamedParameterPair$2Lrc9b('top', r286_top), new r271_xn$NamedParameterPair$2Lrc9b('bottom', r286_bottom), new r271_xn$NamedParameterPair$2Lrc9b('stroke', r286_stroke), new r271_xn$NamedParameterPair$2Lrc9b('ada', r286_ada), new r271_xn$NamedParameterPair$2Lrc9b('adb', r286_adb), new r271_xn$NamedParameterPair$2Lrc9b('offset', r286_offset)));
                return void 0;
            };
        };
        var r271_UToothed = function (r301_df, r301_top) {
            var _r301_t0, _r301_t1;
            return function () {
                var _r303_t1;
                var _r303_t0 = this;
                var r303_currentGlyph = _r303_t0;
                r303_currentGlyph.setBaseAnchor('trailing', r301_df.rightSB, 0);
                r303_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('top', r301_top), new r271_xn$NamedParameterPair$2Lrc9b('left', r301_df.leftSB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r301_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
                r303_currentGlyph.include(r271_FlipAround(r301_df.middle, r301_top / 2));
                r303_currentGlyph.include(r271_VBar.r(r301_df.rightSB, 0, r301_top));
                return void 0;
            };
        };
        var r271_UTailed = function (r312_df, r312_top) {
            var _r312_t0, _r312_t1;
            return function () {
                var _r314_t1;
                var _r314_t0 = this;
                var r314_currentGlyph = _r314_t0;
                r314_currentGlyph.setBaseAnchor('trailing', r312_df.rightSB + r271_SideJut, 0);
                r314_currentGlyph.include(r271_nShoulder(new r271_xn$NamedParameterPair$2Lrc9b('top', r312_top), new r271_xn$NamedParameterPair$2Lrc9b('left', r312_df.leftSB + r271_HSwToV(r271_Stroke)), new r271_xn$NamedParameterPair$2Lrc9b('right', r312_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('fine', r271_ShoulderFine)));
                r314_currentGlyph.include(r271_FlipAround(r312_df.middle, r312_top / 2));
                r314_currentGlyph.include(r271_RightwardTailedBar(r312_df.rightSB, 0, r312_top));
                return void 0;
            };
        };
        var r271_UToothlessRounded = function (r323_df, r323_top) {
            var _r323_t0, _r323_t1;
            return function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                r325_currentGlyph.include(r271_UShape(r323_df, r323_top, 0));
                return void 0;
            };
        };
        var r271_UToothlessRoundedSmall = function (r327_df, r327_top) {
            var _r327_t0, _r327_t1;
            return function () {
                var _r329_t1;
                var _r329_t0 = this;
                var r329_currentGlyph = _r329_t0;
                r329_currentGlyph.include(r271_UShape(r327_df, r327_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('ada', r271_SmallArchDepthA), new r271_xn$NamedParameterPair$2Lrc9b('adb', r271_SmallArchDepthB)));
                return void 0;
            };
        };
        var r271_UToothlessCorner = function (r333_df, r333_top) {
            var _r333_t0, _r333_t1;
            return function () {
                var _r335_t1;
                var _r335_t0 = this;
                var r335_currentGlyph = _r335_t0;
                r335_currentGlyph.include(r271_VBar.l(r333_df.leftSB, 0, r333_top - r271_DToothlessRise));
                r335_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4(r333_df.leftSB, r333_top - r271_DToothlessRise), r271_g4(r333_df.middle - r271_CorrectionOMidS, r333_top - r271_O), r271_archv(), r271_flat(r333_df.rightSB, r333_top - r271_ArchDepthB), r271_curl(r333_df.rightSB, 0, r271_heading(r271_Downward))));
                r335_currentGlyph.include(r271_FlipAround(r333_df.middle, r333_top / 2));
                return void 0;
            };
        };
        var r271_UToothlessCornerSmall = function (r339_df, r339_top) {
            var _r339_t0, _r339_t1;
            return function () {
                var _r341_t1;
                var _r341_t0 = this;
                var r341_currentGlyph = _r341_t0;
                r341_currentGlyph.include(r271_VBar.l(r339_df.leftSB, 0, r339_top - r271_DToothlessRise));
                r341_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_g4(r339_df.leftSB, r339_top - r271_DToothlessRise), r271_g4(r339_df.middle - r271_CorrectionOMidS, r339_top - r271_O), r271_archv(), r271_flat(r339_df.rightSB, r339_top - r271_SmallArchDepthB), r271_curl(r339_df.rightSB, 0, r271_heading(r271_Downward))));
                r341_currentGlyph.include(r271_FlipAround(r339_df.middle, r339_top / 2));
                return void 0;
            };
        };
        var r271_UTopLeftSerif = function (r345_df, r345_yTop, r345__sw) {
            var _r345_t0, _r345_t1;
            return r271_tagged('serifLT', r271_HSerif.lt(r345_df.leftSB, r345_yTop, r271_SideJut, r345__sw));
        };
        var r271_UTopRightSerif = function (r346_df, r346_yTop, r346__sw) {
            var _r346_t0, _r346_t1;
            return r271_tagged('serifRT', r271_HSerif.lt(r346_df.rightSB - r271_HSwToV(r271_Stroke), r346_yTop, r271_SideJut, r346__sw));
        };
        var r271_UBottomRightSerif = function (r347_df, r347_yTop, r347__sw) {
            var _r347_t0, _r347_t1;
            return function () {
                var _r349_t1;
                var _r349_t0 = this;
                var r349_currentGlyph = _r349_t0;
                r349_currentGlyph.include(r271_tagged('serifRB', r271_HSerif.rb(r347_df.rightSB, 0, r271_SideJut, r347__sw)));
                var r349_trAnchor = r349_currentGlyph.baseAnchors.trailing;
                if (r349_trAnchor)
                    r349_currentGlyph.setBaseAnchor('trailing', r349_trAnchor.x + r271_SideJut, r349_trAnchor.y);
                return void 0;
            };
        };
        var r271_USerifs = function () {
            var r354_Toothed, r354_RTBase, r354_Tailed, r354_BilateralMotion, r354_SmallToothless, r354_MotionToothed, r354_BottomRight, r354_MotionToothless, r354_Toothless;
            var r354_exports = {};
            r354_exports.Toothed = r354_Toothed = function (r362_df, r362_top, r362__sw) {
                var _r362_t0, _r362_t1;
                return function () {
                    var _r364_t1;
                    var _r364_t0 = this;
                    var r364_currentGlyph = _r364_t0;
                    r364_currentGlyph.include(r271_UTopLeftSerif(r362_df, r362_top, r362__sw));
                    r364_currentGlyph.include(r271_UTopRightSerif(r362_df, r362_top, r362__sw));
                    r364_currentGlyph.include(r271_UBottomRightSerif(r362_df, r362_top, r362__sw));
                    return void 0;
                };
            };
            r354_exports.RTBase = r354_RTBase = function (r369_df, r369_top, r369__sw) {
                var _r369_t0, _r369_t1;
                return function () {
                    var _r371_t1;
                    var _r371_t0 = this;
                    var r371_currentGlyph = _r371_t0;
                    r371_currentGlyph.include(r271_UTopLeftSerif(r369_df, r369_top, r369__sw));
                    r371_currentGlyph.include(r271_UTopRightSerif(r369_df, r369_top, r369__sw));
                    return void 0;
                };
            };
            r354_exports.Tailed = r354_Tailed = function (r375_df, r375_top, r375__sw) {
                var _r375_t0, _r375_t1;
                return function () {
                    var _r377_t1;
                    var _r377_t0 = this;
                    var r377_currentGlyph = _r377_t0;
                    r377_currentGlyph.include(r271_UTopLeftSerif(r375_df, r375_top, r375__sw));
                    r377_currentGlyph.include(r271_UTopRightSerif(r375_df, r375_top, r375__sw));
                    return void 0;
                };
            };
            r354_exports.BilateralMotion = r354_BilateralMotion = function (r381_df, r381_top, r381__sw) {
                var _r381_t0, _r381_t1;
                return function () {
                    var _r383_t1;
                    var _r383_t0 = this;
                    var r383_currentGlyph = _r383_t0;
                    r383_currentGlyph.include(r271_HSerif.lt(r381_df.leftSB, r381_top, r271_SideJut, r381__sw));
                    r383_currentGlyph.include(r271_HSerif.rt(r381_df.rightSB, r381_top, r271_SideJut, r381__sw));
                    return void 0;
                };
            };
            r354_exports.SmallToothless = r354_SmallToothless = function (r387_df, r387_top, r387__sw) {
                var _r387_t0, _r387_t1;
                return function () {
                    var _r389_t1;
                    var _r389_t0 = this;
                    var r389_currentGlyph = _r389_t0;
                    r389_currentGlyph.include(r271_UTopLeftSerif(r387_df, r387_top, r387__sw));
                    r389_currentGlyph.include(r271_UTopRightSerif(r387_df, r387_top, r387__sw));
                    return void 0;
                };
            };
            r354_exports.MotionToothed = r354_MotionToothed = function (r393_df, r393_top, r393__sw) {
                var _r393_t0, _r393_t1;
                return function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.include(r271_UTopLeftSerif(r393_df, r393_top, r393__sw));
                    r395_currentGlyph.include(r271_UBottomRightSerif(r393_df, r393_top, r393__sw));
                    return void 0;
                };
            };
            r354_exports.BottomRight = r354_BottomRight = function (r399_df, r399_top, r399__sw) {
                var _r399_t0, _r399_t1;
                return function () {
                    var _r401_t1;
                    var _r401_t0 = this;
                    var r401_currentGlyph = _r401_t0;
                    r401_currentGlyph.include(r271_UBottomRightSerif(r399_df, r399_top, r399__sw));
                    return void 0;
                };
            };
            r354_exports.MotionToothless = r354_MotionToothless = function (r404_df, r404_top, r404__sw) {
                var _r404_t0, _r404_t1;
                return function () {
                    var _r406_t1;
                    var _r406_t0 = this;
                    var r406_currentGlyph = _r406_t0;
                    r406_currentGlyph.include(r271_UTopLeftSerif(r404_df, r404_top, r404__sw));
                    return void 0;
                };
            };
            r354_exports.Toothless = r354_Toothless = function (r409_df, r409_top, r409__sw) {
                var _r409_t0, _r409_t1;
                var r409_sf = r271_SerifFrame.fromDf(r409_df, r409_top, 0, new r271_xn$NamedParameterPair$2Lrc9b('swSerif', r409__sw));
                return function () {
                    var _r412_t1;
                    var _r412_t0 = this;
                    var r412_currentGlyph = _r412_t0;
                    r412_currentGlyph.include(r409_sf.lt.full, true, true);
                    r412_currentGlyph.include(r409_sf.rt.full);
                    return void 0;
                };
            };
            return r354_exports;
        }();
        var r271_CapitalUConfig = r1_SuffixCfg.weave({
            'toothed': r271_UToothed,
            'tailed': r271_UTailed,
            'toothlessCorner': r271_UToothlessCorner,
            'toothlessRounded': r271_UToothlessRounded
        }, function (r415_body) {
            var r415___, _r415_t0, _r415_t1, _r415_t2, _r415_t3;
            return {
                'serifless': [
                    r271_xn$noshape$3cah,
                    false
                ],
                'bilateralMotionSerifed': [
                    r271_USerifs.BilateralMotion,
                    true
                ],
                'unilateralMotionSerifed': (_r415_t0 = r415_body, _r415_t0 === 'toothed' ? [
                    r271_USerifs.MotionToothed,
                    true
                ] : (r415___ = _r415_t0, [
                    r271_USerifs.MotionToothless,
                    true
                ])),
                'serifed': (_r415_t1 = r415_body, _r415_t1 === 'toothed' ? [
                    r271_USerifs.Toothed,
                    true
                ] : _r415_t1 === 'tailed' ? [
                    r271_USerifs.Tailed,
                    true
                ] : (r415___ = _r415_t1, [
                    r271_USerifs.Toothless,
                    true
                ]))
            };
        });
        var _r271_t11 = Object.entries(r271_CapitalUConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_Base = _r271_t13[1][0];
            r271_Slabs = _r271_t13[1][1][0];
            r271_fLTSlab = _r271_t13[1][1][1];
            _r271_t13[1][1];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('U.' + r271_suffix, null, function () {
                    var _r421_t1;
                    var _r421_t0 = this;
                    var r421_currentGlyph = _r421_t0;
                    var r421_df = r271_DivFrame(1);
                    r421_currentGlyph.include(r271_MarkSet.capital());
                    r421_currentGlyph.include(r271_Base(r421_df, r271_CAP));
                    r421_currentGlyph.include(r271_Slabs(r421_df, r271_CAP));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('U/withTonos.' + r271_suffix, null, function () {
                    var _r427_t1;
                    var _r427_t0 = this;
                    var r427_currentGlyph = _r427_t0;
                    r427_currentGlyph.include(r271_xn$referglyph$1aao('U.' + r271_suffix), r271_AS_BASE, r271_ALSO_METRICS);
                    r427_currentGlyph.include(r271_SetGrekUpperTonos(r271_fLTSlab ? -r271_SideJut : 0));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('smcpU.' + r271_suffix, null, function () {
                    var _r432_t1;
                    var _r432_t0 = this;
                    var r432_currentGlyph = _r432_t0;
                    var r432_df = r271_DivFrame(1);
                    r432_currentGlyph.include(r271_MarkSet.e());
                    r432_currentGlyph.include(r271_Base(r432_df, r271_XH));
                    r432_currentGlyph.include(r271_Slabs(r432_df, r271_XH));
                    return void 0;
                });
            }());
        }
        var r271_SmallUConfig = r1_SuffixCfg.weave({
            'toothed': r271_UToothed,
            'tailed': r271_UTailed,
            'toothlessCorner': r271_UToothlessCorner,
            'toothlessRounded': r271_UToothlessRounded,
            'urtBase': r271_UToothed
        }, function (r436_body) {
            var r436___, _r436_t0, _r436_t1, _r436_t2, _r436_t3;
            return {
                'serifless': r271_xn$noshape$3cah,
                'bottomRightSerifed': r271_USerifs.BottomRight,
                'motionSerifed': (_r436_t0 = r436_body, _r436_t0 === 'toothed' ? r271_USerifs.MotionToothed : (r436___ = _r436_t0, r271_USerifs.MotionToothless)),
                'serifed': (_r436_t1 = r436_body, _r436_t1 === 'toothed' ? r271_USerifs.Toothed : _r436_t1 === 'tailed' ? r271_USerifs.Tailed : _r436_t1 === 'urtBase' ? r271_USerifs.RTBase : (r436___ = _r436_t1, r271_USerifs.SmallToothless))
            };
        });
        var _r271_t14 = Object.entries(r271_SmallUConfig)[Symbol.iterator]();
        var _r271_t15 = void 0;
        while (!(_r271_t15 = _r271_t14.next()).done) {
            _r271_t16 = _r271_t15.value;
            r271_suffix = _r271_t16[0];
            r271_Base = _r271_t16[1][0];
            r271_Slabs = _r271_t16[1][1];
            _r271_t16[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('u.' + r271_suffix, null, function () {
                    var _r442_t1;
                    var _r442_t0 = this;
                    var r442_currentGlyph = _r442_t0;
                    var r442_df = r271_DivFrame(1);
                    r442_currentGlyph.include(r271_MarkSet.e());
                    r442_currentGlyph.include(r271_Base(r442_df, r271_XH));
                    r442_currentGlyph.include(r271_Slabs(r442_df, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('grek/mu.' + r271_suffix, null, function () {
                    var _r448_t1;
                    var _r448_t0 = this;
                    var r448_currentGlyph = _r448_t0;
                    var r448_df = r271_DivFrame(1);
                    r448_currentGlyph.include(r271_MarkSet.p());
                    r448_currentGlyph.include(r271_Base(r448_df, r271_XH));
                    r448_currentGlyph.include(r271_dispiro(r271_widths.rhs(), r271_flat(r271_SB, r271_Descender, r271_heading(r271_Upward)), r271_curl(r271_SB, r271_Descender / 2, r271_heading(r271_Upward)), r271_straight.up.end(r271_SB, r271_SmallArchDepthB, r271_widths.heading(0, r271_AdviceStroke(4), r271_Upward))));
                    r448_currentGlyph.include(r271_Slabs(r448_df, r271_XH));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('uSideways.' + r271_suffix, null, function () {
                    var _r455_t1;
                    var _r455_t0 = this;
                    var r455_currentGlyph = _r455_t0;
                    var r455_df = r271_DivFrame(r271_XH / r271_Width, 2, r271_XH * 0.1 / r271_SB);
                    r455_currentGlyph.include(r455_df.markSet.e());
                    r455_currentGlyph.include(r271_PointingTo(r271_Width, r271_XH, r271_Width, 0, function () {
                        var _r458_t0, _r458_t1;
                        return function () {
                            var _r460_t1;
                            var _r460_t0 = this;
                            var r460_currentGlyph = _r460_t0;
                            r460_currentGlyph.include(r271_Base(r455_df, r271_Width - r271_SB));
                            r460_currentGlyph.include(r271_Slabs(r455_df, r271_Width - r271_SB));
                            r460_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('uDieresisSidewaysBase.' + r271_suffix, null, function () {
                    var _r466_t1;
                    var _r466_t0 = this;
                    var r466_currentGlyph = _r466_t0;
                    var r466_df = r271_DivFrame(r271_XH / r271_Width, 2, r271_XH * 0.1 / r271_SB);
                    r466_currentGlyph.include(r466_df.markSet.e());
                    var r466_ww = r271_Width * r271_para.diversityM;
                    r466_currentGlyph.setWidth(r466_ww);
                    r466_currentGlyph.include(r271_PointingTo(r466_ww, r271_XH, r466_ww, 0, function () {
                        var _r470_t0, _r470_t1;
                        return function () {
                            var _r472_t1;
                            var _r472_t0 = this;
                            var r472_currentGlyph = _r472_t0;
                            r472_currentGlyph.include(r271_Base(r466_df, r466_ww - r271_SB - 0.75 * r271_para.diversityM * r271_AccentHeight));
                            r472_currentGlyph.include(r271_Slabs(r466_df, r466_ww - r271_SB - 0.75 * r271_para.diversityM * r271_AccentHeight));
                            r472_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                            return void 0;
                        };
                    }));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('U', 'U');
        r271_xn$selectvariant$7Hrq('U/withTonos', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'U'));
        r271_xn$linkreducedvariant$5sIl8('U/sansSerif', 'U', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('smcpU', 7452, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'U'));
        r271_xn$selectvariant$7Hrq('u', 'u');
        r271_xn$linkreducedvariant$5sIl8('u/sansSerif', 'u', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('u/uRTailBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'u'));
        r271_xn$selectvariant$7Hrq('grek/mu', 956);
        r271_xn$linkreducedvariant$5sIl8('grek/mu/sansSerif', 'grek/mu', r1_MathSansSerif);
        r271_xn$selectvariant$7Hrq('micro', 181, new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'grek/mu'));
        r271_xn$selectvariant$7Hrq('cyrl/i.italic', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'u'));
        r271_xn$selectvariant$7Hrq('cyrl/i.italic.reduced', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'u'));
        r271_alias('cyrl/i.BGR', null, 'cyrl/i.italic');
        r271_xn$selectvariant$7Hrq('uSideways', 7453, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'u'));
        r271_xn$selectvariant$7Hrq('uDieresisSidewaysBase', null, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'u'));
        r271_xn$deriveglyphs$7Hrq('cyrl/ibreve.BGR', null, 'cyrl/i.BGR', function (r484_src, r484_gr) {
            var _r484_t0, _r484_t1;
            return function () {
                var _r486_t1;
                var _r486_t0 = this;
                var r486_currentGlyph = _r486_t0;
                r486_currentGlyph.include(r271_xn$referglyph$1aao(r484_src), r271_AS_BASE, r271_ALSO_METRICS);
                r486_currentGlyph.include(r271_xn$referglyph$1aao('breveAbove'));
                return void 0;
            };
        });
        r271_xn$deriveglyphs$7Hrq('cyrl/igrave.BGR', null, 'cyrl/i.BGR', function (r489_src, r489_gr) {
            var _r489_t0, _r489_t1;
            return function () {
                var _r491_t1;
                var _r491_t0 = this;
                var r491_currentGlyph = _r491_t0;
                r491_currentGlyph.include(r271_xn$referglyph$1aao(r489_src), r271_AS_BASE, r271_ALSO_METRICS);
                r491_currentGlyph.include(r271_xn$referglyph$1aao('graveAbove'));
                return void 0;
            };
        });
        r271_xn$derivecomposites$7Hrq('cyrl/iShortTail.italic', null, 'cyrl/i.italic.reduced', r271_xn$referglyph$1aao('breveAbove'), r271_CyrTailDescender.rSideJut(r271_RightSB, 0));
        r271_xn$deriveglyphs$7Hrq('cyrl/pe.SRB', null, 'cyrl/i.italic', function (r494_src, r494_gr) {
            var _r494_t0, _r494_t1;
            return function () {
                var _r496_t1;
                var _r496_t0 = this;
                var r496_currentGlyph = _r496_t0;
                r496_currentGlyph.include(r271_xn$referglyph$1aao(r494_src), r271_AS_BASE, r271_ALSO_METRICS);
                r496_currentGlyph.include(r271_xn$referglyph$1aao('macronAbove'));
                return void 0;
            };
        });
        r271_xn$derivecomposites$7Hrq('uRTailBR', 7577, 'u/uRTailBase', r271_RetroflexHook.rSideJut(r271_RightSB, 0, new r271_xn$NamedParameterPair$2Lrc9b('yOverflow', r271_Stroke)));
        (function () {
            var r501_df = r271_DivFrame(1);
            var r501_VHookTopShape = function (r502_top, r502_ada, r502_adb) {
                var _r502_t0, _r502_t1;
                return function () {
                    var _r504_t1;
                    var _r504_t0 = this;
                    var r504_currentGlyph = _r504_t0;
                    r504_currentGlyph.include(r271_dispiro(r271_widths.lhs(), r271_flat(r501_df.leftSB, r502_top, r271_heading(r271_Downward)), r271_curl(r501_df.leftSB, r502_adb), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, r271_O), r271_archv(), r271_flat(r501_df.rightSB, r502_ada), r271_curl(r501_df.rightSB, r502_top - r271_Hook - r271_HalfStroke, r271_heading(r271_Upward))));
                    r504_currentGlyph.include(r271_VerticalHook.r(new r271_xn$NamedParameterPair$2Lrc9b('x', r501_df.rightSB), new r271_xn$NamedParameterPair$2Lrc9b('y', r502_top - r271_Hook - r271_HalfStroke), new r271_xn$NamedParameterPair$2Lrc9b('xDepth', -(r271_RightSB - r271_HSwToV(r271_HalfStroke) - r271_Middle)), new r271_xn$NamedParameterPair$2Lrc9b('yDepth', -r271_Hook)));
                    return void 0;
                };
            };
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('VHookTop.serifless', null, function () {
                var _r513_t1;
                var _r513_t0 = this;
                var r513_currentGlyph = _r513_t0;
                r513_currentGlyph.include(r271_MarkSet.capital());
                r513_currentGlyph.include(r501_VHookTopShape(r271_CAP, r271_ArchDepthA, r271_ArchDepthB));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('VHookTop.serifed', null, function () {
                var _r518_t1;
                var _r518_t0 = this;
                var r518_currentGlyph = _r518_t0;
                r518_currentGlyph.include(r271_xn$referglyph$1aao('VHookTop.serifless'), r271_AS_BASE, r271_ALSO_METRICS);
                r518_currentGlyph.include(r271_UTopLeftSerif(r501_df, r271_CAP));
                return void 0;
            });
            r271_xn$selectvariant$7Hrq('VHookTop', 434);
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('vHookTop.serifless', null, function () {
                var _r523_t1;
                var _r523_t0 = this;
                var r523_currentGlyph = _r523_t0;
                r523_currentGlyph.include(r271_MarkSet.e());
                r523_currentGlyph.include(r501_VHookTopShape(r271_XH, r271_SmallArchDepthA, r271_SmallArchDepthB));
                return void 0;
            });
            r271_xn$createAndSaveGlyphImpl$2Lrc3c('vHookTop.serifed', null, function () {
                var _r528_t1;
                var _r528_t0 = this;
                var r528_currentGlyph = _r528_t0;
                r528_currentGlyph.include(r271_xn$referglyph$1aao('vHookTop.serifless'), r271_AS_BASE, r271_ALSO_METRICS);
                r528_currentGlyph.include(r271_UTopLeftSerif(r501_df, r271_XH));
                return void 0;
            });
            return r271_xn$selectvariant$7Hrq('vHookTop', 651);
        }());
        r271_xn$deriveglyphs$7Hrq('uWithLightCentralizationStroke', null, 'u', function (r531_src, r531_gr) {
            var _r531_t0, _r531_t1;
            return function () {
                var _r533_t1;
                var _r533_t0 = this;
                var r533_currentGlyph = _r533_t0;
                r533_currentGlyph.include(r271_MarkSet.p());
                r533_currentGlyph.include(r271_xn$referglyph$1aao(r531_src));
                var r533_fine = r271_AdviceStroke(4);
                var r533_outStand = r271_SB * 0.75 + r533_fine * 0.25;
                var r533_outStandY = r271_SmallArchDepthB / 2 - r271_Descender * 0.6;
                var r533_yTurn = r271_SmallArchDepthB / 2;
                r533_currentGlyph.include(r271_difference(r271_dispiro(r271_widths.lhs(r533_fine), r271_corner(r271_SB + r533_outStand, r533_yTurn + r533_outStandY), r271_corner(r271_SB - r533_outStand, r533_yTurn - r533_outStandY)), r271_xn$spirooutline$1aao(r271_corner(r271_SB - r271_O, r271_XH), r271_curl(r271_SB - r271_O, r271_SmallArchDepthB), r271_arcvh(), r271_g4(r271_Middle + r271_CorrectionOMidS, -r271_O), r271_archv(), r271_flat(r271_RightSB + r271_O, r271_SmallArchDepthA), r271_corner(r271_RightSB + r271_O, r271_XH))));
                if (r271_SLAB)
                    r533_currentGlyph.include(r271_HSerif.lt(r271_SB, r271_XH, r271_SideJut));
                return void 0;
            };
        });
        var _r271_t17 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t17.BBS;
        var r271_BBD = _r271_t17.BBD;
        var r271_BBBarRight = _r271_t17.BBBarRight;
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/U', 120140, function () {
            var _r541_t1;
            var _r541_t0 = this;
            var r541_currentGlyph = _r541_t0;
            r541_currentGlyph.include(r271_MarkSet.capital());
            r541_currentGlyph.include(r271_HBar.t(r271_SB, r271_SB + r271_BBD, r271_CAP, r271_BBS));
            r541_currentGlyph.include(r271_UShape(r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS)));
            r541_currentGlyph.include(r271_intersection(r271_VBar.l(r271_SB + r271_BBD, 0, r271_CAP, r271_BBS), r271_UArcT(r271_xn$spirooutline$1aao, r271_DivFrame(1), r271_CAP, 0, new r271_xn$NamedParameterPair$2Lrc9b('stroke', r271_BBS), new r271_xn$NamedParameterPair$2Lrc9b('oper', true), new r271_xn$NamedParameterPair$2Lrc9b('offset', 1))));
            return void 0;
        });
        r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/u', 120166, function () {
            var _r552_t1;
            var _r552_t0 = this;
            var r552_currentGlyph = _r552_t0;
            var r552_df = r271_DivFrame(1, 2);
            r552_currentGlyph.include(r552_df.markSet.e());
            r552_currentGlyph.include(r271_xn$referglyph$1aao('mathbb/n'));
            r552_currentGlyph.include(r271_FlipAround(r271_Middle, r271_XH / 2));
            return void 0;
        });
        r271_CreateAccentedComposition('uDieresis', 252, 'u', 'dieresisAbove');
        r271_CreateAccentedComposition('uLongBarOver', 649, 'u', 'hStrike');
        r271_CreateAccentedComposition('smcpUStroke', 7550, 'smcpU', 'hStrike');
        r271_xn$deriveglyphs$7Hrq('uDieresisSidewaysMark', null, 'dieresisAboveAlwaysUpright', function (r556_gns) {
            var _r556_t0, _r556_t1;
            return function () {
                var _r558_t1;
                var _r558_t0 = this;
                var r558_currentGlyph = _r558_t0;
                var r558_ww = r271_Width * r271_para.diversityM;
                r558_currentGlyph.setWidth(0);
                r558_currentGlyph.include(r271_PointingTo(r558_ww, r271_XH, r558_ww, 0, function () {
                    var _r561_t0, _r561_t1;
                    return function () {
                        var _r563_t1;
                        var _r563_t0 = this;
                        var r563_currentGlyph = _r563_t0;
                        r563_currentGlyph.include(r271_xn$referglyph$1aao(r556_gns));
                        r563_currentGlyph.include(r271_Translate(r271_XH / 2 + r271_Width / 2, r558_ww - r271_SB - r271_XH - r271_AccentHeight));
                        r563_currentGlyph.include(r271_Translate(0, r271_SB / 2));
                        return void 0;
                    };
                }));
                return void 0;
            };
        });
        r271_CreateAccentedComposition('uDieresisSideways', 7454, 'uDieresisSidewaysBase', 'uDieresisSidewaysMark');
        r271_CreateOgonekComposition('UOgonek', 370, 'U');
        return r271_CreateOgonekComposition('uOgonek', 371, 'u');
    });
    return void 0;
});
