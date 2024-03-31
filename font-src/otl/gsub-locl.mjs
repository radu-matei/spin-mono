'use strict';
import * as _s0_t0 from '../support/gr.mjs';
var _s0_t1;
export {
    _s0_t1 as buildLOCL
};
var r1_buildLOCL, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_CvDecompose = _r1_t8.CvDecompose;
var r1_Set = Set;
_s0_t1 = r1_buildLOCL = function (r265_gsub, r265_para, r265_glyphStore) {
    var _r265_t1, _r265_t2, _r265_t3, _r265_tag4;
    var r265_rec = r265_gsub.beginBlock();
    var _r265_t0 = r265_gsub.ChainRuleBuilder();
    var r265_xn$chainrule$1aao = _r265_t0[0];
    var r265_cyrlSRB = r265_gsub.copyLanguage('cyrl_SRB ', 'cyrl_DFLT');
    var r265_cyrlMKD = r265_gsub.copyLanguage('cyrl_MKD ', 'cyrl_DFLT');
    var r265_cyrlBGR = r265_gsub.copyLanguage('cyrl_BGR ', 'cyrl_DFLT');
    var r265_latnVIT = r265_gsub.copyLanguage('latn_VIT ', 'latn_DFLT');
    var r265_loclSRB = r265_gsub.createFeature('locl');
    r265_cyrlSRB.addFeature(r265_loclSRB);
    r265_cyrlMKD.addFeature(r265_loclSRB);
    r265_loclSRB.addLookup(r265_gsub.createLookup({
        'type': 'gsub_single',
        'substitutions': r265_para.isItalic ? {
            'cyrl/be': r265_glyphStore.ensureExists('cyrl/be.SRB'),
            'cyrl/ghe': r265_glyphStore.ensureExists('cyrl/ghe.SRB'),
            'cyrl/de': r265_glyphStore.ensureExists('cyrl/de.SRB'),
            'cyrl/gje': r265_glyphStore.ensureExists('cyrl/gje.SRB'),
            'cyrl/pe': r265_glyphStore.ensureExists('cyrl/pe.SRB'),
            'cyrl/te': r265_glyphStore.ensureExists('cyrl/te.SRB')
        } : { 'cyrl/be': r265_glyphStore.ensureExists('cyrl/be.SRB') }
    }));
    var r265_loclBGR = r265_cyrlBGR.addFeature(r265_gsub.createFeature('locl'));
    r265_loclBGR.addLookup(r265_gsub.createLookup({
        'type': 'gsub_single',
        'substitutions': {
            'cyrl/ve': r265_glyphStore.ensureExists('cyrl/ve.BGR'),
            'cyrl/ghe': r265_glyphStore.ensureExists('cyrl/ghe.italic'),
            'cyrl/De': r265_glyphStore.ensureExists('cyrl/De.BGR'),
            'cyrl/de': r265_glyphStore.ensureExists('cyrl/de.BGR'),
            'cyrl/zhe': r265_glyphStore.ensureExists('cyrl/zhe.BGR'),
            'cyrl/ze': r265_glyphStore.ensureExists('cyrl/ze.BGR'),
            'cyrl/i': r265_glyphStore.ensureExists('cyrl/i.BGR'),
            'cyrl/ibreve': r265_glyphStore.ensureExists('cyrl/ibreve.BGR'),
            'cyrl/igrave': r265_glyphStore.ensureExists('cyrl/igrave.BGR'),
            'cyrl/ka': r265_glyphStore.ensureExists('cyrl/ka.BGR'),
            'cyrl/El': r265_glyphStore.ensureExists('cyrl/El.BGR'),
            'cyrl/el': r265_glyphStore.ensureExists('cyrl/el.BGR'),
            'cyrl/en': r265_glyphStore.ensureExists('cyrl/en.BGR'),
            'cyrl/pe': r265_glyphStore.ensureExists('cyrl/pe.BGR'),
            'cyrl/te': r265_glyphStore.ensureExists('cyrl/te.BGR'),
            'cyrl/Ef': r265_glyphStore.ensureExists('cyrl/Ef.BGR'),
            'cyrl/ef': r265_glyphStore.ensureExists('cyrl/ef.BGR'),
            'cyrl/che': r265_glyphStore.ensureExists('cyrl/che.BGR'),
            'cyrl/sha': r265_glyphStore.ensureExists('cyrl/sha.BGR'),
            'cyrl/shcha': r265_glyphStore.ensureExists('cyrl/shcha.BGR'),
            'cyrl/yu': r265_glyphStore.ensureExists('cyrl/yu.BGR'),
            'cyrl/tse': r265_glyphStore.ensureExists('cyrl/tse.BGR'),
            'cyrl/yer': r265_glyphStore.ensureExists('cyrl/yer.BGR'),
            'cyrl/yeri': r265_glyphStore.ensureExists('cyrl/yeri.BGR')
        }
    }));
    var r265_loclVIT = r265_latnVIT.addFeature(r265_gsub.createFeature('locl'));
    var r265_sx = function (r266_s) {
        var _r266_t0, _r266_t1;
        return function (r267_t) {
            var _r267_t0, _r267_t1;
            return r267_t.map(function (r268_x) {
                var _r268_t0, _r268_t1;
                return '' + r268_x + '/' + r266_s;
            });
        };
    };
    (function () {
        var r270_ch, r270_u, r270_gn, r270_g, r270_decomp;
        var r270_decompositionSubstitutions = {};
        r265_loclVIT.addLookup(r265_gsub.createLookup({
            'type': 'gsub_multiple',
            'substitutions': r270_decompositionSubstitutions
        }));
        var r270_viCircumflex = 'ẦẤẨỀẾỂỒỐỔầấẩềếểồốổ';
        var r270_viBreve = 'ẮẰẲằắẳ';
        var r270_viShiftableMarks = [
            'acuteAbove',
            'graveAbove',
            'hookAbove'
        ];
        var _r270_t0 = (r270_viCircumflex + r270_viBreve)[Symbol.iterator]();
        var _r270_t1 = void 0;
        while (!(_r270_t1 = _r270_t0.next()).done) {
            r270_ch = _r270_t1.value;
            r270_u = r270_ch.codePointAt(0);
            r270_gn = r265_glyphStore.queryNameByUnicode(r270_u);
            r270_g = r265_glyphStore.queryByNameEnsured(r270_gn);
            r270_decomp = r1_CvDecompose.get(r270_g);
            r270_decompositionSubstitutions[r270_gn] = r270_decomp;
        }
        return r265_loclVIT.addLookup(r265_gsub.createLookup({
            'type': 'gsub_chaining',
            'rules': [
                r265_xn$chainrule$1aao({
                    'left': [
                        'A',
                        'a',
                        'E',
                        'e',
                        'O',
                        'o'
                    ],
                    'right': void 0
                }, {
                    'left': ['circumflexAbove'],
                    'right': void 0
                }, {
                    'left': r270_viShiftableMarks,
                    'right': r265_sx('viSide')
                }),
                r265_xn$chainrule$1aao({
                    'left': [
                        'A',
                        'a'
                    ],
                    'right': void 0
                }, {
                    'left': ['breveAbove'],
                    'right': void 0
                }, {
                    'left': r270_viShiftableMarks,
                    'right': r265_sx('viCenter')
                })
            ]
        }));
    }());
    return r265_gsub.endBlockAtFront(r265_rec);
};
