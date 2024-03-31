'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r321_t) {
    var r321_n, r321_i, r321_a, _r321_t3, _r321_t4, _r321_t5, _r321_t6, _r321_t7, _r321_t8, _r321_t9, _r321_t10, _r321_t11, _r321_t12, _r321_t13, _r321_t14, _r321_t15, _r321_t16, _r321_t17, _r321_t18, _r321_t19, _r321_t20, _r321_t21, _r321_t22, _r321_t23, _r321_t24, _r321_t25, _r321_t26;
    var _r321_t0 = function () {
        _r321_t7 = function (_r321_t8) {
            _r321_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r321_t8
            };
        };
        _r321_t9 = r321_t instanceof Array;
        if (_r321_t9) {
            _r321_t10 = r321_n = r321_t.length;
            _r321_t11 = r321_i = 0;
            _r321_t12 = function (_r321_t14) {
                return _r321_t7(_r321_t14);
            };
            _r321_t13 = function (_r321_t15) {
                _r321_t16 = r321_i < r321_n;
                if (_r321_t16) {
                    _r321_t0 = function (_r321_t17) {
                        return _r321_t13(r321_i = r321_i + 1);
                    };
                    return {
                        'value': [
                            r321_i,
                            r321_t[r321_i]
                        ],
                        'done': false
                    };
                } else
                    return _r321_t12(_r321_t15);
            };
            return _r321_t13();
        } else {
            _r321_t18 = r321_a = Object.keys(r321_t);
            _r321_t19 = r321_n = r321_a.length;
            _r321_t20 = r321_i = 0;
            _r321_t21 = function (_r321_t23) {
                return _r321_t7(_r321_t23);
            };
            _r321_t22 = function (_r321_t24) {
                _r321_t25 = r321_i < r321_n;
                if (_r321_t25) {
                    _r321_t0 = function (_r321_t26) {
                        return _r321_t22(r321_i = r321_i + 1);
                    };
                    return {
                        'value': [
                            r321_a[r321_i],
                            r321_t[r321_a[r321_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r321_t21(_r321_t24);
            };
            return _r321_t22();
        }
    };
    var _r321_t1 = function (x) {
        try {
            return _r321_t0(x);
        } catch (ex) {
            return _r321_t2(ex);
        }
    };
    var _r321_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9)
        _r321_t3 = this;
    else {
        _r321_t4 = function () {
            void 0;
        };
        _r321_t4.prototype = _r1_t9.prototype;
        _r321_t3 = new _r321_t4();
    }
    _r321_t3[Symbol.iterator] = function () {
        return _r321_t3;
    };
    _r321_t3.next = _r321_t1;
    _r321_t3.throw = function (x) {
        return _r321_t2(x);
    };
    return _r321_t3;
};
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Cyrillic-Che', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var r270_suffix, r270_body, r270_slabUpright, r270_slabUprightBGR, r270_slabItalic, _r270_t11, _r270_t12, _r270_t13, _r270_t14, _r270_tag15;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_MarkSet = _r270_t0.MarkSet;
        var r270_DivFrame = _r270_t0.DivFrame;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_Downward = _r270_t1.Downward;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var r270_OverlayStroke = _r270_t1.OverlayStroke;
        var r270_MidJutSide = _r270_t1.MidJutSide;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_tagged = _r270_t4.tagged;
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_xn$referglyph$1aao = _r270_t5['refer-glyph'];
        var r270_turned = _r270_t5.turned;
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r270_LeaningAnchor = _r270_t6.LeaningAnchor;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_SerifFrame = _r270_t7.SerifFrame;
        var r270_RightwardTailedBar = _r270_t7.RightwardTailedBar;
        var r270_DToothlessRise = _r270_t7.DToothlessRise;
        var _r270_t8 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_CyrDescender = _r270_t8.CyrDescender;
        var r270_BottomExtension = _r270_t8.BottomExtension;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r277_t0, _r277_t1;
            return { 'BODY': r270_BODY };
        });
        var r270_BODY = {
            'STRAIGHT': 0,
            'TAILED': 1
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'SERIFS': r270_SERIFS };
        });
        var r270_SERIFS = {
            'NONE': 0,
            'ALL': 1,
            'LOWER': 2,
            'TOP': 3,
            'TAILED-I': 4,
            'ALL-BGR': 5,
            'TAILED-BGR': 6
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r281_t0, _r281_t1;
            return { 'CyrCheShape': r270_CyrCheShape };
        });
        var r270_CyrCheShape = function () {
            var _r282_t6;
            var _r282_t7 = arguments;
            var _r282_t0 = [].slice.call(_r282_t7, 0);
            var _r282_t1 = [];
            var _r282_t2 = 0;
            while (_r282_t2 < _r282_t0.length) {
                if (!(_r282_t0[_r282_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r282_t1.push(_r282_t0[_r282_t2]);
                _r282_t2 = _r282_t2 + 1;
            }
            var _r282_t3 = _r282_t0;
            var _r282_t4 = _r282_t3.length;
            var _r282_t5 = 0;
            while (_r282_t5 < _r282_t4) {
                _r282_t2 = _r282_t3[_r282_t5];
                if (_r282_t2 && _r282_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r282_t2.left === 'df')
                    r282_df = _r282_t2.right;
                if (_r282_t2 && _r282_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r282_t2.left === 'top')
                    r282_top = _r282_t2.right;
                if (_r282_t2 && _r282_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r282_t2.left === 'pyBar')
                    r282_pyBar = _r282_t2.right;
                if (_r282_t2 && _r282_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r282_t2.left === 'bodyType')
                    r282_bodyType = _r282_t2.right;
                if (_r282_t2 && _r282_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r282_t2.left === 'slabType')
                    r282_slabType = _r282_t2.right;
                if (_r282_t2 && _r282_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r282_t2.left === 'sw')
                    r282_sw = _r282_t2.right;
                _r282_t5 = _r282_t5 + 1;
            }
            var r282_df = r1_fallback(r282_df, _r282_t1[0]);
            var r282_top = r1_fallback(r282_top, _r282_t1[1]);
            var r282_pyBar = r1_fallback(r282_pyBar, _r282_t1[2]);
            var r282_bodyType = r1_fallback(r282_bodyType, _r282_t1[3]);
            var r282_slabType = r1_fallback(r282_slabType, _r282_t1[4]);
            var r282_sw = r1_fallback(r282_sw, _r282_t1[5], r282_df.mvs);
            return function () {
                var r288___, _r288_t0, _r288_t1, _r288_t2, _r288_t3, _r288_t5;
                var _r288_t4 = this;
                var r288_currentGlyph = _r288_t4;
                var r288_bar = r282_top * r1_fallback(r282_pyBar, 0.5);
                r288_currentGlyph.include((_r288_t0 = r282_bodyType, _r288_t0 === r270_BODY.TAILED ? r270_RightwardTailedBar(r282_df.rightSB, 0, r282_top, new r270_xn$NamedParameterPair$2Lrc9b('sw', r282_sw)) : (r288___ = _r288_t0, r270_VBar.r(r282_df.rightSB, 0, r282_top, r282_sw))));
                r288_currentGlyph.include(r270_dispiro(r270_widths.lhs(r282_sw), r270_flat(r282_df.leftSB, r282_top, r270_heading(r270_Downward)), r270_curl(r282_df.leftSB, r288_bar + r270_ArchDepthB - r270_HalfStroke), r270_g4(r282_df.middle + r270_CorrectionOMidS, r288_bar - r270_HalfStroke), r270_g4(r282_df.rightSB - 1 / 16, r288_bar - r270_HalfStroke + r270_DToothlessRise, r270_heading(r270_Rightward))));
                var r288_sf = r270_SerifFrame.fromDf(r282_df, r282_top, 0);
                r288_currentGlyph.include(r270_tagged('serifLT', (_r288_t1 = r282_slabType, _r288_t1 === r270_SERIFS.ALL ? r288_sf.lt.full : _r288_t1 === r270_SERIFS.TOP ? r288_sf.lt.full : _r288_t1 === r270_SERIFS['ALL-BGR'] ? r288_sf.lt.outer : _r288_t1 === r270_SERIFS['TAILED-BGR'] ? r288_sf.lt.outer : _r288_t1 === r270_SERIFS.LOWER ? r288_sf.lt.outer : _r288_t1 === r270_SERIFS['TAILED-I'] ? r288_sf.lt.outer : (r288___ = _r288_t1, function () {
                    var _r294_t1;
                    var _r294_t0 = this;
                    var r294_currentGlyph = _r294_t0;
                    return void 0;
                }))));
                r288_currentGlyph.include(r270_tagged('SerifRT', (_r288_t2 = r282_slabType, _r288_t2 === r270_SERIFS.ALL ? r288_sf.rt.full : _r288_t2 === r270_SERIFS.TOP ? r288_sf.rt.full : _r288_t2 === r270_SERIFS['ALL-BGR'] ? r288_sf.rt.inner : _r288_t2 === r270_SERIFS['TAILED-BGR'] ? r288_sf.rt.inner : (r288___ = _r288_t2, function () {
                    var _r297_t1;
                    var _r297_t0 = this;
                    var r297_currentGlyph = _r297_t0;
                    return void 0;
                }))));
                r288_currentGlyph.include(r270_tagged('SerifRB', (_r288_t3 = r282_slabType, _r288_t3 === r270_SERIFS.ALL ? r288_sf.rb.fullSide : _r288_t3 === r270_SERIFS['ALL-BGR'] ? r288_sf.rb.fullSide : _r288_t3 === r270_SERIFS.LOWER ? r288_sf.rb.outer : (r288___ = _r288_t3, function () {
                    var _r300_t1;
                    var _r300_t0 = this;
                    var r300_currentGlyph = _r300_t0;
                    return void 0;
                }))));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/Che', 1063, function () {
            var _r303_t1;
            var _r303_t0 = this;
            var r303_currentGlyph = _r303_t0;
            r303_currentGlyph.include(r270_MarkSet.capital());
            r303_currentGlyph.include(r270_LeaningAnchor.Below.VBar.r(r270_RightSB));
            r303_currentGlyph.include(r270_CyrCheShape(r270_DivFrame(1), r270_CAP, r270_SLAB ? 0.45 : 0.35, r270_BODY.STRAIGHT, r270_SLAB ? r270_SERIFS.ALL : r270_SERIFS.NONE));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1206, null, function () {
            var _r309_t1;
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            r309_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/Che'), true, true);
            r309_currentGlyph.include(r270_CyrDescender.rSideJut(r270_RightSB, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1227, null, function () {
            var _r314_t1;
            var _r314_t0 = this;
            var r314_currentGlyph = _r314_t0;
            r314_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/Che'), true, true);
            r314_currentGlyph.include(r270_CyrDescender.lSideJut(r270_RightSB - r270_HSwToV(r270_Stroke), 0, new r270_xn$NamedParameterPair$2Lrc9b('jut', r270_MidJutSide)));
            return void 0;
        });
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return { 'ItalicConfig': r270_ItalicConfig };
        });
        var r270_ItalicConfig = {
            'standard': [
                r270_BODY.STRAIGHT,
                r270_SERIFS.ALL,
                r270_SERIFS['ALL-BGR'],
                r270_SERIFS.LOWER
            ],
            'tailed': [
                r270_BODY.TAILED,
                r270_SERIFS.TOP,
                r270_SERIFS['TAILED-BGR'],
                r270_SERIFS['TAILED-I']
            ]
        };
        var _r270_t9 = _r1_t2(r270_ItalicConfig)[Symbol.iterator]();
        var _r270_t10 = void 0;
        while (!(_r270_t10 = _r270_t9.next()).done) {
            _r270_t11 = _r270_t10.value;
            r270_suffix = _r270_t11[0];
            r270_body = _r270_t11[1][0];
            r270_slabUpright = _r270_t11[1][1];
            r270_slabUprightBGR = _r270_t11[1][2];
            r270_slabItalic = _r270_t11[1][3];
            _r270_t11[1];
            (function () {
                r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/che.' + r270_suffix, null, function () {
                    var _r327_t1;
                    var _r327_t0 = this;
                    var r327_currentGlyph = _r327_t0;
                    r327_currentGlyph.include(r270_MarkSet.e());
                    r327_currentGlyph.include(r270_LeaningAnchor.Below.VBar.r(r270_RightSB));
                    r327_currentGlyph.include(r270_CyrCheShape(r270_DivFrame(1), r270_XH, r270_SLAB ? 0.45 : 0.4, r270_body, r270_SLAB ? r270_para.isItalic ? r270_slabItalic : r270_slabUpright : r270_SERIFS.NONE));
                    return void 0;
                });
                return r270_xn$createAndSaveGlyphImpl$2Lrc3c('cyrl/che.BGR.' + r270_suffix, null, function () {
                    var _r333_t1;
                    var _r333_t0 = this;
                    var r333_currentGlyph = _r333_t0;
                    r333_currentGlyph.include(r270_MarkSet.e());
                    r333_currentGlyph.include(r270_LeaningAnchor.Below.VBar.r(r270_RightSB));
                    r333_currentGlyph.include(r270_CyrCheShape(r270_DivFrame(1), r270_XH, r270_SLAB ? 0.45 : 0.4, r270_body, r270_SLAB ? r270_para.isItalic ? r270_slabItalic : r270_slabUprightBGR : r270_SERIFS.NONE));
                    return void 0;
                });
            }());
        }
        r270_xn$selectvariant$7Hrq('cyrl/che', 1095);
        r270_xn$selectvariant$7Hrq('cyrl/che.BGR', new r270_xn$NamedParameterPair$2Lrc9b('follow', 'cyrl/che'));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1207, null, function () {
            var _r340_t1;
            var _r340_t0 = this;
            var r340_currentGlyph = _r340_t0;
            r340_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/che.standard'), true, true);
            r340_currentGlyph.include(r270_CyrDescender.rSideJut(r270_RightSB, 0));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c(1228, null, function () {
            var _r345_t1;
            var _r345_t0 = this;
            var r345_currentGlyph = _r345_t0;
            r345_currentGlyph.include(r270_xn$referglyph$1aao('cyrl/che.standard'), true, true);
            r345_currentGlyph.include(r270_CyrDescender.lSideJut(r270_RightSB - r270_HSwToV(r270_Stroke), 0, new r270_xn$NamedParameterPair$2Lrc9b('jut', r270_MidJutSide)));
            return void 0;
        });
        r270_turned('cyrl/Shha', 1210, 'cyrl/Che', r270_Middle, r270_CAP / 2);
        r270_xn$derivecomposites$7Hrq('cyrl/ShhaDescender', 1318, 'cyrl/Shha', r270_CyrDescender.rSideJut(r270_RightSB, 0));
        var r270_ChrVBar = function (r349_top) {
            var _r349_t0, _r349_t1;
            var r349_SwCheVBar = Math.min(r270_OverlayStroke, 0.625 * (r270_RightSB - r270_SB - r270_HSwToV(2 * r270_Stroke)) / r270_HVContrast);
            var r349_yc = r349_top * (r270_SLAB ? 0.45 : 0.35) + r270_Stroke * 0.1;
            return r270_VBar.m(r270_Middle, r349_yc + r270_LongJut * 0.8, r349_yc - r270_LongJut * 0.8, r349_SwCheVBar);
        };
        r270_xn$derivecomposites$7Hrq('cyrl/CheVBar', 1208, 'cyrl/Che', r270_ChrVBar(r270_CAP));
        return r270_xn$derivecomposites$7Hrq('cyrl/cheVBar', 1209, 'cyrl/che', r270_ChrVBar(r270_XH));
    });
    return void 0;
});
