gdjs.LayersCode = {};
gdjs.LayersCode.localVariables = [];
gdjs.LayersCode.GDBTN_95951LayerObjects1= [];
gdjs.LayersCode.GDBTN_95951LayerObjects2= [];
gdjs.LayersCode.GDBTN_95952LayerObjects1= [];
gdjs.LayersCode.GDBTN_95952LayerObjects2= [];
gdjs.LayersCode.GDBTN_95953LayerObjects1= [];
gdjs.LayersCode.GDBTN_95953LayerObjects2= [];
gdjs.LayersCode.GDCake_95951Objects1= [];
gdjs.LayersCode.GDCake_95951Objects2= [];
gdjs.LayersCode.GDCake_95952Objects1= [];
gdjs.LayersCode.GDCake_95952Objects2= [];
gdjs.LayersCode.GDCake_95953Objects1= [];
gdjs.LayersCode.GDCake_95953Objects2= [];
gdjs.LayersCode.GDBTN_9595NextObjects1= [];
gdjs.LayersCode.GDBTN_9595NextObjects2= [];
gdjs.LayersCode.GDPLY_9595MusicObjects1= [];
gdjs.LayersCode.GDPLY_9595MusicObjects2= [];
gdjs.LayersCode.GDIntro_9595BGObjects1= [];
gdjs.LayersCode.GDIntro_9595BGObjects2= [];
gdjs.LayersCode.GDBTN_9595AudioObjects1= [];
gdjs.LayersCode.GDBTN_9595AudioObjects2= [];
gdjs.LayersCode.GDCake_9595Layer1Objects1= [];
gdjs.LayersCode.GDCake_9595Layer1Objects2= [];
gdjs.LayersCode.GDCake_9595Layer2Objects1= [];
gdjs.LayersCode.GDCake_9595Layer2Objects2= [];
gdjs.LayersCode.GDCake_9595Layer3Objects1= [];
gdjs.LayersCode.GDCake_9595Layer3Objects2= [];
gdjs.LayersCode.GDCoating_9595Layer1Objects1= [];
gdjs.LayersCode.GDCoating_9595Layer1Objects2= [];
gdjs.LayersCode.GDCoating_9595Layer2Objects1= [];
gdjs.LayersCode.GDCoating_9595Layer2Objects2= [];
gdjs.LayersCode.GDCoating_9595Layer3Objects1= [];
gdjs.LayersCode.GDCoating_9595Layer3Objects2= [];


