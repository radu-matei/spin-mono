'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r315_t) {
    var r315_n, r315_i, r315_a, _r315_t3, _r315_t4, _r315_t5, _r315_t6, _r315_t7, _r315_t8, _r315_t9, _r315_t10, _r315_t11, _r315_t12, _r315_t13, _r315_t14, _r315_t15, _r315_t16, _r315_t17, _r315_t18, _r315_t19, _r315_t20, _r315_t21, _r315_t22, _r315_t23, _r315_t24, _r315_t25, _r315_t26;
    var _r315_t0 = function () {
        _r315_t7 = function (_r315_t8) {
            _r315_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r315_t8
            };
        };
        _r315_t9 = r315_t instanceof Array;
        if (_r315_t9) {
            _r315_t10 = r315_n = r315_t.length;
            _r315_t11 = r315_i = 0;
            _r315_t12 = function (_r315_t14) {
                return _r315_t7(_r315_t14);
            };
            _r315_t13 = function (_r315_t15) {
                _r315_t16 = r315_i < r315_n;
                if (_r315_t16) {
                    _r315_t0 = function (_r315_t17) {
                        return _r315_t13(r315_i = r315_i + 1);
                    };
                    return {
                        'value': [
                            r315_i,
                            r315_t[r315_i]
                        ],
                        'done': false
                    };
                } else
                    return _r315_t12(_r315_t15);
            };
            return _r315_t13();
        } else {
            _r315_t18 = r315_a = Object.keys(r315_t);
            _r315_t19 = r315_n = r315_a.length;
            _r315_t20 = r315_i = 0;
            _r315_t21 = function (_r315_t23) {
                return _r315_t7(_r315_t23);
            };
            _r315_t22 = function (_r315_t24) {
                _r315_t25 = r315_i < r315_n;
                if (_r315_t25) {
                    _r315_t0 = function (_r315_t26) {
                        return _r315_t22(r315_i = r315_i + 1);
                    };
                    return {
                        'value': [
                            r315_a[r315_i],
                            r315_t[r315_a[r315_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r315_t21(_r315_t24);
            };
            return _r315_t22();
        }
    };
    var _r315_t1 = function (x) {
        try {
            return _r315_t0(x);
        } catch (ex) {
            return _r315_t2(ex);
        }
    };
    var _r315_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11)
        _r315_t3 = this;
    else {
        _r315_t4 = function () {
            void 0;
        };
        _r315_t4.prototype = _r1_t11.prototype;
        _r315_t3 = new _r315_t4();
    }
    _r315_t3[Symbol.iterator] = function () {
        return _r315_t3;
    };
    _r315_t3.next = _r315_t1;
    _r315_t3.throw = function (x) {
        return _r315_t2(x);
    };
    return _r315_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_RightDependentTrigger = _r1_t9.RightDependentTrigger;
var r1_RightDependentLink = _r1_t9.RightDependentLink;
var r1_DependentSelector = _r1_t9.DependentSelector;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r267_block, _r267_t4, _r267_t6;
    var _r267_t3 = this;
    var _r267_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r267_t1 = _r267_t0.length;
    var _r267_t2 = 0;
    var _r267_t5 = _r267_t2 < _r267_t1;
    while (_r267_t5) {
        _r267_t6 = (r267_block = _r267_t0[_r267_t2], r267_block(_r267_t3), _r267_t2 = _r267_t2 + 1);
        _r267_t5 = _r267_t2 < _r267_t1;
    }
    return _r267_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r271_xn$Capture_Ext$2Lrc2b) {
    var _r271_t0, _r271_t1;
    r271_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r271_xn$Capture_Ext$2Lrc2b, 'Letter-Shared', function (r272_xn$Capture$2Lrc8, r272_xn$ExportCapture$2Lrc4b) {
        var r272_SetGrekUpperTonos, _r272_t6, _r272_t7;
        var _r272_t0 = r272_xn$Capture$2Lrc8;
        var r272_xn$createAndSaveGlyphImpl$2Lrc3c = _r272_t0['$createAndSaveGlyphImpl$'];
        var r272_xn$NamedParameterPair$2Lrc9b = _r272_t0['$NamedParameterPair$'];
        var r272_xn$Exec$2Lrc5 = _r272_t0['$Exec$'];
        var r272_AS_BASE = _r272_t0.AS_BASE;
        var r272_ALSO_METRICS = _r272_t0.ALSO_METRICS;
        var _r272_t1 = r272_xn$Capture$2Lrc8.Metrics;
        var r272_Width = _r272_t1.Width;
        var r272_CAP = _r272_t1.CAP;
        var r272_ApparentTranslate = _r272_t1.ApparentTranslate;
        var r272_AccentStackOffset = _r272_t1.AccentStackOffset;
        var _r272_t2 = r272_xn$Capture$2Lrc8.SpiroFns;
        var _r272_t3 = r272_xn$Capture$2Lrc8.BooleFns;
        var _r272_t4 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r272_t5 = r272_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r272_xn$selectvariant$7Hrq = _r272_t5['select-variant'];
        var r272_xn$referglyph$1aao = _r272_t5['refer-glyph'];
        var r272_xn$queryglyph$1aao = _r272_t5['query-glyph'];
        var r272_xn$deriveglyphs$7Hrq = _r272_t5['derive-glyphs'];
        var r272_xn$derivemultipartglyphs$7Hrq65 = _r272_t5['derive-multi-part-glyphs'];
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r276_t0, _r276_t1;
            return { 'CreateAccentedComposition': r272_CreateAccentedComposition };
        });
        var r272_CreateAccentedComposition = function (r277_dst, r277_u, r277_srcGid, r277_accentGid) {
            var _r277_t0, _r277_t1;
            return r272_xn$derivemultipartglyphs$7Hrq65(r277_dst, r277_u, [
                r277_srcGid,
                r277_accentGid
            ], function (r278_gns, r278_gr) {
                var _r278_t0, _r278_t1;
                return function () {
                    var _r280_t2;
                    var _r280_t1 = this;
                    var r280_currentGlyph = _r280_t1;
                    var _r280_t0 = r278_gns;
                    var r280_base = _r280_t0[0];
                    var r280_mark = _r280_t0[1];
                    r280_currentGlyph.include(r272_xn$referglyph$1aao(r280_base), r272_AS_BASE, r272_ALSO_METRICS);
                    r280_currentGlyph.include(r272_xn$referglyph$1aao(r280_mark));
                    if (!r278_gr && r277_accentGid === 'dotAbove')
                        r1_Dotless.set(r280_currentGlyph, r280_base);
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r284_t0, _r284_t1;
            return { 'CreateOgonekComposition': r272_CreateOgonekComposition };
        });
        var r272_CreateOgonekComposition = function (r285_dst, r285_u, r285_srcGid) {
            var _r285_t0, _r285_t1;
            return r272_xn$derivemultipartglyphs$7Hrq65(r285_dst, r285_u, [
                r285_srcGid,
                'ogonekBelow',
                'ogonekTR/spacer',
                'ogonekTR'
            ], function (r286_gns, r286_gr) {
                var _r286_t0, _r286_t1;
                return function () {
                    var _r288_t2;
                    var _r288_t1 = this;
                    var r288_currentGlyph = _r288_t1;
                    var _r288_t0 = r286_gns;
                    var r288_base = _r288_t0[0];
                    var r288_markBelow = _r288_t0[1];
                    var r288_spacer = _r288_t0[2];
                    var r288_markTR = _r288_t0[3];
                    r288_currentGlyph.include(r272_xn$referglyph$1aao(r288_base), r272_AS_BASE, r272_ALSO_METRICS);
                    if (r288_currentGlyph.baseAnchors.trailing) {
                        r288_currentGlyph.include(r272_xn$referglyph$1aao(r288_spacer));
                        r288_currentGlyph.include(r272_xn$referglyph$1aao(r288_markTR));
                    } else
                        r288_currentGlyph.include(r272_xn$referglyph$1aao(r288_markBelow));
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r294_t0, _r294_t1;
            return { 'CreateCommaCaronComposition': r272_CreateCommaCaronComposition };
        });
        var r272_CreateCommaCaronComposition = function (r295_dst, r295_u, r295_sourceGid, r295_offset) {
            var _r295_t0, _r295_t1;
            return r272_xn$derivemultipartglyphs$7Hrq65(r295_dst, r295_u, [
                r295_sourceGid,
                'commaTR'
            ], function (r296_gns, r296_gr) {
                var _r296_t0, _r296_t1;
                return function () {
                    var _r298_t2;
                    var _r298_t1 = this;
                    var r298_currentGlyph = _r298_t1;
                    var _r298_t0 = r296_gns;
                    var r298_base = _r298_t0[0];
                    var r298_comma = _r298_t0[1];
                    var r298_baseGlyph = r272_xn$queryglyph$1aao(r298_base);
                    var r298_commaOffset = r1_fallback(r295_offset, r272_Width / 2 * Math.pow(r298_baseGlyph.advanceWidth / r272_Width * 2, 2 / 3));
                    r298_currentGlyph.include(r272_xn$referglyph$1aao(r298_comma));
                    r298_currentGlyph.include(r272_ApparentTranslate(r298_commaOffset, 0));
                    r298_currentGlyph.include(r272_xn$referglyph$1aao(r298_base), r272_AS_BASE, r272_ALSO_METRICS);
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r303_t0, _r303_t1;
            return { 'CreateMultiAccentedComposition': r272_CreateMultiAccentedComposition };
        });
        var r272_CreateMultiAccentedComposition = function (r304_dstGid, r304_unicode, r304_srcGid, r304_accentGids, r304_fDontDecompose) {
            var _r304_t0, _r304_t1;
            return r272_xn$deriveglyphs$7Hrq(r304_dstGid, r304_unicode, r304_srcGid, function (r305_src, r305_gr) {
                var _r305_t0, _r305_t1;
                return function () {
                    var r307_accentGid, _r307_t4;
                    var _r307_t3 = this;
                    var r307_currentGlyph = _r307_t3;
                    r307_currentGlyph.include(r272_xn$referglyph$1aao(r305_src), r272_AS_BASE, r272_ALSO_METRICS);
                    var _r307_t0 = r304_accentGids;
                    var _r307_t1 = _r307_t0.length;
                    var _r307_t2 = 0;
                    while (_r307_t2 < _r307_t1) {
                        r307_accentGid = _r307_t0[_r307_t2];
                        r307_currentGlyph.include(r272_xn$referglyph$1aao(r307_accentGid));
                        _r307_t2 = _r307_t2 + 1;
                    }
                    if (!r304_fDontDecompose && !r305_gr)
                        r1_CvDecompose.set(r307_currentGlyph, [r305_src].concat(r304_accentGids));
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r312_t0, _r312_t1;
            return { 'CreateDependentComposite': r272_CreateDependentComposite };
        });
        var r272_CreateDependentComposite = function (r313_gidDst, r313_unicode, r313_gidPart1, r313_gidPart2Map) {
            var r313_key, r313_g, _r313_t2, _r313_t3, _r313_t4;
            var r313_sourceGidList = [r313_gidPart1];
            var r313_keyToIndexMap = {};
            var _r313_t0 = _r1_t2(r313_gidPart2Map)[Symbol.iterator]();
            var _r313_t1 = void 0;
            while (!(_r313_t1 = _r313_t0.next()).done) {
                _r313_t2 = _r313_t1.value;
                r313_key = _r313_t2[0];
                r313_g = _r313_t2[1];
                r313_keyToIndexMap[r313_key] = r313_sourceGidList.length;
                r313_sourceGidList.push(r313_g);
            }
            return r272_xn$derivemultipartglyphs$7Hrq65(r313_gidDst, r313_unicode, r313_sourceGidList, function (r317_src) {
                var _r317_t0, _r317_t1;
                return function () {
                    var _r319_t1;
                    var _r319_t0 = this;
                    var r319_currentGlyph = _r319_t0;
                    var r319_a = r317_src[0];
                    var r319_selector = r1_DependentSelector.get(r272_xn$queryglyph$1aao(r319_a));
                    var r319_b = r317_src[r313_keyToIndexMap[r319_selector]];
                    r319_currentGlyph.include(r272_xn$referglyph$1aao(r319_a), r272_AS_BASE, r272_ALSO_METRICS);
                    r319_currentGlyph.include(r272_xn$referglyph$1aao(r319_b));
                    return void 0;
                };
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r323_t0, _r323_t1;
            return { 'CreateSelectorVariants': r272_CreateSelectorVariants };
        });
        var r272_CreateSelectorVariants = function () {
            var r324_item, _r324_t9;
            var _r324_t10 = arguments;
            var _r324_t0 = [].slice.call(_r324_t10, 0);
            var _r324_t1 = [];
            var _r324_t2 = 0;
            while (_r324_t2 < _r324_t0.length) {
                if (!(_r324_t0[_r324_t2] instanceof r272_xn$NamedParameterPair$2Lrc9b))
                    _r324_t1.push(_r324_t0[_r324_t2]);
                _r324_t2 = _r324_t2 + 1;
            }
            var _r324_t3 = _r324_t0;
            var _r324_t4 = _r324_t3.length;
            var _r324_t5 = 0;
            while (_r324_t5 < _r324_t4) {
                _r324_t2 = _r324_t3[_r324_t5];
                if (_r324_t2 && _r324_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r324_t2.left === 'name')
                    r324_name = _r324_t2.right;
                if (_r324_t2 && _r324_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r324_t2.left === 'code')
                    r324_code = _r324_t2.right;
                if (_r324_t2 && _r324_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r324_t2.left === 'selectors')
                    r324_selectors = _r324_t2.right;
                if (_r324_t2 && _r324_t2 instanceof r272_xn$NamedParameterPair$2Lrc9b && _r324_t2.left === 'follow')
                    r324_follow = _r324_t2.right;
                _r324_t5 = _r324_t5 + 1;
            }
            var r324_name = r1_fallback(r324_name, _r324_t1[0]);
            var r324_code = r1_fallback(r324_code, _r324_t1[1]);
            var r324_selectors = r1_fallback(r324_selectors, _r324_t1[2]);
            var r324_follow = r1_fallback(r324_follow, _r324_t1[3], r324_name);
            r272_xn$selectvariant$7Hrq('' + r324_name + '/selector', new r272_xn$NamedParameterPair$2Lrc9b('follow', r324_follow));
            var r324_obj = {};
            var _r324_t6 = r324_selectors;
            var _r324_t7 = _r324_t6.length;
            var _r324_t8 = 0;
            while (_r324_t8 < _r324_t7) {
                r324_item = _r324_t6[_r324_t8];
                r324_obj[r324_item] = '' + r324_name + '.' + r324_item;
                _r324_t8 = _r324_t8 + 1;
            }
            return r272_CreateDependentComposite(r324_name, r324_code, '' + r324_name + '/selector', r324_obj);
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r332_t0, _r332_t1;
            return { 'DefineSelectorGlyph': r272_DefineSelectorGlyph };
        });
        var r272_DefineSelectorGlyph = function (r333_name, r333_selector, r333_marks) {
            var _r333_t0, _r333_t1;
            return r272_xn$createAndSaveGlyphImpl$2Lrc3c('' + r333_name + '/selector.' + r333_selector, null, function () {
                var _r336_t1;
                var _r336_t0 = this;
                var r336_currentGlyph = _r336_t0;
                r336_currentGlyph.include(r333_marks);
                r336_currentGlyph.setBaseAnchor('cvDecompose', 0, 0);
                r1_DependentSelector.set(r336_currentGlyph, r333_selector);
                return void 0;
            });
        };
        r272_xn$ExportCapture$2Lrc4b(function () {
            var _r340_t0, _r340_t1;
            return { 'SetGrekUpperTonos': r272_SetGrekUpperTonos };
        });
        return r272_SetGrekUpperTonos = function (r341_kern) {
            var _r341_t0, _r341_t1;
            return function () {
                var _r343_t1;
                var _r343_t0 = this;
                var r343_currentGlyph = _r343_t0;
                r343_currentGlyph.setBaseAnchor('grekUpperTonos', r341_kern, r272_CAP - 0.75 * r272_AccentStackOffset);
                return void 0;
            };
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r347_xn$Capture_Ext$2Lrc2b) {
    var _r347_t0, _r347_t1;
    r347_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r347_xn$Capture_Ext$2Lrc2b, 'Letter-Blackboard', function (r348_xn$Capture$2Lrc8, r348_xn$ExportCapture$2Lrc4b) {
        var _r348_t7, _r348_t8;
        var _r348_t0 = r348_xn$Capture$2Lrc8;
        var r348_xn$createAndSaveGlyphImpl$2Lrc3c = _r348_t0['$createAndSaveGlyphImpl$'];
        var r348_xn$NamedParameterPair$2Lrc9b = _r348_t0['$NamedParameterPair$'];
        var r348_xn$Exec$2Lrc5 = _r348_t0['$Exec$'];
        var _r348_t1 = r348_xn$Capture$2Lrc8.Metrics;
        var r348_Width = _r348_t1.Width;
        var r348_XH = _r348_t1.XH;
        var r348_AccentStackOffset = _r348_t1.AccentStackOffset;
        var r348_AdviceStroke = _r348_t1.AdviceStroke;
        var _r348_t2 = r348_xn$Capture$2Lrc8.SpiroFns;
        var _r348_t3 = r348_xn$Capture$2Lrc8.BooleFns;
        var r348_union = _r348_t3.union;
        var _r348_t4 = r348_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r348_DotStrokeAt = _r348_t4.DotStrokeAt;
        var r348_HBar = _r348_t4.HBar;
        var r348_VBar = _r348_t4.VBar;
        r348_xn$ExportCapture$2Lrc4b(function () {
            var _r351_t0, _r351_t1;
            return {
                'BBS': r348_BBS,
                'BBD': r348_BBD
            };
        });
        var r348_BBS = r348_AdviceStroke(6);
        var r348_BBD = r1_clamp(r348_Width / 5.5, r348_Width / 4, r348_BBS * 2);
        r348_xn$ExportCapture$2Lrc4b(function () {
            var _r353_t0, _r353_t1;
            return { 'BBBarLeft': r348_BBBarLeft };
        });
        var r348_BBBarLeft = function () {
            var _r354_t6;
            var _r354_t7 = arguments;
            var _r354_t0 = [].slice.call(_r354_t7, 0);
            var _r354_t1 = [];
            var _r354_t2 = 0;
            while (_r354_t2 < _r354_t0.length) {
                if (!(_r354_t0[_r354_t2] instanceof r348_xn$NamedParameterPair$2Lrc9b))
                    _r354_t1.push(_r354_t0[_r354_t2]);
                _r354_t2 = _r354_t2 + 1;
            }
            var _r354_t3 = _r354_t0;
            var _r354_t4 = _r354_t3.length;
            var _r354_t5 = 0;
            while (_r354_t5 < _r354_t4) {
                _r354_t2 = _r354_t3[_r354_t5];
                if (_r354_t2 && _r354_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r354_t2.left === 'x')
                    r354_x = _r354_t2.right;
                if (_r354_t2 && _r354_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r354_t2.left === 'yBot')
                    r354_yBot = _r354_t2.right;
                if (_r354_t2 && _r354_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r354_t2.left === 'yTop')
                    r354_yTop = _r354_t2.right;
                if (_r354_t2 && _r354_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r354_t2.left === 'bbs')
                    r354_bbs = _r354_t2.right;
                if (_r354_t2 && _r354_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r354_t2.left === 'bbd')
                    r354_bbd = _r354_t2.right;
                _r354_t5 = _r354_t5 + 1;
            }
            var r354_x = r1_fallback(r354_x, _r354_t1[0]);
            var r354_yBot = r1_fallback(r354_yBot, _r354_t1[1]);
            var r354_yTop = r1_fallback(r354_yTop, _r354_t1[2]);
            var r354_bbs = r1_fallback(r354_bbs, _r354_t1[3], r348_BBS);
            var r354_bbd = r1_fallback(r354_bbd, _r354_t1[4], r348_BBD);
            return r348_union(r348_VBar.l(r354_x, r354_yBot, r354_yTop, r354_bbs), r348_VBar.l(r354_x + r354_bbd, r354_yBot, r354_yTop, r354_bbs), r348_HBar.t(r354_x, r354_x + r354_bbd, r354_yTop, r354_bbs), r348_HBar.b(r354_x, r354_x + r354_bbd, r354_yBot, r354_bbs));
        };
        r348_xn$ExportCapture$2Lrc4b(function () {
            var _r360_t0, _r360_t1;
            return { 'BBBarCenter': r348_BBBarCenter };
        });
        var r348_BBBarCenter = function () {
            var _r361_t6;
            var _r361_t7 = arguments;
            var _r361_t0 = [].slice.call(_r361_t7, 0);
            var _r361_t1 = [];
            var _r361_t2 = 0;
            while (_r361_t2 < _r361_t0.length) {
                if (!(_r361_t0[_r361_t2] instanceof r348_xn$NamedParameterPair$2Lrc9b))
                    _r361_t1.push(_r361_t0[_r361_t2]);
                _r361_t2 = _r361_t2 + 1;
            }
            var _r361_t3 = _r361_t0;
            var _r361_t4 = _r361_t3.length;
            var _r361_t5 = 0;
            while (_r361_t5 < _r361_t4) {
                _r361_t2 = _r361_t3[_r361_t5];
                if (_r361_t2 && _r361_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'x')
                    r361_x = _r361_t2.right;
                if (_r361_t2 && _r361_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'yBot')
                    r361_yBot = _r361_t2.right;
                if (_r361_t2 && _r361_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'yTop')
                    r361_yTop = _r361_t2.right;
                if (_r361_t2 && _r361_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'bbs')
                    r361_bbs = _r361_t2.right;
                if (_r361_t2 && _r361_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r361_t2.left === 'bbd')
                    r361_bbd = _r361_t2.right;
                _r361_t5 = _r361_t5 + 1;
            }
            var r361_x = r1_fallback(r361_x, _r361_t1[0]);
            var r361_yBot = r1_fallback(r361_yBot, _r361_t1[1]);
            var r361_yTop = r1_fallback(r361_yTop, _r361_t1[2]);
            var r361_bbs = r1_fallback(r361_bbs, _r361_t1[3], r348_BBS);
            var r361_bbd = r1_fallback(r361_bbd, _r361_t1[4], r348_BBD);
            return r348_union(r348_VBar.m(r361_x - r361_bbd / 2, r361_yBot, r361_yTop, r361_bbs), r348_VBar.m(r361_x + r361_bbd / 2, r361_yBot, r361_yTop, r361_bbs), r348_HBar.t(r361_x - r361_bbd / 2, r361_x + r361_bbd / 2, r361_yTop, r361_bbs), r348_HBar.b(r361_x - r361_bbd / 2, r361_x + r361_bbd / 2, r361_yBot, r361_bbs));
        };
        r348_xn$ExportCapture$2Lrc4b(function () {
            var _r367_t0, _r367_t1;
            return { 'BBBarRight': r348_BBBarRight };
        });
        var r348_BBBarRight = function () {
            var _r368_t6;
            var _r368_t7 = arguments;
            var _r368_t0 = [].slice.call(_r368_t7, 0);
            var _r368_t1 = [];
            var _r368_t2 = 0;
            while (_r368_t2 < _r368_t0.length) {
                if (!(_r368_t0[_r368_t2] instanceof r348_xn$NamedParameterPair$2Lrc9b))
                    _r368_t1.push(_r368_t0[_r368_t2]);
                _r368_t2 = _r368_t2 + 1;
            }
            var _r368_t3 = _r368_t0;
            var _r368_t4 = _r368_t3.length;
            var _r368_t5 = 0;
            while (_r368_t5 < _r368_t4) {
                _r368_t2 = _r368_t3[_r368_t5];
                if (_r368_t2 && _r368_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r368_t2.left === 'x')
                    r368_x = _r368_t2.right;
                if (_r368_t2 && _r368_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r368_t2.left === 'yBot')
                    r368_yBot = _r368_t2.right;
                if (_r368_t2 && _r368_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r368_t2.left === 'yTop')
                    r368_yTop = _r368_t2.right;
                if (_r368_t2 && _r368_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r368_t2.left === 'bbs')
                    r368_bbs = _r368_t2.right;
                if (_r368_t2 && _r368_t2 instanceof r348_xn$NamedParameterPair$2Lrc9b && _r368_t2.left === 'bbd')
                    r368_bbd = _r368_t2.right;
                _r368_t5 = _r368_t5 + 1;
            }
            var r368_x = r1_fallback(r368_x, _r368_t1[0]);
            var r368_yBot = r1_fallback(r368_yBot, _r368_t1[1]);
            var r368_yTop = r1_fallback(r368_yTop, _r368_t1[2]);
            var r368_bbs = r1_fallback(r368_bbs, _r368_t1[3], r348_BBS);
            var r368_bbd = r1_fallback(r368_bbd, _r368_t1[4], r348_BBD);
            return r348_union(r348_VBar.r(r368_x, r368_yBot, r368_yTop, r368_bbs), r348_VBar.r(r368_x - r368_bbd, r368_yBot, r368_yTop, r368_bbs), r348_HBar.t(r368_x, r368_x - r368_bbd, r368_yTop, r368_bbs), r348_HBar.b(r368_x, r368_x - r368_bbd, r368_yBot, r368_bbs));
        };
        var _r348_t5 = r348_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r348_markMiddle = _r348_t5.markMiddle;
        var _r348_t6 = r348_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r348_aboveMarkStack = _r348_t6.aboveMarkStack;
        return r348_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/dotAbove', null, function () {
            var _r377_t1;
            var _r377_t0 = this;
            var r377_currentGlyph = _r377_t0;
            r377_currentGlyph.setWidth(0);
            r377_currentGlyph.setMarkAnchor('above', r348_markMiddle, r348_XH, r348_markMiddle, r348_aboveMarkStack);
            r377_currentGlyph.setBaseAnchor('aboveBraceL', r348_markMiddle, r348_XH + r348_AccentStackOffset);
            r377_currentGlyph.setBaseAnchor('aboveBraceR', r348_markMiddle, r348_XH + r348_AccentStackOffset);
            r377_currentGlyph.include(r348_DotStrokeAt(r348_markMiddle, r348_XH + r348_AccentStackOffset, r348_BBD / 2 + r348_BBS, r348_BBS));
            return void 0;
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r385_xn$Capture_Ext$2Lrc2b) {
    var _r385_t0, _r385_t1;
    r385_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r385_xn$Capture_Ext$2Lrc2b, 'Letter-Shared-Metrics', function (r386_xn$Capture$2Lrc8, r386_xn$ExportCapture$2Lrc4b) {
        var r386_BowlXDepth, _r386_t4, _r386_t5;
        var _r386_t0 = r386_xn$Capture$2Lrc8;
        var r386_xn$createAndSaveGlyphImpl$2Lrc3c = _r386_t0['$createAndSaveGlyphImpl$'];
        var r386_xn$NamedParameterPair$2Lrc9b = _r386_t0['$NamedParameterPair$'];
        var r386_xn$Exec$2Lrc5 = _r386_t0['$Exec$'];
        var _r386_t1 = r386_xn$Capture$2Lrc8.Metrics;
        var r386_HSwToV = _r386_t1.HSwToV;
        var _r386_t2 = r386_xn$Capture$2Lrc8.SpiroFns;
        var _r386_t3 = r386_xn$Capture$2Lrc8.BooleFns;
        r386_xn$ExportCapture$2Lrc4b(function () {
            var _r388_t0, _r388_t1;
            return { 'BowlXDepth': r386_BowlXDepth };
        });
        return r386_BowlXDepth = function (r389_top, r389_bottom, r389_left, r389_right, r389_sw) {
            var _r389_t0, _r389_t1;
            var r389_trShrink = Math.pow((r389_right - r389_left) / (r389_top - r389_bottom), 0.5);
            return Math.max(r386_HSwToV(1.25 * r389_sw), r389_trShrink * Math.min((r389_top - r389_bottom) * 0.45, (r389_right - r389_left + r386_HSwToV(r389_sw)) * 0.875));
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r392_xn$Capture_Ext$2Lrc2b) {
    var _r392_t0, _r392_t1;
    r392_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r392_xn$Capture_Ext$2Lrc2b, 'Letter-Shared-Shapes', function (r393_xn$Capture$2Lrc8, r393_xn$ExportCapture$2Lrc4b) {
        var _r393_t8, _r393_t9, _r393_t10, _r393_tag11, _r393_t12, _r393_tag13, _r393_t14, _r393_tag15, _r393_t16, _r393_tag17, _r393_t18, _r393_tag19, _r393_t20, _r393_tag21, _r393_t22, _r393_tag23, _r393_t24, _r393_tag25, _r393_t26, _r393_tag27, _r393_t28, _r393_tag29, _r393_t30, _r393_tag31, _r393_t32, _r393_tag33;
        var _r393_t0 = r393_xn$Capture$2Lrc8;
        var r393_xn$createAndSaveGlyphImpl$2Lrc3c = _r393_t0['$createAndSaveGlyphImpl$'];
        var r393_xn$NamedParameterPair$2Lrc9b = _r393_t0['$NamedParameterPair$'];
        var r393_xn$Exec$2Lrc5 = _r393_t0['$Exec$'];
        var r393_para = _r393_t0.para;
        var r393_AS_BASE = _r393_t0.AS_BASE;
        var r393_ALSO_METRICS = _r393_t0.ALSO_METRICS;
        var r393_DivFrame = _r393_t0.DivFrame;
        var _r393_t1 = r393_xn$Capture$2Lrc8.Metrics;
        var r393_DesignParameters = _r393_t1.DesignParameters;
        var r393_Width = _r393_t1.Width;
        var r393_SB = _r393_t1.SB;
        var r393_CAP = _r393_t1.CAP;
        var r393_XH = _r393_t1.XH;
        var r393_Ascender = _r393_t1.Ascender;
        var r393_Descender = _r393_t1.Descender;
        var r393_ApparentTranslate = _r393_t1.ApparentTranslate;
        var r393_TanSlope = _r393_t1.TanSlope;
        var r393_HVContrast = _r393_t1.HVContrast;
        var r393_Upward = _r393_t1.Upward;
        var r393_Downward = _r393_t1.Downward;
        var r393_Rightward = _r393_t1.Rightward;
        var r393_Leftward = _r393_t1.Leftward;
        var r393_O = _r393_t1.O;
        var r393_OX = _r393_t1.OX;
        var r393_Hook = _r393_t1.Hook;
        var r393_SHook = _r393_t1.SHook;
        var r393_HookX = _r393_t1.HookX;
        var r393_TailX = _r393_t1.TailX;
        var r393_TailY = _r393_t1.TailY;
        var r393_Stroke = _r393_t1.Stroke;
        var r393_LongJut = _r393_t1.LongJut;
        var r393_Jut = _r393_t1.Jut;
        var r393_VJutStroke = _r393_t1.VJutStroke;
        var r393_CThinB = _r393_t1.CThinB;
        var r393_HalfStroke = _r393_t1.HalfStroke;
        var r393_RightSB = _r393_t1.RightSB;
        var r393_SideJut = _r393_t1.SideJut;
        var r393_ArchDepthA = _r393_t1.ArchDepthA;
        var r393_ArchDepthB = _r393_t1.ArchDepthB;
        var r393_SmallArchDepthA = _r393_t1.SmallArchDepthA;
        var r393_SmallArchDepthB = _r393_t1.SmallArchDepthB;
        var r393_CorrectionOMidX = _r393_t1.CorrectionOMidX;
        var r393_AdviceStroke = _r393_t1.AdviceStroke;
        var r393_AdviceStroke2 = _r393_t1.AdviceStroke2;
        var r393_OverlayStroke = _r393_t1.OverlayStroke;
        var r393_ShoulderFine = _r393_t1.ShoulderFine;
        var r393_shoulderMidSkew = _r393_t1.shoulderMidSkew;
        var r393_MidJutSide = _r393_t1.MidJutSide;
        var r393_HSwToV = _r393_t1.HSwToV;
        var _r393_t2 = r393_xn$Capture$2Lrc8.SpiroFns;
        var r393_g4 = _r393_t2.g4;
        var r393_g2 = _r393_t2.g2;
        var r393_corner = _r393_t2.corner;
        var r393_flat = _r393_t2.flat;
        var r393_curl = _r393_t2.curl;
        var r393_end = _r393_t2.end;
        var r393_straight = _r393_t2.straight;
        var r393_widths = _r393_t2.widths;
        var r393_heading = _r393_t2.heading;
        var r393_important = _r393_t2.important;
        var r393_alsoThru = _r393_t2.alsoThru;
        var r393_alsoThruThem = _r393_t2.alsoThruThem;
        var r393_quadControls = _r393_t2.quadControls;
        var r393_archv = _r393_t2.archv;
        var r393_arcvh = _r393_t2.arcvh;
        var r393_dispiro = _r393_t2.dispiro;
        var r393_xn$spirooutline$1aao = _r393_t2['spiro-outline'];
        var _r393_t3 = r393_xn$Capture$2Lrc8.BooleFns;
        var r393_union = _r393_t3.union;
        var r393_intersection = _r393_t3.intersection;
        var r393_difference = _r393_t3.difference;
        var _r393_t4 = r393_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r393_xn$noshape$3cah = _r393_t4['no-shape'];
        var r393_tagged = _r393_t4.tagged;
        var r393_Rect = _r393_t4.Rect;
        var r393_HSerif = _r393_t4.HSerif;
        var r393_HBar = _r393_t4.HBar;
        var r393_HOverlayBar = _r393_t4.HOverlayBar;
        var r393_VBar = _r393_t4.VBar;
        var r393_FlipAround = _r393_t4.FlipAround;
        var r393_xn$withtransform$5sIl = _r393_t4['with-transform'];
        var r393_ExtLineCenter = _r393_t4.ExtLineCenter;
        var r393_MaskAbove = _r393_t4.MaskAbove;
        var r393_MaskBelow = _r393_t4.MaskBelow;
        var _r393_t5 = r393_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r393_xn$referglyph$1aao = _r393_t5['refer-glyph'];
        var _r393_t6 = r393_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r393_ExtendAboveBaseAnchors = _r393_t6.ExtendAboveBaseAnchors;
        var r393_ExtendBelowBaseAnchors = _r393_t6.ExtendBelowBaseAnchors;
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r398_t0, _r398_t1;
            return { 'RightwardTailedBar': r393_RightwardTailedBar };
        });
        var r393_RightwardTailedBar = function () {
            var _r399_t6;
            var _r399_t7 = arguments;
            var _r399_t0 = [].slice.call(_r399_t7, 0);
            var _r399_t1 = [];
            var _r399_t2 = 0;
            while (_r399_t2 < _r399_t0.length) {
                if (!(_r399_t0[_r399_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r399_t1.push(_r399_t0[_r399_t2]);
                _r399_t2 = _r399_t2 + 1;
            }
            var _r399_t3 = _r399_t0;
            var _r399_t4 = _r399_t3.length;
            var _r399_t5 = 0;
            while (_r399_t5 < _r399_t4) {
                _r399_t2 = _r399_t3[_r399_t5];
                if (_r399_t2 && _r399_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'x')
                    r399_x = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'low')
                    r399_low = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'high')
                    r399_high = _r399_t2.right;
                if (_r399_t2 && _r399_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r399_t2.left === 'sw')
                    r399_sw = _r399_t2.right;
                _r399_t5 = _r399_t5 + 1;
            }
            var r399_x = r1_fallback(r399_x, _r399_t1[0]);
            var r399_low = r1_fallback(r399_low, _r399_t1[1]);
            var r399_high = r1_fallback(r399_high, _r399_t1[2]);
            var r399_sw = r1_fallback(r399_sw, _r399_t1[3], r393_Stroke);
            var r399_hookDepth = Math.max(r393_SideJut, r393_AdviceStroke(8), r393_SB * 0.625);
            var r399_hookTurn = Math.max(r393_AdviceStroke(16), r399_hookDepth - r393_AdviceStroke(16));
            var r399_overshoot = r393_O * 1;
            return r393_dispiro(r393_flat(r399_x - r393_HSwToV(r399_sw), r399_high, r393_widths.lhs.heading(r399_sw, r393_Downward)), r393_curl(r399_x - r393_HSwToV(r399_sw), r399_low + r399_overshoot + r399_sw + r399_hookTurn, r393_heading(r393_Downward)), r393_arcvh(), r393_flat(r399_x + r399_hookTurn, r399_low + r399_overshoot, r393_heading(r393_Rightward)), r393_curl(r399_x + r399_hookDepth + r399_sw * r393_TanSlope, r399_low + r399_overshoot));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r405_t0, _r405_t1;
            return { 'InvRightwardTailedBar': r393_InvRightwardTailedBar };
        });
        var r393_InvRightwardTailedBar = function () {
            var _r406_t6;
            var _r406_t7 = arguments;
            var _r406_t0 = [].slice.call(_r406_t7, 0);
            var _r406_t1 = [];
            var _r406_t2 = 0;
            while (_r406_t2 < _r406_t0.length) {
                if (!(_r406_t0[_r406_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r406_t1.push(_r406_t0[_r406_t2]);
                _r406_t2 = _r406_t2 + 1;
            }
            var _r406_t3 = _r406_t0;
            var _r406_t4 = _r406_t3.length;
            var _r406_t5 = 0;
            while (_r406_t5 < _r406_t4) {
                _r406_t2 = _r406_t3[_r406_t5];
                if (_r406_t2 && _r406_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r406_t2.left === 'x')
                    r406_x = _r406_t2.right;
                if (_r406_t2 && _r406_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r406_t2.left === 'low')
                    r406_low = _r406_t2.right;
                if (_r406_t2 && _r406_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r406_t2.left === 'high')
                    r406_high = _r406_t2.right;
                if (_r406_t2 && _r406_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r406_t2.left === 'sw')
                    r406_sw = _r406_t2.right;
                _r406_t5 = _r406_t5 + 1;
            }
            var r406_x = r1_fallback(r406_x, _r406_t1[0]);
            var r406_low = r1_fallback(r406_low, _r406_t1[1]);
            var r406_high = r1_fallback(r406_high, _r406_t1[2]);
            var r406_sw = r1_fallback(r406_sw, _r406_t1[3], r393_Stroke);
            var r406_hookDepth = Math.max(r393_SideJut, r393_AdviceStroke(8), r393_SB * 0.625);
            var r406_hookTurn = Math.max(r393_AdviceStroke(16), r406_hookDepth - r393_AdviceStroke(16));
            var r406_overshoot = r393_O * 1;
            return r393_dispiro(r393_flat(r406_x - r393_HSwToV(r406_sw), r406_low, r393_widths.rhs.heading(r406_sw, r393_Upward)), r393_curl(r406_x - r393_HSwToV(r406_sw), r406_high - r406_overshoot - r406_sw - r406_hookTurn, r393_heading(r393_Upward)), r393_arcvh(), r393_flat(r406_x + r406_hookTurn, r406_high - r406_overshoot, r393_heading(r393_Rightward)), r393_curl(r406_x + r406_hookDepth + r406_sw * r393_TanSlope, r406_high - r406_overshoot));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r412_t0, _r412_t1;
            return { 'DToothlessRise': r393_DToothlessRise };
        });
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r414_t0, _r414_t1;
            return { 'DMBlend': r393_DMBlend };
        });
        var r393_DToothlessRise = r393_Hook * 0.25 + r393_Stroke / 16;
        var r393_DMBlend = 0.8;
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r416_t0, _r416_t1;
            return { 'CurlyTail': r393_CurlyTail };
        });
        var r393_CurlyTail = function () {
            var _r417_t6;
            var _r417_t7 = arguments;
            var _r417_t0 = [].slice.call(_r417_t7, 0);
            var _r417_t1 = [];
            var _r417_t2 = 0;
            while (_r417_t2 < _r417_t0.length) {
                if (!(_r417_t0[_r417_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r417_t1.push(_r417_t0[_r417_t2]);
                _r417_t2 = _r417_t2 + 1;
            }
            var _r417_t3 = _r417_t0;
            var _r417_t4 = _r417_t3.length;
            var _r417_t5 = 0;
            while (_r417_t5 < _r417_t4) {
                _r417_t2 = _r417_t3[_r417_t5];
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'fine')
                    r417_fine = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'rinner')
                    r417_rinner = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'xleft')
                    r417_xleft = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'bottom')
                    r417_bottom = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'right')
                    r417_right = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'x2')
                    r417_x2 = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'y2')
                    r417_y2 = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'adj')
                    r417_adj = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'adj2')
                    r417_adj2 = _r417_t2.right;
                if (_r417_t2 && _r417_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r417_t2.left === 'adj3')
                    r417_adj3 = _r417_t2.right;
                _r417_t5 = _r417_t5 + 1;
            }
            var r417_fine = r1_fallback(r417_fine, _r417_t1[0]);
            var r417_rinner = r1_fallback(r417_rinner, _r417_t1[1]);
            var r417_xleft = r1_fallback(r417_xleft, _r417_t1[2]);
            var r417_bottom = r1_fallback(r417_bottom, _r417_t1[3]);
            var r417_right = r1_fallback(r417_right, _r417_t1[4]);
            var r417_x2 = r1_fallback(r417_x2, _r417_t1[5]);
            var r417_y2 = r1_fallback(r417_y2, _r417_t1[6]);
            var r417_adj = r1_fallback(r417_adj, _r417_t1[7], 0.4);
            var r417_adj2 = r1_fallback(r417_adj2, _r417_t1[8], 0.4);
            var r417_adj3 = r1_fallback(r417_adj3, _r417_t1[9], 0);
            var r417_ltr = r417_right > r417_xleft;
            r417_right = r417_right - r393_HSwToV(r417_fine) * (r417_ltr ? 1 : -1);
            var r417_mid = r1_mix(r1_mix(r417_xleft, r417_right, 0.5), r417_right - r417_rinner * (r417_ltr ? 1 : -1), r417_adj);
            var r417_midu = r1_mix(r1_mix(r417_xleft, r417_right, 0.5), r417_right - r417_rinner * (r417_ltr ? 1 : -1), r417_adj2);
            return [
                r393_g4[r417_ltr ? 'right' : 'left'].mid(r417_mid + r393_CorrectionOMidX * r417_fine * r417_adj3 * (r417_ltr ? 1 : -1), r417_bottom + r417_fine + r393_O, r393_widths(r417_ltr ? 0 : r417_fine, r417_ltr ? r417_fine : 0)),
                r393_archv(2),
                r393_g4.up.mid(r417_right, r417_bottom + r417_fine + r417_rinner),
                r393_arcvh(2),
                r393_g4(r417_mid, r417_bottom + r417_fine + r417_rinner * 2 - r393_O),
                r393_alsoThruThem([
                    [
                        0.25,
                        0.06
                    ],
                    [
                        0.52,
                        0.25
                    ]
                ], r393_important),
                r393_g4(r417_x2, r417_y2)
            ];
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r423_t0, _r423_t1;
            return { 'HCurlyTail': r393_HCurlyTail };
        });
        var r393_HCurlyTail = function (r424_fine, r424_wide, r424_rinner, r424_left, r424_m1, r424__right, r424_x1, r424_x2, r424_y2) {
            var _r424_t0, _r424_t1;
            return function () {
                var _r426_t1;
                var _r426_t0 = this;
                var r426_currentGlyph = _r426_t0;
                var r426_right = r424__right - r424_fine;
                var r426_mid = r426_right - r424_rinner + r393_O;
                r426_currentGlyph.include(r393_dispiro(r393_widths.rhs(r424_wide), r393_flat(r424_left, r424_wide, r393_heading(r393_Rightward)), r393_curl(r424_m1, r424_wide, r393_heading(r393_Rightward)), r393_archv(8), r393_g4(r426_right, r424_wide + r424_rinner - r393_O / 2, r393_widths.heading(0, r424_fine, {
                    'x': -r393_HVContrast,
                    'y': (r424_wide - r424_fine) / (r424_wide + r424_rinner * 2 - r393_O)
                })), r393_arcvh(8), r393_g4.left.mid(r426_mid, r424_wide + r424_rinner * 2 - r393_O, r393_heading(r393_Leftward)), r393_quadControls((r424_x1 - r426_mid) / (r424_x2 - r426_mid), 0, 8), r393_g4(r424_x2, r424_y2)));
                return void 0;
            };
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r429_t0, _r429_t1;
            return { 'ShoulderMidKnotLhs': r393_ShoulderMidKnotLhs };
        });
        var r393_ShoulderMidKnotLhs = function (r430_cx, r430_cy, r430_fine, r430_sw, r430_dirX, r430_dirY) {
            var _r430_t0, _r430_t1;
            var r430_skew = r393_shoulderMidSkew(r430_fine, r430_sw);
            return r393_g4(r430_cx + (r430_dirY * r393_CorrectionOMidX - r430_skew - r430_dirX * r393_TanSlope) * r430_sw, r430_cy, r393_widths.heading(r430_sw, 0, {
                'y': r430_dirY,
                'x': r430_skew
            }));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r432_t0, _r432_t1;
            return { 'ShoulderMidKnotLhsRev': r393_ShoulderMidKnotLhsRev };
        });
        var r393_ShoulderMidKnotLhsRev = function (r433_cx, r433_cy, r433_fine, r433_sw, r433_dirX, r433_dirY) {
            var _r433_t0, _r433_t1;
            var r433_skew = r393_shoulderMidSkew(r433_fine, r433_sw);
            return r393_g4(r433_cx + (r433_dirY * r393_CorrectionOMidX + r433_skew - r433_dirX * r393_TanSlope) * r433_sw, r433_cy, r393_widths.heading(r433_sw, 0, {
                'y': r433_dirY,
                'x': -r433_skew
            }));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r435_t0, _r435_t1;
            return { 'ShoulderMidKnotRhs': r393_ShoulderMidKnotRhs };
        });
        var r393_ShoulderMidKnotRhs = function (r436_cx, r436_cy, r436_fine, r436_sw, r436_dirX, r436_dirY) {
            var _r436_t0, _r436_t1;
            var r436_skew = r393_shoulderMidSkew(r436_fine, r436_sw);
            return r393_g4(r436_cx + (r436_dirY * r393_CorrectionOMidX + r436_skew + r436_dirX * r393_TanSlope) * r436_sw, r436_cy, r393_widths.heading(0, r436_sw, {
                'y': -r436_dirY,
                'x': r436_skew
            }));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r438_t0, _r438_t1;
            return { 'nShoulderKnots': r393_nShoulderKnots };
        });
        var r393_nShoulderKnots = function () {
            var _r439_t6;
            var _r439_t7 = arguments;
            var _r439_t0 = [].slice.call(_r439_t7, 0);
            var _r439_t1 = [];
            var _r439_t2 = 0;
            while (_r439_t2 < _r439_t0.length) {
                if (!(_r439_t0[_r439_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r439_t1.push(_r439_t0[_r439_t2]);
                _r439_t2 = _r439_t2 + 1;
            }
            var _r439_t3 = _r439_t0;
            var _r439_t4 = _r439_t3.length;
            var _r439_t5 = 0;
            while (_r439_t5 < _r439_t4) {
                _r439_t2 = _r439_t3[_r439_t5];
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'left')
                    r439_left = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'right')
                    r439_right = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'fine')
                    r439_fine = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'top')
                    r439_top = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'bottom')
                    r439_bottom = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'ada')
                    r439_ada = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'adb')
                    r439_adb = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'stroke')
                    r439_stroke = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'fMask')
                    r439_fMask = _r439_t2.right;
                if (_r439_t2 && _r439_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r439_t2.left === 'leftY0')
                    r439_leftY0 = _r439_t2.right;
                _r439_t5 = _r439_t5 + 1;
            }
            var r439_left = r1_fallback(r439_left, _r439_t1[0]);
            var r439_right = r1_fallback(r439_right, _r439_t1[1]);
            var r439_fine = r1_fallback(r439_fine, _r439_t1[2], r393_ShoulderFine);
            var r439_top = r1_fallback(r439_top, _r439_t1[3], r393_XH);
            var r439_bottom = r1_fallback(r439_bottom, _r439_t1[4], 0);
            var r439_ada = r1_fallback(r439_ada, _r439_t1[5], r393_SmallArchDepthA);
            var r439_adb = r1_fallback(r439_adb, _r439_t1[6], r393_SmallArchDepthB);
            var r439_stroke = r1_fallback(r439_stroke, _r439_t1[7], r393_Stroke);
            var r439_fMask = r1_fallback(r439_fMask, _r439_t1[8], false);
            var r439_leftY0 = r1_fallback(r439_leftY0, _r439_t1[9], void 0);
            var r439_skew = r393_shoulderMidSkew(r439_fine, r439_stroke);
            var r439_middle = r1_mix(r439_left - r393_HSwToV(r439_stroke), r439_right, 0.5) + (r439_skew - r393_CorrectionOMidX) * r439_stroke;
            return [
                r393_flat(r439_left - r393_HSwToV(r439_fine), r1_fallback(r439_leftY0, r439_top - r439_ada - 2), r393_widths.rhs(r439_fine)),
                r393_curl(r439_left - r393_HSwToV(r439_fine), r439_top - r439_ada),
                r393_arcvh(),
                r393_ShoulderMidKnotRhs(r1_mix(r439_left - r393_HSwToV(r439_stroke), r439_right, 0.5), r439_top - r393_O, r439_fine, r439_stroke, +1, -1),
                r393_archv(),
                r393_flat(r439_right, r439_top - r439_adb, r393_widths.rhs(r439_stroke)),
                (r439_fMask ? r393_corner : r393_curl)(r439_right, r439_bottom, r393_widths.rhs.heading(r439_stroke, r393_Downward)),
                !r439_fMask ? [] : [r393_corner(r439_left, r439_bottom)]
            ];
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r445_t0, _r445_t1;
            return {
                'nShoulder': r393_nShoulder,
                'nShoulderMask': r393_nShoulderMask
            };
        });
        var r393_nShoulder = function () {
            var _r446_t0;
            var _r446_t1 = arguments;
            var r446_a = Array.prototype.slice.call(_r446_t1, 0);
            return function () {
                var _r448_t1;
                var _r448_t0 = this;
                var r448_currentGlyph = _r448_t0;
                r448_currentGlyph.include(r393_dispiro(r393_nShoulderKnots.apply(null, r446_a)));
                return void 0;
            };
        };
        var r393_nShoulderMask = function () {
            var _r450_t0;
            var _r450_t1 = arguments;
            var r450_a = Array.prototype.slice.call(_r450_t1, 0);
            return function () {
                var _r452_t1;
                var _r452_t0 = this;
                var r452_currentGlyph = _r452_t0;
                r452_currentGlyph.include(r393_xn$spirooutline$1aao(r393_nShoulderKnots.apply(null, r450_a.concat([new r393_xn$NamedParameterPair$2Lrc9b('fMask', true)]))));
                return void 0;
            };
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r456_t0, _r456_t1;
            return { 'OBarLeft': r393_OBarLeft };
        });
        var r393_OBarLeft = function () {
            var r459_arcStart, r459_arcEnd, r459_shape, r459_toothless, r459_rounded, r459_toothlessTop, r459_roundedTop;
            var r459_exports = {};
            var r459_kSkewShift = 0.5;
            r459_exports.arcStart = r459_arcStart = function () {
                var _r467_t6;
                var _r467_t7 = arguments;
                var _r467_t0 = [].slice.call(_r467_t7, 0);
                var _r467_t1 = [];
                var _r467_t2 = 0;
                while (_r467_t2 < _r467_t0.length) {
                    if (!(_r467_t0[_r467_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r467_t1.push(_r467_t0[_r467_t2]);
                    _r467_t2 = _r467_t2 + 1;
                }
                var _r467_t3 = _r467_t0;
                var _r467_t4 = _r467_t3.length;
                var _r467_t5 = 0;
                while (_r467_t5 < _r467_t4) {
                    _r467_t2 = _r467_t3[_r467_t5];
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'top')
                        r467_top = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'left')
                        r467_left = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'right')
                        r467_right = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'sw')
                        r467_sw = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'fine')
                        r467_fine = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'ada')
                        r467_ada = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'adb')
                        r467_adb = _r467_t2.right;
                    if (_r467_t2 && _r467_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r467_t2.left === 'ystart')
                        r467_ystart = _r467_t2.right;
                    _r467_t5 = _r467_t5 + 1;
                }
                var r467_top = r1_fallback(r467_top, _r467_t1[0], r393_XH);
                var r467_left = r1_fallback(r467_left, _r467_t1[1], r393_SB);
                var r467_right = r1_fallback(r467_right, _r467_t1[2], r393_RightSB);
                var r467_sw = r1_fallback(r467_sw, _r467_t1[3], r393_Stroke);
                var r467_fine = r1_fallback(r467_fine, _r467_t1[4], r393_ShoulderFine);
                var r467_ada = r1_fallback(r467_ada, _r467_t1[5], r393_SmallArchDepthA);
                var r467_adb = r1_fallback(r467_adb, _r467_t1[6], r393_SmallArchDepthB);
                var r467_ystart = r1_fallback(r467_ystart, _r467_t1[7], r467_top - r467_ada - 0.01);
                var r467_skew = r393_shoulderMidSkew(r467_fine, r467_sw);
                var r467_mt = r1_mix(r467_left, r467_right, 0.5) + (r467_skew + r459_kSkewShift * r393_TanSlope) * r467_sw;
                var r467_xstart = r467_left + (r467_sw - r467_fine) * r393_HVContrast;
                return [
                    r393_flat(r467_xstart, r467_ystart, r393_widths.rhs(r467_fine)),
                    r393_curl(r467_xstart, r467_top - r467_ada),
                    r393_arcvh(),
                    r393_g4(r467_mt, r467_top - r393_O, r393_widths.rhs.heading(r467_sw, {
                        'y': -1,
                        'x': -r467_skew
                    })),
                    r393_archv()
                ];
            };
            r459_exports.arcEnd = r459_arcEnd = function () {
                var _r473_t6;
                var _r473_t7 = arguments;
                var _r473_t0 = [].slice.call(_r473_t7, 0);
                var _r473_t1 = [];
                var _r473_t2 = 0;
                while (_r473_t2 < _r473_t0.length) {
                    if (!(_r473_t0[_r473_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r473_t1.push(_r473_t0[_r473_t2]);
                    _r473_t2 = _r473_t2 + 1;
                }
                var _r473_t3 = _r473_t0;
                var _r473_t4 = _r473_t3.length;
                var _r473_t5 = 0;
                while (_r473_t5 < _r473_t4) {
                    _r473_t2 = _r473_t3[_r473_t5];
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'bot')
                        r473_bot = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'left')
                        r473_left = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'right')
                        r473_right = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'sw')
                        r473_sw = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'fine')
                        r473_fine = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'ada')
                        r473_ada = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'adb')
                        r473_adb = _r473_t2.right;
                    if (_r473_t2 && _r473_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r473_t2.left === 'yend')
                        r473_yend = _r473_t2.right;
                    _r473_t5 = _r473_t5 + 1;
                }
                var r473_bot = r1_fallback(r473_bot, _r473_t1[0], 0);
                var r473_left = r1_fallback(r473_left, _r473_t1[1], r393_SB);
                var r473_right = r1_fallback(r473_right, _r473_t1[2], r393_RightSB);
                var r473_sw = r1_fallback(r473_sw, _r473_t1[3], r393_Stroke);
                var r473_fine = r1_fallback(r473_fine, _r473_t1[4], r393_ShoulderFine);
                var r473_ada = r1_fallback(r473_ada, _r473_t1[5], r393_SmallArchDepthA);
                var r473_adb = r1_fallback(r473_adb, _r473_t1[6], r393_SmallArchDepthB);
                var r473_yend = r1_fallback(r473_yend, _r473_t1[7], r473_bot + r473_ada + 0.01);
                var r473_skew = r393_shoulderMidSkew(r473_fine, r473_sw);
                var r473_mb = r1_mix(r473_left, r473_right, 0.5) + (r473_skew + r459_kSkewShift * r393_TanSlope) * r473_sw;
                var r473_xend = r473_left + (r473_sw - r473_fine) * r393_HVContrast;
                return [
                    r393_arcvh(),
                    r393_g4(r473_mb, r473_bot + r393_O, r393_widths.rhs.heading(r473_sw, {
                        'y': 1,
                        'x': -r473_skew
                    })),
                    r393_archv(),
                    r393_flat(r473_xend, r473_bot + r473_adb, r393_widths.rhs(r473_fine)),
                    r393_curl(r473_xend, r473_yend)
                ];
            };
            r459_exports.shape = r459_shape = function () {
                var _r479_t6;
                var _r479_t7 = arguments;
                var _r479_t0 = [].slice.call(_r479_t7, 0);
                var _r479_t1 = [];
                var _r479_t2 = 0;
                while (_r479_t2 < _r479_t0.length) {
                    if (!(_r479_t0[_r479_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r479_t1.push(_r479_t0[_r479_t2]);
                    _r479_t2 = _r479_t2 + 1;
                }
                var _r479_t3 = _r479_t0;
                var _r479_t4 = _r479_t3.length;
                var _r479_t5 = 0;
                while (_r479_t5 < _r479_t4) {
                    _r479_t2 = _r479_t3[_r479_t5];
                    if (_r479_t2 && _r479_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r479_t2.left === 'top')
                        r479_top = _r479_t2.right;
                    if (_r479_t2 && _r479_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r479_t2.left === 'left')
                        r479_left = _r479_t2.right;
                    if (_r479_t2 && _r479_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r479_t2.left === 'right')
                        r479_right = _r479_t2.right;
                    if (_r479_t2 && _r479_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r479_t2.left === 'sw')
                        r479_sw = _r479_t2.right;
                    if (_r479_t2 && _r479_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r479_t2.left === 'fine')
                        r479_fine = _r479_t2.right;
                    if (_r479_t2 && _r479_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r479_t2.left === 'ada')
                        r479_ada = _r479_t2.right;
                    if (_r479_t2 && _r479_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r479_t2.left === 'adb')
                        r479_adb = _r479_t2.right;
                    _r479_t5 = _r479_t5 + 1;
                }
                var r479_top = r1_fallback(r479_top, _r479_t1[0], r393_XH);
                var r479_left = r1_fallback(r479_left, _r479_t1[1], r393_SB);
                var r479_right = r1_fallback(r479_right, _r479_t1[2], r393_RightSB);
                var r479_sw = r1_fallback(r479_sw, _r479_t1[3], r393_Stroke);
                var r479_fine = r1_fallback(r479_fine, _r479_t1[4], r393_ShoulderFine);
                var r479_ada = r1_fallback(r479_ada, _r479_t1[5], r393_SmallArchDepthA);
                var r479_adb = r1_fallback(r479_adb, _r479_t1[6], r393_SmallArchDepthB);
                var r479_skew = r393_shoulderMidSkew(r479_fine, r479_sw);
                var r479_mt = r1_mix(r479_left, r479_right, 0.5) + (r479_skew + r459_kSkewShift * r393_TanSlope) * r479_sw;
                var r479_mb = r1_mix(r479_left, r479_right, 0.5) + (r479_skew + r459_kSkewShift * r393_TanSlope) * r479_sw;
                return r393_dispiro(r393_widths.lhs(r479_fine), r393_flat(r479_left + (r479_sw - r479_fine) * r393_HVContrast, r479_top - r479_ada - 0.01), r393_curl(r479_left + (r479_sw - r479_fine) * r393_HVContrast, 0 + r479_adb), r393_arcvh(), r393_g4(r479_mb, r393_O, r393_widths.lhs.heading(r479_sw, {
                    'y': 1,
                    'x': -r479_skew
                })), r393_archv(), r393_flat(r479_right - r393_OX, 0 + r479_ada), r393_curl(r479_right - r393_OX, r479_top - r479_adb), r393_arcvh(), r393_g4(r479_mt, r479_top - r393_O, r393_widths.lhs.heading(r479_sw, {
                    'y': -1,
                    'x': -r479_skew
                })), r393_archv(), r393_flat(r479_left + (r479_sw - r479_fine) * r393_HVContrast, r479_top - r479_ada, r393_widths.lhs(r479_fine)), r393_curl(r479_left + (r479_sw - r479_fine) * r393_HVContrast, r479_top - r479_ada - 0.01));
            };
            r459_exports.toothless = r459_toothless = function () {
                var _r485_t6;
                var _r485_t7 = arguments;
                var _r485_t0 = [].slice.call(_r485_t7, 0);
                var _r485_t1 = [];
                var _r485_t2 = 0;
                while (_r485_t2 < _r485_t0.length) {
                    if (!(_r485_t0[_r485_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r485_t1.push(_r485_t0[_r485_t2]);
                    _r485_t2 = _r485_t2 + 1;
                }
                var _r485_t3 = _r485_t0;
                var _r485_t4 = _r485_t3.length;
                var _r485_t5 = 0;
                while (_r485_t5 < _r485_t4) {
                    _r485_t2 = _r485_t3[_r485_t5];
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'top')
                        r485_top = _r485_t2.right;
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'left')
                        r485_left = _r485_t2.right;
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'right')
                        r485_right = _r485_t2.right;
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'rise')
                        r485_rise = _r485_t2.right;
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'sw')
                        r485_sw = _r485_t2.right;
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'mBlend')
                        r485_mBlend = _r485_t2.right;
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'ada')
                        r485_ada = _r485_t2.right;
                    if (_r485_t2 && _r485_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r485_t2.left === 'adb')
                        r485_adb = _r485_t2.right;
                    _r485_t5 = _r485_t5 + 1;
                }
                var r485_top = r1_fallback(r485_top, _r485_t1[0], r393_XH);
                var r485_left = r1_fallback(r485_left, _r485_t1[1], r393_SB);
                var r485_right = r1_fallback(r485_right, _r485_t1[2], r393_RightSB);
                var r485_rise = r1_fallback(r485_rise, _r485_t1[3], r393_SHook);
                var r485_sw = r1_fallback(r485_sw, _r485_t1[4], r393_Stroke);
                var r485_mBlend = r1_fallback(r485_mBlend, _r485_t1[5], Math.sqrt(1 / 2));
                var r485_ada = r1_fallback(r485_ada, _r485_t1[6], r393_SmallArchDepthA);
                var r485_adb = r1_fallback(r485_adb, _r485_t1[7], r393_SmallArchDepthB);
                var r485_fine = r393_ShoulderFine;
                var r485_skew = r393_shoulderMidSkew(r485_fine, r485_sw);
                var r485_mt = r1_mix(r485_left, r485_right, 0.5) + (r485_skew + r459_kSkewShift * r393_TanSlope) * r485_sw;
                var r485_mb = r1_mix(r485_left, r485_right, 0.5) + r393_CorrectionOMidX * r485_sw;
                return r393_dispiro(r393_g4(r485_left, r485_rise, r393_widths.lhs(r485_sw)), r393_alsoThru.g2(0.5, r485_mBlend, r393_important), r393_g4.right.mid(r485_mb, r393_O), r393_archv(), r393_flat(r485_right - r393_OX, 0 + r485_ada), r393_curl(r485_right - r393_OX, r485_top - r485_adb), r393_arcvh(), r393_g4(r485_mt, r485_top - r393_O, r393_widths.heading(r485_sw, 0, {
                    'y': -1,
                    'x': -r485_skew
                })), r393_archv(), r393_flat(r485_left + (r485_sw - r485_fine) * r393_HVContrast, r485_top - r485_ada, r393_widths.lhs(r485_fine)), r393_curl(r485_left + (r485_sw - r485_fine) * r393_HVContrast, r485_top - r485_ada - 0.01, r393_widths.lhs(r485_fine)));
            };
            r459_exports.rounded = r459_rounded = function () {
                var _r491_t6;
                var _r491_t7 = arguments;
                var _r491_t0 = [].slice.call(_r491_t7, 0);
                var _r491_t1 = [];
                var _r491_t2 = 0;
                while (_r491_t2 < _r491_t0.length) {
                    if (!(_r491_t0[_r491_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r491_t1.push(_r491_t0[_r491_t2]);
                    _r491_t2 = _r491_t2 + 1;
                }
                var _r491_t3 = _r491_t0;
                var _r491_t4 = _r491_t3.length;
                var _r491_t5 = 0;
                while (_r491_t5 < _r491_t4) {
                    _r491_t2 = _r491_t3[_r491_t5];
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'top')
                        r491_top = _r491_t2.right;
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'left')
                        r491_left = _r491_t2.right;
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'right')
                        r491_right = _r491_t2.right;
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'yTerminal')
                        r491_yTerminal = _r491_t2.right;
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'sw')
                        r491_sw = _r491_t2.right;
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'fine')
                        r491_fine = _r491_t2.right;
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'ada')
                        r491_ada = _r491_t2.right;
                    if (_r491_t2 && _r491_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r491_t2.left === 'adb')
                        r491_adb = _r491_t2.right;
                    _r491_t5 = _r491_t5 + 1;
                }
                var r491_top = r1_fallback(r491_top, _r491_t1[0], r393_XH);
                var r491_left = r1_fallback(r491_left, _r491_t1[1], r393_SB);
                var r491_right = r1_fallback(r491_right, _r491_t1[2], r393_RightSB);
                var r491_yTerminal = r1_fallback(r491_yTerminal, _r491_t1[3], r393_CAP);
                var r491_sw = r1_fallback(r491_sw, _r491_t1[4], r393_Stroke);
                var r491_fine = r1_fallback(r491_fine, _r491_t1[5], r393_ShoulderFine);
                var r491_ada = r1_fallback(r491_ada, _r491_t1[6], r393_SmallArchDepthA);
                var r491_adb = r1_fallback(r491_adb, _r491_t1[7], r393_SmallArchDepthB);
                var r491_skew = r393_shoulderMidSkew(r491_fine, r491_sw);
                var r491_mt = r1_mix(r491_left, r491_right, 0.5) + (r491_skew + r459_kSkewShift * r393_TanSlope) * r491_sw;
                var r491_mb = r1_mix(r491_left, r491_right, 0.5) + r393_CorrectionOMidX * r491_sw;
                return r393_dispiro(r393_flat(r491_left, r491_yTerminal, r393_widths.lhs.heading(r491_sw, r393_Downward)), r393_curl(r491_left, Math.min(r491_adb, r491_yTerminal - 0.01)), r393_arcvh(), r393_g4(r491_mb, r393_O), r393_archv(), r393_flat(r491_right - r393_OX, 0 + r491_ada), r393_curl(r491_right - r393_OX, r491_top - r491_adb), r393_arcvh(), r393_g4(r491_mt, r491_top - r393_O, r393_widths.heading(r491_sw, 0, {
                    'y': -1,
                    'x': -r491_skew
                })), r393_archv(), r393_flat(r491_left + (r491_sw - r491_fine) * r393_HVContrast, r491_top - r491_ada + 0.01, r393_widths.lhs(r491_fine)), r393_curl(r491_left + (r491_sw - r491_fine) * r393_HVContrast, r491_top - r491_ada, r393_widths.lhs(r491_fine)));
            };
            r459_exports.toothlessTop = r459_toothlessTop = function () {
                var _r497_t6;
                var _r497_t7 = arguments;
                var _r497_t0 = [].slice.call(_r497_t7, 0);
                var _r497_t1 = [];
                var _r497_t2 = 0;
                while (_r497_t2 < _r497_t0.length) {
                    if (!(_r497_t0[_r497_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r497_t1.push(_r497_t0[_r497_t2]);
                    _r497_t2 = _r497_t2 + 1;
                }
                var _r497_t3 = _r497_t0;
                var _r497_t4 = _r497_t3.length;
                var _r497_t5 = 0;
                while (_r497_t5 < _r497_t4) {
                    _r497_t2 = _r497_t3[_r497_t5];
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'top')
                        r497_top = _r497_t2.right;
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'left')
                        r497_left = _r497_t2.right;
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'right')
                        r497_right = _r497_t2.right;
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'rise')
                        r497_rise = _r497_t2.right;
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'sw')
                        r497_sw = _r497_t2.right;
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'mBlend')
                        r497_mBlend = _r497_t2.right;
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'ada')
                        r497_ada = _r497_t2.right;
                    if (_r497_t2 && _r497_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r497_t2.left === 'adb')
                        r497_adb = _r497_t2.right;
                    _r497_t5 = _r497_t5 + 1;
                }
                var r497_top = r1_fallback(r497_top, _r497_t1[0], r393_XH);
                var r497_left = r1_fallback(r497_left, _r497_t1[1], r393_SB);
                var r497_right = r1_fallback(r497_right, _r497_t1[2], r393_RightSB);
                var r497_rise = r1_fallback(r497_rise, _r497_t1[3], r393_SHook);
                var r497_sw = r1_fallback(r497_sw, _r497_t1[4], r393_Stroke);
                var r497_mBlend = r1_fallback(r497_mBlend, _r497_t1[5], Math.sqrt(1 / 2));
                var r497_ada = r1_fallback(r497_ada, _r497_t1[6], r393_SmallArchDepthA);
                var r497_adb = r1_fallback(r497_adb, _r497_t1[7], r393_SmallArchDepthB);
                var r497_fine = r393_ShoulderFine;
                var r497_skew = r393_shoulderMidSkew(r497_fine);
                var r497_mt = r1_mix(r497_left, r497_right, 0.5) - r393_CorrectionOMidX * r497_sw;
                var r497_mb = r1_mix(r497_left, r497_right, 0.5) + (r497_skew + r459_kSkewShift * r393_TanSlope) * r497_sw;
                return r393_dispiro(r393_flat(r497_left + (r497_sw - r497_fine) * r393_HVContrast, r497_top - r497_ada - 0.01, r393_widths.lhs(r497_fine)), r393_curl(r497_left + (r497_sw - r497_fine) * r393_HVContrast, 0 + r497_adb, r393_widths.lhs(r497_fine)), r393_arcvh(), r393_g4(r497_mb, r393_O, r393_widths.heading(r497_sw, 0, {
                    'y': 1,
                    'x': -r497_skew
                })), r393_archv(), r393_flat(r497_right - r393_OX, 0 + r497_ada), r393_curl(r497_right - r393_OX, r497_top - r497_adb), r393_arcvh(), r393_g4(r497_mt, r497_top - r393_O, r393_widths.lhs(r497_sw)), r393_alsoThru.g2(0.5, 1 - r497_mBlend, r393_important), r393_g4(r497_left, r497_top - r497_rise, r393_widths.lhs(r497_sw)));
            };
            r459_exports.roundedTop = r459_roundedTop = function () {
                var _r503_t6;
                var _r503_t7 = arguments;
                var _r503_t0 = [].slice.call(_r503_t7, 0);
                var _r503_t1 = [];
                var _r503_t2 = 0;
                while (_r503_t2 < _r503_t0.length) {
                    if (!(_r503_t0[_r503_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r503_t1.push(_r503_t0[_r503_t2]);
                    _r503_t2 = _r503_t2 + 1;
                }
                var _r503_t3 = _r503_t0;
                var _r503_t4 = _r503_t3.length;
                var _r503_t5 = 0;
                while (_r503_t5 < _r503_t4) {
                    _r503_t2 = _r503_t3[_r503_t5];
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'top')
                        r503_top = _r503_t2.right;
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'left')
                        r503_left = _r503_t2.right;
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'right')
                        r503_right = _r503_t2.right;
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'yTerminal')
                        r503_yTerminal = _r503_t2.right;
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'sw')
                        r503_sw = _r503_t2.right;
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'fine')
                        r503_fine = _r503_t2.right;
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'ada')
                        r503_ada = _r503_t2.right;
                    if (_r503_t2 && _r503_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r503_t2.left === 'adb')
                        r503_adb = _r503_t2.right;
                    _r503_t5 = _r503_t5 + 1;
                }
                var r503_top = r1_fallback(r503_top, _r503_t1[0], r393_XH);
                var r503_left = r1_fallback(r503_left, _r503_t1[1], r393_SB);
                var r503_right = r1_fallback(r503_right, _r503_t1[2], r393_RightSB);
                var r503_yTerminal = r1_fallback(r503_yTerminal, _r503_t1[3], r393_Descender);
                var r503_sw = r1_fallback(r503_sw, _r503_t1[4], r393_Stroke);
                var r503_fine = r1_fallback(r503_fine, _r503_t1[5], r393_ShoulderFine);
                var r503_ada = r1_fallback(r503_ada, _r503_t1[6], r393_SmallArchDepthA);
                var r503_adb = r1_fallback(r503_adb, _r503_t1[7], r393_SmallArchDepthB);
                var r503_skew = r393_shoulderMidSkew(r503_fine);
                var r503_mt = r1_mix(r503_left, r503_right, 0.5) - r393_CorrectionOMidX * r503_sw;
                var r503_mb = r1_mix(r503_left, r503_right, 0.5) + (r503_skew + r459_kSkewShift * r393_TanSlope) * r503_sw;
                return r393_dispiro(r393_flat(r503_left + (r503_sw - r503_fine) * r393_HVContrast, r503_top - r503_ada - 0.01, r393_widths.lhs(r503_fine)), r393_curl(r503_left + (r503_sw - r503_fine) * r393_HVContrast, 0 + r503_adb, r393_widths.lhs(r503_fine)), r393_arcvh(), r393_g4(r503_mb, r393_O, r393_widths.heading(r503_sw, 0, {
                    'y': 1,
                    'x': -r503_skew
                })), r393_archv(), r393_flat(r503_right - r393_OX, 0 + r503_ada), r393_curl(r503_right - r393_OX, r503_top - r503_adb), r393_arcvh(), r393_g4(r503_mt, r503_top - r393_O, r393_widths.lhs(r503_sw)), r393_archv(), r393_flat(r503_left, Math.max(r503_yTerminal + 0.01 - r393_TanSlope * r393_Stroke, r503_top - r503_ada)), r393_curl(r503_left, r503_yTerminal, r393_widths.lhs.heading(r503_sw, r393_Downward)));
            };
            return r459_exports;
        }();
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r509_t0, _r509_t1;
            return { 'OBarRight': r393_OBarRight };
        });
        var r393_OBarRight = function () {
            var r512_arcStart, r512_arcEnd, r512_shape, r512_toothless, r512_rounded;
            var r512_exports = {};
            var r512_kSkewShift = 0.5;
            r512_exports.arcStart = r512_arcStart = function () {
                var _r520_t6;
                var _r520_t7 = arguments;
                var _r520_t0 = [].slice.call(_r520_t7, 0);
                var _r520_t1 = [];
                var _r520_t2 = 0;
                while (_r520_t2 < _r520_t0.length) {
                    if (!(_r520_t0[_r520_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r520_t1.push(_r520_t0[_r520_t2]);
                    _r520_t2 = _r520_t2 + 1;
                }
                var _r520_t3 = _r520_t0;
                var _r520_t4 = _r520_t3.length;
                var _r520_t5 = 0;
                while (_r520_t5 < _r520_t4) {
                    _r520_t2 = _r520_t3[_r520_t5];
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'top')
                        r520_top = _r520_t2.right;
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'left')
                        r520_left = _r520_t2.right;
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'right')
                        r520_right = _r520_t2.right;
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'sw')
                        r520_sw = _r520_t2.right;
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'fine')
                        r520_fine = _r520_t2.right;
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'ada')
                        r520_ada = _r520_t2.right;
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'adb')
                        r520_adb = _r520_t2.right;
                    if (_r520_t2 && _r520_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r520_t2.left === 'ystart')
                        r520_ystart = _r520_t2.right;
                    _r520_t5 = _r520_t5 + 1;
                }
                var r520_top = r1_fallback(r520_top, _r520_t1[0], r393_XH);
                var r520_left = r1_fallback(r520_left, _r520_t1[1], r393_SB);
                var r520_right = r1_fallback(r520_right, _r520_t1[2], r393_RightSB);
                var r520_sw = r1_fallback(r520_sw, _r520_t1[3], r393_Stroke);
                var r520_fine = r1_fallback(r520_fine, _r520_t1[4], r393_ShoulderFine);
                var r520_ada = r1_fallback(r520_ada, _r520_t1[5], r393_SmallArchDepthA);
                var r520_adb = r1_fallback(r520_adb, _r520_t1[6], r393_SmallArchDepthB);
                var r520_ystart = r1_fallback(r520_ystart, _r520_t1[7], r520_top - r520_ada - 0.01);
                var r520_skew = r393_shoulderMidSkew(r520_fine, r520_sw);
                var r520_mt = r1_mix(r520_left, r520_right, 0.5) - (r520_skew + r512_kSkewShift * r393_TanSlope) * r520_sw;
                var r520_xstart = r520_right - (r520_sw - r520_fine) * r393_HVContrast;
                return [
                    r393_flat(r520_xstart, r520_ystart, r393_widths.lhs(r520_fine)),
                    r393_curl(r520_xstart, r520_top - r520_adb),
                    r393_arcvh(),
                    r393_g4(r520_mt, r520_top - r393_O, r393_widths.lhs.heading(r520_sw, {
                        'y': -1,
                        'x': r520_skew
                    })),
                    r393_archv()
                ];
            };
            r512_exports.arcEnd = r512_arcEnd = function () {
                var _r526_t6;
                var _r526_t7 = arguments;
                var _r526_t0 = [].slice.call(_r526_t7, 0);
                var _r526_t1 = [];
                var _r526_t2 = 0;
                while (_r526_t2 < _r526_t0.length) {
                    if (!(_r526_t0[_r526_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r526_t1.push(_r526_t0[_r526_t2]);
                    _r526_t2 = _r526_t2 + 1;
                }
                var _r526_t3 = _r526_t0;
                var _r526_t4 = _r526_t3.length;
                var _r526_t5 = 0;
                while (_r526_t5 < _r526_t4) {
                    _r526_t2 = _r526_t3[_r526_t5];
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'bot')
                        r526_bot = _r526_t2.right;
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'left')
                        r526_left = _r526_t2.right;
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'right')
                        r526_right = _r526_t2.right;
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'sw')
                        r526_sw = _r526_t2.right;
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'fine')
                        r526_fine = _r526_t2.right;
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'ada')
                        r526_ada = _r526_t2.right;
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'adb')
                        r526_adb = _r526_t2.right;
                    if (_r526_t2 && _r526_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r526_t2.left === 'yend')
                        r526_yend = _r526_t2.right;
                    _r526_t5 = _r526_t5 + 1;
                }
                var r526_bot = r1_fallback(r526_bot, _r526_t1[0], 0);
                var r526_left = r1_fallback(r526_left, _r526_t1[1], r393_SB);
                var r526_right = r1_fallback(r526_right, _r526_t1[2], r393_RightSB);
                var r526_sw = r1_fallback(r526_sw, _r526_t1[3], r393_Stroke);
                var r526_fine = r1_fallback(r526_fine, _r526_t1[4], r393_ShoulderFine);
                var r526_ada = r1_fallback(r526_ada, _r526_t1[5], r393_SmallArchDepthA);
                var r526_adb = r1_fallback(r526_adb, _r526_t1[6], r393_SmallArchDepthB);
                var r526_yend = r1_fallback(r526_yend, _r526_t1[7], r526_bot + r526_ada + 0.01);
                var r526_skew = r393_shoulderMidSkew(r526_fine, r526_sw);
                var r526_mb = r1_mix(r526_left, r526_right, 0.5) - (r526_skew + r512_kSkewShift * r393_TanSlope) * r526_sw;
                var r526_xend = r526_right - (r526_sw - r526_fine) * r393_HVContrast;
                return [
                    r393_arcvh(),
                    r393_g4(r526_mb, r526_bot + r393_O, r393_widths.lhs.heading(r526_sw, {
                        'y': 1,
                        'x': r526_skew
                    })),
                    r393_archv(),
                    r393_flat(r526_xend, r526_bot + r526_ada, r393_widths.lhs(r526_fine)),
                    r393_curl(r526_xend, r526_yend)
                ];
            };
            r512_exports.shape = r512_shape = function () {
                var _r532_t6;
                var _r532_t7 = arguments;
                var _r532_t0 = [].slice.call(_r532_t7, 0);
                var _r532_t1 = [];
                var _r532_t2 = 0;
                while (_r532_t2 < _r532_t0.length) {
                    if (!(_r532_t0[_r532_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r532_t1.push(_r532_t0[_r532_t2]);
                    _r532_t2 = _r532_t2 + 1;
                }
                var _r532_t3 = _r532_t0;
                var _r532_t4 = _r532_t3.length;
                var _r532_t5 = 0;
                while (_r532_t5 < _r532_t4) {
                    _r532_t2 = _r532_t3[_r532_t5];
                    if (_r532_t2 && _r532_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r532_t2.left === 'top')
                        r532_top = _r532_t2.right;
                    if (_r532_t2 && _r532_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r532_t2.left === 'left')
                        r532_left = _r532_t2.right;
                    if (_r532_t2 && _r532_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r532_t2.left === 'right')
                        r532_right = _r532_t2.right;
                    if (_r532_t2 && _r532_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r532_t2.left === 'sw')
                        r532_sw = _r532_t2.right;
                    if (_r532_t2 && _r532_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r532_t2.left === 'fine')
                        r532_fine = _r532_t2.right;
                    if (_r532_t2 && _r532_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r532_t2.left === 'ada')
                        r532_ada = _r532_t2.right;
                    if (_r532_t2 && _r532_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r532_t2.left === 'adb')
                        r532_adb = _r532_t2.right;
                    _r532_t5 = _r532_t5 + 1;
                }
                var r532_top = r1_fallback(r532_top, _r532_t1[0], r393_XH);
                var r532_left = r1_fallback(r532_left, _r532_t1[1], r393_SB);
                var r532_right = r1_fallback(r532_right, _r532_t1[2], r393_RightSB);
                var r532_sw = r1_fallback(r532_sw, _r532_t1[3], r393_Stroke);
                var r532_fine = r1_fallback(r532_fine, _r532_t1[4], r393_ShoulderFine);
                var r532_ada = r1_fallback(r532_ada, _r532_t1[5], r393_SmallArchDepthA);
                var r532_adb = r1_fallback(r532_adb, _r532_t1[6], r393_SmallArchDepthB);
                return r393_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r539_t1;
                    var _r539_t0 = this;
                    var r539_currentGlyph = _r539_t0;
                    r539_currentGlyph.include(r393_OBarLeft.shape(new r393_xn$NamedParameterPair$2Lrc9b('top', r532_top), new r393_xn$NamedParameterPair$2Lrc9b('left', r532_left), new r393_xn$NamedParameterPair$2Lrc9b('right', r532_right), new r393_xn$NamedParameterPair$2Lrc9b('sw', r532_sw), new r393_xn$NamedParameterPair$2Lrc9b('fine', r532_fine), new r393_xn$NamedParameterPair$2Lrc9b('ada', r532_ada), new r393_xn$NamedParameterPair$2Lrc9b('adb', r532_adb)));
                    r539_currentGlyph.include(r393_FlipAround(r1_mix(r532_left, r532_right, 0.5), r532_top / 2));
                    return void 0;
                });
            };
            r512_exports.toothless = r512_toothless = function () {
                var _r550_t6;
                var _r550_t7 = arguments;
                var _r550_t0 = [].slice.call(_r550_t7, 0);
                var _r550_t1 = [];
                var _r550_t2 = 0;
                while (_r550_t2 < _r550_t0.length) {
                    if (!(_r550_t0[_r550_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r550_t1.push(_r550_t0[_r550_t2]);
                    _r550_t2 = _r550_t2 + 1;
                }
                var _r550_t3 = _r550_t0;
                var _r550_t4 = _r550_t3.length;
                var _r550_t5 = 0;
                while (_r550_t5 < _r550_t4) {
                    _r550_t2 = _r550_t3[_r550_t5];
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'top')
                        r550_top = _r550_t2.right;
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'left')
                        r550_left = _r550_t2.right;
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'right')
                        r550_right = _r550_t2.right;
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'rise')
                        r550_rise = _r550_t2.right;
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'sw')
                        r550_sw = _r550_t2.right;
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'mBlend')
                        r550_mBlend = _r550_t2.right;
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'ada')
                        r550_ada = _r550_t2.right;
                    if (_r550_t2 && _r550_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r550_t2.left === 'adb')
                        r550_adb = _r550_t2.right;
                    _r550_t5 = _r550_t5 + 1;
                }
                var r550_top = r1_fallback(r550_top, _r550_t1[0], r393_XH);
                var r550_left = r1_fallback(r550_left, _r550_t1[1], r393_SB);
                var r550_right = r1_fallback(r550_right, _r550_t1[2], r393_RightSB);
                var r550_rise = r1_fallback(r550_rise, _r550_t1[3], r393_SHook);
                var r550_sw = r1_fallback(r550_sw, _r550_t1[4], r393_Stroke);
                var r550_mBlend = r1_fallback(r550_mBlend, _r550_t1[5], Math.sqrt(1 / 2));
                var r550_ada = r1_fallback(r550_ada, _r550_t1[6], r393_SmallArchDepthA);
                var r550_adb = r1_fallback(r550_adb, _r550_t1[7], r393_SmallArchDepthB);
                return r393_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r557_t1;
                    var _r557_t0 = this;
                    var r557_currentGlyph = _r557_t0;
                    r557_currentGlyph.include(r393_OBarLeft.toothlessTop(new r393_xn$NamedParameterPair$2Lrc9b('top', r550_top), new r393_xn$NamedParameterPair$2Lrc9b('left', r550_left), new r393_xn$NamedParameterPair$2Lrc9b('right', r550_right), new r393_xn$NamedParameterPair$2Lrc9b('rise', r550_rise), new r393_xn$NamedParameterPair$2Lrc9b('sw', r550_sw), new r393_xn$NamedParameterPair$2Lrc9b('mBlend', r550_mBlend), new r393_xn$NamedParameterPair$2Lrc9b('ada', r550_ada), new r393_xn$NamedParameterPair$2Lrc9b('adb', r550_adb)));
                    r557_currentGlyph.include(r393_FlipAround(r1_mix(r550_left, r550_right, 0.5), r550_top / 2));
                    return void 0;
                });
            };
            r512_exports.rounded = r512_rounded = function () {
                var _r569_t6;
                var _r569_t7 = arguments;
                var _r569_t0 = [].slice.call(_r569_t7, 0);
                var _r569_t1 = [];
                var _r569_t2 = 0;
                while (_r569_t2 < _r569_t0.length) {
                    if (!(_r569_t0[_r569_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r569_t1.push(_r569_t0[_r569_t2]);
                    _r569_t2 = _r569_t2 + 1;
                }
                var _r569_t3 = _r569_t0;
                var _r569_t4 = _r569_t3.length;
                var _r569_t5 = 0;
                while (_r569_t5 < _r569_t4) {
                    _r569_t2 = _r569_t3[_r569_t5];
                    if (_r569_t2 && _r569_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r569_t2.left === 'top')
                        r569_top = _r569_t2.right;
                    if (_r569_t2 && _r569_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r569_t2.left === 'left')
                        r569_left = _r569_t2.right;
                    if (_r569_t2 && _r569_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r569_t2.left === 'right')
                        r569_right = _r569_t2.right;
                    if (_r569_t2 && _r569_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r569_t2.left === 'sw')
                        r569_sw = _r569_t2.right;
                    if (_r569_t2 && _r569_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r569_t2.left === 'yTerminal')
                        r569_yTerminal = _r569_t2.right;
                    if (_r569_t2 && _r569_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r569_t2.left === 'ada')
                        r569_ada = _r569_t2.right;
                    if (_r569_t2 && _r569_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r569_t2.left === 'adb')
                        r569_adb = _r569_t2.right;
                    _r569_t5 = _r569_t5 + 1;
                }
                var r569_top = r1_fallback(r569_top, _r569_t1[0], r393_XH);
                var r569_left = r1_fallback(r569_left, _r569_t1[1], r393_SB);
                var r569_right = r1_fallback(r569_right, _r569_t1[2], r393_RightSB);
                var r569_sw = r1_fallback(r569_sw, _r569_t1[3], r393_Stroke);
                var r569_yTerminal = r1_fallback(r569_yTerminal, _r569_t1[4], r393_CAP);
                var r569_ada = r1_fallback(r569_ada, _r569_t1[5], r393_SmallArchDepthA);
                var r569_adb = r1_fallback(r569_adb, _r569_t1[6], r393_SmallArchDepthB);
                return r393_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r576_t1;
                    var _r576_t0 = this;
                    var r576_currentGlyph = _r576_t0;
                    r576_currentGlyph.include(r393_OBarLeft.roundedTop(new r393_xn$NamedParameterPair$2Lrc9b('top', r569_top), new r393_xn$NamedParameterPair$2Lrc9b('left', r569_left), new r393_xn$NamedParameterPair$2Lrc9b('right', r569_right), new r393_xn$NamedParameterPair$2Lrc9b('sw', r569_sw), new r393_xn$NamedParameterPair$2Lrc9b('yTerminal', r569_top - r569_yTerminal), new r393_xn$NamedParameterPair$2Lrc9b('ada', r569_ada), new r393_xn$NamedParameterPair$2Lrc9b('adb', r569_adb)));
                    r576_currentGlyph.include(r393_FlipAround(r1_mix(r569_left, r569_right, 0.5), r569_top / 2));
                    return void 0;
                });
            };
            return r512_exports;
        }();
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r587_t0, _r587_t1;
            return { 'FlatHookDepth': r393_FlatHookDepth };
        });
        var r393_FlatHookDepth = function (r588_df, r588_s) {
            var _r588_t0, _r588_t1;
            return {
                'x': r1_fallback(r588_s, 1) * r393_FlatHookDepthImpl(Math.min(1, Math.sqrt(r588_df.div)), r393_HVContrast),
                'y': r1_fallback(r588_s, 1) * r393_FlatHookDepthImpl(Math.min(1, Math.sqrt(r588_df.div)), 1)
            };
        };
        var r393_FlatHookDepthImpl = function (r589_sHook, r589_sStroke) {
            var _r589_t0, _r589_t1;
            var r589_kFlathook = 15 / 16;
            return Math.max(r589_kFlathook * r589_sHook * r393_Hook, r589_sStroke * r393_Stroke * 1.375, Math.min(r589_kFlathook * r589_sHook * r393_Hook, r589_sStroke * r393_Stroke * 1.625));
        };
        var _r393_t7 = r393_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r393_markMiddle = _r393_t7.markMiddle;
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r592_t0, _r592_t1;
            return { 'ConnectedCedilla': r393_ConnectedCedilla };
        });
        var r393_ConnectedCedilla = function (r593_src, r593_sel) {
            var _r593_t0, _r593_t1;
            return function () {
                var _r595_t1;
                var _r595_t0 = this;
                var r595_currentGlyph = _r595_t0;
                r595_currentGlyph.include(r393_xn$referglyph$1aao(r593_src), r393_AS_BASE, r393_ALSO_METRICS);
                var r595_mk = r595_currentGlyph.baseAnchors.leaningBelow || r595_currentGlyph.baseAnchors.below;
                var r595_tfm = r393_ApparentTranslate(r595_mk.x - r393_markMiddle, r595_mk.y - 0);
                r595_currentGlyph.include(r393_difference(r393_xn$withtransform$5sIl(r595_tfm, r393_xn$referglyph$1aao('cedillaExtShapeBelow')), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 0.25), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 0.5), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 0.75), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 1), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 1.25), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 1.5), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 1.75), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 2), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 2.25), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 2.5), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 2.75), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 3), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 3.25), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 3.5), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 3.75), r393_xn$referglyph$1aao(r593_src)), r393_xn$withtransform$5sIl(r393_ApparentTranslate(0, r393_Stroke * 4), r393_xn$referglyph$1aao(r593_src))));
                r595_currentGlyph.include(r393_xn$referglyph$1aao('blankBelow'));
                r595_currentGlyph.include(r393_xn$referglyph$1aao('blankLeaningBelow'));
                return void 0;
            };
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r601_t0, _r601_t1;
            return { 'SerifedArcStart': r393_SerifedArcStart };
        });
        var r393_SerifedArcStart = function () {
            var r604_RtlLhs, r604_LtrRhs;
            var r604_exports = {};
            r604_exports.RtlLhs = r604_RtlLhs = function (r612_sx, r612_cx, r612_cy, r612_sw, r612_hook, r612_origBar) {
                var _r612_t0, _r612_t1;
                var r612_barSw = r612_origBar ? r612_sw : r393_ArcStartSerifWidth(r612_sw);
                var r612_fine = r612_barSw * r1_mix(r393_CThinB, r393_ShoulderFine / r393_Stroke, 0.5);
                return [
                    r393_g4.up.start(r612_sx - (r612_barSw - r612_fine) * r393_HVContrast, r612_cy - r612_hook + r393_O * 2, r393_widths.lhs.heading(r612_fine, r393_Upward)),
                    r393_arcvh.superness(2),
                    r393_ShoulderMidKnotLhs(r612_cx, r612_cy - r393_O, r612_fine, r612_sw, -1, -1),
                    r393_archv()
                ];
            };
            r604_exports.LtrRhs = r604_LtrRhs = function (r614_sx, r614_cx, r614_cy, r614_sw, r614_hook, r614_origBar) {
                var _r614_t0, _r614_t1;
                var r614_barSw = r614_origBar ? r614_sw : r393_ArcStartSerifWidth(r614_sw);
                var r614_fine = r614_barSw * r1_mix(r393_CThinB, r393_ShoulderFine / r393_Stroke, 0.5);
                return [
                    r393_g4.up.start(r614_sx + (r614_barSw - r614_fine) * r393_HVContrast, r614_cy - r614_hook + r393_O * 2, r393_widths.rhs.heading(r614_fine, r393_Upward)),
                    r393_arcvh.superness(2),
                    r393_ShoulderMidKnotRhs(r614_cx, r614_cy - r393_O, r614_fine, r614_sw, +1, -1),
                    r393_archv()
                ];
            };
            return r604_exports;
        }();
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r616_t0, _r616_t1;
            return { 'SerifedArcEnd': r393_SerifedArcEnd };
        });
        var r393_SerifedArcEnd = function () {
            var r619_RtlRhs, r619_LtrLhs;
            var r619_exports = {};
            r619_exports.RtlRhs = r619_RtlRhs = function (r627_sx, r627_cx, r627_cy, r627_sw, r627_hook, r627_origBar) {
                var _r627_t0, _r627_t1;
                var r627_barSw = r627_origBar ? r627_sw : r393_ArcStartSerifWidth(r627_sw);
                var r627_fine = r627_barSw * r1_mix(r393_CThinB, r393_ShoulderFine / r393_Stroke, 0.5);
                return [
                    r393_arcvh(),
                    r393_ShoulderMidKnotRhs(r627_cx, r627_cy + r393_O, r627_fine, r627_sw, -1, +1),
                    r393_archv.superness(2),
                    r393_g4.up.end(r627_sx + (r627_barSw - r627_fine) * r393_HVContrast, r627_cy + r627_hook - r393_O * 2, r393_widths.rhs.heading(r627_fine, r393_Upward))
                ];
            };
            r619_exports.LtrLhs = r619_LtrLhs = function (r629_sx, r629_cx, r629_cy, r629_sw, r629_hook, r629_origBar) {
                var _r629_t0, _r629_t1;
                var r629_barSw = r629_origBar ? r629_sw : r393_ArcStartSerifWidth(r629_sw);
                var r629_fine = r629_barSw * r1_mix(r393_CThinB, r393_ShoulderFine / r393_Stroke, 0.5);
                return [
                    r393_arcvh(),
                    r393_ShoulderMidKnotLhs(r629_cx, r629_cy + r393_O, r629_fine, r629_sw, +1, +1),
                    r393_archv.superness(2),
                    r393_g4.up.end(r629_sx - (r629_barSw - r629_fine) * r393_HVContrast, r629_cy + r629_hook - r393_O * 2, r393_widths.lhs.heading(r629_fine, r393_Upward))
                ];
            };
            return r619_exports;
        }();
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r631_t0, _r631_t1;
            return { 'InwardSlabArcStart': r393_InwardSlabArcStart };
        });
        var r393_InwardSlabArcStart = function () {
            var r634_RtlLhs, r634_LtrRhs;
            var r634_exports = {};
            r634_exports.RtlLhs = r634_RtlLhs = function (r642_sx, r642_cx, r642_cy, r642_sw, r642_hook) {
                var _r642_t0, _r642_t1;
                return [
                    r393_g4(r642_sx, r642_cy - r393_DToothlessRise, r393_widths.lhs(r642_sw)),
                    r393_g4(r642_cx - r393_CorrectionOMidX * r642_sw, r642_cy - r393_O),
                    r393_archv()
                ];
            };
            r634_exports.LtrRhs = r634_LtrRhs = function (r644_sx, r644_cx, r644_cy, r644_sw, r644_hook) {
                var _r644_t0, _r644_t1;
                return [
                    r393_g4(r644_sx, r644_cy - r393_DToothlessRise, r393_widths.rhs(r644_sw)),
                    r393_g4(r644_cx - r393_CorrectionOMidX * r644_sw, r644_cy - r393_O),
                    r393_archv()
                ];
            };
            return r634_exports;
        }();
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r646_t0, _r646_t1;
            return { 'InwardSlabArcEnd': r393_InwardSlabArcEnd };
        });
        var r393_InwardSlabArcEnd = function () {
            var r649_RtlRhs, r649_LtrLhs;
            var r649_exports = {};
            r649_exports.RtlRhs = r649_RtlRhs = function (r657_sx, r657_cx, r657_cy, r657_sw, r657_hook) {
                var _r657_t0, _r657_t1;
                return [
                    r393_arcvh(),
                    r393_g4(r657_cx + r393_CorrectionOMidX * r657_sw, r657_cy + r393_O),
                    r393_g4(r657_sx, r657_cy + r393_DToothlessRise, r393_widths.rhs(r657_sw))
                ];
            };
            r649_exports.LtrLhs = r649_LtrLhs = function (r659_sx, r659_cx, r659_cy, r659_sw, r659_hook) {
                var _r659_t0, _r659_t1;
                return [
                    r393_arcvh(),
                    r393_g4(r659_cx + r393_CorrectionOMidX * r659_sw, r659_cy + r393_O),
                    r393_g4(r659_sx, r659_cy + r393_DToothlessRise, r393_widths.lhs(r659_sw))
                ];
            };
            return r649_exports;
        }();
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r661_t0, _r661_t1;
            return { 'ArcStartSerifWidth': r393_ArcStartSerifWidth };
        });
        var r393_ArcStartSerifWidth = function (r662_stroke) {
            var _r662_t0, _r662_t1;
            return r1_clamp(r662_stroke * 0.875, r662_stroke, r393_VJutStroke);
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r664_t0, _r664_t1;
            return { 'ArcStartSerifDepth': r393_ArcStartSerifDepth };
        });
        var r393_ArcStartSerifDepth = function (r665_hook) {
            var _r665_t0, _r665_t1;
            return r665_hook - r393_O * 2;
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r667_t0, _r667_t1;
            return { 'ArcStartSerif': r393_ArcStartSerif };
        });
        var r393_ArcStartSerif = function () {
            var r670_L, r670_R, r670_InwardL, r670_InwardR;
            var r670_exports = {};
            r670_exports.L = r670_L = function (r678_cx, r678_cy, r678_stroke, r678_hook, r678_overflow) {
                var _r678_t0, _r678_t1;
                return r393_tagged('arcStartSerifL', r393_VBar.l(r678_cx, r678_cy - r678_hook + r393_O * 2, r678_cy + r1_fallback(r678_overflow, 0), r393_ArcStartSerifWidth(r678_stroke)));
            };
            r670_exports.R = r670_R = function (r680_cx, r680_cy, r680_stroke, r680_hook, r680_overflow) {
                var _r680_t0, _r680_t1;
                return r393_tagged('arcStartSerifR', r393_VBar.r(r680_cx, r680_cy - r680_hook + r393_O * 2, r680_cy + r1_fallback(r680_overflow, 0), r393_ArcStartSerifWidth(r680_stroke)));
            };
            r670_exports.InwardL = r670_InwardL = function (r682_cx, r682_cy, r682_stroke, r682_hook) {
                var _r682_t0, _r682_t1;
                return r393_tagged('arcStartSerifL', r393_VBar.l(r682_cx, r682_cy - r682_hook - r393_DToothlessRise / 3, r682_cy - r393_DToothlessRise, r393_ArcStartSerifWidth(r682_stroke)));
            };
            r670_exports.InwardR = r670_InwardR = function (r684_cx, r684_cy, r684_stroke, r684_hook) {
                var _r684_t0, _r684_t1;
                return r393_tagged('arcStartSerifR', r393_VBar.r(r684_cx, r684_cy - r684_hook - r393_DToothlessRise / 3, r684_cy - r393_DToothlessRise, r393_ArcStartSerifWidth(r684_stroke)));
            };
            return r670_exports;
        }();
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r686_t0, _r686_t1;
            return { 'ArcEndSerif': r393_ArcEndSerif };
        });
        var r393_ArcEndSerif = function () {
            var r689_L, r689_R, r689_InwardL, r689_InwardR;
            var r689_exports = {};
            r689_exports.L = r689_L = function (r697_cx, r697_cy, r697_stroke, r697_hook, r697_overflow) {
                var _r697_t0, _r697_t1;
                return r393_tagged('arcEndSerifL', r393_VBar.l(r697_cx, r697_cy + r697_hook - r393_O * 2, r697_cy - r1_fallback(r697_overflow, 0), r393_ArcStartSerifWidth(r697_stroke)));
            };
            r689_exports.R = r689_R = function (r699_cx, r699_cy, r699_stroke, r699_hook, r699_overflow) {
                var _r699_t0, _r699_t1;
                return r393_tagged('arcEndSerifR', r393_VBar.r(r699_cx, r699_cy + r699_hook - r393_O * 2, r699_cy - r1_fallback(r699_overflow, 0), r393_ArcStartSerifWidth(r699_stroke)));
            };
            r689_exports.InwardL = r689_InwardL = function (r701_cx, r701_cy, r701_stroke, r701_hook) {
                var _r701_t0, _r701_t1;
                return r393_tagged('arcEndSerifL', r393_VBar.l(r701_cx, r701_cy + r701_hook + r393_DToothlessRise / 2, r701_cy + r393_DToothlessRise, r393_ArcStartSerifWidth(r701_stroke)));
            };
            r689_exports.InwardR = r689_InwardR = function (r703_cx, r703_cy, r703_stroke, r703_hook) {
                var _r703_t0, _r703_t1;
                return r393_tagged('arcEndSerifR', r393_VBar.r(r703_cx, r703_cy + r703_hook + r393_DToothlessRise / 2, r703_cy + r393_DToothlessRise, r393_ArcStartSerifWidth(r703_stroke)));
            };
            return r689_exports;
        }();
        var r393_DiagTailDefaultAngle = 40;
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r705_t0, _r705_t1;
            return { 'DiagonalTailStdDepth': r393_DiagonalTailStdDepth };
        });
        var r393_DiagonalTailStdDepth = function (r706_df, r706_sw) {
            var _r706_t0, _r706_t1;
            return Math.max(0.5 * r706_sw, r706_df.div * r393_para.unitWidthScalar * Math.hypot(r393_HookX, r393_Hook) - 0.25 * r706_sw);
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r708_t0, _r708_t1;
            return { 'DiagonalTailInnerRadius': r393_DiagonalTailInnerRadius };
        });
        var r393_DiagonalTailInnerRadius = function () {
            var _r709_t0, _r709_t1;
            return Math.max(r393_XH / 32, 0.5 * r393_AdviceStroke2(24, 32, r393_XH));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r711_t0, _r711_t1;
            return { 'DiagonalTailF': r393_DiagonalTailF };
        });
        var r393_DiagonalTailF = function (r712_sign, r712_df, r712_cx, r712_cy, r712_rIn, r712_angle, r712_depth, r712_sw) {
            var _r712_t0, _r712_t1;
            var r712_tailAngle = r712_angle / 180 * Math.PI;
            var r712_sinAngle = Math.sin(r712_tailAngle);
            var r712_cosAngle = Math.cos(r712_tailAngle);
            var r712_mocFine = r393_AdviceStroke(3) / r393_Stroke * r712_sw;
            var r712_mocSwMid = r1_mix(r712_sw, r712_mocFine, 2 / 3);
            var r712_fine = r712_mocFine / r1_mix(1, r393_HVContrast, 0.375);
            var r712_swMid = r1_mix(r712_sw, r712_fine, 0.7);
            var r712_dxTurn = r393_HSwToV(0.5 * r712_sw) + r712_rIn * r712_df.div;
            var r712_dxTurnObl = r712_sign > 0 ? -0.75 * r393_TanSlope * r712_rIn : 0.75 * r393_TanSlope * r712_rIn;
            var r712_dyTurn = 0.5 * r712_mocSwMid;
            var r712_dxTailStart = r712_dxTurn + r712_sinAngle * (r712_rIn + 0.5 * r712_mocFine * r1_mix(1, r393_HVContrast, r712_sinAngle));
            var r712_dyTailStart = r712_dyTurn + (1 - r712_cosAngle + (r712_sign > 0 ? 0 : r393_TanSlope)) * (r712_rIn + 0.5 * r712_mocFine);
            var r712_dxDepth = (r712_depth - 0.5 * r712_sw) * r712_cosAngle;
            var r712_dyDepth = (r712_depth - 0.5 * r712_sw) * r712_sinAngle;
            return [
                r393_g4[r712_sign > 0 ? 'right' : 'left'].mid(r712_cx + r712_sign * r712_dxTurn + r712_dxTurnObl, r712_cy + r393_O + r712_dyTurn, r712_sign > 0 ? r393_widths.center.heading(r712_swMid, r393_Rightward) : r393_widths.center.heading(r712_swMid, r393_Leftward)),
                r712_sign <= 0 ? [] : r393_alsoThruThem([
                    r393_DiagonalTailFArc2K(r712_tailAngle, 1 / 4),
                    r393_DiagonalTailFArc2K(r712_tailAngle, 2 / 4),
                    r393_DiagonalTailFArc2K(r712_tailAngle, 3 / 4)
                ]),
                r393_flat(r712_cx + r712_sign * r712_dxTailStart, r712_cy + r393_O + r712_dyTailStart, r393_widths.center(r712_fine)),
                r393_curl(r712_cx + r712_sign * r712_dxTailStart + r712_sign * r712_dxDepth, r712_cy + r393_O + r712_dyTailStart + r712_dyDepth)
            ];
        };
        var r393_DiagonalTailFArc2K = function (r713_tailAngle, r713_t) {
            var _r713_t0, _r713_t1;
            return [
                Math.sin(r713_t * r713_tailAngle) / Math.sin(r713_tailAngle),
                (1 - Math.cos(r713_t * r713_tailAngle)) / (1 - Math.cos(r713_tailAngle)),
                r713_t
            ];
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r715_t0, _r715_t1;
            return { 'DiagonalTailR': r393_DiagonalTailR };
        });
        var r393_DiagonalTailR = function (r716_df, r716_cx, r716_cy, r716_depth, r716_sw) {
            var _r716_t0, _r716_t1;
            var r716_rInY = r393_DiagonalTailInnerRadius();
            return [
                r393_curl(r716_cx, r716_cy + r716_sw + r716_rInY),
                r393_arcvh(8),
                r393_DiagonalTailF(+1, r716_df, r716_cx, r716_cy, r716_rInY, r393_DiagTailDefaultAngle, r716_depth, r716_sw)
            ];
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r718_t0, _r718_t1;
            return { 'DiagonalTailL': r393_DiagonalTailL };
        });
        var r393_DiagonalTailL = function (r719_df, r719_cx, r719_cy, r719_depth, r719_sw) {
            var _r719_t0, _r719_t1;
            var r719_rInY = r393_DiagonalTailInnerRadius();
            return [
                r393_curl(r719_cx, r719_cy + r719_sw + r719_rInY),
                r393_arcvh(8),
                r393_DiagonalTailF(-1, r719_df, r719_cx, r719_cy, r719_rInY, r393_DiagTailDefaultAngle, r719_depth, r719_sw)
            ];
        };
        var r393_JutIn = function (r720_left, r720_right, r720_jut, r720_swRef, r720_hSplit) {
            var _r720_t0, _r720_t1;
            var r720_ink = r393_HSwToV(r720_swRef);
            var r720_gap = (r720_right - r720_left - r720_hSplit * r720_ink) / (r720_hSplit - 1);
            return Math.min(r720_jut, 0.5 * r720_ink + Math.max(r393_Stroke * r393_TanSlope, 0.375 * r720_gap));
        };
        var r393_CSerifFrame = function (r722_Super) {
            var _r722_t0, _r722_t1;
            var r722_Constructor = function () {
                var _r723_t0, _r723_t1;
                return void 0;
            };
            var r722_Type = function () {
                var _r724_t0 = this;
                var _r724_t1 = arguments;
                r722_Constructor.apply(_r724_t0, _r724_t1);
                return void 0;
            };
            var r722_Symbol = Symbol;
            (function () {
                var r726_protectedTerms, _r726_t0, _r726_t1;
                r722_Type.protectedTerms = r726_protectedTerms = Object.create(r722_Super.protectedTerms || null);
                r722_Constructor = function (r754_top, r754_bot, r754_left, r754_right, r754_swRef, r754_swSerif, r754_div, r754_hSplit, r754_fForceSymmetric) {
                    var _r754_t1;
                    var _r754_t0 = this;
                    _r754_t0.top = r754_top;
                    _r754_t0.bot = r754_bot;
                    _r754_t0.left = r754_left;
                    _r754_t0.right = r754_right;
                    _r754_t0.swRef = r754_swRef;
                    _r754_t0.swSerif = r754_swSerif;
                    _r754_t0.div = r754_div;
                    _r754_t0.hSplit = r754_hSplit;
                    _r754_t0.fForceSymmetric = r754_fForceSymmetric;
                    var r754_ink = r393_HSwToV(r754_swRef);
                    var r754_gap = (r754_right - r754_left - r754_hSplit * r754_ink) / (r754_hSplit - 1);
                    var r754_jutFS = r393_MidJutSide;
                    var r754_jut = r1_mix(r393_HSwToV(0.5 * r754_swRef), r393_Jut, Math.min(1, r754_div * 2.25 / r754_hSplit));
                    var r754_sideJut = r754_jut - 0.5 * r754_ink;
                    var r754_jutIn = r754_fForceSymmetric ? r754_jut : r393_JutIn(r754_left, r754_right, r754_jut, r754_swRef, r754_hSplit);
                    var r754_sideJutIn = r754_jutIn - 0.5 * r754_ink;
                    var r754_lBarCenter = r754_left + 0.5 * r754_ink;
                    var r754_lBarInner = r754_left + 1 * r754_ink;
                    var r754_rBarCenter = r754_right - 0.5 * r754_ink;
                    var r754_rBarInner = r754_right - 1 * r754_ink;
                    _r754_t0.jut = r754_jut;
                    _r754_t0.sideJut = r754_sideJut;
                    _r754_t0.enoughSpaceForFullSerifs = 0.5 * r754_ink + 0.375 * r754_gap > r393_para.refJut;
                    _r754_t0.lt = {
                        'full': r393_tagged('serifLT', r393_HSerif.mtAsymmetric(r754_lBarCenter, r754_top, r754_jut, r754_jutIn, r754_swSerif)),
                        'fullExt': function (r760_s) {
                            var _r760_t0, _r760_t1;
                            return r393_tagged('serifLT', r393_HSerif.mtAsymmetric(r754_lBarCenter, r754_top, r754_jut, r393_JutIn(r754_left, r754_right, r754_jut, r754_swRef, r760_s), r754_swSerif));
                        },
                        'fullSide': r393_tagged('serifLT', r393_HSerif.mtAsymmetric(r754_lBarCenter, r754_top, r754_jut, r754_jutFS, r754_swSerif)),
                        'outer': r393_tagged('serifLT', r393_HSerif.lt(r754_left, r754_top, r754_sideJut, r754_swSerif)),
                        'inner': r393_tagged('serifLT', r393_HSerif.rt(r754_lBarInner, r754_top, r754_sideJutIn, r754_swSerif))
                    };
                    _r754_t0.rt = {
                        'full': r393_tagged('serifRT', r393_HSerif.mtAsymmetric(r754_rBarCenter, r754_top, r754_jutIn, r754_jut, r754_swSerif)),
                        'fullExt': function (r761_s) {
                            var _r761_t0, _r761_t1;
                            return r393_tagged('serifRT', r393_HSerif.mtAsymmetric(r754_rBarCenter, r754_top, r393_JutIn(r754_left, r754_right, r754_jut, r754_swRef, r761_s), r754_jut, r754_swSerif));
                        },
                        'fullSide': r393_tagged('serifRT', r393_HSerif.mtAsymmetric(r754_rBarCenter, r754_top, r754_jutFS, r754_jut, r754_swSerif)),
                        'outer': r393_tagged('serifRT', r393_HSerif.rt(r754_right, r754_top, r754_sideJut, r754_swSerif)),
                        'inner': r393_tagged('serifRT', r393_HSerif.lt(r754_rBarInner, r754_top, r754_sideJutIn, r754_swSerif))
                    };
                    _r754_t0.lb = {
                        'full': r393_tagged('serifLB', r393_HSerif.mbAsymmetric(r754_lBarCenter, r754_bot, r754_jut, r754_jutIn, r754_swSerif)),
                        'fullExt': function (r762_s) {
                            var _r762_t0, _r762_t1;
                            return r393_tagged('serifLB', r393_HSerif.mbAsymmetric(r754_lBarCenter, r754_bot, r754_jut, r393_JutIn(r754_left, r754_right, r754_jut, r754_swRef, r762_s), r754_swSerif));
                        },
                        'fullSide': r393_tagged('serifLB', r393_HSerif.mbAsymmetric(r754_lBarCenter, r754_bot, r754_jut, r754_jutFS, r754_swSerif)),
                        'outer': r393_tagged('serifLB', r393_HSerif.lb(r754_left, r754_bot, r754_sideJut, r754_swSerif)),
                        'inner': r393_tagged('serifLB', r393_HSerif.rb(r754_lBarInner, r754_bot, r754_sideJutIn, r754_swSerif))
                    };
                    _r754_t0.rb = {
                        'full': r393_tagged('serifRB', r393_HSerif.mbAsymmetric(r754_rBarCenter, r754_bot, r754_jutIn, r754_jut, r754_swSerif)),
                        'fullExt': function (r763_s) {
                            var _r763_t0, _r763_t1;
                            return r393_tagged('serifRB', r393_HSerif.mbAsymmetric(r754_rBarCenter, r754_bot, r393_JutIn(r754_left, r754_right, r754_jut, r754_swRef, r763_s), r754_jut, r754_swSerif));
                        },
                        'fullSide': r393_tagged('serifRB', r393_HSerif.mbAsymmetric(r754_rBarCenter, r754_bot, r754_jutFS, r754_jut, r754_swSerif)),
                        'outer': r393_tagged('serifRB', r393_HSerif.rb(r754_right, r754_bot, r754_sideJut, r754_swSerif)),
                        'inner': r393_tagged('serifRB', r393_HSerif.lb(r754_rBarInner, r754_bot, r754_sideJutIn, r754_swSerif))
                    };
                    _r754_t0.mb = {
                        'full': r393_tagged('serifMB', r393_HSerif.mbAsymmetric(r1_mix(r754_lBarCenter, r754_rBarCenter, 0.5), r754_bot, r754_jutIn, r754_jutIn, r754_swSerif)),
                        'fullAt': function (r764_x) {
                            var _r764_t0, _r764_t1;
                            return r393_tagged('serifMB', r393_HSerif.mbAsymmetric(r764_x, r754_bot, r754_jutIn, r754_jutIn, r754_swSerif));
                        },
                        'left': r393_tagged('serifMB', r393_HSerif.mbAsymmetric(r1_mix(r754_lBarCenter, r754_rBarCenter, 0.5), r754_bot, r754_jutIn, 0, r754_swSerif)),
                        'leftAt': function (r765_x) {
                            var _r765_t0, _r765_t1;
                            return r393_tagged('serifMB', r393_HSerif.mbAsymmetric(r765_x, r754_bot, r754_jutIn, 0, r754_swSerif));
                        },
                        'right': r393_tagged('serifMB', r393_HSerif.mbAsymmetric(r1_mix(r754_lBarCenter, r754_rBarCenter, 0.5), r754_bot, 0, r754_jutIn, r754_swSerif)),
                        'rightAt': function (r766_x) {
                            var _r766_t0, _r766_t1;
                            return r393_tagged('serifMB', r393_HSerif.mbAsymmetric(r766_x, r754_bot, 0, r754_jutIn, r754_swSerif));
                        }
                    };
                    _r754_t0.mt = { 'full': r393_tagged('serifMT', r393_HSerif.mtAsymmetric(r1_mix(r754_lBarCenter, r754_rBarCenter, 0.5), r754_top, r754_jutIn, r754_jutIn, r754_swSerif)) };
                    return void 0;
                };
                r722_Type.prototype.slice = function (r767_l, r767_r) {
                    var _r767_t1;
                    var _r767_t0 = this;
                    var r767_ink = r393_HSwToV(_r767_t0.swRef);
                    var r767_gap = (_r767_t0.right - _r767_t0.left - _r767_t0.hSplit * r767_ink) / (_r767_t0.hSplit - 1);
                    var r767_l1 = _r767_t0.left + (r767_ink + r767_gap) * r767_l;
                    var r767_r1 = _r767_t0.left + (r767_ink + r767_gap) * r767_r + r767_ink;
                    return new r393_CSerifFrame(_r767_t0.top, _r767_t0.bot, r767_l1, r767_r1, _r767_t0.swRef, _r767_t0.swSerif, _r767_t0.div, r767_r - r767_l + 1);
                };
                return void 0;
            }.call(r722_Type.prototype));
            return r722_Type;
        }(Object);
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r774_t0, _r774_t1;
            return { 'SerifFrame': r393_SerifFrame };
        });
        var r393_SerifFrame = function () {
            var _r775_t6;
            var _r775_t7 = arguments;
            var _r775_t0 = [].slice.call(_r775_t7, 0);
            var _r775_t1 = [];
            var _r775_t2 = 0;
            while (_r775_t2 < _r775_t0.length) {
                if (!(_r775_t0[_r775_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r775_t1.push(_r775_t0[_r775_t2]);
                _r775_t2 = _r775_t2 + 1;
            }
            var _r775_t3 = _r775_t0;
            var _r775_t4 = _r775_t3.length;
            var _r775_t5 = 0;
            while (_r775_t5 < _r775_t4) {
                _r775_t2 = _r775_t3[_r775_t5];
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'top')
                    r775_top = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'bot')
                    r775_bot = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'left')
                    r775_left = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'right')
                    r775_right = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'swRef')
                    r775_swRef = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'swSerif')
                    r775_swSerif = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'div')
                    r775_div = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'hSplit')
                    r775_hSplit = _r775_t2.right;
                if (_r775_t2 && _r775_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r775_t2.left === 'fForceSymmetric')
                    r775_fForceSymmetric = _r775_t2.right;
                _r775_t5 = _r775_t5 + 1;
            }
            var r775_top = r1_fallback(r775_top, _r775_t1[0]);
            var r775_bot = r1_fallback(r775_bot, _r775_t1[1]);
            var r775_left = r1_fallback(r775_left, _r775_t1[2]);
            var r775_right = r1_fallback(r775_right, _r775_t1[3]);
            var r775_swRef = r1_fallback(r775_swRef, _r775_t1[4], r393_Stroke);
            var r775_swSerif = r1_fallback(r775_swSerif, _r775_t1[5], r775_swRef);
            var r775_div = r1_fallback(r775_div, _r775_t1[6], 1);
            var r775_hSplit = r1_fallback(r775_hSplit, _r775_t1[7], 2);
            var r775_fForceSymmetric = r1_fallback(r775_fForceSymmetric, _r775_t1[8], false);
            return new r393_CSerifFrame(r775_top, r775_bot, r775_left, r775_right, r775_swRef, r775_swSerif, r775_div, r775_hSplit, r775_fForceSymmetric);
        };
        r393_SerifFrame.fromDf = function () {
            var _r779_t6;
            var _r779_t7 = arguments;
            var _r779_t0 = [].slice.call(_r779_t7, 0);
            var _r779_t1 = [];
            var _r779_t2 = 0;
            while (_r779_t2 < _r779_t0.length) {
                if (!(_r779_t0[_r779_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r779_t1.push(_r779_t0[_r779_t2]);
                _r779_t2 = _r779_t2 + 1;
            }
            var _r779_t3 = _r779_t0;
            var _r779_t4 = _r779_t3.length;
            var _r779_t5 = 0;
            while (_r779_t5 < _r779_t4) {
                _r779_t2 = _r779_t3[_r779_t5];
                if (_r779_t2 && _r779_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r779_t2.left === 'df')
                    r779_df = _r779_t2.right;
                if (_r779_t2 && _r779_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r779_t2.left === 'top')
                    r779_top = _r779_t2.right;
                if (_r779_t2 && _r779_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r779_t2.left === 'bot')
                    r779_bot = _r779_t2.right;
                if (_r779_t2 && _r779_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r779_t2.left === 'swSerif')
                    r779_swSerif = _r779_t2.right;
                _r779_t5 = _r779_t5 + 1;
            }
            var r779_df = r1_fallback(r779_df, _r779_t1[0]);
            var r779_top = r1_fallback(r779_top, _r779_t1[1]);
            var r779_bot = r1_fallback(r779_bot, _r779_t1[2]);
            var r779_swSerif = r1_fallback(r779_swSerif, _r779_t1[3], r779_df.mvs);
            return r393_SerifFrame(r779_top, r779_bot, r779_df.leftSB, r779_df.rightSB, new r393_xn$NamedParameterPair$2Lrc9b('swRef', r779_df.mvs), new r393_xn$NamedParameterPair$2Lrc9b('div', r779_df.div), new r393_xn$NamedParameterPair$2Lrc9b('hSplit', Math.max(2, r779_df.hPack)), new r393_xn$NamedParameterPair$2Lrc9b('swSerif', r779_swSerif));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r789_t0, _r789_t1;
            return { 'WithSerifOverflowMask': r393_WithSerifOverflowMask };
        });
        var r393_WithSerifOverflowMask = function (r790_fEnable, r790_top, r790_bottom, r790_left, r790_right, r790_s) {
            var _r790_t0, _r790_t1;
            if (!r790_fEnable)
                return r790_s;
            var r790_leftCenter = r790_left + r393_HSwToV(r393_HalfStroke);
            var r790_rightCenter = r790_right - r393_HSwToV(r393_HalfStroke);
            var r790_adj = r393_TanSlope * r393_Stroke * r393_DesignParameters.serifShiftX;
            return r393_intersection(r790_s, r393_union(r393_Rect(r790_top, r1_mix(r790_top, r790_bottom, 0.5), r790_leftCenter - r393_Jut, r790_rightCenter + r393_Jut - r790_adj), r393_Rect(r1_mix(r790_top, r790_bottom, 0.5), r790_bottom, r790_leftCenter - r393_Jut + r790_adj, r790_rightCenter + r393_Jut)));
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r792_t0, _r792_t1;
            return { 'LegShape': r393_LegShape };
        });
        var r393_LegShape = function () {
            var _r793_t6;
            var _r793_t7 = arguments;
            var _r793_t0 = [].slice.call(_r793_t7, 0);
            var _r793_t1 = [];
            var _r793_t2 = 0;
            while (_r793_t2 < _r793_t0.length) {
                if (!(_r793_t0[_r793_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r793_t1.push(_r793_t0[_r793_t2]);
                _r793_t2 = _r793_t2 + 1;
            }
            var _r793_t3 = _r793_t0;
            var _r793_t4 = _r793_t3.length;
            var _r793_t5 = 0;
            while (_r793_t5 < _r793_t4) {
                _r793_t2 = _r793_t3[_r793_t5];
                if (_r793_t2 && _r793_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'ztop')
                    r793_ztop = _r793_t2.right;
                if (_r793_t2 && _r793_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'zbot')
                    r793_zbot = _r793_t2.right;
                if (_r793_t2 && _r793_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'xb')
                    r793_xb = _r793_t2.right;
                if (_r793_t2 && _r793_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r793_t2.left === 'fine')
                    r793_fine = _r793_t2.right;
                _r793_t5 = _r793_t5 + 1;
            }
            var r793_ztop = r1_fallback(r793_ztop, _r793_t1[0]);
            var r793_zbot = r1_fallback(r793_zbot, _r793_t1[1]);
            var r793_xb = r1_fallback(r793_xb, _r793_t1[2]);
            var r793_fine = r1_fallback(r793_fine, _r793_t1[3], r393_Stroke);
            return function () {
                var _r799_t1;
                var _r799_t0 = this;
                var r799_currentGlyph = _r799_t0;
                r799_currentGlyph.include(r393_dispiro(r393_widths.lhs(r793_fine), r393_flat(r793_ztop.x, r793_ztop.y, r393_heading(r393_Downward)), r393_curl(r793_xb, r1_mix(r793_zbot.y + r393_LongJut, r793_ztop.y, 0.25)), r393_alsoThruThem([[
                        0.5,
                        0.94
                    ]]), r393_straight.left.end(r793_zbot.x, r793_zbot.y + r793_fine, r393_heading(r393_Leftward))));
                return void 0;
            };
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r802_t0, _r802_t1;
            return { 'UpwardHookShape': r393_UpwardHookShape };
        });
        var r393_UpwardHookShape = function () {
            var _r803_t6;
            var _r803_t7 = arguments;
            var _r803_t0 = [].slice.call(_r803_t7, 0);
            var _r803_t1 = [];
            var _r803_t2 = 0;
            while (_r803_t2 < _r803_t0.length) {
                if (!(_r803_t0[_r803_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                    _r803_t1.push(_r803_t0[_r803_t2]);
                _r803_t2 = _r803_t2 + 1;
            }
            var _r803_t3 = _r803_t0;
            var _r803_t4 = _r803_t3.length;
            var _r803_t5 = 0;
            while (_r803_t5 < _r803_t4) {
                _r803_t2 = _r803_t3[_r803_t5];
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'left')
                    r803_left = _r803_t2.right;
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'right')
                    r803_right = _r803_t2.right;
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'ybegin')
                    r803_ybegin = _r803_t2.right;
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'yend')
                    r803_yend = _r803_t2.right;
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'bottom')
                    r803_bottom = _r803_t2.right;
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'ada')
                    r803_ada = _r803_t2.right;
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'adb')
                    r803_adb = _r803_t2.right;
                if (_r803_t2 && _r803_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r803_t2.left === 'sw')
                    r803_sw = _r803_t2.right;
                _r803_t5 = _r803_t5 + 1;
            }
            var r803_left = r1_fallback(r803_left, _r803_t1[0]);
            var r803_right = r1_fallback(r803_right, _r803_t1[1]);
            var r803_ybegin = r1_fallback(r803_ybegin, _r803_t1[2]);
            var r803_yend = r1_fallback(r803_yend, _r803_t1[3]);
            var r803_bottom = r1_fallback(r803_bottom, _r803_t1[4], r393_O);
            var r803_ada = r1_fallback(r803_ada, _r803_t1[5]);
            var r803_adb = r1_fallback(r803_adb, _r803_t1[6]);
            var r803_sw = r1_fallback(r803_sw, _r803_t1[7], r393_Stroke);
            return function () {
                var _r809_t1;
                var _r809_t0 = this;
                var r809_currentGlyph = _r809_t0;
                r809_currentGlyph.include(r393_dispiro(r393_widths.lhs(r803_sw), r393_flat(r803_left, r803_ybegin, r393_heading(r393_Downward)), r393_curl(r803_left, Math.min(r803_ybegin - 0.01, r803_adb)), r393_arcvh(), r393_g4(r1_mix(r803_left, r803_right, 0.5), r803_bottom, r393_heading(r393_Rightward)), r393_archv(), r393_flat(r803_right, r803_ada), r393_curl(r803_right, r803_yend, r393_heading(r393_Upward))));
                return void 0;
            };
        };
        r393_xn$ExportCapture$2Lrc4b(function () {
            var _r812_t0, _r812_t1;
            return { 'VerticalHook': r393_VerticalHook };
        });
        var r393_VerticalHook = function () {
            var r815_m, r815_l, r815_r;
            var r815_exports = {};
            r815_exports.m = r815_m = function () {
                var _r823_t6;
                var _r823_t7 = arguments;
                var _r823_t0 = [].slice.call(_r823_t7, 0);
                var _r823_t1 = [];
                var _r823_t2 = 0;
                while (_r823_t2 < _r823_t0.length) {
                    if (!(_r823_t0[_r823_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r823_t1.push(_r823_t0[_r823_t2]);
                    _r823_t2 = _r823_t2 + 1;
                }
                var _r823_t3 = _r823_t0;
                var _r823_t4 = _r823_t3.length;
                var _r823_t5 = 0;
                while (_r823_t5 < _r823_t4) {
                    _r823_t2 = _r823_t3[_r823_t5];
                    if (_r823_t2 && _r823_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r823_t2.left === 'x')
                        r823_x = _r823_t2.right;
                    if (_r823_t2 && _r823_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r823_t2.left === 'y')
                        r823_y = _r823_t2.right;
                    if (_r823_t2 && _r823_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r823_t2.left === 'xDepth')
                        r823_xDepth = _r823_t2.right;
                    if (_r823_t2 && _r823_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r823_t2.left === 'yDepth')
                        r823_yDepth = _r823_t2.right;
                    if (_r823_t2 && _r823_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r823_t2.left === 'sw')
                        r823_sw = _r823_t2.right;
                    if (_r823_t2 && _r823_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r823_t2.left === 'yExtension')
                        r823_yExtension = _r823_t2.right;
                    _r823_t5 = _r823_t5 + 1;
                }
                var r823_x = r1_fallback(r823_x, _r823_t1[0]);
                var r823_y = r1_fallback(r823_y, _r823_t1[1]);
                var r823_xDepth = r1_fallback(r823_xDepth, _r823_t1[2]);
                var r823_yDepth = r1_fallback(r823_yDepth, _r823_t1[3]);
                var r823_sw = r1_fallback(r823_sw, _r823_t1[4], r393_Stroke);
                var r823_yExtension = r1_fallback(r823_yExtension, _r823_t1[5], 0);
                var r823_hd = r393_FlatHookDepth(r393_DivFrame(1));
                var r823_hdX = r823_xDepth < 0 ? -r823_hd.x : r823_hd.x;
                var r823_hdY = r823_yDepth < 0 ? -r823_hd.y : r823_hd.y;
                var r823_y2 = r823_yDepth > 0 ? Math.min(r823_y - r823_yDepth + r823_hd.y - 0.25 * r823_sw, r823_y - 0.01) : Math.max(r823_y - r823_yDepth - r823_hd.y + 0.25 * r823_sw, r823_y + 0.01);
                var r823_x3 = r823_xDepth > 0 ? Math.min(r823_x + r823_xDepth - 0.01, r823_x + r823_hd.x - r393_HSwToV(0.25 * r823_sw)) : Math.max(r823_x + r823_xDepth + 0.01, r823_x - r823_hd.x + r393_HSwToV(0.25 * r823_sw));
                return r393_dispiro(r393_widths.center(r823_sw), r393_flat(r823_x, r823_y + r823_yExtension, r393_heading(r823_yDepth > 0 ? r393_Downward : r393_Upward)), r393_curl(r823_x, r823_y2, r393_heading(r823_yDepth > 0 ? r393_Downward : r393_Upward)), r393_arcvh(), r393_flat(r823_x3, r823_y - r823_yDepth), r393_curl(r823_x + r823_xDepth, r823_y - r823_yDepth));
            };
            r815_exports.l = r815_l = function () {
                var _r829_t6;
                var _r829_t7 = arguments;
                var _r829_t0 = [].slice.call(_r829_t7, 0);
                var _r829_t1 = [];
                var _r829_t2 = 0;
                while (_r829_t2 < _r829_t0.length) {
                    if (!(_r829_t0[_r829_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r829_t1.push(_r829_t0[_r829_t2]);
                    _r829_t2 = _r829_t2 + 1;
                }
                var _r829_t3 = _r829_t0;
                var _r829_t4 = _r829_t3.length;
                var _r829_t5 = 0;
                while (_r829_t5 < _r829_t4) {
                    _r829_t2 = _r829_t3[_r829_t5];
                    if (_r829_t2 && _r829_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'x')
                        r829_x = _r829_t2.right;
                    if (_r829_t2 && _r829_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'y')
                        r829_y = _r829_t2.right;
                    if (_r829_t2 && _r829_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'xDepth')
                        r829_xDepth = _r829_t2.right;
                    if (_r829_t2 && _r829_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'yDepth')
                        r829_yDepth = _r829_t2.right;
                    if (_r829_t2 && _r829_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'sw')
                        r829_sw = _r829_t2.right;
                    if (_r829_t2 && _r829_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r829_t2.left === 'yExtension')
                        r829_yExtension = _r829_t2.right;
                    _r829_t5 = _r829_t5 + 1;
                }
                var r829_x = r1_fallback(r829_x, _r829_t1[0]);
                var r829_y = r1_fallback(r829_y, _r829_t1[1]);
                var r829_xDepth = r1_fallback(r829_xDepth, _r829_t1[2]);
                var r829_yDepth = r1_fallback(r829_yDepth, _r829_t1[3]);
                var r829_sw = r1_fallback(r829_sw, _r829_t1[4], r393_Stroke);
                var r829_yExtension = r1_fallback(r829_yExtension, _r829_t1[5], 0);
                return r815_m(new r393_xn$NamedParameterPair$2Lrc9b('x', r829_x + r393_HSwToV(0.5 * r829_sw)), new r393_xn$NamedParameterPair$2Lrc9b('y', r829_y), new r393_xn$NamedParameterPair$2Lrc9b('xDepth', r829_xDepth), new r393_xn$NamedParameterPair$2Lrc9b('yDepth', r829_yDepth), new r393_xn$NamedParameterPair$2Lrc9b('sw', r829_sw), new r393_xn$NamedParameterPair$2Lrc9b('yExtension', r829_yExtension));
            };
            r815_exports.r = r815_r = function () {
                var _r841_t6;
                var _r841_t7 = arguments;
                var _r841_t0 = [].slice.call(_r841_t7, 0);
                var _r841_t1 = [];
                var _r841_t2 = 0;
                while (_r841_t2 < _r841_t0.length) {
                    if (!(_r841_t0[_r841_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r841_t1.push(_r841_t0[_r841_t2]);
                    _r841_t2 = _r841_t2 + 1;
                }
                var _r841_t3 = _r841_t0;
                var _r841_t4 = _r841_t3.length;
                var _r841_t5 = 0;
                while (_r841_t5 < _r841_t4) {
                    _r841_t2 = _r841_t3[_r841_t5];
                    if (_r841_t2 && _r841_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'x')
                        r841_x = _r841_t2.right;
                    if (_r841_t2 && _r841_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'y')
                        r841_y = _r841_t2.right;
                    if (_r841_t2 && _r841_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'xDepth')
                        r841_xDepth = _r841_t2.right;
                    if (_r841_t2 && _r841_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'yDepth')
                        r841_yDepth = _r841_t2.right;
                    if (_r841_t2 && _r841_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'sw')
                        r841_sw = _r841_t2.right;
                    if (_r841_t2 && _r841_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r841_t2.left === 'yExtension')
                        r841_yExtension = _r841_t2.right;
                    _r841_t5 = _r841_t5 + 1;
                }
                var r841_x = r1_fallback(r841_x, _r841_t1[0]);
                var r841_y = r1_fallback(r841_y, _r841_t1[1]);
                var r841_xDepth = r1_fallback(r841_xDepth, _r841_t1[2]);
                var r841_yDepth = r1_fallback(r841_yDepth, _r841_t1[3]);
                var r841_sw = r1_fallback(r841_sw, _r841_t1[4], r393_Stroke);
                var r841_yExtension = r1_fallback(r841_yExtension, _r841_t1[5], 0);
                return r815_m(new r393_xn$NamedParameterPair$2Lrc9b('x', r841_x - r393_HSwToV(0.5 * r841_sw)), new r393_xn$NamedParameterPair$2Lrc9b('y', r841_y), new r393_xn$NamedParameterPair$2Lrc9b('xDepth', r841_xDepth), new r393_xn$NamedParameterPair$2Lrc9b('yDepth', r841_yDepth), new r393_xn$NamedParameterPair$2Lrc9b('sw', r841_sw), new r393_xn$NamedParameterPair$2Lrc9b('yExtension', r841_yExtension));
            };
            return r815_exports;
        }();
        (function () {
            var _r853_t0, _r853_tag1, _r853_t2, _r853_tag3;
            var r853_xLinkStroke = function (r854_xLink, r854_x, r854_yAttach, r854_sw) {
                var _r854_t0, _r854_t1;
                return r854_xLink === void 0 ? r393_xn$noshape$3cah() : r393_HBar.b(Math.min(r854_xLink, r854_x - r393_HSwToV(0.5 * r854_sw)), Math.max(r854_xLink, r854_x + r393_HSwToV(0.5 * r854_sw)), r854_yAttach);
            };
            var r853_Descenders = function (r855_Impl) {
                var _r855_t0, _r855_t1, _r855_t2, _r855_tag3;
                return function () {
                    var r858_Sw, r858_adviceGap, r858_m, r858_l, r858_r, r858_lExt, r858_mExt, r858_rExt, r858_lSideJut, r858_rSideJut;
                    var r858_exports = {};
                    r858_exports.Sw = r858_Sw = r393_ArcStartSerifWidth;
                    r858_exports.adviceGap = r858_adviceGap = function (r867_refSw) {
                        var _r867_t0, _r867_t1;
                        return r393_HVContrast * r858_Sw(r867_refSw) + Math.max(r393_Width / 16, r393_AdviceStroke(12));
                    };
                    r858_exports.m = r858_m = function () {
                        var _r869_t6;
                        var _r869_t7 = arguments;
                        var _r869_t0 = [].slice.call(_r869_t7, 0);
                        var _r869_t1 = [];
                        var _r869_t2 = 0;
                        while (_r869_t2 < _r869_t0.length) {
                            if (!(_r869_t0[_r869_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r869_t1.push(_r869_t0[_r869_t2]);
                            _r869_t2 = _r869_t2 + 1;
                        }
                        var _r869_t3 = _r869_t0;
                        var _r869_t4 = _r869_t3.length;
                        var _r869_t5 = 0;
                        while (_r869_t5 < _r869_t4) {
                            _r869_t2 = _r869_t3[_r869_t5];
                            if (_r869_t2 && _r869_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r869_t2.left === 'x')
                                r869_x = _r869_t2.right;
                            if (_r869_t2 && _r869_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r869_t2.left === 'y')
                                r869_y = _r869_t2.right;
                            if (_r869_t2 && _r869_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r869_t2.left === 'xLink')
                                r869_xLink = _r869_t2.right;
                            if (_r869_t2 && _r869_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r869_t2.left === 'yAttach')
                                r869_yAttach = _r869_t2.right;
                            if (_r869_t2 && _r869_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r869_t2.left === 'yOverflow')
                                r869_yOverflow = _r869_t2.right;
                            if (_r869_t2 && _r869_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r869_t2.left === 'refSw')
                                r869_refSw = _r869_t2.right;
                            if (_r869_t2 && _r869_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r869_t2.left === 'maskOut')
                                r869_maskOut = _r869_t2.right;
                            _r869_t5 = _r869_t5 + 1;
                        }
                        var r869_x = r1_fallback(r869_x, _r869_t1[0]);
                        var r869_y = r1_fallback(r869_y, _r869_t1[1]);
                        var r869_xLink = r1_fallback(r869_xLink, _r869_t1[2]);
                        var r869_yAttach = r1_fallback(r869_yAttach, _r869_t1[3], r869_y);
                        var r869_yOverflow = r1_fallback(r869_yOverflow, _r869_t1[4], 0);
                        var r869_refSw = r1_fallback(r869_refSw, _r869_t1[5], r393_Stroke);
                        var r869_maskOut = r1_fallback(r869_maskOut, _r869_t1[6], null);
                        var r869_sw = r858_Sw(r869_refSw);
                        return r855_Impl(r869_x, r869_y, r869_xLink, r869_yAttach, r869_yOverflow, r869_sw, r869_maskOut);
                    };
                    r858_exports.l = r858_l = function () {
                        var _r875_t6;
                        var _r875_t7 = arguments;
                        var _r875_t0 = [].slice.call(_r875_t7, 0);
                        var _r875_t1 = [];
                        var _r875_t2 = 0;
                        while (_r875_t2 < _r875_t0.length) {
                            if (!(_r875_t0[_r875_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r875_t1.push(_r875_t0[_r875_t2]);
                            _r875_t2 = _r875_t2 + 1;
                        }
                        var _r875_t3 = _r875_t0;
                        var _r875_t4 = _r875_t3.length;
                        var _r875_t5 = 0;
                        while (_r875_t5 < _r875_t4) {
                            _r875_t2 = _r875_t3[_r875_t5];
                            if (_r875_t2 && _r875_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r875_t2.left === 'x')
                                r875_x = _r875_t2.right;
                            if (_r875_t2 && _r875_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r875_t2.left === 'y')
                                r875_y = _r875_t2.right;
                            if (_r875_t2 && _r875_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r875_t2.left === 'xLink')
                                r875_xLink = _r875_t2.right;
                            if (_r875_t2 && _r875_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r875_t2.left === 'yAttach')
                                r875_yAttach = _r875_t2.right;
                            if (_r875_t2 && _r875_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r875_t2.left === 'yOverflow')
                                r875_yOverflow = _r875_t2.right;
                            if (_r875_t2 && _r875_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r875_t2.left === 'refSw')
                                r875_refSw = _r875_t2.right;
                            if (_r875_t2 && _r875_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r875_t2.left === 'maskOut')
                                r875_maskOut = _r875_t2.right;
                            _r875_t5 = _r875_t5 + 1;
                        }
                        var r875_x = r1_fallback(r875_x, _r875_t1[0]);
                        var r875_y = r1_fallback(r875_y, _r875_t1[1]);
                        var r875_xLink = r1_fallback(r875_xLink, _r875_t1[2]);
                        var r875_yAttach = r1_fallback(r875_yAttach, _r875_t1[3], r875_y);
                        var r875_yOverflow = r1_fallback(r875_yOverflow, _r875_t1[4], 0);
                        var r875_refSw = r1_fallback(r875_refSw, _r875_t1[5], r393_Stroke);
                        var r875_maskOut = r1_fallback(r875_maskOut, _r875_t1[6], null);
                        var r875_sw = r858_Sw(r875_refSw);
                        return r855_Impl(r875_x + r393_HSwToV(0.5 * r875_sw), r875_y, r875_xLink, r875_yAttach, r875_yOverflow, r875_sw, r875_maskOut);
                    };
                    r858_exports.r = r858_r = function () {
                        var _r881_t6;
                        var _r881_t7 = arguments;
                        var _r881_t0 = [].slice.call(_r881_t7, 0);
                        var _r881_t1 = [];
                        var _r881_t2 = 0;
                        while (_r881_t2 < _r881_t0.length) {
                            if (!(_r881_t0[_r881_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r881_t1.push(_r881_t0[_r881_t2]);
                            _r881_t2 = _r881_t2 + 1;
                        }
                        var _r881_t3 = _r881_t0;
                        var _r881_t4 = _r881_t3.length;
                        var _r881_t5 = 0;
                        while (_r881_t5 < _r881_t4) {
                            _r881_t2 = _r881_t3[_r881_t5];
                            if (_r881_t2 && _r881_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r881_t2.left === 'x')
                                r881_x = _r881_t2.right;
                            if (_r881_t2 && _r881_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r881_t2.left === 'y')
                                r881_y = _r881_t2.right;
                            if (_r881_t2 && _r881_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r881_t2.left === 'xLink')
                                r881_xLink = _r881_t2.right;
                            if (_r881_t2 && _r881_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r881_t2.left === 'yAttach')
                                r881_yAttach = _r881_t2.right;
                            if (_r881_t2 && _r881_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r881_t2.left === 'yOverflow')
                                r881_yOverflow = _r881_t2.right;
                            if (_r881_t2 && _r881_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r881_t2.left === 'refSw')
                                r881_refSw = _r881_t2.right;
                            if (_r881_t2 && _r881_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r881_t2.left === 'maskOut')
                                r881_maskOut = _r881_t2.right;
                            _r881_t5 = _r881_t5 + 1;
                        }
                        var r881_x = r1_fallback(r881_x, _r881_t1[0]);
                        var r881_y = r1_fallback(r881_y, _r881_t1[1]);
                        var r881_xLink = r1_fallback(r881_xLink, _r881_t1[2]);
                        var r881_yAttach = r1_fallback(r881_yAttach, _r881_t1[3], r881_y);
                        var r881_yOverflow = r1_fallback(r881_yOverflow, _r881_t1[4], 0);
                        var r881_refSw = r1_fallback(r881_refSw, _r881_t1[5], r393_Stroke);
                        var r881_maskOut = r1_fallback(r881_maskOut, _r881_t1[6], null);
                        var r881_sw = r858_Sw(r881_refSw);
                        return r855_Impl(r881_x - r393_HSwToV(0.5 * r881_sw), r881_y, r881_xLink, r881_yAttach, r881_yOverflow, r881_sw, r881_maskOut);
                    };
                    r858_exports.lExt = r858_lExt = function () {
                        var _r887_t6;
                        var _r887_t7 = arguments;
                        var _r887_t0 = [].slice.call(_r887_t7, 0);
                        var _r887_t1 = [];
                        var _r887_t2 = 0;
                        while (_r887_t2 < _r887_t0.length) {
                            if (!(_r887_t0[_r887_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r887_t1.push(_r887_t0[_r887_t2]);
                            _r887_t2 = _r887_t2 + 1;
                        }
                        var _r887_t3 = _r887_t0;
                        var _r887_t4 = _r887_t3.length;
                        var _r887_t5 = 0;
                        while (_r887_t5 < _r887_t4) {
                            _r887_t2 = _r887_t3[_r887_t5];
                            if (_r887_t2 && _r887_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r887_t2.left === 'x')
                                r887_x = _r887_t2.right;
                            if (_r887_t2 && _r887_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r887_t2.left === 'y')
                                r887_y = _r887_t2.right;
                            if (_r887_t2 && _r887_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r887_t2.left === 'xLink')
                                r887_xLink = _r887_t2.right;
                            if (_r887_t2 && _r887_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r887_t2.left === 'yAttach')
                                r887_yAttach = _r887_t2.right;
                            if (_r887_t2 && _r887_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r887_t2.left === 'yOverflow')
                                r887_yOverflow = _r887_t2.right;
                            if (_r887_t2 && _r887_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r887_t2.left === 'sw')
                                r887_sw = _r887_t2.right;
                            if (_r887_t2 && _r887_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r887_t2.left === 'maskOut')
                                r887_maskOut = _r887_t2.right;
                            _r887_t5 = _r887_t5 + 1;
                        }
                        var r887_x = r1_fallback(r887_x, _r887_t1[0]);
                        var r887_y = r1_fallback(r887_y, _r887_t1[1]);
                        var r887_xLink = r1_fallback(r887_xLink, _r887_t1[2]);
                        var r887_yAttach = r1_fallback(r887_yAttach, _r887_t1[3], r887_y);
                        var r887_yOverflow = r1_fallback(r887_yOverflow, _r887_t1[4], 0);
                        var r887_sw = r1_fallback(r887_sw, _r887_t1[5], r393_Stroke);
                        var r887_maskOut = r1_fallback(r887_maskOut, _r887_t1[6], null);
                        return r855_Impl(r887_x + r393_HSwToV(0.5 * r887_sw), r887_y, r887_xLink, r887_yAttach, r887_yOverflow, r887_sw, r887_maskOut);
                    };
                    r858_exports.mExt = r858_mExt = function () {
                        var _r893_t6;
                        var _r893_t7 = arguments;
                        var _r893_t0 = [].slice.call(_r893_t7, 0);
                        var _r893_t1 = [];
                        var _r893_t2 = 0;
                        while (_r893_t2 < _r893_t0.length) {
                            if (!(_r893_t0[_r893_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r893_t1.push(_r893_t0[_r893_t2]);
                            _r893_t2 = _r893_t2 + 1;
                        }
                        var _r893_t3 = _r893_t0;
                        var _r893_t4 = _r893_t3.length;
                        var _r893_t5 = 0;
                        while (_r893_t5 < _r893_t4) {
                            _r893_t2 = _r893_t3[_r893_t5];
                            if (_r893_t2 && _r893_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r893_t2.left === 'x')
                                r893_x = _r893_t2.right;
                            if (_r893_t2 && _r893_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r893_t2.left === 'y')
                                r893_y = _r893_t2.right;
                            if (_r893_t2 && _r893_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r893_t2.left === 'xLink')
                                r893_xLink = _r893_t2.right;
                            if (_r893_t2 && _r893_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r893_t2.left === 'yAttach')
                                r893_yAttach = _r893_t2.right;
                            if (_r893_t2 && _r893_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r893_t2.left === 'yOverflow')
                                r893_yOverflow = _r893_t2.right;
                            if (_r893_t2 && _r893_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r893_t2.left === 'sw')
                                r893_sw = _r893_t2.right;
                            if (_r893_t2 && _r893_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r893_t2.left === 'maskOut')
                                r893_maskOut = _r893_t2.right;
                            _r893_t5 = _r893_t5 + 1;
                        }
                        var r893_x = r1_fallback(r893_x, _r893_t1[0]);
                        var r893_y = r1_fallback(r893_y, _r893_t1[1]);
                        var r893_xLink = r1_fallback(r893_xLink, _r893_t1[2]);
                        var r893_yAttach = r1_fallback(r893_yAttach, _r893_t1[3], r893_y);
                        var r893_yOverflow = r1_fallback(r893_yOverflow, _r893_t1[4], 0);
                        var r893_sw = r1_fallback(r893_sw, _r893_t1[5], r393_Stroke);
                        var r893_maskOut = r1_fallback(r893_maskOut, _r893_t1[6], null);
                        return r855_Impl(r893_x, r893_y, r893_xLink, r893_yAttach, r893_yOverflow, r893_sw, r893_maskOut);
                    };
                    r858_exports.rExt = r858_rExt = function () {
                        var _r899_t6;
                        var _r899_t7 = arguments;
                        var _r899_t0 = [].slice.call(_r899_t7, 0);
                        var _r899_t1 = [];
                        var _r899_t2 = 0;
                        while (_r899_t2 < _r899_t0.length) {
                            if (!(_r899_t0[_r899_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r899_t1.push(_r899_t0[_r899_t2]);
                            _r899_t2 = _r899_t2 + 1;
                        }
                        var _r899_t3 = _r899_t0;
                        var _r899_t4 = _r899_t3.length;
                        var _r899_t5 = 0;
                        while (_r899_t5 < _r899_t4) {
                            _r899_t2 = _r899_t3[_r899_t5];
                            if (_r899_t2 && _r899_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r899_t2.left === 'x')
                                r899_x = _r899_t2.right;
                            if (_r899_t2 && _r899_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r899_t2.left === 'y')
                                r899_y = _r899_t2.right;
                            if (_r899_t2 && _r899_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r899_t2.left === 'xLink')
                                r899_xLink = _r899_t2.right;
                            if (_r899_t2 && _r899_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r899_t2.left === 'yAttach')
                                r899_yAttach = _r899_t2.right;
                            if (_r899_t2 && _r899_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r899_t2.left === 'yOverflow')
                                r899_yOverflow = _r899_t2.right;
                            if (_r899_t2 && _r899_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r899_t2.left === 'sw')
                                r899_sw = _r899_t2.right;
                            if (_r899_t2 && _r899_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r899_t2.left === 'maskOut')
                                r899_maskOut = _r899_t2.right;
                            _r899_t5 = _r899_t5 + 1;
                        }
                        var r899_x = r1_fallback(r899_x, _r899_t1[0]);
                        var r899_y = r1_fallback(r899_y, _r899_t1[1]);
                        var r899_xLink = r1_fallback(r899_xLink, _r899_t1[2]);
                        var r899_yAttach = r1_fallback(r899_yAttach, _r899_t1[3], r899_y);
                        var r899_yOverflow = r1_fallback(r899_yOverflow, _r899_t1[4], 0);
                        var r899_sw = r1_fallback(r899_sw, _r899_t1[5], r393_Stroke);
                        var r899_maskOut = r1_fallback(r899_maskOut, _r899_t1[6], null);
                        return r855_Impl(r899_x - r393_HSwToV(0.5 * r899_sw), r899_y, r899_xLink, r899_yAttach, r899_yOverflow, r899_sw, r899_maskOut);
                    };
                    r858_exports.lSideJut = r858_lSideJut = function () {
                        var _r905_t6;
                        var _r905_t7 = arguments;
                        var _r905_t0 = [].slice.call(_r905_t7, 0);
                        var _r905_t1 = [];
                        var _r905_t2 = 0;
                        while (_r905_t2 < _r905_t0.length) {
                            if (!(_r905_t0[_r905_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r905_t1.push(_r905_t0[_r905_t2]);
                            _r905_t2 = _r905_t2 + 1;
                        }
                        var _r905_t3 = _r905_t0;
                        var _r905_t4 = _r905_t3.length;
                        var _r905_t5 = 0;
                        while (_r905_t5 < _r905_t4) {
                            _r905_t2 = _r905_t3[_r905_t5];
                            if (_r905_t2 && _r905_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r905_t2.left === 'x')
                                r905_x = _r905_t2.right;
                            if (_r905_t2 && _r905_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r905_t2.left === 'y')
                                r905_y = _r905_t2.right;
                            if (_r905_t2 && _r905_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r905_t2.left === 'yOverflow')
                                r905_yOverflow = _r905_t2.right;
                            if (_r905_t2 && _r905_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r905_t2.left === 'refSw')
                                r905_refSw = _r905_t2.right;
                            if (_r905_t2 && _r905_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r905_t2.left === 'jut')
                                r905_jut = _r905_t2.right;
                            if (_r905_t2 && _r905_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r905_t2.left === 'sideJut')
                                r905_sideJut = _r905_t2.right;
                            _r905_t5 = _r905_t5 + 1;
                        }
                        var r905_x = r1_fallback(r905_x, _r905_t1[0]);
                        var r905_y = r1_fallback(r905_y, _r905_t1[1]);
                        var r905_yOverflow = r1_fallback(r905_yOverflow, _r905_t1[2], 0);
                        var r905_refSw = r1_fallback(r905_refSw, _r905_t1[3], r393_Stroke);
                        var r905_jut = r1_fallback(r905_jut, _r905_t1[4], r393_Jut);
                        var r905_sideJut = r1_fallback(r905_sideJut, _r905_t1[5], void 0);
                        var r905_sj = r1_fallback(r905_sideJut, r905_jut - r393_HSwToV(0.5 * r905_refSw));
                        var r905_sw = r858_Sw(r905_refSw);
                        var r905_xLink = r905_x + r393_HSwToV(0.5 * r905_refSw) - r393_TanSlope * r905_sw;
                        var r905_xPos = r905_x + r393_HSwToV(0.5 * r905_sw) - r905_sj + r905_sw * r393_TanSlope * (r1_DesignParameters.serifShiftX - 1);
                        return r855_Impl(r905_xPos, r905_y, r905_xLink, r905_y, r905_yOverflow, r905_sw);
                    };
                    r858_exports.rSideJut = r858_rSideJut = function () {
                        var _r911_t6;
                        var _r911_t7 = arguments;
                        var _r911_t0 = [].slice.call(_r911_t7, 0);
                        var _r911_t1 = [];
                        var _r911_t2 = 0;
                        while (_r911_t2 < _r911_t0.length) {
                            if (!(_r911_t0[_r911_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                                _r911_t1.push(_r911_t0[_r911_t2]);
                            _r911_t2 = _r911_t2 + 1;
                        }
                        var _r911_t3 = _r911_t0;
                        var _r911_t4 = _r911_t3.length;
                        var _r911_t5 = 0;
                        while (_r911_t5 < _r911_t4) {
                            _r911_t2 = _r911_t3[_r911_t5];
                            if (_r911_t2 && _r911_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r911_t2.left === 'x')
                                r911_x = _r911_t2.right;
                            if (_r911_t2 && _r911_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r911_t2.left === 'y')
                                r911_y = _r911_t2.right;
                            if (_r911_t2 && _r911_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r911_t2.left === 'yOverflow')
                                r911_yOverflow = _r911_t2.right;
                            if (_r911_t2 && _r911_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r911_t2.left === 'refSw')
                                r911_refSw = _r911_t2.right;
                            if (_r911_t2 && _r911_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r911_t2.left === 'jut')
                                r911_jut = _r911_t2.right;
                            if (_r911_t2 && _r911_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r911_t2.left === 'sideJut')
                                r911_sideJut = _r911_t2.right;
                            _r911_t5 = _r911_t5 + 1;
                        }
                        var r911_x = r1_fallback(r911_x, _r911_t1[0]);
                        var r911_y = r1_fallback(r911_y, _r911_t1[1]);
                        var r911_yOverflow = r1_fallback(r911_yOverflow, _r911_t1[2], 0);
                        var r911_refSw = r1_fallback(r911_refSw, _r911_t1[3], r393_Stroke);
                        var r911_jut = r1_fallback(r911_jut, _r911_t1[4], r393_Jut);
                        var r911_sideJut = r1_fallback(r911_sideJut, _r911_t1[5], void 0);
                        var r911_sj = r1_fallback(r911_sideJut, r911_jut - r393_HSwToV(0.5 * r911_refSw));
                        var r911_sw = r858_Sw(r911_refSw);
                        var r911_xLink = r911_x - r393_HSwToV(0.5 * r911_refSw);
                        var r911_xPos = r911_x - r393_HSwToV(0.5 * r911_sw) + r911_sj + r911_sw * r393_TanSlope * (r1_DesignParameters.serifShiftX + 1);
                        return r855_Impl(r911_xPos, r911_y, r911_xLink, r911_y, r911_yOverflow, r911_sw);
                    };
                    return r858_exports;
                }();
            };
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r917_t0, _r917_t1;
                return { 'CyrDescender': r853_CyrDescender };
            });
            var r853_CyrDescender = r853_Descenders(function (r918_x, r918_y, r918_xLink, r918_yAttach, r918_yOverflow, r918_sw) {
                var _r918_t0, _r918_t1;
                return function () {
                    var _r920_t1;
                    var _r920_t0 = this;
                    var r920_currentGlyph = _r920_t0;
                    var r920_extension = 0.25 * r393_Stroke - r393_LongJut;
                    r920_currentGlyph.include(r393_ExtendBelowBaseAnchors(r918_y + r920_extension));
                    r920_currentGlyph.include(r393_union(r853_xLinkStroke(r918_xLink, r918_x, r918_yAttach, r918_sw), r393_VBar.m(r918_x, r918_yAttach, r918_y + r920_extension, r918_sw)));
                    return void 0;
                };
            });
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r924_t0, _r924_t1;
                return { 'CyrTailDescender': r853_CyrTailDescender };
            });
            var r853_CyrTailDescender = r853_Descenders(function (r925_x, r925_y, r925_xLink, r925_yAttach, r925_yOverflow, r925_sw) {
                var _r925_t0, _r925_t1;
                return function () {
                    var _r927_t1;
                    var _r927_t0 = this;
                    var r927_currentGlyph = _r927_t0;
                    var r927_extension = 0.25 * r393_Stroke - r393_LongJut;
                    r927_currentGlyph.include(r393_ExtendBelowBaseAnchors(r925_y + r927_extension));
                    r927_currentGlyph.include(r393_union(r853_xLinkStroke(r925_xLink, r925_x, r925_yAttach, r925_sw), r393_intersection(r393_MaskBelow(r925_yAttach + r393_Stroke), r393_MaskAbove(r925_y + r927_extension), r393_ExtLineCenter(16, r925_sw, r925_x + 0.24 * r393_Descender, r925_y + 0.5 * r925_sw + r393_Descender, r925_x, r925_y))));
                    return void 0;
                };
            });
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r931_t0, _r931_t1;
                return { 'PalatalHook': r853_PalatalHook };
            });
            var r853_PalatalHook = r853_Descenders(function (r932_x, r932_y, r932_xLink, r932_yAttach, r932_yOverflow, r932_sw, r932_maskOut) {
                var _r932_t0, _r932_t1;
                return function () {
                    var _r934_t1;
                    var _r934_t0 = this;
                    var r934_currentGlyph = _r934_t0;
                    var r934_fullDepth = 0 - r393_Descender - 0.5 * r932_sw - r393_O;
                    r934_currentGlyph.include(r393_ExtendBelowBaseAnchors(r932_y + r393_Descender));
                    r934_currentGlyph.include(r393_difference(r393_union(r853_xLinkStroke(r932_xLink, r932_x, r932_yAttach, r932_sw), r393_VerticalHook.m(new r393_xn$NamedParameterPair$2Lrc9b('x', r932_x), new r393_xn$NamedParameterPair$2Lrc9b('y', r932_y - (r934_fullDepth - r393_TailY)), new r393_xn$NamedParameterPair$2Lrc9b('xDepth', -r393_TailX), new r393_xn$NamedParameterPair$2Lrc9b('yDepth', r393_TailY), new r393_xn$NamedParameterPair$2Lrc9b('sw', r932_sw), new r393_xn$NamedParameterPair$2Lrc9b('yExtension', Math.max(0, r932_yAttach + r932_yOverflow - r932_y + (r934_fullDepth - r393_TailY))))), r932_maskOut ? r932_maskOut : r393_xn$noshape$3cah()));
                    return void 0;
                };
            });
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r944_t0, _r944_t1;
                return { 'RetroflexHook': r853_RetroflexHook };
            });
            var r853_RetroflexHook = r853_Descenders(function (r945_x, r945_y, r945_xLink, r945_yAttach, r945_yOverflow, r945_sw) {
                var _r945_t0, _r945_t1;
                return function () {
                    var _r947_t1;
                    var _r947_t0 = this;
                    var r947_currentGlyph = _r947_t0;
                    var r947_fullDepth = 0 - r393_Descender - 0.5 * r945_sw - r393_O;
                    r947_currentGlyph.include(r393_ExtendBelowBaseAnchors(r945_y + r393_Descender));
                    r947_currentGlyph.include(r393_union(r853_xLinkStroke(r945_xLink, r945_x, r945_yAttach, r945_sw), r393_VerticalHook.m(new r393_xn$NamedParameterPair$2Lrc9b('x', r945_x), new r393_xn$NamedParameterPair$2Lrc9b('y', r945_y - (r947_fullDepth - r393_TailY)), new r393_xn$NamedParameterPair$2Lrc9b('xDepth', r393_TailX), new r393_xn$NamedParameterPair$2Lrc9b('yDepth', r393_TailY), new r393_xn$NamedParameterPair$2Lrc9b('sw', r945_sw), new r393_xn$NamedParameterPair$2Lrc9b('yExtension', Math.max(0, r945_yAttach + r945_yOverflow - r945_y + (r947_fullDepth - r393_TailY))))));
                    return void 0;
                };
            });
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r957_t0, _r957_t1;
                return { 'MidHook': r853_MidHook };
            });
            var r853_MidHook = function () {
                var r960_general, r960_m;
                var r960_exports = {};
                r960_exports.general = r960_general = function () {
                    var _r968_t6;
                    var _r968_t7 = arguments;
                    var _r968_t0 = [].slice.call(_r968_t7, 0);
                    var _r968_t1 = [];
                    var _r968_t2 = 0;
                    while (_r968_t2 < _r968_t0.length) {
                        if (!(_r968_t0[_r968_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r968_t1.push(_r968_t0[_r968_t2]);
                        _r968_t2 = _r968_t2 + 1;
                    }
                    var _r968_t3 = _r968_t0;
                    var _r968_t4 = _r968_t3.length;
                    var _r968_t5 = 0;
                    while (_r968_t5 < _r968_t4) {
                        _r968_t2 = _r968_t3[_r968_t5];
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'left')
                            r968_left = _r968_t2.right;
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'right')
                            r968_right = _r968_t2.right;
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'top')
                            r968_top = _r968_t2.right;
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'bottom')
                            r968_bottom = _r968_t2.right;
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'ada')
                            r968_ada = _r968_t2.right;
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'adb')
                            r968_adb = _r968_t2.right;
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'sw')
                            r968_sw = _r968_t2.right;
                        if (_r968_t2 && _r968_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r968_t2.left === 'xDepth')
                            r968_xDepth = _r968_t2.right;
                        _r968_t5 = _r968_t5 + 1;
                    }
                    var r968_left = r1_fallback(r968_left, _r968_t1[0]);
                    var r968_right = r1_fallback(r968_right, _r968_t1[1]);
                    var r968_top = r1_fallback(r968_top, _r968_t1[2]);
                    var r968_bottom = r1_fallback(r968_bottom, _r968_t1[3], 0);
                    var r968_ada = r1_fallback(r968_ada, _r968_t1[4]);
                    var r968_adb = r1_fallback(r968_adb, _r968_t1[5]);
                    var r968_sw = r1_fallback(r968_sw, _r968_t1[6], r393_Stroke);
                    var r968_xDepth = r1_fallback(r968_xDepth, _r968_t1[7], -r393_HookX);
                    return function () {
                        var _r974_t1;
                        var _r974_t0 = this;
                        var r974_currentGlyph = _r974_t0;
                        r974_currentGlyph.include(r393_nShoulder(new r393_xn$NamedParameterPair$2Lrc9b('left', r968_left), new r393_xn$NamedParameterPair$2Lrc9b('right', r968_right), new r393_xn$NamedParameterPair$2Lrc9b('top', r968_top), new r393_xn$NamedParameterPair$2Lrc9b('bottom', r968_bottom), new r393_xn$NamedParameterPair$2Lrc9b('ada', r968_ada), new r393_xn$NamedParameterPair$2Lrc9b('adb', r968_adb), new r393_xn$NamedParameterPair$2Lrc9b('stroke', r968_sw)), true, true);
                        r974_currentGlyph.include(r393_VerticalHook.r(r968_right, r968_bottom, r968_xDepth, r393_Hook, r968_sw));
                        return void 0;
                    };
                };
                r960_exports.m = r960_m = function (r985_df, r985_top) {
                    var _r985_t0, _r985_t1;
                    var r985_xm = r985_df.middle + r393_HSwToV(0.5 * r985_df.mvs);
                    return r960_general(new r393_xn$NamedParameterPair$2Lrc9b('left', r985_xm), new r393_xn$NamedParameterPair$2Lrc9b('right', r985_df.rightSB), new r393_xn$NamedParameterPair$2Lrc9b('top', r985_top * 0.625 + r985_df.mvs / 4), new r393_xn$NamedParameterPair$2Lrc9b('ada', r393_ArchDepthA), new r393_xn$NamedParameterPair$2Lrc9b('adb', r393_ArchDepthB), new r393_xn$NamedParameterPair$2Lrc9b('sw', r985_df.mvs), new r393_xn$NamedParameterPair$2Lrc9b('xDepth', -Math.max(r393_HSwToV(r985_df.mvs), Math.min(r393_HookX, 0.5 * (r985_df.rightSB - r985_df.leftSB - r393_HSwToV(2 * r985_df.mvs))))));
                };
                return r960_exports;
            }();
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r994_t0, _r994_t1;
                return { 'EngHook': r853_EngHook };
            });
            var r853_EngHook = function () {
                var _r995_t6;
                var _r995_t7 = arguments;
                var _r995_t0 = [].slice.call(_r995_t7, 0);
                var _r995_t1 = [];
                var _r995_t2 = 0;
                while (_r995_t2 < _r995_t0.length) {
                    if (!(_r995_t0[_r995_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r995_t1.push(_r995_t0[_r995_t2]);
                    _r995_t2 = _r995_t2 + 1;
                }
                var _r995_t3 = _r995_t0;
                var _r995_t4 = _r995_t3.length;
                var _r995_t5 = 0;
                while (_r995_t5 < _r995_t4) {
                    _r995_t2 = _r995_t3[_r995_t5];
                    if (_r995_t2 && _r995_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r995_t2.left === 'x')
                        r995_x = _r995_t2.right;
                    if (_r995_t2 && _r995_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r995_t2.left === 'yStart')
                        r995_yStart = _r995_t2.right;
                    if (_r995_t2 && _r995_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r995_t2.left === 'yEnd')
                        r995_yEnd = _r995_t2.right;
                    if (_r995_t2 && _r995_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r995_t2.left === 'sw')
                        r995_sw = _r995_t2.right;
                    _r995_t5 = _r995_t5 + 1;
                }
                var r995_x = r1_fallback(r995_x, _r995_t1[0]);
                var r995_yStart = r1_fallback(r995_yStart, _r995_t1[1]);
                var r995_yEnd = r1_fallback(r995_yEnd, _r995_t1[2]);
                var r995_sw = r1_fallback(r995_sw, _r995_t1[3], r393_Stroke);
                return r393_VerticalHook.r(r995_x, r995_yEnd + r393_Hook + 0.5 * r995_sw, -r393_HookX, r393_Hook, new r393_xn$NamedParameterPair$2Lrc9b('yExtension', Math.max(0, r995_yStart - (r995_yEnd + r393_Hook + 0.5 * r995_sw))));
            };
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r1002_t0, _r1002_t1;
                return { 'TopHook': r853_TopHook };
            });
            var r853_TopHook = function () {
                var r1005_lBarOuter, r1005_lBarInner, r1005_rBarOuter, r1005_rBarInner, r1005_mBarOuter, r1005_mBarInner, r1005_arcStart;
                var r1005_exports = {};
                r1005_exports.lBarOuter = r1005_lBarOuter = function () {
                    var _r1013_t6;
                    var _r1013_t7 = arguments;
                    var _r1013_t0 = [].slice.call(_r1013_t7, 0);
                    var _r1013_t1 = [];
                    var _r1013_t2 = 0;
                    while (_r1013_t2 < _r1013_t0.length) {
                        if (!(_r1013_t0[_r1013_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r1013_t1.push(_r1013_t0[_r1013_t2]);
                        _r1013_t2 = _r1013_t2 + 1;
                    }
                    var _r1013_t3 = _r1013_t0;
                    var _r1013_t4 = _r1013_t3.length;
                    var _r1013_t5 = 0;
                    while (_r1013_t5 < _r1013_t4) {
                        _r1013_t2 = _r1013_t3[_r1013_t5];
                        if (_r1013_t2 && _r1013_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1013_t2.left === 'x')
                            r1013_x = _r1013_t2.right;
                        if (_r1013_t2 && _r1013_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1013_t2.left === 'yBot')
                            r1013_yBot = _r1013_t2.right;
                        if (_r1013_t2 && _r1013_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1013_t2.left === 'yTop')
                            r1013_yTop = _r1013_t2.right;
                        if (_r1013_t2 && _r1013_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1013_t2.left === 'sw')
                            r1013_sw = _r1013_t2.right;
                        _r1013_t5 = _r1013_t5 + 1;
                    }
                    var r1013_x = r1_fallback(r1013_x, _r1013_t1[0]);
                    var r1013_yBot = r1_fallback(r1013_yBot, _r1013_t1[1]);
                    var r1013_yTop = r1_fallback(r1013_yTop, _r1013_t1[2]);
                    var r1013_sw = r1_fallback(r1013_sw, _r1013_t1[3], r393_Stroke);
                    return function () {
                        var _r1019_t1;
                        var _r1019_t0 = this;
                        var r1019_currentGlyph = _r1019_t0;
                        var r1019_fullDepth = r393_Ascender - r393_XH - 0.5 * r1013_sw - r393_O;
                        var r1019_yHookStart = r1013_yTop + (r1019_fullDepth - r393_TailY);
                        r1019_currentGlyph.include(r393_ExtendAboveBaseAnchors(r1013_yTop + (r393_Ascender - r393_XH)));
                        r1019_currentGlyph.include(r393_union(r393_VBar.l(r1013_x, r1013_yBot, r1019_yHookStart, r1013_sw), r393_VerticalHook.l(r1013_x, r1019_yHookStart, r393_TailX, -r393_TailY, new r393_xn$NamedParameterPair$2Lrc9b('sw', r1013_sw))));
                        return void 0;
                    };
                };
                r1005_exports.lBarInner = r1005_lBarInner = function () {
                    var _r1024_t6;
                    var _r1024_t7 = arguments;
                    var _r1024_t0 = [].slice.call(_r1024_t7, 0);
                    var _r1024_t1 = [];
                    var _r1024_t2 = 0;
                    while (_r1024_t2 < _r1024_t0.length) {
                        if (!(_r1024_t0[_r1024_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r1024_t1.push(_r1024_t0[_r1024_t2]);
                        _r1024_t2 = _r1024_t2 + 1;
                    }
                    var _r1024_t3 = _r1024_t0;
                    var _r1024_t4 = _r1024_t3.length;
                    var _r1024_t5 = 0;
                    while (_r1024_t5 < _r1024_t4) {
                        _r1024_t2 = _r1024_t3[_r1024_t5];
                        if (_r1024_t2 && _r1024_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1024_t2.left === 'x')
                            r1024_x = _r1024_t2.right;
                        if (_r1024_t2 && _r1024_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1024_t2.left === 'yBot')
                            r1024_yBot = _r1024_t2.right;
                        if (_r1024_t2 && _r1024_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1024_t2.left === 'yTop')
                            r1024_yTop = _r1024_t2.right;
                        if (_r1024_t2 && _r1024_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1024_t2.left === 'sw')
                            r1024_sw = _r1024_t2.right;
                        _r1024_t5 = _r1024_t5 + 1;
                    }
                    var r1024_x = r1_fallback(r1024_x, _r1024_t1[0]);
                    var r1024_yBot = r1_fallback(r1024_yBot, _r1024_t1[1]);
                    var r1024_yTop = r1_fallback(r1024_yTop, _r1024_t1[2]);
                    var r1024_sw = r1_fallback(r1024_sw, _r1024_t1[3], r393_Stroke);
                    return function () {
                        var _r1030_t1;
                        var _r1030_t0 = this;
                        var r1030_currentGlyph = _r1030_t0;
                        var r1030_yHookStart = r1024_yTop - r393_O - r393_TailY - 0.5 * r1024_sw;
                        r1030_currentGlyph.include(r393_union(r393_VBar.l(r1024_x, r1024_yBot, r1030_yHookStart, r1024_sw), r393_VerticalHook.l(r1024_x, r1030_yHookStart, r393_TailX, -r393_TailY, new r393_xn$NamedParameterPair$2Lrc9b('sw', r1024_sw))));
                        return void 0;
                    };
                };
                r1005_exports.rBarOuter = r1005_rBarOuter = function () {
                    var _r1034_t6;
                    var _r1034_t7 = arguments;
                    var _r1034_t0 = [].slice.call(_r1034_t7, 0);
                    var _r1034_t1 = [];
                    var _r1034_t2 = 0;
                    while (_r1034_t2 < _r1034_t0.length) {
                        if (!(_r1034_t0[_r1034_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r1034_t1.push(_r1034_t0[_r1034_t2]);
                        _r1034_t2 = _r1034_t2 + 1;
                    }
                    var _r1034_t3 = _r1034_t0;
                    var _r1034_t4 = _r1034_t3.length;
                    var _r1034_t5 = 0;
                    while (_r1034_t5 < _r1034_t4) {
                        _r1034_t2 = _r1034_t3[_r1034_t5];
                        if (_r1034_t2 && _r1034_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1034_t2.left === 'x')
                            r1034_x = _r1034_t2.right;
                        if (_r1034_t2 && _r1034_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1034_t2.left === 'yBot')
                            r1034_yBot = _r1034_t2.right;
                        if (_r1034_t2 && _r1034_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1034_t2.left === 'yTop')
                            r1034_yTop = _r1034_t2.right;
                        if (_r1034_t2 && _r1034_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1034_t2.left === 'sw')
                            r1034_sw = _r1034_t2.right;
                        _r1034_t5 = _r1034_t5 + 1;
                    }
                    var r1034_x = r1_fallback(r1034_x, _r1034_t1[0]);
                    var r1034_yBot = r1_fallback(r1034_yBot, _r1034_t1[1]);
                    var r1034_yTop = r1_fallback(r1034_yTop, _r1034_t1[2]);
                    var r1034_sw = r1_fallback(r1034_sw, _r1034_t1[3], r393_Stroke);
                    return r1005_lBarOuter(r1034_x - r393_HSwToV(r1034_sw), r1034_yBot, r1034_yTop, new r393_xn$NamedParameterPair$2Lrc9b('sw', r1034_sw));
                };
                r1005_exports.rBarInner = r1005_rBarInner = function () {
                    var _r1041_t6;
                    var _r1041_t7 = arguments;
                    var _r1041_t0 = [].slice.call(_r1041_t7, 0);
                    var _r1041_t1 = [];
                    var _r1041_t2 = 0;
                    while (_r1041_t2 < _r1041_t0.length) {
                        if (!(_r1041_t0[_r1041_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r1041_t1.push(_r1041_t0[_r1041_t2]);
                        _r1041_t2 = _r1041_t2 + 1;
                    }
                    var _r1041_t3 = _r1041_t0;
                    var _r1041_t4 = _r1041_t3.length;
                    var _r1041_t5 = 0;
                    while (_r1041_t5 < _r1041_t4) {
                        _r1041_t2 = _r1041_t3[_r1041_t5];
                        if (_r1041_t2 && _r1041_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1041_t2.left === 'x')
                            r1041_x = _r1041_t2.right;
                        if (_r1041_t2 && _r1041_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1041_t2.left === 'yBot')
                            r1041_yBot = _r1041_t2.right;
                        if (_r1041_t2 && _r1041_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1041_t2.left === 'yTop')
                            r1041_yTop = _r1041_t2.right;
                        if (_r1041_t2 && _r1041_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1041_t2.left === 'sw')
                            r1041_sw = _r1041_t2.right;
                        _r1041_t5 = _r1041_t5 + 1;
                    }
                    var r1041_x = r1_fallback(r1041_x, _r1041_t1[0]);
                    var r1041_yBot = r1_fallback(r1041_yBot, _r1041_t1[1]);
                    var r1041_yTop = r1_fallback(r1041_yTop, _r1041_t1[2]);
                    var r1041_sw = r1_fallback(r1041_sw, _r1041_t1[3], r393_Stroke);
                    return r1005_lBarInner(r1041_x - r393_HSwToV(r1041_sw), r1041_yBot, r1041_yTop, new r393_xn$NamedParameterPair$2Lrc9b('sw', r1041_sw));
                };
                r1005_exports.mBarOuter = r1005_mBarOuter = function () {
                    var _r1048_t6;
                    var _r1048_t7 = arguments;
                    var _r1048_t0 = [].slice.call(_r1048_t7, 0);
                    var _r1048_t1 = [];
                    var _r1048_t2 = 0;
                    while (_r1048_t2 < _r1048_t0.length) {
                        if (!(_r1048_t0[_r1048_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r1048_t1.push(_r1048_t0[_r1048_t2]);
                        _r1048_t2 = _r1048_t2 + 1;
                    }
                    var _r1048_t3 = _r1048_t0;
                    var _r1048_t4 = _r1048_t3.length;
                    var _r1048_t5 = 0;
                    while (_r1048_t5 < _r1048_t4) {
                        _r1048_t2 = _r1048_t3[_r1048_t5];
                        if (_r1048_t2 && _r1048_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'x')
                            r1048_x = _r1048_t2.right;
                        if (_r1048_t2 && _r1048_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'yBot')
                            r1048_yBot = _r1048_t2.right;
                        if (_r1048_t2 && _r1048_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'yTop')
                            r1048_yTop = _r1048_t2.right;
                        if (_r1048_t2 && _r1048_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1048_t2.left === 'sw')
                            r1048_sw = _r1048_t2.right;
                        _r1048_t5 = _r1048_t5 + 1;
                    }
                    var r1048_x = r1_fallback(r1048_x, _r1048_t1[0]);
                    var r1048_yBot = r1_fallback(r1048_yBot, _r1048_t1[1]);
                    var r1048_yTop = r1_fallback(r1048_yTop, _r1048_t1[2]);
                    var r1048_sw = r1_fallback(r1048_sw, _r1048_t1[3], r393_Stroke);
                    return r1005_lBarOuter(r1048_x - r393_HSwToV(0.5 * r1048_sw), r1048_yBot, r1048_yTop, new r393_xn$NamedParameterPair$2Lrc9b('sw', r1048_sw));
                };
                r1005_exports.mBarInner = r1005_mBarInner = function () {
                    var _r1055_t6;
                    var _r1055_t7 = arguments;
                    var _r1055_t0 = [].slice.call(_r1055_t7, 0);
                    var _r1055_t1 = [];
                    var _r1055_t2 = 0;
                    while (_r1055_t2 < _r1055_t0.length) {
                        if (!(_r1055_t0[_r1055_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r1055_t1.push(_r1055_t0[_r1055_t2]);
                        _r1055_t2 = _r1055_t2 + 1;
                    }
                    var _r1055_t3 = _r1055_t0;
                    var _r1055_t4 = _r1055_t3.length;
                    var _r1055_t5 = 0;
                    while (_r1055_t5 < _r1055_t4) {
                        _r1055_t2 = _r1055_t3[_r1055_t5];
                        if (_r1055_t2 && _r1055_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1055_t2.left === 'x')
                            r1055_x = _r1055_t2.right;
                        if (_r1055_t2 && _r1055_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1055_t2.left === 'yBot')
                            r1055_yBot = _r1055_t2.right;
                        if (_r1055_t2 && _r1055_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1055_t2.left === 'yTop')
                            r1055_yTop = _r1055_t2.right;
                        if (_r1055_t2 && _r1055_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1055_t2.left === 'sw')
                            r1055_sw = _r1055_t2.right;
                        _r1055_t5 = _r1055_t5 + 1;
                    }
                    var r1055_x = r1_fallback(r1055_x, _r1055_t1[0]);
                    var r1055_yBot = r1_fallback(r1055_yBot, _r1055_t1[1]);
                    var r1055_yTop = r1_fallback(r1055_yTop, _r1055_t1[2]);
                    var r1055_sw = r1_fallback(r1055_sw, _r1055_t1[3], r393_Stroke);
                    return r1005_lBarInner(r1055_x - r393_HSwToV(0.5 * r1055_sw), r1055_yBot, r1055_yTop, new r393_xn$NamedParameterPair$2Lrc9b('sw', r1055_sw));
                };
                r1005_exports.arcStart = r1005_arcStart = function () {
                    var _r1062_t6;
                    var _r1062_t7 = arguments;
                    var _r1062_t0 = [].slice.call(_r1062_t7, 0);
                    var _r1062_t1 = [];
                    var _r1062_t2 = 0;
                    while (_r1062_t2 < _r1062_t0.length) {
                        if (!(_r1062_t0[_r1062_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                            _r1062_t1.push(_r1062_t0[_r1062_t2]);
                        _r1062_t2 = _r1062_t2 + 1;
                    }
                    var _r1062_t3 = _r1062_t0;
                    var _r1062_t4 = _r1062_t3.length;
                    var _r1062_t5 = 0;
                    while (_r1062_t5 < _r1062_t4) {
                        _r1062_t2 = _r1062_t3[_r1062_t5];
                        if (_r1062_t2 && _r1062_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1062_t2.left === 'cx')
                            r1062_cx = _r1062_t2.right;
                        if (_r1062_t2 && _r1062_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1062_t2.left === 'cy')
                            r1062_cy = _r1062_t2.right;
                        if (_r1062_t2 && _r1062_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1062_t2.left === 'hookY')
                            r1062_hookY = _r1062_t2.right;
                        if (_r1062_t2 && _r1062_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1062_t2.left === 'refSw')
                            r1062_refSw = _r1062_t2.right;
                        _r1062_t5 = _r1062_t5 + 1;
                    }
                    var r1062_cx = r1_fallback(r1062_cx, _r1062_t1[0]);
                    var r1062_cy = r1_fallback(r1062_cy, _r1062_t1[1]);
                    var r1062_hookY = r1_fallback(r1062_hookY, _r1062_t1[2]);
                    var r1062_refSw = r1_fallback(r1062_refSw, _r1062_t1[3], r393_Stroke);
                    var r1062_sw = r393_ArcStartSerifWidth(r1062_refSw);
                    var r1062_fullDepth = r393_Ascender - r393_XH - 0.5 * r1062_sw - r393_O;
                    var r1062_yHookStart = r1062_cy + (r1062_fullDepth - r393_TailY);
                    return r393_union(r393_VBar.r(r1062_cx, r1062_cy - r1062_hookY + r393_O * 2, r1062_yHookStart, r1062_sw), r393_VerticalHook.r(r1062_cx, r1062_yHookStart, r393_TailX, -r393_TailY, r1062_sw));
                };
                return r1005_exports;
            }();
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r1068_t0, _r1068_t1;
                return { 'LeftHook': r853_LeftHook };
            });
            var r853_LeftHook = function (r1069_x, r1069_y, r1069_xextend) {
                var _r1069_t0, _r1069_t1;
                return function () {
                    var _r1071_t1;
                    var _r1071_t0 = this;
                    var r1071_currentGlyph = _r1071_t0;
                    var r1071_fine = r393_AdviceStroke(4.25);
                    r1071_currentGlyph.include(r393_dispiro(r393_widths.lhs(r1071_fine), r393_flat(r1_fallback(r1069_xextend, r1069_x + 1), r1069_y), r393_curl(r1069_x, r1069_y), r393_archv(8), r393_g4.down.end(r1069_x - r853_LeftHook.extension, r1069_y - r393_HookX, r393_heading(r393_Downward))));
                    return void 0;
                };
            };
            return r853_LeftHook.extension = Math.max(r393_Width * 0.2, r393_AdviceStroke(4.25) * 1.5);
        }());
        (function () {
            var r1074_BeltOverlayAt = function (r1075_x, r1075_y) {
                var _r1075_t0, _r1075_t1;
                var r1075_fine = r393_AdviceStroke(4.5);
                var r1075_r = r393_XH * 0.05;
                return r393_dispiro(r393_widths.rhs(r1075_fine), r393_flat(r1075_x, r1075_y + r1075_r, r393_heading(r393_Leftward)), r393_curl(r1075_x - r393_HalfStroke - r1075_r * 1.5, r1075_y + r1075_r), r393_archv(), r393_g4.down.mid(r1075_x - r393_HalfStroke - r1075_r * 2.5, r1075_y, r393_heading(r393_Downward)), r393_arcvh(), r393_flat(r1075_x - r393_HalfStroke - r1075_r * 1.5, r1075_y - r1075_r), r393_curl(r1075_x + r393_HalfStroke + r1075_r * 1.5 + r1075_fine, r1075_y - r1075_r));
            };
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r1077_t0, _r1077_t1;
                return { 'BeltOverlay': r1074_BeltOverlay };
            });
            var r1074_BeltOverlay = function (r1078_top, r1078_xMiddle) {
                var _r1078_t0, _r1078_t1;
                return r1074_BeltOverlayAt(r1078_xMiddle, 0.5 * r1078_top);
            };
            return r1074_BeltOverlay.at = r1074_BeltOverlayAt;
        }());
        return function () {
            r393_xn$ExportCapture$2Lrc4b(function () {
                var _r1082_t0, _r1082_t1;
                return { 'LetterBarOverlay': r1080_LetterBarOverlay };
            });
            var r1080_LetterBarOverlay = function () {
                var _r1083_t7;
                var _r1083_t8 = arguments;
                var _r1083_t0 = [].slice.call(_r1083_t8, 0);
                var _r1083_t1 = [];
                var _r1083_t2 = 0;
                while (_r1083_t2 < _r1083_t0.length) {
                    if (!(_r1083_t0[_r1083_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r1083_t1.push(_r1083_t0[_r1083_t2]);
                    _r1083_t2 = _r1083_t2 + 1;
                }
                var _r1083_t3 = _r1083_t0;
                var _r1083_t4 = _r1083_t3.length;
                var _r1083_t5 = 0;
                while (_r1083_t5 < _r1083_t4) {
                    _r1083_t2 = _r1083_t3[_r1083_t5];
                    if (_r1083_t2 && _r1083_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1083_t2.left === 'x')
                        r1083_x = _r1083_t2.right;
                    if (_r1083_t2 && _r1083_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1083_t2.left === 'y')
                        r1083_y = _r1083_t2.right;
                    if (_r1083_t2 && _r1083_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1083_t2.left === 'space')
                        r1083_space = _r1083_t2.right;
                    if (_r1083_t2 && _r1083_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1083_t2.left === 'refSw')
                        r1083_refSw = _r1083_t2.right;
                    if (_r1083_t2 && _r1083_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1083_t2.left === 'pXInSw')
                        r1083_pXInSw = _r1083_t2.right;
                    if (_r1083_t2 && _r1083_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1083_t2.left === 'sw')
                        r1083_sw = _r1083_t2.right;
                    _r1083_t5 = _r1083_t5 + 1;
                }
                var r1083_x = r1_fallback(r1083_x, _r1083_t1[0]);
                var r1083_y = r1_fallback(r1083_y, _r1083_t1[1]);
                var r1083_space = r1_fallback(r1083_space, _r1083_t1[2]);
                var r1083_refSw = r1_fallback(r1083_refSw, _r1083_t1[3]);
                var r1083_pXInSw = r1_fallback(r1083_pXInSw, _r1083_t1[4]);
                var r1083_sw = r1_fallback(r1083_sw, _r1083_t1[5]);
                var _r1083_t6 = r1083_space;
                var r1083_xLeftSpace = _r1083_t6[0];
                var r1083_xRightSpace = _r1083_t6[1];
                var r1083_xLeftEdge = r1083_x - r1083_pXInSw * r393_HSwToV(r1083_refSw);
                var r1083_xRightEdge = r1083_x + (1 - r1083_pXInSw) * r393_HSwToV(r1083_refSw);
                var r1083_p = (r1083_xLeftEdge - r1083_xLeftSpace) / (r1083_xRightSpace - r1083_xRightEdge + (r1083_xLeftEdge - r1083_xLeftSpace));
                var r1083_xC = r1_mix(r1083_xLeftEdge, r1083_xRightEdge, r1_mix(0.5, 1 - r1083_p, 0.5));
                var r1083_jut = 0.75 * r393_LongJut;
                return r393_HOverlayBar(Math.min(r1083_xLeftEdge - r393_SideJut, Math.max(r1083_xC - r1083_jut, r1_mix(r1083_xLeftSpace, r1083_xLeftEdge, 0.3))), Math.max(r1083_xRightEdge + r393_SideJut, Math.min(r1_mix(r1083_xRightSpace, r1083_xRightEdge, 0.3), r1083_xC + r1083_jut)), r1083_y, r1083_sw);
            };
            r1080_LetterBarOverlay.l = function () {
                var _r1088_t6;
                var _r1088_t7 = arguments;
                var _r1088_t0 = [].slice.call(_r1088_t7, 0);
                var _r1088_t1 = [];
                var _r1088_t2 = 0;
                while (_r1088_t2 < _r1088_t0.length) {
                    if (!(_r1088_t0[_r1088_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r1088_t1.push(_r1088_t0[_r1088_t2]);
                    _r1088_t2 = _r1088_t2 + 1;
                }
                var _r1088_t3 = _r1088_t0;
                var _r1088_t4 = _r1088_t3.length;
                var _r1088_t5 = 0;
                while (_r1088_t5 < _r1088_t4) {
                    _r1088_t2 = _r1088_t3[_r1088_t5];
                    if (_r1088_t2 && _r1088_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1088_t2.left === 'x')
                        r1088_x = _r1088_t2.right;
                    if (_r1088_t2 && _r1088_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1088_t2.left === 'y')
                        r1088_y = _r1088_t2.right;
                    if (_r1088_t2 && _r1088_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1088_t2.left === 'space')
                        r1088_space = _r1088_t2.right;
                    if (_r1088_t2 && _r1088_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1088_t2.left === 'refSw')
                        r1088_refSw = _r1088_t2.right;
                    if (_r1088_t2 && _r1088_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1088_t2.left === 'sw')
                        r1088_sw = _r1088_t2.right;
                    _r1088_t5 = _r1088_t5 + 1;
                }
                var r1088_x = r1_fallback(r1088_x, _r1088_t1[0]);
                var r1088_y = r1_fallback(r1088_y, _r1088_t1[1]);
                var r1088_space = r1_fallback(r1088_space, _r1088_t1[2], [
                    0,
                    r393_Width
                ]);
                var r1088_refSw = r1_fallback(r1088_refSw, _r1088_t1[3], r393_Stroke);
                var r1088_sw = r1_fallback(r1088_sw, _r1088_t1[4], r393_OverlayStroke);
                return r1080_LetterBarOverlay(r1088_x, r1088_y, new r393_xn$NamedParameterPair$2Lrc9b('space', r1088_space), new r393_xn$NamedParameterPair$2Lrc9b('refSw', r1088_refSw), new r393_xn$NamedParameterPair$2Lrc9b('pXInSw', 0), new r393_xn$NamedParameterPair$2Lrc9b('sw', r1088_sw));
            };
            r1080_LetterBarOverlay.m = function () {
                var _r1097_t6;
                var _r1097_t7 = arguments;
                var _r1097_t0 = [].slice.call(_r1097_t7, 0);
                var _r1097_t1 = [];
                var _r1097_t2 = 0;
                while (_r1097_t2 < _r1097_t0.length) {
                    if (!(_r1097_t0[_r1097_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r1097_t1.push(_r1097_t0[_r1097_t2]);
                    _r1097_t2 = _r1097_t2 + 1;
                }
                var _r1097_t3 = _r1097_t0;
                var _r1097_t4 = _r1097_t3.length;
                var _r1097_t5 = 0;
                while (_r1097_t5 < _r1097_t4) {
                    _r1097_t2 = _r1097_t3[_r1097_t5];
                    if (_r1097_t2 && _r1097_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1097_t2.left === 'x')
                        r1097_x = _r1097_t2.right;
                    if (_r1097_t2 && _r1097_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1097_t2.left === 'y')
                        r1097_y = _r1097_t2.right;
                    if (_r1097_t2 && _r1097_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1097_t2.left === 'space')
                        r1097_space = _r1097_t2.right;
                    if (_r1097_t2 && _r1097_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1097_t2.left === 'refSw')
                        r1097_refSw = _r1097_t2.right;
                    if (_r1097_t2 && _r1097_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1097_t2.left === 'sw')
                        r1097_sw = _r1097_t2.right;
                    _r1097_t5 = _r1097_t5 + 1;
                }
                var r1097_x = r1_fallback(r1097_x, _r1097_t1[0]);
                var r1097_y = r1_fallback(r1097_y, _r1097_t1[1]);
                var r1097_space = r1_fallback(r1097_space, _r1097_t1[2], [
                    0,
                    r393_Width
                ]);
                var r1097_refSw = r1_fallback(r1097_refSw, _r1097_t1[3], r393_Stroke);
                var r1097_sw = r1_fallback(r1097_sw, _r1097_t1[4], r393_OverlayStroke);
                return r1080_LetterBarOverlay(r1097_x, r1097_y, new r393_xn$NamedParameterPair$2Lrc9b('space', r1097_space), new r393_xn$NamedParameterPair$2Lrc9b('refSw', r1097_refSw), new r393_xn$NamedParameterPair$2Lrc9b('pXInSw', 0.5), new r393_xn$NamedParameterPair$2Lrc9b('sw', r1097_sw));
            };
            r1080_LetterBarOverlay.r = function () {
                var _r1106_t6;
                var _r1106_t7 = arguments;
                var _r1106_t0 = [].slice.call(_r1106_t7, 0);
                var _r1106_t1 = [];
                var _r1106_t2 = 0;
                while (_r1106_t2 < _r1106_t0.length) {
                    if (!(_r1106_t0[_r1106_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r1106_t1.push(_r1106_t0[_r1106_t2]);
                    _r1106_t2 = _r1106_t2 + 1;
                }
                var _r1106_t3 = _r1106_t0;
                var _r1106_t4 = _r1106_t3.length;
                var _r1106_t5 = 0;
                while (_r1106_t5 < _r1106_t4) {
                    _r1106_t2 = _r1106_t3[_r1106_t5];
                    if (_r1106_t2 && _r1106_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1106_t2.left === 'x')
                        r1106_x = _r1106_t2.right;
                    if (_r1106_t2 && _r1106_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1106_t2.left === 'y')
                        r1106_y = _r1106_t2.right;
                    if (_r1106_t2 && _r1106_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1106_t2.left === 'space')
                        r1106_space = _r1106_t2.right;
                    if (_r1106_t2 && _r1106_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1106_t2.left === 'refSw')
                        r1106_refSw = _r1106_t2.right;
                    if (_r1106_t2 && _r1106_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1106_t2.left === 'sw')
                        r1106_sw = _r1106_t2.right;
                    _r1106_t5 = _r1106_t5 + 1;
                }
                var r1106_x = r1_fallback(r1106_x, _r1106_t1[0]);
                var r1106_y = r1_fallback(r1106_y, _r1106_t1[1]);
                var r1106_space = r1_fallback(r1106_space, _r1106_t1[2], [
                    0,
                    r393_Width
                ]);
                var r1106_refSw = r1_fallback(r1106_refSw, _r1106_t1[3], r393_Stroke);
                var r1106_sw = r1_fallback(r1106_sw, _r1106_t1[4], r393_OverlayStroke);
                return r1080_LetterBarOverlay(r1106_x, r1106_y, new r393_xn$NamedParameterPair$2Lrc9b('space', r1106_space), new r393_xn$NamedParameterPair$2Lrc9b('refSw', r1106_refSw), new r393_xn$NamedParameterPair$2Lrc9b('pXInSw', 1), new r393_xn$NamedParameterPair$2Lrc9b('sw', r1106_sw));
            };
            var r1080_calcYAndSw = function (r1115_bot, r1115_top, r1115_py, r1115_sw) {
                var _r1115_t0, _r1115_t1;
                var r1115_y = r1_mix(r1115_bot, r1115_top, r1115_py);
                var r1115_sw1 = Math.min(r1115_sw, 1.25 * (r1115_top - r1115_bot) * r1115_py, 1.25 * (r1115_top - r1115_bot) * (1 - r1115_py));
                return [
                    r1115_y,
                    r1115_sw1
                ];
            };
            r1080_LetterBarOverlay.l.in = function () {
                var _r1116_t7;
                var _r1116_t8 = arguments;
                var _r1116_t0 = [].slice.call(_r1116_t8, 0);
                var _r1116_t1 = [];
                var _r1116_t2 = 0;
                while (_r1116_t2 < _r1116_t0.length) {
                    if (!(_r1116_t0[_r1116_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r1116_t1.push(_r1116_t0[_r1116_t2]);
                    _r1116_t2 = _r1116_t2 + 1;
                }
                var _r1116_t3 = _r1116_t0;
                var _r1116_t4 = _r1116_t3.length;
                var _r1116_t5 = 0;
                while (_r1116_t5 < _r1116_t4) {
                    _r1116_t2 = _r1116_t3[_r1116_t5];
                    if (_r1116_t2 && _r1116_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1116_t2.left === 'x')
                        r1116_x = _r1116_t2.right;
                    if (_r1116_t2 && _r1116_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1116_t2.left === 'bot')
                        r1116_bot = _r1116_t2.right;
                    if (_r1116_t2 && _r1116_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1116_t2.left === 'top')
                        r1116_top = _r1116_t2.right;
                    if (_r1116_t2 && _r1116_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1116_t2.left === 'py')
                        r1116_py = _r1116_t2.right;
                    if (_r1116_t2 && _r1116_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1116_t2.left === 'space')
                        r1116_space = _r1116_t2.right;
                    if (_r1116_t2 && _r1116_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1116_t2.left === 'refSw')
                        r1116_refSw = _r1116_t2.right;
                    if (_r1116_t2 && _r1116_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1116_t2.left === 'sw')
                        r1116_sw = _r1116_t2.right;
                    _r1116_t5 = _r1116_t5 + 1;
                }
                var r1116_x = r1_fallback(r1116_x, _r1116_t1[0]);
                var r1116_bot = r1_fallback(r1116_bot, _r1116_t1[1]);
                var r1116_top = r1_fallback(r1116_top, _r1116_t1[2]);
                var r1116_py = r1_fallback(r1116_py, _r1116_t1[3], 0.5);
                var r1116_space = r1_fallback(r1116_space, _r1116_t1[4], [
                    0,
                    r393_Width
                ]);
                var r1116_refSw = r1_fallback(r1116_refSw, _r1116_t1[5], r393_Stroke);
                var r1116_sw = r1_fallback(r1116_sw, _r1116_t1[6], r393_OverlayStroke);
                var _r1116_t6 = r1080_calcYAndSw(r1116_bot, r1116_top, r1116_py, r1116_sw);
                var r1116_y = _r1116_t6[0];
                var r1116_sw1 = _r1116_t6[1];
                return r1080_LetterBarOverlay(r1116_x, r1116_y, new r393_xn$NamedParameterPair$2Lrc9b('space', r1116_space), new r393_xn$NamedParameterPair$2Lrc9b('refSw', r1116_refSw), new r393_xn$NamedParameterPair$2Lrc9b('pXInSw', 0), new r393_xn$NamedParameterPair$2Lrc9b('sw', r1116_sw1));
            };
            r1080_LetterBarOverlay.m.in = function () {
                var _r1125_t7;
                var _r1125_t8 = arguments;
                var _r1125_t0 = [].slice.call(_r1125_t8, 0);
                var _r1125_t1 = [];
                var _r1125_t2 = 0;
                while (_r1125_t2 < _r1125_t0.length) {
                    if (!(_r1125_t0[_r1125_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r1125_t1.push(_r1125_t0[_r1125_t2]);
                    _r1125_t2 = _r1125_t2 + 1;
                }
                var _r1125_t3 = _r1125_t0;
                var _r1125_t4 = _r1125_t3.length;
                var _r1125_t5 = 0;
                while (_r1125_t5 < _r1125_t4) {
                    _r1125_t2 = _r1125_t3[_r1125_t5];
                    if (_r1125_t2 && _r1125_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1125_t2.left === 'x')
                        r1125_x = _r1125_t2.right;
                    if (_r1125_t2 && _r1125_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1125_t2.left === 'bot')
                        r1125_bot = _r1125_t2.right;
                    if (_r1125_t2 && _r1125_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1125_t2.left === 'top')
                        r1125_top = _r1125_t2.right;
                    if (_r1125_t2 && _r1125_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1125_t2.left === 'py')
                        r1125_py = _r1125_t2.right;
                    if (_r1125_t2 && _r1125_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1125_t2.left === 'space')
                        r1125_space = _r1125_t2.right;
                    if (_r1125_t2 && _r1125_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1125_t2.left === 'refSw')
                        r1125_refSw = _r1125_t2.right;
                    if (_r1125_t2 && _r1125_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1125_t2.left === 'sw')
                        r1125_sw = _r1125_t2.right;
                    _r1125_t5 = _r1125_t5 + 1;
                }
                var r1125_x = r1_fallback(r1125_x, _r1125_t1[0]);
                var r1125_bot = r1_fallback(r1125_bot, _r1125_t1[1]);
                var r1125_top = r1_fallback(r1125_top, _r1125_t1[2]);
                var r1125_py = r1_fallback(r1125_py, _r1125_t1[3], 0.5);
                var r1125_space = r1_fallback(r1125_space, _r1125_t1[4], [
                    0,
                    r393_Width
                ]);
                var r1125_refSw = r1_fallback(r1125_refSw, _r1125_t1[5], r393_Stroke);
                var r1125_sw = r1_fallback(r1125_sw, _r1125_t1[6], r393_OverlayStroke);
                var _r1125_t6 = r1080_calcYAndSw(r1125_bot, r1125_top, r1125_py, r1125_sw);
                var r1125_y = _r1125_t6[0];
                var r1125_sw1 = _r1125_t6[1];
                return r1080_LetterBarOverlay(r1125_x, r1125_y, new r393_xn$NamedParameterPair$2Lrc9b('space', r1125_space), new r393_xn$NamedParameterPair$2Lrc9b('refSw', r1125_refSw), new r393_xn$NamedParameterPair$2Lrc9b('pXInSw', 0.5), new r393_xn$NamedParameterPair$2Lrc9b('sw', r1125_sw1));
            };
            return r1080_LetterBarOverlay.r.in = function () {
                var _r1134_t7;
                var _r1134_t8 = arguments;
                var _r1134_t0 = [].slice.call(_r1134_t8, 0);
                var _r1134_t1 = [];
                var _r1134_t2 = 0;
                while (_r1134_t2 < _r1134_t0.length) {
                    if (!(_r1134_t0[_r1134_t2] instanceof r393_xn$NamedParameterPair$2Lrc9b))
                        _r1134_t1.push(_r1134_t0[_r1134_t2]);
                    _r1134_t2 = _r1134_t2 + 1;
                }
                var _r1134_t3 = _r1134_t0;
                var _r1134_t4 = _r1134_t3.length;
                var _r1134_t5 = 0;
                while (_r1134_t5 < _r1134_t4) {
                    _r1134_t2 = _r1134_t3[_r1134_t5];
                    if (_r1134_t2 && _r1134_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1134_t2.left === 'x')
                        r1134_x = _r1134_t2.right;
                    if (_r1134_t2 && _r1134_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1134_t2.left === 'bot')
                        r1134_bot = _r1134_t2.right;
                    if (_r1134_t2 && _r1134_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1134_t2.left === 'top')
                        r1134_top = _r1134_t2.right;
                    if (_r1134_t2 && _r1134_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1134_t2.left === 'py')
                        r1134_py = _r1134_t2.right;
                    if (_r1134_t2 && _r1134_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1134_t2.left === 'space')
                        r1134_space = _r1134_t2.right;
                    if (_r1134_t2 && _r1134_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1134_t2.left === 'refSw')
                        r1134_refSw = _r1134_t2.right;
                    if (_r1134_t2 && _r1134_t2 instanceof r393_xn$NamedParameterPair$2Lrc9b && _r1134_t2.left === 'sw')
                        r1134_sw = _r1134_t2.right;
                    _r1134_t5 = _r1134_t5 + 1;
                }
                var r1134_x = r1_fallback(r1134_x, _r1134_t1[0]);
                var r1134_bot = r1_fallback(r1134_bot, _r1134_t1[1]);
                var r1134_top = r1_fallback(r1134_top, _r1134_t1[2]);
                var r1134_py = r1_fallback(r1134_py, _r1134_t1[3], 0.5);
                var r1134_space = r1_fallback(r1134_space, _r1134_t1[4], [
                    0,
                    r393_Width
                ]);
                var r1134_refSw = r1_fallback(r1134_refSw, _r1134_t1[5], r393_Stroke);
                var r1134_sw = r1_fallback(r1134_sw, _r1134_t1[6], r393_OverlayStroke);
                var _r1134_t6 = r1080_calcYAndSw(r1134_bot, r1134_top, r1134_py, r1134_sw);
                var r1134_y = _r1134_t6[0];
                var r1134_sw1 = _r1134_t6[1];
                return r1080_LetterBarOverlay(r1134_x, r1134_y, new r393_xn$NamedParameterPair$2Lrc9b('space', r1134_space), new r393_xn$NamedParameterPair$2Lrc9b('refSw', r1134_refSw), new r393_xn$NamedParameterPair$2Lrc9b('pXInSw', 1), new r393_xn$NamedParameterPair$2Lrc9b('sw', r1134_sw1));
            };
        }();
    });
    return void 0;
});
