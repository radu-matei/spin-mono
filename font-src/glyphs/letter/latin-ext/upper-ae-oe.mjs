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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-AE-OE', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_fStraightBar, r270_slabKind, _r270_t9, _r270_t12, _r270_t15, _r270_t16, _r270_t17, _r270_t18, _r270_tag19, _r270_t20, _r270_tag21, _r270_t22, _r270_tag23;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_DesignParameters = _r270_t1.DesignParameters;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Translate = _r270_t1.Translate;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Upward = _r270_t1.Upward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_Jut = _r270_t1.Jut;
        var r270_CThin = _r270_t1.CThin;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_AdviceStroke2 = _r270_t1.AdviceStroke2;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_MidJutSide = _r270_t1.MidJutSide;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_corner = _r270_t2.corner;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_end = _r270_t2.end;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_unimportant = _r270_t2.unimportant;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_DiagCor = _r270_t4.DiagCor;
        var r270_xn$withtransform$5sIl = _r270_t4['with-transform'];
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Upper-F'].resolve();
        var r270_EFVJutLength = _r270_t6.EFVJutLength;
        var r270_xn$SLABANONE$5sIl2 = 0;
        var r270_xn$SLABATOP$5sIl2 = 1;
        var r270_xn$SLABABASE$5sIl2 = 2;
        var r270_xn$SLABATRI$5sIl2 = 3;
        var r270_xn$SLABENONE$5sIl2 = 0;
        var r270_xn$SLABEALL$5sIl2 = 2;
        var r270_AESW = function (r274_df, r274_top) {
            var _r274_t0, _r274_t1;
            return Math.min(r274_df.mvs, r270_AdviceStroke2(3, 3, r274_top, r274_df.div));
        };
        var r270_AEAHalfCurly = function (r275_df, r275_top, r275_eleft, r275_sw) {
            var _r275_t0, _r275_t1;
            return function () {
                var _r277_t1;
                var _r277_t0 = this;
                var r277_currentGlyph = _r277_t0;
                var r277_fine = r270_AdviceStroke2(3, 4, r275_top, r275_df.div);
                r277_currentGlyph.include(r270_dispiro(r270_widths.rhs(r275_sw), r270_flat(r275_df.leftSB, 0, r270_heading(r270_Upward)), r270_curl(r275_df.leftSB, r275_top * 0.1, r270_heading(r270_Upward)), r270_quadControls(0, 0.3, 6, r270_unimportant), r270_g4(r275_eleft - r270_HalfStroke, r275_top, r270_widths.rhs(r277_fine))));
                r277_currentGlyph.include(r270_xn$spirooutline$1aao(r270_corner(r275_eleft - r270_HalfStroke, r275_top), r270_corner(r275_eleft, r275_top), r270_corner(r275_eleft, r275_top - r275_sw)));
                r277_currentGlyph.include(r270_intersection(r270_xn$withtransform$5sIl(r270_Translate(-r270_O, 0), r270_xn$spirooutline$1aao(r270_corner(r275_df.leftSB, 0, r270_heading(r270_Upward)), r270_curl(r275_df.leftSB, r275_top * 0.1, r270_heading(r270_Upward)), r270_quadControls(0, 0.3, 6, r270_unimportant), r270_corner(r275_eleft - r270_HalfStroke, r275_top, r270_widths.rhs(r277_fine)), r270_corner(r275_eleft, r275_top), r270_corner(r275_eleft, 0))), r270_HBar.t(0, r275_eleft, r270_XH / 2, r275_sw)));
                return void 0;
            };
        };
        var r270_AEAHalfStraight = function (r281_df, r281_top, r281_eleft, r281_sw) {
            var _r281_t0, _r281_t1;
            return function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                var r283_StraightSbShrink = r1_mix(1, r270_DesignParameters.straightVShapeSbShrink * r270_StrokeWidthBlend(1, 0.75), r270_SLAB ? 0.75 : 1);
                var r283_fine = r281_sw * r270_CThin * 1.15;
                var r283_pInktrap = 2 / 3;
                var r283_clearance = 0 - r270_OX;
                var r283_vxStartL = r281_df.leftSB * r283_StraightSbShrink;
                var r283_vxEndL = r281_df.middle - r270_HSwToV(0.75 * r281_sw);
                var r283_dgCor = r270_DiagCor(r281_top, r281_df.width / 2, 0, r281_sw * 2);
                var r283_midSW = r283_dgCor * Math.min(r1_mix(r281_sw, r283_fine, r283_pInktrap), r270_AdviceStroke(3, r281_df.div));
                r283_currentGlyph.include(r270_dispiro(r270_widths.rhs(r281_sw * r283_dgCor), r270_flat(r1_mix(r283_vxStartL, r283_vxEndL, 0), r1_mix(0, r281_top, 0), r270_heading(r270_Upward)), r270_curl(r1_mix(r283_vxStartL, r283_vxEndL, r283_pInktrap), r1_mix(0, r281_top, r283_pInktrap), r270_widths.rhs.heading(r283_midSW, r270_Upward)), r270_g4(r1_mix(r283_vxStartL, r283_vxEndL, 1), r1_mix(0, r281_top, 1), r270_widths.rhs.heading(r283_fine, r270_Upward))));
                r283_currentGlyph.include(r270_intersection(r270_HBar.t(0, r281_eleft, r270_XH / 2, r281_sw), r270_xn$spirooutline$1aao(r270_flat(1 + r1_mix(r283_vxStartL, r283_vxEndL, 0), r1_mix(0, r281_top, 0)), r270_curl(1 + r1_mix(r283_vxStartL, r283_vxEndL, r283_pInktrap), r1_mix(0, r281_top, r283_pInktrap)), r270_corner(1 + r1_mix(r283_vxStartL, r283_vxEndL, 1), r1_mix(0, r281_top, 1)), r270_corner(r281_eleft, r281_top), r270_corner(r281_eleft, 0))));
                return void 0;
            };
        };
        var r270_AEAHalfSerifs = function (r286_df, r286_top, r286_slabKind) {
            var _r286_t0, _r286_t1;
            return function () {
                var _r288_t3;
                var _r288_t2 = this;
                var r288_currentGlyph = _r288_t2;
                var r288_sw = Math.min(r286_df.mvs, r270_AdviceStroke2(3, 3, r286_top, r286_df.div));
                var r288_eleft = r286_df.middle - r270_HSwToV(0.25 * r288_sw);
                var _r288_t0 = r286_slabKind;
                if (_r288_t0 === r270_xn$SLABABASE$5sIl2 || _r288_t0 === r270_xn$SLABATRI$5sIl2) {
                    r288_currentGlyph.include(r270_HSerif.mb(r286_df.leftSB + r270_HSwToV(0.5 * r288_sw), 0, r270_Jut, r288_sw));
                } else
                    void 0;
                var _r288_t1 = r286_slabKind;
                if (_r288_t1 === r270_xn$SLABATRI$5sIl2) {
                    r288_currentGlyph.include(r270_HSerif.lt(r286_df.middle, r286_top, r270_MidJutSide + r270_HSwToV(0.25 * r270_Stroke)));
                } else if (_r288_t1 === r270_xn$SLABATOP$5sIl2) {
                    r288_currentGlyph.include(r270_HSerif.lt(r286_df.middle, r286_top, r1_mix(r270_MidJutSide, r270_LongJut, 0.5)));
                } else
                    void 0;
                return void 0;
            };
        };
        var r270_AEAHalf = function (r292_df, r292_top, r292_straight, r292_slabKind) {
            var _r292_t0, _r292_t1;
            return function () {
                var _r294_t1;
                var _r294_t0 = this;
                var r294_currentGlyph = _r294_t0;
                var r294_sw = r270_AESW(r292_df, r292_top);
                var r294_eleft = r292_df.middle - r270_HSwToV(0.25 * r294_sw);
                r294_currentGlyph.include(r292_straight ? r270_AEAHalfStraight(r292_df, r292_top, r294_eleft, r294_sw) : r270_AEAHalfCurly(r292_df, r292_top, r294_eleft, r294_sw));
                r294_currentGlyph.include(r270_AEAHalfSerifs(r292_df, r292_top, r292_slabKind));
                return void 0;
            };
        };
        var r270_AEEHalf = function (r297_df, r297_top, r297_slabKind) {
            var _r297_t0, _r297_t1;
            return function () {
                var r299_jutTop, r299_jutBot, _r299_t1, _r299_t3;
                var _r299_t2 = this;
                var r299_currentGlyph = _r299_t2;
                var r299_eBarPos = r270_DesignParameters.upperEBarPos;
                var r299_sw = r270_AESW(r297_df, r297_top);
                var r299_eleft = r297_df.middle - r270_HSwToV(0.25 * r299_sw);
                var r299_swVJut = Math.min(r299_sw, (r297_df.rightSB - r299_eleft - r270_HSwToV(r299_sw)) * (4 / 5));
                r299_currentGlyph.include(r270_VBar.l(r299_eleft, 0, r297_top, r299_sw));
                r299_currentGlyph.include(r270_HBar.t(r299_eleft - r270_O, r297_df.rightSB, r297_top));
                r299_currentGlyph.include(r270_HBar.m(r299_eleft - r270_O, r297_df.rightSB - r299_sw / 4, r297_top * r299_eBarPos));
                r299_currentGlyph.include(r270_HBar.b(r299_eleft - r270_O, r297_df.rightSB, 0));
                var _r299_t0 = r297_slabKind;
                if (_r299_t0 === r270_xn$SLABEALL$5sIl2) {
                    _r299_t1 = r270_EFVJutLength(r297_top, r299_eBarPos, r299_sw);
                    r299_jutTop = _r299_t1[0];
                    r299_jutBot = _r299_t1[1];
                    r299_currentGlyph.include(r270_VSerif.dr(r297_df.rightSB, r297_top, r299_jutTop, r299_swVJut));
                    r299_currentGlyph.include(r270_VSerif.ur(r297_df.rightSB, 0, r299_jutBot, r299_swVJut));
                } else
                    void 0;
                return void 0;
            };
        };
        var r270_AConfig = {
            'straightSerifless': [
                true,
                r270_xn$SLABANONE$5sIl2
            ],
            'curlySerifless': [
                false,
                r270_xn$SLABANONE$5sIl2
            ],
            'straightTopSerifed': [
                true,
                r270_xn$SLABATOP$5sIl2
            ],
            'curlyTopSerifed': [
                false,
                r270_xn$SLABATOP$5sIl2
            ],
            'straightBaseSerifed': [
                true,
                r270_xn$SLABABASE$5sIl2
            ],
            'curlyBaseSerifed': [
                false,
                r270_xn$SLABABASE$5sIl2
            ],
            'straightTriSerifed': [
                true,
                r270_xn$SLABATRI$5sIl2
            ],
            'curlyTriSerifed': [
                false,
                r270_xn$SLABATRI$5sIl2
            ]
        };
        var r270_EConfig = {
            'serifless': [r270_xn$SLABENONE$5sIl2],
            'serifed': [r270_xn$SLABEALL$5sIl2]
        };
        var _r270_t7 = Object.entries(r270_AConfig)[Symbol.iterator]();
        var _r270_t8 = void 0;
        while (!(_r270_t8 = _r270_t7.next()).done) {
            _r270_t9 = _r270_t8.value;
            r270_suffix = _r270_t9[0];
            r270_fStraightBar = _r270_t9[1][0];
            r270_slabKind = _r270_t9[1][1];
            _r270_t9[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('AE/AHalf.' + r270_suffix, null, function () {
                    var _r311_t1;
                    var _r311_t0 = this;
                    var r311_currentGlyph = _r311_t0;
                    var r311_df = r311_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                    r311_currentGlyph.include(r311_df.markSet.capital());
                    r311_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r311_currentGlyph.include(r270_AEAHalf(r311_df, r270_CAP, r270_fStraightBar, r270_slabKind));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('smcpAE/AHalf.' + r270_suffix, null, function () {
                    var _r318_t1;
                    var _r318_t0 = this;
                    var r318_currentGlyph = _r318_t0;
                    var r318_df = r318_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                    r318_currentGlyph.include(r318_df.markSet.e());
                    r318_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                    r318_currentGlyph.include(r270_AEAHalf(r318_df, r270_XH, r270_fStraightBar, r270_slabKind));
                    return void 0;
                });
            }());
        }
        var _r270_t10 = Object.entries(r270_EConfig)[Symbol.iterator]();
        var _r270_t11 = void 0;
        while (!(_r270_t11 = _r270_t10.next()).done) {
            _r270_t12 = _r270_t11.value;
            r270_suffix = _r270_t12[0];
            r270_slabKind = _r270_t12[1][0];
            _r270_t12[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('AE/EHalf.' + r270_suffix, null, function () {
                    var _r328_t1;
                    var _r328_t0 = this;
                    var r328_currentGlyph = _r328_t0;
                    var r328_df = r270_DivFrame(r270_para.diversityM, 3);
                    r328_currentGlyph.setWidth(0);
                    r328_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                    r328_currentGlyph.include(r270_AEEHalf(r328_df, r270_CAP, r270_slabKind));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('smcpAE/EHalf.' + r270_suffix, null, function () {
                    var _r334_t1;
                    var _r334_t0 = this;
                    var r334_currentGlyph = _r334_t0;
                    var r334_df = r270_DivFrame(r270_para.diversityM, 3);
                    r334_currentGlyph.setWidth(0);
                    r334_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                    r334_currentGlyph.include(r270_AEEHalf(r334_df, r270_XH, r270_slabKind));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('AE/AHalf', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r270_xn$selectvariant$7Hrq('AE/EHalf', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
        r270_xn$selectvariant$7Hrq('smcpAE/AHalf', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
        r270_xn$selectvariant$7Hrq('smcpAE/EHalf', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
        r270_xn$derivecomposites$7Hrq('AE', 198, 'AE/AHalf', 'AE/EHalf');
        r270_xn$derivecomposites$7Hrq('smcpAE', 7425, 'smcpAE/AHalf', 'smcpAE/EHalf');
        r270_alias('cyrl/AE', 1236, 'AE');
        var r270_OEShape = function (r342_top, r342_df, r342_slabKind) {
            var _r342_t0, _r342_t1;
            return function () {
                var r344_jutTop, r344_jutBot, _r344_t1, _r344_t3;
                var _r344_t2 = this;
                var r344_currentGlyph = _r344_t2;
                var r344_eBarPos = r270_DesignParameters.upperEBarPos;
                var r344_sw = Math.min(r342_df.mvs, r270_AdviceStroke2(3, 3, r342_top, r342_df.div));
                var r344_eleft = r342_df.middle - r344_sw * (r270_SLAB ? 1 / 3 : 1 / 4) * r270_HVContrast;
                var r344_swVJut = Math.min(r344_sw, (r342_df.rightSB - r344_eleft - r270_HSwToV(r344_sw)) * (4 / 5));
                r344_currentGlyph.include(r270_dispiro(r270_widths.lhs(r344_sw, 0), r270_straight.left.start(r344_eleft, r342_top, r270_heading(r270_Leftward)), r270_archv(), r270_flat(r342_df.leftSB, r342_top - r270_ArchDepthA), r270_curl(r342_df.leftSB, r270_ArchDepthB), r270_arcvh(), r270_straight.right.end(r344_eleft, 0, r270_heading(r270_Rightward))));
                r344_currentGlyph.include(r270_VBar.l(r344_eleft, 0, r342_top, r344_sw));
                r344_currentGlyph.include(r270_HBar.t(r344_eleft - r270_O, r342_df.rightSB, r342_top, r344_sw));
                r344_currentGlyph.include(r270_HBar.m(r344_eleft - r270_O, r342_df.rightSB - r344_sw / 4, r342_top * 0.54, r344_sw));
                r344_currentGlyph.include(r270_HBar.b(r344_eleft - r270_O, r342_df.rightSB, 0, r344_sw));
                var _r344_t0 = r342_slabKind;
                if (_r344_t0 === r270_xn$SLABEALL$5sIl2) {
                    _r344_t1 = r270_EFVJutLength(r342_top, r344_eBarPos, r344_sw);
                    r344_jutTop = _r344_t1[0];
                    r344_jutBot = _r344_t1[1];
                    r344_currentGlyph.include(r270_VSerif.dr(r342_df.rightSB, r342_top, r344_jutTop, r344_swVJut));
                    r344_currentGlyph.include(r270_VSerif.ur(r342_df.rightSB, 0, r344_jutBot, r344_swVJut));
                } else
                    void 0;
                return void 0;
            };
        };
        var _r270_t13 = Object.entries(r270_EConfig)[Symbol.iterator]();
        var _r270_t14 = void 0;
        while (!(_r270_t14 = _r270_t13.next()).done) {
            _r270_t15 = _r270_t14.value;
            r270_suffix = _r270_t15[0];
            r270_slabKind = _r270_t15[1][0];
            _r270_t15[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('OE.' + r270_suffix, null, function () {
                    var _r357_t1;
                    var _r357_t0 = this;
                    var r357_currentGlyph = _r357_t0;
                    var r357_df = r357_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                    r357_currentGlyph.include(r357_df.markSet.capital());
                    r357_currentGlyph.include(r270_OEShape(r270_CAP, r357_df, r270_slabKind));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('smcpOE.' + r270_suffix, null, function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    var r363_df = r363_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                    r363_currentGlyph.include(r363_df.markSet.e());
                    r363_currentGlyph.include(r270_OEShape(r270_XH, r363_df, r270_slabKind));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('OE', 338, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
        return r270_xn$selectvariant$7Hrq('smcpOE', 630, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'AE/EHalf'));
    });
    return void 0;
});
