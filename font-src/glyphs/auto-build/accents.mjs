'use strict';
import * as _s0_t0 from '../../support/gr.mjs';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/unicode-knowledge.mjs';
var _s0_t3;
export {
    _s0_t3 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t4 = function _r1_t10(r312_lo, r312_hi) {
    var r312_j, _r312_t3, _r312_t4, _r312_t5, _r312_t6, _r312_t7, _r312_t8, _r312_t9, _r312_t10, _r312_t11, _r312_t12, _r312_t13;
    var _r312_t0 = function () {
        _r312_t7 = r312_j = r312_lo;
        _r312_t8 = function (_r312_t10) {
            _r312_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r312_t10
            };
        };
        _r312_t9 = function (_r312_t11) {
            _r312_t12 = r312_j < r312_hi;
            if (_r312_t12) {
                _r312_t0 = function (_r312_t13) {
                    return _r312_t9(r312_j = r312_j + 1);
                };
                return {
                    'value': r312_j,
                    'done': false
                };
            } else
                return _r312_t8(_r312_t11);
        };
        return _r312_t9();
    };
    var _r312_t1 = function (x) {
        try {
            return _r312_t0(x);
        } catch (ex) {
            return _r312_t2(ex);
        }
    };
    var _r312_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10)
        _r312_t3 = this;
    else {
        _r312_t4 = function () {
            void 0;
        };
        _r312_t4.prototype = _r1_t10.prototype;
        _r312_t3 = new _r312_t4();
    }
    _r312_t3[Symbol.iterator] = function () {
        return _r312_t3;
    };
    _r312_t3.next = _r312_t1;
    _r312_t3.throw = function (x) {
        return _r312_t2(x);
    };
    return _r312_t3;
};
var _r1_t8 = _s0_t0;
var r1_Dotless = _r1_t8.Dotless;
var r1_AnyDerivingCv = _r1_t8.AnyDerivingCv;
var r1_DotlessOrNot = _r1_t8.DotlessOrNot;
var r1_getGrTree = _r1_t8.getGrTree;
var r1_CvDecompose = _r1_t8.CvDecompose;
var r1_LeaningMark = _r1_t8.LeaningMark;
var r1_LeaningMarkSpacer = _r1_t8.LeaningMarkSpacer;
var _r1_t9 = _s0_t1;
var r1_fallback = _r1_t9.fallback;
var r1_ArrayUtil = _r1_t9.ArrayUtil;
var r1_MatchUtil = _r1_t9.MatchUtil;
var r1_constant = _r1_t9.constant;
var r1_UnicodeKnowledge = _s0_t2;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r269_block, _r269_t4, _r269_t6;
    var _r269_t3 = this;
    var _r269_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r269_t1 = _r269_t0.length;
    var _r269_t2 = 0;
    var _r269_t5 = _r269_t2 < _r269_t1;
    while (_r269_t5) {
        _r269_t6 = (r269_block = _r269_t0[_r269_t2], r269_block(_r269_t3), _r269_t2 = _r269_t2 + 1);
        _r269_t5 = _r269_t2 < _r269_t1;
    }
    return _r269_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r273_xn$Capture_Ext$2Lrc2b) {
    var _r273_t0, _r273_t1;
    r273_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r273_xn$Capture_Ext$2Lrc2b, 'AutoBuild-Accents', function (r274_xn$Capture$2Lrc8, r274_xn$ExportCapture$2Lrc4b) {
        var r274_code, r274__id, _r274_t10, _r274_t11, _r274_t12, _r274_tag13, _r274_t15, _r274_t16, _r274_tag17;
        var _r274_t0 = r274_xn$Capture$2Lrc8;
        var r274_xn$createAndSaveGlyphImpl$2Lrc3c = _r274_t0['$createAndSaveGlyphImpl$'];
        var r274_xn$NamedParameterPair$2Lrc9b = _r274_t0['$NamedParameterPair$'];
        var r274_xn$Exec$2Lrc5 = _r274_t0['$Exec$'];
        var r274_glyphStore = _r274_t0.glyphStore;
        var r274_AS_BASE = _r274_t0.AS_BASE;
        var r274_ALSO_METRICS = _r274_t0.ALSO_METRICS;
        var _r274_t1 = r274_xn$Capture$2Lrc8.Metrics;
        var _r274_t2 = r274_xn$Capture$2Lrc8.SpiroFns;
        var r274_g2 = _r274_t2.g2;
        var _r274_t3 = r274_xn$Capture$2Lrc8.BooleFns;
        var _r274_t4 = r274_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r274_xn$queryglyph$1aao = _r274_t4['query-glyph'];
        var r274_xn$referglyph$1aao = _r274_t4['refer-glyph'];
        var r274_suggestName = function (r276__name) {
            var r276_j, _r276_t0, _r276_t1;
            var r276_name = r276__name;
            if (r274_xn$queryglyph$1aao(r276_name)) {
                r276_j = 2;
                while (r274_xn$queryglyph$1aao(r276_name + r276_j))
                    r276_j = r276_j + 1;
                r276_name = r276_name + r276_j;
            }
            return r276_name;
        };
        var r274_suggestMappedName = function (r277_map, r277_key, r277_name) {
            var _r277_t0, _r277_t1;
            if (r277_map[r277_key])
                return r277_map[r277_key];
            var r277_amended = r274_suggestName(r277_name);
            r277_map[r277_key] = r277_amended;
            return r277_amended;
        };
        var r274_substParts = function (r278_parts, r278_ignore, r278_backtrack, r278_input, r278_loookAhead, r278_production) {
            var r278_m, r278_inputGlyphs, r278_producedGlyphs, r278_i, _r278_t0, _r278_t1, _r278_t2, _r278_t3;
            var r278_igl = 0;
            while (r278_igl < r278_parts.length) {
                r278_m = r274_substMatch(r278_parts, r278_igl, r278_ignore, r278_backtrack, r278_input, r278_loookAhead);
                if (!r278_m)
                    r278_igl = r278_igl + 1;
                else {
                    r278_inputGlyphs = r1_ArrayUtil.mapIndexToItems(r278_parts, r278_m);
                    r278_producedGlyphs = r278_production.apply(null, r278_inputGlyphs);
                    _r278_t0 = r278_m.length - 1;
                    _r278_t1 = 0;
                    r278_i = _r278_t0;
                    while (r278_i >= _r278_t1) {
                        r278_parts.splice(r278_m[r278_i], 1);
                        r278_i = r278_i - 1;
                    }
                    r1_ArrayUtil.insertSliceAt(r278_parts, r278_m[0], r278_producedGlyphs);
                    r278_igl = r278_m[r278_m.length - 1] + 1 + r278_producedGlyphs.length - r278_m.length;
                }
            }
            return r278_parts;
        };
        var r274_substMatch = function (r280_parts, r280_igl, r280_ignore, r280_backtrack, r280_input, r280_lookAhead) {
            var _r280_t6, _r280_t7;
            if (r280_igl >= r280_parts.length)
                return null;
            if (r280_ignore(r280_parts[r280_igl]))
                return null;
            if (!r280_input[0](r280_parts[r280_igl]))
                return null;
            var r280_m = [r280_igl];
            var r280_iglInput = r280_igl + 1;
            var _r280_t0 = 1;
            var _r280_t1 = r280_input.length;
            var r280_iInput = _r280_t0;
            while (r280_iInput < _r280_t1) {
                while (r280_iglInput < r280_parts.length && r280_ignore(r280_parts[r280_iglInput]))
                    r280_iglInput = r280_iglInput + 1;
                if (r280_iglInput >= r280_parts.length)
                    return null;
                if (!r280_input[r280_iInput](r280_parts[r280_iglInput]))
                    return null;
                r280_m.push(r280_iglInput);
                r280_iglInput = r280_iglInput + 1;
                r280_iInput = r280_iInput + 1;
            }
            var r280_iglLookAhead = r280_iglInput;
            var _r280_t2 = 0;
            var _r280_t3 = r280_lookAhead.length;
            var r280_iLookAhead = _r280_t2;
            while (r280_iLookAhead < _r280_t3) {
                while (r280_iglLookAhead < r280_parts.length && r280_ignore(r280_parts[r280_iglLookAhead]))
                    r280_iglLookAhead = r280_iglLookAhead + 1;
                if (r280_iglLookAhead >= r280_parts.length)
                    return null;
                if (!r280_lookAhead[r280_iLookAhead](r280_parts[r280_iglLookAhead]))
                    return null;
                r280_iglLookAhead = r280_iglLookAhead + 1;
                r280_iLookAhead = r280_iLookAhead + 1;
            }
            var r280_iglBacktrack = r280_igl - 1;
            var _r280_t4 = r280_backtrack.length - 1;
            var _r280_t5 = 0;
            var r280_iBacktrack = _r280_t4;
            while (r280_iBacktrack >= _r280_t5) {
                while (r280_iglBacktrack >= 0 && r280_ignore(r280_parts[r280_iglBacktrack]))
                    r280_iglBacktrack = r280_iglBacktrack - 1;
                if (r280_iglBacktrack < 0)
                    return null;
                if (!r280_backtrack[r280_iBacktrack](r280_parts[r280_iglBacktrack]))
                    return null;
                r280_iglBacktrack = r280_iglBacktrack - 1;
                r280_iBacktrack = r280_iBacktrack - 1;
            }
            return r280_m;
        };
        var r274_dotless = function (r284_g) {
            var _r284_t0, _r284_t1;
            var r284_gDotless = r274_xn$queryglyph$1aao(r1_Dotless.get(r284_g));
            if (!r284_gDotless)
                return null;
            return [r284_gDotless];
        };
        var r274_isMark = function (r285_k) {
            var _r285_t0, _r285_t1;
            return function (r286_g) {
                var _r286_t0, _r286_t1;
                return r286_g && r286_g.markAnchors && r286_g.markAnchors[r285_k];
            };
        };
        var r274_isMarkExcluding = function (r287_k) {
            var _r287_t0, _r287_t1;
            return function (r288_g) {
                var _r288_t0, _r288_t1;
                return r288_g && r288_g.markAnchors && Object.keys(r288_g.markAnchors).length && !r288_g.markAnchors[r287_k];
            };
        };
        var r274_hasBaseAnchor = function (r289_k) {
            var _r289_t0, _r289_t1;
            return function (r290_g) {
                var _r290_t0, _r290_t1;
                return r290_g && r290_g.baseAnchors && r290_g.baseAnchors[r289_k];
            };
        };
        var r274_isLeaningMark = function (r291_k) {
            var _r291_t0, _r291_t1;
            return function (r292_g) {
                var _r292_t0, _r292_t1;
                return r292_g && r292_g.markAnchors && r292_g.markAnchors[r291_k] && r1_LeaningMark.get(r292_g);
            };
        };
        var r274_leaningMarkSplit = function (r293_g) {
            var _r293_t0, _r293_t1;
            var r293_spacer = r274_xn$queryglyph$1aao(r1_LeaningMarkSpacer.get(r293_g));
            var r293_alternative = r274_xn$queryglyph$1aao(r1_LeaningMark.get(r293_g));
            if (r293_spacer && r293_alternative)
                return [
                    r293_spacer,
                    r293_alternative
                ];
            return [r293_g];
        };
        var r274_markSubst = function (r294_uk) {
            var r294_k, r294_v, r294_gFrom, r294_gTo, _r294_t2, _r294_t3, _r294_t4;
            var r294_mapping = new r1_Map();
            var _r294_t0 = Object.entries(r294_uk)[Symbol.iterator]();
            var _r294_t1 = void 0;
            while (!(_r294_t1 = _r294_t0.next()).done) {
                _r294_t2 = _r294_t1.value;
                r294_k = _r294_t2[0];
                r294_v = _r294_t2[1];
                r294_gFrom = r274_xn$queryglyph$1aao(r294_k);
                r294_gTo = r274_xn$queryglyph$1aao(r294_v);
                r294_mapping.set(r294_gFrom, r294_gTo);
            }
            var r294_matcher = function (r296_g) {
                var _r296_t0, _r296_t1;
                return r294_mapping.has(r296_g);
            };
            var r294_ignore = function (r297_g) {
                var _r297_t0, _r297_t1;
                return r297_g && r297_g.markAnchors && Object.keys(r297_g.markAnchors).length && !r294_matcher(r297_g);
            };
            var r294_production = function (r298_g) {
                var _r298_t0, _r298_t1;
                return [r294_mapping.get(r298_g) || r298_g];
            };
            return {
                'matcher': r294_matcher,
                'ignore': r294_ignore,
                'production': r294_production
            };
        };
        var r274_markSplit = function (r299_uk) {
            var r299_k, r299_v, r299_gFrom, r299_gsTo, _r299_t2, _r299_t3, _r299_t4;
            var r299_mapping = new r1_Map();
            var _r299_t0 = Object.entries(r299_uk)[Symbol.iterator]();
            var _r299_t1 = void 0;
            while (!(_r299_t1 = _r299_t0.next()).done) {
                _r299_t2 = _r299_t1.value;
                r299_k = _r299_t2[0];
                r299_v = _r299_t2[1];
                r299_gFrom = r274_xn$queryglyph$1aao(r299_k);
                r299_gsTo = r299_v.map(r274_xn$queryglyph$1aao);
                r299_mapping.set(r299_gFrom, r299_gsTo);
            }
            var r299_matcher = function (r301_g) {
                var _r301_t0, _r301_t1;
                return r299_mapping.has(r301_g);
            };
            var r299_ignore = function (r302_g) {
                var _r302_t0, _r302_t1;
                return r302_g && r302_g.markAnchors && Object.keys(r302_g.markAnchors).length && !r299_matcher(r302_g);
            };
            var r299_production = function (r303_g) {
                var _r303_t0, _r303_t1;
                console.log(r303_g, r299_mapping.get(r303_g));
                return r299_mapping.get(r303_g) || [r303_g];
            };
            return {
                'matcher': r299_matcher,
                'ignore': r299_ignore,
                'production': r299_production
            };
        };
        var r274_markCombine = function (r304_uk) {
            var r304_k1, r304_m, r304_k2, r304_v, r304_g1, r304_g2, r304_g3, r304_mm, _r304_t2, _r304_t3, _r304_t4, _r304_t5, _r304_t6, _r304_t7;
            var r304_first = new r1_Set();
            var r304_second = new r1_Set();
            var r304_mapping = new r1_Map();
            var _r304_t0 = Object.entries(r304_uk)[Symbol.iterator]();
            var _r304_t1 = void 0;
            while (!(_r304_t1 = _r304_t0.next()).done) {
                _r304_t2 = _r304_t1.value;
                r304_k1 = _r304_t2[0];
                r304_m = _r304_t2[1];
                _r304_t3 = Object.entries(r304_m)[Symbol.iterator]();
                _r304_t4 = void 0;
                while (!(_r304_t4 = _r304_t3.next()).done) {
                    _r304_t5 = _r304_t4.value;
                    r304_k2 = _r304_t5[0];
                    r304_v = _r304_t5[1];
                    r304_g1 = r274_xn$queryglyph$1aao(r304_k1);
                    r304_g2 = r274_xn$queryglyph$1aao(r304_k2);
                    r304_g3 = r274_xn$queryglyph$1aao(r304_v);
                    if (r304_g1 && r304_g2 && r304_g3) {
                        r304_first.add(r304_g1);
                        r304_second.add(r304_g2);
                        r304_mm = r304_mapping.get(r304_g1);
                        if (!r304_mm) {
                            r304_mm = new r1_Map();
                            r304_mapping.set(r304_g1, r304_mm);
                        }
                        r304_mm.set(r304_g2, r304_g3);
                    }
                }
            }
            var r304_matchFirst = function (r307_g) {
                var _r307_t0, _r307_t1;
                return r304_first.has(r307_g);
            };
            var r304_matchSecond = function (r308_g) {
                var _r308_t0, _r308_t1;
                return r304_second.has(r308_g);
            };
            var r304_production = function (r309_g1, r309_g2) {
                var _r309_t0, _r309_t1;
                var r309_mm = r304_mapping.get(r309_g1);
                if (!r309_mm)
                    return [
                        r309_g1,
                        r309_g2
                    ];
                var r309_g3 = r309_mm.get(r309_g2);
                if (!r309_g3)
                    return [
                        r309_g1,
                        r309_g2
                    ];
                return [r309_g3];
            };
            return {
                'matchFirst': r304_matchFirst,
                'matchSecond': r304_matchSecond,
                'production': r304_production
            };
        };
        var r274_iotaLF = r274_markSubst(r1_UnicodeKnowledge.iotaBelowToLfTf);
        var r274_ogonek = r274_markSplit(r1_UnicodeKnowledge.ogonekBelowToTRTf);
        var r274_upperTonos = r274_markSubst(r1_UnicodeKnowledge.upperGrekMarkToTonosTf);
        var r274_markComposition = r274_markCombine(r1_UnicodeKnowledge.markCompositionTf);
        var r274_subParts = function (r310_parts) {
            var _r310_t0, _r310_t1;
            r274_substParts(r310_parts, r274_isMarkExcluding('above'), [], [r274_dotless], [r274_isMark('above')], r274_dotless);
            r274_substParts(r310_parts, r274_iotaLF.ignore, [r274_hasBaseAnchor('lf')], [r274_iotaLF.matcher], [], r274_iotaLF.production);
            r274_substParts(r310_parts, r274_ogonek.ignore, [r274_hasBaseAnchor('trailing')], [r274_ogonek.matcher], [], r274_ogonek.production);
            r274_substParts(r310_parts, r274_isMarkExcluding('above'), [r1_MatchUtil.either(r274_hasBaseAnchor('leaningAbove'), r274_isMark('leaningAbove'))], [r274_isLeaningMark('above')], [], r274_leaningMarkSplit);
            r274_substParts(r310_parts, r274_isMarkExcluding('below'), [r1_MatchUtil.either(r274_hasBaseAnchor('leaningBelow'), r274_isMark('leaningBelow'))], [r274_isLeaningMark('below')], [], r274_leaningMarkSplit);
            r274_substParts(r310_parts, r1_MatchUtil.never, [], [
                r274_markComposition.matchFirst,
                r274_markComposition.matchSecond
            ], [], r274_markComposition.production);
            return r274_substParts(r310_parts, r1_MatchUtil.never, [r274_hasBaseAnchor('grekUpperTonos')], [r274_upperTonos.matcher], [], r274_upperTonos.production);
        };
        var r274_pad = function (r311__s, r311_n) {
            var _r311_t0, _r311_t1;
            var r311_s = r311__s;
            while (r311_s.length < r311_n)
                r311_s = '0' + r311_s;
            return r311_s;
        };
        var r274_foundDecompositions = {};
        var r274_goalCodes = _r1_t4(0, 131071);
        var _r274_t5 = r274_goalCodes[Symbol.iterator]();
        var _r274_t6 = void 0;
        while (!(_r274_t6 = _r274_t5.next()).done) {
            r274_code = _r274_t6.value;
            if (!r274_glyphStore.queryByUnicode(r274_code))
                (function () {
                    var r316_partName, r316_part, r316_nfdChars, r316_partChar, r316_glyphName, _r316_t0, _r316_t1, _r316_t2, _r316_t3, _r316_t4;
                    var r316_parts = [];
                    var r316_allFound = true;
                    var r316_customDecomp = r1_UnicodeKnowledge.decompOverrides[r274_code];
                    var r316_str = String.fromCodePoint(r274_code);
                    var r316_nfd = r316_str.normalize('NFD');
                    if (r316_customDecomp) {
                        _r316_t0 = r316_customDecomp[Symbol.iterator]();
                        _r316_t1 = void 0;
                        while (!(_r316_t1 = _r316_t0.next()).done) {
                            r316_partName = _r316_t1.value;
                            r316_part = r274_glyphStore.queryByName(r316_partName);
                            if (!r316_part)
                                r316_allFound = false;
                            else
                                r316_parts.push(r316_part);
                        }
                    } else if (r316_str !== r316_nfd) {
                        r316_nfdChars = Array.from(r316_nfd);
                        _r316_t2 = r316_nfdChars;
                        _r316_t3 = _r316_t2.length;
                        _r316_t4 = 0;
                        while (_r316_t4 < _r316_t3) {
                            r316_partChar = _r316_t2[_r316_t4];
                            r316_part = r274_glyphStore.queryByUnicode(r316_partChar.codePointAt(0));
                            if (!r316_part)
                                r316_allFound = false;
                            else
                                r316_parts.push(r316_part);
                            _r316_t4 = _r316_t4 + 1;
                        }
                    }
                    return r316_allFound && r316_parts.length ? (r316_glyphName = 'u' + r274_code.toString(16).padStart(4, '0'), r274_subParts(r316_parts), r274_foundDecompositions[r316_glyphName] = [
                        r316_glyphName,
                        r274_code,
                        r316_parts
                    ]) : void 0;
                }());
        }
        var r274_s_goalName = void 0;
        var r274_s_code = void 0;
        var r274_s_parts = void 0;
        var r274_recursivelyDecompose = function (r319_g, r319_sink) {
            var r319_gnPart, _r319_t0, _r319_t1, _r319_t2, _r319_t3, _r319_t4, _r319_t5, _r319_t6, _r319_t7;
            var r319_decomposition = r1_CvDecompose.get(r319_g);
            if (r319_decomposition) {
                _r319_t0 = r319_decomposition;
                _r319_t1 = _r319_t0.length;
                _r319_t2 = 0;
                _r319_t6 = _r319_t2 < _r319_t1;
                while (_r319_t6) {
                    _r319_t7 = (r319_gnPart = _r319_t0[_r319_t2], r319_g = r274_xn$queryglyph$1aao(r319_gnPart), r319_g ? r274_recursivelyDecompose(r319_g, r319_sink) : void 0, _r319_t2 = _r319_t2 + 1);
                    _r319_t6 = _r319_t2 < _r319_t1;
                }
                return _r319_t7;
            } else
                return r319_sink.push(r274_glyphStore.queryNameOf(r319_g));
        };
        var r274_construction = function () {
            var r322_part, r322_decomposeParts, _r322_t3, _r322_t4, _r322_t5, _r322_t7;
            var _r322_t6 = this;
            var r322_currentGlyph = _r322_t6;
            r322_currentGlyph.include(r274_s_parts[0], r274_AS_BASE, r274_ALSO_METRICS);
            var r322_nonTrivial = r1_AnyDerivingCv.hasNonDerivingVariants(r274_s_parts[0]);
            if (r322_nonTrivial)
                console.log(r274_s_parts[0]);
            var _r322_t0 = r274_s_parts.slice(1);
            var _r322_t1 = _r322_t0.length;
            var _r322_t2 = 0;
            while (_r322_t2 < _r322_t1) {
                r322_part = _r322_t0[_r322_t2];
                if (r322_part) {
                    r322_currentGlyph.include(r322_part);
                    if (r322_part.markAnchors && r322_part.markAnchors.bottomRight) {
                        r322_currentGlyph.ejectTagged('serifRB');
                        r322_nonTrivial = true;
                    }
                }
                _r322_t2 = _r322_t2 + 1;
            }
            if (!r322_nonTrivial && r1_AnyDerivingCv.query(r274_s_parts[0])) {
                r322_decomposeParts = [];
                _r322_t3 = r274_s_parts;
                _r322_t4 = _r322_t3.length;
                _r322_t5 = 0;
                while (_r322_t5 < _r322_t4) {
                    r322_part = _r322_t3[_r322_t5];
                    r274_recursivelyDecompose(r322_part, r322_decomposeParts);
                    _r322_t5 = _r322_t5 + 1;
                }
                r1_CvDecompose.set(r322_currentGlyph, r322_decomposeParts);
            }
            return void 0;
        };
        var r274_RootGlyphProc = function (r328_goalName, r328_code, r328_parts) {
            var _r328_t0, _r328_t1;
            r274_s_goalName = r328_goalName;
            r274_s_code = r328_code;
            r274_s_parts = r328_parts;
            return r274_xn$createAndSaveGlyphImpl$2Lrc3c(r328_goalName, r328_code, r274_construction);
        };
        var r274_NeedBuildMesh = function (r330_glyphName, r330_part0Name) {
            var _r330_t0, _r330_t1;
            var r330_g = r274_xn$queryglyph$1aao(r330_glyphName);
            var r330_part0 = r274_xn$queryglyph$1aao(r330_part0Name);
            if (!r330_g)
                return false;
            if (!r330_part0)
                return false;
            if (!r1_CvDecompose.get(r330_g))
                return true;
            if (r1_DotlessOrNot.query(r330_part0))
                return true;
            return false;
        };
        var _r274_t7 = Object.keys(r274_foundDecompositions);
        var _r274_t8 = _r274_t7.length;
        var _r274_t9 = 0;
        var _r274_t14 = _r274_t9 < _r274_t8;
        while (_r274_t14) {
            r274__id = _r274_t7[_r274_t9];
            (function () {
                var r334_part0Name, r334_dstTree, r334_targetNameMap, r334_tree, r334_gr, r334_origBase, r334_relBase, r334_origGN, r334_relGN, r334_parts1, _r334_t1, _r334_t2, _r334_t3, _r334_t4, _r334_t5, _r334_t6, _r334_t7;
                var _r334_t0 = r274_foundDecompositions[r274__id];
                var r334_glyphName = _r334_t0[0];
                var r334_code = _r334_t0[1];
                var r334_parts = _r334_t0[2];
                var r334_saved = r274_RootGlyphProc(r334_glyphName, r334_code, r334_parts);
                if (r334_saved) {
                    r334_part0Name = r274_glyphStore.queryNameOf(r334_parts[0]);
                    if (r334_parts[0] !== r274_xn$queryglyph$1aao(r334_part0Name))
                        throw new Error('Unreachable');
                }
                if (r274_NeedBuildMesh(r334_glyphName, r334_part0Name)) {
                    r334_dstTree = [];
                    r334_targetNameMap = {};
                    r334_targetNameMap[r334_part0Name] = r334_glyphName;
                    r334_tree = r1_getGrTree(r334_part0Name, [
                        r1_DotlessOrNot,
                        r1_AnyDerivingCv
                    ], r274_xn$queryglyph$1aao);
                    _r334_t1 = r334_tree;
                    _r334_t2 = _r334_t1.length;
                    _r334_t3 = 0;
                    _r334_t6 = _r334_t3 < _r334_t2;
                    while (_r334_t6) {
                        _r334_t4 = _r334_t1[_r334_t3];
                        r334_gr = _r334_t4[0];
                        r334_origBase = _r334_t4[1];
                        r334_relBase = _r334_t4[2];
                        r334_origGN = r334_targetNameMap[r334_origBase];
                        if (!r334_origGN)
                            throw new Error('Unreachable');
                        r334_relGN = r274_suggestMappedName(r334_targetNameMap, r334_relBase, r334_gr.amendName(r334_origGN));
                        r334_parts1 = r334_parts.slice(0);
                        r334_parts1[0] = r274_xn$queryglyph$1aao(r334_relBase);
                        if (!r274_xn$queryglyph$1aao(r334_relGN))
                            r274_RootGlyphProc(r334_relGN, null, r334_parts1);
                        if (r274_xn$queryglyph$1aao(r334_origGN))
                            r334_gr.set(r274_xn$queryglyph$1aao(r334_origGN), r334_relGN);
                        _r334_t7 = _r334_t3 = _r334_t3 + 1;
                        _r334_t6 = _r334_t3 < _r334_t2;
                    }
                    _r334_t5 = _r334_t7;
                }
                return _r334_t5;
            }());
            _r274_t15 = _r274_t9 = _r274_t9 + 1;
            _r274_t14 = _r274_t9 < _r274_t8;
        }
        return _r274_t15;
    });
    return void 0;
});