gdjs.LayersCode.mapOfGDgdjs_9546LayersCode_9546GDBTN_95959595AudioObjects1Objects = Hashtable.newFrom({"BTN_Audio": gdjs.LayersCode.GDBTN_9595AudioObjects1});
gdjs.LayersCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(2).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_Next"), gdjs.LayersCode.GDBTN_9595NextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_1"), gdjs.LayersCode.GDCake_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_2"), gdjs.LayersCode.GDCake_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_3"), gdjs.LayersCode.GDCake_95953Objects1);
gdjs.copyArray(runtimeScene.getObjects("PLY_Music"), gdjs.LayersCode.GDPLY_9595MusicObjects1);
{for(var i = 0, len = gdjs.LayersCode.GDCake_95951Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95951Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95952Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95952Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95953Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95953Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDBTN_9595NextObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDBTN_9595NextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDPLY_9595MusicObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDPLY_9595MusicObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_1Layer"), gdjs.LayersCode.GDBTN_95951LayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LayersCode.GDBTN_95951LayerObjects1.length;i<l;++i) {
    if ( gdjs.LayersCode.GDBTN_95951LayerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LayersCode.GDBTN_95951LayerObjects1[k] = gdjs.LayersCode.GDBTN_95951LayerObjects1[i];
        ++k;
    }
}
gdjs.LayersCode.GDBTN_95951LayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_Next"), gdjs.LayersCode.GDBTN_9595NextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_1"), gdjs.LayersCode.GDCake_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_2"), gdjs.LayersCode.GDCake_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_3"), gdjs.LayersCode.GDCake_95953Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95951Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95951Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95952Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95952Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95953Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95953Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDBTN_9595NextObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDBTN_9595NextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_2Layer"), gdjs.LayersCode.GDBTN_95952LayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LayersCode.GDBTN_95952LayerObjects1.length;i<l;++i) {
    if ( gdjs.LayersCode.GDBTN_95952LayerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LayersCode.GDBTN_95952LayerObjects1[k] = gdjs.LayersCode.GDBTN_95952LayerObjects1[i];
        ++k;
    }
}
gdjs.LayersCode.GDBTN_95952LayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_Next"), gdjs.LayersCode.GDBTN_9595NextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_1"), gdjs.LayersCode.GDCake_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_2"), gdjs.LayersCode.GDCake_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_3"), gdjs.LayersCode.GDCake_95953Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(2);
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95952Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95952Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95951Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95951Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95953Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95953Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDBTN_9595NextObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDBTN_9595NextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_3Layer"), gdjs.LayersCode.GDBTN_95953LayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LayersCode.GDBTN_95953LayerObjects1.length;i<l;++i) {
    if ( gdjs.LayersCode.GDBTN_95953LayerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LayersCode.GDBTN_95953LayerObjects1[k] = gdjs.LayersCode.GDBTN_95953LayerObjects1[i];
        ++k;
    }
}
gdjs.LayersCode.GDBTN_95953LayerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_Next"), gdjs.LayersCode.GDBTN_9595NextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_1"), gdjs.LayersCode.GDCake_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_2"), gdjs.LayersCode.GDCake_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cake_3"), gdjs.LayersCode.GDCake_95953Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95953Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95953Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95951Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95951Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDCake_95952Objects1.length ;i < len;++i) {
    gdjs.LayersCode.GDCake_95952Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.LayersCode.GDBTN_9595NextObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDBTN_9595NextObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_Next"), gdjs.LayersCode.GDBTN_9595NextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LayersCode.GDBTN_9595NextObjects1.length;i<l;++i) {
    if ( gdjs.LayersCode.GDBTN_9595NextObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LayersCode.GDBTN_9595NextObjects1[k] = gdjs.LayersCode.GDBTN_9595NextObjects1[i];
        ++k;
    }
}
gdjs.LayersCode.GDBTN_9595NextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "DecorationScene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BTN_Audio"), gdjs.LayersCode.GDBTN_9595AudioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LayersCode.mapOfGDgdjs_9546LayersCode_9546GDBTN_95959595AudioObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_Audio"), gdjs.LayersCode.GDBTN_9595AudioObjects1);
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}{for(var i = 0, len = gdjs.LayersCode.GDBTN_9595AudioObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDBTN_9595AudioObjects1[i].getBehavior("Animation").setAnimationName("mute");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BTN_Audio"), gdjs.LayersCode.GDBTN_9595AudioObjects1);
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 100);
}{for(var i = 0, len = gdjs.LayersCode.GDBTN_9595AudioObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDBTN_9595AudioObjects1[i].getBehavior("Animation").setAnimationName("unmute");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PLY_Music"), gdjs.LayersCode.GDPLY_9595MusicObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LayersCode.GDPLY_9595MusicObjects1.length;i<l;++i) {
    if ( gdjs.LayersCode.GDPLY_9595MusicObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LayersCode.GDPLY_9595MusicObjects1[k] = gdjs.LayersCode.GDPLY_9595MusicObjects1[i];
        ++k;
    }
}
gdjs.LayersCode.GDPLY_9595MusicObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.LayersCode.GDPLY_9595MusicObjects1 */
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Game_Audio.ogg", 1, true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}{for(var i = 0, len = gdjs.LayersCode.GDPLY_9595MusicObjects1.length ;i < len;++i) {
    gdjs.LayersCode.GDPLY_9595MusicObjects1[i].hide();
}
}}

}


};

