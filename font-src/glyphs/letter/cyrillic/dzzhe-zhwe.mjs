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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Dzzhe-Zhwe', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t7, _r270_t8, _r270_t9, _r270_tag10, _r270_t11, _r270_tag12, _r270_t13, _r270_tag14;
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
        var r270_Hook = _r270_t1.Hook;
        var r270_SHook = _r270_t1.SHook;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_SideJut = _r270_t1.SideJut;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_StrokeWidthBlend = _r270_t1.StrokeWidthBlend;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_straight = _r270_t2.straight;
        var r270_dispiro = _r270_t2.dispiro;
        var r270_xn$spirooutline$1aao = _r270_t2['spiro-outline'];
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_difference = _r270_t3.difference;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_HBar = _r270_t4.HBar;
        var r270_xn$withtransform$5sIl = _r270_t4['with-transform'];
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Greek-Lower-Epsilon'].resolve();
        var r270_CyrZe = _r270_t6.CyrZe;
        var r270_SubDfDim = function (r274_pShift, r274_keeps, r274_df, r274__o) {
            var _r274_t0, _r274_t1;
            var r274_subDf = r274_df.slice(4, r274_keeps, r274__o);
            var r274_subDfFullShift = (r274_df.rightSB - r274_subDf.rightSB) / (4 - r274_keeps);
            var r274_shift = r274_pShift * r274_subDfFullShift;
            var r274_sw = r270_AdviceStroke(3.3, r274_df.slice(4, 3, r274__o).div);
            return {
                'subDf': r274_subDf,
                'shift': r274_shift,
                'sw': r274_sw
            };
        };
        (function () {
            var _r276_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
            var r276_ExtendBelowBaseAnchors = _r276_t0.ExtendBelowBaseAnchors;
            var _r276_t1 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-De'].resolve();
            var r276_CyrDeShape = _r276_t1.CyrDeShape;
            var r276_CyrDeItalicShapeT = _r276_t1.CyrDeItalicShapeT;
            var r276_CyrDzzheDeShape = function (r279_df, r279_top) {
                var _r279_t0, _r279_t1;
                return function () {
                    var _r281_t2;
                    var _r281_t1 = this;
                    var r281_currentGlyph = _r281_t1;
                    var _r281_t0 = r270_SubDfDim(0, 2, r279_df, r270_OX);
                    var r281_subDf = _r281_t0.subDf;
                    var r281_sw = _r281_t0.sw;
                    var r281_left = r270_SLAB ? r281_subDf.leftSB + 0.5 * r270_SideJut : r281_subDf.leftSB;
                    r281_currentGlyph.include(r276_CyrDeShape(r279_top, r281_left, r281_subDf.rightSB, r281_sw));
                    return void 0;
                };
            };
            var r276_CyrDzzheDeItalicShape = function (r283_df) {
                var _r283_t0, _r283_t1;
                return function () {
                    var _r285_t2;
                    var _r285_t1 = this;
                    var r285_currentGlyph = _r285_t1;
                    var _r285_t0 = r270_SubDfDim(0, 2, r283_df, r270_OX);
                    var r285_subDf = _r285_t0.subDf;
                    var r285_sw = _r285_t0.sw;
                    r285_currentGlyph.include(r276_CyrDeItalicShapeT(r270_dispiro, r285_subDf, r285_sw));
                    return void 0;
                };
            };
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dzzhe/left', null, function () {
                var _r289_t1;
                var _r289_t0 = this;
                var r289_currentGlyph = _r289_t0;
                var r289_df = r289_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                r289_currentGlyph.include(r289_df.markSet.capital());
                r289_currentGlyph.include(r276_ExtendBelowBaseAnchors(-r270_LongJut + 0.5 * r270_Stroke));
                r289_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r289_currentGlyph.include(r276_CyrDzzheDeShape(r289_df, r270_CAP));
                return void 0;
            });
            r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.upright/left', null, function () {
                var _r297_t1;
                var _r297_t0 = this;
                var r297_currentGlyph = _r297_t0;
                var r297_df = r297_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                r297_currentGlyph.include(r297_df.markSet.e());
                r297_currentGlyph.include(r276_ExtendBelowBaseAnchors(-r270_LongJut + 0.5 * r270_Stroke));
                r297_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r297_currentGlyph.include(r276_CyrDzzheDeShape(r297_df, r270_XH));
                return void 0;
            });
            return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.italic/left', null, function () {
                var _r305_t1;
                var _r305_t0 = this;
                var r305_currentGlyph = _r305_t0;
                var r305_df = r305_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                r305_currentGlyph.include(r305_df.markSet.b());
                r305_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r305_currentGlyph.include(r276_CyrDzzheDeItalicShape(r305_df));
                return void 0;
            });
        }());
        (function () {
            var r311_suffix, r311_slabTop, r311_slabBot, _r311_t2, _r311_t4, _r311_t5, _r311_tag6;
            var r311_xn$SLABNONE$5sIl = 0;
            var r311_xn$SLABCLASSICAL$5sIl = 1;
            var r311_xn$SLABINWARD$5sIl = 2;
            var r311_ZeConfig = {
                'serifless': [
                    r311_xn$SLABNONE$5sIl,
                    r311_xn$SLABNONE$5sIl
                ],
                'unilateralSerifed': [
                    r311_xn$SLABCLASSICAL$5sIl,
                    r311_xn$SLABNONE$5sIl
                ],
                'bilateralSerifed': [
                    r311_xn$SLABCLASSICAL$5sIl,
                    r311_xn$SLABCLASSICAL$5sIl
                ],
                'unilateralInwardSerifed': [
                    r311_xn$SLABINWARD$5sIl,
                    r311_xn$SLABNONE$5sIl
                ],
                'bilateralInwardSerifed': [
                    r311_xn$SLABINWARD$5sIl,
                    r311_xn$SLABINWARD$5sIl
                ]
            };
            var r311_CyrZhweZeShape = function (r312_slabTop, r312_slabBot, r312_df, r312_top, r312_hook) {
                var _r312_t0, _r312_t1;
                return function () {
                    var _r314_t2;
                    var _r314_t1 = this;
                    var r314_currentGlyph = _r314_t1;
                    var _r314_t0 = r270_SubDfDim(0, 2, r312_df, r270_OX);
                    var r314_subDf = _r314_t0.subDf;
                    var r314_sw = _r314_t0.sw;
                    var r314_ze = r270_CyrZe(r312_slabTop, r312_slabBot, r312_top, 0, r314_subDf.leftSB, r314_subDf.rightSB, 0.65, r312_hook, r314_sw);
                    r314_currentGlyph.include(r314_ze.Shape());
                    r314_currentGlyph.include(r314_ze.AutoStartSerifL());
                    r314_currentGlyph.include(r314_ze.AutoEndSerifL());
                    return void 0;
                };
            };
            var _r311_t0 = Object.entries(r311_ZeConfig)[Symbol.iterator]();
            var _r311_t1 = void 0;
            var _r311_t3 = !(_r311_t1 = _r311_t0.next()).done;
            while (_r311_t3) {
                _r311_t2 = _r311_t1.value;
                r311_suffix = _r311_t2[0];
                r311_slabTop = _r311_t2[1][0];
                r311_slabBot = _r311_t2[1][1];
                _r311_t2[1];
                _r311_t4 = function () {
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Zhwe/left.' + r311_suffix, null, function () {
                        var _r323_t1;
                        var _r323_t0 = this;
                        var r323_currentGlyph = _r323_t0;
                        var r323_df = r323_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                        r323_currentGlyph.include(r323_df.markSet.capital());
                        r323_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r323_currentGlyph.include(r311_CyrZhweZeShape(r311_slabTop, r311_slabBot, r323_df, r270_CAP, r270_Hook));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zhwe/left.' + r311_suffix, null, function () {
                        var _r330_t1;
                        var _r330_t0 = this;
                        var r330_currentGlyph = _r330_t0;
                        var r330_df = r330_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                        r330_currentGlyph.include(r330_df.markSet.e());
                        r330_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r330_currentGlyph.include(r311_CyrZhweZeShape(r311_slabTop, r311_slabBot, r330_df, r270_XH, r270_SHook));
                        return void 0;
                    });
                }();
                _r311_t3 = !(_r311_t1 = _r311_t0.next()).done;
            }
            return _r311_t4;
        }());
        (function () {
            var r336_suffix, r336_legShape, r336_fSlab, r336_fMidSlab, _r336_t4, _r336_t6, _r336_t7, _r336_tag8;
            var _r336_t0 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-Zhe'].resolve();
            var r336_Zhe = _r336_t0.Zhe;
            var r336_CyrRightZheShape = function (r338_legShape, r338_fSlab, r338_fMidSlab, r338_df, r338_top, r338_barLeft) {
                var _r338_t0, _r338_t1;
                return function () {
                    var _r340_t2;
                    var _r340_t1 = this;
                    var r340_currentGlyph = _r340_t1;
                    var _r340_t0 = r270_SubDfDim(1, 3, r338_df, r270_OX);
                    var r340_subDf = _r340_t0.subDf;
                    var r340_shift = _r340_t0.shift;
                    var r340_sw = _r340_t0.sw;
                    r340_currentGlyph.include(r270_xn$withtransform$5sIl(r270_ApparentTranslate(r340_shift, 0), r336_Zhe.HalfShape(r338_legShape, r338_fSlab, r338_fMidSlab, r340_subDf, 0, r338_top, r338_top)));
                    r340_currentGlyph.include(r270_HBar.m(r338_barLeft, r340_shift + r340_subDf.middle, 0.5 * r338_top, r340_sw));
                    return void 0;
                };
            };
            var r336_DzzheLeft = function (r343_df) {
                var _r343_t1, _r343_t2;
                var _r343_t0 = r270_SubDfDim(0, 2, r343_df, r270_OX);
                var r343_subDf = _r343_t0.subDf;
                var r343_sw = _r343_t0.sw;
                var r343_swInner = r343_sw * r270_AdviceStroke(2.75) / r270_Stroke;
                return r1_mix(r343_subDf.leftSB, r343_subDf.rightSB, r270_StrokeWidthBlend(0.95, 0.96)) - r270_HSwToV(0.5 * r343_swInner);
            };
            var r336_ZhweZheShape = function (r344_legShape, r344_fSlab, r344_fMidSlab, r344_df, r344_top, r344_hook) {
                var _r344_t0, _r344_t1;
                return function () {
                    var _r346_t2;
                    var _r346_t1 = this;
                    var r346_currentGlyph = _r346_t1;
                    var _r346_t0 = r270_SubDfDim(0, 2, r344_df, r270_OX);
                    var r346_subDf = _r346_t0.subDf;
                    var r346_sw = _r346_t0.sw;
                    var r346_ze = r270_CyrZe(0, 0, r344_top, 0, r346_subDf.leftSB, r346_subDf.rightSB, 0.65, r344_hook, 0.5 * r346_sw);
                    r346_currentGlyph.include(r270_difference(r336_CyrRightZheShape(r344_legShape, r344_fSlab, r344_fMidSlab, r344_df, r344_top, r346_subDf.middle), r346_ze.ShapeMask()));
                    return void 0;
                };
            };
            var _r336_t1 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Cyrillic-De'].resolve();
            var r336_CyrDeItalicShapeT = _r336_t1.CyrDeItalicShapeT;
            var r336_DzzheZheItalicShape = function (r349_legShape, r349_fSlab, r349_fMidSlab, r349_df, r349_top) {
                var _r349_t0, _r349_t1;
                return function () {
                    var _r351_t2;
                    var _r351_t1 = this;
                    var r351_currentGlyph = _r351_t1;
                    var _r351_t0 = r270_SubDfDim(0, 2, r349_df, r270_OX);
                    var r351_subDf = _r351_t0.subDf;
                    var r351_sw = _r351_t0.sw;
                    r351_currentGlyph.include(r270_difference(r336_CyrRightZheShape(r349_legShape, r349_fSlab, r349_fMidSlab, r349_df, r349_top, r351_subDf.middle), r336_CyrDeItalicShapeT(r270_xn$spirooutline$1aao, r351_subDf, r351_sw)));
                    return void 0;
                };
            };
            var r336_ZheConfig = {
                'straight': [
                    r336_Zhe.StraightLegs,
                    r270_SLAB,
                    r270_SLAB
                ],
                'curly': [
                    r336_Zhe.CurlyLegs,
                    r270_SLAB,
                    r270_SLAB
                ],
                'symmetricTouching': [
                    r336_Zhe.TouchingLegs,
                    r270_SLAB,
                    r270_SLAB
                ],
                'symmetricConnected': [
                    r336_Zhe.ConnectingLegs,
                    r270_SLAB,
                    r270_SLAB
                ],
                'cursive': [
                    r336_Zhe.CursiveLegs,
                    false,
                    r270_SLAB
                ]
            };
            var _r336_t2 = Object.entries(r336_ZheConfig)[Symbol.iterator]();
            var _r336_t3 = void 0;
            var _r336_t5 = !(_r336_t3 = _r336_t2.next()).done;
            while (_r336_t5) {
                _r336_t4 = _r336_t3.value;
                r336_suffix = _r336_t4[0];
                r336_legShape = _r336_t4[1][0];
                r336_fSlab = _r336_t4[1][1];
                r336_fMidSlab = _r336_t4[1][2];
                _r336_t4[1];
                _r336_t6 = function () {
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Dzzhe/right.' + r336_suffix, null, function () {
                        var _r358_t1;
                        var _r358_t0 = this;
                        var r358_currentGlyph = _r358_t0;
                        var r358_df = r358_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                        r358_currentGlyph.include(r358_df.markSet.capital());
                        r358_currentGlyph.include(r336_CyrRightZheShape(r336_legShape, r336_fSlab, r336_fMidSlab, r358_df, r270_CAP, r336_DzzheLeft(r358_df)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.upright/right.' + r336_suffix, null, function () {
                        var _r364_t1;
                        var _r364_t0 = this;
                        var r364_currentGlyph = _r364_t0;
                        var r364_df = r364_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                        r364_currentGlyph.include(r364_df.markSet.e());
                        r364_currentGlyph.include(r336_CyrRightZheShape(r336_legShape, r336_fSlab, r336_fMidSlab, r364_df, r270_XH, r336_DzzheLeft(r364_df)));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/dzzhe.italic/right.' + r336_suffix, null, function () {
                        var _r370_t1;
                        var _r370_t0 = this;
                        var r370_currentGlyph = _r370_t0;
                        var r370_df = r370_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                        r370_currentGlyph.include(r370_df.markSet.e());
                        r370_currentGlyph.include(r336_DzzheZheItalicShape(r336_legShape, r336_fSlab, r336_fMidSlab, r370_df, r270_XH));
                        return void 0;
                    });
                    r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Zhwe/right.' + r336_suffix, null, function () {
                        var _r376_t1;
                        var _r376_t0 = this;
                        var r376_currentGlyph = _r376_t0;
                        var r376_df = r376_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                        r376_currentGlyph.include(r376_df.markSet.capital());
                        r376_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r376_currentGlyph.include(r336_ZhweZheShape(r336_legShape, r336_fSlab, r336_fMidSlab, r376_df, r270_CAP, r270_Hook));
                        return void 0;
                    });
                    return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/zhwe/right.' + r336_suffix, null, function () {
                        var _r383_t1;
                        var _r383_t0 = this;
                        var r383_currentGlyph = _r383_t0;
                        var r383_df = r383_currentGlyph.include(r270_DivFrame(r270_para.diversityM, 3.5));
                        r383_currentGlyph.include(r383_df.markSet.e());
                        r383_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                        r383_currentGlyph.include(r336_ZhweZheShape(r336_legShape, r336_fSlab, r336_fMidSlab, r383_df, r270_XH, r270_SHook));
                        return void 0;
                    });
                }();
                _r336_t5 = !(_r336_t3 = _r336_t2.next()).done;
            }
            return _r336_t6;
        }());
        r270_xn$selectvariant$7Hrq('cyrl/Dzzhe/right', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Zhe'));
        r270_xn$selectvariant$7Hrq('cyrl/dzzhe.upright/right', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
        r270_xn$selectvariant$7Hrq('cyrl/dzzhe.italic/right', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
        r270_xn$selectvariant$7Hrq('cyrl/Zhwe/right', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Zhe'));
        r270_xn$selectvariant$7Hrq('cyrl/zhwe/right', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/zhe'));
        r270_xn$selectvariant$7Hrq('cyrl/Zhwe/left', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/Ze'));
        r270_xn$selectvariant$7Hrq('cyrl/zhwe/left', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/ze'));
        r270_xn$derivecomposites$7Hrq('cyrl/Dzzhe', 1322, 'cyrl/Dzzhe/left', 'cyrl/Dzzhe/right');
        r270_xn$derivecomposites$7Hrq('cyrl/dzzhe.upright', null, 'cyrl/dzzhe.upright/left', 'cyrl/dzzhe.upright/right');
        r270_xn$derivecomposites$7Hrq('cyrl/dzzhe.italic', null, 'cyrl/dzzhe.italic/left', 'cyrl/dzzhe.italic/right');
        r270_xn$derivecomposites$7Hrq('cyrl/Zhwe', 42628, 'cyrl/Zhwe/left', 'cyrl/Zhwe/right');
        return r270_xn$derivecomposites$7Hrq('cyrl/zhwe', 42629, 'cyrl/zhwe/left', 'cyrl/zhwe/right');
    });
    return void 0;
});
