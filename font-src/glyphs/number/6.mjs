'use strict';
import * as _s0_t0 from '../../support/utils.mjs';
var _s0_t1;
export {
    _s0_t1 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Digits-Six', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_Width = _r270_t1.Width;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_TanSlope = _r270_t1.TanSlope;
        var r270_HVContrast = _r270_t1.HVContrast;
        var r270_O = _r270_t1.O;
        var r270_Hook = _r270_t1.Hook;
        var r270_SmallArchDepth = _r270_t1.SmallArchDepth;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_CThin = _r270_t1.CThin;
        var r270_CThinB = _r270_t1.CThinB;
        var r270_HalfStroke = _r270_t1.HalfStroke;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_Middle = _r270_t1.Middle;
        var r270_AdviceStroke = _r270_t1.AdviceStroke;
        var r270_HSwToV = _r270_t1.HSwToV;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_straight = _r270_t2.straight;
        var r270_widths = _r270_t2.widths;
        var r270_quadControls = _r270_t2.quadControls;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var r270_intersection = _r270_t3.intersection;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_KnotAdj = _r270_t4.KnotAdj;
        var r270_Rect = _r270_t4.Rect;
        var r270_HBar = _r270_t4.HBar;
        var r270_hookend = _r270_t4.hookend;
        var r270_DiagCorDs = _r270_t4.DiagCorDs;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$selectvariant$7Hrq = _r270_t5['select-variant'];
        var r270_alias = _r270_t5.alias;
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Digits-Shared'].resolve();
        var r270_CodeLnum = _r270_t6.CodeLnum;
        var r270_CodeOnum = _r270_t6.CodeOnum;
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r275_t0, _r275_t1;
            return { 'OpenContourSixShape': r270_OpenContourSixShape };
        });
        var r270_OpenContourSixShape = function (r276_charTop) {
            var _r276_t0, _r276_t1;
            return function () {
                var _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_oTop = r276_charTop * 0.55 + r270_Stroke / 2;
                var r278_fine = r270_Stroke * r270_CThinB;
                var r278_coFine = Math.max(r270_AdviceStroke(3.5), r270_Stroke - r278_fine / 2);
                r278_currentGlyph.include(r270_dispiro(r270_widths.rhs(r278_fine), r270_KnotAdj.ArchBot.o(new r270_xn$NamedParameterPair$2Lrc9b('ty', r270_g4.left.start), r270_Middle - r270_TanSlope * (r270_Stroke - r278_fine), r270_Stroke - r278_fine), r270_archv(), r270_KnotAdj.BowlLeft.o(r270_g4, r270_SB + (r270_Stroke - r278_fine) * r270_HVContrast, r278_oTop / 2), r270_arcvh(), r270_KnotAdj.ArchTop.o(r270_Middle, r278_oTop, r270_widths.rhs()), r270_archv(), r270_KnotAdj.BowlRight.o(r270_g4.down.mid, r270_RightSB, r278_oTop / 2), r270_arcvh(), r270_KnotAdj.ArchBot.o(new r270_xn$NamedParameterPair$2Lrc9b('ty', r270_g4.left.mid), r270_Middle, 0), r270_archv(), r270_KnotAdj.BowlLeft.o(r270_g4.up.mid, r270_SB, r278_oTop / 2 + r270_Stroke * 0.3, r270_widths.rhs(r278_coFine)), r270_quadControls(0, 0.85), r270_g4(r1_mix(r270_SB, r270_RightSB, 0.85) - r270_HSwToV(0.25 * r270_Stroke), r276_charTop - r270_O, r270_widths.rhs())));
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r283_t0, _r283_t1;
            return { 'ClosedContourSixShape': r270_ClosedContourSixShape };
        });
        var r270_ClosedContourSixShape = function (r284_top) {
            var _r284_t0, _r284_t1;
            return function () {
                var _r286_t1;
                var _r286_t0 = this;
                var r286_currentGlyph = _r286_t0;
                var r286_oTop = Math.max(2 * r270_SmallArchDepth + 0.1, r284_top * 0.55 + r270_HalfStroke);
                r286_currentGlyph.include(r270_dispiro(r270_widths.rhs(r270_Stroke * r270_CThinB), r270_KnotAdj.BowlLeft.o(r270_straight.up.start, r270_SB + r270_Stroke * (1 - r270_CThinB) * r270_HVContrast, r286_oTop - r270_SmallArchDepth), r270_arcvh(), r270_KnotAdj.ArchTop.o(r270_Middle, r286_oTop, r270_widths.rhs(r270_Stroke)), r270_archv(), r270_KnotAdj.BowlRight.o(r270_flat, r270_RightSB, r286_oTop - r270_SmallArchDepth), r270_KnotAdj.BowlRight.o(r270_curl, r270_RightSB, 0 + r270_SmallArchDepth), r270_arcvh(), r270_KnotAdj.ArchBot.o(r270_Middle, 0), r270_archv(), r270_KnotAdj.BowlLeft.o(r270_flat, r270_SB, r270_SmallArchDepth), r270_KnotAdj.BowlLeft.o(r270_curl, r270_SB, r284_top - r270_SmallArchDepth), r270_hookend(r284_top - r270_O), r270_g4(r270_RightSB, r284_top - r270_Hook)));
                return void 0;
            };
        };
        r270_xn$ExportCapture$2Lrc4b(function () {
            var _r289_t0, _r289_t1;
            return { 'StraightBarSixShape': r270_StraightBarSixShape };
        });
        var r270_StraightBarSixShape = function () {
            var _r290_t6;
            var _r290_t7 = arguments;
            var _r290_t0 = [].slice.call(_r290_t7, 0);
            var _r290_t1 = [];
            var _r290_t2 = 0;
            while (_r290_t2 < _r290_t0.length) {
                if (!(_r290_t0[_r290_t2] instanceof r270_xn$NamedParameterPair$2Lrc9b))
                    _r290_t1.push(_r290_t0[_r290_t2]);
                _r290_t2 = _r290_t2 + 1;
            }
            var _r290_t3 = _r290_t0;
            var _r290_t4 = _r290_t3.length;
            var _r290_t5 = 0;
            while (_r290_t5 < _r290_t4) {
                _r290_t2 = _r290_t3[_r290_t5];
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'charTop')
                    r290_charTop = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'sw')
                    r290_sw = _r290_t2.right;
                if (_r290_t2 && _r290_t2 instanceof r270_xn$NamedParameterPair$2Lrc9b && _r290_t2.left === 'bbd')
                    r290_bbd = _r290_t2.right;
                _r290_t5 = _r290_t5 + 1;
            }
            var r290_charTop = r1_fallback(r290_charTop, _r290_t1[0]);
            var r290_sw = r1_fallback(r290_sw, _r290_t1[1], r270_Stroke);
            var r290_bbd = r1_fallback(r290_bbd, _r290_t1[2], 0);
            return function () {
                var _r296_t1;
                var _r296_t0 = this;
                var r296_currentGlyph = _r296_t0;
                var r296_oTop = r290_charTop * 0.55 + r290_sw / 2;
                var r296_fine = r290_sw * r270_CThin;
                var r296_coFine = Math.max(r290_sw * r270_CThin, r290_sw - r296_fine / 2);
                var r296_xMockBarStart = 0;
                var r296_yMockBarStart = r270_KnotAdj.BowlLeft.yOf(r296_oTop / 2 + r290_sw * 0.3);
                var r296_xTerminal0 = r1_mix(r270_SB, r270_RightSB, 0.6) - r270_HSwToV(0.5 * r290_sw);
                var r296_kDiagBbd = r270_DiagCorDs(r290_charTop - r296_yMockBarStart, r296_xTerminal0 - r296_xMockBarStart, r290_bbd);
                var r296_xTerminal = r296_xTerminal0 + r296_kDiagBbd * r290_bbd / 2;
                var r296_pStraightBarStart = 0.75 - r290_sw / r290_charTop;
                r296_currentGlyph.include(r270_intersection(r270_Rect(r290_charTop, -r290_charTop, -r270_Width, 2 * r270_Width), r270_dispiro(r270_widths.rhs(r296_fine), r270_KnotAdj.ArchBot.o(new r270_xn$NamedParameterPair$2Lrc9b('ty', r270_g4.left.start), r270_Middle + r290_bbd / 2 - r270_TanSlope * (r290_sw - r296_fine), r290_sw - r296_fine + 1 / 16), r270_archv(), r270_KnotAdj.BowlLeft.o(r270_g4.up.mid, r270_SB + r290_bbd + (r290_sw - r296_fine) * r270_HVContrast + 1 / 16, r296_oTop / 2), r270_arcvh(), r270_KnotAdj.ArchTop.o(r270_Middle + r290_bbd / 2, r296_oTop, r270_widths.rhs(r290_sw)), r270_archv(), r270_KnotAdj.BowlRight.o(r270_g4.down.mid, r270_RightSB, r296_oTop / 2), r270_arcvh(), r270_KnotAdj.ArchBot.o(new r270_xn$NamedParameterPair$2Lrc9b('ty', r270_g4.left.mid), r270_Middle + r290_bbd / 2, 0), r270_archv(), r270_KnotAdj.BowlLeft.o(r270_g4.up.mid, r270_SB + r290_bbd, r296_oTop / 2 + r290_sw * 0.3, r270_widths.rhs(r296_coFine)), r270_flat(r1_mix(r296_xMockBarStart + r290_bbd, r296_xTerminal, r296_pStraightBarStart), r1_mix(r296_yMockBarStart, r290_charTop, r296_pStraightBarStart), r270_widths.rhs(r290_sw)), r270_curl(r1_mix(r296_xMockBarStart + r290_bbd, r296_xTerminal, 2), r1_mix(r296_yMockBarStart, r290_charTop, 2)))));
                if (r290_bbd)
                    r296_currentGlyph.include(r270_HBar.t(r296_xTerminal - r296_kDiagBbd * r290_bbd, r296_xTerminal, r290_charTop, r290_sw));
                if (r290_bbd)
                    r296_currentGlyph.include(r270_intersection(r270_Rect(r290_charTop, -r290_charTop, -r270_Width, 2 * r270_Width), r270_dispiro(r270_KnotAdj.ArchBot.o(new r270_xn$NamedParameterPair$2Lrc9b('ty', r270_g4.left.mid), r270_Middle + r290_bbd / 2, 0, r270_widths.rhs(r290_sw)), r270_archv(), r270_KnotAdj.BowlLeft.o(r270_g4.up.mid, r270_SB, r296_oTop / 2 + r290_sw * 0.3), r270_flat(r1_mix(r296_xMockBarStart, r296_xTerminal - r296_kDiagBbd * r290_bbd, r296_pStraightBarStart), r1_mix(r296_yMockBarStart, r290_charTop, r296_pStraightBarStart)), r270_curl(r1_mix(r296_xMockBarStart, r296_xTerminal - r296_kDiagBbd * r290_bbd, 2), r1_mix(r296_yMockBarStart, r290_charTop, 2)))));
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('six.lnum.openContour', null, function () {
            var _r305_t1;
            var _r305_t0 = this;
            var r305_currentGlyph = _r305_t0;
            r305_currentGlyph.include(r270_MarkSet.capital());
            r305_currentGlyph.include(r270_OpenContourSixShape(r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('six.lnum.closedContour', null, function () {
            var _r310_t1;
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            r310_currentGlyph.include(r270_MarkSet.capital());
            r310_currentGlyph.include(r270_ClosedContourSixShape(r270_CAP));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('six.lnum.straightBar', null, function () {
            var _r315_t1;
            var _r315_t0 = this;
            var r315_currentGlyph = _r315_t0;
            r315_currentGlyph.include(r270_MarkSet.capital());
            r315_currentGlyph.include(r270_StraightBarSixShape(r270_CAP));
            return void 0;
        });
        r270_xn$selectvariant$7Hrq('six.lnum', r270_CodeLnum('6'), new r270_xn$NamedParameterPair$2Lrc9b('follow', 'six'));
        r270_alias('six.onum', r270_CodeOnum('6'), 'six.lnum');
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r270_BBS = _r270_t7.BBS;
        var r270_BBD = _r270_t7.BBD;
        return r270_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/six', 120798, function () {
            var _r322_t1;
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            r322_currentGlyph.include(r270_MarkSet.capital());
            r322_currentGlyph.include(r270_StraightBarSixShape(r270_CAP, new r270_xn$NamedParameterPair$2Lrc9b('sw', r270_BBS), new r270_xn$NamedParameterPair$2Lrc9b('bbd', r270_BBD)));
            return void 0;
        });
    });
    return void 0;
});
