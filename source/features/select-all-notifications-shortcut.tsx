import select from 'select-dom';
import * as pageDetect from 'github-url-detection';

import features from '../feature-manager';
import {registerHotkey} from '../github-helpers/hotkey';

function selectAllNotifications(): void {
	select('.js-notifications-mark-all-prompt')!.click();
}

function init(): Deinit {
	return registerHotkey('a', selectAllNotifications);
}

void features.add(import.meta.url, {
	shortcuts: {
		a: 'Select all notifications',
	},
	include: [
		pageDetect.isNotifications,
	],
	exclude: [
		pageDetect.isBlank, // Empty notification list
	],
	awaitDomReady: false,
	deduplicate: 'has-rgh',
	init,
});
