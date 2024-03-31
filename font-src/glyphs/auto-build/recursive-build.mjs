'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Recursive-Build', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t4, _r270_t5;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_para = _r270_t0.para;
        var r270_glyphStore = _r270_t0.glyphStore;
        var r270_buildGlyphs = _r270_t0.buildGlyphs;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_UPM = _r270_t1.UPM;
        var r270_HalfUPM = _r270_t1.HalfUPM;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_HookX = _r270_t1.HookX;
        var r270_LongJut = _r270_t1.LongJut;
        var r270_Jut = _r270_t1.Jut;
        var r270_AccentWidth = _r270_t1.AccentWidth;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_Fork = function (r271_gs, r271_ps) {
            var r271_glyphid, r271_g, _r271_t3, _r271_t4;
            var r271_glyphs = [];
            var _r271_t0 = r271_gs;
            var _r271_t1 = _r271_t0.length;
            var _r271_t2 = 0;
            while (_r271_t2 < _r271_t1) {
                r271_glyphid = _r271_t0[_r271_t2];
                r271_g = r270_glyphStore.queryByName(r271_glyphid);
                if (r271_g)
                    r271_glyphs.push(r271_g);
                _r271_t2 = _r271_t2 + 1;
            }
            r271_gs = r270_buildGlyphs(r271_ps, r270_xn$Exec$2Lrc5.dependencyManager.traverseDependencies(r271_glyphs));
            return r271_gs.glyphStore;
        };
        var r270_MiniatureParaT = function () {
            var _r274_t6;
            var _r274_t7 = arguments;
            var _r274_t0 = [].slice.call(_r274_t7, 0);
            var _r274_t1 = [];
            var _r274_t2 = 0;
            while (_r274_t2 < _r274_t0.length) {
                if (!(_r274_t0[_r274_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r274_t1.push(_r274_t0[_r274_t2]);
                _r274_t2 = _r274_t2 + 1;
            }
            var _r274_t3 = _r274_t0;
            var _r274_t4 = _r274_t3.length;
            var _r274_t5 = 0;
            while (_r274_t5 < _r274_t4) {
                _r274_t2 = _r274_t3[_r274_t5];
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'pp')
                    r274_pp = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'crowd')
                    r274_crowd = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'scale')
                    r274_scale = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'sbscale')
                    r274_sbscale = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'mono')
                    r274_mono = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'mono2')
                    r274_mono2 = _r274_t2.right;
                if (_r274_t2 && _r274_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r274_t2.left === 'forceUpright')
                    r274_forceUpright = _r274_t2.right;
                _r274_t5 = _r274_t5 + 1;
            }
            var r274_pp = r1_fallback(r274_pp, _r274_t1[0]);
            var r274_crowd = r1_fallback(r274_crowd, _r274_t1[1]);
            var r274_scale = r1_fallback(r274_scale, _r274_t1[2]);
            var r274_sbscale = r1_fallback(r274_sbscale, _r274_t1[3], r270_Width / r270_UPM);
            var r274_mono = r1_fallback(r274_mono, _r274_t1[4], false);
            var r274_mono2 = r1_fallback(r274_mono2, _r274_t1[5], false);
            var r274_forceUpright = r1_fallback(r274_forceUpright, _r274_t1[6], false);
            var r274_forkedPara = Object.assign({}, r274_pp);
            r274_forkedPara.stroke = r270_AdviceStroke(r274_crowd, Math.pow(r1_clamp(0, 1, r270_HalfUPM / r270_Width), 0.5)) / r274_scale;
            r274_forkedPara.dotSize = r274_pp.dotSize * r274_forkedPara.stroke / r274_pp.stroke;
            r274_forkedPara.periodSize = r274_pp.periodSize * r274_forkedPara.stroke / r274_pp.stroke;
            r274_forkedPara.sb = r270_SB * r274_sbscale;
            if (r274_forceUpright)
                r274_forkedPara.slopeAngle = 0;
            if (r274_mono)
                r274_forkedPara.diversityM = 1;
            if (r274_mono2) {
                r274_forkedPara.diversityF = 1;
                r274_forkedPara.diversityI = 1;
                r274_forkedPara.diversityII = 1;
            }
            return r274_forkedPara;
        };
        var r270_Miniature = function (r279_glyphs) {
            var _r279_t0;
            var _r279_t1 = arguments;
            return r270_Fork(r279_glyphs, r270_MiniatureParaT.apply(null, [r270_para].concat([].slice.call(_r279_t1, 1))));
        };
        var r270_Thinner = function () {
            var _r280_t6;
            var _r280_t7 = arguments;
            var _r280_t0 = [].slice.call(_r280_t7, 0);
            var _r280_t1 = [];
            var _r280_t2 = 0;
            while (_r280_t2 < _r280_t0.length) {
                if (!(_r280_t0[_r280_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r280_t1.push(_r280_t0[_r280_t2]);
                _r280_t2 = _r280_t2 + 1;
            }
            var _r280_t3 = _r280_t0;
            var _r280_t4 = _r280_t3.length;
            var _r280_t5 = 0;
            while (_r280_t5 < _r280_t4) {
                _r280_t2 = _r280_t3[_r280_t5];
                if (_r280_t2 && _r280_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'glyphs')
                    r280_glyphs = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'p')
                    r280_p = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'fMono')
                    r280_fMono = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'crowd')
                    r280_crowd = _r280_t2.right;
                if (_r280_t2 && _r280_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r280_t2.left === 'crowdAdjScale')
                    r280_crowdAdjScale = _r280_t2.right;
                _r280_t5 = _r280_t5 + 1;
            }
            var r280_glyphs = r1_fallback(r280_glyphs, _r280_t1[0]);
            var r280_p = r1_fallback(r280_p, _r280_t1[1]);
            var r280_fMono = r1_fallback(r280_fMono, _r280_t1[2]);
            var r280_crowd = r1_fallback(r280_crowd, _r280_t1[3]);
            var r280_crowdAdjScale = r1_fallback(r280_crowdAdjScale, _r280_t1[4]);
            var r280_forkedPara = Object.assign({}, r270_para);
            if (r280_crowd && r280_crowdAdjScale) {
                r280_forkedPara.stroke = r270_AdviceStroke(r280_crowd) / r280_crowdAdjScale;
                r280_forkedPara.dotSize = r270_para.dotSize * r280_forkedPara.stroke / r270_para.stroke;
                r280_forkedPara.periodSize = r270_para.periodSize * r280_forkedPara.stroke / r270_para.stroke;
            }
            r280_forkedPara.unitWidthScalar = r270_para.unitWidthScalar * r280_p;
            r280_forkedPara.width = r270_Width * r280_p;
            r280_forkedPara.accentWidth = r270_AccentWidth * r280_p;
            r280_forkedPara.jut = r270_Jut * r280_p;
            r280_forkedPara.longjut = r270_LongJut * r280_p;
            r280_forkedPara.diversityM = 1;
            if (r280_fMono) {
                r280_forkedPara.diversityF = 1;
                r280_forkedPara.diversityI = 1;
                r280_forkedPara.diversityII = 1;
            }
            return r270_Fork(r280_glyphs, r280_forkedPara);
        };
        var r270_Widen = function (r285_glyphs, r285_p, r285_psb) {
            var _r285_t0, _r285_t1;
            var r285_forkedPara = Object.assign({}, r270_para);
            r285_forkedPara.unitWidthScalar = r270_para.unitWidthScalar * r285_p;
            r285_forkedPara.width = r270_Width * r285_p;
            r285_forkedPara.sb = r270_SB * r1_fallback(r285_psb, r285_p);
            r285_forkedPara.accentWidth = r270_AccentWidth * r285_p;
            r285_forkedPara.jut = r270_Jut * r285_p;
            r285_forkedPara.longjut = r270_LongJut * r285_p;
            r285_forkedPara.hookx = r270_HookX * r285_p;
            return r270_Fork(r285_glyphs, r285_forkedPara);
        };
        return r270_xn$ExportCapture$2Lrc4b(function () {
            var _r287_t0, _r287_t1;
            return {
                'Fork': r270_Fork,
                'Miniature': r270_Miniature,
                'MiniatureParaT': r270_MiniatureParaT,
                'Thinner': r270_Thinner,
                'Widen': r270_Widen
            };
        });
    });
    return void 0;
});
