'use strict';
import * as _s0_t0 from './table-util.mjs';
import * as _s0_t1 from '../support/gr.mjs';
import * as _s0_t2 from '../meta/unicode-knowledge.mjs';
var _s0_t3;
export {
    _s0_t3 as buildCCMP
};
var _s0_t4;
export {
    _s0_t4 as buildCCMPPostCvSs
};
var r1_buildCCMP, r1_buildCCMPPostCvSs, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_UkMapToLookup = _r1_t8.UkMapToLookup;
var r1_UkMap2ToLookup = _r1_t8.UkMap2ToLookup;
var _r1_t9 = _s0_t1;
var r1_Dotless = _r1_t9.Dotless;
var r1_TieMark = _r1_t9.TieMark;
var r1_TieGlyph = _r1_t9.TieGlyph;
var r1_OgonekTrY = _r1_t9.OgonekTrY;
var r1_IsSuperscript = _r1_t9.IsSuperscript;
var r1_IsSubscript = _r1_t9.IsSubscript;
var r1_LeaningMark = _r1_t9.LeaningMark;
var r1_LeaningMarkSpacer = _r1_t9.LeaningMarkSpacer;
var r1_UnicodeKnowledge = _s0_t2;
var r1_Set = Set;
_s0_t3 = r1_buildCCMP = function (r272_gsub, r272_glyphStore, r272_markGlyphs) {
    var _r272_t0, _r272_t1;
    var r272_anyMark = Array.from(r272_markGlyphs.all);
    var r272_aboveMark = r1_filterMarkByClass(r272_markGlyphs, 'above');
    var r272_ccmp = r272_gsub.addCommonFeature(r272_gsub.createFeature('ccmp'));
    var r272_xn$ExecCcmpGroup$2Lrc4b = function (r273_fn) {
        var _r273_t1, _r273_t2;
        var r273_addedLookups = [];
        var r273_xn$exportlookup$7Hrq = function (r274_lookup) {
            var _r274_t0, _r274_t1;
            r272_ccmp.addLookup(r274_lookup);
            return r273_addedLookups.push(r274_lookup);
        };
        var r273_rec = r272_gsub.beginBlock();
        var _r273_t0 = r272_gsub.ChainRuleBuilder();
        var r273_xn$chainrule$1aao = _r273_t0[0];
        r273_fn(r273_xn$exportlookup$7Hrq, r273_xn$chainrule$1aao);
        var r273_j = 1;
        while (r273_j < r273_addedLookups.length) {
            r272_gsub.setDependency(r273_addedLookups[r273_j - 1], r273_addedLookups[r273_j]);
            r273_j = r273_j + 1;
        }
        return r272_gsub.endBlock(r273_rec);
    };
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r276_xn$exportlookup$7Hrq, r276_xn$chainrule$1aao) {
        var r276_gn, r276_g, _r276_t2, _r276_t3, _r276_t4;
        var r276_groupGrekUpperTonos = [];
        var r276_groupLF = [];
        var r276_dotlessFrom = [];
        var r276_dotlessTo = [];
        var _r276_t0 = r272_glyphStore.namedEntries()[Symbol.iterator]();
        var _r276_t1 = void 0;
        while (!(_r276_t1 = _r276_t0.next()).done) {
            _r276_t2 = _r276_t1.value;
            r276_gn = _r276_t2[0];
            r276_g = _r276_t2[1];
            if (r276_gn[0] !== '.') {
                if (r276_g.baseAnchors.lf)
                    r276_groupLF.push(r276_gn);
                if (r276_g.baseAnchors.grekUpperTonos)
                    r276_groupGrekUpperTonos.push(r276_gn);
                if (r1_Dotless.get(r276_g)) {
                    r276_dotlessFrom.push(r276_gn);
                    r276_dotlessTo.push(r1_Dotless.get(r276_g));
                }
            }
        }
        var r276_IotaLF = function () {
            var _r278_t0, _r278_t1;
            return r1_UkMapToLookup(r1_UnicodeKnowledge.iotaBelowToLfTf);
        };
        var r276_GrekUpperTonosTf = function () {
            var _r279_t0, _r279_t1;
            return r1_UkMapToLookup(r1_UnicodeKnowledge.upperGrekMarkToTonosTf);
        };
        r276_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'ignoreGlyphs': r1_filterMarkByClassNegated(r272_markGlyphs, 'above'),
            'rules': [
                r276_xn$chainrule$1aao({
                    'left': r276_dotlessFrom,
                    'right': r276_dotlessTo
                }, {
                    'left': r272_aboveMark,
                    'right': null
                }),
                r276_xn$chainrule$1aao(r276_groupGrekUpperTonos, r276_GrekUpperTonosTf())
            ]
        }));
        r276_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'ignoreGlyphs': r1_filterMarkByClassNegated(r272_markGlyphs, 'below'),
            'rules': [r276_xn$chainrule$1aao(r276_groupLF, r276_IotaLF())]
        }));
        r276_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_ligature',
            'substitutions': r1_UkMap2ToLookup(r1_UnicodeKnowledge.markCompositionTf)
        }));
        return r276_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_multiple',
            'substitutions': {
                'parenAbove': [
                    'leftParenAbove',
                    'rightParenAbove'
                ],
                'doubleParenAbove': [
                    'leftDoubleParenAbove',
                    'rightDoubleParenAbove'
                ],
                'brackAbove': [
                    'leftBrackAbove',
                    'rightBrackAbove'
                ],
                'parenBelow': [
                    'leftParenBelow',
                    'rightParenBelow'
                ]
            }
        }));
    });
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r283_xn$exportlookup$7Hrq, r283_xn$chainrule$1aao) {
        var r283_gid, r283_g, _r283_t2, _r283_t3, _r283_t4;
        var r283_TieMarkFrom = [];
        var r283_TieMarkTo = [];
        var r283_TieGlyphs = [];
        var _r283_t0 = r272_glyphStore.namedEntries()[Symbol.iterator]();
        var _r283_t1 = void 0;
        while (!(_r283_t1 = _r283_t0.next()).done) {
            _r283_t2 = _r283_t1.value;
            r283_gid = _r283_t2[0];
            r283_g = _r283_t2[1];
            if (r283_gid[0] !== '.') {
                if (r1_TieGlyph.get(r283_g))
                    r283_TieGlyphs.push(r283_gid);
                if (r1_TieMark.get(r283_g)) {
                    r283_TieMarkFrom.push(r283_gid);
                    r283_TieMarkTo.push(r1_TieMark.get(r283_g));
                }
            }
        }
        var r283_lookupTieMarkLigature = r272_gsub.createLookup({
            'type': 'gsub_ligature',
            'substitutions': [].concat(r283_TieMarkFrom.map(function (r285_gnFrom, r285_idx) {
                var _r285_t0, _r285_t1;
                return {
                    'from': [
                        'cgj',
                        r285_gnFrom
                    ],
                    'to': r283_TieMarkTo[r285_idx]
                };
            }))
        });
        return r283_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [{
                    'match': [
                        r283_TieGlyphs.concat(r283_TieMarkTo),
                        ['cgj'],
                        r283_TieMarkFrom
                    ],
                    'inputBegins': 1,
                    'inputEnds': 3,
                    'apply': [{
                            'at': 1,
                            'lookup': r283_lookupTieMarkLigature
                        }]
                }]
        }));
    });
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r287_xn$exportlookup$7Hrq, r287_xn$chainrule$1aao) {
        var _r287_t0, _r287_t1;
        return r287_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_ligature',
            'ignoreGlyphs': r1_filterMarkByClassNegated(r272_markGlyphs, 'above'),
            'substitutions': [
                {
                    'from': [
                        'b',
                        'dotAbove'
                    ],
                    'to': 'bDot'
                },
                {
                    'from': [
                        'd',
                        'dotAbove'
                    ],
                    'to': 'dDot'
                },
                {
                    'from': [
                        'h',
                        'dotAbove'
                    ],
                    'to': 'hDot'
                },
                {
                    'from': [
                        'k',
                        'dotAbove'
                    ],
                    'to': 'kDot'
                }
            ]
        }));
    });
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r289_xn$exportlookup$7Hrq, r289_xn$chainrule$1aao) {
        var r289_mkCenter, r289_mkLeaning, r289_basesToConsider, r289_markFrom, r289_markTo, r289_markSpacer, r289_splitMapping, r289_gn, r289_g, r289_lookupTurnMarkIntoLeaningAndSpacer, _r289_t3, _r289_t4, _r289_t5, _r289_t6, _r289_t7, _r289_t8, _r289_t10;
        var r289_LeaningAnchorMap = [
            [
                'above',
                'leaningAbove'
            ],
            [
                'below',
                'leaningBelow'
            ]
        ];
        var _r289_t0 = r289_LeaningAnchorMap;
        var _r289_t1 = _r289_t0.length;
        var _r289_t2 = 0;
        var _r289_t9 = _r289_t2 < _r289_t1;
        while (_r289_t9) {
            _r289_t3 = _r289_t0[_r289_t2];
            r289_mkCenter = _r289_t3[0];
            r289_mkLeaning = _r289_t3[1];
            r289_basesToConsider = [];
            r289_markFrom = [];
            r289_markTo = [];
            r289_markSpacer = [];
            r289_splitMapping = [];
            _r289_t4 = r272_glyphStore.namedEntries()[Symbol.iterator]();
            _r289_t5 = void 0;
            while (!(_r289_t5 = _r289_t4.next()).done) {
                _r289_t6 = _r289_t5.value;
                r289_gn = _r289_t6[0];
                r289_g = _r289_t6[1];
                if (r289_gn[0] !== '.') {
                    if (!r272_markGlyphs.all.has(r289_gn) && r289_g.baseAnchors[r289_mkLeaning])
                        r289_basesToConsider.push(r289_gn);
                    if (r289_g.markAnchors[r289_mkCenter] && r1_LeaningMark.get(r289_g) && r1_LeaningMarkSpacer.get(r289_g)) {
                        r289_markFrom.push(r289_gn);
                        r289_markTo.push(r1_LeaningMark.get(r289_g));
                        r289_markSpacer.push(r1_LeaningMarkSpacer.get(r289_g));
                        r289_splitMapping.push([
                            r289_gn,
                            [
                                r1_LeaningMarkSpacer.get(r289_g),
                                r1_LeaningMark.get(r289_g)
                            ]
                        ]);
                    }
                }
            }
            r289_lookupTurnMarkIntoLeaningAndSpacer = r272_gsub.createLookup({
                'type': 'gsub_multiple',
                'substitutions': Object.fromEntries(r289_splitMapping)
            });
            r289_xn$exportlookup$7Hrq(r272_gsub.createLookup({
                'type': 'gsub_chaining',
                'ignoreGlyphs': r1_filterMarkByClassNegated(r272_markGlyphs, r289_mkCenter),
                'rules': [{
                        'match': [
                            r289_basesToConsider.concat(r289_markSpacer),
                            r289_markFrom
                        ],
                        'inputBegins': 1,
                        'inputEnds': 2,
                        'apply': [{
                                'at': 1,
                                'lookup': r289_lookupTurnMarkIntoLeaningAndSpacer
                            }]
                    }]
            }));
            _r289_t10 = _r289_t2 = _r289_t2 + 1;
            _r289_t9 = _r289_t2 < _r289_t1;
        }
        return _r289_t10;
    });
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r293_xn$exportlookup$7Hrq, r293_xn$chainrule$1aao) {
        var r293_gn, r293_g, _r293_t2, _r293_t3, _r293_t4;
        var r293_superscripts = [];
        var r293_subscripts = [];
        var _r293_t0 = r272_glyphStore.namedEntries()[Symbol.iterator]();
        var _r293_t1 = void 0;
        while (!(_r293_t1 = _r293_t0.next()).done) {
            _r293_t2 = _r293_t1.value;
            r293_gn = _r293_t2[0];
            r293_g = _r293_t2[1];
            if (r293_gn[0] !== '.') {
                if (r1_IsSuperscript.get(r293_g))
                    r293_superscripts.push(r293_gn);
                if (r1_IsSubscript.get(r293_g))
                    r293_subscripts.push(r293_gn);
            }
        }
        return r293_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'ignoreGlyphs': r272_anyMark,
            'rules': [
                r293_xn$chainrule$1aao(r293_superscripts, {
                    'left': ['rhoticHook'],
                    'right': ['rhoticHook/sup']
                }),
                r293_xn$chainrule$1aao(r293_subscripts, {
                    'left': ['rhoticHook'],
                    'right': ['rhoticHook/sub']
                })
            ]
        }));
    });
    r272_xn$ExecCcmpGroup$2Lrc4b(function (r298_xn$exportlookup$7Hrq, r298_xn$chainrule$1aao) {
        var _r298_t0, _r298_t1;
        var r298_ToneToToneStart = function (r299_toneEnd) {
            var _r299_t2, _r299_t3;
            var r299_f = [];
            var r299_e = [];
            var _r299_t0 = 4;
            var _r299_t1 = 0;
            var r299_toneStart = _r299_t0;
            while (r299_toneStart >= _r299_t1) {
                r299_f.push('tone' + r299_toneStart);
                r299_e.push('toneStart' + r299_toneStart + r299_toneEnd);
                r299_toneStart = r299_toneStart - 1;
            }
            return {
                'left': r299_f,
                'right': r299_e
            };
        };
        var r298_ToneToToneEnd = function (r302_toneStart) {
            var _r302_t2, _r302_t3;
            var r302_f = [];
            var r302_e = [];
            var _r302_t0 = 4;
            var _r302_t1 = 0;
            var r302_toneEnd = _r302_t0;
            while (r302_toneEnd >= _r302_t1) {
                r302_f.push('tone' + r302_toneEnd);
                r302_e.push('toneEnd' + r302_toneStart + r302_toneEnd);
                r302_toneEnd = r302_toneEnd - 1;
            }
            return {
                'left': r302_f,
                'right': r302_e
            };
        };
        var r298_ToneStartOrMidAt = function (r305_y) {
            var _r305_t4, _r305_t5, _r305_t6, _r305_t7;
            var r305_f = [];
            var _r305_t0 = 4;
            var _r305_t1 = 0;
            var r305_toneEnd = _r305_t0;
            while (r305_toneEnd >= _r305_t1) {
                r305_f.push('toneStart' + r305_y + r305_toneEnd);
                r305_toneEnd = r305_toneEnd - 1;
            }
            var _r305_t2 = 4;
            var _r305_t3 = 0;
            var r305_toneStart = _r305_t2;
            while (r305_toneStart >= _r305_t3) {
                _r305_t4 = 4;
                _r305_t5 = 0;
                r305_toneEnd = _r305_t4;
                while (r305_toneEnd >= _r305_t5) {
                    r305_f.push('toneMid' + r305_toneStart + r305_y + r305_toneEnd);
                    r305_toneEnd = r305_toneEnd - 1;
                }
                r305_toneStart = r305_toneStart - 1;
            }
            return r305_f;
        };
        var r298_ToneStartToToneMid = function (r309_toneStart) {
            var r309_toneEnd, _r309_t2, _r309_t3, _r309_t4, _r309_t5;
            var r309_f = [];
            var r309_e = [];
            var _r309_t0 = 4;
            var _r309_t1 = 0;
            var r309_toneMid = _r309_t0;
            while (r309_toneMid >= _r309_t1) {
                _r309_t2 = 4;
                _r309_t3 = 0;
                r309_toneEnd = _r309_t2;
                while (r309_toneEnd >= _r309_t3) {
                    r309_f.push('toneStart' + r309_toneMid + r309_toneEnd);
                    r309_e.push('toneMid' + r309_toneStart + r309_toneMid + r309_toneEnd);
                    r309_toneEnd = r309_toneEnd - 1;
                }
                r309_toneMid = r309_toneMid - 1;
            }
            return {
                'left': r309_f,
                'right': r309_e
            };
        };
        var r298_ToneSandhiToToneStart = function (r313_toneEnd) {
            var _r313_t2, _r313_t3;
            var r313_f = [];
            var r313_e = [];
            var _r313_t0 = 4;
            var _r313_t1 = 0;
            var r313_toneStart = _r313_t0;
            while (r313_toneStart >= _r313_t1) {
                r313_f.push('toneSandhi' + r313_toneStart);
                r313_e.push('toneSandhiStart' + r313_toneStart + r313_toneEnd);
                r313_toneStart = r313_toneStart - 1;
            }
            return {
                'left': r313_f,
                'right': r313_e
            };
        };
        var r298_ToneSandhiToToneEnd = function (r316_toneStart) {
            var _r316_t2, _r316_t3;
            var r316_f = [];
            var r316_e = [];
            var _r316_t0 = 4;
            var _r316_t1 = 0;
            var r316_toneEnd = _r316_t0;
            while (r316_toneEnd >= _r316_t1) {
                r316_f.push('toneSandhi' + r316_toneEnd);
                r316_e.push('toneSandhiEnd' + r316_toneStart + r316_toneEnd);
                r316_toneEnd = r316_toneEnd - 1;
            }
            return {
                'left': r316_f,
                'right': r316_e
            };
        };
        var r298_ToneSandhiStartOrMidAt = function (r319_y) {
            var _r319_t4, _r319_t5, _r319_t6, _r319_t7;
            var r319_f = [];
            var _r319_t0 = 4;
            var _r319_t1 = 0;
            var r319_toneEnd = _r319_t0;
            while (r319_toneEnd >= _r319_t1) {
                r319_f.push('toneSandhiStart' + r319_y + r319_toneEnd);
                r319_toneEnd = r319_toneEnd - 1;
            }
            var _r319_t2 = 4;
            var _r319_t3 = 0;
            var r319_toneStart = _r319_t2;
            while (r319_toneStart >= _r319_t3) {
                _r319_t4 = 4;
                _r319_t5 = 0;
                r319_toneEnd = _r319_t4;
                while (r319_toneEnd >= _r319_t5) {
                    r319_f.push('toneSandhiMid' + r319_toneStart + r319_y + r319_toneEnd);
                    r319_toneEnd = r319_toneEnd - 1;
                }
                r319_toneStart = r319_toneStart - 1;
            }
            return r319_f;
        };
        var r298_ToneSandhiStartToToneMid = function (r323_toneStart) {
            var r323_toneEnd, _r323_t2, _r323_t3, _r323_t4, _r323_t5;
            var r323_f = [];
            var r323_e = [];
            var _r323_t0 = 4;
            var _r323_t1 = 0;
            var r323_toneMid = _r323_t0;
            while (r323_toneMid >= _r323_t1) {
                _r323_t2 = 4;
                _r323_t3 = 0;
                r323_toneEnd = _r323_t2;
                while (r323_toneEnd >= _r323_t3) {
                    r323_f.push('toneSandhiStart' + r323_toneMid + r323_toneEnd);
                    r323_e.push('toneSandhiMid' + r323_toneStart + r323_toneMid + r323_toneEnd);
                    r323_toneEnd = r323_toneEnd - 1;
                }
                r323_toneMid = r323_toneMid - 1;
            }
            return {
                'left': r323_f,
                'right': r323_e
            };
        };
        r298_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [
                r298_xn$chainrule$1aao(r298_ToneToToneStart(0), ['tone0']),
                r298_xn$chainrule$1aao(r298_ToneToToneStart(1), ['tone1']),
                r298_xn$chainrule$1aao(r298_ToneToToneStart(2), ['tone2']),
                r298_xn$chainrule$1aao(r298_ToneToToneStart(3), ['tone3']),
                r298_xn$chainrule$1aao(r298_ToneToToneStart(4), ['tone4'])
            ]
        }));
        r298_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(0), r298_ToneStartToToneMid(0)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(1), r298_ToneStartToToneMid(1)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(2), r298_ToneStartToToneMid(2)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(3), r298_ToneStartToToneMid(3)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(4), r298_ToneStartToToneMid(4))
            ]
        }));
        r298_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(0), r298_ToneToToneEnd(0)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(1), r298_ToneToToneEnd(1)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(2), r298_ToneToToneEnd(2)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(3), r298_ToneToToneEnd(3)),
                r298_xn$chainrule$1aao(r298_ToneStartOrMidAt(4), r298_ToneToToneEnd(4))
            ]
        }));
        r298_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [
                r298_xn$chainrule$1aao(r298_ToneSandhiToToneStart(0), ['toneSandhi0']),
                r298_xn$chainrule$1aao(r298_ToneSandhiToToneStart(1), ['toneSandhi1']),
                r298_xn$chainrule$1aao(r298_ToneSandhiToToneStart(2), ['toneSandhi2']),
                r298_xn$chainrule$1aao(r298_ToneSandhiToToneStart(3), ['toneSandhi3']),
                r298_xn$chainrule$1aao(r298_ToneSandhiToToneStart(4), ['toneSandhi4'])
            ]
        }));
        r298_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(0), r298_ToneSandhiStartToToneMid(0)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(1), r298_ToneSandhiStartToToneMid(1)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(2), r298_ToneSandhiStartToToneMid(2)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(3), r298_ToneSandhiStartToToneMid(3)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(4), r298_ToneSandhiStartToToneMid(4))
            ]
        }));
        return r298_xn$exportlookup$7Hrq(r272_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(0), r298_ToneSandhiToToneEnd(0)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(1), r298_ToneSandhiToToneEnd(1)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(2), r298_ToneSandhiToToneEnd(2)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(3), r298_ToneSandhiToToneEnd(3)),
                r298_xn$chainrule$1aao(r298_ToneSandhiStartOrMidAt(4), r298_ToneSandhiToToneEnd(4))
            ]
        }));
    });
    return r272_ccmp;
};
_s0_t4 = r1_buildCCMPPostCvSs = function (r328_gsub, r328_ccmp, r328_glyphStore, r328_markGlyphs) {
    var r328_gid, r328_g, _r328_t2, _r328_t3, _r328_t4;
    var r328_anyMark = Array.from(r328_markGlyphs.all);
    var r328_rec = r328_gsub.beginBlock();
    var r328_triggerGlyphs_Normal = [];
    var r328_triggerGlyphs_Y = [];
    var _r328_t0 = r328_glyphStore.namedEntries()[Symbol.iterator]();
    var _r328_t1 = void 0;
    while (!(_r328_t1 = _r328_t0.next()).done) {
        _r328_t2 = _r328_t1.value;
        r328_gid = _r328_t2[0];
        r328_g = _r328_t2[1];
        if (r328_gid[0] !== '.')
            if (r328_g.baseAnchors.trailing)
                if (r1_OgonekTrY.get(r328_g))
                    r328_triggerGlyphs_Y.push(r328_gid);
                else if (true)
                    r328_triggerGlyphs_Normal.push(r328_gid);
                else
                    void 0;
    }
    var r328_ogonekSpacerNormal = r328_gsub.createLookup({
        'type': 'gsub_multiple',
        'substitutions': r1_UnicodeKnowledge.ogonekBelowToTRTf
    });
    var r328_ogonekSpacerY = r328_gsub.createLookup({
        'type': 'gsub_single',
        'substitutions': r1_UnicodeKnowledge.ogonekBelowToTRTf_Y
    });
    r328_ccmp.addLookup(r328_gsub.createLookup({
        'type': 'gsub_chaining',
        'ignoreGlyphs': r1_filterMarkByClassNegated(r328_markGlyphs, 'below'),
        'rules': [
            {
                'match': [
                    r328_triggerGlyphs_Y,
                    Object.keys(r1_UnicodeKnowledge.ogonekBelowToTRTf_Y)
                ],
                'inputBegins': 1,
                'inputEnds': 2,
                'apply': [{
                        'at': 1,
                        'lookup': r328_ogonekSpacerY
                    }]
            },
            {
                'match': [
                    r328_triggerGlyphs_Normal,
                    Object.keys(r1_UnicodeKnowledge.ogonekBelowToTRTf)
                ],
                'inputBegins': 1,
                'inputEnds': 2,
                'apply': [{
                        'at': 1,
                        'lookup': r328_ogonekSpacerNormal
                    }]
            }
        ]
    }));
    return r328_gsub.endBlock(r328_rec);
};
var r1_objectIsNotEmpty = function (r330_obj) {
    var _r330_t0, _r330_t1;
    return r330_obj && Object.keys(r330_obj).length;
};
var r1_filterMarkByClass = function (r331_markGlyphs, r331_c) {
    var r331_gn, r331_m, _r331_t2, _r331_t3, _r331_t4;
    var r331_marks = [];
    var _r331_t0 = r331_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r331_t1 = void 0;
    while (!(_r331_t1 = _r331_t0.next()).done) {
        _r331_t2 = _r331_t1.value;
        r331_gn = _r331_t2[0];
        r331_m = _r331_t2[1];
        if (r331_m === r331_c)
            r331_marks.push(r331_gn);
    }
    return r331_marks;
};
var r1_filterMarkByClassNegated = function (r333_markGlyphs, r333_c) {
    var r333_gn, r333_m, _r333_t2, _r333_t3, _r333_t4;
    var r333_marks = [];
    var _r333_t0 = r333_markGlyphs.markAttachClassDef[Symbol.iterator]();
    var _r333_t1 = void 0;
    while (!(_r333_t1 = _r333_t0.next()).done) {
        _r333_t2 = _r333_t1.value;
        r333_gn = _r333_t2[0];
        r333_m = _r333_t2[1];
        if (r333_m !== r333_c)
            r333_marks.push(r333_gn);
    }
    return r333_marks;
};
