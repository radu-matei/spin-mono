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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-AE-OE', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8, _r270_t9, _r270_tag10, _r270_t11, _r270_tag12, _r270_t13, _r270_tag14, _r270_t15, _r270_tag16, _r270_t17, _r270_tag18, _r270_t19, _r270_tag20, _r270_t21, _r270_tag22;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_ApparentTranslate = _r270_t1.ApparentTranslate;
        var r270_OX = _r270_t1.OX;
        var r270_ArchDepth = _r270_t1.ArchDepth;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_OverlayPos = _r270_t1.OverlayPos;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_Jut = _r270_t1.Jut;
        var r270_VJut = _r270_t1.VJut;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_OverlayStroke = _r270_t1.OverlayStroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_union = _r270_t3.union;
        var r270_intersection = _r270_t3.intersection;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_tagged = _r270_t4.tagged;
        var r270_DotAt = _r270_t4.DotAt;
        var r270_OShape = _r270_t4.OShape;
        var r270_HSerif = _r270_t4.HSerif;
        var r270_VSerif = _r270_t4.VSerif;
        var r270_HBar = _r270_t4.HBar;
        var r270_VBar = _r270_t4.VBar;
        var r270_FlipAround = _r270_t4.FlipAround;
        var r270_xn$withtransform$5sIl = _r270_t4['with-transform'];
        var r270_MaskAbove = _r270_t4.MaskAbove;
        var r270_MaskBelow = _r270_t4.MaskBelow;
        var r270_DotVariants = _r270_t4.DotVariants;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var r270_turned = _r270_t5.turned;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_nShoulder = _r270_t6.nShoulder;
        var r270_OBarLeft = _r270_t6.OBarLeft;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r275_t0, _r275_t1;
            return { 'SubDfAndShift': r270_SubDfAndShift };
        });
        var r270_SubDfAndShift = function (r276_pShift, r276_df, r276__o) {
            var _r276_t0, _r276_t1;
            var r276_subDf = r276_df.slice(3, 2, r276__o);
            var r276_subDfFullShift = r276_df.rightSB - r276_subDf.rightSB;
            var r276_shift = r276_pShift * r276_subDfFullShift;
            return [
                r276_subDf,
                r276_shift
            ];
        };
        (function () {
            var r278_suffix, r278_bodyR, _r278_t3, _r278_t5, _r278_t6, _r278_tag7;
            var r278_AAShape = function (r279_pShift, r279_df, r279_body, r279_o) {
                var _r279_t1, _r279_t2;
                var _r279_t0 = r270_SubDfAndShift(r279_pShift, r279_df, r279_o);
                var r279_subDf = _r279_t0[0];
                var r279_shift = _r279_t0[1];
                return r270_xn$withtransform$5sIl(r270_ApparentTranslate(r279_shift, 0), r279_body(r279_subDf, r279_df.mvs));
            };
            var _r278_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-A'].resolve();
            var r278_DoubleStorey = _r278_t0.DoubleStorey;
            var r278_DoubleStoreyConfig = {
                'doubleStoreySerifless': [r278_DoubleStorey.Serifless],
                'doubleStoreySerifed': [r278_DoubleStorey.Serifed],
                'doubleStoreyTailed': [r278_DoubleStorey.Tailed],
                'doubleStoreyToothlessCorner': [r278_DoubleStorey.ToothlessCorner],
                'doubleStoreyToothlessRounded': [r278_DoubleStorey.ToothlessRounded]
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('ae/a', null, function () {
                var _r283_t1;
                var _r283_t0 = this;
                var r283_currentGlyph = _r283_t0;
                var r283_df = r283_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                r283_currentGlyph.include(r283_df.markSet.e());
                r283_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r283_currentGlyph.include(r278_AAShape(0, r283_df, r278_DoubleStorey.ToothlessRounded, 0));
                return void 0;
            });
            var _r278_t1 = Object.entries(r278_DoubleStoreyConfig)[Symbol.iterator]();
            var _r278_t2 = void 0;
            var _r278_t4 = !(_r278_t2 = _r278_t1.next()).done;
            while (_r278_t4) {
                _r278_t3 = _r278_t2.value;
                r278_suffix = _r278_t3[0];
                r278_bodyR = _r278_t3[1][0];
                _r278_t3[1];
                _r278_t5 = function () {
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('aa.' + r278_suffix, null, function () {
                        var _r293_t1;
                        var _r293_t0 = this;
                        var r293_currentGlyph = _r293_t0;
                        var r293_df = r293_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                        r293_currentGlyph.include(r293_df.markSet.e());
                        var r293_left = function () {
                            var _r296_t0, _r296_t1;
                            return r278_AAShape(0, r293_df, r278_DoubleStorey.ToothlessRounded);
                        };
                        var r293_right = function () {
                            var _r297_t0, _r297_t1;
                            return r278_AAShape(1, r293_df, r278_bodyR);
                        };
                        r293_currentGlyph.include(r270_difference(r293_right(), r270_intersection(r270_MaskAbove(r270_XH * r270_OverlayPos * 1.02), r270_union(r270_xn$withtransform$5sIl(r270_ApparentTranslate(-0.25 * r293_df.mvs, 0), r293_left()), r270_xn$withtransform$5sIl(r270_ApparentTranslate(-0.5 * r293_df.mvs, 0), r293_left()), r270_xn$withtransform$5sIl(r270_ApparentTranslate(-0.75 * r293_df.mvs, 0), r293_left()), r270_xn$withtransform$5sIl(r270_ApparentTranslate(-1 * r293_df.mvs, 0), r293_left())))));
                        r293_currentGlyph.include(r270_difference(r293_left(), r270_intersection(r270_MaskBelow(r270_XH * r270_OverlayPos * 1.02), r270_union(r270_xn$withtransform$5sIl(r270_ApparentTranslate(+0.25 * r293_df.mvs, 0), r293_right()), r270_xn$withtransform$5sIl(r270_ApparentTranslate(+0.5 * r293_df.mvs, 0), r293_right()), r270_xn$withtransform$5sIl(r270_ApparentTranslate(+0.75 * r293_df.mvs, 0), r293_right()), r270_xn$withtransform$5sIl(r270_ApparentTranslate(+1 * r293_df.mvs, 0), r293_right())))));
                        return void 0;
                    });
                }();
                _r278_t4 = !(_r278_t2 = _r278_t1.next()).done;
            }
            return _r278_t5;
        }());
        (function () {
            var r301_oeOPart = function (r302_pShift, r302_df, r302_top, r302_ad) {
                var _r302_t1, _r302_t2;
                var _r302_t0 = r270_SubDfAndShift(r302_pShift, r302_df, r270_OX);
                var r302_subDf = _r302_t0[0];
                var r302_shift = _r302_t0[1];
                return r270_xn$withtransform$5sIl(r270_ApparentTranslate(r302_shift, 0), r270_OShape(r302_top, 0, r302_subDf.leftSB, r302_subDf.rightSB, r302_df.mvs, r302_subDf.archDepthA(r302_ad), r302_subDf.archDepthB(r302_ad)));
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('oe/o', null, function () {
                var _r305_t1;
                var _r305_t0 = this;
                var r305_currentGlyph = _r305_t0;
                var r305_df = r305_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                r305_currentGlyph.include(r305_df.markSet.e());
                r305_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r305_currentGlyph.include(r301_oeOPart(0, r305_df, r270_XH, r270_SmallArchDepth));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('ao/o', null, function () {
                var _r312_t1;
                var _r312_t0 = this;
                var r312_currentGlyph = _r312_t0;
                var r312_df = r312_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                r312_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                r312_currentGlyph.include(r301_oeOPart(1, r312_df, r270_XH, r270_SmallArchDepth));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('OO/left', null, function () {
                var _r318_t1;
                var _r318_t0 = this;
                var r318_currentGlyph = _r318_t0;
                var r318_df = r318_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                r318_currentGlyph.include(r318_df.markSet.capital());
                r318_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r318_currentGlyph.include(r301_oeOPart(0, r318_df, r270_CAP, r270_ArchDepth));
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('OO/right', null, function () {
                var _r325_t1;
                var _r325_t0 = this;
                var r325_currentGlyph = _r325_t0;
                var r325_df = r325_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                r325_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                r325_currentGlyph.include(r301_oeOPart(1, r325_df, r270_CAP, r270_ArchDepth));
                return void 0;
            });
        }());
        (function () {
            var r330_suffix, r330_body, r330_revbody, _r330_t3, _r330_t5, _r330_t6, _r330_tag7;
            var _r330_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-E'].resolve();
            var r330_SmallEShape = _r330_t0.SmallEShape;
            var r330_SmallERoundedShape = _r330_t0.SmallERoundedShape;
            var r330_RevSmallEShape = _r330_t0.RevSmallEShape;
            var r330_RevSmallERoundedShape = _r330_t0.RevSmallERoundedShape;
            var r330_EShape = function (r332_pShift, r332_df, r332_body) {
                var _r332_t1, _r332_t2;
                var _r332_t0 = r270_SubDfAndShift(r332_pShift, r332_df, r270_OX);
                var r332_subDf = _r332_t0[0];
                var r332_shift = _r332_t0[1];
                return r270_xn$withtransform$5sIl(r270_ApparentTranslate(r332_shift, 0), r332_body(r332_subDf, r270_XH, r332_df.mvs));
            };
            var r330_InvEShape = function (r333_pShift, r333_df, r333_revbody) {
                var _r333_t1, _r333_t2;
                var _r333_t0 = r270_SubDfAndShift(r333_pShift, r333_df, r270_OX);
                var r333_subDf = _r333_t0[0];
                var r333_shift = _r333_t0[1];
                return r270_xn$withtransform$5sIl(r270_ApparentTranslate(r333_shift, 0), r270_xn$withtransform$5sIl(r270_FlipAround(r333_subDf.middle, r270_XH / 2), r333_revbody(r333_subDf, r270_XH, r333_df.mvs)));
            };
            var r330_Config = {
                'flatCrossbar': [
                    r330_SmallEShape,
                    r330_RevSmallEShape
                ],
                'rounded': [
                    r330_SmallERoundedShape,
                    r330_RevSmallERoundedShape
                ]
            };
            var _r330_t1 = Object.entries(r330_Config)[Symbol.iterator]();
            var _r330_t2 = void 0;
            var _r330_t4 = !(_r330_t2 = _r330_t1.next()).done;
            while (_r330_t4) {
                _r330_t3 = _r330_t2.value;
                r330_suffix = _r330_t3[0];
                r330_body = _r330_t3[1][0];
                r330_revbody = _r330_t3[1][1];
                _r330_t3[1];
                _r330_t5 = function () {
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('ae/e.' + r330_suffix, null, function () {
                        var _r339_t1;
                        var _r339_t0 = this;
                        var r339_currentGlyph = _r339_t0;
                        var r339_df = r270_DivFrame(r270_para.diversityM, 3);
                        r339_currentGlyph.setWidth(0);
                        r339_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                        r339_currentGlyph.include(r330_EShape(1, r339_df, r330_body));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('aeInvE/right.' + r330_suffix, null, function () {
                        var _r345_t1;
                        var _r345_t0 = this;
                        var r345_currentGlyph = _r345_t0;
                        var r345_df = r270_DivFrame(r270_para.diversityM, 3);
                        r345_currentGlyph.setWidth(0);
                        r345_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                        r345_currentGlyph.include(r330_InvEShape(1, r345_df, r330_revbody));
                        return void 0;
                    });
                }();
                _r330_t4 = !(_r330_t2 = _r330_t1.next()).done;
            }
            return _r330_t5;
        }());
        (function () {
            var r350_suffix, r350_fSlab, _r350_t2, _r350_t4, _r350_t5, _r350_tag6;
            var r350_ueUPart = function (r351_df, r351_fSlab) {
                var _r351_t0, _r351_t1;
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r354_t2;
                    var _r354_t1 = this;
                    var r354_currentGlyph = _r354_t1;
                    var _r354_t0 = r270_SubDfAndShift(0, r351_df, 0);
                    var r354_subDf = _r354_t0[0];
                    var r354_ada = r354_subDf.archDepthA(r270_SmallArchDepth, r351_df.mvs);
                    var r354_adb = r354_subDf.archDepthB(r270_SmallArchDepth, r351_df.mvs);
                    var r354_abarRight = r351_df.middle + r270_HSwToV(0.5 * r351_df.mvs);
                    r354_currentGlyph.include(r270_nShoulder(new r270_xn$NamedParameterPair$2Lrc9b('left', r354_abarRight), new r270_xn$NamedParameterPair$2Lrc9b('right', r351_df.rightSB - r270_OX), new r270_xn$NamedParameterPair$2Lrc9b('stroke', r351_df.mvs), new r270_xn$NamedParameterPair$2Lrc9b('ada', r354_adb), new r270_xn$NamedParameterPair$2Lrc9b('adb', r354_adb)));
                    r354_currentGlyph.include(r270_FlipAround(r351_df.middle, r270_XH / 2));
                    if (r351_fSlab)
                        r354_currentGlyph.include(r270_HSerif.lt(r351_df.leftSB, r270_XH, r270_SideJut));
                    return void 0;
                });
            };
            var r350_Config = {
                'serifed': [true],
                'serifless': [false]
            };
            var _r350_t0 = Object.entries(r350_Config)[Symbol.iterator]();
            var _r350_t1 = void 0;
            var _r350_t3 = !(_r350_t1 = _r350_t0.next()).done;
            while (_r350_t3) {
                _r350_t2 = _r350_t1.value;
                r350_suffix = _r350_t2[0];
                r350_fSlab = _r350_t2[1][0];
                _r350_t2[1];
                _r350_t4 = function () {
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('ue/u.' + r350_suffix, null, function () {
                        var _r368_t1;
                        var _r368_t0 = this;
                        var r368_currentGlyph = _r368_t0;
                        var r368_df = r368_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                        r368_currentGlyph.include(r368_df.markSet.e());
                        r368_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r368_currentGlyph.include(r350_ueUPart(r368_df, r350_fSlab));
                        return void 0;
                    });
                }();
                _r350_t3 = !(_r350_t1 = _r350_t0.next()).done;
            }
            return _r350_t4;
        }());
        (function () {
            var r374_suffix, r374_sty, r374_styBot, _r374_t3, _r374_t5, _r374_t6, _r374_tag7;
            var _r374_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-C'].resolve();
            var r374_CLetterForm = _r374_t0.CLetterForm;
            var r374_CConfig = _r374_t0.CConfig;
            var r374_openOShape = function (r376_df, r376_sty, r376_styBot) {
                var _r376_t0, _r376_t1;
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r379_t2;
                    var _r379_t1 = this;
                    var r379_currentGlyph = _r379_t1;
                    var _r379_t0 = r270_SubDfAndShift(0, r376_df, r270_OX);
                    var r379_subDf = _r379_t0[0];
                    var r379_ada = r379_subDf.archDepthA(r270_SmallArchDepth, r376_df.mvs);
                    var r379_adb = r379_subDf.archDepthB(r270_SmallArchDepth, r376_df.mvs);
                    var r379_lf = r374_CLetterForm(r379_subDf, r376_sty, r376_styBot, r270_XH, 0, new r270_xn$NamedParameterPair$2Lrc9b('ada', r379_subDf.archDepthA(r270_SmallArchDepth, r376_df.mvs)), new r270_xn$NamedParameterPair$2Lrc9b('adb', r379_subDf.archDepthB(r270_SmallArchDepth, r376_df.mvs)), new r270_xn$NamedParameterPair$2Lrc9b('sw', r376_df.mvs));
                    r379_currentGlyph.include(r379_lf.full());
                    r379_currentGlyph.include(r270_FlipAround(r379_subDf.width / 2, r270_XH / 2));
                    return void 0;
                });
            };
            var r374_xn$SLABFLAT$5sIl = 3;
            var r374_EsTeLeftShape = function (r385_df, r385_styBot) {
                var _r385_t0, _r385_t1;
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r388_t1;
                    var _r388_t0 = this;
                    var r388_currentGlyph = _r388_t0;
                    var r388_subDf = r385_df.sliceFine(3, 2, 1 / 3);
                    var r388_ada = r388_subDf.archDepthA(r270_SmallArchDepth, r385_df.mvs);
                    var r388_adb = r388_subDf.archDepthB(r270_SmallArchDepth, r385_df.mvs);
                    var r388_lf = r374_CLetterForm(r388_subDf, r374_xn$SLABFLAT$5sIl, r385_styBot, r270_XH, 0, new r270_xn$NamedParameterPair$2Lrc9b('ada', r388_subDf.archDepthA(r270_SmallArchDepth, r385_df.mvs)), new r270_xn$NamedParameterPair$2Lrc9b('adb', r388_subDf.archDepthB(r270_SmallArchDepth, r385_df.mvs)), new r270_xn$NamedParameterPair$2Lrc9b('sw', r385_df.mvs));
                    r388_currentGlyph.include(r388_lf.full());
                    return void 0;
                });
            };
            var _r374_t1 = Object.entries(r374_CConfig)[Symbol.iterator]();
            var _r374_t2 = void 0;
            var _r374_t4 = !(_r374_t2 = _r374_t1.next()).done;
            while (_r374_t4) {
                _r374_t3 = _r374_t2.value;
                r374_suffix = _r374_t3[0];
                r374_sty = _r374_t3[1][0];
                r374_styBot = _r374_t3[1][1];
                _r374_t3[1];
                _r374_t5 = function () {
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('oeOpenO/left.' + r374_suffix, null, function () {
                        var _r398_t1;
                        var _r398_t0 = this;
                        var r398_currentGlyph = _r398_t0;
                        var r398_df = r398_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                        r398_currentGlyph.include(r398_df.markSet.e());
                        r398_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r398_currentGlyph.include(r374_openOShape(r398_df, r374_sty, r374_styBot));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/este/left.' + r374_suffix, null, function () {
                        var _r405_t1;
                        var _r405_t0 = this;
                        var r405_currentGlyph = _r405_t0;
                        var r405_df = r405_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3));
                        r405_currentGlyph.include(r405_df.markSet.e());
                        r405_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r405_currentGlyph.include(r374_EsTeLeftShape(r405_df, r374_styBot));
                        return void 0;
                    });
                }();
                _r374_t4 = !(_r374_t2 = _r374_t1.next()).done;
            }
            return _r374_t5;
        }());
        (function () {
            var r411_suffix, r411_doST, r411_doSB, _r411_t2, _r411_t4, _r411_t5, _r411_tag6;
            var r411_EsTeRightShape = function (r412_df, r412_doTopSerifs, r412_doBottomSerifs) {
                var _r412_t0, _r412_t1;
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var r415_swVJut, r415_midJutCenter, _r415_t1;
                    var _r415_t0 = this;
                    var r415_currentGlyph = _r415_t0;
                    var r415_subDf = r412_df.sliceFine(3, 2, 1 / 3);
                    var r415_l = r415_subDf.rightSB;
                    var r415_m = r1_mix(r412_df.rightSB, r415_subDf.rightSB, 0.5);
                    var r415_r = r412_df.rightSB - 0.75 * r270_OX;
                    r415_currentGlyph.include(r270_VBar.m(r415_m, 0, r270_XH, r412_df.mvs));
                    r415_currentGlyph.include(r270_HBar.t(r415_l, r415_r, r270_XH, r412_df.mvs));
                    if (r412_doTopSerifs) {
                        r415_swVJut = Math.min(r412_df.mvs, 0.625 * (r415_r - r415_m - r270_HSwToV(0.5 * r412_df.mvs)));
                        r415_currentGlyph.include(r270_VSerif.dr(r415_r, r270_XH, r270_VJut, r415_swVJut));
                    }
                    if (r412_doBottomSerifs) {
                        r415_midJutCenter = Math.max(r270_Jut, r1_mix(r270_HSwToV(0.5 * r412_df.mvs), r270_LongJut, 0.6)) * (r415_subDf.width / r412_df.width);
                        r415_currentGlyph.include(r270_tagged('serifMB', r270_HSerif.rb(r415_m, 0, r415_midJutCenter, r412_df.mvs)));
                    }
                    return void 0;
                });
            };
            var r411_TConfig = {
                'serifless': [
                    false,
                    false
                ],
                'motionSerifed': [
                    true,
                    false
                ],
                'serifed': [
                    true,
                    true
                ]
            };
            var _r411_t0 = Object.entries(r411_TConfig)[Symbol.iterator]();
            var _r411_t1 = void 0;
            var _r411_t3 = !(_r411_t1 = _r411_t0.next()).done;
            while (_r411_t3) {
                _r411_t2 = _r411_t1.value;
                r411_suffix = _r411_t2[0];
                r411_doST = _r411_t2[1][0];
                r411_doSB = _r411_t2[1][1];
                _r411_t2[1];
                _r411_t4 = function () {
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/este/right.' + r411_suffix, null, function () {
                        var _r425_t1;
                        var _r425_t0 = this;
                        var r425_currentGlyph = _r425_t0;
                        var r425_df = r270_DivFrame(r270_para.diversityM, 3);
                        r425_currentGlyph.setWidth(0);
                        r425_currentGlyph.setMarkAnchor('cvDecompose', 0, 0);
                        r425_currentGlyph.include(r411_EsTeRightShape(r425_df, r411_doST, r411_doSB));
                        return void 0;
                    });
                }();
                _r411_t3 = !(_r411_t1 = _r411_t0.next()).done;
            }
            return _r411_t4;
        }());
        (function () {
            var r430_suffix, r430_DrawAt, r430_kdr, _r430_t3, _r430_t5, _r430_t6, _r430_tag7;
            var _r430_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Overlay'].resolve();
            var r430_InnerDot = _r430_t0.InnerDot;
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfSlashOverlay', null, function () {
                var _r434_t2;
                var _r434_t1 = this;
                var r434_currentGlyph = _r434_t1;
                var r434_fine = 0.375 * r270_OverlayStroke;
                var _r434_t0 = r270_SubDfAndShift(1, r270_DivFrame(r270_para.diversityM, 3), r270_OX);
                var r434_subDf = _r434_t0[0];
                var r434_shift = _r434_t0[1];
                r434_currentGlyph.include(r270_dispiro(r270_flat(r434_shift + r434_subDf.leftSB + r270_OX + r434_fine, r1_mix(r270_XH, 0, 1.05), r270_widths.center(2 * r434_fine)), r270_curl(r434_shift + r434_subDf.rightSB - r270_OX - r434_fine, r1_mix(0, r270_XH, 1.05))));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('rightHalfBarOverlay', null, function () {
                var _r438_t2;
                var _r438_t1 = this;
                var r438_currentGlyph = _r438_t1;
                var _r438_t0 = r270_SubDfAndShift(1, r270_DivFrame(r270_para.diversityM, 3), r270_OX);
                var r438_subDf = _r438_t0[0];
                var r438_shift = _r438_t0[1];
                r438_currentGlyph.include(r270_HBar.m(r438_shift + r438_subDf.leftSB + r270_OX + 1, r438_shift + r438_subDf.rightSB - r270_OX - 1, r270_XH * 0.5, r270_OverlayStroke));
                return void 0;
            });
            var r430_OODots = function (r440_df, r440_kHeight, r440_fRound, r440_kdr) {
                var _r440_t0, _r440_t1;
                return function () {
                    var _r442_t2;
                    var _r442_t1 = this;
                    var r442_currentGlyph = _r442_t1;
                    var _r442_t0 = r270_SubDfAndShift(0, r440_df, r270_OX);
                    var r442_subDf = _r442_t0[0];
                    var r442_shift = _r442_t0[1];
                    var r442_space = r430_InnerDot.spaceOfDf(r442_subDf);
                    var r442_kHeight2 = Math.sqrt(r430_InnerDot.spaceOfDf(r270_DivFrame(1)) / r442_space) * r440_kHeight;
                    var r442_offset = 0.5 * (r442_space + r270_HSwToV(r440_df.mvs));
                    r442_currentGlyph.include(r430_InnerDot(-r442_offset, 0, r442_kHeight2, r440_fRound, r440_kdr, r442_space, 3));
                    r442_currentGlyph.include(r430_InnerDot(r442_offset, 0, r442_kHeight2, r440_fRound, r440_kdr, r442_space, 3));
                    return void 0;
                };
            };
            var _r430_t1 = Object.entries(r270_DotVariants)[Symbol.iterator]();
            var _r430_t2 = void 0;
            var _r430_t4 = !(_r430_t2 = _r430_t1.next()).done;
            while (_r430_t4) {
                _r430_t3 = _r430_t2.value;
                r430_suffix = _r430_t3[0];
                r430_DrawAt = _r430_t3[1][0];
                r430_kdr = _r430_t3[1][1];
                _r430_t3[1];
                _r430_t5 = function () {
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('OODots.' + r430_suffix, null, function () {
                        var _r450_t1;
                        var _r450_t0 = this;
                        var r450_currentGlyph = _r450_t0;
                        r450_currentGlyph.setWidth(0);
                        r450_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        var r450_df = r270_DivFrame(r270_para.diversityM, 3);
                        r450_currentGlyph.include(r430_OODots(r450_df, 2, r430_DrawAt === r270_DotAt, r430_kdr));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('ooDots.' + r430_suffix, null, function () {
                        var _r456_t1;
                        var _r456_t0 = this;
                        var r456_currentGlyph = _r456_t0;
                        r456_currentGlyph.setWidth(0);
                        r456_currentGlyph.setMarkAnchor('slash', 0, 0, 0, 0);
                        var r456_df = r270_DivFrame(r270_para.diversityM, 3);
                        r456_currentGlyph.include(r430_OODots(r456_df, 1.5, r430_DrawAt === r270_DotAt, r430_kdr));
                        return void 0;
                    });
                }();
                _r430_t4 = !(_r430_t2 = _r430_t1.next()).done;
            }
            return _r430_t5;
        }());
        r270_xn$selectvariant$7Hrq('aa', 42803, new r270_xn$NamedParameterPair$2Lrc9b('follow', 'a/turnABase'));
        r270_xn$selectvariant$7Hrq('ae/e', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r270_xn$selectvariant$7Hrq('aeInvE/right', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'e'));
        r270_xn$selectvariant$7Hrq('ue/u');
        r270_xn$selectvariant$7Hrq('oeOpenO/left', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'c'));
        r270_xn$derivecomposites$7Hrq('ae', 230, 'ae/a', 'ae/e');
        r270_xn$derivecomposites$7Hrq('oe', 339, 'oe/o', 'ae/e');
        r270_xn$derivecomposites$7Hrq('ue', 7531, 'ue/u', 'ae/e');
        r270_xn$derivecomposites$7Hrq('ao', 42805, 'ae/a', 'ao/o');
        r270_xn$derivecomposites$7Hrq('oo', 42831, 'oe/o', 'ao/o');
        r270_xn$derivecomposites$7Hrq('uo', 43875, 'ue/u', 'ao/o');
        r270_xn$derivecomposites$7Hrq('oeOpenO', 43874, 'oeOpenO/left', 'ae/e');
        r270_xn$derivecomposites$7Hrq('aeInvE', 43825, 'ae/a', 'aeInvE/right');
        r270_xn$derivecomposites$7Hrq('oeInv', 43840, 'oe/o', 'aeInvE/right');
        r270_alias('cyrl/ae', 1237, 'ae');
        r270_alias('cyrl/oo', 42649, 'oo');
        r270_turned('turnae', 7426, 'ae', r270_DivFrame(r270_para.diversityM, 3).middle, r270_XH / 2);
        r270_turned('turnoe', 7444, 'oe', r270_DivFrame(r270_para.diversityM, 3).middle, r270_XH / 2);
        r270_xn$derivecomposites$7Hrq('turnoeSlashO', 43841, 'turnoe', 'rightHalfSlashOverlay');
        r270_xn$derivecomposites$7Hrq('turnoeBarO', 43842, 'turnoe', 'rightHalfBarOverlay');
        r270_xn$derivecomposites$7Hrq('OO', 42830, 'OO/left', 'OO/right');
        r270_alias('cyrl/OO', 42648, 'OO');
        r270_xn$selectvariant$7Hrq('OODots', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r270_xn$selectvariant$7Hrq('ooDots', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'diacriticDot'));
        r270_xn$derivecomposites$7Hrq('cyrl/OOBinocular', 42604, 'cyrl/OO', 'OODots');
        r270_xn$derivecomposites$7Hrq('cyrl/ooBinocular', 42605, 'cyrl/oo', 'ooDots');
        r270_xn$selectvariant$7Hrq('cyrl/este/left', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cBottomSerifOnly'));
        r270_xn$selectvariant$7Hrq('cyrl/este/right', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'T'));
        return r270_xn$derivecomposites$7Hrq('cyrl/este', null, 'cyrl/este/left', 'cyrl/este/right');
    });
    return void 0;
});
