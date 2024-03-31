'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
import * as _s0_t1 from '../../../support/gr.mjs';
var _s0_t2;
export {
    _s0_t2 as apply
};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r266_block, _r266_t4, _r266_t6;
    var _r266_t3 = this;
    var _r266_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r266_t1 = _r266_t0.length;
    var _r266_t2 = 0;
    var _r266_t5 = _r266_t2 < _r266_t1;
    while (_r266_t5) {
        _r266_t6 = (r266_block = _r266_t0[_r266_t2], r266_block(_r266_t3), _r266_t2 = _r266_t2 + 1);
        _r266_t5 = _r266_t2 < _r266_t1;
    }
    return _r266_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r270_xn$Capture_Ext$2Lrc2b) {
    var _r270_t0, _r270_t1;
    r270_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r270_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Lower-Q', function (r271_xn$Capture$2Lrc8, r271_xn$ExportCapture$2Lrc4b) {
        var r271_suffix, r271_Body, r271_terminal, r271_sRT, r271_sRB, _r271_t13, _r271_t15, _r271_t16, _r271_t17, _r271_tag18;
        var _r271_t0 = r271_xn$Capture$2Lrc8;
        var r271_xn$createAndSaveGlyphImpl$2Lrc3c = _r271_t0['$createAndSaveGlyphImpl$'];
        var r271_xn$NamedParameterPair$2Lrc9b = _r271_t0['$NamedParameterPair$'];
        var r271_xn$Exec$2Lrc5 = _r271_t0['$Exec$'];
        var r271_MarkSet = _r271_t0.MarkSet;
        var r271_AS_BASE = _r271_t0.AS_BASE;
        var r271_ALSO_METRICS = _r271_t0.ALSO_METRICS;
        var r271_DivFrame = _r271_t0.DivFrame;
        var _r271_t1 = r271_xn$Capture$2Lrc8.Metrics;
        var r271_SB = _r271_t1.SB;
        var r271_CAP = _r271_t1.CAP;
        var r271_XH = _r271_t1.XH;
        var r271_Descender = _r271_t1.Descender;
        var r271_Downward = _r271_t1.Downward;
        var r271_O = _r271_t1.O;
        var r271_OX = _r271_t1.OX;
        var r271_Hook = _r271_t1.Hook;
        var r271_Stroke = _r271_t1.Stroke;
        var r271_Jut = _r271_t1.Jut;
        var r271_SLAB = _r271_t1.SLAB;
        var r271_HalfStroke = _r271_t1.HalfStroke;
        var r271_RightSB = _r271_t1.RightSB;
        var r271_Middle = _r271_t1.Middle;
        var r271_SideJut = _r271_t1.SideJut;
        var r271_SmallArchDepthB = _r271_t1.SmallArchDepthB;
        var r271_MidJutSide = _r271_t1.MidJutSide;
        var r271_HSwToV = _r271_t1.HSwToV;
        var _r271_t2 = r271_xn$Capture$2Lrc8.SpiroFns;
        var r271_flat = _r271_t2.flat;
        var r271_straight = _r271_t2.straight;
        var r271_widths = _r271_t2.widths;
        var r271_heading = _r271_t2.heading;
        var r271_dispiro = _r271_t2.dispiro;
        var _r271_t3 = r271_xn$Capture$2Lrc8.BooleFns;
        var r271_union = _r271_t3.union;
        var r271_intersection = _r271_t3.intersection;
        var _r271_t4 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r271_tagged = _r271_t4.tagged;
        var r271_OShapeOutline = _r271_t4.OShapeOutline;
        var r271_HSerif = _r271_t4.HSerif;
        var r271_NeedSlab = _r271_t4.NeedSlab;
        var r271_VBar = _r271_t4.VBar;
        var r271_FlipAround = _r271_t4.FlipAround;
        var _r271_t5 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r271_xn$selectvariant$7Hrq = _r271_t5['select-variant'];
        var r271_xn$referglyph$1aao = _r271_t5['refer-glyph'];
        var r271_alias = _r271_t5.alias;
        var r271_xn$deriveglyphs$7Hrq = _r271_t5['derive-glyphs'];
        var r271_xn$linkreducedvariant$5sIl8 = _r271_t5['link-reduced-variant'];
        var _r271_t6 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Shared-Metrics'].resolve();
        var r271_markHalfStroke = _r271_t6.markHalfStroke;
        var _r271_t7 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r271_LeaningAnchor = _r271_t7.LeaningAnchor;
        var _r271_t8 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_OBarLeft = _r271_t8.OBarLeft;
        var r271_OBarRight = _r271_t8.OBarRight;
        var r271_RightwardTailedBar = _r271_t8.RightwardTailedBar;
        var r271_DToothlessRise = _r271_t8.DToothlessRise;
        var _r271_t9 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_DMBlend = _r271_t9.DMBlend;
        var r271_DiagonalTailR = _r271_t9.DiagonalTailR;
        var r271_DiagonalTailStdDepth = _r271_t9.DiagonalTailStdDepth;
        var _r271_t10 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r271_TopHook = _r271_t10.TopHook;
        var r271_RetroflexHook = _r271_t10.RetroflexHook;
        var r271_xn$TERMINALNORMAL$9XZu = 0;
        var r271_xn$TERMINALTAILED$9XZu = 1;
        var r271_xn$TERMINALDIAG$9XZu = 2;
        var r271_RDiagTailedBar = function (r279_x0, r279_yb, r279_yt) {
            var _r279_t0, _r279_t1;
            var r279_df = r271_DivFrame(1);
            var r279_xMid = r279_x0 - r271_HSwToV(r271_HalfStroke);
            return r271_dispiro(r271_flat(r279_xMid, r279_yt, r271_widths.center.heading(r271_Stroke, r271_Downward)), r271_DiagonalTailR(r279_df, r279_xMid, r279_yb, 0.875 * r271_Hook - r271_Stroke * 0.375, r271_Stroke));
        };
        var r271_EaredBody = function (r280_terminal, r280_top, r280_bottom) {
            var _r280_t0, _r280_t1;
            return function () {
                var _r282_t0, _r282_t2;
                var _r282_t1 = this;
                var r282_currentGlyph = _r282_t1;
                r282_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, r271_Descender);
                r282_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('top', r280_top)));
                r282_currentGlyph.include((_r282_t0 = r280_terminal, _r282_t0 === r271_xn$TERMINALNORMAL$9XZu ? r271_VBar.r(r271_RightSB, r280_bottom, r280_top) : _r282_t0 === r271_xn$TERMINALTAILED$9XZu ? r271_RightwardTailedBar(r271_RightSB, r280_bottom, r280_top) : _r282_t0 === r271_xn$TERMINALDIAG$9XZu ? r271_RDiagTailedBar(r271_RightSB, r280_bottom, r280_top) : void 0));
                return void 0;
            };
        };
        var r271_EarlessCornerBody = function (r287_terminal, r287_top, r287_bottom) {
            var _r287_t0, _r287_t1;
            return function () {
                var _r289_t0, _r289_t2;
                var _r289_t1 = this;
                var r289_currentGlyph = _r289_t1;
                r289_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, r271_Descender);
                r289_currentGlyph.include(r271_OBarLeft.toothless(new r271_xn$NamedParameterPair$2Lrc9b('top', r287_top), new r271_xn$NamedParameterPair$2Lrc9b('rise', r271_DToothlessRise), new r271_xn$NamedParameterPair$2Lrc9b('mBlend', r271_DMBlend)));
                r289_currentGlyph.include(r271_FlipAround(r271_Middle, r287_top / 2));
                r289_currentGlyph.include((_r289_t0 = r287_terminal, _r289_t0 === r271_xn$TERMINALNORMAL$9XZu ? r271_VBar.r(r271_RightSB, r287_bottom, r287_top - r271_DToothlessRise) : _r289_t0 === r271_xn$TERMINALTAILED$9XZu ? r271_RightwardTailedBar(r271_RightSB, r287_bottom, r287_top - r271_DToothlessRise) : _r289_t0 === r271_xn$TERMINALDIAG$9XZu ? r271_RDiagTailedBar(r271_RightSB, r287_bottom, r287_top - r271_DToothlessRise) : void 0));
                return void 0;
            };
        };
        var r271_EarlessRoundedBody = function (r297_terminal, r297_top, r297_bottom) {
            var _r297_t0, _r297_t1;
            return function () {
                var _r299_t0, _r299_t2;
                var _r299_t1 = this;
                var r299_currentGlyph = _r299_t1;
                r299_currentGlyph.setBaseAnchor('trailing', r271_RightSB - r271_markHalfStroke, r271_Descender);
                r299_currentGlyph.include(r271_OBarLeft.rounded(new r271_xn$NamedParameterPair$2Lrc9b('top', r297_top), new r271_xn$NamedParameterPair$2Lrc9b('yTerminal', r271_SmallArchDepthB - r271_O)));
                r299_currentGlyph.include(r271_FlipAround(r271_Middle, r297_top / 2));
                r299_currentGlyph.include((_r299_t0 = r297_terminal, _r299_t0 === r271_xn$TERMINALNORMAL$9XZu ? r271_VBar.r(r271_RightSB, r297_bottom, r297_top - r271_SmallArchDepthB) : _r299_t0 === r271_xn$TERMINALTAILED$9XZu ? r271_RightwardTailedBar(r271_RightSB, r297_bottom, r297_top - r271_SmallArchDepthB) : _r299_t0 === r271_xn$TERMINALDIAG$9XZu ? r271_RDiagTailedBar(r271_RightSB, r297_bottom, r297_top - r271_SmallArchDepthB) : void 0));
                return void 0;
            };
        };
        var r271_RtSerif = function (r306_y) {
            var _r306_t0, _r306_t1;
            return r271_tagged('serifRT', r271_HSerif.rt(r271_RightSB, r306_y, r271_SideJut));
        };
        var r271_RtSerifAuto = function (r307_y) {
            var _r307_t0, _r307_t1;
            return r271_NeedSlab(r271_SLAB, r271_RtSerif(r307_y));
        };
        var r271_RbSerif = function (r308_y) {
            var _r308_t0, _r308_t1;
            return r271_tagged('serifRB', r271_union(r271_HSerif.lb(r271_RightSB - r271_HSwToV(r271_HalfStroke), r308_y, r271_MidJutSide), r271_HSerif.rb(r271_RightSB - r271_HSwToV(r271_HalfStroke), r308_y, r271_Jut)));
        };
        var r271_RbSerifAuto = function (r309_y) {
            var _r309_t0, _r309_t1;
            return r271_NeedSlab(r271_SLAB, r271_RbSerif(r309_y));
        };
        var r271_QConfig = r1_SuffixCfg.weave({
            '': r271_EaredBody,
            'earlessCorner': r271_EarlessCornerBody,
            'earlessRounded': r271_EarlessRoundedBody
        }, {
            'straight': r271_xn$TERMINALNORMAL$9XZu,
            'tailed': r271_xn$TERMINALTAILED$9XZu,
            'diagonalTailed': r271_xn$TERMINALDIAG$9XZu
        }, {
            'serifless': [
                void 0,
                void 0
            ],
            'motionSerifed': [
                r271_RtSerif,
                void 0
            ],
            'bottomSerifed': [
                void 0,
                r271_RbSerif
            ],
            'serifed': [
                r271_RtSerif,
                r271_RbSerif
            ]
        });
        var _r271_t11 = Object.entries(r271_QConfig)[Symbol.iterator]();
        var _r271_t12 = void 0;
        while (!(_r271_t12 = _r271_t11.next()).done) {
            _r271_t13 = _r271_t12.value;
            r271_suffix = _r271_t13[0];
            r271_Body = _r271_t13[1][0];
            r271_terminal = _r271_t13[1][1];
            r271_sRT = _r271_t13[1][2][0];
            r271_sRB = _r271_t13[1][2][1];
            _r271_t13[1][2];
            _r271_t13[1];
            (function () {
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('q.' + r271_suffix, null, function () {
                    var _r315_t1;
                    var _r315_t0 = this;
                    var r315_currentGlyph = _r315_t0;
                    r315_currentGlyph.include(r271_MarkSet.p());
                    r315_currentGlyph.include(r271_Body(r271_terminal, r271_XH, r271_Descender));
                    if (r271_sRT)
                        r315_currentGlyph.include(r271_sRT(r271_XH));
                    if (r271_sRB)
                        r315_currentGlyph.include(r271_sRB(r271_Descender));
                    r315_currentGlyph.include(r271_LeaningAnchor.Below.VBar.r(r271_RightSB));
                    return void 0;
                });
                r271_xn$createAndSaveGlyphImpl$2Lrc3c('QRTail.' + r271_suffix, null, function () {
                    var _r323_t1;
                    var _r323_t0 = this;
                    var r323_currentGlyph = _r323_t0;
                    r323_currentGlyph.include(r271_MarkSet.capDesc());
                    r323_currentGlyph.include(r271_Body(r271_terminal, r271_CAP, 0));
                    r323_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, 0));
                    if (r271_sRT)
                        r323_currentGlyph.include(r271_sRT(r271_CAP));
                    return void 0;
                });
                return r271_xn$createAndSaveGlyphImpl$2Lrc3c('qRTail.' + r271_suffix, null, function () {
                    var _r330_t1;
                    var _r330_t0 = this;
                    var r330_currentGlyph = _r330_t0;
                    r330_currentGlyph.include(r271_MarkSet.p());
                    r330_currentGlyph.include(r271_Body(r271_terminal, r271_XH, 0));
                    r330_currentGlyph.include(r271_RetroflexHook.rExt(r271_RightSB, 0));
                    if (r271_sRT)
                        r330_currentGlyph.include(r271_sRT(r271_XH));
                    return void 0;
                });
            }());
        }
        r271_xn$selectvariant$7Hrq('q', 'q');
        r271_xn$linkreducedvariant$5sIl8('q/sansSerif', 'q', r1_MathSansSerif);
        r271_alias('cyrl/qa', 1307, 'q');
        r271_xn$selectvariant$7Hrq('QRTail', 586, new r271_xn$NamedParameterPair$2Lrc9b('follow', 'qRTail'));
        r271_xn$selectvariant$7Hrq('qRTail', 587);
        r271_xn$selectvariant$7Hrq('q/hookTopBase', new r271_xn$NamedParameterPair$2Lrc9b('shapeFrom', 'q'));
        r271_xn$deriveglyphs$7Hrq('qHookTop', 672, 'q/hookTopBase', function (r337_src, r337_gr) {
            var _r337_t0, _r337_t1;
            return function () {
                var _r339_t1;
                var _r339_t0 = this;
                var r339_currentGlyph = _r339_t0;
                r339_currentGlyph.include(r271_xn$referglyph$1aao(r337_src), r271_AS_BASE, r271_ALSO_METRICS);
                r339_currentGlyph.include(r271_VBar.r(r271_RightSB, 0, r271_XH));
                r339_currentGlyph.include(r271_TopHook.rBarOuter(r271_RightSB, 0, r271_XH));
                return void 0;
            };
        });
        var _r271_t14 = r271_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Blackboard'].resolve();
        var r271_BBS = _r271_t14.BBS;
        var r271_BBD = _r271_t14.BBD;
        var r271_BBBarRight = _r271_t14.BBBarRight;
        return r271_xn$createAndSaveGlyphImpl$2Lrc3c('mathbb/q', 120162, function () {
            var _r346_t1;
            var _r346_t0 = this;
            var r346_currentGlyph = _r346_t0;
            r346_currentGlyph.include(r271_MarkSet.p());
            r346_currentGlyph.include(r271_BBBarRight(r271_RightSB, r271_Descender, r271_XH));
            r346_currentGlyph.include(r271_intersection(r271_OShapeOutline.NoOvershoot(r271_XH, 0, r271_SB, r271_RightSB - r271_BBD - r271_HSwToV(r271_BBS)), r271_VBar.l(r271_SB + r271_BBD + r271_OX, 0, r271_XH, r271_BBS)));
            r346_currentGlyph.include(r271_OBarRight.shape(new r271_xn$NamedParameterPair$2Lrc9b('left', r271_SB), new r271_xn$NamedParameterPair$2Lrc9b('right', r271_RightSB - r271_BBD), new r271_xn$NamedParameterPair$2Lrc9b('sw', r271_BBS)));
            return void 0;
        });
    });
    return void 0;
});
