'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
import * as _s0_t1 from '../../support/gr.mjs';
import * as _s0_t2 from '../../support/geometry/index.mjs';
import * as _s0_t3 from '../../support/geometry/transform.mjs';
var _s0_t4;
export {
    _s0_t4 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_AnyCv = _r1_t9.AnyCv;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_Joining = _r1_t9.Joining;
var r1_hashCv = _r1_t9.hashCv;
var _r1_t10 = _s0_t2;
var r1_hashGeometry = _r1_t10.hashGeometry;
var _r1_t11 = _s0_t3;
var r1_Transform = _r1_t11.Transform;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
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
var r1_DECOMPOSABLE = true;
var r1_xn$NONDECOMPOSABLE$9Jrj = false;
var r1_CENTERED = true;
var r1_xn$NOTCENTERED$9Jrj = false;
var r1_xn$ALLOWPROPORTIONAL$1aao = true;
var r1_xn$MONOSPACEONLY$5Frx = false;
var r1_StandardSpacing = void 0;
r1_xn$GlyphBlocks$2Lrc2b.push(function (r274_xn$Capture_Ext$2Lrc2b) {
    var _r274_t0, _r274_t1;
    r274_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r274_xn$Capture_Ext$2Lrc2b, 'Autobuild-Enclosure-Shared', function (r275_xn$Capture$2Lrc8, r275_xn$ExportCapture$2Lrc4b) {
        var r275_applyRelations, _r275_t6, _r275_t7;
        var _r275_t0 = r275_xn$Capture$2Lrc8;
        var r275_xn$createAndSaveGlyphImpl$2Lrc3c = _r275_t0['$createAndSaveGlyphImpl$'];
        var r275_xn$NamedParameterPair$2Lrc9b = _r275_t0['$NamedParameterPair$'];
        var r275_xn$Exec$2Lrc5 = _r275_t0['$Exec$'];
        var r275_para = _r275_t0.para;
        var _r275_t1 = r275_xn$Capture$2Lrc8.Metrics;
        var r275_CAP = _r275_t1.CAP;
        var _r275_t2 = r275_xn$Capture$2Lrc8.SpiroFns;
        var _r275_t3 = r275_xn$Capture$2Lrc8.BooleFns;
        var _r275_t4 = r275_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var _r275_t5 = r275_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r275_xn$queryglyph$1aao = _r275_t5['query-glyph'];
        var r275_DeriveMeshT = _r275_t5.DeriveMeshT;
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r279_t0, _r279_t1;
            return { 'CircNameNoCheck': r275_CircNameNoCheck };
        });
        var r275_CircNameNoCheck = function (r280_unicode, r280_prefix, r280_parts, r280_suffix) {
            var _r280_t0, _r280_t1;
            var r280_baseName = r280_prefix + '{' + r280_unicode + '}{' + r280_parts.join('}{') + '}';
            return r280_suffix ? r280_baseName + '.' + r280_suffix : r280_baseName;
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r282_t0, _r282_t1;
            return { 'CircName': r275_CircName };
        });
        var r275_CircName = function (r283_unicode, r283_prefix, r283_parts, r283_suffix) {
            var _r283_t0, _r283_t1;
            var r283_name = r275_CircNameNoCheck(r283_unicode, r283_prefix, r283_parts, r283_suffix);
            if (r275_xn$queryglyph$1aao(r283_name))
                throw new Error('Glyph exists : ' + r283_name);
            return r283_name;
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r285_t0, _r285_t1;
            return { 'EnsureComponentGlyphT': r275_EnsureComponentGlyphT };
        });
        var r275_EnsureComponentGlyphT = function (r286_gnPart, r286_fnBuildup) {
            var _r286_t0, _r286_t1;
            var r286_rs = new r1_Set();
            return r275_DeriveMeshT([r286_gnPart], r1_AnyCv, function (r287_gns, r287_gr) {
                var _r287_t0, _r287_t1;
                return r286_fnBuildup(r287_gns[0]);
            }, function (r288_gniFrom, r288_gniTo) {
                var _r288_t0, _r288_t1;
                return r275_xn$queryglyph$1aao(r288_gniFrom).tryBecomeMirrorOf(r275_xn$queryglyph$1aao(r288_gniTo), r286_rs);
            });
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r290_t0, _r290_t1;
            return { 'getGlyphDefaultShift': r275_getGlyphDefaultShift };
        });
        var r275_getGlyphDefaultShift = function (r291_bal, r291_baly, r291_g) {
            var _r291_t0, _r291_t1;
            if (r291_g && r291_g.baseAnchors.above && r291_g.baseAnchors.below)
                if (r291_bal)
                    return r275_CAP / 2 - r1_mix(r291_baly, r1_mix(r291_g.baseAnchors.above.y, r291_g.baseAnchors.below.y, 0.5), r291_bal);
                else
                    return r275_CAP / 2 - r1_mix(r291_g.baseAnchors.above.y, r291_g.baseAnchors.below.y, 0.5);
            return 0;
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r293_t0, _r293_t1;
            return { 'CollectJobs': r275_CollectJobs };
        });
        var r275_CollectJobs = function (r294_globallyDecomposable, r294_centered, r294_allowProportional, r294_prefix, r294_suffix, r294_demands) {
            var r294_demand, _r294_t3, _r294_t4, _r294_t5, _r294_tag6;
            var r294_nonDecomposable = [];
            var r294_decomposableJobs = [];
            var r294_relApplications = [];
            var r294_decomposableRelGlyphs = new r1_Set();
            var _r294_t0 = r294_demands;
            var _r294_t1 = _r294_t0.length;
            var _r294_t2 = 0;
            while (_r294_t2 < _r294_t1) {
                r294_demand = _r294_t0[_r294_t2];
                (function () {
                    var r297_part, r297_g, r297_relatedGlyphs, r297_gr, r297_mesh, r297_fromParts, r297_toParts, r297_gn, _r297_t3, _r297_t4, _r297_t5, _r297_t6, _r297_t7, _r297_t8, _r297_t9, _r297_t10, _r297_t11, _r297_t12, _r297_t13, _r297_t14, _r297_t15, _r297_t16, _r297_t17, _r297_t18, _r297_t19, _r297_t20, _r297_t21, _r297_t22, _r297_t23, _r297_t24, _r297_t25, _r297_t26, _r297_tag27;
                    var r297_unicode = r294_demand[0];
                    var r297_parts = r294_demand[1];
                    var r297_restInfo = r294_demand.slice(2);
                    var r297_origJobGlyphGn = r275_CircName(r297_unicode, r294_prefix, r297_parts, r294_suffix);
                    var r297_demandDecomposable = r275_para.enableCvSs && r294_globallyDecomposable;
                    var _r297_t0 = r297_parts;
                    var _r297_t1 = _r297_t0.length;
                    var _r297_t2 = 0;
                    while (_r297_t2 < _r297_t1) {
                        r297_part = _r297_t0[_r297_t2];
                        if (r275_xn$queryglyph$1aao(r297_part)) {
                            r297_g = r275_xn$queryglyph$1aao(r297_part);
                            r297_relatedGlyphs = r1_AnyCv.query(r297_g);
                            _r297_t3 = r297_relatedGlyphs;
                            _r297_t4 = _r297_t3.length;
                            _r297_t5 = 0;
                            while (_r297_t5 < _r297_t4) {
                                r297_gr = _r297_t3[_r297_t5];
                                if (r275_xn$queryglyph$1aao(r297_gr.get(r297_g))) {
                                    if (r294_allowProportional && r275_xn$queryglyph$1aao(r297_gr.get(r297_g)).advanceWidth !== r297_g.advanceWidth)
                                        r297_demandDecomposable = false;
                                    if (r294_centered && r275_getGlyphDefaultShift(0, 0, r275_xn$queryglyph$1aao(r297_gr.get(r297_g))) !== r275_getGlyphDefaultShift(0, 0, r297_g))
                                        r297_demandDecomposable = false;
                                }
                                _r297_t5 = _r297_t5 + 1;
                            }
                        }
                        _r297_t2 = _r297_t2 + 1;
                    }
                    var r297_jobsOrig = r297_demandDecomposable ? r294_decomposableJobs : r294_nonDecomposable;
                    r297_jobsOrig.push([
                        r297_origJobGlyphGn,
                        r297_unicode,
                        r297_parts
                    ].concat(r297_restInfo));
                    if (r275_para.enableCvSs) {
                        if (r297_demandDecomposable) {
                            _r297_t6 = r297_parts;
                            _r297_t7 = _r297_t6.length;
                            _r297_t8 = 0;
                            _r297_t22 = _r297_t8 < _r297_t7;
                            while (_r297_t22) {
                                r297_part = _r297_t6[_r297_t8];
                                r297_mesh = r1_getGrMesh([r297_part], r1_AnyCv, r275_xn$queryglyph$1aao);
                                _r297_t9 = r297_mesh;
                                _r297_t10 = _r297_t9.length;
                                _r297_t11 = 0;
                                while (_r297_t11 < _r297_t10) {
                                    _r297_t12 = _r297_t9[_r297_t11];
                                    r297_gr = _r297_t12[0];
                                    r297_fromParts = _r297_t12[1];
                                    r297_toParts = _r297_t12[2];
                                    _r297_t13 = r297_toParts;
                                    _r297_t14 = _r297_t13.length;
                                    _r297_t15 = 0;
                                    while (_r297_t15 < _r297_t14) {
                                        r297_gn = _r297_t13[_r297_t15];
                                        r294_decomposableRelGlyphs.add(r297_gn);
                                        _r297_t15 = _r297_t15 + 1;
                                    }
                                    _r297_t11 = _r297_t11 + 1;
                                }
                                _r297_t23 = _r297_t8 = _r297_t8 + 1;
                                _r297_t22 = _r297_t8 < _r297_t7;
                            }
                            _r297_t21 = _r297_t23;
                        } else {
                            r297_mesh = r1_getGrMesh(r297_parts, r1_AnyCv, r275_xn$queryglyph$1aao);
                            _r297_t16 = r297_mesh;
                            _r297_t17 = _r297_t16.length;
                            _r297_t18 = 0;
                            _r297_t24 = _r297_t18 < _r297_t17;
                            while (_r297_t24) {
                                _r297_t19 = _r297_t16[_r297_t18];
                                r297_gr = _r297_t19[0];
                                r297_fromParts = _r297_t19[1];
                                r297_toParts = _r297_t19[2];
                                (function () {
                                    var r305_fromGn = r275_CircNameNoCheck(r297_unicode, r294_prefix, r297_fromParts, r294_suffix);
                                    var r305_toGn = r275_CircName(r297_unicode, r294_prefix, r297_toParts, r294_suffix);
                                    r294_nonDecomposable.push([
                                        r305_toGn,
                                        null,
                                        r297_toParts
                                    ].concat(r297_restInfo));
                                    return r294_relApplications.push([
                                        r297_gr,
                                        r305_fromGn,
                                        r305_toGn
                                    ]);
                                }());
                                _r297_t25 = _r297_t18 = _r297_t18 + 1;
                                _r297_t24 = _r297_t18 < _r297_t17;
                            }
                            _r297_t21 = _r297_t25;
                        }
                        _r297_t20 = _r297_t21;
                    }
                    return _r297_t20;
                }());
                _r294_t2 = _r294_t2 + 1;
            }
            return {
                'nonDecomposable': r294_nonDecomposable,
                'decomposableJobs': r294_decomposableJobs,
                'decomposableRelGlyphs': r294_decomposableRelGlyphs,
                'relApplications': r294_relApplications
            };
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r307_t0, _r307_t1;
            return { 'CreateDerivedFontFromJobs': r275_CreateDerivedFontFromJobs };
        });
        var r275_CreateDerivedFontFromJobs = function (r308_aj, r308_restGids, r308_fn) {
            var r308_gn, r308_gnf, r308_unicode, r308_parts, _r308_t6, _r308_t7, _r308_t8, _r308_t9, _r308_t13, _r308_t14, _r308_t15, _r308_t16, _r308_t17, _r308_t18;
            var _r308_t0 = r308_aj;
            var r308_nonDecomposable = _r308_t0.nonDecomposable;
            var r308_decomposableJobs = _r308_t0.decomposableJobs;
            var r308_decomposableRelGlyphs = _r308_t0.decomposableRelGlyphs;
            var r308_pendingGlyphs = new r1_Set(r308_restGids);
            var _r308_t1 = r308_decomposableRelGlyphs[Symbol.iterator]();
            var _r308_t2 = void 0;
            while (!(_r308_t2 = _r308_t1.next()).done) {
                r308_gn = _r308_t2.value;
                r308_pendingGlyphs.add(r308_gn);
            }
            var _r308_t3 = r308_nonDecomposable;
            var _r308_t4 = _r308_t3.length;
            var _r308_t5 = 0;
            while (_r308_t5 < _r308_t4) {
                _r308_t6 = _r308_t3[_r308_t5];
                r308_gnf = _r308_t6[0];
                r308_unicode = _r308_t6[1];
                r308_parts = _r308_t6[2];
                _r308_t7 = r308_parts;
                _r308_t8 = _r308_t7.length;
                _r308_t9 = 0;
                while (_r308_t9 < _r308_t8) {
                    r308_gn = _r308_t7[_r308_t9];
                    r308_pendingGlyphs.add(r308_gn);
                    _r308_t9 = _r308_t9 + 1;
                }
                _r308_t5 = _r308_t5 + 1;
            }
            var _r308_t10 = r308_decomposableJobs;
            var _r308_t11 = _r308_t10.length;
            var _r308_t12 = 0;
            while (_r308_t12 < _r308_t11) {
                _r308_t13 = _r308_t10[_r308_t12];
                r308_gnf = _r308_t13[0];
                r308_unicode = _r308_t13[1];
                r308_parts = _r308_t13[2];
                _r308_t14 = r308_parts;
                _r308_t15 = _r308_t14.length;
                _r308_t16 = 0;
                while (_r308_t16 < _r308_t15) {
                    r308_gn = _r308_t14[_r308_t16];
                    r308_pendingGlyphs.add(r308_gn);
                    _r308_t16 = _r308_t16 + 1;
                }
                _r308_t12 = _r308_t12 + 1;
            }
            return r308_fn(Array.from(r308_pendingGlyphs));
        };
        r275_xn$ExportCapture$2Lrc4b(function () {
            var _r315_t0, _r315_t1;
            return { 'applyRelations': r275_applyRelations };
        });
        return r275_applyRelations = function (r316_relApplications) {
            var r316_gr, r316_f, r316_t, _r316_t3, _r316_t4, _r316_t5, _r316_t7;
            var r316_rs = new r1_Set();
            var _r316_t0 = r316_relApplications;
            var _r316_t1 = _r316_t0.length;
            var _r316_t2 = 0;
            var _r316_t6 = _r316_t2 < _r316_t1;
            while (_r316_t6) {
                _r316_t7 = (_r316_t3 = _r316_t0[_r316_t2], r316_gr = _r316_t3[0], r316_f = _r316_t3[1], r316_t = _r316_t3[2], r275_xn$queryglyph$1aao(r316_f) ? (r316_gr.set(r275_xn$queryglyph$1aao(r316_f), r316_t), r275_xn$queryglyph$1aao(r316_t) ? r275_xn$queryglyph$1aao(r316_t).tryBecomeMirrorOf(r275_xn$queryglyph$1aao(r316_f), r316_rs) : void 0) : void 0, _r316_t2 = _r316_t2 + 1);
                _r316_t6 = _r316_t2 < _r316_t1;
            }
            return _r316_t7;
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r320_xn$Capture_Ext$2Lrc2b) {
    var _r320_t0, _r320_t1;
    r320_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r320_xn$Capture_Ext$2Lrc2b, 'AutoBuild-Enclosure', function (r321_xn$Capture$2Lrc8, r321_xn$ExportCapture$2Lrc4b) {
        var _r321_t8, _r321_t9, _r321_t10, _r321_tag11, _r321_t12, _r321_tag13, _r321_t14, _r321_tag15, _r321_t16, _r321_tag17, _r321_t18, _r321_tag19, _r321_t20, _r321_tag21, _r321_t22, _r321_tag23, _r321_t24, _r321_tag25, _r321_t26, _r321_tag27, _r321_t28, _r321_tag29, _r321_t30, _r321_tag31, _r321_t32, _r321_tag33, _r321_t34, _r321_tag35, _r321_t36, _r321_tag37, _r321_t38, _r321_tag39, _r321_t40, _r321_tag41, _r321_t42, _r321_tag43, _r321_t44, _r321_tag45, _r321_t46, _r321_tag47, _r321_t48, _r321_tag49, _r321_t50, _r321_tag51, _r321_t52, _r321_tag53, _r321_t54, _r321_tag55, _r321_t56, _r321_tag57, _r321_t58, _r321_tag59, _r321_t60, _r321_tag61, _r321_t62, _r321_tag63;
        var _r321_t0 = r321_xn$Capture$2Lrc8;
        var r321_xn$createAndSaveGlyphImpl$2Lrc3c = _r321_t0['$createAndSaveGlyphImpl$'];
        var r321_xn$NamedParameterPair$2Lrc9b = _r321_t0['$NamedParameterPair$'];
        var r321_xn$Exec$2Lrc5 = _r321_t0['$Exec$'];
        var r321_para = _r321_t0.para;
        var r321_glyphStore = _r321_t0.glyphStore;
        var r321_fontMetrics = _r321_t0.fontMetrics;
        var _r321_t1 = r321_xn$Capture$2Lrc8.Metrics;
        var r321_UPM = _r321_t1.UPM;
        var r321_HalfUPM = _r321_t1.HalfUPM;
        var r321_Width = _r321_t1.Width;
        var r321_SB = _r321_t1.SB;
        var r321_CAP = _r321_t1.CAP;
        var r321_XH = _r321_t1.XH;
        var r321_SymbolMid = _r321_t1.SymbolMid;
        var r321_ParenTop = _r321_t1.ParenTop;
        var r321_ParenBot = _r321_t1.ParenBot;
        var r321_Scale = _r321_t1.Scale;
        var r321_Translate = _r321_t1.Translate;
        var r321_TanSlope = _r321_t1.TanSlope;
        var r321_O = _r321_t1.O;
        var r321_SmallArchDepth = _r321_t1.SmallArchDepth;
        var r321_Stroke = _r321_t1.Stroke;
        var r321_SLAB = _r321_t1.SLAB;
        var r321_WideWidth0 = _r321_t1.WideWidth0;
        var r321_WideWidth1 = _r321_t1.WideWidth1;
        var r321_WideWidth2 = _r321_t1.WideWidth2;
        var r321_WideWidth4 = _r321_t1.WideWidth4;
        var r321_RightSB = _r321_t1.RightSB;
        var r321_AdviceStroke = _r321_t1.AdviceStroke;
        var r321_ArchDepthAOf = _r321_t1.ArchDepthAOf;
        var r321_ArchDepthBOf = _r321_t1.ArchDepthBOf;
        var r321_HSwToV = _r321_t1.HSwToV;
        var _r321_t2 = r321_xn$Capture$2Lrc8.SpiroFns;
        var r321_g4 = _r321_t2.g4;
        var r321_corner = _r321_t2.corner;
        var r321_flat = _r321_t2.flat;
        var r321_curl = _r321_t2.curl;
        var r321_close = _r321_t2.close;
        var r321_widths = _r321_t2.widths;
        var r321_dispiro = _r321_t2.dispiro;
        var r321_xn$spirooutline$1aao = _r321_t2['spiro-outline'];
        var _r321_t3 = r321_xn$Capture$2Lrc8.BooleFns;
        var r321_union = _r321_t3.union;
        var r321_intersection = _r321_t3.intersection;
        var r321_difference = _r321_t3.difference;
        var _r321_t4 = r321_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r321_OShape = _r321_t4.OShape;
        var r321_OShapeOutline = _r321_t4.OShapeOutline;
        var r321_HBar = _r321_t4.HBar;
        var r321_VBar = _r321_t4.VBar;
        var r321_Ungizmo = _r321_t4.Ungizmo;
        var r321_Regizmo = _r321_t4.Regizmo;
        var r321_ForceUpright = _r321_t4.ForceUpright;
        var r321_xn$withtransform$5sIl = _r321_t4['with-transform'];
        var _r321_t5 = r321_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r321_xn$referglyph$1aao = _r321_t5['refer-glyph'];
        var r321_xn$queryglyph$1aao = _r321_t5['query-glyph'];
        var _r321_t6 = r321_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Recursive-Build'].resolve();
        var r321_Fork = _r321_t6.Fork;
        var r321_Miniature = _r321_t6.Miniature;
        var r321_MiniatureParaT = _r321_t6.MiniatureParaT;
        var _r321_t7 = r321_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Autobuild-Enclosure-Shared'].resolve();
        var r321_CircNameNoCheck = _r321_t7.CircNameNoCheck;
        var r321_CircName = _r321_t7.CircName;
        var r321_CollectJobs = _r321_t7.CollectJobs;
        var r321_EnsureComponentGlyphT = _r321_t7.EnsureComponentGlyphT;
        var r321_CreateDerivedFontFromJobs = _r321_t7.CreateDerivedFontFromJobs;
        var r321_applyRelations = _r321_t7.applyRelations;
        var r321_getGlyphDefaultShift = _r321_t7.getGlyphDefaultShift;
        var r321_circleWidthClasses = [
            [
                'NWID',
                r321_Width,
                0.12
            ],
            [
                'WWID',
                r321_WideWidth0,
                0.08
            ]
        ];
        var r321_AdjustDigitCount = function (r326_digits, r326_width) {
            var _r326_t0, _r326_t1;
            return Math.max(1, r326_digits * r321_Width / r326_width);
        };
        var r321_EnclosureStrokeScale = function (r327_dscale, r327_digits, r327_width) {
            var _r327_t0, _r327_t1;
            return r327_dscale / Math.pow(r321_AdjustDigitCount(r327_digits, r327_width), 0.66);
        };
        var r321_enclosureInnerPartActualWidth = new r1_Map();
        var r321_GlyphNameInnerOf = function (r328_gniPrefix, r328_subGlyph, r328_mp, r328_actualWidth, r328_accumulatedTfm) {
            var _r328_t0, _r328_t1;
            var r328_nameParts = [
                r328_mp,
                r328_actualWidth,
                r328_accumulatedTfm,
                r1_hashGeometry(r328_subGlyph.geometry),
                r1_hashCv(r328_subGlyph)
            ];
            return '.ci.' + r328_gniPrefix + '/' + r328_nameParts.join('/');
        };
        var r321_EnsureInnerSubGlyphImpl = function (r329_gniPrefix, r329_markClass, r329_miniatureFont, r329_mp, r329_actualWidth, r329_accumulatedTfm) {
            var _r329_t0, _r329_t1;
            return function (r330_gidPart) {
                var _r330_t0, _r330_t1;
                var r330_subGlyph = r329_miniatureFont.queryByNameEnsured(r330_gidPart);
                var r330_gniPart = r321_GlyphNameInnerOf(r329_gniPrefix, r330_subGlyph, r329_mp, r329_actualWidth, r329_accumulatedTfm);
                if (!r321_xn$queryglyph$1aao(r330_gniPart)) {
                    r321_enclosureInnerPartActualWidth.set(r330_gniPart, r329_actualWidth);
                    r321_xn$createAndSaveGlyphImpl$2Lrc3c(r330_gniPart, null, function () {
                        var _r333_t1;
                        var _r333_t0 = this;
                        var r333_currentGlyph = _r333_t0;
                        r333_currentGlyph.setWidth(0);
                        r333_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                        r333_currentGlyph.include(r330_subGlyph);
                        r333_currentGlyph.include(r329_accumulatedTfm);
                        if (r329_mp)
                            r333_currentGlyph.setMarkAnchor(r329_markClass, 0, 0, r329_actualWidth, 0);
                        else
                            r333_currentGlyph.setMarkAnchor(r329_markClass, r329_actualWidth / 2, 0);
                        return void 0;
                    });
                }
                return r330_gniPart;
            };
        };
        var r321_EnsureInnerSubGlyphSeq = function (r340_gniPrefix, r340_markClass, r340_miniatureFont, r340_job, r340_dimens, r340_yCompress, r340_kExtraYShift) {
            var r340_gidPart, _r340_t7, _r340_t8, _r340_t9, _r340_tag10, _r340_t11, _r340_tag12;
            var _r340_t0 = r340_job;
            var r340_gn = _r340_t0[0];
            var r340_unicode = _r340_t0[1];
            var r340_parts = _r340_t0[2];
            var r340_w = _r340_t0[3];
            var r340_bal = _r340_t0[4];
            var r340_baly = _r340_t0[5];
            var _r340_t1 = r340_dimens;
            var r340_width = _r340_t1.width;
            var r340_mockInnerWidth = _r340_t1.mockInnerWidth;
            var r340_dscale = _r340_t1.dscale;
            var r340_totalWidth = 0;
            var r340_firstDerivedGyph = null;
            var _r340_t2 = r340_parts;
            var _r340_t3 = _r340_t2.length;
            var _r340_t4 = 0;
            while (_r340_t4 < _r340_t3) {
                r340_gidPart = _r340_t2[_r340_t4];
                (function () {
                    var r344_derivedGlyph = r340_miniatureFont.queryByNameEnsured(r340_gidPart);
                    if (!r340_firstDerivedGyph)
                        r340_firstDerivedGyph = r344_derivedGlyph;
                    return r340_totalWidth = r340_totalWidth + r344_derivedGlyph.advanceWidth;
                }());
                _r340_t4 = _r340_t4 + 1;
            }
            var r340_xCompress = Math.min(1, r340_mockInnerWidth / r340_totalWidth);
            r340_totalWidth = Math.min(r340_mockInnerWidth, r340_totalWidth);
            var r340_shift = r321_getGlyphDefaultShift(r340_bal, r340_baly, r340_firstDerivedGyph);
            var r340_accumulatedTfm = r1_Transform.Combine(r340_firstDerivedGyph.gizmo.inverse(), r321_Scale(r340_dscale * r340_xCompress, r340_dscale * r340_yCompress), r321_Translate(0, r340_dscale * r340_shift + r321_SymbolMid + (r340_kExtraYShift - 0.5) * r321_CAP * r340_dscale), r340_firstDerivedGyph.gizmo);
            var r340_finalParts = [];
            var _r340_t5 = 0;
            var _r340_t6 = r340_parts.length;
            var r340_partIndex = _r340_t5;
            while (r340_partIndex < _r340_t6) {
                (function () {
                    var r347_gidPart = r340_parts[r340_partIndex];
                    var r347_actualWidth = r340_miniatureFont.queryByNameEnsured(r347_gidPart).advanceWidth * r340_dscale * r340_xCompress;
                    return r340_finalParts.push(r321_EnsureComponentGlyphT(r347_gidPart, r321_EnsureInnerSubGlyphImpl(r340_gniPrefix, r340_markClass, r340_miniatureFont, r340_parts.length > 1, r347_actualWidth, r340_accumulatedTfm)));
                }());
                r340_partIndex = r340_partIndex + 1;
            }
            return r340_finalParts;
        };
        var r321_EnclosureInnerImpl = function (r348_dimens, r348_finalParts) {
            var _r348_t0, _r348_t1;
            return function () {
                var r350_gniPart, _r350_t8;
                var _r350_t7 = this;
                var r350_currentGlyph = _r350_t7;
                var _r350_t0 = r348_dimens;
                var r350_width = _r350_t0.width;
                var r350_dscale = _r350_t0.dscale;
                var r350_mockInnerWidth = _r350_t0.mockInnerWidth;
                var r350_totalInnerWidth = 0;
                var _r350_t1 = r348_finalParts;
                var _r350_t2 = _r350_t1.length;
                var _r350_t3 = 0;
                while (_r350_t3 < _r350_t2) {
                    r350_gniPart = _r350_t1[_r350_t3];
                    r350_totalInnerWidth = r350_totalInnerWidth + (r321_enclosureInnerPartActualWidth.get(r350_gniPart) || 0);
                    _r350_t3 = _r350_t3 + 1;
                }
                var r350_x = 0.5 * r350_width - 0.5 * r350_totalInnerWidth;
                var _r350_t4 = r348_finalParts;
                var _r350_t5 = _r350_t4.length;
                var _r350_t6 = 0;
                while (_r350_t6 < _r350_t5) {
                    r350_gniPart = _r350_t4[_r350_t6];
                    r350_currentGlyph.include(r321_xn$withtransform$5sIl(r321_Translate(r350_x, 0), r321_xn$referglyph$1aao(r350_gniPart)));
                    r350_x = r350_x + (r321_enclosureInnerPartActualWidth.get(r350_gniPart) || 0);
                    _r350_t6 = _r350_t6 + 1;
                }
                return void 0;
            };
        };
        var r321_EnclosureInner = function (r356_gniPrefix, r356_gnEnclosure, r356_miniatureFont, r356_job, r356_dimens) {
            var _r356_t2, _r356_t3, _r356_t4;
            var _r356_t0 = r356_job;
            var r356_gn = _r356_t0[0];
            var r356_unicode = _r356_t0[1];
            var r356_parts = _r356_t0[2];
            var r356_w = _r356_t0[3];
            var r356_bal = _r356_t0[4];
            var r356_baly = _r356_t0[5];
            var _r356_t1 = r356_dimens;
            var r356_width = _r356_t1.width;
            var r356_mockInnerWidth = _r356_t1.mockInnerWidth;
            var r356_dscale = _r356_t1.dscale;
            var r356_finalParts = r321_EnsureInnerSubGlyphSeq(r356_gniPrefix, 'enclosureInner', r356_miniatureFont, r356_job, r356_dimens, 1, 0);
            if (r356_gnEnclosure)
                return function () {
                    var _r358_t1;
                    var _r358_t0 = this;
                    var r358_currentGlyph = _r358_t0;
                    r358_currentGlyph.include(r321_EnclosureInnerImpl(r356_dimens, r356_finalParts));
                    r1_CvDecompose.set(r358_currentGlyph, [r356_gnEnclosure].concat(r356_finalParts));
                    return void 0;
                };
            else
                return r321_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, r321_EnclosureInnerImpl(r356_dimens, r356_finalParts));
        };
        var r321_TwoRowEnclosureInner = function (r361_gniPrefix, r361_gnEnclosure, r361_miniatureFont, r361_job, r361_dimens) {
            var _r361_t2, _r361_t3, _r361_t4;
            var _r361_t0 = r361_job;
            var r361_gn = _r361_t0[0];
            var r361_unicode = _r361_t0[1];
            var r361_parts = _r361_t0[2];
            var r361_w = _r361_t0[3];
            var r361_bal = _r361_t0[4];
            var r361_baly = _r361_t0[5];
            var _r361_t1 = r361_dimens;
            var r361_width = _r361_t1.width;
            var r361_mockInnerWidth = _r361_t1.mockInnerWidth;
            var r361_dscale = _r361_t1.dscale;
            var r361_jobFirstHalf = [
                r361_gn,
                r361_unicode,
                r361_parts.slice(0, r361_parts.length / 2),
                r361_w,
                r361_bal,
                r361_baly
            ];
            var r361_jobSecondHalf = [
                r361_gn,
                r361_unicode,
                r361_parts.slice(r361_parts.length / 2),
                r361_w,
                r361_bal,
                r361_baly
            ];
            var r361_finalPartsFirstHalf = r321_EnsureInnerSubGlyphSeq(r361_gniPrefix, 'enclosureInnerFirstHalf', r361_miniatureFont, r361_jobFirstHalf, r361_dimens, 0.45, +0.55);
            var r361_finalPartsSecondHalf = r321_EnsureInnerSubGlyphSeq(r361_gniPrefix, 'enclosureInnerSecondHalf', r361_miniatureFont, r361_jobSecondHalf, r361_dimens, 0.45, +0);
            if (r361_gnEnclosure)
                return function () {
                    var _r363_t1;
                    var _r363_t0 = this;
                    var r363_currentGlyph = _r363_t0;
                    r363_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsFirstHalf));
                    r363_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsSecondHalf));
                    r1_CvDecompose.set(r363_currentGlyph, [r361_gnEnclosure].concat(r361_finalPartsFirstHalf, r361_finalPartsSecondHalf));
                    return void 0;
                };
            else
                return r321_xn$createAndSaveGlyphImpl$2Lrc3c(null, null, function () {
                    var _r368_t1;
                    var _r368_t0 = this;
                    var r368_currentGlyph = _r368_t0;
                    r368_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsFirstHalf));
                    r368_currentGlyph.include(r321_EnclosureInnerImpl(r361_dimens, r361_finalPartsSecondHalf));
                    return void 0;
                });
        };
        var r321_CircCrowd = function (r371_digits, r371_width) {
            var _r371_t0, _r371_t1;
            return 2 + 2 * Math.pow(r321_AdjustDigitCount(r371_digits, r371_width), 2 / 3) * Math.max(1, r321_HalfUPM / r321_Width);
        };
        var r321_CircScale = function (r372_digits, r372_width) {
            var _r372_t0, _r372_t1;
            return 0.65 / Math.pow(r321_AdjustDigitCount(r372_digits, r372_width), 0.5);
        };
        var r321_circleDimens = function (r373_digits, r373_w, r373_m) {
            var _r373_t0, _r373_t1;
            var r373_width = r1_fallback(r373_w, r321_Width);
            var r373_dscale = r1_linreg(r321_HalfUPM, 0.55, r321_UPM, 0.6, r373_width);
            var r373_spatt = r1_linreg(r321_HalfUPM, 0.22, r321_UPM, 0.27, r373_width) * (r321_Width / r321_HalfUPM);
            var r373_sw0 = r321_EnclosureStrokeScale(r373_dscale, r373_digits, r373_width) * r321_AdviceStroke(r321_CircCrowd(r373_digits, r373_width)) / r321_CircScale(r373_digits, r373_width);
            var r373_sw = Math.max(r373_sw0, r1_fallback(r373_m, 0));
            var r373_top = r321_SymbolMid + r321_CAP * r373_dscale / 2 + r321_CAP * r373_spatt;
            var r373_bot = r321_SymbolMid - r321_CAP * r373_dscale / 2 - r321_CAP * r373_spatt;
            var r373_mosaicLeft = 0;
            var r373_mosaicRight = r373_width;
            var r373_mosaicBot = r321_fontMetrics.os2.sTypoDescender;
            var r373_mosaicTop = r321_fontMetrics.os2.sTypoAscender;
            var r373_left = Math.max(r321_SB + r321_O * 3, Math.min(r373_width / 2 - (r373_top - r373_bot) / 2, r373_width / 2 - r321_CAP / 2 * r373_dscale - r373_sw * 2.5));
            var r373_right = Math.min(r373_width - r321_SB - r321_O * 3, Math.max(r373_width / 2 + (r373_top - r373_bot) / 2, r373_width / 2 + r321_CAP / 2 * r373_dscale + r373_sw * 2.5));
            var r373_mockInnerWidth = r373_width + 2 * (r321_Stroke - r373_sw) * r373_dscale;
            var r373_archDepthA = r321_ArchDepthAOf(r321_SmallArchDepth * (r373_right - r373_left) / (r321_RightSB - r321_SB), r373_width);
            var r373_archDepthB = r321_ArchDepthBOf(r321_SmallArchDepth * (r373_right - r373_left) / (r321_RightSB - r321_SB), r373_width);
            return {
                'width': r373_width,
                'mockInnerWidth': r373_mockInnerWidth,
                'dscale': r373_dscale,
                'sw0': r373_sw0,
                'sw': r373_sw,
                'top': r373_top,
                'bot': r373_bot,
                'left': r373_left,
                'right': r373_right,
                'mosaicTop': r373_mosaicTop,
                'mosaicBot': r373_mosaicBot,
                'mosaicLeft': r373_mosaicLeft,
                'mosaicRight': r373_mosaicRight,
                'archDepthA': r373_archDepthA,
                'archDepthB': r373_archDepthB
            };
        };
        var r321_StandardSpacing = {
            'gniPrefix': '',
            'getPara': function (r374_pp, r374_digits, r374_rows, r374_width) {
                var _r374_t0, _r374_t1;
                return r321_MiniatureParaT(r374_pp, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_CircCrowd(r374_digits / r374_rows, r374_width)), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_CircScale(r374_digits / r374_rows, r374_width)), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1), new r321_xn$NamedParameterPair$2Lrc9b('mono', r374_digits > 1), new r321_xn$NamedParameterPair$2Lrc9b('mono2', r374_digits > 1));
            }
        };
        var r321_ItalicSpacing = {
            'gniPrefix': 'i',
            'getPara': function (r380_pp, r380_digits, r380_rows, r380_width) {
                var _r380_t0, _r380_t1;
                var r380_pp1 = r380_pp.createFork(function (r381_a) {
                    var _r381_t0, _r381_t1;
                    r381_a.shape.slope = 'italic';
                    return r381_a.shape.slopeAngle = r1_mix(r321_para.slopeAngle || 0, 15, 95 / 150);
                });
                return r321_StandardSpacing.getPara(r380_pp1, r380_digits, r380_rows, r380_width);
            }
        };
        var r321_SansSerifSpacing = {
            'gniPrefix': 'ss',
            'getPara': function (r382_pp, r382_digits, r382_rows, r382_width) {
                var _r382_t0, _r382_t1;
                var r382_pp1 = r382_pp.createFork(function (r383_a) {
                    var _r383_t0, _r383_t1;
                    return r383_a.shape.serifs = 'sans';
                });
                return r321_StandardSpacing.getPara(r382_pp1, r382_digits, r382_rows, r382_width);
            }
        };
        var r321_EnclosureT = function (r384_prefix, r384_builder, r384_spacing, r384_digits, r384_rows, r384_demands, r384_fnEnclosure) {
            var r384_suffix, r384_ww, r384_gap, _r384_t3, _r384_t4, _r384_t5, _r384_t7, _r384_t8, _r384_tag9;
            var _r384_t0 = r321_circleWidthClasses;
            var _r384_t1 = _r384_t0.length;
            var _r384_t2 = 0;
            var _r384_t6 = _r384_t2 < _r384_t1;
            while (_r384_t6) {
                _r384_t3 = _r384_t0[_r384_t2];
                r384_suffix = _r384_t3[0];
                r384_ww = _r384_t3[1];
                r384_gap = _r384_t3[2];
                (function () {
                    var r387_job;
                    var r387_allowProportional = r384_digits > 1 ? r1_xn$MONOSPACEONLY$5Frx : r1_xn$ALLOWPROPORTIONAL$1aao;
                    var r387_jobs = r321_CollectJobs(r384_builder.decomposable, r1_CENTERED, r387_allowProportional, r384_prefix + r384_digits, r384_suffix, r384_demands);
                    var r387_forkedPara = r384_spacing.getPara(r321_para, r384_digits, r384_rows, r384_ww);
                    var r387_miniatureFont = r321_CreateDerivedFontFromJobs(r387_jobs, [], function (r388_gs) {
                        var _r388_t0, _r388_t1;
                        return r321_Fork(r388_gs, r387_forkedPara);
                    });
                    var r387_gnEnclosure = r321_CircName(null, r384_prefix + r384_digits + '.enclosure', [], r384_suffix);
                    if (!r321_xn$queryglyph$1aao(r387_gnEnclosure))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r387_gnEnclosure, null, r384_fnEnclosure(r384_digits, r384_ww, r384_gap));
                    var _r387_t0 = r387_jobs.decomposableJobs;
                    var _r387_t1 = _r387_t0.length;
                    var _r387_t2 = 0;
                    while (_r387_t2 < _r387_t1) {
                        r387_job = _r387_t0[_r387_t2];
                        r384_builder.build(r384_prefix + r384_digits, r384_spacing.gniPrefix, r384_digits, r384_ww, r384_gap, r387_job, r387_miniatureFont, r387_gnEnclosure, true);
                        _r387_t2 = _r387_t2 + 1;
                    }
                    var _r387_t3 = r387_jobs.nonDecomposable;
                    var _r387_t4 = _r387_t3.length;
                    var _r387_t5 = 0;
                    while (_r387_t5 < _r387_t4) {
                        r387_job = _r387_t3[_r387_t5];
                        r384_builder.build(r384_prefix + r384_digits, r384_spacing.gniPrefix, r384_digits, r384_ww, r384_gap, r387_job, r387_miniatureFont, r387_gnEnclosure, false);
                        _r387_t5 = _r387_t5 + 1;
                    }
                    return r321_applyRelations(r387_jobs.relApplications);
                }());
                _r384_t7 = _r384_t2 = _r384_t2 + 1;
                _r384_t6 = _r384_t2 < _r384_t1;
            }
            return _r384_t7;
        };
        var r321_CircledBuilder = {
            'decomposable': true,
            'build': function (r392_prefix, r392_gniPrefix, r392_digits, r392_ww, r392_gap, r392_job, r392_miniatureFont, r392_gnEnclosure, r392_decomposable) {
                var _r392_t2, _r392_t3;
                var _r392_t0 = r392_job;
                var r392_gn = _r392_t0[0];
                var r392_unicode = _r392_t0[1];
                var r392_parts = _r392_t0[2];
                var r392_w = _r392_t0[3];
                var r392_bal = _r392_t0[4];
                var r392_baly = _r392_t0[5];
                var r392_dimens = r321_circleDimens(r392_digits, r392_ww);
                var _r392_t1 = r392_dimens;
                var r392_width = _r392_t1.width;
                var r392_mockInnerWidth = _r392_t1.mockInnerWidth;
                var r392_dscale = _r392_t1.dscale;
                return !r321_xn$queryglyph$1aao(r392_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r392_gn, r392_w === r392_ww ? r392_unicode : null, function () {
                    var _r395_t1;
                    var _r395_t0 = this;
                    var r395_currentGlyph = _r395_t0;
                    r395_currentGlyph.setWidth(r392_width);
                    r395_currentGlyph.include(r321_EnclosureInner(r392_gniPrefix, r392_decomposable ? r392_gnEnclosure : null, r392_miniatureFont, r392_job, r392_dimens));
                    r395_currentGlyph.include(r321_xn$referglyph$1aao(r392_gnEnclosure));
                    return void 0;
                }) : void 0;
            }
        };
        var r321_TwoRowBoxedBuilder = {
            'decomposable': true,
            'build': function (r399_prefix, r399_gniPrefix, r399_digits, r399_ww, r399_gap, r399_job, r399_miniatureFont, r399_gnEnclosure, r399_decomposable) {
                var _r399_t2, _r399_t3;
                var _r399_t0 = r399_job;
                var r399_gn = _r399_t0[0];
                var r399_unicode = _r399_t0[1];
                var r399_parts = _r399_t0[2];
                var r399_w = _r399_t0[3];
                var r399_bal = _r399_t0[4];
                var r399_baly = _r399_t0[5];
                var r399_dimens = r321_circleDimens(r399_digits, r399_ww);
                var _r399_t1 = r399_dimens;
                var r399_width = _r399_t1.width;
                var r399_mockInnerWidth = _r399_t1.mockInnerWidth;
                var r399_dscale = _r399_t1.dscale;
                return !r321_xn$queryglyph$1aao(r399_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r399_gn, r399_w === r399_ww ? r399_unicode : null, function () {
                    var _r402_t1;
                    var _r402_t0 = this;
                    var r402_currentGlyph = _r402_t0;
                    r402_currentGlyph.setWidth(r399_width);
                    r402_currentGlyph.include(r321_TwoRowEnclosureInner(r399_gniPrefix, r399_decomposable ? r399_gnEnclosure : null, r399_miniatureFont, r399_job, r399_dimens));
                    r402_currentGlyph.include(r321_xn$referglyph$1aao(r399_gnEnclosure));
                    return void 0;
                }) : void 0;
            }
        };
        var r321_InsetBuilder = {
            'decomposable': false,
            'build': function (r406_prefix, r406_gniPrefix, r406_digits, r406_ww, r406_gap, r406_job, r406_miniatureFont, r406_gnEnclosure, r406_decomposable) {
                var _r406_t2, _r406_t3;
                var _r406_t0 = r406_job;
                var r406_gn = _r406_t0[0];
                var r406_unicode = _r406_t0[1];
                var r406_parts = _r406_t0[2];
                var r406_w = _r406_t0[3];
                var r406_bal = _r406_t0[4];
                var r406_baly = _r406_t0[5];
                var r406_dimens = r321_circleDimens(r406_digits, r406_ww);
                var _r406_t1 = r406_dimens;
                var r406_width = _r406_t1.width;
                var r406_mockInnerWidth = _r406_t1.mockInnerWidth;
                var r406_dscale = _r406_t1.dscale;
                return !r321_xn$queryglyph$1aao(r406_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r406_gn, r406_w === r406_ww ? r406_unicode : null, function () {
                    var _r409_t1;
                    var _r409_t0 = this;
                    var r409_currentGlyph = _r409_t0;
                    r409_currentGlyph.setWidth(r406_width);
                    r409_currentGlyph.include(r321_difference(r321_xn$referglyph$1aao(r406_gnEnclosure), r321_EnclosureInner(r406_gniPrefix, r406_decomposable ? r406_gnEnclosure : null, r406_miniatureFont, r406_job, r406_dimens)));
                    return void 0;
                }) : void 0;
            }
        };
        var r321_AddEnclosureMark = function (r412_digits, r412_dimens) {
            var _r412_t0, _r412_t1;
            return function () {
                var _r414_t2;
                var _r414_t1 = this;
                var r414_currentGlyph = _r414_t1;
                var _r414_t0 = r412_dimens;
                var r414_width = _r414_t0.width;
                var r414_dscale = _r414_t0.dscale;
                var r414_mockInnerWidth = _r414_t0.mockInnerWidth;
                if (r412_digits > 1)
                    r414_currentGlyph.setBaseAnchor('enclosureInner', 0.5 * r414_width - 0.5 * r414_dscale * Math.min(r321_Width * r412_digits, r414_mockInnerWidth), 0);
                else
                    r414_currentGlyph.setBaseAnchor('enclosureInner', 0.5 * r414_width, 0);
                return void 0;
            };
        };
        var r321_AddEnclosureMarkTwoLine = function (r417_digits, r417_dimens) {
            var _r417_t0, _r417_t1;
            return function () {
                var _r419_t2;
                var _r419_t1 = this;
                var r419_currentGlyph = _r419_t1;
                var _r419_t0 = r417_dimens;
                var r419_width = _r419_t0.width;
                var r419_dscale = _r419_t0.dscale;
                var r419_mockInnerWidth = _r419_t0.mockInnerWidth;
                if (r417_digits > 1) {
                    r419_currentGlyph.setBaseAnchor('enclosureInnerFirstHalf', 0.5 * r419_width - 0.5 * r419_dscale * Math.min(r321_Width * r417_digits, r419_mockInnerWidth), 0);
                    r419_currentGlyph.setBaseAnchor('enclosureInnerSecondHalf', 0.5 * r419_width - 0.5 * r419_dscale * Math.min(r321_Width * r417_digits, r419_mockInnerWidth), 0);
                }
                return void 0;
            };
        };
        var r321_createCircledGlyphs = function (r422_digits, r422_demands) {
            var _r422_t0, _r422_t1;
            return r321_EnclosureT('circle', r321_CircledBuilder, r321_StandardSpacing, r422_digits, 1, r422_demands, r321_CircleEnclosureShape);
        };
        var r321_createBackslashCircledGlyphs = function (r423_digits, r423_demands) {
            var _r423_t0, _r423_t1;
            return r321_EnclosureT('circle-slashed', r321_CircledBuilder, r321_StandardSpacing, r423_digits, 1, r423_demands, r321_BackslashCircleEnclosureShape);
        };
        var r321_createItalicCircledGlyphs = function (r424_digits, r424_demands) {
            var _r424_t0, _r424_t1;
            return r321_EnclosureT('circle-italic', r321_CircledBuilder, r321_ItalicSpacing, r424_digits, 1, r424_demands, r321_CircleEnclosureShape);
        };
        var r321_createSansSerifCircledGlyphs = function (r425_digits, r425_demands) {
            var _r425_t0, _r425_t1;
            return r321_EnclosureT('circle-ss', r321_CircledBuilder, r321_SansSerifSpacing, r425_digits, 1, r425_demands, r321_CircleEnclosureShape);
        };
        var r321_CircleEnclosureShape = function (r426_digits, r426_ww, r426_gap) {
            var _r426_t0, _r426_t1;
            return function () {
                var _r428_t2;
                var _r428_t1 = this;
                var r428_currentGlyph = _r428_t1;
                var _r428_t0 = r321_circleDimens(r426_digits, r426_ww);
                var r428_width = _r428_t0.width;
                var r428_sw = _r428_t0.sw;
                var r428_top = _r428_t0.top;
                var r428_bot = _r428_t0.bot;
                var r428_left = _r428_t0.left;
                var r428_right = _r428_t0.right;
                var r428_archDepthA = _r428_t0.archDepthA;
                var r428_archDepthB = _r428_t0.archDepthB;
                r428_currentGlyph.setWidth(r428_width);
                r428_currentGlyph.include(r321_OShape(r428_top, r428_bot, r428_left, r428_right, r428_sw, r428_archDepthA, r428_archDepthB));
                r428_currentGlyph.include(r321_AddEnclosureMark(r426_digits, r321_circleDimens(r426_digits, r426_ww)));
                return void 0;
            };
        };
        var r321_BackslashCircleEnclosureShape = function (r432_digits, r432_ww, r432_gap) {
            var _r432_t0, _r432_t1;
            return function () {
                var _r434_t2;
                var _r434_t1 = this;
                var r434_currentGlyph = _r434_t1;
                r434_currentGlyph.include(r321_CircleEnclosureShape(r432_digits, r432_ww, r432_gap));
                var _r434_t0 = r321_circleDimens(r432_digits, r432_ww);
                var r434_width = _r434_t0.width;
                var r434_sw = _r434_t0.sw;
                var r434_top = _r434_t0.top;
                var r434_bot = _r434_t0.bot;
                var r434_left = _r434_t0.left;
                var r434_right = _r434_t0.right;
                var r434_archDepthA = _r434_t0.archDepthA;
                var r434_archDepthB = _r434_t0.archDepthB;
                r434_currentGlyph.include(r321_intersection(r321_OShapeOutline(r434_top, r434_bot, r434_left, r434_right, r434_sw, r434_archDepthA, r434_archDepthB), r321_dispiro(r321_flat(0, r1_mix(r434_bot, r434_top, 0.77), r321_widths.center(r434_sw)), r321_curl(r434_width, r1_mix(r434_bot, r434_top, 1 - 0.77)))));
                return void 0;
            };
        };
        var r321_createBoxedGlyphs = function (r437_digits, r437_demands) {
            var _r437_t0, _r437_t1;
            return r321_EnclosureT('boxed', r321_CircledBuilder, r321_StandardSpacing, r437_digits, 1, r437_demands, r321_BoxEnclosureShape);
        };
        var r321_BoxEnclosureShape = function (r438_digits, r438_ww, r438_gap) {
            var _r438_t0, _r438_t1;
            return function () {
                var _r440_t2;
                var _r440_t1 = this;
                var r440_currentGlyph = _r440_t1;
                var _r440_t0 = r321_circleDimens(r438_digits, r438_ww);
                var r440_width = _r440_t0.width;
                var r440_mockInnerWidth = _r440_t0.mockInnerWidth;
                var r440_sw = _r440_t0.sw;
                var r440_top = _r440_t0.top;
                var r440_bot = _r440_t0.bot;
                var r440_left = _r440_t0.left;
                var r440_right = _r440_t0.right;
                r440_currentGlyph.setWidth(r440_width);
                r440_currentGlyph.include(r321_union(r321_HBar.t(r440_left, r440_right, r440_top, r440_sw), r321_HBar.b(r440_left, r440_right, r440_bot, r440_sw), r321_VBar.l(r440_left, r440_bot, r440_top, r440_sw), r321_VBar.r(r440_right, r440_bot, r440_top, r440_sw)));
                r440_currentGlyph.include(r321_AddEnclosureMark(r438_digits, r321_circleDimens(r438_digits, r438_ww)));
                return void 0;
            };
        };
        var r321_createTwoRowBoxedGlyphs = function (r444_digits, r444_demands) {
            var _r444_t0, _r444_t1;
            return r321_EnclosureT('twoRowBoxed', r321_TwoRowBoxedBuilder, r321_StandardSpacing, r444_digits, 2, r444_demands, r321_TwoRowBoxEnclosureShape);
        };
        var r321_TwoRowBoxEnclosureShape = function (r445_digits, r445_ww, r445_gap) {
            var _r445_t0, _r445_t1;
            return function () {
                var _r447_t2;
                var _r447_t1 = this;
                var r447_currentGlyph = _r447_t1;
                var _r447_t0 = r321_circleDimens(r445_digits, r445_ww);
                var r447_width = _r447_t0.width;
                var r447_mockInnerWidth = _r447_t0.mockInnerWidth;
                var r447_sw = _r447_t0.sw;
                var r447_top = _r447_t0.top;
                var r447_bot = _r447_t0.bot;
                var r447_left = _r447_t0.left;
                var r447_right = _r447_t0.right;
                r447_currentGlyph.setWidth(r447_width);
                r447_currentGlyph.include(r321_union(r321_HBar.t(r447_left, r447_right, r447_top, r447_sw), r321_HBar.b(r447_left, r447_right, r447_bot, r447_sw), r321_VBar.l(r447_left, r447_bot, r447_top, r447_sw), r321_VBar.r(r447_right, r447_bot, r447_top, r447_sw)));
                r447_currentGlyph.include(r321_AddEnclosureMarkTwoLine(r445_digits, r321_circleDimens(r445_digits, r445_ww)));
                return void 0;
            };
        };
        var r321_createDashedBoxedGlyphs = function (r451_digits, r451_demands) {
            var _r451_t0, _r451_t1;
            return r321_EnclosureT('dashed-boxed', r321_CircledBuilder, r321_StandardSpacing, r451_digits, 1, r451_demands, r321_DashedBoxEnclosureShape);
        };
        var r321_DashedBoxEnclosureShape = function (r452_digits, r452_ww, r452_cap) {
            var _r452_t0, _r452_t1;
            return function () {
                var _r454_t2;
                var _r454_t1 = this;
                var r454_currentGlyph = _r454_t1;
                var _r454_t0 = r321_circleDimens(r452_digits, r452_ww);
                var r454_width = _r454_t0.width;
                var r454_mockInnerWidth = _r454_t0.mockInnerWidth;
                var r454_sw = _r454_t0.sw;
                var r454_top = _r454_t0.top;
                var r454_bot = _r454_t0.bot;
                var r454_left = _r454_t0.left;
                var r454_right = _r454_t0.right;
                r454_currentGlyph.setWidth(r454_width);
                r454_currentGlyph.include(r321_difference(r321_union(r321_HBar.t(r454_left, r454_right, r454_top, r454_sw), r321_HBar.b(r454_left, r454_right, r454_bot, r454_sw), r321_VBar.l(r454_left, r454_bot, r454_top, r454_sw), r321_VBar.r(r454_right, r454_bot, r454_top, r454_sw)), r321_union(r321_VBar.m(r1_mix(r454_left, r454_right, 0.25), r454_bot, r454_top, r454_sw), r321_VBar.m(r1_mix(r454_left, r454_right, 0.5), r454_bot, r454_top, r454_sw), r321_VBar.m(r1_mix(r454_left, r454_right, 0.75), r454_bot, r454_top, r454_sw), r321_HBar.m(r454_left, r454_right, r1_mix(r454_bot, r454_top, 0.25), r454_sw), r321_HBar.m(r454_left, r454_right, r1_mix(r454_bot, r454_top, 0.5), r454_sw), r321_HBar.m(r454_left, r454_right, r1_mix(r454_bot, r454_top, 0.75), r454_sw))));
                r454_currentGlyph.include(r321_AddEnclosureMark(r452_digits, r321_circleDimens(r452_digits, r452_ww)));
                return void 0;
            };
        };
        var r321_createInsetCircledGlyphs = function (r458_digits, r458_demands) {
            var _r458_t0, _r458_t1;
            return r321_EnclosureT('inset-circle', r321_InsetBuilder, r321_StandardSpacing, r458_digits, 1, r458_demands, r321_InsetCircleEnclosureShape);
        };
        var r321_createInsetSansSerifCircledGlyphs = function (r459_digits, r459_demands) {
            var _r459_t0, _r459_t1;
            return r321_EnclosureT('inset-circle-ss', r321_InsetBuilder, r321_SansSerifSpacing, r459_digits, 1, r459_demands, r321_InsetCircleEnclosureShape);
        };
        var r321_InsetCircleEnclosureShape = function (r460_digits, r460_ww, r460_gap) {
            var _r460_t0, _r460_t1;
            return function () {
                var _r462_t2;
                var _r462_t1 = this;
                var r462_currentGlyph = _r462_t1;
                var _r462_t0 = r321_circleDimens(r460_digits, r460_ww);
                var r462_width = _r462_t0.width;
                var r462_sw = _r462_t0.sw;
                var r462_top = _r462_t0.top;
                var r462_bot = _r462_t0.bot;
                var r462_left = _r462_t0.left;
                var r462_right = _r462_t0.right;
                var r462_archDepthA = _r462_t0.archDepthA;
                var r462_archDepthB = _r462_t0.archDepthB;
                r462_currentGlyph.setWidth(r462_width);
                r462_currentGlyph.include(r321_OShapeOutline(r462_top, r462_bot, r462_left, r462_right, r462_sw, r462_archDepthA, r462_archDepthB));
                r462_currentGlyph.include(r321_AddEnclosureMark(r460_digits, r321_circleDimens(r460_digits, r460_ww)));
                return void 0;
            };
        };
        var r321_createInsetBoxedGlyphs = function (r466_digits, r466_demands) {
            var _r466_t0, _r466_t1;
            return r321_EnclosureT('inset-boxed', r321_InsetBuilder, r321_StandardSpacing, r466_digits, 1, r466_demands, r321_InsetBoxEnclosureShape);
        };
        var r321_InsetBoxEnclosureShape = function (r467_digits, r467_ww, r467_gap) {
            var _r467_t0, _r467_t1;
            return function () {
                var _r469_t2;
                var _r469_t1 = this;
                var r469_currentGlyph = _r469_t1;
                var _r469_t0 = r321_circleDimens(r467_digits, r467_ww);
                var r469_width = _r469_t0.width;
                var r469_top = _r469_t0.top;
                var r469_bot = _r469_t0.bot;
                var r469_left = _r469_t0.left;
                var r469_right = _r469_t0.right;
                r469_currentGlyph.setWidth(r469_width);
                r469_currentGlyph.include(r321_xn$spirooutline$1aao(r321_corner(r469_left, r469_top), r321_corner(r469_left, r469_bot), r321_corner(r469_right, r469_bot), r321_corner(r469_right, r469_top), r321_close()));
                r469_currentGlyph.include(r321_AddEnclosureMark(r467_digits, r321_circleDimens(r467_digits, r467_ww)));
                return void 0;
            };
        };
        var r321_createInsetDiamondGlyphs = function (r473_digits, r473_demands) {
            var _r473_t0, _r473_t1;
            return r321_EnclosureT('inset-diamond', r321_InsetBuilder, r321_StandardSpacing, r473_digits, 1, r473_demands, r321_InsetDiamondEnclosureShape);
        };
        var r321_InsetDiamondEnclosureShape = function (r474_digits, r474_ww, r474_gap) {
            var _r474_t0, _r474_t1;
            return function () {
                var _r476_t2;
                var _r476_t1 = this;
                var r476_currentGlyph = _r476_t1;
                var _r476_t0 = r321_circleDimens(r474_digits, r474_ww);
                var r476_width = _r476_t0.width;
                var r476_top = _r476_t0.top;
                var r476_bot = _r476_t0.bot;
                var r476_left = _r476_t0.left;
                var r476_right = _r476_t0.right;
                r476_currentGlyph.setWidth(r476_width);
                r476_currentGlyph.include(r321_xn$spirooutline$1aao(r321_corner(r476_left + r321_O, r1_mix(r476_bot, r476_top, 0.5)), r321_corner(r1_mix(r476_left, r476_right, 0.5), r476_bot + r321_O), r321_corner(r476_right - r321_O, r1_mix(r476_bot, r476_top, 0.5)), r321_corner(r1_mix(r476_left, r476_right, 0.5), r476_top - r321_O), r321_close()));
                r476_currentGlyph.include(r321_AddEnclosureMark(r474_digits, r321_circleDimens(r474_digits, r474_ww)));
                return void 0;
            };
        };
        var r321_createInsetMosaicGlyphs = function (r480_digits, r480_demands) {
            var _r480_t0, _r480_t1;
            return r321_EnclosureT('inset-mosaic', r321_InsetBuilder, r321_StandardSpacing, r480_digits, 1, r480_demands, r321_InsetMosaicEnclosureShape);
        };
        var r321_InsetMosaicEnclosureShape = function (r481_digits, r481_ww, r481_gap) {
            var _r481_t0, _r481_t1;
            return function () {
                var _r483_t2;
                var _r483_t1 = this;
                var r483_currentGlyph = _r483_t1;
                var _r483_t0 = r321_circleDimens(r481_digits, r481_ww);
                var r483_width = _r483_t0.width;
                var r483_mockInnerWidth = _r483_t0.mockInnerWidth;
                var r483_mosaicTop = _r483_t0.mosaicTop;
                var r483_mosaicBot = _r483_t0.mosaicBot;
                var r483_mosaicLeft = _r483_t0.mosaicLeft;
                var r483_mosaicRight = _r483_t0.mosaicRight;
                r483_currentGlyph.setWidth(r483_width);
                r483_currentGlyph.include(r321_ForceUpright());
                r483_currentGlyph.include(r321_xn$spirooutline$1aao(r321_corner(r483_mosaicLeft, r483_mosaicTop), r321_corner(r483_mosaicLeft, r483_mosaicBot), r321_corner(r483_mosaicRight, r483_mosaicBot), r321_corner(r483_mosaicRight, r483_mosaicTop), r321_close()));
                r483_currentGlyph.include(r321_AddEnclosureMark(r481_digits, r321_circleDimens(r481_digits, r481_ww)));
                return void 0;
            };
        };
        var r321_createDoubleCircledGlyphs = function (r488_digits, r488_demands) {
            var _r488_t0, _r488_t1;
            return r321_EnclosureT('double-circle', r321_CircledBuilder, r321_StandardSpacing, r488_digits, 1, r488_demands, r321_DoubleCircledEnclosureShape);
        };
        var r321_DoubleCircledEnclosureShape = function (r489_digits, r489_ww, r489_gap) {
            var _r489_t0, _r489_t1;
            return function () {
                var _r491_t2;
                var _r491_t1 = this;
                var r491_currentGlyph = _r491_t1;
                var _r491_t0 = r321_circleDimens(r489_digits, r489_ww, r489_ww * r489_gap);
                var r491_width = _r491_t0.width;
                var r491_mockInnerWidth = _r491_t0.mockInnerWidth;
                var r491_sw0 = _r491_t0.sw0;
                var r491_sw = _r491_t0.sw;
                var r491_top = _r491_t0.top;
                var r491_bot = _r491_t0.bot;
                var r491_left = _r491_t0.left;
                var r491_right = _r491_t0.right;
                var r491_archDepthA = _r491_t0.archDepthA;
                var r491_archDepthB = _r491_t0.archDepthB;
                r491_currentGlyph.setWidth(r491_width);
                var r491_sw1 = Math.min(r491_sw0, r491_sw / 3);
                r491_currentGlyph.include(r321_OShape(r491_top, r491_bot, r491_left, r491_right, r491_sw1, r491_archDepthA, r491_archDepthB));
                r491_currentGlyph.include(r321_OShape(r491_top - r491_sw + r491_sw1, r491_bot + r491_sw - r491_sw1, r491_left + r321_HSwToV(r491_sw) - r321_HSwToV(r491_sw1), r491_right - r321_HSwToV(r491_sw) + r321_HSwToV(r491_sw1), r491_sw1, r491_archDepthA - r491_sw + r491_sw1, r491_archDepthB - r491_sw + r491_sw1));
                r491_currentGlyph.include(r321_AddEnclosureMark(r489_digits, r321_circleDimens(r489_digits, r489_ww)));
                return void 0;
            };
        };
        var r321_BraceCrowd = function (r496_digits, r496_width) {
            var _r496_t0, _r496_t1;
            return 2.75 + r321_AdjustDigitCount(r496_digits, r496_width);
        };
        var r321_BraceScale = function (r497_digits, r497_width) {
            var _r497_t0, _r497_t1;
            return 0.65 / Math.pow(r321_AdjustDigitCount(r497_digits, r497_width), 0.5);
        };
        var r321_bracedDottdeDimens = function (r498_digits, r498_width) {
            var _r498_t0, _r498_t1;
            var r498_dscale = r1_linreg(r321_Width, 0.55, r321_UPM, 0.65, r498_width);
            var r498_pscale = r1_linreg(r321_Width, 0.6, r321_UPM, 0.75, r498_width);
            var r498_sw0 = r321_EnclosureStrokeScale(r498_dscale, r498_digits, r498_width) * r321_AdviceStroke(r321_BraceCrowd(r498_digits, r498_width)) / r321_BraceScale(r498_digits, r498_width);
            var r498_sw = Math.min(r321_Stroke, r498_sw0);
            var r498_l = Math.max(r321_SB + r321_O * 3, r498_width / 2 - Math.max(r321_Width * r498_digits, r321_CAP) / 2);
            var r498_r = r498_width - r498_l;
            var r498_mockInnerWidth = r498_width + 2 * (r321_Stroke - r498_sw) * r498_dscale;
            return {
                'width': r498_width,
                'sw': r498_sw,
                'dscale': r498_dscale,
                'pscale': r498_pscale,
                'l': r498_l,
                'r': r498_r,
                'mockInnerWidth': r498_mockInnerWidth
            };
        };
        var r321_BracedT = function (r499_rawPrefix, r499_digits, r499_demands, r499_fnBraceShape) {
            var r499_suffix, r499_ww, _r499_t3, _r499_t4, _r499_t5, _r499_t7, _r499_t8, _r499_tag9;
            var _r499_t0 = r321_circleWidthClasses;
            var _r499_t1 = _r499_t0.length;
            var _r499_t2 = 0;
            var _r499_t6 = _r499_t2 < _r499_t1;
            while (_r499_t6) {
                _r499_t3 = _r499_t0[_r499_t2];
                r499_suffix = _r499_t3[0];
                r499_ww = _r499_t3[1];
                (function () {
                    var r502_job;
                    var r502_prefix = r499_rawPrefix + r499_digits;
                    var r502_jobs = r321_CollectJobs(r1_DECOMPOSABLE, r1_CENTERED, r1_xn$ALLOWPROPORTIONAL$1aao, r502_prefix, r499_suffix, r499_demands);
                    var r502_miniatureFont = r321_CreateDerivedFontFromJobs(r502_jobs, [], function (r503_gs) {
                        var _r503_t0, _r503_t1;
                        return r321_Miniature(r503_gs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_BraceCrowd(r499_digits, r499_ww)), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_BraceScale(r499_digits, r499_ww)), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1));
                    });
                    var r502_gnb = r321_CircName(r502_prefix, '.braced-brace' + r499_digits, [], r499_suffix);
                    if (!r321_xn$queryglyph$1aao(r502_gnb))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r502_gnb, null, r499_fnBraceShape(r499_digits, r499_ww));
                    var r502_CreateGlyphImpl = function (r508_jobDecomposable, r508_job) {
                        var _r508_t1, _r508_t2;
                        var _r508_t0 = r508_job;
                        var r508_gn = _r508_t0[0];
                        var r508_unicode = _r508_t0[1];
                        var r508_parts = _r508_t0[2];
                        var r508_w = _r508_t0[3];
                        var r508_bal = _r508_t0[4];
                        var r508_baly = _r508_t0[5];
                        return !r321_xn$queryglyph$1aao(r508_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r508_gn, r508_w === r499_ww ? r508_unicode : null, function () {
                            var _r511_t2;
                            var _r511_t1 = this;
                            var r511_currentGlyph = _r511_t1;
                            var r511_dimens = r321_bracedDottdeDimens(r499_digits, r499_ww);
                            var _r511_t0 = r511_dimens;
                            var r511_width = _r511_t0.width;
                            var r511_mockInnerWidth = _r511_t0.mockInnerWidth;
                            var r511_dscale = _r511_t0.dscale;
                            r511_currentGlyph.setWidth(r511_width);
                            r511_currentGlyph.include(r321_EnclosureInner('', r508_jobDecomposable ? r502_gnb : null, r502_miniatureFont, r508_job, r511_dimens));
                            r511_currentGlyph.include(r321_xn$referglyph$1aao(r502_gnb));
                            return void 0;
                        }) : void 0;
                    };
                    var _r502_t0 = r502_jobs.decomposableJobs;
                    var _r502_t1 = _r502_t0.length;
                    var _r502_t2 = 0;
                    while (_r502_t2 < _r502_t1) {
                        r502_job = _r502_t0[_r502_t2];
                        r502_CreateGlyphImpl(true, r502_job);
                        _r502_t2 = _r502_t2 + 1;
                    }
                    var _r502_t3 = r502_jobs.nonDecomposable;
                    var _r502_t4 = _r502_t3.length;
                    var _r502_t5 = 0;
                    while (_r502_t5 < _r502_t4) {
                        r502_job = _r502_t3[_r502_t5];
                        r502_CreateGlyphImpl(false, r502_job);
                        _r502_t5 = _r502_t5 + 1;
                    }
                    return r321_applyRelations(r502_jobs.relApplications);
                }());
                _r499_t7 = _r499_t2 = _r499_t2 + 1;
                _r499_t6 = _r499_t2 < _r499_t1;
            }
            return _r499_t7;
        };
        var r321_createBracedGlyphs = function (r517_digits, r517_demands) {
            var _r517_t0, _r517_t1;
            return r321_BracedT('braced', r517_digits, r517_demands, r321_BraceShape);
        };
        var r321_BraceShape = function (r518_digits, r518_ww) {
            var _r518_t0, _r518_t1;
            return function () {
                var _r520_t2;
                var _r520_t1 = this;
                var r520_currentGlyph = _r520_t1;
                var _r520_t0 = r321_bracedDottdeDimens(r518_digits, r518_ww);
                var r520_width = _r520_t0.width;
                var r520_dscale = _r520_t0.dscale;
                var r520_pscale = _r520_t0.pscale;
                var r520_sw = _r520_t0.sw;
                var r520_l = _r520_t0.l;
                var r520_r = _r520_t0.r;
                var r520_s = r321_TanSlope * r321_SymbolMid / 2;
                var r520_p = 0.1 * Math.sqrt(Math.min(1, r520_width / (r518_digits * r321_Width)));
                r520_currentGlyph.setWidth(r520_width);
                r520_currentGlyph.include(r321_dispiro(r321_widths.lhs(r520_sw), r321_g4(r1_mix(r520_l, r520_r, r520_p) - r520_s, r321_ParenTop * r520_pscale), r321_g4.down.mid(r520_l - r520_s + r321_O, r321_SymbolMid * r520_pscale), r321_g4(r1_mix(r520_l, r520_r, r520_p) - r520_s, r321_ParenBot * r520_pscale)));
                r520_currentGlyph.include(r321_dispiro(r321_widths.rhs(r520_sw), r321_g4(r1_mix(r520_r, r520_l, r520_p) + r520_s, r321_ParenTop * r520_pscale), r321_g4.down.mid(r520_r + r520_s - r321_O, r321_SymbolMid * r520_pscale), r321_g4(r1_mix(r520_r, r520_l, r520_p) + r520_s, r321_ParenBot * r520_pscale)));
                r520_currentGlyph.include(r321_Ungizmo());
                r520_currentGlyph.include(r321_Translate(0, r321_SymbolMid - r321_SymbolMid * r520_pscale));
                r520_currentGlyph.include(r321_Regizmo());
                r520_currentGlyph.include(r321_AddEnclosureMark(r518_digits, r321_bracedDottdeDimens(r518_digits, r518_ww)));
                return void 0;
            };
        };
        var r321_createHexBracedGlyphs = function (r528_digits, r528_demands) {
            var _r528_t0, _r528_t1;
            return r321_BracedT('hex-braced', r528_digits, r528_demands, r321_HexBracedShape);
        };
        var r321_HexBracedShape = function (r529_digits, r529_ww) {
            var _r529_t0, _r529_t1;
            return function () {
                var _r531_t2;
                var _r531_t1 = this;
                var r531_currentGlyph = _r531_t1;
                var _r531_t0 = r321_bracedDottdeDimens(r529_digits, r529_ww);
                var r531_width = _r531_t0.width;
                var r531_dscale = _r531_t0.dscale;
                var r531_pscale = _r531_t0.pscale;
                var r531_sw = _r531_t0.sw;
                var r531_l = _r531_t0.l;
                var r531_r = _r531_t0.r;
                var r531_s = r321_TanSlope * r321_SymbolMid / 2;
                var r531_p = 1 / 6 * Math.sqrt(Math.min(1, r531_width / (r529_digits * r321_Width)));
                r531_currentGlyph.setWidth(r531_width);
                r531_currentGlyph.include(r321_dispiro(r321_widths.lhs(r531_sw), r321_corner(r1_mix(r531_l, r531_r, r531_p) - r531_s, r321_ParenTop * r531_pscale), r321_corner(r531_l - r531_s + r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.lhs(r531_sw), r321_corner(r531_l - r531_s + r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l)), r321_corner(r531_l - r531_s + r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.lhs(r531_sw), r321_corner(r531_l - r531_s + r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l)), r321_corner(r1_mix(r531_l, r531_r, r531_p) - r531_s, r321_ParenBot * r531_pscale)));
                r531_currentGlyph.include(r321_dispiro(r321_widths.rhs(r531_sw), r321_corner(r1_mix(r531_r, r531_l, r531_p) + r531_s, r321_ParenTop * r531_pscale), r321_corner(r531_r + r531_s - r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.rhs(r531_sw), r321_corner(r531_r + r531_s - r321_O, r321_ParenTop * r531_pscale - r531_p * (r531_r - r531_l)), r321_corner(r531_r + r531_s - r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l))));
                r531_currentGlyph.include(r321_dispiro(r321_widths.rhs(r531_sw), r321_corner(r531_r + r531_s - r321_O, r321_ParenBot * r531_pscale + r531_p * (r531_r - r531_l)), r321_corner(r1_mix(r531_r, r531_l, r531_p) + r531_s, r321_ParenBot * r531_pscale)));
                r531_currentGlyph.include(r321_Ungizmo());
                r531_currentGlyph.include(r321_Translate(0, r321_SymbolMid - r321_SymbolMid * r531_pscale));
                r531_currentGlyph.include(r321_Regizmo());
                r531_currentGlyph.include(r321_AddEnclosureMark(r529_digits, r321_bracedDottdeDimens(r529_digits, r529_ww)));
                return void 0;
            };
        };
        var r321_DottedCrowd = function (r543_digits, r543_width) {
            var _r543_t0, _r543_t1;
            return 2 + r321_AdjustDigitCount(r543_digits, r543_width);
        };
        var r321_DottedScale = function (r544_digits, r544_width) {
            var _r544_t0, _r544_t1;
            return 1 / Math.pow(r321_AdjustDigitCount(r544_digits, r544_width), 0.5);
        };
        var r321_createDottedGlyphs = function (r545_digits, r545_demands) {
            var r545_suffix, r545_ww, _r545_t3, _r545_t4, _r545_t5, _r545_t7, _r545_t8, _r545_tag9;
            var _r545_t0 = r321_circleWidthClasses;
            var _r545_t1 = _r545_t0.length;
            var _r545_t2 = 0;
            var _r545_t6 = _r545_t2 < _r545_t1;
            while (_r545_t6) {
                _r545_t3 = _r545_t0[_r545_t2];
                r545_suffix = _r545_t3[0];
                r545_ww = _r545_t3[1];
                (function () {
                    var r548_job;
                    var r548_jobs = r321_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, 'dotted' + r545_digits, r545_suffix, r545_demands);
                    var r548_miniatureFont = r321_CreateDerivedFontFromJobs(r548_jobs, [], function (r549_gs) {
                        var _r549_t0, _r549_t1;
                        return r321_Miniature(r549_gs, new r321_xn$NamedParameterPair$2Lrc9b('crowd', r321_DottedCrowd(r545_digits, r545_ww)), new r321_xn$NamedParameterPair$2Lrc9b('scale', r321_DottedScale(r545_digits, r545_ww)), new r321_xn$NamedParameterPair$2Lrc9b('sbscale', 1));
                    });
                    var r548_ensureDottedPartImpl = function (r553_item, r553_offset, r553_xCompress, r553_xTranslate) {
                        var _r553_t0, _r553_t1;
                        return function (r554_gidPart) {
                            var _r554_t0, _r554_t1;
                            var r554_gniPart = '.dotted-inner.' + r554_gidPart + '@' + [
                                r553_item,
                                r545_digits,
                                r553_offset,
                                r553_xCompress,
                                r553_xTranslate
                            ].join('/');
                            if (r321_xn$queryglyph$1aao(r554_gniPart))
                                return r554_gniPart;
                            r321_xn$createAndSaveGlyphImpl$2Lrc3c(r554_gniPart, null, function () {
                                var _r557_t1;
                                var _r557_t0 = this;
                                var r557_currentGlyph = _r557_t0;
                                r557_currentGlyph.setWidth(0);
                                r557_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                                r557_currentGlyph.include(r548_miniatureFont.queryByNameEnsured(r554_gidPart));
                                r557_currentGlyph.include(r321_Ungizmo());
                                r557_currentGlyph.include(r321_Translate(r553_offset, 0));
                                r557_currentGlyph.include(r321_Scale(r553_xCompress, 1));
                                r557_currentGlyph.include(r321_Translate(r553_xTranslate, 0));
                                r557_currentGlyph.include(r321_Regizmo());
                                return void 0;
                            });
                            return r554_gniPart;
                        };
                    };
                    var r548_createDottedGlyphImpl = function (r566_job, r566_jobDecomposable) {
                        var r566_gidPart, _r566_t4, _r566_t5;
                        var _r566_t0 = r566_job;
                        var r566_gn = _r566_t0[0];
                        var r566_unicode = _r566_t0[1];
                        var r566_partsWithDot = _r566_t0[2];
                        var r566_w = _r566_t0[3];
                        var _r566_t1 = r321_bracedDottdeDimens(1, r545_ww);
                        var r566_width = _r566_t1.width;
                        var r566_dscale = _r566_t1.dscale;
                        var r566_pscale = _r566_t1.pscale;
                        var r566_sw = _r566_t1.sw;
                        var r566_l = _r566_t1.l;
                        var r566_r = _r566_t1.r;
                        var r566_totalWidth = 0;
                        var r566_offsets = [];
                        var _r566_t2 = 0;
                        var _r566_t3 = r566_partsWithDot.length;
                        var r566_j = _r566_t2;
                        while (r566_j < _r566_t3) {
                            r566_gidPart = r566_partsWithDot[r566_j];
                            if (r566_j)
                                r566_totalWidth = r566_totalWidth - r321_SB;
                            r566_offsets[r566_j] = r566_totalWidth;
                            r566_totalWidth = r566_totalWidth + r548_miniatureFont.queryByNameEnsured(r566_gidPart).advanceWidth;
                            r566_j = r566_j + 1;
                        }
                        r566_totalWidth = r566_totalWidth - r321_SB;
                        var r566_xCompress = r566_totalWidth > r566_width ? r566_width / r566_totalWidth : 1;
                        var r566_xTranslate = (r566_totalWidth > r566_width ? 0 : r566_width / 2 - r566_totalWidth / 2) - r566_width;
                        return !r321_xn$queryglyph$1aao(r566_gn) ? r321_xn$createAndSaveGlyphImpl$2Lrc3c(r566_gn, r566_w === r545_ww ? r566_unicode : null, function () {
                            var r571_gidPart, r571_p, _r571_t3;
                            var _r571_t2 = this;
                            var r571_currentGlyph = _r571_t2;
                            r571_currentGlyph.setWidth(r566_width);
                            var r571_ps = [r548_gnSpace];
                            var _r571_t0 = 0;
                            var _r571_t1 = r566_partsWithDot.length;
                            var r571_j = _r571_t0;
                            while (r571_j < _r571_t1) {
                                r571_gidPart = r566_partsWithDot[r571_j];
                                r571_p = r321_EnsureComponentGlyphT(r571_gidPart, r548_ensureDottedPartImpl(r571_j, r566_offsets[r571_j], r566_xCompress, r566_xTranslate));
                                r571_currentGlyph.include(r321_xn$referglyph$1aao(r571_p));
                                r571_ps.push(r571_p);
                                r571_j = r571_j + 1;
                            }
                            r571_currentGlyph.include(r321_Translate(r566_width, 0));
                            if (r566_jobDecomposable)
                                r1_CvDecompose.set(r571_currentGlyph, r571_ps);
                            return void 0;
                        }) : void 0;
                    };
                    var r548_gnSpace = '.dotted-space.' + [
                        r545_digits,
                        r545_suffix
                    ].join('/');
                    if (!r321_xn$queryglyph$1aao(r548_gnSpace))
                        r321_xn$createAndSaveGlyphImpl$2Lrc3c(r548_gnSpace, null, function () {
                            var _r579_t1;
                            var _r579_t0 = this;
                            var r579_currentGlyph = _r579_t0;
                            r579_currentGlyph.setWidth(r545_ww);
                            return void 0;
                        });
                    var _r548_t0 = r548_jobs.nonDecomposable;
                    var _r548_t1 = _r548_t0.length;
                    var _r548_t2 = 0;
                    while (_r548_t2 < _r548_t1) {
                        r548_job = _r548_t0[_r548_t2];
                        r548_createDottedGlyphImpl(r548_job, false);
                        _r548_t2 = _r548_t2 + 1;
                    }
                    var _r548_t3 = r548_jobs.decomposableJobs;
                    var _r548_t4 = _r548_t3.length;
                    var _r548_t5 = 0;
                    while (_r548_t5 < _r548_t4) {
                        r548_job = _r548_t3[_r548_t5];
                        r548_createDottedGlyphImpl(r548_job, true);
                        _r548_t5 = _r548_t5 + 1;
                    }
                    return r321_applyRelations(r548_jobs.relApplications);
                }());
                _r545_t7 = _r545_t2 = _r545_t2 + 1;
                _r545_t6 = _r545_t2 < _r545_t1;
            }
            return _r545_t7;
        };
        var r321_digitGlyphNames = function (r583_j, r583_suffix) {
            var r583_digit, _r583_t3, _r583_t4;
            var r583_digitNumberToNameMap = [
                'zero',
                'one',
                'two',
                'three',
                'four',
                'five',
                'six',
                'seven',
                'eight',
                'nine'
            ];
            var r583_digits = String(r583_j).split('').map(function (r584_x) {
                var _r584_t0, _r584_t1;
                return r584_x - 0;
            });
            var r583_names = [];
            var _r583_t0 = r583_digits;
            var _r583_t1 = _r583_t0.length;
            var _r583_t2 = 0;
            while (_r583_t2 < _r583_t1) {
                r583_digit = _r583_t0[_r583_t2];
                r583_names.push(r583_digitNumberToNameMap[r583_digit] + r1_fallback(r583_suffix, r321_digitNoSuffix)(r583_digit) + '.lnum');
                _r583_t2 = _r583_t2 + 1;
            }
            return r583_names;
        };
        var r321_digitNoSuffix = function (r586_d) {
            var _r586_t0, _r586_t1;
            return '';
        };
        var r321_digitSansSerifSuffix = function (r587_d) {
            var _r587_t0, _r587_t1;
            return r587_d === 1 || r587_d === 7 ? '/sansSerif' : '';
        };
        var r321_digitHasSerif = function (r588_d) {
            var _r588_t0, _r588_t1;
            return r321_SLAB && (r588_d === 2 || r588_d === 3 || r588_d === 4 || r588_d === 5);
        };
        (function () {
            var r590_compositions = [
                [
                    169,
                    ['C'],
                    r321_WideWidth2
                ],
                [
                    127279,
                    ['revC'],
                    r321_WideWidth2
                ],
                [
                    8471,
                    ['P'],
                    r321_WideWidth2
                ],
                [
                    127246,
                    ['ccCcwArrow'],
                    r321_WideWidth2
                ],
                [
                    127343,
                    ['ccHumanFigure'],
                    r321_WideWidth2
                ],
                [
                    127405,
                    ['M'],
                    r321_WideWidth2
                ],
                [
                    9450,
                    ['zero.lnum'],
                    r321_WideWidth1
                ],
                [
                    127243,
                    ['zero.lnum'],
                    r321_WideWidth1
                ],
                [
                    127245,
                    ['zero.lnum/forceSlashed'],
                    r321_WideWidth2
                ]
            ];
            var _r590_t0 = 1;
            var _r590_t1 = 9;
            var r590_j = _r590_t0;
            while (r590_j <= _r590_t1) {
                r590_compositions.push([
                    9312 + r590_j - 1,
                    r321_digitGlyphNames(r590_j),
                    r321_WideWidth1
                ]);
                r590_j = r590_j + 1;
            }
            var _r590_t2 = 1;
            var _r590_t3 = 9;
            r590_j = _r590_t2;
            while (r590_j <= _r590_t3) {
                if (!r321_digitHasSerif(r590_j))
                    r590_compositions.push([
                        10112 + r590_j - 1,
                        r321_digitGlyphNames(r590_j, r321_digitSansSerifSuffix),
                        r321_WideWidth1
                    ]);
                r590_j = r590_j + 1;
            }
            var _r590_t4 = 0;
            var _r590_t5 = 26;
            r590_j = _r590_t4;
            while (r590_j < _r590_t5) {
                r590_compositions.push([
                    9398 + r590_j,
                    [r321_glyphStore.queryNameByUnicode('A'.charCodeAt(0) + r590_j)],
                    r321_WideWidth1
                ]);
                r590_j = r590_j + 1;
            }
            var _r590_t6 = 0;
            var _r590_t7 = 26;
            r590_j = _r590_t6;
            while (r590_j < _r590_t7) {
                r590_compositions.push([
                    9424 + r590_j,
                    [r321_glyphStore.queryNameByUnicode('a'.charCodeAt(0) + r590_j)],
                    r321_WideWidth1,
                    0.5,
                    r321_XH / 2
                ]);
                r590_j = r590_j + 1;
            }
            return r321_createCircledGlyphs(1, r590_compositions);
        }());
        (function () {
            return r321_createBackslashCircledGlyphs(1, [
                [
                    127247,
                    ['dollar'],
                    r321_WideWidth2
                ],
                [
                    127342,
                    ['C'],
                    r321_WideWidth2
                ]
            ]);
        }());
        (function () {
            return r321_createItalicCircledGlyphs(1, [
                [
                    127275,
                    ['C'],
                    r321_WideWidth1
                ],
                [
                    127276,
                    ['R'],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            var r604_compositions = [];
            var _r604_t0 = 1;
            var _r604_t1 = 9;
            var r604_j = _r604_t0;
            while (r604_j <= _r604_t1) {
                if (r321_digitHasSerif(r604_j))
                    r604_compositions.push([
                        10112 + r604_j - 1,
                        r321_digitGlyphNames(r604_j),
                        r321_WideWidth1
                    ]);
                r604_j = r604_j + 1;
            }
            return r321_createSansSerifCircledGlyphs(1, r604_compositions);
        }());
        (function () {
            var r608_compositions = [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    10121,
                    [
                        'one/sansSerif.lnum',
                        'zero.lnum'
                    ],
                    r321_WideWidth1
                ],
                [
                    127341,
                    [
                        'C',
                        'C'
                    ],
                    r321_WideWidth2
                ],
                [
                    127277,
                    [
                        'C',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127278,
                    [
                        'W',
                        'z'
                    ],
                    r321_WideWidth1
                ]
            ];
            var _r608_t0 = 10;
            var _r608_t1 = 20;
            var r608_j = _r608_t0;
            while (r608_j <= _r608_t1) {
                r608_compositions.push([
                    9312 + r608_j - 1,
                    r321_digitGlyphNames(r608_j),
                    r321_WideWidth1
                ]);
                r608_j = r608_j + 1;
            }
            var _r608_t2 = 21;
            var _r608_t3 = 35;
            r608_j = _r608_t2;
            while (r608_j <= _r608_t3) {
                r608_compositions.push([
                    12881 + r608_j - 21,
                    r321_digitGlyphNames(r608_j),
                    r321_WideWidth1
                ]);
                r608_j = r608_j + 1;
            }
            var _r608_t4 = 36;
            var _r608_t5 = 50;
            r608_j = _r608_t4;
            while (r608_j <= _r608_t5) {
                r608_compositions.push([
                    12977 + r608_j - 36,
                    r321_digitGlyphNames(r608_j),
                    r321_WideWidth1
                ]);
                r608_j = r608_j + 1;
            }
            return r321_createCircledGlyphs(2, r608_compositions);
        }());
        (function () {
            var r616_compositions = [
                [
                    9471,
                    ['zero.lnum'],
                    r321_WideWidth1
                ],
                [
                    127244,
                    ['zero.lnum'],
                    r321_WideWidth1
                ]
            ];
            var _r616_t0 = 1;
            var _r616_t1 = 9;
            var r616_j = _r616_t0;
            while (r616_j <= _r616_t1) {
                r616_compositions.push([
                    10102 + r616_j - 1,
                    r321_digitGlyphNames(r616_j),
                    r321_WideWidth1
                ]);
                r616_j = r616_j + 1;
            }
            var _r616_t2 = 1;
            var _r616_t3 = 9;
            r616_j = _r616_t2;
            while (r616_j <= _r616_t3) {
                if (!r321_digitHasSerif(r616_j))
                    r616_compositions.push([
                        10122 + r616_j - 1,
                        r321_digitGlyphNames(r616_j, r321_digitSansSerifSuffix),
                        r321_WideWidth1
                    ]);
                r616_j = r616_j + 1;
            }
            var _r616_t4 = 0;
            var _r616_t5 = 26;
            r616_j = _r616_t4;
            while (r616_j < _r616_t5) {
                r616_compositions.push([
                    127312 + r616_j,
                    [r321_glyphStore.queryNameByUnicode('A'.charCodeAt(0) + r616_j)],
                    r321_WideWidth1
                ]);
                r616_j = r616_j + 1;
            }
            return r321_createInsetCircledGlyphs(1, r616_compositions);
        }());
        (function () {
            var r624_compositions = [];
            var _r624_t0 = 1;
            var _r624_t1 = 9;
            var r624_j = _r624_t0;
            while (r624_j <= _r624_t1) {
                if (r321_digitHasSerif(r624_j))
                    r624_compositions.push([
                        10122 + r624_j - 1,
                        r321_digitGlyphNames(r624_j),
                        r321_WideWidth1
                    ]);
                r624_j = r624_j + 1;
            }
            return r321_createInsetSansSerifCircledGlyphs(1, r624_compositions);
        }());
        (function () {
            var r628_compositions = [[
                    10131,
                    [
                        'one/sansSerif.lnum',
                        'zero.lnum'
                    ],
                    r321_WideWidth1
                ]];
            var _r628_t0 = 10;
            var _r628_t1 = 10;
            var r628_j = _r628_t0;
            while (r628_j <= _r628_t1) {
                r628_compositions.push([
                    10102 + r628_j - 1,
                    r321_digitGlyphNames(r628_j),
                    r321_WideWidth1
                ]);
                r628_j = r628_j + 1;
            }
            var _r628_t2 = 11;
            var _r628_t3 = 20;
            r628_j = _r628_t2;
            while (r628_j <= _r628_t3) {
                r628_compositions.push([
                    9451 + r628_j - 11,
                    r321_digitGlyphNames(r628_j),
                    r321_WideWidth1
                ]);
                r628_j = r628_j + 1;
            }
            return r321_createInsetCircledGlyphs(2, r628_compositions);
        }());
        (function () {
            var r634_compositions = [];
            r634_compositions.push([
                null,
                ['markBaseSpace'],
                r321_WideWidth1
            ]);
            var _r634_t0 = 0;
            var _r634_t1 = 26;
            var r634_j = _r634_t0;
            while (r634_j < _r634_t1) {
                r634_compositions.push([
                    127280 + r634_j,
                    [r321_glyphStore.queryNameByUnicode('A'.charCodeAt(0) + r634_j)],
                    r321_WideWidth1
                ]);
                r634_j = r634_j + 1;
            }
            r634_compositions.push([
                127397,
                ['d'],
                r321_WideWidth1
            ]);
            return r321_createBoxedGlyphs(1, r634_compositions);
        }());
        (function () {
            return r321_createBoxedGlyphs(2, [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    127306,
                    [
                        'H',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127307,
                    [
                        'M',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127308,
                    [
                        'S',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127309,
                    [
                        'S',
                        'S'
                    ],
                    r321_WideWidth1
                ],
                [
                    127311,
                    [
                        'W',
                        'C'
                    ],
                    r321_WideWidth1
                ],
                [
                    127377,
                    [
                        'C',
                        'L'
                    ],
                    r321_WideWidth1
                ],
                [
                    127380,
                    [
                        'I',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127382,
                    [
                        'N',
                        'G'
                    ],
                    r321_WideWidth1
                ],
                [
                    127383,
                    [
                        'O',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127386,
                    [
                        'V',
                        'S'
                    ],
                    r321_WideWidth1
                ],
                [
                    127387,
                    [
                        'three.lnum',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127389,
                    [
                        'two.lnum',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127390,
                    [
                        'four.lnum',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127391,
                    [
                        'eight.lnum',
                        'K'
                    ],
                    r321_WideWidth1
                ],
                [
                    127398,
                    [
                        'H',
                        'C'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createBoxedGlyphs(3, [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    127310,
                    [
                        'P',
                        'P',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127381,
                    [
                        'N',
                        'E',
                        'W'
                    ],
                    r321_WideWidth1
                ],
                [
                    127384,
                    [
                        'S',
                        'O',
                        'S'
                    ],
                    r321_WideWidth1
                ],
                [
                    127385,
                    [
                        'U',
                        'P',
                        'exclam'
                    ],
                    r321_WideWidth1
                ],
                [
                    127392,
                    [
                        'five.lnum',
                        'period',
                        'one.lnum'
                    ],
                    r321_WideWidth1
                ],
                [
                    127393,
                    [
                        'seven.lnum',
                        'period',
                        'one.lnum'
                    ],
                    r321_WideWidth1
                ],
                [
                    127395,
                    [
                        'six.lnum',
                        'zero.lnum',
                        'P'
                    ],
                    r321_WideWidth1
                ],
                [
                    127399,
                    [
                        'H',
                        'D',
                        'R'
                    ],
                    r321_WideWidth1
                ],
                [
                    127402,
                    [
                        'S',
                        'H',
                        'V'
                    ],
                    r321_WideWidth1
                ],
                [
                    127403,
                    [
                        'U',
                        'H',
                        'D'
                    ],
                    r321_WideWidth1
                ],
                [
                    127404,
                    [
                        'V',
                        'O',
                        'D'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createBoxedGlyphs(4, [
                [
                    null,
                    ['markBaseSpace'],
                    r321_WideWidth1
                ],
                [
                    127378,
                    [
                        'C',
                        'O',
                        'O',
                        'L'
                    ],
                    r321_WideWidth1
                ],
                [
                    127379,
                    [
                        'F',
                        'R',
                        'E',
                        'E'
                    ],
                    r321_WideWidth1
                ],
                [
                    127394,
                    [
                        'two.lnum',
                        'two.lnum',
                        'period',
                        'two.lnum'
                    ],
                    r321_WideWidth1
                ],
                [
                    127396,
                    [
                        'one.lnum',
                        'two.lnum',
                        'zero.lnum',
                        'P'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createTwoRowBoxedGlyphs(3, [
                [
                    null,
                    [
                        'markBaseSpace',
                        'markBaseSpace'
                    ],
                    r321_WideWidth1
                ],
                [
                    127388,
                    [
                        'two.lnum',
                        'N',
                        'D',
                        'S',
                        'C',
                        'R'
                    ],
                    r321_WideWidth1
                ],
                [
                    127400,
                    [
                        'H',
                        'I',
                        'hyphen',
                        'R',
                        'E',
                        'S'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createTwoRowBoxedGlyphs(4, [
                [
                    null,
                    [
                        'markBaseSpace',
                        'markBaseSpace'
                    ],
                    r321_WideWidth1
                ],
                [
                    127401,
                    [
                        'L',
                        'O',
                        'S',
                        'S',
                        'L',
                        'E',
                        'S',
                        'S'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            return r321_createDashedBoxedGlyphs(3, [[
                    65532,
                    [
                        'O',
                        'B',
                        'J/noDescend'
                    ],
                    r321_WideWidth1
                ]]);
        }());
        (function () {
            var r650_compositions = [];
            var _r650_t0 = 0;
            var _r650_t1 = 26;
            var r650_j = _r650_t0;
            while (r650_j < _r650_t1) {
                r650_compositions.push([
                    127344 + r650_j,
                    [r321_glyphStore.queryNameByUnicode('A'.charCodeAt(0) + r650_j)],
                    r321_WideWidth1
                ]);
                r650_j = r650_j + 1;
            }
            return r321_createInsetBoxedGlyphs(1, r650_compositions);
        }());
        (function () {
            return r321_createInsetDiamondGlyphs(1, [[
                    65533,
                    ['question'],
                    r321_WideWidth2
                ]]);
        }());
        (function () {
            return r321_createInsetBoxedGlyphs(2, [
                [
                    127371,
                    [
                        'I',
                        'C'
                    ],
                    r321_WideWidth1
                ],
                [
                    127372,
                    [
                        'P',
                        'A'
                    ],
                    r321_WideWidth1
                ],
                [
                    127373,
                    [
                        'S',
                        'A'
                    ],
                    r321_WideWidth1
                ],
                [
                    127374,
                    [
                        'A',
                        'B'
                    ],
                    r321_WideWidth1
                ],
                [
                    127375,
                    [
                        'W',
                        'C'
                    ],
                    r321_WideWidth1
                ]
            ]);
        }());
        (function () {
            var r658_compositions = [];
            r658_compositions.push([
                129969,
                [r321_glyphStore.queryNameByUnicode(10004).replace(/.WWID$/, '.NWID')],
                r321_WideWidth4
            ]);
            r658_compositions.push([
                129972,
                [r321_glyphStore.queryNameByUnicode(8626).replace(/.WWID$/, '.NWID')],
                r321_WideWidth4
            ]);
            r658_compositions.push([
                129988,
                ['question'],
                r321_WideWidth4
            ]);
            return r321_createInsetMosaicGlyphs(1, r658_compositions);
        }());
        (function () {
            var r660_compositions = [];
            r660_compositions.push([
                null,
                ['markBaseSpace'],
                r321_WideWidth1
            ]);
            var _r660_t0 = 1;
            var _r660_t1 = 9;
            var r660_j = _r660_t0;
            while (r660_j <= _r660_t1) {
                r660_compositions.push([
                    9461 + r660_j - 1,
                    r321_digitGlyphNames(r660_j),
                    r321_WideWidth1
                ]);
                r660_j = r660_j + 1;
            }
            return r321_createDoubleCircledGlyphs(1, r660_compositions);
        }());
        (function () {
            var r664_compositions = [];
            r664_compositions.push([
                null,
                ['markBaseSpace'],
                r321_WideWidth1
            ]);
            var _r664_t0 = 10;
            var _r664_t1 = 10;
            var r664_j = _r664_t0;
            while (r664_j <= _r664_t1) {
                r664_compositions.push([
                    9461 + r664_j - 1,
                    r321_digitGlyphNames(r664_j),
                    r321_WideWidth1
                ]);
                r664_j = r664_j + 1;
            }
            return r321_createDoubleCircledGlyphs(2, r664_compositions);
        }());
        (function () {
            var r668_compositions = [];
            var _r668_t0 = 1;
            var _r668_t1 = 9;
            var r668_j = _r668_t0;
            while (r668_j <= _r668_t1) {
                r668_compositions.push([
                    9332 + r668_j - 1,
                    r321_digitGlyphNames(r668_j),
                    r321_WideWidth1
                ]);
                r668_j = r668_j + 1;
            }
            var _r668_t2 = 0;
            var _r668_t3 = 26;
            r668_j = _r668_t2;
            while (r668_j < _r668_t3) {
                r668_compositions.push([
                    9372 + r668_j,
                    [r321_glyphStore.queryNameByUnicode('a'.charCodeAt(0) + r668_j)],
                    r321_WideWidth1,
                    0.5,
                    r321_XH / 2
                ]);
                r668_j = r668_j + 1;
            }
            var _r668_t4 = 0;
            var _r668_t5 = 26;
            r668_j = _r668_t4;
            while (r668_j < _r668_t5) {
                r668_compositions.push([
                    127248 + r668_j,
                    [r321_glyphStore.queryNameByUnicode('A'.charCodeAt(0) + r668_j)],
                    r321_WideWidth1
                ]);
                r668_j = r668_j + 1;
            }
            return r321_createBracedGlyphs(1, r668_compositions);
        }());
        (function () {
            var r676_compositions = [];
            var _r676_t0 = 10;
            var _r676_t1 = 20;
            var r676_j = _r676_t0;
            while (r676_j <= _r676_t1) {
                r676_compositions.push([
                    9332 + r676_j - 1,
                    r321_digitGlyphNames(r676_j),
                    r321_WideWidth1
                ]);
                r676_j = r676_j + 1;
            }
            return r321_createBracedGlyphs(2, r676_compositions);
        }());
        (function () {
            return r321_createHexBracedGlyphs(1, [[
                    127274,
                    ['S'],
                    r321_WideWidth1
                ]]);
        }());
        (function () {
            var r682_compositions = [[
                    127232,
                    [
                        'zero.lnum',
                        'period'
                    ],
                    r321_WideWidth1
                ]];
            var _r682_t0 = 1;
            var _r682_t1 = 9;
            var r682_j = _r682_t0;
            while (r682_j <= _r682_t1) {
                r682_compositions.push([
                    9352 + r682_j - 1,
                    r321_digitGlyphNames(r682_j).concat(['period']),
                    r321_WideWidth1
                ]);
                r682_j = r682_j + 1;
            }
            return r321_createDottedGlyphs(1, r682_compositions);
        }());
        (function () {
            var r686_compositions = [];
            var _r686_t0 = 0;
            var _r686_t1 = 9;
            var r686_j = _r686_t0;
            while (r686_j <= _r686_t1) {
                r686_compositions.push([
                    127233 + r686_j,
                    r321_digitGlyphNames(r686_j).concat(['comma']),
                    r321_WideWidth1
                ]);
                r686_j = r686_j + 1;
            }
            return r321_createDottedGlyphs(1, r686_compositions);
        }());
        return function () {
            var r690_compositions = [];
            var _r690_t0 = 10;
            var _r690_t1 = 20;
            var r690_j = _r690_t0;
            while (r690_j <= _r690_t1) {
                r690_compositions.push([
                    9352 + r690_j - 1,
                    r321_digitGlyphNames(r690_j).concat(['period']),
                    r321_WideWidth1
                ]);
                r690_j = r690_j + 1;
            }
            return r321_createDottedGlyphs(2, r690_compositions);
        }();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r695_xn$Capture_Ext$2Lrc2b) {
    var _r695_t0, _r695_t1;
    r695_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r695_xn$Capture_Ext$2Lrc2b, 'Autobuild-Fractions', function (r696_xn$Capture$2Lrc8, r696_xn$ExportCapture$2Lrc4b) {
        var _r696_t8, _r696_t9;
        var _r696_t0 = r696_xn$Capture$2Lrc8;
        var r696_xn$createAndSaveGlyphImpl$2Lrc3c = _r696_t0['$createAndSaveGlyphImpl$'];
        var r696_xn$NamedParameterPair$2Lrc9b = _r696_t0['$NamedParameterPair$'];
        var r696_xn$Exec$2Lrc5 = _r696_t0['$Exec$'];
        var r696_AS_BASE = _r696_t0.AS_BASE;
        var r696_ALSO_METRICS = _r696_t0.ALSO_METRICS;
        var _r696_t1 = r696_xn$Capture$2Lrc8.Metrics;
        var r696_Width = _r696_t1.Width;
        var r696_SB = _r696_t1.SB;
        var r696_CAP = _r696_t1.CAP;
        var r696_XH = _r696_t1.XH;
        var r696_SymbolMid = _r696_t1.SymbolMid;
        var r696_Scale = _r696_t1.Scale;
        var r696_Translate = _r696_t1.Translate;
        var r696_O = _r696_t1.O;
        var r696_RightSB = _r696_t1.RightSB;
        var r696_Middle = _r696_t1.Middle;
        var r696_AdviceStroke = _r696_t1.AdviceStroke;
        var _r696_t2 = r696_xn$Capture$2Lrc8.SpiroFns;
        var _r696_t3 = r696_xn$Capture$2Lrc8.BooleFns;
        var _r696_t4 = r696_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r696_HBar = _r696_t4.HBar;
        var r696_Ungizmo = _r696_t4.Ungizmo;
        var r696_Regizmo = _r696_t4.Regizmo;
        var _r696_t5 = r696_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r696_xn$referglyph$1aao = _r696_t5['refer-glyph'];
        var r696_xn$queryglyph$1aao = _r696_t5['query-glyph'];
        var _r696_t6 = r696_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Recursive-Build'].resolve();
        var r696_Miniature = _r696_t6.Miniature;
        var r696_Thner = _r696_t6.Thner;
        var _r696_t7 = r696_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Autobuild-Enclosure-Shared'].resolve();
        var r696_CollectJobs = _r696_t7.CollectJobs;
        var r696_EnsureComponentGlyphT = _r696_t7.EnsureComponentGlyphT;
        var r696_CreateDerivedFontFromJobs = _r696_t7.CreateDerivedFontFromJobs;
        var r696_applyRelations = _r696_t7.applyRelations;
        var r696_createFracImpl = function (r701_prefix, r701_demands, r701_layout) {
            var r701_job, _r701_t6, _r701_t7;
            var r701_jobs = r696_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r701_prefix, '', r701_demands);
            var r701_miniatureFont = r696_CreateDerivedFontFromJobs(r701_jobs, [], function (r702_gs) {
                var _r702_t0, _r702_t1;
                return r696_Miniature(r702_gs, new r696_xn$NamedParameterPair$2Lrc9b('crowd', r701_layout.crowd), new r696_xn$NamedParameterPair$2Lrc9b('scale', r701_layout.scaleFactor + 0.05), new r696_xn$NamedParameterPair$2Lrc9b('mono', true), new r696_xn$NamedParameterPair$2Lrc9b('mono2', true));
            });
            var r701_FracBase = function (r707_nRows, r707_numWidth) {
                var _r707_t0, _r707_t1;
                var r707_gnFracBase = '.frac-base{' + r701_prefix + '}{' + r707_nRows + '}{' + r707_numWidth + '}';
                if (!r696_xn$queryglyph$1aao(r707_gnFracBase))
                    r696_xn$createAndSaveGlyphImpl$2Lrc3c(r707_gnFracBase, null, r701_layout.baseShape(r707_nRows, r707_numWidth));
                return r707_gnFracBase;
            };
            var r701_FracShift = function (r709_iRow, r709_nRows, r709_numWidth, r709_denWidth) {
                var _r709_t0, _r709_t1;
                var r709_gnFracShift = '.frac-shift{' + r701_prefix + '}{' + r709_iRow + '}{' + r709_nRows + '}{' + r709_numWidth + '}{' + r709_denWidth + '}';
                if (!r696_xn$queryglyph$1aao(r709_gnFracShift))
                    r696_xn$createAndSaveGlyphImpl$2Lrc3c(r709_gnFracShift, null, r701_layout.shiftShape(r709_iRow, r709_nRows, r709_numWidth, r709_denWidth));
                return r709_gnFracShift;
            };
            var r701_FracPartImpl = function (r711_subGlyphName) {
                var _r711_t0, _r711_t1;
                var r711_gnn = '.frac-inner{' + r701_prefix + '}{' + r711_subGlyphName + '}';
                if (!r696_xn$queryglyph$1aao(r711_gnn))
                    r696_xn$createAndSaveGlyphImpl$2Lrc3c(r711_gnn, null, function () {
                        var _r714_t1;
                        var _r714_t0 = this;
                        var r714_currentGlyph = _r714_t0;
                        var r714_subGlyph = r701_miniatureFont.queryByNameEnsured(r711_subGlyphName);
                        r714_currentGlyph.setWidth(0);
                        r714_currentGlyph.setMarkAnchor('fracBuildUp', 0, 0, r714_subGlyph.advanceWidth * r701_layout.scaleFactor, 0);
                        r714_currentGlyph.include(r714_subGlyph);
                        r714_currentGlyph.include(r696_Ungizmo());
                        r714_currentGlyph.include(r696_Translate(0, 0));
                        r714_currentGlyph.include(r696_Scale(r701_layout.scaleFactor));
                        r714_currentGlyph.include(r696_Regizmo());
                        return void 0;
                    });
                return r711_gnn;
            };
            var r701_createFractionImpl = function (r722_job, r722_jobDecomposable) {
                var _r722_t1, _r722_t2;
                var _r722_t0 = r722_job;
                var r722_gnf = _r722_t0[0];
                var r722_unicode = _r722_t0[1];
                var r722_gnParts = _r722_t0[2];
                return !r696_xn$queryglyph$1aao(r722_gnf) ? r696_xn$createAndSaveGlyphImpl$2Lrc3c(r722_gnf, r722_unicode, function () {
                    var r725_gnList, r725_thisRowWidth, r725_gnSubRowElement, r725_gnBase, r725_gnShift, r725_gnRowElement, _r725_t2, _r725_t3, _r725_t4, _r725_t5, _r725_t6, _r725_t7, _r725_t9;
                    var _r725_t8 = this;
                    var r725_currentGlyph = _r725_t8;
                    var r725_rows = r701_layout.breakRows(r722_gnParts);
                    var r725_decomposition = [];
                    var r725_lastRowWidth = 0;
                    var _r725_t0 = 0;
                    var _r725_t1 = r725_rows.length;
                    var r725_j = _r725_t0;
                    while (r725_j < _r725_t1) {
                        r725_gnList = [];
                        r725_thisRowWidth = 0;
                        _r725_t2 = r725_rows[r725_j];
                        _r725_t3 = _r725_t2.length;
                        _r725_t4 = 0;
                        while (_r725_t4 < _r725_t3) {
                            r725_gnSubRowElement = _r725_t2[_r725_t4];
                            r725_thisRowWidth = r725_thisRowWidth + r701_miniatureFont.queryByNameEnsured(r725_gnSubRowElement).advanceWidth;
                            r725_gnList.push(r696_EnsureComponentGlyphT(r725_gnSubRowElement, r701_FracPartImpl));
                            _r725_t4 = _r725_t4 + 1;
                        }
                        if (r725_j === 0) {
                            r725_gnBase = r701_FracBase(r725_rows.length, r725_thisRowWidth);
                            r725_currentGlyph.include(r696_xn$referglyph$1aao(r725_gnBase), r696_AS_BASE, r696_ALSO_METRICS);
                            r725_decomposition.push(r725_gnBase);
                        } else {
                            r725_gnShift = r701_FracShift(r725_j, r725_rows.length, r725_lastRowWidth, r725_thisRowWidth);
                            r725_currentGlyph.include(r696_xn$referglyph$1aao(r725_gnShift));
                            r725_decomposition.push(r725_gnShift);
                        }
                        _r725_t5 = r725_gnList;
                        _r725_t6 = _r725_t5.length;
                        _r725_t7 = 0;
                        while (_r725_t7 < _r725_t6) {
                            r725_gnRowElement = _r725_t5[_r725_t7];
                            r725_currentGlyph.include(r696_xn$referglyph$1aao(r725_gnRowElement));
                            r725_decomposition.push(r725_gnRowElement);
                            _r725_t7 = _r725_t7 + 1;
                        }
                        r725_lastRowWidth = r725_thisRowWidth;
                        r725_j = r725_j + 1;
                    }
                    if (r722_jobDecomposable)
                        r1_CvDecompose.set(r725_currentGlyph, r725_decomposition);
                    return void 0;
                }) : void 0;
            };
            var _r701_t0 = r701_jobs.nonDecomposable;
            var _r701_t1 = _r701_t0.length;
            var _r701_t2 = 0;
            while (_r701_t2 < _r701_t1) {
                r701_job = _r701_t0[_r701_t2];
                r701_createFractionImpl(r701_job, false);
                _r701_t2 = _r701_t2 + 1;
            }
            var _r701_t3 = r701_jobs.decomposableJobs;
            var _r701_t4 = _r701_t3.length;
            var _r701_t5 = 0;
            while (_r701_t5 < _r701_t4) {
                r701_job = _r701_t3[_r701_t5];
                r701_createFractionImpl(r701_job, true);
                _r701_t5 = _r701_t5 + 1;
            }
            return r696_applyRelations(r701_jobs.relApplications);
        };
        var r696_FractionLayout = function (r734_letterHeight, r734_fine, r734_scaleFactor, r734_closing) {
            var _r734_t0, _r734_t1;
            var r734_dist = r696_XH * (1 - r734_scaleFactor - r734_closing);
            var r734_partOffsetY = r734_letterHeight * r734_scaleFactor + r734_dist;
            return {
                'crowd': 3.5,
                'scaleFactor': r734_scaleFactor,
                'breakRows': function (r735_a) {
                    var _r735_t0, _r735_t1;
                    return [
                        [r735_a[0]],
                        r735_a.slice(1)
                    ];
                },
                'baseShape': function (r736_nRows, r736_firstRowWidth) {
                    var _r736_t0, _r736_t1;
                    return function () {
                        var _r738_t1;
                        var _r738_t0 = this;
                        var r738_currentGlyph = _r738_t0;
                        r738_currentGlyph.setWidth(r696_Width);
                        if (r734_fine)
                            r738_currentGlyph.include(r696_HBar.m(r696_SB, r696_RightSB, r696_SymbolMid, r734_fine * 0.75));
                        r738_currentGlyph.setBaseAnchor('fracBuildUp', r696_Middle - r736_firstRowWidth * r734_scaleFactor / 2, r696_SymbolMid + r734_dist / 2);
                        return void 0;
                    };
                },
                'shiftShape': function (r742_iRow, r742_nRows, r742_numWidth, r742_denWidth) {
                    var _r742_t0, _r742_t1;
                    return function () {
                        var _r744_t1;
                        var _r744_t0 = this;
                        var r744_currentGlyph = _r744_t0;
                        var r744_offset = -(r742_numWidth / 2 + r742_denWidth / 2) * r734_scaleFactor;
                        r744_currentGlyph.setWidth(0);
                        r744_currentGlyph.setMarkAnchor('fracBuildUp', 0, 0, r744_offset, -r734_partOffsetY);
                        return void 0;
                    };
                }
            };
        };
        var r696_ControlPictureLayout = function (r747_crowd, r747_scaleFactor, r747_pGap) {
            var _r747_t0, _r747_t1;
            var r747_gap = r696_XH * r747_pGap;
            return {
                'crowd': r747_crowd,
                'scaleFactor': r747_scaleFactor,
                'breakRows': function (r748_a) {
                    var _r748_t0, _r748_t1;
                    return r748_a.map(function (r749_x) {
                        var _r749_t0, _r749_t1;
                        return [r749_x];
                    });
                },
                'baseShape': function (r750_nRows, r750_firstRowWidth) {
                    var _r750_t0, _r750_t1;
                    return function () {
                        var _r752_t1;
                        var _r752_t0 = this;
                        var r752_currentGlyph = _r752_t0;
                        r752_currentGlyph.setWidth(r696_Width);
                        r752_currentGlyph.setBaseAnchor('fracBuildUp', r696_SB, r696_SymbolMid + (r696_CAP * r747_scaleFactor * r750_nRows + r747_gap * (r750_nRows - 1)) / 2 - r696_CAP * r747_scaleFactor);
                        return void 0;
                    };
                },
                'shiftShape': function (r755_iRow, r755_nRows, r755_numWidth, r755_denWidth) {
                    var _r755_t0, _r755_t1;
                    return function () {
                        var _r757_t1;
                        var _r757_t0 = this;
                        var r757_currentGlyph = _r757_t0;
                        var r757_startPos = function (r758_w, r758_p) {
                            var _r758_t0, _r758_t1;
                            return r696_SB + (r696_RightSB - r696_SB - r758_w * r747_scaleFactor) * r758_p / (r755_nRows - 1);
                        };
                        var r757_offset = r757_startPos(r755_denWidth, r755_iRow) - r757_startPos(r755_numWidth, r755_iRow - 1) - r755_numWidth * r747_scaleFactor;
                        r757_currentGlyph.setWidth(0);
                        r757_currentGlyph.setMarkAnchor('fracBuildUp', 0, 0, r757_offset, -(r696_CAP * r747_scaleFactor + r747_gap));
                        return void 0;
                    };
                }
            };
        };
        var r696_createFractions = function (r761_records) {
            var _r761_t0, _r761_t1;
            return r696_createFracImpl('frac', r761_records, r696_FractionLayout(r696_CAP, r696_AdviceStroke(3), 0.55, 0.05));
        };
        var r696_createFractionsSmall = function (r762_records) {
            var _r762_t0, _r762_t1;
            return r696_createFracImpl('fracSmall', r762_records, r696_FractionLayout(r696_XH, r696_AdviceStroke(3), 0.55, 0.05));
        };
        var r696_createControlPictures2 = function (r763_records) {
            var _r763_t0, _r763_t1;
            return r696_createFracImpl('ctrlPict2', r763_records, r696_ControlPictureLayout(3.75, 0.55, 0.2));
        };
        var r696_createControlPictures3 = function (r764_records) {
            var _r764_t0, _r764_t1;
            return r696_createFracImpl('ctrlPict3', r764_records, r696_ControlPictureLayout(5, 0.375, 0.1));
        };
        r696_createFractions([
            [
                188,
                [
                    'one.lnum',
                    'four.lnum'
                ]
            ],
            [
                189,
                [
                    'one.lnum',
                    'two.lnum'
                ]
            ],
            [
                190,
                [
                    'three.lnum',
                    'four.lnum'
                ]
            ],
            [
                8528,
                [
                    'one.lnum',
                    'seven.lnum'
                ]
            ],
            [
                8529,
                [
                    'one.lnum',
                    'nine.lnum'
                ]
            ],
            [
                8530,
                [
                    'one.lnum',
                    'one.lnum',
                    'zero.lnum'
                ]
            ],
            [
                8531,
                [
                    'one.lnum',
                    'three.lnum'
                ]
            ],
            [
                8532,
                [
                    'two.lnum',
                    'three.lnum'
                ]
            ],
            [
                8533,
                [
                    'one.lnum',
                    'five.lnum'
                ]
            ],
            [
                8534,
                [
                    'two.lnum',
                    'five.lnum'
                ]
            ],
            [
                8535,
                [
                    'three.lnum',
                    'five.lnum'
                ]
            ],
            [
                8536,
                [
                    'four.lnum',
                    'five.lnum'
                ]
            ],
            [
                8537,
                [
                    'one.lnum',
                    'six.lnum'
                ]
            ],
            [
                8538,
                [
                    'five.lnum',
                    'six.lnum'
                ]
            ],
            [
                8539,
                [
                    'one.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8540,
                [
                    'three.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8541,
                [
                    'five.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8542,
                [
                    'seven.lnum',
                    'eight.lnum'
                ]
            ],
            [
                8585,
                [
                    'zero.lnum',
                    'three.lnum'
                ]
            ],
            [
                8525,
                [
                    'A',
                    'S'
                ]
            ]
        ]);
        r696_createFractionsSmall([
            [
                8448,
                [
                    'a',
                    'c'
                ]
            ],
            [
                8449,
                [
                    'a',
                    's'
                ]
            ],
            [
                8453,
                [
                    'c',
                    'o'
                ]
            ],
            [
                8454,
                [
                    'c',
                    'u'
                ]
            ]
        ]);
        r696_createControlPictures2([
            [
                57505,
                [
                    'L',
                    'N'
                ]
            ],
            [
                57507,
                [
                    'C',
                    'N'
                ]
            ],
            [
                9224,
                [
                    'B',
                    'S'
                ]
            ],
            [
                9225,
                [
                    'H',
                    'T'
                ]
            ],
            [
                9226,
                [
                    'L',
                    'F'
                ]
            ],
            [
                9227,
                [
                    'V',
                    'T'
                ]
            ],
            [
                9228,
                [
                    'F',
                    'F'
                ]
            ],
            [
                9229,
                [
                    'C',
                    'R'
                ]
            ],
            [
                9230,
                [
                    'S',
                    'O'
                ]
            ],
            [
                9231,
                [
                    'S',
                    'I'
                ]
            ],
            [
                9241,
                [
                    'E',
                    'M'
                ]
            ],
            [
                9244,
                [
                    'F',
                    'S'
                ]
            ],
            [
                9245,
                [
                    'G',
                    'S'
                ]
            ],
            [
                9246,
                [
                    'R',
                    'S'
                ]
            ],
            [
                9247,
                [
                    'U',
                    'S'
                ]
            ],
            [
                9248,
                [
                    'S',
                    'P'
                ]
            ],
            [
                9252,
                [
                    'N',
                    'L'
                ]
            ]
        ]);
        return r696_createControlPictures3([
            [
                9216,
                [
                    'N',
                    'U',
                    'L'
                ]
            ],
            [
                9217,
                [
                    'S',
                    'O',
                    'H'
                ]
            ],
            [
                9218,
                [
                    'S',
                    'T',
                    'X'
                ]
            ],
            [
                9219,
                [
                    'E',
                    'T',
                    'X'
                ]
            ],
            [
                9220,
                [
                    'E',
                    'O',
                    'T'
                ]
            ],
            [
                9221,
                [
                    'E',
                    'N',
                    'Q'
                ]
            ],
            [
                9222,
                [
                    'A',
                    'C',
                    'K'
                ]
            ],
            [
                9223,
                [
                    'B',
                    'E',
                    'L'
                ]
            ],
            [
                9232,
                [
                    'D',
                    'L',
                    'E'
                ]
            ],
            [
                9233,
                [
                    'D',
                    'C',
                    'one.lnum'
                ]
            ],
            [
                9234,
                [
                    'D',
                    'C',
                    'two.lnum'
                ]
            ],
            [
                9235,
                [
                    'D',
                    'C',
                    'three.lnum'
                ]
            ],
            [
                9236,
                [
                    'D',
                    'C',
                    'four.lnum'
                ]
            ],
            [
                9237,
                [
                    'N',
                    'A',
                    'K'
                ]
            ],
            [
                9238,
                [
                    'S',
                    'Y',
                    'N'
                ]
            ],
            [
                9239,
                [
                    'E',
                    'T',
                    'B'
                ]
            ],
            [
                9240,
                [
                    'C',
                    'A',
                    'N'
                ]
            ],
            [
                9242,
                [
                    'S',
                    'U',
                    'B'
                ]
            ],
            [
                9243,
                [
                    'E',
                    'S',
                    'C'
                ]
            ],
            [
                9249,
                [
                    'D',
                    'E',
                    'L'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r767_xn$Capture_Ext$2Lrc2b) {
    var _r767_t0, _r767_t1;
    r767_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r767_xn$Capture_Ext$2Lrc2b, 'AutoBuild-Accented-Equal', function (r768_xn$Capture$2Lrc8, r768_xn$ExportCapture$2Lrc4b) {
        var _r768_t9, _r768_t10;
        var _r768_t0 = r768_xn$Capture$2Lrc8;
        var r768_xn$createAndSaveGlyphImpl$2Lrc3c = _r768_t0['$createAndSaveGlyphImpl$'];
        var r768_xn$NamedParameterPair$2Lrc9b = _r768_t0['$NamedParameterPair$'];
        var r768_xn$Exec$2Lrc5 = _r768_t0['$Exec$'];
        var _r768_t1 = r768_xn$Capture$2Lrc8.Metrics;
        var r768_Width = _r768_t1.Width;
        var r768_CAP = _r768_t1.CAP;
        var r768_XH = _r768_t1.XH;
        var r768_SymbolMid = _r768_t1.SymbolMid;
        var r768_OperTop = _r768_t1.OperTop;
        var r768_OperBot = _r768_t1.OperBot;
        var r768_Scale = _r768_t1.Scale;
        var r768_Translate = _r768_t1.Translate;
        var r768_Middle = _r768_t1.Middle;
        var _r768_t2 = r768_xn$Capture$2Lrc8.SpiroFns;
        var _r768_t3 = r768_xn$Capture$2Lrc8.BooleFns;
        var _r768_t4 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r768_Ungizmo = _r768_t4.Ungizmo;
        var r768_Regizmo = _r768_t4.Regizmo;
        var _r768_t5 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r768_xn$referglyph$1aao = _r768_t5['refer-glyph'];
        var r768_xn$queryglyph$1aao = _r768_t5['query-glyph'];
        var _r768_t6 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Recursive-Build'].resolve();
        var r768_Miniature = _r768_t6.Miniature;
        var _r768_t7 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Above'].resolve();
        var r768_aboveMarkBot = _r768_t7.aboveMarkBot;
        var _r768_t8 = r768_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Autobuild-Enclosure-Shared'].resolve();
        var r768_CollectJobs = _r768_t8.CollectJobs;
        var r768_CreateDerivedFontFromJobs = _r768_t8.CreateDerivedFontFromJobs;
        var r768_EnsureComponentGlyphT = _r768_t8.EnsureComponentGlyphT;
        var r768_applyRelations = _r768_t8.applyRelations;
        var r768_createAccentedOp = function (r774_gnBase, r774_crowd, r774_scale, r774_shiftX, r774_shiftY, r774_demands) {
            var r774_job, _r774_t6, _r774_t7;
            var r774_prefix = 'accent-op{' + r774_gnBase + '}{' + [
                r774_crowd,
                r774_scale,
                r774_shiftX,
                r774_shiftY
            ].join('-') + '}';
            var r774_jobs = r768_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$MONOSPACEONLY$5Frx, r774_prefix, '', r774_demands);
            var r774_dFont = r768_CreateDerivedFontFromJobs(r774_jobs, [], function (r775_gs) {
                var _r775_t0, _r775_t1;
                return r768_Miniature(r775_gs, new r768_xn$NamedParameterPair$2Lrc9b('crowd', r774_crowd), new r768_xn$NamedParameterPair$2Lrc9b('scale', r774_scale), new r768_xn$NamedParameterPair$2Lrc9b('mono', true), new r768_xn$NamedParameterPair$2Lrc9b('mono2', true));
            });
            var r774_ComponentImpl = function (r780_offset, r780_totalWidth) {
                var _r780_t0, _r780_t1;
                return function (r781_gidPart) {
                    var _r781_t0, _r781_t1;
                    var r781_gni = '.accented-op-part.' + r781_gidPart + '@' + [
                        r774_prefix,
                        r780_offset,
                        r780_totalWidth
                    ].join('/');
                    if (r768_xn$queryglyph$1aao(r781_gni))
                        return r781_gni;
                    r768_xn$createAndSaveGlyphImpl$2Lrc3c(r781_gni, null, function () {
                        var _r784_t1;
                        var _r784_t0 = this;
                        var r784_currentGlyph = _r784_t0;
                        r784_currentGlyph.setWidth(0);
                        r784_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                        r784_currentGlyph.include(r774_dFont.queryByNameEnsured(r781_gidPart));
                        r784_currentGlyph.include(r768_Ungizmo());
                        r784_currentGlyph.include(r768_Translate(-r780_totalWidth / 2 + r780_offset, 0));
                        r784_currentGlyph.include(r768_Scale(r774_scale));
                        r784_currentGlyph.include(r768_Translate(r768_Middle + r774_shiftX - r768_Width, r774_shiftY));
                        r784_currentGlyph.include(r768_Regizmo());
                        return void 0;
                    });
                    return r781_gni;
                };
            };
            var r774_createAccentedOpImpl = function (r793_job, r793_decomposable) {
                var r793_gidPart, _r793_t3, _r793_t4;
                var _r793_t0 = r793_job;
                var r793_gn = _r793_t0[0];
                var r793_unicode = _r793_t0[1];
                var r793_parts = _r793_t0[2];
                var r793_totalWidth = 0;
                var r793_offsets = [];
                var _r793_t1 = 0;
                var _r793_t2 = r793_parts.length;
                var r793_j = _r793_t1;
                while (r793_j < _r793_t2) {
                    r793_gidPart = r793_parts[r793_j];
                    r793_offsets[r793_j] = r793_totalWidth;
                    r793_totalWidth = r793_totalWidth + r774_dFont.queryByNameEnsured(r793_gidPart).advanceWidth;
                    r793_j = r793_j + 1;
                }
                return !r768_xn$queryglyph$1aao(r793_gn) ? r768_xn$createAndSaveGlyphImpl$2Lrc3c(r793_gn, r793_unicode, function () {
                    var r798_gidPart, r798_p, _r798_t3;
                    var _r798_t2 = this;
                    var r798_currentGlyph = _r798_t2;
                    r798_currentGlyph.setWidth(r768_Width);
                    var r798_ps = [r774_gnBase];
                    var _r798_t0 = 0;
                    var _r798_t1 = r793_parts.length;
                    var r798_j = _r798_t0;
                    while (r798_j < _r798_t1) {
                        r798_gidPart = r793_parts[r798_j];
                        r798_p = r768_EnsureComponentGlyphT(r798_gidPart, r774_ComponentImpl(r793_offsets[r798_j], r793_totalWidth));
                        r798_currentGlyph.include(r768_xn$referglyph$1aao(r798_p));
                        r798_ps.push(r798_p);
                        r798_j = r798_j + 1;
                    }
                    r798_currentGlyph.include(r768_Translate(r768_Width, 0));
                    r798_currentGlyph.include(r768_xn$referglyph$1aao(r774_gnBase));
                    if (r793_decomposable)
                        r1_CvDecompose.set(r798_currentGlyph, r798_ps);
                    return void 0;
                }) : void 0;
            };
            var _r774_t0 = r774_jobs.nonDecomposable;
            var _r774_t1 = _r774_t0.length;
            var _r774_t2 = 0;
            while (_r774_t2 < _r774_t1) {
                r774_job = _r774_t0[_r774_t2];
                r774_createAccentedOpImpl(r774_job, false);
                _r774_t2 = _r774_t2 + 1;
            }
            var _r774_t3 = r774_jobs.decomposableJobs;
            var _r774_t4 = _r774_t3.length;
            var _r774_t5 = 0;
            while (_r774_t5 < _r774_t4) {
                r774_job = _r774_t3[_r774_t5];
                r774_createAccentedOpImpl(r774_job, true);
                _r774_t5 = _r774_t5 + 1;
            }
            return r768_applyRelations(r774_jobs.relApplications);
        };
        r768_createAccentedOp('equal', 7, 0.4, 0, r768_aboveMarkBot, [
            [
                8798,
                ['m']
            ],
            [
                8799,
                [
                    'question/hookPart',
                    'question/dotPart'
                ]
            ]
        ]);
        r768_createAccentedOp('equal', 5, 0.8, 0, r768_aboveMarkBot, [[
                8792,
                ['symbolMidTie']
            ]]);
        r768_createAccentedOp('equal', 7, 0.5, 0, r768_aboveMarkBot - (r768_SymbolMid - r768_XH / 2), [
            [
                8793,
                ['triangularWedge.NWID']
            ],
            [
                8794,
                ['triangularVee.NWID']
            ],
            [
                8795,
                ['blackStar.NWID']
            ],
            [
                8796,
                ['whiteTriangleUp.NWID']
            ],
            [
                10862,
                ['opAsterisk']
            ]
        ]);
        r768_createAccentedOp('sqrt', 5, 0.5, -r768_Width / 4, r1_mix(r768_OperBot, r768_OperTop, 0.6), [
            [
                8731,
                ['three.lnum']
            ],
            [
                8732,
                ['four.lnum']
            ]
        ]);
        r768_createAccentedOp('equal', 8, 0.3, 0, r768_aboveMarkBot, [[
                8797,
                [
                    'd',
                    'e',
                    'f'
                ]
            ]]);
        r768_createAccentedOp('markDemoBaseSpace', 6, 0.4, 0, r768_aboveMarkBot - (r768_CAP * 0.4 - r768_XH * 0.4), [[
                174,
                [
                    'R',
                    'combRingCapDiv1'
                ]
            ]]);
        r768_createAccentedOp('markDemoBaseSpace', 6, 0.45, 0, r768_aboveMarkBot - (r768_CAP * 0.45 - r768_XH * 0.45), [
            [
                8482,
                [
                    'T',
                    'M'
                ]
            ],
            [
                8480,
                [
                    'S',
                    'M'
                ]
            ],
            [
                127338,
                [
                    'M',
                    'C'
                ]
            ],
            [
                127339,
                [
                    'M',
                    'D'
                ]
            ],
            [
                127340,
                [
                    'M',
                    'R'
                ]
            ]
        ]);
        return r768_createAccentedOp('markDemoBaseSpace', 6.5, 0.35, 0, r768_aboveMarkBot - (r768_CAP * 0.35 - r768_XH * 0.35), [
            [
                8481,
                [
                    'T',
                    'E',
                    'L'
                ]
            ],
            [
                8507,
                [
                    'F',
                    'A',
                    'X'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r809_xn$Capture_Ext$2Lrc2b) {
    var _r809_t0, _r809_t1;
    r809_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r809_xn$Capture_Ext$2Lrc2b, 'Autobuild-Ligatures', function (r810_xn$Capture$2Lrc8, r810_xn$ExportCapture$2Lrc4b) {
        var _r810_t8, _r810_t9;
        var _r810_t0 = r810_xn$Capture$2Lrc8;
        var r810_xn$createAndSaveGlyphImpl$2Lrc3c = _r810_t0['$createAndSaveGlyphImpl$'];
        var r810_xn$NamedParameterPair$2Lrc9b = _r810_t0['$NamedParameterPair$'];
        var r810_xn$Exec$2Lrc5 = _r810_t0['$Exec$'];
        var r810_para = _r810_t0.para;
        var r810_AS_BASE = _r810_t0.AS_BASE;
        var r810_ALSO_METRICS = _r810_t0.ALSO_METRICS;
        var _r810_t1 = r810_xn$Capture$2Lrc8.Metrics;
        var r810_Width = _r810_t1.Width;
        var r810_SB = _r810_t1.SB;
        var r810_Scale = _r810_t1.Scale;
        var r810_Translate = _r810_t1.Translate;
        var r810_WideWidth1 = _r810_t1.WideWidth1;
        var r810_WideWidth2 = _r810_t1.WideWidth2;
        var r810_StrokeWidthBlend = _r810_t1.StrokeWidthBlend;
        var _r810_t2 = r810_xn$Capture$2Lrc8.SpiroFns;
        var _r810_t3 = r810_xn$Capture$2Lrc8.BooleFns;
        var _r810_t4 = r810_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r810_Ungizmo = _r810_t4.Ungizmo;
        var r810_Regizmo = _r810_t4.Regizmo;
        var r810_xn$withtransform$5sIl = _r810_t4['with-transform'];
        var _r810_t5 = r810_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r810_xn$referglyph$1aao = _r810_t5['refer-glyph'];
        var r810_xn$queryglyph$1aao = _r810_t5['query-glyph'];
        var _r810_t6 = r810_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Recursive-Build'].resolve();
        var r810_Thinner = _r810_t6.Thinner;
        var _r810_t7 = r810_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Autobuild-Enclosure-Shared'].resolve();
        var r810_CollectJobs = _r810_t7.CollectJobs;
        var r810_CreateDerivedFontFromJobs = _r810_t7.CreateDerivedFontFromJobs;
        var r810_EnsureComponentGlyphT = _r810_t7.EnsureComponentGlyphT;
        var r810_applyRelations = _r810_t7.applyRelations;
        var r810_createLigatures = function (r815_prefix, r815_fAlwaysCompress, r815__shrink1, r815__shrinkN, r815_wadj1, r815_wadjN, r815_kKern, r815_demands) {
            var _r815_t0, _r815_t1, _r815_t2, _r815_tag3;
            return function () {
                var r818_FMosaicWide, r818_MosaicNameSuffix, r818_MosaicWidth, r818_MosaicWidthScalar, _r818_t3, _r818_t5, _r818_t6, _r818_tag7;
                var r818_WidthKinds = [
                    [
                        0,
                        '.NWID',
                        r810_xn$Capture$2Lrc8.Metrics.Width,
                        1
                    ],
                    [
                        1,
                        '.WWID',
                        r810_xn$Capture$2Lrc8.Metrics.WideWidth0,
                        2
                    ]
                ];
                var _r818_t0 = r818_WidthKinds;
                var _r818_t1 = _r818_t0.length;
                var _r818_t2 = 0;
                var _r818_t4 = _r818_t2 < _r818_t1;
                while (_r818_t4) {
                    _r818_t3 = _r818_t0[_r818_t2];
                    r818_FMosaicWide = _r818_t3[0];
                    r818_MosaicNameSuffix = _r818_t3[1];
                    r818_MosaicWidth = _r818_t3[2];
                    r818_MosaicWidthScalar = _r818_t3[3];
                    (function () {
                        var r821_job;
                        var r821_MosaicDesiredWidth = r810_WideWidth2;
                        var r821_MosaicMiddle = r818_MosaicWidth / 2;
                        var r821_MosaicUnitWidth = r818_MosaicWidth / r818_MosaicWidthScalar;
                        var r821_MangleUnicode = function (r822_unicode, r822__desiredOverride) {
                            var _r822_t0, _r822_t1;
                            return r818_MosaicWidth === (r822__desiredOverride || r821_MosaicDesiredWidth) ? r822_unicode : void 0;
                        };
                        var r821_MangleName = function (r823_name) {
                            var _r823_t0, _r823_t1;
                            return r823_name + r818_MosaicNameSuffix;
                        };
                        var r821_ww = r818_FMosaicWide ? r818_MosaicWidth : r818_MosaicWidth * r810_para.diversityM;
                        var r821_jobs = r810_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r815_prefix, r818_MosaicNameSuffix, r815_demands);
                        var r821_shrink1 = r818_FMosaicWide && !r815_fAlwaysCompress ? 1 : r1_clamp(0, 1, r815__shrink1 * r1_mix(r810_Width, r821_ww, 0.5) / r810_Width);
                        var r821_shrinkN = r818_FMosaicWide && !r815_fAlwaysCompress ? 1 : r1_clamp(0, 1, r815__shrinkN * r1_mix(r810_Width, r821_ww, 0.5) / r810_Width);
                        var r821_df1 = r810_CreateDerivedFontFromJobs(r821_jobs, [], function (r824_gs) {
                            var _r824_t0, _r824_t1;
                            return r810_Thinner(r824_gs, r821_shrink1);
                        });
                        var r821_dfN = r810_CreateDerivedFontFromJobs(r821_jobs, [], function (r825_gs) {
                            var _r825_t0, _r825_t1;
                            return r810_Thinner(r825_gs, r821_shrinkN);
                        });
                        var r821_LigaturePlaceholderImpl = function (r826_aw, r826_markPlacement) {
                            var _r826_t0, _r826_t1;
                            var r826_gni = '.ligature-placeholder@' + [
                                r826_aw,
                                r826_markPlacement
                            ].join('/');
                            if (r810_xn$queryglyph$1aao(r826_gni))
                                return r826_gni;
                            r810_xn$createAndSaveGlyphImpl$2Lrc3c(r826_gni, null, function () {
                                var _r829_t1;
                                var _r829_t0 = this;
                                var r829_currentGlyph = _r829_t0;
                                r829_currentGlyph.setWidth(r826_aw);
                                r829_currentGlyph.setBaseAnchor('enclosureInner', r826_markPlacement, 0);
                                return void 0;
                            });
                            return r826_gni;
                        };
                        var r821_LigaturePartImpl = function (r832_df, r832_offset1, r832_compress, r832_markDist) {
                            var _r832_t0, _r832_t1;
                            return function (r833_gidPart) {
                                var _r833_t0, _r833_t1;
                                var r833_gni = '.ligature-part.' + r833_gidPart + '@' + [
                                    r815_prefix,
                                    r832_compress,
                                    r832_offset1,
                                    r832_markDist
                                ].join('/');
                                if (r810_xn$queryglyph$1aao(r833_gni))
                                    return r833_gni;
                                r810_xn$createAndSaveGlyphImpl$2Lrc3c(r833_gni, null, function () {
                                    var _r836_t1;
                                    var _r836_t0 = this;
                                    var r836_currentGlyph = _r836_t0;
                                    r836_currentGlyph.setWidth(0);
                                    r836_currentGlyph.include(r832_df.queryByNameEnsured(r833_gidPart));
                                    r836_currentGlyph.include(r810_Ungizmo());
                                    r836_currentGlyph.include(r810_Translate(r832_offset1, 0));
                                    r836_currentGlyph.include(r810_Scale(r832_compress, 1));
                                    r836_currentGlyph.include(r810_Regizmo());
                                    r836_currentGlyph.setMarkAnchor('enclosureInner', 0, 0, r832_markDist, 0);
                                    return void 0;
                                });
                                return r833_gni;
                            };
                        };
                        var r821_LigatureImpl = function (r844_job, r844_decomposable) {
                            var r844_i, r844_component, r844_sumChildrenWidth, r844_dfg, r844_glyphWidth, r844_compressRefWidth, r844_kern, r844_estKernedUncompressedWidth, r844_cycle, r844_compress, _r844_t3, _r844_t4, _r844_t5, _r844_t6, _r844_t7, _r844_t8, _r844_t9, _r844_t10, _r844_t11, _r844_t12;
                            var _r844_t0 = r844_job;
                            var r844_gn = _r844_t0[0];
                            var r844_unicode = _r844_t0[1];
                            var r844_components = _r844_t0[2];
                            var r844_desiredWidth = _r844_t0[3];
                            var r844_ps = [];
                            var r844_dfgs = [];
                            var _r844_t1 = r844_components.entries()[Symbol.iterator]();
                            var _r844_t2 = void 0;
                            while (!(_r844_t2 = _r844_t1.next()).done) {
                                _r844_t3 = _r844_t2.value;
                                r844_i = _r844_t3[0];
                                r844_component = _r844_t3[1];
                                r844_dfgs[r844_i] = (r844_i ? r821_dfN : r821_df1).queryByNameEnsured(r844_component);
                            }
                            if (!r810_xn$queryglyph$1aao(r844_gn))
                                if (r818_FMosaicWide && !r815_fAlwaysCompress)
                                    return r810_xn$createAndSaveGlyphImpl$2Lrc3c(r844_gn, r821_MangleUnicode(r844_unicode, r844_desiredWidth), function () {
                                        var r848_i, r848_component, _r848_t2, _r848_t4, _r848_t5, _r848_tag6;
                                        var _r848_t3 = this;
                                        var r848_currentGlyph = _r848_t3;
                                        var r848_decomposition = [];
                                        var r848_aw = 0;
                                        var _r848_t0 = r844_components.entries()[Symbol.iterator]();
                                        var _r848_t1 = void 0;
                                        while (!(_r848_t1 = _r848_t0.next()).done) {
                                            _r848_t2 = _r848_t1.value;
                                            r848_i = _r848_t2[0];
                                            r848_component = _r848_t2[1];
                                            (function () {
                                                var r851_componentG = r810_xn$queryglyph$1aao(r848_component);
                                                r848_currentGlyph.include(r810_xn$withtransform$5sIl(r810_Translate(r848_aw, 0), r810_xn$referglyph$1aao(r848_component)));
                                                r848_aw = r848_aw + r851_componentG.advanceWidth;
                                                return r848_decomposition.push(r848_component);
                                            }());
                                        }
                                        r848_currentGlyph.setWidth(r848_aw);
                                        if (r844_decomposable)
                                            r1_CvDecompose.set(r848_currentGlyph, r848_decomposition);
                                        return void 0;
                                    });
                                else {
                                    r844_sumChildrenWidth = 0;
                                    _r844_t4 = r844_dfgs.entries()[Symbol.iterator]();
                                    _r844_t5 = void 0;
                                    while (!(_r844_t5 = _r844_t4.next()).done) {
                                        _r844_t6 = _r844_t5.value;
                                        r844_i = _r844_t6[0];
                                        r844_dfg = _r844_t6[1];
                                        r844_sumChildrenWidth = r844_sumChildrenWidth + r844_dfg.advanceWidth * (r844_i ? r815_wadjN : r815_wadj1);
                                    }
                                    r844_glyphWidth = r844_sumChildrenWidth < r821_ww ? r818_MosaicWidth : r821_ww;
                                    r844_compressRefWidth = (r844_glyphWidth - r810_SB * 1.25) / (r844_glyphWidth - r810_SB * 2) * r844_glyphWidth;
                                    r844_kern = r815_kKern * r844_glyphWidth;
                                    r844_estKernedUncompressedWidth = r844_sumChildrenWidth - r844_kern * (r844_dfgs.length - 1);
                                    if (r844_dfgs.length > 1) {
                                        _r844_t7 = 0;
                                        _r844_t8 = 4;
                                        r844_cycle = _r844_t7;
                                        while (r844_cycle < _r844_t8) {
                                            if (r815_kKern === 0)
                                                r844_kern = r1_clamp(0, r810_SB * 7 / 8, (r844_estKernedUncompressedWidth - r844_compressRefWidth) / (r844_dfgs.length - 1));
                                            r844_estKernedUncompressedWidth = r844_sumChildrenWidth - r844_kern * (r844_dfgs.length - 1);
                                            r844_cycle = r844_cycle + 1;
                                        }
                                    }
                                    r844_compress = r1_clamp(0, 1, r844_compressRefWidth / r844_estKernedUncompressedWidth);
                                    return r810_xn$createAndSaveGlyphImpl$2Lrc3c(r844_gn, r821_MangleUnicode(r844_unicode, r844_desiredWidth), function () {
                                        var r859_i, r859_component, _r859_t2, _r859_t4, _r859_t5, _r859_tag6;
                                        var _r859_t3 = this;
                                        var r859_currentGlyph = _r859_t3;
                                        var r859_decomposition = [];
                                        var r859_baseOffset = r844_glyphWidth / 2 - r844_estKernedUncompressedWidth * r844_compress / 2;
                                        var _r859_t0 = r844_components.entries()[Symbol.iterator]();
                                        var _r859_t1 = void 0;
                                        while (!(_r859_t1 = _r859_t0.next()).done) {
                                            _r859_t2 = _r859_t1.value;
                                            r859_i = _r859_t2[0];
                                            r859_component = _r859_t2[1];
                                            (function () {
                                                var r862_placeholder;
                                                var r862_componentAdvance = r844_compress * (r844_dfgs[r859_i].advanceWidth * (r859_i ? r815_wadjN : r815_wadj1) - r844_kern);
                                                var r862_componentRefOffset = r844_dfgs[r859_i].advanceWidth * ((r859_i ? r815_wadjN : r815_wadj1) - 1) / 2;
                                                if (r859_i === 0) {
                                                    r862_placeholder = r821_LigaturePlaceholderImpl(r844_glyphWidth, r859_baseOffset);
                                                    r859_decomposition.push(r862_placeholder);
                                                    r859_currentGlyph.include(r810_xn$referglyph$1aao(r862_placeholder), r810_AS_BASE, r810_ALSO_METRICS);
                                                }
                                                var r862_part = r810_EnsureComponentGlyphT(r859_component, r821_LigaturePartImpl(r821_dfN, r862_componentRefOffset, r844_compress, r862_componentAdvance));
                                                r859_decomposition.push(r862_part);
                                                return r859_currentGlyph.include(r810_xn$referglyph$1aao(r862_part));
                                            }());
                                        }
                                        if (r844_decomposable)
                                            r1_CvDecompose.set(r859_currentGlyph, r859_decomposition);
                                        return void 0;
                                    });
                                }
                            else
                                return void 0;
                        };
                        var _r821_t0 = r821_jobs.nonDecomposable;
                        var _r821_t1 = _r821_t0.length;
                        var _r821_t2 = 0;
                        while (_r821_t2 < _r821_t1) {
                            r821_job = _r821_t0[_r821_t2];
                            r821_LigatureImpl(r821_job, false);
                            _r821_t2 = _r821_t2 + 1;
                        }
                        var _r821_t3 = r821_jobs.decomposableJobs;
                        var _r821_t4 = _r821_t3.length;
                        var _r821_t5 = 0;
                        while (_r821_t5 < _r821_t4) {
                            r821_job = _r821_t3[_r821_t5];
                            r821_LigatureImpl(r821_job, true);
                            _r821_t5 = _r821_t5 + 1;
                        }
                        return r810_applyRelations(r821_jobs.relApplications);
                    }());
                    _r818_t5 = _r818_t2 = _r818_t2 + 1;
                    _r818_t4 = _r818_t2 < _r818_t1;
                }
                return _r818_t5;
            }();
        };
        var r810_ijShrink = r1_clamp(0.6, 0.75, r810_StrokeWidthBlend(0.6, 0.75));
        r810_createLigatures('compatLigature1', false, r810_ijShrink, r810_ijShrink, 1, 1, r810_para.diversityI < 1 ? 0 : 0.2, [
            [
                306,
                [
                    'I',
                    'J'
                ]
            ],
            [
                307,
                [
                    'i',
                    'j'
                ]
            ]
        ]);
        var r810_stdShrink = r1_clamp(0.75, 0.9, r810_StrokeWidthBlend(0.75, 0.9));
        r810_createLigatures('compatLigature2', false, r810_stdShrink, r810_stdShrink, 1, 1, 0, [
            [
                452,
                [
                    'D',
                    'ZCaron'
                ]
            ],
            [
                453,
                [
                    'D',
                    'zCaron'
                ]
            ],
            [
                454,
                [
                    'd',
                    'zCaron'
                ]
            ],
            [
                455,
                [
                    'L',
                    'J'
                ]
            ],
            [
                456,
                [
                    'L',
                    'j'
                ]
            ],
            [
                457,
                [
                    'l',
                    'j'
                ]
            ],
            [
                458,
                [
                    'N',
                    'J'
                ]
            ],
            [
                459,
                [
                    'N',
                    'j'
                ]
            ],
            [
                460,
                [
                    'n',
                    'j'
                ]
            ],
            [
                497,
                [
                    'D',
                    'Z'
                ]
            ],
            [
                498,
                [
                    'D',
                    'z'
                ]
            ],
            [
                499,
                [
                    'd',
                    'z'
                ]
            ],
            [
                1144,
                [
                    'cyrl/O',
                    'cyrl/u'
                ]
            ],
            [
                1145,
                [
                    'cyrl/o',
                    'cyrl/u'
                ]
            ],
            [
                8359,
                [
                    'P',
                    't'
                ]
            ],
            [
                8360,
                [
                    'R',
                    's'
                ]
            ],
            [
                8367,
                [
                    'D',
                    'grek/rho'
                ]
            ],
            [
                8470,
                [
                    'N',
                    'numeroRightHalf'
                ]
            ],
            [
                127376,
                [
                    'D',
                    'J'
                ],
                r810_WideWidth1
            ]
        ]);
        r810_createLigatures('romanNumerals1', true, 1, 1, 1, 1, 0, [
            [
                8544,
                ['I']
            ],
            [
                8548,
                ['V']
            ],
            [
                8553,
                ['X']
            ],
            [
                8556,
                ['L']
            ],
            [
                8557,
                ['C']
            ],
            [
                8558,
                ['D']
            ],
            [
                8559,
                ['M']
            ],
            [
                8560,
                ['i']
            ],
            [
                8564,
                ['v']
            ],
            [
                8569,
                ['x']
            ],
            [
                8572,
                ['l']
            ],
            [
                8573,
                ['c']
            ],
            [
                8574,
                ['d']
            ],
            [
                8575,
                ['m']
            ]
        ]);
        r810_createLigatures('romanNumerals2', true, r810_stdShrink, r810_stdShrink, 1, 1, 0, [
            [
                8545,
                [
                    'I',
                    'I'
                ]
            ],
            [
                8547,
                [
                    'I',
                    'V'
                ]
            ],
            [
                8549,
                [
                    'V',
                    'I'
                ]
            ],
            [
                8552,
                [
                    'I',
                    'X'
                ]
            ],
            [
                8554,
                [
                    'X',
                    'I'
                ]
            ],
            [
                8561,
                [
                    'i',
                    'i'
                ]
            ],
            [
                8563,
                [
                    'i',
                    'v'
                ]
            ],
            [
                8565,
                [
                    'v',
                    'i'
                ]
            ],
            [
                8568,
                [
                    'i',
                    'x'
                ]
            ],
            [
                8570,
                [
                    'x',
                    'i'
                ]
            ]
        ]);
        var r810_romanShrink = r1_clamp(0.625, 0.875, r810_StrokeWidthBlend(0.625, 0.875));
        r810_createLigatures('romanNumerals3', true, r810_romanShrink, r810_romanShrink, 1, 1, 0, [
            [
                8546,
                [
                    'I',
                    'I',
                    'I'
                ]
            ],
            [
                8550,
                [
                    'V',
                    'I',
                    'I'
                ]
            ],
            [
                8555,
                [
                    'X',
                    'I',
                    'I'
                ]
            ],
            [
                8562,
                [
                    'i',
                    'i',
                    'i'
                ]
            ],
            [
                8566,
                [
                    'v',
                    'i',
                    'i'
                ]
            ],
            [
                8571,
                [
                    'x',
                    'i',
                    'i'
                ]
            ]
        ]);
        var r810_romanShrink4 = r1_clamp(0.5, 0.875, r810_StrokeWidthBlend(0.5, 0.875));
        r810_createLigatures('romanNumerals4', true, r810_romanShrink4, r810_romanShrink4, 1, 1, 0, [
            [
                8551,
                [
                    'V',
                    'I',
                    'I',
                    'I'
                ]
            ],
            [
                8567,
                [
                    'v',
                    'i',
                    'i',
                    'i'
                ]
            ]
        ]);
        return r810_createLigatures('temperature', false, 0.7, 0.8, 0.75, 0.9, 0, [
            [
                8451,
                [
                    'degree',
                    'C'
                ]
            ],
            [
                8457,
                [
                    'degree',
                    'F'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r869_xn$Capture_Ext$2Lrc2b) {
    var _r869_t0, _r869_t1;
    r869_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r869_xn$Capture_Ext$2Lrc2b, 'Autobuild-Pnonetic-Ligatures', function (r870_xn$Capture$2Lrc8, r870_xn$ExportCapture$2Lrc4b) {
        var _r870_t9, _r870_t10;
        var _r870_t0 = r870_xn$Capture$2Lrc8;
        var r870_xn$createAndSaveGlyphImpl$2Lrc3c = _r870_t0['$createAndSaveGlyphImpl$'];
        var r870_xn$NamedParameterPair$2Lrc9b = _r870_t0['$NamedParameterPair$'];
        var r870_xn$Exec$2Lrc5 = _r870_t0['$Exec$'];
        var r870_para = _r870_t0.para;
        var r870_AS_BASE = _r870_t0.AS_BASE;
        var r870_ALSO_METRICS = _r870_t0.ALSO_METRICS;
        var r870_DivFrame = _r870_t0.DivFrame;
        var _r870_t1 = r870_xn$Capture$2Lrc8.Metrics;
        var r870_Width = _r870_t1.Width;
        var r870_SB = _r870_t1.SB;
        var r870_Ascender = _r870_t1.Ascender;
        var r870_Scale = _r870_t1.Scale;
        var r870_OX = _r870_t1.OX;
        var r870_Stroke = _r870_t1.Stroke;
        var r870_StrokeWidthBlend = _r870_t1.StrokeWidthBlend;
        var r870_HSwToV = _r870_t1.HSwToV;
        var _r870_t2 = r870_xn$Capture$2Lrc8.SpiroFns;
        var _r870_t3 = r870_xn$Capture$2Lrc8.BooleFns;
        var r870_difference = _r870_t3.difference;
        var _r870_t4 = r870_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r870_Ungizmo = _r870_t4.Ungizmo;
        var r870_Regizmo = _r870_t4.Regizmo;
        var r870_MaskRight = _r870_t4.MaskRight;
        var _r870_t5 = r870_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r870_xn$referglyph$1aao = _r870_t5['refer-glyph'];
        var r870_xn$queryglyph$1aao = _r870_t5['query-glyph'];
        var _r870_t6 = r870_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Recursive-Build'].resolve();
        var r870_Thinner = _r870_t6.Thinner;
        var _r870_t7 = r870_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Autobuild-Enclosure-Shared'].resolve();
        var r870_CollectJobs = _r870_t7.CollectJobs;
        var r870_CreateDerivedFontFromJobs = _r870_t7.CreateDerivedFontFromJobs;
        var r870_EnsureComponentGlyphT = _r870_t7.EnsureComponentGlyphT;
        var r870_applyRelations = _r870_t7.applyRelations;
        var _r870_t8 = r870_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Autobuild-Transformed-Shared'].resolve();
        var r870_ToSuperscript = _r870_t8.ToSuperscript;
        var r870_ToSubscript = _r870_t8.ToSubscript;
        var r870_createPhoneticLigatures = function (r876_tfm, r876_prefix, r876_div, r876_mockNParts, r876__shrink, r876_kKern, r876_demands) {
            var r876_tmpShrink, r876_job, _r876_t8, _r876_t9;
            var r876_ww0 = r870_Width * r876_div;
            var r876_wwM = r876_ww0 / r1_fallback(r876_tfm.crowdAdjScale, 1);
            var r876_jobs = r870_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r876_prefix, '', r876_demands);
            var r876_shrink = r1_clamp(0, 1, r876__shrink);
            var r876_kern = 0;
            var _r876_t0 = 0;
            var _r876_t1 = 8;
            var r876_cycle = _r876_t0;
            while (r876_cycle < _r876_t1) {
                r876_kern = r876_kKern * (2 * r870_SB * r876_shrink + (0.5 * r870_Stroke * r870_HSwToV(r876_shrink) - r870_OX * 2));
                r876_tmpShrink = (r876_wwM + r876_kern * (r876_mockNParts - 1)) / (r876_mockNParts * r870_Width);
                r876_shrink = Math.max(r876__shrink, r1_clamp(0, 1, r876_tmpShrink));
                r876_cycle = r876_cycle + 1;
            }
            var r876_thinFont = r870_CreateDerivedFontFromJobs(r876_jobs, [], function (r879_gs) {
                var _r879_t0, _r879_t1;
                return r870_Thinner(r879_gs, r876_shrink, true, r876_tfm.crowd, r876_tfm.crowdAdjScale);
            });
            var r876_LigaturePlaceholderImpl = function (r880_aw, r880_markPlacement, r880_mak) {
                var _r880_t0, _r880_t1;
                var r880_gni = '.phonetic-ligature-placeholder@' + [
                    r876_prefix,
                    r880_aw,
                    r880_markPlacement,
                    r880_mak
                ].join('/');
                if (r870_xn$queryglyph$1aao(r880_gni))
                    return r880_gni;
                r870_xn$createAndSaveGlyphImpl$2Lrc3c(r880_gni, null, function () {
                    var _r883_t1;
                    var _r883_t0 = this;
                    var r883_currentGlyph = _r883_t0;
                    r883_currentGlyph.setWidth(r880_aw);
                    if (r880_mak)
                        r883_currentGlyph.include(r870_DivFrame(r876_div).markSet[r880_mak]());
                    r883_currentGlyph.setBaseAnchor('enclosureInner', r880_markPlacement, 0);
                    r883_currentGlyph.setBaseAnchor('slash', r880_aw / 2, r870_Ascender / 2);
                    r883_currentGlyph.include(r876_tfm(r876_div));
                    return void 0;
                });
                return r880_gni;
            };
            var r876_LigaturePartImpl = function (r889_thinFont, r889_compress, r889_markDist, r889_maskPos) {
                var _r889_t0, _r889_t1;
                return function (r890_gidPart) {
                    var _r890_t0, _r890_t1;
                    var r890_gni = '.phonetic-ligature-part.' + r890_gidPart + '@' + [
                        r876_prefix,
                        r889_compress,
                        r889_markDist,
                        r889_maskPos
                    ].join('/');
                    if (r870_xn$queryglyph$1aao(r890_gni))
                        return r890_gni;
                    r870_xn$createAndSaveGlyphImpl$2Lrc3c(r890_gni, null, function () {
                        var _r893_t1;
                        var _r893_t0 = this;
                        var r893_currentGlyph = _r893_t0;
                        r893_currentGlyph.setWidth(0);
                        r893_currentGlyph.include(r870_difference(r889_thinFont.queryByNameEnsured(r890_gidPart), r870_MaskRight(r889_maskPos)));
                        r893_currentGlyph.include(r870_Ungizmo());
                        r893_currentGlyph.include(r870_Scale(r889_compress, 1));
                        r893_currentGlyph.include(r870_Regizmo());
                        r893_currentGlyph.setMarkAnchor('enclosureInner', 0, 0, r889_markDist, 0);
                        r893_currentGlyph.include(r876_tfm(r876_div));
                        return void 0;
                    });
                    return r890_gni;
                };
            };
            var r876_LigatureImpl = function (r901_job, r901_decomposable) {
                var r901_gn, r901_unicode, r901_components, r901_mak, r901_sumChildrenWidth, r901_effectiveGlyphCount, r901_originals, r901_dfgs, r901_i, r901_component, r901_refW, r901_compRefWw, r901_compress, _r901_t0, _r901_t1, _r901_t2, _r901_t3, _r901_t4, _r901_t5, _r901_t6;
                if (!r870_xn$queryglyph$1aao(r901_gn)) {
                    _r901_t0 = r901_job;
                    r901_gn = _r901_t0[0];
                    r901_unicode = _r901_t0[1];
                    r901_components = _r901_t0[2];
                    r901_mak = _r901_t0[3];
                    r901_sumChildrenWidth = 0;
                    r901_effectiveGlyphCount = 0;
                    r901_originals = [];
                    r901_dfgs = [];
                    _r901_t1 = r901_components.entries()[Symbol.iterator]();
                    _r901_t2 = void 0;
                    while (!(_r901_t2 = _r901_t1.next()).done) {
                        _r901_t3 = _r901_t2.value;
                        r901_i = _r901_t3[0];
                        r901_component = _r901_t3[1];
                        r901_originals[r901_i] = r870_xn$queryglyph$1aao(r901_component);
                        r901_dfgs[r901_i] = r876_thinFont.queryByNameEnsured(r901_component);
                        if (r901_originals[r901_i].advanceWidth > 0)
                            r901_effectiveGlyphCount = r901_effectiveGlyphCount + 1;
                        r901_sumChildrenWidth = r901_sumChildrenWidth + r901_dfgs[r901_i].advanceWidth;
                    }
                    r901_refW = r901_sumChildrenWidth - r876_kern * (r901_effectiveGlyphCount - 1);
                    r901_compRefWw = r876_wwM;
                    r901_compress = r1_clamp(0, 1, r901_compRefWw / r901_refW);
                    return !r870_xn$queryglyph$1aao(r901_gn) ? r870_xn$createAndSaveGlyphImpl$2Lrc3c(r901_gn, r901_unicode, function () {
                        var r905_i, r905_component, _r905_t2, _r905_t4, _r905_t5, _r905_tag6;
                        var _r905_t3 = this;
                        var r905_currentGlyph = _r905_t3;
                        var r905_decomposition = [];
                        var r905_baseOffset = r876_ww0 / 2 - r901_refW * r901_compress / 2;
                        var _r905_t0 = r901_components.entries()[Symbol.iterator]();
                        var _r905_t1 = void 0;
                        while (!(_r905_t1 = _r905_t0.next()).done) {
                            _r905_t2 = _r905_t1.value;
                            r905_i = _r905_t2[0];
                            r905_component = _r905_t2[1];
                            (function () {
                                var r908_placeholder, r908_part;
                                var r908_currentIsMark = 0 === r901_originals[r905_i].advanceWidth;
                                var r908_componentAdvance = r908_currentIsMark ? 0 : r901_compress * (r901_dfgs[r905_i].advanceWidth - r876_kern);
                                var r908_maskPos = r901_dfgs[r905_i].advanceWidth - r876_kern + (r905_i + 1 < r901_effectiveGlyphCount ? r901_dfgs[r905_i + 1].advanceWidth / 2 : r876_ww0);
                                if (r905_i === 0) {
                                    r908_placeholder = r876_LigaturePlaceholderImpl(r876_ww0, r905_baseOffset, r901_mak);
                                    r905_decomposition.push(r908_placeholder);
                                    r905_currentGlyph.include(r870_xn$referglyph$1aao(r908_placeholder), r870_AS_BASE, r870_ALSO_METRICS);
                                }
                                return r908_currentIsMark ? r905_currentGlyph.include(r870_xn$referglyph$1aao(r905_component)) : (r908_part = r870_EnsureComponentGlyphT(r905_component, r876_LigaturePartImpl(r876_thinFont, r901_compress, r908_componentAdvance, r908_maskPos)), r905_decomposition.push(r908_part), r905_currentGlyph.include(r870_xn$referglyph$1aao(r908_part)));
                            }());
                        }
                        if (r901_decomposable)
                            r1_CvDecompose.set(r905_currentGlyph, r905_decomposition);
                        return void 0;
                    }) : void 0;
                } else
                    return void 0;
            };
            var _r876_t2 = r876_jobs.nonDecomposable;
            var _r876_t3 = _r876_t2.length;
            var _r876_t4 = 0;
            while (_r876_t4 < _r876_t3) {
                r876_job = _r876_t2[_r876_t4];
                r876_LigatureImpl(r876_job, false);
                _r876_t4 = _r876_t4 + 1;
            }
            var _r876_t5 = r876_jobs.decomposableJobs;
            var _r876_t6 = _r876_t5.length;
            var _r876_t7 = 0;
            while (_r876_t7 < _r876_t6) {
                r876_job = _r876_t5[_r876_t7];
                r876_LigatureImpl(r876_job, true);
                _r876_t7 = _r876_t7 + 1;
            }
            return r870_applyRelations(r876_jobs.relApplications);
        };
        var r870_ToLetter = function () {
            var _r914_t0, _r914_t1;
            return function () {
                var _r916_t1;
                var _r916_t0 = this;
                var r916_currentGlyph = _r916_t0;
                return void 0;
            };
        };
        var r870_stdShrink = r1_clamp(0.625, 0.9, r870_StrokeWidthBlend(0.625, 0.9));
        r870_createPhoneticLigatures(r870_ToLetter, 'phonetic', r870_para.diversityM, 2, r870_stdShrink, 1, [
            [
                675,
                [
                    'd/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                676,
                [
                    'd/phoneticLeft',
                    'ezh'
                ],
                'bp'
            ],
            [
                677,
                [
                    'd/phoneticLeft',
                    'zCurlyTail'
                ],
                'b'
            ],
            [
                678,
                [
                    't/phoneticLeft2',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                679,
                [
                    't/teshLeft',
                    'esh'
                ],
                'bp'
            ],
            [
                680,
                [
                    't/phoneticLeft1',
                    'cCurlyTail'
                ],
                'b'
            ],
            [
                681,
                [
                    'f/phoneticLeft',
                    'eng/phoneticRight'
                ],
                'bp'
            ],
            [
                682,
                [
                    'l/phoneticLeft',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                683,
                [
                    'l/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                43878,
                [
                    'd/phoneticLeft',
                    'zRTailBR'
                ],
                'bp'
            ],
            [
                43879,
                [
                    't/phoneticLeft1',
                    'sRTail'
                ],
                'bp'
            ],
            [
                64256,
                [
                    'f',
                    'f'
                ],
                null
            ],
            [
                64257,
                [
                    'f/compLigLeft1',
                    'dotlessi/compLigRight'
                ],
                null
            ],
            [
                64258,
                [
                    'f/compLigLeft2',
                    'l/compLigRight'
                ],
                null
            ],
            [
                64261,
                [
                    'longs/flatExt',
                    't/phoneticRight'
                ],
                null
            ],
            [
                64262,
                [
                    's/compLigLeft',
                    't/phoneticRight'
                ],
                null
            ]
        ]);
        r870_createPhoneticLigatures(r870_ToLetter, 'phonetic2', r870_para.diversityM, 3, r870_stdShrink, 1, [
            [
                64259,
                [
                    'f/compLigLeft1',
                    'f/compLigLeft1',
                    'dotlessi/compLigRight'
                ],
                null
            ],
            [
                64260,
                [
                    'f/compLigLeft3',
                    'f/compLigLeft2',
                    'l/compLigRight'
                ],
                null
            ]
        ]);
        r870_createPhoneticLigatures(r870_ToSuperscript, 'phoneticSuperscript', 1, 2, r870_stdShrink, 1, [
            [
                67463,
                [
                    'd/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                67466,
                [
                    'd/phoneticLeft',
                    'ezh'
                ],
                'bp'
            ],
            [
                67465,
                [
                    'd/phoneticLeft',
                    'zCurlyTail'
                ],
                'bp'
            ],
            [
                67500,
                [
                    't/phoneticLeft2',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                67502,
                [
                    't/teshLeft',
                    'esh'
                ],
                'bp'
            ],
            [
                67499,
                [
                    't/phoneticLeft1',
                    'cCurlyTail'
                ],
                'b'
            ],
            [
                67472,
                [
                    'f/phoneticLeft',
                    'eng/phoneticRight'
                ],
                'bp'
            ],
            [
                67481,
                [
                    'l/phoneticLeft',
                    's/phoneticRight'
                ],
                'b'
            ],
            [
                67482,
                [
                    'l/phoneticLeft',
                    'z'
                ],
                'b'
            ],
            [
                67464,
                [
                    'd/phoneticLeft',
                    'zRTailBR'
                ],
                'bp'
            ],
            [
                67501,
                [
                    't/phoneticLeft1',
                    'sRTail'
                ],
                'p'
            ]
        ]);
        r870_createPhoneticLigatures(r870_ToSubscript, 'tenSubscript', 1, 2, 1, 0.5, [[
                9192,
                [
                    'one.lnum',
                    'zero.lnum'
                ],
                'capital'
            ]]);
        return r870_createPhoneticLigatures(r870_ToLetter, 'thSlash', 1, 2, r870_stdShrink, 1, [[
                7546,
                [
                    't/phoneticLeft1',
                    'h',
                    'wideSlash'
                ],
                'b'
            ]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r919_xn$Capture_Ext$2Lrc2b) {
    var _r919_t0, _r919_t1;
    r919_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r919_xn$Capture_Ext$2Lrc2b, 'Autobuild-Double-Emotions', function (r920_xn$Capture$2Lrc8, r920_xn$ExportCapture$2Lrc4b) {
        var _r920_t8, _r920_t9;
        var _r920_t0 = r920_xn$Capture$2Lrc8;
        var r920_xn$createAndSaveGlyphImpl$2Lrc3c = _r920_t0['$createAndSaveGlyphImpl$'];
        var r920_xn$NamedParameterPair$2Lrc9b = _r920_t0['$NamedParameterPair$'];
        var r920_xn$Exec$2Lrc5 = _r920_t0['$Exec$'];
        var r920_para = _r920_t0.para;
        var r920_DivFrame = _r920_t0.DivFrame;
        var _r920_t1 = r920_xn$Capture$2Lrc8.Metrics;
        var r920_Width = _r920_t1.Width;
        var r920_SB = _r920_t1.SB;
        var r920_Scale = _r920_t1.Scale;
        var r920_Translate = _r920_t1.Translate;
        var r920_OX = _r920_t1.OX;
        var r920_Stroke = _r920_t1.Stroke;
        var r920_WideWidth2 = _r920_t1.WideWidth2;
        var r920_StrokeWidthBlend = _r920_t1.StrokeWidthBlend;
        var _r920_t2 = r920_xn$Capture$2Lrc8.SpiroFns;
        var _r920_t3 = r920_xn$Capture$2Lrc8.BooleFns;
        var r920_union = _r920_t3.union;
        var _r920_t4 = r920_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r920_Ungizmo = _r920_t4.Ungizmo;
        var r920_Regizmo = _r920_t4.Regizmo;
        var r920_xn$withtransform$5sIl = _r920_t4['with-transform'];
        var _r920_t5 = r920_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r920_xn$queryglyph$1aao = _r920_t5['query-glyph'];
        var _r920_t6 = r920_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Recursive-Build'].resolve();
        var r920_Thinner = _r920_t6.Thinner;
        var _r920_t7 = r920_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Autobuild-Enclosure-Shared'].resolve();
        var r920_CollectJobs = _r920_t7.CollectJobs;
        var r920_CreateDerivedFontFromJobs = _r920_t7.CreateDerivedFontFromJobs;
        var r920_EnsureComponentGlyphT = _r920_t7.EnsureComponentGlyphT;
        var r920_applyRelations = _r920_t7.applyRelations;
        var r920_createDoubleEmotions = function (r925_prefix, r925_div, r925__shrink1, r925__shrink2, r925_wadj1, r925_wadj2, r925_demands) {
            var _r925_t0, _r925_t1, _r925_t2, _r925_tag3;
            return function () {
                var r928_FMosaicWide, r928_MosaicNameSuffix, r928_MosaicWidth, r928_MosaicWidthScalar, _r928_t3, _r928_t5, _r928_t6, _r928_tag7;
                var r928_WidthKinds = [
                    [
                        0,
                        '.NWID',
                        r920_xn$Capture$2Lrc8.Metrics.Width,
                        1
                    ],
                    [
                        1,
                        '.WWID',
                        r920_xn$Capture$2Lrc8.Metrics.WideWidth0,
                        2
                    ]
                ];
                var _r928_t0 = r928_WidthKinds;
                var _r928_t1 = _r928_t0.length;
                var _r928_t2 = 0;
                var _r928_t4 = _r928_t2 < _r928_t1;
                while (_r928_t4) {
                    _r928_t3 = _r928_t0[_r928_t2];
                    r928_FMosaicWide = _r928_t3[0];
                    r928_MosaicNameSuffix = _r928_t3[1];
                    r928_MosaicWidth = _r928_t3[2];
                    r928_MosaicWidthScalar = _r928_t3[3];
                    (function () {
                        var r931_gn, r931_unicode, r931_c1, r931_m1, r931_c2, r931_m2, r931_mak, _r931_t3;
                        var r931_MosaicDesiredWidth = r920_WideWidth2;
                        var r931_MosaicMiddle = r928_MosaicWidth / 2;
                        var r931_MosaicUnitWidth = r928_MosaicWidth / r928_MosaicWidthScalar;
                        var r931_MangleUnicode = function (r932_unicode, r932__desiredOverride) {
                            var _r932_t0, _r932_t1;
                            return r928_MosaicWidth === (r932__desiredOverride || r931_MosaicDesiredWidth) ? r932_unicode : void 0;
                        };
                        var r931_MangleName = function (r933_name) {
                            var _r933_t0, _r933_t1;
                            return r933_name + r928_MosaicNameSuffix;
                        };
                        var r931_CWidth = r928_FMosaicWide ? r928_MosaicWidth : r920_Width * r925_div;
                        var r931_shrink1 = r928_FMosaicWide ? 1 : r925__shrink1;
                        var r931_shrink2 = r928_FMosaicWide ? 1 : r925__shrink2;
                        var r931_kern = r920_SB * r931_shrink1 + r920_SB * r931_shrink2 + 0.5 * r920_Stroke * r1_mix(r931_shrink1, r931_shrink2, 0.5) - r920_OX * 2;
                        var r931_jobs = r920_CollectJobs(r1_xn$NONDECOMPOSABLE$9Jrj, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r925_prefix, r928_MosaicNameSuffix, r925_demands);
                        var r931_df1 = r920_CreateDerivedFontFromJobs(r931_jobs, [], function (r934_gs) {
                            var _r934_t0, _r934_t1;
                            return r920_Thinner(r934_gs, r931_shrink1, true);
                        });
                        var r931_df2 = r920_CreateDerivedFontFromJobs(r931_jobs, [], function (r935_gs) {
                            var _r935_t0, _r935_t1;
                            return r920_Thinner(r935_gs, r931_shrink2, true);
                        });
                        var _r931_t0 = r931_jobs.nonDecomposable;
                        var _r931_t1 = _r931_t0.length;
                        var _r931_t2 = 0;
                        while (_r931_t2 < _r931_t1) {
                            _r931_t3 = _r931_t0[_r931_t2];
                            r931_gn = _r931_t3[0];
                            r931_unicode = _r931_t3[1];
                            r931_c1 = _r931_t3[2][0];
                            r931_m1 = _r931_t3[2][1];
                            r931_c2 = _r931_t3[2][2];
                            r931_m2 = _r931_t3[2][3];
                            _r931_t3[2];
                            r931_mak = _r931_t3[3];
                            if (!r920_xn$queryglyph$1aao(r931_gn))
                                r920_xn$createAndSaveGlyphImpl$2Lrc3c(r931_gn, r931_MangleUnicode(r931_unicode), function () {
                                    var _r940_t1;
                                    var _r940_t0 = this;
                                    var r940_currentGlyph = _r940_t0;
                                    r940_currentGlyph.setWidth(r931_CWidth);
                                    if (r931_mak)
                                        r940_currentGlyph.include(r920_DivFrame(r931_CWidth / r920_Width).markSet[r931_mak]());
                                    var r940_dfg1 = r931_df1.queryByNameEnsured(r931_c1);
                                    var r940_dfm1 = r931_df1.queryByNameEnsured(r931_m1);
                                    var r940_dfg2 = r931_df2.queryByNameEnsured(r931_c2);
                                    var r940_dfm2 = r931_df2.queryByNameEnsured(r931_m2);
                                    var r940_sumChildrenWidth = r940_dfg1.advanceWidth * r925_wadj1 + r940_dfg2.advanceWidth * r925_wadj2;
                                    var r940_refW = r940_sumChildrenWidth - r931_kern;
                                    r940_currentGlyph.include(r920_union(r940_dfg2, r920_xn$withtransform$5sIl(r920_Translate(r940_dfg2.advanceWidth, 0), r940_dfm2)));
                                    r940_currentGlyph.include(r920_Translate(r940_dfg1.advanceWidth * r925_wadj1 - r931_kern, 0));
                                    r940_currentGlyph.include(r920_union(r940_dfg1, r920_xn$withtransform$5sIl(r920_Translate(r940_dfg1.advanceWidth, 0), r940_dfm1)));
                                    r940_currentGlyph.include(r920_Ungizmo());
                                    r940_currentGlyph.include(r920_Translate(-r940_refW / 2, 0));
                                    r940_currentGlyph.include(r920_Scale(r1_clamp(0, 1, (r931_CWidth - r920_SB * 1.25) / (r931_CWidth - r920_SB * 2) * r931_CWidth / r940_refW), 1));
                                    r940_currentGlyph.include(r920_Translate(r931_CWidth / 2, 0));
                                    r940_currentGlyph.include(r920_Regizmo());
                                    return void 0;
                                });
                            _r931_t2 = _r931_t2 + 1;
                        }
                        return r920_applyRelations(r931_jobs.relApplications);
                    }());
                    _r928_t5 = _r928_t2 = _r928_t2 + 1;
                    _r928_t4 = _r928_t2 < _r928_t1;
                }
                return _r928_t5;
            }();
        };
        var r920_stdShrink = r1_clamp(0.625, 0.9, r920_StrokeWidthBlend(0.625, 0.9));
        return r920_createDoubleEmotions('doubleemotion', r920_para.diversityM, r920_stdShrink, r920_stdShrink, 1, 1, [
            [
                8252,
                [
                    'exclam',
                    'zwsp',
                    'exclam',
                    'zwsp'
                ]
            ],
            [
                8263,
                [
                    'question/hookPart',
                    'question/dotPart',
                    'question/hookPart',
                    'question/dotPart'
                ]
            ],
            [
                8264,
                [
                    'question/hookPart',
                    'question/dotPart',
                    'exclam',
                    'zwsp'
                ]
            ],
            [
                8265,
                [
                    'exclam',
                    'zwsp',
                    'question/hookPart',
                    'question/dotPart'
                ]
            ]
        ]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r953_xn$Capture_Ext$2Lrc2b) {
    var _r953_t0, _r953_t1;
    r953_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r953_xn$Capture_Ext$2Lrc2b, 'Autobuild-Grouped-Digits', function (r954_xn$Capture$2Lrc8, r954_xn$ExportCapture$2Lrc4b) {
        var _r954_t6, _r954_t7;
        var _r954_t0 = r954_xn$Capture$2Lrc8;
        var r954_xn$createAndSaveGlyphImpl$2Lrc3c = _r954_t0['$createAndSaveGlyphImpl$'];
        var r954_xn$NamedParameterPair$2Lrc9b = _r954_t0['$NamedParameterPair$'];
        var r954_xn$Exec$2Lrc5 = _r954_t0['$Exec$'];
        var _r954_t1 = r954_xn$Capture$2Lrc8.Metrics;
        var r954_Width = _r954_t1.Width;
        var r954_Descender = _r954_t1.Descender;
        var r954_Translate = _r954_t1.Translate;
        var r954_AdviceStroke = _r954_t1.AdviceStroke;
        var _r954_t2 = r954_xn$Capture$2Lrc8.SpiroFns;
        var _r954_t3 = r954_xn$Capture$2Lrc8.BooleFns;
        var r954_intersection = _r954_t3.intersection;
        var _r954_t4 = r954_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r954_HBar = _r954_t4.HBar;
        var r954_xn$withtransform$5sIl = _r954_t4['with-transform'];
        var _r954_t5 = r954_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r954_xn$referglyph$1aao = _r954_t5['refer-glyph'];
        var r954_createGroupedDigits = function (r957_shrink, r957_crowd, r957_numberGlyphIDs) {
            var r957_gid, r957_nd, _r957_t3, _r957_t4, _r957_t5, _r957_t6, _r957_t7, _r957_t9;
            r954_xn$createAndSaveGlyphImpl$2Lrc3c('.nd-shade', null, function () {
                var _r960_t1;
                var _r960_t0 = this;
                var r960_currentGlyph = _r960_t0;
                r960_currentGlyph.setWidth(0);
                r960_currentGlyph.setMarkAnchor('compositeInner', 0, 0);
                r960_currentGlyph.include(r954_intersection(r954_HBar.b(0, r954_Width, r954_Descender * 0.75, r954_AdviceStroke(4)), function () {
                    var _r965_t1;
                    var _r965_t0 = this;
                    var r965_currentGlyph = _r965_t0;
                    r965_currentGlyph.include(r954_xn$referglyph$1aao('denseShade.WWID'));
                    r965_currentGlyph.include(r954_Translate(-r954_Width / 2, 0));
                    return void 0;
                }));
                r960_currentGlyph.include(r954_Translate(-r954_Width, 0));
                return void 0;
            });
            var _r957_t0 = r957_numberGlyphIDs;
            var _r957_t1 = _r957_t0.length;
            var _r957_t2 = 0;
            var _r957_t8 = _r957_t2 < _r957_t1;
            while (_r957_t8) {
                r957_gid = _r957_t0[_r957_t2];
                _r957_t3 = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ];
                _r957_t4 = _r957_t3.length;
                _r957_t5 = 0;
                while (_r957_t5 < _r957_t4) {
                    r957_nd = _r957_t3[_r957_t5];
                    r954_xn$createAndSaveGlyphImpl$2Lrc3c(r957_gid + '.nd' + r957_nd, null, function () {
                        var _r975_t1;
                        var _r975_t0 = this;
                        var r975_currentGlyph = _r975_t0;
                        r975_currentGlyph.include(r954_xn$referglyph$1aao(r957_gid));
                        if (r957_nd >= 3 && r957_nd <= 5) {
                            r975_currentGlyph.include(r954_xn$withtransform$5sIl(r954_Translate(r954_Width, 0), r954_xn$referglyph$1aao('.nd-shade')));
                            r1_CvDecompose.set(r975_currentGlyph, [
                                r957_gid,
                                '.nd-shade'
                            ]);
                        } else
                            r1_CvDecompose.set(r975_currentGlyph, [r957_gid]);
                        return void 0;
                    });
                    _r957_t5 = _r957_t5 + 1;
                }
                _r957_t9 = _r957_t2 = _r957_t2 + 1;
                _r957_t8 = _r957_t2 < _r957_t1;
            }
            return _r957_t9;
        };
        return r954_createGroupedDigits(0.9, 3, [
            'zero.lnum',
            'one.lnum',
            'two.lnum',
            'three.lnum',
            'four.lnum',
            'five.lnum',
            'six.lnum',
            'seven.lnum',
            'eight.lnum',
            'nine.lnum'
        ]);
    });
    return void 0;
});
