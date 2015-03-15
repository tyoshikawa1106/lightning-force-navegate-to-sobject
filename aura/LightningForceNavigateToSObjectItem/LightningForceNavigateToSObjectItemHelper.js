({
  gotoDetail : function(component) {
    var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": component.get("v.item.Id"),
          "slideDevName": "detail"
        });
        navEvt.fire();
  },
    gotoChatter : function(component) {
    var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": component.get("v.item.Id"),
          "slideDevName": "chatter"
        });
        navEvt.fire();
  },
    gotoRelated : function(component) {
    var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": component.get("v.item.Id"),
          "slideDevName": "related"
        });
        navEvt.fire();
  }
})