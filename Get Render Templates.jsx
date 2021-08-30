// get AE render preset names
var names = getRenderPresetNames();
$.writeln(names);

function getRenderPresetNames() {
    var tempComp = app.project.items.addComp("dummy comp", 1280, 720, 1, 30, 30);

    var rqItem = app.project.renderQueue.items.add(tempComp);
    var om = rqItem.outputModules[0];
    var modules = om.templates;
    
    tempComp.remove();
    
    return modules;
    }