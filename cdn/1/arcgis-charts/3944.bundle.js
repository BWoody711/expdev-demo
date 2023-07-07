"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[3944],{3944:(e,a,t)=>{t.r(a),t.d(a,{additionalProperty:()=>g,anyOfValues:()=>C,bubbleChartValidateMsg:()=>$,default:()=>I,defaultError:()=>o,defaultInvalidChart:()=>s,duplicateSeriesID:()=>v,enumValues:()=>k,gaugeCannotExceedLimit:()=>x,histogramEmptyField:()=>j,invalidSeriesType:()=>L,layerLoadFailure:()=>d,lineChartMarkersCannotExceedLimit:()=>V,lineChartSeriesAndMarkersCannotExceedLimit:()=>E,maxItems:()=>c,minItems:()=>y,minLength:()=>h,negativeValueInDataForLogTransformation:()=>l,negativeValueInDataForSqrtTransformation:()=>m,nonNumericAggregation:()=>u,or:()=>P,pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:()=>z,pieChartSlicesCannotExceedLimit:()=>S,queryError:()=>f,requiredProperty:()=>p,threePlusSeriesBarCountCannotExceedLimit:()=>r,twoSeriesBarCountCannotExceedLimit:()=>i,uniqueSeriesBarCountCannotExceedLimit:()=>n,whiteSpacePattern:()=>b});const o="Pri načítavaní grafu sa vyskytla chyba.",n="V tomto grafe je celkom ${ elementCount } pruhov. Pruhové grafy s jednou sériou sú obmedzené na ${ totalLimit } pruhov. Vyberte pole kategórie s menším počtom jedinečných hodnôt alebo na svoje dáta použite filter.",i="Stĺpcové grafy s dvoma sériami sú obmedzené na ${ totalLimit } stĺpcov alebo ${ seriesLimit } stĺpcov na sériu. Vyberte pole kategória s menším počtom jedinečných hodnôt alebo na svoje údaje použite filter.",r="Stĺpcové grafy s troma alebo viac sériami sú obmedzené na ${ totalLimit } stĺpcov alebo ${ seriesLimit } stĺpcov na sériu. Vyberte pole kategória s menším počtom jedinečných hodnôt alebo na svoje údaje použite filter.",s="Pri vytváraní grafu sa vyskytla chyba.",l="Nie je možné aplikovať Log transformáciu na záporné alebo nulové hodnoty.",m="Nie je možné aplikovať Square Root transformáciu na záporné hodnoty.",d="Pri načítavaní vrstvy sa vyskytla chyba. URL = ${ url }. ID položky portálu = ${ portalItemId }.",v="${ dataPath } musí byť jedinečný. Séria pomenovaná ${ seriesName } má id (${ seriesID }), ktoré už je používané inou sériou.",u="${ dataPath } nemôže vykonávať agregáciu bez počtov na nečíselnom poli.",p="${ dataPath } chýba vlastnosť s názvom ${ missingProperty }.",h="${ dataPath } musí byť kratší než ${ limit } znakov.",y="${ dataPath } nesmie mať menej než ${ limit } položiek.",c="${ dataPath } nesmie mať viac než ${ limit } položiek.",b="${ dataPath } musí mať aspoň jeden znak bez prázdneho miesta.",g="${ dataPath } nesmie mať ${ additionalProperty }.",k="${ dataPath } musí byť rovné jednej z týchto povolených hodnôt: ${ allowedValues }.",C="${ dataPath } sa musí zhodovať so schémou jednej z týchto: ${ schemaOptions }.",$="Rozptylové diagramy s proporcionálnymi symbolmi nie sú podporované. Bola aplikovaná predvolená veľkosť symbolu.",f="Zlyhanie načítania vstupných údajov.",j="Histogramy vyžadujú aspoň dve numerické hodnoty.",L="Očakávaný typ série pri indexe ${ seriesIndex } je '${ expectedType }', ale namiesto toho bolo prijaté '${ receivedType }'",P="alebo",z="Uistite sa, že súčet vybraných číselných polí vráti všetky hodnoty kladné alebo všetky hodnoty záporné.",S="V tomto grafe je celkom ${ sliceCount } segmentov. Koláčové grafy sú obmedzené na ${ totalLimit } segmentov. Vyberte pole kategórie s menším počtom jedinečných hodnôt, pridajte menej číselných polí alebo použite na vaše dáta filter.",x="Meradlá založené na prvkoch majú limit ${ totalLimit } prvkov. Filtrovať dáta.",E="V tomto grafe sa nachádza celkom ${ seriesCount } sérií a ${ elementCount } dátových bodov. Líniové grafy sú obmedzené na ${ seriesLimit } série a ${ totalLimit } dátové body. Znížte počet sérií a/alebo reagregujte alebo filtrujte vaše dáta.",V="Líniové grafy sú obmedzené na ${ totalLimit } dátových bodov. Filtrujte alebo znova agregujte dáta a skúste to znova.";var I={defaultError:o,uniqueSeriesBarCountCannotExceedLimit:n,twoSeriesBarCountCannotExceedLimit:i,threePlusSeriesBarCountCannotExceedLimit:r,defaultInvalidChart:"Pri vytváraní grafu sa vyskytla chyba.",negativeValueInDataForLogTransformation:"Nie je možné aplikovať Log transformáciu na záporné alebo nulové hodnoty.",negativeValueInDataForSqrtTransformation:"Nie je možné aplikovať Square Root transformáciu na záporné hodnoty.",layerLoadFailure:d,duplicateSeriesID:v,nonNumericAggregation:u,requiredProperty:p,minLength:h,minItems:y,maxItems:c,whiteSpacePattern:b,additionalProperty:"${ dataPath } nesmie mať ${ additionalProperty }.",enumValues:k,anyOfValues:C,bubbleChartValidateMsg:$,queryError:f,histogramEmptyField:"Histogramy vyžadujú aspoň dve numerické hodnoty.",invalidSeriesType:L,or:"alebo",pieChartCannotHaveMixtureOfPositiveAndNegativeSlices:"Uistite sa, že súčet vybraných číselných polí vráti všetky hodnoty kladné alebo všetky hodnoty záporné.",pieChartSlicesCannotExceedLimit:S,gaugeCannotExceedLimit:x,lineChartSeriesAndMarkersCannotExceedLimit:E,lineChartMarkersCannotExceedLimit:V}}}]);