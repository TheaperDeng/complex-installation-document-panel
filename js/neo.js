var ais = ["pytorch", "tensorflow", "prophet", "pmdarima"];
var releases=["stable", "nightly"]
var oss=["linux", "win"];
var ways=["pypi", "docker"];
var hardwares=["singlenode", "cluster"];
var automls=["automlyes", "automlno"]
var ai="pytorch";
var os="linux";
var release="nightly";
var way="pypi";
var hardware="singlenode";
var automl="automlno"


function set_color(id){
   $("#"+id).css("background-color","yellow");
}

function reset_color(list){
    for (btn in list){
        $("#"+list[btn]).css("background-color","buttonface");
    }
}

function refresh_cmd(){
    reset_color(ais);
    reset_color(oss);
    reset_color(releases);
    reset_color(ways);
    reset_color(hardwares);
    reset_color(automls);
    set_color(ai);
    set_color(os);
    set_color(release);
    set_color(way);
    set_color(hardware);
    set_color(automl);

    var cmd = "NA";
    if(ai=="pytorch"){
        if(way=="docker"){
            cmd="Please refer to docker installation guide.";
        }else{
            if(os=="win"){
                cmd="Please refer to windows installation guide.";
            }else{
                if(way=="pypi"){
                    if(hardware=="singlenode"){
                        if(automl=="automlno"){
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[pytorch]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[pytorch]"
                        }else{
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[pytorch, automl]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[pytorch, automl]"
                        }
                    }
                    if(hardware=="cluster"){
                        if(automl=="automlno"){
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[pytorch, distributed]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[pytorch, distributed]"
                        }else{
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[pytorch, distributed, automl]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[pytorch, distributed, automl]"
                        }
                    }
                }
            }
        }
    }
    
    if(ai=="tensorflow"){
        if(way=="docker"){
            cmd="Please refer to docker installation guide.";
        }else{
            if(os=="win"){
                cmd="Please refer to windows installation guide.";
            }else{
                if(way=="pypi"){
                    if(hardware=="singlenode"){
                        if(automl=="automlno"){
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[tensorflow]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[tensorflow]"
                        }else{
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[tensorflow, automl]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[tensorflow, automl]"
                        }
                    }
                    if(hardware=="cluster"){
                        if(automl=="automlno"){
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[tensorflow, distributed]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[tensorflow, distributed]"
                        }else{
                            if(release=="nightly")
                                cmd="pip install --pre --upgrade bigdl-chronos[tensorflow, distributed, automl]"
                            if(release=="stable")
                                cmd="pip install bigdl-chronos[tensorflow, distributed, automl]"
                        }
                    }
                }
            }
        }
    }

    if(ai=="prophet"){
        if(way=="docker"){
            cmd="Please refer to docker installation guide.";
        }else{
            if(os=="win"){
                cmd="Please refer to windows installation guide.";
            }else{
                if(way=="pypi"){
                    cmd="pip install bigdl-chronos; pip install prophet==1.1.0"
                }
            }
        }
    }

    if(ai=="pmdarima"){
        if(way=="docker"){
            cmd="Please refer to docker installation guide.";
        }else{
            if(os=="win"){
                cmd="Please refer to windows installation guide.";
            }else{
                if(way=="pypi"){
                    cmd="pip install bigdl-chronos; pip install pmdarima"
                }
            }
        }
    }
    $("#cmd").html(cmd);
}

function set_ai(id){
    ai=id;
    refresh_cmd();
}

function set_os(id){
    os=id;
    refresh_cmd();
}

function set_rel(id){
    release=id;
    refresh_cmd();
}

function set_way(id){
    way=id;
    refresh_cmd();
}

function set_hardware(id){
    hardware=id;
    refresh_cmd();
}

function set_automl(id){
    automl=id;
    refresh_cmd();
}

$("button").click(function(){
    //alert($(this).attr("id")); 
    var id = $(this).attr("id");
    if (ais.indexOf(id)>=0){
        set_ai(id);
    }

    if (oss.indexOf(id)>=0){
        set_os(id);
    }
    if (releases.indexOf(id)>=0){
        set_rel(id);
    }

    if (ways.indexOf(id)>=0){
        set_way(id);
    }

    if (hardwares.indexOf(id)>=0){
        set_hardware(id);
    }

    if (automls.indexOf(id)>=0){
        set_automl(id);
    }
});

refresh_cmd();