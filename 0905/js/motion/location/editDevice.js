(function(){

        this.enterDeviceEdit = function(data) {
                $('#deviceEdit_view').html( deviceEditRender(data) );
        }

        function deviceEditRender (data){

        	var htmlTmp = $.tmpPaser('<h2>\
                                       <div class="_deviceIcon back"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>\
                                       <input type="text" placeholder="" value="{deviceName}">\
                                    </h2>\
                                    <label>Icon</label>\
                                    <div class="mapImg hover">\
                                        <i class="fa {icon}" aria-hidden="true"></i>\
                                    </div>\
                                    <p><label>Gateway</label>\
                                      <select>\
                                       <option  selected>Gateway 1</option>\
                                      </select>\
                                    </p>\
                                    <p><label>Polling time(m)</label>\
                                       <input placeholder="0-20" value="20">\
                                    </p>\
                                    <div>\
                                       <div class="-btn def mr-b-50px">SAVE</div>\
                                       <div class="-btn def mr-b-50px">CANCEL</div>\
                                    </div>');

                return htmlTmp({
                        deviceName:$.j2h(data.display_name),
                        icon:dataTemp.deviceConfig[getType(data.bundle_name)].icon
                });
        }

})();