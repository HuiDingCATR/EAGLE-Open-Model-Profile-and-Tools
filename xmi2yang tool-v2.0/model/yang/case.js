/**
 * Created by Lenovo on 2016/7/22.
 */
/********************************************************************************************************
 * Name: UML to YANG Mapping Tool
 * Copyright 2015 CAICT (China Academy of Information and Communication Technology (former China Academy of Telecommunication Research)). All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 *
 * This tool is developed according to the mapping rules defined in onf2015.261_Mapping_Gdls_UML-YANG.08 by OpenNetworkFoundation(ONF) IMP group.
 *
 * file: \model\yang\feature.js
 *
 * The above copyright information should be included in all distribution, reproduction or derivative works of this software.
 *
 ****************************************************************************************************/
function Case(name, id){
    this.name=name;
    this.id = id;
    this.children = [];
}
Case.prototype.writeNode=function(layer){
    var PRE = '';
    var k = layer;
    while (k-- > 0) {
        PRE += '\t';
    }
    var name="case "+this.name;
    var children = "";
    if (this.children) {
        for (var i = 0; i < this.children.length; i++) {
            children += this.children[i].writeNode(layer + 1);
        }
    }

    var s = PRE + name + " {\r\n" +
        children + PRE + "}\r\n";
    return s;
}
module.exports = Case;