'use strict';
import * as _s0_t0 from '../../../support/utils.mjs';
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
    r269_xn$Capture_Ext$2Lrc2b['$Exec$'].defineGlyphBlock(r269_xn$Capture_Ext$2Lrc2b, 'Letter-Latin-Thorn', function (r270_xn$Capture$2Lrc8, r270_xn$ExportCapture$2Lrc4b) {
        var _r270_t8, _r270_t9;
        var _r270_t0 = r270_xn$Capture$2Lrc8;
        var r270_xn$createAndSaveGlyphImpl$2Lrc3c = _r270_t0['$createAndSaveGlyphImpl$'];
        var r270_xn$NamedParameterPair$2Lrc9b = _r270_t0['$NamedParameterPair$'];
        var r270_xn$Exec$2Lrc5 = _r270_t0['$Exec$'];
        var r270_MarkSet = _r270_t0.MarkSet;
        var _r270_t1 = r270_xn$Capture$2Lrc8.Metrics;
        var r270_SB = _r270_t1.SB;
        var r270_CAP = _r270_t1.CAP;
        var r270_XH = _r270_t1.XH;
        var r270_Ascender = _r270_t1.Ascender;
        var r270_Descender = _r270_t1.Descender;
        var r270_Rightward = _r270_t1.Rightward;
        var r270_Leftward = _r270_t1.Leftward;
        var r270_O = _r270_t1.O;
        var r270_Stroke = _r270_t1.Stroke;
        var r270_SLAB = _r270_t1.SLAB;
        var r270_RightSB = _r270_t1.RightSB;
        var r270_ArchDepthA = _r270_t1.ArchDepthA;
        var r270_ArchDepthB = _r270_t1.ArchDepthB;
        var r270_CorrectionOMidS = _r270_t1.CorrectionOMidS;
        var _r270_t2 = r270_xn$Capture$2Lrc8.SpiroFns;
        var r270_g4 = _r270_t2.g4;
        var r270_flat = _r270_t2.flat;
        var r270_curl = _r270_t2.curl;
        var r270_widths = _r270_t2.widths;
        var r270_heading = _r270_t2.heading;
        var r270_archv = _r270_t2.archv;
        var r270_arcvh = _r270_t2.arcvh;
        var r270_dispiro = _r270_t2.dispiro;
        var _r270_t3 = r270_xn$Capture$2Lrc8.BooleFns;
        var _r270_t4 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore.CommonShapes.resolve();
        var r270_VBar = _r270_t4.VBar;
        var _r270_t5 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Common-Derivatives'].resolve();
        var r270_xn$derivecomposites$7Hrq = _r270_t5['derive-composites'];
        var _r270_t6 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Mark-Adjustment'].resolve();
        var r270_LeaningAnchor = _r270_t6.LeaningAnchor;
        var _r270_t7 = r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Shared-Shapes'].resolve();
        var r270_OBarLeft = _r270_t7.OBarLeft;
        var r270_LetterBarOverlay = _r270_t7.LetterBarOverlay;
        var r270_SerifFrame = _r270_t7.SerifFrame;
        r270_xn$Capture$2Lrc8['$Exec$'].glyphBlockStore['Letter-Latin-Lower-P'].resolve();
        var r270_xThornLeftStroke = r270_SB * 1.25;
        var r270_yThornBowlBot = r270_CAP * 0.25 + (r270_SLAB ? r270_Stroke * 0.125 : 0);
        var r270_yThornBowlTop = r270_CAP - 0.7 * r270_yThornBowlBot + (r270_SLAB ? -0.125 : 0.25) * r270_Stroke;
        var r270_ThornShape = function (r276_yBowlBot, r276_yBowlTop) {
            var _r276_t0, _r276_t1;
            return function () {
                var r278_sf, _r278_t1;
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                var r278_turn = r1_mix(r276_yBowlTop, r276_yBowlBot, r270_ArchDepthB / (r270_ArchDepthA + r270_ArchDepthB));
                var r278_turnRadius = (r276_yBowlTop - r276_yBowlBot) / 2;
                r278_currentGlyph.include(r270_dispiro(r270_widths.rhs(), r270_flat(r270_xThornLeftStroke, r276_yBowlTop, r270_heading(r270_Rightward)), r270_curl(r270_RightSB - r278_turnRadius - r270_CorrectionOMidS, r276_yBowlTop), r270_archv(), r270_g4(r270_RightSB - r270_O, r278_turn), r270_arcvh(), r270_flat(r270_RightSB - r278_turnRadius + r270_CorrectionOMidS, r276_yBowlBot), r270_curl(r270_xThornLeftStroke, r276_yBowlBot, r270_heading(r270_Leftward))));
                r278_currentGlyph.include(r270_VBar.l(r270_xThornLeftStroke, 0, r270_CAP));
                if (r270_SLAB) {
                    r278_sf = r270_SerifFrame(r270_Ascender, 0, r270_xThornLeftStroke, r270_RightSB);
                    r278_currentGlyph.include(function () {
                        var _r283_t1;
                        var _r283_t0 = this;
                        var r283_currentGlyph = _r283_t0;
                        r283_currentGlyph.include(r278_sf.lt.fullSide, true, true);
                        r283_currentGlyph.include(r278_sf.lb.fullSide);
                        return void 0;
                    });
                }
                return void 0;
            };
        };
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('Thorn', 222, function () {
            var _r288_t1;
            var _r288_t0 = this;
            var r288_currentGlyph = _r288_t0;
            r288_currentGlyph.include(r270_MarkSet.capital());
            r288_currentGlyph.include(r270_ThornShape(r270_yThornBowlBot, r270_yThornBowlTop));
            r288_currentGlyph.include(r270_LeaningAnchor.Above.VBar.l(r270_xThornLeftStroke));
            r288_currentGlyph.include(r270_LeaningAnchor.Below.VBar.l(r270_xThornLeftStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('grek/Sho', 1015, function () {
            var _r295_t1;
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            r295_currentGlyph.include(r270_MarkSet.capital());
            var r295_d = r1_mix(r270_yThornBowlBot, r270_CAP - r270_yThornBowlTop, 0.5);
            r295_currentGlyph.include(r270_ThornShape(r295_d, r270_CAP - r295_d));
            r295_currentGlyph.include(r270_LeaningAnchor.Above.VBar.l(r270_xThornLeftStroke));
            r295_currentGlyph.include(r270_LeaningAnchor.Below.VBar.l(r270_xThornLeftStroke));
            return void 0;
        });
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ThornBarTop/Overlay', null, r270_LetterBarOverlay.l.in(new r270_xn$NamedParameterPair$2Lrc9b('x', r270_xThornLeftStroke), new r270_xn$NamedParameterPair$2Lrc9b('top', r270_CAP - (r270_SLAB ? r270_Stroke : 0)), new r270_xn$NamedParameterPair$2Lrc9b('bot', r270_CAP - r1_mix(r270_yThornBowlBot, r270_CAP - r270_yThornBowlTop, 0.5))));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('thornBarTop/Overlay', null, r270_LetterBarOverlay.l.in(new r270_xn$NamedParameterPair$2Lrc9b('x', r270_SB), new r270_xn$NamedParameterPair$2Lrc9b('top', r270_Ascender - (r270_SLAB ? r270_Stroke : 0)), new r270_xn$NamedParameterPair$2Lrc9b('bot', r270_XH)));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('ThornBarBot/Overlay', null, r270_LetterBarOverlay.l.in(new r270_xn$NamedParameterPair$2Lrc9b('x', r270_xThornLeftStroke), new r270_xn$NamedParameterPair$2Lrc9b('bot', 0 + (r270_SLAB ? r270_Stroke : 0)), new r270_xn$NamedParameterPair$2Lrc9b('top', r1_mix(r270_yThornBowlBot, r270_CAP - r270_yThornBowlTop, 0.5))));
        r270_xn$createAndSaveGlyphImpl$2Lrc3c('thornBarBot/Overlay', null, r270_LetterBarOverlay.l.in(new r270_xn$NamedParameterPair$2Lrc9b('x', r270_SB), new r270_xn$NamedParameterPair$2Lrc9b('bot', r270_Descender + (r270_SLAB ? r270_Stroke : 0)), new r270_xn$NamedParameterPair$2Lrc9b('top', 0)));
        r270_xn$derivecomposites$7Hrq('ThornBarTop', 42852, 'grek/Sho', 'ThornBarTop/Overlay');
        r270_xn$derivecomposites$7Hrq('thornBarTop', 42853, 'thorn', 'thornBarTop/Overlay');
        r270_xn$derivecomposites$7Hrq('ThornBarBot', 42854, 'grek/Sho', 'ThornBarBot/Overlay');
        return r270_xn$derivecomposites$7Hrq('thornBarBot', 42855, 'thorn', 'thornBarBot/Overlay');
    });
    return void 0;
});
