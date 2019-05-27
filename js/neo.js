var ais = ["mxnet", "bigdl", "tensorflow", "caffe", "pytorch"];
var releases=["stable", "nightly"]
var oss=["linux", "win", "mac"];
var ways=["conda", "pip", "source"]
var ai="pytorch";
var os="linux";
var release="stable";
var way="pip";


function set_color(id){
   $("#"+id).css("background-color","yellow");
}

function reset_color(list){
    for (btn in list){
        //console.log(list[btn]);
        $("#"+list[btn]).css("background-color","buttonface");
    }
}

function refresh_cmd(){
    reset_color(ais);
    reset_color(oss);
    reset_color(releases);
    reset_color(ways);
    set_color(ai);
    set_color(os);
    set_color(release);
    set_color(way);

    var cmd = "";
    if(ai=="mxnet"){
        if(way=="pip"){
            if(release=="stable")
                cmd = "pip install mxnet-mkl";
            else
                cmd = "pip install mxnet-mkl==1.5.0b20190517";
        }
        if(way=="source"){
            if(os=="linux")
                cmd="To build from source, refer to the <a href=https://mxnet.incubator.apache.org/versions/master/install/ubuntu_setup.html>MXNet Ubuntu installation guide</a>.";
            if(os=="win")
                cmd="To build from source, refer to the <a href=https://mxnet.incubator.apache.org/versions/master/install/windows_setup.html>MXNet Windows installation guide</a>.<br>";
            if(os=="mac")
                cmd="To build from source, refer to the <a href=https://mxnet.incubator.apache.org/versions/master/install/osx_setup.html>MXNet macOS installation guide</a>.<br>";
            
        }
            
    }
    if(ai=="bigdl"){
        cmd = "";
        if(way=="pip")
            cmd = "pip install bigdl";
        
        if(way=="source")
            cmd = "https://bigdl-project.github.io/0.8.0/#ScalaUserGuide/install-build-src/"
    }

    if(ai=="pytorch"){
        if(way=="pip"){
            if(release=="stable"){
                cmd = "pip3 install https://download.pytorch.org/whl/cpu/torch-1.1.0-cp37-cp37m-linux_x86_64.whl<br>\
pip3 install torchvision";
                }
            else
            {
                cmd = "pip install numpy torchvision_nightly <br>\
pip install torch_nightly -f https://download.pytorch.org/whl/nightly/cpu/torch_nightly.html";
            }
        }
        if(way=="conda"){
            if(os=="linux" || os =="win"){
                if(release=="stable")
                    cmd = "conda install pytorch-cpu torchvision-cpu -c pytorch";
                else
                    cmd = "conda install pytorch-nightly-cpu -c pytorch";
            }
            if(os=="mac" ){
                if(release=="stable")
                    cmd = "conda install pytorch torchvision -c pytorch";
                else
                    cmd = "conda install pytorch-nightly -c pytorch";
            }
        }
        if(way=="source"){
            cmd="# Follow instructions at this URL: https://github.com/pytorch/pytorch#from-source";
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

$("button").click(function(){
    //alert($(this).attr("id")); 
    var id = $(this).attr("id");
    if (ais.indexOf(id)>=0){
        if(id=="bigdl" && way=="conda"){
            set_way("pip");
        };
        set_ai(id);
    }

    if (oss.indexOf(id)>=0){
        set_os(id);
    }
    if (releases.indexOf(id)>=0){
        set_rel(id);
    }

    if (ways.indexOf(id)>=0){
        if(ai=="bigdl" && id=="conda") return;
        set_way(id);
    }
});

refresh_cmd();