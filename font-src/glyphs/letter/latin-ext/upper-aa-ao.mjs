'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/util/mask-bit.mjs';
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
var r1_bitOr = _r1_t9.bitOr;
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
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Upper-AA-AO', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_prefix, r271_code, r271_mk, r271_height, _r271_t11, _r271_t12, _r271_t13, _r271_t14, _r271_tag15;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_para = _r271_t0.para;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_ApparentTranslate = _r271_t1.ApparentTranslate;
        var r271_OX = _r271_t1.OX;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_AdviceStroke = _r271_t1.AdviceStroke;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_intersection = _r271_t3.intersection;
        var r271_difference = _r271_t3.difference;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_xn$withtransform$5sIl = _r271_t4['with-transform'];
        var r271_MaskAbove = _r271_t4.MaskAbove;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_xn$derivemultipartglyphs$7Hrq65 = _r271_t5['derive-multi-part-glyphs'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Upper-F'].resolve();
        var r271_EFVJutLength = _r271_t6.EFVJutLength;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Upper-A'].resolve();
        var r271_AMaskShape = _r271_t7.AMaskShape;
        var r271_ALetterShape = _r271_t7.ALetterShape;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-AE-OE'].resolve();
        var r271_SubDfAndShift = _r271_t8.SubDfAndShift;
        var r271_AHalfShape = function (r277_pShift, r277_df, r277_top, r277_fStraightBar, r277_slabKind) {
            var _r277_t1, _r277_t2;
            var _r277_t0 = r271_SubDfAndShift(r277_pShift, r277_df);
            var r277_subDf = _r277_t0[0];
            var r277_shift = _r277_t0[1];
            return r271_xn$withtransform$5sIl(r271_ApparentTranslate(r277_shift, 0), r271_ALetterShape(r277_subDf, r277_fStraightBar, r277_slabKind, r277_top, r277_df.mvs));
        };
        var r271_AHalfShapeMask = function (r278_pShift, r278_df, r278_top, r278_fStraightBar, r278_slabKind) {
            var _r278_t1, _r278_t2;
            var _r278_t0 = r271_SubDfAndShift(r278_pShift, r278_df);
            var r278_subDf = _r278_t0[0];
            var r278_shift = _r278_t0[1];
            return r271_xn$withtransform$5sIl(r271_ApparentTranslate(r278_shift, 0), r271_AMaskShape(r278_subDf, r278_fStraightBar, r278_top, r278_df.mvs));
        };
        var r271_xn$SLABNONE$5sIl = 0;
        var r271_xn$SLABTOP$5sIl = 1;
        var r271_xn$SLABLEFT$5sIl = 2;
        var r271_xn$SLABRIGHT$5sIl = 4;
        var r271_ALetters = {
            'AA': [
                42802,
                'capital',
                r271_CAP
            ],
            'smcpAA': [
                null,
                'e',
                r271_XH
            ]
        };
        var r271_AConfig = {
            'straightSerifless': [
                true,
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'curlySerifless': [
                false,
                r271_xn$SLABNONE$5sIl,
                r271_xn$SLABNONE$5sIl
            ],
            'straightTopSerifed': [
                true,
                r271_xn$SLABTOP$5sIl,
                r271_xn$SLABTOP$5sIl
            ],
            'curlyTopSerifed': [
                false,
                r271_xn$SLABTOP$5sIl,
                r271_xn$SLABTOP$5sIl
            ],
            'straightBaseSerifed': [
                true,
                r271_xn$SLABLEFT$5sIl,
                r271_xn$SLABRIGHT$5sIl
            ],
            'curlyBaseSerifed': [
                false,
                r271_xn$SLABLEFT$5sIl,
                r271_xn$SLABRIGHT$5sIl
            ],
            'straightTriSerifed': [
                true,
                r1_bitOr(r271_xn$SLABTOP$5sIl, r271_xn$SLABLEFT$5sIl),
                r1_bitOr(r271_xn$SLABTOP$5sIl, r271_xn$SLABRIGHT$5sIl)
            ],
            'curlyTriSerifed': [
                false,
                r1_bitOr(r271_xn$SLABTOP$5sIl, r271_xn$SLABLEFT$5sIl),
                r1_bitOr(r271_xn$SLABTOP$5sIl, r271_xn$SLABRIGHT$5sIl)
            ]
        };
        var _r271_t9 = Object.entries(r271_ALetters)[Symbol.iterator]();
        var _r271_t10 = void 0;
        while (!(_r271_t10 = _r271_t9.next()).done) {
            _r271_t11 = _r271_t10.value;
            r271_prefix = _r271_t11[0];
            r271_code = _r271_t11[1][0];
            r271_mk = _r271_t11[1][1];
            r271_height = _r271_t11[1][2];
            _r271_t11[1];
            (function () {
                var r281_suffix, r281_fStraightBar, r281_skLeft, r281_skRight, _r281_t2, _r281_t3, _r281_tag4;
                var _r281_t0 = Object.entries(r271_AConfig)[Symbol.iterator]();
                var _r281_t1 = void 0;
                while (!(_r281_t1 = _r281_t0.next()).done) {
                    _r281_t2 = _r281_t1.value;
                    r281_suffix = _r281_t2[0];
                    r281_fStraightBar = _r281_t2[1][0];
                    r281_skLeft = _r281_t2[1][1];
                    r281_skRight = _r281_t2[1][2];
                    _r281_t2[1];
                    (function () {
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('' + r271_prefix + '/Left.' + r281_suffix, null, function () {
                            var _r287_t1;
                            var _r287_t0 = this;
                            var r287_currentGlyph = _r287_t0;
                            var r287_df = r287_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3.5));
                            r287_currentGlyph.include(r287_df.markSet[r271_mk]());
                            r287_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                            r287_currentGlyph.include(r271_AHalfShape(0, r287_df, r271_height, r281_fStraightBar, r281_skLeft));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('' + r271_prefix + '/LeftMask.' + r281_suffix, null, function () {
                            var _r294_t1;
                            var _r294_t0 = this;
                            var r294_currentGlyph = _r294_t0;
                            var r294_df = r294_currentGlyph.include(r271_DivFrame(r271_para.diversityM, 3.5));
                            r294_currentGlyph.include(r294_df.markSet[r271_mk]());
                            r294_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                            r294_currentGlyph.include(r271_AHalfShapeMask(0, r294_df, r271_height, r281_fStraightBar, r281_skLeft));
                            return void 0;
                        });
                        r271_xn$createAndSaveGlyphImpl$2Lrc3c('' + r271_prefix + '/Right.' + r281_suffix, null, function () {
                            var _r301_t1;
                            var _r301_t0 = this;
                            var r301_currentGlyph = _r301_t0;
                            var r301_df = r271_DivFrame(r271_para.diversityM, 3.5);
                            r301_currentGlyph.setWidth(0);
                            r301_currentGlyph.include(r301_df.markSet[r271_mk]());
                            r301_currentGlyph.setMarkAnchor('cvDecompose', 0, 0, 0, 0);
                            r301_currentGlyph.include(r271_AHalfShape(1, r301_df, r271_height, r281_fStraightBar, r281_skRight));
                            return void 0;
                        });
                        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('' + r271_prefix + '/RightMask.' + r281_suffix, null, function () {
                            var _r308_t1;
                            var _r308_t0 = this;
                            var r308_currentGlyph = _r308_t0;
                            var r308_df = r271_DivFrame(r271_para.diversityM, 3.5);
                            r308_currentGlyph.setWidth(0);
                            r308_currentGlyph.include(r308_df.markSet[r271_mk]());
                            r308_currentGlyph.setMarkAnchor('cvDecompose', 0, 0, 0, 0);
                            r308_currentGlyph.include(r271_AHalfShapeMask(1, r308_df, r271_height, r281_fStraightBar, r281_skRight));
                            return void 0;
                        });
                    }());
                }
                r271_xn$selectvariant$7Hrq('' + r271_prefix + '/Left', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                r271_xn$selectvariant$7Hrq('' + r271_prefix + '/LeftMask', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                r271_xn$selectvariant$7Hrq('' + r271_prefix + '/Right', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                r271_xn$selectvariant$7Hrq('' + r271_prefix + '/RightMask', new r271_xn$NamedParameterPair$2Lrc9b('follow', 'A'));
                return r271_xn$derivemultipartglyphs$7Hrq65(r271_prefix, r271_code, [
                    '' + r271_prefix + '/Left',
                    '' + r271_prefix + '/LeftMask',
                    '' + r271_prefix + '/Right',
                    '' + r271_prefix + '/RightMask'
                ], function (r317_srcs, r317_gr) {
                    var _r317_t0, _r317_t1;
                    return function () {
                        var _r319_t2;
                        var _r319_t1 = this;
                        var r319_currentGlyph = _r319_t1;
                        var r319_df = r271_DivFrame(r271_para.diversityM, 3.5);
                        var r319_topSerifGap = Math.max(0.1 * (r319_df.rightSB - r319_df.leftSB), r271_AdviceStroke(6));
                        var _r319_t0 = r317_srcs;
                        var r319_left = _r319_t0[0];
                        var r319_leftMask = _r319_t0[1];
                        var r319_right = _r319_t0[2];
                        var r319_rightMask = _r319_t0[3];
                        r319_currentGlyph.include(r271_xn$referglyph$1aao(r319_left), r271_AS_BASE, r271_ALSO_METRICS);
                        r319_currentGlyph.include(r271_difference(r271_xn$referglyph$1aao(r319_right), r271_xn$referglyph$1aao(r319_leftMask), r271_difference(r271_intersection(r271_MaskAbove(r271_height - r271_Stroke), r271_xn$withtransform$5sIl(r271_ApparentTranslate(r319_topSerifGap, 0), r271_xn$referglyph$1aao(r319_leftMask))), r271_xn$withtransform$5sIl(r271_ApparentTranslate(r271_OX - 0.1, 0), r271_xn$referglyph$1aao(r319_rightMask)))));
                        return void 0;
                    };
                });
            }());
        }
        return r271_xn$derivemultipartglyphs$7Hrq65('AO', 42804, [
            'AA/Left',
            'AA/LeftMask',
            'OO/right'
        ], function (r322_srcs, r322_gr) {
            var _r322_t0, _r322_t1;
            return function () {
                var _r324_t2;
                var _r324_t1 = this;
                var r324_currentGlyph = _r324_t1;
                var r324_df = r271_DivFrame(r271_para.diversityM, 3.5);
                var r324_topSerifGap = Math.max(0.1 * (r324_df.rightSB - r324_df.leftSB), r271_AdviceStroke(6));
                var _r324_t0 = r322_srcs;
                var r324_left = _r324_t0[0];
                var r324_leftMask = _r324_t0[1];
                var r324_right = _r324_t0[2];
                r324_currentGlyph.include(r271_xn$referglyph$1aao(r324_left), r271_AS_BASE, r271_ALSO_METRICS);
                r324_currentGlyph.include(r271_difference(r271_xn$referglyph$1aao(r324_right), r271_xn$referglyph$1aao(r324_leftMask)));
                return void 0;
            };
        });
    });
    return void 0;
});
