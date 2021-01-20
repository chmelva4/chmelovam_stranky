angular.module("chmelovam").directive("detailCard", function() {
  var directive = {};
  directive.restrict = 'E';
  directive.templateUrl = "app/views/detail_card.html";
  directive.scope = {
     title: "=",
     header: "="
  }
  directive.transclude = {
    'detail-card-img': '?detailCardImg',
    'detail-card-content': 'detailCardContent'
  }
  return directive;
})
