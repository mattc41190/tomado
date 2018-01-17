const preferencesWindow = require('./preferences-window.js').preferencesWindow;

const menuTemplate = [
	{
		label: 'Options',
		submenu: [
			{
				label: 'Preferences',
        accelerator: 'CmdOrCtrl+,',
				click: () => {
          preferencesWindow(this);
        }
			}
		]
	}
]

module.exports = menuTemplate;
