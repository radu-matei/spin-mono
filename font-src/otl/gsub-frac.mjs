'use strict';
import * as _s0_t0 from '../support/gr.mjs';
var _s0_t1;
export {
    _s0_t1 as buildFrac
};
var r1_buildFrac, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_NumeratorForm = _r1_t8.NumeratorForm;
var r1_DenominatorForm = _r1_t8.DenominatorForm;
_s0_t1 = r1_buildFrac = function (r264_gsub, r264_glyphStore) {
    var r264_gid, r264_g, r264_numForm, r264_denForm, _r264_t3, _r264_t4, _r264_t5;
    var r264_rec = r264_gsub.beginBlock();
    var r264_frac = r264_gsub.addCommonFeature(r264_gsub.createFeature('frac'));
    var _r264_t0 = r264_gsub.ChainRuleBuilder();
    var r264_xn$chainrule$1aao = _r264_t0[0];
    var r264_xn$reverserule$3qIs = _r264_t0[1];
    var r264_subSolidus = r264_gsub.createLookup({
        'type': 'gsub_single',
        'substitutions': {
            'solidus': 'fractionBar',
            'slash': 'fractionBar'
        }
    });
    var r264_digitSet = [];
    var r264_numSet = [];
    var r264_denSet = [];
    var _r264_t1 = r264_glyphStore.namedEntries()[Symbol.iterator]();
    var _r264_t2 = void 0;
    while (!(_r264_t2 = _r264_t1.next()).done) {
        _r264_t3 = _r264_t2.value;
        r264_gid = _r264_t3[0];
        r264_g = _r264_t3[1];
        if (r264_gid[0] !== '.') {
            r264_numForm = r1_NumeratorForm.get(r264_g);
            r264_denForm = r1_DenominatorForm.get(r264_g);
            if (r264_numForm && r264_denForm) {
                r264_digitSet.push(r264_gid);
                r264_numSet.push(r264_numForm);
                r264_denSet.push(r264_denForm);
            }
        }
    }
    var r264_subDen = r264_gsub.createLookup({
        'type': 'gsub_chaining',
        'rules': [r264_xn$chainrule$1aao(['fractionBar'].concat(r264_denSet), {
                'left': r264_digitSet,
                'right': r264_denSet
            })]
    });
    var r264_subNum = r264_gsub.createLookup({
        'type': 'gsub_reverse',
        'rules': [r264_xn$reverserule$3qIs({
                'left': r264_digitSet,
                'right': r264_numSet
            }, ['fractionBar'].concat(r264_numSet))]
    });
    r264_frac.addLookup(r264_subSolidus);
    r264_frac.addLookup(r264_subDen);
    r264_frac.addLookup(r264_subNum);
    r264_gsub.setDependency(r264_subSolidus, r264_subDen);
    r264_gsub.setDependency(r264_subSolidus, r264_subNum);
    return r264_gsub.endBlock(r264_rec);
};
var r1_objectIsNotEmpty = function (r268_obj) {
    var _r268_t0, _r268_t1;
    return r268_obj && Object.keys(r268_obj).length;
};