gdjs.LayersCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LayersCode.GDBTN_95951LayerObjects1.length = 0;
gdjs.LayersCode.GDBTN_95951LayerObjects2.length = 0;
gdjs.LayersCode.GDBTN_95952LayerObjects1.length = 0;
gdjs.LayersCode.GDBTN_95952LayerObjects2.length = 0;
gdjs.LayersCode.GDBTN_95953LayerObjects1.length = 0;
gdjs.LayersCode.GDBTN_95953LayerObjects2.length = 0;
gdjs.LayersCode.GDCake_95951Objects1.length = 0;
gdjs.LayersCode.GDCake_95951Objects2.length = 0;
gdjs.LayersCode.GDCake_95952Objects1.length = 0;
gdjs.LayersCode.GDCake_95952Objects2.length = 0;
gdjs.LayersCode.GDCake_95953Objects1.length = 0;
gdjs.LayersCode.GDCake_95953Objects2.length = 0;
gdjs.LayersCode.GDBTN_9595NextObjects1.length = 0;
gdjs.LayersCode.GDBTN_9595NextObjects2.length = 0;
gdjs.LayersCode.GDPLY_9595MusicObjects1.length = 0;
gdjs.LayersCode.GDPLY_9595MusicObjects2.length = 0;
gdjs.LayersCode.GDIntro_9595BGObjects1.length = 0;
gdjs.LayersCode.GDIntro_9595BGObjects2.length = 0;
gdjs.LayersCode.GDBTN_9595AudioObjects1.length = 0;
gdjs.LayersCode.GDBTN_9595AudioObjects2.length = 0;
gdjs.LayersCode.GDCake_9595Layer1Objects1.length = 0;
gdjs.LayersCode.GDCake_9595Layer1Objects2.length = 0;
gdjs.LayersCode.GDCake_9595Layer2Objects1.length = 0;
gdjs.LayersCode.GDCake_9595Layer2Objects2.length = 0;
gdjs.LayersCode.GDCake_9595Layer3Objects1.length = 0;
gdjs.LayersCode.GDCake_9595Layer3Objects2.length = 0;
gdjs.LayersCode.GDCoating_9595Layer1Objects1.length = 0;
gdjs.LayersCode.GDCoating_9595Layer1Objects2.length = 0;
gdjs.LayersCode.GDCoating_9595Layer2Objects1.length = 0;
gdjs.LayersCode.GDCoating_9595Layer2Objects2.length = 0;
gdjs.LayersCode.GDCoating_9595Layer3Objects1.length = 0;
gdjs.LayersCode.GDCoating_9595Layer3Objects2.length = 0;

gdjs.LayersCode.eventsList0(runtimeScene);
gdjs.LayersCode.GDBTN_95951LayerObjects1.length = 0;
gdjs.LayersCode.GDBTN_95951LayerObjects2.length = 0;
gdjs.LayersCode.GDBTN_95952LayerObjects1.length = 0;
gdjs.LayersCode.GDBTN_95952LayerObjects2.length = 0;
gdjs.LayersCode.GDBTN_95953LayerObjects1.length = 0;
gdjs.LayersCode.GDBTN_95953LayerObjects2.length = 0;
gdjs.LayersCode.GDCake_95951Objects1.length = 0;
gdjs.LayersCode.GDCake_95951Objects2.length = 0;
gdjs.LayersCode.GDCake_95952Objects1.length = 0;
gdjs.LayersCode.GDCake_95952Objects2.length = 0;
gdjs.LayersCode.GDCake_95953Objects1.length = 0;
gdjs.LayersCode.GDCake_95953Objects2.length = 0;
gdjs.LayersCode.GDBTN_9595NextObjects1.length = 0;
gdjs.LayersCode.GDBTN_9595NextObjects2.length = 0;
gdjs.LayersCode.GDPLY_9595MusicObjects1.length = 0;
gdjs.LayersCode.GDPLY_9595MusicObjects2.length = 0;
gdjs.LayersCode.GDIntro_9595BGObjects1.length = 0;
gdjs.LayersCode.GDIntro_9595BGObjects2.length = 0;
gdjs.LayersCode.GDBTN_9595AudioObjects1.length = 0;
gdjs.LayersCode.GDBTN_9595AudioObjects2.length = 0;
gdjs.LayersCode.GDCake_9595Layer1Objects1.length = 0;
gdjs.LayersCode.GDCake_9595Layer1Objects2.length = 0;
gdjs.LayersCode.GDCake_9595Layer2Objects1.length = 0;
gdjs.LayersCode.GDCake_9595Layer2Objects2.length = 0;
gdjs.LayersCode.GDCake_9595Layer3Objects1.length = 0;
gdjs.LayersCode.GDCake_9595Layer3Objects2.length = 0;
gdjs.LayersCode.GDCoating_9595Layer1Objects1.length = 0;
gdjs.LayersCode.GDCoating_9595Layer1Objects2.length = 0;
gdjs.LayersCode.GDCoating_9595Layer2Objects1.length = 0;
gdjs.LayersCode.GDCoating_9595Layer2Objects2.length = 0;
gdjs.LayersCode.GDCoating_9595Layer3Objects1.length = 0;
gdjs.LayersCode.GDCoating_9595Layer3Objects2.length = 0;


return;

}

gdjs['LayersCode'] = gdjs.LayersCode;
