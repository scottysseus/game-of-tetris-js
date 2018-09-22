import TextConstants from '../textConstants';
import {makeTextInteractive, getTextOptions} from '../phaserUtils';

export function getBackButton(gameObjectFactory, backSceneName, currentScene) {
    const backOptions = getTextOptions(TextConstants.MENU_OPTION_SIZE);
    let backButton = gameObjectFactory.text(TextConstants.MARGIN_X, TextConstants.MARGIN_Y, "BACK", backOptions).setOrigin(0, 0);
    makeTextInteractive(backButton);

    backButton.on('pointerup', function() {
        currentScene.scene.get(backSceneName).scene.start();
        currentScene.scene.stop();
    }.bind(this));

    return backButton;
}