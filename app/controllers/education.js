angular.module("chmelovam").controller("educationConroller", function($scope) {
  $scope.education = [
    { date: "2016-2017", name: "Psychoterapeutické minimum - doplňkové teoretické studium pro terapeuty (ČIB)"},
    { date: "2016-2017", name: "Supervizní část psychoterapeutického výcviku (ČIB)"},
    { date: "2013-2015", name: "Základní psychoterapeutický výcvik v biosyntéze (ČIB)"},
    { date: "2011-2012", name: "Creative Gestalt koučing - výcvik v koučování (Gestalt Esence)"},
    { date: "2011-2012", name: "Somatic Coaching - výcvik v koučování celostním způsobem (ČIB)"},
    { date: "2011-2012", name: "Výcvik v Gestalt koučování - základní výcvik v koučování (Gestalt Esence)"},
    { date: "2011", name: "Od fragmentace k integraci – Aspekty práce s traumatem v biosyntéze (ČIB)"},
    { date: "2009-2010", name: "Gestalt přístup v osobním a pracovním prostředí (IVTG)"}
  ]
  $scope.exp = [
    { date: "2000-dosud",
      name: "Alfa H.S., nezisková organizace",
      desc: "koučing, metodická a lektorská práce na vzdělávacích programech, poradenská a terapeutická podpora  v oblasti prevence syndromu vyhoření a upevnění  psychické stability dlouhodobě pečujících osob"
    },
    { date: "2012-dosud",
      name: "Vlastní terapeutická a koučovací praxe",
      desc: "metodická tvorba a lektorování kurzů, nácviků měkkých dovedností atd."
    },
    { date: "2012-2015",
      name: "PedfUK",
      desc: "pedagogická činnost pro katedru speciální pedagogiky"
    },
    { date: "2013-2017",
      name: "Redakční činnost pro nakladatelstvím Fórum",
      desc: "časopis Poradce ředitelky mateřské školy a Integrace inkluze – zaměření na podporu psychické stability, komunikační dovednosti a prevenci syndromu vyhoření pro učitele, lektorská činnost pro učitele   "
    },
    { date: "2018",
      name: "Redakční  činnost pro nakladatelství  Wolters Kluwer",
      desc: "spolupráce pro kompletní portfolio časopisů pro školy a školská zařízení"
    },
  ]
})
