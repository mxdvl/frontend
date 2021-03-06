// @flow
import { commercialPrebidSafeframe } from 'common/modules/experiments/tests/commercial-prebid-safeframe.js';
import { askFourEarning } from 'common/modules/experiments/tests/contributions-epic-ask-four-earning';
import { acquisitionsEpicAlwaysAskIfTagged } from 'common/modules/experiments/tests/acquisitions-epic-always-ask-if-tagged';
import { articlesViewedBanner } from 'common/modules/experiments/tests/contribs-banner-articles-viewed';
import { xaxisAdapterTest } from 'common/modules/experiments/tests/commercial-xaxis-adapter';
import { appnexusUSAdapter } from 'common/modules/experiments/tests/commercial-appnexus-us-adapter';
import { pangaeaAdapterTest } from 'common/modules/experiments/tests/commercial-pangaea-adapter';
import { amazonA9Test } from 'common/modules/experiments/tests/amazon-a9';
import { connatixTest } from 'common/modules/experiments/tests/connatix-ab-test';
import { frontendDotcomRenderingEpic } from 'common/modules/experiments/tests/frontend-dotcom-rendering-epic';
import { signInGate } from 'common/modules/experiments/tests/sign-in-gate';
import { signInGateVariant } from 'common/modules/experiments/tests/sign-in-gate-variant';
import { signInGateScale } from 'common/modules/experiments/tests/sign-in-gate-scale';
import { contributionsEpicPrecontributionReminderRoundTwo } from 'common/modules/experiments/tests/contributions-epic-precontribution-reminder-round-two';
import { contributionsEpicLiveblogDesignTestR1 } from 'common/modules/experiments/tests/contributions-epic-liveblog-design-test';
import { commercialGptPath } from 'common/modules/experiments/tests/commercial-gpt-path';
import { contributionsCovidBannerRoundTwo } from 'common/modules/experiments/tests/contribs-banner-covid-round-two';

export const concurrentTests: $ReadOnlyArray<ABTest> = [
    commercialPrebidSafeframe,
    amazonA9Test,
    connatixTest,
    xaxisAdapterTest,
    appnexusUSAdapter,
    pangaeaAdapterTest,
    signInGate,
    signInGateVariant,
    signInGateScale,
    commercialGptPath,
];

export const priorityEpicTest: EpicABTest = frontendDotcomRenderingEpic;

export const epicTests: $ReadOnlyArray<EpicABTest> = [
    contributionsEpicLiveblogDesignTestR1,
    contributionsEpicPrecontributionReminderRoundTwo,
    askFourEarning,
    acquisitionsEpicAlwaysAskIfTagged,
];

export const engagementBannerTests: $ReadOnlyArray<AcquisitionsABTest> = [
    contributionsCovidBannerRoundTwo,
    articlesViewedBanner,
];
