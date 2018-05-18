var allbuttons=$('#buttons>span')
console.log(allbuttons)
var i=0
for(let i =0;i<allbuttons.length;i++)
  {
      $(allbuttons[i]).on('click',function(x)
      {
      var index = $(x.currentTarget).index()
      var p = index * -920
      $('#imgs').css(
        {
          transform: 'translate('+ p +'px)'
        })
      })
  }
