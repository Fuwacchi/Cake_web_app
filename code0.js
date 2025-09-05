gdjs.IntroCode = {};
gdjs.IntroCode.localVariables = [];
gdjs.IntroCode.GDTXT_9595PressEnterObjects1= [];
gdjs.IntroCode.GDTXT_9595PressEnterObjects2= [];
gdjs.IntroCode.GDLogoObjects1= [];
gdjs.IntroCode.GDLogoObjects2= [];
gdjs.IntroCode.GDTXT_9595LogoObjects1= [];
gdjs.IntroCode.GDTXT_9595LogoObjects2= [];
gdjs.IntroCode.GDIntro_9595BGObjects1= [];
gdjs.IntroCode.GDIntro_9595BGObjects2= [];
gdjs.IntroCode.GDBTN_9595AudioObjects1= [];
gdjs.IntroCode.GDBTN_9595AudioObjects2= [];
gdjs.IntroCode.GDCake_9595Layer1Objects1= [];
gdjs.IntroCode.GDCake_9595Layer1Objects2= [];
gdjs.IntroCode.GDCake_9595Layer2Objects1= [];
gdjs.IntroCode.GDCake_9595Layer2Objects2= [];
gdjs.IntroCode.GDCake_9595Layer3Objects1= [];
gdjs.IntroCode.GDCake_9595Layer3Objects2= [];
gdjs.IntroCode.GDCoating_9595Layer1Objects1= [];
gdjs.IntroCode.GDCoating_9595Layer1Objects2= [];
gdjs.IntroCode.GDCoating_9595Layer2Objects1= [];
gdjs.IntroCode.GDCoating_9595Layer2Objects2= [];
gdjs.IntroCode.GDCoating_9595Layer3Objects1= [];
gdjs.IntroCode.GDCoating_9595Layer3Objects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.IntroCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TXT_Logo"), gdjs.IntroCode.GDTXT_9595LogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TXT_PressEnter"), gdjs.IntroCode.GDTXT_9595PressEnterObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDTXT_9595LogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTXT_9595LogoObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDTXT_9595PressEnterObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTXT_9595PressEnterObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeInLogo");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.IntroCode.GDLogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "FadeInLogo") > 0.1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.IntroCode.GDLogoObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDLogoObjects1[0].getBehavior("Opacity").getOpacity()) < 255);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDLogoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TXT_Logo"), gdjs.IntroCode.GDTXT_9595LogoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDLogoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.IntroCode.GDLogoObjects1[i].getBehavior("Opacity").getOpacity() + (25));
}
}{for(var i = 0, len = gdjs.IntroCode.GDTXT_9595LogoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTXT_9595LogoObjects1[i].getBehavior("Opacity").setOpacity(gdjs.IntroCode.GDTXT_9595LogoObjects1[i].getBehavior("Opacity").getOpacity() + (25));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FadeInLogo");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.IntroCode.GDLogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("TXT_Logo"), gdjs.IntroCode.GDTXT_9595LogoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.IntroCode.GDLogoObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDLogoObjects1[0].getBehavior("Opacity").getOpacity()) == 255);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.IntroCode.GDTXT_9595LogoObjects1.length === 0 ) ? 0 :gdjs.IntroCode.GDTXT_9595LogoObjects1[0].getBehavior("Opacity").getOpacity()) == 255);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TXT_PressEnter"), gdjs.IntroCode.GDTXT_9595PressEnterObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDTXT_9595PressEnterObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDTXT_9595PressEnterObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Game_Audio.ogg", 1, true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Layers", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Game_Audio.ogg", 1, true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Layers", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDTXT_9595PressEnterObjects1.length = 0;
gdjs.IntroCode.GDTXT_9595PressEnterObjects2.length = 0;
gdjs.IntroCode.GDLogoObjects1.length = 0;
gdjs.IntroCode.GDLogoObjects2.length = 0;
gdjs.IntroCode.GDTXT_9595LogoObjects1.length = 0;
gdjs.IntroCode.GDTXT_9595LogoObjects2.length = 0;
gdjs.IntroCode.GDIntro_9595BGObjects1.length = 0;
gdjs.IntroCode.GDIntro_9595BGObjects2.length = 0;
gdjs.IntroCode.GDBTN_9595AudioObjects1.length = 0;
gdjs.IntroCode.GDBTN_9595AudioObjects2.length = 0;
gdjs.IntroCode.GDCake_9595Layer1Objects1.length = 0;
gdjs.IntroCode.GDCake_9595Layer1Objects2.length = 0;
gdjs.IntroCode.GDCake_9595Layer2Objects1.length = 0;
gdjs.IntroCode.GDCake_9595Layer2Objects2.length = 0;
gdjs.IntroCode.GDCake_9595Layer3Objects1.length = 0;
gdjs.IntroCode.GDCake_9595Layer3Objects2.length = 0;
gdjs.IntroCode.GDCoating_9595Layer1Objects1.length = 0;
gdjs.IntroCode.GDCoating_9595Layer1Objects2.length = 0;
gdjs.IntroCode.GDCoating_9595Layer2Objects1.length = 0;
gdjs.IntroCode.GDCoating_9595Layer2Objects2.length = 0;
gdjs.IntroCode.GDCoating_9595Layer3Objects1.length = 0;
gdjs.IntroCode.GDCoating_9595Layer3Objects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);
gdjs.IntroCode.GDTXT_9595PressEnterObjects1.length = 0;
gdjs.IntroCode.GDTXT_9595PressEnterObjects2.length = 0;
gdjs.IntroCode.GDLogoObjects1.length = 0;
gdjs.IntroCode.GDLogoObjects2.length = 0;
gdjs.IntroCode.GDTXT_9595LogoObjects1.length = 0;
gdjs.IntroCode.GDTXT_9595LogoObjects2.length = 0;
gdjs.IntroCode.GDIntro_9595BGObjects1.length = 0;
gdjs.IntroCode.GDIntro_9595BGObjects2.length = 0;
gdjs.IntroCode.GDBTN_9595AudioObjects1.length = 0;
gdjs.IntroCode.GDBTN_9595AudioObjects2.length = 0;
gdjs.IntroCode.GDCake_9595Layer1Objects1.length = 0;
gdjs.IntroCode.GDCake_9595Layer1Objects2.length = 0;
gdjs.IntroCode.GDCake_9595Layer2Objects1.length = 0;
gdjs.IntroCode.GDCake_9595Layer2Objects2.length = 0;
gdjs.IntroCode.GDCake_9595Layer3Objects1.length = 0;
gdjs.IntroCode.GDCake_9595Layer3Objects2.length = 0;
gdjs.IntroCode.GDCoating_9595Layer1Objects1.length = 0;
gdjs.IntroCode.GDCoating_9595Layer1Objects2.length = 0;
gdjs.IntroCode.GDCoating_9595Layer2Objects1.length = 0;
gdjs.IntroCode.GDCoating_9595Layer2Objects2.length = 0;
gdjs.IntroCode.GDCoating_9595Layer3Objects1.length = 0;
gdjs.IntroCode.GDCoating_9595Layer3Objects2.length = 0;


return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
