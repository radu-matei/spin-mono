'use strict';
import * as _s0_t0 from 'typo-geom';
import * as _s0_t1 from '../../support/utils.mjs';
import * as _s0_t2 from '../../meta/aesthetics.mjs';
import * as _s0_t3 from '../../support/gr.mjs';
import * as _s0_t4 from '../../support/geometry/box.mjs';
var _s0_t5;
export {
    _s0_t5 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Arcs = _r1_t8.Arcs;
var r1_Quadify = _r1_t8.Quadify;
var r1_ShapeConv = _r1_t8.ShapeConv;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var _r1_t11 = _s0_t3;
var r1_TieMark = _r1_t11.TieMark;
var r1_AnyDerivingCv = _r1_t11.AnyDerivingCv;
var r1_ScheduleLeaningMark = _r1_t11.ScheduleLeaningMark;
var r1_LeaningMark = _r1_t11.LeaningMark;
var r1_LeaningMarkSpacer = _r1_t11.LeaningMarkSpacer;
var _r1_t12 = _s0_t4;
var r1_Box = _r1_t12.Box;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r270_block, _r270_t4, _r270_t6;
    var _r270_t3 = this;
    var _r270_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r270_t1 = _r270_t0.length;
    var _r270_t2 = 0;
    var _r270_t5 = _r270_t2 < _r270_t1;
    while (_r270_t5) {
        _r270_t6 = (r270_block = _r270_t0[_r270_t2], r270_block(_r270_t3), _r270_t2 = _r270_t2 + 1);
        _r270_t5 = _r270_t2 < _r270_t1;
    }
    return _r270_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r274_xn$Capture_Ext$2Lrc2b) {
    var _r274_t0, _r274_t1;
    r274_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r274_xn$Capture_Ext$2Lrc2b, 'Mark-Doppelganger', function (r275_xn$Capture$2Lrc8, r275_xn$ExportCapture$2Lrc4b) {
        var r275_xn$referglyph$1aao, r275_xn$queryglyph$1aao, r275_DeriveMeshT, r275_DeriveMarkChange, r275_spacerGlyphSet, r275_TieAnchorMap, r275_LeaningAnchorMap, _r275_t4, _r275_t5, _r275_t6, _r275_t7, _r275_t8, _r275_t9, _r275_tag10, _r275_t11, _r275_tag12;
        var _r275_t0 = r275_xn$Capture$2Lrc8;
        var r275_xn$createAndSaveGlyphImpl$2Lrc3c = _r275_t0['$createAndSaveGlyphImpl$'];
        var r275_xn$NamedParameterPair$2Lrc9b = _r275_t0['$NamedParameterPair$'];
        var r275_xn$Exec$2Lrc5 = _r275_t0['$Exec$'];
        var r275_recursive = _r275_t0.recursive;
        var r275_glyphStore = _r275_t0.glyphStore;
        var r275_AS_BASE = _r275_t0.AS_BASE;
        var r275_ALSO_METRICS = _r275_t0.ALSO_METRICS;
        var _r275_t1 = r275_xn$Capture$2Lrc8.Metrics;
        var _r275_t2 = r275_xn$Capture$2Lrc8.SpiroFns;
        var _r275_t3 = r275_xn$Capture$2Lrc8.BooleFns;
        if (!r275_recursive) {
            _r275_t4 = r275_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
            _r275_t5 = r275_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
            r275_xn$referglyph$1aao = _r275_t5['refer-glyph'];
            r275_xn$queryglyph$1aao = _r275_t5['query-glyph'];
            r275_DeriveMeshT = _r275_t5.DeriveMeshT;
            r275_DeriveMarkChange = function (r278_gr, r278_gn, r278_akFrom, r278_akTo) {
                var _r278_t0, _r278_t1;
                return r275_DeriveMeshT([r278_gn], r1_AnyDerivingCv, function (r279_gns) {
                    var _r279_t0, _r279_t1;
                    var r279_srcGn = r279_gns[0];
                    var r279_src = r275_xn$queryglyph$1aao(r279_srcGn);
                    var r279_toGN = r278_gr.amendName(r279_srcGn);
                    if (!r275_xn$queryglyph$1aao(r279_toGN))
                        r275_xn$createAndSaveGlyphImpl$2Lrc3c(r279_toGN, null, function () {
                            var _r282_t1;
                            var _r282_t0 = this;
                            var r282_currentGlyph = _r282_t0;
                            r282_currentGlyph.include(r275_xn$referglyph$1aao(r279_srcGn), r275_AS_BASE, r275_ALSO_METRICS);
                            r282_currentGlyph.markAnchors[r278_akTo] = r282_currentGlyph.markAnchors[r278_akFrom];
                            r282_currentGlyph.deleteMarkAnchor(r278_akFrom);
                            r282_currentGlyph.baseAnchors[r278_akTo] = r282_currentGlyph.baseAnchors[r278_akFrom];
                            r282_currentGlyph.deleteBaseAnchor(r278_akFrom);
                            return void 0;
                        });
                    r278_gr.set(r279_src, r279_toGN);
                    return r279_toGN;
                });
            };
            r275_spacerGlyphSet = new r1_Set();
            r275_TieAnchorMap = [
                [
                    'above',
                    'tieAbove'
                ],
                [
                    'below',
                    'tieBelow'
                ]
            ];
            (function () {
                var r285_u, r285_gn, r285_g, _r285_t2, _r285_t4;
                var r285_DeriveTieMarks = function (r286_gn, r286_g) {
                    var r286_akFrom, r286_akTo, _r286_t3, _r286_t4, _r286_t5, _r286_t6;
                    var r286_selection = null;
                    var _r286_t0 = r275_TieAnchorMap;
                    var _r286_t1 = _r286_t0.length;
                    var _r286_t2 = 0;
                    while (_r286_t2 < _r286_t1) {
                        _r286_t3 = _r286_t0[_r286_t2];
                        r286_akFrom = _r286_t3[0];
                        r286_akTo = _r286_t3[1];
                        if (!r286_selection && r286_g.markAnchors[r286_akFrom])
                            r286_selection = [
                                r286_akFrom,
                                r286_akTo
                            ];
                        _r286_t2 = _r286_t2 + 1;
                    }
                    return r286_selection ? (_r286_t4 = r286_selection, r286_akFrom = _r286_t4[0], r286_akTo = _r286_t4[1], r275_DeriveMarkChange(r1_TieMark, r286_gn, r286_akFrom, r286_akTo)) : void 0;
                };
                var _r285_t0 = r275_glyphStore.encodedEntries()[Symbol.iterator]();
                var _r285_t1 = void 0;
                var _r285_t3 = !(_r285_t1 = _r285_t0.next()).done;
                while (_r285_t3) {
                    _r285_t4 = (_r285_t2 = _r285_t1.value, r285_u = _r285_t2[0], r285_gn = _r285_t2[1], r285_g = _r285_t2[2], r285_DeriveTieMarks(r285_gn, r285_g));
                    _r285_t3 = !(_r285_t1 = _r285_t0.next()).done;
                }
                return _r285_t4;
            }());
            r275_LeaningAnchorMap = [
                [
                    'above',
                    'leaningAbove'
                ],
                [
                    'below',
                    'leaningBelow'
                ]
            ];
            return function () {
                var r290_u, r290_gn, r290_g, _r290_t2, _r290_t4;
                var r290_DeriveLeaningMark = function (r291_gn, r291_g) {
                    var r291_akFrom, r291_akTo, r291_deltaX, r291_deltaY, r291_spacerGn, _r291_t3, _r291_t4, _r291_t5, _r291_t6;
                    var r291_selection = null;
                    var _r291_t0 = r275_LeaningAnchorMap;
                    var _r291_t1 = _r291_t0.length;
                    var _r291_t2 = 0;
                    while (_r291_t2 < _r291_t1) {
                        _r291_t3 = _r291_t0[_r291_t2];
                        r291_akFrom = _r291_t3[0];
                        r291_akTo = _r291_t3[1];
                        if (!r291_selection && r291_g.markAnchors[r291_akFrom] && r1_ScheduleLeaningMark.get(r291_g))
                            r291_selection = [
                                r291_akFrom,
                                r291_akTo
                            ];
                        _r291_t2 = _r291_t2 + 1;
                    }
                    return r291_selection ? (_r291_t4 = r291_selection, r291_akFrom = _r291_t4[0], r291_akTo = _r291_t4[1], r275_DeriveMarkChange(r1_LeaningMark, r291_gn, r291_akFrom, r291_akTo), r291_deltaX = Math.round(r291_g.baseAnchors[r291_akFrom].x - r291_g.markAnchors[r291_akFrom].x), r291_deltaY = Math.round(r291_g.baseAnchors[r291_akFrom].y - r291_g.markAnchors[r291_akFrom].y), r291_spacerGn = 'spacerGlyph{' + r291_akTo + '}{' + r291_deltaX + '}{' + r291_deltaY + '}', r1_LeaningMarkSpacer.set(r291_g, r291_spacerGn), !r275_spacerGlyphSet.has(r291_spacerGn) ? (r275_spacerGlyphSet.add(r291_spacerGn), r275_xn$createAndSaveGlyphImpl$2Lrc3c(r291_spacerGn, null, function () {
                        var _r295_t1;
                        var _r295_t0 = this;
                        var r295_currentGlyph = _r295_t0;
                        r295_currentGlyph.include(r291_g, r275_AS_BASE, r275_ALSO_METRICS);
                        r295_currentGlyph.clearGeometry();
                        return void 0;
                    })) : void 0) : void 0;
                };
                var _r290_t0 = r275_glyphStore.encodedEntries()[Symbol.iterator]();
                var _r290_t1 = void 0;
                var _r290_t3 = !(_r290_t1 = _r290_t0.next()).done;
                while (_r290_t3) {
                    _r290_t4 = (_r290_t2 = _r290_t1.value, r290_u = _r290_t2[0], r290_gn = _r290_t2[1], r290_g = _r290_t2[2], r290_DeriveLeaningMark(r290_gn, r290_g));
                    _r290_t3 = !(_r290_t1 = _r290_t0.next()).done;
                }
                return _r290_t4;
            }();
        } else
            return void 0;
    });
    return void 0;
});
