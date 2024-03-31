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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-O', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t12, _r270_t13;
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
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Descender = _r270_t1.Descender;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_Upward = _r270_t1.Upward;
        var r270_Downward = _r270_t1.Downward;
        var r270_O = _r270_t1.O;
        var r270_OX = _r270_t1.OX;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_DotRadius = _r270_t1.DotRadius;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_SmallArchDepthA = _r270_t1.SmallArchDepthA;
        var r270_SmallArchDepthB = _r270_t1.SmallArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_OverlayStroke = _r270_t1.OverlayStroke;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_ArchDepthAOf = _r270_t1.ArchDepthAOf;
        var r270_ArchDepthBOf = _r270_t1.ArchDepthBOf;
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
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_DotAt = _r270_t4.DotAt;
        var r270_OShape = _r270_t4.OShape;
        var r270_OShapeOutline = _r270_t4.OShapeOutline;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_PointingTo = _r270_t4.PointingTo;
        var r270_xn$withtransform$5sIl = _r270_t4['with-transform'];
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_alias = _r270_t5.alias;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var r270_xn$derivemultipartglyphs$7Hrq65 = _r270_t5['derive-multi-part-glyphs'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r270_markHalfStroke = _r270_t6.markHalfStroke;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Horn-And-Angle'].resolve();
        var r270_HornBaseAnchor = _r270_t7.HornBaseAnchor;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r270_RingDims = _r270_t8.RingDims;
        var r270_RingShape = _r270_t8.RingShape;
        var _r270_t9 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r270_ExtendAboveBaseAnchors = _r270_t9.ExtendAboveBaseAnchors;
        var r270_ExtendBelowBaseAnchors = _r270_t9.ExtendBelowBaseAnchors;
        var _r270_t10 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared'].resolve();
        var r270_CreateAccentedComposition = _r270_t10.CreateAccentedComposition;
        var r270_SetGrekUpperTonos = _r270_t10.SetGrekUpperTonos;
        var _r270_t11 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t11.BBS;
        var r270_BBD = _r270_t11.BBD;
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('O', 'O', function () {
            var _r281_t1;
            var _r281_t0 = this;
            var r281_currentGlyph = _r281_t0;
            r281_currentGlyph.include(r270_MarkSet.capital());
            r281_currentGlyph.include(r270_OShape(r270_CAP, 0, r270_SB, r270_RightSB, void 0, r270_ArchDepthA, r270_ArchDepthB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('smcpO', 7439, function () {
            var _r286_t1;
            var _r286_t0 = this;
            var r286_currentGlyph = _r286_t0;
            r286_currentGlyph.include(r270_MarkSet.e());
            r286_currentGlyph.include(r270_OShape(r270_XH, 0, r270_SB, r270_RightSB, void 0, r270_ArchDepthA, r270_ArchDepthB));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('o', 'o', function () {
            var _r291_t1;
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            r291_currentGlyph.include(r270_MarkSet.e());
            r291_currentGlyph.include(r270_OShape(r270_XH, 0, r270_SB, r270_RightSB, void 0, void 0, void 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/oNarrow', 7298, function () {
            var _r296_t1;
            var _r296_t0 = this;
            var r296_currentGlyph = _r296_t0;
            var r296_df = r296_currentGlyph.include(r270_DivFrame(r270_para.diversityF, 2));
            r296_currentGlyph.include(r296_df.markSet.e());
            var r296_subDf = r270_DivFrame(0.75, 2);
            var r296_ada = r296_subDf.archDepthA(r270_SmallArchDepth, r296_subDf.mvs);
            var r296_adb = r296_subDf.archDepthB(r270_SmallArchDepth, r296_subDf.mvs);
            r296_currentGlyph.include(r270_xn$withtransform$5sIl(r270_ApparentTranslate(0.5 * (r296_df.width - r296_subDf.width), 0), r270_OShape(r270_XH, 0, r296_subDf.leftSB, r296_subDf.rightSB, r296_subDf.mvs, r296_ada, r296_adb)));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('oSideways', 7441, function () {
            var _r302_t1;
            var _r302_t0 = this;
            var r302_currentGlyph = _r302_t0;
            r302_currentGlyph.include(r270_MarkSet.e());
            r302_currentGlyph.include(r270_PointingTo(r270_Width, r270_XH, r270_Width, 0, function () {
                var _r305_t0, _r305_t1;
                return r270_OShape(r270_Width - r270_SB / 2, r270_SB / 2, r270_XH * 0.1, r270_XH * 0.9, void 0, void 0, void 0);
            }));
            return void 0;
        });
        var r270_rBroadOn = r270_DotRadius * r270_StrokeWidthBlend(1.625, 1);
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/BroadOn', 1146, function () {
            var _r308_t1;
            var _r308_t0 = this;
            var r308_currentGlyph = _r308_t0;
            var r308_df = r270_DivFrame(1, 3);
            r308_currentGlyph.include(r270_MarkSet.capital());
            r308_currentGlyph.include(r270_OShape(r270_CAP, 0, r270_SB, r270_RightSB, r308_df.mvs, r270_ArchDepthA, r270_ArchDepthB));
            r308_currentGlyph.include(r270_DotAt(r270_Middle, r308_df.mvs / 2 + r270_O, r270_rBroadOn));
            r308_currentGlyph.include(r270_DotAt(r270_Middle, r270_CAP - r308_df.mvs / 2 - r270_O, r270_rBroadOn));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/broadOn', 1147, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            var r315_df = r270_DivFrame(1, 3);
            r315_currentGlyph.include(r270_MarkSet.e());
            r315_currentGlyph.include(r270_OShape(r270_XH, 0, r270_SB, r270_RightSB, r315_df.mvs, void 0, void 0));
            r315_currentGlyph.include(r270_DotAt(r270_Middle, r315_df.mvs / 2 + r270_O, r270_rBroadOn));
            r315_currentGlyph.include(r270_DotAt(r270_Middle, r270_XH - r315_df.mvs / 2 - r270_O, r270_rBroadOn));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Omicron', 927, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.include(r270_xn$referglyph$1aao('O'), r270_AS_BASE, r270_ALSO_METRICS);
            r322_currentGlyph.include(r270_SetGrekUpperTonos(0));
            return void 0;
        });
        r270_alias('cyrl/O', 1054, 'O');
        r270_alias('grek/omicron', 959, 'o');
        r270_alias('cyrl/o', 1086, 'o');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/O', 120134, function () {
            var _r327_t1;
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            r327_currentGlyph.include(r270_MarkSet.capital());
            r327_currentGlyph.include(r270_OShape(r270_CAP, 0, r270_SB, r270_RightSB, r270_BBS, r270_ArchDepthA, r270_ArchDepthB));
            r327_currentGlyph.include(r270_intersection(r270_OShapeOutline.NoOvershoot(r270_CAP, 0, r270_SB, r270_RightSB, r270_BBS, r270_ArchDepthA, r270_ArchDepthB), r270_union(r270_VBar.l(r270_SB + r270_OX + r270_BBD, 0, r270_CAP, r270_BBS), r270_VBar.r(r270_RightSB - r270_OX - r270_BBD, 0, r270_CAP, r270_BBS))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/o', 120160, function () {
            var _r333_t1;
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            r333_currentGlyph.include(r270_MarkSet.e());
            r333_currentGlyph.include(r270_OShape(r270_XH, 0, r270_SB, r270_RightSB, r270_BBS));
            r333_currentGlyph.include(r270_intersection(r270_OShapeOutline.NoOvershoot(r270_XH, 0, r270_SB, r270_RightSB, r270_BBS), r270_union(r270_VBar.l(r270_SB + r270_OX + r270_BBD, 0, r270_XH, r270_BBS), r270_VBar.r(r270_RightSB - r270_OX - r270_BBD, 0, r270_XH, r270_BBS))));
            return void 0;
        });
        r270_xn$derivemultipartglyphs$7Hrq65('OHorn', 416, [
            'O',
            'longHorn'
        ], function (r337_srcs, r337_gr) {
            var _r337_t0, _r337_t1;
            return function () {
                var _r339_t2;
                var _r339_t1 = this;
                var r339_currentGlyph = _r339_t1;
                var _r339_t0 = r337_srcs;
                var r339_base = _r339_t0[0];
                var r339_horn = _r339_t0[1];
                r339_currentGlyph.include(r270_MarkSet.capital());
                r339_currentGlyph.include(r270_HornBaseAnchor(r270_RightSB, r270_CAP, r270_Width / 2, r270_ArchDepthB, 0.5));
                r339_currentGlyph.include(r270_difference(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r345_t1;
                    var _r345_t0 = this;
                    var r345_currentGlyph = _r345_t0;
                    r345_currentGlyph.include(r270_MarkSet.capital());
                    r345_currentGlyph.include(r270_xn$referglyph$1aao(r339_horn));
                    return void 0;
                }), r270_OShapeOutline.NoOvershoot(r270_CAP, 0, r270_SB, r270_RightSB, void 0, r270_ArchDepthA, r270_ArchDepthB)));
                r339_currentGlyph.include(r270_xn$referglyph$1aao(r339_base));
                return void 0;
            };
        });
        r270_xn$derivemultipartglyphs$7Hrq65('oHorn', 417, [
            'o',
            'longHorn'
        ], function (r349_srcs, r349_gr) {
            var _r349_t0, _r349_t1;
            return function () {
                var _r351_t2;
                var _r351_t1 = this;
                var r351_currentGlyph = _r351_t1;
                var _r351_t0 = r349_srcs;
                var r351_base = _r351_t0[0];
                var r351_horn = _r351_t0[1];
                r351_currentGlyph.include(r270_MarkSet.e());
                r351_currentGlyph.include(r270_HornBaseAnchor(r270_RightSB, r270_XH, r270_Width / 2, r270_ArchDepthB, 0.5));
                r351_currentGlyph.include(r270_difference(r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r357_t1;
                    var _r357_t0 = this;
                    var r357_currentGlyph = _r357_t0;
                    r357_currentGlyph.include(r270_MarkSet.e());
                    r357_currentGlyph.include(r270_xn$referglyph$1aao(r351_horn));
                    return void 0;
                }), r270_OShapeOutline.NoOvershoot(r270_XH, 0, r270_SB, r270_RightSB, void 0, void 0, void 0)));
                r351_currentGlyph.include(r270_xn$referglyph$1aao(r351_base));
                return void 0;
            };
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('OSlash', 216, function () {
            var _r363_t1;
            var _r363_t0 = this;
            var r363_currentGlyph = _r363_t0;
            var r363_fine = 0.5 * r270_OverlayStroke;
            r363_currentGlyph.include(r270_xn$referglyph$1aao('O'), r270_AS_BASE);
            r363_currentGlyph.include(r270_dispiro(r270_flat(r270_SB + r270_O + r363_fine, r1_mix(r270_CAP, 0, 1.05), r270_widths.center(2 * r363_fine)), r270_curl(r270_RightSB - r270_O - r363_fine, r1_mix(0, r270_CAP, 1.05))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('oSlash', 248, function () {
            var _r368_t1;
            var _r368_t0 = this;
            var r368_currentGlyph = _r368_t0;
            var r368_fine = 0.5 * r270_OverlayStroke;
            r368_currentGlyph.include(r270_xn$referglyph$1aao('o'), r270_AS_BASE);
            r368_currentGlyph.include(r270_dispiro(r270_flat(r270_SB + r270_O + r368_fine, r1_mix(r270_XH, 0, 1.05), r270_widths.center(2 * r368_fine)), r270_curl(r270_RightSB - r270_O - r368_fine, r1_mix(0, r270_XH, 1.05))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('oSlashSideways', 7443, function () {
            var _r373_t1;
            var _r373_t0 = this;
            var r373_currentGlyph = _r373_t0;
            r373_currentGlyph.include(r270_MarkSet.e());
            r373_currentGlyph.include(r270_PointingTo(r270_Width, r270_XH, r270_Width, 0, function () {
                var _r376_t0, _r376_t1;
                return function () {
                    var _r378_t1;
                    var _r378_t0 = this;
                    var r378_currentGlyph = _r378_t0;
                    var r378_fine = 0.5 * r270_OverlayStroke;
                    r378_currentGlyph.include(r270_OShape(r270_Width - r270_SB / 2, r270_SB / 2, r270_XH * 0.1, r270_XH * 0.9, void 0, void 0, void 0));
                    r378_currentGlyph.include(r270_dispiro(r270_flat(r270_SB + r270_O + r378_fine, r1_mix(r270_Width, 0, 1.05), r270_widths.center(2 * r378_fine)), r270_curl(r270_XH - r270_SB - r270_O - r378_fine, r1_mix(0, r270_Width, 1.05))));
                    return void 0;
                };
            }));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('Obar', 415, function () {
            var _r383_t1;
            var _r383_t0 = this;
            var r383_currentGlyph = _r383_t0;
            r383_currentGlyph.include(r270_xn$referglyph$1aao('O'), r270_AS_BASE);
            r383_currentGlyph.include(r270_HBar.m(r270_SB + r270_OX + 1, r270_RightSB - r270_OX - 1, r270_CAP * 0.5, r270_OverlayStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('obar', 629, function () {
            var _r388_t1;
            var _r388_t0 = this;
            var r388_currentGlyph = _r388_t0;
            r388_currentGlyph.include(r270_xn$referglyph$1aao('o'), r270_AS_BASE);
            r388_currentGlyph.include(r270_HBar.m(r270_SB + r270_OX + 1, r270_RightSB - r270_OX - 1, r270_XH * 0.5, r270_OverlayStroke));
            return void 0;
        });
        r270_xn$derivecomposites$7Hrq('cyrl/OMonocular', 42600, 'O', 'innerDot');
        r270_xn$derivecomposites$7Hrq('cyrl/oMonocular', 42601, 'o', 'innerDotSmall');
        r270_xn$derivecomposites$7Hrq('cyrl/OBinocular', 42602, 'O', 'innerDoubleDot');
        r270_xn$derivecomposites$7Hrq('cyrl/oBinocular', 42603, 'o', 'innerDoubleDotSmall');
        r270_alias('bullEye', 664, 'cyrl/OMonocular');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/OCross', 42650, function () {
            var _r393_t1;
            var _r393_t0 = this;
            var r393_currentGlyph = _r393_t0;
            r393_currentGlyph.include(r270_xn$referglyph$1aao('O'), r270_AS_BASE);
            var r393_fine = r270_StrokeWidthBlend(1, 0.5) * r270_OverlayStroke;
            r393_currentGlyph.include(r270_HBar.m(r270_SB + r270_OX + 1, r270_RightSB - r270_OX - 1, r270_CAP * 0.5, r393_fine));
            r393_currentGlyph.include(r270_VBar.m(r270_Middle, r270_O + 1, r270_CAP - r270_O - 1, r393_fine));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/oCross', 42651, function () {
            var _r399_t1;
            var _r399_t0 = this;
            var r399_currentGlyph = _r399_t0;
            r399_currentGlyph.include(r270_xn$referglyph$1aao('o'), r270_AS_BASE);
            var r399_fine = r270_StrokeWidthBlend(1, 0.5) * r270_OverlayStroke;
            r399_currentGlyph.include(r270_HBar.m(r270_SB + r270_OX + 1, r270_RightSB - r270_OX - 1, r270_XH * 0.5, r399_fine));
            r399_currentGlyph.include(r270_VBar.m(r270_Middle, r270_O + 1, r270_XH - r270_O - 1, r399_fine));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('romanThousandCD', 8576, function () {
            var _r405_t1;
            var _r405_t0 = this;
            var r405_currentGlyph = _r405_t0;
            var r405_df = r405_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
            r405_currentGlyph.include(r405_df.markSet.capital());
            r405_currentGlyph.include(r270_OShape(r270_CAP, 0, r405_df.leftSB, r405_df.rightSB, r405_df.mvs, r270_ArchDepthA, r270_ArchDepthB));
            r405_currentGlyph.include(r270_VBar.m(r405_df.middle, r405_df.mvs / 2, r270_CAP - r405_df.mvs / 2, r405_df.mvs));
            r405_currentGlyph.setBaseAnchor('trailing', r270_Middle, 0);
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('romanTenThousand', 8578, function () {
            var _r413_t1;
            var _r413_t0 = this;
            var r413_currentGlyph = _r413_t0;
            var r413_df = r413_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 5));
            r413_currentGlyph.include(r413_df.markSet.capital());
            var r413_innerDist = r413_df.rightSB - r413_df.leftSB - r270_HSwToV(5 * r413_df.mvs);
            var r413_arcXL1 = r413_df.leftSB + r413_innerDist * (1 / 4) + r270_HSwToV(1 * r413_df.mvs);
            var r413_arcXR1 = r413_df.leftSB + r413_innerDist * (3 / 4) + r270_HSwToV(4 * r413_df.mvs);
            var r413_heightGap = Math.min(r413_df.mvs + (r270_CAP - r413_df.mvs * 4) / 5, r413_innerDist / 4 + r413_df.mvs);
            var r413_heightInner1 = r270_CAP - 2 * r413_heightGap;
            var r413_smInner1 = r1_clamp(r413_df.mvs * 1.5, 0.499 * r413_heightInner1, r270_ArchDepth * r413_heightInner1 / r270_CAP);
            var r413_adaInner1 = r270_ArchDepthAOf(r413_smInner1, r413_arcXR1 - r413_arcXL1 + r413_df.leftSB * 2);
            var r413_adbInner1 = r270_ArchDepthBOf(r413_smInner1, r413_arcXR1 - r413_arcXL1 + r413_df.leftSB * 2);
            r413_currentGlyph.include(r270_OShape(r270_CAP, 0, r413_df.leftSB, r413_df.rightSB, r413_df.mvs, r270_ArchDepthA, r270_ArchDepthB));
            r413_currentGlyph.include(r270_OShape(r270_CAP - r413_heightGap, 0 + r413_heightGap, r413_arcXL1, r413_arcXR1, r413_df.mvs, r413_adaInner1, r413_adbInner1));
            r413_currentGlyph.include(r270_VBar.m(r413_df.middle, r413_df.mvs / 2, r270_CAP - r413_df.mvs / 2, r413_df.mvs));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('romanHundredThousand', 8584, function () {
            var _r421_t1;
            var _r421_t0 = this;
            var r421_currentGlyph = _r421_t0;
            var r421_df = r421_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 7));
            r421_currentGlyph.include(r421_df.markSet.capital());
            var r421_innerDist = r421_df.rightSB - r421_df.leftSB - r270_HSwToV(7 * r421_df.mvs);
            var r421_arcXL1 = r421_df.leftSB + r421_innerDist * (1 / 6) + r270_HSwToV(1 * r421_df.mvs);
            var r421_arcXR1 = r421_df.leftSB + r421_innerDist * (5 / 6) + r270_HSwToV(6 * r421_df.mvs);
            var r421_arcXL2 = r421_df.leftSB + r421_innerDist * (2 / 6) + r270_HSwToV(2 * r421_df.mvs);
            var r421_arcXR2 = r421_df.leftSB + r421_innerDist * (4 / 6) + r270_HSwToV(5 * r421_df.mvs);
            var r421_heightGap = Math.min(r421_df.mvs + (r270_CAP - r421_df.mvs * 6) / 7, r421_innerDist / 6 + r421_df.mvs);
            var r421_heightInner1 = r270_CAP - 2 * r421_heightGap;
            var r421_heightInner2 = r270_CAP - 4 * r421_heightGap;
            var r421_smInner1 = r1_clamp(r421_df.mvs * 1.5, 0.499 * r421_heightInner1, r270_ArchDepth * r421_heightInner1 / r270_CAP);
            var r421_adaInner1 = r270_ArchDepthAOf(r421_smInner1, r421_arcXR1 - r421_arcXL1 + r421_df.leftSB * 2);
            var r421_adbInner1 = r270_ArchDepthBOf(r421_smInner1, r421_arcXR1 - r421_arcXL1 + r421_df.leftSB * 2);
            var r421_smInner2 = r1_clamp(r421_df.mvs * 1.5, 0.499 * r421_heightInner2, r270_ArchDepth * r421_heightInner2 / r270_CAP);
            var r421_adaInner2 = r270_ArchDepthAOf(r421_smInner2, r421_arcXR2 - r421_arcXL2 + r421_df.leftSB * 2);
            var r421_adbInner2 = r270_ArchDepthBOf(r421_smInner2, r421_arcXR2 - r421_arcXL2 + r421_df.leftSB * 2);
            r421_currentGlyph.include(r270_OShape(r270_CAP, 0, r421_df.leftSB, r421_df.rightSB, r421_df.mvs, r270_ArchDepthA, r270_ArchDepthB));
            r421_currentGlyph.include(r270_OShape(r270_CAP - r421_heightGap, 0 + r421_heightGap, r421_arcXL1, r421_arcXR1, r421_df.mvs, r421_adaInner1, r421_adbInner1));
            r421_currentGlyph.include(r270_OShape(r270_CAP - 2 * r421_heightGap, 0 + 2 * r421_heightGap, r421_arcXL2, r421_arcXR2, r421_df.mvs, r421_adaInner2, r421_adbInner2));
            r421_currentGlyph.include(r270_VBar.m(r421_df.middle, r421_df.mvs / 2, r270_CAP - r421_df.mvs / 2, r421_df.mvs));
            return void 0;
        });
        r270_alias('cyrl/Oe', 1256, 'Obar');
        r270_alias('grek/capSymbolTheta', 1012, 'Obar');
        r270_alias('cyrl/oe', 1257, 'obar');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('oupperhalf', 7446, function () {
            var _r430_t1;
            var _r430_t0 = this;
            var r430_currentGlyph = _r430_t0;
            r430_currentGlyph.include(r270_MarkSet.e());
            r430_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_flat(r270_SB + r270_OX, r270_XH / 2, r270_heading(r270_Upward)), r270_curl(r270_SB + r270_OX, r270_XH - Math.min(r270_XH / 2 - 0.1, r270_SmallArchDepthA)), r270_arcvh(), r270_g4(r270_Middle - r270_CorrectionOMidS, r270_XH - r270_O), r270_archv(), r270_flat(r270_RightSB - r270_OX, r270_XH - Math.min(r270_XH / 2 - 0.1, r270_SmallArchDepthB)), r270_curl(r270_RightSB - r270_OX, r270_XH / 2, r270_heading(r270_Downward))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('olowerhalf', 7447, function () {
            var _r435_t1;
            var _r435_t0 = this;
            var r435_currentGlyph = _r435_t0;
            r435_currentGlyph.include(r270_MarkSet.e());
            r435_currentGlyph.include(r270_dispiro(r270_widths.lhs(), r270_flat(r270_SB + r270_OX, r270_XH / 2, r270_heading(r270_Downward)), r270_curl(r270_SB + r270_OX, Math.min(r270_XH / 2 - 0.1, r270_SmallArchDepthB)), r270_arcvh(), r270_g4(r270_Middle + r270_CorrectionOMidS, r270_O), r270_archv(), r270_flat(r270_RightSB - r270_OX, Math.min(r270_XH / 2 - 0.1, r270_SmallArchDepthA)), r270_curl(r270_RightSB - r270_OX, r270_XH / 2, r270_heading(r270_Upward))));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('oWithLightCentralizationStroke', null, function () {
            var _r440_t1;
            var _r440_t0 = this;
            var r440_currentGlyph = _r440_t0;
            r440_currentGlyph.include(r270_MarkSet.p());
            r440_currentGlyph.include(r270_xn$referglyph$1aao('o'));
            var r440_fine = r270_AdviceStroke(4);
            var r440_outStand = r270_SB * 0.75 + r440_fine * 0.25;
            var r440_outStandY = r270_SmallArchDepthB / 2 - r270_Descender * 0.6;
            var r440_yTurn = r270_SmallArchDepthB / 2;
            r440_currentGlyph.include(r270_difference(r270_dispiro(r270_widths.lhs(r440_fine), r270_corner(r270_Middle, r440_yTurn + r440_outStandY), r270_corner(r270_SB - r440_outStand, r440_yTurn - r440_outStandY)), r270_OShapeOutline.NoOvershoot(r270_XH, 0, r270_SB, r270_RightSB, void 0, void 0, void 0)));
            return void 0;
        });
        r270_CreateAccentedComposition('oDieresis', 246, 'o', 'dieresisAbove');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('numeroRightHalf', null, function () {
            var _r446_t1;
            var _r446_t0 = this;
            var r446_currentGlyph = _r446_t0;
            r446_currentGlyph.include(r270_OShape(r270_XH, Math.max(r270_Stroke * 1.5, r270_CAP * 0.1), r270_SB, r270_RightSB, r270_Stroke, r270_ArchDepthA, r270_ArchDepthB));
            r446_currentGlyph.include(r270_HBar.b(r270_SB, r270_RightSB, 0));
            return void 0;
        });
        r270_CreateAccentedComposition('oSbRsbUnderlineBelow', null, 'o', 'sbRsbUnderlineBelow');
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('oLowRingInside', 11386, function () {
            var _r451_t2;
            var _r451_t1 = this;
            var r451_currentGlyph = _r451_t1;
            r451_currentGlyph.include(r270_xn$referglyph$1aao('o'), r270_AS_BASE);
            var _r451_t0 = r270_RingDims();
            var r451_radiusIn = _r451_t0.radiusIn;
            var r451_radiusOut = _r451_t0.radiusOut;
            r451_currentGlyph.include(r270_RingShape(r270_Middle, r270_O + r270_Stroke + r451_radiusIn));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('OPolish', 42944, function () {
            var _r456_t1;
            var _r456_t0 = this;
            var r456_currentGlyph = _r456_t0;
            r456_currentGlyph.include(r270_xn$referglyph$1aao('O'), r270_AS_BASE);
            r456_currentGlyph.include(r270_MarkSet.capital());
            r456_currentGlyph.include(r270_ExtendAboveBaseAnchors(r270_CAP + r270_LongJut - 0.5 * r270_Stroke));
            r456_currentGlyph.include(r270_ExtendBelowBaseAnchors(-r270_LongJut + 0.5 * r270_Stroke));
            r456_currentGlyph.include(r270_VBar.m(r270_Middle, r270_CAP, r270_CAP + r270_LongJut - 0.5 * r270_Stroke));
            r456_currentGlyph.include(r270_VBar.m(r270_Middle, -r270_LongJut + 0.5 * r270_Stroke, 0));
            return void 0;
        });
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('oPolish', 42945, function () {
            var _r465_t1;
            var _r465_t0 = this;
            var r465_currentGlyph = _r465_t0;
            r465_currentGlyph.include(r270_xn$referglyph$1aao('o'), r270_AS_BASE);
            r465_currentGlyph.include(r270_MarkSet.e());
            r465_currentGlyph.include(r270_ExtendAboveBaseAnchors(r270_XH + r270_LongJut - 0.5 * r270_Stroke));
            r465_currentGlyph.include(r270_ExtendBelowBaseAnchors(-r270_LongJut + 0.5 * r270_Stroke));
            r465_currentGlyph.include(r270_VBar.m(r270_Middle, r270_XH, r270_XH + r270_LongJut - 0.5 * r270_Stroke));
            r465_currentGlyph.include(r270_VBar.m(r270_Middle, -r270_LongJut + 0.5 * r270_Stroke, 0));
            return void 0;
        });
    });
    return void 0;
});
